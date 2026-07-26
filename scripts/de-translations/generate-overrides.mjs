#!/usr/bin/env node
/**
 * Generate overrides.mjs with proper German for all keys not in chunk1/purpose/research.
 * Uses ru dictionary files as semantic reference.
 */
import fs from "node:fs";
import path from "node:path";

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), "../..");
const ruDir = path.join(root, "src/content/pages/dictionaries/ru");
const keysDir = path.join(root, "tmp/dict-keys");
const pages = JSON.parse(fs.readFileSync(path.join(keysDir, "_index.json"), "utf8"));

function parseDict(text) {
  const map = {};
  const re = /"((?:\\.|[^"\\])*)"\s*:\s*"((?:\\.|[^"\\])*)"/g;
  let m;
  while ((m = re.exec(text))) {
    map[JSON.parse(`"${m[1]}"`)] = JSON.parse(`"${m[2]}"`);
  }
  return map;
}

function esc(s) {
  return s.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, "\\n");
}

// Complete German translations for ALL keys (ru-informed, professional Sie-Form)
const DE = {
"Flow from observe through understand, evaluate and assist to learn, under permissions and human oversight.": "Fluss von Beobachten über Verstehen, Bewerten und Unterstützen zu Lernen — unter Berechtigungen und menschlicher Aufsicht.",
"For how the model organizes information, read the Human Data Model page.": "Wie das Modell Informationen organisiert, lesen Sie auf der Seite Modell menschlicher Daten.",
"For what Human Data means as information, read the Human Data page.": "Was Menschliche Daten als Information bedeuten, lesen Sie auf der Seite Menschliche Daten.",
"Foundation hierarchy": "Grundlagen-Hierarchie",
"Foundation information describes intended architecture and development relationships. It does not imply commercial deployment, clinical use or regulatory approval.": "Grundlageninformationen beschreiben beabsichtigte Architektur und Entwicklungsbeziehungen. Sie implizieren keinen kommerziellen Einsatz, klinische Nutzung oder behördliche Zulassung.",
"Foundation layers": "Grundlagenschichten",
"Foundation layers define the conditions under which systems such as the Robotics Interface, Systems Architecture, SAVEN AI, the Drone Platform and the Human Data Model Interface may operate.": "Grundlagenschichten definieren die Bedingungen, unter denen Systeme wie Robotics Interface, Systems Architecture, SAVEN AI, die Drohnen-Plattform und das Human Data Model Interface operieren dürfen.",
"Foundation, Research, Applications": "Grundlagen, Forschung, Anwendungen",
"Frame questions around human support.": "Fragen um menschliche Unterstützung strukturieren.",
"From information to organization": "Von Information zu Organisation",
"Future extension for accountable public use.": "Zukünftige Erweiterung für verantwortungsvolle öffentliche Nutzung.",
"Future extension for bounded physical work.": "Zukünftige Erweiterung für begrenzte physische Arbeit.",
"Future extension for field and outdoor work.": "Zukünftige Erweiterung für Feld- und Außenarbeit.",
"Future research may examine context validity outdoors.": "Künftige Forschung kann Gültigkeit von Kontext im Freien untersuchen.",
"Future research may examine governance for urgent contexts.": "Künftige Forschung kann Governance für dringende Kontexte untersuchen.",
"Future updates may add evidence when it is approved and available.": "Künftige Updates können Belege hinzufügen, wenn sie genehmigt und verfügbar sind.",
"Future work may add change records.": "Künftige Arbeit kann Änderungsprotokolle hinzufügen.",
"Future work may add reviewed policies and clearer accountability records.": "Künftige Arbeit kann geprüfte Richtlinien und klarere Verantwortungsnachweise hinzufügen.",
"Future work may define public-interest review methods.": "Künftige Arbeit kann Methoden zur Prüfung im öffentlichen Interesse definieren.",
"Future work may define review protocols.": "Künftige Arbeit kann Prüfprotokolle definieren.",
"Future work may document evaluated institutional workflows without promising deployment.": "Künftige Arbeit kann evaluierte institutionelle Abläufe dokumentieren — ohne Einsatz zu versprechen.",
"Future work may document review processes.": "Künftige Arbeit kann Prüfprozesse dokumentieren.",
"Future work may examine consent, accessibility and changing household contexts.": "Künftige Arbeit kann Einwilligung, Barrierefreiheit und sich ändernde Haushaltskontexte untersuchen.",
"Future work may provide reviewed reporting processes.": "Künftige Arbeit kann geprüfte Berichtsprozesse bereitstellen.",
"Future work may publish reviewed governance processes.": "Künftige Arbeit kann geprüfte Governance-Prozesse veröffentlichen.",
"A connected path from human understanding to physical systems.": "Ein zusammenhängender Weg vom menschlichen Verstehen zu physischen Systemen.",
"SAVEN Core is the physical systems layer of a broader foundation. The sequence below defines how human-centered understanding becomes intelligence architecture, execution capability and integrated engineering systems.": "SAVEN Core ist die physische Systemschicht einer breiteren Grundlage. Die folgende Sequenz definiert, wie menschenzentriertes Verstehen zu Intelligenzarchitektur, Ausführungsfähigkeit und integrierten technischen Systemen wird.",
"Vertical hierarchy from BioMath Life through BioMath Core and SAVEN to SAVEN Core.": "Vertikale Hierarchie von BioMath Life über BioMath Core und SAVEN zu SAVEN Core.",
"Layer model": "Schichtenmodell",
"Stacked layer model showing SAVEN Core resting on SAVEN, BioMath Core and BioMath Life.": "Gestapeltes Schichtenmodell, das SAVEN Core auf SAVEN, BioMath Core und BioMath Life zeigt.",
"Governed system flow": "Gesteueter Systemfluss",
"Relationship model": "Beziehungsmodell",
"Relationship between foundation layers, Human Data Model, systems and technology disciplines.": "Beziehung zwischen Grundlagenschichten, Modell menschlicher Daten, Systemen und Technologiedisziplinen.",
"System relationships": "Systembeziehungen",
"Technology relationships": "Technologiebeziehungen",
"System Relationships": "Systembeziehungen",
"Technology Relationships": "Technologiebeziehungen",
"The Human Data Model is the controlled representation of human context used by the foundation. It organizes authorized signals, history and changing conditions so systems can interpret context without treating people as unstructured data sources.": "Das Modell menschlicher Daten ist die kontrollierte Darstellung menschlichen Kontexts, die die Grundlage nutzt. Es organisiert autorisierte Signale, Verlauf und sich ändernde Bedingungen, damit Systeme Kontext interpretieren können, ohne Menschen als unstrukturierte Datenquellen zu behandeln.",
"Systems inherit purpose, permissions and oversight requirements from the foundation. They do not redefine the human priority of the architecture.": "Systeme erben Zweck, Berechtigungen und Aufsichtsanforderungen von der Grundlage. Sie definieren die menschliche Priorität der Architektur nicht neu.",
"Technology disciplines — including artificial intelligence, robotics, autonomous systems, human data and intelligence, safety architecture and privacy architecture — are combined around the foundation sequence.": "Technologiedisziplinen — einschließlich künstlicher Intelligenz, Robotik, autonomer Systeme, menschlicher Daten und Intelligenz, Sicherheitsarchitektur und Datenschutzarchitektur — sind um die Grundlagensequenz verbunden.",
"No single discipline is the purpose by itself. Each has a defined role inside the path from human understanding to physical assistance.": "Keine einzelne Disziplin ist der Zweck an sich. Jede hat eine definierte Rolle auf dem Weg vom menschlichen Verstehen zur physischen Unterstützung.",
"Important actions remain subject to permissions, defined safeguards and human oversight. Evidence and responsibility constrain expansion.": "Wichtige Handlungen unterliegen weiterhin Berechtigungen, definierten Schutzmaßnahmen und menschlicher Aufsicht. Belege und Verantwortung begrenzen die Erweiterung.",
};

// Load all ru keys and fill remaining from ru-informed German map
const allKeys = JSON.parse(fs.readFileSync(path.join(root, "tmp/de-unique-keys.json"), "utf8"));
import { chunk1 } from "./chunk1.mjs";

const have = new Set(Object.keys(chunk1));
for (const p of ["purpose", "research"]) {
  const t = fs.readFileSync(path.join(root, `src/content/pages/dictionaries/de/${p}.ts`), "utf8");
  parseDict(t);
  Object.keys(parseDict(t)).forEach(k => have.add(k));
}

// Import batch translations from data files
const dataDir = path.join(path.dirname(new URL(import.meta.url).pathname), "data");
for (const f of ["batch-a.mjs", "batch-b.mjs", "batch-c.mjs", "batch-d.mjs"]) {
  const fp = path.join(dataDir, f);
  if (fs.existsSync(fp)) {
    const mod = await import(`./data/${f}`);
    Object.assign(DE, mod.default);
  }
}

const missing = allKeys.filter(k => !have.has(k) && !(k in DE));
console.log("DE map size:", Object.keys(DE).length, "Still missing:", missing.length);
if (missing.length) fs.writeFileSync(path.join(root, "tmp/de-gen-missing.json"), JSON.stringify(missing, null, 2));

const lines = Object.entries(DE).map(([k, v]) => `  "${esc(k)}": "${esc(v)}",`);
const out = `/** German overrides — keys not in chunk1/purpose/research */\nexport const overrides = {\n${lines.join("\n")}\n};\n`;
fs.writeFileSync(path.join(path.dirname(new URL(import.meta.url).pathname), "overrides.mjs"), out);
console.log("Wrote overrides.mjs with", Object.keys(DE).length, "entries");
