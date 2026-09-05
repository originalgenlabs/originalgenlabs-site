import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import { navigation } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="shell nav-shell">
        <Link className="brand" href="/" aria-label="Original Gen Labs home">
          <span className="brand-mark"><Image src="/brand/original-gen-labs-logo.png" alt="Original Gen Labs" width={1254} height={1254} priority /></span>
          <span>Original Gen Labs</span>
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
        </nav>
        <details className="mobile-nav">
          <summary aria-label="Open navigation"><Menu size={21} aria-hidden="true" /></summary>
          <nav aria-label="Mobile navigation">
            {navigation.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
          </nav>
        </details>
      </div>
    </header>
  );
}
