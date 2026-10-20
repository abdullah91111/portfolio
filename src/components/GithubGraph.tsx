import snapshot from "@/data/github-snapshot.json";
import { portfolio } from "~/portfolio.config";
const levels:Record<string,string> = {NONE:"bg-zinc-100 dark:bg-zinc-900",FIRST_QUARTILE:"bg-green-200 dark:bg-green-950",SECOND_QUARTILE:"bg-green-400 dark:bg-green-800",THIRD_QUARTILE:"bg-green-600",FOURTH_QUARTILE:"bg-green-800 dark:bg-green-400"};
export function GithubGraph() {
 const {calendar}=snapshot;
 return <div id="github-activity" className="scroll-mt-24 py-4 space-y-3">
 <div className="flex justify-between items-baseline gap-3"><h3 className="text-sm font-semibold">{calendar.totalContributions.toLocaleString("en-US")} contributions in the last year</h3><a className="text-xs text-zinc-500 underline" href={`https://github.com/${portfolio.handles.github}`} target="_blank" rel="noopener noreferrer">GitHub ↗</a></div>
 <div className="overflow-x-auto pb-2" tabIndex={0} role="region" aria-label="GitHub contribution calendar; scroll horizontally to see the full year">
 <div className="min-w-[490px] grid grid-flow-col auto-cols-fr gap-[3px]">
 {calendar.weeks.map((week,i)=><div key={i} className="flex flex-col gap-[3px]">
 <span className="text-[9px] h-4 text-zinc-500">{i%5===0 ? new Date(week.contributionDays[0].date+"T00:00:00Z").toLocaleString("en-US",{month:"short",timeZone:"UTC"}) : ""}</span>
 {week.contributionDays.map(day=><div key={day.date} className={`aspect-square rounded-[2px] ${levels[day.contributionLevel]||levels.NONE}`} role="img" aria-label={`${day.contributionCount} contributions on ${day.date}`} title={`${day.date}: ${day.contributionCount} contributions`}/>)}
 </div>)}</div></div>
 <div className="flex justify-between gap-2 text-[10px] text-zinc-500"><span>Updated {snapshot.updatedAt.slice(0,10)}</span><span className="flex items-center gap-1">Less {Object.values(levels).map(c=><i key={c} className={`w-2 h-2 rounded-sm ${c}`} />)} More</span></div>
 </div>;
}
