# SAVEN Core — Phase 1A Technical Foundation

**Document status:** Complete (includes Phase 1A.1 corrections)  
**Date:** 2026-07-24  
**Phase:** 1A — Project Initialization; 1A.1 — Foundation Correction and Git Baseline  
**Authority:** Authorized technical initialization and foundation correction only  

---

## 1. Selected technical stack

| Package | Role | Notes |
|---------|------|-------|
| Next.js `16.2.11` | App Router framework | Current stable at initialization |
| React `19.2.8` | UI runtime | Matched to Next.js peer range |
| React DOM `19.2.8` | DOM renderer | |
| TypeScript (strict) | Type system | `strict`, `noUncheckedIndexedAccess`, `exactOptionalPropertyTypes` |
| ESLint 9 + `eslint-config-next` | Linting | Flat config via `eslint-config-next/core-web-vitals` and `typescript` |
| npm | Package manager | Selected for Phase 1A |

Not installed in Phase 1A: Tailwind, next-intl, CMS SDK, database clients, analytics, auth libraries.

---

## 2. Project structure

```
savencore/
├── AGENTS.md
├── docs/                          # Phase 0 / 0.75A / 1A documentation (preserved)
├── app/
│   ├── globals.css                # Minimal global CSS foundation
│   ├── layout.tsx                 # Root pass-through layout
│   ├── page.tsx                   # `/` → `/en/` redirect backup
│   ├── not-found.tsx
│   └── [locale]/
│       ├── layout.tsx             # html lang/dir from canonical locales
│       ├── page.tsx               # Temporary foundation placeholder
│       └── not-found.tsx
├── src/
│   ├── config/
│   │   └── locales.ts             # Canonical locale configuration (single source)
│   └── types/
│       └── locale.ts              # Re-exports locale types
├── proxy.ts                       # `/` → `/en/` redirect (Next.js 16 proxy convention)
├── next.config.ts
├── tsconfig.json
├── eslint.config.mjs
├── package.json
└── package-lock.json
```

### Structural deviation note

- `app/` remains at the repository root (Next.js default) while shared config lives under `src/`.
- `src/lib/` was not created because Phase 1A has no shared utilities yet (no speculative empty folders).
- Root `app/layout.tsx` returns `children` only; `app/[locale]/layout.tsx` owns `<html>` and `<body>` so `lang` / `dir` come from the canonical locale config.

---

## 3. Locale configuration

Canonical module: `src/config/locales.ts`

| Setting | Value |
|---------|-------|
| Locales | `en`, `es`, `de`, `fr`, `ja`, `zh-cn`, `ar`, `he`, `uk`, `ru` |
| Default | `en` |
| RTL | `ar`, `he` |
| HTML lang for `zh-cn` | `zh-CN` (BCP 47) |

All locale-dependent behavior must import from this module. Do not duplicate the locale array.

Unsupported locale segments are rejected (`dynamicParams = false` + `notFound()`), not treated as valid localized routes.

---

## 4. Root redirect behavior

- `proxy.ts` redirects `/` → `/en/`
- `app/page.tsx` also calls `redirect('/en/')` as a framework backup
- `trailingSlash: true` aligns URLs with approved forms (`/en/`, `/ar/`, …)
- Framework-supported temporary redirect (307) is accepted for the foundation phase
- No browser-language, cookie, or geographic locale negotiation

---

## 5. RTL behavior

- Determined only from `getTextDirection(locale)` in `src/config/locales.ts`
- Applied on the document via `<html dir="rtl|ltr">` in `app/[locale]/layout.tsx`
- No component-level RTL override system in Phase 1A

---

## 5A. Middleware-to-proxy migration (Phase 1A.1)

- Renamed `middleware.ts` → `proxy.ts`
- Renamed exported function `middleware` → `proxy`
- Preserved `/` → `/en/` redirect and matcher configuration
- Migrated manually (no canary codemod)
- `middleware.ts` removed
- Production build no longer emits the middleware deprecation notice

---

## 5B. Root-layout verification (Phase 1A.1)

**Before / after structure (unchanged — verified valid):**

| Layer | Role |
|-------|------|
| `app/layout.tsx` | Pass-through root layout (`return children`); imports global CSS |
| `app/[locale]/layout.tsx` | Owns exactly one `<html>` and one `<body>`; sets `lang` / `dir` from canonical locale config |

**Verification result (live route checks):**

- Localized routes (`/en/`, `/ar/`, `/he/`, `/ru/`) each render exactly one `<html>` and one `<body>`
- `lang` reflects the active locale (`zh-cn` → `zh-CN`)
- `dir="rtl"` for `ar` and `he`; `dir="ltr"` for other checked locales
- No nested `html`/`body` on localized routes
- No client-side DOM mutation; no `useEffect`; no duplicated locale arrays
- Existing structure retained (no rewrite required)

---

## 5C. Git initialization status (Phase 1A.1)

- Workspace was not a Git repository; `git init -b main` completed
- Project files staged for baseline commit (docs and `package-lock.json` included; `node_modules`, `.next`, env files, build artifacts ignored)
- **Baseline commit not created:** Git `user.name` and `user.email` are unset locally and globally
- Owner must set identity, then commit (see Phase 1A.1 completion report)
- Baseline commit hash: *not created*

---

## 6. Available npm scripts

| Script | Command | Purpose |
|--------|---------|---------|
| `dev` | `next dev` | Local development server |
| `build` | `next build` | Production build |
| `start` | `next start` | Serve production build |
| `lint` | `eslint .` | Lint |
| `type-check` | `tsc --noEmit` | Strict TypeScript check |

---

## 7. What Phase 1A intentionally does not include

- Production Home page
- Header, Footer, Mega Menu, responsive navigation
- Design tokens, custom fonts, brand colors
- Images, icons, animations
- Marketing copy beyond the technical placeholder labels
- CMS, database, authentication, investor access
- Contact forms, search, analytics, cookie consent
- Legal text, social links, roadmap/research content
- Tailwind
- Browser-language auto-detection
- Localized path slugs
- next-intl message catalogs / translated UI chrome

---

## 8. Known limitations

1. Locale routes show a temporary foundation placeholder only — not the approved Home composition.
2. Git baseline commit is blocked until the owner configures `user.name` and `user.email`.
3. No i18n message system yet; architecture supports ten locales structurally, not content-translated pages.
4. No SEO metadata, hreflang, or sitemap yet.
5. Accessibility target WCAG 2.2 AA is not validated in this phase beyond a neutral text placeholder.
6. npm audit reported pre-existing upstream advisories in the dependency tree at install time; not expanded in Phase 1A scope.

---

## 9. Run locally

```bash
cd /Users/mk/Desktop/savencore
npm install
npm run dev
```

Then open:

- http://localhost:3000/ → redirects to `/en/`
- http://localhost:3000/en/
- http://localhost:3000/ar/ (RTL)
- http://localhost:3000/he/ (RTL)

Quality checks:

```bash
npm run lint
npm run type-check
npm run build
```

Production serve after build:

```bash
npm run start
```

---

## 10. Phase boundary

Phase 1A / 1A.1 stop at technical initialization, foundation correction, and Git baseline preparation.  
Do not begin Phase 1B, design system, navigation, footer, or Home page without explicit authorization.
