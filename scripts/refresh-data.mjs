import { readFile, writeFile } from "node:fs/promises";
import { execFileSync } from "node:child_process";

const root = new URL("../", import.meta.url);
const config = await readFile(new URL("portfolio.config.ts", root), "utf8");
const github = config.match(/github: "([^"]+)"/)?.[1];
const leetcode = config.match(/leetcode: "([^"]+)"/)?.[1];
if (!github || !leetcode) throw new Error("Profile handles are missing");
const save = (file, value) => writeFile(new URL(`src/data/${file}`, root), JSON.stringify(value, null, 2) + "\n");
async function graphql(query, variables) {
  if (!process.env.GH_TOKEN && !process.env.GITHUB_TOKEN) {
    // gh keeps the credential in its own store; never print or persist it.
    return JSON.parse(execFileSync("gh", ["api", "graphql", "--input", "-"], {
      input: JSON.stringify({ query, variables }), encoding: "utf8", timeout: 25000, windowsHide: true,
    }));
  }
  const r = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: { Authorization: `Bearer ${process.env.GH_TOKEN || process.env.GITHUB_TOKEN}`, "Content-Type": "application/json" },
    body: JSON.stringify({query, variables}), signal: AbortSignal.timeout(20000),
  });
  if (!r.ok) throw new Error(`GitHub HTTP ${r.status}`);
  const value = await r.json();
  if (value.errors) throw new Error("GitHub query failed");
  return value;
}

try {
  const r = await graphql(`query($login:String!){user(login:$login){contributionsCollection{contributionCalendar{totalContributions weeks{contributionDays{date contributionCount contributionLevel color}}}}}}`, {login:github});
  const calendar = r.data?.user?.contributionsCollection?.contributionCalendar;
  if (!calendar?.weeks?.length) throw new Error("Missing contribution calendar");
  await save("github-snapshot.json",{username:github,updatedAt:new Date().toISOString(),calendar});
  console.log("Updated GitHub contribution snapshot.");
} catch (e) {
  console.warn(`GitHub refresh unavailable (${e.name}); retaining the dated snapshot.`);
}
try {
  const query = `query($username:String!){
    matchedUser(username:$username){username profile{ranking} submitStatsGlobal{acSubmissionNum{difficulty count}} userCalendar{streak totalActiveDays submissionCalendar}}
    userContestRanking(username:$username){rating attendedContestsCount globalRanking topPercentage}
    userContestRankingHistory(username:$username){attended rating}
    allQuestionsCount{difficulty count}
  }`;
  const r = await fetch("https://leetcode.com/graphql", {
    method:"POST", headers:{"Content-Type":"application/json",Referer:"https://leetcode.com"},
    body:JSON.stringify({query,variables:{username:leetcode}}), signal:AbortSignal.timeout(20000),
  });
  if (!r.ok) throw new Error(`LeetCode HTTP ${r.status}`);
  const result = await r.json();
  const user = result.data?.matchedUser;
  if (result.errors || user?.username?.toLowerCase() !== leetcode.toLowerCase()) throw new Error("Invalid profile response");
  const buckets = user.submitStatsGlobal.acSubmissionNum;
  const pick = key => buckets.find(b => b.difficulty.toLowerCase() === key)?.count ?? 0;
  const total = key => result.data.allQuestionsCount?.find(b => b.difficulty.toLowerCase() === key)?.count ?? null;
  const contest = result.data.userContestRanking;
  const ratings = (result.data.userContestRankingHistory ?? [])
    .filter(entry => entry.attended && Number.isFinite(entry.rating))
    .map(entry => entry.rating);
  if (contest?.attendedContestsCount > 0 && Number.isFinite(contest.rating)) ratings.push(contest.rating);
  await save("leetcode-snapshot.json", {
    username:user.username, updatedAt:new Date().toISOString(),
    solved:{all:pick("all"),easy:pick("easy"),medium:pick("medium"),hard:pick("hard")},
    totals:{easy:total("easy"),medium:total("medium"),hard:total("hard")},
    ranking:user.profile.ranking,
    contests:result.data.userContestRanking?.attendedContestsCount ?? 0,
    rating:result.data.userContestRanking?.rating ?? null,
    peakRating:ratings.length ? Math.max(...ratings) : null,
    topPercentage:contest?.attendedContestsCount > 0 ? contest.topPercentage ?? null : null,
    streak:user.userCalendar.streak,activeDays:user.userCalendar.totalActiveDays,
  });
  console.log("Updated LeetCode snapshot.");
} catch(e) {
  console.warn(`LeetCode refresh unavailable (${e.name}); retaining the dated snapshot.`);
}
