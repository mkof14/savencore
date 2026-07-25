import type { HomeContent } from "@/content/home/types";
import {
  applicationsNavChildren,
  systemsNavChildren,
  technologyNavChildren,
  trustNavChildren,
} from "@/navigation/site-navigation";

export const homeContentRu: HomeContent = {
  hero: {
    brand: "SAVEN Core",
    sentence: "Интеллектуальные системы, созданные для поддержки человеческой жизни.",
    explanation:
      "Мы создаём системы, которые помогают людям в больницах, дома и в повседневной жизни — осторожно и с ясными пределами.",
    status:
      "Архитектура, системы и ориентированные на человека принципы ответственной помощи.",
  },
  architectureChain: [
    { id: "human", label: "Люди" },
    { id: "human-data", label: "Данные о человеке", href: "/technology/human-data/" },
    {
      id: "human-data-model",
      label: "Модель данных о человеке",
      href: "/technology/human-data-model/",
    },
    { id: "technology", label: "Технологии", href: "/technology/" },
    { id: "systems", label: "Системы", href: "/systems/" },
    { id: "applications", label: "Применения", href: "/applications/" },
    { id: "trust", label: "Доверие", href: "/trust/" },
    { id: "research", label: "Исследования", href: "/research/" },
  ],
  explorerDomains: [
    {
      id: "technology",
      title: "Технологии",
      purpose: "Базовые элементы, из которых создаются системы SAVEN Core.",
      href: "/technology/",
      pageIds: technologyNavChildren.map((item) => item.id),
      relationships: "Поддерживают системы через потоки данных и технические методы.",
    },
    {
      id: "systems",
      title: "Системы",
      purpose: "Компоненты, которые работают совместно в рамках ясных ролей и ограничений.",
      href: "/systems/",
      pageIds: systemsNavChildren.map((item) => item.id),
      relationships:
        "Используют технологии и поддерживают применения в пределах принципов доверия.",
    },
    {
      id: "applications",
      title: "Применения",
      purpose: "Среды, в которых SAVEN Core предназначен для поддержки людей и мест.",
      href: "/applications/",
      pageIds: applicationsNavChildren.map((item) => item.id),
      relationships: "Зависят от систем и остаются в пределах принципов доверия.",
    },
    {
      id: "trust",
      title: "Доверие",
      purpose: "Обязательства, надзор, подотчётность и ограничения.",
      href: "/trust/",
      pageIds: trustNavChildren.map((item) => item.id),
      relationships: "Устанавливает границы для технологий, систем и применений.",
    },
    {
      id: "research",
      title: "Исследования",
      purpose: "Вопросы, методы и открытая работа, направляющие проектирование.",
      href: "/research/",
      pageIds: ["research-overview"],
      relationships: "Направляют технологии и системы через вопросы, методы и доказательства.",
    },
  ],
  domainMapSteps: [
    { id: "technology", label: "Технологии", href: "/technology/", dependency: "создают" },
    { id: "systems", label: "Системы", href: "/systems/", dependency: "координируют" },
    { id: "applications", label: "Применения", href: "/applications/", dependency: "поддерживают" },
    { id: "trust", label: "Доверие", href: "/trust/", dependency: "регулирует" },
    { id: "research", label: "Исследования", href: "/research/", dependency: "направляют" },
  ],
  platformStatus: [
    { id: "technology", label: "Технологии", stateKey: "complete", complete: true },
    { id: "systems", label: "Системы", stateKey: "complete", complete: true },
    { id: "applications", label: "Применения", stateKey: "complete", complete: true },
    { id: "trust", label: "Доверие", stateKey: "complete", complete: true },
    { id: "research", label: "Исследования", stateKey: "complete", complete: true },
  ],
  featuredConcepts: [
    {
      id: "human-data",
      knowledgeId: "human-data",
      title: "Данные о человеке",
      role: "Приём сигналов",
      href: "/technology/human-data/",
      note: "Информация о человеке из разных источников.",
    },
    {
      id: "knowledge-engine",
      knowledgeId: "knowledge-engine",
      title: "Knowledge Engine",
      role: "Контекстный уровень",
      href: "/systems/knowledge-engine/",
      note: "Организует знания. Не принимает решения.",
    },
    {
      id: "ai-decision-support",
      knowledgeId: "ai-decision-support",
      title: "Поддержка решений с ИИ",
      role: "Поддержка проверки",
      href: "/systems/ai-decision-support/",
      note: "Поддерживает людей. Не заменяет их.",
    },
    {
      id: "safety-layer",
      knowledgeId: "safety-layer",
      title: "Уровень безопасности",
      role: "Контур управления",
      href: "/systems/safety-layer/",
      note: "Проверки, ограничения, эскалация и надзор.",
    },
    {
      id: "human-oversight",
      knowledgeId: "human-oversight",
      title: "Человеческий надзор",
      role: "Граница полномочий",
      href: "/trust/human-oversight/",
      note: "Люди остаются теми, кто принимает решения.",
    },
  ],
  continueExploring: [
    { id: "technology", title: "Изучить технологии", detail: "Основы и технические темы", href: "/technology/" },
    { id: "systems", title: "Изучить системы", detail: "Как компоненты работают вместе", href: "/systems/" },
    { id: "applications", title: "Изучить применения", detail: "Среды и контексты использования", href: "/applications/" },
    { id: "trust", title: "Изучить доверие", detail: "Обязательства, надзор и ограничения", href: "/trust/" },
    { id: "research", title: "Изучить исследования", detail: "Данные и открытые вопросы", href: "/research/" },
  ],
  domainMapConstraints: [
    "Доверие устанавливает границы для технологий, систем и применений",
    "Исследования направляют развитие технологий и систем",
    "Применения следуют за координацией систем",
  ],
};
