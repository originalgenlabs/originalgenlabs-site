import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AppStoreCta } from "@/components/app-store-cta";

export const metadata: Metadata = {
  title: "Apps",
  description: "Explore premium apps from Original Gen Labs.",
  alternates: { canonical: "/apps" },
  openGraph: { title: "Apps from Original Gen Labs", description: "Independent apps crafted with purpose.", url: "/apps" },
};

export default function AppsPage() {
  return (
    <main>
      <header className="page-hero page-hero-dark">
        <div className="shell">
          <p className="eyebrow">Apps by Original Gen Labs</p>
          <h1>Focused by design.</h1>
          <p>A growing portfolio of independent software, each held to the same standard: clear value, considered detail and a reason to exist.</p>
        </div>
      </header>
      <section className="section apps-featured">
        <div className="shell apps-release-card">
          <div className="apps-release-icon"><Image src="/apps/skypad/skypad-bird-logo.png" alt="SkyPad Social app icon" width={768} height={768} /></div>
          <div className="apps-release-copy">
            <p className="eyebrow">Available product</p>
            <h2>SkyPad Social</h2>
            <p>A premium, independent iPhone client for Bluesky with deeper discovery, multi-layer trends, focused news, curated video and powerful tools to create and connect.</p>
            <div className="actions">
              <Link className="button button-primary" href="/apps/skypad">Explore SkyPad <ArrowRight size={17} aria-hidden="true" /></Link>
              <AppStoreCta className="button button-secondary" />
            </div>
          </div>
        </div>
      </section>
      <section className="section portfolio-space">
        <div className="shell portfolio-space-inner">
          <p className="eyebrow">The portfolio</p>
          <h2>Built to expand without losing focus.</h2>
          <p>Future products will appear here when they are ready to meet the same bar for usefulness, craft and independence.</p>
        </div>
      </section>
    </main>
  );
}
