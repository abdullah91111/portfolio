"use client";

import { useState } from "react";
import { Copy, Mail, Check } from "lucide-react";
import { portfolio } from "~/portfolio.config";

export function EmailActions({ compact = false }: { compact?: boolean }) {
  const [message, setMessage] = useState("");
  const [copied, setCopied] = useState(false);
  async function copy() {
    try {
      await navigator.clipboard.writeText(portfolio.email);
      setCopied(true);
      setMessage("Email address copied.");
    } catch {
      setMessage("Copy was unavailable. Select the email address below to copy it.");
    }
  }
  const button = "inline-flex items-center gap-2 rounded-md border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 px-3 py-2 text-xs hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors";
  return <div className={compact ? "relative" : "space-y-3"}>
    <div className="flex flex-wrap gap-2">
      <a href={`mailto:${portfolio.email}`} className={button}><Mail size={14} />Open email app</a>
      <button type="button" onClick={copy} className={button}>{copied ? <Check size={14} /> : <Copy size={14} />}{copied ? "Copied!" : "Copy email"}</button>
    </div>
    {!compact && <p className="select-all text-sm text-zinc-600 dark:text-zinc-400 break-all">{portfolio.email}</p>}
    <p aria-live="polite" role="status" className={compact ? "sr-only" : "text-xs text-zinc-500 min-h-4"}>{message}</p>
    {compact && message.startsWith("Copy was") && <a className="text-xs underline" href={`mailto:${portfolio.email}`}>{portfolio.email}</a>}
  </div>;
}
