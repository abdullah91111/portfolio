"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import { portfolio } from "~/portfolio.config";

/** The live Discussion is the sole source of comments, including deletions. */
export function Guestbook() {
  const host = useRef<HTMLDivElement>(null);
  const { resolvedTheme } = useTheme();
  useEffect(() => {
    const container = host.current;
    if (!container || !resolvedTheme || container.childNodes.length > 0) return;
    const script = document.createElement("script");
    script.src = "https://giscus.app/client.js";
    script.async = true;
    script.crossOrigin = "anonymous";
    const config = {
      repo: portfolio.giscus.repo,
      "repo-id": portfolio.giscus.repoId,
      category: portfolio.giscus.category,
      "category-id": portfolio.giscus.categoryId,
      mapping: "number",
      term: String(portfolio.giscus.discussionNumber),
      "reactions-enabled": "1",
      "emit-metadata": "0",
      "input-position": "bottom",
      theme: resolvedTheme === "dark" ? "dark" : "light",
      lang: "en",
      loading: "lazy",
    };
    for (const [key,value] of Object.entries(config)) script.setAttribute(`data-${key}`,value);
    container.appendChild(script);
  }, [resolvedTheme]);
  useEffect(() => {
    const container = host.current;
    return () => { container?.replaceChildren(); };
  }, []);
  useEffect(() => {
    host.current?.querySelector("iframe")?.contentWindow?.postMessage(
      { giscus: { setConfig: { theme: resolvedTheme === "dark" ? "dark" : "light" } } },
      "https://giscus.app",
    );
  }, [resolvedTheme]);
  return <div className="space-y-4">
    <div ref={host} className="min-h-40" />
    <p className="text-xs text-zinc-500">Widget unavailable? <a href={portfolio.giscus.discussionUrl} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">Read or sign the guestbook on GitHub ↗</a></p>
  </div>;
}
