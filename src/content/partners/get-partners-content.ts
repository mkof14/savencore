import type { Locale } from "@/config/locales";
import { deepLocalize } from "@/content/pages/localize-content";
import { partnersDictionaries } from "@/content/partners/dictionaries";
import { partnersPageEn } from "@/content/partners/page-en";
import { resolveContentLocale } from "@/i18n/types";

/**
 * Partners brochure (D-0280 / D-0281). English is canonical; missing dictionary
 * strings fall back to English via deepLocalize.
 */
export function getPartnersPageContent(locale: Locale) {
  const contentLocale = resolveContentLocale(locale);
  if (contentLocale === "en") {
    return partnersPageEn;
  }
  return deepLocalize(partnersPageEn, partnersDictionaries[contentLocale]);
}
