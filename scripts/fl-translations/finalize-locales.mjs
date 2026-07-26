#!/usr/bin/env node
/**
 * Finalize fr/ja/zh-cn/ar/he/ru/uk: compose from es rules, apply fr overrides, EN fallback for gaps.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
const dir = path.dirname(fileURLToPath(import.meta.url));

// Run compose first
await import("./compose-locales.mjs");

const es = JSON.parse(
  fs.readFileSync(path.join(root, "tmp/translations/es.json"), "utf8"),
);
const de = JSON.parse(
  fs.readFileSync(path.join(root, "tmp/translations/de.json"), "utf8"),
);
const enKeys = Object.keys(es);
const flagshipKeys = JSON.parse(
  fs.readFileSync(path.join(root, "tmp/flagship-legal-keys/flagship.json"), "utf8"),
);
const legalKeys = JSON.parse(
  fs.readFileSync(path.join(root, "tmp/flagship-legal-keys/legal.json"), "utf8"),
);

const FR_EN = {
  "Human-care purpose that anchors platform ambition":
    "Finalité de soins humains qui ancre l'ambition de la plateforme",
  "Human–machine interaction": "Interaction homme-machine",
  "Human–robot interaction": "Interaction homme-robot",
  "Modeling of physical environments": "Modélisation d'environnements physiques",
  "New sensor systems": "Nouveaux systèmes de capteurs",
  "Possible components": "Composants possibles",
  "Research directions": "Directions de recherche",
  "Non-standard engineering concepts": "Concepts d'ingénierie non standard",
  "AI-assisted decision support": "Aide à la décision assistée par IA",
  "Advanced forms of robotics": "Formes avancées de robotique",
  "Autonomous decision-making": "Prise de décision autonome",
  "Acceptable use": "Utilisation acceptable",
  "Agreement to terms": "Acceptation des conditions",
  "Analytics cookies": "Cookies analytiques",
  "Assessment approach": "Approche d'évaluation",
  "Authorized agent process": "Processus d'agent autorisé",
  "Browser controls": "Contrôles du navigateur",
  "Changes": "Modifications",
  "Changes to this policy": "Modifications de cette politique",
  "Children's privacy": "Confidentialité des enfants",
  "Commitment": "Engagement",
  "Compatibility notes": "Notes de compatibilité",
  "Contact / report channel": "Contact / canal de signalement",
  "Cookie Preferences": "Préférences en matière de cookies",
  "Copyright line": "Ligne de copyright",
  "Correct brand usage": "Utilisation correcte de la marque",
  "Data Rights": "Droits relatifs aux données",
  "Design principles": "Principes de conception",
  "Development-status reminder": "Rappel du statut de développement",
  "Disclaimers": "Avertissements",
  "Entity and contact placeholders": "Espaces réservés entité et contact",
  "Essential cookies": "Cookies essentiels",
  "Feedback and contact": "Retours et contact",
  "Feedback pathway": "Voie de retour",
  "Governing law / venue": "Droit applicable / juridiction",
  "How we may use information": "Comment nous pouvons utiliser les informations",
  "Human oversight": "Supervision humaine",
  "Indemnity": "Indemnisation",
  "Informational nature": "Nature informative",
  "Intellectual property": "Propriété intellectuelle",
  "International transfers": "Transferts internationaux",
  "Jurisdiction notes": "Notes de juridiction",
  "Known limitations": "Limitations connues",
  "Legal bases": "Bases juridiques",
  "Limitation of liability": "Limitation de responsabilité",
  "Managing preferences": "Gestion des préférences",
  "Medical Disclaimer": "Avertissement médical",
  "Nature of the website": "Nature du site web",
  "No guarantee of outcomes": "Aucune garantie de résultats",
  "No professional advice": "Aucun conseil professionnel",
  "No regulatory approval claims": "Aucune allégation d'approbation réglementaire",
  "Not diagnosis or treatment": "Pas un diagnostic ni un traitement",
  "Not emergency support": "Pas une assistance d'urgence",
  "Not medical advice": "Pas un conseil médical",
  "Notice of infringement pathway": "Voie de signalement d'infraction",
  "Overview of rights concepts": "Aperçu des concepts de droits",
  "Ownership": "Propriété",
  "Permission requests": "Demandes d'autorisation",
  "Preference summary": "Résumé des préférences",
  "Preliminary nature of materials": "Nature préliminaire des matériaux",
  "Prohibited use": "Utilisation interdite",
  "Purpose of each category": "Finalité de chaque catégorie",
  "Region sections": "Sections régionales",
  "Regional Privacy Rights": "Droits régionaux en matière de confidentialité",
  "Related documents": "Documents connexes",
  "Related links": "Liens connexes",
  "Related policies": "Politiques connexes",
  "Related policy": "Politique connexe",
  "Request mechanism": "Mécanisme de demande",
  "Request pathways": "Voies de demande",
  "Request submission method": "Méthode de soumission de demande",
  "Research Disclaimer": "Avertissement relatif à la recherche",
  "Reservation of rights": "Réserve de droits",
  "Response timing": "Délais de réponse",
  "Responsible AI": "IA responsable",
  "Retention": "Conservation",
  "Rights summaries": "Résumés des droits",
  "Roadmap non-guarantee": "Absence de garantie de feuille de route",
  "Save / update controls": "Contrôles enregistrer / mettre à jour",
  "Scope definitions": "Définitions du périmètre",
  "Scope of this policy": "Portée de cette politique",
  "Security practices": "Pratiques de sécurité",
  "Sharing and processors": "Partage et sous-traitants",
  "Statement of purpose": "Énoncé de finalité",
  "Target standard": "Norme cible",
  "Terms of Use": "Conditions d'utilisation",
  "Third-party marks": "Marques tierces",
  "Trademark Notice": "Avis relatif aux marques",
  "Trademark list": "Liste des marques",
  "Transparency about development status": "Transparence sur le statut de développement",
  "Types of cookies used": "Types de cookies utilisés",
  "Updates": "Mises à jour",
  "Verification process": "Processus de vérification",
  "Vulnerability reporting": "Signalement de vulnérabilités",
  "Website notice collection point": "Point de collecte des avis du site",
  "What cookies and similar technologies are": "Ce que sont les cookies et technologies similaires",
  "Who we are": "Qui nous sommes",
  "Your rights and choices": "Vos droits et choix",
};

const DE_FR = [
  ["wird veröffentlicht, wenn", "sera publié lorsque"],
  ["werden veröffentlicht, wenn", "seront publiés lorsque"],
  ["In diesem Entwurf werden keine", "Aucune adresse n'est inventée dans ce brouillon"],
  ["Erfinden Sie in diesem Entwurf keine", "N'inventez pas d'adresses"],
  ["Hier wird keine Kontaktadresse erfunden", "Aucune adresse de contact n'est inventée ici"],
  ["Keine Partner, Anbieter oder Auftragsverarbeiter werden hier erfunden", "Aucun partenaire, fournisseur ou sous-traitant n'est inventé ici"],
  ["Nur Platzhalter", "Placeholder uniquement"],
  ["ausstehend — Genehmigung", "en attente d'approbation"],
  ["ausstehend — Rechtsberatung", "en attente de l'avis juridique"],
  ["ausstehend — Rechtsprüfung", "en attente de revue juridique"],
  ["Rechtsprüfung", "revue juridique"],
  ["Entwurf", "brouillon"],
  ["Website", "site web"],
  ["Datenschutz", "confidentialité"],
  ["Nutzungsbedingungen", "Conditions d'utilisation"],
  ["Cookie-Richtlinie", "Politique relative aux cookies"],
  ["Barrierefreiheitserklärung", "Déclaration d'accessibilité"],
  ["Sicherheit", "Sécurité"],
  [" und ", " et "],
  [" oder ", " ou "],
  [" für ", " pour "],
  [" mit ", " avec "],
  [" ohne ", " sans "],
  [" wenn ", " lorsque "],
  ["Die ", "Les "],
  ["Der ", "Le "],
  ["Das ", "Le "],
  [" den ", " le "],
  [" der ", " de la "],
  [" des ", " des "],
  ["Keine ", "Aucune "],
  ["Kein ", "Aucun "],
  ["Nicht ", "Ne pas "],
  ["Informationen", "informations"],
  ["Daten", "données"],
  ["Kontakt", "Contact"],
  ["Besucher", "visiteurs"],
  ["diese Website", "ce site web"],
  ["Diese Seite", "Cette page"],
  ["Dieser Entwurf", "Ce brouillon"],
  ["genehmigt", "approuvé"],
  ["behauptet", "allègue"],
  ["in Entwicklung", "en développement"],
  ["Forschung", "recherche"],
  ["Architektur", "architecture"],
  ["Cookies", "cookies"],
  ["personenbezogene Daten", "informations personnelles"],
  ["Haftungsbeschränkung", "Limitation de responsabilité"],
  ["Geistiges Eigentum", "Propriété intellectuelle"],
  ["Urheberrecht", "droits d'auteur"],
  ["medizinische Beratung", "conseil médical"],
  ["Gesundheitsfachpersonals", "professionnel de santé qualifié"],
  ["ENTWURF FÜR STRUKTURELLE ZWECKE", "BROUILLON À DES FINS STRUCTURELLES"],
  ["Kein endgültiger Rechtstext", "Texte juridique non définitif"],
  ["Ausstehende Rechtsprüfung", "En attente de revue juridique"],
];

function deToFr(text) {
  let out = text;
  for (const [a, b] of DE_FR) out = out.split(a).join(b);
  return out;
}

function writeModule(name, obj) {
  const lines = Object.entries(obj).map(
    ([k, v]) => `  ${JSON.stringify(k)}: ${JSON.stringify(v)},`,
  );
  fs.writeFileSync(
    path.join(dir, name),
    `/** Locale module (D-0161). */\nexport const translations = {\n${lines.join("\n")}\n};\n`,
  );
}

for (const loc of ["fr", "ja", "zh-cn", "ar", "he", "ru", "uk"]) {
  const out = JSON.parse(
    fs.readFileSync(path.join(root, `tmp/translations/${loc}.json`), "utf8"),
  );

  if (loc === "fr") {
    for (const key of enKeys) {
      if (FR_EN[key]) out[key] = FR_EN[key];
      else if (out[key] === es[key] && es[key] !== key && legalKeys.includes(key)) {
        out[key] = deToFr(de[key]);
      }
    }
  }

  for (const key of enKeys) {
    if (out[key] === es[key] && es[key] !== key) out[key] = key;
  }

  fs.writeFileSync(
    path.join(root, `tmp/translations/${loc}.json`),
    JSON.stringify(out, null, 2) + "\n",
  );
  writeModule(
    `${loc}-flagship.mjs`,
    Object.fromEntries(flagshipKeys.map((k) => [k, out[k]])),
  );
  writeModule(
    `${loc}-legal.mjs`,
    Object.fromEntries(legalKeys.map((k) => [k, out[k]])),
  );
  const enFb = enKeys.filter((k) => out[k] === k).length;
  console.log(`${loc}: translated=${360 - enFb} enFallback=${enFb}`);
}
