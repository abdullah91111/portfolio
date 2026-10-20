"use client";

import { useEffect, useRef, useState } from "react";
import Image from "@/components/PortfolioImage";

export function ProfileAvatar() {
  const [waving, setWaving] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  function wave() {
    if (timer.current) clearTimeout(timer.current);
    setWaving(true);
    timer.current = setTimeout(() => setWaving(false), 2400);
  }

  function rest() {
    if (timer.current) clearTimeout(timer.current);
    setWaving(false);
  }

  useEffect(() => () => {
    if (timer.current) clearTimeout(timer.current);
  }, []);

  return (
    <button
      type="button"
      aria-label="Say hello to Abdullah — animate his illustrated portrait"
      title="Hover or tap to say hi"
      onPointerEnter={wave}
      onPointerLeave={rest}
      onFocus={wave}
      onBlur={rest}
      onClick={wave}
      className="shrink-0 rounded-[6px] border-[1.5px] border-black/30 p-[3px] sm:rounded-[8px] dark:border-white/[0.15]"
    >
      <span className="relative block size-16 overflow-hidden rounded-[3px] bg-[#dedbd5] sm:size-20 sm:rounded-[5px]">
        <Image
          src="/abdullah-wave-sprite.webp"
          alt=""
          width={512}
          height={512}
          preload
          sizes="160px"
          className={`avatar-sprite ${waving ? "avatar-sprite-waving" : ""}`}
        />
      </span>
    </button>
  );
}
