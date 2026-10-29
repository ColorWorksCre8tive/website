import type { MetadataRoute } from "next";
import { SITE, PROJECTS, BLOG_POSTS } from "@/lib/site-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();
  const base = SITE.url;

  // Homepage sections (anchor links) all resolve to root URL — list root once
  const routes: MetadataRoute.Sitemap = [
    {
      url: `${base}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
  ];

  // Project "pages" — these are anchored modal states in the SPA, but for SEO
  // we expose them as URL fragments so crawlers can discover them.
  for (const p of PROJECTS) {
    routes.push({
      url: `${base}/#work-${p.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    });
  }

  // Blog posts — anchored fragments
  for (const b of BLOG_POSTS) {
    routes.push({
      url: `${base}/#blog-${b.slug}`,
      lastModified: b.date,
      changeFrequency: "yearly",
      priority: 0.6,
    });
  }

  return routes;
}
