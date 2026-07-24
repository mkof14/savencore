# SAVEN Core — Phase 3.1 Technology Domain

**Document status:** Complete  
**Date:** 2026-07-24  
**Phase:** 3.1 — Technology Domain  

---

## 1. Objective

Build the first complete knowledge domain for SAVEN Core. Technology is the reference implementation for future domains.

Route: `/[locale]/technology/`

Out of scope: Home redesign, global navigation changes, backend, CMS, database, search, authentication, APIs, graph libraries.

---

## 2. Architecture

Page composition (`TechnologyPage`) in fixed order:

1. Document Metadata  
2. Technology Introduction (single H1)  
3. Technology Overview  
4. Technology Categories  
5. Technology Relationships  
6. Engineering Principles  
7. Current Development Scope  
8. Future Expansion  
9. Related Domains  
10. Reference Links  

Long-form copy: `src/content/pages/en/technology.ts`  
Entity data: canonical registry only (`entities.ts` via query helpers)

New domain-specific components:

| Component | Role |
|-----------|------|
| `TechnologyCategoryList` | Registry-driven category blocks |
| `TechnologyRelationshipMatrix` | Compact Technology→…→Trust flow |

Reusable engineering blocks: `DocumentMetadata`, `ArchitectureOverview`, `KeyPrinciples`, `FutureExpansionBlock`, `RelatedTopicsBlock`, `ReferenceLinks`.

---

## 3. Registry integration

Categories render exclusively from:

```ts
getEntitiesByDomain("technology")
```

No hard-coded Technology entity list. Each category shows:

- Title, summary, status (from entity)
- Related Systems / Research / Applications / Technologies via `EntityRelationshipIndex` (`includeGroups`)
- Future Topics from `entity.futureTopics`

Status labels: `src/content/knowledge/status-labels.ts`

---

## 4. Relationship rendering

`TechnologyRelationshipMatrix` aggregates, from all Technology entities:

- Technology titles  
- Unique `relatedSystemIds`  
- Unique `relatedResearchIds`  
- Unique `relatedApplicationIds`  
- Unique `relatedTrustIds`  

Rendered as an ordered Engineering Design System flow (HTML/CSS). No SVG graph, no graph library.

Per-category relations use `EntityRelationshipIndex` with filtered groups.

---

## 5. Content separation

| Layer | Source |
|-------|--------|
| Entity title / summary / status / relations / futureTopics | `entities.ts` |
| Page introduction, overview, principles, scope, notes | `technology.ts` |
| Related domain links | `getRelatedDomainNav("technology")` |

Entity summaries are not duplicated into page content.

---

## 6. Future expansion

`FutureExpansionBlock` lists registry `futureTopics` grouped by Technology entity title. No invented roadmap, dates, or delivery commitments.

---

## 7. Deferred

- Individual Technology leaf pages (nav placeholders may still 404)
- Systems / Research / Applications / Trust domain pages as full Phase 3.1-style indexes
- Phase 3.2+ unless authorized

---

## 8. Files

Created:

- `app/[locale]/technology/page.tsx`
- `src/content/pages/en/technology.ts`
- `src/components/pages/TechnologyPage.tsx`
- `src/components/knowledge/TechnologyCategoryList.tsx`
- `src/components/knowledge/TechnologyRelationshipMatrix.tsx`
- `src/content/knowledge/status-labels.ts`
- `docs/PHASE_3_1_TECHNOLOGY_DOMAIN.md`
