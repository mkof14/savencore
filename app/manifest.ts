import type { MetadataRoute } from "next";

import {
  SITE_DEFAULT_DESCRIPTION,
  SITE_NAME,
  SITE_THEME_COLOR_DARK,
  SITE_THEME_COLOR_LIGHT,
} from "@/config/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_NAME,
    short_name: "SAVEN",
    description: SITE_DEFAULT_DESCRIPTION,
    start_url: "/en/",
    scope: "/",
    display: "standalone",
    orientation: "portrait-primary",
    background_color: SITE_THEME_COLOR_DARK,
    theme_color: SITE_THEME_COLOR_LIGHT,
    lang: "en",
    categories: ["business", "technology"],
    icons: [
      {
        src: "/icons/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/icon-512-maskable.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
