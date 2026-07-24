/**
 * Home Knowledge Explorer presentation — derived from published domains.
 * Does not invent new product claims or unpublished destinations.
 */

import {
  applicationsNavChildren,
  systemsNavChildren,
  technologyNavChildren,
  trustNavChildren,
} from "@/navigation/site-navigation";

export const knowledgeHeroContent = {
  brand: "SAVEN Core",
  sentence: "Intelligent systems built to support human life.",
  explanation:
    "SAVEN Core connects human understanding, technology foundations, coordinated systems and real-world environments under clear limits.",
  status:
    "Current status: Architecture and In Development — not a deployed product platform.",
} as const;

export const knowledgeArchitectureChain = [
  { id: "human", label: "Human" },
  { id: "human-data", label: "Human Data", href: "/technology/human-data/" },
  {
    id: "human-data-model",
    label: "Human Data Model",
    href: "/technology/human-data-model/",
  },
  { id: "technology", label: "Technology", href: "/technology/" },
  { id: "systems", label: "Systems", href: "/systems/" },
  { id: "applications", label: "Applications", href: "/applications/" },
  { id: "trust", label: "Trust", href: "/trust/" },
  { id: "research", label: "Research", href: "/research/" },
] as const;

export const knowledgeExplorerDomains = [
  {
    id: "technology",
    title: "Technology",
    purpose: "Technical foundations used to build SAVEN Core systems.",
    href: "/technology/",
    pages: technologyNavChildren.map((item) => item.label),
    relationships:
      "Feeds Systems with schemas, data pathways and engineering disciplines.",
  },
  {
    id: "systems",
    title: "Systems",
    purpose: "Coordinated components that perform defined roles under limits.",
    href: "/systems/",
    pages: systemsNavChildren.map((item) => item.label),
    relationships:
      "Uses Technology foundations and supports Applications under Trust boundaries.",
  },
  {
    id: "applications",
    title: "Applications",
    purpose: "Intended real-world operating contexts for people and environments.",
    href: "/applications/",
    pages: applicationsNavChildren.map((item) => item.label),
    relationships:
      "Depends on Systems coordination and remains constrained by Trust.",
  },
  {
    id: "trust",
    title: "Trust",
    purpose: "Governance commitments, oversight, accountability and limitations.",
    href: "/trust/",
    pages: trustNavChildren.map((item) => item.label),
    relationships:
      "Constrains Technology, Systems and Applications without replacing engineering pages.",
  },
  {
    id: "research",
    title: "Research",
    purpose: "Evidence, methods and unresolved questions that guide engineering.",
    href: "/research/",
    pages: ["Research Overview"],
    relationships:
      "Informs Technology and Systems; remains incomplete as a domain destination set.",
  },
] as const;

export const knowledgeDomainMapSteps = [
  {
    id: "technology",
    label: "Technology",
    href: "/technology/",
    dependency: "foundations",
  },
  {
    id: "systems",
    label: "Systems",
    href: "/systems/",
    dependency: "coordinates",
  },
  {
    id: "applications",
    label: "Applications",
    href: "/applications/",
    dependency: "operates in",
  },
  {
    id: "trust",
    label: "Trust",
    href: "/trust/",
    dependency: "governs",
  },
  {
    id: "research",
    label: "Research",
    href: "/research/",
    dependency: "informs",
  },
] as const;

export const platformStatusItems = [
  { id: "technology", label: "Technology", state: "Complete", complete: true },
  { id: "systems", label: "Systems", state: "Complete", complete: true },
  {
    id: "applications",
    label: "Applications",
    state: "Complete",
    complete: true,
  },
  { id: "trust", label: "Trust", state: "Complete", complete: true },
  {
    id: "research",
    label: "Research",
    state: "In Progress",
    complete: false,
  },
  { id: "company", label: "Company", state: "Planned", complete: false },
] as const;

export const featuredConcepts = [
  {
    id: "human-data",
    title: "Human Data",
    role: "Signal intake",
    href: "/technology/human-data/",
    note: "Information about a person from different sources.",
  },
  {
    id: "knowledge-engine",
    title: "Knowledge Engine",
    role: "Context layer",
    href: "/systems/knowledge-engine/",
    note: "Organizes knowledge. Does not make decisions.",
  },
  {
    id: "ai-decision-support",
    title: "AI Decision Support",
    role: "Review support",
    href: "/systems/ai-decision-support/",
    note: "Supports people. Does not replace people.",
  },
  {
    id: "safety-layer",
    title: "Safety Layer",
    role: "Control path",
    href: "/systems/safety-layer/",
    note: "Checks, limits, escalation and oversight.",
  },
  {
    id: "human-oversight",
    title: "Human Oversight",
    role: "Authority boundary",
    href: "/trust/human-oversight/",
    note: "People remain decision owners.",
  },
] as const;

export const continueExploring = [
  {
    id: "technology",
    title: "Explore Technology",
    detail: "Foundations and technical disciplines",
    href: "/technology/",
  },
  {
    id: "systems",
    title: "Explore Systems",
    detail: "Architecture roles and controlled flows",
    href: "/systems/",
  },
  {
    id: "applications",
    title: "Explore Applications",
    detail: "Operating contexts and environments",
    href: "/applications/",
  },
  {
    id: "trust",
    title: "Explore Trust",
    detail: "Commitments, oversight and limits",
    href: "/trust/",
  },
  {
    id: "research",
    title: "Explore Research",
    detail: "Evidence and unresolved work",
    href: "/research/",
  },
] as const;
