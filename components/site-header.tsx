import Link from "next/link";
import { FlaskConical, Menu } from "lucide-react";
import { navigation } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="shell nav-shell">
        <Link className="brand" href="/" aria-label="Original Gen Labs home">
          <span className="brand-mark"><FlaskConical size={18} strokeWidth={2.2} /></span>
          <span>Original Gen Labs</span>
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
        </nav>
        <details className="mobile-nav">
          <summary aria-label="Open navigation"><Menu size={21} /></summary>
          <nav aria-label="Mobile navigation">
            {navigation.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
          </nav>
        </details>
      </div>
    </header>
  );
}
