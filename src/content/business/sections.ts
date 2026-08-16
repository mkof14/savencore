/**
 * Business section leaves under `/business/` (D-0288 / D-0291).
 * Hub: `/business/`. Each topic is its own short page — not one long scroll.
 */

export const BUSINESS_SECTION_IDS = [
  "market-context",
  "human-data",
  "saven-physical-systems",
  "where-value-is-created",
  "applications",
  "why-the-timing-matters",
  "what-we-know-today",
] as const;

export type BusinessSectionId = (typeof BUSINESS_SECTION_IDS)[number];

/** Older D-0288 slugs that still redirect to the canonical leaf. */
export const BUSINESS_LEGACY_SECTION_SLUGS: Record<string, BusinessSectionId> = {
  "why-timing-matters": "why-the-timing-matters",
  "what-we-know": "what-we-know-today",
};

export function isBusinessSectionId(value: string): value is BusinessSectionId {
  return (BUSINESS_SECTION_IDS as readonly string[]).includes(value);
}

export function resolveBusinessSectionSlug(
  slug: string,
): BusinessSectionId | null {
  if (isBusinessSectionId(slug)) {
    return slug;
  }
  return BUSINESS_LEGACY_SECTION_SLUGS[slug] ?? null;
}

export function businessSectionPath(
  id: BusinessSectionId,
): `/business/${BusinessSectionId}/` {
  return `/business/${id}/`;
}
