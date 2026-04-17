import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { areas } from "@/content/areas";
import { segments } from "@/content/segments";
import { posts } from "@/content/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url;
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: now, changeFrequency: "monthly", priority: 1.0 },
    { url: `${base}/sobre`, lastModified: now, changeFrequency: "yearly", priority: 0.8 },
    { url: `${base}/atuacao`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/para-empresarios`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/publicacoes`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/contato`, lastModified: now, changeFrequency: "yearly", priority: 0.8 },
    { url: `${base}/politica-de-privacidade`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: `${base}/termos`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
  ];

  const areaRoutes: MetadataRoute.Sitemap = areas.map((a) => ({
    url: `${base}/atuacao/${a.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const segmentRoutes: MetadataRoute.Sitemap = segments.map((s) => ({
    url: `${base}/para-empresarios/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const postRoutes: MetadataRoute.Sitemap = posts.map((p) => ({
    url: `${base}/publicacoes/${p.slug}`,
    lastModified: new Date(p.date + "T00:00:00"),
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...areaRoutes, ...segmentRoutes, ...postRoutes];
}
