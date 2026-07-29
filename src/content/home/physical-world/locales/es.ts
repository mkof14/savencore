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
    whyLabel: "Por qué esto es SAVEN",
    whyLine:
      "Sistemas pensados para asistir a las personas en lugares reales — bajo control humano, no como sustituto del cuidado.",
  },
  clarity: {
    definition: {
      heading: "Qué es SAVEN",
      body: "SAVEN Core construye sistemas que vinculan la comprensión humana con robots y dispositivos en el mundo físico — bajo control humano. La IA es una herramienta que usamos y avanzamos con ese fin; crear IA no es el propósito.",
    },
    biomathCallout: {
      eyebrow: "BioMath Core → SAVEN",
      title: "Los informes dan forma a las acciones de siguiente nivel",
      body: "La información para las acciones y comandos de siguiente nivel de SAVEN se forma a partir de los informes y conclusiones de BioMath Core — bajo control humano. La IA es una herramienta en ese camino, no el propósito.",
      scopeLine: "Cobertura del modelo: 20 categorías · 200+ servicios",
      href: "/foundation/biomath-core/",
      cta: "Explorar BioMath Core",
    },
    goDeeperWho: {
      eyebrow: "Quiénes somos",
      heading: "Ir más profundo",
      body: "BioMath Core es la base de todo — el fundamento que reúne y estructura el Modelo de datos humanos, y forma los informes y conclusiones que informan las acciones de siguiente nivel de SAVEN bajo control humano.",
      href: "/foundation/biomath-core/",
      cta: "BioMath Core",
      logoAlt: "BioMath Core",
    },
    chain: {
      heading: "De la comprensión a la asistencia",
      ariaLabel: "Tres pasos desde la comprensión humana hasta la asistencia física",
      steps: [
        {
          label: "Comprensión humana",
          href: "/purpose/",
          cta: "Propósito",
        },
        {
          label: "SAVEN",
          href: "/systems/saven-robotics-interface/",
          cta: "Interfaz de robótica",
        },
        {
          label: "Asistencia física",
          href: "/applications/",
          cta: "Aplicaciones",
        },
      ],
    },
    exploreStrip: {
      heading: "Explorar SAVEN",
      support:
        "Cinco pilares de la arquitectura — el mismo mapa continúa en la banda final más abajo.",
    },
    audience: {
      heading: "¿Por dónde quiere empezar?",
      support:
        "Tres caminos claros — cuidado y propósito, tecnología y sistemas, o postura de inversión a largo plazo.",
      paths: [
        {
          id: "care",
          label: "Cuidado y propósito",
          description:
            "Entienda por qué existe SAVEN y dónde la asistencia debe ayudar a las personas.",
          links: [
            { label: "Propósito", href: "/purpose/" },
            { label: "Aplicaciones", href: "/applications/" },
          ],
        },
        {
          id: "technology",
          label: "Tecnología y sistemas",
          description:
            "Vea los laboratorios, la interfaz y la arquitectura que vinculan la inteligencia a la acción física.",
          links: [
            { label: "Tecnología", href: "/technology/" },
            { label: "Laboratorios", href: "/labs/" },
            {
              label: "Interfaz de robótica",
              href: "/systems/saven-robotics-interface/",
            },
            { label: "Sistemas", href: "/systems/" },
          ],
        },
        {
          id: "investors",
          label: "Inversores",
          description:
            "Postura de capital a largo plazo y alineada con la misión — estado honesto, sin métricas inventadas.",
          links: [{ label: "Inversores", href: "/investors/" }],
        },
      ],
    },
    not: {
      heading: "Lo que no somos",
      points: [
        "No existimos para crear IA — la IA es una herramienta que usamos y avanzamos para el apoyo humano.",
        "No diagnosticamos condiciones médicas a través de este sitio web.",
        "No prescribimos ni vendemos medicamentos.",
      ],
    },
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
      moreLabel: 'Más enlaces',
      left: [
        { label: "Propósito", href: "/purpose/" },
        { label: "Labs", href: "/labs/" },
        { label: "Modelo de datos humanos", href: "/technology/human-data-model/" },
        { label: "Robótica", href: "/technology/robotics/" },
        { label: "Automatización", href: "/technology/automation/" },
        { label: "Interoperabilidad", href: "/technology/interoperability/" },
      ],
      right: [
        { label: "Motor de conocimiento", href: "/systems/knowledge-engine/" },
        { label: "Capa de robótica", href: "/systems/robotics-layer/" },
        { label: "Robotics Interface", href: "/systems/saven-robotics-interface/" },
        { label: "Internal Future Lab", href: "/labs/internal-future-lab/" },
        { label: "Confianza", href: "/trust/" },
        { label: "Contacto", href: "/contact/" },
        { label: "FAQ", href: "/faq/" },
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
