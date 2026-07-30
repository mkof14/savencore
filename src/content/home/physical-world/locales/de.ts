import type { PhysicalWorldHomeContent } from "@/content/home/physical-world/types";

/** German Layer-1 homepage body — Physical World home. */
export const physicalWorldHomeDe: PhysicalWorldHomeContent = {
  brand: "SAVEN Core",
  heroLine: "Intelligenz für die physische Welt.",
  oneBreath:
    "Wir nutzen und verfeinern KI mit Robotik für die reale Welt — damit Maschinen unter menschlicher Kontrolle wahrnehmen, sich bewegen und unterstützen können.",
  builds: ["Künstliche Intelligenz", "Robotik", "Autonome Systeme"],
  buildsLabel: "Was wir bauen",
  tagline: "Intelligenz in menschliche Fürsorge verwandeln",
  cue: "Labs, Interface, Technologie und mehr finden Sie im Footer.",
  living: {
    headline: "Fürsorge dort, wo das Leben stattfindet.",
    support:
      "Eine Vision intelligenter Systeme, die Menschen unterstützen — in Krankenhäusern, zu Hause und überall, wo Fürsorge gebraucht wird — unter menschlicher Kontrolle.",
    scenes: [
      {
        id: "hospital-care",
        label: "Krankenhauspflege",
        line: "Kliniker, Patientinnen und Patienten sowie assistive Systeme in Momenten der Fürsorge.",
      },
      {
        id: "home-care",
        label: "Häusliche Pflege",
        line: "Alltägliche Unterstützung für ältere Menschen dort, wo das Leben stattfindet.",
      },
      {
        id: "children-family",
        label: "Kinder und Familie",
        line: "Behutsame Hilfe unter der Fürsorge der Menschen, die sie lieben.",
      },
      {
        id: "emergency",
        label: "Notfall",
        line: "Eine Vision schnellerer, klarerer Unterstützung, wenn jede Minute zählt.",
      },
      {
        id: "surgical",
        label: "Chirurgische Unterstützung",
        line: "Assistenz im OP — Werkzeuge neben geübten menschlichen Händen.",
      },
      {
        id: "rural-remote",
        label: "Ländlich und remote",
        line: "Fürsorge, die Menschen weiter entfernt von der Klinik erreichen kann.",
      },
      {
        id: "mental-health",
        label: "Psychische Gesundheit",
        line: "Ruhige Unterstützung mit Respekt für Würde und menschliche Begleitung.",
      },
      {
        id: "disaster-relief",
        label: "Katastrophenhilfe",
        line: "Systeme, die helfen können zu koordinieren, wenn sich der Boden verschiebt.",
      },
    ],
    railLabel: "Fürsorge-Szenen",
    deepenLabel: "SAVEN Robotics Lab",
    deepenHref: "/labs/saven-robotics-lab/",
    whyLabel: "Warum das SAVEN ist",
    whyLine:
      "Systeme, die Menschen an realen Orten unterstützen sollen — unter menschlicher Kontrolle, nicht als Ersatz für Fürsorge.",
  },
  clarity: {
    definition: {
      heading: "Was ist SAVEN",
      body: "SAVEN Core baut Systeme, die menschliches Verständnis mit Robotern und Geräten in der physischen Welt verbinden — unter menschlicher Kontrolle. KI ist ein Werkzeug, das wir dafür nutzen und weiterentwickeln; KI zu erschaffen ist nicht der Zweck.",
    },
    biomathBridge: {
      eyebrow: "Wer wir sind",
      title: "BioMath Core → SAVEN",
      body: "BioMath Core ist das Fundament des Modells menschlicher Daten — kontinuierlicher Kontext, der autorisierte menschliche Daten sammelt und strukturiert und die Berichte und Schlussfolgerungen bildet, die SAVEN-Aktionen der nächsten Stufe unter menschlicher Kontrolle formen.",
      scopeLine: "Modellabdeckung: 20 Kategorien · 200+ Dienste — kein Operational-Katalog.",
      href: "/foundation/biomath-core/",
      cta: "BioMath Core erkunden",
      logoAlt: "BioMath Core",
    },
    chain: {
      heading: "Vom Verständnis zur Unterstützung",
      ariaLabel: "Drei Schritte vom menschlichen Verständnis zur physischen Unterstützung",
      steps: [
        {
          label: "Menschliches Verständnis",
          href: "/purpose/",
          cta: "Zweck",
        },
        {
          label: "SAVEN",
          href: "/systems/saven-robotics-interface/",
          cta: "Robotik-Schnittstelle",
        },
        {
          label: "Physische Unterstützung",
          href: "/applications/",
          cta: "Anwendungen",
        },
      ],
    },
    exploreStrip: {
      heading: "SAVEN erkunden",
      support:
        "Fünf Säulen der Architektur — dieselbe Karte setzt sich im Abschlussband unten fort.",
    },
    audience: {
      heading: "Wo möchten Sie beginnen?",
      support:
        "Drei klare Wege — Fürsorge und Zweck, Technologie und Systeme oder langfristige Investitionshaltung.",
      paths: [
        {
          id: "care",
          label: "Fürsorge & Zweck",
          description:
            "Verstehen Sie, warum SAVEN existiert und wo Unterstützung Menschen helfen soll.",
          links: [
            { label: "Zweck", href: "/purpose/" },
            { label: "Anwendungen", href: "/applications/" },
          ],
        },
        {
          id: "technology",
          label: "Technologie & Systeme",
          description:
            "Sehen Sie Labs, Schnittstelle und Architektur, die Intelligenz mit physischem Handeln verbinden.",
          links: [
            { label: "Technologie", href: "/technology/" },
            { label: "Labs", href: "/labs/" },
            {
              label: "Robotik-Schnittstelle",
              href: "/systems/saven-robotics-interface/",
            },
            { label: "Systeme", href: "/systems/" },
          ],
        },
        {
          id: "investors",
          label: "Investoren",
          description:
            "Langfristige, missionsausgerichtete Kapitalhaltung — ehrlicher Status, keine erfundenen Kennzahlen.",
          links: [{ label: "Investoren", href: "/investors/" }],
        },
      ],
    },
    not: {
      heading: "Was wir nicht sind",
      points: [
        "Wir existieren nicht, um KI zu erschaffen — KI ist ein Werkzeug, das wir für menschliche Unterstützung nutzen und weiterentwickeln.",
        "Wir diagnostizieren über diese Website keine medizinischen Zustände.",
        "Wir verschreiben und verkaufen keine Arzneimittel.",
      ],
    },
  },
  flagships: {
    columns: {
      workstream: "Arbeitsstrom",
      status: "Status",
      note: "Fokus",
    },
    headline: "Wohin die Richtung führt",
    support:
      "Ein kurzer Blick auf die Leuchtturm-Arbeitsstränge, die auf diese Vision hinarbeiten — jeweils mit ehrlichem, aktuellem Status.",
    items: [
      {
        label: "SAVEN Robotics Lab",
        href: "/labs/saven-robotics-lab/",
        status: "Architektur",
        note: "Unterstützende Robotersysteme — Mobilität, Manipulatoren und Wahrnehmung.",
      },
      {
        label: "SAVEN Robotics Interface",
        href: "/systems/saven-robotics-interface/",
        status: "Architektur",
        note: "Gemeinsame Kommunikation und Steuerung, damit Menschen die Kontrolle behalten.",
      },
      {
        label: "Internal Future Lab",
        href: "/labs/internal-future-lab/",
        status: "Forschung",
        note: "Frühe Erkundung von Konzepten jenseits der aktuellen Architektur.",
      },
      {
        label: "Investoren",
        href: "/investors/",
        status: "Architektur",
        note: "Strukturelle Haltung für langfristig ausgerichtetes, missionskonformes Kapital.",
      },
    ],
  },
  closing: {
    heading: "SAVEN",
    pillars: "Support · Action · Verification · Environment · Network",
    tagline: "One Intelligence. Many Bodies. Real-World Action.",
    alt: "SAVEN-Logo und Säulen: Support, Action, Verification, Environment und Network. Slogan: One Intelligence. Many Bodies. Real-World Action.",
    exploreLabel: "SAVEN erkunden",
    exploreHint:
      "Bewegen Sie den Zeiger über eine Säule oder fokussieren Sie sie, um die Bedeutung zu sehen — dann tiefer gehen.",
    goDeeper: "Tiefer gehen",
    wordmarkLabel: "SAVEN",
    corners: {
      navLabel: "Ziele im Abschlussband",
      moreLabel: 'Weitere Links',
      left: [
        { label: "Zweck", href: "/purpose/" },
        { label: "Labore", href: "/labs/" },
        { label: "Modell menschlicher Daten", href: "/technology/human-data-model/" },
        { label: "Robotik", href: "/technology/robotics/" },
        { label: "Automatisierung", href: "/technology/automation/" },
        { label: "Interoperabilität", href: "/technology/interoperability/" },
      ],
      right: [
        { label: "Wissenssystem", href: "/systems/knowledge-engine/" },
        { label: "Robotikschicht", href: "/systems/robotics-layer/" },
        { label: "Robotik-Schnittstelle", href: "/systems/saven-robotics-interface/" },
        { label: "Internal Future Lab", href: "/labs/internal-future-lab/" },
        { label: "Vertrauen", href: "/trust/" },
        { label: "Kontakt", href: "/contact/" },
        { label: "FAQ", href: "/faq/" },
      ],
    },
    map: [
      {
        id: "support",
        label: "Support",
        meaning:
          "Menschliche Fürsorge steht zuerst — der Zweck, Menschen dort zu helfen, wo Leben stattfindet.",
        href: "/purpose/",
        cta: "Zweck",
      },
      {
        id: "action",
        label: "Action",
        meaning:
          "Befehl und Steuerung, damit Maschinen in der physischen Welt unter Menschen handeln.",
        href: "/systems/saven-robotics-interface/",
        cta: "Robotik-Schnittstelle",
      },
      {
        id: "verification",
        label: "Verification",
        meaning:
          "Sicherheit, Vertrauen und menschliche Aufsicht vor jedem Autonomieanspruch.",
        href: "/trust/human-oversight/",
        cta: "Menschliche Aufsicht",
      },
      {
        id: "environment",
        label: "Environment",
        meaning:
          "Anwendungskontexte in der physischen Welt — Krankenhäuser, Zuhause und darüber hinaus.",
        href: "/applications/",
        cta: "Anwendungen",
      },
      {
        id: "network",
        label: "Network",
        meaning:
          "Vernetzte Systemarchitektur, die Intelligenz mit vielen Körpern verbindet.",
        href: "/systems/",
        cta: "Systeme",
      },
    ],
  },
};
