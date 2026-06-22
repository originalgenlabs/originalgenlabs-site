import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = { title: "Apps", description: "Explore apps from Original Gen Labs.", alternates: { canonical: "/apps" } };

export default function AppsPage() {
  return <main><header className="page-hero"><div className="shell"><p className="eyebrow">Apps</p><h1>Focused by design.</h1><p>A small catalog, held to a high standard.</p></div></header><section className="section apps-featured"><div className="shell app-showcase"><div className="app-copy"><p className="eyebrow">SkyPad</p><h2>Bluesky,<br />refined for iPad.</h2><p>A fast, focused client built around media and discovery.</p><Link className="text-link" href="/apps/skypad">View SkyPad <ArrowRight size={17} /></Link></div><div className="app-art"><Image src="/images/skypad-hero.png" alt="SkyPad on iPad" fill sizes="(max-width: 900px) 100vw, 55vw" /></div></div></section><section className="section section-dark"><div className="shell"><p className="eyebrow">Future apps</p><div className="future-grid"><article className="future-card"><span>In exploration</span><h3>More thoughtful software is ahead.</h3></article><article className="future-card"><span>Our standard</span><h3>A clear reason to exist.</h3></article></div></div></section></main>;
}
