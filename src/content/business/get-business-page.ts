import type { Locale } from "@/config/locales";
import { resolveContentLocale, type ContentLocale } from "@/i18n/types";
import { deepLocalize } from "@/content/pages/localize-content";

import {
  businessPageContentEn,
  type BusinessPageContent,
} from "@/content/business/page-en";

import { dictionary as dictionaryAr } from "@/content/business/dictionaries/ar";
import { dictionary as dictionaryDe } from "@/content/business/dictionaries/de";
import { dictionary as dictionaryEs } from "@/content/business/dictionaries/es";
import { dictionary as dictionaryFr } from "@/content/business/dictionaries/fr";
import { dictionary as dictionaryHe } from "@/content/business/dictionaries/he";
import { dictionary as dictionaryJa } from "@/content/business/dictionaries/ja";
import { dictionary as dictionaryRu } from "@/content/business/dictionaries/ru";
import { dictionary as dictionaryUk } from "@/content/business/dictionaries/uk";
import { dictionary as dictionaryZhCn } from "@/content/business/dictionaries/zh-cn";

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

/** Business page (D-0284). English is canonical; body localized via deepLocalize. */
export function getBusinessPageContent(locale: Locale): BusinessPageContent {
  const contentLocale = resolveContentLocale(locale);
  if (contentLocale === "en") {
    return businessPageContentEn;
  }
  return deepLocalize(
    businessPageContentEn,
    dictionariesByLocale[contentLocale],
  );
}
