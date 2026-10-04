import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { site } from "@/lib/site";

const title = "PlayBrief Privacy Policy — Original Gen Labs";
const translationPrivacyURL = "https://www.apple.com/legal/privacy/data/en/translation/";
const applePrivacyURL = "https://www.apple.com/legal/privacy/";
const blueskyPrivacyURL = "https://bsky.social/about/support/privacy-policy";
const youtubePrivacyURL = "https://policies.google.com/privacy";
const redditPrivacyURL = "https://www.reddit.com/policies/privacy-policy";
const discordPrivacyURL = "https://discord.com/privacy";
const steamPrivacyURL = "https://store.steampowered.com/privacy_agreement/";
const twitchPrivacyURL = "https://legal.twitch.com/en/legal/privacy-notice/";

export const metadata: Metadata = {
  title: { absolute: title },
  description: "How PlayBrief handles local preferences, public gaming sources, translation and on-device summaries.",
  alternates: { canonical: "/apps/gamepulse/privacy" },
  openGraph: { title, description: "Privacy information for PlayBrief on iPhone.", url: "/apps/gamepulse/privacy" },
};

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="PlayBrief"
      title="Privacy Policy"
      intro="This policy describes the information PlayBrief processes on your device and the requests it makes to public sources and Apple system services. PlayBrief is a read-only game briefing app; it does not create a PlayBrief account."
      effectiveDate="October 4, 2026"
      sections={[
        {
          title: "1. Who operates PlayBrief",
          content: <p>PlayBrief is operated by Original Gen Labs. “PlayBrief,” “we,” “us” and “our” in this policy refer to PlayBrief and Original Gen Labs.</p>,
        },
        {
          title: "2. Information stored on your device",
          content: <><p>PlayBrief stores the games you choose, app-language and translation preferences, notification choices, per-game content preferences, saved stories and locally cached public-source results. SwiftData, app preferences and the PlayBrief App Group are used for these local features, including widget and system-surface data.</p><p>Searches of the bundled game catalog and source headlines or summaries already cached on this device run locally; PlayBrief does not send search queries to a search service. Saved items and preferences remain until you change or remove them. Source caches are refreshed as the app updates its public feeds. PlayBrief does not operate an account, profile, sync or application backend.</p></>,
        },
        {
          title: "3. Public sources and network requests",
          content: <><p>When you refresh or view content, PlayBrief makes requests directly from your device to public services. Depending on the screen, these can include publisher RSS feeds, public Bluesky APIs, public Steam endpoints, PCGamingWiki and official YouTube feeds. A Bluesky public-source search can include the game name or related search terms selected by PlayBrief for the game you are viewing.</p><p>These services receive the network information needed to answer a request, such as your IP address and standard request headers. PlayBrief does not route these requests through a PlayBrief server. Public posts, headlines, descriptions, dates, thumbnails and source links may be cached locally so the app can display its source-backed brief.</p></>,
        },
        {
          title: "4. External pages and embedded media",
          content: <><p>When you open a public source, community search, Steam or Twitch page, or video in PlayBrief’s web reader or embedded player, the relevant provider receives the page or playback request and may process IP address, browser/device information, cookies and interaction data under its own policy. PlayBrief does not ask for provider passwords and does not post, like, reply or repost on your behalf.</p><p>Examples include the <a href={youtubePrivacyURL} target="_blank" rel="noopener noreferrer">Google and YouTube Privacy Policy</a>, <a href={blueskyPrivacyURL} target="_blank" rel="noopener noreferrer">Bluesky Privacy Policy</a>, <a href={redditPrivacyURL} target="_blank" rel="noopener noreferrer">Reddit Privacy Policy</a>, <a href={discordPrivacyURL} target="_blank" rel="noopener noreferrer">Discord Privacy Policy</a>, <a href={steamPrivacyURL} target="_blank" rel="noopener noreferrer">Steam Privacy Policy</a> and <a href={twitchPrivacyURL} target="_blank" rel="noopener noreferrer">Twitch Privacy Notice</a>. Other publishers and websites apply their own terms and notices.</p></>,
        },
        {
          title: "5. Translation and on-device summaries",
          content: <><p>When you choose to translate text, PlayBrief uses Apple’s system Translation framework. Apple says text you choose to translate may be sent to Apple; when both language resources are downloaded, translation is processed on your device. PlayBrief does not send translation text to a PlayBrief server or a paid translation API. See Apple’s <a href={translationPrivacyURL} target="_blank" rel="noopener noreferrer">Translation &amp; Privacy notice</a> and <a href={applePrivacyURL} target="_blank" rel="noopener noreferrer">Privacy Policy</a>.</p><p>When available on the device, PlayBrief uses Apple’s on-device Foundation Models system model to prepare source-backed explanations or summaries of public discussion. The model receives the source excerpts needed for that task on the device. PlayBrief does not use a cloud AI provider or send those prompts to a PlayBrief server. This feature may be unavailable on unsupported devices, languages or system configurations.</p></>,
        },
        {
          title: "6. Notifications",
          content: <p>Daily brief notifications are optional. PlayBrief asks iOS for notification permission only after you choose a notification option. Notifications are scheduled through iOS on your device; PlayBrief does not operate a remote push-notification service.</p>,
        },
        {
          title: "7. Analytics, advertising and tracking",
          content: <><p>PlayBrief v1 contains no TelemetryDeck SDK and sends no analytics events to TelemetryDeck or another analytics provider. The analytics opt-in has been removed. On first launch of this version, PlayBrief removes legacy local analytics preference and queued-summary values from an earlier build.</p><p>PlayBrief contains no advertising SDK, does not request the advertising identifier and does not configure cross-app tracking or a third-party crash-reporting service. Apple and the public source providers may process information as described in their own policies when you use their system services or open their content.</p></>,
        },
        {
          title: "8. Data sharing, retention and deletion",
          content: <><p>Original Gen Labs does not receive the public-source requests through a PlayBrief backend and does not sell local preferences or saved stories. A source provider receives the requests sent to it directly from your device. Apple may process text you submit to the system Translation framework as described above.</p><p>You can remove saved stories in PlayBrief and change game, language, content and notification preferences in the app. Removing PlayBrief ordinarily removes its local app data, subject to iOS backup and restore settings. Each third-party provider controls its own request logs, cookies, retention and deletion practices.</p></>,
        },
        {
          title: "9. Children, changes and contact",
          content: <><p>PlayBrief does not ask for a birth date and is not designed to collect personal information from children. We may update this policy when the app or its data practices change; the effective date above will be revised when that happens.</p><p>For privacy questions, contact <a href={`mailto:${site.privacyEmail}`}>{site.privacyEmail}</a>. Do not send passwords or authentication codes.</p></>,
        },
      ]}
    />
  );
}
