# SAVEN Core — Official Website Assignment

**Document status:** Active assignment (owner-approved direction, 2026-07-25)  
**Authority:** Owner answers in `DECISIONS_LOG.md` **D-0130**–**D-0135** (site direction, flagship scopes, two-layer UX, Phase 1 home, header emptied / homepage clarity-only, hero imagery + essence)  
**Canonical language:** English (United States)  
**Site:** `https://www.savencore.com`  
**Scope of this document:** Executive assignment + information architecture for agents.  
**Homepage as-built:** Clarity-only first screen (D-0134). A+B inventory lives off-home via footer + flagship pages.

---

## 1. Mission of the site

The public website is an **engineering and technology showcase** for SAVEN Core — for general visitors and investors.

It must make clear, within seconds:

1. What SAVEN Core is building (AI, robotics, autonomous systems, and engineering technologies for the physical world).
2. Which **labs, interfaces, and workstreams** exist (honest inventory from approved taxonomy — no invented product lines).
3. That work is **in development**, presented with confidence and precision — not as a WIP apology, and not as commercial deployment.

Human care remains the enduring purpose and closing energy (**Turning Intelligence Into Human Care**). It is **not** the sole homepage identity or film/story form for the whole brand.

---

## 2. Audience

| Audience | Need | Site response |
|----------|------|----------------|
| **Public** | Understand the company in seconds; explore labs / systems / technology when ready | Clear first screen; full map + A+B paths via footer / section pages |
| **Investors** | Structural place to learn posture and request further material — without invented metrics | Dedicated **Investors** section/path (brochure structure; no auth portal in this assignment) |

Do not invent partners, customers, traction, valuations, patents, regulatory approvals, or “already in hospitals / commercially deployed” claims.

---

## 2.1 Two-layer experience model (D-0132)

The site must feel like a **confident, simple, large-company product surface** — not a documentation manual, instruction wiki, or engineering dump for every visitor.

| Layer | Who | What they see | Where it lives |
|-------|-----|---------------|----------------|
| **Layer 1 — everyone** | Ordinary visitors, first-time public, investors at a glance | Hero **Intelligence for the Physical World.** + one breath + what we build + tagline — comprehension in seconds | Homepage (clarity only), logo + short important-hubs header (D-0153), flagship pages also in footer |
| **Layer 2 — optional depth** | Engineers, digging investors, specialists who choose to go deeper | Existing published Technology / Systems / Labs / Applications / Trust / Research / Company / Legal pages | **Footer = full site map** (primary discovery). Header holds hubs only — not the leaf mega-menu (D-0153). |

**Rules:**

1. **Keep all existing technical pages** that are already built. Do not delete routes or page components to “simplify.”
2. **Place technical destinations in the proper footer columns by domain** so depth is available without crowding Layer 1.
3. **Do not load ordinary visitors with technical information** on the first screen or as the site’s primary story.
4. Technical/engineering content is **for those who want it** — never scare people; never make the site feel like a docs wiki.
5. **Header** carries logo + a short list of important Layer-1 hubs (D-0153; supersedes D-0134 empty-header rule). Do not restore a docs-style mega-menu of all leaves.
6. Footer visitor links are **published destinations only** — no Coming Soon badges in the public footer. Legal column restored with draft framing (D-0154).
7. Priorities: simplicity, convenience, understanding, simple navigation, strong UX/UI.

**Homepage note (D-0134 / D-0136–D-0139):** First screen = clarity + living **smooth photoreal video** of multi-robot assistive help (human + manipulator + mobile service + optional third device cue; morph/crossfade motion, not jump-cut slideshow or ken-burns-only — not labeled wireframe diagrams, not inventory, not fake deployment claims). Section 2 = simple tangible essence scenes (Assist / Move / Sense / Support). A+B and all technical inventory live **off-home** (footer + section pages). **One Human Hour is not the public default identity.**

**As-built footer (D-0181–D-0207 / D-0202):** Technology · **Architecture** (Systems leaves + SAVEN Robotics Interface; routes stay `/systems/*`) · Labs · Applications · Trust · Research (Overview + Areas + Notes) · Company (About → `/foundation/`, Mission → `/purpose/`, Investors, Investor Contact, Media → `/media/`, Contact → `/contact/`, Roadmap → `/roadmap/`) · Resources (FAQ → `/faq/`, Report a Security Issue) · Legal (primary links + More → `/legal/` hub; draft framing). Desktop layout: **five equal columns** with section groups stacked inside columns — (1) Technology + Architecture; (2) Labs + Applications; (3) Trust + Research; (4) Company + Resources; (5) Legal (D-0205; supersedes D-0199 / D-0200; spacing/type refine D-0206; one-row from ≥720px D-0207). Accordion on narrow. Theme chrome (D-0207): light cool off-white (`#f5f5f7` / `#fafafb`); dark soft gray-blue field (`#1c1f26` / `#252830`) — not pure white / deep template navy. Header hubs (≤7): Labs, **Systems**, Applications, Technology, Research, Trust, Investors (Purpose remains via footer Mission).

---

## 3. First 10 seconds

### Brand

- Official names: **SAVEN Core**, **SAVEN Robotics Lab**, lockup as in logo (`public/brand/`).
- Tagline (retain): **Turning Intelligence Into Human Care**
- Hero line (first screen): **Intelligence for the Physical World.**

### Canonical first-second copy (owner)

| Layer | Text |
|-------|------|
| **Primary line** | Intelligence for the Physical World. |
| **Supporting** | SAVEN Core develops intelligent systems that connect artificial intelligence with the physical world, building technologies for autonomous physical systems. |
| **Explanation** | SAVEN Core applies and advances AI alongside robotics, autonomous systems and engineering technologies designed to operate in the real world. |

### Comprehension test

A visitor should leave the first viewport knowing: *this is an engineering company building intelligent systems for the physical world* — not that the site is a care-film or a documentation wiki. Depth exists in Layer 2 (footer / intentional dig); it must not dominate Layer 1.

---

## 4. Homepage structure (A + B)

**Model:** A + B (not film/story as the whole site identity).

### A — Showcase of directions

A clear set of direction cards / panels for existing workstreams (labs, interfaces, technology domains, research). Each item: short name, one-line purpose, status (Research / Architecture / In Development), link into the section.

### B — Flagship paths

Prominent paths into the three primary workstreams (canonical scopes in §5.0):

1. **SAVEN Robotics Lab** → proposed destination when published (see §5.0.4)
2. **SAVEN Robotics Interface** → proposed destination when published (see §5.0.4)
3. **Internal Future Lab** → proposed destination when published (see §5.0.4)
4. Optional engineering deep path already strong in repo: **Technology** / Human Data Model (flagship engineering reference per D-0107) — only if it does not crowd the three above

### Homepage region order (as-built, D-0135 / D-0150 / D-0194)

1. **Hero** — brand, hero line, one breath sentence, three build pillars, tagline, footer cue, plus living atmosphere + thematic illustration plane
2. **Care living carousel** — one care-focused living band (hospitals / home / family / emergency / …)
3. **Flagship Gateway** — compact paths: Robotics Lab, Robotics Interface, Internal Future Lab (+ optional Investors) with honest statuses
4. **Closing** — SAVEN meaning band
5. **Footer** — complete published site map by domain

A + B remain valid for section pages; Flagship Gateway is the authorized compact home B path (D-0194) — still not a first-viewport inventory dump.

### Out of homepage primacy

- Full **One Human Hour** scroll-story as the entire homepage identity (see §9).
- Knowledge Passport / metadata chrome in the first viewport (D-0127 still applies).
- Stats, fake photography claims, partner logo clouds, deployment claims.
- Template / primitive node diagrams as the hero visual.
- Directions grids, flagship card inventories, or technical lists on the first screen.

---

## 5. Top-level IA / sections

### 5.0 Primary workstreams — owner canonical scopes (D-0131)

These three are the **flagship A+B workstreams**. English below is the canonical public brief (translated from owner Russian source). Components listed under Interface are **possible components**, not shipped products.

**Bilingual note (source):** Robotics Lab = основное инженерное направление; Interface = система взаимодействия с роботами и автономными машинами; Future Lab = исследовательская среда SAVEN Core.

---

#### 5.0.1 SAVEN Robotics Lab

| Field | Value |
|-------|--------|
| **Role** | Primary engineering direction |
| **Public status** | **In Development** |
| **Kind** | Lab |

**Focus areas (tasks):**

- Robotic systems
- Autonomous mobility / autonomous movement
- Robot control
- Sensors and machine perception
- Human–machine interaction

---

#### 5.0.2 SAVEN Robotics Interface

| Field | Value |
|-------|--------|
| **Role** | Shared interface layer for communication between diverse robots/devices and SAVEN, and for coordinating shared/common tasks under one control and communication system (human oversight preserved) |
| **Public status** | **In Development** (architecture / interface workstream — not a commercial product) |
| **Kind** | System / interface |

**Possible components** (inventory of intended capability areas — **not** published product modules, **not** Operational):

- Command and control
- Visual interface
- Mission planning
- Real-time telemetry
- Fleet management
- Human–robot interaction
- Remote operations
- AI-assisted decision support
- System diagnostics
- Role-based access
- Digital mission environment

Do **not** present any of the above as shipped features, SKUs, or deployed capabilities.

---

#### 5.0.3 Internal Future Lab

| Field | Value |
|-------|--------|
| **Role** | Research environment of SAVEN Core |
| **Public status** | **Research** |
| **Kind** | Lab (research) |

**Directions:**

- Prospective / advanced forms of robotics
- Embodied AI
- Autonomous decision-making
- Human–machine interaction
- New sensor systems
- Modeling of physical environments
- Robotics for medicine
- Technologies for future infrastructure
- Non-standard engineering concepts

---

#### 5.0.4 Route map — as-built (Scheme A published; D-0133 / D-0194)

**As-built today** (`src/navigation/published-routes.ts` / `site-navigation.ts`):

| Workstream | In primary nav? | Published leaf? | Live routes |
|------------|-----------------|-----------------|-------------|
| SAVEN Robotics Lab | Via **Labs** hub | **Yes** | `/labs/`, `/labs/saven-robotics-lab/` |
| SAVEN Robotics Interface | Via **Systems** hub + Architecture footer | **Yes** | `/systems/saven-robotics-interface/` (distinct from `/systems/robotics-layer/`) |
| Internal Future Lab | Via **Labs** hub | **Yes** | `/labs/internal-future-lab/` |

**Also published (D-0194 / D-0202):** `/roadmap/` (Direction — no fake years), `/research/areas/`, `/research/notes/`, `/investors/contact/`, `/faq/`, `/resources/report-a-security-issue/`, `/media/`, `/contact/`, `/company/about/` → redirect to `/foundation/`.

**Scheme A is the live scheme** (IA / Master Spec slugs). Schemes B/C remain historical alternatives only — do not implement alternate short URLs without a new decision.

---

### 5.1 Honest inventory — workstreams already in the repo (do not invent new lines)

**From Master Spec / `INFORMATION_ARCHITECTURE.md` (approved taxonomy):**

| Kind | Names |
|------|--------|
| **Labs** | SAVEN Robotics Lab; Internal Future Lab |
| **Systems** | SAVEN Robotics Interface; SAVEN Systems Architecture; SAVEN AI; SAVEN Drone Platform |
| **Foundation** | BioMath Life → BioMath Core → SAVEN → SAVEN Core |
| **Technology areas (IA)** | Human Data and Intelligence; Artificial Intelligence; Robotics; Autonomous Systems; Machine Perception; Human-Machine Interaction; Simulation; Safety Architecture; Privacy Architecture |
| **Applications** | Primary human contexts (hospitals, home, independent living, rehabilitation, everyday, outdoor, emergency, all ages) then future extensions (industry, infrastructure, agriculture, etc.) |
| **Also named in IA** | Research; Roadmap; Company; Investors; Contact; Trust/Legal/Resources |

**Primary flagship scopes** for Home A+B storytelling are defined in **§5.0** (owner D-0131). Other taxonomy rows remain valid engineering inventory; do not invent additional product lines.

**From implemented navigation / published knowledge domains (`src/navigation/site-navigation.ts` — D-0126 era):**

| Domain | Published children (honest as-built) |
|--------|--------------------------------------|
| Technology | Human Data; Human Data Model; Data Infrastructure; Interoperability; Privacy; Security; Artificial Intelligence; Automation; Robotics |
| Systems | Knowledge Engine; AI Decision Support; Safety Layer; Communication Layer; Clinical Interfaces; Robotics Layer; Drone Systems |
| Applications | Healthcare; Home; Hospitals; Emergency; Industrial; Government; Agriculture; Research Applications |
| Trust | Privacy; Security; Safety; Human Oversight; Transparency; Ethics; Limitations |
| Research | Overview (publications / future directions still coming-soon in footer) |
| Labs | Overview; SAVEN Robotics Lab; Internal Future Lab |
| Flagship Interface | SAVEN Robotics Interface (`/systems/saven-robotics-interface/`) — also listed under footer Architecture |
| Investors / Contact / Media / Roadmap | `/investors/`, `/investors/contact/`, `/contact/`, `/media/`, `/roadmap/` |
| Research | Overview; Research Areas; Research Notes |

**Not inventing:** Do not add new product lines beyond the lists above. When Master Spec names and as-built Systems names differ, prefer **Master Spec / IA names for public flagship storytelling**, and map to published routes that actually exist (or mark destinations Planned until published). Do not equate `/systems/robotics-layer/` with **SAVEN Robotics Interface** without an explicit bridge decision.

### 5.2 Target top-level presentation (public + investors)

Proposed clean top-level grouping for the showcase site. **Changing live primary nav requires an explicit follow-on decision** (do not silently rewrite `site-navigation.ts`).

| Order | Label | Purpose |
|------:|-------|---------|
| 1 | Home | A+B gateway; first-second understanding |
| 2 | Labs | Processes and lab identities: Robotics Lab, Internal Future Lab |
| 3 | Systems | Principal systems & interfaces (Robotics Interface as flagship) |
| 4 | Technology | Engineering disciplines / knowledge domain |
| 5 | Applications | Where systems are designed to operate (human contexts first) |
| 6 | Research | Research activity and engineering updates |
| 7 | Trust | Responsibility, limits, oversight (not a substitute for `/legal`) |
| 8 | Company | About / approach when published (no invented leadership) |
| 9 | Investors | Investor information path (no invented metrics; no auth portal in this assignment) |

**Utility (when published):** Language; Contact; Search (architecture-ready; working search still out of scope per AGENTS.md).

**Purpose / Foundation:** Remain essential content destinations (Master Spec). They may live as Home bridge + footer / Company area until primary-nav re-expansion is authorized. Do not delete the foundation sequence from the story.

### 5.3 Conflict flags (assignment vs existing docs / code)

| Topic | Existing | This assignment | Resolution for agents |
|-------|----------|-----------------|------------------------|
| Homepage identity | D-0129 + `CREATIVE_DIRECTION.md`: One Human Hour as public homepage | A+B engineering showcase; hero *Intelligence for the Physical World.* | **D-0130 supersedes D-0129 for homepage primacy.** Treat Human Hour as demoted (optional later proof). |
| Primary public statement | Master Spec / AGENTS: *Intelligent systems built to support human life.* | Hero line: *Intelligence for the Physical World.*; supporting copy as in §3 | **Coexist for now:** hero = first screen; Master Spec purpose statement remains purpose/foundation truth until owner formally revises Master Spec. Tagline retained. |
| Primary nav | IA Phase 0 long list | As-built (D-0153 / D-0194): Labs, Systems, Applications, Technology, Research, Trust, Investors (≤7 hubs). Purpose/Foundation/Roadmap/Media/Contact via footer | Keep ≤7 hubs. Full technical leaves stay in footer (D-0132). |
| Technical pages vs simplicity | Dense knowledge domains already published | Owner: keep pages; do not scare ordinary visitors | **Two-layer model §2.1 / D-0132.** Keep pages; footer is the depth map; Layer 1 stays simple. |
| Systems naming | Master Spec: Robotics Interface, Systems Architecture, SAVEN AI, Drone Platform | As-built: Knowledge Engine, layers, Clinical Interfaces, etc. | Do not invent a merge. Flagship storytelling uses Master Spec names; links use published routes or Planned states. |
| Investors | Present in IA; D-0062 rules; often unpublished in shell | Required structural section/path | Keep D-0062 claim rules. Publish structure when a phase authorizes Investors pages. |
| Visual / experience | D-0128 domain-distinct languages; cool-paper; straight corners | Tech / engineering / innovation clarity; not documentary care-film as whole brand | D-0128 visual grammar remains useful; **mood shifts** from care-film homepage to engineering showcase. No neon/glow. |
| Human-first disclosure | D-0127 progressive disclosure | Still apply (human understanding before chrome) | First viewport = brand + hero + support + CTA — not passport/metadata. |

---

## 6. Content rules & status rules

### Content rules

1. English is the canonical source language; prepare for ten locales and RTL.
2. Always translate UI chrome updates across `src/i18n/ui/`.
3. Do not invent company facts, partners, customers, metrics, patents, approvals, or team members.
4. Do not write final legal or medical claims without approved text.
5. Preserve SAVEN terminology; straight corners; no futuristic decoration for its own sake.
6. Development messaging: confident architecture / in-development framing — not apology, not “operational product.”

### Status rules

- Everything principal is **in development**.
- Public status language: **Research · Architecture · In Development** (primary). Prototype / Validation / Pilot / Operational only if later true and approved.
- Never present as commercially deployed, hospital-deployed, or regulator-approved unless explicitly authorized with approved text.
- Status visible on systems, labs, and roadmap-style items.

### Investors content rules (inherits D-0062)

- Describe long-term capital posture and **possible** material types only.
- No funding rounds, valuation, revenue, forecasts, or return claims.
- No authentication / investor portal in this assignment (AGENTS.md still forbids auth unless authorized).

---

## 7. Visual direction

| Do | Do not |
|----|--------|
| Tech / engineering / innovation clarity | Documentary care-film as the **whole** brand identity |
| Logo lockups and assets in `public/brand/` | Fake photography claims or stock “hospital success” imagery as proof |
| Diagrammatic / engineering visuals where assets are missing | Neon, glow, generic purple AI aesthetics |
| Domain-distinct composition (D-0128) adapted to showcase home | Crowded dashboard hero; Knowledge Passport in first viewport |
| Straight corners; cool-paper / precise atmosphere | Softening into a single emotional film scroll as the site |

**Available assets (honest):** brand logos and favicons under `public/brand/` and `public/`; Human Hour storyboard frames under `public/storyboard/human-hour/` and `tmp/` (usable later as optional proof — not homepage primacy). Prefer diagrams when real product photography does not exist.

---

## 8. Investor section requirements

**Route (IA):** `/investors` (and contact/access subroutes when authorized).

**Must include structurally:**

1. Clear entry from Home and from top-level or utility/footer navigation (when published).
2. Plain-language description of why the section exists (long-term technology / capital posture) — no metrics invention.
3. Links to request further information / contact pattern **without** building auth or uploading fake decks.
4. Separation from public marketing claims (public vs restricted structurally respected).

**Must not include:** invented traction, raised amounts, valuations, customer logos, “series” claims, or a fake data room.

---

## 9. What to remove / course-correct

| Prior direction | Course-correction |
|-----------------|-------------------|
| **D-0129** — One Human Hour as the public homepage identity | **Superseded for homepage primacy** by D-0130. Home becomes A+B engineering showcase. |
| Human Hour as sole first-viewport story | Demote to **optional later proof** (e.g. Lab or Applications narrative), or remove from home. Do not keep it as the entire homepage. |
| `CREATIVE_DIRECTION.md` stating Direction B as active homepage authority | Treat as **outdated for home primacy** until revised; agents follow this assignment + D-0130. |
| Care-film / documentary tone as whole-site brand | Retain care purpose as **tagline / closing energy**; lead with physical-world intelligence / engineering. |
| Sounding like a WIP apology site | Use precise In Development / Architecture language with confidence. |

---

## 10. Phased build order (small, reviewable)

Do **not** start a later phase without an authorizing Decisions Log entry (or explicit owner approval logged afterward).

| Phase | Objective | Expected result | Explicitly not in phase |
|------:|-----------|-----------------|-------------------------|
| **0** *(this document)* | Lock assignment + IA + decision log | Agents share one brief | No homepage rewrite |
| **1** | Homepage A+B shell + new hero copy (en first; then en/ar/he/ru/uk bodies) | First 10 seconds match §3; Human Hour no longer sole home | Full nav rewrite; all leaf pages; Investors full copy invention |
| **2** | Directions showcase wired to real hubs (Labs / Systems / Technology / Research) | A section live with honest statuses | New product lines; fake imagery claims |
| **3** | Flagship paths B (Robotics Lab, Robotics Interface, Future Lab) | Clear paths; Planned vs published honesty | Claiming Operational |
| **4** | Investors structural pages (D-0062-safe) | `/investors` published path; Home teaser | Auth portal; metrics |
| **5** | Primary nav alignment to §5.2 (if owner approves) | Labs + Investors discoverable in header | Silent taxonomy invention |
| **6** | Domain interiors polish under D-0128 grammar | Non-interchangeable section pages | CMS, search, analytics, legal publication |
| **7** | Optional Human Hour as Lab/Applications proof (only if owner wants) | Story demoted from home primacy | Restoring film as whole homepage |

**Recommended next implementation phase after this assignment:** **Phase 1** — homepage A+B + hero *Intelligence for the Physical World.* (doc-authorized only when owner says to implement).

---

## 11. Open questions (minimal)

1. **Master Spec primary statement** — Keep *Intelligent systems built to support human life.* as purpose-layer truth while the hero uses *Intelligence for the Physical World.*, or formally revise Master Spec / AGENTS positioning?
2. **Primary nav timing** — Ship Home A+B first with footer/Home links to Labs + Investors, or authorize §5.2 header nav in the same phase as Home?
3. **Human Hour fate** — Archive / redirect-only, or keep as optional Lab proof page (not home)?
4. **Systems naming bridge** — Prefer Master Spec system names on Home cards even when as-built Systems routes use different labels?
5. **Flagship URL scheme** — Scheme A (IA slugs), B (short `/robotics-lab/` etc.), or C (hybrid) from §5.0.4?
6. **Interface vs Robotics Layer** — Keep `/systems/robotics-layer/` as a separate published knowledge page, redirect/alias to Robotics Interface when published, or retire the Layer label in storytelling?

Everything else needed to start Phase 1 homepage shell is answered in this document; flagship leaf pages wait on route scheme + phase authorization.

---

## 12. Authority & reading order for agents

Before implementing any phase under this assignment:

1. `docs/SAVEN_CORE_MASTER_SPEC.md`
2. `docs/PROJECT_RULES.md`
3. `docs/DECISIONS_LOG.md` (especially **D-0130**, **D-0131**, **D-0132**, and claim rules D-0009 / D-0062)
4. This file — `docs/SITE_ASSIGNMENT.md`
5. `docs/INFORMATION_ARCHITECTURE.md` (taxonomy; note conflicts in §5.3)
6. `AGENTS.md`

If documents conflict on **homepage identity or first-screen copy**, **D-0130 + this assignment win** until a later decision supersedes them.
