/** Merge FR override chunks into fr-overrides.mjs */
import { chunk0 } from "./fr-chunk-0.mjs";
import { chunk1 } from "./fr-chunk-1.mjs";
import { chunk2 } from "./fr-chunk-2.mjs";
import { chunk3 } from "./fr-chunk-3.mjs";
import { chunk4 } from "./fr-chunk-4.mjs";
import { chunk5 } from "./fr-chunk-5.mjs";
import { chunk6 } from "./fr-chunk-6.mjs";
import { chunk7 } from "./fr-chunk-7.mjs";

export const FR_OVERRIDES = {
  ...chunk0,
  ...chunk1,
  ...chunk2,
  ...chunk3,
  ...chunk4,
  ...chunk5,
  ...chunk6,
  ...chunk7,
};
