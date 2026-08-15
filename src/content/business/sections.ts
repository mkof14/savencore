/**
 * Business section slugs under `/business/` (D-0288).
 * Hub remains `/business/`; leaves are one section each — not a landing scroll page.
 */

export const BUSINESS_SECTION_IDS = [
  "market-context",
  "human-data",
  "saven-physical-systems",
  "where-value-is-created",
  "applications",
  "why-timing-matters",
  "what-we-know",
] as const;

export type BusinessSectionId = (typeof BUSINESS_SECTION_IDS)[number];

export function isBusinessSectionId(value: string): value is BusinessSectionId {
  return (BUSINESS_SECTION_IDS as readonly string[]).includes(value);
}

export function businessSectionPath(id: BusinessSectionId): `/business/${BusinessSectionId}/` {
  return `/business/${id}/`;
}
