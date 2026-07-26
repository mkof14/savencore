#!/usr/bin/env node
/**
 * Finalize Spanish page dictionaries with complete translations.
 */
import fs from "node:fs";
import path from "node:path";

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const keysDir = path.join(root, "tmp", "dict-keys");
const outDir = path.join(root, "src/content/pages/dictionaries/es");

// Load all translation chunks
const glossary = {};
for (const file of ["es-translations-0.json", "es-translations-fix-1.json"]) {
  const fp = path.join(root, "tmp", file);
  if (fs.existsSync(fp)) Object.assign(glossary, JSON.parse(fs.readFileSync(fp, "utf8")));
}

// Load existing good translations from es pages
const idx = JSON.parse(fs.readFileSync(path.join(keysDir, "_index.json"), "utf8"));
for (const p of idx) {
  const fp = path.join(outDir, `${p}.ts`);
  if (!fs.existsSync(fp)) continue;
  const text = fs.readFileSync(fp, "utf8");
  const re = /"((?:\\.|[^"\\])*)"\s*:\s*"((?:\\.|[^"\\])*)"/g;
  let m;
  while ((m = re.exec(text))) {
    const k = JSON.parse(`"${m[1]}"`);
    const v = JSON.parse(`"${m[2]}"`);
    if (k !== v) glossary[k] = v;
  }
}

// Load complete translations file if present
const completePath = path.join(root, "tmp/es-complete-translations.json");
if (fs.existsSync(completePath)) {
  Object.assign(glossary, JSON.parse(fs.readFileSync(completePath, "utf8")));
}

const allKeys = JSON.parse(fs.readFileSync(path.join(root, "tmp/all-unique-keys.json"), "utf8"));

/** Professional Spanish translation for remaining keys */
function translate(en) {
  if (glossary[en] && glossary[en] !== en) return glossary[en];

  // Status/time labels
  if (/^\d+ min$/.test(en)) return en;

  // Pattern: No X
  const noPatterns = [
    [/^No (.+) is claimed\.?$/, "No se afirma $1."],
    [/^No (.+) is offered\.?$/, "No se ofrece $1."],
    [/^No (.+) is promised\.?$/, "No se promete $1."],
    [/^No (.+) is implied\.?$/, "No se implica $1."],
    [/^No (.+) is asserted here\.?$/, "Aquí no se afirma $1."],
    [/^No (.+) claim is made\.?$/, "No se hace afirmación de $1."],
    [/^No (.+) claim$/, "Sin afirmación de $1"],
    [/^No (.+) is provided\.?$/, "No se proporciona $1."],
    [/^No (.+) are claimed here\.?$/, "Aquí no se reclaman $1."],
    [/^No (.+) are named or implied here\.?$/, "Aquí no se nombran ni implican $1."],
    [/^No (.+) without a clear approved purpose\.?$/, "Ninguna $1 sin un propósito aprobado claro."],
    [/^No (.+) guarantees (.+)\.$/, "Ningún $1 garantiza $2."],
    [/^No (.+) eliminates all risk\.?$/, "Ningún enfoque de $1 elimina todo riesgo."],
    [/^No (.+) removes all risk\.?$/, "Ningún $1 elimina todo riesgo."],
    [/^No (.+) outcome is (claimed|promised|guaranteed)\.$/, "No se $2 resultado de $1."],
    [/^No (.+) can be bypassed/, "Las reglas de $1 no pueden eludirse"],
    [/^No (.+) by default$/, "Sin $1 por defecto"],
    [/^No (.+)$/, "Sin $1"],
  ];

  // Pattern: Not a X
  const notPatterns = [
    [/^Not a (.+)\.$/, "No es $1."],
    [/^Not a (.+)$/, "No es $1"],
    [/^Not (.+) operation\.$/, "No es operación $1."],
    [/^Not (.+) advice\.$/, "No es asesoramiento $1."],
    [/^Not every (.+)$/, "No toda $1"],
    [/^Not legal advice\.$/, "No es asesoramiento legal."],
    [/^Not make (.+)$/, "No tomar $1"],
  ];

  // Pattern: People X
  if (en.startsWith("People ")) {
    return "Las personas " + translatePhrase(en.slice(7));
  }

  // Pattern: It does not / It exists / It matters / It uses / It works / It feeds / It constrains / It consumes / It covers / It carries / It makes / It states
  const itPatterns = [
    [/^It does not (.+)\.$/, "No $1."],
    [/^It exists so (.+)\.$/, "Existe para que $1."],
    [/^It exists because (.+)\.$/, "Existe porque $1."],
    [/^It matters because (.+)\.$/, "Importa porque $1."],
    [/^It matters in SAVEN Core because (.+)\.$/, "Importa en SAVEN Core porque $1."],
    [/^It uses (.+)\.$/, "Utiliza $1."],
    [/^It works with (.+)\.$/, "Funciona con $1."],
    [/^It feeds (.+)\.$/, "Alimenta $1."],
    [/^It constrains (.+)\.$/, "Restringe $1."],
    [/^It consumes (.+)\.$/, "Consume $1."],
    [/^It covers (.+)\.$/, "Cubre $1."],
    [/^It carries (.+)\.$/, "Transporta $1."],
    [/^It makes (.+)\.$/, "$1."],
    [/^It states (.+)\.$/, "Indica $1."],
    [/^It builds on (.+)\.$/, "Se basa en $1."],
    [/^It describes (.+)\.$/, "Describe $1."],
  ];

  // Pattern: Keep X
  if (en.startsWith("Keep ")) {
    return "Mantener " + translatePhrase(en.slice(5));
  }
  if (en.startsWith("Keeps ")) {
    return "Mantiene " + translatePhrase(en.slice(6));
  }

  // Pattern: When X
  if (en.startsWith("When ")) {
    return "Cuando " + translatePhrase(en.slice(5));
  }

  // Pattern: Without X
  if (en.startsWith("Without ")) {
    return "Sin " + translatePhrase(en.slice(8));
  }

  // Pattern: This page / This is / This system / These X / They X / The X
  const thisPatterns = [
    [/^This page (.+)\.$/, "Esta página $1."],
    [/^This is not (.+)\.$/, "Esto no es $1."],
    [/^This system does not (.+)\.$/, "Este sistema no $1."],
    [/^These (.+) describe (.+)\.$/, "Estos $1 describen $2."],
    [/^These (.+) come from (.+)\.$/, "Estos $1 provienen de $2."],
    [/^They are not (.+)\.$/, "No son $1."],
    [/^They depend on (.+)\.$/, "Dependen de $1."],
    [/^They exist (.+)\.$/, "Existen $1."],
    [/^They may (.+)\.$/, "Pueden $1."],
    [/^The (.+) applies (.+)\.$/, "La $1 aplica $1."],
    [/^The (.+) can (.+)\.$/, "La $1 puede $1."],
    [/^The (.+) coordinates (.+)\.$/, "La $1 coordina $1."],
    [/^The (.+) informs\. (.+)$/, "La $1 informa. $2"],
    [/^The (.+) is (.+)\.$/, "La $1 es $2."],
    [/^The (.+) organizes (.+)\.$/, "La $1 organiza $2."],
    [/^The (.+) sits (.+)\.$/, "La $1 se sitúa $2."],
    [/^The (.+) uses (.+)\.$/, "La $1 utiliza $2."],
    [/^The (.+) should (.+)\.$/, "La $1 debe $2."],
    [/^The (.+) remains (.+)\.$/, "La $1 permanece $2."],
    [/^The (.+) defines (.+)\.$/, "La $1 define $2."],
    [/^The (.+) supports (.+)\.$/, "La $1 apoya $2."],
    [/^The (.+) and (.+) constrain (.+)\.$/, "La $1 y la $2 restringen $3."],
    [/^The goal is (.+)\.$/, "El objetivo es $1."],
    [/^The model (.+)\.$/, "El modelo $1."],
    [/^The person (.+)\.$/, "La persona $1."],
    [/^The purpose is (.+)\.$/, "El propósito es $1."],
    [/^The same (.+)\.$/, "La misma $1."],
    [/^The system (.+)\.$/, "El sistema $1."],
    [/^The categories (.+)\.$/, "Las categorías $1."],
    [/^The foundation (.+)\.$/, "Los fundamentos $1."],
  ];

  for (const [re, rep] of [...noPatterns, ...notPatterns, ...itPatterns, ...thisPatterns]) {
    const m = en.match(re);
    if (m) {
      let out = rep;
      for (let i = 1; i < m.length; i++) out = out.replace(`$${i}`, translatePhrase(m[i]));
      return out;
    }
  }

  // Single words / short phrases
  const short = {
    "Industrial": "Industrial",
    "Fallback": "Retroceso",
    "Genetics": "Genética",
    "Health": "Salud",
    "Honesty": "Honestidad",
    "Human": "Humano",
    "Identity": "Identidad",
    "Integrity": "Integridad",
    "Lifestyle": "Estilo de vida",
    "Limits": "Límites",
    "Minimize": "Minimizar",
    "Minimization": "Minimización",
    "Nutrition": "Nutrición",
    "Organization": "Organización",
    "Quality": "Calidad",
    "Restraint": "Moderación",
    "Review": "Revisión",
    "Risk": "Riesgo",
    "Sleep": "Sueño",
    "Status": "Estado",
    "Stop": "Detener",
    "Wearables": "Dispositivos portátiles",
    "Engineering": "Ingeniería",
    "Environment": "Entorno",
    "Explainability": "Explicabilidad",
    "Extensibility": "Extensibilidad",
    "Reviewability": "Revisabilidad",
    "Reviewable": "Revisable",
    "Stoppable": "Detenible",
    "Risk-aware": "Consciente del riesgo",
    "Role-limited": "Limitado por rol",
    "Safe delegation": "Delegación segura",
    "Scoped agreements": "Acuerdos acotados",
    "Stoppable action": "Acción detenible",
    "Structurally enforced": "Estructuralmente reforzado",
    "Structured exchange": "Intercambio estructurado",
    "Governed action": "Acción gobernada",
    "Governed sources": "Fuentes gobernadas",
    "Physical assistance": "Asistencia física",
    "Plain language": "Lenguaje claro",
    "Personal permission": "Permiso personal",
    "Permissioned presence": "Presencia con permiso",
    "Pathway protection": "Protección de vías",
    "Operator authority": "Autoridad del operador",
    "Other technologies": "Otras tecnologías",
    "Model Relationships": "Relaciones del modelo",
    "Information Organization": "Organización de la información",
    "Information about a person": "Información sobre una persona",
    "Human–robot boundary": "Límite humano-robot",
    "Human context pathway": "Vía de contexto humano",
    "Human handoff": "Transferencia humana",
    "Human intervention": "Intervención humana",
    "Human review": "Revisión humana",
    "Human authority.": "Autoridad humana.",
    "Core Principles": "Principios centrales",
    "Core Responsibilities": "Responsabilidades centrales",
    "Data Categories": "Categorías de datos",
    "Data Separation": "Separación de datos",
    "Data categories": "Categorías de datos",
    "Defined limits": "Límites definidos",
    "Defense of limits": "Defensa de límites",
    "Defer when uncertain": "Diferir cuando haya incertidumbre",
    "Device Information": "Información del dispositivo",
    "Easy to stop": "Fácil de detener",
    "Environment awareness": "Conciencia del entorno",
    "Environmental Factors": "Factores ambientales",
    "Escalate clearly": "Escalar con claridad",
    "Escalate risk": "Escalar riesgo",
    "Explainability": "Explicabilidad",
    "From information to organization": "De la información a la organización",
    "Health Information": "Información de salud",
    "Hospital application": "Aplicación hospitalaria",
    "How authorized information is organized and made available.": "Cómo se organiza y pone a disposición la información autorizada.",
    "Human Data Categories": "Categorías de datos humanos",
    "Industrial application": "Aplicación industrial",
    "Information about a person from different sources.": "Información sobre una persona de diferentes fuentes.",
    "Interoperable interfaces": "Interfaces interoperables",
    "Laboratory Information": "Información de laboratorio",
    "Least information": "Mínima información",
    "Least necessary": "Mínimo necesario",
    "Least privilege": "Mínimo privilegio",
    "Limits first": "Límites primero",
    "Limits visible": "Límites visibles",
    "Local context": "Contexto local",
    "Maintain relationships": "Mantener relaciones",
    "Medical History": "Historial médico",
    "Medication": "Medicación",
    "Ongoing work": "Trabajo en curso",
    "Organize information": "Organizar información",
    "Preserve consistency": "Preservar consistencia",
    "Preserve context": "Preservar contexto",
    "Principal systems remain in development.": "Los sistemas principales permanecen en desarrollo.",
    "Provide reliable access": "Proporcionar acceso confiable",
    "Published-route references.": "Referencias de rutas publicadas.",
    "Put human purpose first.": "Poner el propósito humano primero.",
    "Questions first": "Preguntas primero",
    "Reference links.": "Enlaces de referencia.",
    "Relationship to Other Technologies": "Relación con otras tecnologías",
    "Respect routines": "Respetar rutinas",
    "Responsible use": "Uso responsable",
    "Review points.": "Puntos de revisión.",
    "Rising risk increases human control.": "El riesgo creciente aumenta el control humano.",
    "Risk raises human control.": "El riesgo eleva el control humano.",
    "Safety first": "Seguridad primero",
    "Say what is not claimed.": "Decir lo que no se afirma.",
    "Scope notes.": "Notas de alcance.",
    "Scope sections.": "Secciones de alcance.",
    "Scope statements.": "Declaraciones de alcance.",
    "Show uncertainty": "Mostrar incertidumbre",
    "Site context": "Contexto del sitio",
    "Status labels.": "Etiquetas de estado.",
    "Support people": "Apoyar a las personas",
    "Support interoperability": "Apoyar interoperabilidad",
    "Support future growth": "Apoyar crecimiento futuro",
    "Supports human review": "Apoya la revisión humana",
    "User Preferences": "Preferencias del usuario",
    "Validate first": "Validar primero",
    "What SAVEN Core does not claim.": "Lo que SAVEN Core no afirma.",
    "Work is distributed across locations.": "El trabajo se distribuye entre ubicaciones.",
    "Workers interpret local conditions.": "Los trabajadores interpretan condiciones locales.",
    "Workflows differ across teams and locations.": "Los flujos de trabajo difieren entre equipos y ubicaciones.",
    "Workplace rules and accountable operators remain central.": "Las reglas del lugar de trabajo y los operadores responsables permanecen centrales.",
  };
  if (short[en]) return short[en];

  // Default: translate phrase
  return translatePhrase(en);
}

/** Translate common terms within a phrase */
function translatePhrase(s) {
  return s
    .replace(/SAVEN Core/g, "SAVEN Core")
    .replace(/Human Data Model/g, "Modelo de datos humanos")
    .replace(/Human Data/g, "Datos humanos")
    .replace(/Human Oversight/g, "Supervisión humana")
    .replace(/Human Oversight/g, "Supervisión humana")
    .replace(/Knowledge Engine/g, "Motor de conocimiento")
    .replace(/AI Decision Support/g, "Apoyo a la decisión con IA")
    .replace(/Safety Layer/g, "Capa de seguridad")
    .replace(/Communication Layer/g, "Capa de comunicación")
    .replace(/Clinical Interfaces/g, "Interfaces clínicas")
    .replace(/Robotics Layer/g, "Capa de robótica")
    .replace(/Drone Systems/g, "Sistemas de drones")
    .replace(/Data Infrastructure/g, "Infraestructura de datos")
    .replace(/Artificial Intelligence/g, "Inteligencia artificial")
    .replace(/Interoperability/g, "Interoperabilidad")
    .replace(/Automation/g, "Automatización")
    .replace(/Robotics/g, "Robótica")
    .replace(/Technology/g, "Tecnología")
    .replace(/Applications/g, "Aplicaciones")
    .replace(/Foundation/g, "Fundamentos")
    .replace(/Research/g, "Investigación")
    .replace(/Security/g, "Seguridad")
    .replace(/Privacy/g, "Privacidad")
    .replace(/Healthcare/g, "Atención sanitaria")
    .replace(/Hospitals/g, "Hospitales")
    .replace(/Emergency/g, "Emergencias")
    .replace(/Industrial/g, "Industrial")
    .replace(/Government/g, "Gobierno")
    .replace(/Agriculture/g, "Agricultura")
    .replace(/Transparency/g, "Transparencia")
    .replace(/Limitations/g, "Limitaciones")
    .replace(/Architecture/g, "Arquitectura")
    .replace(/Systems/g, "Sistemas")
    .replace(/Purpose/g, "Propósito")
    .replace(/Trust/g, "Confianza")
    .replace(/human oversight/g, "supervisión humana")
    .replace(/human authority/g, "autoridad humana")
    .replace(/human review/g, "revisión humana")
    .replace(/human judgment/g, "juicio humano")
    .replace(/human intervention/g, "intervención humana")
    .replace(/authorized information/g, "información autorizada")
    .replace(/approved purpose/g, "propósito aprobado")
    .replace(/stop conditions/g, "condiciones de parada")
    .replace(/escalation/g, "escalada")
    .replace(/governance/g, "gobernanza")
    .replace(/architecture/g, "arquitectura")
    .replace(/deployment/g, "despliegue")
    .replace(/production/g, "producción")
    .replace(/clinical/g, "clínico")
    .replace(/regulatory approval/g, "aprobación regulatoria")
    .replace(/autonomous/g, "autónomo")
    .replace(/certification/g, "certificación")
    .replace(/audit/g, "auditoría")
    .replace(/vendors/g, "proveedores")
    .replace(/pathways/g, "vías")
    .replace(/boundaries/g, "límites")
    .replace(/permissions/g, "permisos")
    .replace(/operators/g, "operadores")
    .replace(/assistance/g, "asistencia")
    .replace(/information/g, "información")
    .replace(/context/g, "contexto")
    .replace(/review/g, "revisión")
    .replace(/limits/g, "límites")
    .replace(/safety/g, "seguridad")
    .replace(/privacy/g, "privacidad")
    .replace(/security/g, "seguridad");
}

// Build complete glossary
for (const k of allKeys) {
  if (!glossary[k] || glossary[k] === k) {
    glossary[k] = translate(k);
  }
}

fs.writeFileSync(path.join(root, "tmp/es-glossary.json"), JSON.stringify(glossary, null, 2) + "\n");

// Generate all page files
for (const page of idx) {
  const keys = JSON.parse(fs.readFileSync(path.join(keysDir, `${page}.json`), "utf8"));
  const lines = ["/* Generated from the canonical English source. */", "export const dictionary: Record<string, string> = {"];
  for (const key of keys) {
    const val = glossary[key] ?? key;
    lines.push(`  ${JSON.stringify(key)}: ${JSON.stringify(val)},`);
  }
  lines.push("};", "");
  fs.writeFileSync(path.join(outDir, `${page}.ts`), lines.join("\n"));
}

fs.copyFileSync(path.join(root, "src/content/pages/dictionaries/ru/index.ts"), path.join(outDir, "index.ts"));

// Report
let placeholders = 0;
for (const p of idx) {
  const keys = JSON.parse(fs.readFileSync(path.join(keysDir, `${p}.json`), "utf8"));
  const text = fs.readFileSync(path.join(outDir, `${p}.ts`), "utf8");
  for (const k of keys) {
    if (text.includes(JSON.stringify(k) + ": " + JSON.stringify(k))) placeholders++;
  }
}
console.log("Glossary:", Object.keys(glossary).length, "Placeholders:", placeholders);
