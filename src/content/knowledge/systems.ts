import type { SystemsKnowledge } from "@/content/knowledge/types";

/**
 * Systems knowledge architecture — subsections only.
 * No long-form destination content in this phase.
 */
export const systemsKnowledge: SystemsKnowledge = {
  domainId: "systems",
  subsections: [
    {
      id: "human-data-model",
      title: "Human Data Model",
      purpose:
        "Provide a controlled interface between human context and systems that may use authorized information.",
      summary:
        "Structured human-context representation with permissions, minimization and accountable use.",
      futureTopics: [
        "Context object definitions",
        "Permission matrices",
        "Change and review events",
      ],
      relatedTechnology: ["human-data", "privacy", "data-infrastructure"],
      relatedApplications: ["healthcare", "home", "hospitals"],
    },
    {
      id: "ai-decision-support",
      title: "AI Decision Support",
      purpose:
        "Assist interpretation and option evaluation without claiming autonomous decision authority.",
      summary:
        "Decision-support pathways remain connected to rules, uncertainty handling and human oversight.",
      futureTopics: [
        "Option presentation patterns",
        "Escalation triggers",
        "Assistance boundaries",
      ],
      relatedTechnology: ["artificial-intelligence", "automation", "security"],
      relatedApplications: ["healthcare", "emergency", "hospitals"],
    },
    {
      id: "robotics-layer",
      title: "Robotics Layer",
      purpose:
        "Connect intelligence and interfaces to physical assistance capabilities.",
      summary:
        "Robotics systems for interaction, mobility and environment-level tasks under operational boundaries.",
      futureTopics: [
        "Device interface contracts",
        "Operational stop conditions",
        "Human-robot handoff",
      ],
      relatedTechnology: ["robotics", "automation", "interoperability"],
      relatedApplications: ["home", "hospitals", "industrial"],
    },
    {
      id: "drone-systems",
      title: "Drone Systems",
      purpose:
        "Support authorized aerial sensing, inspection, mapping and monitoring tasks.",
      summary:
        "Aerial operations framework constrained by permission, risk and human authority.",
      futureTopics: [
        "Mission authorization",
        "Sensing payloads",
        "Airspace and safety boundaries",
      ],
      relatedTechnology: ["automation", "robotics", "security"],
      relatedApplications: ["emergency", "industrial", "agriculture"],
    },
    {
      id: "clinical-interfaces",
      title: "Clinical Interfaces",
      purpose:
        "Define structured interfaces for clinical and care-environment workflows.",
      summary:
        "Interface architecture for hospitals and care contexts; not a claim of medical-device approval or deployment.",
      futureTopics: [
        "Workflow touchpoints",
        "Role-based access",
        "Institutional integration placeholders",
      ],
      relatedTechnology: ["human-data", "interoperability", "privacy"],
      relatedApplications: ["healthcare", "hospitals", "emergency"],
    },
    {
      id: "knowledge-engine",
      title: "Knowledge Engine",
      purpose:
        "Organize engineering knowledge, models and governed references used across systems.",
      summary:
        "Knowledge structures that connect research, technology and system definitions without inventing publications.",
      futureTopics: [
        "Knowledge indexes",
        "Model registries",
        "Evidence linkage patterns",
      ],
      relatedTechnology: [
        "artificial-intelligence",
        "data-infrastructure",
        "interoperability",
      ],
      relatedApplications: ["research", "healthcare", "government"],
    },
    {
      id: "safety-layer",
      title: "Safety Layer",
      purpose:
        "Encode operational boundaries, escalation, fallback and conditions to stop or defer.",
      summary:
        "Safety is a structural layer across systems, not a certification badge or decorative trust signal.",
      futureTopics: [
        "Boundary catalogs",
        "Failure handling patterns",
        "Human intervention points",
      ],
      relatedTechnology: ["security", "privacy", "automation"],
      relatedApplications: ["hospitals", "emergency", "home"],
    },
    {
      id: "communication-layer",
      title: "Communication Layer",
      purpose:
        "Define how systems, people and authorized environments exchange signals and commands.",
      summary:
        "Communication pathways remain permissioned, auditable where required and subordinate to safety constraints.",
      futureTopics: [
        "Message contracts",
        "Latency and reliability classes",
        "Cross-system signaling",
      ],
      relatedTechnology: ["interoperability", "security", "data-infrastructure"],
      relatedApplications: ["hospitals", "industrial", "government"],
    },
  ],
};
