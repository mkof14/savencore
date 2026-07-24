/**
 * Typed content models for internal page types (Phase 1E.2).
 * Content-facing only — not CMS or database schemas.
 */

export type PageLink = {
  label: string;
  href: string;
};

export type PageSectionNavItem = {
  id: string;
  label: string;
};

type CommonPageFields = {
  label: string;
  title: string;
  introduction: string;
  status?: string;
  sectionNav?: readonly PageSectionNavItem[];
  relatedLinks?: readonly PageLink[];
};

export type EditorialSection = {
  id: string;
  title: string;
  paragraphs: readonly string[];
};

export type EditorialPrinciple = {
  id: string;
  title: string;
  text: string;
};

export type EditorialPageContent = CommonPageFields & {
  sections: readonly EditorialSection[];
  principles?: readonly EditorialPrinciple[];
};

export type TechnicalArchitectureSection = {
  id: string;
  title: string;
  paragraphs: readonly string[];
};

export type TechnicalIndexedItem = {
  id: string;
  title: string;
  role?: string;
  description: string;
};

export type TechnicalPageContent = CommonPageFields & {
  developmentNote?: string;
  architectureSections: readonly TechnicalArchitectureSection[];
  indexedItemsHeading?: string;
  indexedItems?: readonly TechnicalIndexedItem[];
};

export type ResearchArea = {
  id: string;
  title: string;
  summary: string;
};

export type ResearchEntry = {
  id: string;
  title: string;
  summary: string;
  meta?: string;
};

export type ResearchPageContent = CommonPageFields & {
  areas: readonly ResearchArea[];
  /** Structural filter labels only — not interactive in this phase. */
  filterLabels?: readonly string[];
  entriesHeading?: string;
  entries?: readonly ResearchEntry[];
};

export type DirectoryEntry = {
  id: string;
  title: string;
  description: string;
  href: string;
  linkLabel: string;
};

export type DirectoryGroup = {
  id: string;
  title: string;
  links: readonly PageLink[];
};

export type DirectoryPageContent = CommonPageFields & {
  accessNote?: string;
  entries: readonly DirectoryEntry[];
  groups?: readonly DirectoryGroup[];
};
