import { PageShell } from "@/components/PageShell";
import { Guestbook } from "@/components/Guestbook";
import { portfolio } from "~/portfolio.config";
export const metadata = {title:`Guestbook | ${portfolio.name}`};
export default function GuestbookPage() {
 return <PageShell title="Guestbook" subtitle="A few words from people passing by.">
 <p className="text-sm text-zinc-600 dark:text-zinc-400">Leave a thought, a hello, or something interesting you are building. Sign in with GitHub to leave a note.</p>
 <p className="text-xs text-zinc-500">Comments are public immediately. Please keep things friendly; unwanted comments may be removed.</p>
 <Guestbook />
 </PageShell>;
}
