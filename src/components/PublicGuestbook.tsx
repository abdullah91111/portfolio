import { Guestbook } from "@/components/Guestbook";

/** Read the live discussion on the homepage; authentication is only needed to write. */
export function PublicGuestbook() {
  return (
    <div className="py-3 space-y-5">
      <p className="text-sm leading-relaxed text-zinc-500">
        A little space for kind words and good conversations. Read the notes below,
        or sign in with GitHub to leave one.
      </p>
      <Guestbook />
    </div>
  );
}
