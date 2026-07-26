import type { Locale } from "@/config/locales";
import { resolveContentLocale, type ContentLocale } from "@/i18n/types";
import { deepLocalize } from "@/content/pages/localize-content";
import { LEGAL_PAGES, getLegalSlugs as getSlugsFromPages } from "@/content/legal/pages";
import type { LegalPageContent } from "@/content/legal/types";
import {
  getLegalDraftBanner,
  getLegalLastUpdatedLabel,
} from "@/content/legal/types";

import { dictionary as dictionaryAr } from "@/content/legal/dictionaries/ar";
import { dictionary as dictionaryDe } from "@/content/legal/dictionaries/de";
import { dictionary as dictionaryEs } from "@/content/legal/dictionaries/es";
import { dictionary as dictionaryFr } from "@/content/legal/dictionaries/fr";
import { dictionary as dictionaryHe } from "@/content/legal/dictionaries/he";
import { dictionary as dictionaryJa } from "@/content/legal/dictionaries/ja";
import { dictionary as dictionaryRu } from "@/content/legal/dictionaries/ru";
import { dictionary as dictionaryUk } from "@/content/legal/dictionaries/uk";
import { dictionary as dictionaryZhCn } from "@/content/legal/dictionaries/zh-cn";

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

const BY_SLUG = new Map(LEGAL_PAGES.map((page) => [page.slug, page]));

function localizeLegal<T>(content: T, locale: Locale): T {
  const contentLocale = resolveContentLocale(locale);
  if (contentLocale === "en") {
    return content;
  }
  return deepLocalize(content, dictionariesByLocale[contentLocale]);
}

export function getLegalPage(
  slug: string,
  locale: Locale,
): LegalPageContent | undefined {
  const page = BY_SLUG.get(slug);
  if (!page) {
    return undefined;
  }
  return localizeLegal(page, locale);
}

export function getLegalSlugs(): string[] {
  return getSlugsFromPages();
}

export { getLegalDraftBanner, getLegalLastUpdatedLabel };
