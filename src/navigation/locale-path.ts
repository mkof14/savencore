import { isLocale, type Locale } from "@/config/locales";

/** Build a locale-prefixed path with trailing slash. */
export function localizePath(locale: Locale, path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  const withSlash = normalized.endsWith("/") ? normalized : `${normalized}/`;

  if (withSlash === "/") {
    return `/${locale}/`;
  }

  return `/${locale}${withSlash}`;
}

/**
 * Replace the first path segment when it is a supported locale.
 * Falls back to the locale root when the pathname cannot be safely rewritten.
 */
export function swapLocaleInPathname(
  pathname: string,
  nextLocale: Locale,
): string {
  const segments = pathname.split("/").filter(Boolean);
  const first = segments[0];

  if (first && isLocale(first)) {
    const rest = segments.slice(1);
    if (rest.length === 0) {
      return `/${nextLocale}/`;
    }
    return `/${nextLocale}/${rest.join("/")}/`.replace(/\/{2,}/g, "/");
  }

  return `/${nextLocale}/`;
}

/** Whether a pathname is within a nav item's section for the active locale. */
export function isPathActive(
  pathname: string,
  locale: Locale,
  href: string,
): boolean {
  const target = localizePath(locale, href);
  const current = pathname.endsWith("/") ? pathname : `${pathname}/`;

  if (target === `/${locale}/`) {
    return current === `/${locale}/`;
  }

  return current === target || current.startsWith(target);
}
