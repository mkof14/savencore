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
        status: "In Entwicklung",
        note: "Unterstützende Robotersysteme — Mobilität, Manipulatoren und Wahrnehmung.",
      },
      {
        label: "SAVEN Robotics Interface",
        href: "/systems/saven-robotics-interface/",
        status: "In Entwicklung",
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
      left: [
        { label: "Zweck", href: "/purpose/" },
        { label: "Labore", href: "/labs/" },
      ],
      right: [
        { label: "Vertrauen", href: "/trust/" },
        { label: "Kontakt", href: "/contact/" },
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
