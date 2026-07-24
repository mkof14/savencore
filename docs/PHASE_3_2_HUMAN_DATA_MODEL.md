# SAVEN Core — Phase 3.2 Human Data Model

**Document status:** Complete  
**Date:** 2026-07-24  
**Phase:** 3.2 — Human Data Model Knowledge Page  

---

## 1. Objective

Create the flagship Human Data Model knowledge page as the engineering reference for SAVEN Core documentation.

Route: `/[locale]/technology/human-data-model/`

Out of scope: Home redesign, global navigation changes, backend, CMS, database, search, authentication, APIs, graph libraries, invented capability claims.

---

## 2. Architecture

Page composition (`HumanDataModelPage`) in fixed order:

1. Document Metadata  
2. Executive Summary  
3. Purpose  
4. Core Principles  
5. Architecture Overview  
6. Data Categories  
7. Model Relationships  
8. Privacy and Trust  
9. Engineering Considerations  
10. Current Development Scope  
11. Future Topics  
12. Related Systems  
13. Related Research  
14. Related Applications  
15. Reference Links  

Long-form copy: `src/content/pages/en/human-data-model.ts`  
Canonical entity: `human-data-model` in `src/content/knowledge/entities.ts`

---

## 3. Registry integration

| Page concern | Source |
|--------------|--------|
| Depends On, Used By, Related Technologies / Research / Applications | `EntityRelationshipIndex` + `getEntityRelationsSummary("human-data-model")` |
| Related Systems / Research / Applications sections | Filtered `EntityRelationshipIndex` groups |
| Future Topics | `entity.futureTopics` via `getEntityById` |
| Title/summary status in registry | Unchanged entity record; page adds long-form only |

No duplicated entity definition on the page.

---

## 4. Content boundaries

- Data categories describe **roles**, not implementations or product capabilities.  
- Architecture overview is conceptual (Human → Human Data Model → Knowledge Engine → AI Decision Support → Applications).  
- Current scope remains architecture / active development language only.  
- No production deployment, clinical use, certification or customer claims.

---

## 5. Components reused

Engineering Design System: `DocumentMetadata`, `EngineeringSummary`, `KeyPrinciples`, `ArchitectureOverview`, `EngineeringDiagram`, `FutureExpansionBlock`, `ReferenceLinks`.

Knowledge: `EntityRelationshipIndex`.

New page shell: `HumanDataModelPage`.

---

## 6. Deferred

- Leaf pages for individual data categories  
- Systems domain index page  
- Runtime schemas, APIs or permission engines  
- Phase 3.3+ unless authorized  

---

## 7. Files

Created:

- `app/[locale]/technology/human-data-model/page.tsx`
- `src/content/pages/en/human-data-model.ts`
- `src/components/pages/HumanDataModelPage.tsx`
- `docs/PHASE_3_2_HUMAN_DATA_MODEL.md`

Modified:

- `src/content/knowledge/entities.ts` (related page link for this route)
- `src/components/knowledge/knowledge.css`
- `AGENTS.md`, `docs/DECISIONS_LOG.md`
