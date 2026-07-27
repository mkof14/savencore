/**
 * Adapters: existing page bodies → DomainVisualPage (HubPageContent).
 * Depth stays in progressive disclosure; first screen stays visual + human-clear.
 */

import type { EditorialPageContent } from "@/components/pages/page-types";
import type { TechnicalPageContent } from "@/components/pages/page-types";
import type { Locale } from "@/config/locales";
import { domainVisualForHref } from "@/content/domain/domain-visuals";
import type {
  HubHighlight,
  HubPageContent,
  HubSection,
} from "@/content/hub/types";
import type { ApplicationDisciplinePageContent } from "@/content/pages/en/application-discipline-types";
import type { SystemsPageContent } from "@/content/pages/en/systems";
import type { SystemDisciplinePageContent } from "@/content/pages/en/system-discipline-types";
import type { TechnologyDisciplinePageContent } from "@/content/pages/en/technology-discipline-types";
import type { TrustDisciplinePageContent } from "@/content/pages/en/trust-discipline-types";
import {
  getAgriculturePageContent,
  getAiDecisionSupportPageContent,
  getArtificialIntelligencePageContent,
  getAutomationPageContent,
  getClinicalInterfacesPageContent,
  getCommunicationLayerPageContent,
  getDataInfrastructurePageContent,
  getDroneSystemsPageContent,
  getEmergencyPageContent,
  getEthicsResponsibleUsePageContent,
  getFoundationPageContent,
  getGovernmentPageContent,
  getHealthcarePageContent,
  getHomeApplicationPageContent,
  getHospitalsPageContent,
  getHumanDataModelPageContent,
  getHumanDataPageContent,
  getHumanOversightPageContent,
  getIndustrialPageContent,
  getInteroperabilityPageContent,
  getKnowledgeEnginePageContent,
  getLimitationsPageContent,
  getPrivacyPageContent,
  getPurposePageContent,
  getResearchApplicationsPageContent,
  getRoboticsLayerPageContent,
  getRoboticsPageContent,
  getSafetyLayerPageContent,
  getSecurityPageContent,
  getSystemsPageContent,
  getTransparencyPageContent,
  getTrustPrivacyPageContent,
  getTrustSafetyPageContent,
  getTrustSecurityPageContent,
} from "@/content/pages/get-localized-page";
import { getUi } from "@/i18n/ui";
import { systemsNavChildren } from "@/navigation/site-navigation";
import { domainPathImageForHref } from "@/content/domain/domain-visuals";

function firstSentence(text: string, max = 140): string {
  const trimmed = text.trim();
  const match = trimmed.match(/^[^.!?]+[.!?]/);
  const sentence = (match?.[0] ?? trimmed).trim();
  if (sentence.length <= max) return sentence;
  const cut = sentence.slice(0, max - 1);
  const boundary = cut.lastIndexOf(" ");
  return `${(boundary > 40 ? cut.slice(0, boundary) : cut).trimEnd()}…`;
}

function paragraphsSection(
  id: string,
  title: string,
  paragraphs: readonly string[],
  collapsed = true,
): HubSection | null {
  if (!paragraphs.length) return null;
  return { id, title, paragraphs, collapsed };
}

function itemsSection(
  id: string,
  title: string,
  items: readonly string[],
  collapsed = true,
): HubSection | null {
  if (!items.length) return null;
  return { id, title, items, collapsed };
}

function compactHighlights(
  locale: Locale,
  what: string,
  why: string,
  next: string,
): HubHighlight[] {
  const ui = getUi(locale);
  return [
    { id: "what", title: ui.hub.what, text: firstSentence(what) },
    { id: "why", title: ui.hub.why, text: firstSentence(why) },
    { id: "next", title: ui.hub.next, text: firstSentence(next) },
  ];
}

function withVisual(
  href: string,
  base: Omit<HubPageContent, "visual">,
): HubPageContent {
  const visual = domainVisualForHref(href);
  return {
    ...base,
    visual: {
      theme: visual.theme,
      mastheadImage: visual.mastheadImage,
      mastheadAlt: visual.mastheadAlt,
      ...(visual.mastheadCollage
        ? { mastheadCollage: visual.mastheadCollage }
        : {}),
    },
  };
}

type LeafFamilyContent = {
  label: string;
  title: string;
  introduction: string;
  developmentNote: string;
  metadata: { status?: string };
  executiveSummaryHeading: string;
  executiveSummary: readonly string[];
  purposeHeading?: string;
  purpose?: readonly string[];
  principlesHeading?: string;
  principles?: readonly { title: string; text: string }[];
  scopeHeading?: string;
  scope?: readonly string[];
};

export function buildTechnologyDisciplineVisual(
  content: TechnologyDisciplinePageContent,
  locale: Locale,
  href: string,
): HubPageContent {
  const ui = getUi(locale);
  const sections = [
    paragraphsSection(
      "executive-summary",
      content.executiveSummaryHeading,
      content.executiveSummary,
    ),
    paragraphsSection("why-it-matters", content.whyItMattersHeading, content.whyItMatters),
    paragraphsSection("purpose", content.purposeHeading, content.purpose),
    itemsSection(
      "core-concepts",
      content.coreConceptsHeading,
      content.coreConcepts.map((c) => `${c.title} — ${c.text}`),
    ),
    itemsSection(
      "principles",
      content.principlesHeading,
      content.principles.map((p) => `${p.title} — ${p.text}`),
    ),
    paragraphsSection("scope", content.scopeHeading, content.scope),
  ].filter(Boolean) as HubSection[];

  return withVisual(href, {
    label: content.label,
    title: content.title,
    ...(content.metadata.status ? { status: content.metadata.status } : {}),
    lede: content.introduction,
    highlights: compactHighlights(
      locale,
      content.executiveSummary[0] ?? content.introduction,
      content.whyItMatters[0] ?? content.introduction,
      content.developmentNote,
    ),
    sections,
    note: content.developmentNote,
    related: [
      { label: ui.nav.technology, href: "/technology/" },
      { label: ui.nav.systems, href: "/systems/" },
      { label: ui.nav.trust, href: "/trust/" },
    ],
  });
}

export function buildSystemDisciplineVisual(
  content: SystemDisciplinePageContent,
  locale: Locale,
  href: string,
): HubPageContent {
  const ui = getUi(locale);
  const sections = [
    paragraphsSection(
      "executive-summary",
      content.executiveSummaryHeading,
      content.executiveSummary,
    ),
    paragraphsSection("why-it-matters", content.whyItMattersHeading, content.whyItMatters),
    paragraphsSection("purpose", content.purposeHeading, content.purpose),
    paragraphsSection(
      "architecture-role",
      content.architectureRoleHeading,
      content.architectureRole,
    ),
    itemsSection(
      "principles",
      content.principlesHeading,
      content.principles.map((p) => `${p.title} — ${p.text}`),
    ),
    paragraphsSection(
      "human-oversight",
      content.humanOversightHeading,
      content.humanOversight,
    ),
    paragraphsSection("scope", content.scopeHeading, content.scope),
  ].filter(Boolean) as HubSection[];

  return withVisual(href, {
    label: content.label,
    title: content.title,
    ...(content.metadata.status ? { status: content.metadata.status } : {}),
    lede: content.introduction,
    highlights: compactHighlights(
      locale,
      content.executiveSummary[0] ?? content.introduction,
      content.whyItMatters[0] ?? content.introduction,
      content.developmentNote,
    ),
    sections,
    note: content.developmentNote,
    related: [
      { label: ui.nav.systems, href: "/systems/" },
      { label: ui.nav.technology, href: "/technology/" },
      { label: ui.nav.applications, href: "/applications/" },
    ],
  });
}

export function buildApplicationDisciplineVisual(
  content: ApplicationDisciplinePageContent,
  locale: Locale,
  href: string,
): HubPageContent {
  const ui = getUi(locale);
  const sections = [
    paragraphsSection(
      "executive-summary",
      content.executiveSummaryHeading,
      content.executiveSummary,
    ),
    paragraphsSection(
      "operating-context",
      content.operatingContextHeading,
      content.operatingContext,
    ),
    paragraphsSection("why-it-matters", content.whyItMattersHeading, content.whyItMatters),
    paragraphsSection("saven-role", content.savenRoleHeading, content.savenRole),
    paragraphsSection("human-role", content.humanRoleHeading, content.humanRole),
    paragraphsSection("safety-trust", content.safetyTrustHeading, content.safetyTrust),
    paragraphsSection("scope", content.scopeHeading, content.scope),
  ].filter(Boolean) as HubSection[];

  return withVisual(href, {
    label: content.label,
    title: content.title,
    ...(content.metadata.status ? { status: content.metadata.status } : {}),
    lede: content.introduction,
    highlights: compactHighlights(
      locale,
      content.definition || content.executiveSummary[0] || content.introduction,
      content.whyItMatters[0] ?? content.introduction,
      content.developmentNote,
    ),
    sections,
    note: content.developmentNote,
    related: [
      { label: ui.nav.applications, href: "/applications/" },
      { label: ui.nav.trust, href: "/trust/" },
      { label: ui.nav.systems, href: "/systems/" },
    ],
  });
}

export function buildTrustDisciplineVisual(
  content: TrustDisciplinePageContent,
  locale: Locale,
  href: string,
): HubPageContent {
  const ui = getUi(locale);
  const sections = [
    paragraphsSection(
      "executive-summary",
      content.executiveSummaryHeading,
      content.executiveSummary,
    ),
    paragraphsSection("principle", content.principleHeading, content.principle),
    paragraphsSection("why-it-matters", content.whyItMattersHeading, content.whyItMatters),
    paragraphsSection(
      "responsibilities",
      content.responsibilitiesHeading,
      content.responsibilities,
    ),
    paragraphsSection("boundaries", content.boundariesHeading, content.boundaries),
    paragraphsSection(
      "human-oversight",
      content.humanOversightHeading,
      content.humanOversight,
    ),
    paragraphsSection("limitations", content.limitationsHeading, content.limitations),
    paragraphsSection("scope", content.scopeHeading, content.scope),
  ].filter(Boolean) as HubSection[];

  return withVisual(href, {
    label: content.label,
    title: content.title,
    ...(content.metadata.status ? { status: content.metadata.status } : {}),
    lede: content.introduction,
    highlights: compactHighlights(
      locale,
      content.definition || content.executiveSummary[0] || content.introduction,
      content.whyItMatters[0] ?? content.introduction,
      content.developmentNote,
    ),
    sections,
    note: content.developmentNote,
    related: [
      { label: ui.nav.trust, href: "/trust/" },
      { label: ui.nav.technology, href: "/technology/" },
      { label: ui.nav.purpose, href: "/purpose/" },
    ],
  });
}

/** Human Data / Human Data Model / Data Infrastructure share a close shape. */
export function buildHumanDataFamilyVisual(
  content: LeafFamilyContent,
  locale: Locale,
  href: string,
): HubPageContent {
  const ui = getUi(locale);
  const purpose = content.purpose ?? [];
  const principles = (content.principles ?? []).map(
    (p) => `${p.title} — ${p.text}`,
  );
  const scope = content.scope ?? [];

  const sections = [
    paragraphsSection(
      "executive-summary",
      content.executiveSummaryHeading,
      content.executiveSummary,
    ),
    purpose.length
      ? paragraphsSection(
          "purpose",
          content.purposeHeading ?? "Purpose",
          purpose,
        )
      : null,
    principles.length
      ? itemsSection(
          "principles",
          content.principlesHeading ?? "Principles",
          principles,
        )
      : null,
    scope.length
      ? paragraphsSection("scope", content.scopeHeading ?? "Scope", scope)
      : null,
  ].filter(Boolean) as HubSection[];

  return withVisual(href, {
    label: content.label,
    title: content.title,
    ...(content.metadata.status ? { status: content.metadata.status } : {}),
    lede: content.introduction,
    highlights: compactHighlights(
      locale,
      content.executiveSummary[0] ?? content.introduction,
      purpose[0] ?? content.introduction,
      content.developmentNote,
    ),
    sections,
    note: content.developmentNote,
    related: [
      { label: ui.nav.technology, href: "/technology/" },
      { label: ui.nav.systems, href: "/systems/" },
    ],
  });
}

export function buildSystemsHubVisual(
  content: SystemsPageContent,
  locale: Locale,
): HubPageContent {
  const ui = getUi(locale);
  const navEntries = ui.navEntries;

  return withVisual("/systems/", {
    label: content.label,
    title: content.title,
    ...(content.metadata.status ? { status: content.metadata.status } : {}),
    lede: content.introduction,
    highlights: compactHighlights(
      locale,
      content.overview[0] ?? content.introduction,
      content.meaning[0] ?? content.introduction,
      content.developmentNote,
    ),
    sections: [
      {
        id: "naming-bridge",
        title: "Robotics Layer vs. SAVEN Robotics Interface",
        paragraphs: [
          "These are related but distinct: Robotics Layer is the knowledge and architecture entry documenting how physical interaction fits the Systems index — roles, limits, and coordination points. SAVEN Robotics Interface is the flagship shared communication and control workstream (In Development) where diverse robots and devices actually connect to SAVEN under human command.",
          "Read Robotics Layer for the architecture placement; read SAVEN Robotics Interface for the working direction of the interface itself.",
        ],
      },
      {
        id: "principles",
        title: content.principlesHeading,
        items: content.principles.map((p) => `${p.title} — ${p.text}`),
        collapsed: true,
      },
      {
        id: "scope",
        title: content.scopeHeading,
        paragraphs: content.scope,
        collapsed: true,
      },
    ],
    paths: {
      heading: content.categoriesHeading,
      links: [
        ...systemsNavChildren
          .filter((item) => item.href !== "/systems/")
          .map((item, index) => {
            const localizedLabel =
              navEntries[item.id as keyof typeof navEntries] ?? item.label;
            return {
              label: localizedLabel,
              href: item.href,
              image: domainPathImageForHref(item.href, index),
              imageAlt: localizedLabel,
            };
          }),
        {
          label:
            navEntries["footer-systems-saven-robotics-interface"] ??
            "SAVEN Robotics Interface",
          href: "/systems/saven-robotics-interface/",
          note: "Flagship shared communication and control workstream — not the same as the Robotics Layer architecture entry.",
          image: domainPathImageForHref("/systems/saven-robotics-interface/", 7),
          imageAlt:
            navEntries["footer-systems-saven-robotics-interface"] ??
            "SAVEN Robotics Interface",
        },
      ],
    },
    note: content.developmentNote,
    related: content.relatedDomainLinks.map((link) => ({
      label: link.label,
      href: link.href,
    })),
  });
}

export function buildFoundationVisual(
  content: TechnicalPageContent,
  locale: Locale,
): HubPageContent {
  const ui = getUi(locale);
  const layerItems =
    content.layers?.map((layer) => {
      const purpose = layer.fields.find((f) => f.id === "purpose")?.text;
      return purpose ? `${layer.title} — ${purpose}` : layer.title;
    }) ?? [];

  const teamSection = content.architectureSections?.find(
    (section) => section.id === "who-we-are",
  );
  const deeperArchitecture =
    content.architectureSections?.filter(
      (section) => section.id !== "who-we-are",
    ) ?? [];

  const sections: HubSection[] = [
    ...(teamSection
      ? [
          {
            id: teamSection.id,
            title: teamSection.title,
            paragraphs: teamSection.paragraphs,
          } satisfies HubSection,
        ]
      : []),
    ...(layerItems.length
      ? [
          {
            id: "layers",
            title: ui.hub.areas,
            items: layerItems,
            collapsed: true,
          } satisfies HubSection,
        ]
      : []),
    ...deeperArchitecture.map(
      (section) =>
        ({
          id: section.id,
          title: section.title,
          paragraphs: section.paragraphs,
          collapsed: true,
        }) satisfies HubSection,
    ),
  ];

  return withVisual("/foundation/", {
    label: content.label,
    title: content.title,
    ...(content.status ? { status: content.status } : {}),
    lede: content.introduction,
    highlights: compactHighlights(
      locale,
      content.introduction,
      layerItems[0] ?? content.introduction,
      content.developmentNote ?? content.introduction,
    ),
    sections,
    ...(content.developmentNote ? { note: content.developmentNote } : {}),
    ...(content.relatedLinks ? { related: [...content.relatedLinks] } : {}),
  });
}

export function buildPurposeVisualFromEditorial(
  content: EditorialPageContent,
  locale: Locale,
): HubPageContent {
  const ui = getUi(locale);
  const byId = (id: string) =>
    content.sections.find((section) => section.id === id);
  const purpose = byId("purpose");
  const mission = byId("mission");
  const forWhom = byId("who-we-build-for");

  return withVisual("/purpose/", {
    label: content.label,
    title: content.title,
    ...(content.status ? { status: content.status } : {}),
    lede: content.introduction,
    highlights: compactHighlights(
      locale,
      purpose?.paragraphs?.[0] ?? content.introduction,
      mission?.paragraphs?.[0] ?? content.introduction,
      forWhom?.paragraphs?.[0] ?? content.introduction,
    ),
    sections: content.sections.map((section) => ({
      id: section.id,
      title: section.title,
      ...(section.paragraphs ? { paragraphs: section.paragraphs } : {}),
      ...(section.subsections
        ? {
            items: section.subsections.map(
              (sub) => `${sub.title} — ${sub.paragraphs[0] ?? ""}`.trim(),
            ),
          }
        : {}),
      collapsed: true,
    })),
    ...(content.relatedLinks ? { related: content.relatedLinks } : {}),
  });
}

/* ——— Locale getters for route pages ——— */

export function getSystemsDomainContent(locale: Locale): HubPageContent {
  return buildSystemsHubVisual(getSystemsPageContent(locale), locale);
}

export function getFoundationDomainContent(locale: Locale): HubPageContent {
  return buildFoundationVisual(getFoundationPageContent(locale), locale);
}

export function getPurposeDomainContent(locale: Locale): HubPageContent {
  return buildPurposeVisualFromEditorial(getPurposePageContent(locale), locale);
}

export function getHumanDataDomainContent(locale: Locale): HubPageContent {
  return buildHumanDataFamilyVisual(
    getHumanDataPageContent(locale),
    locale,
    "/technology/human-data/",
  );
}

export function getHumanDataModelDomainContent(locale: Locale): HubPageContent {
  return buildHumanDataFamilyVisual(
    getHumanDataModelPageContent(locale),
    locale,
    "/technology/human-data-model/",
  );
}

export function getDataInfrastructureDomainContent(
  locale: Locale,
): HubPageContent {
  return buildHumanDataFamilyVisual(
    getDataInfrastructurePageContent(locale),
    locale,
    "/technology/data-infrastructure/",
  );
}

export function getInteroperabilityDomainContent(locale: Locale): HubPageContent {
  return buildTechnologyDisciplineVisual(
    getInteroperabilityPageContent(locale),
    locale,
    "/technology/interoperability/",
  );
}

export function getTechnologyPrivacyDomainContent(
  locale: Locale,
): HubPageContent {
  return buildTechnologyDisciplineVisual(
    getPrivacyPageContent(locale),
    locale,
    "/technology/privacy/",
  );
}

export function getTechnologySecurityDomainContent(
  locale: Locale,
): HubPageContent {
  return buildTechnologyDisciplineVisual(
    getSecurityPageContent(locale),
    locale,
    "/technology/security/",
  );
}

export function getArtificialIntelligenceDomainContent(
  locale: Locale,
): HubPageContent {
  return buildTechnologyDisciplineVisual(
    getArtificialIntelligencePageContent(locale),
    locale,
    "/technology/artificial-intelligence/",
  );
}

export function getAutomationDomainContent(locale: Locale): HubPageContent {
  return buildTechnologyDisciplineVisual(
    getAutomationPageContent(locale),
    locale,
    "/technology/automation/",
  );
}

export function getRoboticsDomainContent(locale: Locale): HubPageContent {
  return buildTechnologyDisciplineVisual(
    getRoboticsPageContent(locale),
    locale,
    "/technology/robotics/",
  );
}

export function getKnowledgeEngineDomainContent(locale: Locale): HubPageContent {
  return buildSystemDisciplineVisual(
    getKnowledgeEnginePageContent(locale),
    locale,
    "/systems/knowledge-engine/",
  );
}

export function getAiDecisionSupportDomainContent(
  locale: Locale,
): HubPageContent {
  return buildSystemDisciplineVisual(
    getAiDecisionSupportPageContent(locale),
    locale,
    "/systems/ai-decision-support/",
  );
}

export function getSafetyLayerDomainContent(locale: Locale): HubPageContent {
  return buildSystemDisciplineVisual(
    getSafetyLayerPageContent(locale),
    locale,
    "/systems/safety-layer/",
  );
}

export function getCommunicationLayerDomainContent(
  locale: Locale,
): HubPageContent {
  return buildSystemDisciplineVisual(
    getCommunicationLayerPageContent(locale),
    locale,
    "/systems/communication-layer/",
  );
}

export function getClinicalInterfacesDomainContent(
  locale: Locale,
): HubPageContent {
  return buildSystemDisciplineVisual(
    getClinicalInterfacesPageContent(locale),
    locale,
    "/systems/clinical-interfaces/",
  );
}

export function getRoboticsLayerDomainContent(locale: Locale): HubPageContent {
  return buildSystemDisciplineVisual(
    getRoboticsLayerPageContent(locale),
    locale,
    "/systems/robotics-layer/",
  );
}

export function getDroneSystemsDomainContent(locale: Locale): HubPageContent {
  return buildSystemDisciplineVisual(
    getDroneSystemsPageContent(locale),
    locale,
    "/systems/drone-systems/",
  );
}

export function getHealthcareDomainContent(locale: Locale): HubPageContent {
  return buildApplicationDisciplineVisual(
    getHealthcarePageContent(locale),
    locale,
    "/applications/healthcare/",
  );
}

export function getHomeApplicationDomainContent(locale: Locale): HubPageContent {
  return buildApplicationDisciplineVisual(
    getHomeApplicationPageContent(locale),
    locale,
    "/applications/home/",
  );
}

export function getHospitalsDomainContent(locale: Locale): HubPageContent {
  return buildApplicationDisciplineVisual(
    getHospitalsPageContent(locale),
    locale,
    "/applications/hospitals/",
  );
}

export function getEmergencyDomainContent(locale: Locale): HubPageContent {
  return buildApplicationDisciplineVisual(
    getEmergencyPageContent(locale),
    locale,
    "/applications/emergency/",
  );
}

export function getIndustrialDomainContent(locale: Locale): HubPageContent {
  return buildApplicationDisciplineVisual(
    getIndustrialPageContent(locale),
    locale,
    "/applications/industrial/",
  );
}

export function getGovernmentDomainContent(locale: Locale): HubPageContent {
  return buildApplicationDisciplineVisual(
    getGovernmentPageContent(locale),
    locale,
    "/applications/government/",
  );
}

export function getAgricultureDomainContent(locale: Locale): HubPageContent {
  return buildApplicationDisciplineVisual(
    getAgriculturePageContent(locale),
    locale,
    "/applications/agriculture/",
  );
}

export function getResearchApplicationsDomainContent(
  locale: Locale,
): HubPageContent {
  return buildApplicationDisciplineVisual(
    getResearchApplicationsPageContent(locale),
    locale,
    "/applications/research-applications/",
  );
}

export function getTrustPrivacyDomainContent(locale: Locale): HubPageContent {
  return buildTrustDisciplineVisual(
    getTrustPrivacyPageContent(locale),
    locale,
    "/trust/privacy/",
  );
}

export function getTrustSecurityDomainContent(locale: Locale): HubPageContent {
  return buildTrustDisciplineVisual(
    getTrustSecurityPageContent(locale),
    locale,
    "/trust/security/",
  );
}

export function getTrustSafetyDomainContent(locale: Locale): HubPageContent {
  return buildTrustDisciplineVisual(
    getTrustSafetyPageContent(locale),
    locale,
    "/trust/safety/",
  );
}

export function getHumanOversightDomainContent(locale: Locale): HubPageContent {
  return buildTrustDisciplineVisual(
    getHumanOversightPageContent(locale),
    locale,
    "/trust/human-oversight/",
  );
}

export function getTransparencyDomainContent(locale: Locale): HubPageContent {
  return buildTrustDisciplineVisual(
    getTransparencyPageContent(locale),
    locale,
    "/trust/transparency/",
  );
}

export function getEthicsDomainContent(locale: Locale): HubPageContent {
  return buildTrustDisciplineVisual(
    getEthicsResponsibleUsePageContent(locale),
    locale,
    "/trust/ethics-and-responsible-use/",
  );
}

export function getLimitationsDomainContent(locale: Locale): HubPageContent {
  return buildTrustDisciplineVisual(
    getLimitationsPageContent(locale),
    locale,
    "/trust/limitations/",
  );
}
