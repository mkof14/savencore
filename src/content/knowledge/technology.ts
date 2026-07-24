import type { TechnologyKnowledge } from "@/content/knowledge/types";

/**
 * Technology knowledge architecture — subsections only.
 * No long-form destination content in this phase.
 */
export const technologyKnowledge: TechnologyKnowledge = {
  domainId: "technology",
  subsections: [
    {
      id: "artificial-intelligence",
      title: "Artificial Intelligence",
      purpose:
        "Support context interpretation, option evaluation and controlled assistance within defined limits.",
      summary:
        "Models and rules intended to assist judgment under permissions, uncertainty handling and human oversight.",
      futureTopics: [
        "Constrained inference patterns",
        "Evaluation methods",
        "Human-in-the-loop controls",
      ],
      relatedSystems: ["ai-decision-support", "knowledge-engine", "safety-layer"],
    },
    {
      id: "human-data",
      title: "Human Data",
      purpose:
        "Represent authorized human context for careful interpretation and assistance.",
      summary:
        "Structures for history, signals, permissions and changing conditions without unrestricted collection.",
      futureTopics: [
        "Context schemas",
        "Minimization rules",
        "Consent and permission models",
      ],
      relatedSystems: ["human-data-model", "clinical-interfaces", "safety-layer"],
    },
    {
      id: "robotics",
      title: "Robotics",
      purpose:
        "Enable physical interaction, mobility and assistance in real environments.",
      summary:
        "Engineering discipline for devices and interfaces that act in the physical world under governance.",
      futureTopics: [
        "Manipulation boundaries",
        "Human-robot interaction",
        "Environment integration",
      ],
      relatedSystems: ["robotics-layer", "communication-layer", "safety-layer"],
    },
    {
      id: "automation",
      title: "Automation",
      purpose:
        "Define controlled system behavior for tasks that can be delegated safely.",
      summary:
        "Automation remains bounded by purpose, permission, risk and the ability for people to intervene.",
      futureTopics: [
        "Task delegation criteria",
        "Fallback behavior",
        "Review requirements",
      ],
      relatedSystems: [
        "ai-decision-support",
        "drone-systems",
        "safety-layer",
      ],
    },
    {
      id: "privacy",
      title: "Privacy",
      purpose:
        "Limit what information may be used, why it may be used and who may access it.",
      summary:
        "Privacy architecture reduces unnecessary exposure and keeps purpose limitation structural.",
      futureTopics: [
        "Access control patterns",
        "Retention boundaries",
        "Purpose limitation checks",
      ],
      relatedSystems: ["human-data-model", "safety-layer", "communication-layer"],
    },
    {
      id: "security",
      title: "Security",
      purpose:
        "Protect systems, interfaces and authorized data pathways from misuse and unauthorized access.",
      summary:
        "Security supports trust architecture alongside privacy and safety; it is not a marketing claim of certification.",
      futureTopics: [
        "Identity and access",
        "Interface hardening",
        "Audit pathways",
      ],
      relatedSystems: ["communication-layer", "safety-layer", "knowledge-engine"],
    },
    {
      id: "data-infrastructure",
      title: "Data Infrastructure",
      purpose:
        "Provide the engineering substrate for storing, moving and governing authorized data.",
      summary:
        "Infrastructure serves Human Data Model and system workflows under defined permissions.",
      futureTopics: [
        "Data pathway maps",
        "Integrity controls",
        "Operational logging boundaries",
      ],
      relatedSystems: [
        "human-data-model",
        "knowledge-engine",
        "communication-layer",
      ],
    },
    {
      id: "interoperability",
      title: "Interoperability",
      purpose:
        "Define how SAVEN Core systems exchange information with authorized external environments.",
      summary:
        "Interoperability is scoped, permissioned and subordinate to safety and privacy constraints.",
      futureTopics: [
        "Interface contracts",
        "Institutional integration patterns",
        "Compatibility boundaries",
      ],
      relatedSystems: [
        "clinical-interfaces",
        "communication-layer",
        "knowledge-engine",
      ],
    },
  ],
};
