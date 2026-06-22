import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Blocks, Compass, Tablet, Zap } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";

const features = [
  { icon: Tablet, title: "Native experiences", copy: "Purpose-built software that respects the device it lives on." },
  { icon: Zap, title: "Quietly fast", copy: "Performance is part of the experience, not a line in a feature list." },
  { icon: Compass, title: "Open by nature", copy: "Products shaped around open protocols and user choice." },
  { icon: Blocks, title: "Built to last", copy: "A focused lab with room for a thoughtful family of apps." },
];

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-media"><Image src="/images/skypad-hero.png" alt="SkyPad running on an iPad in a bright workspace" fill priority sizes="100vw" /></div>
        <div className="shell hero-content">
          <p className="eyebrow">Original Gen Labs</p>
          <h1>Premium apps for the open web.</h1>
          <p className="hero-copy">Independent software lab building premium apps for the open web. Considered, native, and made for people who expect more from their tools.</p>
          <div className="actions">
            <Link className="button button-primary" href="/apps/skypad">Meet SkyPad <ArrowRight size={17} /></Link>
            <Link className="button button-secondary" href="/apps">Explore apps</Link>
          </div>
        </div>
      </section>
      <section className="section section-white">
        <div className="shell">
          <SectionHeading eyebrow="Our approach" title="Software with a point of view." copy="We build focused products where interaction, performance, and visual clarity reinforce one another." />
          <div className="feature-grid">
            {features.map(({ icon: Icon, title, copy }) => <article className="feature" key={title}><Icon className="feature-icon" size={25} /><h3>{title}</h3><p>{copy}</p></article>)}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="shell app-showcase">
          <div className="app-copy"><p className="eyebrow">First release</p><h2>SkyPad</h2><p>A premium iPad client for Bluesky, built for signal, speed, discovery, and a truly native iPad experience.</p><Link className="button button-primary" href="/apps/skypad">Explore SkyPad <ArrowRight size={17} /></Link></div>
          <div className="app-art"><Image src="/images/skypad-hero.png" alt="SkyPad media-rich feed on iPad" fill sizes="(max-width: 900px) 100vw, 55vw" /></div>
        </div>
      </section>
      <section className="section section-dark">
        <div className="shell">
          <SectionHeading eyebrow="What comes next" title="A lab with room to grow." copy="SkyPad is the first expression of Original Gen Labs. Future apps will follow the same standard: specific, useful, and carefully made." />
          <div className="future-grid">
            <article className="future-card"><span>In exploration</span><h3>Future products for the open web.</h3></article>
            <article className="future-card"><span>Coming later</span><h3>New ideas, only when they earn their place.</h3></article>
          </div>
        </div>
      </section>
    </main>
  );
}
