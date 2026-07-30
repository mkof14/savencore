import type { HomeContent } from "@/content/home/types";
import {
  applicationsNavChildren,
  systemsNavChildren,
  technologyNavChildren,
  trustNavChildren,
} from "@/navigation/site-navigation";

export const homeContentAr: HomeContent = {
  hero: {
    brand: "SAVEN Core",
    sentence: "أنظمة ذكية صُممت لدعم الحياة البشرية.",
    explanation:
      "نصمّم أنظمة تساعد الناس في المستشفيات والمنازل والحياة اليومية — بعناية وحدود واضحة.",
    status:
      "هندسة وأنظمة ومبادئ تتمحور حول الإنسان للمساعدة المسؤولة.",
  },
  architectureChain: [
    { id: "human", label: "الناس" },
    { id: "human-data", label: "بيانات الإنسان", href: "/technology/human-data/" },
    {
      id: "human-data-model",
      label: "نموذج بيانات الإنسان",
      href: "/technology/human-data-model/",
    },
    { id: "technology", label: "التقنية", href: "/technology/" },
    { id: "systems", label: "الأنظمة", href: "/systems/" },
    { id: "applications", label: "التطبيقات", href: "/applications/" },
    { id: "trust", label: "الثقة", href: "/trust/" },
  ],
  explorerDomains: [
    {
      id: "technology",
      title: "التقنية",
      purpose: "اللبنات الأساسية المستخدمة لبناء أنظمة SAVEN Core.",
      href: "/technology/",
      pageIds: technologyNavChildren.map((item) => item.id),
      relationships: "تدعم الأنظمة بمسارات البيانات والأساليب التقنية.",
    },
    {
      id: "systems",
      title: "الأنظمة",
      purpose: "أجزاء تعمل معًا ضمن أدوار وحدود واضحة.",
      href: "/systems/",
      pageIds: systemsNavChildren.map((item) => item.id),
      relationships: "تستخدم التقنية وتدعم التطبيقات ضمن حدود الثقة.",
    },
    {
      id: "applications",
      title: "التطبيقات",
      purpose: "المواضع التي يُقصد من SAVEN Core أن يدعم فيها الناس والأماكن.",
      href: "/applications/",
      pageIds: applicationsNavChildren.map((item) => item.id),
      relationships: "تعتمد على الأنظمة وتبقى ضمن حدود الثقة.",
    },
    {
      id: "trust",
      title: "الثقة",
      purpose: "الالتزامات والإشراف والمساءلة والحدود.",
      href: "/trust/",
      pageIds: trustNavChildren.map((item) => item.id),
      relationships: "تضع حدودًا للتقنية والأنظمة والتطبيقات.",
    },
  ],
  domainMapSteps: [
    { id: "technology", label: "التقنية", href: "/technology/", dependency: "يبني" },
    { id: "systems", label: "الأنظمة", href: "/systems/", dependency: "ينسّق" },
    { id: "applications", label: "التطبيقات", href: "/applications/", dependency: "يخدم" },
    { id: "trust", label: "الثقة", href: "/trust/", dependency: "يضبط" },
  ],
  platformStatus: [
    { id: "technology", label: "التقنية", stateKey: "complete", complete: true },
    { id: "systems", label: "الأنظمة", stateKey: "complete", complete: true },
    { id: "applications", label: "التطبيقات", stateKey: "complete", complete: true },
    { id: "trust", label: "الثقة", stateKey: "complete", complete: true },
  ],
  featuredConcepts: [
    {
      id: "human-data",
      knowledgeId: "human-data",
      title: "بيانات الإنسان",
      role: "استقبال الإشارات",
      href: "/technology/human-data/",
      note: "معلومات عن شخص من مصادر مختلفة.",
    },
    {
      id: "knowledge-engine",
      knowledgeId: "knowledge-engine",
      title: "محرك المعرفة (Knowledge Engine)",
      role: "طبقة السياق",
      href: "/systems/knowledge-engine/",
      note: "ينظم المعرفة. ولا يتخذ القرارات.",
    },
    {
      id: "ai-decision-support",
      knowledgeId: "ai-decision-support",
      title: "دعم القرار بالذكاء الاصطناعي",
      role: "دعم المراجعة",
      href: "/systems/ai-decision-support/",
      note: "يدعم الناس، ولا يحل محلهم.",
    },
    {
      id: "safety-layer",
      knowledgeId: "safety-layer",
      title: "طبقة السلامة",
      role: "مسار التحكم",
      href: "/systems/safety-layer/",
      note: "فحوصات وحدود وتصعيد وإشراف.",
    },
    {
      id: "human-oversight",
      knowledgeId: "human-oversight",
      title: "الإشراف البشري",
      role: "حدود الصلاحية",
      href: "/trust/human-oversight/",
      note: "يبقى الناس أصحاب القرار.",
    },
  ],
  continueExploring: [
    { id: "technology", title: "استكشف التقنية", detail: "الأسس والموضوعات التقنية", href: "/technology/" },
    { id: "systems", title: "استكشف الأنظمة", detail: "كيف تعمل الأجزاء معًا", href: "/systems/" },
    { id: "applications", title: "استكشف التطبيقات", detail: "أماكن وسياقات الاستخدام", href: "/applications/" },
    { id: "trust", title: "استكشف الثقة", detail: "الالتزامات والإشراف والحدود", href: "/trust/" },
  ],
  domainMapConstraints: [
    "تضع الثقة حدودًا للتقنية والأنظمة والتطبيقات",
    "يوجّه البحث التقنية والأنظمة",
    "تأتي التطبيقات بعد تنسيق الأنظمة",
  ],
};
