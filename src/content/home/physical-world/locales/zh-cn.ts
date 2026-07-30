import type { PhysicalWorldHomeContent } from "@/content/home/physical-world/types";

/** Simplified Chinese Layer-1 homepage body — Physical World home. */
export const physicalWorldHomeZhCn: PhysicalWorldHomeContent = {
  brand: "SAVEN Core",
  heroLine: "面向物理世界的智能。",
  oneBreath:
    "我们运用并改进能在真实世界中运作的人工智能与机器人技术 — 让机器在人的控制下感知、移动并提供协助。",
  builds: ["人工智能", "机器人技术", "自主系统"],
  buildsLabel: "我们构建什么",
  tagline: "把智能转化为对人的关怀",
  cue: "可在页脚探索 Labs、Interface、Technology 等内容。",
  living: {
    headline: "关怀发生在生活所在之处。",
    support:
      "智能系统协助人们的愿景 — 在医院、家中以及凡需要关怀之处 — 并始终处于人的控制之下。",
    scenes: [
      {
        id: "hospital-care",
        label: "医院照护",
        line: "临床人员、患者与辅助系统在照护时刻中协作。",
      },
      {
        id: "home-care",
        label: "居家照护",
        line: "在生活发生的地方为长者提供日常支持。",
      },
      {
        id: "children-family",
        label: "儿童与家庭",
        line: "在爱他们的人照护下提供温和的帮助。",
      },
      {
        id: "emergency",
        label: "应急",
        line: "当每一分钟都很重要时，更快、更清晰支持的愿景。",
      },
      {
        id: "surgical",
        label: "手术支持",
        line: "手术室中的协助 — 工具伴随娴熟的人手。",
      },
      {
        id: "rural-remote",
        label: "乡村与偏远",
        line: "能延伸到距诊所更远之处的照护。",
      },
      {
        id: "mental-health",
        label: "心理健康",
        line: "尊重尊严与人的引导的安静支持。",
      },
      {
        id: "disaster-relief",
        label: "灾害救援",
        line: "当地面发生变化时，可帮助人们协调的系统。",
      },
    ],
    railLabel: "照护场景",
    deepenLabel: "SAVEN Robotics Lab",
    deepenHref: "/labs/saven-robotics-lab/",
    whyLabel: "为什么这是 SAVEN",
    whyLine:
      "旨在在真实场所协助人的系统——在人的掌控下，而非替代照护。",
  },
  clarity: {
    definition: {
      heading: "什么是 SAVEN",
      body: "SAVEN Core 构建将人类理解与现实世界中的机器人与设备相连的系统——在人的掌控下。AI 是我们为此使用并推进的工具；创造 AI 不是目的。",
    },
    biomathBridge: {
      eyebrow: "我们是谁",
      title: "BioMath Core → SAVEN",
      body: "BioMath Core 是人的数据模型的根基——持续汇集并结构化经授权的人类数据，并形成在人类控制下塑造 SAVEN 下一层行动的报告与结论。状态仍为 Architecture。",
      scopeLine: "模型覆盖：20 个类别 · 200+ 项服务——非 Operational 目录。",
      href: "/foundation/biomath-core/",
      cta: "探索 BioMath Core",
      logoAlt: "BioMath Core",
    },
    chain: {
      heading: "从理解到协助",
      ariaLabel: "从人类理解到物理协助的三步",
      steps: [
        {
          label: "人类理解",
          href: "/purpose/",
          cta: "使命",
        },
        {
          label: "SAVEN",
          href: "/systems/saven-robotics-interface/",
          cta: "机器人接口",
        },
        {
          label: "物理协助",
          href: "/applications/",
          cta: "应用",
        },
      ],
    },
    exploreStrip: {
      heading: "探索 SAVEN",
      support:
        "架构的五根支柱——同一张地图在下方收束带中继续。",
    },
    audience: {
      heading: "您想从哪里开始？",
      support:
        "三条清晰路径——照护与使命、技术与系统，或长期投资姿态。",
      paths: [
        {
          id: "care",
          label: "照护与使命",
          description:
            "了解 SAVEN 为何存在，以及协助应在何处帮助人们。",
          links: [
            { label: "使命", href: "/purpose/" },
            { label: "应用", href: "/applications/" },
          ],
        },
        {
          id: "technology",
          label: "技术与系统",
          description:
            "查看将智能连接到物理行动的实验室、接口与架构。",
          links: [
            { label: "技术", href: "/technology/" },
            { label: "实验室", href: "/labs/" },
            {
              label: "机器人接口",
              href: "/systems/saven-robotics-interface/",
            },
            { label: "系统", href: "/systems/" },
          ],
        },
        {
          id: "investors",
          label: "投资者",
          description:
            "长期、使命对齐的资本姿态——诚实状态，无虚构指标。",
          links: [{ label: "投资者", href: "/investors/" }],
        },
      ],
    },
    not: {
      heading: "我们不是什么",
      points: [
        "我们的存在不是为了创造 AI——AI 是我们为人类支持而使用并推进的工具。",
        "我们不会通过本网站诊断医疗状况。",
        "我们不开方也不销售药品。",
      ],
    },
  },
  flagships: {
    columns: {
      workstream: "工作流",
      status: "状态",
      note: "重点",
    },
    headline: "方向所指之处",
    support:
      "简要了解正朝这一愿景推进的旗舰工作线——每一项均以其真实的当前状态呈现。",
    items: [
      {
        label: "SAVEN Robotics Lab",
        href: "/labs/saven-robotics-lab/",
        status: "架构",
        note: "辅助机器人系统——移动、机械臂与感知。",
      },
      {
        label: "SAVEN Robotics Interface",
        href: "/systems/saven-robotics-interface/",
        status: "架构",
        note: "共享的通信与控制，让人始终掌握主导权。",
      },
      {
        label: "Internal Future Lab",
        href: "/labs/internal-future-lab/",
        status: "研究",
        note: "对当前架构之外概念的早期探索。",
      },
      {
        label: "投资者",
        href: "/investors/",
        status: "架构",
        note: "面向与使命一致的长期资本的结构性立场。",
      },
    ],
  },
  closing: {
    heading: "SAVEN",
    pillars: "Support · Action · Verification · Environment · Network",
    tagline: "One Intelligence. Many Bodies. Real-World Action.",
    alt: "SAVEN 标识与支柱：Support、Action、Verification、Environment 与 Network。标语：One Intelligence. Many Bodies. Real-World Action.",
    exploreLabel: "探索 SAVEN",
    exploreHint:
      "悬停或聚焦支柱以了解含义——然后在站点中深入了解。",
    goDeeper: "深入了解",
    wordmarkLabel: "SAVEN",
    corners: {
      navLabel: "收束区导航",
      moreLabel: '更多链接',
      left: [
        { label: "宗旨", href: "/purpose/" },
        { label: "实验室", href: "/labs/" },
        { label: "人的数据模型", href: "/technology/human-data-model/" },
        { label: "机器人技术", href: "/technology/robotics/" },
        { label: "自动化", href: "/technology/automation/" },
        { label: "互操作性", href: "/technology/interoperability/" },
      ],
      right: [
        { label: "知识引擎", href: "/systems/knowledge-engine/" },
        { label: "机器人层", href: "/systems/robotics-layer/" },
        { label: "机器人接口", href: "/systems/saven-robotics-interface/" },
        { label: "Internal Future Lab", href: "/labs/internal-future-lab/" },
        { label: "信任", href: "/trust/" },
        { label: "联系我们", href: "/contact/" },
        { label: "常见问题", href: "/faq/" },
      ],
    },
    map: [
      {
        id: "support",
        label: "Support",
        meaning:
          "人文关怀优先——在生活发生之处帮助人们的宗旨。",
        href: "/purpose/",
        cta: "宗旨",
      },
      {
        id: "action",
        label: "Action",
        meaning:
          "在人的指挥下，让机器在物理世界采取行动的指挥与控制。",
        href: "/systems/saven-robotics-interface/",
        cta: "机器人接口",
      },
      {
        id: "verification",
        label: "Verification",
        meaning:
          "在任何自主主张之前，先有安全、信任与人工监督。",
        href: "/trust/human-oversight/",
        cta: "人工监督",
      },
      {
        id: "environment",
        label: "Environment",
        meaning:
          "物理世界中的应用场景——医院、家庭及其他场所。",
        href: "/applications/",
        cta: "应用",
      },
      {
        id: "network",
        label: "Network",
        meaning:
          "将智能连接至多种形体的系统架构。",
        href: "/systems/",
        cta: "系统",
      },
    ],
  },
};
