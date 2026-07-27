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
  },
  flagships: {
    headline: "方向所指之处",
    support:
      "简要了解正朝这一愿景推进的旗舰工作线——每一项均以其真实的当前状态呈现。",
    items: [
      {
        label: "SAVEN Robotics Lab",
        href: "/labs/saven-robotics-lab/",
        status: "开发中",
        note: "辅助机器人系统——移动、机械臂与感知。",
      },
      {
        label: "SAVEN Robotics Interface",
        href: "/systems/saven-robotics-interface/",
        status: "开发中",
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
  },
};
