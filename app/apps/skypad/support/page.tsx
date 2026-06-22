import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "SkyPad Support", description: "Help and support for SkyPad.", alternates: { canonical: "/apps/skypad/support" } };

export default function SupportPage() {
  return <LegalPage eyebrow="SkyPad" title="Support" intro="Help with signing in, authorization, installation, and reporting a problem." sections={[
    { title: "Sign in with Bluesky", content: <p>Use your Bluesky handle or the account identifier supported by your AT Protocol provider. SkyPad opens a secure authorization flow; it does not ask you to send your password to Original Gen Labs.</p> },
    { title: "OAuth / authorization issues", content: <p>If authorization does not return to SkyPad, close the authorization page and try again from the app. Confirm that your internet connection is active and that your account provider is available. Include the exact error message when contacting support.</p> },
    { title: "App Store / installation issues", content: <p>For download, billing, or installation problems managed by the App Store, review your Apple Account and App Store settings. Restarting the App Store or your iPad may resolve an incomplete installation.</p> },
    { title: "Reporting bugs", content: <p>Tell us what you expected, what happened, your iPad model, iPadOS version, and the steps that reproduce the issue. Screenshots are useful when they do not contain sensitive information.</p> },
    { title: "Contact support", content: <p>Email <a href={`mailto:${site.supportEmail}`}>{site.supportEmail}</a>. Please do not send passwords, OAuth tokens, recovery codes, or other account secrets.</p> },
    { title: "Independent client", content: <p>SkyPad is not affiliated with Bluesky PBLLC. Questions about the Bluesky service or account-level moderation may need to be directed to the relevant service provider.</p> },
  ]} />;
}
