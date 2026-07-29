import type { Locale } from "@/config/locales";
import { resolveContentLocale, type ContentLocale } from "@/i18n/types";
import { deepLocalize } from "@/content/pages/localize-content";

import { purposePageContent } from "@/content/pages/en/purpose";
import { biomathCorePageContent } from "@/content/pages/en/biomath-core";
import { foundationPageContent } from "@/content/pages/en/foundation";
import {
  researchPageContent,
  researchRelationsEntityId,
} from "@/content/pages/en/research";
import { technologyPageContent } from "@/content/pages/en/technology";
import { systemsPageContent } from "@/content/pages/en/systems";
import { applicationsPageContent } from "@/content/pages/en/applications";
import { trustPageContent } from "@/content/pages/en/trust";
import { humanDataPageContent } from "@/content/pages/en/human-data";
import { humanDataModelPageContent } from "@/content/pages/en/human-data-model";
import { dataInfrastructurePageContent } from "@/content/pages/en/data-infrastructure";
import { interoperabilityPageContent } from "@/content/pages/en/interoperability";
import { privacyPageContent } from "@/content/pages/en/privacy";
import { securityPageContent } from "@/content/pages/en/security";
import { artificialIntelligencePageContent } from "@/content/pages/en/artificial-intelligence";
import { automationPageContent } from "@/content/pages/en/automation";
import { roboticsPageContent } from "@/content/pages/en/robotics";
import { knowledgeEnginePageContent } from "@/content/pages/en/knowledge-engine";
import { aiDecisionSupportPageContent } from "@/content/pages/en/ai-decision-support";
import { safetyLayerPageContent } from "@/content/pages/en/safety-layer";
import { communicationLayerPageContent } from "@/content/pages/en/communication-layer";
import { clinicalInterfacesPageContent } from "@/content/pages/en/clinical-interfaces";
import { roboticsLayerPageContent } from "@/content/pages/en/robotics-layer";
import { droneSystemsPageContent } from "@/content/pages/en/drone-systems";
import { healthcarePageContent } from "@/content/pages/en/healthcare";
import { homeApplicationPageContent } from "@/content/pages/en/home-application";
import { hospitalsPageContent } from "@/content/pages/en/hospitals";
import { emergencyPageContent } from "@/content/pages/en/emergency";
import { industrialPageContent } from "@/content/pages/en/industrial";
import { governmentPageContent } from "@/content/pages/en/government";
import { agriculturePageContent } from "@/content/pages/en/agriculture";
import { researchApplicationsPageContent } from "@/content/pages/en/research-applications";
import { trustPrivacyPageContent } from "@/content/pages/en/trust-privacy";
import { trustSecurityPageContent } from "@/content/pages/en/trust-security";
import { trustSafetyPageContent } from "@/content/pages/en/trust-safety";
import { humanOversightPageContent } from "@/content/pages/en/human-oversight";
import { transparencyPageContent } from "@/content/pages/en/transparency";
import { ethicsResponsibleUsePageContent } from "@/content/pages/en/ethics-responsible-use";
import { limitationsPageContent } from "@/content/pages/en/limitations";

import * as ar from "@/content/pages/dictionaries/ar";
import * as de from "@/content/pages/dictionaries/de";
import * as es from "@/content/pages/dictionaries/es";
import * as fr from "@/content/pages/dictionaries/fr";
import * as he from "@/content/pages/dictionaries/he";
import * as ja from "@/content/pages/dictionaries/ja";
import * as ru from "@/content/pages/dictionaries/ru";
import * as uk from "@/content/pages/dictionaries/uk";
import * as zhCn from "@/content/pages/dictionaries/zh-cn";

export const PAGE_CONTENT_KEYS = ['purpose', 'biomath-core', 'foundation', 'research', 'technology', 'systems', 'applications', 'trust', 'human-data', 'human-data-model', 'data-infrastructure', 'interoperability', 'privacy', 'security', 'artificial-intelligence', 'automation', 'robotics', 'knowledge-engine', 'ai-decision-support', 'safety-layer', 'communication-layer', 'clinical-interfaces', 'robotics-layer', 'drone-systems', 'healthcare', 'home-application', 'hospitals', 'emergency', 'industrial', 'government', 'agriculture', 'research-applications', 'trust-privacy', 'trust-security', 'trust-safety', 'human-oversight', 'transparency', 'ethics-responsible-use', 'limitations'] as const;
type PageKey = (typeof PAGE_CONTENT_KEYS)[number];
type LocalizedDictionaries = Record<PageKey, Record<string, string>>;

function mapDictionaryModule(mod: {
  purpose: Record<string, string>;
  biomath_core: Record<string, string>;
  foundation: Record<string, string>;
  research: Record<string, string>;
  technology: Record<string, string>;
  systems: Record<string, string>;
  applications: Record<string, string>;
  trust: Record<string, string>;
  human_data: Record<string, string>;
  human_data_model: Record<string, string>;
  data_infrastructure: Record<string, string>;
  interoperability: Record<string, string>;
  privacy: Record<string, string>;
  security: Record<string, string>;
  artificial_intelligence: Record<string, string>;
  automation: Record<string, string>;
  robotics: Record<string, string>;
  knowledge_engine: Record<string, string>;
  ai_decision_support: Record<string, string>;
  safety_layer: Record<string, string>;
  communication_layer: Record<string, string>;
  clinical_interfaces: Record<string, string>;
  robotics_layer: Record<string, string>;
  drone_systems: Record<string, string>;
  healthcare: Record<string, string>;
  home_application: Record<string, string>;
  hospitals: Record<string, string>;
  emergency: Record<string, string>;
  industrial: Record<string, string>;
  government: Record<string, string>;
  agriculture: Record<string, string>;
  research_applications: Record<string, string>;
  trust_privacy: Record<string, string>;
  trust_security: Record<string, string>;
  trust_safety: Record<string, string>;
  human_oversight: Record<string, string>;
  transparency: Record<string, string>;
  ethics_responsible_use: Record<string, string>;
  limitations: Record<string, string>;
}): LocalizedDictionaries {
  return {
    purpose: mod.purpose,
    "biomath-core": mod.biomath_core,
    foundation: mod.foundation,
    research: mod.research,
    technology: mod.technology,
    systems: mod.systems,
    applications: mod.applications,
    trust: mod.trust,
    "human-data": mod.human_data,
    "human-data-model": mod.human_data_model,
    "data-infrastructure": mod.data_infrastructure,
    interoperability: mod.interoperability,
    privacy: mod.privacy,
    security: mod.security,
    "artificial-intelligence": mod.artificial_intelligence,
    automation: mod.automation,
    robotics: mod.robotics,
    "knowledge-engine": mod.knowledge_engine,
    "ai-decision-support": mod.ai_decision_support,
    "safety-layer": mod.safety_layer,
    "communication-layer": mod.communication_layer,
    "clinical-interfaces": mod.clinical_interfaces,
    "robotics-layer": mod.robotics_layer,
    "drone-systems": mod.drone_systems,
    healthcare: mod.healthcare,
    "home-application": mod.home_application,
    hospitals: mod.hospitals,
    emergency: mod.emergency,
    industrial: mod.industrial,
    government: mod.government,
    agriculture: mod.agriculture,
    "research-applications": mod.research_applications,
    "trust-privacy": mod.trust_privacy,
    "trust-security": mod.trust_security,
    "trust-safety": mod.trust_safety,
    "human-oversight": mod.human_oversight,
    transparency: mod.transparency,
    "ethics-responsible-use": mod.ethics_responsible_use,
    limitations: mod.limitations,
  };
}

const dictionariesByLocale: Record<Exclude<ContentLocale, "en">, LocalizedDictionaries> = {
  es: mapDictionaryModule(es),
  de: mapDictionaryModule(de),
  fr: mapDictionaryModule(fr),
  ja: mapDictionaryModule(ja),
  "zh-cn": mapDictionaryModule(zhCn),
  ar: mapDictionaryModule(ar),
  he: mapDictionaryModule(he),
  ru: mapDictionaryModule(ru),
  uk: mapDictionaryModule(uk),
};


function getLocalizedPageContent<T>(
  pageKey: PageKey,
  content: T,
  locale: Locale,
): T {
  const contentLocale = resolveContentLocale(locale);

  if (contentLocale === "en") {
    return content;
  }

  return deepLocalize(content, dictionariesByLocale[contentLocale][pageKey]);
}

export function getPurposePageContent(locale: Locale) {
  return getLocalizedPageContent("purpose", purposePageContent, locale);
}

export function getBioMathCorePageContent(locale: Locale) {
  return getLocalizedPageContent("biomath-core", biomathCorePageContent, locale);
}

export function getFoundationPageContent(locale: Locale) {
  return getLocalizedPageContent("foundation", foundationPageContent, locale);
}

export function getResearchPageContent(locale: Locale) {
  return getLocalizedPageContent("research", researchPageContent, locale);
}

export function getResearchRelationsEntityId() {
  return researchRelationsEntityId;
}

export function getTechnologyPageContent(locale: Locale) {
  return getLocalizedPageContent("technology", technologyPageContent, locale);
}

export function getSystemsPageContent(locale: Locale) {
  return getLocalizedPageContent("systems", systemsPageContent, locale);
}

export function getApplicationsPageContent(locale: Locale) {
  return getLocalizedPageContent("applications", applicationsPageContent, locale);
}

export function getTrustPageContent(locale: Locale) {
  return getLocalizedPageContent("trust", trustPageContent, locale);
}

export function getHumanDataPageContent(locale: Locale) {
  return getLocalizedPageContent("human-data", humanDataPageContent, locale);
}

export function getHumanDataModelPageContent(locale: Locale) {
  return getLocalizedPageContent("human-data-model", humanDataModelPageContent, locale);
}

export function getDataInfrastructurePageContent(locale: Locale) {
  return getLocalizedPageContent("data-infrastructure", dataInfrastructurePageContent, locale);
}

export function getInteroperabilityPageContent(locale: Locale) {
  return getLocalizedPageContent("interoperability", interoperabilityPageContent, locale);
}

export function getPrivacyPageContent(locale: Locale) {
  return getLocalizedPageContent("privacy", privacyPageContent, locale);
}

export function getSecurityPageContent(locale: Locale) {
  return getLocalizedPageContent("security", securityPageContent, locale);
}

export function getArtificialIntelligencePageContent(locale: Locale) {
  return getLocalizedPageContent("artificial-intelligence", artificialIntelligencePageContent, locale);
}

export function getAutomationPageContent(locale: Locale) {
  return getLocalizedPageContent("automation", automationPageContent, locale);
}

export function getRoboticsPageContent(locale: Locale) {
  return getLocalizedPageContent("robotics", roboticsPageContent, locale);
}

export function getKnowledgeEnginePageContent(locale: Locale) {
  return getLocalizedPageContent("knowledge-engine", knowledgeEnginePageContent, locale);
}

export function getAiDecisionSupportPageContent(locale: Locale) {
  return getLocalizedPageContent("ai-decision-support", aiDecisionSupportPageContent, locale);
}

export function getSafetyLayerPageContent(locale: Locale) {
  return getLocalizedPageContent("safety-layer", safetyLayerPageContent, locale);
}

export function getCommunicationLayerPageContent(locale: Locale) {
  return getLocalizedPageContent("communication-layer", communicationLayerPageContent, locale);
}

export function getClinicalInterfacesPageContent(locale: Locale) {
  return getLocalizedPageContent("clinical-interfaces", clinicalInterfacesPageContent, locale);
}

export function getRoboticsLayerPageContent(locale: Locale) {
  return getLocalizedPageContent("robotics-layer", roboticsLayerPageContent, locale);
}

export function getDroneSystemsPageContent(locale: Locale) {
  return getLocalizedPageContent("drone-systems", droneSystemsPageContent, locale);
}

export function getHealthcarePageContent(locale: Locale) {
  return getLocalizedPageContent("healthcare", healthcarePageContent, locale);
}

export function getHomeApplicationPageContent(locale: Locale) {
  return getLocalizedPageContent("home-application", homeApplicationPageContent, locale);
}

export function getHospitalsPageContent(locale: Locale) {
  return getLocalizedPageContent("hospitals", hospitalsPageContent, locale);
}

export function getEmergencyPageContent(locale: Locale) {
  return getLocalizedPageContent("emergency", emergencyPageContent, locale);
}

export function getIndustrialPageContent(locale: Locale) {
  return getLocalizedPageContent("industrial", industrialPageContent, locale);
}

export function getGovernmentPageContent(locale: Locale) {
  return getLocalizedPageContent("government", governmentPageContent, locale);
}

export function getAgriculturePageContent(locale: Locale) {
  return getLocalizedPageContent("agriculture", agriculturePageContent, locale);
}

export function getResearchApplicationsPageContent(locale: Locale) {
  return getLocalizedPageContent("research-applications", researchApplicationsPageContent, locale);
}

export function getTrustPrivacyPageContent(locale: Locale) {
  return getLocalizedPageContent("trust-privacy", trustPrivacyPageContent, locale);
}

export function getTrustSecurityPageContent(locale: Locale) {
  return getLocalizedPageContent("trust-security", trustSecurityPageContent, locale);
}

export function getTrustSafetyPageContent(locale: Locale) {
  return getLocalizedPageContent("trust-safety", trustSafetyPageContent, locale);
}

export function getHumanOversightPageContent(locale: Locale) {
  return getLocalizedPageContent("human-oversight", humanOversightPageContent, locale);
}

export function getTransparencyPageContent(locale: Locale) {
  return getLocalizedPageContent("transparency", transparencyPageContent, locale);
}

export function getEthicsResponsibleUsePageContent(locale: Locale) {
  return getLocalizedPageContent("ethics-responsible-use", ethicsResponsibleUsePageContent, locale);
}

export function getLimitationsPageContent(locale: Locale) {
  return getLocalizedPageContent("limitations", limitationsPageContent, locale);
}
