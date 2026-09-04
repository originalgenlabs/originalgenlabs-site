import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["", "/apps", "/apps/skypad", "/apps/skypad/privacy", "/apps/skypad/support", "/apps/skypad/terms"];
  return paths.map((path) => ({
    url: `${site.url}${path}`,
    lastModified: new Date("2026-09-04"),
    changeFrequency: path === "" || path === "/apps/skypad" ? "monthly" : "yearly",
    priority: path === "" ? 1 : path === "/apps/skypad" ? .9 : path === "/apps" ? .7 : .6,
  }));
}
