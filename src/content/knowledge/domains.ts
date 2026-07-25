import type { KnowledgeDomain, KnowledgeDiagram } from "@/content/knowledge/types";

/**
 * Top-level knowledge domains for the SAVEN Core engineering knowledge center.
 * Architecture metadata only — not long-form page content.
 */
export const knowledgeDomains: readonly KnowledgeDomain[] = [
  {
    id: "purpose",
    title: "Purpose",
    href: "/purpose/",
    purpose:
      "Define why SAVEN Core exists and the human reason for the engineering work.",
    scope:
      "Mission orientation, human-centered principles, responsible intelligence and long-term direction.",
    parent: null,
    children: [
      "purpose",
      "mission",
      "what-we-build",
      "who-we-build-for",
      "engineering-principles",
      "human-centered-systems",
      "responsible-intelligence",
      "long-term-vision",
    ],
    relatedDomains: ["foundation", "trust", "research", "company"],
    futureExpansion: [
      "Purpose statements by application context",
      "Governance principles index",
    ],
  },
  {
    id: "foundation",
    title: "Foundation",
    href: "/foundation/",
    purpose:
      "Define what SAVEN Core is built upon and the permanent layer sequence.",
    scope:
      "BioMath Life, BioMath Core, SAVEN, SAVEN Core, Human Data Model and design approach.",
    parent: null,
    children: [
      "biomath-life",
      "biomath-core",
      "saven",
      "saven-core",
      "human-data-model",
      "system-relationships",
      "technology-relationships",
      "development-philosophy",
    ],
    relatedDomains: ["purpose", "technology", "systems", "research"],
    futureExpansion: [
      "Layer detail pages",
      "Dependency maps",
      "Status registers per layer",
    ],
  },
  {
    id: "technology",
    title: "Technology",
    href: "/technology/",
    purpose:
      "Organize the technical disciplines that support the foundation and systems.",
    scope:
      "Artificial intelligence, human data, robotics, automation, privacy, security, data infrastructure and interoperability.",
    parent: null,
    children: [
      "artificial-intelligence",
      "human-data",
      "robotics",
      "automation",
      "privacy",
      "security",
      "data-infrastructure",
      "interoperability",
    ],
    relatedDomains: ["systems", "research", "trust", "foundation"],
    futureExpansion: [
      "Discipline deep pages",
      "Method notes",
      "Interface contracts",
    ],
  },
  {
    id: "systems",
    title: "Systems",
    href: "/systems/",
    purpose:
      "Define the engineering systems that implement foundation and technology capabilities.",
    scope:
      "Human Data Model, AI decision support, robotics, drones, clinical interfaces, knowledge engine, safety and communication layers.",
    parent: null,
    children: [
      "human-data-model",
      "ai-decision-support",
      "robotics-layer",
      "drone-systems",
      "clinical-interfaces",
      "knowledge-engine",
      "safety-layer",
      "communication-layer",
    ],
    relatedDomains: ["technology", "applications", "research", "trust"],
    futureExpansion: [
      "System status pages",
      "Interface catalogs",
      "Operational boundary notes",
    ],
  },
  {
    id: "research",
    title: "Research",
    href: "/research/",
    purpose:
      "Structure research areas, documents and laboratories that shape engineering practice.",
    scope:
      "Research areas, white papers, technical notes, publications, future research and laboratories.",
    parent: null,
    children: [
      "research-areas",
      "white-papers",
      "engineering-notes",
      "publications",
      "future-research",
      "laboratories",
    ],
    relatedDomains: ["technology", "systems", "foundation", "trust"],
    futureExpansion: [
      "Publication registry",
      "Lab pages",
      "Evidence indexes",
    ],
  },
  {
    id: "applications",
    title: "Applications",
    href: "/applications/",
    purpose:
      "Organize intended application contexts beginning with human environments.",
    scope:
      "Healthcare, home, hospitals, emergency, industrial, government, agriculture and research contexts.",
    parent: null,
    children: [
      "healthcare",
      "home",
      "hospitals",
      "emergency",
      "industrial",
      "government",
      "agriculture",
      "research",
    ],
    relatedDomains: ["systems", "technology", "purpose", "trust"],
    futureExpansion: [
      "Context pages",
      "Workflow notes",
      "Institutional collaboration topics",
    ],
  },
  {
    id: "trust",
    title: "Trust",
    href: "/trust/",
    purpose:
      "Define safety, privacy and human oversight as structural requirements of the architecture.",
    scope:
      "Safety architecture, privacy architecture, human oversight, permissions and accountability.",
    parent: null,
    children: [
      "trust-architecture",
      "trust-privacy",
      "trust-security",
      "trust-safety",
      "human-oversight",
      "transparency",
      "ethics-responsible-use",
      "limitations",
    ],
    relatedDomains: ["purpose", "systems", "technology", "research"],
    futureExpansion: [
      "Trust principles pages",
      "Escalation models",
      "Review pathways",
    ],
  },
  {
    id: "company",
    title: "Company",
    href: "/company/",
    purpose:
      "Describe the engineering organization that develops and governs SAVEN Core.",
    scope:
      "Organization, approach, collaboration posture and institutional identity without invented facts.",
    parent: null,
    children: ["about", "approach", "collaboration", "contact"],
    relatedDomains: ["purpose", "research", "applications", "trust"],
    futureExpansion: [
      "Leadership when approved",
      "Legal entity details when confirmed",
      "Contact destinations when supplied",
    ],
  },
] as const;

export const knowledgeDomainMap: Record<
  KnowledgeDomain["id"],
  KnowledgeDomain
> = Object.fromEntries(
  knowledgeDomains.map((domain) => [domain.id, domain]),
) as Record<KnowledgeDomain["id"], KnowledgeDomain>;

/** Site-level knowledge map diagram (HTML/CSS rendering). */
export const knowledgeMapDiagram: KnowledgeDiagram = {
  id: "knowledge-map",
  kind: "relationship",
  title: "Knowledge domain map",
  description:
    "Relationship map of the eight top-level SAVEN Core knowledge domains.",
  nodes: knowledgeDomains.map((domain) => ({
    id: domain.id,
    label: domain.title,
    detail: domain.purpose,
  })),
};
