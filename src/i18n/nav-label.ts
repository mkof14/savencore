import type { Locale } from "@/config/locales";
import { getUi } from "@/i18n/ui";

/** Resolve a navigation/footer label from UI messages by stable id. */
export function getNavEntryLabel(
  locale: Locale,
  id: string,
  fallback: string,
): string {
  const entries = getUi(locale).navEntries as Record<string, string>;
  if (entries[id]) {
    return entries[id] ?? fallback;
  }
  if (id.startsWith("footer-")) {
    const withoutFooter = id.slice("footer-".length);
    if (entries[withoutFooter]) {
      return entries[withoutFooter] ?? fallback;
    }
    if (entries[`footer-${withoutFooter}`]) {
      return entries[`footer-${withoutFooter}`] ?? fallback;
    }
  }
  return fallback;
}

export function getPrimaryNavLabel(
  locale: Locale,
  id: string,
  fallback: string,
): string {
  const nav = getUi(locale).nav as Record<string, string>;
  return nav[id] ?? fallback;
}

export function getFooterGroupTitle(
  locale: Locale,
  id: string,
  fallback: string,
): string {
  const footer = getUi(locale).footer as Record<string, string>;
  return footer[id] ?? fallback;
}
