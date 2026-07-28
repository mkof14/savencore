import type { Locale } from "@/config/locales";
import {
  faqPageEn,
  type FaqPageContent,
  type FaqSection,
  type FaqSectionId,
} from "@/content/faq/en";

export type { FaqPageContent, FaqSection, FaqSectionId };
import { deepLocalize } from "@/content/pages/localize-content";
import { resolveContentLocale, type ContentLocale } from "@/i18n/types";

import { dictionary as dictionaryAr } from "@/content/faq/dictionaries/ar";
import { dictionary as dictionaryDe } from "@/content/faq/dictionaries/de";
import { dictionary as dictionaryEs } from "@/content/faq/dictionaries/es";
import { dictionary as dictionaryFr } from "@/content/faq/dictionaries/fr";
import { dictionary as dictionaryHe } from "@/content/faq/dictionaries/he";
import { dictionary as dictionaryJa } from "@/content/faq/dictionaries/ja";
import { dictionary as dictionaryRu } from "@/content/faq/dictionaries/ru";
import { dictionary as dictionaryUk } from "@/content/faq/dictionaries/uk";
import { dictionary as dictionaryZhCn } from "@/content/faq/dictionaries/zh-cn";

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

export function getFaqPageContent(locale: Locale): FaqPageContent {
  const contentLocale = resolveContentLocale(locale);
  if (contentLocale === "en") return faqPageEn;
  return deepLocalize(faqPageEn, dictionariesByLocale[contentLocale]);
}
