/**
 * Unified domain visual map — hubs + leaves (D-0160).
 * Mastheads are thematic atmosphere only — not product claims or KPI dashboards.
 */

export type DomainVisualTheme =
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

export type DomainMastheadVisual = {
  theme: DomainVisualTheme;
  mastheadImage: string;
  mastheadAlt: string;
};

/** Canonical masthead assignment for every visual domain route. */
export const DOMAIN_MASTHEAD_BY_HREF: Record<string, DomainMastheadVisual> = {
  /* ——— Technology ——— */
  "/technology/": {
    theme: "technology",
    mastheadImage: "/domain/technology/overview.webp",
    mastheadAlt: "Physical systems engineering atmosphere",
  },
  "/technology/human-data/": {
    theme: "technology",
    mastheadImage: "/domain/technology/human-data.webp",
    mastheadAlt: "Human life context and careful data atmosphere",
  },
  "/technology/human-data-model/": {
    theme: "technology",
    mastheadImage: "/domain/technology/human-data-model.webp",
    mastheadAlt: "Organized human context for understanding",
  },
  "/technology/data-infrastructure/": {
    theme: "technology",
    mastheadImage: "/domain/technology/data-infrastructure.webp",
    mastheadAlt: "Quiet infrastructure for governed information",
  },
  "/technology/interoperability/": {
    theme: "technology",
    mastheadImage: "/domain/technology/interoperability.webp",
    mastheadAlt: "Connected systems under controlled exchange",
  },
  "/technology/privacy/": {
    theme: "technology",
    mastheadImage: "/domain/technology/privacy.webp",
    mastheadAlt: "Private care setting and information boundaries",
  },
  "/technology/security/": {
    theme: "technology",
    mastheadImage: "/domain/technology/security.webp",
    mastheadAlt: "Protected systems and careful access atmosphere",
  },
  "/technology/artificial-intelligence/": {
    theme: "technology",
    mastheadImage: "/domain/technology/artificial-intelligence.webp",
    mastheadAlt: "Human judgment assisted by careful analysis",
  },
  "/technology/automation/": {
    theme: "technology",
    mastheadImage: "/domain/technology/automation.webp",
    mastheadAlt: "Controlled automated motion in a physical space",
  },
  "/technology/robotics/": {
    theme: "technology",
    mastheadImage: "/domain/technology/robotics.webp",
    mastheadAlt: "Robotic systems for physical assistance",
  },

  /* ——— Systems ——— */
  "/systems/": {
    theme: "systems",
    mastheadImage: "/domain/systems/overview.webp",
    mastheadAlt: "Connected system architecture atmosphere",
  },
  "/systems/knowledge-engine/": {
    theme: "systems",
    mastheadImage: "/domain/systems/knowledge-engine.webp",
    mastheadAlt: "Organized knowledge and preserved context",
  },
  "/systems/ai-decision-support/": {
    theme: "systems",
    mastheadImage: "/domain/systems/ai-decision-support.webp",
    mastheadAlt: "People reviewing information together",
  },
  "/systems/safety-layer/": {
    theme: "systems",
    mastheadImage: "/domain/systems/safety-layer.webp",
    mastheadAlt: "Safety limits and careful oversight",
  },
  "/systems/communication-layer/": {
    theme: "systems",
    mastheadImage: "/domain/systems/communication-layer.webp",
    mastheadAlt: "Controlled communication pathways",
  },
  "/systems/clinical-interfaces/": {
    theme: "systems",
    mastheadImage: "/domain/systems/clinical-interfaces.webp",
    mastheadAlt: "Clinical workflow interface atmosphere",
  },
  "/systems/robotics-layer/": {
    theme: "systems",
    mastheadImage: "/domain/systems/robotics-layer.webp",
    mastheadAlt: "Robotics layer connecting digital and physical action",
  },
  "/systems/drone-systems/": {
    theme: "systems",
    mastheadImage: "/domain/systems/drone-systems.webp",
    mastheadAlt: "Aerial systems research atmosphere",
  },
  "/systems/saven-robotics-interface/": {
    theme: "systems",
    mastheadImage: "/domain/systems/saven-robotics-interface.webp",
    mastheadAlt: "Human command and oversight for machines",
  },

  /* ——— Labs ——— */
  "/labs/": {
    theme: "labs",
    mastheadImage: "/domain/labs/overview.webp",
    mastheadAlt: "Labs and engineering research atmosphere",
  },
  "/labs/saven-robotics-lab/": {
    theme: "labs",
    mastheadImage: "/domain/labs/saven-robotics-lab.webp",
    mastheadAlt: "SAVEN Robotics Lab engineering context",
  },
  "/labs/internal-future-lab/": {
    theme: "labs",
    mastheadImage: "/domain/labs/internal-future-lab.webp",
    mastheadAlt: "Internal Future Lab research environment",
  },

  /* ——— Applications (reuse care assets where thematically perfect) ——— */
  "/applications/": {
    theme: "applications",
    mastheadImage: "/domain/applications/overview.webp",
    mastheadAlt: "Human contexts where support may later matter",
  },
  "/applications/healthcare/": {
    theme: "applications",
    mastheadImage: "/home/care/hospital-care.webp",
    mastheadAlt: "Healthcare care environment",
  },
  "/applications/home/": {
    theme: "applications",
    mastheadImage: "/home/care/home-care.webp",
    mastheadAlt: "Home care setting",
  },
  "/applications/hospitals/": {
    theme: "applications",
    mastheadImage: "/home/hero-collage/02-hospital.webp",
    mastheadAlt: "Hospital care context",
  },
  "/applications/emergency/": {
    theme: "applications",
    mastheadImage: "/home/care/emergency.webp",
    mastheadAlt: "Emergency care atmosphere",
  },
  "/applications/industrial/": {
    theme: "applications",
    mastheadImage: "/domain/applications/industrial.webp",
    mastheadAlt: "Industrial operating environment",
  },
  "/applications/government/": {
    theme: "applications",
    mastheadImage: "/domain/applications/government.webp",
    mastheadAlt: "Public service and institutional atmosphere",
  },
  "/applications/agriculture/": {
    theme: "applications",
    mastheadImage: "/home/care/rural-remote.webp",
    mastheadAlt: "Rural and agricultural context",
  },
  "/applications/research-applications/": {
    theme: "applications",
    mastheadImage: "/domain/applications/research-applications.webp",
    mastheadAlt: "Research application context",
  },

  /* ——— Trust ——— */
  "/trust/": {
    theme: "trust",
    mastheadImage: "/domain/trust/overview.webp",
    mastheadAlt: "Human care and responsible support",
  },
  "/trust/privacy/": {
    theme: "trust",
    mastheadImage: "/domain/trust/privacy.webp",
    mastheadAlt: "Privacy and dignity in everyday care",
  },
  "/trust/security/": {
    theme: "trust",
    mastheadImage: "/domain/trust/security.webp",
    mastheadAlt: "Security as responsible protection",
  },
  "/trust/safety/": {
    theme: "trust",
    mastheadImage: "/domain/trust/safety.webp",
    mastheadAlt: "Safety and careful limits",
  },
  "/trust/human-oversight/": {
    theme: "trust",
    mastheadImage: "/domain/trust/human-oversight.webp",
    mastheadAlt: "People remaining in authority",
  },
  "/trust/transparency/": {
    theme: "trust",
    mastheadImage: "/domain/trust/transparency.webp",
    mastheadAlt: "Clear explanation and open communication",
  },
  "/trust/ethics-and-responsible-use/": {
    theme: "trust",
    mastheadImage: "/domain/trust/ethics.webp",
    mastheadAlt: "Ethics and responsible use",
  },
  "/trust/limitations/": {
    theme: "trust",
    mastheadImage: "/domain/trust/limitations.webp",
    mastheadAlt: "Honest limits and what systems cannot do",
  },

  /* ——— Research / Company ——— */
  "/research/": {
    theme: "research",
    mastheadImage: "/hub/research-masthead.webp",
    mastheadAlt: "Human and robotic collaboration in a research setting",
  },
  "/purpose/": {
    theme: "purpose",
    mastheadImage: "/domain/company/purpose.webp",
    mastheadAlt: "People together — human purpose",
  },
  "/foundation/": {
    theme: "foundation",
    mastheadImage: "/domain/company/foundation.webp",
    mastheadAlt: "Foundation path from understanding to physical systems",
  },
  "/investors/": {
    theme: "investors",
    mastheadImage: "/domain/company/investors.webp",
    mastheadAlt: "Long-horizon company atmosphere",
  },
};

const FALLBACK: DomainMastheadVisual = {
  theme: "default",
  mastheadImage: "/home/saven-closing-bg.webp",
  mastheadAlt: "SAVEN Core brand atmosphere",
};

export function domainVisualForHref(href: string): DomainMastheadVisual {
  return DOMAIN_MASTHEAD_BY_HREF[href] ?? FALLBACK;
}

/** Path thumbnails for hub grids — prefer leaf mastheads. */
export function domainPathImageForHref(href: string, index = 0): string {
  const mapped = DOMAIN_MASTHEAD_BY_HREF[href];
  if (mapped) return mapped.mastheadImage;
  const fallbacks = [
    "/home/hero-collage/01-manipulator.webp",
    "/home/hero-collage/02-hospital.webp",
    "/home/hero-collage/03-home-elder.webp",
    "/home/hero-collage/04-family.webp",
    "/home/hero-collage/05-mobile.webp",
    "/home/care/hospital-care.webp",
    "/home/care/home-care.webp",
    "/home/saven-closing-bg.webp",
  ] as const;
  return fallbacks[index % fallbacks.length]!;
}
