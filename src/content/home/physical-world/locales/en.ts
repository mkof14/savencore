import type { PhysicalWorldHomeContent } from "@/content/home/physical-world/types";

export const physicalWorldHomeEn: PhysicalWorldHomeContent = {
  brand: "SAVEN Core",
  heroLine: "Intelligence for the Physical World.",
  oneBreath:
    "We use and refine AI with robotics that work in the real world — so machines can sense, move, and assist under human control.",
  builds: ["Artificial intelligence", "Robotics", "Autonomous systems"],
  buildsLabel: "What we build",
  tagline: "Turning Intelligence Into Human Care",
  cue: "Explore Labs, Interface, Technology, and more in the footer.",
  living: {
    headline: "Care where life happens.",
    support:
      "A vision of intelligent systems assisting people — in hospitals, at home, and wherever care is needed — under human control.",
    scenes: [
      {
        id: "hospital-care",
        label: "Hospital care",
        line: "Clinicians, patients, and assistive systems in moments of care.",
      },
      {
        id: "home-care",
        label: "Home care",
        line: "Everyday support for elders where life happens.",
      },
      {
        id: "children-family",
        label: "Children & family",
        line: "Gentle help under the care of people who love them.",
      },
      {
        id: "emergency",
        label: "Emergency",
        line: "A vision of faster, clearer support when every minute matters.",
      },
      {
        id: "surgical",
        label: "Surgical support",
        line: "Assistance in the OR — tools beside skilled human hands.",
      },
      {
        id: "rural-remote",
        label: "Rural & remote",
        line: "Care that can reach people farther from the clinic.",
      },
      {
        id: "mental-health",
        label: "Mental health",
        line: "Quiet support that respects dignity and human guidance.",
      },
      {
        id: "disaster-relief",
        label: "Disaster relief",
        line: "Systems that can help people coordinate when the ground shifts.",
      },
    ],
    railLabel: "Care scenes",
    deepenLabel: "SAVEN Robotics Lab",
    deepenHref: "/labs/saven-robotics-lab/",
    whyLabel: "Why this is SAVEN",
    whyLine:
      "Systems built to assist people in real places — under human control, not as a replacement for care.",
  },
  clarity: {
    definition: {
      heading: "What is SAVEN",
      body: "SAVEN Core builds systems that link human understanding to robots and devices in the physical world — under human control. AI is a tool we use and advance for that purpose; creating AI is not the purpose.",
    },
    chain: {
      heading: "From understanding to assistance",
      ariaLabel: "Three steps from human understanding to physical assistance",
      steps: [
        {
          label: "Human understanding",
          href: "/purpose/",
          cta: "Purpose",
        },
        {
          label: "SAVEN",
          href: "/systems/saven-robotics-interface/",
          cta: "Robotics Interface",
        },
        {
          label: "Physical assistance",
          href: "/applications/",
          cta: "Applications",
        },
      ],
    },
    exploreStrip: {
      heading: "Explore SAVEN",
      support:
        "Five pillars of the architecture — the same map continues in the closing band below.",
    },
    audience: {
      heading: "Where do you want to begin?",
      support:
        "Three clear paths — care and purpose, technology and systems, or long-horizon investment posture.",
      paths: [
        {
          id: "care",
          label: "Care & purpose",
          description:
            "Understand why SAVEN exists and where assistance is meant to help people.",
          links: [
            { label: "Purpose", href: "/purpose/" },
            { label: "Applications", href: "/applications/" },
          ],
        },
        {
          id: "technology",
          label: "Technology & systems",
          description:
            "See the labs, interface, and architecture that link intelligence to physical action.",
          links: [
            { label: "Technology", href: "/technology/" },
            { label: "Labs", href: "/labs/" },
            {
              label: "Robotics Interface",
              href: "/systems/saven-robotics-interface/",
            },
            { label: "Systems", href: "/systems/" },
          ],
        },
        {
          id: "investors",
          label: "Investors",
          description:
            "Long-horizon, mission-aligned capital posture — honest status, no invented metrics.",
          links: [{ label: "Investors", href: "/investors/" }],
        },
      ],
    },
    not: {
      heading: "What we are not",
      points: [
        "We do not exist to create AI — AI is a tool we use and advance for human support.",
        "We do not diagnose medical conditions through this website.",
        "We do not prescribe or sell medicines.",
      ],
    },
  },
  flagships: {
    headline: "Where the direction is heading",
    support:
      "A short look at the flagship workstreams building toward that vision — each shown at its honest, current status.",
    columns: {
      workstream: "Workstream",
      status: "Status",
      note: "Focus",
    },
    items: [
      {
        label: "SAVEN Robotics Lab",
        href: "/labs/saven-robotics-lab/",
        status: "In Development",
        note: "Assistive robotic systems — mobility, manipulators, and perception.",
      },
      {
        label: "SAVEN Robotics Interface",
        href: "/systems/saven-robotics-interface/",
        status: "In Development",
        note: "Shared communication and control so people stay in command.",
      },
      {
        label: "Internal Future Lab",
        href: "/labs/internal-future-lab/",
        status: "Research",
        note: "Early exploration of concepts beyond current architecture.",
      },
      {
        label: "Investors",
        href: "/investors/",
        status: "Architecture",
        note: "Structural posture for long-horizon, mission-aligned capital.",
      },
    ],
  },
  closing: {
    heading: "SAVEN",
    pillars: "Support · Action · Verification · Environment · Network",
    tagline: "One Intelligence. Many Bodies. Real-World Action.",
    alt: "SAVEN logo and pillars: Support, Action, Verification, Environment, and Network. Tagline: One Intelligence. Many Bodies. Real-World Action.",
    exploreLabel: "Explore SAVEN",
    exploreHint:
      "Hover or focus a pillar to see what it means — then go deeper on the site.",
    goDeeper: "Go deeper",
    wordmarkLabel: "SAVEN",
    corners: {
      navLabel: "Closing destinations",
      left: [
        { label: "Purpose", href: "/purpose/" },
        { label: "Labs", href: "/labs/" },
        { label: "Human Data Model", href: "/technology/human-data-model/" },
        { label: "Robotics", href: "/technology/robotics/" },
        { label: "Automation", href: "/technology/automation/" },
        { label: "Interoperability", href: "/technology/interoperability/" },
      ],
      right: [
        { label: "Knowledge Engine", href: "/systems/knowledge-engine/" },
        { label: "Robotics Layer", href: "/systems/robotics-layer/" },
        { label: "Robotics Interface", href: "/systems/saven-robotics-interface/" },
        { label: "Internal Future Lab", href: "/labs/internal-future-lab/" },
        { label: "Trust", href: "/trust/" },
        { label: "Contact", href: "/contact/" },
        { label: "FAQ", href: "/faq/" },
      ],
    },
    map: [
      {
        id: "support",
        label: "Support",
        meaning:
          "Human care comes first — the purpose of helping people where life happens.",
        href: "/purpose/",
        cta: "Purpose",
      },
      {
        id: "action",
        label: "Action",
        meaning:
          "Command and control so machines can act in the physical world under people.",
        href: "/systems/saven-robotics-interface/",
        cta: "Robotics Interface",
      },
      {
        id: "verification",
        label: "Verification",
        meaning:
          "Safety, trust, and human oversight before any claim of autonomy.",
        href: "/trust/human-oversight/",
        cta: "Human Oversight",
      },
      {
        id: "environment",
        label: "Environment",
        meaning:
          "Application contexts in the physical world — hospitals, home, and beyond.",
        href: "/applications/",
        cta: "Applications",
      },
      {
        id: "network",
        label: "Network",
        meaning:
          "Connected systems architecture that links intelligence to many bodies.",
        href: "/systems/",
        cta: "Systems",
      },
    ],
  },
};
