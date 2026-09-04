import Link from "next/link";
import { INDEPENDENCE_NOTICE, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div className="footer-brand">
          <strong>Original Gen Labs</strong>
          <p>Independent software, crafted with purpose.</p>
        </div>
        <nav aria-label="Product, legal and support">
          <Link href="/apps">Apps</Link>
          <Link href="/apps/skypad">SkyPad Social</Link>
          <Link href="/apps/skypad/support">Support</Link>
          <Link href="/apps/skypad/privacy">Privacy Policy</Link>
          <Link href="/apps/skypad/terms">Terms of Use</Link>
        </nav>
      </div>
      <div className="shell independence-notice">{INDEPENDENCE_NOTICE}</div>
      <div className="shell footer-meta">
        <span>© {new Date().getFullYear()} Original Gen Labs</span>
        <a href={`mailto:${site.supportEmail}`}>{site.supportEmail}</a>
      </div>
    </footer>
  );
}
