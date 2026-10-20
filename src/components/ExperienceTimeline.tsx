"use client";
import { experiences } from "@/data/experienceData";
export function ExperienceTimeline({onSelect}:{onSelect:(index:number)=>void}) {
 return <nav aria-label="Experience timeline" className="grid gap-2 py-5">
 {experiences.map((role,index)=><button key={role.title} onClick={()=>onSelect(index)} className="flex items-center justify-between gap-3 rounded-md border border-zinc-200 dark:border-zinc-800 px-3 py-2 text-left hover:bg-zinc-50 dark:hover:bg-zinc-900">
 <span className="text-sm font-medium">{role.title}</span><span className="text-[10px] text-zinc-500">{role.dates}</span>
 </button>)}</nav>;
}
