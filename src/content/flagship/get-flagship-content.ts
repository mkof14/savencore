import type { Locale } from "@/config/locales";
import { resolveContentLocale, type ContentLocale } from "@/i18n/types";
import { deepLocalize } from "@/content/pages/localize-content";

import {
  futureLabPageEn,
  investorsPageEn,
  labsHubPageEn,
  roboticsInterfacePageEn,
  roboticsLabPageEn,
  type FlagshipBrochureContent,
  type FlagshipPageContent,
} from "@/content/flagship/en";

import { dictionary as dictionaryAr } from "@/content/flagship/dictionaries/ar";
import { dictionary as dictionaryDe } from "@/content/flagship/dictionaries/de";
import { dictionary as dictionaryEs } from "@/content/flagship/dictionaries/es";
import { dictionary as dictionaryFr } from "@/content/flagship/dictionaries/fr";
import { dictionary as dictionaryHe } from "@/content/flagship/dictionaries/he";
import { dictionary as dictionaryJa } from "@/content/flagship/dictionaries/ja";
import { dictionary as dictionaryRu } from "@/content/flagship/dictionaries/ru";
import { dictionary as dictionaryUk } from "@/content/flagship/dictionaries/uk";
import { dictionary as dictionaryZhCn } from "@/content/flagship/dictionaries/zh-cn";

export type FlagshipPageKey =
  | "labs-hub"
  | "investors"
  | "robotics-lab"
  | "robotics-interface"
  | "future-lab";

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

function localizeFlagship<T>(content: T, locale: Locale): T {
  const contentLocale = resolveContentLocale(locale);
  if (contentLocale === "en") {
    return content;
  }
  return deepLocalize(content, dictionariesByLocale[contentLocale]);
}

export function getRoboticsLabPageContent(locale: Locale): FlagshipBrochureContent {
  return localizeFlagship(roboticsLabPageEn, locale);
}

export function getRoboticsInterfacePageContent(locale: Locale): FlagshipPageContent {
  return localizeFlagship(roboticsInterfacePageEn, locale);
}

export function getFutureLabPageContent(locale: Locale): FlagshipPageContent {
  return localizeFlagship(futureLabPageEn, locale);
}

export function getLabsHubPageContent(locale: Locale): FlagshipBrochureContent {
  return localizeFlagship(labsHubPageEn, locale);
}

export function getInvestorsPageContent(locale: Locale): FlagshipBrochureContent {
  return localizeFlagship(investorsPageEn, locale);
}

export function getFlagshipPageContent(
  key: FlagshipPageKey,
  locale: Locale,
): FlagshipPageContent | FlagshipBrochureContent {
  switch (key) {
    case "labs-hub":
      return getLabsHubPageContent(locale);
    case "investors":
      return getInvestorsPageContent(locale);
    case "robotics-lab":
      return getRoboticsLabPageContent(locale);
    case "robotics-interface":
      return getRoboticsInterfacePageContent(locale);
    case "future-lab":
      return getFutureLabPageContent(locale);
  }
}
