import type { HubPageContent } from "@/content/hub/types";

export const PARTNERS_PAGE_HREF = "/partners/" as const;

export const partnersPageEn: HubPageContent = {
  label: "Partners",
  title: "Build With SAVEN",
  status: "Architecture",
  lede: "SAVEN is not limited to manufacturing a single robot. The model is a compatible robotics platform plus SAVEN human-assistance intelligence plus a defined application — an intended integrated solution under Architecture framing.",
  visual: {
    theme: "foundation",
    mastheadImage: "/domain/company/scene-platform-craft.webp",
    mastheadAlt: "Quiet platform craft atmosphere for partnership conversation with SAVEN",
  },
  highlights: [
    {
      id: "what",
      title: "What we offer",
      text: "Human-assistance intelligence, interaction, personalization, and integration for compatible robotic systems.",
      icon: "potential",
    },
    {
      id: "why",
      title: "Why it matters",
      text: "Hardware is advancing. Useful assistance still requires technology beyond mechanical movement.",
      icon: "care",
    },
    {
      id: "next",
      title: "How to begin",
      text: "Discuss a partnership or write to SAVEN at info@savencore.com.",
      icon: "horizon",
    },
  ],
  diagram: {
    kind: "partner-formula",
    labels: {
      heading: "The partnership model",
      parts: [
        {
          label: "Your robotics platform",
          note: "Compatible hardware you already build.",
        },
        {
          label: "SAVEN human-assistance intelligence",
          note: "Perception, interaction, personalization, and integration.",
        },
        {
          label: "A defined application",
          note: "Mobility, care, everyday assistance, or another agreed use.",
        },
      ],
      plus: "+",
      equals: "=",
      result: "A potential integrated solution",
    },
  },
  body: [
    "Robotics companies visiting SAVEN should understand the intent: SAVEN is not necessarily trying to replace a manufacturer or compete with every hardware company. Different environments and tasks require different robotic systems.",
    "SAVEN is being developed as a hardware-flexible intelligence and integration approach. Actual integration depends on the hardware platform, interfaces, sensors, control systems, safety requirements, and commercial agreements. This page does not name specific commercial robots or claim existing integrations.",
  ],
  sections: [
    {
      id: "audiences",
      title: "Who we work with",
      items: [
        "Robotics manufacturers — integrate human-assistance intelligence and application layers into compatible robotic platforms.",
        "Sensor and component companies — explore perception, movement, safety, and interaction technologies.",
        "AI and technology companies — develop intelligence, multimodal interaction, personalization, and robotics capabilities.",
        "Rehabilitation organizations — explore controlled pilots and professionally supervised applications.",
        "Senior living and care organizations — evaluate practical assistance scenarios and real-world requirements.",
        "Universities and research institutions — research human-robot interaction, mobility, safety, and assistive robotics.",
        "Healthcare organizations — explore appropriate clinical and nonclinical applications subject to applicable requirements.",
      ],
    },
    {
      id: "model",
      title: "How to read this",
      paragraphs: [
        "References to categories of third-party technologies or platforms do not imply endorsement, partnership, certification, compatibility, or a commercial relationship unless explicitly stated.",
      ],
    },
  ],
  paths: {
    heading: "Next step",
    links: [
      {
        label: "Discuss a Partnership",
        href: "/contact/",
        note: "Choose Robotics Partnership or Technology Partnership on the contact form.",
      },
      {
        label: "Contact SAVEN",
        href: "/contact/",
        note: "General conversation at info@savencore.com.",
      },
      {
        label: "Investor Inquiries",
        href: "/investors/contact/",
        note: "Structural posture for long-horizon capital.",
      },
    ],
  },
  note: "This page describes partnership opportunities. It does not list customers, pilots, or signed partners.",
  related: [
    { label: "Technology", href: "/technology/" },
    { label: "SAVEN Robotics Lab", href: "/labs/saven-robotics-lab/" },
    { label: "Investors", href: "/investors/" },
    { label: "Business", href: "/business/" },
    { label: "Responsible Development", href: "/trust/responsible-development/" },
  ],
};
