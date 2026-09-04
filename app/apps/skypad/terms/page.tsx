import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { externalLinks, INDEPENDENCE_NOTICE, site } from "@/lib/site";

const title = "SkyPad Social Terms of Use — Original Gen Labs";

export const metadata: Metadata = {
  title: { absolute: title },
  description: "Terms governing use of SkyPad Social, an independent iPhone client for the Bluesky network.",
  alternates: { canonical: "/apps/skypad/terms" },
  openGraph: { title, description: "Terms of Use for SkyPad Social.", url: "/apps/skypad/terms" },
};

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="SkyPad Social"
      title="Terms of Use"
      intro="These terms govern your use of SkyPad Social, an independent iPhone client operated by Original Gen Labs."
      sections={[
        { title: "1. Independent client", content: <><p>{INDEPENDENCE_NOTICE}</p><p>Bluesky, AT Protocol and related names and trademarks belong to their respective owners.</p></> },
        { title: "2. Your account and eligibility", content: <p>You must have an eligible Bluesky or AT Protocol account and comply with the terms, community rules and policies of the services you connect. You are responsible for your account credentials, device and activity. Review the <a href={externalLinks.blueskyTerms} target="_blank" rel="noopener noreferrer">Bluesky Terms of Service</a> when using Bluesky-operated services.</p> },
        { title: "3. Your content and conduct", content: <><p>You are responsible for posts, media, messages and other content you publish or share. You must have the rights and permissions needed for that content and must comply with applicable law and the rules of your account provider.</p><p>Do not use SkyPad to harass others, distribute unlawful material, infringe rights, bypass security controls, disrupt services, automate abusive behavior or misuse the AT Protocol network.</p></> },
        { title: "4. Third-party content, services and links", content: <p>SkyPad displays content created by third parties and connects to Bluesky, AT Protocol providers, GIF services, Apple features and external websites. Original Gen Labs does not own, endorse or independently verify third-party posts, news reporting, media or links. Your use of a third-party service is also governed by that service&apos;s terms and policies.</p> },
        { title: "5. SkyPad intellectual property", content: <p>SkyPad&apos;s original software, design, branding and documentation are owned by Original Gen Labs or its licensors and are protected by applicable intellectual-property laws. These terms do not transfer ownership of SkyPad or third-party content to you.</p> },
        { title: "6. Features, availability and changes", content: <p>Features may change, be added, limited or removed as SkyPad and connected services evolve. SkyPad depends on third-party networks that may be unavailable, delayed, restricted or discontinued. We do not guarantee uninterrupted access or the continued availability of any third-party feature.</p> },
        { title: "7. App Store license", content: <p>SkyPad is licensed, not sold. Unless a custom end-user license agreement is presented for SkyPad, Apple&apos;s <a href={externalLinks.appleStandardEula} target="_blank" rel="noopener noreferrer">Standard Licensed Application End User License Agreement</a> applies to the app license alongside these terms. Apple and its subsidiaries are third-party beneficiaries of the applicable license terms to the extent stated there.</p> },
        { title: "8. Suspension and termination", content: <p>You may stop using SkyPad at any time. To the extent technically available and permitted by law, access to SkyPad features may be restricted when necessary to address misuse, security risk, legal requirements or material violations of these terms. Your Bluesky or AT Protocol provider separately controls your network account.</p> },
        { title: "9. Disclaimers", content: <p>To the extent permitted by applicable law, SkyPad is provided “as is” and “as available.” We do not promise that every feature will be error-free, that automated relevance or translation will always be accurate, or that third-party services and content will remain available. Consumer rights that cannot legally be excluded remain unaffected.</p> },
        { title: "10. Limitation of responsibility", content: <p>To the extent permitted by applicable law, Original Gen Labs is not responsible for indirect or consequential losses arising from third-party services, third-party content, external links or events outside our reasonable control. Nothing in these terms limits responsibility that cannot legally be limited, including rights provided by mandatory consumer law.</p> },
        { title: "11. Changes and contact", content: <><p>We may update these terms when SkyPad, connected services or legal requirements change. The revised terms will be posted here with a new effective date. If a material change requires additional notice or consent, we will provide it as appropriate.</p><p>Questions may be sent to <a href={`mailto:${site.supportEmail}`}>{site.supportEmail}</a>.</p></> },
      ]}
    />
  );
}
