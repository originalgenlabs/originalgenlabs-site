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
    title: "Made for iPad",
    description: "Spacious navigation, natural touch interaction, and focused reading from the start.",
  },
  {
    title: "Built for discovery",
    description: "Move naturally through your network, emerging conversations, and what matters now.",
  },
  {
    title: "Media first",
    description: "Images and video stay close to the conversation in a fast, visual browsing experience.",
  },
  {
    title: "Connected",
    description: "News, trends, and chats meet in one calm, considered space.",
  },
] as const;
