import type { Metadata } from "next";
import Link from "next/link";
import { AppStoreCta } from "@/components/app-store-cta";
import { LegalPage } from "@/components/legal-page";
import { externalLinks, INDEPENDENCE_NOTICE, site } from "@/lib/site";

const title = "SkyPad Social Support — Original Gen Labs";

export const metadata: Metadata = {
  title: { absolute: title },
  description: "Help with signing in, discovery, posting, drafts, translation, messaging and moderation in SkyPad Social.",
  alternates: { canonical: "/apps/skypad/support" },
  openGraph: { title, description: "Help and troubleshooting for SkyPad Social on iPhone.", url: "/apps/skypad/support" },
};

export default function SupportPage() {
  return (
    <LegalPage
      eyebrow="Help and guidance"
      title="SkyPad Social Support"
      intro="Need help with SkyPad Social? Find answers to common questions or contact support below."
      effectiveDate={null}
      sections={[
        {
          title: "1. Signing in",
          content: <>
            <p>SkyPad uses Bluesky OAuth and does not ask you to enter an app password. Sign in with the handle or account identifier supported by your AT Protocol provider, then complete authorization in Safari.</p>
            <p>If Safari does not return to SkyPad, tap the option to open SkyPad on the authorization page. If that does not work, close Safari, reopen SkyPad and start sign-in again. You can also open SkyPad Settings, sign out and reconnect your account.</p>
          </>,
        },
        {
          title: "2. Timeline and discovery",
          content: <>
            <p><strong>Following</strong> shows content from accounts you follow. <strong>Discover</strong> helps surface broader posts and creators. <strong>Video</strong> provides a dedicated view of video posts.</p>
            <p>Within Discover and Video, Top Picks highlights standout conversations, Popular Now emphasizes current momentum and New Voices helps surface emerging creators. Results depend on content currently available through Bluesky and on network availability.</p>
          </>,
        },
        {
          title: "3. Trends",
          content: <>
            <p><strong>For You</strong> organizes trends around your experience, while <strong>Global</strong> offers a broader network view. Use Highlights, Rising and Fresh to move between established, accelerating and recent conversations.</p>
            <p>Topic views currently include AI, technology, science, crypto, politics and art. Relevance is automated and a post may occasionally be classified incorrectly.</p>
          </>,
        },
        {
          title: "4. Posting photos, video, GIFs and stickers",
          content: <>
            <p>SkyPad supports photos, video, animated GIFs, iPhone Live Stickers, Genmoji and SkyPad Stickers. You can add alt text to media and apply content labels before publishing. Bluesky&apos;s media limits, service availability and account eligibility still apply.</p>
            <p>If an upload fails, keep SkyPad open while the media is prepared, confirm that your connection is stable, check the file size and duration, try the original item from Photos again and review any specific message shown by SkyPad. Avoid repeatedly compressing or converting a file unless the error identifies a compatibility problem.</p>
          </>,
        },
        {
          title: "5. Drafts",
          content: <>
            <p>Composer drafts can include text, photos, video, GIFs and stickers. Draft media is stored in SkyPad&apos;s protected Application Support area on your iPhone and can be restored after the app closes.</p>
            <p>Delete drafts you no longer need from the composer. Signing out does not automatically delete drafts. Deleting SkyPad ordinarily removes its application container and local draft files, although iOS backup and Keychain behavior are controlled separately by Apple.</p>
          </>,
        },
        {
          title: "6. Translation",
          content: <p>SkyPad uses Apple&apos;s language-detection and Translation capabilities. Translation availability depends on the language resources supported or installed by iOS, so not every post or language combination can be translated.</p>,
        },
        {
          title: "7. Messaging",
          content: <p>SkyPad supports one-to-one and group conversations, message requests, member management and search across conversations, message history and shared posts. A recipient&apos;s Bluesky messaging permissions may prevent a new conversation. SkyPad does not describe direct messages as end-to-end encrypted.</p>,
        },
        {
          title: "8. Moderation and reporting",
          content: <p>You can mute or block accounts and report accounts, posts and conversations. Some labels and moderation outcomes come from Bluesky or the AT Protocol services connected to your account, and those providers apply their own rules and review processes.</p>,
        },
        {
          title: "9. Troubleshooting",
          content: <ul>
            <li>Check your Wi-Fi or mobile data connection.</li>
            <li>Review the <a href={externalLinks.blueskyStatus} target="_blank" rel="noopener noreferrer">official Bluesky status page</a>.</li>
            <li>Close and restart SkyPad.</li>
            <li>Sign out and reconnect your account when the issue appears account-related.</li>
            <li>Install the newest SkyPad version available from the App Store.</li>
            <li>Contact support if the issue continues.</li>
          </ul>,
        },
        {
          title: "10. Contact and useful links",
          content: <>
            <p>Email <a href={`mailto:${site.supportEmail}`}>{site.supportEmail}</a>. Include the SkyPad version, iOS version, iPhone model, what you expected, what happened and clear reproduction steps. Never send passwords, OAuth authorization codes, access or refresh tokens, recovery codes or other account secrets.</p>
            <div className="legal-link-list">
              <Link href={site.skypad.privacyUrl}>Privacy Policy</Link>
              <Link href={site.skypad.termsUrl}>Terms of Use</Link>
              <AppStoreCta className="legal-app-store-link" label="App Store listing" />
              <a href={externalLinks.blueskyStatus} target="_blank" rel="noopener noreferrer">Bluesky service status</a>
            </div>
          </>,
        },
        {
          title: "Independent client",
          content: <p>{INDEPENDENCE_NOTICE}</p>,
        },
      ]}
    />
  );
}
