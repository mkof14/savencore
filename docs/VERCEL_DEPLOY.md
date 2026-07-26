# Vercel deploy — SAVEN Core

Standard Next.js App Router app. No custom `vercel.json` required; Vercel detects Next.js and runs `next build`.

## 1. Import the project

1. Push this repository to GitHub (when the owner asks).
2. In Vercel: **Add New Project** → import the repo.
3. Framework Preset: **Next.js** (auto).
4. Build command: `npm run build` (default).
5. Output: Next.js default (no static export).
6. Node.js: **20.x** or newer (`package.json` engines).

## 2. Environment variables

Set in Vercel → Project → Settings → Environment Variables (Production + Preview as needed).

| Variable | Required | Notes |
|----------|----------|--------|
| `AUTH_SECRET` | Yes for auth | `openssl rand -base64 32` |
| `GOOGLE_CLIENT_ID` | Yes for Google sign-in | Google Cloud OAuth client (primary public path) |
| `GOOGLE_CLIENT_SECRET` | Yes for Google sign-in | Google Cloud OAuth client |
| `AUTH_DEMO_EMAIL` | Optional | Staging/launch operator email for Credentials provider (D-0163) |
| `AUTH_DEMO_PASSWORD` | Optional | Staging/launch operator password — never commit real values |
| `AUTH_DEMO_ROLE` | Optional | Admin role for demo operator (default `super_admin`) — D-0176 |
| `AUTH_ADMIN_ALLOWLIST` | Optional | `email:role,...` for Google/other signed-in admins — D-0176 |
| `AUTH_URL` | Recommended in production | Public origin, e.g. `https://www.savencore.com` |
| `NEXTAUTH_URL` | Optional alias | Same origin if your Auth.js version expects it |
| `NEXT_PUBLIC_SITE_URL` | Recommended | Canonical origin for sitemap, robots, Open Graph (defaults to `https://www.savencore.com`) |
| `NEXT_PUBLIC_SOCIAL_*` | Optional | Facebook / YouTube / X / LinkedIn / Instagram URLs — empty = disabled icons (D-0176) |

See `.env.example`. Without Google or demo credentials the Sign In page still renders and explains that setup is required — it does not invent a logged-in state. Email/password is a single env-based operator account for launch testing only; a real user store/DB comes later.

Production security headers (CSP, framing, nosniff, referrer, permissions-policy) are set in `next.config.ts`. HSTS is added when `VERCEL_ENV=production`. PWA manifest is at `/manifest.webmanifest`; service worker `/sw.js` registers in production only.

## 3. Google OAuth

Authorized redirect URI for Auth.js / NextAuth (App Router):

`https://<your-production-domain>/api/auth/callback/google`

Add the same for Vercel preview URLs if you test Google sign-in on previews.

## 4. Production URL

Canonical public site: `https://www.savencore.com` (when DNS and Vercel domain are attached). Locales use trailing slashes (`/en/`, `/de/`, …) per `next.config.ts`.

## 5. Verify before go-live

```bash
npm ci
npm run type-check
npm run build
```

Smoke after deploy: `/en/`, `/de/`, `/ja/`, `/ar/` home + Technology + auth sign-in.
