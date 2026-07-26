/** Complete FR translation map for remaining page dictionaries (D-0161). */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { chunk0 } from "./fr-chunk-0.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
const embedded = JSON.parse(
  fs.readFileSync(path.join(root, "scripts/remaining-translations/fr-embedded.json"), "utf8"),
);

export const FR_COMPLETE = {
  ...chunk0,
  ...embedded,
  "7 min": "7 min",
  "8 min": "8 min",
  "10 min": "10 min",
  "12 min": "12 min",
};
