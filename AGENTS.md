# AGENTS.md — SAVEN Core Website

This repository is the SAVEN Core public website project (`https://www.savencore.com`).

If you are a coding agent (Cursor or otherwise), read this file before making any changes.

---

## Current Phase

**BioMath Core capability redesign + home bridge (D-0230 / D-0229 / D-0228 / D-0227)** — Owner-authorized: published leaf `/foundation/biomath-core/` (transparent smaller BMC logo, title **BioMath Core**, tagline **Where health data becomes daily clarity.**, capability diagrams — One Human = One Living Model, four-layer stack, dual roles, Master Infrastructure Formula, Environments helix — plus foundation sequence, reports→SAVEN actions, Complete Services Catalog + 20-category diagram with owner counts/blurbs — Architecture / In Development model coverage, not Operational/e-commerce catalog); footer Company → BioMath Core; home clarity **one** merged BioMath bridge (Who we are / BioMath Core → SAVEN / Human Data Model continuous context / 20 categories · 200+ services) **immediately before** “What we are not” — no “basis of everything” wording. D-0227 positioning remains: reports/conclusions → SAVEN next-level actions under human control (AI as tool); **20 categories · 200+ services**; not diagnose / prescribe / sell medicines. Prior D-0194–D-0229 remain in force — read `docs/ADMIN_PLATFORM.md`, `docs/SITE_ASSIGNMENT.md`, `docs/SITE_AUDIT_REPORT.md`, and D-0134–D-0230.

Hero: **Intelligence for the Physical World.** + living photoreal **help collage** (D-0149/D-0151/D-0152). Post-hero (when clarity on — D-0219/D-0220/D-0221/D-0225/D-0226/D-0227/D-0228/D-0229/D-0230): visual definition + 3-step chain + **Explore SAVEN** letter showcase + audience fork, then **one** care-focused living carousel (D-0150) with stage “why SAVEN”, then **merged BioMath bridge**, then boundaries (“what we are not”), compact **Flagship Gateway** (Lab / Interface / Future Lab / Investors — D-0194) + **Explore SAVEN** closing map (D-0216/D-0217/D-0218; full corner clusters — D-0221). **Page bodies + UI chrome for all 10 locales** (`en`/`es`/`de`/`fr`/`ja`/`zh-cn`/`ar`/`he`/`uk`/`ru`; English canonical). Header: logo + **important Layer-1 hubs** (≤7: Labs, Systems, Applications, Technology, Research, Trust, Investors) + Search + Sign In/Up text link + sun/moon theme + language with flags (D-0153/D-0155/D-0156/D-0194/D-0220; Install app is footer-only — D-0164; same type as Resources links — D-0223 / D-0224). Hubs **and domain leaves** share one visual shell (`DomainVisualPage` / Layer-1 hub grammar); BioMath Core leaf uses a dedicated navy/gold BMC page within site grammar (D-0228/D-0229/D-0230). Footer: full depth map including **Architecture**, Research Areas/Notes, Roadmap, Resources (FAQ + Search + security issue), Legal (website policies — D-0216/D-0220), Media, Contact, **BioMath Core** under Company (D-0228). Auth: `/[locale]/auth/sign-in/` — email/password + Google; soft-degrade when unset. Contact: SMTP when configured else mailto to `info@savencore.com` (D-0173/D-0194). Brand text: `BrandName` matches logo wordmark. Tagline: Turning Intelligence Into Human Care. Deploy target: Vercel; see `docs/VERCEL_DEPLOY.md`.

Experience redesign grammar (D-0128) and human-first progressive disclosure (D-0127) remain relevant for domain pages.

**Always translate UI updates** across every file in `src/i18n/ui/`.

**Do not begin without explicit owner approval:**

- Returning Knowledge Passport / metadata to the first viewport;
- Fabricating Knowledge Object owners, version history, Validated maturity, or evidence upgrades;
- Publishing Contact destinations beyond the authorized `info@savencore.com` / `/contact/` channel (D-0173), or inventing entity/registration details;
- Final counsel-certified legal packs for every regulated jurisdiction (D-0216/D-0220 authorize owner website policies and honest non-pack chrome; counsel review still recommended — do not invent registration, DPO names, or “GDPR certified” claims);
- Entity Registry entity invention unless explicitly authorized;
- logo asset / photography imagery beyond approved homepage living photoreal hero + care living carousel (D-0135–D-0152) and domain thematic mastheads under `public/domain/` / `public/hub/` (D-0159–D-0160; still no fake deployment photography or invented KPI dashboards);
- CMS, full database, full-text body search, analytics, live cookie consent CMP (Contact SMTP↔mailto, optional Blob Media + Admin JSON, and title-only `/search/` authorized under D-0194/D-0220; do not claim delivery/persistence without env);
- inventing social profile URLs beyond the owner-approved YouTube (D-0195), X (D-0196), Instagram (D-0197), and Facebook (D-0198) defaults;
- investor portal (Sign In/Up + Google page authorized; not a full portal);
- inventing additional leaf marketing pages beyond the published visual domain set + D-0194 leaves (Roadmap / Research Areas·Notes / Resources security / Investors contact) + D-0220 `/search/` + D-0228 `/foundation/biomath-core/`;
- graph visualization or knowledge CMS;
- neon, glow, or futuristic decoration outside the approved experience grammar (D-0217/D-0218 authorizes soft brand glow on the home closing SAVEN wordmark only; D-0225/D-0226 authorize contained cinematic letter glow inside the clarity Explore SAVEN band only; D-0228/D-0229/D-0230 authorize limited BMC orange/blue accent glow on the BioMath Core leaf hero/category icons and capability diagrams only).

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

All principal systems are in development.

Use only approved statuses:

Research · Architecture · In Development · Prototype · Validation · Pilot · Operational

Current content primarily uses Research, Architecture, and In Development.

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
