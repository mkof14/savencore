import type { PhysicalWorldHomeContent } from "@/content/home/physical-world/types";

/** Japanese Layer-1 homepage body — Physical World home. */
export const physicalWorldHomeJa: PhysicalWorldHomeContent = {
  brand: "SAVEN Core",
  heroLine: "物理世界のための知能。",
  oneBreath:
    "私たちは現実世界で働くロボティクスとともに AI を活用・洗練します — 機械が人の制御のもとで感知し、動き、支援できるように。",
  builds: ["人工知能", "ロボティクス", "自律システム"],
  buildsLabel: "私たちがつくるもの",
  tagline: "知能を人のケアへつなぐ",
  cue: "Labs、Interface、Technology などはフッターからご覧ください。",
  living: {
    headline: "暮らしの場で届くケア。",
    support:
      "病院でも家庭でも、ケアが必要な場所で人を支える知的システム — 人の制御のもとでのビジョンです。",
    scenes: [
      {
        id: "hospital-care",
        label: "病院ケア",
        line: "ケアの瞬間における臨床家、患者、支援システム。",
      },
      {
        id: "home-care",
        label: "在宅ケア",
        line: "暮らしの場での高齢者への日常的な支援。",
      },
      {
        id: "children-family",
        label: "子どもと家族",
        line: "愛する人のケアのもとでのやさしい助け。",
      },
      {
        id: "emergency",
        label: "救急",
        line: "一分一秒が重要なとき、より速く明確な支援のビジョン。",
      },
      {
        id: "surgical",
        label: "手術支援",
        line: "手術室での支援 — 熟練した人の手のそばにある道具。",
      },
      {
        id: "rural-remote",
        label: "地方・遠隔",
        line: "診療所から離れた場所にも届きうるケア。",
      },
      {
        id: "mental-health",
        label: "メンタルヘルス",
        line: "尊厳と人の導きを尊重する静かで丁寧な支援。",
      },
      {
        id: "disaster-relief",
        label: "災害支援",
        line: "状況が揺らぐとき、人々の連携を助けうるシステム。",
      },
    ],
    railLabel: "ケアの場面",
    deepenLabel: "SAVEN Robotics Lab",
    deepenHref: "/labs/saven-robotics-lab/",
  },
  flagships: {
    columns: {
      workstream: "ワークストリーム",
      status: "状況",
      note: "焦点",
    },
    headline: "方向性が向かう先",
    support:
      "そのビジョンに向けて構築を進めるフラッグシップの取り組みを簡単にご紹介します — それぞれ現在の正直な状況で表示しています。",
    items: [
      {
        label: "SAVEN Robotics Lab",
        href: "/labs/saven-robotics-lab/",
        status: "開発中",
        note: "支援ロボットシステム — 移動、マニピュレーター、知覚。",
      },
      {
        label: "SAVEN Robotics Interface",
        href: "/systems/saven-robotics-interface/",
        status: "開発中",
        note: "人が指揮を保つための共有の通信・制御。",
      },
      {
        label: "Internal Future Lab",
        href: "/labs/internal-future-lab/",
        status: "研究",
        note: "現在のアーキテクチャを超えた概念の初期探索。",
      },
      {
        label: "投資家の皆様へ",
        href: "/investors/",
        status: "アーキテクチャ",
        note: "使命に沿った長期志向の資本のための構造的な姿勢。",
      },
    ],
  },
  closing: {
    heading: "SAVEN",
    pillars: "Support · Action · Verification · Environment · Network",
    tagline: "One Intelligence. Many Bodies. Real-World Action.",
    alt: "SAVENのロゴと柱：Support、Action、Verification、Environment、Network。タグライン：One Intelligence. Many Bodies. Real-World Action.",
    exploreLabel: "SAVENを探る",
    exploreHint:
      "柱にカーソルを合わせるかフォーカスして意味を確認し、サイトでさらに深掘りできます。",
    goDeeper: "さらに見る",
    map: [
      {
        id: "support",
        label: "Support",
        meaning:
          "人へのケアが最優先 — 生活の場で人を支える目的です。",
        href: "/purpose/",
        cta: "目的",
      },
      {
        id: "action",
        label: "Action",
        meaning:
          "人が指揮する下で、機械が物理世界で動けるための指令と制御。",
        href: "/systems/saven-robotics-interface/",
        cta: "ロボティクス・インターフェース",
      },
      {
        id: "verification",
        label: "Verification",
        meaning:
          "自律を主張する前に、安全・信頼・人の監督。",
        href: "/trust/human-oversight/",
        cta: "人の監督",
      },
      {
        id: "environment",
        label: "Environment",
        meaning:
          "物理世界の応用文脈 — 病院、家庭、そしてその先。",
        href: "/applications/",
        cta: "応用",
      },
      {
        id: "network",
        label: "Network",
        meaning:
          "知性を多くの身体につなぐ接続システム・アーキテクチャ。",
        href: "/systems/",
        cta: "システム",
      },
    ],
  },
};
