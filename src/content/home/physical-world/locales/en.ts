import type { PhysicalWorldHomeContent } from "@/content/home/physical-world/types";

export const physicalWorldHomeEn: PhysicalWorldHomeContent = {
  brand: "SAVEN Core",
  heroLine: "Intelligence for Robots That Help People",
  oneBreath:
    "SAVEN develops intelligent human-assistance technologies for robotics — connecting perception, movement, personalization, safety, and human interaction to help robotic systems support people in the physical world.",
  builds: ["Artificial intelligence", "Robotics", "Human assistance"],
  buildsLabel: "What we build",
  tagline: "Turning Intelligence Into Human Care",
  cue: "Technology & Research",
  heroCtas: {
    primary: { label: "Explore SAVEN", href: "/technology/" },
    secondary: { label: "Partner With Us", href: "/partners/" },
    tertiary: { label: "Technology & Research", href: "/labs/saven-robotics-lab/" },
  },
  conceptLabel: "Concept visualization",
  living: {
    headline: "Care where life happens.",
    support:
      "A vision of intelligent systems assisting people — in hospitals, at home, and wherever support is needed — under human control. Human Care here includes help, independence, and everyday assistance, not medical treatment alone.",
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
        line: "Family environments are a long-term area for human-centered robotics — with adult supervision and age-appropriate design.",
      },
      {
        id: "emergency",
        label: "Emergency",
        line: "A long-term concept vision of faster, clearer support when every minute matters.",
      },
      {
        id: "surgical",
        label: "Surgical support",
        line: "A concept of assistance in the OR — tools beside skilled human hands.",
      },
      {
        id: "rural-remote",
        label: "Rural & remote",
        line: "A concept of care that could reach people farther from the clinic.",
      },
      {
        id: "mental-health",
        label: "Mental health",
        line: "A concept of quiet support that respects dignity and human guidance.",
      },
      {
        id: "disaster-relief",
        label: "Disaster relief",
        line: "A concept of systems that could help people coordinate when the ground shifts.",
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
      body: "SAVEN develops intelligent technologies that help robotic systems assist people with mobility, physical tasks, rehabilitation support, and everyday activities. The work is broader than a single humanoid robot — it is a hardware-flexible intelligence and integration approach.",
    },
    purpose: {
      heading: "Technology Built Around People",
      body: "Robotics is moving from controlled industrial environments into places built for people — homes, rehabilitation environments, care settings, workplaces, and everyday life. SAVEN is focused on the intelligence and interaction technologies required for robots to understand human activity, adapt assistance, and support physical tasks in ways that are practical, intuitive, and increasingly personalized.",
      cards: [
        { title: "Mobility", href: "/applications/home/" },
        { title: "Physical Assistance", href: "/applications/home/" },
        { title: "Rehabilitation Support", href: "/applications/healthcare/" },
        { title: "Independent Living", href: "/applications/home/" },
        { title: "Everyday Tasks", href: "/applications/home/" },
        { title: "Human-Robot Interaction", href: "/labs/saven-robotics-lab/" },
      ],
    },
    layers: {
      heading: "The SAVEN Human Assistance Layer",
      intro:
        "SAVEN’s value is not limited to building mechanical robots. The architecture includes a human-assistance intelligence layer that can work across compatible robotic systems. This layer explains how SAVEN assists; it does not replace the Human Data Model.",
      items: [
        {
          title: "Perception",
          text: "Understanding people, movement, surroundings, objects, and context through compatible sensors and robotic systems.",
        },
        {
          title: "Human Movement Understanding",
          text: "Interpreting movement patterns and physical interaction to help determine when and how assistance may be appropriate.",
        },
        {
          title: "Assistance Intelligence",
          text: "Software and AI designed to coordinate robotic assistance according to the task, environment, system capabilities, and user context.",
        },
        {
          title: "Personalization",
          text: "Adapting interaction and assistance to individual preferences, routines, capabilities, and permitted data.",
        },
        {
          title: "Safety & Control",
          text: "Designing human oversight, operational limits, interruption mechanisms, system monitoring, and safe-state behaviors into human-robot interaction.",
        },
      ],
    },
    hardware: {
      heading: "Intelligence Beyond a Single Robot",
      body: "The future of assistive robotics will not be defined by one machine. Different environments and tasks require different robotic systems. SAVEN is being developed as a hardware-flexible intelligence and integration approach capable of working across compatible robotic platforms. One intelligence approach. Multiple robotic forms.",
      forms: [
        "Humanoid robots",
        "Mobile robots",
        "Robotic arms",
        "Wearable robotics",
        "Rehabilitation systems",
        "Future assistive devices",
      ],
      hub: "SAVEN Human Assistance Intelligence",
    },
    path: {
      heading: "From Research to Real-World Assistance",
      stages: [
        {
          n: "01",
          title: "Research",
          text: "Human needs, use cases, interaction models, and safety requirements.",
        },
        {
          n: "02",
          title: "Integration",
          text: "Sensors, AI, robotics platforms, and software.",
        },
        {
          n: "03",
          title: "Prototype",
          text: "Controlled interaction, movement, tasks, and user interfaces.",
        },
        {
          n: "04",
          title: "Validation",
          text: "Safety, usability, performance, and human feedback.",
        },
        {
          n: "05",
          title: "Pilot Programs",
          text: "Selected environments, partners, and professional oversight.",
        },
        {
          n: "06",
          title: "Deployment",
          text: "Defined applications, qualified platforms, and operational support.",
        },
      ],
    },
    biomathBridge: {
      eyebrow: "Who we are",
      title: "BioMath Core → SAVEN",
      body: "Robotic assistance becomes more useful when technology can understand the person — not only the task. The Human Data Model remains the broader structured representation of Human Data. BioMath Core may provide specialized analysis and reports that SAVEN can use for more personalized interaction — under permissions and privacy controls. BioMath Core does not replace the Human Data Model.",
      scopeLine: "Model coverage: 20 categories · 200+ services — not an Operational catalog.",
      href: "/foundation/biomath-core/",
      cta: "Explore BioMath Core",
      logoAlt: "BioMath Core",
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
      support: "Five architecture pillars — full map in the closing band.",
    },
    audience: {
      heading: "Where do you want to begin?",
      support: "Care & purpose · technology & systems · partners · investors.",
      paths: [
        {
          id: "care",
          label: "Care & purpose",
          description: "Why SAVEN exists and where assistance helps people.",
          links: [
            { label: "Purpose", href: "/purpose/" },
            { label: "Applications", href: "/applications/" },
            { label: "Safety", href: "/trust/safety/" },
          ],
        },
        {
          id: "technology",
          label: "Technology & systems",
          description: "Labs, interface, and architecture linking intelligence to action.",
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
          id: "partners",
          label: "Build with SAVEN",
          description: "Your robotics platform plus SAVEN human-assistance intelligence.",
          links: [{ label: "Partners", href: "/partners/" }],
        },
        {
          id: "investors",
          label: "Investors",
          description: "Long-horizon capital posture — honest Architecture status.",
          links: [{ label: "Investors", href: "/investors/" }],
        },
      ],
    },
    not: {
      heading: "What we are not",
      points: [
        "AI is a tool for human assistance — not the purpose of the company.",
        "This website does not diagnose medical conditions or provide medical advice.",
        "SAVEN does not prescribe or sell medicines.",
      ],
    },
  },
  flagships: {
    headline: "Where the direction is heading",
    support:
      "A short look at the flagship workstreams building toward that vision.",
    columns: {
      workstream: "Workstream",
      status: "Status",
      note: "Focus",
    },
    items: [
      {
        label: "SAVEN Robotics Lab",
        href: "/labs/saven-robotics-lab/",
        status: "Architecture",
        note: "Assistive robotic systems — mobility, manipulators, and perception.",
      },
      {
        label: "SAVEN Robotics Interface",
        href: "/systems/saven-robotics-interface/",
        status: "Architecture",
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
        note: "Structural posture for long-horizon capital.",
      },
    ],
  },
  closing: {
    heading: "SAVEN",
    pillars: "Support · Action · Verification · Environment · Network",
    tagline: "One Intelligence. Many Bodies. Real-World Action.",
    alt: "SAVEN logo and pillars: Support, Action, Verification, Environment, and Network. Tagline: One Intelligence. Many Bodies. Real-World Action. Bodies means robotic and physical embodiments.",
    exploreLabel: "Explore SAVEN",
    exploreHint:
      "Hover or focus a pillar to see what it means — then go deeper on the site.",
    goDeeper: "Go deeper",
    wordmarkLabel: "SAVEN",
    corners: {
      navLabel: "Closing destinations",
      moreLabel: 'More links',
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
        { label: "Partners", href: "/partners/" },
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
          "Safety, trust, and human oversight are part of the architecture — not an afterthought.",
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
