import type { MetadataRoute } from "next";
import { locales } from "@/i18n/config";
import { articles } from "@/lib/blog-content";
import { roomSlugs } from "@/lib/rooms";
import { SITE_URL } from "@/lib/site";

const staticPaths = [
  { path: "", priority: 1, changeFrequency: "weekly" as const, lastMod: "2026-03-15" },
  { path: "/chambres", priority: 0.9, changeFrequency: "monthly" as const, lastMod: "2026-03-15" },
  { path: "/experiences", priority: 0.8, changeFrequency: "monthly" as const, lastMod: "2026-03-15" },
  { path: "/blog", priority: 0.85, changeFrequency: "weekly" as const, lastMod: "2026-03-15" },
  { path: "/a-propos", priority: 0.7, changeFrequency: "monthly" as const, lastMod: "2026-03-15" },
  { path: "/contact", priority: 0.9, changeFrequency: "monthly" as const, lastMod: "2026-03-15" },
];

function langs(path: string) {
  return Object.fromEntries(locales.map((l) => [l, `${SITE_URL}/${l}${path}`]));
}

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const item of staticPaths) {
      entries.push({
        url: `${SITE_URL}/${locale}${item.path}`,
        lastModified: item.lastMod,
        changeFrequency: item.changeFrequency,
        priority: item.priority,
        alternates: { languages: langs(item.path) },
      });
    }

    for (const slug of roomSlugs) {
      const path = `/chambres/${slug}`;
      entries.push({
        url: `${SITE_URL}/${locale}${path}`,
        lastModified: "2026-03-15",
        changeFrequency: "monthly",
        priority: 0.8,
        alternates: { languages: langs(path) },
      });
    }

    for (const post of articles) {
      const path = `/blog/${post.slug}`;
      entries.push({
        url: `${SITE_URL}/${locale}${path}`,
        lastModified: post.date,
        changeFrequency: "monthly",
        priority: 0.65,
        alternates: { languages: langs(path) },
      });
    }
  }

  return entries;
}
