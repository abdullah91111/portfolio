import { education } from "@/data/educationData";
export function Education() { return <div className="py-5 grid gap-4">
 <div className="rounded-md border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 p-4">
 <h3 className="font-bold text-sm">{education.school}</h3><p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{education.degree}</p>
 <p className="mt-2 text-xs text-zinc-500">{education.dates} · GPA {education.cgpa} · {education.location}</p></div>
 <div className="text-xs text-zinc-500">Previously: A Levels · Arab Unity School · 2018–2019</div>
 </div>; }
