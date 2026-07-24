import type { ApplicationsKnowledge } from "@/content/knowledge/types";

/**
 * Applications knowledge architecture — categories only.
 * Human contexts remain primary; industrial extensions are secondary placeholders.
 */
export const applicationsKnowledge: ApplicationsKnowledge = {
  domainId: "applications",
  categories: [
    {
      id: "healthcare",
      title: "Healthcare",
      purpose:
        "Support care environments with governed systems and human oversight.",
      summary:
        "Application architecture for care contexts; not a claim of clinical deployment or device approval.",
      futureTopics: [
        "Care workflow placeholders",
        "Role boundaries",
        "Institutional collaboration notes",
      ],
      relatedSystems: [
        "clinical-interfaces",
        "human-data-model",
        "ai-decision-support",
      ],
      relatedDomains: ["systems", "trust", "research"],
    },
    {
      id: "home",
      title: "Home",
      purpose:
        "Support independence, continuity and safer daily routines.",
      summary:
        "Home-context architecture for assistance under permissions and privacy constraints.",
      futureTopics: [
        "Daily routine assistance boundaries",
        "Household privacy rules",
        "Human intervention points",
      ],
      relatedSystems: ["human-data-model", "robotics-layer", "safety-layer"],
      relatedDomains: ["purpose", "systems", "trust"],
    },
    {
      id: "hospitals",
      title: "Hospitals",
      purpose:
        "Support clinical environments, staff workflows and care infrastructure.",
      summary:
        "Hospital-context architecture aligned to foundation and trust requirements.",
      futureTopics: [
        "Staff workflow interfaces",
        "Environment integration",
        "Escalation pathways",
      ],
      relatedSystems: [
        "clinical-interfaces",
        "safety-layer",
        "communication-layer",
      ],
      relatedDomains: ["systems", "technology", "trust"],
    },
    {
      id: "emergency",
      title: "Emergency",
      purpose:
        "Support time-critical assistance under strict permissions and oversight.",
      summary:
        "Emergency-context placeholder architecture. No operational deployment claims.",
      futureTopics: [
        "Rapid assessment support",
        "Remote assistance boundaries",
        "Authority and permission models",
      ],
      relatedSystems: [
        "ai-decision-support",
        "drone-systems",
        "communication-layer",
      ],
      relatedDomains: ["systems", "trust", "research"],
    },
    {
      id: "industrial",
      title: "Industrial",
      purpose:
        "Reserve future industrial extensions that inherit the same foundation and trust constraints.",
      summary:
        "Secondary to human applications. Structure only; no product or customer claims.",
      futureTopics: [
        "Inspection and monitoring patterns",
        "Operational safety boundaries",
        "Human application precedence rules",
      ],
      relatedSystems: ["robotics-layer", "drone-systems", "safety-layer"],
      relatedDomains: ["systems", "technology", "foundation"],
    },
    {
      id: "government",
      title: "Government",
      purpose:
        "Reserve institutional and public-sector collaboration pathways when approved.",
      summary:
        "Placeholder category for governed institutional contexts. No partnership claims.",
      futureTopics: [
        "Institutional access models",
        "Accountability requirements",
        "Public-interest constraints",
      ],
      relatedSystems: [
        "knowledge-engine",
        "communication-layer",
        "safety-layer",
      ],
      relatedDomains: ["trust", "company", "research"],
    },
    {
      id: "agriculture",
      title: "Agriculture",
      purpose:
        "Reserve future agricultural extensions of sensing and assistance systems.",
      summary:
        "Secondary extension domain. Architecture placeholder only.",
      futureTopics: [
        "Field sensing patterns",
        "Aerial monitoring boundaries",
        "Environmental constraints",
      ],
      relatedSystems: ["drone-systems", "robotics-layer", "communication-layer"],
      relatedDomains: ["systems", "technology", "research"],
    },
    {
      id: "research",
      title: "Research",
      purpose:
        "Support research environments that evaluate systems, methods and evidence.",
      summary:
        "Application context for research settings, distinct from the Research knowledge domain itself.",
      futureTopics: [
        "Evaluation environments",
        "Controlled trial placeholders",
        "Links to laboratories",
      ],
      relatedSystems: ["knowledge-engine", "human-data-model", "safety-layer"],
      relatedDomains: ["research", "systems", "foundation"],
    },
  ],
};
