import type { PhysicalWorldHomeContent } from "@/content/home/physical-world/types";

/** French Layer-1 homepage body — Physical World home. */
export const physicalWorldHomeFr: PhysicalWorldHomeContent = {
  brand: "SAVEN Core",
  heroLine: "L'intelligence pour le monde physique.",
  oneBreath:
    "Nous concevons l'IA et la robotique pour le monde réel — afin que les machines puissent percevoir, se déplacer et assister sous contrôle humain.",
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
  },
  closing: {
    heading: "SAVEN",
    pillars: "Support · Action · Verification · Environment · Network",
    tagline: "One Intelligence. Many Bodies. Real-World Action.",
    alt: "Logo SAVEN et piliers : Support, Action, Verification, Environment et Network. Slogan : One Intelligence. Many Bodies. Real-World Action.",
  },
};
