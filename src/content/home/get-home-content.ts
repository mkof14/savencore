import type { Locale } from "@/config/locales";
import { homeContentEn } from "@/content/home/locales/en";
import { homeContentAr } from "@/content/home/locales/ar";
import { homeContentHe } from "@/content/home/locales/he";
import { homeContentRu } from "@/content/home/locales/ru";
import { homeContentUk } from "@/content/home/locales/uk";
import type { HomeContent } from "@/content/home/types";
import { resolveContentLocale } from "@/i18n/types";

const HOME_BY_LOCALE = {
  en: homeContentEn,
  ar: homeContentAr,
  he: homeContentHe,
  ru: homeContentRu,
  uk: homeContentUk,
} as const;

export function getHomeContent(locale: Locale): HomeContent {
  return HOME_BY_LOCALE[resolveContentLocale(locale)];
}
