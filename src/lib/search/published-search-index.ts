/**
 * Lightweight title search index from published routes + nav/footer labels (D-0220).
 * No CMS, no full-text body search — titles and path segments only.
 */

import type { Locale } from "@/config/locales";
import { getNavEntryLabel, getPrimaryNavLabel } from "@/i18n/nav-label";
import { getUi } from "@/i18n/ui";
import { isFooterLinkPublished } from "@/navigation/navigation-types";
import {
  footerNavigation,
  primaryNavigation,
} from "@/navigation/site-navigation";
import {
  PUBLISHED_ROUTES,
  type PublishedRoute,
} from "@/navigation/published-routes";

export type PublishedSearchHit = {
  href: PublishedRoute;
  title: string;
  group: string;
};

function titleFromPath(href: string): string {
  if (href === "/") return "Home";
  const parts = href.replace(/^\/|\/$/g, "").split("/").filter(Boolean);
  const last = parts[parts.length - 1] ?? href;
  return last
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

/** Build searchable title entries for a locale (published routes only). */
export function buildPublishedSearchIndex(
  locale: Locale,
): readonly PublishedSearchHit[] {
  const ui = getUi(locale);
  const byHref = new Map<string, PublishedSearchHit>();

  const upsert = (href: string, title: string, group: string) => {
    if (!(PUBLISHED_ROUTES as readonly string[]).includes(href)) return;
    const route = href as PublishedRoute;
    const existing = byHref.get(href);
    if (!existing || existing.title.length < title.length) {
      byHref.set(href, { href: route, title, group });
    }
  };

  upsert("/", getPrimaryNavLabel(locale, "home", "Home"), ui.nav.home);

  for (const item of primaryNavigation) {
    upsert(
      item.href,
      getPrimaryNavLabel(locale, item.id, item.label),
      ui.footer.company || "Site",
    );
  }

  for (const group of footerNavigation) {
    for (const link of group.links) {
      if (!isFooterLinkPublished(link)) continue;
      upsert(
        link.href,
        getNavEntryLabel(locale, link.id, link.label),
        group.title,
      );
    }
  }

  for (const route of PUBLISHED_ROUTES) {
    if (route.startsWith("/auth/")) continue;
    if (!byHref.has(route)) {
      upsert(route, titleFromPath(route), "Site");
    }
  }

  return [...byHref.values()].sort((a, b) =>
    a.title.localeCompare(b.title, locale),
  );
}

export function filterPublishedSearchIndex(
  index: readonly PublishedSearchHit[],
  query: string,
): PublishedSearchHit[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return index.filter((hit) => {
    const hay = `${hit.title} ${hit.href} ${hit.group}`.toLowerCase();
    return hay.includes(q);
  });
}
