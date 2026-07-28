import type { PhysicalWorldHomeContent } from "@/content/home/physical-world/types";

/** Ukrainian Layer-1 homepage body — Physical World home. */
export const physicalWorldHomeUk: PhysicalWorldHomeContent = {
  brand: "SAVEN Core",
  heroLine: "Інтелект для фізичного світу.",
  oneBreath:
    "Ми використовуємо та вдосконалюємо ШІ разом із робототехнікою для реального світу — щоб машини могли сприймати, рухатися й допомагати під контролем людини.",
  builds: ["Штучний інтелект", "Робототехніка", "Автономні системи"],
  buildsLabel: "Що ми створюємо",
  tagline: "Перетворювати інтелект на людську турботу",
  cue: "Лабораторії, інтерфейс, технології та інше — у підвалі сайту.",
  living: {
    headline: "Турбота там, де триває життя.",
    support:
      "Бачення інтелектуальних систем, які допомагають людям — у лікарнях, вдома й там, де потрібна турбота, — під контролем людини.",
    scenes: [
      {
        id: "hospital-care",
        label: "Лікарняна допомога",
        line: "Лікарі, пацієнти та допоміжні системи в моменти турботи.",
      },
      {
        id: "home-care",
        label: "Домашній догляд",
        line: "Повсякденна підтримка літніх там, де триває життя.",
      },
      {
        id: "children-family",
        label: "Діти та сім’я",
        line: "М’яка допомога під турботою тих, хто їх любить.",
      },
      {
        id: "emergency",
        label: "Невідкладна допомога",
        line: "Бачення швидшої й яснішої підтримки, коли важлива кожна хвилина.",
      },
      {
        id: "surgical",
        label: "Хірургічна підтримка",
        line: "Допомога в операційній — інструменти поруч із умілими руками людини.",
      },
      {
        id: "rural-remote",
        label: "Віддалені регіони",
        line: "Турбота, що може дістатися далі від клініки.",
      },
      {
        id: "mental-health",
        label: "Психічне здоров’я",
        line: "Тиха підтримка з повагою до гідності й людського керівництва.",
      },
      {
        id: "disaster-relief",
        label: "Допомога під час лих",
        line: "Системи, які можуть допомогти людям координуватися, коли світ хитається.",
      },
    ],
    railLabel: "Сцени турботи",
    deepenLabel: "SAVEN Robotics Lab",
    deepenHref: "/labs/saven-robotics-lab/",
  },
  flagships: {
    columns: {
      workstream: "Напрям",
      status: "Статус",
      note: "Фокус",
    },
    headline: "Куди прямує цей напрям",
    support:
      "Короткий огляд флагманських напрямів роботи, що просувають це бачення — кожен показано в його чесному, поточному статусі.",
    items: [
      {
        label: "SAVEN Robotics Lab",
        href: "/labs/saven-robotics-lab/",
        status: "У розробці",
        note: "Допоміжні робототехнічні системи — мобільність, маніпулятори та сприйняття.",
      },
      {
        label: "SAVEN Robotics Interface",
        href: "/systems/saven-robotics-interface/",
        status: "У розробці",
        note: "Спільний зв'язок і керування, щоб люди залишалися при командуванні.",
      },
      {
        label: "Internal Future Lab",
        href: "/labs/internal-future-lab/",
        status: "Дослідження",
        note: "Раннє дослідження концепцій поза межами поточної архітектури.",
      },
      {
        label: "Інвесторам",
        href: "/investors/",
        status: "Архітектура",
        note: "Структурна позиція для довгострокового капіталу, узгодженого з місією.",
      },
    ],
  },
  closing: {
    heading: "SAVEN",
    pillars: "Support · Action · Verification · Environment · Network",
    tagline: "One Intelligence. Many Bodies. Real-World Action.",
    alt: "Логотип SAVEN і стовпи: Support, Action, Verification, Environment і Network. Слоган: One Intelligence. Many Bodies. Real-World Action.",
    exploreLabel: "Дослідити SAVEN",
    exploreHint:
      "Наведіть або сфокусуйте стовп, щоб побачити зміст — потім перейдіть глибше сайтом.",
    goDeeper: "Поглибитись",
    wordmarkLabel: "SAVEN",
    corners: {
      navLabel: "Напрямки завершального блоку",
      left: [
        { label: "Мета", href: "/purpose/" },
        { label: "Лабораторії", href: "/labs/" },
      ],
      right: [
        { label: "Довіра", href: "/trust/" },
        { label: "Контакти", href: "/contact/" },
      ],
    },
    map: [
      {
        id: "support",
        label: "Support",
        meaning:
          "Людська турбота насамперед — мета допомагати людям там, де відбувається життя.",
        href: "/purpose/",
        cta: "Мета",
      },
      {
        id: "action",
        label: "Action",
        meaning:
          "Керування і контроль, щоб машини діяли у фізичному світі під людьми.",
        href: "/systems/saven-robotics-interface/",
        cta: "Robotics Interface",
      },
      {
        id: "verification",
        label: "Verification",
        meaning:
          "Безпека, довіра та людський нагляд перед будь-якими заявами про автономію.",
        href: "/trust/human-oversight/",
        cta: "Людський нагляд",
      },
      {
        id: "environment",
        label: "Environment",
        meaning:
          "Контексти застосування у фізичному світі — лікарні, дім і далі.",
        href: "/applications/",
        cta: "Застосування",
      },
      {
        id: "network",
        label: "Network",
        meaning:
          "Архітектура пов’язаних систем, що з’єднує інтелект із багатьма тілами.",
        href: "/systems/",
        cta: "Системи",
      },
    ],
  },
};
