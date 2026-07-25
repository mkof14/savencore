import {
  isNavGroup,
  type FooterGroup,
  type NavLinkItem,
  type PrimaryNavItem,
} from "./navigation-types";

/**
 * Centralized site navigation — single source for Header, mobile nav, and Footer.
 * Header dropdowns stay short. Footer holds the complete published sitemap.
 */

/** Full Technology pages — footer + domain sequences. */
export const technologyNavChildren: readonly NavLinkItem[] = [
  { id: "technology-overview", label: "Technology", href: "/technology/" },
  { id: "technology-human-data", label: "Human Data", href: "/technology/human-data/" },
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
  { id: "technology-privacy", label: "Privacy", href: "/technology/privacy/" },
  { id: "technology-security", label: "Security", href: "/technology/security/" },
  {
    id: "technology-artificial-intelligence",
    label: "Artificial Intelligence",
    href: "/technology/artificial-intelligence/",
  },
  { id: "technology-automation", label: "Automation", href: "/technology/automation/" },
  { id: "technology-robotics", label: "Robotics", href: "/technology/robotics/" },
] as const;

/** Full Systems pages — footer + domain sequences. */
export const systemsNavChildren: readonly NavLinkItem[] = [
  { id: "systems-overview", label: "Systems", href: "/systems/" },
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
  { id: "systems-safety-layer", label: "Safety Layer", href: "/systems/safety-layer/" },
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
  { id: "systems-drone-systems", label: "Drone Systems", href: "/systems/drone-systems/" },
] as const;

/** Full Applications pages — footer + domain sequences. */
export const applicationsNavChildren: readonly NavLinkItem[] = [
  { id: "applications-overview", label: "Applications", href: "/applications/" },
  { id: "applications-healthcare", label: "Healthcare", href: "/applications/healthcare/" },
  { id: "applications-home", label: "Home", href: "/applications/home/" },
  { id: "applications-hospitals", label: "Hospitals", href: "/applications/hospitals/" },
  { id: "applications-emergency", label: "Emergency", href: "/applications/emergency/" },
  { id: "applications-industrial", label: "Industrial", href: "/applications/industrial/" },
  { id: "applications-government", label: "Government", href: "/applications/government/" },
  { id: "applications-agriculture", label: "Agriculture", href: "/applications/agriculture/" },
  {
    id: "applications-research-applications",
    label: "Research Applications",
    href: "/applications/research-applications/",
  },
] as const;

/** Full Trust pages — footer + domain sequences. */
export const trustNavChildren: readonly NavLinkItem[] = [
  { id: "trust-overview", label: "Trust", href: "/trust/" },
  { id: "trust-privacy", label: "Privacy", href: "/trust/privacy/" },
  { id: "trust-security", label: "Security", href: "/trust/security/" },
  { id: "trust-safety", label: "Safety", href: "/trust/safety/" },
  {
    id: "trust-human-oversight",
    label: "Human Oversight",
    href: "/trust/human-oversight/",
  },
  { id: "trust-transparency", label: "Transparency", href: "/trust/transparency/" },
  {
    id: "trust-ethics",
    label: "Ethics and Responsible Use",
    href: "/trust/ethics-and-responsible-use/",
  },
  { id: "trust-limitations", label: "Limitations", href: "/trust/limitations/" },
] as const;

/** Short Technology dropdown — key entry points only. */
export const technologyMenuEntries: readonly NavLinkItem[] = [
  technologyNavChildren[0]!,
  technologyNavChildren[1]!,
  technologyNavChildren[2]!,
  technologyNavChildren[3]!,
] as const;

/** Short Systems dropdown — key entry points only. */
export const systemsMenuEntries: readonly NavLinkItem[] = [
  systemsNavChildren[0]!,
  systemsNavChildren[1]!,
  systemsNavChildren[2]!,
  systemsNavChildren[3]!,
] as const;

/** Short Applications dropdown — key entry points only. */
export const applicationsMenuEntries: readonly NavLinkItem[] = [
  applicationsNavChildren[0]!,
  applicationsNavChildren[1]!,
  applicationsNavChildren[2]!,
  applicationsNavChildren[3]!,
] as const;

/** Short Trust dropdown — key entry points only. */
export const trustMenuEntries: readonly NavLinkItem[] = [
  trustNavChildren[0]!,
  trustNavChildren[1]!,
  trustNavChildren[4]!,
  trustNavChildren[7]!,
] as const;

/**
 * Primary header navigation.
 * Home + five domains. Company omitted until published.
 * Dropdowns stay short; full lists live in the footer.
 */
export const primaryNavigation: readonly PrimaryNavItem[] = [
  { id: "home", label: "Home", href: "/" },
  {
    id: "technology",
    label: "Technology",
    href: "/technology/",
    children: technologyMenuEntries,
  },
  {
    id: "systems",
    label: "Systems",
    href: "/systems/",
    children: systemsMenuEntries,
  },
  {
    id: "applications",
    label: "Applications",
    href: "/applications/",
    children: applicationsMenuEntries,
  },
  {
    id: "trust",
    label: "Trust",
    href: "/trust/",
    children: trustMenuEntries,
  },
  { id: "research", label: "Research", href: "/research/" },
] as const;

export const utilityNavigation: readonly NavLinkItem[] = [] as const;

/**
 * Footer — complete published sitemap.
 * Legal policy pages are omitted until published (no broken links).
 */
export const footerNavigation: readonly FooterGroup[] = [
  {
    id: "about",
    title: "About",
    links: [
      { id: "footer-resources-home", label: "Home", href: "/" },
      { id: "footer-purpose", label: "Purpose", href: "/purpose/" },
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
    id: "trust",
    title: "Trust",
    links: trustNavChildren.map((item) => ({
      id: `footer-${item.id}`,
      label: item.label,
      href: item.href,
    })),
  },
  {
    id: "research",
    title: "Research",
    links: [
      { id: "footer-research", label: "Research", href: "/research/" },
    ],
  },
  {
    id: "resources",
    title: "Resources",
    links: [
      { id: "footer-resources-purpose", label: "Purpose", href: "/purpose/" },
      {
        id: "footer-resources-foundation",
        label: "Foundation",
        href: "/foundation/",
      },
      { id: "footer-resources-research", label: "Research", href: "/research/" },
    ],
  },
] as const;

export const FOOTER_COPYRIGHT = "© 2026 SAVEN Core. All rights reserved.";

function assertTechnologyDropdownSource(): void {
  const technology = primaryNavigation.find((item) => item.id === "technology");
  if (!technology || !isNavGroup(technology)) {
    throw new Error("Technology primary nav group is missing.");
  }
  if (technology.children !== technologyMenuEntries) {
    throw new Error(
      "Technology dropdown must use technologyMenuEntries as its only children source.",
    );
  }
  if (technology.children.length > 5) {
    throw new Error("Technology dropdown must stay short (key entry points only).");
  }
  for (const child of technology.children) {
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
