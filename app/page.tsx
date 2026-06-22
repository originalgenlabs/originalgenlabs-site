import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Compass, Tablet, Zap } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";

const features = [
  { icon: Tablet, title: "Native first", copy: "Software shaped around the device, not squeezed into it." },
  { icon: Zap, title: "Fast by feel", copy: "Responsive, focused, and quietly efficient in everyday use." },
  { icon: Compass, title: "Open by choice", copy: "Thoughtful products built for open protocols and user agency." },
];

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-media"><Image src="/images/skypad-hero.png" alt="SkyPad running on an iPad in a bright workspace" fill priority sizes="100vw" /></div>
        <div className="shell hero-content">
          <p className="eyebrow">Original Gen Labs</p>
          <h1>The open web,<br />beautifully native.</h1>
          <p className="hero-copy">Original Gen Labs builds refined, native apps for people who expect more from their tools.</p>
          <div className="actions">
            <Link className="button button-primary" href="/apps/skypad">Meet SkyPad <ArrowRight size={17} /></Link>
            <Link className="button button-secondary" href="/apps">Explore apps</Link>
          </div>
        </div>
      </section>
      <section className="section section-white">
        <div className="shell">
          <SectionHeading eyebrow="Our approach" title="Built with intent." copy="Clear purpose. Native interaction. No unnecessary noise." />
          <div className="feature-grid">
            {features.map(({ icon: Icon, title, copy }) => <article className="feature" key={title}><Icon className="feature-icon" size={25} /><h3>{title}</h3><p>{copy}</p></article>)}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="shell app-showcase">
          <div className="app-copy"><p className="eyebrow">SkyPad</p><h2>Bluesky,<br />refined for iPad.</h2><p>A premium iPad client for Bluesky—fast, focused, and built for discovery.</p><Link className="text-link" href="/apps/skypad">Explore SkyPad <ArrowRight size={17} /></Link></div>
          <div className="app-art"><Image src="/images/skypad-hero.png" alt="SkyPad media-rich feed on iPad" fill sizes="(max-width: 900px) 100vw, 55vw" /></div>
        </div>
      </section>
      <section className="section section-dark">
        <div className="shell">
          <SectionHeading eyebrow="What comes next" title="Room for the right ideas." copy="Future apps will arrive with the same standard: focused, useful, and carefully made." />
          <div className="future-grid">
            <article className="future-card"><span>In exploration</span><h3>New tools for the open web.</h3></article>
            <article className="future-card"><span>Coming later</span><h3>Only when the idea earns its place.</h3></article>
          </div>
        </div>
      </section>
    </main>
  );
}
