import type { MetadataRoute } from "next";
import { getAllDocumentTypeSlugs } from "@/lib/documentTypes";
import { getAllGlossaryTermSlugs } from "@/lib/glossaryTerms";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://plaindoc.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/how-it-works`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${SITE_URL}/privacy`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${SITE_URL}/glossary`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  const docTypeRoutes: MetadataRoute.Sitemap = getAllDocumentTypeSlugs().map((slug) => ({
    url: `${SITE_URL}/explain/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  const glossaryRoutes: MetadataRoute.Sitemap = getAllGlossaryTermSlugs().map((slug) => ({
    url: `${SITE_URL}/glossary/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...docTypeRoutes, ...glossaryRoutes];
}
