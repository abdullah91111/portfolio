import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { CommandMenu } from "./command-menu";
import { FooterBackground } from "./FooterBackground";
import { CurrentTime } from "./CurrentTime";

export function PageShell({ title, subtitle, children }: { title: string; subtitle: string; children: React.ReactNode }) {
  return <div className="relative min-h-screen overflow-x-hidden bg-white dark:bg-black">
    <div className="blueprint-column relative mx-auto min-h-screen w-full md:w-[40%]">
      <div className="relative h-[22vh] border-b border-dotted border-zinc-300 dark:border-zinc-800">
        <FooterBackground /><div className="absolute bottom-3 right-2"><CurrentTime /></div>
      </div>
      <header className="flex h-28 items-center justify-between gap-3 px-4 border-b border-dotted border-zinc-300 dark:border-zinc-800">
        <div className="flex items-center gap-4">
          <Link href="/" aria-label="Back home" className="rounded-md bg-zinc-100 dark:bg-zinc-900 p-2"><ArrowLeft size={16}/></Link>
          <div><h1 className="text-xl font-bold tracking-tight">{title}</h1><p className="text-xs text-zinc-500 mt-1">{subtitle}</p></div>
        </div>
        <div className="flex items-center gap-3"><CommandMenu/><ThemeToggle/></div>
      </header>
      <main id="main" className="px-4 py-7 space-y-7">{children}</main>
    </div>
  </div>;
}
