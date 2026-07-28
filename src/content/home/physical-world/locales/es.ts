import type { PhysicalWorldHomeContent } from "@/content/home/physical-world/types";

/** Spanish Layer-1 homepage body — Physical World home. */
export const physicalWorldHomeEs: PhysicalWorldHomeContent = {
  brand: "SAVEN Core",
  heroLine: "Inteligencia para el mundo físico.",
  oneBreath:
    "Usamos y refinamos la IA con robótica que funciona en el mundo real — para que las máquinas puedan percibir, moverse y asistir bajo control humano.",
  builds: ["Inteligencia artificial", "Robótica", "Sistemas autónomos"],
  buildsLabel: "Lo que construimos",
  tagline: "Convertir la inteligencia en cuidado humano",
  cue: "Explore Laboratorios, Interfaz, Tecnología y más en el pie de página.",
  living: {
    headline: "Cuidado donde ocurre la vida.",
    support:
      "Una visión de sistemas inteligentes que asisten a las personas — en hospitales, en casa y donde se necesite cuidado — bajo control humano.",
    scenes: [
      {
        id: "hospital-care",
        label: "Atención hospitalaria",
        line: "Clínicos, pacientes y sistemas de asistencia en momentos de cuidado.",
      },
      {
        id: "home-care",
        label: "Cuidado en el hogar",
        line: "Apoyo cotidiano para personas mayores donde ocurre la vida.",
      },
      {
        id: "children-family",
        label: "Niños y familia",
        line: "Ayuda gentil bajo el cuidado de quienes los aman.",
      },
      {
        id: "emergency",
        label: "Emergencias",
        line: "Una visión de apoyo más rápido y claro cuando cada minuto importa.",
      },
      {
        id: "surgical",
        label: "Apoyo quirúrgico",
        line: "Asistencia en quirófano — herramientas junto a manos humanas expertas.",
      },
      {
        id: "rural-remote",
        label: "Rural y remoto",
        line: "Cuidado que puede llegar más lejos de la clínica.",
      },
      {
        id: "mental-health",
        label: "Salud mental",
        line: "Apoyo silencioso que respeta la dignidad y la guía humana.",
      },
      {
        id: "disaster-relief",
        label: "Ayuda en desastres",
        line: "Sistemas que pueden ayudar a coordinar cuando el terreno cambia.",
      },
    ],
    railLabel: "Escenas de cuidado",
    deepenLabel: "SAVEN Robotics Lab",
    deepenHref: "/labs/saven-robotics-lab/",
  },
  flagships: {
    columns: {
      workstream: "Línea de trabajo",
      status: "Estado",
      note: "Enfoque",
    },
    headline: "Hacia dónde apunta la dirección",
    support:
      "Una breve mirada a las líneas de trabajo insignia que construyen hacia esa visión — cada una en su estado actual y honesto.",
    items: [
      {
        label: "SAVEN Robotics Lab",
        href: "/labs/saven-robotics-lab/",
        status: "En desarrollo",
        note: "Sistemas robóticos asistenciales — movilidad, manipuladores y percepción.",
      },
      {
        label: "SAVEN Robotics Interface",
        href: "/systems/saven-robotics-interface/",
        status: "En desarrollo",
        note: "Comunicación y control compartidos para que las personas mantengan el mando.",
      },
      {
        label: "Internal Future Lab",
        href: "/labs/internal-future-lab/",
        status: "Investigación",
        note: "Exploración temprana de conceptos más allá de la arquitectura actual.",
      },
      {
        label: "Inversionistas",
        href: "/investors/",
        status: "Arquitectura",
        note: "Postura estructural para capital de largo horizonte alineado con la misión.",
      },
    ],
  },
  closing: {
    heading: "SAVEN",
    pillars: "Support · Action · Verification · Environment · Network",
    tagline: "One Intelligence. Many Bodies. Real-World Action.",
    alt: "Logotipo SAVEN y pilares: Support, Action, Verification, Environment y Network. Eslogan: One Intelligence. Many Bodies. Real-World Action.",
    exploreLabel: "Explorar SAVEN",
    exploreHint:
      "Pase el cursor o enfoque un pilar para ver su significado — luego profundice en el sitio.",
    goDeeper: "Ir más profundo",
    wordmarkLabel: "SAVEN",
    corners: {
      navLabel: "Destinos del cierre",
      left: [
        { label: "Propósito", href: "/purpose/" },
        { label: "Labs", href: "/labs/" },
      ],
      right: [
        { label: "Confianza", href: "/trust/" },
        { label: "Contacto", href: "/contact/" },
      ],
    },
    map: [
      {
        id: "support",
        label: "Support",
        meaning:
          "El cuidado humano es primero — el propósito de ayudar a las personas donde ocurre la vida.",
        href: "/purpose/",
        cta: "Propósito",
      },
      {
        id: "action",
        label: "Action",
        meaning:
          "Mando y control para que las máquinas actúen en el mundo físico bajo personas.",
        href: "/systems/saven-robotics-interface/",
        cta: "Interfaz de robótica",
      },
      {
        id: "verification",
        label: "Verification",
        meaning:
          "Seguridad, confianza y supervisión humana antes de cualquier afirmación de autonomía.",
        href: "/trust/human-oversight/",
        cta: "Supervisión humana",
      },
      {
        id: "environment",
        label: "Environment",
        meaning:
          "Contextos de aplicación en el mundo físico — hospitales, hogar y más allá.",
        href: "/applications/",
        cta: "Aplicaciones",
      },
      {
        id: "network",
        label: "Network",
        meaning:
          "Arquitectura de sistemas conectados que vincula la inteligencia a muchos cuerpos.",
        href: "/systems/",
        cta: "Sistemas",
      },
    ],
  },
};
