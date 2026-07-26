#!/usr/bin/env node
/** Build fr locale modules: es-flagship FR map + de-legal de→fr, EN fallback for gaps. */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
const dir = path.dirname(fileURLToPath(import.meta.url));
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

const { translations: esFlagship } = await import("./es-flagship.mjs");
const { translations: deLegal } = await import("./de-legal.mjs");

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
  ["Webseite", "site web"],
  ["Datenschutz", "confidentialité"],
  ["Datenschutzerklärung", "Politique de confidentialité"],
  ["Nutzungsbedingungen", "Conditions d'utilisation"],
  ["Cookie-Richtlinie", "Politique relative aux cookies"],
  ["Cookie-Einstellungen", "Préférences en matière de cookies"],
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
  ["Datum ausstehend — Rechtsprüfung", "Date en attente de revue juridique"],
  ["Verantwortungsvolle KI", "IA responsable"],
  ["Medizinischer Haftungsausschluss", "Avertissement médical"],
  ["Forschungshaftungsausschluss", "Avertissement relatif à la recherche"],
  ["Markenhinweis", "Avis relatif aux marques"],
  ["Urheberrechtshinweis", "Avis de droits d'auteur"],
  ["Datenrechte", "Droits relatifs aux données"],
  ["Regionale Datenschutzrechte", "Droits régionaux en matière de confidentialité"],
  ["Rechtliche Hinweise", "Mentions légales"],
  ["Überblick", "Aperçu"],
  ["Änderungen", "Modifications"],
  ["Investoren", "Investisseurs"],
  ["Labore", "Laboratoires"],
  ["Systeme", "Systèmes"],
  ["Technologie", "Technologie"],
  ["Vertrauen", "Confiance"],
  ["Ingenieur", "Ingénierie"],
  ["Robotik", "Robotique"],
  ["Entwicklung", "développement"],
  ["Fürsorge", "soins"],
  ["Krankenhäusern", "hôpitaux"],
  ["zu Hause", "à domicile"],
];

function deToFr(text) {
  let out = text;
  for (const [a, b] of DE_FR) out = out.split(a).join(b);
  return out;
}

const GERMAN =
  /\b(und|oder|wird|Keine|Der |Die |Das |Fähigkeits|Bestandteile|genannten|mögliche|Entwickelt|menschliche|Bewegung|Mobilität|genutzte|Räume|Grenzen|Investoren|Labore|Systeme|Forschung|Vertrauen|Ingenieur|Robotik|Mensch|Roboter|Befehl|Kontrolle|Unternehmens)\b/;

const SPANISH =
  /\b(ingeniería|robótica|desarrollo|investigación|confianza|laboratorio|interfaz|páginas|borrador|despliegue|operativo|capital|inversores|empresa|tecnología|sistemas|arquitectura|Formas|avanzadas|Mando|Progreso|Estado|para |del |de la|Los |Las |cuando |con el|en el|diseñado|apoyar|cuidado|hogar|hospitales|afirma|material|público)\b/i;

// ES flagship value → FR (hand-authored subset; gaps fall back to EN)
const ES_VAL_FR = {
  "Un sistema para interactuar con robots y máquinas autónomas, de modo que las personas sigan al mando del trabajo físico complejo.":
    "Un système pour interagir avec des robots et des machines autonomes — afin que les personnes restent aux commandes d'un travail physique complexe.",
  "Apoyo a la decisión con IA": "Aide à la décision par IA",
  "Apoyo a la decisión asistido por IA": "Aide à la décision assistée par IA",
  "Acerca de": "À propos",
  "Formas avanzadas de robótica": "Formes avancées de robotique",
  "Toma de decisiones autónoma": "Prise de décision autonome",
  "Movilidad autónoma: desplazamiento por espacios humanos compartidos con límites visibles":
    "Mobilité autonome — déplacement dans des espaces humains partagés avec des limites visibles",
  "Diseñado para apoyar el cuidado humano en hospitales, en el hogar y dondequiera que ocurra la vida, sin afirmar despliegue operativo.":
    "Conçu pour soutenir les soins humains à l'hôpital, à domicile et partout où la vie se déroule — sans prétendre à un déploiement opérationnel.",
  "Las áreas de capacidad siguientes son posibles componentes de la arquitectura. Ninguna se presenta como módulos de producto entregados.":
    "Les domaines de capacité ci-dessous sont des composants possibles de l'architecture. Aucun n'est présenté comme un module produit livré.",
  "Mando y control": "Commande et contrôle",
  "Dirección de la empresa: Inteligencia para el mundo físico":
    "Direction de l'entreprise : Intelligence for the Physical World",
  "Progreso del desarrollo": "Progrès du développement",
  "Estado del desarrollo": "État du développement",
  "Inicio": "Accueil",
  "Inversores": "Investisseurs",
  "Laboratorios": "Laboratoires",
  "Sistemas": "Systèmes",
  "Tecnología": "Technologie",
  "Investigación": "Recherche",
  "En desarrollo": "En développement",
  "Iniciar sesión / Registrarse": "Se connecter / S'inscrire",
  "Qué es esto": "De quoi il s'agit",
  "Qué construimos": "Ce que nous construisons",
  "Por qué importa": "Pourquoi c'est important",
  "Adónde ir a continuación": "Où aller ensuite",
  "Líneas de trabajo": "Filières de travail",
  "Estado": "Statut",
  "BORRADOR CON FINES ESTRUCTURALES — No es texto legal definitivo. Pendiente de revisión legal.":
    "BROUILLON À DES FINS STRUCTURELLES — Texte juridique non définitif. En attente de revue juridique.",
  "Fecha pendiente de revisión legal": "Date en attente de revue juridique",
};

function cleanOrEn(val, key) {
  if (GERMAN.test(val) || SPANISH.test(val)) return key;
  return val;
}

const fr = {};
for (const key of enKeys) {
  if (flagshipKeys.includes(key)) {
    const esVal = esFlagship[key];
    const candidate = ES_VAL_FR[esVal];
    fr[key] = candidate ? cleanOrEn(candidate, key) : key;
  } else if (legalKeys.includes(key)) {
    const candidate = deToFr(deLegal[key] ?? de[key]);
    fr[key] = cleanOrEn(candidate, key);
  } else {
    fr[key] = key;
  }
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

fs.writeFileSync(
  path.join(root, "tmp/translations/fr.json"),
  JSON.stringify(fr, null, 2) + "\n",
);
writeModule(
  "fr-flagship.mjs",
  Object.fromEntries(flagshipKeys.map((k) => [k, fr[k]])),
);
writeModule(
  "fr-legal.mjs",
  Object.fromEntries(legalKeys.map((k) => [k, fr[k]])),
);

const enFb = enKeys.filter((k) => fr[k] === k).length;
console.log(`fr: ${360 - enFb} translated, ${enFb} EN fallback`);
