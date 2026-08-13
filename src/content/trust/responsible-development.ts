import type { HubPageContent } from "@/content/hub/types";

export const RESPONSIBLE_DEVELOPMENT_HREF =
  "/trust/responsible-development/" as const;

export const responsibleDevelopmentPageEn: HubPageContent = {
  label: "Trust",
  title: "Responsible Development",
  status: "Architecture",
  lede: "Robotic assistance should support human autonomy, dignity, and control. These principles guide how SAVEN approaches design, safety, privacy, and validation — without claiming completed certification.",
  visual: {
    theme: "trust",
    mastheadImage: "/domain/trust/ethics.webp",
    mastheadAlt: "Ethics and responsible use atmosphere",
  },
  highlights: [
    {
      id: "what",
      title: "Human-centered",
      text: "Assistance should extend human support — not remove the human relationship.",
    },
    {
      id: "why",
      title: "Layered safety",
      text: "Physical interaction requires safety across hardware, software, sensing, procedures, and oversight.",
    },
    {
      id: "next",
      title: "Continuous validation",
      text: "Capabilities should be evaluated against defined tasks and environments before broader deployment.",
    },
  ],
  sections: [
    {
      id: "human-centered",
      title: "Human-Centered Design",
      paragraphs: [
        "Robotic assistance should support human autonomy, dignity, and control. People must remain able to understand, interrupt, and direct assistance.",
      ],
    },
    {
      id: "safety",
      title: "Safety",
      paragraphs: [
        "Physical interaction requires layered safety across hardware, software, sensing, procedures, and human oversight. Safety is part of the architecture, not an afterthought.",
      ],
    },
    {
      id: "privacy",
      title: "Privacy",
      paragraphs: [
        "Personal information should be collected and processed only where appropriate and with suitable transparency and controls. Website data practices are separate from future product data practices.",
      ],
    },
    {
      id: "security",
      title: "Security",
      paragraphs: [
        "Connected robotic systems require appropriate technical and organizational safeguards. No system can claim zero risk.",
      ],
    },
    {
      id: "oversight",
      title: "Human Oversight",
      paragraphs: [
        "Higher-risk applications should maintain appropriate human involvement and intervention capability.",
      ],
    },
    {
      id: "accessibility",
      title: "Accessibility",
      paragraphs: [
        "Interfaces should be designed for the abilities and limitations of the intended users.",
      ],
    },
    {
      id: "validation",
      title: "Continuous Validation",
      paragraphs: [
        "Capabilities should be evaluated against defined tasks, environments, and operating conditions before broader deployment.",
      ],
    },
  ],
  note: "These are development principles. They are not a certification, legal opinion, or claim that every capability is already deployed.",
  related: [
    { label: "Safety", href: "/trust/safety/" },
    { label: "Ethics", href: "/trust/ethics-and-responsible-use/" },
    { label: "Disclaimer", href: "/legal/disclaimer/" },
    { label: "Privacy Policy", href: "/legal/privacy-policy/" },
  ],
};
