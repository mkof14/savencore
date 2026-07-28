import type { Metadata } from "next";

import {
  SITE_DEFAULT_DESCRIPTION,
  SITE_DEFAULT_TITLE,
  SITE_NAME,
  SITE_OG_IMAGE_ALT,
  SITE_OG_IMAGE_PATH,
  SITE_URL,
} from "@/config/site";
import {
  getHtmlLang,
  isLocale,
  LOCALES,
  type Locale,
} from "@/config/locales";
import type { HubPageContent } from "@/content/hub/types";
import { localizePath } from "@/navigation/locale-path";

export type BuildPageMetadataInput = {
  locale: Locale;
  /** Locale-relative path with trailing slash, e.g. `/technology/`. */
  path: string;
  title: string;
  description: string;
  /** Absolute or site-relative OG image path. */
  image?: string;
  imageAlt?: string;
  noIndex?: boolean;
  /**
   * When true (default), `title` is a segment for the layout `%s | SAVEN Core` template.
   * When false, `title` is used as an absolute document title (home).
   */
  absoluteTitle?: boolean;
};

function absoluteUrl(path: string): string {
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${normalized}`;
}

export function buildLanguageAlternates(
  path: string,
): NonNullable<Metadata["alternates"]>["languages"] {
  const languages: Record<string, string> = {};
  for (const locale of LOCALES) {
    languages[getHtmlLang(locale)] = absoluteUrl(localizePath(locale, path));
  }
  languages["x-default"] = absoluteUrl(localizePath("en", path));
  return languages;
}

export function buildPageMetadata(input: BuildPageMetadataInput): Metadata {
  const {
    locale,
    path,
    title,
    description,
    image = SITE_OG_IMAGE_PATH,
    imageAlt = SITE_OG_IMAGE_ALT,
    noIndex = false,
    absoluteTitle = false,
  } = input;

  const displayTitle = absoluteTitle ? title : `${title} | ${SITE_NAME}`;
  const canonical = absoluteUrl(localizePath(locale, path));
  const ogImage = absoluteUrl(image);

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical,
      languages: buildLanguageAlternates(path),
    },
    openGraph: {
      type: "website",
      url: canonical,
      siteName: SITE_NAME,
      title: displayTitle,
      description,
      locale: getHtmlLang(locale),
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: displayTitle,
      description,
      images: [ogImage],
    },
    robots: noIndex
      ? { index: false, follow: false, nocache: true }
      : { index: true, follow: true },
  };
}

type LocaleParams = { params: Promise<{ locale: string }> };

/** Default locale-layout metadata (home-level share defaults). */
export function buildLocaleLayoutMetadata(locale: Locale): Metadata {
  const home = buildPageMetadata({
    locale,
    path: "/",
    title: SITE_DEFAULT_TITLE,
    description: SITE_DEFAULT_DESCRIPTION,
    absoluteTitle: true,
  });

  return {
    ...home,
    title: {
      default: SITE_DEFAULT_TITLE,
      template: `%s | ${SITE_NAME}`,
    },
    applicationName: SITE_NAME,
    /** Prefer navy-tile brand icons (D-0211); ?v=211 busts sticky browser caches. */
    icons: {
      icon: [
        { url: "/favicon.svg?v=211", type: "image/svg+xml" },
        { url: "/favicon.ico?v=211", sizes: "16x16 32x32 48x48 64x64" },
        {
          url: "/favicon-32x32.png?v=211",
          sizes: "32x32",
          type: "image/png",
        },
        {
          url: "/favicon-48x48.png?v=211",
          sizes: "48x48",
          type: "image/png",
        },
        {
          url: "/icons/icon-192.png?v=211",
          sizes: "192x192",
          type: "image/png",
        },
        {
          url: "/icons/icon-512.png?v=211",
          sizes: "512x512",
          type: "image/png",
        },
      ],
      apple: [
        {
          url: "/icons/apple-touch-icon.png?v=211",
          sizes: "180x180",
          type: "image/png",
        },
      ],
      shortcut: "/favicon-48x48.png?v=211",
    },
    appleWebApp: {
      capable: true,
      title: SITE_NAME,
      statusBarStyle: "default",
    },
    formatDetection: {
      telephone: false,
      email: false,
      address: false,
    },
    other: {
      "mobile-web-app-capable": "yes",
    },
  };
}

export function createHubGenerateMetadata(
  path: string,
  getContent: (locale: Locale) => HubPageContent,
  options?: { noIndex?: boolean },
) {
  return async function generateMetadata({
    params,
  }: LocaleParams): Promise<Metadata> {
    const { locale: localeParam } = await params;
    if (!isLocale(localeParam)) {
      return {};
    }
    const content = getContent(localeParam);
    const description =
      content.lede?.trim() ||
      content.body?.[0]?.trim() ||
      SITE_DEFAULT_DESCRIPTION;

    return buildPageMetadata({
      locale: localeParam,
      path,
      title: content.title,
      description: description.slice(0, 320),
      // Sitewide share card: logo + SAVEN Core (D-0179). Do not substitute mastheads.
      image: SITE_OG_IMAGE_PATH,
      imageAlt: SITE_OG_IMAGE_ALT,
      ...(options?.noIndex ? { noIndex: true } : {}),
    });
  };
}

export { SITE_DEFAULT_DESCRIPTION, SITE_DEFAULT_TITLE, SITE_URL };
