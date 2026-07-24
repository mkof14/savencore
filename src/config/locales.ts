/**
 * Canonical locale configuration for SAVEN Core.
 * All locale-dependent behavior must reference this module.
 * Do not duplicate the locale list elsewhere.
 */

export const LOCALES = [
  "en",
  "es",
  "de",
  "fr",
  "ja",
  "zh-cn",
  "ar",
  "he",
  "uk",
  "ru",
] as const;

export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "en";

export const RTL_LOCALES = ["ar", "he"] as const;

export type RtlLocale = (typeof RTL_LOCALES)[number];

export type TextDirection = "ltr" | "rtl";

/** BCP 47 language tags for the HTML lang attribute. */
const HTML_LANG_BY_LOCALE: Record<Locale, string> = {
  en: "en",
  es: "es",
  de: "de",
  fr: "fr",
  ja: "ja",
  "zh-cn": "zh-CN",
  ar: "ar",
  he: "he",
  uk: "uk",
  ru: "ru",
};

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

export function isRtlLocale(locale: Locale): boolean {
  return (RTL_LOCALES as readonly string[]).includes(locale);
}

export function getTextDirection(locale: Locale): TextDirection {
  return isRtlLocale(locale) ? "rtl" : "ltr";
}

export function getHtmlLang(locale: Locale): string {
  return HTML_LANG_BY_LOCALE[locale];
}
