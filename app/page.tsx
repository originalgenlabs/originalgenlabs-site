import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Compass, Layers3, ShieldCheck } from "lucide-react";
import { AppStoreCta } from "@/components/app-store-cta";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Original Gen Labs — Premium Apps Crafted with Purpose" },
  description: "Original Gen Labs creates focused, premium software for the open web, including SkyPad Social for iPhone.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Original Gen Labs — Premium Apps Crafted with Purpose",
    description: "Focused, premium software for the open web.",
    url: "/",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Original Gen Labs — Premium Apps Crafted with Purpose",
    description: "Focused, premium software for the open web.",
  },
};

const principles = [
  { icon: Compass, title: "Purpose before noise", copy: "Products begin with a clear problem and stay focused on helping people solve it." },
  { icon: Layers3, title: "Depth without clutter", copy: "Powerful tools, organized with enough restraint to remain easy to use." },
  { icon: ShieldCheck, title: "Independent by design", copy: "Built for open networks with user choice, privacy and clear boundaries in view." },
];

export default function Home() {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: site.url,
    email: site.supportEmail,
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />
      <section className="lab-hero">
        <div className="shell lab-hero-grid">
          <div>
            <p className="eyebrow">Original Gen Labs</p>
            <h1>Premium apps.<br />Clear purpose.</h1>
            <p className="hero-copy">We create independent software that turns complex open networks into focused, thoughtful experiences.</p>
            <div className="actions">
              <Link className="button button-primary" href="/apps/skypad">Explore SkyPad Social <ArrowRight size={17} aria-hidden="true" /></Link>
              <Link className="button button-secondary" href="/apps">View our apps</Link>
            </div>
          </div>
          <div className="lab-orbit" aria-hidden="true">
            <span className="orbit-line orbit-one" />
            <span className="orbit-line orbit-two" />
            <span className="orbit-dot dot-one" />
            <span className="orbit-dot dot-two" />
            <span className="orbit-core"><Image src="/apps/skypad/skypad-bird-logo.png" alt="" width={768} height={768} priority /></span>
          </div>
        </div>
      </section>

      <section className="section principles-section">
        <div className="shell">
          <div className="section-heading">
            <p className="eyebrow">How we build</p>
            <h2>Carefully made.<br />Confidently useful.</h2>
          </div>
          <div className="feature-grid">
            {principles.map(({ icon: Icon, title, copy }) => (
              <article className="feature" key={title}>
                <Icon className="feature-icon" size={25} aria-hidden="true" />
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section flagship-section">
        <div className="shell flagship-card">
          <div className="flagship-copy">
            <p className="eyebrow">Released product · SkyPad Social</p>
            <h2>See what matters.<br />Beyond the feed.</h2>
            <p>SkyPad Social is a premium, independent iPhone client for Bluesky—bringing focused discovery, multi-layer trends, news, video, creation and conversations into one native experience.</p>
            <div className="actions">
              <Link className="button button-light" href="/apps/skypad">Explore SkyPad <ArrowRight size={17} aria-hidden="true" /></Link>
              <AppStoreCta className="button button-outline-light" />
            </div>
          </div>
          <div className="flagship-signal" aria-label="SkyPad Social discovery areas">
            <span>DISCOVER</span><span>TRENDS</span><span>NEWS</span><span>VIDEO</span><span>CREATE</span><span>CHATS</span>
          </div>
        </div>
      </section>

      <section className="section future-products">
        <div className="shell future-product-grid">
          <div>
            <p className="eyebrow">Original Gen Labs</p>
            <h2>One product today.<br />Room for what earns a place next.</h2>
          </div>
          <p>SkyPad Social leads our public portfolio. The structure around it stays intentionally open for future products without turning the lab into a single-app identity.</p>
        </div>
      </section>
    </main>
  );
}
