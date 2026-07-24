import {
  isNavGroup,
  type FooterGroup,
  type NavLinkItem,
  type PrimaryNavItem,
} from "./navigation-types";

/**
 * Centralized site navigation — single source for Header, mobile nav, and Footer.
 * Only published routes. Do not duplicate this tree in components.
 *
 * Render path:
 * SiteHeader → DesktopNavigation / MobileNavigation → primaryNavigation
 * Technology dropdown children MUST be `technologyNavChildren` only.
 * Systems and Labs must never appear inside the Technology group.
 */

/** Technology domain children — shared by primary nav and reference lists. */
export const technologyNavChildren: readonly NavLinkItem[] = [
  {
    id: "technology-overview",
    label: "Technology Overview",
    href: "/technology/",
  },
  {
    id: "technology-human-data",
    label: "Human Data",
    href: "/technology/human-data/",
  },
  {
    id: "technology-human-data-model",
    label: "Human Data Model",
    href: "/technology/human-data-model/",
  },
  {
    id: "technology-data-infrastructure",
    label: "Data Infrastructure",
    href: "/technology/data-infrastructure/",
  },
  {
    id: "technology-interoperability",
    label: "Interoperability",
    href: "/technology/interoperability/",
  },
  {
    id: "technology-privacy",
    label: "Privacy",
    href: "/technology/privacy/",
  },
  {
    id: "technology-security",
    label: "Security",
    href: "/technology/security/",
  },
  {
    id: "technology-artificial-intelligence",
    label: "Artificial Intelligence",
    href: "/technology/artificial-intelligence/",
  },
  {
    id: "technology-automation",
    label: "Automation",
    href: "/technology/automation/",
  },
  {
    id: "technology-robotics",
    label: "Robotics",
    href: "/technology/robotics/",
  },
] as const;

/** Systems domain children — shared by primary nav and reference lists. */
export const systemsNavChildren: readonly NavLinkItem[] = [
  {
    id: "systems-overview",
    label: "Systems Overview",
    href: "/systems/",
  },
  {
    id: "systems-knowledge-engine",
    label: "Knowledge Engine",
    href: "/systems/knowledge-engine/",
  },
  {
    id: "systems-ai-decision-support",
    label: "AI Decision Support",
    href: "/systems/ai-decision-support/",
  },
  {
    id: "systems-safety-layer",
    label: "Safety Layer",
    href: "/systems/safety-layer/",
  },
  {
    id: "systems-communication-layer",
    label: "Communication Layer",
    href: "/systems/communication-layer/",
  },
  {
    id: "systems-clinical-interfaces",
    label: "Clinical Interfaces",
    href: "/systems/clinical-interfaces/",
  },
  {
    id: "systems-robotics-layer",
    label: "Robotics Layer",
    href: "/systems/robotics-layer/",
  },
  {
    id: "systems-drone-systems",
    label: "Drone Systems",
    href: "/systems/drone-systems/",
  },
] as const;

/** Applications domain children — shared by primary nav and reference lists. */
export const applicationsNavChildren: readonly NavLinkItem[] = [
  {
    id: "applications-overview",
    label: "Applications Overview",
    href: "/applications/",
  },
  {
    id: "applications-healthcare",
    label: "Healthcare",
    href: "/applications/healthcare/",
  },
  {
    id: "applications-home",
    label: "Home",
    href: "/applications/home/",
  },
  {
    id: "applications-hospitals",
    label: "Hospitals",
    href: "/applications/hospitals/",
  },
  {
    id: "applications-emergency",
    label: "Emergency",
    href: "/applications/emergency/",
  },
  {
    id: "applications-industrial",
    label: "Industrial",
    href: "/applications/industrial/",
  },
  {
    id: "applications-government",
    label: "Government",
    href: "/applications/government/",
  },
  {
    id: "applications-agriculture",
    label: "Agriculture",
    href: "/applications/agriculture/",
  },
  {
    id: "applications-research-applications",
    label: "Research Applications",
    href: "/applications/research-applications/",
  },
] as const;

/**
 * Trust domain children — knowledge Trust domain (governance), not /legal policies.
 * Published because Trust is a primary knowledge domain in the architecture model.
 */
export const trustNavChildren: readonly NavLinkItem[] = [
  {
    id: "trust-overview",
    label: "Trust Overview",
    href: "/trust/",
  },
  {
    id: "trust-privacy",
    label: "Privacy",
    href: "/trust/privacy/",
  },
  {
    id: "trust-security",
    label: "Security",
    href: "/trust/security/",
  },
  {
    id: "trust-safety",
    label: "Safety",
    href: "/trust/safety/",
  },
  {
    id: "trust-human-oversight",
    label: "Human Oversight",
    href: "/trust/human-oversight/",
  },
  {
    id: "trust-transparency",
    label: "Transparency",
    href: "/trust/transparency/",
  },
  {
    id: "trust-ethics",
    label: "Ethics and Responsible Use",
    href: "/trust/ethics-and-responsible-use/",
  },
  {
    id: "trust-limitations",
    label: "Limitations",
    href: "/trust/limitations/",
  },
] as const;

/**
 * Primary header navigation.
 * Groups only appear when they have published children beyond the overview,
 * or when a single overview child is still useful as an explicit menu entry.
 *
 * Labs and Company are omitted until those indexes are published.
 */
export const primaryNavigation: readonly PrimaryNavItem[] = [
  {
    id: "purpose",
    label: "Purpose",
    href: "/purpose/",
  },
  {
    id: "foundation",
    label: "Foundation",
    href: "/foundation/",
  },
  {
    id: "technology",
    label: "Technology",
    href: "/technology/",
    children: technologyNavChildren,
  },
  {
    id: "systems",
    label: "Systems",
    href: "/systems/",
    children: systemsNavChildren,
  },
  {
    id: "applications",
    label: "Applications",
    href: "/applications/",
    children: applicationsNavChildren,
  },
  {
    id: "research",
    label: "Research",
    href: "/research/",
    children: [
      {
        id: "research-overview",
        label: "Research Overview",
        href: "/research/",
      },
    ],
  },
  {
    id: "trust",
    label: "Trust",
    href: "/trust/",
    children: trustNavChildren,
  },
] as const;

/**
 * Utility navigation — only published destinations.
 * Empty until Contact / Investors / Search pages exist.
 */
export const utilityNavigation: readonly NavLinkItem[] = [] as const;

/**
 * Footer groups — published routes only.
 * Planned IA groups without live pages are omitted rather than linked broken.
 */
export const footerNavigation: readonly FooterGroup[] = [
  {
    id: "purpose",
    title: "Purpose",
    links: [{ id: "footer-purpose", label: "Purpose", href: "/purpose/" }],
  },
  {
    id: "foundation",
    title: "Foundation",
    links: [
      { id: "footer-foundation", label: "Foundation", href: "/foundation/" },
    ],
  },
  {
    id: "technology",
    title: "Technology",
    links: technologyNavChildren.map((item) => ({
      id: `footer-${item.id}`,
      label: item.label,
      href: item.href,
    })),
  },
  {
    id: "systems",
    title: "Systems",
    links: systemsNavChildren.map((item) => ({
      id: `footer-${item.id}`,
      label: item.label,
      href: item.href,
    })),
  },
  {
    id: "applications",
    title: "Applications",
    links: applicationsNavChildren.map((item) => ({
      id: `footer-${item.id}`,
      label: item.label,
      href: item.href,
    })),
  },
  {
    id: "research",
    title: "Research",
    links: [
      {
        id: "footer-research",
        label: "Research Overview",
        href: "/research/",
      },
    ],
  },
  {
    id: "trust",
    title: "Trust",
    links: trustNavChildren.map((item) => ({
      id: `footer-${item.id}`,
      label: item.label,
      href: item.href,
    })),
  },
] as const;

export const FOOTER_COPYRIGHT = "© 2026 SAVEN Core. All rights reserved.";

/** Guard against regressing to the legacy Technology / Systems / Labs submenu. */
function assertTechnologyDropdownSource(): void {
  const technology = primaryNavigation.find((item) => item.id === "technology");
  if (!technology || !isNavGroup(technology)) {
    throw new Error("Technology primary nav group is missing.");
  }
  if (technology.children !== technologyNavChildren) {
    throw new Error(
      "Technology dropdown must use technologyNavChildren as its only children source.",
    );
  }

  for (const child of technology.children) {
    if (
      child.id === "systems" ||
      child.id === "labs" ||
      child.label === "Systems" ||
      child.label === "Labs" ||
      child.href === "/systems/" ||
      child.href === "/labs/"
    ) {
      throw new Error(
        `Technology dropdown must not include Systems or Labs (found ${child.label}).`,
      );
    }
    if (
      child.href !== "/technology/" &&
      !child.href.startsWith("/technology/")
    ) {
      throw new Error(
        `Technology dropdown child must be a Technology route (found ${child.href}).`,
      );
    }
  }
}

assertTechnologyDropdownSource();

