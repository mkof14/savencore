import {
  isFooterLinkPublished,
  type FooterGroup,
  type FooterLinkItem,
  type FooterLinkPublished,
  type NavHref,
  type NavLinkItem,
  type PrimaryNavItem,
} from "./navigation-types";
import { PUBLISHED_ROUTES } from "./published-routes";

function published(
  id: string,
  label: string,
  href: NavHref,
): FooterLinkPublished {
  return { id, label, status: "published", href };
}

/**
 * Centralized site navigation — Layer 1 header hubs + footer depth map.
 *
 * D-0153: Important Layer-1 hubs restored to the header (short list).
 * D-0132 / D-0154: Footer remains the complete published depth map, including Legal.
 */

/** Build footer links from a domain nav list. Hub → "Overview"; leaves keep domain labels. */
function footerLinksFromDomain(
  domainId: string,
  children: readonly NavLinkItem[],
): FooterLinkItem[] {
  return children.map((child, index) => {
    if (index === 0) {
      return published(`footer-${domainId}-overview`, "Overview", child.href);
    }
    // Preserve stable footer id used in locale catalogs for this leaf.
    if (child.id === "applications-research-applications") {
      return published("footer-applications-research", "Research", child.href);
    }
    if (child.id === "trust-ethics") {
      return published("footer-trust-ethics", "Ethics", child.href);
    }
    return published(`footer-${child.id}`, child.label, child.href);
  });
}

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
  { id: "applications-home", label: "Home Application", href: "/applications/home/" },
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
 * Primary header navigation — important Layer-1 hubs only (D-0153 / D-0194).
 * Flat hub links; full leaf lists stay in the footer.
 * Systems restored for Architecture discovery; Purpose remains in footer Company → Mission.
 */
export const primaryNavigation: readonly PrimaryNavItem[] = [
  { id: "labs", label: "Labs", href: "/labs/" },
  { id: "systems", label: "Systems", href: "/systems/" },
  { id: "applications", label: "Applications", href: "/applications/" },
  { id: "technology", label: "Technology", href: "/technology/" },
  { id: "research", label: "Research", href: "/research/" },
  { id: "trust", label: "Trust", href: "/trust/" },
  { id: "investors", label: "Investors", href: "/investors/" },
] as const;

/** Utility chrome links (Sign In/Up). */
export const utilityNavigation: readonly NavLinkItem[] = [
  { id: "sign-in", label: "Sign In/Up", href: "/auth/sign-in/" },
] as const;

/** Legal destinations — structural drafts until counsel review (D-0154). */
export const legalNavChildren: readonly NavLinkItem[] = [
  {
    id: "legal-privacy-policy",
    label: "Privacy Policy",
    href: "/legal/privacy-policy/",
  },
  { id: "legal-terms-of-use", label: "Terms of Use", href: "/legal/terms-of-use/" },
  {
    id: "legal-cookie-policy",
    label: "Cookie Policy",
    href: "/legal/cookie-policy/",
  },
  {
    id: "legal-cookie-preferences",
    label: "Cookie Preferences",
    href: "/legal/cookie-preferences/",
  },
  {
    id: "legal-accessibility-statement",
    label: "Accessibility Statement",
    href: "/legal/accessibility-statement/",
  },
  { id: "legal-security", label: "Security", href: "/legal/security/" },
  {
    id: "legal-responsible-ai",
    label: "Responsible AI",
    href: "/legal/responsible-ai/",
  },
  {
    id: "legal-medical-disclaimer",
    label: "Medical Disclaimer",
    href: "/legal/medical-disclaimer/",
  },
  {
    id: "legal-research-disclaimer",
    label: "Research Disclaimer",
    href: "/legal/research-disclaimer/",
  },
  {
    id: "legal-intellectual-property",
    label: "Intellectual Property",
    href: "/legal/intellectual-property/",
  },
  {
    id: "legal-trademark-notice",
    label: "Trademark Notice",
    href: "/legal/trademark-notice/",
  },
  { id: "legal-copyright", label: "Copyright Notice", href: "/legal/copyright/" },
  { id: "legal-data-rights", label: "Data Rights", href: "/legal/data-rights/" },
  {
    id: "legal-regional-privacy-rights",
    label: "Regional Privacy Rights",
    href: "/legal/regional-privacy-rights/",
  },
  {
    id: "legal-do-not-sell-or-share",
    label: "Do Not Sell or Share",
    href: "/legal/do-not-sell-or-share/",
  },
  {
    id: "legal-legal-notices",
    label: "Legal Notices",
    href: "/legal/legal-notices/",
  },
] as const;

/**
 * Primary Legal column links (D-0181) — overflow lives on `/legal/` via More.
 * Keep count aligned with other footer columns for visual balance.
 */
export const FOOTER_LEGAL_PRIMARY_IDS = [
  "legal-privacy-policy",
  "legal-terms-of-use",
  "legal-cookie-policy",
  "legal-accessibility-statement",
  "legal-security",
  "legal-responsible-ai",
] as const;

/**
 * Footer — public site map + Layer 2 depth (D-0132 / D-0154 / D-0188).
 * Published destinations only, grouped by domain. Legal column restored.
 * Architecture = Systems domain depth map (pages document architecture; routes stay /systems/*).
 */
export const footerNavigation: readonly FooterGroup[] = [
  {
    id: "technology",
    title: "Technology",
    links: footerLinksFromDomain("technology", technologyNavChildren),
  },
  {
    id: "architecture",
    title: "Architecture",
    links: [
      ...footerLinksFromDomain("systems", systemsNavChildren),
      published(
        "footer-systems-saven-robotics-interface",
        "Robotics Interface",
        "/systems/saven-robotics-interface/",
      ),
    ],
  },
  {
    id: "labs",
    title: "Labs",
    links: [
      published("footer-labs-overview", "Overview", "/labs/"),
      published(
        "footer-labs-saven-robotics-lab",
        "SAVEN Robotics Lab",
        "/labs/saven-robotics-lab/",
      ),
      published(
        "footer-labs-internal-future-lab",
        "Future Lab",
        "/labs/internal-future-lab/",
      ),
    ],
  },
  {
    id: "applications",
    title: "Applications",
    links: footerLinksFromDomain("applications", applicationsNavChildren),
  },
  {
    id: "trust",
    title: "Trust",
    links: footerLinksFromDomain("trust", trustNavChildren),
  },
  {
    id: "research",
    title: "Research",
    links: [
      published("footer-research-overview", "Overview", "/research/"),
      published("footer-research-areas", "Research Areas", "/research/areas/"),
      published("footer-research-notes", "Research Notes", "/research/notes/"),
    ],
  },
  {
    id: "company",
    title: "Company",
    links: [
      published("footer-company-about", "About", "/foundation/"),
      published("footer-company-mission", "Mission", "/purpose/"),
      published("footer-company-investors", "Investors", "/investors/"),
      published(
        "footer-company-investors-contact",
        "Investor Contact",
        "/investors/contact/",
      ),
      published("footer-company-media", "Media", "/media/"),
      published("footer-company-contact", "Contact", "/contact/"),
      published("footer-company-roadmap", "Roadmap", "/roadmap/"),
    ],
  },
  {
    id: "resources",
    title: "Resources",
    links: [
      published("footer-resources-faq", "FAQ", "/faq/"),
      published(
        "footer-resources-security-issue",
        "Security Issue",
        "/resources/report-a-security-issue/",
      ),
    ],
  },
  {
    id: "legal",
    title: "Legal",
    links: [
      ...FOOTER_LEGAL_PRIMARY_IDS.map((id) => {
        const item = legalNavChildren.find((child) => child.id === id);
        if (!item) {
          throw new Error(`Unknown primary legal footer id: ${id}`);
        }
        return published(`footer-${item.id}`, item.label, item.href);
      }),
      published("footer-legal-more", "More", "/legal/"),
    ],
  },
] as const;

export const FOOTER_VERSION = "0.2.0";

export const FOOTER_COPYRIGHT = "Copyright © 2026 SAVEN Core. All rights reserved.";

const HEADER_HUB_LIMIT = 7;

function assertPrimaryNavigation(): void {
  if (primaryNavigation.length === 0) {
    throw new Error("Primary header navigation must include important hubs (D-0153).");
  }
  if (primaryNavigation.length > HEADER_HUB_LIMIT) {
    throw new Error(
      `Primary header navigation must stay ≤${HEADER_HUB_LIMIT} items (D-0153).`,
    );
  }
  if (technologyMenuEntries.length > 5) {
    throw new Error("technologyMenuEntries must stay short if used in a dropdown.");
  }
}

/**
 * Every published route except Home and auth utilities must appear in the footer
 * depth map. Legal leaf pages may be covered by the `/legal/` hub + More (D-0181).
 */
function assertFooterCoversPublishedRoutes(): void {
  const footerHrefs = new Set(
    footerNavigation.flatMap((group) =>
      group.links.filter(isFooterLinkPublished).map((link) => link.href),
    ),
  );
  const legalHubCoversLeaves = footerHrefs.has("/legal/");
  for (const route of PUBLISHED_ROUTES) {
    if (route === "/") continue;
    if (route.startsWith("/auth/")) continue;
    // Thin aliases / redirects covered by primary destinations.
    if (route === "/company/about/") continue;
    if (
      legalHubCoversLeaves &&
      route.startsWith("/legal/") &&
      route !== "/legal/"
    ) {
      continue;
    }
    if (!footerHrefs.has(route)) {
      throw new Error(`Published route missing from footer depth map: ${route}`);
    }
  }
  for (const href of footerHrefs) {
    if (!(PUBLISHED_ROUTES as readonly string[]).includes(href)) {
      throw new Error(`Footer links to unpublished route: ${href}`);
    }
  }
}

assertPrimaryNavigation();
assertFooterCoversPublishedRoutes();
