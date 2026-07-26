#!/usr/bin/env node
/**
 * Generate scripts/remaining-translations/fr-complete.mjs from glossary + page overrides.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const FR_PAGES = [
  "agriculture", "ai-decision-support", "artificial-intelligence", "automation",
  "clinical-interfaces", "communication-layer", "data-infrastructure", "drone-systems",
  "emergency", "ethics-responsible-use", "government", "home-application", "hospitals",
  "human-data-model", "human-data", "human-oversight", "industrial", "interoperability",
  "knowledge-engine", "limitations", "privacy", "research-applications", "robotics-layer",
  "robotics", "safety-layer", "security", "transparency", "trust-privacy", "trust-safety",
  "trust-security",
];

function parseDict(text) {
  const map = {};
  const re = /"((?:\\.|[^"\\])*)"\s*:\s*"((?:\\.|[^"\\])*)"/g;
  let m;
  while ((m = re.exec(text))) {
    map[JSON.parse(`"${m[1]}"`)] = JSON.parse(`"${m[2]}"`);
  }
  return map;
}

function loadGoodFr() {
  const dir = path.join(root, "src/content/pages/dictionaries/fr");
  const map = {};
  for (const f of fs.readdirSync(dir).filter((x) => x.endsWith(".ts") && x !== "index.ts")) {
    const parsed = parseDict(fs.readFileSync(path.join(dir, f), "utf8"));
    for (const [k, v] of Object.entries(parsed)) {
      if (v && v !== k && !v.includes("MYMEMORY")) map[k] = v;
    }
  }
  return map;
}

const G = {
  "Purpose": "Raison d'être",
  "Foundation": "Fondations",
  "Research": "Recherche",
  "Technology": "Technologie",
  "Systems": "Systèmes",
  "Applications": "Applications",
  "Trust": "Confiance",
  "Architecture": "Architecture",
  "Safety": "Sécurité",
  "Security": "Sécurité",
  "Privacy": "Confidentialité",
  "Human Data": "Données humaines",
  "Human Data Model": "Modèle de données humaines",
  "Data Infrastructure": "Infrastructure de données",
  "Interoperability": "Interopérabilité",
  "Artificial Intelligence": "Intelligence artificielle",
  "Automation": "Automatisation",
  "Robotics": "Robotique",
  "Knowledge Engine": "Moteur de connaissances",
  "AI Decision Support": "Aide à la décision par IA",
  "Safety Layer": "Couche de sécurité",
  "Communication Layer": "Couche de communication",
  "Clinical Interfaces": "Interfaces cliniques",
  "Robotics Layer": "Couche robotique",
  "Drone Systems": "Systèmes de drones",
  "Healthcare": "Santé",
  "Home": "Domicile",
  "Hospitals": "Hôpitaux",
  "Emergency": "Urgences",
  "Industrial": "Industrie",
  "Government": "Secteur public",
  "Agriculture": "Agriculture",
  "Research Applications": "Applications de recherche",
  "Human Oversight": "Supervision humaine",
  "Transparency": "Transparence",
  "Ethics and Responsible Use": "Éthique et usage responsable",
  "Limitations": "Limites",
  "Reference Links": "Pour aller plus loin",
  "Summary": "Résumé",
  "Categories": "Catégories",
  "Relationships": "Relations",
  "Principles": "Principes",
  "Scope": "Périmètre",
  "Related topics": "Sujets associés",
  "Related systems": "Systèmes associés",
  "Related research": "Recherche associée",
  "Related applications": "Applications associées",
  "References": "Références",
  "Operating context": "Contexte opérationnel",
  "Executive Summary": "Résumé",
  "Operating Context": "Contexte opérationnel",
  "Why It Matters": "Pourquoi c'est important",
  "SAVEN Core Role": "Rôle de SAVEN Core",
  "Information Flow": "Flux d'information",
  "Human Role": "Rôle humain",
  "Safety and Trust": "Sécurité et confiance",
  "Related Technology": "Technologie associée",
  "Related Systems": "Systèmes associés",
  "Related Trust": "Confiance associée",
  "Governance model": "Modèle de gouvernance",
  "Principle": "Principe",
  "Responsibilities": "Responsabilités",
  "Boundaries": "Limites",
  "Controls": "Contrôles",
  "Architecture role": "Rôle architectural",
  "Inputs": "Entrées",
  "Outputs": "Sorties",
  "Privacy engineering": "Ingénierie de la confidentialité",
  "Security engineering": "Ingénierie de la sécurité",
  "Technology pages describe intended architecture. They do not imply commercial deployment, clinical use, regulatory approval or a chosen vendor platform.":
    "Les pages Technologie décrivent l'architecture envisagée. Elles n'impliquent ni déploiement commercial, ni usage clinique, ni approbation réglementaire, ni plateforme fournisseur choisie.",
  "Applications pages describe intended contexts. They do not imply deployed products, clinical services, emergency response, regulatory approval or autonomous operation.":
    "Les pages Applications décrivent les contextes envisagés. Elles n'impliquent ni produits déployés, ni services cliniques, ni intervention d'urgence, ni approbation réglementaire, ni fonctionnement autonome.",
  "Trust pages describe governance architecture and public commitments. They do not imply legal policy, complete safety, complete privacy, compliance or certification.":
    "Les pages Confiance décrivent l'architecture de gouvernance et les engagements publics. Elles n'impliquent ni politique juridique, ni sécurité complète, ni confidentialité complète, ni conformité, ni certification.",
  "Application pages describe intended operating contexts. They do not imply deployed products, clinical use, regulatory approval, autonomous operation or production readiness.":
    "Les pages Application décrivent les contextes opérationnels envisagés. Elles n'impliquent ni produits déployés, ni usage clinique, ni approbation réglementaire, ni fonctionnement autonome, ni maturité de production.",
  "Trust pages describe organizational commitments, governance and limits. They are not legal policies, certifications or guarantees of complete safety, privacy or compliance.":
    "Les pages Confiance décrivent les engagements organisationnels, la gouvernance et les limites. Ce ne sont pas des politiques juridiques, des certifications ni des garanties de sécurité, de confidentialité ou de conformité complètes.",
  "Systems pages describe intended architecture. They do not imply commercial deployment, clinical use, regulatory approval or autonomous operation.":
    "Les pages Systèmes décrivent l'architecture envisagée. Elles n'impliquent ni déploiement commercial, ni usage clinique, ni approbation réglementaire, ni fonctionnement autonome.",
};

function translateFr(key) {
  if (G[key]) return G[key];

  let t = key;
  const reps = [
    [/SAVEN Core/g, "SAVEN Core"],
    [/BioMath Life/g, "BioMath Life"],
    [/BioMath Core/g, "BioMath Core"],
    [/Knowledge Engine/g, "Moteur de connaissances"],
    [/Human Data Model/g, "Modèle de données humaines"],
    [/Human Data/g, "Données humaines"],
    [/AI Decision Support/g, "Aide à la décision par IA"],
    [/Safety Layer/g, "Couche de sécurité"],
    [/Communication Layer/g, "Couche de communication"],
    [/Clinical Interfaces/g, "Interfaces cliniques"],
    [/Robotics Layer/g, "Couche robotique"],
    [/Drone Systems/g, "Systèmes de drones"],
    [/Data Infrastructure/g, "Infrastructure de données"],
    [/Artificial Intelligence/g, "Intelligence artificielle"],
    [/Human Oversight/g, "Supervision humaine"],
    [/Ethics and Responsible Use/g, "Éthique et usage responsable"],
    [/Research Applications/g, "Applications de recherche"],
    [/Reference Links/g, "Pour aller plus loin"],
    [/Executive Summary/g, "Résumé"],
    [/Related Systems/g, "Systèmes associés"],
    [/Related Research/g, "Recherche associée"],
    [/Related Applications/g, "Applications associées"],
    [/Related Technology/g, "Technologie associée"],
    [/Related Trust/g, "Confiance associée"],
    [/Related topics/g, "Sujets associés"],
    [/Related systems/g, "Systèmes associés"],
    [/Related research/g, "Recherche associée"],
    [/Related applications/g, "Applications associées"],
    [/People remain responsible/g, "Les personnes restent responsables"],
    [/People retain/g, "Les personnes conservent"],
    [/People need/g, "Les personnes ont besoin"],
    [/People can/g, "Les personnes peuvent"],
    [/People must/g, "Les personnes doivent"],
    [/People approve/g, "Les personnes approuvent"],
    [/People authorize/g, "Les personnes autorisent"],
    [/People define/g, "Les personnes définissent"],
    [/People interpret/g, "Les personnes interprètent"],
    [/People intervene/g, "Les personnes interviennent"],
    [/People stop/g, "Les personnes arrêtent"],
    [/People weigh/g, "Les personnes pondèrent"],
    [/People own/g, "Les personnes possèdent"],
    [/People set/g, "Les personnes définissent"],
    [/People assess/g, "Les personnes évaluent"],
    [/People decide/g, "Les personnes décident"],
    [/People review/g, "Les personnes examinent"],
    [/This page/g, "Cette page"],
    [/This system/g, "Ce système"],
    [/This index/g, "Cet index"],
    [/This domain/g, "Ce domaine"],
    [/This discipline/g, "Cette discipline"],
    [/This is not/g, "Ce n'est pas"],
    [/Architecture only\./g, "Architecture uniquement."],
    [/Research only\./g, "Recherche uniquement."],
    [/Governance only\./g, "Gouvernance uniquement."],
    [/Development is not operation\./g, "Le développement n'est pas l'exploitation."],
    [/Separate architecture from operation\./g, "Séparer l'architecture de l'exploitation."],
    [/No (.+?) is claimed\./g, "Aucune revendication de $1 n'est formulée."],
    [/No (.+?) is offered\./g, "Aucun $1 n'est proposé."],
    [/No (.+?) is promised\./g, "Aucun $1 n'est promis."],
    [/No (.+?) is made\./g, "Aucune revendication de $1 n'est formulée."],
    [/Not a (.+?)\./g, "Ce n'est pas $1."],
  ];
  for (const [re, rep] of reps) t = t.replace(re, rep);
  return t;
}

// Load page-specific overrides from JSON files if present
const pageDir = path.join(root, "scripts/remaining-translations/pages");
const overrides = {};
if (fs.existsSync(pageDir)) {
  for (const f of fs.readdirSync(pageDir).filter((x) => x.endsWith(".json"))) {
    Object.assign(overrides, JSON.parse(fs.readFileSync(path.join(pageDir, f), "utf8")));
  }
}

const goodFr = loadGoodFr();
const allKeys = new Set();
for (const page of FR_PAGES) {
  for (const k of JSON.parse(fs.readFileSync(path.join(root, "tmp/dict-keys", `${page}.json`), "utf8"))) {
    allKeys.add(k);
  }
}

const COMMON_FR = {};
const PAGE_FR = {};

for (const k of allKeys) {
  if (goodFr[k]) {
    if ([...allKeys].filter((x) => x === k).length) COMMON_FR[k] = goodFr[k];
    continue;
  }
  if (overrides[k]) {
    PAGE_FR[k] = overrides[k];
    continue;
  }
  if (G[k]) {
    COMMON_FR[k] = G[k];
    continue;
  }
  PAGE_FR[k] = translateFr(k);
}

function writeObj(name, obj) {
  const lines = Object.entries(obj).map(([k, v]) => `  ${JSON.stringify(k)}: ${JSON.stringify(v)},`);
  return `export const ${name} = {\n${lines.join("\n")}\n};\n`;
}

const out = `/** French translations for remaining page dictionaries (D-0161). Auto-generated. */\n${writeObj("COMMON_FR", COMMON_FR)}\n${writeObj("PAGE_FR", PAGE_FR)}\n`;
fs.mkdirSync(path.dirname(fileURLToPath(import.meta.url)) + "/remaining-translations", { recursive: true });
fs.writeFileSync(path.join(root, "scripts/remaining-translations/fr-complete.mjs"), out);

const identity = [...allKeys].filter((k) => {
  const v = goodFr[k] || overrides[k] || G[k] || translateFr(k);
  return v === k;
});
console.log(`Generated fr-complete.mjs: COMMON=${Object.keys(COMMON_FR).length}, PAGE=${Object.keys(PAGE_FR).length}, identity=${identity.length}`);
if (identity.length) {
  console.error("Still identity:", identity.slice(0, 10));
}
