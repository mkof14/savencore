# SAVEN Core — Architecture Decisions

**Document status:** Approved (Phase 0.75A)  
**Date:** 2026-07-24  
**Authority:** Records implementation decisions approved after the Phase 0 Architecture Review  
**Constraint:** Does not modify approved company philosophy, public statements, or invention prohibitions in `SAVEN_CORE_MASTER_SPEC.md`  
**Phase boundary:** Documentation only. Phase 1 is not authorized by this document.

---

## 1. Home Page Structure

Approved home page section order:

1. Hero
2. Human Purpose
3. Hospital • Home • Everyday Life
4. BioMath Life → BioMath Core → SAVEN → SAVEN Core
5. How the System Works
6. Technology Overview
7. Systems
8. Research & Labs
9. Safety • Privacy • Human Oversight
10. Development Status
11. Company
12. Investors
13. Footer

### Rules

- This order is the comprehension spine for first-time visitors.
- Home must deliver the Master Spec 20-second goals without becoming a product catalog or generic AI landing page.
- Section copy remains limited to approved language and owner-supplied facts.
- Development status must remain honest; no operational or commercial availability claims.

---

## 2. Navigation

### Primary navigation

- Purpose
- Foundation
- Technology
- Applications
- Research
- Company

### Utility navigation

- Investors
- Search
- Language
- Contact

### Technology contains

- Technology
- Systems
- Labs

### Research contains

- Research
- Publications
- Roadmap

### Company contains

- About
- Leadership
- Careers
- Contact
- Trust

### Rules

- “Mission” is not used as the principal navigation label; use “Purpose”.
- Systems, Labs, and Roadmap remain reachable, but are no longer peer top-level primary items.
- Investors remains available, but as utility navigation rather than a primary peer to Purpose/Foundation.
- Navigation labels and grouping must not change silently; updates require a Decisions Log entry.
- Footer structure from the Master Spec remains in force unless later superseded.

### Relationship to prior decision

This navigation model supersedes the flat ten-item primary navigation recorded in D-0005 for primary/utility grouping purposes. Route inventory and footer requirements from Phase 0 remain unless explicitly changed later.

---

## 3. Technology Taxonomy

These concepts remain independent:

| Concept | Meaning |
|---------|---------|
| Technology | Disciplines |
| Systems | Products and engineering systems |
| Labs | Research organizations |
| Applications | Where technology is used |
| Research | Publications and engineering work |
| Roadmap | Development timeline |

### Rules

- Do not collapse these concepts into one interchangeable catalog.
- Cross-linking is allowed; identity substitution is not.
- Page templates and content types must preserve the distinction.
- Primary human applications continue to appear before future commercial and industrial extensions.

---

## 4. Localization

### Supported locales (architecture)

- `en`
- `es`
- `de`
- `fr`
- `ja`
- `zh-cn`
- `ar`
- `he`
- `uk`
- `ru`

### Root URL

```
/  →  /en/
```

### Rules

- English is canonical.
- Arabic and Hebrew require complete RTL support.
- Browser auto-translation is not the localization system.
- Fallback to English when approved localized content is unavailable.
- Architecture supports all ten locales from the beginning; launch sequencing of translated content remains an owner operations decision.

### Relationship to prior decision

This resolves the open root-route question left in D-0006: `/` redirects to `/en/`.

---

## 5. Content Strategy

### Approved decisions

- English is the source language.
- Content must remain outside React components.
- Architecture must allow future CMS integration.
- No CMS is selected yet.

### Rules

- Do not hardcode narrative page content inside components.
- Use a structured content layer that can later map to a headless CMS without rewriting information architecture.
- Public and restricted information remain structurally separate.
- Do not invent facts to fill content fields.

---

## 6. Design Direction

The website must look like a serious engineering organization.

### Avoid

- startup templates;
- glowing AI gradients;
- glassmorphism;
- rounded card systems;
- fake robotics imagery;
- excessive animations.

### Mandatory

- Straight corners remain mandatory.
- Light primary environment with carefully controlled dark technology sections.
- Restrained motion.
- Accessible contrast targeting WCAG 2.2 AA.
- Human purpose over technological spectacle.

This section restates implementation constraints; it does not alter Master Spec philosophy.

---

## 7. Current Blockers

Remaining owner decisions only (not resolved by Phase 0.75A):

1. Legal entity name confirmation (whether “Inc.” or other suffix applies).
2. Whether localized path slugs will be used in a later phase.
3. Official social account URLs.
4. Contact emails and form destinations.
5. Roadmap baseline year and first public roadmap entries.
6. Leadership content availability and publication policy.
7. Translation process / vendor selection and locale launch sequencing for approved translations.
8. Analytics and cookie consent vendor selection.
9. CMS selection (explicitly deferred; architecture must remain CMS-ready).
10. Design token values, multilingual font stack, and named intentional motions.
11. Authorization and exact scope definition for Phase 1.

---

## Document Control

| Field | Value |
|-------|-------|
| Created | 2026-07-24 |
| Phase | 0.75A — Architecture Decisions |
| Supersedes (partial) | D-0005 primary/utility nav grouping; D-0006 open root-route question |
| Does not authorize | Phase 1, Next.js initialization, dependency installation, application code |
