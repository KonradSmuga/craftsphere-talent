import type { MetadataRoute } from "next";
import { SITE_URL } from "./site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date("2026-08-30T00:00:00Z"),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: new Date("2026-08-30T00:00:00Z"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
