import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Compass, MessageCircle, Tablet, Video } from "lucide-react";
import { skypadFeatures } from "@/lib/site";

export const metadata: Metadata = { title: "SkyPad", description: "A premium iPad client for Bluesky.", alternates: { canonical: "/apps/skypad" }, openGraph: { title: "SkyPad | Original Gen Labs", description: "A premium iPad client for Bluesky.", url: "/apps/skypad" } };

export default function SkyPadPage() {
  const icons = [Tablet, Compass, Video, MessageCircle];
  return <main><section className="product-hero"><div className="product-hero-media"><Image src="/images/skypad-hero.png" alt="SkyPad interface displayed on an iPad" fill priority sizes="100vw" /></div><div className="shell product-hero-content"><p className="eyebrow">SkyPad for iPad</p><h1>Bluesky,<br />refined for iPad.</h1><p>SkyPad is a premium iPad client for Bluesky—built around media, discovery, trends, news, and conversations as one focused native iPad experience.</p><div className="actions"><Link className="button button-primary" href="/apps/skypad/support">Get support <ArrowRight size={17} /></Link><Link className="button button-secondary" href="/apps/skypad/privacy">Privacy</Link></div></div></section><section className="product-intro section-white"><div className="shell product-intro-grid"><p className="eyebrow">Made for iPad</p><div><h2>More space for what matters.</h2><p>Media, context, and conversation come together in an interface that feels at home on iPad.</p></div></div></section><section className="section product-details"><div className="shell"><div className="detail-grid">{skypadFeatures.map((feature, index) => { const Icon = icons[index]; return <article className="detail" key={feature.title}><Icon size={22} /><h3>{feature.title}</h3><p>{feature.description}</p></article>; })}</div><p className="disclaimer">SkyPad is an independent client and is not affiliated with Bluesky PBLLC.</p></div></section></main>;
}
