import type { Locale } from "@/config/locales";
import { resolveContentLocale, type ContentLocale } from "@/i18n/types";
import { deepLocalize } from "@/content/pages/localize-content";

import {
  investorsPageContentEn,
  type InvestorsPageContent,
} from "@/content/investors/page-en";

import { dictionary as dictionaryAr } from "@/content/investors/dictionaries/ar";
import { dictionary as dictionaryDe } from "@/content/investors/dictionaries/de";
import { dictionary as dictionaryEs } from "@/content/investors/dictionaries/es";
import { dictionary as dictionaryFr } from "@/content/investors/dictionaries/fr";
import { dictionary as dictionaryHe } from "@/content/investors/dictionaries/he";
import { dictionary as dictionaryJa } from "@/content/investors/dictionaries/ja";
import { dictionary as dictionaryRu } from "@/content/investors/dictionaries/ru";
import { dictionary as dictionaryUk } from "@/content/investors/dictionaries/uk";
import { dictionary as dictionaryZhCn } from "@/content/investors/dictionaries/zh-cn";

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

export function getInvestorsPremiumPageContent(
  locale: Locale,
): InvestorsPageContent {
  const contentLocale = resolveContentLocale(locale);
  if (contentLocale === "en") {
    return investorsPageContentEn;
  }
  return deepLocalize(
    investorsPageContentEn,
    dictionariesByLocale[contentLocale],
  );
}
