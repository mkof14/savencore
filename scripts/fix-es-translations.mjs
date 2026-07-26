#!/usr/bin/env node
/** Fix broken hybrid translations in es dictionary files */
import fs from "node:fs";
import path from "node:path";

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const outDir = path.join(root, "src/content/pages/dictionaries/es");
const idx = JSON.parse(fs.readFileSync(path.join(root, "tmp/dict-keys/_index.json"), "utf8"));

// Load all good manual translations
const glossary = {};
for (const file of ["es-translations-0.json", "es-translations-fix-1.json", "es-complete-translations.json", "es-fix-batch-2.json"]) {
  const fp = path.join(root, "tmp", file);
  if (fs.existsSync(fp)) Object.assign(glossary, JSON.parse(fs.readFileSync(fp, "utf8")));
}

// Hub pages with hand-crafted translations (restore quality)
const hubFixes = {
  "Purpose": "Propósito",
  "Intelligent systems built to support human life.": "Sistemas inteligentes creados para apoyar la vida humana.",
  "SAVEN Core builds physical and digital systems that support people in hospitals, at home and in everyday life. The work begins with human purpose, then proceeds to architecture, engineering and governed assistance.": "SAVEN Core desarrolla sistemas físicos y digitales que apoyan a las personas en hospitales, en el hogar y en la vida cotidiana. El trabajo comienza con el propósito humano y continúa con arquitectura, ingeniería y asistencia gobernada.",
  "What we build": "Qué construimos",
  "What We Build": "Qué construimos",
  "People remain responsible for judgment, control and meaningful decisions.": "Las personas siguen siendo responsables del juicio, el control y las decisiones significativas.",
  "People remain able to direct, pause or refuse physical assistance pathways.": "Las personas siguen pudiendo dirigir, pausar o rechazar vías de asistencia física.",
  "People remain responsible for consequential physical outcomes.": "Las personas siguen siendo responsables de los resultados físicos consecuentes.",
  "People remain responsible for interpretation.": "Las personas siguen siendo responsables de la interpretación.",
  "People remain decision owners.": "Las personas siguen siendo titulares de las decisiones.",
  "People remain accountable.": "Las personas siguen siendo responsables.",
  "People remain responsible for clinical decisions.": "Las personas siguen siendo responsables de las decisiones clínicas.",
  "People remain responsible for decisions.": "Las personas siguen siendo responsables de las decisiones.",
  "People need visible control.": "Las personas necesitan control visible.",
  "People need clear ways to decline or stop assistance.": "Las personas necesitan formas claras de rechazar o detener la asistencia.",
  "People can escalate concerns.": "Las personas pueden escalar preocupaciones.",
  "People must be able to reclaim control.": "Las personas deben poder recuperar el control.",
  "Home is an intended context where support must respect personal routines, consent and control.": "El hogar es un contexto previsto donde el apoyo debe respetar rutinas personales, consentimiento y control.",
  "Hospitals are intended contexts with defined roles, changing conditions and formal accountability.": "Los hospitales son contextos previstos con roles definidos, condiciones cambiantes y responsabilidad formal.",
  "Robotics is the Technology discipline for devices and interfaces that act in the physical world under governance, permission and safety limits.": "La robótica es la disciplina de Tecnología para dispositivos e interfaces que actúan en el mundo físico bajo gobernanza, permisos y límites de seguridad.",
  "Robotics is the Technology discipline for devices and interfaces that act in the physical world under governance. It enables physical interaction, mobility and assistance inside clear limits.": "La robótica es la disciplina de Tecnología para dispositivos e interfaces que actúan en el mundo físico bajo gobernanza. Permite interacción física, movilidad y asistencia dentro de límites claros.",
  "These concepts describe Robotics architecture. They are not hardware catalogs or vendor platforms.": "Estos conceptos describen la arquitectura de robótica. No son catálogos de hardware ni plataformas de proveedores.",
  "Physical systems must respect the surroundings and safety limits of the setting they enter.": "Los sistemas físicos deben respetar el entorno y los límites de seguridad del lugar que ingresan.",
  "Important physical outcomes remain under human authority.": "Los resultados físicos importantes permanecen bajo autoridad humana.",
  "It matters because some support happens in real spaces—homes, hospitals and other environments—not only on screens. Robotics stays connected to Automation, safety constraints and human oversight. It does not claim deployed robot products here.": "Importa porque parte del apoyo ocurre en espacios reales — hogares, hospitales y otros entornos — no solo en pantallas. La robótica permanece conectada a la automatización, restricciones de seguridad y supervisión humana. Aquí no se reclaman productos robóticos desplegados.",
  "Without clear governance, physical systems can overclaim readiness or authority.": "Sin gobernanza clara, los sistemas físicos pueden exagerar la preparación o la autoridad.",
  "Status remains conceptual for this discipline. No operational deployment is claimed.": "El estado permanece conceptual para esta disciplina. No se afirma despliegue operativo.",
  "The Robotics Layer coordinates approved interaction between digital systems and robotic systems. It does not imply autonomous deployment without oversight.": "La Capa de robótica coordina la interacción aprobada entre sistemas digitales y sistemas robóticos. No implica despliegue autónomo sin supervisión.",
  "Physical pathways need authorization.": "Las vías físicas necesitan autorización.",
  "Physical pathways must be able to stop.": "Las vías físicas deben poder detenerse.",
  "This page does not claim operating robot fleets.": "Esta página no afirma flotas de robots en operación.",
  "It builds on Technology foundations such as Robotics and Automation. Drone Systems apply this layer to aerial use. Applications describe where physical assistance may later matter.": "Se basa en fundamentos de Tecnología como Robótica y Automatización. Los Sistemas de drones aplican esta capa al uso aéreo. Las aplicaciones describen dónde la asistencia física puede importar posteriormente.",
  "The Safety Layer and Communication Layer constrain what may proceed.": "La Capa de seguridad y la Capa de comunicación restringen lo que puede proceder.",
  "The Robotics Layer may carry approved action. It does not grant its own authority.": "La Capa de robótica puede ejecutar acción aprobada. No otorga su propia autoridad.",
  "This page does not claim clinical integration.": "Esta página no afirma integración clínica.",
  "Systems need clear handoffs.": "Los sistemas necesitan transferencias claras.",
  "Technology privacy and security are engineering foundations.": "La privacidad y la seguridad de Tecnología son fundamentos de ingeniería.",
  "Privacy is not a guarantee of secrecy.": "La privacidad no es una garantía de secreto.",
  "Information can affect people beyond its original context.": "La información puede afectar a las personas más allá de su contexto original.",
  "It does not replace Technology Privacy.": "No reemplaza la Privacidad de Tecnología.",
  "This page does not claim fleets, customers or open surveillance.": "Esta página no afirma flotas, clientes ni vigilancia abierta.",
  "They depend on Robotics, Automation, Security, the Communication Layer and the Safety Layer. Applications may later name contexts such as emergency or agriculture. This page does not claim those operations are live.": "Dependen de Robótica, Automatización, Seguridad, la Capa de comunicación y la Capa de seguridad. Las aplicaciones pueden nombrar posteriormente contextos como emergencias o agricultura. Esta página no afirma que esas operaciones estén activas.",
  "The Safety Layer can stop or defer operations.": "La Capa de seguridad puede detener o diferir operaciones.",
  "This page does not claim completed safety audits.": "Esta página no afirma auditorías de seguridad completadas.",
  "It exists because assistance and physical pathways can affect people. Shared stop rules protect the whole architecture.": "Existe porque la asistencia y las vías físicas pueden afectar a las personas. Las reglas compartidas de parada protegen toda la arquitectura.",
  "Technology foundations such as Privacy and Security protect information and access. The Safety Layer constrains what systems may do next. Applications inherit those limits in each context of use.": "Los fundamentos de Tecnología como Privacidad y Seguridad protegen la información y el acceso. La Capa de seguridad restringe lo que los sistemas pueden hacer a continuación. Las aplicaciones heredan esos límites en cada contexto de uso.",
  "The Safety Layer is cross-cutting. It is not a child of one subsystem alone.": "La Capa de seguridad es transversal. No es hija de un solo subsistema.",
  "It works with Privacy and Security. It does not replace them.": "Funciona con Privacidad y Seguridad. No las reemplaza.",
  "Systems may enforce limits. People remain responsible for important overrides.": "Los sistemas pueden hacer cumplir límites. Las personas siguen siendo responsables de anulaciones importantes.",
  "Only approved context should be considered.": "Solo debe considerarse el contexto aprobado.",
  "Privacy limits are particularly important in personal spaces.": "Los límites de privacidad son especialmente importantes en espacios personales.",
};

Object.assign(glossary, hubFixes);

// Read ru dictionaries for remaining keys - use as fallback structure only
// For keys still missing, translate from English using ru as reference
const ruDir = path.join(root, "src/content/pages/dictionaries/ru");
const allKeys = JSON.parse(fs.readFileSync(path.join(root, "tmp/all-unique-keys.json"), "utf8"));

// Import finalize translations from tmp/es-glossary.json for keys not in manual glossary
// but filter out bad hybrid ones (contain English auxiliaries after Spanish start)
const badPattern = /\b(is|are|was|were|have|has|had|will|would|should|must|can|could|may|might|need|needs|remain|remains|stays|stay|does|do|not|only|where|when|with|without|the|and|or|for|from|this|that|those|these|they|it|its|their|our|your|people|systems|support|describe|claim|inherits|protect|constrain|enables|builds|works|does not|is not|are not|can not|cannot|should not|must not|may not|need not|have not|has not|will not|would not|could not|might not|might not)\b/i;

function isBadTranslation(en, es) {
  if (en === es) return false; // same word OK (Industrial, 8 min)
  if (!es || es === en) return true;
  // Check for English words in translation (excluding brand names and known Spanish)
  const englishWords = es.match(/\b(is|are|remain|remains|need|needs|should|must|can|does|do|have|will|would|could|may|might|not|only|where|when|with|without|the|and|or|for|from|this|that|they|it|people|systems|support|describe|claim|protect|constrain|enables|builds|works|inherit|inherits|affect|affects|happens|stays|connected|without|inside|outside|above|below|between|under|over|through|during|before|after|while|because|since|until|unless|although|though|whether|either|neither|both|each|every|all|any|some|no|none|other|another|such|same|different|new|old|first|last|next|previous|current|future|past|present|real|clear|open|closed|live|dead|true|false|yes|no|ok|okay|well|also|too|very|much|many|more|most|less|least|few|little|big|small|large|long|short|high|low|good|bad|best|worst|better|worse|same|different|important|necessary|possible|impossible|likely|unlikely|certain|uncertain|sure|unsure|ready|unready|able|unable|willing|unwilling|allowed|forbidden|required|optional|mandatory|voluntary|automatic|manual|physical|digital|virtual|local|global|public|private|personal|general|specific|special|normal|usual|unusual|common|rare|standard|custom|default|primary|secondary|main|minor|major|central|peripheral|internal|external|inner|outer|upper|lower|left|right|front|back|top|bottom|middle|center|side|end|start|begin|finish|complete|incomplete|full|empty|whole|partial|total|net|gross|direct|indirect|explicit|implicit|formal|informal|official|unofficial|legal|illegal|valid|invalid|correct|incorrect|accurate|inaccurate|precise|imprecise|exact|approximate|fixed|variable|constant|changing|stable|unstable|static|dynamic|active|passive|positive|negative|neutral|balanced|unbalanced|fair|unfair|just|unjust|right|wrong|correct|incorrect|true|false|real|fake|genuine|authentic|original|copy|duplicate|unique|common|rare|special|ordinary|extraordinary|simple|complex|easy|hard|difficult|simple|complicated|basic|advanced|beginner|expert|novice|professional|amateur|skilled|unskilled|trained|untrained|experienced|inexperienced|qualified|unqualified|certified|uncertified|licensed|unlicensed|approved|unapproved|authorized|unauthorized|permitted|forbidden|allowed|denied|granted|revoked|accepted|rejected|confirmed|denied|verified|unverified|validated|invalidated|tested|untested|proven|unproven|established|unestablished|known|unknown|familiar|unfamiliar|recognized|unrecognized|identified|unidentified|named|unnamed|labeled|unlabeled|marked|unmarked|tagged|untagged|classified|unclassified|sorted|unsorted|organized|disorganized|structured|unstructured|ordered|disordered|arranged|disarranged|planned|unplanned|scheduled|unscheduled|timed|untimed|dated|undated|timed|synchronized|unsynchronized|coordinated|uncoordinated|integrated|disintegrated|connected|disconnected|linked|unlinked|joined|separated|merged|split|combined|divided|united|disunited|grouped|ungrouped|clustered|scattered|concentrated|dispersed|gathered|distributed|collected|dispersed|accumulated|depleted|increased|decreased|expanded|contracted|extended|shortened|lengthened|widened|narrowed|deepened|shallowed|raised|lowered|elevated|depressed|lifted|dropped|moved|stationary|shifted|fixed|rotated|turned|flipped|reversed|inverted|mirrored|reflected|projected|cast|thrown|dropped|picked|placed|put|set|got|gotten|given|taken|made|done|seen|shown|told|said|spoken|written|read|heard|felt|thought|known|believed|understood|learned|taught|studied|worked|played|lived|died|born|grown|changed|stayed|left|arrived|departed|entered|exited|opened|closed|started|stopped|continued|paused|resumed|finished|completed|began|ended|created|destroyed|built|demolished|installed|removed|added|deleted|inserted|updated|modified|edited|revised|reviewed|approved|rejected|accepted|declined|confirmed|cancelled|scheduled|postponed|delayed|accelerated|slowed|sped|hurried|rushed|waited|paused|rested|slept|woke|ate|drank|walked|ran|drove|flew|swam|climbed|fell|stood|sat|lay|knelt|jumped|danced|sang|played|watched|listened|looked|saw|heard|smelled|tasted|touched|felt|held|grabbed|caught|threw|kicked|hit|pushed|pulled|lifted|carried|dropped|placed|put|set|got|gave|took|brought|sent|received|accepted|offered|requested|asked|answered|replied|responded|spoke|talked|said|told|wrote|read|typed|printed|copied|pasted|cut|saved|loaded|downloaded|uploaded|shared|posted|published|submitted|sent|received|opened|closed|clicked|tapped|swiped|scrolled|zoomed|panned|rotated|flipped|mirrored|reflected|projected|cast|thrown|dropped|picked|placed|put|set)\b/gi);
  if (!englishWords) return false;
  // Filter out words that are same in Spanish
  const spanishSame = ['no', 'personal', 'general', 'normal', 'legal', 'digital', 'local', 'global', 'public', 'formal', 'informal', 'total', 'natural', 'manual', 'social', 'special', 'original', 'final', 'principal', 'superior', 'inferior', 'motor', 'doctor', 'actor', 'error', 'popular', 'similar', 'familiar', 'regular', 'singular', 'plural'];
  const badWords = englishWords.filter(w => !spanishSame.includes(w.toLowerCase()) && !['SAVEN', 'Core', 'BioMath'].some(b => w.includes(b)));
  return badWords.length > 2;
}

// Load previous glossary for non-bad entries
const prevGlossary = JSON.parse(fs.readFileSync(path.join(root, "tmp/es-glossary.json"), "utf8"));

for (const k of allKeys) {
  if (glossary[k] && glossary[k] !== k) continue;
  if (prevGlossary[k] && prevGlossary[k] !== k && !isBadTranslation(k, prevGlossary[k])) {
    glossary[k] = prevGlossary[k];
  }
}

// For still missing, keep English temporarily - will need manual fix
for (const k of allKeys) {
  if (!glossary[k] || glossary[k] === k) {
    // Use prev if not bad, else keep key (will show as untranslated)
    if (prevGlossary[k] && !isBadTranslation(k, prevGlossary[k])) {
      glossary[k] = prevGlossary[k];
    } else if (!glossary[k]) {
      glossary[k] = prevGlossary[k] || k;
    }
  }
}

// Regenerate files
for (const page of idx) {
  const keys = JSON.parse(fs.readFileSync(path.join(root, "tmp/dict-keys", `${page}.json`), "utf8"));
  const lines = ["/* Generated from the canonical English source. */", "export const dictionary: Record<string, string> = {"];
  for (const key of keys) {
    lines.push(`  ${JSON.stringify(key)}: ${JSON.stringify(glossary[key] ?? key)},`);
  }
  lines.push("};", "");
  fs.writeFileSync(path.join(outDir, `${page}.ts`), lines.join("\n"));
}

fs.writeFileSync(path.join(root, "tmp/es-glossary.json"), JSON.stringify(glossary, null, 2) + "\n");

// Count bad
let bad = 0;
for (const k of allKeys) {
  if (isBadTranslation(k, glossary[k])) bad++;
}
console.log("Bad translations remaining:", bad);
