import type { Locale } from "@/config/locales";
import { mediaPageEn, type MediaPageContent } from "@/content/media/en";
import { deepLocalize } from "@/content/pages/localize-content";
import { resolveContentLocale, type ContentLocale } from "@/i18n/types";

import { dictionary as dictionaryAr } from "@/content/media/dictionaries/ar";
import { dictionary as dictionaryDe } from "@/content/media/dictionaries/de";
import { dictionary as dictionaryEs } from "@/content/media/dictionaries/es";
import { dictionary as dictionaryFr } from "@/content/media/dictionaries/fr";
import { dictionary as dictionaryHe } from "@/content/media/dictionaries/he";
import { dictionary as dictionaryJa } from "@/content/media/dictionaries/ja";
import { dictionary as dictionaryRu } from "@/content/media/dictionaries/ru";
import { dictionary as dictionaryUk } from "@/content/media/dictionaries/uk";
import { dictionary as dictionaryZhCn } from "@/content/media/dictionaries/zh-cn";

const dictionariesByLocale: Record<
  Exclude<ContentLocale, "en">,
  Record<string, string>
> = {
  es: dictionaryEs,
  de: dictionaryDe,
  fr: dictionaryFr,
  ja: dictionaryJa,
  "zh-cn": dictionaryZhCn,
  ar: dictionaryAr,
  he: dictionaryHe,
  ru: dictionaryRu,
  uk: dictionaryUk,
};

export function getMediaPageContent(locale: Locale): MediaPageContent {
  const contentLocale = resolveContentLocale(locale);
  if (contentLocale === "en") return mediaPageEn;
  return deepLocalize(mediaPageEn, dictionariesByLocale[contentLocale]);
}
