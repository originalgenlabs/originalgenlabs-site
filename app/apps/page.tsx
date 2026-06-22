import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = { title: "Apps", description: "Explore apps from Original Gen Labs.", alternates: { canonical: "/apps" } };

export default function AppsPage() {
  return <main><header className="page-hero"><div className="shell"><p className="eyebrow">Apps</p><h1>Small catalog.<br />High standard.</h1><p>Original Gen Labs builds focused, premium software. SkyPad is first; future releases will arrive when they are ready.</p></div></header><section className="section"><div className="shell app-showcase"><div className="app-copy"><p className="eyebrow">Available first</p><h2>SkyPad</h2><p>A native iPad experience for reading, discovering, watching, and connecting on Bluesky.</p><Link className="button button-primary" href="/apps/skypad">View SkyPad <ArrowRight size={17} /></Link></div><div className="app-art"><Image src="/images/skypad-hero.png" alt="SkyPad on iPad" fill sizes="(max-width: 900px) 100vw, 55vw" /></div></div></section><section className="section section-dark"><div className="shell"><p className="eyebrow">Future apps</p><div className="future-grid"><article className="future-card"><span>In exploration</span><h3>More thoughtful software is ahead.</h3></article><article className="future-card"><span>No filler</span><h3>Each app will have a clear reason to exist.</h3></article></div></div></section></main>;
}
