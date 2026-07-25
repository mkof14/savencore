import type { Locale } from "@/config/locales";

/** Locales with approved full-site translations in this sprint. */
export const CONTENT_LOCALES = ["en", "ar", "he", "ru", "uk"] as const;

export type ContentLocale = (typeof CONTENT_LOCALES)[number];

export function isContentLocale(locale: Locale): locale is ContentLocale {
  return (CONTENT_LOCALES as readonly string[]).includes(locale);
}

/** Resolve a content locale — fall back to English when not yet translated. */
export function resolveContentLocale(locale: Locale): ContentLocale {
  return isContentLocale(locale) ? locale : "en";
}
