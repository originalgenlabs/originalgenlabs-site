export const site = {
  name: "Original Gen Labs",
  url: "https://originalgenlabs.com",
  description: "Independent software lab building premium apps for the open web.",
  supportEmail: "support@originalgenlabs.com",
  adminEmail: "admin@originalgenlabs.com",
  privacyEmail: "privacy@originalgenlabs.com",
} as const;

export const navigation = [
  { label: "Apps", href: "/apps" },
  { label: "SkyPad", href: "/apps/skypad" },
  { label: "Support", href: "/apps/skypad/support" },
] as const;

export const skypadFeatures = [
  {
    title: "Native by design",
    description: "An iPad-first interface designed around spacious navigation, touch, and focused reading.",
  },
  {
    title: "Your network, your way",
    description: "Move naturally between Following, Discover, and Video without losing your place.",
  },
  {
    title: "More signal",
    description: "Trends, News, and Chats bring discovery and conversation into one considered workspace.",
  },
  {
    title: "Media at full speed",
    description: "Fast, media-first browsing keeps images and video close to the conversation.",
  },
] as const;
