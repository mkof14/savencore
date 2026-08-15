/**
 * FAQ page — public Q&A (D-0202 / D-0280).
 * English is canonical. Do not invent customers, partners, metrics,
 * Operational products, patents, or final legal claims.
 */

export type FaqRelatedLink = {
  readonly label: string;
  readonly href: string;
};

export type FaqItem = {
  readonly id: string;
  readonly question: string;
  readonly answer: readonly string[];
  readonly links?: readonly FaqRelatedLink[];
};

export type FaqSectionId =
  | "about"
  | "foundation"
  | "technology"
  | "systems"
  | "interface"
  | "labs"
  | "applications"
  | "trust"
  | "research"
  | "investors"
  | "media-contact"
  | "languages"
  | "terminology"
  | "status"
  | "not-claiming"
  | "health"
  | "daily"
  | "privacy-data"
  | "availability";

export type FaqSection = {
  readonly id: FaqSectionId;
  readonly title: string;
  readonly intro: string;
  readonly items: readonly FaqItem[];
};

export type FaqPageContent = {
  readonly label: string;
  readonly title: string;
  readonly lede: string;
  readonly note: string;
  readonly expandAll: string;
  readonly collapseAll: string;
  readonly tocLabel: string;
  readonly relatedLabel: string;
  readonly sections: readonly FaqSection[];
};

export const faqPageEn: FaqPageContent = {
  label: "FAQ",
  title: "Questions about SAVEN",
  lede: "Clear answers about what SAVEN is building, how the architecture is intended to work, and how to read this site — without inventing products, customers, or guarantees.",
  note: "Public materials describe architecture, research directions, and potential applications. Legal pages describe website information practices and terms of use. Counsel review remains recommended for regulated jurisdictions.",
  expandAll: "Expand all",
  collapseAll: "Collapse all",
  tocLabel: "Topics",
  relatedLabel: "Related",
  sections: [
    {
      id: "about",
      title: "About SAVEN",
      intro: "What SAVEN is — and what it is not limited to.",
      items: [
        {
          id: "about-what",
          question: "What is SAVEN?",
          answer: [
            "SAVEN is a human-assistance robotics initiative focused on intelligence, integration, and interaction technologies that can help compatible robotic systems support people with physical tasks, mobility, rehabilitation-related activities, and everyday assistance.",
          ],
          links: [
            { label: "Purpose", href: "/purpose/" },
            { label: "Technology", href: "/technology/" },
          ],
        },
        {
          id: "about-manufacturer",
          question: "Is SAVEN a robot manufacturer?",
          answer: [
            "SAVEN is not limited to a single robot or hardware architecture. The program is focused on technologies that can potentially operate across compatible robotic systems, including humanoid, mobile, wearable, and specialized robotic platforms.",
          ],
          links: [{ label: "Partners", href: "/partners/" }],
        },
        {
          id: "about-own-robot",
          question: "Does SAVEN have its own robot?",
          answer: [
            "SAVEN’s development strategy may include prototypes and reference systems, but the broader technology direction is hardware-flexible and is not dependent on manufacturing every robotic platform internally.",
            "This website does not claim an existing commercial robot product.",
          ],
        },
        {
          id: "about-universal",
          question: "Why not build one universal robot?",
          answer: [
            "Different environments and tasks require different hardware. SAVEN is designed around the intelligence and human-assistance layer so that the technology can evolve alongside multiple robotic platforms.",
          ],
        },
      ],
    },
    {
      id: "technology",
      title: "Technology",
      intro: "Perception, assistance intelligence, personalization, and integration.",
      items: [
        {
          id: "tech-what",
          question: "What does SAVEN technology do?",
          answer: [
            "SAVEN is focused on technologies for perception, human movement understanding, assistance intelligence, personalization, interaction, safety, and robotics integration.",
          ],
          links: [{ label: "Technology", href: "/technology/" }],
        },
        {
          id: "tech-third-party",
          question: "Can SAVEN work with third-party robots?",
          answer: [
            "The architecture is being developed with compatibility and integration in mind. Actual integration depends on the hardware platform, interfaces, sensors, control systems, safety requirements, and commercial agreements.",
          ],
          links: [{ label: "Partners", href: "/partners/" }],
        },
        {
          id: "tech-autonomous",
          question: "Is SAVEN autonomous?",
          answer: [
            "Autonomy may vary by application and robotic platform. Human oversight, defined operational boundaries, and appropriate safety controls are important parts of the SAVEN development approach.",
          ],
          links: [{ label: "Safety", href: "/trust/safety/" }],
        },
        {
          id: "tech-ai",
          question: "Does SAVEN use AI?",
          answer: [
            "Yes. AI can support perception, interaction, personalization, language, movement understanding, and decision-support functions within defined robotic applications. AI is a tool for human assistance — not the purpose of the company.",
          ],
        },
      ],
    },
    {
      id: "health",
      title: "Rehabilitation & Health",
      intro: "Careful wording for clinical and rehabilitation-related questions.",
      items: [
        {
          id: "health-device",
          question: "Is SAVEN a medical device?",
          answer: [
            "SAVEN encompasses multiple potential applications. Some are non-medical, while certain future rehabilitation or clinical applications may fall under medical-device or healthcare regulations depending on their intended use, configuration, and jurisdiction.",
          ],
          links: [{ label: "Disclaimer", href: "/legal/disclaimer/" }],
        },
        {
          id: "health-treat",
          question: "Can SAVEN diagnose or treat medical conditions?",
          answer: [
            "SAVEN should not be represented as diagnosing, treating, curing, or preventing disease unless a specific future product has been developed, validated, and authorized for that intended medical use.",
          ],
          links: [{ label: "Medical Disclaimer", href: "/legal/medical-disclaimer/" }],
        },
        {
          id: "health-therapist",
          question: "Can SAVEN replace a physical therapist?",
          answer: [
            "No. SAVEN’s rehabilitation direction is intended to support professionals and users, not replace qualified clinical judgment.",
          ],
        },
        {
          id: "health-falls",
          question: "Can SAVEN guarantee safer walking or prevent falls?",
          answer: [
            "No technology can guarantee prevention of falls or injury. SAVEN is exploring technologies intended to support mobility and physical assistance with safety-oriented design and appropriate oversight.",
          ],
        },
      ],
    },
    {
      id: "daily",
      title: "Daily Life",
      intro: "Many potential applications are practical, not medical.",
      items: [
        {
          id: "daily-only-health",
          question: "Is SAVEN only for healthcare?",
          answer: [
            "No. Many potential SAVEN applications are non-medical, including everyday physical assistance, mobility support, household tasks, independent living, and interaction with connected environments.",
          ],
          links: [{ label: "Applications", href: "/applications/" }],
        },
        {
          id: "daily-only-age",
          question: "Is SAVEN only for older adults?",
          answer: [
            "No. The broader technology can potentially support different users and environments depending on the application and safety requirements.",
          ],
        },
        {
          id: "daily-children",
          question: "Does SAVEN watch or care for children?",
          answer: [
            "Family environments represent an important long-term area for human-centered robotics. Any applications involving children require age-appropriate design, responsible adult supervision, privacy safeguards, and enhanced safety controls.",
            "SAVEN is not a robotic babysitter and does not replace parental supervision.",
          ],
        },
      ],
    },
    {
      id: "privacy-data",
      title: "Privacy",
      intro: "Website practices today are separate from future product data practices.",
      items: [
        {
          id: "privacy-what",
          question: "What information could SAVEN use?",
          answer: [
            "Depending on the application, compatible systems may process sensor data, user instructions, environmental information, movement information, preferences, or other authorized data required to perform a task.",
            "The public website currently processes only website information such as contact-form submissions, technical logs, and local preferences — not BioMath, biometric, or robotics sensor data.",
          ],
          links: [{ label: "Privacy Policy", href: "/legal/privacy-policy/" }],
        },
        {
          id: "privacy-biomath",
          question: "Does SAVEN automatically access BioMath Core data?",
          answer: [
            "No. Any connection with personal information must follow applicable permissions, access controls, privacy requirements, and system configuration.",
          ],
          links: [{ label: "BioMath Core", href: "/foundation/biomath-core/" }],
        },
        {
          id: "privacy-record",
          question: "Does SAVEN record people continuously?",
          answer: [
            "Data collection and retention depend on the specific application, device configuration, user permissions, and operational requirements. SAVEN’s design direction emphasizes data minimization, transparency, user control, and appropriate security.",
          ],
        },
      ],
    },
    {
      id: "availability",
      title: "Availability",
      intro: "Development program — not a storefront.",
      items: [
        {
          id: "avail-buy",
          question: "Can I buy SAVEN today?",
          answer: [
            "SAVEN is currently being developed as a robotics technology and integration program. Commercial availability will depend on the specific application, hardware platform, validation requirements, and deployment model.",
          ],
        },
        {
          id: "avail-orgs",
          question: "Can organizations work with SAVEN now?",
          answer: [
            "SAVEN welcomes discussions with robotics companies, technology partners, research organizations, rehabilitation organizations, care providers, and other groups interested in development, integration, or pilot opportunities.",
          ],
          links: [{ label: "Discuss a Partnership", href: "/partners/" }],
        },
      ],
    },
    {
      id: "investors",
      title: "Investors",
      intro: "Investment posture without fabricated metrics.",
      items: [
        {
          id: "invest-why",
          question: "Why SAVEN?",
          answer: [
            "Robotics is moving closer to people. The challenge is no longer only making robots capable of movement — it is making physical assistance useful, adaptable, understandable, and appropriate for real human environments.",
            "SAVEN focuses on the human-assistance intelligence and integration layer that can potentially operate across compatible systems and application markets.",
          ],
          links: [{ label: "Investors", href: "/investors/" }],
        },
      ],
    },
  ],
};
