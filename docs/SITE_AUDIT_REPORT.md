# SAVEN Core — Site Audit Report

**Date:** 2026-07-26  
**Authority:** Owner request + **D-0162** (PWA + SEO / security headers / marketing surface prep)  
**Canonical site:** `https://www.savencore.com`  
**Machine summary:** `tmp/audit/summary.json`  
**Mobile screenshots:** `tmp/audit/mobile-*.png` (390×844)

This report is honest about gaps. Scores are 0–100 relative to a production brochure site (not a full product SaaS).

---

## Executive summary

Practical production surface prep landed: security headers, SEO metadata + sitemap/robots, share/OG defaults, PWA manifest + install UI, mobile overflow polish, and auth hardening. Automated security-review tooling could not compute diffs — **manual security review is included below**.

`npx tsc --noEmit` and `npm run build` pass. Smoke: `/en/`, `/robots.txt`, `/sitemap.xml`, `/manifest.webmanifest`, `/sw.js` → 200; auth sends `X-Robots-Tag: noindex, nofollow`.

---

## 1. Security — score **72**

### Manual review (auth, proxy, headers, env, redirects)

| Area | Finding | Severity | Status |
|------|---------|----------|--------|
| Auth.js Google provider | Enabled only when `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET`, and `AUTH_SECRET` are all set; UI disables Google otherwise (no fake logged-in state) | — | OK |
| Auth secret | Production no longer uses a shared fallback secret; empty string if unset (Google stays off). Dev placeholder only outside production | High → mitigated | Done |
| `trustHost: true` | Appropriate behind Vercel; ensure `AUTH_URL` set in production | Medium | Documented |
| Auth `pages.signIn` | Locale-neutral `/auth/sign-in/` redirects to `/[locale]/auth/sign-in/` (D-0163) | Low | Fixed (D-0163) |
| `googleSignInAction` | Server action → `signIn("google")` with locale home `redirectTo`; no open redirect of arbitrary URLs | — | OK |
| Public auth | Site is not gated; `authorized()` always true — intentional for brochure + optional sign-in | Info | OK |
| Secrets in repo | `.env` / `.env.*` gitignored (`.env.example` kept); scan found only empty placeholders in `.env.example` | — | OK |
| Security headers | `CSP`, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`, `X-Frame-Options: DENY`, `frame-ancestors 'none'` via `next.config.ts` | — | Done |
| HSTS | Set when `VERCEL_ENV=production` | Medium | Done (prod only) |
| CSP pragmatism | Still allows `'unsafe-inline'` and `'unsafe-eval'` for Next.js — not nonce-strict | Medium | Remaining |
| Proxy | `/` → `/en/`; `X-Robots-Tag: noindex, nofollow` on `/*/auth/*` and `/*/preview/*` | — | Done |
| Auth indexability | Metadata `robots: noindex` + header + `robots.txt` disallow `/*/auth/` | — | Done |
| Legal drafts public | Structural drafts are intentionally public with draft framing — risk of being misread as binding law | Medium | Flagged |
| Google OAuth without secrets | Safe degraded UX; production must set secrets before claiming sign-in works | Medium | Flagged for go-live |
| Service worker | Production-only registration; network-first navigations; shell cache only | Low | OK |
| API routes | Only `/api/auth/[...nextauth]` — no other public APIs | — | OK |

### Done vs remaining

**Done:** headers, auth secret hardening, env gitignore tightening, auth/preview noindex, manual review recorded.  
**Remaining:** nonce-based CSP; locale-aware Auth.js `signIn` page; set production env secrets on Vercel; counsel review before treating legal pages as effective.

---

## 2. SEO — score **86**

### Done

- Locale layout metadata + `%s \| SAVEN Core` title template
- Per-page `generateMetadata` for home, hubs/leaves, legal, auth
- Canonical + `hreflang` alternates (10 locales + `x-default`)
- `app/sitemap.xml` from `PUBLISHED_ROUTES` (auth excluded)
- `app/robots.txt` with sitemap host; disallows `/api/`, `/*/auth/`, `/*/preview/`
- Open Graph + Twitter `summary_large_image`
- Default OG image: `public/brand/og-default.png` (+ `.webp`)
- Honest Organization JSON-LD (name, URL, description, logo — **no invented address**)
- Legal meta prefixes draft note — not over-claimed as final law
- Auth `noindex`

### Remaining

- Rich results beyond Organization (optional; do not invent LocalBusiness)
- Per-locale OG image localization (not needed yet)
- Search Console / Bing verification (owner)
- Some leaf OG images use masthead WebP — social crawlers prefer PNG/JPG; default OG PNG remains fallback for home

---

## 3. Marketing — score **80**

### Done

- Consistent share titles/descriptions for home + hubs from real content (`title` / `lede` / home `oneBreath`)
- Brand OG preview under `public/brand/`
- No fake testimonials, stats, customers, or traction invented

### Remaining / risks

- Official social account URLs still pending (Decisions Log)
- Contact destinations still unpublished (correct)
- Legal drafts in footer can be mis-shared — draft meta helps but does not replace counsel

---

## 4. Performance — score **74**

### Done

- Image formats: AVIF/WebP in `next.config`; domain/home assets largely WebP
- Dynamic imports for `HeroLivingMedia` + `LivingDomains`
- LCP preload for primary hero collage WebP
- `fetchPriority="high"` on first collage panel
- Fonts via `next/font` with `display: swap`
- Build completes quickly (~8–10s) with static generation of locale routes

### Remaining

- Hero collage still uses `<img>` / `<picture>`, not `next/image` (acceptable for collage control; sizes already set)
- Many fonts loaded (display + sans + Arabic + Hebrew + mono) — weight on first paint for RTL locales
- No RUM / Core Web Vitals measurement in production yet
- CSP `'unsafe-eval'` remains for Next pragmatism

---

## 5. Mobile — score **78**

### Done

- 390px CSS polish: header utilities, home hero copy width (avoid `38vw` squeeze on small screens), collage grid, footer bar wrap, auth ≤480px rules
- Contained horizontal overflow (`overflow-x: clip` on `.site-shell` / `.pw-home`; hero grid `minmax(0, …)`)
- Hub masthead/highlights: `min-width: 0`, `overflow-wrap: break-word`
- Install control hidden from cramped mobile header; remains in footer + desktop header utilities
- Screenshots: `tmp/audit/mobile-home.png`, `mobile-technology.png`, `mobile-auth.png`, `mobile-labs.png`, `mobile-hubs.png`, `mobile-footer.png`

### Remaining

- Full RTL visual QA pass on 390px (`ar` / `he`)
- Hub highlight cards: watch long translated strings
- Mobile nav depth still a long list (by design — footer is depth map)
- Owner eye-check of 390px screenshots after deploy (headless captures can miss device quirks)

---

## 6. PWA — score **82**

### Done

- `app/manifest.ts` → `/manifest.webmanifest` (name **SAVEN Core**, standalone, theme colors, icons 192/512)
- Icons: `app/icon.png` (512), `app/apple-icon.png` (180), `app/favicon.ico`; `public/favicon.svg`, `favicon.ico` (16/32/48/64), `favicon-16/32/48.png`, `public/icons/icon-64.png`, `icon-192.png`, `icon-512.png`, `icon-512-maskable.png`, `apple-touch-icon.png` (D-0204 / max-fill D-0205)
- Apple meta + apple-touch-icon in locale layout; Next.js `metadata.icons` prefers SVG + 48/192/512
- Discreet **Install app** control (`beforeinstallprompt` + iOS tip) — i18n `pwa.*` in all 10 UI locales
- Lightweight `public/sw.js` offline shell; registered in production only

### Remaining

- Installability criteria require HTTPS + engagement heuristics in Chrome — verify on real production domain
- SW does **not** offline full domain content (intentional)
- Manifest `start_url` is `/en/` — locale preference persistence later
- Maskable icon could use safer padded artwork

---

## 7. Content / i18n — score **84**

### Done

- UI chrome `pwa.installApp` / `pwa.iosTip` translated across `src/i18n/ui/*`
- Page bodies already on 10-locale track (D-0161)
- Legal draft banners remain accurate in meta

### Remaining

- Translation vendor polish (pending owner decision)
- Auth.js fallback sign-in path still English-only

---

## 8. Deploy / Vercel — score **80**

### Done

- `docs/VERCEL_DEPLOY.md` updated with `NEXT_PUBLIC_SITE_URL`, headers/PWA notes
- `.env.example` documents Auth + public site URL
- `npm run build` green; Node ≥20

### Remaining (owner go-live checklist)

1. Push repo when ready; import to Vercel  
2. Set `AUTH_SECRET`, Google OAuth, `AUTH_URL`, `NEXT_PUBLIC_SITE_URL`  
3. Attach `www.savencore.com` + HTTPS  
4. Confirm Google redirect URI  
5. Smoke production: `/en/`, `/robots.txt`, `/sitemap.xml`, `/manifest.webmanifest`, auth noindex  
6. Submit sitemap in Search Console  

---

## Top 10 next actions for owner

1. **Set Vercel env vars** (`AUTH_SECRET`, Google OAuth, `AUTH_URL`, `NEXT_PUBLIC_SITE_URL`) before public sign-in claims.  
2. **Deploy to Vercel** and attach production domain + HTTPS (enables HSTS path + real PWA install).  
3. **Verify PWA install** on Android Chrome and iOS Safari (Add to Home Screen tip).  
4. **Search Console**: verify domain, submit `sitemap.xml`.  
5. **Tighten CSP** in a follow-up (nonces / remove `'unsafe-eval'` if build allows).  
6. **Locale-aware Auth.js `signIn`** redirect (stop hardcoding `/en/`).  
7. **Legal counsel** review before removing draft framing.  
8. **RTL 390px QA** on `ar` / `he` home + hubs.  
9. **Decide social URLs** (pending) if OG/profile linking is desired — do not invent.  
10. **Optional:** RUM / Web Vitals (after analytics vendor decision — not in this phase).

---

## Verification performed

| Check | Result |
|-------|--------|
| `npx tsc --noEmit` | Pass |
| `npm run build` | Pass |
| Smoke `/en/` | 200 + security headers |
| `/robots.txt` | 200 |
| `/sitemap.xml` | 200 |
| `/manifest.webmanifest` | 200 — SAVEN Core, standalone, 3 icons |
| `/sw.js` | 200 |
| `/en/auth/sign-in/` | 200 + `X-Robots-Tag: noindex, nofollow` + HTML noindex |
| Secret scan | No live secrets in tree |
| Mobile screenshots | Captured under `tmp/audit/` |

---

## Decision / docs touched

- `docs/DECISIONS_LOG.md` — **D-0162**  
- `AGENTS.md` — current phase pointer  
- `docs/VERCEL_DEPLOY.md` — env + headers/PWA  
- This report + `tmp/audit/summary.json`
