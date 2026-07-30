import type { EditorialPageContent } from "@/components/pages/page-types";

/**
 * Canonical Purpose page content — Phase 1F.1.
 * Permanent editorial reference for why SAVEN Core exists.
 */
export const purposePageContent: EditorialPageContent = {
  label: "Purpose",
  title: "Intelligent systems built to support human life.",
  introduction:
    "SAVEN Core builds systems that support people in hospitals, at home, and in everyday life. Human purpose comes first — then architecture, engineering, and careful assistance.",
  status: "Reference architecture",
  sectionNav: [
    { id: "purpose", label: "Purpose" },
    { id: "mission", label: "Mission" },
    { id: "what-we-build", label: "What we build" },
    { id: "who-we-build-for", label: "Who we build for" },
    { id: "engineering-principles", label: "Engineering principles" },
    { id: "human-centered-systems", label: "Human-centered systems" },
    { id: "responsible-intelligence", label: "Responsible intelligence" },
    { id: "long-term-vision", label: "Long-term vision" },
  ],
  diagrams: [],
  sections: [
    {
      id: "purpose",
      title: "Purpose",
      paragraphs: [
        "The primary purpose of SAVEN Core is helping people. SAVEN Core brings human-centered architecture to care, independence, safety and daily life across every age and stage of life.",
        "BioMath Core reports and conclusions form the information that shapes SAVEN’s next-level actions and commands — under human control, with AI as a tool. That intelligence foundation covers 20 categories and 200+ services as Architecture / In Development model scope.",
        "Robotics, aerial systems, infrastructure and other technical extensions remain subordinate to that purpose. They must not replace or obscure the human reason for the work.",
      ],
    },
    {
      id: "mission",
      title: "Mission",
      paragraphs: [
        "The mission is to build a coherent path from human understanding to physical assistance: interpret context carefully, connect authorized data to engineering systems, and keep people responsible for consequential decisions.",
        "Mission describes direction. It is not used as a navigation label. Purpose remains the principal public label for this section of the site.",
      ],
    },
    {
      id: "what-we-build",
      title: "What We Build",
      paragraphs: [
        "SAVEN Core brings together human-context models, artificial intelligence, robotics, sensing, interfaces and environment-level controls as a connected system architecture.",
        "The work includes software architecture, safety and privacy architecture, human-system interaction and physical-system engineering. Public materials describe architecture and scope; they do not claim commercial deployment.",
      ],
    },
    {
      id: "who-we-build-for",
      title: "Who We Build For",
      paragraphs: [
        "Primary contexts are hospitals, home and everyday life. The architecture is intended to support people, caregivers and institutional operators who need careful assistance under defined permissions.",
        "Future industrial or extended domains may use the same foundation only after the human application orientation remains clear.",
      ],
    },
    {
      id: "engineering-principles",
      title: "Engineering Principles",
      subsections: [
        {
          id: "purpose-before-technology",
          title: "Purpose before technology",
          paragraphs: [
            "Technical capability is justified by human need and defined operational role.",
          ],
        },
        {
          id: "engineering-before-promotion",
          title: "Engineering before promotion",
          paragraphs: [
            "Public communication follows architecture, evidence and scope.",
          ],
        },
        {
          id: "responsibility-before-scale",
          title: "Responsibility before scale",
          paragraphs: [
            "Permissions, safety review and human oversight precede expanded autonomy or wider use.",
          ],
        },
        {
          id: "human-oversight",
          title: "Human oversight",
          paragraphs: [
            "People remain responsible for judgment, control and meaningful decisions.",
          ],
        },
        {
          id: "privacy-by-design",
          title: "Privacy by design",
          paragraphs: [
            "Personal context is handled with controlled access, minimization and clear permissions.",
          ],
        },
        {
          id: "safety-before-autonomy",
          title: "Safety before autonomy",
          paragraphs: [
            "Safety architecture comes before expanded autonomous behavior.",
          ],
        },
      ],
    },
    {
      id: "human-centered-systems",
      title: "Human-Centered Systems",
      paragraphs: [
        "Systems are designed around people first: context, continuity, dignity and the ability to intervene. Artificial intelligence and robotics are treated as tools for assistance, not as substitutes for human judgment.",
        "Human oversight, privacy by design and safety before autonomy remain structural requirements of the architecture.",
      ],
    },
    {
      id: "responsible-intelligence",
      title: "Responsible Intelligence",
      paragraphs: [
        "Intelligence functions are intended to support interpretation, option evaluation and controlled assistance within defined boundaries.",
        "Autonomy is limited by purpose, permission, risk and human authority. Escalation, fallback and stop conditions belong in the system design, not as later additions.",
      ],
    },
    {
      id: "long-term-vision",
      title: "Long-Term Vision",
      paragraphs: [
        "The long-term vision is a durable engineering organization that can take research into testable systems while preserving governance, evidence and human control.",
        "Progress is measured by capability, validation and responsibility — not by promotional claims or premature product framing.",
      ],
    },
  ],
  relatedLinksHeading: "Related Pages",
  relatedLinks: [
    { label: "Foundation", href: "/foundation/" },
    { label: "Technology", href: "/technology/" },
    { label: "Research", href: "/applications/research-applications/" },
    { label: "Trust", href: "/trust/" },
  ],
};
