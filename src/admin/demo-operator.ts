/**
 * Demo / owner operator credentials (D-0163 / D-0176 / D-0177).
 *
 * Production: requires explicit AUTH_DEMO_EMAIL + AUTH_DEMO_PASSWORD env.
 * Local/dev: when those are unset and NODE_ENV === "development", documented
 * defaults apply. Prefer gitignored `.env.local` with explicit values for
 * `npm run dev`. Never enables a silent default password on production.
 *
 * This module must stay client-safe (no node:fs) — roles.ts is used in AdminShell.
 */

/** Documented local/dev fallback — change via `.env.local` / Vercel env for real use. */
export const DEV_DEMO_OPERATOR = {
  email: "admin@savencore.com",
  password: "SavenCore-Dev-Admin!",
} as const;

export function allowDemoOperatorDefaults(): boolean {
  return process.env.NODE_ENV === "development";
}

export type DemoOperatorCredentials = {
  email: string;
  password: string;
  configured: boolean;
  fromDefaults: boolean;
};

/**
 * Resolve the single env-based operator account.
 * Demo operator role is always `super_admin` (D-0177).
 */
export function resolveDemoOperatorCredentials(): DemoOperatorCredentials {
  const envEmail = (process.env.AUTH_DEMO_EMAIL ?? "").trim().toLowerCase();
  const envPassword = process.env.AUTH_DEMO_PASSWORD ?? "";

  if (envEmail && envPassword) {
    return {
      email: envEmail,
      password: envPassword,
      configured: true,
      fromDefaults: false,
    };
  }

  if (allowDemoOperatorDefaults()) {
    return {
      email: DEV_DEMO_OPERATOR.email,
      password: DEV_DEMO_OPERATOR.password,
      configured: true,
      fromDefaults: true,
    };
  }

  return {
    email: "",
    password: "",
    configured: false,
    fromDefaults: false,
  };
}

/** Demo / owner operator always maps to super_admin — hard to misconfigure. */
export function demoOperatorRole(): "super_admin" {
  return "super_admin";
}

export function isDemoOperatorEmail(
  email: string | null | undefined,
): boolean {
  if (!email) {
    return false;
  }
  const demo = resolveDemoOperatorCredentials();
  if (!demo.configured) {
    return false;
  }
  return email.trim().toLowerCase() === demo.email;
}
