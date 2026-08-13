import type { Locale } from "@/config/locales";
import { deepLocalize } from "@/content/pages/localize-content";
import { responsibleDevelopmentDictionaries } from "@/content/trust/dictionaries";
import { responsibleDevelopmentPageEn } from "@/content/trust/responsible-development";
import { resolveContentLocale } from "@/i18n/types";

export function getResponsibleDevelopmentContent(locale: Locale) {
  const contentLocale = resolveContentLocale(locale);
  if (contentLocale === "en") {
    return responsibleDevelopmentPageEn;
  }
  return deepLocalize(
    responsibleDevelopmentPageEn,
    responsibleDevelopmentDictionaries[contentLocale],
  );
}
