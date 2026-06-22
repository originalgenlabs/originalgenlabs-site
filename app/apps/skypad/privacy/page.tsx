import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "SkyPad Privacy", description: "Privacy policy for SkyPad.", alternates: { canonical: "/apps/skypad/privacy" } };

export default function PrivacyPage() {
  return <LegalPage eyebrow="SkyPad" title="Privacy Policy" intro="This policy explains how SkyPad handles information when you use the app." sections={[
    { title: "Information SkyPad uses", content: <><p>SkyPad connects to Bluesky and AT Protocol services so you can authenticate, access your account, and view or publish user content. Those third-party services process information under their own policies.</p><p>The app may process account identifiers, profile information, posts, media, social interactions, and technical responses needed to provide its features.</p></> },
    { title: "Authentication and on-device data", content: <p>OAuth credentials and token data may be stored securely on your device using platform-provided storage. Some app preferences and temporary content may also be stored locally to support the experience. Removing the app may remove locally stored app data, subject to iPadOS behavior.</p> },
    { title: "How information is shared", content: <p>SkyPad sends requests to the Bluesky or AT Protocol services you choose to use. Original Gen Labs does not sell your personal data. We do not add advertising trackers or third-party analytics to this website.</p> },
    { title: "Retention and control", content: <p>Your public and account content is generally retained by the AT Protocol services hosting it, not by this website. Account and content controls available through Bluesky or your service provider remain subject to those services.</p> },
    { title: "Children and international use", content: <p>SkyPad is intended for users who meet the minimum age and eligibility requirements of the services they access. The app may be available internationally, and third-party services may process data in multiple countries.</p> },
    { title: "Contact", content: <p>For privacy questions, email <a href={`mailto:${site.privacyEmail}`}>{site.privacyEmail}</a>.</p> },
  ]} />;
}
