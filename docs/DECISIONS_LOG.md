# SAVEN Core — Decisions Log

**Document status:** Append-only  
**Authority:** Records owner-approved decisions that govern the project  
**Last updated:** 2026-07-26 (D-0187 — Admin Media library filter chip contrast)

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
| D-0066 | 2026-07-24 | Phase 1E remains unauthorized | Superseded by D-0067 |
| D-0067 | 2026-07-24 | Phase 1E.1 corporate Home restructure authorized | Active |
| D-0068 | 2026-07-24 | Home is a corporate gateway, not a full presentation | Active |
| D-0069 | 2026-07-24 | Seven-region Home structure adopted | Active |
| D-0070 | 2026-07-24 | Long-form content belongs on destination pages | Active |
| D-0071 | 2026-07-24 | Technology and Systems combined on Home; taxonomies separate | Active |
| D-0072 | 2026-07-24 | Research, Labs and Trust combined visually; concepts separate | Active |
| D-0073 | 2026-07-24 | Closing Company, Investors and Roadmap region | Active |
| D-0074 | 2026-07-24 | Phase 1E.2 destination pages remain unauthorized | Superseded by D-0075 |
| D-0075 | 2026-07-24 | Phase 1E.2 internal page architecture authorized | Active |
| D-0076 | 2026-07-24 | Four internal page types adopted | Active |
| D-0077 | 2026-07-24 | Compact internal masthead; shared page architecture | Active |
| D-0078 | 2026-07-24 | Internal page content outside JSX; four demo routes only | Active |
| D-0079 | 2026-07-24 | Full destination-page development deferred | Active |
| D-0080 | 2026-07-24 | Phase 1E.3 remains unauthorized | Active |
| D-0081 | 2026-07-24 | Phase 1F.1 Purpose and Foundation authorized | Active |
| D-0082 | 2026-07-24 | Purpose and Foundation are permanent reference pages | Active |
| D-0083 | 2026-07-24 | Foundation layer field model adopted | Active |
| D-0084 | 2026-07-24 | HTML/CSS architecture diagrams only | Active |
| D-0085 | 2026-07-24 | Phase 1F.2 remains unauthorized | Active |
| D-0086 | 2026-07-24 | Phase 2.1 knowledge architecture authorized | Active |
| D-0087 | 2026-07-24 | Eight knowledge domains adopted | Active |
| D-0088 | 2026-07-24 | Knowledge content and visual blocks separated from page redesign | Active |
| D-0089 | 2026-07-24 | Phase 2.2 remains unauthorized | Superseded by D-0090 |
| D-0090 | 2026-07-24 | Phase 2.2 engineering design system authorized | Active |
| D-0091 | 2026-07-24 | Shared engineering documentation visual language adopted | Active |
| D-0092 | 2026-07-24 | Neutral callout types; single table and diagram language | Active |
| D-0093 | 2026-07-24 | Phase 2.3 remains unauthorized | Active |
| D-0094 | 2026-07-24 | One canonical knowledge entity registry | Active |
| D-0095 | 2026-07-24 | Static TypeScript knowledge model; no runtime database | Active |
| D-0096 | 2026-07-24 | Relationship IDs are the source of truth | Active |
| D-0097 | 2026-07-24 | Deterministic entity registry validation | Active |
| D-0098 | 2026-07-24 | Domain exports derive from the entity registry | Active |
| D-0099 | 2026-07-24 | No graph visualization in Phase 3.0 | Active |
| D-0100 | 2026-07-24 | Phase 3.0 authorized; Foundation and Research demo only | Active |
| D-0101 | 2026-07-24 | Phase 3.1 remains unauthorized | Superseded by D-0102 |
| D-0102 | 2026-07-24 | Phase 3.1 Technology domain authorized | Active |
| D-0103 | 2026-07-24 | Technology domain consumes canonical entity registry | Active |
| D-0104 | 2026-07-24 | Technology is the reference knowledge-domain implementation | Active |
| D-0105 | 2026-07-24 | Phase 3.2 remains unauthorized | Superseded by D-0106 |
| D-0106 | 2026-07-24 | Phase 3.2 Human Data Model page authorized | Active |
| D-0107 | 2026-07-24 | Human Data Model is the flagship engineering reference page | Active |
| D-0108 | 2026-07-24 | Phase 3.3 remains unauthorized | Active |
| D-0109 | 2026-07-24 | Content Wave 1.1 Human Data page authorized | Active |
| D-0110 | 2026-07-24 | Plain-language editorial standard for knowledge pages | Active |
| D-0111 | 2026-07-24 | Approved definitions: Human Data and Human Data Model | Active |
| D-0112 | 2026-07-24 | Content Wave 1.2 Data Infrastructure page authorized | Active |
| D-0113 | 2026-07-24 | Technology knowledge domain content sprint completed | Active |
| D-0114 | 2026-07-24 | Systems knowledge domain content sprint completed | Active |
| D-0115 | 2026-07-24 | Approved Systems page boundaries and definitions | Active |
| D-0116 | 2026-07-24 | Relation links use published routes only | Active |
| D-0117 | 2026-07-24 | Systems core architecture sprint completed | Active |
| D-0118 | 2026-07-24 | Systems core page template and domain chain | Active |
| D-0119 | 2026-07-24 | Design Sprint 1 SAVEN Core visual system authorized and completed | Active |
| D-0120 | 2026-07-24 | KnowledgeHero-first rhythm and page-specific signal diagrams | Active |
| D-0121 | 2026-07-24 | Content + Design Sprint 2 Applications and Trust authorized and completed | Active |
| D-0122 | 2026-07-24 | Trust published as primary knowledge domain distinct from /legal | Active |
| D-0123 | 2026-07-24 | Trust vs Technology Privacy/Security vs Systems Safety Layer boundaries | Active |
| D-0124 | 2026-07-24 | Home Knowledge Explorer entrance authorized and completed | Active |
| D-0125 | 2026-07-24 | Knowledge Object Architecture authorized and completed | Active |
| D-0126 | 2026-07-24 | Language, navigation and footer refinement authorized and completed | Active |
| D-0127 | 2026-07-25 | Human-first design philosophy correction (v1.1) | Active |
| D-0128 | 2026-07-25 | SAVEN Experience Redesign authorized | Active |
| D-0129 | 2026-07-25 | Homepage Direction B + Robotics Lab care purpose approved | Superseded for homepage primacy by D-0130 |
| D-0130 | 2026-07-25 | Official site assignment — engineering showcase; A+B home; Physical World hero | Active |
| D-0131 | 2026-07-25 | Owner canonical scopes for Robotics Lab / Interface / Future Lab | Active |
| D-0132 | 2026-07-25 | Two-layer UX — keep technical pages; footer is depth map; public surface stays simple | Active |
| D-0133 | 2026-07-25 | Phase 1 Layer-1 homepage — Intelligence for the Physical World | Active |
| D-0134 | 2026-07-25 | Header emptied; homepage clarity-only; site map in footer | Active |
| D-0135 | 2026-07-25 | Homepage hero imagery + living atmosphere + visual essence section | Active |
| D-0136 | 2026-07-25 | Photoreal home hero required; labeled wireframe diagrams rejected | Active |
| D-0137 | 2026-07-25 | Multi-robot assistive hero scene + highly visible living motion | Active |
| D-0138 | 2026-07-25 | Homepage hero uses living photoreal video of multi-robot assistance | Active |
| D-0139 | 2026-07-25 | Smooth living assistive multi-robot hero motion required | Active |
| D-0140 | 2026-07-25 | Hero loop must show smooth assistive robot action, not camera-only motion | Active |
| D-0141 | 2026-07-25 | Multi-domain living assistive scenes on home authorized from owner references | Active |
| D-0142 | 2026-07-25 | Expanded medical/care living scenes on home authorized from owner reference | Active |
| D-0143 | 2026-07-25 | Homepage closing SAVEN what-we-do graphic with owner acronym + tagline | Superseded by D-0144 |
| D-0144 | 2026-07-25 | Owner withdrew homepage closing what-we-do graphic | Superseded by D-0145 |
| D-0145 | 2026-07-25 | Closing SAVEN meaning graphic as blended homepage bottom background | Active |
| D-0146 | 2026-07-25 | Closing graphic must be full-bleed (no side bars); WebP optimized | Superseded by D-0147 |
| D-0147 | 2026-07-25 | Closing graphic: responsive natural-aspect banner on full-bleed dark band | Active |
| D-0148 | 2026-07-25 | Care→closing bridge full-bleed; no letterboxed light strip | Active |
| D-0149 | 2026-07-25 | Localize home Layer-1 content to body locales + living help collage hero | Active |
| D-0150 | 2026-07-25 | Single home living carousel; industrial/agriculture/teamwork removed | Active |
| D-0151 | 2026-07-25 | Living collage motion + hero copy clear of photos | Active |
| D-0152 | 2026-07-25 | Hero collage: tighter gap + unmistakable living motion | Active |
| D-0153 | 2026-07-25 | Header important-pages menu restored (short hubs) | Active |
| D-0154 | 2026-07-25 | Legal pages returned to footer + draft/approved content rules | Active |
| D-0155 | 2026-07-25 | Theme sun/moon + language flags + upward footer language | Active |
| D-0156 | 2026-07-25 | Sign In/Up + Google auth page | Active |
| D-0157 | 2026-07-25 | Unified readable Layer-1 hub visual system + image optimization | Active |
| D-0158 | 2026-07-25 | Auth card polish + visual Layer-1 hubs | Active |
| D-0159 | 2026-07-25 | Robotics Lab / Research hero / Investors brochure expansion | Active |
| D-0160 | 2026-07-25 | Unified visual domain-page system (hubs + leaves) | Active |
| D-0166 | 2026-07-26 | Labs visual pages + SAVEN data/action loop diagram | Active |
| D-0167 | 2026-07-26 | Labs data-loop diagram placement + visual enrichment | Active |
| D-0168 | 2026-07-26 | Typography system — Apple-like clarity sitewide | Active |
| D-0169 | 2026-07-26 | Visible Apple-clean Inter webfont + sans titles | Active |
| D-0170 | 2026-07-26 | Theme contrast fix — home hero/care + dark chrome | Superseded for chrome/care by D-0171 |
| D-0171 | 2026-07-26 | Full light/dark theme coverage — chrome + content planes | Partially superseded by D-0172 for home shell/closing |
| D-0172 | 2026-07-26 | Theme plane completion — unfreeze home/care/closing/labs surround | Active |
| D-0161 | 2026-07-26 | Full page-body localization (10 locales) + cleanup + Vercel prep | Active |
| D-0162 | 2026-07-26 | PWA + SEO / security headers / marketing surface prep | Active |
| D-0163 | 2026-07-26 | Credentials sign-in form + show password + Google | Active |
| D-0173 | 2026-07-26 | Investors visual + Contact page/form + About team narrative | Active |
| D-0174 | 2026-07-26 | Positioning: uses/advances AI; does not claim to create AI | Active |
| D-0175 | 2026-07-26 | Experience Redesign UI freeze — completed approved snapshot | Active |
| D-0176 | 2026-07-26 | Admin Platform / Social footer — first vertical slice | Active |
| D-0177 | 2026-07-26 | Owner always super_admin via demo operator / dev defaults | Active |
| D-0178 | 2026-07-26 | Admin Platform expansion + branded email templates | Active |
| D-0179 | 2026-07-26 | Falcon domain presence + OG share defaults | Active |
| D-0180 | 2026-07-26 | Email templates restyled to owner example | Active |
| D-0181 | 2026-07-26 | Footer Legal equal columns, More hub, socials bottom row | Active |
| D-0182 | 2026-07-26 | Rename Applications “Home” leaf to Home Application | Active |
| D-0183 | 2026-07-26 | Expanded email templates + public/admin Media library | Active |
| D-0184 | 2026-07-26 | Admin Media simplified Add content UX (File / Video / Link) | Active |
| D-0185 | 2026-07-26 | Admin Media traditional CMS UX + video/delete fixes | Active |
| D-0186 | 2026-07-26 | Admin Media delete-all + upload CTAs + public Media viewer | Active |
| D-0187 | 2026-07-26 | Admin Media library filter chip contrast (light/dark) | Active |

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
- **Status:** Superseded by D-0067
- **Decision:** Completing Phase 1D.4 does not authorize Phase 1E or any destination-page, localization, CMS, or product-surface work.
- **Implications:** Stop after Phase 1D.4 commit unless explicitly authorized.

### D-0067 — Phase 1E.1 corporate Home restructure authorized

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Authorize restructuring the completed Home page into a compact corporate gateway. See `docs/PHASE_1E_1_CORPORATE_HOME_RESTRUCTURE.md`.
- **Out of scope:** Destination pages, navigation redesign, taxonomy changes, Phase 1E.2.
- **Implications:** Home presentation becomes shorter and navigational; long-form content is preserved for later pages.

### D-0068 — Home is a corporate gateway, not a full presentation

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Home explains SAVEN Core quickly, presents principal organizational areas, and routes into deeper sections rather than telling the entire company story on one page.
- **Implications:** Header remains the primary site map; Home supplements navigation.

### D-0069 — Seven-region Home structure adopted

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Home comprises exactly seven regions: Hero; Purpose and Foundation; Applications; Technology and Systems; Research and Trust; Development Status; Company, Investors and Roadmap.
- **Implications:** The prior thirteen full-height standalone sections are retired from Home presentation.

### D-0070 — Long-form content belongs on destination pages

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Approved long-form Home copy is retained in `src/content/home/en.ts` for destination-page reuse and is not rendered in full on Home.
- **Implications:** Compact Home exports derive shared strings from preserved sources where practical.

### D-0071 — Technology and Systems combined on Home; taxonomies separate

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Technology and Systems appear together as a Home directory region but remain separate site taxonomies with separate destinations.
- **Implications:** Do not merge Technology and Systems in information architecture.

### D-0072 — Research, Labs and Trust combined visually; concepts separate

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Research, Labs, and Trust Architecture share one Home region as three columns while remaining separate concepts and destinations.
- **Implications:** Detailed Trust pillars remain for the Trust destination page.

### D-0073 — Closing Company, Investors and Roadmap region

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Company, Investors, and Roadmap form one institutional closing region with the approved closing statement retained below the columns.
- **Implications:** No giant CTA banner; links remain restrained.

### D-0074 — Phase 1E.2 destination pages remain unauthorized

- **Date:** 2026-07-24
- **Status:** Superseded by D-0075
- **Decision:** Completing Phase 1E.1 does not authorize Phase 1E.2 or any destination-page development.
- **Implications:** Stop after Phase 1E.1 commit unless explicitly authorized.

### D-0075 — Phase 1E.2 internal page architecture authorized

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Authorize reusable internal page architecture and four demonstration routes only. See `docs/PHASE_1E_2_INTERNAL_PAGE_ARCHITECTURE.md`.
- **Out of scope:** Full destination catalog, CMS, forms, search functionality, Phase 1E.3.
- **Implications:** Later pages must use the shared page types rather than inventing one-off layouts.

### D-0076 — Four internal page types adopted

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Adopt Editorial, Technical, Research, and Directory as the four internal page types for the corporate site.
- **Implications:** Destination pages map to these types; Home remains a separate gateway composition.

### D-0077 — Compact internal masthead; shared page architecture

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Internal pages use a compact masthead and shared page-level components (`PageMasthead`, section nav, related links) rather than Home Hero patterns.
- **Implications:** No landing-page Hero reuse on internal routes.

### D-0078 — Internal page content outside JSX; four demo routes only

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Store demonstration page content in `src/content/pages/en/` and implement only `/purpose/`, `/foundation/`, `/research/`, and `/applications/` in this phase.
- **Implications:** English fallback remains active; no additional locale content files yet.

### D-0079 — Full destination-page development deferred

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Full long-form destination pages beyond the four demonstration routes remain deferred.
- **Implications:** Remaining IA routes may continue to 404 until explicitly authorized.

### D-0080 — Phase 1E.3 remains unauthorized

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Completing Phase 1E.2 does not authorize Phase 1E.3 or broader destination-page build-out.
- **Implications:** Stop after Phase 1E.2 commit unless explicitly authorized.

### D-0081 — Phase 1F.1 Purpose and Foundation authorized

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Authorize permanent Purpose and Foundation content architecture on the existing Editorial and Technical page types. See `docs/PHASE_1F_1_PURPOSE_FOUNDATION.md`.
- **Out of scope:** Marketing/investor copy, product documentation, additional page types, Phase 1F.2.
- **Implications:** These pages become reference content for later site sections.

### D-0082 — Purpose and Foundation are permanent reference pages

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Purpose answers why SAVEN Core exists; Foundation answers what SAVEN Core is built upon, using the fixed BioMath Life → BioMath Core → SAVEN → SAVEN Core sequence.
- **Implications:** Later pages should align to this architecture rather than inventing alternate foundation stories.

### D-0083 — Foundation layer field model adopted

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Each foundation layer documents Purpose, Role, Relationship, Scope, Outputs, and Dependencies, followed by Human Data Model, System Relationships, Technology Relationships, and Development Philosophy.
- **Implications:** TechnicalPage supports structured layer fields for Foundation without a new page type.

### D-0084 — HTML/CSS architecture diagrams only

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Architecture diagrams on Purpose and Foundation use HTML/CSS figures (hierarchy, layers, flow, relationship). No image assets.
- **Implications:** Diagrams remain responsive, semantic, and RTL-safe.

### D-0085 — Phase 1F.2 remains unauthorized

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Completing Phase 1F.1 does not authorize Phase 1F.2 or further destination-page content phases.
- **Implications:** Stop after Phase 1F.1 commit unless explicitly authorized.

### D-0086 — Phase 2.1 knowledge architecture authorized

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Authorize the permanent knowledge architecture for SAVEN Core as an engineering knowledge center. See `docs/PHASE_2_1_KNOWLEDGE_ARCHITECTURE.md`.
- **Out of scope:** Home redesign, navigation changes, backend, long-form destination content, Phase 2.2.
- **Implications:** Later knowledge pages consume this registry rather than inventing alternate taxonomies.

### D-0087 — Eight knowledge domains adopted

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Adopt Purpose, Foundation, Technology, Systems, Research, Applications, Trust, and Company as the top-level knowledge domains with explicit related-domain links and future-expansion placeholders.
- **Implications:** Technology, Systems, Research, and Applications include architecture-only subsection/category models in `src/content/knowledge/`.

### D-0088 — Knowledge content and visual blocks separated from page redesign

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Knowledge models and reusable visual blocks (Knowledge Index, Section Navigator, Related Topics, Engineering Note, Future Expansion, Architecture Diagram) are introduced without redesigning Home, Purpose, Foundation, or site navigation.
- **Implications:** Blocks may be composed into destination pages in later authorized phases.

### D-0089 — Phase 2.2 remains unauthorized

- **Date:** 2026-07-24
- **Status:** Superseded by D-0090
- **Decision:** Completing Phase 2.1 does not authorize Phase 2.2 or knowledge destination-page build-out.
- **Implications:** Stop after Phase 2.1 commit unless explicitly authorized.

### D-0090 — Phase 2.2 engineering design system authorized

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Authorize the permanent engineering documentation design system. See `docs/ENGINEERING_DESIGN_SYSTEM.md`.
- **Out of scope:** Home redesign, navigation changes, new routes/content pages, Phase 2.3.
- **Implications:** Future knowledge pages use shared engineering blocks and styles.

### D-0091 — Shared engineering documentation visual language adopted

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Consolidate documentation presentation in `src/components/engineering/` with standard content blocks, metadata header, typography roles, and page rhythm.
- **Implications:** `pages.css` and `knowledge.css` import the shared system and retain only composition-specific rules.

### D-0092 — Neutral callout types; single table and diagram language

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Adopt four neutral callout types (Information, Engineering Note, Important, Future Work), one table system with architecture/taxonomy/relationships/status variants, and one HTML/CSS(/SVG) diagram language shared with existing page and knowledge diagram class names.
- **Implications:** No warning colors, gradients, shadows, or image-based diagrams.

### D-0093 — Phase 2.3 remains unauthorized

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Completing Phase 2.2 does not authorize Phase 2.3 or destination-page build-out.
- **Implications:** Stop after Phase 2.2 commit unless explicitly authorized.

### D-0094 — One canonical knowledge entity registry

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Adopt a single canonical `KnowledgeEntity` registry in `src/content/knowledge/entities.ts` as the shared source of truth for approved knowledge entities.
- **Implications:** Future knowledge pages must not maintain competing entity lists.

### D-0095 — Static TypeScript knowledge model; no runtime database

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** The knowledge entity model is a static TypeScript content model. No runtime database, CMS, API, or search engine is introduced in Phase 3.0.
- **Implications:** Content remains compile-time typed data until a later authorized persistence phase.

### D-0096 — Relationship IDs are the source of truth

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Cross-entity relationships are encoded as typed ID arrays on each entity (`parentId`, `childIds`, `dependencyIds`, `usedByIds`, related-* fields).
- **Implications:** Presentation layers adapt from IDs; they do not invent parallel relationship graphs.

### D-0097 — Deterministic entity registry validation

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Registry validation runs on module import via `assertEntityRegistryValid()` (unique IDs/slugs, referential integrity, parent-child consistency, Foundation hierarchy, locale-neutral page links).
- **Implications:** Invalid registries fail development/build without adding a new test framework.

### D-0098 — Domain exports derive from the entity registry

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Phase 2.1 domain presentation exports (`technology`, `systems`, `research`, `applications`) derive item lists and relation IDs from the canonical registry. Display-only purpose copy may remain as temporary compatibility maps.
- **Implications:** Avoids two competing sources of truth while preserving existing component APIs.

### D-0099 — No graph visualization in Phase 3.0

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Phase 3.0 does not add graph visualization, network layout libraries, or graph traversal algorithms.
- **Implications:** Relationship presentation is limited to typed grouped lists via `EntityRelationshipIndex` / `getEntityRelationsSummary`.

### D-0100 — Phase 3.0 authorized; Foundation and Research demo only

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Authorize Phase 3.0 unified knowledge entity model. Demonstrate registry consumption only on existing Foundation and Research pages. Do not redesign Home, change navigation, or add routes.
- **Implications:** See `docs/PHASE_3_0_UNIFIED_KNOWLEDGE_ENTITY_MODEL.md`.

### D-0101 — Phase 3.1 remains unauthorized

- **Date:** 2026-07-24
- **Status:** Superseded by D-0102
- **Decision:** Completing Phase 3.0 does not authorize Phase 3.1, destination-page build-out, CMS/database work, or graph visualization.
- **Implications:** Stop after Phase 3.0 commit unless explicitly authorized.

### D-0102 — Phase 3.1 Technology domain authorized

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Authorize Phase 3.1 to build the Technology knowledge domain index at `/[locale]/technology/`. See `docs/PHASE_3_1_TECHNOLOGY_DOMAIN.md`.
- **Out of scope:** Home redesign, global navigation changes, backend/CMS/database/search/auth/APIs, graph libraries.
- **Implications:** Technology becomes the first complete knowledge domain page.

### D-0103 — Technology domain consumes canonical entity registry

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Technology categories, statuses, relations and futureTopics are read from `getEntitiesByDomain("technology")` and related registry helpers. Entity definitions are not duplicated in page content.
- **Implications:** `src/content/pages/en/technology.ts` holds long-form page copy only.

### D-0104 — Technology is the reference knowledge-domain implementation

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** The Technology page structure (metadata → introduction → overview → categories → relationships → principles → scope → future → related domains → references) is the reference pattern for later knowledge domains.
- **Implications:** Future domain pages should reuse Engineering Design System blocks and registry-driven category patterns unless a later decision supersedes this.

### D-0105 — Phase 3.2 remains unauthorized

- **Date:** 2026-07-24
- **Status:** Superseded by D-0106
- **Decision:** Completing Phase 3.1 does not authorize Phase 3.2 or additional domain build-out.
- **Implications:** Stop after Phase 3.1 commit unless explicitly authorized.

### D-0106 — Phase 3.2 Human Data Model page authorized

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Authorize the Human Data Model flagship knowledge page at `/[locale]/technology/human-data-model/`. See `docs/PHASE_3_2_HUMAN_DATA_MODEL.md`.
- **Out of scope:** Home redesign, navigation changes, backend/CMS/database, invented capability claims.
- **Implications:** Relationships and futureTopics render from the canonical `human-data-model` entity.

### D-0107 — Human Data Model is the flagship engineering reference page

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** The Human Data Model page is the engineering reference pattern for deep knowledge documentation: metadata, summary, principles, architecture, categories, registry-driven relations, privacy/trust, scope and future topics.
- **Implications:** Later flagship entity pages should follow this structure unless superseded.

### D-0108 — Phase 3.3 remains unauthorized

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Completing Phase 3.2 does not authorize Phase 3.3 or further domain/entity page build-out.
- **Implications:** Stop after Phase 3.2 commit unless explicitly authorized.

### D-0109 — Content Wave 1.1 Human Data page authorized

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Authorize Content Wave 1.1 to create the Human Data knowledge page at `/[locale]/technology/human-data/` for readability-focused documentation. See `docs/CONTENT_WAVE_1_1_HUMAN_DATA.md`.
- **Out of scope:** Site redesign, navigation changes, Entity Registry edits, changes to existing page templates.
- **Implications:** New page content and a dedicated page composition may be added; architecture systems remain unchanged.

### D-0110 — Plain-language editorial standard for knowledge pages

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Knowledge documentation uses plain, direct English: one main idea per short paragraph; important terms introduced at first use; no marketing claims; no unexplained jargon; current scope separated from future topics. See `docs/CONTENT_REVIEW_1_TECHNOLOGY_FOUNDATION.md`.
- **Implications:** Later knowledge pages should meet this editorial standard unless a superseding decision is logged.

### D-0111 — Approved definitions: Human Data and Human Data Model

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Adopt permanent definitions — **Human Data:** information about a person from different sources. **Human Data Model:** the structured representation that organizes Human Data and preserves context and relationships. Related approved terms: Technology (technical capabilities and engineering foundations used to build SAVEN Core systems); Knowledge Engine (organizes knowledge and provides consistent context; does not make independent decisions); AI Decision Support (supports human review and decision-making; does not replace human judgment).
- **Implications:** These three Technology foundation pages, and future pages that reuse the terms, must not redefine them differently.

### D-0112 — Content Wave 1.2 Data Infrastructure page authorized

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Authorize Content Wave 1.2 to create the Data Infrastructure knowledge page at `/[locale]/technology/data-infrastructure/`. See `docs/CONTENT_WAVE_1_2_DATA_INFRASTRUCTURE.md`.
- **Out of scope:** Site redesign, navigation changes, vendor/database/cloud implementation detail, Entity Registry edits unless a missing relationship is required.
- **Implications:** Page remains architecture-level; Future Topics and related lists come from the existing `data-infrastructure` entity.

### D-0113 — Technology knowledge domain content sprint completed

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Authorize and record completion of the Technology content sprint: Interoperability, Privacy, Security, Artificial Intelligence, Automation and Robotics leaf pages under `/[locale]/technology/`. See `docs/CONTENT_SPRINT_TECHNOLOGY_COMPLETE.md`.
- **Out of scope:** Home redesign, navigation changes, Entity Registry redesign, Systems/Trust domain build-out.
- **Implications:** Every Technology registry entity now has a published knowledge page. Shared template is `TechnologyDisciplinePage`.

### D-0114 — Systems knowledge domain content sprint completed

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Authorize and record completion of the Systems content sprint: Systems Overview plus Knowledge Engine, AI Decision Support, Safety Layer, Communication Layer, Clinical Interfaces, Robotics Layer and Drone Systems under `/[locale]/systems/`. See `docs/CONTENT_SPRINT_SYSTEMS_COMPLETE.md`.
- **Out of scope:** Applications leaf pages, Trust page, Labs, Company, Home redesign, Entity Registry entity invention.
- **Implications:** Systems appears in primary, mobile and footer navigation from the shared published-route source. Shared template is `SystemDisciplinePage`.

### D-0115 — Approved Systems page boundaries and definitions

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Adopt the Systems boundaries recorded in `docs/CONTENT_SPRINT_SYSTEMS_COMPLETE.md`: Knowledge Engine does not make independent decisions; AI Decision Support does not replace human judgment; Clinical Interfaces claim no diagnosis, treatment or autonomous medical action; Robotics Layer implies no autonomous deployment without oversight; Drone Systems avoid military, surveillance or unsupported operational claims.
- **Implications:** Later Systems pages must not redefine these boundaries differently.

### D-0116 — Relation links use published routes only

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Entity relation and related-page links resolve through published leaf paths when available (`ENTITY_PAGE_HREFS`) and omit destinations that are not in `PUBLISHED_ROUTES`. Unpublished Applications and Research leaves link to their domain overviews only.
- **Implications:** Navigation and knowledge relation indexes must not expose unpublished leaf URLs.

### D-0117 — Systems core architecture sprint completed

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Authorize and record completion of the Systems core architecture sprint: Systems Overview plus seven system pages under `/[locale]/systems/`, focused on explaining how SAVEN Core works. See `docs/CONTENT_SPRINT_SYSTEMS_CORE.md`.
- **Out of scope:** Applications leaf pages, Trust page, Labs, Company, Home redesign, Entity Registry entity invention.
- **Implications:** Systems remains published in primary, mobile and footer navigation. Content prioritizes architecture chain clarity over page inventory alone.

### D-0118 — Systems core page template and domain chain

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Systems leaf pages use the core section set (metadata, summary, why it matters, purpose, architecture role, inputs, outputs, relationships, principles, human oversight, scope, future topics, related technology/systems/applications, references). Empty sections are hidden. Domain reading order is Technology → Systems → Applications.
- **Implications:** Later Systems edits must preserve this chain and must not restore Systems or Labs inside the Technology dropdown.

### D-0119 — Design Sprint 1 SAVEN Core visual system authorized and completed

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Establish a distinctive SAVEN Core visual system for the knowledge experience under the concept HUMAN SIGNALS → STRUCTURED KNOWLEDGE → CONTROLLED ACTION. Reusable components include KnowledgeHero, DomainPositionMap, ArchitectureMap, SignalDiagram, ScopePanel, ConceptGrid, RelationshipFlow, KnowledgePageNavigation, and EngineeringAnnotation. Geometry remains straight-corner; functional signal accents may mark meaning on borders and nodes only. See `docs/DESIGN_SPRINT_1_SAVEN_VISUAL_SYSTEM.md`.
- **In scope:** Systems Overview, Technology Overview, Human Data, Human Data Model, Data Infrastructure, Knowledge Engine, AI Decision Support, Safety Layer; shared engineering CSS/tokens; documentation.
- **Out of scope:** New routes, long-form content invention, IA changes, brand/logo changes, Applications/Research full redesign, animation.
- **Implications:** Later knowledge pages should extend these components rather than invent parallel visual languages.

### D-0120 — KnowledgeHero-first rhythm and page-specific signal diagrams

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Target knowledge pages open with KnowledgeHero (one H1 + page-specific SignalDiagram). Metadata, section navigation, and previous/next move to supporting positions after primary content. Systems Overview uses ArchitectureMap for multi-role relationships rather than a single vertical list.
- **Implications:** Do not restore metadata / location / TOC bands as consecutive full-width blocks before the first subject visualization.

### D-0121 — Content + Design Sprint 2 Applications and Trust authorized and completed

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Complete Applications Overview plus eight application contexts and Trust Overview plus seven Trust topics using Visual System v1. See `docs/CONTENT_DESIGN_SPRINT_2_APPLICATIONS_TRUST.md`.
- **In scope:** Application and Trust routes, registry entities, navigation/footer publication, visual completion of remaining Technology/Systems leaves, documentation.
- **Out of scope:** Legal policy pages, brand redesign, unsupported product/regulatory claims, animation.
- **Implications:** Later Applications/Trust edits must preserve development-safe language and page-boundary separations.

### D-0122 — Trust published as primary knowledge domain distinct from /legal

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Publish the knowledge Trust domain at `/trust/` in primary and footer navigation because Trust is a top-level knowledge domain in the architecture model. This does not publish `/legal/*` policy documents.
- **Implications:** Trust pages are governance/architecture pages, not privacy policies, terms, or certifications.

### D-0123 — Trust vs Technology Privacy/Security vs Systems Safety Layer boundaries

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Technology Privacy/Security remain engineering foundations. Systems Safety Layer remains system-wide safeguards. Trust Privacy/Security/Safety document organizational commitments, governance and reader-facing limits.
- **Implications:** Do not merge these page types or duplicate their roles.

### D-0124 — Home Knowledge Explorer entrance authorized and completed

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Replace the corporate gateway Home with a Knowledge Explorer entrance: engineering hero with architecture chain, domain explorer cards, dependency map, honest platform status, featured concepts, and structured domain entrances. No new domains or long-form Home prose.
- **Implications:** Home explains what SAVEN Core is, how domains connect, and where to begin. Research remains In Progress; Company remains Planned. Do not link unpublished Company/Investors/Roadmap destinations from Home.

### D-0125 — Knowledge Object Architecture authorized and completed

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Introduce a reusable Knowledge Object layer over the Phase 3.0 entity registry and published page metadata. Every published page exposes passport, maturity, evidence, directional relationships, dependency/graph views, lifecycle, version placeholders, and reading paths. Unknown fields display “Not yet assigned.” Validated maturity is never inferred.
- **Implications:** No new public domains, navigation redesign, visual-language redesign, or URL changes. See `docs/KNOWLEDGE_OBJECT_ARCHITECTURE.md`.

### D-0126 — Language, navigation and footer refinement authorized and completed

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Simplify public language and UI labels; reduce primary navigation to Home + Technology/Systems/Applications/Trust/Research with short dropdowns; make the footer the complete published sitemap (mobile accordion); localize full site content for en/ar/he/ru/uk. Other locales keep English fallback. Legal destinations remain unpublished.
- **Implications:** See `docs/LANGUAGE_AND_LOCALIZATION.md` and `docs/TERMINOLOGY_GUIDE.md`.

### D-0127 — Human-first design philosophy correction (v1.1)

- **Date:** 2026-07-25
- **Status:** Active
- **Decision:** Keep Knowledge Objects and Visual System, but restore progressive disclosure: human understanding first, professional context second, engineering document details third (collapsed). Remove technical chrome from the first viewport. Soften Home to Understand → Explore → Discover → Continue. Footer remains the complete map; Company/Legal/Contact appear as planned groups without unpublished links. UI chrome is localized for all ten system locales; page bodies remain fully localized for en/ar/he/ru/uk.
- **Implications:** Do not return Knowledge Passport or metadata to the hero/first screen. Translate every UI update across all UI locale catalogs.

### D-0128 — SAVEN Experience Redesign authorized

- **Date:** 2026-07-25
- **Status:** Active
- **Decision:** Owner-authorized experience redesign. Priority is memorable, domain-distinct visual composition — not documentation aesthetics. Distinctive display/sans typography (Newsreader + IBM Plex family, Arabic/Hebrew faces), cool-paper atmosphere, full-bleed home monument, domain-specific hero languages (Technology strata, Systems constellation, Applications places, Trust rings, Research open field), and a permanent visual footer map are approved. Straight corners remain. No neon/glow marketing effects. Labels and Knowledge Object placement rules from D-0127 remain.
- **Implications:** Pages must remain visually non-interchangeable across domains. Future UI work should preserve domain composition languages.

### D-0129 — Homepage Direction B + Robotics Lab care purpose approved

- **Date:** 2026-07-25
- **Status:** Active
- **Decision:** Owner approved («ок на homepage») promoting Direction B (One Human Hour) and the SAVEN Robotics Lab human-care purpose from the creative preview onto the public homepage. First viewport states what SAVEN is, who it is for, why care, and what becomes easier; the scroll hour is visual proof. Closing energy: Turning Intelligence Into Human Care. Creating / designed to / helping language only — no invented customers, metrics, approvals, or deployment claims.
- **Implications:** Locale home routes (`/[locale]/`) render the Human Hour experience inside the existing site shell. Preview route `/[locale]/preview/human-hour/` permanently redirects to the locale home. Page bodies localized for en/ar/he/ru/uk; UI chrome for beat labels across all ten locales. Technology / Systems / Trust / Applications interior redesigns are out of scope for this decision.

### D-0130 — Official site assignment: engineering/technology showcase (public + investors)

- **Date:** 2026-07-25
- **Status:** Active
- **Decision:** Owner course-correction for `www.savencore.com`. The site is an **engineering and technology showcase** for public visitors and investors — not a documentary care-film as the whole brand, and not Human Hour as the entire homepage identity. Canonical first-screen hero: **Intelligence for the Physical World.** Supporting and explanation copy as recorded in `docs/SITE_ASSIGNMENT.md` §3. Homepage model is **A + B** (directions showcase + flagship paths into Labs / Interface / Future Lab and related approved workstreams). Tagline retained: **Turning Intelligence Into Human Care.** Official naming: SAVEN Core / SAVEN Robotics Lab / logo lockup. Everything remains in development; public status language stays Research / Architecture / In Development (honest; never commercially deployed or approved unless later true). Investors require a separate structural section/path without invented metrics (D-0062 still applies). Visuals: use repo/public assets; otherwise diagrammatic/engineering visuals — no fake photography claims. Human Hour preview/home pivot (D-0129) is **superseded as primary homepage direction**; Human Hour may be demoted to optional later proof or removed from home primacy. Full site redesign is **not** authorized by this entry alone — `docs/SITE_ASSIGNMENT.md` is the executive assignment; implementation proceeds in small phases with separate authorization.
- **In scope:** `docs/SITE_ASSIGNMENT.md`; this decision; agent brief for later phased execution.
- **Out of scope:** Immediate full homepage rewrite; inventing partners/customers/metrics/patents/approvals; auth investor portal; CMS; legal final text; new product lines beyond approved taxonomy.
- **Implications:** Agents must read `docs/SITE_ASSIGNMENT.md` before homepage or IA presentation work. On homepage identity and first-screen copy, D-0130 + SITE_ASSIGNMENT win over D-0129 and `CREATIVE_DIRECTION.md` until revised. Conflicts with Master Spec primary statement, Phase 0 IA primary nav, and as-built `site-navigation.ts` are flagged in SITE_ASSIGNMENT §5.3 — do not silently change navigation or Master Spec without further owner approval.

### D-0131 — Owner canonical scopes: Robotics Lab / Interface / Future Lab

- **Date:** 2026-07-25
- **Status:** Active
- **Decision:** Owner supplied canonical definitions for the three primary flagship workstreams. (1) **SAVEN Robotics Lab** — primary engineering direction (**In Development**): robotic systems; autonomous mobility; robot control; sensors and machine perception; human–machine interaction. (2) **SAVEN Robotics Interface** — system for interacting with robots and autonomous machines (**In Development**); capability list is **possible components** only (command and control, visual interface, mission planning, real-time telemetry, fleet management, human–robot interaction, remote operations, AI-assisted decision support, system diagnostics, role-based access, digital mission environment) — not shipped products. (3) **Internal Future Lab** — research environment of SAVEN Core (**Research**): advanced robotics forms; embodied AI; autonomous decision-making; human–machine interaction; new sensor systems; physical-environment modeling; robotics for medicine; future infrastructure technologies; non-standard engineering concepts. English is the canonical public brief; recorded in `docs/SITE_ASSIGNMENT.md` §5.0 and noted in `docs/INFORMATION_ARCHITECTURE.md` §§5.4–5.5.
- **In scope:** Documentation updates to SITE_ASSIGNMENT and IA notes; this decision entry.
- **Out of scope:** Building flagship pages; changing live routes/nav; homepage rewrite; inventing shipped Interface modules or Operational status.
- **Implications:** Home A+B and future Lab/Interface pages must use these scopes and statuses. Route choice among IA slugs vs shorter `/robotics-lab/` / `/robotics-interface/` / `/future-lab/` remains open (SITE_ASSIGNMENT §5.0.4 / §11). As-built `/systems/robotics-layer/` is not automatically the Robotics Interface page.

### D-0132 — Two-layer UX: simple public surface + footer depth map

- **Date:** 2026-07-25
- **Status:** Active
- **Decision:** Owner critical UX/IA direction for `www.savencore.com`. (1) **Keep all existing technical pages** already built — do not delete routes or page components to simplify. (2) Place them in **proper footer sections by domain** so depth is available. (3) **Do not load ordinary visitors with technical information** — primary experience stays simple, clear, visual, big-company spirit. (4) Technical/engineering content is **for those who want it** (engineers, digging investors, specialists) — never scare people; never make the site feel like a documentation manual / instruction wiki. (5) Priorities: simplicity, convenience, understanding, simple navigation, strong UX/UI. (6) **Two-layer model:** Layer 1 = Home A+B, flagship workstreams, Investors path, short human header, hero *Intelligence for the Physical World.*; Layer 2 = existing Technology / Systems / Applications / Trust / Research technical pages, reachable mainly via **footer** (and contextual Learn more), not as the default mental model. (7) Primary header stays short — not a documentation index. (8) Visitor footer links are **published only** — no Coming Soon badges. (9) Phase 1 homepage (when authorized) follows SITE_ASSIGNMENT A+B; Human Hour is not the public default identity.
- **In scope:** `docs/SITE_ASSIGNMENT.md` §2.1; `src/navigation/site-navigation.ts` footer reorganization to published domain groups; UI chrome label sync in `src/i18n/ui/`; this decision; AGENTS.md Current Phase note.
- **Out of scope:** Homepage redesign; deleting technical pages; expanding primary header into a full docs index; publishing unpublished Labs / Investors / Legal / Resources leaves; inventing new product lines.
- **Implications:** Agents treat the footer as the complete published depth map. Do not dump full technical leaf lists into the primary header for casual users. Do not remove published technical destinations. Further primary-nav alignment to SITE_ASSIGNMENT §5.2 still requires a separate authorizing phase.

---



### D-0133 — Phase 1 Layer-1 homepage: Intelligence for the Physical World

- **Date:** 2026-07-25
- **Status:** Active
- **Decision:** Owner authorized Phase 1 homepage rebuild per `docs/SITE_ASSIGNMENT.md`. Replace Human Hour as the public home identity with Layer 1: hero **Intelligence for the Physical World.**; directions showcase (A); flagship paths (B) for SAVEN Robotics Lab, SAVEN Robotics Interface, and Internal Future Lab; Investors structural page; closing tagline **Turning Intelligence Into Human Care**. Publish Scheme A flagship routes (`/labs/`, `/labs/saven-robotics-lab/`, `/labs/internal-future-lab/`, `/systems/saven-robotics-interface/`) and `/investors/` as simple Layer-1 pages. Keep all existing technical pages; footer remains the depth map (Labs + Interface + Investors added). Status language: In Development / Research — no deployment claims.
- **In scope:** Homepage component; flagship + investors pages; published-routes; footer groups; this decision.
- **Out of scope:** Full redesign of Technology/Systems interiors; inventing metrics/partners; primary-nav mega expansion into a docs index.
- **Implications:** D-0129 Human Hour homepage primacy is superseded for the public home. Human Hour assets may remain in repo as optional later proof, not the default home.



### D-0134 — Header emptied; homepage clarity-only; site map in footer

- **Date:** 2026-07-25
- **Status:** Active
- **Decision:** Owner feedback: primary menu content moves entirely to the footer; homepage must communicate what SAVEN is in a few seconds without inventory dumps or template diagrams. (1) Primary header navigation is empty — logo + language only. (2) Homepage is a single clarity composition: brand, *Intelligence for the Physical World.*, one breath sentence, three build pillars, tagline, footer cue — no SVG node diagram, no directions list, no flagship grid on home. (3) Flagship and technical pages remain published; discovery is via footer.
- **In scope:** SiteHeader; primaryNavigation; PhysicalWorldHome; this decision.
- **Out of scope:** Deleting technical/flagship pages; inventing photography.
- **Implications:** Agents must not restore a documentation-style header mega-menu without a new decision. Home must not become a sitemap.

### D-0135 — Homepage hero imagery + living atmosphere + visual essence section

- **Date:** 2026-07-25
- **Status:** Active
- **Decision:** Owner authorized homepage visual enrichment beyond the D-0134 diagram-freeze for the first screen. (1) Hero gains edge-to-edge thematic imagery and a living/animated atmosphere (CSS motion + original diagrammatic illustration language) themed around AI/robotics/physical world/human care — cool-paper engineering grammar (D-0128), straight corners, no neon/glow/purple-AI aesthetics. (2) Immediately after the hero, add one simple visual essence section explaining that SAVEN builds systems so robots, manipulators, and devices can help people — tangible in seconds, not a technical inventory. (3) Header remains logo + language only; full map stays in the footer (D-0134). (4) No fake stock “hospital robot” deployment photography; no invented customers, metrics, partners, or operational claims. Status language remains in development / research — confident, not WIP-apology. (5) English remains canonical for this home content module.
- **In scope:** `PhysicalWorldHome` + CSS; `src/content/home/physical-world/`; optional original assets under `public/home/`; AGENTS current-phase pointer; this decision.
- **Out of scope:** Restoring header mega-menu; putting A+B inventory back on home; deleting flagship/technical pages; CMS; photography claiming real deployments; full page-body localization beyond existing en-first home pattern.
- **Implications:** Homepage region order is now Hero (clarity + living visual) → Essence (simple visual explanation) → Footer map. Prior “no imagery on home” freeze from D-0134 is superseded for this authorized hero/essence work only.

### D-0136 — Photoreal home hero required; labeled wireframe diagrams rejected

- **Date:** 2026-07-25
- **Status:** Active
- **Decision:** Owner rejected the labeled Human→Systems→Physical stick-figure / wireframe hero as primitive. Home hero must use **photoreal / real-world** imagery (cinematic, grounded robotics assisting humans) with a living CSS atmosphere (ken-burns / slow drift). Essence Assist / Move / Sense / Support must use tangible scene imagery, not clip-art icons. No deployment claims, partner logos, or “already in hospitals” captions. Atmospheric product-direction photography is authorized for the homepage; labeled flowchart hero language is forbidden.
- **In scope:** `public/home/` photoreal assets; `PhysicalWorldHome` hero/essence markup + CSS; this decision.
- **Out of scope:** Restoring header mega-menu; inventory dump on home; inventing customers/metrics/deployments.
- **Implications:** D-0135’s “diagrammatic illustration language” for the hero is superseded by photoreal visual language. Agents must not return labeled stick-figure hero compositions.

### D-0137 — Multi-robot assistive hero scene + highly visible living motion

- **Date:** 2026-07-25
- **Status:** Active
- **Decision:** Owner required the homepage hero main image to make the SAVEN idea unmistakable at a glance: (1) one photoreal frame showing a human helped/supervised in a real physical space with **at least two robots/devices** (e.g. manipulator + mobile assistive platform); (2) readable real-world lighting preferred over pure silhouette mystery; (3) living motion on that one picture must be **highly visible** (stronger ken-burns / layered parallax / soft light + gentle arm-path cues) without neon, glow, HUD, or labeled flowchart overlays; (4) brand + *Intelligence for the Physical World.* remain readable via scrim; (5) no deployment claims; stick-figure diagrams stay forbidden (D-0136).
- **In scope:** `public/home/hero-multi-robot-assist-v2.png` (and related hero assets); `PhysicalWorldHome` layered media + CSS motion; this decision.
- **Out of scope:** Restoring header mega-menu; inventory dump on home; inventing customers/metrics/deployments; neon/sci-fi decoration.
- **Implications:** Hero success test = ~2 seconds: people + multiple robots/devices + movement → physical-world assistance systems. Prefer multi-device assistive composition over single-arm silhouette.

### D-0138 — Homepage hero uses living photoreal video of multi-robot assistance

- **Date:** 2026-07-25
- **Status:** Active
- **Decision:** Owner required the homepage hero to feel truly live — real photoreal photo/video of help to people with robots, devices, and systems — not a static concept mockup animated only by CSS ken-burns/ghosting. (1) Hero uses a short looping muted autoplay video (`hero-assist-loop`) showing clear assistive action: human present, robotic manipulator, and at least one other device/mobile system, real-world interior lighting. (2) Static labeled wireframe / stick-figure diagrams remain forbidden (D-0136). (3) `prefers-reduced-motion: reduce` shows a strong still poster only — no video autoplay / no decorative motion. (4) Brand + *Intelligence for the Physical World.* stay hero-level and readable via gradient scrim. (5) Essence Assist / Move / Sense / Support stay in the same living photoreal language. (6) No deployment claims, partners, or metrics.
- **In scope:** `public/home/hero-assist-loop.mp4` (+ `.webm`), `hero-assist-poster.png`, essence stills from the sequence; `HeroLivingMedia` + `PhysicalWorldHome` + CSS; AGENTS current-phase pointer; this decision.
- **Out of scope:** Restoring header mega-menu; inventing customers/metrics/deployments; neon/HUD/sci-fi decoration; CMS.
- **Implications:** D-0137’s CSS ken-burns-as-primary-motion approach is superseded for the hero: **video carries the motion**. Success test without reading copy: visitor instantly sees living real-world assistance via actual video (or undeniable multi-frame living photo sequence).

### D-0139 — Smooth living assistive multi-robot hero motion required

- **Date:** 2026-07-25
- **Status:** Active
- **Decision:** Owner rejected jerky / stuttering hero motion and asked for clearer automation, robots, and help. (1) Hero loop must feel **smooth**: dense near-pose keyframes with crossfade/morph blending (not hard slideshow cuts), ~24–30 fps, ~8–12s ease cycle; no competing CSS ken-burns on the video layer. (2) Scene must show **richer assistive automation** in one living picture: human clearly helped, multiple robots/devices (manipulator + mobile service robot + optional third sensor/device cue), visible helpful actions. (3) `prefers-reduced-motion: reduce` remains static poster only (D-0138). (4) Essence stills stay aligned to the same assistive photoreal language. (5) No neon/HUD; no deployment claims.
- **In scope:** Regenerated `public/home/hero-assist-loop.mp4` (+ `.webm`), poster, essence stills; `HeroLivingMedia` playback attributes; CSS (no layout thrash / no transform fight); AGENTS phase pointer; this decision.
- **Out of scope:** Fake deployment photography; inventing customers/metrics; header mega-menu restore; CMS.
- **Implications:** Supersedes acceptance of jump-cut slideshow-as-video for the homepage hero. Smooth morph/crossfade (or equivalent) is required; richer multi-device assist story is required at a glance.

### D-0140 — Hero loop must show smooth assistive robot action, not camera-only motion

- **Date:** 2026-07-25
- **Status:** Active
- **Decision:** Hero living media must show **pose change** (manipulator / mobile robot assisting) via smooth crossfade of near-pose keyframes — not camera zoom/pan on a single still. CSS opacity crossfade of `public/home/hero-frames/01–06.png` is an accepted delivery; reduced-motion stays poster-only.
- **Implications:** Supersedes ken-burns-only / single-still “video” as the homepage living signal.

### D-0141 — Multi-domain living assistive scenes on home

- **Date:** 2026-07-25
- **Status:** Active
- **Decision:** Homepage may present a **multi-domain living gallery** of assistive robot–human scenes (healthcare, home, industrial, research, education vision, agriculture, communities, teamwork), inspired by owner-supplied reference collages. Auto-advancing crossfade theater with domain rail is authorized. Scene art must not present invented KPI dashboards or fake deployment metrics as company data.
- **Implications:** Replaces the prior four-up essence strip as the primary post-hero visual story. Light photoreal assist hero (D-0140) may remain above. Vision-of-help language OK; no commercial deployment claims.

### D-0142 — Expanded medical/care living scenes on home

- **Date:** 2026-07-25
- **Status:** Active
- **Decision:** Owner authorized a dedicated **care / medical living theater** on the homepage (second theater under multi-domain scenes), inspired by a new medical-cluster reference. Scenes may include hospital care, home care for elders, children/family care, emergency response vision, surgical support vision, rural/remote care, and tasteful mental-health / disaster-relief support visions. Auto crossfade + rail; `prefers-reduced-motion` stays on the first care scene. Vision imagery OK; no fake KPI dashboards as company metrics; no commercial deployment or “Crisis Help 24/7” live-product claims.
- **In scope:** `public/home/care/*` scene art; home care section content/CSS; reference copy under `public/home/refs/`; this decision.
- **Out of scope:** Fake deployment photography; inventing clinical products/metrics; header mega-menu restore; CMS.
- **Implications:** Extends D-0141 with a focused care cluster without collapsing 16 thumbs into one rail.

### D-0143 — Homepage closing SAVEN what-we-do graphic

- **Date:** 2026-07-25
- **Status:** Active
- **Decision:** Owner authorized a homepage **closing graphic** (above the site footer) showing what SAVEN does. The asset may present the SAVEN wordmark, body-form icons (human, robotic arm, phone, humanoid, wheelchair), the acronym expansion **Support · Action · Verification · Environment · Network**, and the tagline **One Intelligence. Many Bodies. Real-World Action.** Do not invent extra product, deployment, or metric claims beyond the image.
- **In scope:** `public/home/saven-what-we-do.png` (+ optional ref copy); home closing section content/CSS; this decision.
- **Out of scope:** Header mega-menu restore; inventing claims beyond the supplied graphic; CMS.
- **Implications:** Extends the Layer 1 home story with a final “what we do” visual after multi-domain and care living sections.

### D-0144 — Owner withdrew homepage closing what-we-do graphic

- **Date:** 2026-07-25
- **Status:** Active
- **Decision:** Owner withdrew the homepage closing SAVEN “what we do” / acronym graphic authorized in D-0143. Remove the section from the homepage; do not show `saven-what-we-do.png` (or equivalent) at the bottom of home.
- **In scope:** Home closing section removal; asset cleanup; this decision.
- **Out of scope:** Rewriting D-0143; header mega-menu restore.
- **Implications:** Supersedes D-0143 for publication. Homepage ends after multi-domain + care living sections (and deepen link), then the site footer.

### D-0145 — Closing SAVEN meaning graphic as blended homepage background

- **Date:** 2026-07-25
- **Status:** Active
- **Decision:** Owner authorized a new closing SAVEN meaning graphic as an **atmospheric blended homepage bottom background** (after all home content, before the site footer). Asset may present the SAVEN logo mark + wordmark, pillars **Support · Action · Verification · Environment · Network**, and tagline **One Intelligence. Many Bodies. Real-World Action.** Integrate with smooth transitions from the preceding light care/deepen region into near-black (#0a0a0a) and softly into the dark footer — not a hard-placed card. Optional subtle ambient motion must respect `prefers-reduced-motion`. Do not invent extra product, deployment, or metric claims beyond the image.
- **In scope:** `public/home/saven-closing-bg.png` (+ optional ref copy); home closing band in `PhysicalWorldHome` / CSS / EN content; this decision.
- **Out of scope:** Header mega-menu restore; inventing claims beyond the supplied graphic; CMS; restoring the prior hard-card placement from D-0143.
- **Implications:** Supersedes the withdrawal posture of D-0144 for publication by authorizing a **new blended-background approach** with a new asset. Prior hard-placed graphic approach remains withdrawn.

### D-0146 — Closing graphic full-bleed; WebP optimized

- **Date:** 2026-07-25
- **Status:** Superseded by D-0147
- **Decision:** The homepage closing SAVEN meaning graphic (D-0145) must render **full-bleed / edge-to-edge** — no black vertical side pillars / letterboxing. Prefer `object-fit: cover` (or equivalent background cover) with centered focal point on a full-width canvas. Ship an optimized **WebP** primary (`public/home/saven-closing-bg.webp`, sensible max width, stripped metadata, target roughly under 300–500KB) with PNG fallback as needed. Keep smooth blend into the prior section and footer; subtle living motion optional; `prefers-reduced-motion` stays static.
- **In scope:** Closing band CSS/markup; `saven-closing-bg.webp` (+ PNG fallback); this decision.
- **Out of scope:** New claims beyond the graphic; header mega-menu; CMS.
- **Implications:** Clarifies presentation and media efficiency for D-0145 without changing authorized content.

### D-0147 — Closing graphic: natural-aspect banner on full-bleed dark band

- **Date:** 2026-07-25
- **Status:** Active
- **Decision:** Redo the homepage closing SAVEN meaning graphic as a **responsive natural-aspect banner** on a matching **full-bleed dark band** (`#0a0a0a` / image-edge charcoal). Display the full original composition (logo, wordmark, five labeled icons, tagline) with `width: 100%`, `height: auto`, optional centered `max-width` (~1200–1400px) — **no `object-fit: cover`**, no forced min-height crop, no cover-zoom. Soft page blends are CSS overlays only (care/white → transparent at top; transparent → footer navy at bottom). Encode optimized WebP (+ PNG fallback) from the **full original** asset. No scale/drift enlargement animation.
- **In scope:** `public/home/saven-closing-bg.webp` (+ PNG); closing markup/CSS in `PhysicalWorldHome`; this decision.
- **Out of scope:** New claims beyond the graphic; header mega-menu; CMS; inventing deployment photography.
- **Implications:** Supersedes the cover/contain-canvas approaches of D-0146 and the interim padded-ultrawide attempt; readable complete graphic is required.

### D-0148 — Care→closing bridge full-bleed; no letterboxed light strip

- **Date:** 2026-07-25
- **Status:** Active
- **Decision:** The care→closing transition must be **full-bleed**. Care + deepen share one full-width light plane (`.pw-care-block`); background must not live on a max-width `.pw-home__inner` while `.pw-home` navy shows as vertical side pillars. Soften into closing `#0a0a0a` with a short full-bleed bottom veil — do not leave a letterboxed light strip (полоса) above the closing graphic. Closing top fade stays dark-to-transparent (no reintroduced light band).
- **In scope:** `PhysicalWorldHome` care-block markup; `.pw-care-block` / deepen-row / `.pw-closing__fade-top` CSS; this decision.
- **Out of scope:** Changing closing graphic asset crop; header mega-menu; CMS.
- **Implications:** Clarifies D-0145 / D-0147 blend presentation — backgrounds edge-to-edge; copy may remain in `.pw-home__inner`.

### D-0149 — Localize home Layer-1 content + living help collage hero

- **Date:** 2026-07-25
- **Status:** Active
- **Decision:** (1) Localize the Layer-1 Physical World homepage content module to approved body locales **en / ar / he / ru / uk** (English remains canonical; es/de/fr/ja/zh-cn continue to fall back to English via `resolveContentLocale`). Aria labels that were hardcoded English move into the content module. (2) Replace the single-scene wheelchair pose-step hero as the primary living hero with an elegant **living photoreal help collage** of several clear assist scenes (manipulator / hospital / home elder / family / mobile delivery), under `public/home/hero-collage/`, with staggered panel emphasis animation. `prefers-reduced-motion` shows a static collage. Brand + *Intelligence for the Physical World.* remain readable via scrim. Vision tone only — no fake deployment claims, KPI overlays, or neon HUD.
- **In scope:** `src/content/home/physical-world/locales/*`; getter; `HeroLivingMedia` collage; hero CSS; collage WebP/JPEG assets; this decision; AGENTS current-phase one-liner.
- **Out of scope:** Full page-body localization for es/de/fr/ja/zh-cn; header mega-menu restore; inventing deployment photography or metrics; CMS.
- **Implications:** Supersedes D-0140 single-scene pose-step crossfade as the **primary** homepage hero living signal. Prior `hero-frames` assets may remain unused/retired. Multi-domain and care theaters (D-0141 / D-0142) stay post-hero.

### D-0150 — Single home living carousel; industrial / agriculture / teamwork removed

- **Date:** 2026-07-25
- **Status:** Active
- **Decision:** Collapse the two post-hero home theaters (multi-domain D-0141 + care D-0142) into **one** large living carousel of care/help scenes only. Curated scenes: hospital care, home care, children & family, emergency, surgical support, rural & remote, mental health, disaster relief. **Remove** industrial, agriculture, and teamwork (and similar non-care domain panels) from home galleries. Keep living crossfade + thumb rail + `prefers-reduced-motion` first-scene behavior. Hero collage (D-0149) remains separate and unchanged unless it contains those removed themes.
- **In scope:** `PhysicalWorldHome` / `LivingDomains` single theater; `src/content/home/physical-world/` locales en/ar/he/ru/uk; theater CSS stage sizing; unused industrial/agriculture/teamwork domain assets; this decision; AGENTS current-phase one-liner.
- **Out of scope:** Applications sitemap leaves for industrial/agriculture; inventing new photography; CMS; header mega-menu.
- **Implications:** Supersedes dual-theater presentation of D-0141 / D-0142 on the homepage. Care-focused Layer 1 story after the hero.

### D-0151 — Living collage motion + hero copy clear of photos

- **Date:** 2026-07-25
- **Status:** Active
- **Decision:** (1) Hero help collage must feel **alive**: soft panel emphasis cycle plus subtle per-panel ken-burns / opacity crossfade (long easings; not jerky). `prefers-reduced-motion` remains a static collage. (2) Hero layout is a true **two-column** composition — copy on the start side, collage on the end side (stacked on small viewports) — with **no text over photos**. Scrim/grain stay behind the text column only (soft seam into the collage), not a full-bleed wash over help scenes. RTL mirrors via document direction.
- **In scope:** `HeroLivingMedia`, `PhysicalWorldHome` hero markup, `physical-world-home.css` hero grid/motion; this decision; AGENTS phase pointer.
- **Out of scope:** New photography; inventing deployment claims; header mega-menu; CMS.
- **Implications:** Clarifies D-0149 living-collage acceptance: motion must be perceptible; readability must not rely on text stacked over collage panels.

### D-0152 — Hero collage: tighter gap + unmistakable living motion

- **Date:** 2026-07-25
- **Status:** Active
- **Decision:** Owner feedback on D-0151: (1) Reduce the empty middle between hero copy and collage — tighten grid ratio, end-align copy toward the collage, narrower end padding / shorter seam — while keeping two columns and **no text over photos**. (2) Living collage motion must be **unmistakable**: stronger inactive/active opacity contrast, ~3.2s featured-panel cycle, soft brand gold/teal inset rim on the active panel, slight active scale-up, and clearer ken-burns (scale ~1→1.09 over ~8–12s, staggered). `prefers-reduced-motion` stays static (no cycle, no ken-burns, even emphasis).
- **In scope:** `HeroLivingMedia` step timing; `physical-world-home.css` hero grid/padding/motion; this decision; AGENTS phase pointer.
- **Out of scope:** New photography; inventing claims; header mega-menu; CMS; commit.
- **Implications:** Supersedes D-0151 acceptance for gap size and motion strength only; two-column no-overlay rule from D-0151 remains.

### D-0153 — Header important-pages menu restored

- **Date:** 2026-07-25
- **Status:** Active
- **Decision:** Owner restores a short primary header menu of important Layer-1 hubs (≤7): Purpose, Labs, Applications, Technology, Research, Trust, Investors. Logo remains Home. Full leaf lists stay in the footer depth map. This is not a docs mega-menu.
- **In scope:** `primaryNavigation`, SiteHeader / DesktopNavigation / MobileNavigation, UI chrome labels, SITE_ASSIGNMENT Layer-1 header note.
- **Out of scope:** Restoring every leaf in header dropdowns; inventing unpublished destinations.
- **Implications:** Partially supersedes D-0134 empty-header rule. Footer remains the complete published map (D-0132).

### D-0154 — Legal pages returned to footer + draft content rules

- **Date:** 2026-07-25
- **Status:** Active
- **Decision:** Publish structural `/legal/*` destinations from `TRUST_LEGAL_STRUCTURE.md` and return a Legal column to the footer. Bodies use clear **Draft — pending legal review** framing and honest section outlines. Do not invent registration numbers, counsel names, or present drafts as binding effective policy. Prefer any existing approved copy when available; otherwise structural drafts only.
- **In scope:** Legal routes in `published-routes.ts`, footer Legal group, legal page components/content, UI labels.
- **Out of scope:** Final counsel-approved policies; cookie consent UI; invented contact emails.
- **Implications:** Partially supersedes D-0122 / D-0126 “legal unpublished” posture for structural draft publication only. D-0009 invention prohibitions remain.

### D-0155 — Theme sun/moon + language flags + upward footer language

- **Date:** 2026-07-25
- **Status:** Active
- **Decision:** Theme control is a sun (light) / moon (dark) icon toggle with two distinct colors, placed in header utilities and synced in the footer. Language menus show country/region flags; the footer language popover opens upward.
- **In scope:** ThemeSwitch, LanguageSelector, site-shell / experience chrome CSS, locale flag map, UI strings.
- **Out of scope:** New theme palettes beyond existing light/dark tokens; neon decoration.
- **Implications:** Footer Copyright line includes the word “Copyright” with © year and SAVEN Core.

### D-0156 — Sign In/Up + Google auth page

- **Date:** 2026-07-25
- **Status:** Active
- **Decision:** Add a neat text link **Sign In/Up** (not a filled button) in header and footer. Publish `/[locale]/auth/sign-in/` with SAVEN logo, site styling, back control, and Google sign-in via Auth.js. Use env vars `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET`, `AUTH_SECRET` (documented in `.env.example`). If credentials are missing, show a graceful configure path — do not fake a logged-in user. This is not a full investor portal.
- **In scope:** Auth.js Google provider, sign-in page UI, chrome links, package dependency, env example.
- **Out of scope:** CMS accounts database; role-based portal; inventing user profiles; committing secrets.
- **Implications:** Partially supersedes D-0021 authentication deferral for this public sign-in entry only.

### D-0157 — Unified readable Layer-1 hub visual system + image optimization

- **Date:** 2026-07-25
- **Status:** Active
- **Decision:** The seven header Layer-1 hubs (Purpose, Labs, Applications, Technology, Research, Trust, Investors) share one calm readable public shell (`HubReadablePage` / `layer1-hub.css`): clear masthead (label, title, short lead, optional status), generous spacing, short sections, progressive disclosure for depth, and path lists — not Knowledge Passport / dense engineering chrome on first viewport. Technology and Trust **hub entry** pages use this light readable style; leaf technical pages may keep deeper experience grammar. English hub copy may be clarified for ordinary readers without inventing products, metrics, or operational claims. Optimize critical imagery (care carousel, brand mark, closing band) to WebP (+ JPEG/PNG fallbacks) for faster load; unused heavy refs remain off the critical path.
- **In scope:** Hub shell component/CSS; seven hub routes; flagship leaf pages aligned to the same shell; EN readability edits; UI chrome `hub.*` strings across `src/i18n/ui/*`; image optimization for in-use assets; this decision; AGENTS phase pointer.
- **Out of scope:** Full es/de/fr/ja/zh-cn page bodies; inventing claims; neon/glow; returning passport chrome to Layer-1 hubs; deleting published leaf routes.
- **Implications:** Hub destinations supersede prior EditorialPage / ApplicationsPage / TechnologyExperience / ResearchPage / TrustPage / FlagshipSimplePage presentation for those seven menu URLs only. Leaf discipline pages unchanged in route inventory.

### D-0158 — Auth card polish + visual Layer-1 hubs

- **Date:** 2026-07-25
- **Status:** Active
- **Decision:** Polish `/[locale]/auth/sign-in/` into a substantial SAVEN-styled card (larger logo, larger panel, brand atmosphere, clear back / title / Google or configure state). Upgrade the shared Layer-1 hub shell from text-led readable pages to visual hubs: atmospheric masthead using approved `public/home/` imagery, short what/why/next cues, visual path grids with image thumbs where destinations exist, calm motion with `prefers-reduced-motion` respect, and progressive disclosure for depth. No invented metrics, customers, or deployment claims; straight corners; no neon.
- **In scope:** Auth sign-in component/CSS; `HubReadablePage` / `layer1-hub.css`; hub content builders + visual asset map; UI strings `auth.*` / `hub.*` across `src/i18n/ui/*`; this decision; AGENTS phase pointer.
- **Out of scope:** Full investor portal; inventing product photography; leaf marketing pages; passport chrome return; final legal prose; commit.
- **Implications:** Supersedes the text-primary first-viewport presentation of D-0157 for the seven Layer-1 hubs while keeping the shared shell and honest status language. Auth remains Google-via-env only (D-0156).

### D-0159 — Robotics Lab / Research hero / Investors brochure expansion

- **Date:** 2026-07-25
- **Status:** Active
- **Decision:** Owner-authorized content expansion on Layer-1 visual hubs. (1) **SAVEN Robotics Lab** (+ Labs hub) gain richer honest brochure sections from D-0131 scope: what we build, how it helps people, workstreams (robotic systems, mobility, control, perception, HMI), and In Development status — no fake deployments. (2) **Research** hub masthead replaced with a dedicated photoreal research atmosphere asset (`public/hub/research-masthead.webp`, JPEG fallback), Research-only. (3) **Investors** expands to brochure structure: posture, perspectives, platform potential, development progress (architecture/status framing — not financial results), human benefit, and long-term value-creation thesis in careful language — no promised returns, IRR/ROI, valuations, revenue, customers, or traction metrics (D-0062 remains). Sign In remains existing auth entry, not a full portal.
- **In scope:** `src/content/flagship/en.ts`; hub builders / visuals; Robotics Lab route wiring; Research masthead asset; `docs/DECISIONS_LOG.md` / AGENTS phase pointer; smoke + screenshots.
- **Out of scope:** Invented lab results/publications; financial claims; full es/de/fr/ja/zh-cn page bodies; investor portal; commit.
- **Implications:** EN flagship/brochure bodies are the canonical expansion; flagship content remains EN-first (no parallel ar/he/ru/uk flagship modules yet). UI chrome unchanged unless new `hub.*` keys are added. Category opportunity language for capital must stay aspirational and non-promissory.

### D-0160 — Unified visual domain-page system (hubs + leaves)

- **Date:** 2026-07-25
- **Status:** Active
- **Decision:** Extend the Layer-1 visual hub language (D-0157/D-0158) into a shared **DomainVisualPage** shell for all listed Technology, Systems, Labs, Applications, Trust, Research, and Company destinations (hubs and leaves). Every covered route gets a thematic photoreal / cinematic documentary-tech masthead (WebP under `public/domain/` organized by domain, plus reuse of approved home/care/research assets where thematically perfect), a clear title + short human lead, what/why/next cues where appropriate, and progressive disclosure for engineering depth. One image language family; no neon; straight corners; no fake KPI dashboards or invented deployment photography. Status language remains Research / Architecture / In Development. English remains canonical; structural visual wrap must not break locale getters.
- **In scope:** `DomainVisualPage` / `HubReadablePage` shell; `src/content/domain/*` visual map + leaf adapters; route wiring for listed destinations including Systems hub and Foundation; thematic assets; path thumbs from leaf mastheads; AGENTS phase pointer; this decision; verification smoke + sample screenshots.
- **Out of scope:** Invented products/metrics/customers/returns; final legal prose; full es/de/fr/ja/zh-cn page bodies; CMS; investor portal; commit.
- **Implications:** Supersedes bare KnowledgeHero-first presentation for listed Technology/Systems/Applications/Trust leaves and TechnicalPage-first Foundation / Systems overview in favor of the shared visual chrome. Depth content may remain below the first screen. Legal routes unchanged.

### D-0161 — Full page-body localization (10 locales) + cleanup + Vercel prep

- **Date:** 2026-07-26
- **Status:** Active
- **Decision:** Owner authorizes **full page-body localization** for all ten system locales (`en`, `es`, `de`, `fr`, `ja`, `zh-cn`, `ar`, `he`, `uk`, `ru`), superseding prior limits that left `es`/`de`/`fr`/`ja`/`zh-cn` on English body fallback. English remains the canonical source. Existing patterns apply: `src/content/**` locale modules and page dictionaries, getters with `CONTENT_LOCALES`, and `src/i18n/ui/*` for chrome. Also authorized in the same prep pass: retire unused Human Hour / orphaned homepage assets; performance hygiene (WebP, `next/image` sizes, drop unreferenced multi‑MB public files); mobile pass on header/hubs/home/auth/footer; and Vercel deploy readiness (`next build`, env documentation, concise deploy notes). Legal pages: translate draft banners and structural draft copy only — meaning of “Draft — pending legal review” must stay accurate; do not present as effective law (D-0154 remains). Do not invent company facts, metrics, customers, partners, returns, or traction while translating. RTL (`ar`/`he`) must remain intact. Commit/push only if the owner separately requests.
- **In scope:** Extend `CONTENT_LOCALES`; page dictionaries for `es`/`de`/`fr`/`ja`/`zh-cn`; sync/complete `ar`/`he`/`ru`/`uk` with latest EN where drifted; Physical World home locale modules; flagship (Labs / Investors / Robotics Lab / Future Lab / Robotics Interface) localized bodies; legal draft localization; UI chrome gap fill; unused asset/code cleanup; image/`next.config` performance; mobile fixes + screenshots under `tmp/vercel-prep/`; `.env.example` Auth/Google/URL vars; `docs/VERCEL_DEPLOY.md`; `npm run build` / `tsc --noEmit` green; AGENTS Current Phase pointer; this decision.
- **Out of scope:** Invented facts/metrics; final binding legal prose; CMS/database/analytics/cookie consent; investor portal beyond existing Sign In; new leaf marketing pages beyond D-0160 set; commit/push unless owner asks.
- **Implications:** `resolveContentLocale` no longer falls `es`/`de`/`fr`/`ja`/`zh-cn` to English for authorized body modules. Prior “Home body locales: en/ar/he/ru/uk” and “full es/de/fr/ja/zh-cn page bodies without approval” gates in AGENTS are superseded by this entry. Translation quality may be professionalized later by a vendor (pending list item); structural completeness for all published routes is the bar for this phase.

### D-0162 — PWA + SEO / security headers / marketing surface prep

- **Date:** 2026-07-26
- **Status:** Active
- **Decision:** Owner authorizes a production-readiness pass covering: (1) **security headers** (CSP pragmatic for Next.js + Auth.js, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`, `X-Frame-Options` / `frame-ancestors`, production HSTS via Vercel env); (2) **SEO** root/locale metadata, per-locale `hreflang` alternates, canonicals, App Router `sitemap.xml` + `robots.txt`, Open Graph / Twitter cards, default OG image from brand, honest Organization JSON-LD (no invented addresses); (3) **marketing share surface** for home + hubs without fake testimonials/metrics; (4) **performance** hygiene (dynamic import for heavy home clients, LCP preload where safe); (5) **mobile** polish at ~390px for header/home/footer/auth; (6) **PWA installability** via Web App Manifest, icons, apple-mobile-web-app meta, discreet Install app UI chrome (translated), and a lightweight offline-shell service worker when stable. Auth routes remain `noindex`. Legal meta must keep draft framing. Manual security review required when automated security-review tooling cannot compute diffs. Durable audit written to `docs/SITE_AUDIT_REPORT.md` + `tmp/audit/summary.json`. Commit/push only if the owner separately requests.
- **In scope:** `next.config.ts` headers; `proxy.ts` auth/preview `X-Robots-Tag`; SEO helpers + page `generateMetadata`; `app/sitemap.ts` / `app/robots.ts` / `app/manifest.ts`; brand OG + PWA icons; Install UI + i18n `pwa.*`; SW shell; mobile CSS; auth secret production hardening; `.env.example` / deploy notes; D-0162 + AGENTS phase pointer; audit artifacts; `tsc` / `build` green.
- **Out of scope:** Invented metrics/customers/legal finals; nonce-strict CSP hardening; full offline domain content; analytics/cookie consent; CMS; new leaf marketing pages; commit/push unless owner asks.
- **Implications:** Marketing = meta/OG/sitemap/sharing only. PWA is installable brochure shell, not an app product claim. CSP still allows `'unsafe-inline'` / `'unsafe-eval'` for Next pragmatism — track as backlog. Auth.js `pages.signIn` remains EN fallback path.

### D-0163 — Credentials sign-in form + show password + Google

- **Date:** 2026-07-26
- **Status:** Active
- **Decision:** Owner authorizes a simple authorization UI on `/[locale]/auth/sign-in/`: email + password fields, accessible show/hide password control, primary Sign in action, divider, then Continue with Google. Credentials provider validates against optional env allowlist (`AUTH_DEMO_EMAIL` / `AUTH_DEMO_PASSWORD` + `AUTH_SECRET`) for staging/launch operator testing only — not a full user database. When credentials or Google are unset, show honest “not configured” state; do not invent logged-in success. Auth.js `pages.signIn` uses locale-neutral `/auth/sign-in/` which redirects to the localized page (fixes SEC-003 EN-only hardcode). Google remains the primary public path when configured; real user store/DB is explicitly later.
- **In scope:** Auth.js Credentials + Google providers; sign-in form UI/CSS; show password toggle; credentials server action; locale redirect route; `auth.*` UI strings across `src/i18n/ui/*`; `.env.example` / `docs/VERCEL_DEPLOY.md`; D-0163 + AGENTS phase pointer; `tsc` / `build` green; owner-authorized commit/push for go-live.
- **Out of scope:** Full user database/Prisma; magic-link email; inventing accounts/metrics; investor portal beyond this sign-in entry; fake “account created” success.
- **Implications:** Partially extends D-0156/D-0158. Production should prefer Google OAuth; demo credentials are optional and must never be committed as real secrets. Supersedes D-0162 note that `pages.signIn` remains EN-only fallback.

### D-0164 — Public auth soft-degrade + Install in footer + BrandName lockup

- **Date:** 2026-07-26
- **Status:** Active
- **Decision:** Owner polish before go-live: (1) remove public “Setup required” / env-var developer panels from `/[locale]/auth/sign-in/`; when credentials or Google are unset, disable controls and optionally show one short human soft line — no env names, no admin chrome, no “You are not signed in” status strip; (2) move **Install app** out of header/menu — footer only (near language/theme/copyright bar); (3) homepage hero (and sitewide company-name text) must use `BrandName` with the same sans / uppercase / SAVEN light + CORE gold language as `SavenLogo` wordmark — `BrandName` is the single source for “SAVEN Core” wordmark text.
- **In scope:** Auth UI/CSS + `auth.*` soft strings (10 locales); header remove Install; footer Install remains; `BrandName` + logo CSS alignment; hero/auth title usage; D-0164 + AGENTS phase pointer; `tsc`; smoke screenshots; commit/push.
- **Out of scope:** Full user DB; inventing auth success; new marketing leaves; neon/glow; legal finals.
- **Implications:** Partially supersedes D-0163 public “not configured” panel wording and D-0162 header Install placement. Operator/env setup remains in `.env.example` / deploy docs only — not on the public page.

### D-0165 — Editorial hub/domain openings (no instruction-manual trio)

- **Date:** 2026-07-26
- **Status:** Active
- **Decision:** Owner rejects the post-masthead bordered three-column **WHAT THIS IS / WHY IT MATTERS / WHERE TO GO NEXT** block and wiki-style **MORE DETAIL** accordion as looking like a technical instruction manual. All pages using `HubReadablePage` / `DomainVisualPage` must open with a friendlier, airy editorial composition in SAVEN spirit: soft story band with short readable beats (sentence-case labels, gold accent sparingly, no ALL-CAPS instruction headers), and progressive disclosure restyled as modern product UI (or clear readable hierarchy) — still progressive disclosure OK. Content facts stay; presentation changes. Straight corners; no neon; BrandName lockup (D-0164) unchanged.
- **In scope:** `HubReadablePage` + `layer1-hub.css` opening/depth chrome; `hub.what` / `hub.why` / `hub.next` / `hub.deeper` UI strings across all 10 locales; D-0165 + AGENTS phase pointer; `tsc`; smoke hubs/leaves; screenshots under `tmp/hub-openings/`; commit/push for go-live.
- **Out of scope:** Inventing metrics/claims; new marketing leaves; neon/glow; legal finals; changing masthead photography set.
- **Implications:** Supersedes the D-0157–D-0160 “what/why/next cue cards” presentation grammar for the first post-hero body block. Hub/domain content adapters may keep the same three highlight texts; labels and layout are editorial, not docs chrome.

### D-0166 — Labs visual pages + SAVEN data/action loop diagram

- **Date:** 2026-07-26
- **Status:** Active
- **Decision:** Owner authorizes elevating Labs pages (`/labs/`, `/labs/saven-robotics-lab/`, `/labs/internal-future-lab/`) with real assistive robotics/human-help scene imagery (WebP under `public/domain/labs/`), richer honest descriptions, and a modern animated architecture diagram on the Labs overview: Human Data Model → SAVEN (analyze / roles / events / actions) → executive devices (robots, manipulators, sensors) → return telemetry → SAVEN, with optional ascent to BioMath Core when needed. Framing remains architecture / In Development / Research — no operational hospital deployment claims, no fake metrics/customers. Animation uses SVG + CSS / SMIL; `prefers-reduced-motion` shows a static labeled diagram. Straight corners; brand gold/blue accents; no neon HUD template look. Foundation sequence reminder: BioMath Life → BioMath Core → SAVEN → SAVEN Core.
- **In scope:** `LabsDataLoop` client component; `HubPageContent.diagram` / `scenes`; Labs mastheads + scene bands; flagship Labs copy; flagship dictionaries + `hub.scenes` UI (10 locales); D-0166 + AGENTS phase pointer; `tsc`; smoke Labs routes; screenshots under `tmp/labs-visual/`; commit/push.
- **Out of scope:** Invented traction/deployments; new marketing leaves beyond Labs set; neon/glow fireworks; CMS/database; final legal prose; graph CMS.
- **Implications:** Extends D-0160 Labs visuals and D-0159 brochure depth with an interactive architecture narrative on `/labs/` only.

### D-0167 — Labs data-loop diagram placement + visual enrichment

- **Date:** 2026-07-26
- **Status:** Active
- **Decision:** Owner authorizes moving the Labs overview animated data/action loop diagram higher on `/labs/` — immediately under the visual masthead, before the story-band / body / scenes / path grids — so it sits in the first scroll attention zone. Visual enrichment authorized: deeper navy/charcoal diagram field, gold accents, soft blue data paths, warm Human Data Model tint, layered gradient fills on SAVEN and the executive-device cluster, clearer path particles / flow pulses / soft node breathing, and miniature device silhouettes for clarity. Still architecture framing with honesty note; no neon/glow spam; straight corners; `prefers-reduced-motion` remains a richer static still. No new marketing claims or operational deployment language.
- **In scope:** `HubReadablePage` diagram order; `LabsDataLoop` + `labs-data-loop.css` visual upgrade; D-0167 + AGENTS phase pointer; `tsc`; smoke `/en/labs/`; screenshots `tmp/labs-visual/diagram-high-*.png`; commit/push.
- **Out of scope:** New UI copy strings (reuse D-0166 labels); invented traction; neon HUD; CMS; other hub pages.
- **Implications:** Supersedes D-0166 placement of the diagram after story/body; visual language remains brand-atmospheric, not sci-fi chrome.

### D-0168 — Typography system — Apple-like clarity sitewide

- **Date:** 2026-07-26
- **Status:** Active
- **Decision:** Owner authorizes a sitewide typography system optimized for Apple-like clarity and readability on all pages. Primary body/UI face is the system SF-adjacent stack (`ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", …`) via CSS `--font-sans` — not IBM Plex Sans for Latin/Cyrillic. Source Serif remains loaded for large display titles only (hero / masthead H1 scale); mid-size section titles and UI chrome use sharp sans. Fluid type scale, body ~17px with line-height ~1.47–1.6, heading letter-spacing about `-0.015em` to `-0.022em`, body tracking near 0, weights 400 / 500–600 (no ultra-light body). Font smoothing: default/subpixel on light theme; antialiased on dark theme and dark chrome. Arabic keeps IBM Plex Sans Arabic; Hebrew keeps Heebo; BrandName/logo lockup structure and gold/ink colors stay (D-0164), lockup face inherits clearer sans. Supersedes D-0128 custom Latin sans (IBM Plex) for body/UI; does not invent content or change navigation.
- **In scope:** `src/design/fonts.ts`, `src/design/typography.ts`, `app/globals.css` type tokens; hub/home/labs/auth/experience/engineering/technology/shell CSS inheritance sweep; D-0168 + AGENTS phase pointer; `tsc`; smoke `/en/`, `/en/labs/`, `/en/technology/`, `/ar/`; screenshots `tmp/type-clarity/`; commit/push.
- **Out of scope:** New UI chrome strings; neon; inventing content; changing BrandName color/structure; final legal prose; CMS.
- **Implications:** Single CSS-variable source updates all pages; RTL locales keep dedicated faces with improved sizing/smoothing; display serif is opt-in at large scale only.

### D-0169 — Visible Apple-clean Inter webfont + sans titles

- **Date:** 2026-07-26
- **Status:** Active
- **Decision:** Owner reports D-0168 was not visibly noticeable (system-ui ≈ SF Pro on macOS; hero/masthead titles still used Source Serif). Authorize a **visible** Apple-clean pass: load **Inter** via `next/font` (weights 400/500/600/700) as the first face for `--font-sans` / `--font-ui`; migrate all marketing/display titles (`.pw-hero__title`, `.hub-page__title`, knowledge/home hero titles, section titles that used `--font-display`) to sharp sans with Apple-like tracking/semibold; **stop loading Source Serif 4**; keep Arabic IBM Plex Sans Arabic and Hebrew Heebo; BrandName lockup structure/colors unchanged (D-0164). Slightly stronger secondary-text contrast; body ~18px; bump service worker cache to `savencore-shell-v2` so clients fetch new CSS. Supersedes D-0168 for Latin/Cyrillic face choice and for display-title face (sans, not serif).
- **In scope:** `src/design/fonts.ts`, `src/design/typography.ts`, `app/globals.css` tokens; hub/home/experience title CSS; `public/sw.js` cache name; D-0169 + AGENTS phase pointer; `tsc` + build; screenshots `tmp/type-clarity/v2-*.png`; commit/push; production deploy.
- **Out of scope:** New UI chrome strings; neon; inventing content; changing BrandName color/structure; final legal prose; CMS.
- **Implications:** Titles and body share one crisp Inter stack sitewide; DevTools should show Inter (not Source Serif) on Latin pages; hard refresh / SW update may be needed once after deploy.

### D-0170 — Theme contrast fix — home hero/care + dark chrome

- **Date:** 2026-07-26
- **Status:** Active
- **Decision:** Owner reports that toggling light/dark theme on the homepage makes part of the text disappear (including concerns for footer/menu). Root cause: D-0169 global `h1–h4 { color: var(--color-text) }` overrode dark-band headings, so in light theme the hero H1 became dark ink on the always-dark hero (`#0b1220`). Care living block also mixed theme `--color-background` into a light paper plane, so dark theme inverted care copy toward light-on-light. Authorize a contrast fix: (1) dark atmospheric bands (hero, knowledge heroes) keep light ink via `color: inherit` from the band parent; (2) care living block stays a fixed light paper plane in both themes with scoped light-ink CSS variables; (3) header and footer remain dark chrome with scoped light text / bright gold accent tokens so menu and footer stay readable in both themes; (4) header/footer logo stays `tone="dark"` (white SAVEN on dark chrome); (5) bump service worker cache to `savencore-shell-v3`. No navigation, content, or palette invention beyond contrast repair.
- **In scope:** `physical-world-home.css`, `globals.css`, `experience.css`, `site-shell.css`, `public/sw.js`, D-0170 + AGENTS phase pointer; Playwright screenshots `tmp/theme-fix/`; `tsc`; smoke `/en/`; commit/push; production deploy.
- **Out of scope:** New theme palettes; neon; inventing content; changing BrandName structure; final legal prose; CMS.
- **Implications:** Theme toggle must keep all home/header/footer text readable; hero may stay dark atmospheric with light copy in both themes; care plane stays light paper in both themes.

### D-0171 — Full light/dark theme coverage

- **Date:** 2026-07-26
- **Status:** Partially superseded by D-0172 for home shell / closing exceptions
- **Decision:** Owner reports that not everything switches when toggling light/dark (D-0170 only repaired hero H1 contrast and kept care + header/footer locked). Authorize **full theme coverage**: (1) **Light theme** = light page backgrounds, surfaces, text, borders, cards/story-bands, care living plane, hub/domain bodies, labs surround chrome, auth (light paper card), and **light header/footer/menus** (Apple-like); logo ink navy on light chrome. (2) **Dark theme** = dark page + dark chrome (navy header/footer) with light ink / bright gold; logo white on dark chrome. (3) **Intentional exceptions** that stay atmospheric in both themes: photoreal home hero collage, domain/hub mastheads and other dark photo heroes, homepage closing meaning band, Labs diagram stage (navy canvas). Surrounding page chrome and body planes must still flip. (4) Prefer CSS variables (`--color-background`, `--color-surface`, `--color-surface-muted`, `--color-text`, `--color-text-secondary`, `--color-border`, footer-scoped `--footer-*`, auth-scoped `--auth-*`). (5) Bump service worker cache to `savencore-shell-v4`. Supersedes D-0170 items that forced care/header/footer to ignore theme.
- **In scope:** `globals.css`, `site-shell.css`, `experience.css`, `physical-world-home.css`, `sign-in.css`, `saven-logo.css`, `layer1-hub.css`, `engineering.css` token sweep; `public/sw.js`; D-0171 + AGENTS phase pointer; Playwright screenshots `tmp/theme-full/`; `tsc`; smoke; commit/push; production deploy.
- **Out of scope:** New theme palettes beyond existing tokens; neon; inventing content; changing BrandName structure; final legal prose; CMS; inventing leaf pages.
- **Implications:** Theme toggle must visibly flip the whole site except documented atmospheric photo/diagram exceptions; light mode header/footer are no longer always-dark.

### D-0172 — Theme plane completion (unfreeze home / care / closing)

- **Date:** 2026-07-26
- **Status:** Active
- **Decision:** Owner reports D-0171 incomplete — not all backgrounds flip. Root cause: `.pw-home` forced `#0b1220` / light ink for the entire homepage shell, so care and closing could not read as theme surfaces. Authorize completion: (1) `.pw-home` uses `var(--color-background)` / `var(--color-text)`. (2) **Only** `.pw-hero` (+ collage) stays dark atmospheric with light copy in both themes. (3) Care living plane (`.pw-living-block`) and closing band (`.pw-closing`) follow theme surfaces; fades use `--color-surface` / `--color-background` (supersedes D-0171 closing-as-always-dark exception). Photo asset itself may remain. (4) Labs `.ldl` outer surround follows theme; only `.ldl__stage` stays navy canvas. (5) Auth page atmosphere + Google button use theme tokens. (6) Hub body/path placeholders use `--color-surface-muted` (mastheads stay dark photo). (7) Bump SW cache to `savencore-shell-v5`.
- **In scope:** `physical-world-home.css`, `labs-data-loop.css`, `sign-in.css`, `layer1-hub.css`, `public/sw.js`, D-0172 + AGENTS phase pointer; Playwright full-page home light/dark under `tmp/theme-bg/`; `tsc`; local `npm run dev`; commit/push for sync (Vercel deploy optional this turn).
- **Out of scope:** New palettes; neon; inventing content; final legal prose; CMS; changing masthead/hero collage atmospheric treatment.
- **Implications:** Theme toggle must visibly flip home care + closing + page shell + labs surround; frozen light-care / black-home shells are prohibited.

### D-0173 — Investors visual upgrade + Contact page/form + About team narrative

- **Date:** 2026-07-26
- **Status:** Active
- **Decision:** Owner authorizes three company-surface upgrades: (1) **Investors** (`/investors/`) — richer visual brochure via DomainVisualPage / HubReadablePage: icon story beats (platform potential, human benefit, long-term value, responsible growth — no fake returns), thematic WebP scenes under `public/domain/company/`, visual path cards; honest D-0159 posture retained. (2) **Contact** — new published route `/contact/`, footer Company link, public address **`info@savencore.com`**, beautiful accessible form that composes a `mailto:` message (opens the visitor’s email app). Honest success copy — no CRM / SMTP claim; full mail API later. (3) **About / Foundation** (`/foundation/`) — open “Who we are” team narrative: professional team with deep experience across AI/robotics/data/care systems/engineering and years building major projects in related domains — **no names**, no invented headcount, customers, patents, valuations, or deployment claims. UI chrome + content strings translated across locales.
- **In scope:** Investors content/visuals/CSS icons; Contact page + form + dictionaries; Foundation team section + dictionaries; `published-routes`, footer, sitemap; `src/i18n/ui/*`; D-0173 + AGENTS phase pointer; `tsc`; smoke `/en/investors/`, `/en/contact/`, `/en/foundation/`; screenshots `tmp/company-pages/`; commit/push; optional Vercel prod.
- **Out of scope:** SMTP/CRM backend; named leadership bios; investor portal; inventing metrics/returns/clients; final legal prose; neon.
- **Implications:** Contact email destination is approved for public use; Contact mailto form is authorized; team narrative without names is authorized; pending “Contact emails / forms destinations” item is resolved for this public channel.

### D-0174 — Positioning: SAVEN uses and advances AI; does not claim to create AI

- **Date:** 2026-07-26
- **Status:** Active
- **Decision:** Owner rule: SAVEN Core does **not** create, build, or invent AI. Public and documentation copy must say the company **uses / refines / advances / applies** AI alongside robotics, autonomous systems, and engineering technologies. Domain/discipline page titles such as “Artificial Intelligence” remain OK. Claims that SAVEN creates AI (any locale) are prohibited.
- **Canonical English replacements:** (1) Investors body: “SAVEN Core uses and advances AI alongside robotics, autonomous systems, and engineering technologies meant to operate in real environments.” (2) Home oneBreath: “We use and refine AI with robotics that work in the real world — so machines can sense, move, and assist under human control.” (3) SITE_ASSIGNMENT explanation: “SAVEN Core applies and advances AI alongside robotics…”.
- **In scope:** Flagship EN + all locale dictionaries + `scripts/fl-translations/` sync copies; home physical-world oneBreath all locales; `docs/SITE_ASSIGNMENT.md`; AI technology page scan (reframe only if create-AI claims found); D-0174 + AGENTS phase pointer; `tsc`; commit/push; Vercel prod.
- **Out of scope:** Inventing new product claims; changing robotics “builds engineering basis” language; SMTP/CMS; neon.
- **Implications:** All future copy and translations must follow use/refine/advance framing for AI; dictionary keys that embed the old English must be renamed when EN changes.

### D-0175 — Experience Redesign UI freeze — completed approved snapshot

- **Date:** 2026-07-26
- **Status:** Active
- **Decision:** Owner pin/freeze: the public site state after this Experience Redesign UI pass is an **approved completed snapshot**. Do not casually regress Contact, Applications, Labs, or Purpose masthead treatments without a new decision. Prior AI positioning (D-0174) remains in force and is already on `main`.
- **Freeze coverage:** (1) Contact — smaller secondary email link + company horizon hero (`scene-long-horizon`). (2) Applications hub — robotics hand masthead (distinct from care overview). (3) Labs hub — multi-robot / trolley+humanoid masthead crop. (4) Purpose hub — diverse multi-care collage (home / disaster / hospital / rural-remote; ages and need-help contexts). Hub collage rendering + masthead object-position tuning included.
- **Freeze commit:** `2417475b8b123aecc1b955549a158079bd939b64` (`2417475` on `main`).
- **In scope:** Contact form/CSS contrast; hub masthead collage path; `domain-visuals` / hub visual wiring; Layer-1 hub CSS; D-0175 + AGENTS phase pointer; commit/push; Vercel production deploy to `https://www.savencore.com`.
- **Out of scope:** Legal dictionary WIP under `scripts/fl-translations/*-legal.mjs` and related legal locale churn; SMTP/CRM; inventing imagery beyond approved care/domain assets; neon.
- **Implications:** This snapshot is the baseline for further Experience work; material visual regress of the frozen hubs/Contact requires owner approval / a new Decisions Log entry.

### D-0176 — Admin Platform / Social footer — first vertical slice

- **Date:** 2026-07-26
- **Status:** Active
- **Decision:** Owner authorizes the next development block after the D-0175 public UI freeze: (1) **Footer socials** — Facebook, YouTube, X, LinkedIn, Instagram icons always visible; links activate only via `NEXT_PUBLIC_SOCIAL_*` env (empty/`#` = disabled with `aria-disabled`; no invented live profile URLs). (2) **Admin platform** under `/[locale]/admin/` — restricted, not in public primary nav or sitemap; footer **Admin** link only for signed-in role ≥ `viewer`. RBAC hierarchy `super_admin` > `admin` > `editor` > `marketer` > `viewer` via `AUTH_DEMO_ROLE` + `AUTH_ADMIN_ALLOWLIST`. (3) **Email templates** — English content modules with branded HTML (logo, SAVEN Core, https://www.savencore.com, `info@savencore.com`, © 2026) and admin preview; categories cover welcome/invite, careful investor intro (no fake claims), partnership ack, press, newsletter, event, security notice, internal ops. SMTP send not included. (4) **Media library** — seed brand assets + local `storage/admin-media/` uploads in development; actions Copy / Print / Share / Download / PDF + preview. Durable object storage later. (5) **Marketing / technical monitoring** — honest structural tools only (checklists, published-route inventory, version/locale/commit health) — **no fabricated traffic/ROI/analytics**. Status labels: Architecture / In Development. Public Experience freeze heroes/IA remain unchanged.
- **In scope:** Social config + footer icons + i18n; auth role claims; admin layout/pages/API; email template modules; media store; marketing checklist; site-health monitoring; `docs/ADMIN_PLATFORM.md`; D-0176 + AGENTS phase pointer; `tsc`/smoke; commit/push; Vercel production deploy.
- **Out of scope:** Invented social URLs as live profiles; fake metrics/customers/partners; SMTP/CRM; S3/durable media; Google Analytics / cookie consent; full multi-user DB; regressing D-0175 frozen public mastheads; final legal prose.
- **Implications:** Official social account URLs remain a pending owner decision for real values, but the UI shell and env wiring are authorized. Admin is a real restricted surface, not a decorative fake dashboard. See `docs/ADMIN_PLATFORM.md`.

### D-0177 — Owner always super_admin via demo operator / dev defaults

- **Date:** 2026-07-26
- **Status:** Active
- **Decision:** Owner requires a reliable path to enter `/[locale]/admin/` as `super_admin` without friction, without an unauthenticated public backdoor. (1) The Credentials demo/operator identity **always** resolves to role `super_admin`. (2) Local/dev: when `AUTH_DEMO_EMAIL` / `AUTH_DEMO_PASSWORD` are unset, documented development defaults (`admin@savencore.com` / `SavenCore-Dev-Admin!`) apply only if `NODE_ENV === "development"` — never as a silent production password. (3) Gitignored `.env.local` holds working `AUTH_SECRET` + `AUTH_DEMO_*` for immediate `npm run dev`. (4) Production (Vercel) requires explicit `AUTH_DEMO_*` (+ `AUTH_SECRET`) env; owner sets them in the Vercel project. No open `/admin` without auth.
- **In scope:** `src/admin/demo-operator.ts`; auth credentials resolution; role mapping; `.env.example`; gitignored `.env.local` for local; `docs/ADMIN_PLATFORM.md` / `docs/VERCEL_DEPLOY.md`; D-0177 + AGENTS phase pointer; local smoke; commit/push so prod can use `AUTH_DEMO_*` once set.
- **Out of scope:** Unauthenticated admin access; inventing a full user DB; committing production secrets; changing public Experience freeze (D-0175).
- **Implications:** Extends D-0163 / D-0176. Owner must set Vercel env for production email/password login; local example password must be changed for any shared or production use.

### D-0178 — Admin Platform expansion + branded email templates

- **Date:** 2026-07-26
- **Status:** Active
- **Decision:** Owner authorizes Admin Platform expansion after feedback that email template preview showed a broken logo / plain brand text, admin UI needed SAVEN polish, and working modules were missing. (1) **Branded email HTML** — email-safe PNG mark (`/brand/saven-logo-mark.png`) with absolute production URL; admin preview rewrites host to the current origin; header uses SAVEN (light) + CORE (gold `#d4a84b`) lockup matching `BrandName`, navy header, gold accent rule, tagline, site, `info@savencore.com`, © 2026. (2) **Admin UI polish** — clearer nav hierarchy, brand lockup in shell, straight-corner cards/sections, no neon. (3) **Working modules** (JSON store under `storage/admin/`, gitignored runtime writes; seed defaults in code): roles/permissions matrix; operator assignments; invitations with token links; in-app notifications; mailings compose/preview/send with SMTP when `SMTP_*` set otherwise honest **simulated** send + outbox. (4) Demo/owner Credentials operator remains always `super_admin` (D-0177). Public Experience Redesign freeze (D-0175) and public IA unchanged.
- **In scope:** Email brand chrome; admin pages/APIs/nav/i18n; permission matrix; operators/invitations/notifications/mailings stores; optional SMTP helper; `docs/ADMIN_PLATFORM.md`; D-0178 + AGENTS phase pointer; `tsc`/smoke; commit/push/deploy.
- **Out of scope:** Inventing customers/metrics/ROI; neon; durable S3/DB; fabricating SMTP delivery success without SMTP; changing public IA/heroes; final legal prose.
- **Implications:** On Vercel (read-only FS), JSON persistence may be unavailable until durable storage — UI must stay honest. SMTP is optional; simulated send must never claim real delivery.

### D-0179 — Falcon domain presence + OG share defaults

- **Date:** 2026-07-26
- **Status:** Active
- **Decision:** Owner authorizes (1) **Falcon brand presence on domain pages** — the approved SAVEN brand mark in `public/brand/saven-logo-mark.webp` (and PNG companion) is the project falcon mark; place it tastefully as a quiet seal on Layer-1 / domain visual mastheads (`HubReadablePage`), straight corners, no neon, without replacing Purpose collage or frozen heroes (D-0175). No invented stock falcon photography. (2) **Sitewide Open Graph / Twitter share defaults** — when any public URL is shared, previews must show the SAVEN falcon logo + site name **SAVEN Core**: `metadataBase` `https://www.savencore.com`, `og:site_name` = SAVEN Core, `og:title` / Twitter title from page title, `og:image` = absolute `/brand/og-default.png` (1200×630 branded canvas with mark + name), `twitter:card` = `summary_large_image`. Page-level metadata may override title/description but must keep the default share image and site name (do not substitute thematic mastheads as OG images).
- **In scope:** Domain masthead falcon seal + CSS; regenerate `public/brand/og-default.png` (+ webp); SEO metadata helper defaults; media-store seed descriptions; D-0179 + AGENTS phase pointer; smoke `/en/` meta + OG image HTTP 200; commit/push; production deploy.
- **Out of scope:** Invented falcon photography/stock; changing Purpose collage or home hero; inventing company facts; neon/glow decoration; CMS/analytics.
- **Implications:** Extends D-0169 SEO/share surface. Social crawlers cache OG images — cache bust may take time after deploy.

### D-0180 — Email templates restyled to owner example

- **Date:** 2026-07-26
- **Status:** Active
- **Decision:** Owner requires admin email / newsletter HTML templates to match the provided design example: dark navy header with falcon mark + SAVEN (white) / CORE (gold) lockup + tagline **Turning Intelligence Into Human Care** + subtle network graphic; white centered body; navy CTA with gold thin border and **straight corners**; 2×2 feature pillar grid with line icons; cream quote band with gold left rule; contact row to `info@savencore.com`; footer lockup + www.savencore.com + copyright © 2026 SAVEN Core + LinkedIn / YouTube / Email icons. Shared chrome wraps all templates; per-template content is the middle body only. Copy must stay governance-safe: use Master Spec primary/positioning statements for the quote (do not invent “reduce suffering…” mission language); replace example “Built for Scale” with honest **Built for Continuity** / foundation framing; no fake metrics or customers. Absolute image URLs under `https://www.savencore.com/brand/…` and `/email/…`; admin preview continues to rewrite hosts to the current origin.
- **In scope:** `src/content/admin/email-templates/brand.ts` + template bodies; `public/email/*` decorative icons/network; docs (`ADMIN_PLATFORM.md`, D-0180, AGENTS phase pointer); `tsc`; commit/push; production deploy.
- **Out of scope:** Inventing mission claims, metrics, or social profile URLs; neon/glow; changing public Experience freeze (D-0175); SMTP/CRM beyond existing optional send.
- **Implications:** Extends D-0176 / D-0178 branded email. Mailings that inject template HTML pick up the new chrome automatically. Owner should hard-refresh admin template preview after deploy.

### D-0181 — Footer Legal equal columns, More hub, socials bottom row

- **Date:** 2026-07-26
- **Status:** Active
- **Decision:** Owner requires the public footer Legal column to share **equal column weight** with other footer sections (same grid track, balanced visual mass). Show a **primary** Legal link set in the column; overflow destinations are reached via a localized **More** link to a structural `/[locale]/legal/` index hub that lists existing draft legal routes only (no new policy bodies, no invented legal claims). Restructure the footer for neater symmetry: intro (brand + tagline) → equal columns grid → **full-width social icons row under the grid** → copyright / utilities bar. Social icons keep `NEXT_PUBLIC_SOCIAL_*` disabled-when-unset behavior; hover/focus may use subtle brand-compatible network tints (not neon/glow). Admin footer link visibility for signed-in admins is unchanged. UI chrome strings (More, Legal hub lead, social aria) must be translated across all ten locales.
  - **In scope:** `SiteFooter`, `FooterSocials`, `site-shell.css`; `site-navigation` primary Legal + More; `published-routes` + legal index page; `src/i18n/ui/*`; D-0181 + AGENTS phase pointer; smoke `/en/` (+ brief RTL if easy); commit/push; production deploy.
  - **Out of scope:** Final legal/policy prose; inventing social profile URLs; Experience Redesign hero freeze changes; neon/glow decoration; changing Admin visibility rules.
  - **Implications:** Footer depth-map assertion treats `/legal/` hub + More as covering Legal leaf routes not listed in the primary column. Extends D-0154 structural Legal publish and D-0176 social row.

### D-0182 — Rename Applications “Home” leaf to Home Application

- **Date:** 2026-07-26
- **Status:** Active
- **Decision:** Owner requires the Applications leaf formerly labeled **Home** (page eyebrow/label + Architecture status read as “Home Architecture”) to be renamed so it is not confused with the website homepage nav **Home**. Canonical display title: **Home Application** (matches existing definition term / content key `home-application`). Route remains `/applications/home/`. Site-root nav label `nav.home` → `/` is unchanged.
  - **In scope:** `site-navigation` applications-home label; `src/i18n/ui/*` `applications-home`; EN page/entity/hub titles; locale page dictionaries; D-0182 note; commit/push/deploy when clean relative to concurrent D-0181 footer WIP.
  - **Out of scope:** URL slug change; inventing product/deployment claims; renaming the website homepage.
  - **Implications:** Footer/Applications hub cards, domain leaf label, and related-application entity title show Home Application in all ten locales.

### D-0183 — Expanded email templates + public/admin Media library

- **Date:** 2026-07-26
- **Status:** Active
- **Decision:** Owner authorizes (1) **additional English email templates** for business-life cases (event follow-up, research update, partnership follow-up, press-kit invite, care-domain newsletter variant, meeting thank-you, soft re-engagement, internal briefing), all wrapped in the D-0180 branded chrome and wired into Admin Templates + Mailings. Copy stays governance-safe (approved positioning; Research / Architecture / In Development status language only; no fake metrics, customers, or operational claims). (2) **Public Media hub** at `/[locale]/media/` — footer Company column link “Media”; marketing-polished Layer-1 visual grammar (navy/gold, falcon seal, atmospheric company masthead, straight corners); sections for Videos, Documents & presentations, Links, and Brand assets; preview / download / copy / share actions; premium empty states; content from the shared media library (seed brand assets + public uploads/links) without inventing press quotes or partner logos. (3) **Admin Media enhancement** — upload video/documents/presentations; add link entries (URL + title + type); filter by type; preview/download/copy/share/delete (mutations require editor+ / `media_upload`; seed assets not deletable); persist under `storage/admin-media/` with honest Vercel filesystem durability note; public file access for `visibility=public` items via `/api/media/[id]/`.
- **In scope:** Email template modules; media types/store/API; Admin Media UI; public Media page + CSS + content dictionaries; footer / published-routes / sitemap; `src/i18n/ui/*`; `docs/ADMIN_PLATFORM.md` + D-0183 + AGENTS phase pointer; `tsc`/smoke; commit/push; production deploy.
- **Out of scope:** Durable S3/DB media on Vercel; inventing press quotes, partner logos, operational product videos; final legal/policy prose; neon/glow; Experience Redesign hero freeze changes (D-0175).
- **Implications:** Extends D-0176 / D-0178 / D-0180 admin media and email surfaces. Public `/media/` is a marketing content library, not a legal policy. Footer Company gains Media without disturbing Legal/More/socials layout (D-0181).

### D-0184 — Admin Media simplified Add content UX

- **Date:** 2026-07-26
- **Status:** Active
- **Decision:** Owner authorizes a **simpler Admin Media upload UX** so operators can place video and SAVEN content with fewer fields and clicks. Primary flow: **Add content** with segmented control **File | Video | Link**; large drag-and-drop + browse with plain accepted types; Video tab accepts YouTube/Vimeo/direct URL (live embed preview when valid) or file upload; Link tab is title + URL + optional note with one-click save; post-add success strip with thumbnail and Copy link / Open / Delete; default titles from filename/URL; clear empty state; storage durability note demoted (not the hero); mutations remain editor+ via `media_upload` / `manage_media` matrix. Public `/media/` preview gains honest YouTube/Vimeo iframe embeds for video link entries. No invented press/partner content; no durable S3 in this phase.
- **In scope:** `MediaLibraryClient` + admin CSS; `media-embed` helper; media types/store/API optional display name; public Media preview embeds; `src/i18n/ui/*`; `docs/ADMIN_PLATFORM.md` + D-0184 + AGENTS phase pointer; `tsc`/smoke; commit/push; production deploy.
- **Out of scope:** Object storage on Vercel; inventing media catalog content; neon/glow; Experience Redesign hero freeze (D-0175).
- **Implications:** Extends D-0183 Admin Media. Same RBAC and storage honesty; UX only (plus embed preview).

### D-0185 — Admin Media traditional CMS UX + video/delete fixes

- **Date:** 2026-07-26
- **Status:** Active
- **Decision:** Owner authorizes a **durable Admin Media repair**: (1) fix video placement failures — MIME/extension inference for MP4/WebM/MOV, clear size/type/storage errors, YouTube/Vimeo embed CSP (`frame-src` + thumbnail `img-src`), inline Content-Disposition for video/image preview, honest Vercel filesystem + ~4.5 MB body limits with UI banner preferring URL embeds for large video; (2) **Delete** visible and working for non-seed upload/link rows (optimistic UI; seed/`seed-*` protected; editor+ + `manage_media`); (3) **traditional CMS navigation** — horizontal tabs Upload file / Upload video / Add link, visible Choose file inputs, upload progress, library table (Name / Type / Date / Open · Copy · Delete) with All files · Videos · Links filters. No fake success on read-only hosts; durable object storage remains a later phase.
- **In scope:** `MediaLibraryClient` + admin CSS; media types/store/API; CSP in `next.config.ts`; admin media page props; `src/i18n/ui/*`; `docs/ADMIN_PLATFORM.md` + D-0185 + AGENTS phase pointer; `tsc`; commit/push; production deploy.
- **Out of scope:** S3/Blob object storage; inventing catalog videos; public Media delete; neon/glow; Experience Redesign hero freeze (D-0175); auth/RBAC hierarchy redesign.
- **Implications:** Supersedes D-0184 UX presentation (same library, clearer CMS grammar). Production Vercel still cannot persist new library rows until object storage; local `storage/admin-media/` remains the writable path.

### D-0186 — Admin Media delete-all + upload CTAs + public Media viewer

- **Date:** 2026-07-26
- **Status:** Active
- **Decision:** Owner authorizes (1) **Delete for every library row** managed by operators with `manage_media` / editor+ — including seed/`seed-*` catalog rows — via confirm dialog; seed deletes **soft-hide** from admin + public lists (`storage/admin-media/hidden.json`) without removing `/public` brand files; upload/link rows hard-delete as before; Delete always visible when permitted (honest storage errors on Vercel); (2) **visible Upload CTAs** — navy/gold elevated panels, tab chrome, large primary buttons with subtle shadows, straight corners; (3) **public `/[locale]/media/` viewer redesign** — gallery hero context, filters All / Videos / Docs / Links, card grid with thumbnails, large play affordance for video, prominent View + Download, type badges, polished empty states. Keep honest Vercel FS durability note. No invented media titles/metrics.
- **In scope:** `MediaLibraryClient` + admin CSS; media types/store/API delete; public `MediaPage` + CSS; `src/i18n/ui/*`; `docs/ADMIN_PLATFORM.md` + D-0186 + AGENTS phase pointer; `tsc`; commit/push; production deploy.
- **Out of scope:** S3/Blob object storage; inventing catalog content; neon/glow; Experience Redesign hero freeze (D-0175); auth/RBAC hierarchy redesign.
- **Implications:** Supersedes D-0185 seed delete protection. Soft-hidden seeds can be restored later by clearing `hidden.json` (operator tooling may follow). Production mutations still require writable FS (local) until durable storage.

### D-0187 — Admin Media library filter chip contrast

- **Date:** 2026-07-26
- **Status:** Active
- **Decision:** Owner authorizes a small Admin Media UI fix: Library / Videos / Docs / Links filter chips must have clear contrast vs the library panel in both light and dark admin themes (border, distinct background, stronger text via theme ink, navy/gold active + visible hover). Straight corners; no neon. Upload CTAs from D-0186 remain unchanged.
- **In scope:** `src/components/admin/admin.css` tab/chip styles; D-0187 + brief ADMIN_PLATFORM / AGENTS pointer; commit/push; production deploy.
- **Out of scope:** Public `/media/` filters; Upload CTA redesign; storage/RBAC changes.
- **Implications:** Follow-up polish on D-0186 library chrome only.

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

### Pending list update — 2026-07-26 (D-0173)

Resolved from the list above:

- Item 4 — Contact emails / form destinations — resolved for the public channel by D-0173 (`info@savencore.com`, `/contact/` mailto form). SMTP/CRM remains future work. Named leadership bios remain unpublished; anonymous professional team narrative on Foundation is authorized.
