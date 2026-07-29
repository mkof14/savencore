# Vercel deploy — SAVEN Core

Standard Next.js App Router app. `vercel.json` marks the framework; Vercel runs `next build`. No custom redirects that would break locale trailing slashes or media API routes.

## 1. Import the project

1. Push this repository to GitHub (when the owner asks).
2. In Vercel: **Add New Project** → import the repo.
3. Framework Preset: **Next.js** (auto).
4. Build command: `npm run build` (default).
5. Output: Next.js default (no static export).
6. Node.js: **20.x** or newer (`package.json` engines).

## 2. Environment variables — owner checklist

Set in Vercel → Project → Settings → Environment Variables (**Production** + Preview as needed).  
**Owner must paste secrets in the Vercel UI** — never commit real tokens/passwords.

### AUTH_* (sign-in + Admin)

| Variable | Required | Notes |
|----------|----------|--------|
| `AUTH_SECRET` | **Yes for auth** | `openssl rand -base64 32` |
| `GOOGLE_CLIENT_ID` | Yes for Google sign-in | Google Cloud OAuth client (primary public path) |
| `GOOGLE_CLIENT_SECRET` | Yes for Google sign-in | Google Cloud OAuth client |
| `AUTH_DEMO_EMAIL` | Optional* | Operator email for Credentials provider (D-0163 / D-0177). *Required on Vercel for email/password admin login |
| `AUTH_DEMO_PASSWORD` | Optional* | Operator password — never commit real values; change from local example on prod |
| `AUTH_DEMO_ROLE` | Optional | Document as `super_admin`; demo identity always maps to `super_admin` (D-0177) |
| `AUTH_ADMIN_ALLOWLIST` | Optional | `email:role,...` for Google/other signed-in admins — D-0176 |
| `AUTH_URL` | Recommended in production | Public origin, e.g. `https://www.savencore.com` |
| `NEXTAUTH_URL` | Optional alias | Same origin if your Auth.js version expects it |

### BLOB_* (durable Admin Media + Admin JSON)

| Variable | Required | Notes |
|----------|----------|--------|
| `BLOB_READ_WRITE_TOKEN` | **Required for durable Admin on Vercel** | Create **Storage → Blob**, connect to the project, paste the read/write token into Production (and Preview if testing). Covers **Media** (uploads/index/hidden) and **Admin JSON** (invitations, operators, permissions, mailings, notifications, outbox) under `admin-store/` (D-0220). Without it on Vercel: honest banners; mutations do not fake persistence. Local `npm run dev` still uses `storage/admin-media/` and `storage/admin/`. |

### SMTP_* (Contact form + Admin mailings)

| Variable | Required | Notes |
|----------|----------|--------|
| `SMTP_HOST` | Optional | Unset → Contact uses mailto fallback; Admin mailings **simulate** send + outbox record |
| `SMTP_PORT` | Optional | Typically `587` |
| `SMTP_USER` / `SMTP_PASS` | Optional | SMTP credentials — paste in Vercel only |
| `SMTP_FROM` | Optional | Defaults conceptually to `info@savencore.com` |
| `SMTP_SECURE` | Optional | `true` / `false` |

### Public / site

| Variable | Required | Notes |
|----------|----------|--------|
| `NEXT_PUBLIC_SITE_URL` | Recommended | Canonical origin for sitemap, robots, Open Graph (defaults to `https://www.savencore.com`) |
| `NEXT_PUBLIC_SOCIAL_*` | Optional | LinkedIn — empty = icon hidden (D-0194). Facebook / YouTube / X / Instagram have committed defaults (D-0195–D-0198); set env to override. |
| `NEXT_PUBLIC_HOME_CLARITY_V1` | Optional | Default on. Set `false` to hide D-0219 clarity pack (full pre-clarity home). |
| `NEXT_PUBLIC_HOME_CLARITY_V2` | Optional | Default on when V1 is on. Set `false` to keep V1 content with pre-D-0220 density (explore strip + longer audience copy). |

See `.env.example` and `docs/ADMIN_PLATFORM.md`. Without Google or demo credentials the Sign In page still renders with controls disabled — it does not invent a logged-in state. Email/password is a single env-based operator account (always `super_admin`) for owner/operator access; a real user store/DB comes later. Local/dev may use documented defaults when env is unset; **production never uses a silent default password** — set `AUTH_DEMO_*` in Vercel for prod demo login.

### Pre-deploy AUTH / BLOB / SMTP checklist

1. [ ] `AUTH_SECRET` set (Production).
2. [ ] Google OAuth **or** `AUTH_DEMO_EMAIL` + `AUTH_DEMO_PASSWORD` for Admin access.
3. [ ] `AUTH_URL` = production origin.
4. [ ] `BLOB_READ_WRITE_TOKEN` set if Media or Admin invitations/roles/mailings must survive redeploys.
5. [ ] `SMTP_*` set only if real Contact/Admin email delivery is required; otherwise mailto / simulated send is honest.
6. [ ] Redeploy after changing env vars.

### Media persistence + download (D-0201)

1. In Vercel → Storage → create **Blob**, connect to this project → copy `BLOB_READ_WRITE_TOKEN` into Environment Variables for **Production**.
2. Redeploy after setting the token.
3. Public Media downloads use same-origin `/api/media/download/[id]/` with `Content-Disposition: attachment` (works on mobile Safari + desktop; do not rely on the HTML `download` attribute alone).
4. Preview/view stays on `/api/media/[id]/` (inline) or seed `publicPath`. External YouTube/Vimeo/site links open in a new tab — they are not force-downloaded.
5. **Upload size:** Vercel serverless request body is typically **≈ 4.5 MB**. Larger files fail before our handler — prefer YouTube/Vimeo URL embeds for video, or upload large files in local development then migrate when a larger transfer path is authorized. Local FS max remains 40 MB.

**Owner ops (not automated in repo):** Google Search Console property verification for `www.savencore.com`; do not enable Google Analytics until counsel + CMP decision (cookie prefs remain honest / no live CMP).

Production security headers (CSP, framing, nosniff, referrer, permissions-policy) are set in `next.config.ts`. **CSP** remains pragmatic for Next.js App Router + Auth.js (`'unsafe-inline'` / `'unsafe-eval'` on scripts); nonce-based tightening is deferred to avoid breakage (D-0220). HSTS is added when `VERCEL_ENV=production`. PWA manifest is at `/manifest.webmanifest`; service worker `/sw.js` registers in production only.

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

Smoke after deploy: `/en/`, `/de/`, `/ja/`, `/ar/` home + Technology + auth sign-in; `/en/media/` View + Download on a seed asset; Admin → Media Open / Download when signed in.
