import type {
  FooterGroup,
  NavLinkItem,
  PrimaryNavItem,
} from "./navigation-types";

/**
 * Centralized site navigation — single source for Header, mobile nav, and Footer.
 * Labels and grouping follow ARCHITECTURE_DECISIONS.md. Do not duplicate this tree.
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
    children: [
      { id: "technology-overview", label: "Technology", href: "/technology/" },
      { id: "systems", label: "Systems", href: "/systems/" },
      { id: "labs", label: "Labs", href: "/labs/" },
    ],
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
      { id: "research-overview", label: "Research", href: "/research/" },
      {
        id: "publications",
        label: "Publications",
        href: "/research/publications/",
      },
      { id: "roadmap", label: "Roadmap", href: "/roadmap/" },
    ],
  },
  {
    id: "company",
    label: "Company",
    href: "/company/",
    children: [
      { id: "about", label: "About", href: "/company/" },
      {
        id: "leadership",
        label: "Leadership",
        href: "/company/leadership/",
      },
      { id: "careers", label: "Careers", href: "/company/careers/" },
      { id: "company-contact", label: "Contact", href: "/contact/" },
      { id: "trust", label: "Trust", href: "/trust/" },
    ],
  },
] as const;

export const utilityNavigation: readonly NavLinkItem[] = [
  { id: "investors", label: "Investors", href: "/investors/" },
  { id: "search", label: "Search", href: "/search/" },
  { id: "contact", label: "Contact", href: "/contact/" },
] as const;

/**
 * Footer groups required by Phase 1C.
 * Paths are locale-relative; unresolved owner contact/social data is omitted.
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
      {
        id: "footer-biomath-life",
        label: "BioMath Life",
        href: "/foundation/biomath-life/",
      },
      {
        id: "footer-biomath-core",
        label: "BioMath Core",
        href: "/foundation/biomath-core/",
      },
      { id: "footer-saven", label: "SAVEN", href: "/foundation/saven/" },
    ],
  },
  {
    id: "technology",
    title: "Technology",
    links: [
      {
        id: "footer-technology",
        label: "Technology",
        href: "/technology/",
      },
      {
        id: "footer-ai",
        label: "Artificial Intelligence",
        href: "/technology/artificial-intelligence/",
      },
      {
        id: "footer-robotics",
        label: "Robotics",
        href: "/technology/robotics/",
      },
      {
        id: "footer-autonomous",
        label: "Autonomous Systems",
        href: "/technology/autonomous-systems/",
      },
      {
        id: "footer-human-data",
        label: "Human Data and Intelligence",
        href: "/technology/human-data-and-intelligence/",
      },
      {
        id: "footer-safety",
        label: "Safety Architecture",
        href: "/technology/safety-architecture/",
      },
      {
        id: "footer-privacy",
        label: "Privacy Architecture",
        href: "/technology/privacy-architecture/",
      },
    ],
  },
  {
    id: "systems",
    title: "Systems",
    links: [
      { id: "footer-systems", label: "Systems", href: "/systems/" },
      { id: "footer-labs", label: "Labs", href: "/labs/" },
      {
        id: "footer-robotics-interface",
        label: "SAVEN Robotics Interface",
        href: "/systems/saven-robotics-interface/",
      },
      {
        id: "footer-systems-architecture",
        label: "SAVEN Systems Architecture",
        href: "/systems/saven-systems-architecture/",
      },
      { id: "footer-saven-ai", label: "SAVEN AI", href: "/systems/saven-ai/" },
      {
        id: "footer-drone",
        label: "SAVEN Drone Platform",
        href: "/systems/saven-drone-platform/",
      },
    ],
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
      {
        id: "footer-hospitals",
        label: "Hospitals",
        href: "/applications/hospitals/",
      },
      { id: "footer-home", label: "Home", href: "/applications/home/" },
      {
        id: "footer-independent-living",
        label: "Independent Living",
        href: "/applications/independent-living/",
      },
      {
        id: "footer-rehabilitation",
        label: "Rehabilitation",
        href: "/applications/rehabilitation/",
      },
      {
        id: "footer-everyday",
        label: "Everyday Environments",
        href: "/applications/everyday-environments/",
      },
      {
        id: "footer-emergency",
        label: "Emergency Assistance",
        href: "/applications/emergency-and-remote-assistance/",
      },
      {
        id: "footer-infrastructure",
        label: "Infrastructure",
        href: "/applications/infrastructure/",
      },
      {
        id: "footer-industry",
        label: "Industry",
        href: "/applications/industry/",
      },
      {
        id: "footer-agriculture",
        label: "Agriculture",
        href: "/applications/agriculture/",
      },
    ],
  },
  {
    id: "research",
    title: "Research",
    links: [
      { id: "footer-research", label: "Research", href: "/research/" },
      {
        id: "footer-publications",
        label: "Publications",
        href: "/research/publications/",
      },
      {
        id: "footer-research-areas",
        label: "Research Areas",
        href: "/research/areas/",
      },
      { id: "footer-roadmap", label: "Roadmap", href: "/roadmap/" },
    ],
  },
  {
    id: "company",
    title: "Company",
    links: [
      { id: "footer-company", label: "About", href: "/company/" },
      {
        id: "footer-leadership",
        label: "Leadership",
        href: "/company/leadership/",
      },
      {
        id: "footer-careers",
        label: "Careers",
        href: "/company/careers/",
      },
      { id: "footer-contact", label: "Contact", href: "/contact/" },
    ],
  },
  {
    id: "investors",
    title: "Investors",
    links: [
      {
        id: "footer-investors",
        label: "Investors",
        href: "/investors/",
      },
    ],
  },
  {
    id: "trust-legal",
    title: "Trust / Legal",
    links: [
      { id: "footer-trust", label: "Trust", href: "/trust/" },
      {
        id: "footer-privacy-policy",
        label: "Privacy Policy",
        href: "/legal/privacy-policy/",
      },
      {
        id: "footer-terms",
        label: "Terms of Use",
        href: "/legal/terms-of-use/",
      },
      {
        id: "footer-cookie-policy",
        label: "Cookie Policy",
        href: "/legal/cookie-policy/",
      },
      {
        id: "footer-accessibility",
        label: "Accessibility Statement",
        href: "/legal/accessibility-statement/",
      },
      {
        id: "footer-security",
        label: "Security",
        href: "/legal/security/",
      },
      {
        id: "footer-responsible-ai",
        label: "Responsible AI",
        href: "/legal/responsible-ai/",
      },
      {
        id: "footer-medical-disclaimer",
        label: "Medical Disclaimer",
        href: "/legal/medical-disclaimer/",
      },
      {
        id: "footer-research-disclaimer",
        label: "Research Disclaimer",
        href: "/legal/research-disclaimer/",
      },
    ],
  },
] as const;

export const FOOTER_COPYRIGHT = "© 2026 SAVEN Core. All rights reserved.";
