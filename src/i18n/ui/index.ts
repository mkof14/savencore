import type { Locale } from "@/config/locales";
import { resolveContentLocale } from "@/i18n/types";
import { uiAr } from "@/i18n/ui/ar";
import { uiEn, type UiMessages } from "@/i18n/ui/en";
import { uiHe } from "@/i18n/ui/he";
import { uiRu } from "@/i18n/ui/ru";
import { uiUk } from "@/i18n/ui/uk";

const UI_BY_LOCALE = {
  en: uiEn,
  ar: uiAr,
  he: uiHe,
  ru: uiRu,
  uk: uiUk,
} as const;

/** UI chrome messages for a locale (English fallback outside content locales). */
export function getUi(locale: Locale): UiMessages {
  return UI_BY_LOCALE[resolveContentLocale(locale)];
}

export type { UiMessages };
