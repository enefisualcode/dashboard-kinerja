import type { MetadataRoute } from "next";
import { locales } from "@/content/locales";
import { projects } from "@/content/projects";
import { siteConfig } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["", "/work", "/about", "/contact", ...projects.map((p) => `/work/${p.slug}`)];

  return locales.flatMap((locale) =>
    paths.map((path) => ({
      url: `${siteConfig.url}/${locale}${path}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : path.startsWith("/work/") ? 0.8 : 0.6,
      alternates: {
        languages: Object.fromEntries(
          locales.map((alt) => [alt, `${siteConfig.url}/${alt}${path}`]),
        ),
      },
    })),
  );
}
