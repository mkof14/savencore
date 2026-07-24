# Content Sprint — Systems Domain Complete

**Date:** 2026-07-24  
**Status:** Complete  
**Commit message:** `feat: complete Systems knowledge domain`

## Pages created

| Page | Route |
|------|-------|
| Systems Overview | `/[locale]/systems/` |
| Knowledge Engine | `/[locale]/systems/knowledge-engine/` |
| AI Decision Support | `/[locale]/systems/ai-decision-support/` |
| Safety Layer | `/[locale]/systems/safety-layer/` |
| Communication Layer | `/[locale]/systems/communication-layer/` |
| Clinical Interfaces | `/[locale]/systems/clinical-interfaces/` |
| Robotics Layer | `/[locale]/systems/robotics-layer/` |
| Drone Systems | `/[locale]/systems/drone-systems/` |

Locales: `en`, `ar`, `he` (shared English content; RTL shell unchanged).

## Definitions used

| System | Boundary |
|--------|----------|
| Knowledge Engine | Organizes knowledge and provides consistent context. Does not make independent decisions. |
| AI Decision Support | Supports human review and decision-making. Does not replace human judgment. |
| Safety Layer | Applies safeguards, limits, checks and escalation across systems. |
| Communication Layer | Coordinates structured exchange between components and approved external interfaces. |
| Clinical Interfaces | Controlled clinical workflow touchpoints. No diagnosis, treatment or autonomous medical action. |
| Robotics Layer | Connects approved instructions to physical robotic systems. No autonomous deployment without oversight. |
| Drone Systems | Approved sensing, communication and controlled aerial operations. No military, surveillance or unsupported claims. |

## Registry integration

- Canonical entities reused from `src/content/knowledge/entities.ts` (no new entities).
- Leaf pages bind via `entityId` and render relations / Future Topics from the registry.
- `ENTITY_PAGE_HREFS` maps published Technology and Systems leaves for relation links.
- Relation rendering skips unpublished destinations (e.g. `/trust/`).
- Application and Research relation targets use domain overviews (`/applications/`, `/research/`) until leaf pages exist.
- Human Data Model remains a systems-domain entity with a Technology route (`/technology/human-data-model/`).

## Editorial decisions

- Shared leaf template: `SystemDisciplinePage` + `system-discipline-types.ts`.
- Empty prose and empty relation groups are not rendered.
- Architecture-level language only; current scope separated from future topics.
- Human Data Model is referenced from Systems Overview but not duplicated under `/systems/`.
- Applications leaf pages are not linked.

## Cross-domain links

- Flow: Technology → Systems → Applications (overview).
- Technology index and Technology reference links include Systems.
- Systems pages reference published Technology leaves via registry relations and reference lists.
- Navigation, footer and reference helpers share `systemsNavChildren` / `technologyNavChildren`.

## Navigation

- `published-routes.ts` updated after routes existed.
- Primary, mobile and footer navigation include Systems Overview + seven published children.
- Technology navigation unchanged in membership (Systems added as related domain links only).

## Unresolved gaps

- Applications leaf pages unpublished.
- Trust page unpublished (trust relations filtered from live links).
- Research leaf pages unpublished (relations point to Research overview).
- Labs / Company still unpublished.
- Localized non-English page copy not authored (English fallback).

## Validation

- `npm run lint` — passed
- `npm run type-check` — passed
- `npm run build` — passed (Systems routes generated for all locales)
- Checks: one H1 via shared masthead; EN/AR/HE routes present; desktop/mobile/footer share `systemsNavChildren`; Technology nav membership unchanged; Systems dropdown = Overview + seven published leaves only; no placeholder leaf routes.
