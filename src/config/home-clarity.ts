/**
 * Homepage clarity pack (D-0219) — reversible feature gate.
 *
 * Default: ON. To restore the pre-D-0219 home structure without deleting code:
 * 1. Set `HOME_CLARITY_V1_DEFAULT` to `false` below, OR
 * 2. Set env `NEXT_PUBLIC_HOME_CLARITY_V1=false` (and rebuild / redeploy).
 *
 * Full removal: delete `HomeClarityPack`, ungated clarity fields usage, and this file;
 * see DECISIONS_LOG D-0219.
 */

/** Compile-time default when the env var is unset. */
export const HOME_CLARITY_V1_DEFAULT = true;

function readEnvFlag(): boolean | null {
  const raw = process.env.NEXT_PUBLIC_HOME_CLARITY_V1;
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
  readEnvFlag() ?? HOME_CLARITY_V1_DEFAULT;
