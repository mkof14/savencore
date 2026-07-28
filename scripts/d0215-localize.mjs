/**
 * D-0215 — append Future Lab + FAQ string translations into locale dictionaries.
 * Uses @vitalets/google-translate-api (devDependency). Re-runnable; skips existing keys.
 */
import { translate } from "@vitalets/google-translate-api";
import fs from "node:fs";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");

const strings = [
  // Future Lab page
  "A new name for research at SAVEN Core — broader continuous inquiry than classic R&D, exploring advanced robotics, embodied AI, and careful support for human life.",
  "Internal Future Lab replaces an outdated understanding of R&D. SAVEN believes classic research-and-development thinking — siloed projects, short cycles, product-shaped pipelines — is not enough for the approach we need: continuous, embodied inquiry into how intelligence might carefully assist people in the physical world.",
  "The Lab looks ahead of near-term systems work: new forms of robotics and manipulators, richer sensing, physical-environment modeling, and human–machine collaboration that could one day ease care in homes, clinics, and everyday places.",
  "Beyond classic R&D",
  "Future Lab is a deliberate new name — continuous inquiry instead of siloed research-and-development framing.",
  "Why Future Lab, not R&D",
  "Classic R&D often narrows too early — discrete projects aiming at product-shaped outcomes. SAVEN chose Internal Future Lab to name a wider, continuous research environment: experiments, models, and architecture that stay open long enough to ask better questions.",
  "This is not a product factory and not a promise of dates. It is how SAVEN holds inquiry into embodied AI, new sensing, and non-standard engineering while keeping human care as the purpose.",
  // Scenes
  "A lab for open questions",
  "Future Lab is where SAVEN holds experiments and architecture longer than classic R&D cycles — so better questions can form before near-term engineering.",
  "Embodied intelligence concepts explored in a research setting",
  "Embodied AI, carefully framed",
  "Inquiry into embodied intelligence stays upstream: models, sensing, and decision concepts — Research status, not operational autonomy claims.",
  "Advanced robotic forms explored as assistive concepts",
  "New forms of robotics",
  "Prospective platforms and manipulators are studied as possibilities for later governable engineering — not as finished products on display.",
  "Every direction is judged by whether it could later ease care with dignity — caregivers and people remaining in authority.",
  // FAQ
  "Internal Future Lab is SAVEN Core’s research environment — and a deliberate new name that replaces an outdated understanding of classic R&D.",
  "SAVEN believes traditional research-and-development framing is not enough for continuous, embodied inquiry into how intelligence might carefully support people in the physical world.",
  "It explores longer-horizon directions in advanced robotics, embodied AI, sensing, and related architecture. Content remains directional and descriptive — Research status, not a guarantee of future products or dates.",
  "Why Future Lab instead of R&D?",
  "Classic R&D often implies siloed projects and product-shaped pipelines. Future Lab names a broader continuous inquiry — exploration and architecture upstream of near-term engineering — while human care remains the purpose.",
  "It is not an Operational product claim and does not invent timelines, customers, or validated devices.",
];

const locales = [
  { code: "es", google: "es" },
  { code: "de", google: "de" },
  { code: "fr", google: "fr" },
  { code: "ja", google: "ja" },
  { code: "zh-cn", google: "zh-CN" },
  { code: "ar", google: "ar" },
  { code: "he", google: "he" },
  { code: "ru", google: "ru" },
  { code: "uk", google: "uk" },
];

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

function escapeKey(s) {
  return s.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}

function patchDictionary(filePath, entries) {
  let src = fs.readFileSync(filePath, "utf8");
  const missing = [];
  for (const [en, tr] of entries) {
    if (src.includes(`"${escapeKey(en)}":`)) continue;
    missing.push([en, tr]);
  }
  if (missing.length === 0) {
    console.log(`  skip (complete): ${path.basename(filePath)}`);
    return 0;
  }
  // Insert before closing `};`
  const insert = missing
    .map(
      ([en, tr]) =>
        `  "${escapeKey(en)}": "${escapeKey(tr)}",`,
    )
    .join("\n");
  if (!src.trimEnd().endsWith("};")) {
    throw new Error(`Unexpected dictionary ending: ${filePath}`);
  }
  src = src.replace(/\n\};\s*$/, `\n${insert}\n};\n`);
  fs.writeFileSync(filePath, src);
  console.log(`  +${missing.length}: ${path.basename(filePath)}`);
  return missing.length;
}

async function translateAll(target) {
  const out = new Map();
  for (const s of strings) {
    let attempt = 0;
    while (attempt < 4) {
      try {
        const { text } = await translate(s, { to: target });
        out.set(s, text);
        await sleep(120);
        break;
      } catch (err) {
        attempt += 1;
        console.warn(`  retry ${attempt} (${target}):`, err.message ?? err);
        await sleep(800 * attempt);
        if (attempt >= 4) throw err;
      }
    }
  }
  return out;
}

async function main() {
  for (const loc of locales) {
    console.log(`\n=== ${loc.code} ===`);
    const map = await translateAll(loc.google);
    const entries = [...map.entries()];
    patchDictionary(
      path.join(root, `src/content/flagship/dictionaries/${loc.code}.ts`),
      entries,
    );
    patchDictionary(
      path.join(root, `src/content/faq/dictionaries/${loc.code}.ts`),
      entries,
    );
  }
  console.log("\nDone.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
