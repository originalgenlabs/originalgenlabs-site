"use client";

import { useEffect, useMemo, useState } from "react";
import { ArrowUpRight, Check, Copy } from "lucide-react";

export function CallbackClient() {
  const [copied, setCopied] = useState(false);
  const appUrl = useMemo(() => typeof window === "undefined" ? "skypad://oauth/callback" : `skypad://oauth/callback${window.location.search}${window.location.hash}`, []);

  useEffect(() => {
    const timer = window.setTimeout(() => { window.location.href = appUrl; }, 250);
    return () => window.clearTimeout(timer);
  }, [appUrl]);

  async function copyLink() {
    await navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  return <main className="callback-main"><section className="callback-panel" aria-live="polite"><div className="callback-icon"><ArrowUpRight size={25} /></div><p className="eyebrow">SkyPad authorization</p><h1>Opening SkyPad…</h1><p>Authorization complete. Returning you to the app.</p><div className="callback-actions"><a className="button button-primary" href={appUrl}>Open SkyPad <ArrowUpRight size={17} /></a><button className="button button-secondary" type="button" onClick={copyLink}>{copied ? <Check size={17} /> : <Copy size={17} />}{copied ? "Copied" : "Copy Link"}</button></div><p className="copy-status">{copied ? "Authorization link copied." : "If SkyPad does not open, use one of the options above."}</p></section></main>;
}
