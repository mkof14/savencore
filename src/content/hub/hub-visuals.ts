/**
 * Layer-1 / domain visual themes (D-0158 / D-0160).
 * Masthead paths resolve via domain-visuals for full route coverage.
 */

import {
  domainPathImageForHref,
  domainVisualForHref,
} from "@/content/domain/domain-visuals";

export type HubVisualTheme =
  | "purpose"
  | "labs"
  | "applications"
  | "technology"
  | "systems"
  | "research"
  | "trust"
  | "investors"
  | "foundation"
  | "default";

export type HubMastheadVisual = {
  theme: HubVisualTheme;
  mastheadImage: string;
  mastheadAlt: string;
};

function hubFromDomain(
  href: string,
  theme: Exclude<HubVisualTheme, "default">,
): HubMastheadVisual {
  const visual = domainVisualForHref(href);
  return {
    theme,
    mastheadImage: visual.mastheadImage,
    mastheadAlt: visual.mastheadAlt,
  };
}

export const HUB_MASTHEAD: Record<
  Exclude<HubVisualTheme, "default">,
  HubMastheadVisual
> = {
  purpose: hubFromDomain("/purpose/", "purpose"),
  labs: hubFromDomain("/labs/", "labs"),
  applications: hubFromDomain("/applications/", "applications"),
  technology: hubFromDomain("/technology/", "technology"),
  systems: hubFromDomain("/systems/", "systems"),
  research: hubFromDomain("/research/", "research"),
  trust: hubFromDomain("/trust/", "trust"),
  investors: hubFromDomain("/investors/", "investors"),
  foundation: hubFromDomain("/foundation/", "foundation"),
};

export function pathImageForHref(href: string, index = 0): string {
  return domainPathImageForHref(href, index);
}
