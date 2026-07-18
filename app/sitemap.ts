import type { MetadataRoute } from "next";
import { works } from "@/lib/works";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://amberprintstudio.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: siteUrl,
      lastModified: "2026-07-18",
      images: [`${siteUrl}/images/hero-ammonite-amber.jpeg`],
    },
    {
      url: `${siteUrl}/collection`,
      lastModified: "2026-07-18",
      images: works.map((work) => `${siteUrl}${work.image}`),
    },
    {
      url: `${siteUrl}/privacy-policy`,
      lastModified: "2026-02-01",
    },
    {
      url: `${siteUrl}/terms-and-conditions`,
      lastModified: "2026-02-01",
    },
  ];

  const workPages: MetadataRoute.Sitemap = works.map((work) => ({
    url: `${siteUrl}/collection/${work.slug}`,
    lastModified: "2026-07-18",
    images: [`${siteUrl}${work.image}`],
  }));

  return [...staticPages, ...workPages];
}
