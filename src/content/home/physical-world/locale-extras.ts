import type { ContentLocale } from "@/i18n/types";

import type {
  HomeClarityAudiencePath,
  HomeHeroCta,
  HomeLayerItem,
  HomePathStage,
  HomePurposeCard,
} from "./types";

export type HomeLocaleExtras = {
  cue: string;
  conceptLabel: string;
  heroCtas: {
    primary: HomeHeroCta;
    secondary: HomeHeroCta;
    tertiary: HomeHeroCta;
  };
  childrenFamilyLine: string;
  purpose: {
    heading: string;
    body: string;
    cards: readonly HomePurposeCard[];
  };
  layers: {
    heading: string;
    intro: string;
    items: readonly HomeLayerItem[];
  };
  hardware: {
    heading: string;
    body: string;
    forms: readonly string[];
    hub: string;
  };
  path: {
    heading: string;
    stages: readonly HomePathStage[];
  };
  partnersPath: HomeClarityAudiencePath;
};

const PURPOSE_HREFS = {
  mobility: "/applications/home/",
  physical: "/applications/home/",
  rehab: "/applications/healthcare/",
  independent: "/applications/home/",
  everyday: "/applications/home/",
  hri: "/labs/saven-robotics-lab/",
} as const;

function extras(input: HomeLocaleExtras): HomeLocaleExtras {
  return input;
}

export const HOME_LOCALE_EXTRAS: Record<
  Exclude<ContentLocale, "en">,
  HomeLocaleExtras
> = {
  es: extras({
    cue: "Tecnología e investigación",
    conceptLabel: "Visualización conceptual",
    heroCtas: {
      primary: { label: "Explorar SAVEN", href: "/technology/" },
      secondary: { label: "Colaborar con nosotros", href: "/partners/" },
      tertiary: {
        label: "Tecnología e investigación",
        href: "/labs/saven-robotics-lab/",
      },
    },
    childrenFamilyLine:
      "Los entornos familiares son un ámbito a largo plazo para la robótica centrada en las personas — con supervisión adulta y diseño adecuado a la edad.",
    purpose: {
      heading: "Tecnología construida alrededor de las personas",
      body: "La robótica pasa de entornos industriales controlados a lugares pensados para las personas: hogares, entornos de rehabilitación, entornos de cuidado, lugares de trabajo y la vida cotidiana. SAVEN se centra en las tecnologías de inteligencia e interacción que los robots necesitan para comprender la actividad humana, adaptar la asistencia y apoyar tareas físicas de forma práctica, intuitiva y cada vez más personalizada.",
      cards: [
        { title: "Movilidad", href: PURPOSE_HREFS.mobility },
        { title: "Asistencia física", href: PURPOSE_HREFS.physical },
        { title: "Apoyo a la rehabilitación", href: PURPOSE_HREFS.rehab },
        { title: "Vida independiente", href: PURPOSE_HREFS.independent },
        { title: "Tareas cotidianas", href: PURPOSE_HREFS.everyday },
        { title: "Interacción persona-robot", href: PURPOSE_HREFS.hri },
      ],
    },
    layers: {
      heading: "La capa SAVEN de asistencia humana",
      intro:
        "El valor de SAVEN no se limita a construir robots mecánicos. La arquitectura se diseña como una capa de inteligencia de asistencia humana que puede trabajar en sistemas robóticos compatibles.",
      items: [
        {
          title: "Percepción",
          text: "Comprender personas, movimiento, entorno, objetos y contexto a través de sensores y sistemas robóticos compatibles.",
        },
        {
          title: "Comprensión del movimiento humano",
          text: "Interpretar patrones de movimiento e interacción física para ayudar a determinar cuándo y cómo puede ser apropiada la asistencia.",
        },
        {
          title: "Inteligencia de asistencia",
          text: "Software e IA diseñados para coordinar la asistencia robótica según la tarea, el entorno, las capacidades del sistema y el contexto del usuario.",
        },
        {
          title: "Personalización",
          text: "Adaptar la interacción y la asistencia a preferencias, rutinas, capacidades y datos permitidos de cada persona.",
        },
        {
          title: "Seguridad y control",
          text: "Incorporar supervisión humana, límites operativos, mecanismos de interrupción, monitorización y comportamientos de estado seguro en la interacción persona-robot.",
        },
      ],
    },
    hardware: {
      heading: "Inteligencia más allá de un solo robot",
      body: "El futuro de la robótica asistencial no lo definirá una sola máquina. Distintos entornos y tareas requieren distintos sistemas robóticos. SAVEN se desarrolla como un enfoque de inteligencia e integración flexible en hardware, capaz de trabajar en plataformas robóticas compatibles. Un enfoque de inteligencia. Múltiples formas robóticas.",
      forms: [
        "Robots humanoides",
        "Robots móviles",
        "Brazos robóticos",
        "Robótica wearable",
        "Sistemas de rehabilitación",
        "Futuros dispositivos de asistencia",
      ],
      hub: "Inteligencia SAVEN de asistencia humana",
    },
    path: {
      heading: "De la investigación a la asistencia real",
      stages: [
        {
          n: "01",
          title: "Investigación",
          text: "Necesidades humanas, casos de uso, modelos de interacción y requisitos de seguridad.",
        },
        {
          n: "02",
          title: "Integración",
          text: "Sensores, IA, plataformas robóticas y software.",
        },
        {
          n: "03",
          title: "Prototipo",
          text: "Interacción controlada, movimiento, tareas e interfaces de usuario.",
        },
        {
          n: "04",
          title: "Validación",
          text: "Seguridad, usabilidad, rendimiento y retroalimentación humana.",
        },
        {
          n: "05",
          title: "Programas piloto",
          text: "Entornos seleccionados, socios y supervisión profesional.",
        },
        {
          n: "06",
          title: "Despliegue",
          text: "Aplicaciones definidas, plataformas cualificadas y soporte operativo.",
        },
      ],
    },
    partnersPath: {
      id: "partners",
      label: "Construir con SAVEN",
      description:
        "Su plataforma robótica más la inteligencia SAVEN de asistencia humana.",
      links: [{ label: "Socios", href: "/partners/" }],
    },
  }),
  de: extras({
    cue: "Technologie und Forschung",
    conceptLabel: "Konzeptvisualisierung",
    heroCtas: {
      primary: { label: "SAVEN entdecken", href: "/technology/" },
      secondary: { label: "Mit uns zusammenarbeiten", href: "/partners/" },
      tertiary: {
        label: "Technologie und Forschung",
        href: "/labs/saven-robotics-lab/",
      },
    },
    childrenFamilyLine:
      "Familiäre Umgebungen sind ein wichtiges langfristiges Feld für menschzentrierte Robotik — mit erwachsener Aufsicht und altersgerechter Gestaltung.",
    purpose: {
      heading: "Technologie, die um Menschen herum gebaut wird",
      body: "Robotik bewegt sich von kontrollierten Industrieumgebungen in Orte, die für Menschen gebaut sind — Wohnungen, Rehabilitationsumgebungen, Pflegekontexte, Arbeitsplätze und den Alltag. SAVEN konzentriert sich auf Intelligenz- und Interaktionstechnologien, die Roboter brauchen, um menschliche Aktivität zu verstehen, Unterstützung anzupassen und körperliche Aufgaben praktisch, intuitiv und zunehmend personalisiert zu unterstützen.",
      cards: [
        { title: "Mobilität", href: PURPOSE_HREFS.mobility },
        { title: "Körperliche Unterstützung", href: PURPOSE_HREFS.physical },
        { title: "Rehabilitationsunterstützung", href: PURPOSE_HREFS.rehab },
        { title: "Selbstständiges Leben", href: PURPOSE_HREFS.independent },
        { title: "Alltägliche Aufgaben", href: PURPOSE_HREFS.everyday },
        { title: "Mensch-Roboter-Interaktion", href: PURPOSE_HREFS.hri },
      ],
    },
    layers: {
      heading: "Die SAVEN-Schicht für menschliche Unterstützung",
      intro:
        "Der Wert von SAVEN beschränkt sich nicht auf den Bau mechanischer Roboter. Die Architektur wird als Intelligenzschicht für menschliche Unterstützung entworfen, die über kompatible Robotersysteme arbeiten kann.",
      items: [
        {
          title: "Wahrnehmung",
          text: "Menschen, Bewegung, Umgebung, Objekte und Kontext über kompatible Sensoren und Robotersysteme verstehen.",
        },
        {
          title: "Verständnis menschlicher Bewegung",
          text: "Bewegungsmuster und physische Interaktion interpretieren, um zu bestimmen, wann und wie Unterstützung angemessen sein kann.",
        },
        {
          title: "Assistenzintelligenz",
          text: "Software und KI, die robotische Unterstützung nach Aufgabe, Umgebung, Systemfähigkeiten und Nutzerkontext koordinieren sollen.",
        },
        {
          title: "Personalisierung",
          text: "Interaktion und Unterstützung an individuelle Vorlieben, Routinen, Fähigkeiten und zulässige Daten anpassen.",
        },
        {
          title: "Sicherheit und Kontrolle",
          text: "Menschliche Aufsicht, Betriebsgrenzen, Unterbrechungsmechanismen, Systemüberwachung und sichere Zustände in die Mensch-Roboter-Interaktion einbauen.",
        },
      ],
    },
    hardware: {
      heading: "Intelligenz jenseits eines einzelnen Roboters",
      body: "Die Zukunft der Assistenzrobotik wird nicht von einer Maschine definiert. Unterschiedliche Umgebungen und Aufgaben erfordern unterschiedliche Robotersysteme. SAVEN wird als hardwareflexibler Intelligenz- und Integrationsansatz entwickelt, der über kompatible Roboterplattformen arbeiten kann. Ein Intelligenzansatz. Mehrere Roboterformen.",
      forms: [
        "Humanoide Roboter",
        "Mobile Roboter",
        "Roboterarme",
        "Wearable Robotics",
        "Rehabilitationssysteme",
        "Zukünftige Assistenzgeräte",
      ],
      hub: "SAVEN-Intelligenz für menschliche Unterstützung",
    },
    path: {
      heading: "Von der Forschung zur Unterstützung in der realen Welt",
      stages: [
        {
          n: "01",
          title: "Forschung",
          text: "Menschliche Bedarfe, Anwendungsfälle, Interaktionsmodelle und Sicherheitsanforderungen.",
        },
        {
          n: "02",
          title: "Integration",
          text: "Sensoren, KI, Roboterplattformen und Software.",
        },
        {
          n: "03",
          title: "Prototyp",
          text: "Kontrollierte Interaktion, Bewegung, Aufgaben und Benutzeroberflächen.",
        },
        {
          n: "04",
          title: "Validierung",
          text: "Sicherheit, Nutzbarkeit, Leistung und menschliches Feedback.",
        },
        {
          n: "05",
          title: "Pilotprogramme",
          text: "Ausgewählte Umgebungen, Partner und fachliche Aufsicht.",
        },
        {
          n: "06",
          title: "Einsatz",
          text: "Definierte Anwendungen, qualifizierte Plattformen und operativer Support.",
        },
      ],
    },
    partnersPath: {
      id: "partners",
      label: "Mit SAVEN aufbauen",
      description:
        "Ihre Roboterplattform plus SAVEN-Intelligenz für menschliche Unterstützung.",
      links: [{ label: "Partner", href: "/partners/" }],
    },
  }),
  fr: extras({
    cue: "Technologie et recherche",
    conceptLabel: "Visualisation conceptuelle",
    heroCtas: {
      primary: { label: "Explorer SAVEN", href: "/technology/" },
      secondary: { label: "Devenir partenaire", href: "/partners/" },
      tertiary: {
        label: "Technologie et recherche",
        href: "/labs/saven-robotics-lab/",
      },
    },
    childrenFamilyLine:
      "Les environnements familiaux sont un champ à long terme pour une robotique centrée sur l’humain — avec supervision adulte et conception adaptée à l’âge.",
    purpose: {
      heading: "Une technologie construite autour des personnes",
      body: "La robotique passe d’environnements industriels contrôlés vers des lieux conçus pour les personnes — domiciles, environnements de rééducation, cadres de soin, lieux de travail et vie quotidienne. SAVEN se concentre sur les technologies d’intelligence et d’interaction nécessaires pour que les robots comprennent l’activité humaine, adaptent l’assistance et soutiennent des tâches physiques de manière pratique, intuitive et de plus en plus personnalisée.",
      cards: [
        { title: "Mobilité", href: PURPOSE_HREFS.mobility },
        { title: "Assistance physique", href: PURPOSE_HREFS.physical },
        { title: "Soutien à la rééducation", href: PURPOSE_HREFS.rehab },
        { title: "Vie autonome", href: PURPOSE_HREFS.independent },
        { title: "Tâches quotidiennes", href: PURPOSE_HREFS.everyday },
        { title: "Interaction humain-robot", href: PURPOSE_HREFS.hri },
      ],
    },
    layers: {
      heading: "La couche SAVEN d’assistance humaine",
      intro:
        "La valeur de SAVEN ne se limite pas à construire des robots mécaniques. L’architecture est conçue comme une couche d’intelligence d’assistance humaine pouvant fonctionner sur des systèmes robotiques compatibles.",
      items: [
        {
          title: "Perception",
          text: "Comprendre les personnes, le mouvement, l’environnement, les objets et le contexte via des capteurs et des systèmes robotiques compatibles.",
        },
        {
          title: "Compréhension du mouvement humain",
          text: "Interpréter les schémas de mouvement et l’interaction physique pour aider à déterminer quand et comment une assistance peut être appropriée.",
        },
        {
          title: "Intelligence d’assistance",
          text: "Logiciels et IA conçus pour coordonner l’assistance robotique selon la tâche, l’environnement, les capacités du système et le contexte de l’utilisateur.",
        },
        {
          title: "Personnalisation",
          text: "Adapter l’interaction et l’assistance aux préférences, routines, capacités et données autorisées de chaque personne.",
        },
        {
          title: "Sécurité et contrôle",
          text: "Intégrer la supervision humaine, des limites opérationnelles, des mécanismes d’interruption, une surveillance du système et des états de sécurité dans l’interaction humain-robot.",
        },
      ],
    },
    hardware: {
      heading: "Une intelligence au-delà d’un seul robot",
      body: "L’avenir de la robotique d’assistance ne sera pas défini par une seule machine. Des environnements et des tâches différents exigent des systèmes robotiques différents. SAVEN est développé comme une approche d’intelligence et d’intégration flexible vis-à-vis du matériel, capable de fonctionner sur des plateformes robotiques compatibles. Une approche d’intelligence. Plusieurs formes robotiques.",
      forms: [
        "Robots humanoïdes",
        "Robots mobiles",
        "Bras robotiques",
        "Robotique portable",
        "Systèmes de rééducation",
        "Futurs dispositifs d’assistance",
      ],
      hub: "Intelligence SAVEN d’assistance humaine",
    },
    path: {
      heading: "De la recherche à l’assistance réelle",
      stages: [
        {
          n: "01",
          title: "Recherche",
          text: "Besoins humains, cas d’usage, modèles d’interaction et exigences de sécurité.",
        },
        {
          n: "02",
          title: "Intégration",
          text: "Capteurs, IA, plateformes robotiques et logiciels.",
        },
        {
          n: "03",
          title: "Prototype",
          text: "Interaction contrôlée, mouvement, tâches et interfaces utilisateur.",
        },
        {
          n: "04",
          title: "Validation",
          text: "Sécurité, utilisabilité, performance et retour humain.",
        },
        {
          n: "05",
          title: "Programmes pilotes",
          text: "Environnements sélectionnés, partenaires et supervision professionnelle.",
        },
        {
          n: "06",
          title: "Déploiement",
          text: "Applications définies, plateformes qualifiées et support opérationnel.",
        },
      ],
    },
    partnersPath: {
      id: "partners",
      label: "Construire avec SAVEN",
      description:
        "Votre plateforme robotique plus l’intelligence SAVEN d’assistance humaine.",
      links: [{ label: "Partenaires", href: "/partners/" }],
    },
  }),
  ja: extras({
    cue: "技術と研究",
    conceptLabel: "コンセプト可視化",
    heroCtas: {
      primary: { label: "SAVENを見る", href: "/technology/" },
      secondary: { label: "パートナーになる", href: "/partners/" },
      tertiary: {
        label: "技術と研究",
        href: "/labs/saven-robotics-lab/",
      },
    },
    childrenFamilyLine:
      "家庭環境は、人間中心のロボティクスにとって重要な長期領域です。子どもが関わる応用には、大人の監督、年齢に応じた設計、強化された安全対策が必要です。",
    purpose: {
      heading: "人を中心に設計された技術",
      body: "ロボティクスは管理された産業環境から、家庭、リハビリテーション、ケア、職場、日常生活といった人のための場所へ移っています。SAVENは、ロボットが人の活動を理解し、支援を適応させ、実用的で直感的、より個別化された形で身体的な作業を支えるために必要な知能とインタラクション技術に焦点を当てています。",
      cards: [
        { title: "移動", href: PURPOSE_HREFS.mobility },
        { title: "身体的支援", href: PURPOSE_HREFS.physical },
        { title: "リハビリテーション支援", href: PURPOSE_HREFS.rehab },
        { title: "自立した暮らし", href: PURPOSE_HREFS.independent },
        { title: "日常の作業", href: PURPOSE_HREFS.everyday },
        { title: "人とロボットの相互作用", href: PURPOSE_HREFS.hri },
      ],
    },
    layers: {
      heading: "SAVENの人支援レイヤー",
      intro:
        "SAVENの価値は機械ロボットを作ることだけではありません。このアーキテクチャは、互換性のあるロボットシステムで機能しうる人支援インテリジェンス層として設計されています。",
      items: [
        {
          title: "知覚",
          text: "互換性のあるセンサーとロボットシステムを通じて、人・動き・周囲・物体・文脈を理解する。",
        },
        {
          title: "人の動きの理解",
          text: "動きのパターンと身体的相互作用を解釈し、いつどのように支援が適切になり得るかを判断する助けとする。",
        },
        {
          title: "支援インテリジェンス",
          text: "課題、環境、システムの能力、利用者の文脈に応じてロボット支援を協調させるためのソフトウェアとAI。",
        },
        {
          title: "パーソナライゼーション",
          text: "好み、習慣、能力、許可されたデータに合わせて相互作用と支援を適応させる。",
        },
        {
          title: "安全と制御",
          text: "人の監督、運用上の限界、中断の仕組み、監視、安全状態の振る舞いを人とロボットの相互作用に組み込む。",
        },
      ],
    },
    hardware: {
      heading: "一台のロボットを超える知能",
      body: "支援ロボティクスの未来は、一つの機械では決まりません。環境と課題が違えば、必要なロボットシステムも違います。SAVENは、互換性のあるロボットプラットフォームで機能しうる、ハードウェアに柔軟な知能と統合のアプローチとして開発されています。一つの知能アプローチ。複数のロボット形態。",
      forms: [
        "ヒューマノイドロボット",
        "移動ロボット",
        "ロボットアーム",
        "ウェアラブルロボティクス",
        "リハビリテーションシステム",
        "将来の支援デバイス",
      ],
      hub: "SAVEN人支援インテリジェンス",
    },
    path: {
      heading: "研究から実世界の支援へ",
      stages: [
        {
          n: "01",
          title: "研究",
          text: "人のニーズ、ユースケース、相互作用モデル、安全要件。",
        },
        {
          n: "02",
          title: "統合",
          text: "センサー、AI、ロボットプラットフォーム、ソフトウェア。",
        },
        {
          n: "03",
          title: "プロトタイプ",
          text: "制御された相互作用、動き、課題、ユーザーインターフェース。",
        },
        {
          n: "04",
          title: "検証",
          text: "安全、使いやすさ、性能、人からのフィードバック。",
        },
        {
          n: "05",
          title: "パイロット",
          text: "選定された環境、パートナー、専門家による監督。",
        },
        {
          n: "06",
          title: "展開",
          text: "定義された応用、適格なプラットフォーム、運用サポート。",
        },
      ],
    },
    partnersPath: {
      id: "partners",
      label: "SAVENと構築する",
      description:
        "貴社のロボットプラットフォームとSAVENの人支援インテリジェンス。",
      links: [{ label: "パートナー", href: "/partners/" }],
    },
  }),
  "zh-cn": extras({
    cue: "技术与研究",
    conceptLabel: "概念可视化",
    heroCtas: {
      primary: { label: "了解 SAVEN", href: "/technology/" },
      secondary: { label: "与我们合作", href: "/partners/" },
      tertiary: {
        label: "技术与研究",
        href: "/labs/saven-robotics-lab/",
      },
    },
    childrenFamilyLine:
      "家庭环境是以人为中心的机器人技术的长期方向。任何涉及儿童的应用都需要成人监督、适龄设计和更强的安全控制。",
    purpose: {
      heading: "围绕人而构建的技术",
      body: "机器人技术正从受控的工业环境进入为人而建的场所——家庭、康复环境、照护场景、工作场所和日常生活。SAVEN 聚焦机器人理解人类活动、调整协助并以实用、直观、日益个性化的方式支持体力任务所需的智能与交互技术。",
      cards: [
        { title: "行动能力", href: PURPOSE_HREFS.mobility },
        { title: "体力协助", href: PURPOSE_HREFS.physical },
        { title: "康复支持", href: PURPOSE_HREFS.rehab },
        { title: "独立生活", href: PURPOSE_HREFS.independent },
        { title: "日常事务", href: PURPOSE_HREFS.everyday },
        { title: "人机交互", href: PURPOSE_HREFS.hri },
      ],
    },
    layers: {
      heading: "SAVEN 人体协助层",
      intro:
        "SAVEN 的价值不限于制造机械机器人。该架构被设计为可在兼容机器人系统上工作的人体协助智能层。",
      items: [
        {
          title: "感知",
          text: "通过兼容的传感器和机器人系统理解人、运动、周围环境、物体与情境。",
        },
        {
          title: "人体运动理解",
          text: "解读运动模式与身体交互，以帮助判断何时以及如何提供协助可能是适当的。",
        },
        {
          title: "协助智能",
          text: "旨在根据任务、环境、系统能力与使用者情境协调机器人协助的软件与人工智能。",
        },
        {
          title: "个性化",
          text: "根据个人偏好、日常、能力与被允许的数据调整交互与协助。",
        },
        {
          title: "安全与控制",
          text: "将人工监督、运行边界、中断机制、系统监测与安全状态行为设计进人机交互。",
        },
      ],
    },
    hardware: {
      heading: "超越单一机器人的智能",
      body: "辅助机器人的未来不会由一台机器定义。不同环境和任务需要不同的机器人系统。SAVEN 正作为可在兼容机器人平台上工作的硬件灵活智能与集成方法而开发。一种智能方法。多种机器人形态。",
      forms: [
        "人形机器人",
        "移动机器人",
        "机械臂",
        "可穿戴机器人",
        "康复系统",
        "未来辅助设备",
      ],
      hub: "SAVEN 人体协助智能",
    },
    path: {
      heading: "从研究到现实世界的协助",
      stages: [
        {
          n: "01",
          title: "研究",
          text: "人的需求、使用场景、交互模型与安全要求。",
        },
        {
          n: "02",
          title: "集成",
          text: "传感器、人工智能、机器人平台与软件。",
        },
        {
          n: "03",
          title: "原型",
          text: "受控交互、运动、任务与用户界面。",
        },
        {
          n: "04",
          title: "验证",
          text: "安全、可用性、性能与人的反馈。",
        },
        {
          n: "05",
          title: "试点项目",
          text: "选定环境、合作方与专业监督。",
        },
        {
          n: "06",
          title: "部署",
          text: "明确的应用、合格平台与运行支持。",
        },
      ],
    },
    partnersPath: {
      id: "partners",
      label: "与 SAVEN 共建",
      description: "您的机器人平台加上 SAVEN 人体协助智能。",
      links: [{ label: "合作伙伴", href: "/partners/" }],
    },
  }),
  ar: extras({
    cue: "التقنية والبحث",
    conceptLabel: "تصور مفاهيمي",
    heroCtas: {
      primary: { label: "استكشف SAVEN", href: "/technology/" },
      secondary: { label: "شارك معنا", href: "/partners/" },
      tertiary: {
        label: "التقنية والبحث",
        href: "/labs/saven-robotics-lab/",
      },
    },
    childrenFamilyLine:
      "البيئات العائلية مجال طويل الأمد للروبوتات المتمحورة حول الإنسان — مع إشراف بالغ وتصميم مناسب للعمر.",
    purpose: {
      heading: "تقنية تُبنى حول الناس",
      body: "تنتقل الروبوتات من البيئات الصناعية المنضبطة إلى أماكن صُممت للناس — المنازل وبيئات إعادة التأهيل وأماكن الرعاية وأماكن العمل والحياة اليومية. تركّز SAVEN على تقنيات الذكاء والتفاعل اللازمة ليفهم الروبوت النشاط البشري ويكيف المساعدة ويدعم المهام الجسدية بطريقة عملية وبديهية وأكثر تخصيصًا.",
      cards: [
        { title: "الحركة", href: PURPOSE_HREFS.mobility },
        { title: "المساعدة الجسدية", href: PURPOSE_HREFS.physical },
        { title: "دعم إعادة التأهيل", href: PURPOSE_HREFS.rehab },
        { title: "العيش المستقل", href: PURPOSE_HREFS.independent },
        { title: "المهام اليومية", href: PURPOSE_HREFS.everyday },
        { title: "التفاعل بين الإنسان والروبوت", href: PURPOSE_HREFS.hri },
      ],
    },
    layers: {
      heading: "طبقة SAVEN للمساعدة الإنسانية",
      intro:
        "لا تقتصر قيمة SAVEN على بناء روبوتات ميكانيكية. تُصمم العمارة كطبقة ذكاء للمساعدة الإنسانية يمكن أن تعمل عبر أنظمة روبوتية متوافقة.",
      items: [
        {
          title: "الإدراك",
          text: "فهم الناس والحركة والمحيط والأشياء والسياق عبر مستشعرات وأنظمة روبوتية متوافقة.",
        },
        {
          title: "فهم حركة الإنسان",
          text: "تفسير أنماط الحركة والتفاعل الجسدي للمساعدة في تحديد متى وكيف قد تكون المساعدة مناسبة.",
        },
        {
          title: "ذكاء المساعدة",
          text: "برمجيات وذكاء اصطناعي مصممان لتنسيق المساعدة الروبوتية وفق المهمة والبيئة وقدرات النظام وسياق المستخدم.",
        },
        {
          title: "التخصيص",
          text: "تكييف التفاعل والمساعدة مع التفضيلات والروتين والقدرات والبيانات المسموح بها لكل شخص.",
        },
        {
          title: "السلامة والتحكم",
          text: "تصميم الإشراف البشري والحدود التشغيلية وآليات المقاطعة ومراقبة النظام وسلوكيات الحالة الآمنة في تفاعل الإنسان والروبوت.",
        },
      ],
    },
    hardware: {
      heading: "ذكاء يتجاوز روبوتًا واحدًا",
      body: "لن يُحدد مستقبل روبوتات المساعدة بجهاز واحد. تتطلب البيئات والمهام المختلفة أنظمة روبوتية مختلفة. تُطوَّر SAVEN كمنهج ذكاء وتكامل مرن في العتاد قادر على العمل عبر منصات روبوتية متوافقة. منهج ذكاء واحد. أشكال روبوتية متعددة.",
      forms: [
        "روبوتات شبيهة بالإنسان",
        "روبوتات متنقلة",
        "أذرع روبوتية",
        "روبوتات قابلة للارتداء",
        "أنظمة إعادة التأهيل",
        "أجهزة مساعدة مستقبلية",
      ],
      hub: "ذكاء SAVEN للمساعدة الإنسانية",
    },
    path: {
      heading: "من البحث إلى المساعدة في العالم الحقيقي",
      stages: [
        {
          n: "01",
          title: "بحث",
          text: "احتياجات الإنسان وحالات الاستخدام ونماذج التفاعل ومتطلبات السلامة.",
        },
        {
          n: "02",
          title: "تكامل",
          text: "مستشعرات وذكاء اصطناعي ومنصات روبوتية وبرمجيات.",
        },
        {
          n: "03",
          title: "نموذج أولي",
          text: "تفاعل مضبوط وحركة ومهام وواجهات مستخدم.",
        },
        {
          n: "04",
          title: "تحقق",
          text: "السلامة وسهولة الاستخدام والأداء وملاحظات الإنسان.",
        },
        {
          n: "05",
          title: "برامج تجريبية",
          text: "بيئات مختارة وشركاء وإشراف مهني.",
        },
        {
          n: "06",
          title: "نشر",
          text: "تطبيقات محددة ومنصات مؤهلة ودعم تشغيلي.",
        },
      ],
    },
    partnersPath: {
      id: "partners",
      label: "ابنِ مع SAVEN",
      description: "منصتكم الروبوتية مع ذكاء SAVEN للمساعدة الإنسانية.",
      links: [{ label: "الشركاء", href: "/partners/" }],
    },
  }),
  he: extras({
    cue: "טכנולוגיה ומחקר",
    conceptLabel: "המחשה מושגית",
    heroCtas: {
      primary: { label: "לגלות את SAVEN", href: "/technology/" },
      secondary: { label: "לשתף פעולה", href: "/partners/" },
      tertiary: {
        label: "טכנולוגיה ומחקר",
        href: "/labs/saven-robotics-lab/",
      },
    },
    childrenFamilyLine:
      "סביבות משפחתיות הן תחום ארוך טווח לרובוטיקה ממוקדת אדם — עם פיקוח מבוגר ועיצוב המתאים לגיל.",
    purpose: {
      heading: "טכנולוגיה שנבנית סביב אנשים",
      body: "הרובוטיקה עוברת מסביבות תעשייתיות מבוקרות למקומות שנבנו עבור אנשים — בתים, סביבות שיקום, מסגרות טיפול, מקומות עבודה וחיי היומיום. SAVEN מתמקדת בטכנולוגיות האינטליגנציה והאינטראקציה הנדרשות לרובוטים כדי להבין פעילות אנושית, להתאים סיוע ולתמוך במשימות פיזיות באופן מעשי, אינטואיטיבי ויותר ויותר מותאם אישית.",
      cards: [
        { title: "ניידות", href: PURPOSE_HREFS.mobility },
        { title: "סיוע פיזי", href: PURPOSE_HREFS.physical },
        { title: "תמיכה בשיקום", href: PURPOSE_HREFS.rehab },
        { title: "חיים עצמאיים", href: PURPOSE_HREFS.independent },
        { title: "משימות יומיומיות", href: PURPOSE_HREFS.everyday },
        { title: "אינטראקציה אדם-רובוט", href: PURPOSE_HREFS.hri },
      ],
    },
    layers: {
      heading: "שכבת הסיוע האנושי של SAVEN",
      intro:
        "הערך של SAVEN אינו מוגבל לבניית רובוטים מכניים. הארכיטקטורה מתוכננת כשכבת אינטליגנציה לסיוע אנושי שיכולה לפעול במערכות רובוטיות תואמות.",
      items: [
        {
          title: "תפיסה",
          text: "הבנת אנשים, תנועה, סביבה, עצמים והקשר באמצעות חיישנים ומערכות רובוטיות תואמות.",
        },
        {
          title: "הבנת תנועה אנושית",
          text: "פירוש דפוסי תנועה ואינטראקציה פיזית כדי לסייע לקבוע מתי וכיצד סיוע עשוי להיות מתאים.",
        },
        {
          title: "אינטליגנציית סיוע",
          text: "תוכנה ובינה מלאכותית שנועדו לתאם סיוע רובוטי לפי המשימה, הסביבה, יכולות המערכת והקשר המשתמש.",
        },
        {
          title: "התאמה אישית",
          text: "התאמת האינטראקציה והסיוע להעדפות, שגרות, יכולות ונתונים מותרים של כל אדם.",
        },
        {
          title: "בטיחות ובקרה",
          text: "שילוב פיקוח אנושי, גבולות תפעול, מנגנוני הפסקה, ניטור מערכת והתנהגויות מצב בטוח באינטראקציה אדם-רובוט.",
        },
      ],
    },
    hardware: {
      heading: "אינטליגנציה מעבר לרובוט אחד",
      body: "עתיד הרובוטיקה המסייעת לא יוגדר על ידי מכונה אחת. סביבות ומשימות שונות דורשות מערכות רובוטיות שונות. SAVEN מפותחת כגישת אינטליגנציה ואינטגרציה גמישה לחומרה, המסוגלת לפעול בפלטפורמות רובוטיות תואמות. גישת אינטליגנציה אחת. צורות רובוטיות רבות.",
      forms: [
        "רובוטים דמויי אדם",
        "רובוטים ניידים",
        "זרועות רובוטיות",
        "רובוטיקה לבישה",
        "מערכות שיקום",
        "התקני סיוע עתידיים",
      ],
      hub: "אינטליגנציית הסיוע האנושי של SAVEN",
    },
    path: {
      heading: "ממחקר לסיוע בעולם האמיתי",
      stages: [
        {
          n: "01",
          title: "מחקר",
          text: "צרכים אנושיים, מקרי שימוש, מודלי אינטראקציה ודרישות בטיחות.",
        },
        {
          n: "02",
          title: "אינטגרציה",
          text: "חיישנים, בינה מלאכותית, פלטפורמות רובוטיקה ותוכנה.",
        },
        {
          n: "03",
          title: "אב טיפוס",
          text: "אינטראקציה מבוקרת, תנועה, משימות וממשקי משתמש.",
        },
        {
          n: "04",
          title: "תיקוף",
          text: "בטיחות, שימושיות, ביצועים ומשוב אנושי.",
        },
        {
          n: "05",
          title: "תוכניות פיילוט",
          text: "סביבות נבחרות, שותפים ופיקוח מקצועי.",
        },
        {
          n: "06",
          title: "פריסה",
          text: "יישומים מוגדרים, פלטפורמות מתאימות ותמיכה תפעולית.",
        },
      ],
    },
    partnersPath: {
      id: "partners",
      label: "לבנות עם SAVEN",
      description: "פלטפורמת הרובוטיקה שלכם ועוד אינטליגנציית הסיוע האנושי של SAVEN.",
      links: [{ label: "שותפים", href: "/partners/" }],
    },
  }),
  uk: extras({
    cue: "Технології та дослідження",
    conceptLabel: "Концептуальна візуалізація",
    heroCtas: {
      primary: { label: "Дослідити SAVEN", href: "/technology/" },
      secondary: { label: "Стати партнером", href: "/partners/" },
      tertiary: {
        label: "Технології та дослідження",
        href: "/labs/saven-robotics-lab/",
      },
    },
    childrenFamilyLine:
      "Сімейне середовище — важливий довгостроковий напрям людиноцентричної робототехніки. Застосування за участю дітей потребують нагляду дорослих і дизайну відповідно до віку.",
    purpose: {
      heading: "Технологія, побудована навколо людей",
      body: "Робототехніка переходить із контрольованих промислових середовищ у місця, створені для людей — домівки, реабілітаційні простори, середовища догляду, робочі місця та повсякденне життя. SAVEN зосереджується на технологіях інтелекту й взаємодії, потрібних роботам, щоб розуміти людську активність, адаптувати допомогу й підтримувати фізичні завдання практично, інтуїтивно й дедалі персоналізованіше.",
      cards: [
        { title: "Мобільність", href: PURPOSE_HREFS.mobility },
        { title: "Фізична допомога", href: PURPOSE_HREFS.physical },
        { title: "Підтримка реабілітації", href: PURPOSE_HREFS.rehab },
        { title: "Самостійне життя", href: PURPOSE_HREFS.independent },
        { title: "Повсякденні справи", href: PURPOSE_HREFS.everyday },
        { title: "Взаємодія людини й робота", href: PURPOSE_HREFS.hri },
      ],
    },
    layers: {
      heading: "Шар людської допомоги SAVEN",
      intro:
        "Цінність SAVEN не обмежується створенням механічних роботів. Архітектура розробляється як шар інтелекту людської допомоги, здатний працювати на сумісних робототехнічних системах.",
      items: [
        {
          title: "Сприйняття",
          text: "Розуміння людей, руху, оточення, об’єктів і контексту через сумісні сенсори та робототехнічні системи.",
        },
        {
          title: "Розуміння людського руху",
          text: "Інтерпретація рухових патернів і фізичної взаємодії, щоб допомогти визначити, коли і як допомога може бути доречною.",
        },
        {
          title: "Інтелект допомоги",
          text: "Програмне забезпечення та ШІ, розроблені для координації робототехнічної допомоги відповідно до завдання, середовища, можливостей системи та контексту користувача.",
        },
        {
          title: "Персоналізація",
          text: "Адаптація взаємодії й допомоги до вподобань, ритмів, можливостей і дозволених даних кожної людини.",
        },
        {
          title: "Безпека і контроль",
          text: "Вбудовування людського нагляду, операційних меж, механізмів переривання, моніторингу системи та безпечних станів у взаємодію людини й робота.",
        },
      ],
    },
    hardware: {
      heading: "Інтелект поза межами одного робота",
      body: "Майбутнє допоміжної робототехніки не визначить одна машина. Різні середовища й завдання потребують різних робототехнічних систем. SAVEN розробляється як апаратно-гнучкий підхід інтелекту й інтеграції, здатний працювати на сумісних робототехнічних платформах. Один підхід інтелекту. Багато робототехнічних форм.",
      forms: [
        "Гуманоїдні роботи",
        "Мобільні роботи",
        "Роботизовані руки",
        "Носима робототехніка",
        "Реабілітаційні системи",
        "Майбутні допоміжні пристрої",
      ],
      hub: "Інтелект людської допомоги SAVEN",
    },
    path: {
      heading: "Від досліджень до допомоги в реальному світі",
      stages: [
        {
          n: "01",
          title: "Дослідження",
          text: "Людські потреби, сценарії використання, моделі взаємодії та вимоги безпеки.",
        },
        {
          n: "02",
          title: "Інтеграція",
          text: "Сенсори, ШІ, робототехнічні платформи та програмне забезпечення.",
        },
        {
          n: "03",
          title: "Прототип",
          text: "Контрольована взаємодія, рух, завдання та інтерфейси користувача.",
        },
        {
          n: "04",
          title: "Валідація",
          text: "Безпека, зручність, продуктивність і людський зворотний зв’язок.",
        },
        {
          n: "05",
          title: "Пілотні програми",
          text: "Вибрані середовища, партнери та професійний нагляд.",
        },
        {
          n: "06",
          title: "Розгортання",
          text: "Визначені застосування, кваліфіковані платформи та операційна підтримка.",
        },
      ],
    },
    partnersPath: {
      id: "partners",
      label: "Будувати з SAVEN",
      description:
        "Ваша робототехнічна платформа плюс інтелект людської допомоги SAVEN.",
      links: [{ label: "Партнерам", href: "/partners/" }],
    },
  }),
  ru: extras({
    cue: "Технологии и исследования",
    conceptLabel: "Концептуальная визуализация",
    heroCtas: {
      primary: { label: "Изучить SAVEN", href: "/technology/" },
      secondary: { label: "Стать партнёром", href: "/partners/" },
      tertiary: {
        label: "Технологии и исследования",
        href: "/labs/saven-robotics-lab/",
      },
    },
    childrenFamilyLine:
      "Семейная среда — важное долгосрочное направление человекоцентричной робототехники. Любые применения с участием детей требуют присмотра взрослых, возрастного дизайна и усиленных мер безопасности.",
    purpose: {
      heading: "Технология, построенная вокруг людей",
      body: "Робототехника выходит из контролируемых промышленных сред в места, созданные для людей — дома, реабилитационные пространства, среды ухода, рабочие места и повседневную жизнь. SAVEN сосредоточен на интеллекте и технологиях взаимодействия, которые нужны роботам, чтобы понимать человеческую активность, адаптировать помощь и поддерживать физические задачи практично, интуитивно и всё более персонализированно.",
      cards: [
        { title: "Мобильность", href: PURPOSE_HREFS.mobility },
        { title: "Физическая помощь", href: PURPOSE_HREFS.physical },
        { title: "Поддержка реабилитации", href: PURPOSE_HREFS.rehab },
        { title: "Самостоятельная жизнь", href: PURPOSE_HREFS.independent },
        { title: "Повседневные задачи", href: PURPOSE_HREFS.everyday },
        { title: "Взаимодействие человека и робота", href: PURPOSE_HREFS.hri },
      ],
    },
    layers: {
      heading: "Слой человеческой помощи SAVEN",
      intro:
        "Ценность SAVEN не ограничивается созданием механических роботов. Архитектура разрабатывается как слой интеллекта человеческой помощи, способный работать на совместимых робототехнических системах.",
      items: [
        {
          title: "Восприятие",
          text: "Понимание людей, движения, окружения, объектов и контекста через совместимые датчики и робототехнические системы.",
        },
        {
          title: "Понимание человеческого движения",
          text: "Интерпретация двигательных паттернов и физического взаимодействия, чтобы помочь определить, когда и как помощь может быть уместна.",
        },
        {
          title: "Интеллект помощи",
          text: "Программное обеспечение и ИИ, предназначенные координировать робототехническую помощь в соответствии с задачей, средой, возможностями системы и контекстом пользователя.",
        },
        {
          title: "Персонализация",
          text: "Адаптация взаимодействия и помощи к предпочтениям, ритмам, возможностям и разрешённым данным каждого человека.",
        },
        {
          title: "Безопасность и управление",
          text: "Встраивание человеческого надзора, операционных границ, механизмов прерывания, мониторинга системы и безопасных состояний во взаимодействие человека и робота.",
        },
      ],
    },
    hardware: {
      heading: "Интеллект за пределами одного робота",
      body: "Будущее вспомогательной робототехники не определит одна машина. Разные среды и задачи требуют разных робототехнических систем. SAVEN разрабатывается как аппаратно-гибкий подход интеллекта и интеграции, способный работать на совместимых робототехнических платформах. Один подход интеллекта. Несколько робототехнических форм.",
      forms: [
        "Гуманоидные роботы",
        "Мобильные роботы",
        "Роботизированные манипуляторы",
        "Носимая робототехника",
        "Реабилитационные системы",
        "Будущие вспомогательные устройства",
      ],
      hub: "Интеллект человеческой помощи SAVEN",
    },
    path: {
      heading: "От исследований к помощи в реальном мире",
      stages: [
        {
          n: "01",
          title: "Исследования",
          text: "Человеческие потребности, сценарии использования, модели взаимодействия и требования безопасности.",
        },
        {
          n: "02",
          title: "Интеграция",
          text: "Датчики, ИИ, робототехнические платформы и программное обеспечение.",
        },
        {
          n: "03",
          title: "Прототип",
          text: "Контролируемое взаимодействие, движение, задачи и пользовательские интерфейсы.",
        },
        {
          n: "04",
          title: "Валидация",
          text: "Безопасность, удобство, производительность и человеческая обратная связь.",
        },
        {
          n: "05",
          title: "Пилотные программы",
          text: "Выбранные среды, партнёры и профессиональный надзор.",
        },
        {
          n: "06",
          title: "Развёртывание",
          text: "Определённые применения, квалифицированные платформы и операционная поддержка.",
        },
      ],
    },
    partnersPath: {
      id: "partners",
      label: "Строить вместе с SAVEN",
      description:
        "Ваша робототехническая платформа плюс интеллект человеческой помощи SAVEN.",
      links: [{ label: "Партнёрам", href: "/partners/" }],
    },
  }),
};
