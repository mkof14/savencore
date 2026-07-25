import type { Locale } from "@/config/locales";

/** Locales with approved full-site translations in this sprint. */
export const CONTENT_LOCALES = ["en", "ar", "he", "ru", "uk"] as const;

export type ContentLocale = (typeof CONTENT_LOCALES)[number];

/** Locales with localized UI chrome. */
export const UI_LOCALES = [
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

export type UiLocale = (typeof UI_LOCALES)[number];

export function isContentLocale(locale: Locale): locale is ContentLocale {
  return (CONTENT_LOCALES as readonly string[]).includes(locale);
}

export function isUiLocale(locale: Locale): locale is UiLocale {
  return (UI_LOCALES as readonly string[]).includes(locale);
}

/** Resolve a content locale — fall back to English when not yet translated. */
export function resolveContentLocale(locale: Locale): ContentLocale {
  return isContentLocale(locale) ? locale : "en";
}

/** Resolve a UI locale — fall back to English only for an unsupported locale. */
export function resolveUiLocale(locale: Locale): UiLocale {
  return isUiLocale(locale) ? locale : "en";
}
