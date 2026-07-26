import type { PhysicalWorldHomeContent } from "@/content/home/physical-world/types";

/** Russian Layer-1 homepage body — Physical World home. */
export const physicalWorldHomeRu: PhysicalWorldHomeContent = {
  brand: "SAVEN Core",
  heroLine: "Интеллект для физического мира.",
  oneBreath:
    "Мы создаём ИИ и робототехнику для реального мира — чтобы машины могли воспринимать, двигаться и помогать под контролем человека.",
  builds: ["Искусственный интеллект", "Робототехника", "Автономные системы"],
  buildsLabel: "Что мы создаём",
  tagline: "Превращать интеллект в человеческую заботу",
  cue: "Лаборатории, интерфейс, технологии и другое — в подвале сайта.",
  living: {
    headline: "Забота там, где идёт жизнь.",
    support:
      "Видение интеллектуальных систем, которые помогают людям — в больницах, дома и там, где нужна забота, — под контролем человека.",
    scenes: [
      {
        id: "hospital-care",
        label: "Больничная помощь",
        line: "Врачи, пациенты и вспомогательные системы в моменты заботы.",
      },
      {
        id: "home-care",
        label: "Домашний уход",
        line: "Повседневная поддержка пожилых там, где идёт жизнь.",
      },
      {
        id: "children-family",
        label: "Дети и семья",
        line: "Мягкая помощь под заботой тех, кто их любит.",
      },
      {
        id: "emergency",
        label: "Экстренная помощь",
        line: "Видение более быстрой и ясной поддержки, когда важна каждая минута.",
      },
      {
        id: "surgical",
        label: "Хирургическая поддержка",
        line: "Помощь в операционной — инструменты рядом с умелыми руками человека.",
      },
      {
        id: "rural-remote",
        label: "Отдалённые регионы",
        line: "Забота, которая может дойти дальше от клиники.",
      },
      {
        id: "mental-health",
        label: "Психическое здоровье",
        line: "Тихая поддержка с уважением к достоинству и человеческому руководству.",
      },
      {
        id: "disaster-relief",
        label: "Помощь при бедствиях",
        line: "Системы, которые могут помочь людям координироваться, когда мир шатается.",
      },
    ],
    railLabel: "Сцены заботы",
    deepenLabel: "SAVEN Robotics Lab",
    deepenHref: "/labs/saven-robotics-lab/",
  },
  closing: {
    heading: "SAVEN",
    pillars: "Support · Action · Verification · Environment · Network",
    tagline: "One Intelligence. Many Bodies. Real-World Action.",
    alt: "Логотип SAVEN и столпы: Support, Action, Verification, Environment и Network. Слоган: One Intelligence. Many Bodies. Real-World Action.",
  },
};
