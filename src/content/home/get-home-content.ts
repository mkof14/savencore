import type { Locale } from "@/config/locales";
import { homeContentEn } from "@/content/home/locales/en";
import { homeContentAr } from "@/content/home/locales/ar";
import { homeContentHe } from "@/content/home/locales/he";
import { homeContentRu } from "@/content/home/locales/ru";
import { homeContentUk } from "@/content/home/locales/uk";
import type { HomeContent } from "@/content/home/types";
import type { ContentLocale } from "@/i18n/types";
import { resolveContentLocale } from "@/i18n/types";

/**
 * Legacy home gateway content (older homepage sections).
 * Physical World home is the live homepage; this remains for any residual callers.
 * Locales without dedicated modules fall back to English (D-0161).
 */
const HOME_BY_LOCALE: Partial<Record<ContentLocale, HomeContent>> = {
  en: homeContentEn,
  ar: homeContentAr,
  he: homeContentHe,
  ru: homeContentRu,
  uk: homeContentUk,
};

export function getHomeContent(locale: Locale): HomeContent {
  return HOME_BY_LOCALE[resolveContentLocale(locale)] ?? homeContentEn;
}
