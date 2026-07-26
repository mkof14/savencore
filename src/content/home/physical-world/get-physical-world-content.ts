import type { Locale } from "@/config/locales";
import { physicalWorldHomeAr } from "@/content/home/physical-world/locales/ar";
import { physicalWorldHomeDe } from "@/content/home/physical-world/locales/de";
import { physicalWorldHomeEn } from "@/content/home/physical-world/locales/en";
import { physicalWorldHomeEs } from "@/content/home/physical-world/locales/es";
import { physicalWorldHomeFr } from "@/content/home/physical-world/locales/fr";
import { physicalWorldHomeHe } from "@/content/home/physical-world/locales/he";
import { physicalWorldHomeJa } from "@/content/home/physical-world/locales/ja";
import { physicalWorldHomeRu } from "@/content/home/physical-world/locales/ru";
import { physicalWorldHomeUk } from "@/content/home/physical-world/locales/uk";
import { physicalWorldHomeZhCn } from "@/content/home/physical-world/locales/zh-cn";
import type { PhysicalWorldHomeContent } from "@/content/home/physical-world/types";
import { resolveContentLocale } from "@/i18n/types";

const PHYSICAL_WORLD_BY_LOCALE = {
  en: physicalWorldHomeEn,
  es: physicalWorldHomeEs,
  de: physicalWorldHomeDe,
  fr: physicalWorldHomeFr,
  ja: physicalWorldHomeJa,
  "zh-cn": physicalWorldHomeZhCn,
  ar: physicalWorldHomeAr,
  he: physicalWorldHomeHe,
  ru: physicalWorldHomeRu,
  uk: physicalWorldHomeUk,
} as const;

export function getPhysicalWorldHomeContent(
  locale: Locale,
): PhysicalWorldHomeContent {
  return PHYSICAL_WORLD_BY_LOCALE[resolveContentLocale(locale)];
}
