import type { MetadataRoute } from "next";
import { posts } from "@/lib/posts";

const baseUrl = "https://darshifashanti.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: "2026-03-15", changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/chambres`, lastModified: "2026-03-15", changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/experiences`, lastModified: "2026-03-15", changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/blog`, lastModified: "2026-03-15", changeFrequency: "weekly", priority: 0.85 },
    { url: `${baseUrl}/a-propos`, lastModified: "2026-03-15", changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/contact`, lastModified: "2026-03-15", changeFrequency: "monthly", priority: 0.9 },
  ];

  const blogPosts: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.date,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...blogPosts];
}
