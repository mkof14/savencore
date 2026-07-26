import type { Locale } from "@/config/locales";
import { contactPageEn, type ContactPageContent } from "@/content/contact/en";
import { deepLocalize } from "@/content/pages/localize-content";
import { resolveContentLocale, type ContentLocale } from "@/i18n/types";

import { dictionary as dictionaryAr } from "@/content/contact/dictionaries/ar";
import { dictionary as dictionaryDe } from "@/content/contact/dictionaries/de";
import { dictionary as dictionaryEs } from "@/content/contact/dictionaries/es";
import { dictionary as dictionaryFr } from "@/content/contact/dictionaries/fr";
import { dictionary as dictionaryHe } from "@/content/contact/dictionaries/he";
import { dictionary as dictionaryJa } from "@/content/contact/dictionaries/ja";
import { dictionary as dictionaryRu } from "@/content/contact/dictionaries/ru";
import { dictionary as dictionaryUk } from "@/content/contact/dictionaries/uk";
import { dictionary as dictionaryZhCn } from "@/content/contact/dictionaries/zh-cn";

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

export function getContactPageContent(locale: Locale): ContactPageContent {
  const contentLocale = resolveContentLocale(locale);
  if (contentLocale === "en") return contactPageEn;
  return deepLocalize(contactPageEn, dictionariesByLocale[contentLocale]);
}
