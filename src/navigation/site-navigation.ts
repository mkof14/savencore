import type {
  FooterGroup,
  NavLinkItem,
  PrimaryNavItem,
} from "./navigation-types";

/**
 * Centralized site navigation — single source for Header, mobile nav, and Footer.
 * Only published routes. Do not duplicate this tree in components.
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

/**
 * Primary header navigation.
 * Groups only appear when they have published children beyond the overview,
 * or when a single overview child is still useful as an explicit menu entry.
 *
 * Systems and Labs are omitted until those indexes are published.
 * Company utility destinations are omitted until published.
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
    id: "applications",
    label: "Applications",
    href: "/applications/",
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
    id: "applications",
    title: "Applications",
    links: [
      {
        id: "footer-applications",
        label: "Applications",
        href: "/applications/",
      },
    ],
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
] as const;

export const FOOTER_COPYRIGHT = "© 2026 SAVEN Core. All rights reserved.";
