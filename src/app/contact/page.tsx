import { PageShell } from "@/components/PageShell";
import { EmailActions } from "@/components/EmailActions";
import { portfolio } from "~/portfolio.config";
export const metadata = { title: "Contact | " + portfolio.name };
export default function Contact() {
 return <PageShell title="Say hello" subtitle="Ideas, collaborations, or a good conversation.">
  <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">Have an interesting AI problem or something you would like to build together? I would love to hear about it.</p>
  <EmailActions />
  <p className="text-xs text-zinc-500">The email button opens your configured mail app. You can also copy the address into your preferred email service.</p>
 </PageShell>;
}
