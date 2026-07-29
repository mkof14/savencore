/**
 * Homepage clarity pack (D-0219 / D-0220) — reversible feature gates.
 *
 * HOME_CLARITY_V1 (default ON): definition, 3-step chain, explore strip,
 * audience fork, care why-line, “what we are not”.
 *
 * HOME_CLARITY_V2 (default ON when V1 is on): denser layout — shorter spacing,
 * compact audience cards, early Explore strip collapsed into one pillar row
 * (reduces repetition with the closing Explore band). V2 has no effect when V1 is off.
 *
 * Revert without deleting code:
 * 1. Density only: set `HOME_CLARITY_V2_DEFAULT` to `false`, OR
 *    `NEXT_PUBLIC_HOME_CLARITY_V2=false` (rebuild / redeploy).
 * 2. Full pre-D-0219 home: set `HOME_CLARITY_V1_DEFAULT` to `false`, OR
 *    `NEXT_PUBLIC_HOME_CLARITY_V1=false`.
 *
 * Full removal: delete `HomeClarityPack`, ungated clarity fields, and this file;
 * see DECISIONS_LOG D-0219 / D-0220.
 */

/** Compile-time default when the env var is unset. */
export const HOME_CLARITY_V1_DEFAULT = true;

/** Density pass over V1 (D-0220). Ignored when V1 is off. */
export const HOME_CLARITY_V2_DEFAULT = true;

function readEnvFlag(name: string): boolean | null {
  const raw = process.env[name];
  if (raw === undefined || raw === "") return null;
  const normalized = raw.trim().toLowerCase();
  if (normalized === "false" || normalized === "0" || normalized === "off") {
    return false;
  }
  if (normalized === "true" || normalized === "1" || normalized === "on") {
    return true;
  }
  return null;
}

/** When false, Physical World home omits all D-0219 clarity blocks. */
export const HOME_CLARITY_V1_ENABLED =
  readEnvFlag("NEXT_PUBLIC_HOME_CLARITY_V1") ?? HOME_CLARITY_V1_DEFAULT;

/**
 * When true (and V1 is on), clarity pack uses denser markup/CSS (D-0220).
 * Always false when V1 is disabled.
 */
export const HOME_CLARITY_V2_ENABLED =
  HOME_CLARITY_V1_ENABLED &&
  (readEnvFlag("NEXT_PUBLIC_HOME_CLARITY_V2") ?? HOME_CLARITY_V2_DEFAULT);
