/**
 * Engineering documentation design-system models — Phase 2.2.
 */

export type DocumentStatus =
  | "Research"
  | "Architecture"
  | "In Development"
  | "Reference"
  | "Draft";

export type DocumentType =
  | "Editorial"
  | "Technical"
  | "Research"
  | "Directory"
  | "Knowledge"
  | "Reference";

export type PageMetadata = {
  category?: string;
  documentType?: DocumentType;
  status?: DocumentStatus | string;
  version?: string;
  lastUpdated?: string;
  readingTime?: string;
  relatedDomain?: string;
};

export type EngineeringCalloutType =
  | "information"
  | "engineering-note"
  | "important"
  | "future-work";

export type EngineeringCallout = {
  id: string;
  type: EngineeringCalloutType;
  title: string;
  text: string;
};

export type EngineeringLink = {
  label: string;
  href: string;
};

export type EngineeringPrinciple = {
  id: string;
  title: string;
  text: string;
};

export type EngineeringLayer = {
  id: string;
  title: string;
  role?: string;
  description: string;
};

export type EngineeringDependency = {
  id: string;
  title: string;
  relationship: string;
};

export type ImplementationStatusItem = {
  id: string;
  label: string;
  status: string;
  note?: string;
};

export type EngineeringTableColumn = {
  id: string;
  header: string;
};

export type EngineeringTableRow = {
  id: string;
  cells: readonly string[];
};

export type EngineeringTableVariant =
  | "architecture"
  | "taxonomy"
  | "relationships"
  | "status";

export type EngineeringTable = {
  id: string;
  caption: string;
  variant: EngineeringTableVariant;
  columns: readonly EngineeringTableColumn[];
  rows: readonly EngineeringTableRow[];
};

export type EngineeringDiagramKind =
  | "hierarchy"
  | "relationship"
  | "layers"
  | "flow";

export type EngineeringDiagramNode = {
  id: string;
  label: string;
  detail?: string;
};

export type EngineeringDiagram = {
  id: string;
  kind: EngineeringDiagramKind;
  title: string;
  description: string;
  nodes: readonly EngineeringDiagramNode[];
};

export type FutureExpansionItem = {
  id: string;
  label: string;
  note: string;
};
