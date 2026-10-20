import snapshot from "@/data/leetcode-snapshot.json";
import { portfolio } from "~/portfolio.config";

type Difficulty = "easy" | "medium" | "hard";
type LeetCodeStats = {
  updatedAt: string | null;
  solved: Record<Difficulty | "all", number>;
  totals?: Partial<Record<Difficulty, number | null>>;
  peakRating?: number | null;
  topPercentage?: number | null;
  contests: number;
  activeDays: number;
};
const number = (value: number) => value.toLocaleString("en-US");

export function DsaStats() {
  const stats: LeetCodeStats = snapshot;
  const hasContests = stats.contests > 0;
  const metrics = [
    { label: "Peak rating", value: hasContests && stats.peakRating != null ? number(Math.round(stats.peakRating)) : "—" },
    { label: "Solved", value: number(stats.solved.all) },
    { label: "Contest rank", value: hasContests && stats.topPercentage != null ? `Top ${stats.topPercentage.toFixed(2)}%` : "—" },
    { label: "Active days", value: number(stats.activeDays) },
  ];

  return (
    <div className="pt-5 pb-2">
      <div className="rounded-xl border border-zinc-200 p-1 dark:border-zinc-800/70">
        <div className="overflow-hidden rounded-lg border border-zinc-200/60 bg-zinc-50/70 dark:border-zinc-800/40 dark:bg-[#09090b]">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-dotted border-zinc-300 px-4 py-3 dark:border-zinc-800">
            <h3 className="text-sm font-semibold">LeetCode</h3>
            <a href={`https://leetcode.com/u/${portfolio.handles.leetcode}/`} className="text-xs text-zinc-500 transition-colors hover:text-zinc-900 dark:hover:text-zinc-200" target="_blank" rel="noopener noreferrer">
              @{portfolio.handles.leetcode} ↗
            </a>
          </div>
          {stats.updatedAt ? (
            <>
              <dl className="grid grid-cols-2 border-b border-dotted border-zinc-300 xl:grid-cols-4 dark:border-zinc-800">
                {metrics.map(({ label, value }, index) => (
                  <div key={label} className={`flex min-w-0 flex-col px-3 py-3 ${index % 2 === 0 ? "border-r" : "xl:border-r"} ${index === 3 ? "xl:border-r-0" : ""} ${index < 2 ? "border-b xl:border-b-0" : ""} border-dotted border-zinc-300 dark:border-zinc-800`}>
                    <dt className="mt-1 text-[9px] uppercase tracking-wide text-zinc-500">{label}</dt>
                    <dd className="-order-1 whitespace-nowrap text-base font-bold tracking-tight text-zinc-900 dark:text-zinc-100">{value}</dd>
                  </div>
                ))}
              </dl>
              <div className="space-y-3 px-4 py-4">
                {(["easy", "medium", "hard"] as const).map(difficulty => {
                  const solved = stats.solved[difficulty];
                  const total = stats.totals?.[difficulty];
                  const available = typeof total === "number" && total > 0;
                  const percent = available ? Math.min(100, Math.max(0, solved / total * 100)) : 0;
                  return (
                    <div key={difficulty} className="grid grid-cols-[48px_minmax(0,1fr)_70px] items-center gap-3">
                      <span className="text-[9px] uppercase text-zinc-500">{difficulty}</span>
                      <div role={available ? "progressbar" : undefined} aria-label={`${difficulty} problems solved`} aria-valuemin={available ? 0 : undefined} aria-valuemax={available ? total : undefined} aria-valuenow={available ? solved : undefined} className="h-1 overflow-hidden rounded-full bg-zinc-200 dark:bg-zinc-800">
                        <div className="h-full rounded-full bg-zinc-800 dark:bg-zinc-100" style={{ width: `${percent}%` }} />
                      </div>
                      <span className="text-right text-[11px] tabular-nums text-zinc-600 dark:text-zinc-400">
                        {number(solved)} <span className="text-zinc-400 dark:text-zinc-600">/ {available ? number(total) : "—"}</span>
                      </span>
                    </div>
                  );
                })}
              </div>
              <p className="px-4 pb-3 text-[10px] text-zinc-500">
                {!hasContests && "No contests yet · "}Updated {stats.updatedAt.slice(0, 10)}
              </p>
            </>
          ) : (
            <p className="p-4 text-xs text-zinc-500">Stats temporarily unavailable. View the profile for current activity.</p>
          )}
        </div>
      </div>
    </div>
  );
}
