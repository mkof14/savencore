# Content Sprint — Systems Core Architecture

**Date:** 2026-07-24  
**Status:** Complete  
**Commit message:** `feat: complete Systems core domain`

## Objective

Explain how SAVEN Core works through the Systems domain:

Technology → Systems → Applications

## Pages completed

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

## Boundaries used

| System | Boundary |
|--------|----------|
| Knowledge Engine | Organizes knowledge and preserves context. Does not make decisions. |
| AI Decision Support | Analyzes available information. Supports people. Does not replace people. |
| Safety Layer | Validation, limits, human review, risk reduction, escalation. |
| Communication Layer | Coordinates exchange between internal and approved external systems. |
| Clinical Interfaces | Controlled clinical connection points. No diagnosis, treatment or autonomous medicine. |
| Robotics Layer | Approved interaction between digital and robotic systems. |
| Drone Systems | Applies Robotics Layer to aerial systems. No unsupported operational claims. |

## Editorial decisions

- Shared leaf template: `SystemDisciplinePage`.
- Empty sections are hidden.
- Core Responsibilities removed from the core template to reduce duplication with Purpose / Architecture Role.
- Related Systems is a dedicated section; Relationships covers depends-on, used-by and trust/safety.
- Application leaf pages are not linked; relations use the Applications overview.
- Human Data Model remains under Technology and is referenced from Systems.

## Domain review

Reviewed as one domain for terminology, readability, architecture role clarity, page boundaries, duplication, navigation, relationships and Technology → Systems → Applications consistency.

## Navigation

Unchanged membership from prior Systems publish:

- Primary / mobile / footer use `systemsNavChildren`.
- Technology dropdown remains Technology leaves only.
- Systems is a separate primary group.

## Registry

No new entities. Existing system entities reused. Relation hrefs continue to use published routes only.

## Unresolved gaps

- Applications leaf pages unpublished.
- Trust page unpublished.
- Research leaf pages unpublished.
- Non-English page copy still English fallback.

## Validation

- `npm run lint` — passed
- `npm run type-check` — passed
- `npm run build` — passed
- Systems routes generated for all locales including EN / AR / HE
- Navigation / footer continue to use shared `systemsNavChildren`
