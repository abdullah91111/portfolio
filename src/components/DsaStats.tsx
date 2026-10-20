import snapshot from "@/data/leetcode-snapshot.json";
import { portfolio } from "~/portfolio.config";
export function DsaStats() {
 const s=snapshot;
 return <div className="pt-5 pb-2">
 <div className="rounded-md border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 p-4">
 <div className="flex items-center justify-between"><h3 className="font-semibold text-sm">LeetCode</h3><a href={`https://leetcode.com/u/${portfolio.handles.leetcode}/`} className="text-xs text-zinc-500 underline" target="_blank" rel="noopener noreferrer">{portfolio.handles.leetcode} ↗</a></div>
 {s.updatedAt ? <><div className="grid grid-cols-4 gap-2 mt-4">{Object.entries(s.solved).map(([key,value])=><div key={key}><p className="font-bold text-xl">{value}</p><p className="text-[10px] uppercase text-zinc-500">{key==="all"?"Solved":key}</p></div>)}</div>
 <div className="mt-4 flex flex-wrap gap-3 text-xs text-zinc-500"><span>{s.activeDays} active days</span><span>{s.streak} day streak</span><span>{s.contests} contests</span>{s.rating!==null && s.contests>0 && <span>Rating {Math.round(s.rating)}</span>}</div>
 <p className="mt-3 text-[10px] text-zinc-500">Updated {String(s.updatedAt).slice(0,10)} · public profile snapshot</p></> : <p className="mt-3 text-xs text-zinc-500">Stats temporarily unavailable. View the profile for current activity.</p>}
 </div></div>;
}
