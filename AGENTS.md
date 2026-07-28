# AGENTS.md — SAVEN Core Website

This repository is the SAVEN Core public website project (`https://www.savencore.com`).

If you are a coding agent (Cursor or otherwise), read this file before making any changes.

---

## Current Phase

**Gap backlog execution pass (D-0194)** — docs as-built sync; legal draft/CMP-clear UX; optional Vercel Blob media durability; Systems naming bridge + Systems in header; Home Flagship Gateway; `/roadmap/` Direction; Company/Foundation continuity; hide unset socials; Investors contact path; security-issue resource; Research Areas/Notes; Applications human-first note; Contact SMTP↔mailto; FR legal + `%2F` L10N fixes; Search Console as owner ops (no GA). **D-0195** — owner YouTube URL live in footer (`https://youtu.be/0C1Sk_RAnSw` committed default). **D-0196** — owner X URL live in footer (`https://x.com/SAVENcore` committed default). **D-0197** — owner Instagram URL live in footer (`https://www.instagram.com/savencore/` committed default). **D-0198** — owner Facebook URL live in footer (`https://www.facebook.com/profile.php?id=61592276954371` committed default; LinkedIn remains hidden). **D-0199** — footer nine equal tracks in one row (superseded). **D-0200** — footer two balanced rows (5+4) (superseded by D-0205). **D-0201** — Media download (mobile + desktop) via same-origin attachment APIs; Blob uploads stream correctly; Vercel deploy docs for `BLOB_READ_WRITE_TOKEN`. **D-0202** — public FAQ at `/faq/` (footer Resources; thematic accordion; governance-safe Q&As). **D-0203** — deep FAQ Q&A translations for all 10 locales + Media Downloading state / iOS download trigger; flagship `%2F` Sign In/Up fixes. **D-0204** — max-size favicon / PWA / apple-touch icons from falcon webp mark (512/192/180 + multi-size ICO/SVG). **D-0205** — Apple-style footer (5 equal columns; sections stacked within columns) + max-fill favicon mark. **D-0206** — footer more vertical space between stacked sections; slightly smaller title/link type; 5-col row from ≥800px. **D-0207** — light off-white + dark soft gray-blue theme tokens (escape template white/navy); footer 5-col one-row from ≥720px. **D-0208** — colored lively footer socials; smaller bottom bar (`Copyright © 2026 SAVEN CORE…` via BrandName); Care carousel click-raise + Application links under scenes; direction flagships as zebra table; footer 5-col compress + footer-only “Robotics Interface”; deeper off-white (superseded by D-0211); max-fill favicon (superseded by D-0211 navy tile); header hubs one-row; Windows Chrome nav/link hover fix. **D-0209** — footer nine equal section columns in one forced desktop row (Architecture never stacks); Care stage Application CTAs on big slides. **D-0210** — footer language switcher `:hover` / `:focus-visible` accent color (Windows Chrome-safe; same class as D-0208). **D-0211** — deeper off-white `#e6e6e9`/`#eeeeef`; navy-tile favicon `?v=211`; larger footer links + wider column gaps; footer Get in touch form (removed D-0212); medical disclaimer on footer + legal pages + FAQ Trust Q&As. **D-0212** — footer Get in touch removed (Contact only); medical disclaimer between socials and copyright; denser footer link lists; three-line slogan navy/gold lockup. **D-0213** — Admin light/dark theme + SAVEN logo before Admin Platform title + richer navy/gold/soft-blue accents; footer Install app moved into Resources column (smaller type). Prior: Robotics Interface large SVG devices (D-0193) + section polish (D-0192) + brand mark (D-0191) + diagram enrichment (D-0190) + Interface content/hub (D-0189) + Footer Architecture (D-0188) + Admin Media (D-0183–D-0187) + … — read `docs/ADMIN_PLATFORM.md`, `docs/SITE_ASSIGNMENT.md`, `docs/SITE_AUDIT_REPORT.md`, and D-0134–D-0213.

Hero: **Intelligence for the Physical World.** + living photoreal **help collage** (D-0149/D-0151/D-0152). Post-hero: **one** care-focused living carousel (D-0150) + compact **Flagship Gateway** (Lab / Interface / Future Lab / Investors — D-0194). **Page bodies + UI chrome for all 10 locales** (`en`/`es`/`de`/`fr`/`ja`/`zh-cn`/`ar`/`he`/`uk`/`ru`; English canonical). Header: logo + **important Layer-1 hubs** (≤7: Labs, Systems, Applications, Technology, Research, Trust, Investors) + Sign In/Up text link + sun/moon theme + language with flags (D-0153/D-0155/D-0156/D-0194; Install app is footer-only — D-0164). Hubs **and domain leaves** share one visual shell (`DomainVisualPage` / Layer-1 hub grammar). Footer: full depth map including **Architecture**, Research Areas/Notes, Roadmap, Resources (FAQ + security issue), Legal drafts, Media, Contact. Auth: `/[locale]/auth/sign-in/` — email/password + Google; soft-degrade when unset. Contact: SMTP when configured else mailto to `info@savencore.com` (D-0173/D-0194). Brand text: `BrandName` matches logo wordmark. Tagline: Turning Intelligence Into Human Care. Deploy target: Vercel; see `docs/VERCEL_DEPLOY.md`.

Experience redesign grammar (D-0128) and human-first progressive disclosure (D-0127) remain relevant for domain pages.

**Always translate UI updates** across every file in `src/i18n/ui/`.

**Do not begin without explicit owner approval:**

- Returning Knowledge Passport / metadata to the first viewport;
- Fabricating Knowledge Object owners, version history, Validated maturity, or evidence upgrades;
- Publishing Contact destinations beyond the authorized `info@savencore.com` / `/contact/` channel (D-0173), or inventing entity/registration details;
- Final binding legal/policy prose (structural drafts authorized under D-0154 — do not present as effective law; draft localization authorized under D-0161);
- Entity Registry entity invention unless explicitly authorized;
- logo asset / photography imagery beyond approved homepage living photoreal hero + care living carousel (D-0135–D-0152) and domain thematic mastheads under `public/domain/` / `public/hub/` (D-0159–D-0160; still no fake deployment photography or invented KPI dashboards);
- CMS, full database, working search, analytics, live cookie consent CMP (Contact SMTP↔mailto and optional Blob media authorized under D-0194; do not claim delivery/persistence without env);
- inventing social profile URLs beyond the owner-approved YouTube (D-0195), X (D-0196), Instagram (D-0197), and Facebook (D-0198) defaults;
- investor portal (Sign In/Up + Google page authorized; not a full portal);
- inventing additional leaf marketing pages beyond the published visual domain set + D-0194 leaves (Roadmap / Research Areas·Notes / Resources security / Investors contact);
- graph visualization or knowledge CMS;
- neon, glow, or futuristic decoration outside the approved experience grammar.

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
