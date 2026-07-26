import { timingSafeEqual } from "node:crypto";

import NextAuth from "next-auth";
import type { Provider } from "next-auth/providers";
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";

export function isGoogleAuthConfigured(): boolean {
  return Boolean(
    process.env.GOOGLE_CLIENT_ID &&
      process.env.GOOGLE_CLIENT_SECRET &&
      process.env.AUTH_SECRET,
  );
}

/** Staging/launch-test operator account via env — not a full user store. */
export function isCredentialsAuthConfigured(): boolean {
  return Boolean(
    process.env.AUTH_SECRET &&
      process.env.AUTH_DEMO_EMAIL &&
      process.env.AUTH_DEMO_PASSWORD,
  );
}

const isProduction = process.env.NODE_ENV === "production";

/** Dev-only placeholder — never used when AUTH_SECRET is set; never in production. */
const DEV_AUTH_SECRET = "savencore-unconfigured-dev-secret";

function resolveAuthSecret(): string {
  if (process.env.AUTH_SECRET) {
    return process.env.AUTH_SECRET;
  }
  if (isProduction) {
    // Auth.js requires a string; empty secret keeps production builds from
    // shipping a shared fallback. Providers stay disabled without AUTH_SECRET.
    return "";
  }
  return DEV_AUTH_SECRET;
}

function safeEqualString(a: string, b: string): boolean {
  const left = Buffer.from(a);
  const right = Buffer.from(b);
  if (left.length !== right.length) {
    return false;
  }
  return timingSafeEqual(left, right);
}

function buildProviders(): Provider[] {
  const providers: Provider[] = [];

  if (isGoogleAuthConfigured()) {
    providers.push(
      Google({
        clientId: process.env.GOOGLE_CLIENT_ID!,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      }),
    );
  }

  if (isCredentialsAuthConfigured()) {
    providers.push(
      Credentials({
        id: "credentials",
        name: "Email and password",
        credentials: {
          email: { label: "Email", type: "email" },
          password: { label: "Password", type: "password" },
        },
        async authorize(credentials) {
          const email =
            typeof credentials?.email === "string"
              ? credentials.email.trim().toLowerCase()
              : "";
          const password =
            typeof credentials?.password === "string"
              ? credentials.password
              : "";

          const expectedEmail = (process.env.AUTH_DEMO_EMAIL ?? "")
            .trim()
            .toLowerCase();
          const expectedPassword = process.env.AUTH_DEMO_PASSWORD ?? "";

          if (
            !email ||
            !password ||
            !expectedEmail ||
            !expectedPassword ||
            !safeEqualString(email, expectedEmail) ||
            !safeEqualString(password, expectedPassword)
          ) {
            return null;
          }

          return {
            id: "demo-operator",
            email: expectedEmail,
            name: "Operator",
          };
        },
      }),
    );
  }

  return providers;
}

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: buildProviders(),
  secret: resolveAuthSecret(),
  trustHost: true,
  pages: {
    // Locale-neutral entry; app/auth/sign-in redirects to /[locale]/auth/sign-in/.
    signIn: "/auth/sign-in/",
  },
  callbacks: {
    authorized() {
      // Public site — auth is optional; do not gate routes by default.
      return true;
    },
  },
});
