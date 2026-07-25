import type {
  FoundationLayerField,
  TechnicalPageContent,
} from "@/components/pages/page-types";
import { getFoundationHierarchyEntities } from "@/content/knowledge/entity-registry";

/**
 * Canonical Foundation page content — Phase 1F.1 / Phase 3.0.
 * Hierarchy diagram and layer order derive from the entity registry.
 * Layer field copy remains page-specific display content.
 */

const foundationHierarchy = getFoundationHierarchyEntities();

const foundationLayerDetails: Readonly<
  Record<string, { detail: string; fields: readonly FoundationLayerField[] }>
> = {
  "biomath-life": {
    detail: "Human-centered foundation",
    fields: [
      {
        id: "purpose",
        title: "Purpose",
        text: "Establish the human-centered foundation for understanding the individual across biological, medical, behavioral, environmental and life context.",
      },
      {
        id: "role",
        title: "Role",
        text: "The origin layer of the architecture. It defines why human understanding comes before product framing.",
      },
      {
        id: "relationship",
        title: "Relationship",
        text: "Feeds BioMath Core. Later layers inherit its human orientation and must not invert that priority.",
      },
      {
        id: "scope",
        title: "Scope",
        text: "Concepts, terminology and framing for health, behavior, context and daily life as connected parts of one human system.",
      },
      {
        id: "outputs",
        title: "Outputs",
        text: "Guiding questions, definitions and constraints that shape intelligence models and system boundaries.",
      },
      {
        id: "dependencies",
        title: "Dependencies",
        text: "Depends on approved human-purpose principles, privacy expectations and development-safe public communication.",
      },
    ],
  },
  "biomath-core": {
    detail: "Intelligence layer",
    fields: [
      {
        id: "purpose",
        title: "Purpose",
        text: "Organize human data and intelligence so context can be interpreted with permissions, privacy and accountable use.",
      },
      {
        id: "role",
        title: "Role",
        text: "The intelligence layer. It turns human-centered understanding into structured models and decision assistance.",
      },
      {
        id: "relationship",
        title: "Relationship",
        text: "Receives orientation from BioMath Life and provides the Human Data Model interface used by SAVEN and SAVEN Core.",
      },
      {
        id: "scope",
        title: "Scope",
        text: "Personal context, longitudinal information, signals, patterns, permissions, privacy controls and safe personalization logic.",
      },
      {
        id: "outputs",
        title: "Outputs",
        text: "Structured human-context representations, interpretation methods and governed interfaces for downstream systems.",
      },
      {
        id: "dependencies",
        title: "Dependencies",
        text: "Depends on BioMath Life definitions and on safety/privacy architecture that limits what may be used and by whom.",
      },
    ],
  },
  saven: {
    detail: "Execution layer",
    fields: [
      {
        id: "purpose",
        title: "Purpose",
        text: "Connect human understanding and intelligence with actions, workflows, devices and operational responses.",
      },
      {
        id: "role",
        title: "Role",
        text: "The execution layer. It is the physical and operational extension of the intelligence foundation.",
      },
      {
        id: "relationship",
        title: "Relationship",
        text: "Uses BioMath Core outputs and prepares the integration surface that SAVEN Core engineers as systems.",
      },
      {
        id: "scope",
        title: "Scope",
        text: "Interfaces between intelligence and action: robotics pathways, autonomous system controls, sensors and assistance workflows.",
      },
      {
        id: "outputs",
        title: "Outputs",
        text: "Execution models, interface contracts and operational patterns suitable for system-level engineering.",
      },
      {
        id: "dependencies",
        title: "Dependencies",
        text: "Depends on BioMath Core context models and on explicit permissions before consequential action.",
      },
    ],
  },
  "saven-core": {
    detail: "Physical systems layer",
    fields: [
      {
        id: "purpose",
        title: "Purpose",
        text: "Integrate the human intelligence foundation with physical and digital systems under one engineering organization.",
      },
      {
        id: "role",
        title: "Role",
        text: "The physical systems layer and the company-level technology structure for SAVEN Core.",
      },
      {
        id: "relationship",
        title: "Relationship",
        text: "Unifies prior layers into systems, technology disciplines, labs and application contexts for hospitals, home and everyday life.",
      },
      {
        id: "scope",
        title: "Scope",
        text: "Software, robotics, sensing, environment-level infrastructure, safety architecture, privacy architecture and human-system interaction.",
      },
      {
        id: "outputs",
        title: "Outputs",
        text: "Connected system frameworks, engineering methods and governed development pathways.",
      },
      {
        id: "dependencies",
        title: "Dependencies",
        text: "Depends on BioMath Life orientation, BioMath Core intelligence, SAVEN execution patterns and continuous human oversight requirements.",
      },
    ],
  },
};

export const foundationPageContent: TechnicalPageContent = {
  label: "Foundation",
  title: "A connected path from human understanding to physical systems.",
  introduction:
    "SAVEN Core is the physical systems layer of a broader foundation. The sequence below defines how human-centered understanding becomes intelligence architecture, execution capability and integrated engineering systems.",
  status: "Architecture",
  developmentNote:
    "Foundation information defines architecture and relationships. It does not describe commercial deployment, clinical use or regulatory approval.",
  sectionNav: [
    { id: "foundation-hierarchy", label: "Hierarchy" },
    ...foundationHierarchy.map((entity) => ({
      id: entity.id,
      label: entity.title,
    })),
    { id: "human-data-model", label: "Human Data Model" },
    { id: "system-relationships", label: "System relationships" },
    { id: "technology-relationships", label: "Technology relationships" },
    { id: "development-philosophy", label: "Design approach" },
  ],
  diagrams: [
    {
      id: "foundation-hierarchy",
      kind: "hierarchy",
      title: "Foundation hierarchy",
      description:
        "Vertical hierarchy from BioMath Life through BioMath Core and SAVEN to SAVEN Core.",
      nodes: foundationHierarchy.map((entity) => {
        const detail = foundationLayerDetails[entity.id]?.detail;
        return detail
          ? { id: entity.id, label: entity.title, detail }
          : { id: entity.id, label: entity.title };
      }),
    },
    {
      id: "foundation-layers",
      kind: "layers",
      title: "Layer model",
      description:
        "Stacked layer model showing SAVEN Core resting on SAVEN, BioMath Core and BioMath Life.",
      nodes: [...foundationHierarchy]
        .reverse()
        .map((entity) => ({
          id: `layer-${entity.id}`,
          label: entity.title,
        })),
    },
    {
      id: "system-logic-flow",
      kind: "flow",
      title: "Governed system flow",
      description:
        "Flow from observe through understand, evaluate and assist to learn, under permissions and human oversight.",
      nodes: [
        { id: "observe", label: "Observe" },
        { id: "understand", label: "Understand" },
        { id: "evaluate", label: "Evaluate" },
        { id: "assist", label: "Assist" },
        { id: "learn", label: "Learn" },
      ],
    },
    {
      id: "foundation-relationships",
      kind: "relationship",
      title: "Relationship model",
      description:
        "Relationship between foundation layers, Human Data Model, systems and technology disciplines.",
      nodes: [
        { id: "foundation", label: "Foundation layers" },
        { id: "hdm", label: "Human Data Model" },
        { id: "systems", label: "Systems" },
        { id: "technology", label: "Technology" },
      ],
    },
  ],
  layers: foundationHierarchy.map((entity) => ({
    id: entity.id,
    title: entity.title,
    fields: foundationLayerDetails[entity.id]?.fields ?? [],
  })),
  architectureSections: [
    {
      id: "human-data-model",
      title: "Human Data Model",
      paragraphs: [
        "The Human Data Model is the controlled representation of human context used by the foundation. It organizes authorized signals, history and changing conditions so systems can interpret context without treating people as unstructured data sources.",
        "Access is permissioned. Unnecessary exposure must be reduced. The model exists to support careful assistance, not unrestricted collection or autonomous decision authority.",
      ],
    },
    {
      id: "system-relationships",
      title: "System Relationships",
      paragraphs: [
        "Foundation layers define the conditions under which systems such as the Robotics Interface, Systems Architecture, SAVEN AI, the Drone Platform and the Human Data Model Interface may operate.",
        "Systems inherit purpose, permissions and oversight requirements from the foundation. They do not redefine the human priority of the architecture.",
      ],
    },
    {
      id: "technology-relationships",
      title: "Technology Relationships",
      paragraphs: [
        "Technology disciplines — including artificial intelligence, robotics, autonomous systems, human data and intelligence, safety architecture and privacy architecture — are combined around the foundation sequence.",
        "No single discipline is the purpose by itself. Each has a defined role inside the path from human understanding to physical assistance.",
      ],
    },
    {
      id: "development-philosophy",
      title: "Design Approach",
      paragraphs: [
        "Capability expands through clear stages: understand, architect, build, test and govern before wider use. Published materials state Architecture or Research scope with evidence appropriate to that stage.",
        "Important actions remain subject to permissions, defined safeguards and human oversight. Evidence and responsibility constrain expansion.",
      ],
    },
  ],
  relatedLinksHeading: "Related Pages",
  relatedLinks: [
    { label: "Purpose", href: "/purpose/" },
    { label: "Technology", href: "/technology/" },
    { label: "Systems", href: "/systems/" },
    { label: "Research", href: "/research/" },
  ],
};
