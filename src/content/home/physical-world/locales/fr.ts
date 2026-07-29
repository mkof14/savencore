import type { PhysicalWorldHomeContent } from "@/content/home/physical-world/types";

/** French Layer-1 homepage body — Physical World home. */
export const physicalWorldHomeFr: PhysicalWorldHomeContent = {
  brand: "SAVEN Core",
  heroLine: "L'intelligence pour le monde physique.",
  oneBreath:
    "Nous utilisons et affinons l'IA avec une robotique conçue pour le monde réel — afin que les machines puissent percevoir, se déplacer et assister sous contrôle humain.",
  builds: ["Intelligence artificielle", "Robotique", "Systèmes autonomes"],
  buildsLabel: "Ce que nous construisons",
  tagline: "Transformer l'intelligence en soin humain",
  cue: "Explorez les Labs, l'Interface, la Technologie et plus encore dans le pied de page.",
  living: {
    headline: "Le soin là où la vie se passe.",
    support:
      "Une vision de systèmes intelligents qui aident les personnes — à l'hôpital, à domicile et partout où le soin est nécessaire — sous contrôle humain.",
    scenes: [
      {
        id: "hospital-care",
        label: "Soins hospitaliers",
        line: "Cliniciens, patients et systèmes d'assistance dans des moments de soin.",
      },
      {
        id: "home-care",
        label: "Soins à domicile",
        line: "Un soutien quotidien pour les aînés là où la vie se passe.",
      },
      {
        id: "children-family",
        label: "Enfants et famille",
        line: "Une aide douce sous le soin de ceux qui les aiment.",
      },
      {
        id: "emergency",
        label: "Urgence",
        line: "Une vision d'un soutien plus rapide et plus clair lorsque chaque minute compte.",
      },
      {
        id: "surgical",
        label: "Soutien chirurgical",
        line: "Assistance au bloc — des outils aux côtés de mains humaines expertes.",
      },
      {
        id: "rural-remote",
        label: "Rural et éloigné",
        line: "Des soins qui peuvent atteindre plus loin de la clinique.",
      },
      {
        id: "mental-health",
        label: "Santé mentale",
        line: "Un soutien discret qui respecte la dignité et le guidage humain.",
      },
      {
        id: "disaster-relief",
        label: "Secours en catastrophe",
        line: "Des systèmes qui peuvent aider à coordonner lorsque le sol se dérobe.",
      },
    ],
    railLabel: "Scènes de soin",
    deepenLabel: "SAVEN Robotics Lab",
    deepenHref: "/labs/saven-robotics-lab/",
    whyLabel: "Pourquoi c’est SAVEN",
    whyLine:
      "Des systèmes conçus pour assister les personnes dans des lieux réels — sous contrôle humain, pas comme substitut aux soins.",
  },
  clarity: {
    definition: {
      heading: "Qu’est-ce que SAVEN",
      body: "SAVEN Core construit des systèmes qui relient la compréhension humaine aux robots et appareils dans le monde physique — sous contrôle humain. L’IA est un outil que nous utilisons et faisons progresser à cette fin ; créer de l’IA n’est pas le but.",
    },
    biomathBridge: {
      eyebrow: "Qui nous sommes",
      title: "BioMath Core → SAVEN",
      body: "BioMath Core est le fondement du Modèle de données humaines — un contexte continu qui rassemble et structure les données humaines autorisées, et forme les rapports et conclusions qui façonnent les actions de niveau supérieur de SAVEN sous contrôle humain. Le statut reste Architecture / In Development.",
      scopeLine: "Couverture du modèle : 20 catégories · 200+ services — pas un catalogue Operational.",
      href: "/foundation/biomath-core/",
      cta: "Explorer BioMath Core",
      logoAlt: "BioMath Core",
    },
    chain: {
      heading: "De la compréhension à l’assistance",
      ariaLabel: "Trois étapes de la compréhension humaine à l’assistance physique",
      steps: [
        {
          label: "Compréhension humaine",
          href: "/purpose/",
          cta: "Mission",
        },
        {
          label: "SAVEN",
          href: "/systems/saven-robotics-interface/",
          cta: "Interface robotique",
        },
        {
          label: "Assistance physique",
          href: "/applications/",
          cta: "Applications",
        },
      ],
    },
    exploreStrip: {
      heading: "Explorer SAVEN",
      support:
        "Cinq piliers de l’architecture — la même carte se poursuit dans la bande de clôture ci-dessous.",
    },
    audience: {
      heading: "Par où voulez-vous commencer ?",
      support:
        "Trois chemins clairs — soins et mission, technologie et systèmes, ou posture d’investissement à long terme.",
      paths: [
        {
          id: "care",
          label: "Soins & mission",
          description:
            "Comprendre pourquoi SAVEN existe et où l’assistance est destinée à aider les personnes.",
          links: [
            { label: "Mission", href: "/purpose/" },
            { label: "Applications", href: "/applications/" },
          ],
        },
        {
          id: "technology",
          label: "Technologie & systèmes",
          description:
            "Voir les labs, l’interface et l’architecture qui relient l’intelligence à l’action physique.",
          links: [
            { label: "Technologie", href: "/technology/" },
            { label: "Labs", href: "/labs/" },
            {
              label: "Interface robotique",
              href: "/systems/saven-robotics-interface/",
            },
            { label: "Systèmes", href: "/systems/" },
          ],
        },
        {
          id: "investors",
          label: "Investisseurs",
          description:
            "Posture de capital à long terme alignée sur la mission — statut honnête, sans métriques inventées.",
          links: [{ label: "Investisseurs", href: "/investors/" }],
        },
      ],
    },
    not: {
      heading: "Ce que nous ne sommes pas",
      points: [
        "Nous n’existons pas pour créer de l’IA — l’IA est un outil que nous utilisons et faisons progresser pour le soutien humain.",
        "Nous ne diagnostiquons pas de conditions médicales via ce site.",
        "Nous ne prescritons ni ne vendons de médicaments.",
      ],
    },
  },
  flagships: {
    columns: {
      workstream: "Chantier",
      status: "Statut",
      note: "Focus",
    },
    headline: "Vers où la direction se dirige",
    support:
      "Un bref aperçu des chantiers phares qui construisent vers cette vision — chacun présenté avec son statut actuel et honnête.",
    items: [
      {
        label: "SAVEN Robotics Lab",
        href: "/labs/saven-robotics-lab/",
        status: "En développement",
        note: "Systèmes robotiques d'assistance — mobilité, manipulateurs et perception.",
      },
      {
        label: "SAVEN Robotics Interface",
        href: "/systems/saven-robotics-interface/",
        status: "En développement",
        note: "Communication et contrôle partagés pour que les personnes gardent le commandement.",
      },
      {
        label: "Internal Future Lab",
        href: "/labs/internal-future-lab/",
        status: "Recherche",
        note: "Exploration précoce de concepts au-delà de l'architecture actuelle.",
      },
      {
        label: "Investisseurs",
        href: "/investors/",
        status: "Architecture",
        note: "Posture structurelle pour un capital à long horizon aligné sur la mission.",
      },
    ],
  },
  closing: {
    heading: "SAVEN",
    pillars: "Support · Action · Verification · Environment · Network",
    tagline: "One Intelligence. Many Bodies. Real-World Action.",
    alt: "Logo SAVEN et piliers : Support, Action, Verification, Environment et Network. Slogan : One Intelligence. Many Bodies. Real-World Action.",
    exploreLabel: "Explorer SAVEN",
    exploreHint:
      "Survolez ou focalisez un pilier pour voir sa signification — puis allez plus loin sur le site.",
    goDeeper: "Aller plus loin",
    wordmarkLabel: "SAVEN",
    corners: {
      navLabel: "Destinations de clôture",
      moreLabel: 'Plus de liens',
      left: [
        { label: "Raison d’être", href: "/purpose/" },
        { label: "Labs", href: "/labs/" },
        { label: "Modèle de données humaines", href: "/technology/human-data-model/" },
        { label: "Robotique", href: "/technology/robotics/" },
        { label: "Automatisation", href: "/technology/automation/" },
        { label: "Interopérabilité", href: "/technology/interoperability/" },
      ],
      right: [
        { label: "Moteur de connaissances", href: "/systems/knowledge-engine/" },
        { label: "Couche robotique", href: "/systems/robotics-layer/" },
        { label: "Interface robotique", href: "/systems/saven-robotics-interface/" },
        { label: "Internal Future Lab", href: "/labs/internal-future-lab/" },
        { label: "Confiance", href: "/trust/" },
        { label: "Contact", href: "/contact/" },
        { label: "FAQ", href: "/faq/" },
      ],
    },
    map: [
      {
        id: "support",
        label: "Support",
        meaning:
          "Le soin humain vient d’abord — le but d’aider les personnes là où la vie se déroule.",
        href: "/purpose/",
        cta: "Objectif",
      },
      {
        id: "action",
        label: "Action",
        meaning:
          "Commande et contrôle pour que les machines agissent dans le monde physique sous des personnes.",
        href: "/systems/saven-robotics-interface/",
        cta: "Interface robotique",
      },
      {
        id: "verification",
        label: "Verification",
        meaning:
          "Sécurité, confiance et supervision humaine avant toute prétention d’autonomie.",
        href: "/trust/human-oversight/",
        cta: "Supervision humaine",
      },
      {
        id: "environment",
        label: "Environment",
        meaning:
          "Contextes d’application dans le monde physique — hôpitaux, domicile et au-delà.",
        href: "/applications/",
        cta: "Applications",
      },
      {
        id: "network",
        label: "Network",
        meaning:
          "Architecture de systèmes connectés qui lie l’intelligence à de nombreux corps.",
        href: "/systems/",
        cta: "Systèmes",
      },
    ],
  },
};
