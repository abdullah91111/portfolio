import Link from "next/link";
/** Comments stay in the live widget so deleted notes never persist in a build snapshot. */
export function PublicGuestbook() {
 return <div className="py-3 space-y-3"><p className="text-sm leading-relaxed text-zinc-500">A little space for kind words and good conversations. Leave a note, share an idea, or just say hello.</p>
 <Link href="/guestbook" className="inline-block text-sm underline underline-offset-4">Read & sign the guestbook ↗</Link></div>;
}
