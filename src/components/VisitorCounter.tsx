"use client";

import { useState, useSyncExternalStore } from "react";
const subscribe = () => () => {};
const isLive = () => !["localhost", "127.0.0.1"].includes(window.location.hostname);
const serverSnapshot = () => false;

/** A shared hosted hit counter. Local previews never increase the live count. */
export function VisitorCounter() {
  const live = useSyncExternalStore(subscribe, isLive, serverSnapshot);
  const [failed, setFailed] = useState(false);
  return <div className="min-h-10 py-3 text-center text-[11px] text-zinc-500">
    {live && !failed ? <a href="https://hits.sh/abdullah91111.github.io/portfolio/" target="_blank" rel="noopener noreferrer" title="Shared page views, not unique visitors. Powered by Hits.">
      {/* A dynamic remote badge must not be copied into Next's image cache. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="https://hits.sh/abdullah91111.github.io/portfolio.svg?label=page%20views&color=52525b&labelColor=27272a" alt="Portfolio page-view count" height={20} className="inline-block h-5" onError={()=>setFailed(true)} referrerPolicy="no-referrer" />
    </a> : <span>{failed ? "Page-view counter unavailable" : "Page views · counting starts on the live site"}</span>}
  </div>;
}
