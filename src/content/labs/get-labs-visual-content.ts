import type { Locale } from "@/config/locales";
import { deepLocalize } from "@/content/pages/localize-content";
import { labsDataLoopEn, type LabsDataLoopLabels } from "@/content/labs/data-loop";
import {
  futureLabScenesEn,
  labsOverviewScenesEn,
  roboticsLabScenesEn,
} from "@/content/labs/scenes";
import type { HubScene } from "@/content/hub/types";
import { resolveContentLocale, type ContentLocale } from "@/i18n/types";

import { dictionary as dictionaryAr } from "@/content/flagship/dictionaries/ar";
import { dictionary as dictionaryDe } from "@/content/flagship/dictionaries/de";
import { dictionary as dictionaryEs } from "@/content/flagship/dictionaries/es";
import { dictionary as dictionaryFr } from "@/content/flagship/dictionaries/fr";
import { dictionary as dictionaryHe } from "@/content/flagship/dictionaries/he";
import { dictionary as dictionaryJa } from "@/content/flagship/dictionaries/ja";
import { dictionary as dictionaryRu } from "@/content/flagship/dictionaries/ru";
import { dictionary as dictionaryUk } from "@/content/flagship/dictionaries/uk";
import { dictionary as dictionaryZhCn } from "@/content/flagship/dictionaries/zh-cn";

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

function localizeLabs<T>(content: T, locale: Locale): T {
  const contentLocale = resolveContentLocale(locale);
  if (contentLocale === "en") return content;
  return deepLocalize(content, dictionariesByLocale[contentLocale]);
}

export function getLabsDataLoopLabels(locale: Locale): LabsDataLoopLabels {
  return localizeLabs(labsDataLoopEn, locale);
}

export function getLabsOverviewScenes(locale: Locale): readonly HubScene[] {
  return localizeLabs(labsOverviewScenesEn, locale);
}

export function getRoboticsLabScenes(locale: Locale): readonly HubScene[] {
  return localizeLabs(roboticsLabScenesEn, locale);
}

export function getFutureLabScenes(locale: Locale): readonly HubScene[] {
  return localizeLabs(futureLabScenesEn, locale);
}
