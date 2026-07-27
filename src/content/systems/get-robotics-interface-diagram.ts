import type { Locale } from "@/config/locales";
import { deepLocalize } from "@/content/pages/localize-content";
import {
  roboticsInterfaceDiagramEn,
  type RoboticsInterfaceDiagramLabels,
} from "@/content/systems/robotics-interface-diagram";
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

export function getRoboticsInterfaceDiagramLabels(
  locale: Locale,
): RoboticsInterfaceDiagramLabels {
  const contentLocale = resolveContentLocale(locale);
  if (contentLocale === "en") return roboticsInterfaceDiagramEn;
  return deepLocalize(
    roboticsInterfaceDiagramEn,
    dictionariesByLocale[contentLocale],
  );
}
