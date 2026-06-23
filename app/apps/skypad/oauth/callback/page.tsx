import type { Metadata } from "next";
import { CallbackClient } from "./callback-client";

export const metadata: Metadata = { title: "Returning to SkyPad", description: "Return to SkyPad after authorization.", robots: { index: false, follow: false } };

export default function CallbackPage() { return <CallbackClient />; }
