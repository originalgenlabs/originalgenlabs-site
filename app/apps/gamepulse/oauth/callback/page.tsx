import type { Metadata } from "next";
import { CallbackClient } from "./callback-client";

export const metadata: Metadata = {
  title: "Returning to Game Pulse",
  description: "Return to Game Pulse after Bluesky authorization.",
  robots: { index: false, follow: false },
};

export default function CallbackPage() {
  return <CallbackClient />;
}
