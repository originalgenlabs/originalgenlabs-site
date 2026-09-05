import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  Bookmark,
  Check,
  CircleUserRound,
  Gauge,
  KeyRound,
  Languages,
  ListChecks,
  MessageCircleMore,
  Newspaper,
  PenLine,
  Play,
  Search,
  ShieldCheck,
  Sparkles,
  UsersRound,
} from "lucide-react";
import { AppStoreCta } from "@/components/app-store-cta";
import { INDEPENDENCE_NOTICE, site } from "@/lib/site";

const title = "SkyPad Social — Premium Client for Bluesky on iPhone";
const description = "Go beyond the feed with focused discovery, multi-layer trends, SkyPad News, curated video, powerful creation and complete conversations on iPhone.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/apps/skypad" },
  openGraph: { title, description, url: "/apps/skypad", type: "website", siteName: "Original Gen Labs" },
  twitter: { card: "summary", title, description },
};

const discoveryModes = [
  ["Top Picks", "Standout conversations worth your attention."],
  ["Popular Now", "Content gaining attention right now."],
  ["New Voices", "Emerging creators before they disappear into the crowd."],
];

const newsLenses = [
  ["Top Stories", "The stories shaping the day."],
  ["Breaking", "Important developments as they emerge."],
  ["Money", "Business, markets and financial news."],
  ["World", "A focused view of global events."],
  ["Watchlist", "Film, television and entertainment."],
];

const completeFeatures = [
  [Bookmark, "Save and search important posts"],
  [MessageCircleMore, "Open complete conversation threads"],
  [Sparkles, "Pin custom feeds"],
  [ListChecks, "Create and manage Lists"],
  [UsersRound, "Create and manage Starter Packs"],
  [CircleUserRound, "Move directly between notifications, posts and profiles"],
];

export default function SkyPadPage() {
  const softwareJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: site.skypad.name,
    applicationCategory: "SocialNetworkingApplication",
    operatingSystem: "iOS on iPhone",
    description,
    url: `${site.url}${site.skypad.productUrl}`,
    author: { "@type": "Organization", name: site.name, url: site.url },
  };

  return (
    <main className="skypad-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareJsonLd) }} />

      <section className="skypad-hero">
        <div className="skypad-hero-glow" aria-hidden="true" />
        <div className="shell skypad-hero-grid">
          <div className="skypad-hero-copy">
            <div className="product-lockup">
              <span className="product-lockup-icon"><Image src="/apps/skypad/skypad-bird-logo.png" alt="SkyPad Social" width={72} height={72} priority unoptimized /></span>
              <span>SkyPad Social</span>
            </div>
            <p className="eyebrow">A premium client for Bluesky, crafted for iPhone</p>
            <h1>See what matters.<br /><span>Beyond the feed.</span></h1>
            <p className="hero-proof">Focused trends. Trusted news. Standout video. Powerful conversations.</p>
            <p className="hero-description">SkyPad Social transforms Bluesky&apos;s constant flow into a focused, premium iPhone experience—bringing together deeper discovery, multi-layer trends, curated video and powerful tools to create and connect.</p>
            <div className="actions">
              <AppStoreCta />
              <Link className="button button-secondary" href="#discovery">Explore SkyPad <ArrowDown size={17} aria-hidden="true" /></Link>
            </div>
            <p className="hero-independence">{INDEPENDENCE_NOTICE}</p>
          </div>

          <div className="iphone-stage" aria-label="SkyPad Social feature composition for iPhone">
            <div className="iphone-device">
              <div className="iphone-island" aria-hidden="true" />
              <div className="iphone-screen-composition">
                <div className="placeholder-topline"><span>SkyPad</span><Search size={18} aria-hidden="true" /></div>
                <div className="placeholder-tabs"><b>Following</b><b>Discover</b><b>Video</b></div>
                <div className="placeholder-modes"><span>Top Picks</span><span>Popular Now</span><span>New Voices</span></div>
                <div className="placeholder-card placeholder-card-featured"><Sparkles size={18} aria-hidden="true" /><strong>Discovery with purpose</strong><i /></div>
                <div className="placeholder-card"><i /><i /><i /></div>
                <div className="placeholder-card"><i /><i /></div>
                <div className="composition-message"><span>Beyond the feed</span><strong>Focused trends. Trusted news. Standout video.</strong></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="product-value-strip" aria-label="SkyPad Social core experiences">
        <div className="shell"><span>DISCOVERY</span><span>TRENDS</span><span>NEWS</span><span>VIDEO</span><span>CREATE</span><span>CHATS</span></div>
      </section>

      <section className="product-section discovery-section" id="discovery">
        <div className="shell split-layout">
          <div className="section-copy">
            <p className="eyebrow">Discovery with purpose</p>
            <h2>Find more than what is already popular.</h2>
            <p>Move beyond a single timeline with Following, Discover and dedicated Video experiences. Explore Top Picks, Popular Now and New Voices—each designed to reveal a different side of Bluesky.</p>
          </div>
          <div className="proof-stack">
            {discoveryModes.map(([name, copy], index) => (
              <article className="proof-row" key={name}>
                <span>0{index + 1}</span><div><h3>{name}</h3><p>{copy}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="product-section trends-section">
        <div className="shell trends-layout">
          <div className="section-copy">
            <p className="eyebrow">Trend intelligence</p>
            <h2>See what&apos;s important—not just what&apos;s loud.</h2>
            <p>Explore Bluesky through personalized and global perspectives. Move between Highlights, Rising and Fresh across AI, technology, science, crypto, politics and art.</p>
            <p className="supporting-copy">SkyPad considers relevance, recency and engagement while reducing repetitive and off-topic content across discovery.</p>
          </div>
          <div className="trend-map" aria-label="SkyPad Trends structure">
            <div className="trend-switch"><span className="active">For You</span><span>Global</span></div>
            <div className="trend-depth"><span className="active">Highlights</span><span>Rising</span><span>Fresh</span></div>
            <div className="trend-topics"><span>AI</span><span>Technology</span><span>Science</span><span>Crypto</span><span>Politics</span><span>Art</span></div>
            <div className="trend-signal"><Gauge size={22} aria-hidden="true" /><div><strong>Relevance + recency + engagement</strong><p>Three signals, organized into one focused view.</p></div></div>
          </div>
        </div>
      </section>

      <section className="product-section news-section">
        <div className="shell">
          <div className="section-copy wide-copy">
            <p className="eyebrow">SkyPad News</p>
            <h2>Follow the story beyond the post.</h2>
            <p>Quickly scan established news voices on Bluesky through Top Stories, Breaking, Money, World and Watchlist—then move directly into the conversations forming around each story.</p>
          </div>
          <div className="news-grid">
            {newsLenses.map(([name, copy], index) => (
              <article className={index === 0 ? "news-card news-card-lead" : "news-card"} key={name}>
                <span>{String(index + 1).padStart(2, "0")}</span><Newspaper size={20} aria-hidden="true" /><h3>{name}</h3><p>{copy}</p>
              </article>
            ))}
          </div>
          <p className="source-note">News posts remain attributed to their Bluesky authors and linked publishers. SkyPad organizes third-party reporting; it does not write or independently verify it.</p>
        </div>
      </section>

      <section className="product-section video-section">
        <div className="shell split-layout split-layout-reverse">
          <div className="video-visual" aria-label="Video discovery modes">
            <div className="video-frame"><Play size={34} fill="currentColor" aria-hidden="true" /></div>
            <div className="video-mode-row"><span>Top Picks</span><span>Popular Now</span><span>New Voices</span></div>
          </div>
          <div className="section-copy">
            <p className="eyebrow">Video with better signal</p>
            <h2>More worth watching.</h2>
            <p>Explore focused video selections through Top Picks, Popular Now and New Voices while staying connected to the people, posts and conversations behind them.</p>
          </div>
        </div>
      </section>

      <section className="product-section creation-section">
        <div className="shell">
          <div className="creation-heading">
            <div className="section-copy">
              <p className="eyebrow">Create with precision</p>
              <h2>More than a text box.</h2>
            </div>
            <p>Create posts, replies and quotes with photos, video, animated GIFs, Live Stickers and Genmoji. Add alt text, content labels, languages, mentions, link previews and detailed conversation controls before publishing.</p>
          </div>
          <div className="creation-grid">
            <article className="creation-card creation-card-wide">
              <PenLine size={24} aria-hidden="true" /><h3>Your post. Your conversation.</h3>
              <p>Choose who can reply—from everyone or no one to people you follow, people you mention or members of one of your Bluesky Lists. Control whether your post may be quoted.</p>
              <div className="chip-row"><span>Photos</span><span>Video</span><span>GIFs</span><span>Live Stickers</span><span>Genmoji</span><span>Alt text</span></div>
            </article>
            <article className="creation-card">
              <Bookmark size={24} aria-hidden="true" /><h3>Save the complete idea—not just the words.</h3>
              <p>Return to drafts containing photos, video, GIFs and stickers even after closing the app. Draft media remains within the application&apos;s protected local storage.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="product-section messaging-section">
        <div className="shell split-layout">
          <div className="section-copy">
            <p className="eyebrow">Powerful conversations</p>
            <h2>Stay connected without losing context.</h2>
            <p>Move naturally between posts, complete threads, profiles, notifications and private conversations.</p>
            <p className="supporting-copy">Create one-to-one and group conversations, manage members and message requests, and search across chats, full message histories and shared posts.</p>
          </div>
          <div className="chat-visual" aria-label="Conversation search and group controls">
            <div className="chat-search"><Search size={18} aria-hidden="true" /><span>Search conversations</span></div>
            <div className="chat-row"><span className="avatar">A</span><div><strong>One-to-one</strong><p>Posts stay connected to the conversation.</p></div></div>
            <div className="chat-row"><span className="avatar group"><UsersRound size={18} aria-hidden="true" /></span><div><strong>Groups</strong><p>Manage members, requests and shared context.</p></div></div>
          </div>
        </div>
      </section>

      <section className="product-section complete-section">
        <div className="shell">
          <div className="section-copy wide-copy">
            <p className="eyebrow">Everything close at hand</p>
            <h2>Discovery without compromise.</h2>
            <p>Explore posts, replies, photos, videos, likes, custom feeds, Lists and Starter Packs from rich profile views. Search within profiles, saved posts and conversations while keeping every interaction connected.</p>
          </div>
          <div className="complete-grid">
            {completeFeatures.map(([Icon, copy]) => (
              <article key={String(copy)}><Icon size={22} aria-hidden="true" /><span>{String(copy)}</span></article>
            ))}
          </div>
        </div>
      </section>

      <section className="product-section personalization-section">
        <div className="shell personalization-grid">
          <article>
            <Languages size={25} aria-hidden="true" />
            <p className="eyebrow">Made for your experience</p>
            <h2>Understand more.</h2>
            <p>Detect and translate posts into your preferred language, then switch between translated and original text. Translation availability depends on Apple&apos;s supported language resources.</p>
          </article>
          <article>
            <Sparkles size={25} aria-hidden="true" />
            <p className="eyebrow">Make it yours</p>
            <h2>Read your way.</h2>
            <p>Personalize SkyPad with appearance modes, themes, typefaces, text sizing, bold text and language controls.</p>
          </article>
        </div>
      </section>

      <section className="product-section safety-section">
        <div className="shell safety-grid">
          <div className="section-copy">
            <p className="eyebrow">Control built in</p>
            <h2>Control what reaches you.</h2>
            <p>Mute, block and report unwanted accounts, posts and conversations. Content labels, topic-aware relevance and additional source filtering help create a more focused experience.</p>
          </div>
          <article className="security-card">
            <KeyRound size={25} aria-hidden="true" /><h3>Secure by design.</h3>
            <p>SkyPad uses Bluesky OAuth without asking for an app password. Sensitive session credentials are protected using the iPhone Keychain and excluded from application logs.</p>
            <div><ShieldCheck size={18} aria-hidden="true" /><span>OAuth sign-in</span><ShieldCheck size={18} aria-hidden="true" /><span>Keychain protection</span></div>
          </article>
        </div>
      </section>

      <section className="product-section native-section">
        <div className="shell native-layout">
          <div className="native-number">01</div>
          <div className="section-copy">
            <p className="eyebrow">Crafted for iPhone</p>
            <h2>Power without the clutter.</h2>
            <p>SkyPad brings discovery, news, video, creation and conversations together through native navigation, rich media, persistent feed positions and carefully controlled background processing.</p>
          </div>
          <div className="native-points"><span><Check size={17} aria-hidden="true" /> Native navigation</span><span><Check size={17} aria-hidden="true" /> Persistent feed positions</span><span><Check size={17} aria-hidden="true" /> Controlled background work</span></div>
        </div>
      </section>

      <section className="final-cta">
        <div className="shell final-cta-inner">
          <p className="eyebrow">Your Bluesky, in full view</p>
          <h2>Go beyond the feed.</h2>
          <p>Discover what&apos;s rising, create with confidence and stay connected to every conversation with SkyPad Social.</p>
          <AppStoreCta />
          <Link className="text-link-light" href="/apps/skypad/support">Visit SkyPad Support <ArrowRight size={17} aria-hidden="true" /></Link>
        </div>
      </section>
    </main>
  );
}
