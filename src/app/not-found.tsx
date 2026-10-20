import Link from "next/link";
import { PageShell } from "@/components/PageShell";
export default function NotFound() {
  return <PageShell title="Page not found" subtitle="This address does not lead anywhere yet.">
    <Link href="/" className="text-sm underline underline-offset-4">Return to the portfolio</Link>
  </PageShell>;
}
