# SAVEN Core — Decisions Log

**Document status:** Append-only  
**Authority:** Records owner-approved decisions that govern the project  
**Last updated:** 2026-07-24 (Phase 1A.1 append)

## Rules

1. This log is **append-only**. Do not rewrite or delete prior entries.
2. Corrections are recorded as new entries that supersede earlier decisions by reference.
3. Each entry must include: date, decision ID, summary, status, scope, and implications.
4. Material architecture, naming, legal, or positioning changes require an entry here.
5. Phase advancement requires an explicit entry or direct owner instruction subsequently logged here.

---

## Decision Index

| ID | Date | Summary | Status |
|----|------|---------|--------|
| D-0001 | 2026-07-24 | Phase 0 documentation-only foundation approved | Active |
| D-0002 | 2026-07-24 | Primary public statements and positioning approved | Active |
| D-0003 | 2026-07-24 | Foundation sequence and principal taxonomy approved | Active |
| D-0004 | 2026-07-24 | Development status system approved | Active |
| D-0005 | 2026-07-24 | Primary navigation and Purpose label approved | Partially superseded by D-0012 |
| D-0006 | 2026-07-24 | Ten-locale architecture and RTL requirement approved | Active; root route resolved by D-0014 |
| D-0007 | 2026-07-24 | Design direction and straight-corner rule approved | Active |
| D-0008 | 2026-07-24 | Planned technical stack recorded; not to be installed in Phase 0 | Active |
| D-0009 | 2026-07-24 | Invention prohibitions and legal draft-only rule approved | Active |
| D-0010 | 2026-07-24 | Phase 1 not authorized | Partially superseded by D-0018 (1A only) |
| D-0011 | 2026-07-24 | Home page section order approved | Active |
| D-0012 | 2026-07-24 | Primary/utility navigation grouping approved | Active |
| D-0013 | 2026-07-24 | Technology taxonomy independence rules approved | Active |
| D-0014 | 2026-07-24 | Root URL `/` redirects to `/en/` | Active |
| D-0015 | 2026-07-24 | Content outside components; CMS deferred | Active |
| D-0016 | 2026-07-24 | Design implementation constraints restated | Active |
| D-0017 | 2026-07-24 | Phase 0.75A Architecture Decisions document approved | Active |
| D-0018 | 2026-07-24 | Phase 1A technical initialization authorized | Active |
| D-0019 | 2026-07-24 | npm selected as package manager | Active |
| D-0020 | 2026-07-24 | Tailwind deferred | Active |
| D-0021 | 2026-07-24 | CMS / database / authentication deferred | Active |
| D-0022 | 2026-07-24 | Browser-language auto-detection deferred | Active |
| D-0023 | 2026-07-24 | Localized slug decision remains unresolved | Active |
| D-0024 | 2026-07-24 | Next.js 16 proxy convention adopted | Active |
| D-0025 | 2026-07-24 | Deprecated middleware convention removed | Active |
| D-0026 | 2026-07-24 | Git repository initialized; baseline commit pending identity | Active |
| D-0027 | 2026-07-24 | Phase 1B remains unauthorized | Active |

---

## Entries

### D-0001 — Phase 0 documentation-only foundation

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Create permanent project specification and development governance documents before any website build work.
- **In scope:** Master Spec, Project Rules, IA, Content Model, Design Principles, Localization Spec, Trust/Legal Structure, Roadmap Content Model, Decisions Log, AGENTS.md
- **Out of scope:** Next.js initialization, package installation, page generation, visual components, images, `package.json`, application code
- **Implications:** No implementation phase may begin until explicitly approved.

### D-0002 — Primary public statements and positioning

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Approve the following public statements for website use:
  - Primary: “Intelligent systems built to support human life.”
  - Supporting: “SAVEN Core develops intelligent systems that help people in hospitals, at home and wherever life happens — across every age and stage of life.”
  - Positioning: “From human understanding to physical assistance.”
- **Implications:** Additional marketing claims require new approval. Inflated claim language remains prohibited.

### D-0003 — Foundation sequence and principal taxonomy

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** The company foundation sequence is BioMath Life → BioMath Core → SAVEN → SAVEN Core and must be presented as continuous, not unrelated projects. Initial systems, labs, technology areas, primary human applications, and future extensions are those listed in the Master Spec.
- **Implications:** Taxonomy changes require a superseding decision. Primary human applications always appear before future extensions.

### D-0004 — Development status system

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Adopt status values Research, Architecture, In Development, Prototype, Validation, Pilot, Operational. Current public content primarily uses Research, Architecture, In Development. All principal systems are currently in development and must not be presented as completed or commercially available products.
- **Implications:** Status fields (status, last updated, explanation, public/restricted) are mandatory for relevant entities.

### D-0005 — Primary navigation and Purpose label

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Top-level navigation is Purpose, Foundation, Technology, Systems, Labs, Applications, Research, Roadmap, Company, Investors. Utility navigation is Search, Language, Contact. “Mission” is not used as the principal navigation label.
- **Implications:** Navigation changes require explicit approval. Footer structure follows Master Spec columns.

### D-0006 — Ten-locale architecture and RTL

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Architecture must support `en`, `es`, `de`, `fr`, `ja`, `zh-cn`, `ar`, `he`, `uk`, `ru` from the beginning, with English as source language. Arabic and Hebrew require complete RTL support. Browser auto-translation is not the localization system. Fallback to English when approved localized content is unavailable.
- **Implications:** Routing, content model, and UI architecture must be locale-ready before broad page build-out. Open owner decisions remain for `/` vs `/en/` default behavior and localized slugs.

### D-0007 — Design direction

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Visual direction is modern, precise, engineering-led, human-centered, light-primary with controlled dark technology sections, straight corners, no rounded-card system, restrained motion, and WCAG 2.2 AA target. Prohibited patterns include generic AI gradients, glowing spheres, glassmorphism, fake interfaces, and unrelated stock robots.
- **Implications:** Design tokens and components in later phases must comply. No decorative futurism for its own sake.

### D-0008 — Planned technical stack (deferred installation)

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Planned direction includes Next.js, TypeScript, App Router, React, next-intl, Vercel, structured content, later headless CMS, multilingual metadata, RTL, structured SEO, secure forms, cookie consent, and privacy-controlled analytics. None of these are installed or configured in Phase 0.
- **Implications:** Stack setup requires a future phase approval entry.

### D-0009 — Invention prohibitions and legal draft-only rule

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Do not invent products, customers, partners, approvals, patents, metrics, medical outcomes, team members, revenue, investment, or final legal/medical text. Trust/legal pages exist as draft structures until legal review. Social URLs remain configurable without fake links. Copyright line uses “SAVEN Core” without “Inc.” until legal name confirmation. Preferred trust language approved: “Designed around privacy, controlled access, data minimization, safety, traceability, and human oversight.”
- **Implications:** Agents must refuse requests that require invented facts or final legal prose.

### D-0010 — Phase 1 not authorized

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** After Phase 0 document creation, work stops. Phase 1 (implementation) is not authorized.
- **Implications:** Coding agents must not begin application scaffolding until a new decision or explicit owner instruction authorizes the next phase.

### D-0011 — Home page section order approved

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Approve the home page section order recorded in `ARCHITECTURE_DECISIONS.md` §1: Hero; Human Purpose; Hospital • Home • Everyday Life; BioMath Life → BioMath Core → SAVEN → SAVEN Core; How the System Works; Technology Overview; Systems; Research & Labs; Safety • Privacy • Human Oversight; Development Status; Company; Investors; Footer.
- **Implications:** Home is the comprehension spine. Leaf-page production should not precede an implementation of this order without owner approval.

### D-0012 — Primary/utility navigation grouping approved

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Primary navigation is Purpose, Foundation, Technology, Applications, Research, Company. Utility navigation is Investors, Search, Language, Contact. Technology contains Technology, Systems, Labs. Research contains Research, Publications, Roadmap. Company contains About, Leadership, Careers, Contact, Trust.
- **Supersedes:** D-0005 primary/utility grouping (flat ten-item primary nav). Purpose label rule from D-0005 remains in force.
- **Implications:** Systems, Labs, Roadmap, and Investors are no longer peer primary items. Route inventory may still expose dedicated pages; grouping changes presentation, not taxonomy independence.

### D-0013 — Technology taxonomy independence rules approved

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Technology = disciplines; Systems = products and engineering systems; Labs = research organizations; Applications = where technology is used; Research = publications and engineering work; Roadmap = development timeline. These concepts must remain independent.
- **Implications:** Templates and content types must not collapse these into one interchangeable catalog. Cross-links are allowed; identity substitution is not.

### D-0014 — Root URL redirects to `/en/`

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** `/` redirects to `/en/`. English remains canonical. Architecture continues to support all ten locales with RTL for Arabic and Hebrew.
- **Resolves:** Open root-route question from D-0006 / prior pending list item 2.
- **Implications:** Locale-prefixed English at `/en/` is mandatory. Other locale prefixes remain required.

### D-0015 — Content outside components; CMS deferred

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** English is the source language. Content must remain outside React components. Architecture must allow future CMS integration. No CMS is selected yet.
- **Implications:** Do not hardcode narrative content in components. Choose a structured content approach in Phase 1 that can migrate to a headless CMS later without IA rewrite.

### D-0016 — Design implementation constraints restated

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** The website must look like a serious engineering organization. Avoid startup templates, glowing AI gradients, glassmorphism, rounded card systems, fake robotics imagery, and excessive animations. Straight corners remain mandatory.
- **Implications:** Restates D-0007 for implementation gating; does not modify Master Spec philosophy.

### D-0017 — Phase 0.75A Architecture Decisions document approved

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Create and adopt `docs/ARCHITECTURE_DECISIONS.md` as the record of implementation decisions approved after the Phase 0 Architecture Review.
- **In scope:** Documentation only.
- **Out of scope:** Phase 1, Next.js initialization, dependency installation, application code, modification of approved philosophy.
- **Implications:** D-0010 remains in force. Phase 1 still requires explicit authorization and scope definition.

### D-0018 — Phase 1A technical initialization authorized

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Authorize Phase 1A only: initialize Next.js App Router, React, TypeScript, ESLint, locale-prefixed routing, `/` → `/en/` redirect, ten-locale structural support, RTL document direction for Arabic and Hebrew, minimal global CSS, and successful lint/type-check/build validation.
- **Supersedes:** D-0010 for Phase 1A scope only.
- **Out of scope:** Design system, production Home page, Header/Footer/Mega Menu, marketing sections, CMS, database, forms, analytics, cookie consent, authentication, investor access, Phase 1B+.
- **Implications:** Broader Phase 1 work remains unauthorized until explicitly approved. See `docs/PHASE_1A_TECHNICAL_FOUNDATION.md`.

### D-0019 — npm selected as package manager

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Use npm as the package manager for the SAVEN Core website repository.
- **Implications:** Lockfile is `package-lock.json`. Do not introduce parallel package-manager lockfiles without a superseding decision.

### D-0020 — Tailwind deferred

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Do not install or configure Tailwind CSS in Phase 1A. Styling remains a minimal global CSS foundation only.
- **Implications:** Design-system and token work belong to a later authorized phase.

### D-0021 — CMS / database / authentication deferred

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Local CMS, database, and authentication are not part of Phase 1A. No speculative folders or integrations for these capabilities.
- **Implications:** Reinforces D-0015. Content remains outside React components when content work begins; CMS selection remains open.

### D-0022 — Browser-language auto-detection deferred

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Do not auto-detect or redirect based on browser language in Phase 1A. Locale routes are explicit path prefixes only.
- **Implications:** Users reach locales via `/en/`, `/ar/`, etc. Future locale preference behavior requires a separate decision.

### D-0023 — Localized slug decision remains unresolved

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Localized path slugs remain unresolved. Phase 1A uses English slugs only (none implemented beyond locale prefixes).
- **Implications:** Owner must decide later whether localized slugs are desired; until then, keep English path segments.

### D-0024 — Next.js 16 proxy convention adopted

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Adopt the Next.js 16 `proxy.ts` file convention for the `/` → `/en/` redirect and route matcher. Export name is `proxy`.
- **Implications:** Do not reintroduce `middleware.ts`. Do not expand proxy behavior beyond approved foundation redirects without a new decision.

### D-0025 — Deprecated middleware convention removed

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Remove `middleware.ts` after manual migration to `proxy.ts`. No canary codemod used.
- **Implications:** Builds must not emit the middleware deprecation notice. Proxy retains prior redirect/matcher behavior only.

### D-0026 — Git repository initialized; baseline commit pending identity

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Initialize a local Git repository on branch `main` for the SAVEN Core workspace. Stage the technical foundation and documentation for a baseline commit titled `chore: establish SAVEN Core technical foundation`.
- **Blocked:** Commit not created because Git `user.name` and `user.email` are unset. Identity must be configured by the owner (no invented values; no global config changes by agents).
- **Implications:** No remote configured. No push. Baseline hash pending owner commit after identity setup.

### D-0027 — Phase 1B remains unauthorized

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Phase 1A.1 authorization does not extend to Phase 1B. Design system, Home page, Header/Footer/navigation, marketing pages, CMS, forms, authentication, analytics, and visual design remain unauthorized.
- **Implications:** Agents must stop after Phase 1A.1 corrections and Git baseline preparation.

---

## Pending Owner Decisions

These are not decisions yet; they are tracked for future resolution:

1. Legal entity name confirmation (whether “Inc.” or other suffix applies).
2. Default root route behavior: `/` → `/en/` vs English at `/`.
3. Whether localized path slugs will be used in a later phase.
4. Official social account URLs.
5. Contact emails / forms destinations.
6. Roadmap baseline year and first public roadmap entries.
7. Leadership content availability and publication policy.
8. Translation process/vendor selection.
9. Analytics and cookie consent vendor selection.
10. Authorization and scope definition for Phase 1.

### Pending list update — 2026-07-24 (Phase 0.75A)

Resolved from the list above:

- Item 2 — root route behavior — resolved by D-0014 (`/` → `/en/`).

Still open (owner decisions only):

1. Legal entity name confirmation (whether “Inc.” or other suffix applies).
2. Whether localized path slugs will be used in a later phase.
3. Official social account URLs.
4. Contact emails / forms destinations.
5. Roadmap baseline year and first public roadmap entries.
6. Leadership content availability and publication policy.
7. Translation process / vendor selection and locale launch sequencing for approved translations.
8. Analytics and cookie consent vendor selection.
9. CMS selection (explicitly deferred; architecture must remain CMS-ready) — D-0015.
10. Design token values, multilingual font stack, and named intentional motions.
11. Authorization and exact scope definition for Phase 1 — D-0010 remains active.

### Pending list update — 2026-07-24 (Phase 1A)

Resolved / narrowed:

- Phase 1A technical initialization authorized — D-0018 (does not authorize Phase 1B+).
- npm selected — D-0019.
- Tailwind deferred — D-0020.
- CMS / database / authentication deferred for this phase — D-0021.
- Browser-language auto-detection deferred — D-0022.
- Localized slug decision explicitly remains unresolved — D-0023.

Still open (owner decisions only):

1. Legal entity name confirmation.
2. Localized path slug policy (unresolved by D-0023).
3. Official social account URLs.
4. Contact emails / form destinations.
5. Roadmap baseline year and first public roadmap entries.
6. Leadership content availability and publication policy.
7. Translation process / vendor selection and locale launch sequencing.
8. Analytics and cookie consent vendor selection.
9. CMS selection (still deferred).
10. Design token values, multilingual font stack, and named intentional motions.
11. Authorization and exact scope for Phase 1B+ (design system / Home / navigation).

When resolved, append new decision entries; do not edit this section’s historical meaning—update by adding dated resolutions below or as new D- IDs.
