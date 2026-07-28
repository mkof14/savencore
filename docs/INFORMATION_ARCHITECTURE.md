# SAVEN Core — Information Architecture

**Document status:** Approved for Phase 0  
**Authority:** Derived from `SAVEN_CORE_MASTER_SPEC.md`  
**Last updated:** 2026-07-25  
**Canonical language:** English (United States)

This document defines primary navigation, utility navigation, page hierarchy, footer structure, and routing patterns. Page implementation is out of scope for Phase 0.

**Owner scope note (D-0131):** Canonical public scopes for the three primary flagship workstreams — SAVEN Robotics Lab, SAVEN Robotics Interface, Internal Future Lab — are recorded in `docs/SITE_ASSIGNMENT.md` §5.0. Use those definitions for Home A+B and future lab/interface pages. Route tree below remains the Phase 0 IA baseline; alternate shorter flagship URLs are **proposals only** (SITE_ASSIGNMENT §5.0.4) until a decision selects a scheme.

---

## 1. Principles

1. Human purpose precedes technology spectacle.
2. Foundation sequence must remain coherent and continuous.
3. Primary human applications precede future industrial extensions.
4. Development status must remain visible where systems, labs, and roadmap items are presented.
5. Navigation labels are fixed unless changed by owner decision.
6. “Purpose” is the principal label; “Mission” is not used as the top-level nav label.
7. Locale prefix is required for all public page routes.

---

## 2. URL Conventions

### Locale prefix

```
/{locale}/...
```

Supported locale codes:

`en`, `es`, `de`, `fr`, `ja`, `zh-cn`, `ar`, `he`, `uk`, `ru`

### Slug style

- Lowercase
- Hyphen-separated English slugs in the path (source-language slugs)
- Localized UI labels may differ; path slugs remain stable unless owner approves localized paths later

### Example

```
/en/purpose
/en/foundation/biomath-core
/ar/purpose
```

---

## 3. Primary Navigation (Top Level)

| Order | Label | Route (relative to locale) | Notes |
|------:|-------|----------------------------|-------|
| 1 | Purpose | `/purpose` | Principal purpose narrative |
| 2 | Foundation | `/foundation` | Sequence hub |
| 3 | Technology | `/technology` | Technology areas hub |
| 4 | Systems | `/systems` | Principal systems hub |
| 5 | Labs | `/labs` | Labs hub |
| 6 | Applications | `/applications` | Human applications first |
| 7 | Research | `/research` | Research activity |
| 8 | Roadmap | `/roadmap` | Five-year horizon |
| 9 | Company | `/company` | About and approach |
| 10 | Investors | `/investors` | Investor information |

---

## 4. Utility Navigation

| Label | Route | Notes |
|-------|-------|-------|
| Search | `/search` | Site search |
| Language | language switcher control | Not a content page |
| Contact | `/contact` | Contact entry point |

---

## 5. Page Hierarchy

Paths below are relative to `/{locale}`.

### 5.1 Purpose

```
/purpose
```

Purpose: communicate why SAVEN Core exists and the 20-second comprehension goals.

### 5.2 Foundation

```
/foundation
/foundation/biomath-life
/foundation/biomath-core
/foundation/saven
/foundation/saven-core
```

Must present the sequence BioMath Life → BioMath Core → SAVEN → SAVEN Core as one continuous foundation story.

### 5.3 Technology

```
/technology
/technology/human-data-and-intelligence
/technology/artificial-intelligence
/technology/robotics
/technology/autonomous-systems
/technology/machine-perception
/technology/human-machine-interaction
/technology/simulation
/technology/safety-architecture
/technology/privacy-architecture
```

### 5.4 Systems

```
/systems
/systems/saven-robotics-interface
/systems/saven-systems-architecture
/systems/saven-ai
/systems/saven-drone-platform
/systems/status
```

Every system page must support status fields defined in the content model.

**SAVEN Robotics Interface (owner scope, D-0131 / D-0189 / D-0190 / D-0191 / D-0192 / D-0193):** Shared interface layer for communication and common-task coordination between diverse robots/devices and SAVEN under human oversight. Public status: **In Development**. List capability areas as **possible components** only (command and control, visual interface, mission planning, real-time telemetry, fleet management, human–robot interaction, remote operations, AI-assisted decision support, system diagnostics, role-based access, digital mission environment) — not shipped product modules. Device classes on the public page are architecture concepts, not SKUs. Hub diagram: SAVEN brand mark at center; **large high-contrast SVG device illustrations** with readable labels and color-coded links (D-0193; supersedes photo thumbs from D-0191/D-0192); section title leads with SAVEN Robotics Interface. Full brief: `SITE_ASSIGNMENT.md` §5.0.2. As-built published Systems routes use different leaf names (e.g. `/systems/robotics-layer/`); do not silently merge without a bridge decision.

### 5.5 Labs

```
/labs
/labs/saven-robotics-lab
/labs/internal-future-lab
```

**SAVEN Robotics Lab (owner scope, D-0131):** Primary engineering direction. Public status: **In Development**. Focus: robotic systems; autonomous mobility; robot control; sensors and machine perception; human–machine interaction. Full brief: `SITE_ASSIGNMENT.md` §5.0.1.

**Internal Future Lab (owner scope, D-0131):** Research environment of SAVEN Core. Public status: **Research**. Directions include advanced robotics forms, embodied AI, autonomous decision-making, human–machine interaction, new sensor systems, physical-environment modeling, robotics for medicine, future infrastructure technologies, and non-standard engineering concepts. Full brief: `SITE_ASSIGNMENT.md` §5.0.3.

**Route proposal (not adopted):** Shorter public flagships `/robotics-lab/`, `/robotics-interface/`, `/future-lab/` (plus `/labs/` hub) are options in SITE_ASSIGNMENT §5.0.4 Scheme B. Until chosen, prefer the Phase 0 paths in this section for IA continuity.
### 5.6 Applications

Primary human applications first:

```
/applications
/applications/hospitals
/applications/home
/applications/independent-living
/applications/rehabilitation
/applications/everyday-environments
/applications/outdoor-assistance
/applications/emergency-and-remote-assistance
/applications/support-across-all-ages
```

Future extensions after primary human applications:

```
/applications/medical-technologies
/applications/industry
/applications/infrastructure
/applications/agriculture
/applications/security
/applications/defense
/applications/drone-operations
/applications/other-physical-environments
```

Presentation rule: listing order, navigation groups, and page sections must keep primary human applications before future extensions.

### 5.7 Research

```
/research
/research/areas
/research/publications
/research/engineering-updates
/research/newsroom
/research/media-resources
```

### 5.8 Roadmap

```
/roadmap
```

Roadmap entries follow `ROADMAP_CONTENT_MODEL.md`. Never present as a guarantee.

### 5.9 Company

```
/company
/company/about
/company/leadership
/company/engineering-approach
/company/careers
/company/partnerships
/company/suppliers
```

Leadership and team facts must not be invented.

### 5.10 Investors

```
/investors
/investors/contact
```

Do not invent traction, fundraising, or financial claims.

### 5.11 Contact and collaboration

```
/contact
/work-with-saven/partnerships
/work-with-saven/research-collaboration
/work-with-saven/healthcare-collaboration
/work-with-saven/technology-integration
```

Footer may deep-link into these routes. Exact aliasing may be refined in a later phase without inventing new top-level primary nav labels.

### 5.12 Trust, legal, and resources

```
/legal/privacy-policy
/legal/terms-of-use
/legal/cookie-policy
/legal/cookie-preferences
/legal/accessibility-statement
/legal/security
/legal/responsible-ai
/legal/medical-disclaimer
/legal/research-disclaimer
/legal/intellectual-property
/legal/trademark-notice
/legal/copyright
/legal/data-rights
/legal/do-not-sell-or-share
/legal/legal-notices
/legal/regional-privacy-rights

/resources/help
/resources/accessibility
/resources/language
/resources/sitemap
/resources/search
/resources/report-a-security-issue
/resources/media-contact
/resources/investor-contact
```

Draft legal structures are defined in `TRUST_LEGAL_STRUCTURE.md`.

---

## 6. Footer Information Architecture

**As-built visitor footer (D-0132 / D-0188 / D-0205 / D-0202):** published destinations only, grouped by domain — Technology, **Architecture** (Systems domain depth map: Overview + published `/systems/*` leaves including SAVEN Robotics Interface; routes unchanged), Applications, Trust, Research, Labs, Company (About → `/foundation/`, Mission → `/purpose/`, Media → `/media/`), Resources (FAQ → `/faq/`, Report a Security Issue), Legal (primary links + More → `/legal/`). Desktop: **five equal columns** with stacked section groups (Technology+Architecture · Labs+Applications · Trust+Research · Company+Resources · Legal) — D-0205; supersedes D-0199 / D-0200. Full technical leaf lists live here as the Layer 2 depth map; primary header stays short. No Coming Soon badges in the visitor footer. Target taxonomy below remains the longer-term IA inventory; do not invent unpublished leaves as live links.

Large multi-column footer. Columns and links:

### SAVEN CORE

- Purpose → `/purpose`
- Foundation → `/foundation`
- BioMath Life → `/foundation/biomath-life`
- BioMath Core → `/foundation/biomath-core`
- SAVEN → `/foundation/saven`
- About → `/company/about`
- Leadership → `/company/leadership`
- Engineering Approach → `/company/engineering-approach`

### TECHNOLOGY

- Artificial Intelligence → `/technology/artificial-intelligence`
- Robotics → `/technology/robotics`
- Autonomous Systems → `/technology/autonomous-systems`
- Human Data and Intelligence → `/technology/human-data-and-intelligence`
- Machine Perception → `/technology/machine-perception`
- Human-Machine Interaction → `/technology/human-machine-interaction`
- Safety Architecture → `/technology/safety-architecture`
- Privacy Architecture → `/technology/privacy-architecture`

### SYSTEMS AND LABS

- SAVEN Robotics Interface → `/systems/saven-robotics-interface` *(In Development; possible components only — D-0131 / SITE_ASSIGNMENT §5.0.2)*
- SAVEN Systems Architecture → `/systems/saven-systems-architecture`
- SAVEN AI → `/systems/saven-ai`
- SAVEN Drone Platform → `/systems/saven-drone-platform`
- SAVEN Robotics Lab → `/labs/saven-robotics-lab` *(In Development — D-0131 / SITE_ASSIGNMENT §5.0.1)*
- Internal Future Lab → `/labs/internal-future-lab` *(Research — D-0131 / SITE_ASSIGNMENT §5.0.3)*
- System Status → `/systems/status`

Alternate shorter flagship URLs (proposal only): `/robotics-lab/`, `/robotics-interface/`, `/future-lab/` — see SITE_ASSIGNMENT §5.0.4.

### APPLICATIONS

Primary human applications first, then selected future extensions as specified for footer:

- Hospitals
- Home
- Independent Living
- Rehabilitation
- Everyday Environments
- Emergency Assistance
- Infrastructure
- Industry
- Agriculture

### RESEARCH AND DEVELOPMENT

- Research → `/research`
- Publications → `/research/publications`
- Research Areas → `/research/areas`
- Roadmap → `/roadmap`
- Engineering Updates → `/research/engineering-updates`
- Newsroom → `/research/newsroom`
- Media Resources → `/research/media-resources`

### WORK WITH SAVEN

- Investors → `/investors`
- Partnerships → `/company/partnerships` (or work-with-saven alias)
- Research Collaboration
- Healthcare Collaboration
- Technology Integration
- Careers → `/company/careers`
- Suppliers → `/company/suppliers`
- Contact → `/contact`

### RESOURCES

- Help
- Accessibility
- Language
- Sitemap
- Search
- Report a Security Issue
- Media Contact
- Investor Contact

### LEGAL AND TRUST

Full legal set as listed in the Master Spec.

### SOCIAL NETWORKS

- Facebook
- YouTube
- LinkedIn
- X
- Instagram

Configurable until official URLs are supplied. No fake URLs.

### Copyright line

```
© 2026 SAVEN Core. All rights reserved.
```

---

## 7. Home Page Role

```
/{locale}/
```

Home is the primary composition surface. It must deliver the 20-second comprehension goals without becoming a product catalog, SaaS landing page, or generic AI startup template.

Home content structure will be defined in a later approved content phase. No page build in Phase 0.

---

## 8. Search and Language Surfaces

- Search must index approved public content only.
- Language switcher must preserve the current path where a localized equivalent exists; otherwise fall back per `LOCALIZATION_SPEC.md`.
- Restricted content is never exposed through public search.

---

## 9. Out of Scope for Phase 0

- Implementing routes
- Creating page components
- Creating navigation components
- Creating footer components
- Creating sitemap XML or robots files
- Creating redirect maps beyond this specification
