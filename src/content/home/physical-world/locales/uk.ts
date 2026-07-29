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
    whyLabel: "Чому це SAVEN",
    whyLine:
      "Системи, створені допомагати людям у реальних місцях — під контролем людини, а не як заміна піклуванню.",
  },
  clarity: {
    definition: {
      heading: "Що таке SAVEN",
      body: "SAVEN Core будує системи, що пов’язують людське розуміння з роботами й пристроями у фізичному світі — під контролем людини. ШІ — інструмент, який ми використовуємо й розвиваємо для цієї мети; створення ШІ — не мета.",
    },
    biomathCallout: {
      eyebrow: "BioMath Core → SAVEN",
      title: "Звіти формують дії наступного рівня",
      body: "Інформація для дій і команд SAVEN наступного рівня формується зі звітів і висновків BioMath Core — під контролем людини. ШІ — інструмент на цьому шляху, а не мета.",
      scopeLine: "Охоплення моделі: 20 категорій · 200+ сервісів",
      href: "/foundation/#biomath-core",
      cta: "BioMath Core у Foundation",
    },
    chain: {
      heading: "Від розуміння до допомоги",
      ariaLabel: "Три кроки від людського розуміння до фізичної допомоги",
      steps: [
        {
          label: "Людське розуміння",
          href: "/purpose/",
          cta: "Призначення",
        },
        {
          label: "SAVEN",
          href: "/systems/saven-robotics-interface/",
          cta: "Інтерфейс робототехніки",
        },
        {
          label: "Фізична допомога",
          href: "/applications/",
          cta: "Застосування",
        },
      ],
    },
    exploreStrip: {
      heading: "Досліджувати SAVEN",
      support:
        "П’ять опор архітектури — та сама карта триває в завершальній смузі нижче.",
    },
    audience: {
      heading: "Звідки хочете почати?",
      support:
        "Три чіткі шляхи — піклування й призначення, технології й системи, або довгострокова інвестиційна позиція.",
      paths: [
        {
          id: "care",
          label: "Піклування й призначення",
          description:
            "Зрозумійте, чому існує SAVEN і де допомога має підтримувати людей.",
          links: [
            { label: "Призначення", href: "/purpose/" },
            { label: "Застосування", href: "/applications/" },
          ],
        },
        {
          id: "technology",
          label: "Технології й системи",
          description:
            "Подивіться лабораторії, інтерфейс і архітектуру, що пов’язують інтелект із фізичною дією.",
          links: [
            { label: "Технології", href: "/technology/" },
            { label: "Лабораторії", href: "/labs/" },
            {
              label: "Інтерфейс робототехніки",
              href: "/systems/saven-robotics-interface/",
            },
            { label: "Системи", href: "/systems/" },
          ],
        },
        {
          id: "investors",
          label: "Інвестори",
          description:
            "Довгострокова, узгоджена з місією капіталова позиція — чесний статус, без вигаданих метрик.",
          links: [{ label: "Інвестори", href: "/investors/" }],
        },
      ],
    },
    not: {
      heading: "Чим ми не є",
      points: [
        "Ми існуємо не для того, щоб створювати ШІ — ШІ є інструментом, який ми використовуємо й розвиваємо для людської підтримки.",
        "Ми не діагностуємо медичні стани через цей вебсайт.",
        "Ми не призначаємо й не продаємо ліки.",
      ],
    },
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
      moreLabel: 'Більше посилань',
      left: [
        { label: "Мета", href: "/purpose/" },
        { label: "Лабораторії", href: "/labs/" },
        { label: "Модель даних про людину", href: "/technology/human-data-model/" },
        { label: "Робототехніка", href: "/technology/robotics/" },
        { label: "Автоматизація", href: "/technology/automation/" },
        { label: "Інтероперабельність", href: "/technology/interoperability/" },
      ],
      right: [
        { label: "Рушій знань", href: "/systems/knowledge-engine/" },
        { label: "Шар робототехніки", href: "/systems/robotics-layer/" },
        { label: "Роботичний інтерфейс", href: "/systems/saven-robotics-interface/" },
        { label: "Internal Future Lab", href: "/labs/internal-future-lab/" },
        { label: "Довіра", href: "/trust/" },
        { label: "Контакти", href: "/contact/" },
        { label: "FAQ", href: "/faq/" },
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
