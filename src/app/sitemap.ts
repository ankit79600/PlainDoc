import type { MetadataRoute } from "next";
import { getAllDocumentTypeSlugs } from "@/lib/documentTypes";
import { getAllGlossaryTermSlugs } from "@/lib/glossaryTerms";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

// Static dates reflecting the last significant content update.
// Using new Date() would mislead crawlers into thinking content changes on every build.
const D = {
  homepage:      "2026-09-15",
  explainIndex:  "2026-08-15",
  howItWorks:    "2026-08-01",
  about:         "2026-08-01",
  privacy:       "2026-09-01",
  glossaryIndex: "2026-08-15",
  docTypes:      "2026-08-01",
  glossaryTerms: "2026-08-01",
} as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: D.homepage,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/explain`,
      lastModified: D.explainIndex,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/how-it-works`,
      lastModified: D.howItWorks,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: D.about,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${SITE_URL}/privacy`,
      lastModified: D.privacy,
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${SITE_URL}/glossary`,
      lastModified: D.glossaryIndex,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  const docTypeRoutes: MetadataRoute.Sitemap = getAllDocumentTypeSlugs().map((slug) => ({
    url: `${SITE_URL}/explain/${slug}`,
    lastModified: D.docTypes,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  const glossaryRoutes: MetadataRoute.Sitemap = getAllGlossaryTermSlugs().map((slug) => ({
    url: `${SITE_URL}/glossary/${slug}`,
    lastModified: D.glossaryTerms,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...docTypeRoutes, ...glossaryRoutes];
}
