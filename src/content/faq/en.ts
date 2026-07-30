/**
 * FAQ page — governance-safe public Q&A (D-0202).
 * English is canonical. Answers ground Master Spec + published page language only.
 * Do not invent customers, partners, metrics, Operational products, patents, or final legal claims.
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
  | "not-claiming";

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
  title: "Questions about SAVEN Core",
  lede: "Clear answers about purpose, foundation, technology, systems, labs, trust, and how to read this site — without inventing products, customers, or guarantees.",
  note: "Principal systems are in development. Status language and published pages remain the source of truth. Legal pages describe site information practices and terms of use; counsel review remains recommended for regulated jurisdictions.",
  expandAll: "Expand all",
  collapseAll: "Collapse all",
  tocLabel: "Topics",
  relatedLabel: "Related",
  sections: [
    {
      id: "about",
      title: "About SAVEN Core",
      intro:
        "Purpose and positioning: intelligent systems built to support human life.",
      items: [
        {
          id: "about-what",
          question: "What is SAVEN Core?",
          answer: [
            "SAVEN Core develops intelligent systems designed to support people in hospitals, at home, outdoors, and in everyday environments — across every age and stage of life.",
            "The company combines human-centered intelligence, BioMath Core, artificial intelligence, robotics, autonomous systems, human-machine interaction, physical assistance technologies, and privacy and safety architecture.",
          ],
          links: [
            { label: "Mission", href: "/purpose/" },
            { label: "Foundation", href: "/foundation/" },
          ],
        },
        {
          id: "about-purpose",
          question: "What is the primary purpose?",
          answer: [
            "Helping people. Robotics, drones, industrial systems, infrastructure, agriculture, security, and other applications are extensions of the underlying technology foundation. They must not replace or obscure the primary human purpose.",
          ],
          links: [{ label: "Purpose", href: "/purpose/" }],
        },
        {
          id: "about-primary-statement",
          question: "What is the primary public statement?",
          answer: [
            "Intelligent systems built to support human life.",
          ],
        },
        {
          id: "about-supporting",
          question: "What is the supporting statement?",
          answer: [
            "SAVEN Core develops intelligent systems that help people in hospitals, at home and wherever life happens — across every age and stage of life.",
          ],
        },
        {
          id: "about-positioning",
          question: "What is the core positioning?",
          answer: [
            "From human understanding to physical assistance.",
            "The public hero line is Intelligence for the Physical World. The brand tagline is Turning Intelligence Into Human Care.",
          ],
        },
        {
          id: "about-ai-robotics-role",
          question: "Are AI and robotics the purpose of the company?",
          answer: [
            "No. AI and robotics are tools, not the purpose. Human support is primary.",
            "SAVEN Core uses and advances AI alongside robotics, autonomous systems, and engineering technologies. It does not claim to create AI.",
          ],
          links: [
            { label: "Artificial Intelligence", href: "/technology/artificial-intelligence/" },
            { label: "Robotics", href: "/technology/robotics/" },
          ],
        },
        {
          id: "about-audiences",
          question: "Who is the website for?",
          answer: [
            "The site should be understandable to the general public, families, healthcare professionals, engineers, researchers, potential employees, partners, investors, and government or institutional visitors.",
            "A visitor should understand within about twenty seconds that SAVEN Core exists to help people, that BioMath Core is the human intelligence foundation, that SAVEN connects intelligence with physical assistance, that AI and robotics are tools, that systems are in development, and that safety, privacy, and human control are foundational.",
          ],
        },
        {
          id: "about-not-look-like",
          question: "What should the website not look like?",
          answer: [
            "It must not look like a generic AI startup, a SaaS landing page, a robotics product catalog, a medical claims website, a science-fiction entertainment site, a collection of unrelated future concepts, or a standard corporate template.",
          ],
        },
      ],
    },
    {
      id: "foundation",
      title: "Foundation sequence",
      intro:
        "BioMath Life → BioMath Core → SAVEN → SAVEN Core — a continuous path, not unrelated projects.",
      items: [
        {
          id: "foundation-sequence",
          question: "What is the foundation sequence?",
          answer: [
            "BioMath Life → BioMath Core → SAVEN → SAVEN Core.",
            "These must appear as a continuous development path, not as unrelated brands or side projects.",
          ],
          links: [{ label: "Foundation", href: "/foundation/" }],
        },
        {
          id: "foundation-biomath-life",
          question: "What is BioMath Life?",
          answer: [
            "The original human-centered vision focused on understanding the individual through biological, medical, behavioral, environmental, and life data.",
          ],
        },
        {
          id: "foundation-biomath-core",
          question: "What is BioMath Core?",
          answer: [
            "The human data and intelligence foundation. It organizes personal context, longitudinal information, signals, patterns, permissions, privacy, and safe personalization.",
            "Owner-authorized model coverage spans 20 categories and 200+ services. That figure describes Architecture / In Development model scope — not an Operational commercial catalog.",
          ],
          links: [
            { label: "BioMath Core", href: "/foundation/biomath-core/" },
            { label: "Foundation", href: "/foundation/" },
            { label: "Human Data", href: "/technology/human-data/" },
            { label: "Human Data Model", href: "/technology/human-data-model/" },
          ],
        },
        {
          id: "foundation-biomath-categories",
          question: "Which categories does BioMath Core cover?",
          answer: [
            "The published model scope lists 20 categories: Critical Health; Everyday Wellness; Longevity & Anti-Aging; Mental Wellness; Fitness & Performance; Women's Health; Men's Health; Beauty & Skincare; Nutrition & Diet; Sleep & Recovery; Environmental Health; Family Health; Preventive Medicine & Longevity; Biohacking & Performance; Senior Care; Eye-Health Suite; Digital Therapeutics Store; General Sexual Longevity; Men's Sexual Health; Women's Sexual Health.",
            "Across those categories, BioMath Core describes 200+ services as model coverage. Status remains Architecture / In Development — not a claim of Operational commercial availability.",
          ],
          links: [
            { label: "BioMath Core", href: "/foundation/biomath-core/" },
            { label: "Foundation", href: "/foundation/" },
          ],
        },
        {
          id: "foundation-biomath-reports-actions",
          question:
            "How do BioMath Core reports relate to SAVEN actions and commands?",
          answer: [
            "Information for SAVEN’s next-level actions and commands is formed from BioMath Core reports and conclusions.",
            "People remain in control. AI is a tool in that path, not the purpose. Reports inform assistance and command architecture — they do not diagnose medical conditions, prescribe, or sell medicines.",
          ],
          links: [
            { label: "BioMath Core", href: "/foundation/biomath-core/" },
            { label: "Foundation", href: "/foundation/" },
            { label: "Purpose", href: "/purpose/" },
            { label: "Human Oversight", href: "/trust/human-oversight/" },
          ],
        },
        {
          id: "foundation-saven",
          question: "What is SAVEN in the sequence?",
          answer: [
            "SAVEN is the physical extension of the intelligence foundation. It connects human understanding and AI with robotics, autonomous systems, interfaces, sensors, and physical assistance.",
          ],
        },
        {
          id: "foundation-saven-core",
          question: "What is SAVEN Core in the sequence?",
          answer: [
            "SAVEN Core is the integrated company and technology structure combining the human intelligence foundation with physical systems.",
          ],
        },
        {
          id: "foundation-continuity",
          question: "Why does continuity matter?",
          answer: [
            "The foundation sequence explains origin and direction. Understanding people comes before physical assistance. Technology depth should always reconnect to human support.",
          ],
          links: [{ label: "Purpose", href: "/purpose/" }],
        },
      ],
    },
    {
      id: "technology",
      title: "Technology disciplines",
      intro:
        "Published technology areas that support human understanding and careful physical systems.",
      items: [
        {
          id: "tech-areas",
          question: "Which technology areas are published?",
          answer: [
            "Published technology destinations include Human Data, Human Data Model, Data Infrastructure, Interoperability, Privacy, Security, Artificial Intelligence, Automation, and Robotics.",
            "Master Spec technology themes also include autonomous systems, machine perception, human-machine interaction, simulation, safety architecture, and privacy architecture — presented carefully and without product claims.",
          ],
          links: [{ label: "Technology", href: "/technology/" }],
        },
        {
          id: "tech-human-data",
          question: "What is Human Data?",
          answer: [
            "Human Data concerns careful collection and use of information about people and life context — biological, medical, behavioral, environmental, and related signals — under privacy, permissions, and minimization principles.",
          ],
          links: [{ label: "Human Data", href: "/technology/human-data/" }],
        },
        {
          id: "tech-hdm",
          question: "What is the Human Data Model?",
          answer: [
            "A controlled interface between human context and systems that may use authorized information. It is a structured representation with permissions, minimization, and accountable use — not a claim of a finished commercial product.",
          ],
          links: [
            { label: "Human Data Model", href: "/technology/human-data-model/" },
          ],
        },
        {
          id: "tech-privacy-security",
          question: "How do Privacy and Security fit?",
          answer: [
            "Privacy and Security are first-class technology and trust topics. They describe architecture and responsibilities for protecting information and systems — not operational security disclosures or guarantees of perfection.",
          ],
          links: [
            { label: "Technology Privacy", href: "/technology/privacy/" },
            { label: "Technology Security", href: "/technology/security/" },
            { label: "Trust Privacy", href: "/trust/privacy/" },
            { label: "Trust Security", href: "/trust/security/" },
          ],
        },
        {
          id: "tech-ai",
          question: "How does SAVEN Core talk about Artificial Intelligence?",
          answer: [
            "Artificial Intelligence is a published technology discipline. Public copy says SAVEN Core uses, refines, advances, and applies AI — it does not claim to create AI.",
            "AI Decision Support assists interpretation and option evaluation without claiming autonomous decision authority. Human oversight remains foundational.",
          ],
          links: [
            {
              label: "Artificial Intelligence",
              href: "/technology/artificial-intelligence/",
            },
            {
              label: "AI Decision Support",
              href: "/systems/ai-decision-support/",
            },
          ],
        },
        {
          id: "tech-automation-robotics",
          question: "What about Automation and Robotics?",
          answer: [
            "Automation and Robotics describe controlled motion and physical assistance concepts under human purpose, safety limits, and development status — not a product catalog or deployment claims.",
          ],
          links: [
            { label: "Automation", href: "/technology/automation/" },
            { label: "Robotics", href: "/technology/robotics/" },
          ],
        },
        {
          id: "tech-interop",
          question: "What is Interoperability here?",
          answer: [
            "Interoperability describes controlled exchange between systems under defined permissions and boundaries — engineering architecture language, not a claim of universal compatibility today.",
          ],
          links: [
            { label: "Interoperability", href: "/technology/interoperability/" },
          ],
        },
      ],
    },
    {
      id: "systems",
      title: "Systems and Architecture",
      intro:
        "Systems pages document architecture. The footer Architecture column maps the published Systems depth.",
      items: [
        {
          id: "systems-what",
          question: "What are SAVEN Systems?",
          answer: [
            "Systems describe how technology areas connect into architecture — including Knowledge Engine, AI Decision Support, Safety Layer, Communication Layer, Clinical Interfaces, Robotics Layer, Drone Systems, and SAVEN Robotics Interface.",
            "Public content primarily uses Research, Architecture, and In Development status language.",
          ],
          links: [{ label: "Systems", href: "/systems/" }],
        },
        {
          id: "systems-architecture-footer",
          question: "Why does the footer say Architecture?",
          answer: [
            "Architecture is the footer column that lists published Systems destinations. Domain routes remain under /systems/. Page bodies and primary naming stay Systems; the column helps visitors discover architecture depth.",
          ],
        },
        {
          id: "systems-knowledge-engine",
          question: "What is the Knowledge Engine?",
          answer: [
            "The Knowledge Engine organizes engineering knowledge, models, and governed references used across systems. It connects research, technology, and system definitions without inventing publications or results.",
          ],
          links: [
            { label: "Knowledge Engine", href: "/systems/knowledge-engine/" },
          ],
        },
        {
          id: "systems-safety",
          question: "What is the Safety Layer?",
          answer: [
            "The Safety Layer describes limits, careful oversight, and safety architecture concepts for systems that may act in the physical world. It is not a claim of certified operational safety for a shipped product.",
          ],
          links: [{ label: "Safety Layer", href: "/systems/safety-layer/" }],
        },
        {
          id: "systems-communication",
          question: "What is the Communication Layer?",
          answer: [
            "The Communication Layer covers governed exchange of signals and messages between systems and interfaces under controlled conditions — architecture language, not a live network product claim.",
          ],
          links: [
            {
              label: "Communication Layer",
              href: "/systems/communication-layer/",
            },
          ],
        },
        {
          id: "systems-clinical",
          question: "What are Clinical Interfaces?",
          answer: [
            "Clinical Interfaces describe careful interaction surfaces for clinical and care contexts. They do not claim medical device clearance, clinical outcomes, or operational hospital deployment.",
          ],
          links: [
            {
              label: "Clinical Interfaces",
              href: "/systems/clinical-interfaces/",
            },
          ],
        },
        {
          id: "systems-robotics-drone",
          question: "What are Robotics Layer and Drone Systems?",
          answer: [
            "Robotics Layer and Drone Systems describe physical-system architecture directions under development. They are not presented as commercially available fleets or Operational products.",
          ],
          links: [
            { label: "Robotics Layer", href: "/systems/robotics-layer/" },
            { label: "Drone Systems", href: "/systems/drone-systems/" },
          ],
        },
      ],
    },
    {
      id: "interface",
      title: "SAVEN Robotics Interface",
      intro:
        "Communication between devices and shared tasks — with people remaining in command.",
      items: [
        {
          id: "interface-what",
          question: "What is the SAVEN Robotics Interface?",
          answer: [
            "SAVEN Robotics Interface is a flagship systems destination describing how devices communicate, coordinate shared tasks, and keep people in command as capability grows.",
            "It is distinct from the Robotics Layer page. Status remains development-oriented — not an Operational product claim.",
          ],
          links: [
            {
              label: "SAVEN Robotics Interface",
              href: "/systems/saven-robotics-interface/",
            },
            { label: "Robotics Lab", href: "/labs/saven-robotics-lab/" },
          ],
        },
        {
          id: "interface-devices",
          question: "What kinds of devices does it relate to?",
          answer: [
            "Published narrative connects human context from the Human Data Model into SAVEN roles, events, and actions for executive devices — such as robots, manipulators, and sensors — then collects what happens and processes it again. When needed, understanding rises to BioMath Core.",
            "This describes architecture and direction, not a shipped multi-device product suite.",
          ],
        },
        {
          id: "interface-human-command",
          question: "Do people stay in control?",
          answer: [
            "Yes. Public Interface language emphasizes that people remain in command as capability grows. Human oversight is a trust foundation across the site.",
          ],
          links: [
            { label: "Human Oversight", href: "/trust/human-oversight/" },
          ],
        },
        {
          id: "interface-shared-tasks",
          question: "What does “shared tasks” mean here?",
          answer: [
            "Shared tasks means coordinated work between devices and systems under defined roles and communication — not unsupervised autonomy or a claim of finished multi-robot operations.",
          ],
        },
      ],
    },
    {
      id: "labs",
      title: "Labs",
      intro: "SAVEN Robotics Lab and Internal Future Lab — research and development spaces.",
      items: [
        {
          id: "labs-what",
          question: "What labs are published?",
          answer: [
            "SAVEN Robotics Lab and Internal Future Lab. Both are public destinations under Labs and use honest development status language.",
          ],
          links: [
            { label: "Labs", href: "/labs/" },
            { label: "SAVEN Robotics Lab", href: "/labs/saven-robotics-lab/" },
            {
              label: "Internal Future Lab",
              href: "/labs/internal-future-lab/",
            },
          ],
        },
        {
          id: "labs-robotics",
          question: "What is SAVEN Robotics Lab?",
          answer: [
            "A lab focused on robotics and physical assistance engineering under human purpose and safety discipline. It is not a showroom of completed consumer products.",
          ],
          links: [
            { label: "SAVEN Robotics Lab", href: "/labs/saven-robotics-lab/" },
          ],
        },
        {
          id: "labs-future",
          question: "What is Internal Future Lab?",
          answer: [
            "Internal Future Lab is SAVEN Core’s research environment — and a deliberate new name that replaces an outdated understanding of classic R&D.",
            "SAVEN believes traditional research-and-development framing is not enough for continuous, embodied inquiry into how intelligence might carefully support people in the physical world.",
            "It explores longer-horizon directions in advanced robotics, embodied AI, sensing, and related architecture. Content remains directional and descriptive — Research status, not a guarantee of future products or dates.",
          ],
          links: [
            {
              label: "Internal Future Lab",
              href: "/labs/internal-future-lab/",
            },
          ],
        },
        {
          id: "labs-vs-rd",
          question: "Why Future Lab instead of R&D?",
          answer: [
            "Classic R&D often implies siloed projects and product-shaped pipelines. Future Lab names a broader continuous inquiry — exploration and architecture upstream of near-term engineering — while human care remains the purpose.",
            "It is not an Operational product claim and does not invent timelines, customers, or validated devices.",
          ],
          links: [
            {
              label: "Internal Future Lab",
              href: "/labs/internal-future-lab/",
            },
          ],
        },
        {
          id: "labs-vs-systems",
          question: "How do Labs relate to Systems?",
          answer: [
            "Labs are places of research and engineering work. Systems describe architecture. Flagship destinations such as SAVEN Robotics Interface connect both without inventing deployment claims.",
          ],
        },
      ],
    },
    {
      id: "applications",
      title: "Applications and care domains",
      intro:
        "Human-first application areas are in development. Extensions must not obscure the primary purpose.",
      items: [
        {
          id: "apps-primary",
          question: "Which application areas come first?",
          answer: [
            "Primary human applications must appear before future commercial and industrial extensions. These include hospitals, home, independent living, rehabilitation, everyday environments, outdoor assistance, emergency and remote assistance, and support across all ages.",
          ],
          links: [{ label: "Applications", href: "/applications/" }],
        },
        {
          id: "apps-published",
          question: "Which application pages are published?",
          answer: [
            "Published application destinations include Healthcare, Home, Hospitals, Emergency, Industrial, Government, Agriculture, and Research Applications — presented with honest In Development / Architecture framing where claims appear.",
          ],
        },
        {
          id: "apps-extensions",
          question: "What about industrial or agriculture pages?",
          answer: [
            "Future extensions may include medical technologies, industry, infrastructure, agriculture, security, defense, drone operations, and other physical environments. They remain extensions of the human-support foundation and must not replace it.",
          ],
        },
        {
          id: "apps-medical-claims",
          question: "Does the site claim medical outcomes?",
          answer: [
            "No. Application pages must not invent medical outcomes, approvals, or commercial availability. The Medical Disclaimer and related Legal pages explain limits — including that SAVEN Core does not diagnose, prescribe, or sell medicines through this website.",
          ],
          links: [
            {
              label: "Medical Disclaimer",
              href: "/legal/medical-disclaimer/",
            },
            { label: "Limitations", href: "/trust/limitations/" },
          ],
        },
        {
          id: "apps-in-development",
          question: "Are applications ready to buy or deploy?",
          answer: [
            "No. Principal systems and application concepts are in development. The site must never present development-stage concepts as completed or commercially available products.",
          ],
        },
      ],
    },
    {
      id: "trust",
      title: "Trust, safety, and Responsible AI",
      intro:
        "Safety, privacy, human oversight, transparency, ethics, and honest limits.",
      items: [
        {
          id: "trust-what",
          question: "What does Trust cover?",
          answer: [
            "Trust includes Privacy, Security, Safety, Human Oversight, Transparency, Ethics and Responsible Use, and Limitations — plus related Legal pages.",
          ],
          links: [{ label: "Trust", href: "/trust/" }],
        },
        {
          id: "trust-oversight",
          question: "What is Human Oversight?",
          answer: [
            "Human Oversight means people remain responsible for meaningful control and review. Assistance systems should not claim autonomous decision authority where human judgment is required.",
          ],
          links: [
            { label: "Human Oversight", href: "/trust/human-oversight/" },
          ],
        },
        {
          id: "trust-responsible-ai",
          question: "What is Responsible AI here?",
          answer: [
            "Responsible AI and Ethics pages describe careful use, limits, and governance commitments. SAVEN Core uses and advances AI; it does not claim to create AI.",
          ],
          links: [
            {
              label: "Ethics and Responsible Use",
              href: "/trust/ethics-and-responsible-use/",
            },
            { label: "Responsible AI", href: "/legal/responsible-ai/" },
          ],
        },
        {
          id: "trust-transparency",
          question: "What does Transparency mean?",
          answer: [
            "Transparency is a governance commitment to understandable, bounded public explanation. It does not mean publishing restricted detail. Status and scope must remain visible.",
          ],
          links: [{ label: "Transparency", href: "/trust/transparency/" }],
        },
        {
          id: "trust-limitations",
          question: "Why is Limitations a Trust page?",
          answer: [
            "Honest limits support trust. The site should state what is intended, what is current, and what is not claimed — including medical, legal, and product boundaries.",
          ],
          links: [{ label: "Limitations", href: "/trust/limitations/" }],
        },
        {
          id: "trust-security-issue",
          question: "How do I report a security issue?",
          answer: [
            "Use the Report a Security Issue resource. The public contact pattern uses info@savencore.com. Do not send urgent medical or emergency information through general website channels.",
          ],
          links: [
            {
              label: "Report a Security Issue",
              href: "/resources/report-a-security-issue/",
            },
          ],
        },
        {
          id: "trust-medical-diagnosis",
          question: "Does SAVEN Core diagnose or treat medical conditions?",
          answer: [
            "No. SAVEN Core does not diagnose, treat, or manage medical conditions through this website. Nothing on this website is medical advice.",
            "If you are experiencing a medical emergency, contact local emergency services. Always seek the advice of a qualified health professional for personal medical questions.",
          ],
          links: [
            {
              label: "Medical Disclaimer",
              href: "/legal/medical-disclaimer/",
            },
          ],
        },
        {
          id: "trust-medicines",
          question: "Does SAVEN Core prescribe or sell medicines?",
          answer: [
            "No. SAVEN Core does not prescribe medicines and does not sell medicines through this website.",
          ],
          links: [
            {
              label: "Medical Disclaimer",
              href: "/legal/medical-disclaimer/",
            },
          ],
        },
        {
          id: "trust-care-support",
          question: "Who is SAVEN Core trying to support in care contexts?",
          answer: [
            "SAVEN Core develops intelligent systems intended to support doctors, medical workers, and people in hospitals, at home, and in everyday environments.",
            "Support means assistance architecture under human oversight. Website content remains informational and architectural — not clinical documentation, medical advice, or emergency care.",
          ],
          links: [
            {
              label: "Medical Disclaimer",
              href: "/legal/medical-disclaimer/",
            },
            { label: "Limitations", href: "/trust/limitations/" },
          ],
        },
      ],
    },
    {
      id: "research",
      title: "Research and Roadmap",
      intro: "Direction and orientation — not guarantees, dates as promises, or invented results.",
      items: [
        {
          id: "research-what",
          question: "Where can I learn about research-oriented work?",
          answer: [
            "Research Applications describes careful study contexts. Direction lives on the Roadmap page. The Research Disclaimer Legal page explains that research materials are preliminary. There is no separate Research hub on this site.",
          ],
          links: [
            {
              label: "Research Applications",
              href: "/applications/research-applications/",
            },
            { label: "Roadmap", href: "/roadmap/" },
            {
              label: "Research Disclaimer",
              href: "/legal/research-disclaimer/",
            },
          ],
        },
        {
          id: "research-roadmap",
          question: "What is the Roadmap page?",
          answer: [
            "Roadmap presents Direction — a careful horizon for research and architecture. It is not a guarantee of delivery dates, funding outcomes, or commercial launch.",
          ],
          links: [{ label: "Roadmap", href: "/roadmap/" }],
        },
        {
          id: "research-no-fake",
          question: "Why are there no papers or metrics listed?",
          answer: [
            "Because inventing publications, performance results, customers, or traction is prohibited. Only approved, real materials may appear when supplied.",
          ],
        },
        {
          id: "research-disclaimer",
          question: "Is there a research disclaimer?",
          answer: [
            "Yes. A Research Disclaimer Legal page explains that research materials are preliminary and do not guarantee outcomes, dates, or regulatory approval.",
          ],
          links: [
            {
              label: "Research Disclaimer",
              href: "/legal/research-disclaimer/",
            },
          ],
        },
      ],
    },
    {
      id: "investors",
      title: "Investors",
      intro: "Brochure-level conversation path — no fake traction.",
      items: [
        {
          id: "investors-what",
          question: "What do Investors pages cover?",
          answer: [
            "Investors pages describe company direction and a careful contact path for long-horizon dialogue. They must not invent revenue, investment rounds, customers, partners, patents, or market traction.",
          ],
          links: [
            { label: "Investors", href: "/investors/" },
            { label: "Investor Contact", href: "/investors/contact/" },
          ],
        },
        {
          id: "investors-ai-line",
          question: "How is AI described for investors?",
          answer: [
            "SAVEN Core uses and advances AI alongside robotics, autonomous systems, and engineering technologies meant to operate in real environments.",
          ],
        },
        {
          id: "investors-portal",
          question: "Is there an investor portal?",
          answer: [
            "Sign In / Sign Up with email/password and Google is authorized as an account surface. It is not a full investor portal and must not be presented as one.",
          ],
          links: [{ label: "Sign In / Sign Up", href: "/auth/sign-in/" }],
        },
        {
          id: "investors-contact",
          question: "How can investors make contact?",
          answer: [
            "Use Investor Contact or the general Contact channel at info@savencore.com. Responses are careful and not a promise of deal process timelines.",
          ],
          links: [
            { label: "Investor Contact", href: "/investors/contact/" },
            { label: "Contact", href: "/contact/" },
          ],
        },
      ],
    },
    {
      id: "media-contact",
      title: "Media, Contact, and socials",
      intro: "Public channels that are actually authorized.",
      items: [
        {
          id: "contact-email",
          question: "What is the public contact email?",
          answer: [
            "info@savencore.com. The Contact page form sends via SMTP when configured, otherwise prepares a mailto message to the same address.",
          ],
          links: [{ label: "Contact", href: "/contact/" }],
        },
        {
          id: "contact-not-for",
          question: "What should I not send through Contact?",
          answer: [
            "Do not send urgent medical, emergency, or personal health information through this channel.",
          ],
        },
        {
          id: "media-page",
          question: "What is the Media page?",
          answer: [
            "Media provides brand and media materials that have been published for download or viewing. It is not a press-claim surface inventing coverage metrics.",
          ],
          links: [{ label: "Media", href: "/media/" }],
        },
        {
          id: "socials",
          question: "Which social networks are live?",
          answer: [
            "Owner-approved defaults currently include YouTube, X, Instagram, and Facebook in the footer when configured. LinkedIn remains hidden until an official URL is supplied. Unset networks stay hidden.",
          ],
        },
        {
          id: "copyright",
          question: "What copyright line does the site use?",
          answer: [
            "© 2026 SAVEN Core. All rights reserved. “Inc.” is not added unless the legal company name is confirmed.",
          ],
        },
      ],
    },
    {
      id: "languages",
      title: "Languages and locales",
      intro: "Ten locales, English canonical, RTL prepared from the start.",
      items: [
        {
          id: "lang-list",
          question: "Which languages are supported?",
          answer: [
            "English (canonical), Spanish, German, French, Japanese, Chinese (Simplified), Arabic, Hebrew, Ukrainian, and Russian.",
          ],
        },
        {
          id: "lang-canonical",
          question: "Which language is the source of truth?",
          answer: [
            "English (United States) is the canonical source language. Localized variants reference the English source.",
          ],
        },
        {
          id: "lang-rtl",
          question: "Is right-to-left supported?",
          answer: [
            "Yes. Arabic and Hebrew are RTL locales. Architecture prepares for ten languages and RTL from the beginning.",
          ],
        },
        {
          id: "lang-paths",
          question: "How do locale URLs work?",
          answer: [
            "Routes are locale-prefixed, for example /en/faq/. The root / redirects to /en/. Localized path slugs for page names remain an open owner decision; English path segments are used today.",
          ],
        },
      ],
    },
    {
      id: "terminology",
      title: "Terminology",
      intro:
        "Glossary-style answers for terms used on the published site and content model.",
      items: [
        {
          id: "term-knowledge-object",
          question: "What is a Knowledge Object?",
          answer: [
            "A Knowledge Object is a structured engineering object associated with a published knowledge destination. It carries classified fields such as type, maturity, and relationships — and must not fabricate owners, version history, Validated maturity, or evidence upgrades without authorization.",
          ],
        },
        {
          id: "term-hdm",
          question: "What does Human Data Model mean in short?",
          answer: [
            "Structured human context with permissions, minimization, and accountable use — the controlled interface between people-related information and systems.",
          ],
          links: [
            { label: "Human Data Model", href: "/technology/human-data-model/" },
          ],
        },
        {
          id: "term-knowledge-engine",
          question: "Knowledge Engine vs Knowledge Object?",
          answer: [
            "Knowledge Engine is a Systems destination for organizing governed engineering knowledge across systems. A Knowledge Object is the structured record pattern used for published knowledge pages.",
          ],
          links: [
            { label: "Knowledge Engine", href: "/systems/knowledge-engine/" },
          ],
        },
        {
          id: "term-layer",
          question: "What does “Layer” mean in Systems names?",
          answer: [
            "Layer names such as Safety Layer, Communication Layer, and Robotics Layer describe architectural planes of responsibility — not product SKUs or Operational modules for sale.",
          ],
        },
        {
          id: "term-interface-vs-layer",
          question: "Interface vs Robotics Layer?",
          answer: [
            "SAVEN Robotics Interface focuses on device communication, shared tasks, and human command. Robotics Layer describes broader robotics architecture. Both are published Systems destinations and remain in development framing.",
          ],
        },
        {
          id: "term-visibility",
          question: "What do public and restricted mean?",
          answer: [
            "Public content may appear on the website. Restricted fields are structurally separate and must never serialize into public page payloads.",
          ],
        },
        {
          id: "term-entity-registry",
          question: "What is the Entity Registry?",
          answer: [
            "An internal structured registry of knowledge entities used to keep relationships and navigation honest. Agents must not invent entities unless explicitly authorized.",
          ],
        },
        {
          id: "term-flagship",
          question: "What are flagship destinations?",
          answer: [
            "Major public destinations highlighted for orientation — including Labs, SAVEN Robotics Interface, Internal Future Lab, and Investors — without turning Home into a sitemap.",
          ],
        },
      ],
    },
    {
      id: "status",
      title: "Status language",
      intro: "How to read Research, Architecture, In Development, and related labels.",
      items: [
        {
          id: "status-system",
          question: "What status values are approved?",
          answer: [
            "Research, Architecture, In Development, Prototype, Validation, Pilot, and Operational.",
          ],
        },
        {
          id: "status-meanings",
          question: "What do the main statuses mean?",
          answer: [
            "Research — exploratory or foundational investigation. Architecture — system design and structural definition. In Development — active engineering and implementation work. Prototype — early demonstration under controlled conditions. Validation — structured evaluation against defined criteria. Pilot — limited real-world trial under controlled scope. Operational — approved for defined operational use (not claimed unless true).",
          ],
        },
        {
          id: "status-current",
          question: "Which statuses appear most often today?",
          answer: [
            "Current public content primarily uses Research, Architecture, and In Development. Operational must not be claimed unless true.",
          ],
        },
        {
          id: "status-fields",
          question: "What status fields should relevant items support?",
          answer: [
            "Current status, last updated date, short status explanation, and public or restricted classification.",
          ],
        },
        {
          id: "status-admin",
          question: "Why does Admin say In Development?",
          answer: [
            "The admin platform is a restricted internal surface under active development. It is not a public product claim and is not listed in the public sitemap.",
          ],
        },
      ],
    },
    {
      id: "not-claiming",
      title: "What we are not claiming",
      intro: "Explicit non-claims to keep reading honest.",
      items: [
        {
          id: "not-products",
          question: "Are principal systems commercially available?",
          answer: [
            "No. All principal systems are currently in development. The website must never present development-stage concepts as completed or commercially available products.",
          ],
        },
        {
          id: "not-invent",
          question: "What does the site refuse to invent?",
          answer: [
            "Completed products, deployed systems, customers, partners, approvals, patents, performance results, commercial availability, medical outcomes, team size, revenue, investment, market traction, and technical specifications beyond what is explicitly supplied and approved.",
          ],
        },
        {
          id: "not-create-ai",
          question: "Does SAVEN Core create AI?",
          answer: [
            "No. Public and documentation copy must say the company uses, refines, advances, or applies AI. Claims that SAVEN creates AI are prohibited.",
          ],
        },
        {
          id: "not-legal-final",
          question: "Are legal pages counsel-certified for every jurisdiction?",
          answer: [
            "Legal pages are owner-authorized site policies and terms of use for this website. They are not a complete multi-jurisdiction regulatory compliance pack and are not a substitute for jurisdiction-specific counsel review where regulated activities apply. Contact: info@savencore.com.",
          ],
          links: [{ label: "Legal", href: "/legal/" }],
        },
        {
          id: "not-entity",
          question: "Is the legal entity name fully confirmed?",
          answer: [
            "Formal legal entity name details remain an owner pending decision. The public copyright line uses SAVEN Core without adding “Inc.” unless confirmed.",
          ],
        },
        {
          id: "not-analytics",
          question: "Does the site run marketing analytics or a live cookie CMP?",
          answer: [
            "Analytics and live cookie consent CMP remain pending owner decisions. Search Console may be used as owner operations without inventing Google Analytics claims.",
          ],
        },
        {
          id: "not-cms",
          question: "Is there a full CMS or database behind the site?",
          answer: [
            "A full CMS and database are deferred. Optional Vercel Blob may support durable Media when configured. Do not claim delivery or persistence without environment setup.",
          ],
        },
      ],
    },
  ],
};
