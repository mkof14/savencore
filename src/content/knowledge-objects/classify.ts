/**
 * Conservative classification — maps existing entity/page signals only.
 * Never upgrades maturity or evidence beyond what source data supports.
 */

import type { DocumentStatus } from "@/components/engineering/engineering-types";
import type {
  KnowledgeEntity,
  KnowledgeEntityStatus,
} from "@/content/knowledge/entity-types";
import type {
  KnowledgeEvidenceLevel,
  KnowledgeMaturity,
  KnowledgeObjectType,
} from "@/content/knowledge-objects/types";

const TYPE_OVERRIDES: Readonly<Record<string, KnowledgeObjectType>> = {
  "human-data": "Foundation",
  "human-data-model": "System",
  "safety-layer": "Control",
  "clinical-interfaces": "Interface",
  "communication-layer": "Interface",
  privacy: "Standard",
  security: "Standard",
  interoperability: "Standard",
  "trust-architecture": "Policy",
  "trust-privacy": "Policy",
  "trust-security": "Policy",
  "trust-safety": "Policy",
  "human-oversight": "Policy",
  transparency: "Policy",
  "ethics-responsible-use": "Policy",
  limitations: "Policy",
  "research-areas": "Research",
};

export function classifyObjectType(
  entity: KnowledgeEntity | undefined,
  knowledgeId: string,
  typeOverride?: KnowledgeObjectType,
): KnowledgeObjectType {
  if (typeOverride) {
    return typeOverride;
  }
  if (TYPE_OVERRIDES[knowledgeId]) {
    return TYPE_OVERRIDES[knowledgeId]!;
  }
  if (entity && TYPE_OVERRIDES[entity.id]) {
    return TYPE_OVERRIDES[entity.id]!;
  }
  if (!entity) {
    if (knowledgeId.startsWith("page-research")) {
      return "Research";
    }
    if (knowledgeId.startsWith("page-foundation") || knowledgeId === "page-purpose") {
      return "Foundation";
    }
    if (knowledgeId.startsWith("page-applications")) {
      return "Application";
    }
    if (knowledgeId.startsWith("page-trust")) {
      return "Policy";
    }
    if (knowledgeId.startsWith("page-systems")) {
      return "System";
    }
    return "Reference";
  }

  switch (entity.entityType) {
    case "foundation":
      return "Foundation";
    case "system":
      return "System";
    case "application":
      return "Application";
    case "trust":
      return "Policy";
    case "research-area":
    case "research-output":
      return "Research";
    case "technology":
      return "Reference";
    case "company":
      return "Reference";
    default:
      return "Reference";
  }
}

function maturityFromDocumentStatus(
  status: string | undefined,
): KnowledgeMaturity | null {
  if (!status) {
    return null;
  }
  const normalized = status.trim().toLowerCase();
  if (normalized === "draft") {
    return "Draft";
  }
  if (normalized === "research") {
    return "Experimental";
  }
  if (normalized === "architecture" || normalized === "in development") {
    return "Engineering Review";
  }
  if (normalized === "reference" || normalized.includes("reference")) {
    return "Published";
  }
  return null;
}

function maturityFromEntityStatus(
  status: KnowledgeEntityStatus,
): KnowledgeMaturity {
  switch (status) {
    case "conceptual":
    case "planned":
      return "Draft";
    case "research":
      return "Experimental";
    case "active-development":
      return "Engineering Review";
    case "foundational":
    case "reference":
      return "Published";
    default:
      return "Draft";
  }
}

/**
 * Derive maturity without overstating.
 * Validated is never inferred — only explicit future assignment may set it.
 */
export function classifyMaturity(
  documentStatus: DocumentStatus | string | undefined,
  entity: KnowledgeEntity | undefined,
): KnowledgeMaturity {
  const fromDocument = maturityFromDocumentStatus(documentStatus);
  if (fromDocument) {
    return fromDocument;
  }
  if (entity) {
    return maturityFromEntityStatus(entity.status);
  }
  return "Draft";
}

/**
 * Evidence is independent of maturity. Defaults to Unknown when unclear.
 */
export function classifyEvidence(
  documentStatus: DocumentStatus | string | undefined,
  entity: KnowledgeEntity | undefined,
): KnowledgeEvidenceLevel {
  const status = documentStatus?.trim().toLowerCase();
  if (status === "research") {
    return "Research";
  }
  if (status === "architecture" || status === "in development") {
    return "Engineering";
  }
  if (status === "reference" || (status && status.includes("reference"))) {
    return "Concept";
  }
  if (entity?.status === "research") {
    return "Research";
  }
  if (entity?.status === "conceptual" || entity?.status === "planned") {
    return "Concept";
  }
  if (
    entity?.entityType === "technology" ||
    entity?.entityType === "system" ||
    entity?.entityType === "trust"
  ) {
    return "Engineering";
  }
  if (entity?.entityType === "application") {
    return "Concept";
  }
  return "Unknown";
}
