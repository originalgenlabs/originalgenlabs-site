export const INDEPENDENCE_NOTICE =
  "SkyPad Social is an independent third-party client for the Bluesky network. It is not affiliated with, endorsed by, or sponsored by Bluesky Social, PBC.";

export const site = {
  name: "Original Gen Labs",
  url: "https://originalgenlabs.com",
  description: "Independent software lab building premium apps with purpose.",
  operatorName: "Original Gen Labs",
  supportEmail: "support@originalgenlabs.com",
  adminEmail: "admin@originalgenlabs.com",
  privacyEmail: "privacy@originalgenlabs.com",
  skypad: {
    name: "SkyPad Social",
    /** Required before deployment. Do not replace with a dead or guessed URL. */
    appStoreUrl: null as string | null,
    productUrl: "/apps/skypad",
    supportUrl: "/apps/skypad/support",
    privacyUrl: "/apps/skypad/privacy",
    termsUrl: "/apps/skypad/terms",
  },
} as const;

export const navigation = [
  { label: "Apps", href: "/apps" },
  { label: "SkyPad Social", href: "/apps/skypad" },
  { label: "Support", href: "/apps/skypad/support" },
] as const;

export const externalLinks = {
  blueskyStatus: "https://status.bsky.app/",
  blueskyPrivacy: "https://bsky.social/about/support/privacy-policy",
  blueskyTerms: "https://bsky.social/about/support/tos",
  blueskyNetworkPrivacy: "https://bsky.social/about/support/network-services-privacy-policy",
  applePrivacy: "https://www.apple.com/legal/privacy/",
  appleTranslationPrivacy: "https://www.apple.com/legal/privacy/data/en/translation/",
  appleStandardEula: "https://www.apple.com/legal/internet-services/itunes/dev/stdeula/",
  klipyPrivacy: "https://klipy.com/support/privacy-policy",
  klipyTerms: "https://klipy.com/support/terms-services",
} as const;
