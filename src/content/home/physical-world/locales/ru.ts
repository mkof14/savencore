import type { PhysicalWorldHomeContent } from "@/content/home/physical-world/types";

/** Russian Layer-1 homepage body — Physical World home. */
export const physicalWorldHomeRu: PhysicalWorldHomeContent = {
  brand: "SAVEN Core",
  heroLine: "Интеллект для физического мира.",
  oneBreath:
    "Мы используем и совершенствуем ИИ вместе с робототехникой для реального мира — чтобы машины могли воспринимать, двигаться и помогать под контролем человека.",
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
  flagships: {
    columns: {
      workstream: "Направление",
      status: "Статус",
      note: "Фокус",
    },
    headline: "Куда движется это направление",
    support:
      "Краткий обзор флагманских направлений работы, которые продвигают это видение — каждое показано в его честном, текущем статусе.",
    items: [
      {
        label: "SAVEN Robotics Lab",
        href: "/labs/saven-robotics-lab/",
        status: "В разработке",
        note: "Вспомогательные робототехнические системы — мобильность, манипуляторы и восприятие.",
      },
      {
        label: "SAVEN Robotics Interface",
        href: "/systems/saven-robotics-interface/",
        status: "В разработке",
        note: "Общая связь и управление, чтобы люди оставались у руля.",
      },
      {
        label: "Internal Future Lab",
        href: "/labs/internal-future-lab/",
        status: "Исследование",
        note: "Раннее исследование концепций за пределами текущей архитектуры.",
      },
      {
        label: "Инвесторам",
        href: "/investors/",
        status: "Архитектура",
        note: "Структурная позиция для долгосрочного капитала, согласованного с миссией.",
      },
    ],
  },
  closing: {
    heading: "SAVEN",
    pillars: "Support · Action · Verification · Environment · Network",
    tagline: "One Intelligence. Many Bodies. Real-World Action.",
    alt: "Логотип SAVEN и столпы: Support, Action, Verification, Environment и Network. Слоган: One Intelligence. Many Bodies. Real-World Action.",
    exploreLabel: "Исследовать SAVEN",
    exploreHint:
      "Наведите или сфокусируйте столп, чтобы увидеть смысл — затем перейдите глубже по сайту.",
    goDeeper: "Углубиться",
    map: [
      {
        id: "support",
        label: "Support",
        meaning:
          "Человеческая забота на первом месте — цель помогать людям там, где происходит жизнь.",
        href: "/purpose/",
        cta: "Миссия",
      },
      {
        id: "action",
        label: "Action",
        meaning:
          "Командование и управление, чтобы машины действовали в физическом мире под контролем людей.",
        href: "/systems/saven-robotics-interface/",
        cta: "Robotics Interface",
      },
      {
        id: "verification",
        label: "Verification",
        meaning:
          "Безопасность, доверие и человеческий надзор до любых заявлений об автономии.",
        href: "/trust/human-oversight/",
        cta: "Человеческий надзор",
      },
      {
        id: "environment",
        label: "Environment",
        meaning:
          "Контексты применения в физическом мире — больницы, дом и дальше.",
        href: "/applications/",
        cta: "Применения",
      },
      {
        id: "network",
        label: "Network",
        meaning:
          "Архитектура связанных систем, соединяющая интеллект со многими телами.",
        href: "/systems/",
        cta: "Системы",
      },
    ],
  },
};
