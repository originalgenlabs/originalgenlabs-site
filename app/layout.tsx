import type { Metadata, Viewport } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { site } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: "Original Gen Labs — Premium Apps Crafted with Purpose", template: "%s | Original Gen Labs" },
  description: site.description,
  alternates: { canonical: "/" },
  icons: { icon: "/icon.svg" },
  openGraph: { title: "Original Gen Labs — Premium Apps Crafted with Purpose", description: site.description, url: site.url, siteName: site.name, type: "website" },
  twitter: { card: "summary", title: "Original Gen Labs — Premium Apps Crafted with Purpose", description: site.description },
};

export const viewport: Viewport = { themeColor: "#071120", colorScheme: "dark" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" data-scroll-behavior="smooth"><body><SiteHeader />{children}<SiteFooter /></body></html>;
}
