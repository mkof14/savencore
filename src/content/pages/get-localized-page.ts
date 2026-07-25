import type { Locale } from "@/config/locales";
import { resolveContentLocale, type ContentLocale } from "@/i18n/types";
import { deepLocalize } from "@/content/pages/localize-content";

import { purposePageContent } from "@/content/pages/en/purpose";
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
import * as he from "@/content/pages/dictionaries/he";
import * as ru from "@/content/pages/dictionaries/ru";
import * as uk from "@/content/pages/dictionaries/uk";

export const PAGE_CONTENT_KEYS = ['purpose', 'foundation', 'research', 'technology', 'systems', 'applications', 'trust', 'human-data', 'human-data-model', 'data-infrastructure', 'interoperability', 'privacy', 'security', 'artificial-intelligence', 'automation', 'robotics', 'knowledge-engine', 'ai-decision-support', 'safety-layer', 'communication-layer', 'clinical-interfaces', 'robotics-layer', 'drone-systems', 'healthcare', 'home-application', 'hospitals', 'emergency', 'industrial', 'government', 'agriculture', 'research-applications', 'trust-privacy', 'trust-security', 'trust-safety', 'human-oversight', 'transparency', 'ethics-responsible-use', 'limitations'] as const;
type PageKey = (typeof PAGE_CONTENT_KEYS)[number];
type LocalizedDictionaries = Record<PageKey, Record<string, string>>;

const dictionariesByLocale: Record<Exclude<ContentLocale, "en">, LocalizedDictionaries> = {
  ar: {
    "purpose": ar.purpose,
    "foundation": ar.foundation,
    "research": ar.research,
    "technology": ar.technology,
    "systems": ar.systems,
    "applications": ar.applications,
    "trust": ar.trust,
    "human-data": ar.human_data,
    "human-data-model": ar.human_data_model,
    "data-infrastructure": ar.data_infrastructure,
    "interoperability": ar.interoperability,
    "privacy": ar.privacy,
    "security": ar.security,
    "artificial-intelligence": ar.artificial_intelligence,
    "automation": ar.automation,
    "robotics": ar.robotics,
    "knowledge-engine": ar.knowledge_engine,
    "ai-decision-support": ar.ai_decision_support,
    "safety-layer": ar.safety_layer,
    "communication-layer": ar.communication_layer,
    "clinical-interfaces": ar.clinical_interfaces,
    "robotics-layer": ar.robotics_layer,
    "drone-systems": ar.drone_systems,
    "healthcare": ar.healthcare,
    "home-application": ar.home_application,
    "hospitals": ar.hospitals,
    "emergency": ar.emergency,
    "industrial": ar.industrial,
    "government": ar.government,
    "agriculture": ar.agriculture,
    "research-applications": ar.research_applications,
    "trust-privacy": ar.trust_privacy,
    "trust-security": ar.trust_security,
    "trust-safety": ar.trust_safety,
    "human-oversight": ar.human_oversight,
    "transparency": ar.transparency,
    "ethics-responsible-use": ar.ethics_responsible_use,
    "limitations": ar.limitations,
  },
  he: {
    "purpose": he.purpose,
    "foundation": he.foundation,
    "research": he.research,
    "technology": he.technology,
    "systems": he.systems,
    "applications": he.applications,
    "trust": he.trust,
    "human-data": he.human_data,
    "human-data-model": he.human_data_model,
    "data-infrastructure": he.data_infrastructure,
    "interoperability": he.interoperability,
    "privacy": he.privacy,
    "security": he.security,
    "artificial-intelligence": he.artificial_intelligence,
    "automation": he.automation,
    "robotics": he.robotics,
    "knowledge-engine": he.knowledge_engine,
    "ai-decision-support": he.ai_decision_support,
    "safety-layer": he.safety_layer,
    "communication-layer": he.communication_layer,
    "clinical-interfaces": he.clinical_interfaces,
    "robotics-layer": he.robotics_layer,
    "drone-systems": he.drone_systems,
    "healthcare": he.healthcare,
    "home-application": he.home_application,
    "hospitals": he.hospitals,
    "emergency": he.emergency,
    "industrial": he.industrial,
    "government": he.government,
    "agriculture": he.agriculture,
    "research-applications": he.research_applications,
    "trust-privacy": he.trust_privacy,
    "trust-security": he.trust_security,
    "trust-safety": he.trust_safety,
    "human-oversight": he.human_oversight,
    "transparency": he.transparency,
    "ethics-responsible-use": he.ethics_responsible_use,
    "limitations": he.limitations,
  },
  ru: {
    "purpose": ru.purpose,
    "foundation": ru.foundation,
    "research": ru.research,
    "technology": ru.technology,
    "systems": ru.systems,
    "applications": ru.applications,
    "trust": ru.trust,
    "human-data": ru.human_data,
    "human-data-model": ru.human_data_model,
    "data-infrastructure": ru.data_infrastructure,
    "interoperability": ru.interoperability,
    "privacy": ru.privacy,
    "security": ru.security,
    "artificial-intelligence": ru.artificial_intelligence,
    "automation": ru.automation,
    "robotics": ru.robotics,
    "knowledge-engine": ru.knowledge_engine,
    "ai-decision-support": ru.ai_decision_support,
    "safety-layer": ru.safety_layer,
    "communication-layer": ru.communication_layer,
    "clinical-interfaces": ru.clinical_interfaces,
    "robotics-layer": ru.robotics_layer,
    "drone-systems": ru.drone_systems,
    "healthcare": ru.healthcare,
    "home-application": ru.home_application,
    "hospitals": ru.hospitals,
    "emergency": ru.emergency,
    "industrial": ru.industrial,
    "government": ru.government,
    "agriculture": ru.agriculture,
    "research-applications": ru.research_applications,
    "trust-privacy": ru.trust_privacy,
    "trust-security": ru.trust_security,
    "trust-safety": ru.trust_safety,
    "human-oversight": ru.human_oversight,
    "transparency": ru.transparency,
    "ethics-responsible-use": ru.ethics_responsible_use,
    "limitations": ru.limitations,
  },
  uk: {
    "purpose": uk.purpose,
    "foundation": uk.foundation,
    "research": uk.research,
    "technology": uk.technology,
    "systems": uk.systems,
    "applications": uk.applications,
    "trust": uk.trust,
    "human-data": uk.human_data,
    "human-data-model": uk.human_data_model,
    "data-infrastructure": uk.data_infrastructure,
    "interoperability": uk.interoperability,
    "privacy": uk.privacy,
    "security": uk.security,
    "artificial-intelligence": uk.artificial_intelligence,
    "automation": uk.automation,
    "robotics": uk.robotics,
    "knowledge-engine": uk.knowledge_engine,
    "ai-decision-support": uk.ai_decision_support,
    "safety-layer": uk.safety_layer,
    "communication-layer": uk.communication_layer,
    "clinical-interfaces": uk.clinical_interfaces,
    "robotics-layer": uk.robotics_layer,
    "drone-systems": uk.drone_systems,
    "healthcare": uk.healthcare,
    "home-application": uk.home_application,
    "hospitals": uk.hospitals,
    "emergency": uk.emergency,
    "industrial": uk.industrial,
    "government": uk.government,
    "agriculture": uk.agriculture,
    "research-applications": uk.research_applications,
    "trust-privacy": uk.trust_privacy,
    "trust-security": uk.trust_security,
    "trust-safety": uk.trust_safety,
    "human-oversight": uk.human_oversight,
    "transparency": uk.transparency,
    "ethics-responsible-use": uk.ethics_responsible_use,
    "limitations": uk.limitations,
  },
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
