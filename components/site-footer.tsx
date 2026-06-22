import Link from "next/link";
import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div>
          <strong>Original Gen Labs</strong>
          <p>Independent software for the open web.</p>
        </div>
        <nav aria-label="Legal and support">
          <Link href="/apps">Apps</Link>
          <Link href="/apps/skypad/support">Support</Link>
          <Link href="/apps/skypad/privacy">Privacy</Link>
          <Link href="/apps/skypad/terms">Terms</Link>
        </nav>
      </div>
      <div className="shell footer-meta">
        <span>© {new Date().getFullYear()} Original Gen Labs</span>
        <a href={`mailto:${site.supportEmail}`}>{site.supportEmail}</a>
      </div>
    </footer>
  );
}
