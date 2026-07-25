import type {
  EngineeringLink,
  EngineeringPrinciple,
  PageMetadata,
} from "@/components/engineering/engineering-types";
import { TRUST_DEVELOPMENT_NOTE } from "@/content/pages/en/trust-discipline-types";
import { trustDisciplineReferenceLinks } from "@/content/pages/en/trust-reference-links";

export type TrustOverviewCard = {
  id: string;
  title: string;
  responsibility: string;
  relationship: string;
  href: string;
  role: "control" | "system" | "foundation";
  classification: string;
};

export type TrustPageContent = {
  metadata: PageMetadata;
  label: string;
  title: string;
  introduction: string;
  developmentNote: string;
  definitionTerm: string;
  definition: string;
  boundaryNote: string;
  principlesHeading: string;
  principles: readonly EngineeringPrinciple[];
  scopeHeading: string;
  scope: readonly string[];
  cardsHeading: string;
  cards: readonly TrustOverviewCard[];
  referenceHeading: string;
  referenceLinks: readonly EngineeringLink[];
  sectionNav: readonly { id: string; label: string }[];
};

export const trustPageContent: TrustPageContent = {
  metadata: {
    category: "Trust",
    documentType: "Knowledge",
    status: "Architecture",
    version: "0.1",
    lastUpdated: "2026-07-24",
    readingTime: "7 min",
    relatedDomain: "Technology, Systems, Applications",
  },
  label: "Trust Overview",
  title: "Commitments, controls, oversight and limits.",
  introduction:
    "Trust explains the reader-facing governance model for SAVEN Core. It is not a legal policy set and not a guarantee of complete safety, privacy or compliance.",
  developmentNote: TRUST_DEVELOPMENT_NOTE,
  definitionTerm: "Trust",
  definition:
    "The organizational commitments, oversight expectations and limitations that govern how SAVEN Core work may be described and constrained.",
  boundaryNote:
    "Technology Privacy and Security document engineering foundations. The Systems Safety Layer documents system-wide safeguards. Trust documents governance, responsibility and limits for readers.",
  principlesHeading: "Principles",
  principles: [
    {
      id: "human-oversight",
      title: "Human oversight",
      text: "People retain authority for consequential decisions.",
    },
    {
      id: "limits",
      title: "Visible limits",
      text: "Unsupported claims and current scope stay explicit.",
    },
    {
      id: "separation",
      title: "Clear separation",
      text: "Engineering, system safeguards and governance stay distinct.",
    },
    {
      id: "no-guarantee",
      title: "No absolute guarantee",
      text: "Trust pages do not claim zero risk or completed certification.",
    },
  ],
  scopeHeading: "Scope",
  scope: [
    "These pages define governance architecture and public commitments.",
    "They are distinct from privacy policies, terms of use and audits.",
    "Legal documents under /legal remain separate when published.",
  ],
  cardsHeading: "Trust topics",
  cards: [
    {
      id: "trust-privacy",
      title: "Privacy",
      responsibility: "Purpose, permission and accountable information use.",
      relationship: "Governance commitment",
      href: "/trust/privacy/",
      role: "control",
      classification: "TRU-01",
    },
    {
      id: "trust-security",
      title: "Security",
      responsibility: "Accountable protection practice and its limits.",
      relationship: "Governance commitment",
      href: "/trust/security/",
      role: "control",
      classification: "TRU-02",
    },
    {
      id: "trust-safety",
      title: "Safety",
      responsibility: "Safety responsibilities distinct from Safety Layer mechanisms.",
      relationship: "Governance commitment",
      href: "/trust/safety/",
      role: "control",
      classification: "TRU-03",
    },
    {
      id: "human-oversight",
      title: "Human Oversight",
      responsibility: "People remain decision owners for consequential use.",
      relationship: "Oversight model",
      href: "/trust/human-oversight/",
      role: "system",
      classification: "TRU-04",
    },
    {
      id: "transparency",
      title: "Transparency",
      responsibility: "Clear statements of purpose, status and limits.",
      relationship: "Explanation model",
      href: "/trust/transparency/",
      role: "foundation",
      classification: "TRU-05",
    },
    {
      id: "ethics",
      title: "Ethics and Responsible Use",
      responsibility: "When use should proceed, refuse or escalate.",
      relationship: "Responsible-use model",
      href: "/trust/ethics-and-responsible-use/",
      role: "system",
      classification: "TRU-06",
    },
    {
      id: "limitations",
      title: "Limitations",
      responsibility: "What SAVEN Core does not claim or guarantee.",
      relationship: "Scope boundary",
      href: "/trust/limitations/",
      role: "control",
      classification: "TRU-07",
    },
  ],
  referenceHeading: "Reference Links",
  referenceLinks: trustDisciplineReferenceLinks("/trust/"),
  sectionNav: [
    { id: "definition", label: "Definition" },
    { id: "boundaries", label: "Boundaries" },
    { id: "trust-topics", label: "Topics" },
    { id: "engineering-principles", label: "Principles" },
    { id: "current-development-scope", label: "Scope" },
    { id: "reference-links", label: "References" },
  ],
};
