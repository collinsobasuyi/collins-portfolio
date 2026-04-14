import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://collinsobasuyi.com";

  return [
    { url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${base}/services`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/mentorship`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/ventures`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/case-studies`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/contact`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.7 },
    { url: `${base}/privacy`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
  ];
}
