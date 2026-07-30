/**
 * Typed content models for internal page types.
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
  relatedLinksHeading?: string;
};

export type ArchitectureDiagramKind =
  | "hierarchy"
  | "relationship"
  | "layers"
  | "flow";

export type ArchitectureDiagramNode = {
  id: string;
  label: string;
  detail?: string;
};

export type ArchitectureDiagram = {
  id: string;
  kind: ArchitectureDiagramKind;
  title: string;
  /** Accessible description of the diagram structure. */
  description: string;
  nodes: readonly ArchitectureDiagramNode[];
};

export type EditorialSubsection = {
  id: string;
  title: string;
  paragraphs: readonly string[];
};

export type EditorialSection = {
  id: string;
  title: string;
  paragraphs?: readonly string[];
  subsections?: readonly EditorialSubsection[];
};

export type EditorialPrinciple = {
  id: string;
  title: string;
  text: string;
};

export type EditorialPageContent = CommonPageFields & {
  diagrams?: readonly ArchitectureDiagram[];
  sections: readonly EditorialSection[];
  principlesHeading?: string;
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

export type FoundationLayerField = {
  id: string;
  title: string;
  text: string;
};

/** BioMath Core model-scope grid (D-0227) — Architecture. */
export type FoundationLayerScopeGrid = {
  heading: string;
  intro: string;
  servicesHighlight: string;
  disclaimer: string;
  categories: readonly string[];
};

export type FoundationLayer = {
  id: string;
  title: string;
  fields: readonly FoundationLayerField[];
  scopeGrid?: FoundationLayerScopeGrid;
};

export type TechnicalPageContent = CommonPageFields & {
  developmentNote?: string;
  diagrams?: readonly ArchitectureDiagram[];
  layers?: readonly FoundationLayer[];
  architectureSections?: readonly TechnicalArchitectureSection[];
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
