#!/usr/bin/env node
/** Generate FR embedded translations for remaining keys (D-0161). */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { chunk0 } from "./remaining-translations/fr-chunk-0.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const need = JSON.parse(fs.readFileSync(path.join(root, "tmp/fr-embedded-need.json"), "utf8"));

function parseDict(text) {
  const map = {};
  const re = /"((?:\\.|[^"\\])*)"\s*:\s*"((?:\\.|[^"\\])*)"/g;
  let m;
  while ((m = re.exec(text))) {
    map[JSON.parse(`"${m[1]}"`)] = JSON.parse(`"${m[2]}"`);
  }
  return map;
}

// Reuse professional FR from already-completed page dictionaries
const goodFr = {};
const frDir = path.join(root, "src/content/pages/dictionaries/fr");
for (const f of fs.readdirSync(frDir).filter((x) => x.endsWith(".ts") && x !== "index.ts")) {
  const parsed = parseDict(fs.readFileSync(path.join(frDir, f), "utf8"));
  for (const [k, v] of Object.entries(parsed)) {
    if (v && v !== k && !String(v).includes("MYMEMORY")) goodFr[k] = v;
  }
}

const G = {
  "Core Concepts": "Concepts clés", "Core Responsibilities": "Responsabilités principales",
  "Core Principles": "Principes clés", "Information Organization": "Organisation de l'information",
  "Privacy-aware": "Sensibilisation à la confidentialité", "Fallback": "Repli",
  "Purpose-bound": "Lié à la raison d'être", "Stoppable": "Arrêtable",
  "Risk-aware": "Sensibilisation au risque", "Role-limited": "Limité par le rôle",
  "Organize information": "Organiser l'information", "Preserve consistency": "Préserver la cohérence",
  "Maintain relationships": "Maintenir les relations", "Support interoperability": "Soutenir l'interopérabilité",
  "Provide reliable access": "Fournir un accès fiable", "Support future growth": "Soutenir la croissance future",
  "Consistency": "Cohérence", "Integrity": "Intégrité", "Organization": "Organisation",
  "No unsupported claims": "Aucune revendication non étayée", "Emergency application": "Application Urgences",
  "Defer when uncertain": "Différer en cas d'incertitude", "Escalate clearly": "Escalader clairement",
  "No service claim": "Aucune revendication de service", "Responsible use": "Usage responsable",
  "Not legal advice.": "Ce n'est pas un conseil juridique.", "Purpose review.": "Examen de la raison d'être.",
  "Human authority.": "Autorité humaine.", "Documented limits.": "Limites documentées.",
  "Governance architecture only.": "Architecture de gouvernance uniquement.",
  "Restraint": "Retenue", "Government application": "Application Secteur public",
  "Home application": "Application Domicile", "Hospital application": "Application Hôpitaux",
  "Industrial application": "Application Industrie", "Research application": "Application Recherche",
  "Human control": "Contrôle humain", "Change awareness": "Sensibilisation au changement",
  "Local context": "Contexte local", "Operator authority": "Autorité de l'opérateur",
  "Site context": "Contexte du site", "Limits first": "Les limites d'abord",
  "Clear handoffs": "Passages de relais clairs", "Human review": "Examen humain",
  "Easy to stop": "Facile à arrêter", "Respect routines": "Respecter les routines",
  "Personal permission": "Permission personnelle", "Genetics": "Génétique", "Sleep": "Sommeil",
  "Wearables": "Objets connectés", "Health": "Santé", "Human": "Humain", "Environment": "Environnement",
  "Engineering": "Ingénierie", "Identity": "Identité", "Review": "Examen", "Risk": "Risque", "Stop": "Arrêt",
  "Clarity": "Clarté", "Honesty": "Honnêteté", "Status": "Statut", "Extensibility": "Extensibilité",
  "Explainability": "Explicabilité", "Reviewability": "Vérifiabilité", "Reviewable": "Vérifiable",
  "Stoppable action": "Action arrêtable", "Human handoff": "Relais humain",
  "No deployment claim": "Aucune revendication de déploiement", "No diagnosis": "Pas de diagnostic",
  "No treatment": "Pas de traitement", "No autonomous medicine": "Pas de médecine autonome",
  "Safe delegation": "Délégation sûre", "Human intervention": "Intervention humaine",
  "Permissioned context": "Contexte autorisé", "Uncertainty handling": "Gestion de l'incertitude",
  "Human authority": "Autorité humaine", "No autonomous claims": "Aucune revendication autonome",
  "Reviewable assistance": "Assistance vérifiable", "Paired with Automation": "Associé à l'automatisation",
  "Physical assistance": "Assistance physique", "Governed action": "Action encadrée",
  "Human–robot boundary": "Frontière humain-robot", "Environment awareness": "Conscience de l'environnement",
  "Permissioned presence": "Présence autorisée", "Interoperable interfaces": "Interfaces interopérables",
  "Authorized access": "Accès autorisé", "Pathway protection": "Protection des voies",
  "Interface discipline": "Discipline des interfaces", "Defense of limits": "Défense des limites",
  "Least privilege": "Privilège minimum", "Paired with Privacy": "Associé à la confidentialité",
  "No certification claim": "Aucune revendication de certification",
  "Purpose limitation": "Limitation de finalité", "Least information": "Information minimale",
  "Structurally enforced": "Imposé structurellement", "Change and withdrawal": "Modification et retrait",
  "Scoped agreements": "Accords limités", "Trust comes first": "La confiance d'abord",
  "Purpose first": "La raison d'être d'abord", "Least necessary": "Strictement nécessaire",
  "Validate first": "Valider d'abord", "Escalate risk": "Escalader le risque",
  "Questions first": "Les questions d'abord", "Limits visible": "Limites visibles",
  "Plain language": "Langage clair", "Trust privacy": "Confidentialité (Confiance)",
  "Trust safety": "Sécurité (Confiance)", "Trust security": "Sécurité (Confiance)",
  "Ongoing work": "Travail continu", "Data Categories": "Catégories de données",
  "Data Separation": "Séparation des données", "Data categories": "Catégories de données",
  "Personal Information": "Informations personnelles", "Health Information": "Informations de santé",
  "Medical History": "Antécédents médicaux", "Laboratory Information": "Informations de laboratoire",
  "Environmental Factors": "Facteurs environnementaux", "Device Information": "Informations sur les appareils",
  "User Preferences": "Préférences utilisateur", "Model Relationships": "Relations du modèle",
  "Privacy and Trust": "Confidentialité et confiance", "Engineering Considerations": "Considérations d'ingénierie",
  "Privacy and trust": "Confidentialité et confiance", "Human context pathway": "Voie de contexte humain",
  "Person and situation": "Personne et situation", "Contexts of use": "Contextes d'usage",
  "From information to organization": "De l'information à l'organisation",
  "Information about a person": "Information sur une personne",
  "Other technologies": "Autres technologies", "Relationship to Other Technologies": "Relation aux autres technologies",
  "What Data Infrastructure Means": "Ce que signifie l'infrastructure de données",
  "Organizes that information": "Organise ces informations",
  "Support people": "Soutenir les personnes", "Show uncertainty": "Montrer l'incertitude",
  "Safety first": "La sécurité d'abord", "Support for human review.": "Soutien à l'examen humain.",
  "Support in personal living environments.": "Soutien dans les environnements de vie personnels.",
  "What SAVEN Core does not claim.": "Ce que SAVEN Core ne revendique pas.",
  "Scope notes.": "Notes de périmètre.", "Scope sections.": "Sections de périmètre.",
  "Scope statements.": "Énoncés de périmètre.", "Status labels.": "Libellés de statut.",
  "Reference links.": "Liens de référence.", "Review points.": "Points d'examen.",
  "Escalation paths.": "Voies d'escalade.", "Documented roles.": "Rôles documentés.",
  "Review points.": "Points d'examen.", "Escalation pathways.": "Voies d'escalade.",
};

function translateFr(key) {
  if (G[key]) return G[key];
  if (chunk0[key]) return chunk0[key];
  let t = key;
  const reps = [
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
    [/SAVEN Core/g, "SAVEN Core"],
    [/People remain/g, "Les personnes restent"],
    [/People retain/g, "Les personnes conservent"],
    [/People need/g, "Les personnes ont besoin"],
    [/People must/g, "Les personnes doivent"],
    [/People can/g, "Les personnes peuvent"],
    [/People set/g, "Les personnes définissent"],
    [/People decide/g, "Les personnes décident"],
    [/People review/g, "Les personnes examinent"],
    [/People assess/g, "Les personnes évaluent"],
    [/People approve/g, "Les personnes approuvent"],
    [/People authorize/g, "Les personnes autorisent"],
    [/People interpret/g, "Les personnes interprètent"],
    [/People stop/g, "Les personnes arrêtent"],
    [/People weigh/g, "Les personnes pondèrent"],
    [/People own/g, "Les personnes possèdent"],
    [/People intervene/g, "Les personnes interviennent"],
    [/Operators remain/g, "Les opérateurs restent"],
    [/Operators retain/g, "Les opérateurs conservent"],
    [/Operators authorize/g, "Les opérateurs autorisent"],
    [/Operators set/g, "Les opérateurs définissent"],
    [/Workers interpret/g, "Les travailleurs interprètent"],
    [/Clinical professionals/g, "Les professionnels cliniques"],
    [/Public officials/g, "Les responsables publics"],
    [/Human operators/g, "Les opérateurs humains"],
    [/Human reviewers/g, "Les examinateurs humains"],
    [/This page/g, "Cette page"],
    [/This system/g, "Ce système"],
    [/This index/g, "Cet index"],
    [/It does not/g, "Il ne"],
    [/It exists/g, "Il existe"],
    [/It covers/g, "Il couvre"],
    [/It matters/g, "Cela compte"],
    [/Architecture only\./g, "Architecture uniquement."],
    [/Research only\./g, "Recherche uniquement."],
    [/Governance only\./g, "Gouvernance uniquement."],
    [/Documentation architecture only\./g, "Architecture documentaire uniquement."],
    [/Editorial governance only\./g, "Gouvernance éditoriale uniquement."],
    [/Current public documentation only\./g, "Documentation publique actuelle uniquement."],
    [/Governance documentation only\./g, "Documentation de gouvernance uniquement."],
    [/Governance architecture only\./g, "Architecture de gouvernance uniquement."],
    [/Research and architecture only\./g, "Recherche et architecture uniquement."],
    [/Development is not operation\./g, "Le développement n'est pas l'exploitation."],
    [/Separate architecture from operation\./g, "Séparer l'architecture de l'exploitation."],
    [/Do not turn intent into evidence\./g, "Ne pas transformer l'intention en élément probant."],
    [/State uncertainty plainly\./g, "Exprimer clairement l'incertitude."],
    [/Keep status current\./g, "Maintenir le statut à jour."],
    [/Keep claims bounded\./g, "Maintenir les revendications encadrées."],
    [/State what is unknown\./g, "Indiquer ce qui est inconnu."],
    [/Show development context\./g, "Montrer le contexte de développement."],
    [/Say what is not claimed\./g, "Indiquer ce qui n'est pas revendiqué."],
    [/Put human purpose first\./g, "Placer la raison d'être humaine en premier."],
    [/Respect authority and context\./g, "Respecter l'autorité et le contexte."],
    [/Set and review boundaries\./g, "Définir et examiner les limites."],
    [/Set authority boundaries\./g, "Définir les limites d'autorité."],
    [/Review consequential use\./g, "Examiner l'usage important."],
    [/Respond to escalation\./g, "Répondre à l'escalade."],
    [/Escalate unresolved concerns\./g, "Escalader les préoccupations non résolues."],
    [/Decline unsupported use\./g, "Refuser un usage non étayé."],
    [/Decline use outside defined limits\./g, "Refuser un usage hors limites définies."],
    [/Technology is a tool, not the purpose\./g, "La technologie est un outil, pas la raison d'être."],
    [/Human support comes first\./g, "Le soutien humain passe en premier."],
    [/People remain accountable\./g, "Les personnes restent responsables."],
    [/No (.+?) is claimed\./g, "Aucune revendication de $1 n'est formulée."],
    [/No (.+?) is offered\./g, "Aucun $1 n'est proposé."],
    [/No (.+?) is promised\./g, "Aucun $1 n'est promis."],
    [/No (.+?) is made\./g, "Aucune revendication de $1 n'est formulée."],
    [/Not a (.+?)\./g, "Ce n'est pas $1."],
    [/Not (.+?)\./g, "Pas de $1."],
  ];
  for (const [re, rep] of reps) t = t.replace(re, rep);
  return t;
}

const out = {};
const identity = [];
for (const key of need) {
  const v = goodFr[key] ?? translateFr(key);
  out[key] = v;
  if (v === key && key.includes(" ")) identity.push(key);
}

fs.writeFileSync(
  path.join(root, "scripts/remaining-translations/fr-embedded.json"),
  JSON.stringify(out, null, 2) + "\n",
);
console.log(`Wrote ${Object.keys(out).length} embedded FR translations, identity sentences: ${identity.length}`);
if (identity.length) {
  fs.writeFileSync(path.join(root, "tmp/fr-embedded-identity.json"), JSON.stringify(identity, null, 2) + "\n");
  identity.slice(0, 5).forEach((k) => console.error(" ", k.slice(0, 72)));
}
