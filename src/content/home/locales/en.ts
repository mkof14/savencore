import type { HomeContent } from "@/content/home/types";
import {
  applicationsNavChildren,
  systemsNavChildren,
  technologyNavChildren,
  trustNavChildren,
} from "@/navigation/site-navigation";

/** English home content — clear, direct language. */
export const homeContentEn: HomeContent = {
  hero: {
    brand: "SAVEN Core",
    sentence: "Intelligent systems built to support human life.",
    explanation:
      "We design systems that help people in hospitals, at home and in everyday life — carefully, and with clear limits.",
    status:
      "Architecture, systems and human-centered principles for responsible assistance.",
  },
  architectureChain: [
    { id: "human", label: "People" },
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
  ],
  explorerDomains: [
    {
      id: "technology",
      title: "Technology",
      purpose: "The building blocks used to create SAVEN Core systems.",
      href: "/technology/",
      pageIds: technologyNavChildren.map((item) => item.id),
      relationships: "Supports Systems with data paths and technical methods.",
    },
    {
      id: "systems",
      title: "Systems",
      purpose: "Parts that work together under clear roles and limits.",
      href: "/systems/",
      pageIds: systemsNavChildren.map((item) => item.id),
      relationships:
        "Uses Technology and supports Applications within Trust limits.",
    },
    {
      id: "applications",
      title: "Applications",
      purpose: "Where SAVEN Core is meant to help people and places.",
      href: "/applications/",
      pageIds: applicationsNavChildren.map((item) => item.id),
      relationships: "Depends on Systems and stays inside Trust limits.",
    },
    {
      id: "trust",
      title: "Trust",
      purpose: "Commitments, oversight, accountability and limits.",
      href: "/trust/",
      pageIds: trustNavChildren.map((item) => item.id),
      relationships: "Sets limits for Technology, Systems and Applications.",
    },
    {
      id: "research",
      title: "Research",
      purpose: "Questions, methods and open work that guide design.",
      href: "/research/",
      pageIds: ["research-overview"],
      relationships: "Informs Technology and Systems through questions, methods and evidence.",
    },
  ],
  domainMapSteps: [
    {
      id: "technology",
      label: "Technology",
      href: "/technology/",
      dependency: "builds",
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
      dependency: "serves",
    },
    { id: "trust", label: "Trust", href: "/trust/", dependency: "governs" },
    {
      id: "research",
      label: "Research",
      href: "/research/",
      dependency: "informs",
    },
  ],
  platformStatus: [
    {
      id: "technology",
      label: "Technology",
      stateKey: "complete",
      complete: true,
    },
    { id: "systems", label: "Systems", stateKey: "complete", complete: true },
    {
      id: "applications",
      label: "Applications",
      stateKey: "complete",
      complete: true,
    },
    { id: "trust", label: "Trust", stateKey: "complete", complete: true },
    {
      id: "research",
      label: "Research",
      stateKey: "complete",
      complete: true,
    },
  ],
  featuredConcepts: [
    {
      id: "human-data",
      knowledgeId: "human-data",
      title: "Human Data",
      role: "Signal intake",
      href: "/technology/human-data/",
      note: "Information about a person from different sources.",
    },
    {
      id: "knowledge-engine",
      knowledgeId: "knowledge-engine",
      title: "Knowledge Engine",
      role: "Context layer",
      href: "/systems/knowledge-engine/",
      note: "Organizes knowledge. Does not make decisions.",
    },
    {
      id: "ai-decision-support",
      knowledgeId: "ai-decision-support",
      title: "AI Decision Support",
      role: "Review support",
      href: "/systems/ai-decision-support/",
      note: "Supports people. Does not replace people.",
    },
    {
      id: "safety-layer",
      knowledgeId: "safety-layer",
      title: "Safety Layer",
      role: "Control path",
      href: "/systems/safety-layer/",
      note: "Checks, limits, escalation and oversight.",
    },
    {
      id: "human-oversight",
      knowledgeId: "human-oversight",
      title: "Human Oversight",
      role: "Authority boundary",
      href: "/trust/human-oversight/",
      note: "People remain decision owners.",
    },
  ],
  continueExploring: [
    {
      id: "technology",
      title: "Explore Technology",
      detail: "Foundations and technical topics",
      href: "/technology/",
    },
    {
      id: "systems",
      title: "Explore Systems",
      detail: "How parts work together",
      href: "/systems/",
    },
    {
      id: "applications",
      title: "Explore Applications",
      detail: "Places and contexts of use",
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
      detail: "Evidence and open questions",
      href: "/research/",
    },
  ],
  domainMapConstraints: [
    "Trust sets limits for Technology, Systems and Applications",
    "Research informs Technology and Systems",
    "Applications come after Systems coordination",
  ],
};
