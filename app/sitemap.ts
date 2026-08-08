import type { MetadataRoute } from "next";

import { SITE_URL } from "@/config/site";
import { LOCALES } from "@/config/locales";
import { localizePath } from "@/navigation/locale-path";
import { PUBLISHED_ROUTES } from "@/navigation/published-routes";

/** Routes excluded from the public sitemap (auth, lab sandbox — D-0263). */
const SITEMAP_EXCLUDED = new Set<string>(["/auth/sign-in/", "/lab/"]);

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const entries: MetadataRoute.Sitemap = [];

  for (const route of PUBLISHED_ROUTES) {
    if (SITEMAP_EXCLUDED.has(route)) {
      continue;
    }

    const isHome = route === "/";
    const isHub =
      isHome ||
      route === "/technology/" ||
      route === "/systems/" ||
      route === "/applications/" ||
      route === "/trust/" ||
      route === "/labs/" ||
      route === "/purpose/" ||
      route === "/investors/" ||
      route === "/foundation/" ||
      route === "/foundation/biomath-core/" ||
      route === "/contact/" ||
      route === "/media/" ||
      route === "/faq/" ||
      route === "/legal/";

    for (const locale of LOCALES) {
      entries.push({
        url: `${SITE_URL}${localizePath(locale, route)}`,
        lastModified,
        changeFrequency: isHome ? "weekly" : isHub ? "weekly" : "monthly",
        priority: isHome ? 1 : isHub ? 0.8 : route.startsWith("/legal/") ? 0.3 : 0.6,
      });
    }
  }

  return entries;
}
