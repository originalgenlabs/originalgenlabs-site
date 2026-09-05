import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { externalLinks, INDEPENDENCE_NOTICE, site } from "@/lib/site";

const title = "SkyPad Social Privacy Policy — Original Gen Labs";

export const metadata: Metadata = {
  title: { absolute: title },
  description: "How SkyPad Social processes account, content, local storage and service data.",
  alternates: { canonical: "/apps/skypad/privacy" },
  openGraph: { title, description: "Privacy information for SkyPad Social on iPhone.", url: "/apps/skypad/privacy" },
};

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="SkyPad Social"
      title="Privacy Policy"
      intro="This policy explains how SkyPad Social processes information when you use the app, what stays on your iPhone and when third-party services receive data."
      effectiveDate="September 5, 2026"
      sections={[
        {
          title: "1. Who operates SkyPad Social",
          content: <><p>SkyPad Social is operated by Original Gen Labs. References to “SkyPad,” “we,” “us” or “our” in this policy refer to SkyPad Social and Original Gen Labs.</p><p>{INDEPENDENCE_NOTICE}</p></>,
        },
        {
          title: "2. Information SkyPad processes",
          content: <><p>To provide its features, SkyPad may process your Bluesky handle, decentralized identifier (DID), profile information, service provider and Personal Data Server address; OAuth session credentials; posts, media, reactions, relationships, Lists, Starter Packs, saved posts and messages available to your account; content you compose or publish; and app preferences.</p><p>SkyPad also processes operational information needed to load content and complete actions, such as record identifiers, pagination values, message and notification state, selected languages, content labels and upload status.</p></>,
        },
        {
          title: "3. Authentication and account credentials",
          content: <><p>SkyPad uses Bluesky OAuth and does not ask for your app password. Access and refresh tokens, the OAuth PKCE verifier and the device&apos;s DPoP private key are stored using the iPhone Keychain. Short-lived OAuth state and account routing information are stored locally to complete sign-in.</p><p>SkyPad validates the authorization callback, service identity, token type and account binding before accepting a session. No security system can guarantee absolute protection.</p></>,
        },
        {
          title: "4. Information stored on your iPhone",
          content: <><p>SkyPad stores preferences such as appearance, language, translation and notification choices in local app storage. It also maintains bounded local caches for feeds, news, profile information and media so content can load efficiently. These caches can include post text, authors, media references, labels, interaction state and account-linked identifiers.</p><p>Composer drafts may contain text, settings and media. Draft media is stored in the app&apos;s Application Support folder with complete file protection. Temporary composer files are periodically removed. Some short-lived translation and image caches remain in memory only.</p><p>Saved posts use Bluesky&apos;s bookmark service and are temporarily held in app memory while SkyPad is running. Local notification state, offline action records and other continuity data may also be retained on the device.</p></>,
        },
        {
          title: "5. How SkyPad uses information",
          content: <ul><li>Authenticate your account and maintain a secure session.</li><li>Display Bluesky and AT Protocol content, profiles, feeds, notifications and conversations.</li><li>Publish posts and media and complete likes, reposts, follows, saves and other requested interactions.</li><li>Provide messaging, search, discovery, ranking, trends and news organization.</li><li>Store drafts, preferences and bounded caches.</li><li>Provide translation, moderation tools, content labels, safety checks and troubleshooting.</li></ul>,
        },
        {
          title: "6. Bluesky and AT Protocol services",
          content: <><p>SkyPad sends account and content requests to the AT Protocol services associated with your account. Depending on the action, this can include your Personal Data Server, Bluesky AppView and chat services, public Bluesky APIs, Bluesky&apos;s video service and DID resolution services such as PLC Directory or your handle&apos;s domain.</p><p>Content you publish, messages you send and interactions you make are processed and retained by the relevant Bluesky or AT Protocol provider under its own policies. Review the <a href={externalLinks.blueskyPrivacy} target="_blank" rel="noopener noreferrer">Bluesky Privacy Policy</a> and <a href={externalLinks.blueskyNetworkPrivacy} target="_blank" rel="noopener noreferrer">AT Protocol Network Services Privacy Notice</a>.</p></>,
        },
        {
          title: "7. GIF search, Apple features and external links",
          content: <><p>Online GIF search is provided through Bluesky&apos;s GIF service and KLIPY. Search terms, pagination values, device locale, IP address and selected GIF requests may be processed by those services. SkyPad does not require a separate KLIPY account. Review <a href={externalLinks.klipyPrivacy} target="_blank" rel="noopener noreferrer">KLIPY&apos;s Privacy Policy</a>.</p><p>SkyPad uses Apple system frameworks for language identification, translation, link previews, secure Keychain storage and local notifications. Text you choose to translate is provided to Apple&apos;s Translation framework. When both required languages are downloaded, translation is processed on the device; otherwise, the text may be sent to Apple for processing. Apple controls that processing and retention. Review Apple&apos;s <a href={externalLinks.appleTranslationPrivacy} target="_blank" rel="noopener noreferrer">Translation &amp; Privacy notice</a> and <a href={externalLinks.applePrivacy} target="_blank" rel="noopener noreferrer">Privacy Policy</a>.</p><p>Opening a publisher link or other external website sends a normal request to that site. Creating a link preview may cause iOS to contact the public URL. Handle verification may query Cloudflare&apos;s DNS-over-HTTPS service or the custom domain associated with a handle.</p></>,
        },
        {
          title: "8. Analytics, advertising, tracking and diagnostics",
          content: <><p>The current SkyPad app does not include third-party analytics, advertising, crash-reporting or cross-app tracking SDKs. SkyPad does not request Apple&apos;s advertising identifier.</p><p>The release app&apos;s local diagnostic logger is disabled by default. Development or support diagnostics may record operational details such as request status, byte counts and public or pseudonymous identifiers. SkyPad&apos;s authentication diagnostics exclude access tokens, refresh tokens, authorization codes, PKCE verifiers, DPoP proof material and response bodies. Third-party services listed above may perform their own logging or analytics under their policies.</p></>,
        },
        {
          title: "9. Retention, sign out and deletion",
          content: <><p>Cache duration and capacity are bounded by the app, while drafts remain until you delete them or remove the app. Signing out removes the active account&apos;s access and refresh tokens and current authentication identifiers. It does not automatically remove every cache, preference, draft or locally queued continuity record.</p><p>Deleting SkyPad ordinarily removes its application container, including drafts, preferences and caches, subject to iOS backup and restore behavior. Keychain items are managed separately by iOS and may persist until removed by sign-out, the app or the system.</p><p>Content already published to Bluesky, AT Protocol services or external sites is not deleted when you sign out of or delete SkyPad. Use your account provider&apos;s controls to manage or delete that content and account.</p></>,
        },
        {
          title: "10. Your choices",
          content: <><p>You can sign out, delete individual composer drafts, unsave posts, change notification and translation preferences, and use mute, block and report controls. SkyPad does not currently provide one control that erases every category of local app data.</p><p>You can use your Bluesky or AT Protocol provider&apos;s account controls for authorization, content and account requests that are managed by that provider.</p></>,
        },
        {
          title: "11. Children and eligibility",
          content: <p>SkyPad is for people who are eligible to use the Bluesky or AT Protocol account they connect. Bluesky&apos;s current terms require users to be at least 13 and to meet any higher minimum age required by local law. Other providers may have different rules. SkyPad does not independently collect a date of birth or perform age verification.</p>,
        },
        {
          title: "12. International processing and security",
          content: <><p>Bluesky, AT Protocol providers, KLIPY, Apple and external websites may process information in countries other than your own. Their locations, safeguards and transfer practices are governed by their policies and applicable law.</p><p>SkyPad uses safeguards including OAuth, device-bound proof, Keychain storage, protected draft files, secure transport checks and bounded network responses. These measures reduce risk but cannot guarantee absolute security.</p></>,
        },
        {
          title: "13. Policy updates and contact",
          content: <><p>We may update this policy as SkyPad, its services or applicable requirements change. Material updates will be posted on this page with a revised effective date and may also be communicated in the app when appropriate.</p><p>For privacy questions, email <a href={`mailto:${site.privacyEmail}`}>{site.privacyEmail}</a>. For product support, email <a href={`mailto:${site.supportEmail}`}>{site.supportEmail}</a>. Never send passwords, OAuth codes or authentication tokens.</p></>,
        },
      ]}
    />
  );
}
