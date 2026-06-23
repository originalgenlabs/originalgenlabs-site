"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { Check, Copy } from "lucide-react";

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

  return <main className="callback-main"><section className="callback-panel" aria-live="polite"><div className="callback-orb" aria-hidden="true"><Image src="/apps/skypad/skypad-bird-logo.png" alt="" width={768} height={768} priority /></div><p className="eyebrow">SKYPAD AUTHORIZATION</p><p className="callback-title-status">Returning to</p><h1 className="callback-title-brand">SkyPad</h1><p className="callback-subtitle">Authorization is complete. SkyPad will reopen automatically.</p><p className="callback-helper">If SkyPad does not open, use one of the options below.</p><div className="callback-actions"><a className="button button-primary" href={appUrl}>Open SkyPad</a><button className="button button-secondary" type="button" onClick={copyLink}>{copied ? <Check size={17} /> : <Copy size={17} />}{copied ? "Copied" : "Copy Link"}</button></div><p className="copy-status">{copied ? "Authorization link copied." : ""}</p></section></main>;
}
