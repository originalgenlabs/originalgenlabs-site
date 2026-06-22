import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "SkyPad Terms", description: "Terms of use for SkyPad.", alternates: { canonical: "/apps/skypad/terms" } };

export default function TermsPage() {
  return <LegalPage eyebrow="SkyPad" title="Terms of Use" intro="These terms govern your use of SkyPad, an independent iPad client from Original Gen Labs." sections={[
    { title: "Using SkyPad", content: <p>You may use SkyPad only in compliance with applicable law, these terms, and the rules of the Bluesky or AT Protocol services you access. You are responsible for your account, content, and activity.</p> },
    { title: "Acceptable use", content: <p>Do not use SkyPad to violate another person&apos;s rights, interfere with services, distribute unlawful material, bypass security controls, or abuse the AT Protocol network. Access may be limited where reasonably necessary to protect the app or others.</p> },
    { title: "Third-party services", content: <p>SkyPad depends on third-party networks and services, including Bluesky and AT Protocol providers. Original Gen Labs does not control their availability, content, policies, moderation, or changes. Your use of those services is governed by their terms.</p> },
    { title: "Ownership and affiliation", content: <p>SkyPad and its original design and software are owned by Original Gen Labs or its licensors. SkyPad is not affiliated with, endorsed by, or an official product of Bluesky PBLLC.</p> },
    { title: "Availability and warranties", content: <p>SkyPad is provided on an “as available” basis to the extent permitted by law. We do not promise uninterrupted operation or that third-party content and services will always remain available.</p> },
    { title: "Limitation of liability", content: <p>To the maximum extent permitted by law, Original Gen Labs will not be liable for indirect, incidental, special, consequential, or punitive damages, or for losses caused by third-party services. Nothing in these terms excludes liability that cannot legally be excluded.</p> },
    { title: "Contact", content: <p>Questions about these terms may be sent to <a href={`mailto:${site.supportEmail}`}>{site.supportEmail}</a>.</p> },
  ]} />;
}
