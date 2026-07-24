# SAVEN Core — Decisions Log

**Document status:** Append-only  
**Authority:** Records owner-approved decisions that govern the project  
**Last updated:** 2026-07-24 (Phase 1D.4 append)

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
| D-0027 | 2026-07-24 | Phase 1B remains unauthorized | Superseded by D-0028 |
| D-0028 | 2026-07-24 | Phase 1B design foundation authorized | Active |
| D-0029 | 2026-07-24 | Design token modules and spacing scale adopted | Active |
| D-0030 | 2026-07-24 | Straight-corner radius default and system fonts adopted | Active |
| D-0031 | 2026-07-24 | Neutral semantic colors only; brand accents deferred | Active |
| D-0032 | 2026-07-24 | Header / Footer / Home remain unauthorized after Phase 1B | Partially superseded by D-0033 (shell only) |
| D-0033 | 2026-07-24 | Phase 1C global site shell authorized | Active |
| D-0034 | 2026-07-24 | Centralized navigation data adopted | Active |
| D-0035 | 2026-07-24 | Accessible disclosure + rectangular mobile navigation | Active |
| D-0036 | 2026-07-24 | Text wordmark and flagless language selector | Active |
| D-0037 | 2026-07-24 | Unresolved destination routes may remain unimplemented | Active |
| D-0038 | 2026-07-24 | Phase 1D remains unauthorized | Partially superseded by D-0039 (1D.1 only) |
| D-0039 | 2026-07-24 | Phase 1D.1 Home Hero and Purpose authorized | Active |
| D-0040 | 2026-07-24 | Editorial Hero layout without imagery | Active |
| D-0041 | 2026-07-24 | Approved Hero copy adopted | Active |
| D-0042 | 2026-07-24 | Three application contexts on Home | Active |
| D-0043 | 2026-07-24 | English fallback across locale Home routes | Active |
| D-0044 | 2026-07-24 | Home built in incremental section phases | Active |
| D-0045 | 2026-07-24 | Phase 1D.2 remains unauthorized | Superseded by D-0046 |
| D-0046 | 2026-07-24 | Phase 1D.2 Foundation and System Logic authorized | Active |
| D-0047 | 2026-07-24 | Four-stage Foundation Chain adopted | Active |
| D-0048 | 2026-07-24 | Human Data Model terminology retained | Active |
| D-0049 | 2026-07-24 | Five-step governed system logic adopted | Active |
| D-0050 | 2026-07-24 | Six-part Technology Overview as disciplines | Active |
| D-0051 | 2026-07-24 | No imagery in Phase 1D.2 | Active |
| D-0052 | 2026-07-24 | Phase 1D.3 remains unauthorized | Superseded by D-0053 |
| D-0053 | 2026-07-24 | Phase 1D.3 Systems, Research and Trust authorized | Active |
| D-0054 | 2026-07-24 | Five-system Home overview adopted | Active |
| D-0055 | 2026-07-24 | Research and Labs remain separate concepts | Active |
| D-0056 | 2026-07-24 | Trust Architecture pillars and autonomy limit line | Active |
| D-0057 | 2026-07-24 | No imagery in Phase 1D.3 | Active |
| D-0058 | 2026-07-24 | Phase 1D.4 remains unauthorized | Superseded by D-0059 |
| D-0059 | 2026-07-24 | Phase 1D.4 Home completion authorized | Active |
| D-0060 | 2026-07-24 | Four-stage Development Status without dates or percentages | Active |
| D-0061 | 2026-07-24 | Company principles adopted | Active |
| D-0062 | 2026-07-24 | Investor communication without financial claims | Active |
| D-0063 | 2026-07-24 | Roadmap by capability; approved Home closing statement | Active |
| D-0064 | 2026-07-24 | Home page structural build complete | Active |
| D-0065 | 2026-07-24 | Further Home visual review before destination pages | Active |
| D-0066 | 2026-07-24 | Phase 1E remains unauthorized | Active |

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
- **Status:** Superseded by D-0028
- **Decision:** Phase 1A.1 authorization does not extend to Phase 1B. Design system, Home page, Header/Footer/navigation, marketing pages, CMS, forms, authentication, analytics, and visual design remain unauthorized.
- **Implications:** Agents must stop after Phase 1A.1 corrections and Git baseline preparation.

### D-0028 — Phase 1B design foundation authorized

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Authorize Phase 1B to create the visual engineering foundation under `src/design/` and document it in `docs/PHASE_1B_DESIGN_FOUNDATION.md`.
- **Supersedes:** D-0027 for design-foundation scope only.
- **Out of scope:** Home page, Header, Footer, navigation, content sections, marketing copy, UI components, custom fonts, final brand colors.
- **Implications:** Subsequent UI work must consume these tokens. Phase 1B does not authorize component or page build-out.

### D-0029 — Design token modules and spacing scale adopted

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Adopt modules `tokens.ts`, `spacing.ts`, `typography.ts`, `breakpoints.ts`, `container.ts`, `motion.ts`, and `radius.ts`. Spacing scale is exclusively 4, 8, 12, 16, 24, 32, 48, 64, 96.
- **Implications:** No random spacing. Breakpoints and containers follow one responsive ladder (sm → 2xl).

### D-0030 — Straight-corner radius default and system fonts adopted

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Global border radius remains `0`. Typography uses system font stacks and the defined type roles only. Custom brand fonts remain deferred.
- **Implications:** Any future rounding must be explicit opt-in per component, never a sitewide card radius system.

### D-0031 — Neutral semantic colors only; brand accents deferred

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Phase 1B defines only neutral semantic color tokens (`background`, `surface`, `text`, `textSecondary`, `border`, `divider`, `success`, `warning`, `error`) plus limited dark-section neutrals. Final brand accent colors are not selected.
- **Implications:** Do not introduce purple/indigo AI gradients, neon, or template brand palettes.

### D-0032 — Header / Footer / Home remain unauthorized after Phase 1B

- **Date:** 2026-07-24
- **Status:** Partially superseded by D-0033 (shell only)
- **Decision:** Completing Phase 1B does not authorize Header, Footer, navigation, Home page, or component libraries.
- **Implications:** Stop after design foundation validation unless a new phase is explicitly authorized.

### D-0033 — Phase 1C global site shell authorized

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Authorize a reusable localized site shell: Header, desktop/mobile navigation, utility navigation, language selector, and Footer integrated into `app/[locale]/layout.tsx`.
- **Out of scope:** Production Home page, marketing sections, CMS, search functionality, forms, authentication, analytics, cookie consent, investor portal, translated marketing copy.
- **Implications:** See `docs/PHASE_1C_GLOBAL_SITE_SHELL.md`.

### D-0034 — Centralized navigation data adopted

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Primary, utility, and footer navigation are defined once in `src/navigation/site-navigation.ts` and consumed by shell components. Labels/grouping follow Architecture Decisions.
- **Implications:** Do not hard-code duplicate navigation trees in desktop, mobile, or Footer.

### D-0035 — Accessible disclosure + rectangular mobile navigation

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Desktop groups use accessible disclosure menus (not hover-only mega menus). Mobile navigation is a full-viewport rectangular surface with explicit open/close, Escape-to-close, and temporary body-scroll lock.
- **Implications:** No third-party UI packages. No pill-shaped/floating mobile panels.

### D-0036 — Text wordmark and flagless language selector

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Header brand is a text wordmark “SAVEN Core” until a brand asset is approved. Language selector lists all ten canonical locales with text labels/codes and no flags.
- **Implications:** No automatic browser-language detection. Preserve path locale segment when safe.

### D-0037 — Unresolved destination routes may remain unimplemented

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Shell links may point to approved routes that are not yet implemented. Fake destination pages must not be created solely to avoid 404 responses.
- **Implications:** 404s for unimplemented IA routes are acceptable in Phase 1C.

### D-0038 — Phase 1D remains unauthorized

- **Date:** 2026-07-24
- **Status:** Partially superseded by D-0039 (1D.1 only)
- **Decision:** Completing Phase 1C does not authorize Phase 1D, the production Home page, or further marketing page build-out.
- **Implications:** Stop after Phase 1C commit unless explicitly authorized.

### D-0039 — Phase 1D.1 Home Hero and Purpose authorized

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Authorize Home sections 1–3 only: Hero, Human Purpose, and Hospital / Home / Everyday Life strip. See `docs/PHASE_1D_1_HOME_HERO_PURPOSE.md`.
- **Out of scope:** Remaining Home sections, imagery, CMS, forms, analytics, search, authentication, backend.
- **Implications:** Lower Home sections require a later phase authorization.

### D-0040 — Editorial Hero layout without imagery

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Home Hero uses a left-aligned editorial layout with optional CSS-only structural field. No images, video, robots, silhouettes, or glowing AI visuals.
- **Implications:** Decorative structure must remain `aria-hidden` and gradient-free.

### D-0041 — Approved Hero copy adopted

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Adopt the Phase 1D.1 Hero copy: eyebrow “SAVEN Core”; heading “Intelligent systems built to support human life.”; approved supporting text, status line, and Foundation / Applications actions.
- **Implications:** Inflated marketing language remains prohibited.

### D-0042 — Three application contexts on Home

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Home includes a three-part Hospitals / Home / Everyday Life strip with development-safe explanatory sentences and locale-aware Applications links.
- **Implications:** Do not imply active commercial deployment.

### D-0043 — English fallback across locale Home routes

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** For Phase 1D.1, all valid locale Home routes render controlled English content while preserving locale-prefixed links and RTL document direction.
- **Implications:** No machine translation and no localized slugs in this phase.

### D-0044 — Home built in incremental section phases

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Home development proceeds in small authorized section slices rather than a single full-page build.
- **Implications:** Agents must not invent or implement deferred Home sections.

### D-0045 — Phase 1D.2 remains unauthorized

- **Date:** 2026-07-24
- **Status:** Superseded by D-0046
- **Decision:** Completing Phase 1D.1 does not authorize Phase 1D.2 or any remaining Home sections.
- **Implications:** Stop after Phase 1D.1 commit unless explicitly authorized.

### D-0046 — Phase 1D.2 Foundation and System Logic authorized

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Authorize Home sections 4–6: Foundation Chain, How the System Works, and Technology Overview. See `docs/PHASE_1D_2_FOUNDATION_SYSTEM_LOGIC.md`.
- **Out of scope:** Systems, Research, Safety section, Development Status, Company, Investors, Roadmap, imagery, CMS, backend.
- **Implications:** Remaining Home sections require later authorization.

### D-0047 — Four-stage Foundation Chain adopted

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Present BioMath Life → BioMath Core → SAVEN → SAVEN Core as an explicit four-stage progression with roles and descriptions. Do not use four rounded cards or imply full operational status.
- **Implications:** Hierarchy must remain connected and continuous.

### D-0048 — Human Data Model terminology retained

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Retain “Human Data Model” terminology in the System Logic Understand step and related public Home content where relevant.
- **Implications:** Do not replace with generic alternatives such as “digital twin.”

### D-0049 — Five-step governed system logic adopted

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Adopt Observe → Understand → Evaluate → Assist → Learn with a governance note that important actions remain subject to permissions, safeguards, and human oversight.
- **Implications:** Do not present a fully autonomous loop, diagnosis, continuous medical monitoring, or unreviewed self-learning.

### D-0050 — Six-part Technology Overview as disciplines

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Present six technology disciplines with defined roles, each linking to the Technology route. Technology is enabling infrastructure; none is the purpose by itself.
- **Implications:** No AI-first positioning, logos, certifications, or medical claims.

### D-0051 — No imagery in Phase 1D.2

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Phase 1D.2 uses typography, lines, indexes, and grids only. No images, video, icons, robots, or silhouettes.
- **Implications:** Visual sequencing remains CSS-based and lightweight.

### D-0052 — Phase 1D.3 remains unauthorized

- **Date:** 2026-07-24
- **Status:** Superseded by D-0053
- **Decision:** Completing Phase 1D.2 does not authorize Phase 1D.3 or any later Home sections.
- **Implications:** Stop after Phase 1D.2 commit unless explicitly authorized.

### D-0053 — Phase 1D.3 Systems, Research and Trust authorized

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Authorize Home sections 7–9: Systems, Research & Labs, and Safety/Privacy/Human Oversight (Trust Architecture). See `docs/PHASE_1D_3_SYSTEMS_RESEARCH_TRUST.md`.
- **Out of scope:** Development Status, Company, Investors, Roadmap, imagery, CMS, backend.
- **Implications:** Remaining Home sections require later authorization.

### D-0054 — Five-system Home overview adopted

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Present five systems on Home: SAVEN Robotics Interface, SAVEN Systems Architecture, SAVEN AI, SAVEN Drone Platform, and Human Data Model Interface, each linking to the Systems route.
- **Implications:** Use development-safe language; do not imply deployment or medical-device approval.

### D-0055 — Research and Labs remain separate concepts

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Research and Labs are presented as two clearly separated layers with a relationship statement: research defines what must be understood; labs determine how it can be built, tested and governed.
- **Implications:** Do not invent publications, partners, universities, or lab names beyond approved terminology.

### D-0056 — Trust Architecture pillars and autonomy limit line

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Trust Architecture comprises Safety Architecture, Privacy Architecture, and Human Oversight, with the principle line: “Autonomy is limited by purpose, permission, risk and human authority.”
- **Implications:** Present as engineering principles, not certifications or compliance claims.

### D-0057 — No imagery in Phase 1D.3

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Phase 1D.3 uses typography, borders, indexes, and layout only. No images, icons, shields, locks, robots, or science decoration.
- **Implications:** Visual distinction between sections remains structural.

### D-0058 — Phase 1D.4 remains unauthorized

- **Date:** 2026-07-24
- **Status:** Superseded by D-0059
- **Decision:** Completing Phase 1D.3 does not authorize Phase 1D.4 or any later Home sections.
- **Implications:** Stop after Phase 1D.3 commit unless explicitly authorized.

### D-0059 — Phase 1D.4 Home completion authorized

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Authorize Home sections 10–13: Development Status, Company, Investors, and Roadmap / Closing. See `docs/PHASE_1D_4_HOME_COMPLETION.md`.
- **Out of scope:** Destination pages, imagery, CMS, backend, forms, analytics, authentication, investor portal, Phase 1E.
- **Implications:** Completes the authorized Home structural build.

### D-0060 — Four-stage Development Status without dates or percentages

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Present Development Status as Foundation (Established), Digital Systems (In development), Physical Systems (Planned and under research), and Deployment Readiness (Future phase), with an explicit non-deployment / non-approval note.
- **Implications:** No invented dates, percentages, progress bars, or “coming soon” language.

### D-0061 — Company principles adopted

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Company Home section uses three principles: Purpose before technology; Engineering before promotion; Responsibility before scale.
- **Implications:** No headquarters, legal entity, headcount, leadership, or partner invention on Home.

### D-0062 — Investor communication without financial claims

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Investors Home section describes long-term capital posture and possible material types only; links to investor overview and request-access routes without forms or authentication.
- **Implications:** No funding rounds, valuation, revenue, forecasts, or return claims.

### D-0063 — Roadmap by capability; approved Home closing statement

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Roadmap Home section uses Architecture, Software, Physical Systems, and Readiness categories (not dated milestones), ending with: “Intelligent systems are valuable only when people can understand, govern and trust how they are used.”
- **Implications:** Capability framing remains public until owner-approved dated roadmap entries exist.

### D-0064 — Home page structural build complete

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** The thirteen-section Home structural build authorized across Phases 1D.1–1D.4 is complete.
- **Implications:** Further Home work is limited to authorized visual review or later phases; do not add sections without approval.

### D-0065 — Further Home visual review before destination pages

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Destination-page development remains deferred until further Home visual review is authorized.
- **Implications:** Linked routes may continue to 404 until explicitly built.

### D-0066 — Phase 1E remains unauthorized

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Completing Phase 1D.4 does not authorize Phase 1E or any destination-page, localization, CMS, or product-surface work.
- **Implications:** Stop after Phase 1D.4 commit unless explicitly authorized.

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
