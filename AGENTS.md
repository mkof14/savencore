# AGENTS.md — SAVEN Core Website

This repository is the SAVEN Core public website project (`https://www.savencore.com`).

If you are a coding agent (Cursor or otherwise), read this file before making any changes.

---

## Current Phase

**Test / Lab experiments hub (D-0263) + Dark clarity / Explore SAVEN gray-blue cards (D-0262) + Home photo collage restored (D-0261) + particle morph preview-only (D-0255–D-0260 retained for `/preview/particle-hero/`) + Public chrome: no “In Development” maturity messaging + BMC 200+ services under 20 categories (D-0252) + Investors locale repair / downloads verify (D-0253) + BioMath Core diagram hover links (D-0251) + Theme bootstrap useServerInsertedHTML (D-0250) + Home closing SAVEN ↔ YouTube frame match (D-0249) + Investors polish / related sync / i18n (D-0248) + Nav / Research removal / Investors chrome (D-0247) + Investors professional page (D-0246) + Search balance / home YouTube (D-0245) + Contact rate limit + BMC polish (D-0243) + Performance / Downloads (D-0241) + Security / SEO / Marketing hygiene (D-0240) + BioMath Core unified English diagram series + home bridge (D-0239 / D-0238 / D-0237 / D-0236 / D-0235 / D-0234 / D-0233 / D-0232 / D-0231 / D-0230 / D-0229 / D-0228 / D-0227)** — Owner-authorized: **D-0263** adds `/lab/` experiments hub (Test / Lab / Experiments; noindex; sitemap excluded; footer Resources **Lab** link; not in primary header; distinct from product `/labs/`; lists `/preview/particle-hero/` and future sandboxes); **D-0262** replaces dark-theme home clarity / Explore SAVEN card navy mixes with soft gray-blue slate (`#3a4454` / `#4a5568` / `#2f3848` / `#3d4a5c`; gold accents + light theme unchanged); **D-0261** rolls public home back to living photoreal collage (`HeroLivingMedia`); particle morph isolated to `/preview/particle-hero/` (noindex; discoverable via Lab hub, not primary nav; bins/code kept for experiments); D-0255–D-0260 particle work superseded for the public first viewport; **D-0253** verifies media downloads + PWA Install app (mobile/desktop) and repairs Investors locale leftovers from D-0252 (no “в розробці” / development-maturity phrasing; no truncated/duplicated Architecture labels); **D-0252** removes visitor-facing “In Development” / “still being built” maturity stamps site-wide (prefer remove or Architecture/Research only; never claim Operational); BioMath Services categories intro states **more than 200 services under 20 categories**; admin/docs may retain In Development; **D-0251** makes BioMath Core capability diagrams come alive on hover (subtle scale/brightness/border/lift; `prefers-reduced-motion`; straight corners; no neon beyond BMC grammar) and links each diagram frame (plus hero ambient + foundation sequence) to stable `#bmc-*` section anchors with keyboard focus + localized “Open section” aria labels; catalog heading jumps to `#bmc-categories`; D-0238 panel sizing preserved; **D-0250** replaces D-0244’s root `next/script` `beforeInteractive` (broken with fragment root + locale-owned `<html>`) with `ThemeBootstrap` + `useServerInsertedHTML` head injection for FOUC-safe `savencore-theme` → `data-theme` without React 19 script-in-component or beforeInteractive-outside-document errors; **D-0249** matches the dark closing Explore SAVEN artboard outer frame to the YouTube feature frame below it (shared `--pw-media-frame-max: 72rem`, same `pw-home__inner` shell, same border/shadow/straight corners; natural artboard aspect kept; themeable page chrome); **D-0248** polishes `/investors/` EN (clarity, ban list, continuous-path wording, CTA alignment), lightly syncs Investor Contact / Contact / home Investors teaser / Foundation “systems” wording, and audits Investors + related locale dictionaries (status vocabulary stays English); **D-0247** removes Investors page body copyright/portal-tease disclaimer (site footer copyright remains); header becomes **Home · Labs · Systems · Applications · Technology · Investors** (Trust footer-only; **Research hub deleted** — `/research/`, `/research/areas/`, `/research/notes/` unpublished); footer adds **Home**, drops Research column (8 desktop columns), keeps Trust + published depth map; Research Applications leaf and Research status vocabulary remain. D-0246 publishes a dedicated `/investors/` brochure (thesis, foundation sequence, Architecture/In Development building map, capital-use categories without amounts, engagement, risk honesty, Investor Contact CTAs) adapted from BioMath Core investors framing but SAVEN-owned — no invented metrics/returns; **no “Platform” / ecosystem buzz vocabulary** on Investors copy; D-0245 restores centered `.page-shell__inner` for `/search/` (and other shell pages) plus homepage strong YouTube band (`0C1Sk_RAnSw`, youtube-nocookie, after Explore closing / before footer); D-0243 soft IP Contact rate limit with mailto degrade, BMC mobile polish + “What BioMath Core is not,” home↔BMC Architecture/In Development sync, focused BMC i18n; D-0241 speeds pages with display-sized BioMath/hero WebP recompress, LCP/sizes/lazy + content-visibility, locale-scoped fonts, static-asset cache headers, and awaitable media downloads; D-0240 hardens admin crawl boundaries, BMC document title/description, default positioning description, and Contact error leakage without inventing CMP/analytics; plus published leaf `/foundation/biomath-core/` (transparent smaller BMC logo, title **BioMath Core**, tagline **Where health data becomes daily clarity.**, **owner-grade illustration panels in one coherent visual language** — Living Model, four-layer stack, dual roles, Engine 3 phases (**English on-image**, cache-busted `engine-phases-en-v2.webp` — D-0236), one Second Opinion, Black Box (**sensitive personal data storage / protection architecture intent** — Storage · Access · Encryption posture · Isolation · Minimization; Architecture / In Development only — D-0238; soft cross-links to published Trust Privacy / Trust Security / Privacy Policy — D-0239), Output pillars, Master Infrastructure Formula, Environments, premium foundation sequence — plus reports→SAVEN actions, Complete Services Catalog + **20-category themeable artboard panels** (Environments-like chrome, larger titles, **no per-card service counts** — D-0237; Architecture / In Development model coverage, not Operational/e-commerce catalog); light on-page TOC + Trust in Continue exploring + mobile/a11y polish (D-0239/D-0243); D-0238 tightens diagram max-widths (~40rem / Black Box ~34rem) and vertical rhythm so panels harmonize without giant poster scroll; D-0235 unifies diagram series and redraws Engine English; D-0234 supersedes primitive SVG wireframes and “pasted poster-only” extremes — rich diagrams under `public/domain/foundation/biomath-core/diagrams/` with English captions/legends); footer Company → BioMath Core; home clarity **one** merged BioMath bridge (Who we are / BioMath Core → SAVEN / Human Data Model continuous context / 20 categories · 200+ services · Architecture / In Development · not Operational — D-0243) **immediately before** “What we are not” — no “basis of everything” wording. D-0227 positioning remains: reports/conclusions → SAVEN next-level actions under human control (AI as tool); **20 categories · 200+ services**; not diagnose / prescribe / sell medicines. Prior D-0194–D-0263 remain in force — read `docs/ADMIN_PLATFORM.md`, `docs/SITE_ASSIGNMENT.md`, `docs/SITE_AUDIT_REPORT.md`, and D-0134–D-0263.

Hero: brand **Intelligence for the Physical World.** + living photoreal help collage (D-0261; particle morph is preview-only via `/lab/` → `/preview/particle-hero/`). Post-hero (when clarity on — D-0219/D-0220/D-0221/D-0225/D-0226/D-0227/D-0228/D-0229/D-0230/D-0231/D-0232/D-0233/D-0234/D-0235/D-0236/D-0237/D-0238/D-0239): visual definition + 3-step chain + **Explore SAVEN** letter showcase + audience fork, then **one** care-focused living carousel (D-0150) with stage “why SAVEN”, then **merged BioMath bridge**, then boundaries (“what we are not”), compact **Flagship Gateway** (Lab / Interface / Future Lab / Investors — D-0194) + **Explore SAVEN** closing map (D-0216/D-0217/D-0218; full corner clusters — D-0221). **Page bodies + UI chrome for all 10 locales** (`en`/`es`/`de`/`fr`/`ja`/`zh-cn`/`ar`/`he`/`uk`/`ru`; English canonical). Header: logo + **important Layer-1 hubs** (≤7: Home, Labs, Systems, Applications, Technology, Investors — D-0247; Trust footer-only; Research hub removed) + Search + Sign In/Up text link + sun/moon theme + language with flags (D-0153/D-0155/D-0156/D-0194/D-0220/D-0247; Install app is footer-only — D-0164; same type as Resources links — D-0223 / D-0224). Hubs **and domain leaves** share one visual shell (`DomainVisualPage` / Layer-1 hub grammar); BioMath Core leaf uses a dedicated navy/gold BMC page with **unified English owner-grade illustration panels in themeable site chrome** within site grammar (D-0228–D-0238). Footer: full depth map including **Home**, **Architecture**, Trust, Roadmap, Resources (FAQ + Search + **Lab** — D-0263 + security issue), Legal (website policies — D-0216/D-0220), Media, Contact, **BioMath Core** under Company (D-0228/D-0247). Auth: `/[locale]/auth/sign-in/` — email/password + Google; soft-degrade when unset. Contact: SMTP when configured else mailto to `info@savencore.com` (D-0173/D-0194). Brand text: `BrandName` matches logo wordmark. Tagline: Turning Intelligence Into Human Care. Deploy target: Vercel; see `docs/VERCEL_DEPLOY.md`.

Experience redesign grammar (D-0128) and human-first progressive disclosure (D-0127) remain relevant for domain pages.

**Always translate UI updates** across every file in `src/i18n/ui/`.

**Do not begin without explicit owner approval:**

- Returning Knowledge Passport / metadata to the first viewport;
- Fabricating Knowledge Object owners, version history, Validated maturity, or evidence upgrades;
- Publishing Contact destinations beyond the authorized `info@savencore.com` / `/contact/` channel (D-0173), or inventing entity/registration details;
- Final counsel-certified legal packs for every regulated jurisdiction (D-0216/D-0220 authorize owner website policies and honest non-pack chrome; counsel review still recommended — do not invent registration, DPO names, or “GDPR certified” claims);
- Entity Registry entity invention unless explicitly authorized;
- logo asset / photography imagery beyond approved homepage living collage + care living carousel (D-0135–D-0152 / D-0261), domain thematic mastheads under `public/domain/` / `public/hub/` (D-0159–D-0160), BioMath Core illustration panels under `public/domain/foundation/biomath-core/` / `diagrams/` (D-0231/D-0234/D-0235/D-0236/D-0237/D-0238/D-0239/D-0241/D-0243), and particle morph assets used only on `/preview/particle-hero/` (D-0255–D-0261 — still no fake deployment photography or invented KPI dashboards);
- CMS, full database, full-text body search, analytics, live cookie consent CMP (Contact SMTP↔mailto, optional Blob Media + Admin JSON, and title-only `/search/` authorized under D-0194/D-0220; do not claim delivery/persistence without env);
- inventing social profile URLs beyond the owner-approved YouTube (D-0195), X (D-0196), Instagram (D-0197), and Facebook (D-0198) defaults;
- investor portal (Sign In/Up + Google page authorized; not a full portal);
- inventing additional leaf marketing pages beyond the published visual domain set + D-0194 leaves (Roadmap / Resources security / Investors contact; Research hub removed — D-0247) + D-0220 `/search/` + D-0228 `/foundation/biomath-core/` + D-0263 `/lab/` experiments hub (not a marketing leaf);
- graph visualization or knowledge CMS;
- neon, glow, or futuristic decoration outside the approved experience grammar (D-0261/D-0263: particle morph WebGL is preview-only at `/preview/particle-hero/`, linked from `/lab/`, not the public home; D-0217/D-0218 authorizes soft brand glow on the home closing SAVEN wordmark only; D-0225/D-0226 authorize contained cinematic letter glow inside the clarity Explore SAVEN band only; D-0228/D-0229/D-0230/D-0231/D-0232/D-0233/D-0234/D-0235/D-0236/D-0237/D-0238/D-0239 authorize limited BMC orange/blue accent glow on the BioMath Core leaf hero/category icons and illustration panel chrome only — glow already present inside owner illustration assets is allowed).

---

## Mandatory Reading Order

Before modifying anything in this repository, read:

1. `docs/SAVEN_CORE_MASTER_SPEC.md` — complete source of truth
2. `docs/PROJECT_RULES.md` — non-negotiable development rules
3. `docs/DECISIONS_LOG.md` — approved decisions and phase authorization
4. Domain documents relevant to your task:
   - `docs/INFORMATION_ARCHITECTURE.md`
   - `docs/CONTENT_MODEL.md`
   - `docs/DESIGN_PRINCIPLES.md`
   - `docs/LOCALIZATION_SPEC.md`
   - `docs/TRUST_LEGAL_STRUCTURE.md`
   - `docs/ROADMAP_CONTENT_MODEL.md`

If documents conflict, follow the Master Spec unless a later `DECISIONS_LOG.md` entry explicitly supersedes it.

---

## Non-Negotiable Rules

1. Do not change approved architecture without explicit instruction.
2. Do not invent company facts.
3. Do not invent products, claims, metrics, partners, customers, approvals, patents, or team members.
4. Do not represent development concepts as operational products.
5. Do not generate all pages at once.
6. Work in small reviewable phases.
7. Before every phase, state objective, files to create or change, expected result, and what will not be changed.
8. After every phase, report files created, files modified, tests performed, unresolved items, and assumptions made.
9. Never silently change navigation, design tokens, content architecture, or naming.
10. Do not replace SAVEN terminology with generic alternatives.
11. Preserve straight corners throughout the design.
12. Do not add visual effects merely to make the site look futuristic.
13. Do not write final legal or medical claims without supplied approved text.
14. Keep public and restricted information structurally separate.
15. Keep English as the canonical source language.
16. Prepare all architecture for ten languages and RTL from the beginning.
17. Do not proceed to the next development phase without approval.

---

## Positioning Reminder

Primary public statement:

> Intelligent systems built to support human life.

Supporting statement:

> SAVEN Core develops intelligent systems that help people in hospitals, at home and wherever life happens — across every age and stage of life.

Core positioning:

> From human understanding to physical assistance.

Foundation sequence (continuous, not unrelated):

BioMath Life → BioMath Core → SAVEN → SAVEN Core

AI and robotics are tools, not the purpose. Human support is primary.

---

## Status Reminder

Approved status vocabulary (internal / docs):

Research · Architecture · In Development · Prototype · Validation · Pilot · Operational

**Public chrome (D-0252):** do **not** surface **In Development** (or “still being built” maturity messaging) on visitor-facing badges, leads, or disclaimers. Prefer quiet professionalism — remove maturity stamps or keep **Architecture** / **Research** where a structural label is needed. Do **not** replace with **Operational**, “available now,” fake customers, or medical claims. Admin and internal docs may still use In Development.

---

## Phase Protocol

### Before starting work

State:

- objective;
- files to create or change;
- expected result;
- what will not be changed.

Confirm the work is authorized by the current phase / Decisions Log.

### After finishing work

Report:

- files created;
- files modified;
- tests performed;
- unresolved items;
- assumptions made.

### Decision logging

Append material approvals and phase changes to `docs/DECISIONS_LOG.md`. Do not rewrite prior entries.

---

## Refusal Conditions

Refuse or stop and ask the owner when a request would require:

- inventing company facts, products, customers, partners, patents, metrics, or team members;
- presenting in-development systems as operational or commercially available;
- writing final legal, medical, or regulatory claims without approved text;
- silently changing navigation, taxonomy, or design principles;
- installing the application stack before Phase 1 (or later) authorization;
- skipping documentation governance for convenience.

---

## Copyright and Naming

Use:

```
© 2026 SAVEN Core. All rights reserved.
```

Do not add “Inc.” unless the legal company name is confirmed in the Decisions Log.
