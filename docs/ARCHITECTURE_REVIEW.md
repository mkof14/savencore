# SAVEN Core — Architecture Review (Phase 0.5)

**Review date:** 2026-07-24  
**Review posture:** CTO · Principal Software Architect · UX Architect · Information Architect · Engineering Director · Enterprise Solution Architect  
**Scope:** Critical review of Phase 0 governance documents only  
**Constraint:** This review does **not** modify existing specification files, invent company facts, initialize application code, or authorize implementation.

**Documents reviewed:**

- `docs/SAVEN_CORE_MASTER_SPEC.md`
- `docs/PROJECT_RULES.md`
- `docs/INFORMATION_ARCHITECTURE.md`
- `docs/CONTENT_MODEL.md`
- `docs/DESIGN_PRINCIPLES.md`
- `docs/LOCALIZATION_SPEC.md`
- `docs/TRUST_LEGAL_STRUCTURE.md`
- `docs/ROADMAP_CONTENT_MODEL.md`
- `docs/DECISIONS_LOG.md`
- `AGENTS.md`

---

## Executive Verdict

Phase 0 is unusually strong for a pre-implementation foundation: purpose, claim control, status honesty, localization intent, and agent governance are clear and coherent.

The architecture is directionally sound for a serious international research/engineering organization website. It is **not yet implementation-ready**. The main gaps are decision gaps, not philosophy gaps: home narrative structure, nav density, content storage strategy, access control for restricted/investor surfaces, search, performance model, design tokens, and operational localization sequencing.

Proceeding to scaffold Next.js before resolving the Missing Decisions section would create expensive rework risk.

---

## 1. Strengths

### 1.1 Governance and truth control

- Clear source-of-truth hierarchy (Master Spec → derived docs → Decisions Log supersession).
- Explicit invention prohibitions reduce hallucinated corporate fiction during agent-driven development.
- Phase protocol (pre-state / post-report / no silent architecture changes) is operationally enforceable.
- Append-only Decisions Log is appropriate for long-lived enterprise change control.
- `AGENTS.md` correctly gates future coding agents before code exists.

### 1.2 Positioning and claim safety

- Human purpose is primary; AI/robotics are framed as tools.
- Foundation sequence (BioMath Life → BioMath Core → SAVEN → SAVEN Core) prevents fragmented “unrelated project” storytelling.
- Development status taxonomy is credible and prevents premature productization language.
- Trust/legal docs correctly separate structure from final legal prose.
- Preferred trust language and disallowed absolutes are practical editorial controls.

### 1.3 Information and content architecture foundations

- Primary nav, utility nav, and footer columns are specified with enough concreteness to implement consistently.
- Content model introduces typed entities (`FoundationNode`, `System`, `Lab`, `ApplicationArea`, `RoadmapItem`, etc.) rather than one amorphous page blob.
- Public/restricted field separation is declared early — essential for investor/internal expansion later.
- Application class (`primary_human` vs `future_extension`) encodes a strategic ordering rule in data, not only in prose.

### 1.4 Internationalization and accessibility intent

- Ten locales and full RTL requirements are specified before framework setup.
- Translation/review status + English fallback is a mature publishing model.
- WCAG 2.2 AA is named as target, with contrast/focus/reflow expectations.
- Mixed-direction technical content rules anticipate real bilingual engineering pages.

### 1.5 Design risk awareness

- Explicit anti-patterns against generic AI-startup aesthetics are unusually clear.
- Straight-corner / no-card-default / restrained motion rules reduce template drift.
- Hero budget and brand-test criteria are strong UX architecture controls.

### 1.6 Roadmap integrity

- Non-guarantee framing, change history, and restricted details model are appropriate for a five-year horizon site.
- Refusal to seed invented milestones in Phase 0 is correct.

---

## 2. Risks

### 2.1 Strategic / product communication risks

| Risk | Why it matters |
|------|----------------|
| Home page structure is undefined | 20-second comprehension goals cannot be validated without a home composition contract. |
| Broad taxonomy published early | Technology + Systems + Labs + Applications can read as a product catalog if page templates are repetitive. |
| Future extensions (Security, Defense, Industry) adjacent to human care contexts | Without careful framing, visitors may misread company purpose or assume operational offerings. |
| “Internal Future Lab” naming | May confuse external visitors; unclear public vs internal boundary. |
| Status defaults everywhere | If every page says “In Development,” status can become visual noise or credibility theater. |

### 2.2 Operational risks

| Risk | Why it matters |
|------|----------------|
| Ten languages from day one | Content, legal, and review capacity may not keep pace; English quality could be diluted by localization pressure. |
| Large legal surface area while still draft | Publishing many draft legal pages can itself create trust/legal exposure if banners are weak or ignored. |
| Footer scale | High maintenance cost; stale links become a credibility issue. |
| No CMS/content-ops model yet | Editors, translators, approvers, and release process are logical roles only. |
| Restricted content lacks access architecture | `visibility: restricted` without authz model invites either leakage or dead fields. |

### 2.3 Delivery risks

| Risk | Why it matters |
|------|----------------|
| 10 top-level nav items | Hard on mobile; increases IA cognitive load for first-time visitors. |
| Duplicate/ambiguous routes | `/search` vs `/resources/search`; partnerships under `/company` and `/work-with-saven`; accessibility dual paths. |
| Free-form `sectionType` strings | Will fragment templates and query logic over time. |
| Overlap between generic `Page` and specialized types | Unclear when to use which; risk of dual sources of truth. |
| Design tokens deferred | Implementation agents may fill the vacuum with generic defaults despite written prohibitions. |

### 2.4 Compliance / trust risks

| Risk | Why it matters |
|------|----------------|
| Hospital/rehab/emergency application pages | High risk of implied clinical or emergency-service claims even with disclaimers. |
| Cookie/analytics vendors undecided | Consent architecture cannot be finalized; retrofit is costly. |
| Regional privacy rights pages without jurisdiction confirmation | Structural placeholders can be mistaken for asserted applicability. |
| Social links empty | Acceptable now; long-term empty social row looks unfinished if left visible. |

---

## 3. Missing Decisions

Decisions that should be resolved **before meaningful implementation** (beyond Decisions Log pending items). Grouped by urgency.

### 3.1 Must decide before scaffolding

1. **Phase 1 authorization and exact scope** — what is in/out of the first build slice.
2. **Root locale strategy** — `/` → `/en/` vs English at `/` + prefixed locales.
3. **Content storage for Phase 1–2** — local structured files vs immediate CMS vs hybrid; migration path to headless CMS.
4. **Rendering model** — SSG/ISR/SSR defaults per page class (marketing, legal, research index, roadmap).
5. **Design token package** — color system, type scale, spacing scale, motion tokens, corner policy encoded as tokens (not only prose).
6. **Font licensing and multilingual font stack** — Latin + CJK + Arabic + Hebrew strategy.
7. **Home page information design** — section inventory that satisfies the 20-second goals without catalog sprawl.
8. **Primary navigation density strategy** — keep 10 items, group into fewer top-level hubs, or progressive disclosure pattern for mobile.
9. **Canonical route map cleanup** — resolve search, accessibility, and partnerships aliasing before route code hardens.
10. **Repository/app boundaries** — monorepo vs single app; whether docs site / investor portal / robotics docs share one Next.js app.

### 3.2 Must decide before public content scale-up

11. **Localization sequencing** — which locales ship at launch vs architecture-ready-but-fallback-to-English.
12. **Translation vendor/process, SLAs, glossary ownership** — especially for SAVEN/BioMath terminology.
13. **Stale-translation policy** — serve last approved locale vs hard fallback to English by content class.
14. **Localized slug policy** — permanently English slugs vs later localized slugs + redirects.
15. **Editorial workflow tooling** — who approves status changes, legal drafts, research posts, roadmap updates.
16. **Media production pipeline** — diagram standards, scenario photography rules, conceptual-vs-real labeling.
17. **Search architecture** — client index, hosted search, locale-aware ranking, exclusion of restricted/draft content.
18. **Analytics + consent vendor selection** and data retention posture.
19. **Form backend strategy** — secure contact/investor/security forms, spam controls, PII handling.
20. **Error/empty-state content policy** — especially for Labs/Systems with little approved copy.

### 3.3 Must decide before restricted / investor / documentation expansion

21. **Access control model** — public site only vs authenticated investor portal vs gated docs; identity provider.
22. **Information classification scheme** beyond binary public/restricted (e.g., public / partner / investor / internal).
23. **Investor portal IA** — whether `/investors` remains brochure-ware or becomes a secured area with document rooms.
24. **Robotics/technical documentation strategy** — marketing pages vs docs platform (versioning, API refs, hardware docs).
25. **Research publishing model** — article schema extensions (authors, affiliations, DOI/external refs, embargo).
26. **Roadmap baseline year and publication cadence**.
27. **System Status page semantics** — aggregated status board vs simple index; update ownership.
28. **Cache invalidation / preview / staging environments**.

### 3.4 Must decide before legal/public launch

29. **Legal entity name and jurisdiction**.
30. **Approved legal texts** (or explicit decision to keep pages noindex/draft-only until counsel signs off).
31. **Whether draft legal pages are publicly crawlable**.
32. **Contact channels** (general, media, investor, security).
33. **Official social account URLs** and whether empty networks are hidden.
34. **Leadership publication policy**.
35. **Trademark list** (only confirmed marks).
36. **Medical/research disclaimer final wording** and required placement matrix by page type.
37. **Security vulnerability intake process** (even if email TBD, process ownership must be clear).
38. **Cookie category inventory** based on actual implemented technologies.

### 3.5 Design-system decisions still missing

39. **Grid definition** — columns, breakpoints, modular unit.
40. **Component inventory** — what exists besides “no cards by default.”
41. **Diagram design language** — notation, color meaning, RTL diagram variants.
42. **Status visual language** — non-color-only encoding that does not look like product badges/pills.
43. **Dark-section usage criteria** — when dark is allowed so it does not become default “tech aesthetic.”
44. **Motion specification** — the 2–3 intentional motions named and scoped.
45. **Iconography policy** — custom vs library; directionality rules.

---

## 4. Architecture Risks

### 4.1 Navigation

**Risk level: High**

- Ten primary items plus large footer creates dual navigation systems that can diverge.
- Purpose / Foundation / Technology / Systems / Labs are conceptually adjacent; users may not know which door to open.
- Investors as top-level nav elevates one audience equal to Purpose/Foundation; may be intentional, but crowds general-public comprehension.
- Mobile nav for 10 locales × deep trees will be heavy without a disclosure strategy.
- Utility Search/Language/Contact are correct, but Language as control vs `/resources/language` page is unresolved.

**Failure mode:** Visitors bounce after scanning many peer categories without forming the foundation story.

### 4.2 Content model

**Risk level: High (if implemented naively)**

- Strong entity types exist, but relationship rules are under-specified (cardinality, required cross-links, orphan prevention).
- `Page` + specialized types can duplicate the same URL’s content source.
- `sectionType` as unconstrained string will produce template sprawl.
- `ResearchItem` is too thin for hundreds of articles (taxonomy, topics, series, related systems, embargo, asset attachments).
- No explicit model for documentation sets, versioned technical manuals, or downloadable investor artifacts.
- `accessClass` is a free string placeholder — insufficient for enterprise authz.
- No content versioning/publishing snapshot model for legal and roadmap history beyond roadmap change events.

**Failure mode:** Early file-based schemas harden around marketing pages and cannot absorb research/docs/investor growth without migration.

### 4.3 Localization

**Risk level: High**

- Architecture-ready for 10 locales is correct; launching all 10 with approved content is a different problem.
- Fallback-to-English inside a non-English locale URL can confuse users and SEO if not carefully signaled.
- English slugs in Arabic/Hebrew/CJK locales are stable but may hurt local usability/SEO expectations.
- Legal translation burden is extreme; unapproved legal locales are especially sensitive.
- next-intl is planned, but message catalogs vs CMS-localized records vs hybrid is undecided — major implementation fork.

**Failure mode:** Locale routes exist, but most locales are English shells; RTL is incomplete in diagrams/motion; SEO hreflang points to thin pages.

### 4.4 Future scalability

**Risk level: Medium–High**

- Current IA is a marketing-site taxonomy, not yet a platform taxonomy.
- No namespace strategy for future products (collision risk with `/systems/...` and `/applications/...`).
- No docs subdomain/subpath strategy (`/docs`, `docs.savencore.com`, etc.).
- Investor portal and robotics documentation are named as future needs in this review’s scalability test, but not architected in Phase 0 docs.
- Footer-as-sitemap will not scale to 500+ pages; needs automated generation from content graph.

**Failure mode:** New products bolted on as more top-level peers; site becomes a flat encyclopedia.

### 4.5 Performance

**Risk level: Medium (under-specified)**

- No performance budget (LCP/INP/CLS), image strategy, font loading strategy, or JS budget.
- Highly visual + diagram-heavy + multilingual + large footer increases weight risk.
- Roadmap/research indexes can become expensive client filters if not server-paginated.
- Ten locale builds multiply static generation cost; ISR/on-demand revalidation policy missing.
- Search implementation choice can dominate performance and cost.

**Failure mode:** Beautiful architecture pages with heavy client islands and unoptimized media.

### 4.6 Accessibility

**Risk level: Medium**

- Target (WCAG 2.2 AA) is correct; conformance process is not defined (audit cadence, ownership, automated CI checks).
- Complex diagrams and architecture visuals are the largest likely AA failure point.
- Status communication must not rely on color alone — visual system not yet designed.
- RTL + rich interactive components (menus, carousels, cookie UI) are common regression hotspots.
- Large typography and whitespace help; custom fonts and dark sections can harm contrast if tokens are weak.

**Failure mode:** Marketing pages pass; systems/diagrams/cookie/language switchers fail.

### 4.7 SEO

**Risk level: Medium–High**

- hreflang + x-default decision still open.
- Draft legal pages crawlability undecided.
- Thin pages across many taxonomy leaves risk doorway-like structures if content is sparse.
- English-only bodies under locale URLs need canonical/fallback signaling rules.
- No sitemap segmentation strategy (marketing vs research vs legal).
- No structured data policy (Organization, Article, Breadcrumb — with claim-safety constraints).
- “System Status” and roadmap pages need careful indexing strategy to avoid implying product availability.

**Failure mode:** Large index of low-substance pages dilutes authority; locale duplicates confuse ranking.

### 4.8 Maintainability

**Risk level: Medium–High**

- Excellent prose governance, but insufficient engineering architecture docs (module boundaries, content SDK, CI, preview).
- Agent rules prevent drift, yet without tokens/components, visual drift remains likely.
- Huge footer and overlapping taxonomies increase editorial choreography cost.
- Decisions Log is strong; there is no ADR set for technical choices (rendering, CMS, auth, search).
- Simulation appears in Technology IA but not footer TECHNOLOGY list — small inconsistency foreshadows larger sync issues between nav surfaces.

**Failure mode:** Specs remain pristine while implementation accumulates one-off exceptions.

---

## 5. Information Architecture

### 5.1 Is the hierarchy logical?

**Mostly yes, with structural tension.**

Logical strengths:

- Purpose → Foundation → Technology/Systems → Applications → Research/Roadmap is a coherent enterprise narrative.
- Separating Foundation from Company correctly treats origin/tech lineage as more than “About.”
- Primary human applications before future extensions is strategically correct and data-backed.
- Legal/resources parked outside primary nav is appropriate.

Structural tensions:

1. **Technology vs Systems vs Labs** overlap. Visitors may ask: “Is SAVEN AI a technology, a system, or both?” The docs allow related links but do not define the distinguishing rule sharply enough for page templates.
2. **Purpose vs Foundation vs Company/About** can feel redundant if copy is not sharply scoped.
3. **Investors at top level** is logical for fundraising audiences, but competes with comprehension for general visitors.
4. **Work with SAVEN** exists in footer more than in primary IA — good for de-cluttering nav, but alias ambiguity remains.
5. **Home is underspecified**, so the hierarchy’s success depends on an undefined entry experience.

### 5.2 Would a first-time visitor understand the company?

**Potentially yes — but not guaranteed by current IA alone.**

The Master Spec’s 20-second goals are excellent. However:

- Those goals are assigned to Purpose and Home, while Home content structure is deferred.
- A first-time visitor landing on Technology, Systems, or a future-extension Application page could misread SAVEN Core as a robotics/AI vendor.
- The foundation sequence is clear **if reached**; it is not yet guaranteed in the default pathing from every entry point.
- Status honesty helps credibility, but dense taxonomy can obscure the human purpose.

**IA judgment:** Hierarchy is executive-logical; it is not yet visitor-proven. The site needs a stronger “comprehension spine” (Home/Purpose/Foundation cross-linking rules) before leaf-page production.

### 5.3 Specific IA defects to resolve (recommendations deferred to §9)

- Duplicate search/accessibility/partnerships paths.
- Footer application label “Emergency Assistance” vs page “Emergency and Remote Assistance.”
- Footer omits some primary applications and some technology areas (e.g., Simulation) while primary IA includes them.
- No audience pathways (Family / Healthcare / Engineer / Investor) even though audiences are named in the Master Spec.
- No defined canonical “start here” journey for each audience.

---

## 6. Engineering Risks

Items likely to force expensive refactoring if ignored:

1. **Hardcoding 10 nav items and footer columns** without generating from content/config — every taxonomy change becomes a multi-file UI edit.
2. **Implementing pages before a content SDK** — components fetch ad hoc MDX/JSON shapes; CMS migration later rewrites everything.
3. **Locale segment + English slug assumptions** baked into components — costly if localized slugs are later approved.
4. **Binary public/restricted without policy enforcement layer** — restricted fields accidentally shipped in RSC payloads, sitemaps, or search indexes.
5. **Client-side roadmap/research filtering as primary UX** — fails at hundreds of articles; needs server query/pagination from the start.
6. **Diagrams as static images only** — no accessible text equivalent model; rebuild required for AA and RTL.
7. **Cookie consent bolted on after analytics** — typical retrofit tax; decide before instrumentation.
8. **One template for all taxonomy leaves** — creates generic AI-site sameness and later a template explosion.
9. **Investor portal inside the same route group without auth boundaries** — messy split later; decide app/route isolation early.
10. **No preview/staging content mode** — editors will pressure production drafts; lifecycle fields won’t be enough without environment design.
11. **StatusBlock required broadly** — may force awkward UX on pages that should be narrative-first; needs presentation rules, not only schema requirements.
12. **Absence of technical ADRs** — stack choices (next-intl patterns, content layer, search, auth) will be re-litigated mid-build.

---

## 7. Visual Risks

Ways this can accidentally become a generic AI website despite strong principles:

1. **Token vacuum** — without approved color/type/motion tokens, implementers fall back to popular AI aesthetics.
2. **Overuse of dark “tech” sections** — principles allow them; without quotas/criteria they become the brand.
3. **Status chips / glowing indicators** — status system can visually mutate into neon badges.
4. **Diagrams that look like startup infographics** — abstract nodes/gradients instead of engineering-legible architecture.
5. **Repetitive leaf templates** — Technology/Systems/Labs/Applications all looking identical (“hero + 3 feature blocks”).
6. **Stock assistance imagery** — even without robots, generic hospital/home stock can feel template-like.
7. **Motion for credibility theater** — subtle particle/line animations creep in to “feel advanced.”
8. **Card relapse** — interaction containers gradually become a card system sitewide.
9. **Purple/blue gradient accent defaults** from UI libraries.
10. **Icon-row and logo-cloud habits** on Company/Investors pages if content is thin.
11. **AI product metaphor visuals** for SAVEN AI (brains, spheres, constellations) violating the human-purpose framing.
12. **Straight corners alone are not differentiation** — orthogonal UI can still look like a generic enterprise design system if typography/imagery are weak.

---

## 8. Long-Term Scalability

Assessment against future load:

### 8.1 500+ pages

**Partially ready.** Taxonomy hubs and typed content can scale if:

- navigation becomes config/content-driven,
- footer stops being manually exhaustive,
- search and sitemaps are automated,
- leaf templates are diversified by content type.

**Not ready if** every new page requires hand-edited nav/footer and unique one-off routes.

### 8.2 Hundreds of research articles

**Not ready yet.** `ResearchItem` lacks:

- topic taxonomy,
- series/collections,
- pagination/filtering model,
- author/contributor model (even if anonymous/org-attributed),
- related-system linking requirements,
- embargo/publish scheduling,
- citation/external reference fields beyond a single URL,
- asset attachments and figure handling.

Research can grow, but the schema and IA (`/research/publications` etc.) need expansion before volume arrives.

### 8.3 Investor portal

**Not ready.** Current `/investors` + contact is brochure-grade. Missing:

- authentication/authorization,
- document vault content type,
- NDA/access states,
- audit logging,
- separation from public SEO index,
- stronger classification than `restricted` notes on public CMS records.

This should be treated as a distinct capability domain, even if hosted in the same monorepo.

### 8.4 Robotics documentation

**Not ready.** Marketing system pages are not a substitute for:

- versioned docs,
- hardware/software compatibility matrices,
- interface specifications,
- release notes,
- deep linking from Systems → Docs,
- possibly separate docs IA and search index.

Recommend planning a docs surface early so `/systems/saven-robotics-interface` does not become an overflowing pseudo-manual.

### 8.5 Future products

**At risk without a product namespace strategy.**  
If future products appear, the current top-level IA may force either:

- more primary nav clutter, or
- burying products under Systems/Applications inconsistently.

Need a future-safe rule: what qualifies as Foundation vs System vs Product vs Application extension, and where product sites live.

### 8.6 Scalability verdict

The Phase 0 architecture is a **strong public-site foundation** and a **weak platform foundation**. It will work for a controlled, high-quality marketing/research presence. It will not, without further decisions, gracefully absorb investor portals, large research libraries, and robotics documentation simultaneously.

---

## 9. Recommendations

Recommendations only. No specification rewrites performed in this phase.

### 9.1 Before Phase 1 authorization

1. Approve a **narrow Phase 1 slice** (for example: app shell, design tokens, locale routing, Home/Purpose/Foundation spine) rather than full taxonomy buildout.
2. Resolve **root locale**, **canonical route aliases**, and **content storage approach** first.
3. Write a short **Home composition contract** that maps each 20-second comprehension goal to a concrete home module — without inventing unverified company facts.
4. Define a **nav density strategy for mobile** (keep 10 vs grouped hubs) before coding the header.
5. Create a **technical ADR track** alongside Decisions Log for engineering choices (CMS, rendering, search, auth, consent).

### 9.2 Information architecture

6. Publish a one-page **distinguishing rule** for Technology vs Systems vs Labs (example direction: capability domain vs integrated build vs experimental venue) — owner-approved, not agent-invented detail.
7. Define **audience entry paths** (public/family, healthcare, engineering, investor) as guided journeys over the existing taxonomy, without replacing Purpose-first nav unless owner chooses to.
8. Make footer generation **content-driven** and accept that footer is a prioritized subset, not a second full sitemap.
9. Normalize naming differences (Emergency Assistance vs Emergency and Remote Assistance) in a logged decision.
10. Keep future-extension applications findable but visually/structurally secondary everywhere, including cards-free listing patterns.

### 9.3 Content platform

11. Freeze a **sectionType enum** before implementation.
12. Choose one canonical content source per URL (avoid dual `Page` + specialized entity publishing to same slug).
13. Extend research schema before the second dozen articles, not after the hundredth.
14. Add an explicit **Document / DocSet / DocVersion** model before robotics documentation begins.
15. Replace binary visibility with a small **classification enum** once investor/partner content is real.
16. Enforce restricted-field stripping in a single content serialization boundary (one SDK function, not per-page discipline).

### 9.4 Localization

17. Make architecture support all 10 locales immediately, but **sequence public launch locales** (e.g., English first, then priority set) unless owner explicitly wants simultaneous multilingual launch.
18. Decide and document user-visible behavior when locale URL serves English fallback (banner vs subtle language note vs none).
19. Build a **terminology glossary** for translators before first non-English batch.
20. Treat legal localization as a separate gated workstream from marketing localization.

### 9.5 Design system

21. Approve design tokens and multilingual fonts before component coding.
22. Name the **2–3 intentional motions** and ban all others by default.
23. Define status presentation that is typographic/structural, not glow/pill/badge-led.
24. Create a diagram language guide (including RTL and accessible long descriptions).
25. Add a “generic AI drift” review checklist to every UI phase gate.

### 9.6 Engineering / platform

26. Establish performance budgets and image/font rules in the first engineering phase.
27. Decide search technology before research volume arrives.
28. Design consent + analytics before adding tracking.
29. Isolate future investor portal and docs as bounded modules/apps even if deferred.
30. Add CI checks later for a11y, locale route integrity, noindex rules for drafts, and forbidden claim phrases.

### 9.7 Trust and launch safety

31. Decide whether draft legal pages are public, noindex, or unpublished until counsel approval.
32. Finalize placement matrix for medical/research/roadmap disclaimers by page type.
33. Hide social networks with no URL rather than showing dead icons.
34. Keep claim linting (prohibited words/absolutes) as an editorial gate in content CI.

### 9.8 Process

35. Do not begin leaf-page mass production until the Home/Purpose/Foundation spine is approved in content and design.
36. Require owner decisions from §3.1 before Next.js initialization.
37. Keep Phase gates small; use Decisions Log entries to authorize each expansion of taxonomy surface area.

---

## 10. Review Conclusion

Phase 0 successfully established **what SAVEN Core is**, **what the site must never claim**, and **how agents must behave**. That is the hardest and most valuable layer.

Phase 0.5 finds the architecture **credible but incomplete**: strong governance and positioning; incomplete platform decisions for scale, access, search, performance, and design-system concreteness; IA that is logical for executives yet still risky for first-time visitor comprehension without a defined home spine.

**Stop condition honored:** no application code, no dependency installation, no Next.js initialization, no modifications to existing Phase 0 specification files, and no invented company information.

**Next authorized step (recommendation only):** owner reviews this document, resolves §3.1 Missing Decisions, then explicitly authorizes a bounded Phase 1 — not a full-site build.
