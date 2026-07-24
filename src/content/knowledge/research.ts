import type { ResearchKnowledge } from "@/content/knowledge/types";

/**
 * Research knowledge architecture — sections only.
 * No invented publications, partners or institutions.
 */
export const researchKnowledge: ResearchKnowledge = {
  domainId: "research",
  sections: [
    {
      id: "research-areas",
      title: "Research Areas",
      purpose:
        "Group the technical questions that shape architecture and system design.",
      summary:
        "Areas such as system models, safety, privacy and human-system interaction.",
      futureTopics: [
        "Area indexes",
        "Question registers",
        "Cross-links to systems",
      ],
      relatedDomains: ["technology", "systems", "foundation"],
    },
    {
      id: "white-papers",
      title: "White Papers",
      purpose:
        "Reserve a structured place for approved long-form technical papers.",
      summary:
        "Placeholder architecture only. No paper titles or counts are invented in this phase.",
      futureTopics: [
        "Paper metadata schema",
        "Public versus restricted classification",
        "Version history",
      ],
      relatedDomains: ["technology", "trust", "foundation"],
    },
    {
      id: "engineering-notes",
      title: "Engineering Notes",
      purpose:
        "Capture concise engineering observations that inform implementation.",
      summary:
        "Short notes linking methods, constraints and open questions to systems and technology.",
      futureTopics: [
        "Note templates",
        "Status labels",
        "Traceability to systems",
      ],
      relatedDomains: ["systems", "technology", "foundation"],
    },
    {
      id: "publications",
      title: "Publications",
      purpose:
        "Provide a registry structure for approved public research outputs.",
      summary:
        "Structural placeholder. Entries are added only when owner-approved publications exist.",
      futureTopics: [
        "Citation fields",
        "Abstract summaries",
        "Related research areas",
      ],
      relatedDomains: ["research", "technology", "company"],
    },
    {
      id: "future-research",
      title: "Future Research",
      purpose:
        "Track intended research directions without promising delivery dates.",
      summary:
        "Forward-looking questions organized by capability and evidence needs.",
      futureTopics: [
        "Horizon topics",
        "Dependency on foundation layers",
        "Validation prerequisites",
      ],
      relatedDomains: ["foundation", "systems", "trust"],
    },
    {
      id: "laboratories",
      title: "Laboratories",
      purpose:
        "Describe engineering environments that turn research into testable methods.",
      summary:
        "Labs remain distinct from research. Named labs appear only with approved terminology.",
      futureTopics: [
        "Lab pages",
        "Focus areas",
        "Links to systems under test",
      ],
      relatedDomains: ["systems", "technology", "trust"],
    },
  ],
};
