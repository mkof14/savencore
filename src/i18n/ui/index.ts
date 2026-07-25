import type { Locale } from "@/config/locales";
import { resolveUiLocale, type UiLocale } from "@/i18n/types";
import { uiAr } from "@/i18n/ui/ar";
import { uiDe } from "@/i18n/ui/de";
import { uiEn, type UiMessages } from "@/i18n/ui/en";
import { uiEs } from "@/i18n/ui/es";
import { uiFr } from "@/i18n/ui/fr";
import { uiHe } from "@/i18n/ui/he";
import { uiJa } from "@/i18n/ui/ja";
import { uiRu } from "@/i18n/ui/ru";
import { uiUk } from "@/i18n/ui/uk";
import { uiZhCn } from "@/i18n/ui/zh-cn";

const UI_BY_LOCALE: Record<UiLocale, UiMessages> = {
  en: uiEn,
  es: uiEs,
  de: uiDe,
  fr: uiFr,
  ja: uiJa,
  "zh-cn": uiZhCn,
  ar: uiAr,
  he: uiHe,
  ru: uiRu,
  uk: uiUk,
};

/** UI chrome messages for a locale. */
export function getUi(locale: Locale): UiMessages {
  return UI_BY_LOCALE[resolveUiLocale(locale)];
}

export type { UiMessages };
