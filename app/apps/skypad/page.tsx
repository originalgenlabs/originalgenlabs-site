import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { skypadFeatures } from "@/lib/site";

export const metadata: Metadata = { title: "SkyPad", description: "A premium iPad client for Bluesky.", alternates: { canonical: "/apps/skypad" }, openGraph: { title: "SkyPad | Original Gen Labs", description: "A premium iPad client for Bluesky.", url: "/apps/skypad" } };

export default function SkyPadPage() {
  return <main><section className="product-hero"><div className="shell product-hero-grid"><div><p className="eyebrow">SkyPad for iPad</p><h1>SkyPad</h1><p>A premium iPad client for Bluesky. Built for signal, speed, discovery, and a native iPad experience.</p><div className="actions"><Link className="button button-primary" href="/apps/skypad/support">Get support <ArrowRight size={17} /></Link><Link className="button button-secondary" href="/apps/skypad/privacy">Privacy</Link></div></div><div className="product-image"><Image src="/images/skypad-hero.png" alt="SkyPad interface displayed on an iPad" fill priority sizes="(max-width: 900px) 100vw, 55vw" /></div></div></section><section className="statement section-white"><div className="shell"><p>Following, Discover, Video, Trends, News, and Chats—composed as one clear, media-first space for the open social web.</p></div></section><section className="section"><div className="shell"><div className="detail-grid">{skypadFeatures.map((feature) => <article className="detail" key={feature.title}><h3>{feature.title}</h3><p>{feature.description}</p></article>)}</div><p className="disclaimer">SkyPad is an independent client and is not affiliated with Bluesky PBLLC.</p></div></section></main>;
}
