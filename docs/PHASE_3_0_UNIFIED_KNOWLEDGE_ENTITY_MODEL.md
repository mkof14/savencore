# SAVEN Core — Phase 3.0 Unified Knowledge Entity Model

**Document status:** Complete  
**Date:** 2026-07-24  
**Phase:** 3.0 — Unified Knowledge Entity Model  

---

## 1. Objective

Replace disconnected Phase 2.1 knowledge-domain structures with one coherent, typed static TypeScript knowledge entity model. Future pages consume the same source of truth for entities and relationships.

This phase does **not** add a database, CMS, API, search engine, graph library, backend, new routes, or Home/navigation changes.

---

## 2. Entity taxonomy

Controlled `KnowledgeEntityType` values:

| Type | Domain |
|------|--------|
| `foundation` | foundation |
| `technology` | technology |
| `system` | systems |
| `research-area` | research |
| `research-output` | research |
| `application` | applications |
| `trust` | trust |
| `company` | company |

Canonical type file: `src/content/knowledge/entity-types.ts`

---

## 3. Status taxonomy

Controlled `KnowledgeEntityStatus` values (development-safe; no production or validation claims):

- `foundational`
- `active-development`
- `research`
- `conceptual`
- `planned`
- `reference`

---

## 4. Canonical registry

File: `src/content/knowledge/entities.ts`

Includes only Phase 2.1-approved entities:

| Domain | Entities |
|--------|----------|
| Foundation | BioMath Life, BioMath Core, SAVEN, SAVEN Core |
| Technology | Artificial Intelligence, Human Data, Robotics, Automation, Privacy, Security, Data Infrastructure, Interoperability |
| Systems | Human Data Model, AI Decision Support, Robotics Layer, Drone Systems, Clinical Interfaces, Knowledge Engine, Safety Layer, Communication Layer |
| Research | Research Areas, White Papers, Engineering Notes, Publications, Future Research, Laboratories |
| Applications | Healthcare, Home, Hospitals, Emergency, Industrial, Government, Agriculture, Research Applications (`id: research`) |
| Trust | Trust Architecture |
| Company | Company |

Core fields: `id`, `slug`, `title`, `entityType`, `domain`, `summary`, `status`, `parentId`, `childIds`, `relatedEntityIds`, `dependencyIds`, `usedByIds`, `relatedTechnologyIds`, `relatedSystemIds`, `relatedResearchIds`, `relatedApplicationIds`, `relatedTrustIds`, `relatedPageLinks`, `futureTopics`.

---

## 5. Relationship semantics

- **parentId / childIds** — hierarchical containment (Foundation sequence only in this phase).
- **dependencyIds** — entities this entity depends on.
- **usedByIds** — entities that use this entity.
- **related*Ids** — typed cross-links (technology, systems, research, applications, trust).
- **relatedEntityIds** — general semantic neighbors.
- **relatedPageLinks** — locale-neutral internal paths.

Cross-links may be bidirectional where valid. Circular parent-child relationships are forbidden.

Foundation hierarchy:

```
BioMath Life → BioMath Core → SAVEN → SAVEN Core
```

Trust Architecture is cross-cutting (no technical parent).

---

## 6. Validation rules

File: `src/content/knowledge/entity-registry.ts`

On module import (dev/build), `assertEntityRegistryValid()` checks:

- unique IDs;
- unique slugs within each domain routing scope;
- every referenced ID exists;
- parent-child consistency;
- no self-references;
- no duplicate IDs inside one relation array;
- entity type / domain compatibility;
- Foundation hierarchy validity;
- non-empty title and summary;
- related page links are locale-neutral paths (no `/en/` prefix).

No new testing framework was added.

---

## 7. Query helpers

Minimal typed helpers in `entity-registry.ts`:

- `getEntityById`
- `getEntitiesByDomain`
- `getEntitiesByType`
- `getChildren`
- `getParent`
- `getDependencies`
- `getUsedBy`
- `getRelatedEntities`
- `getEntityRelationsSummary`
- `getFoundationHierarchyEntities`

Empty arrays are returned where appropriate. No generic query language or graph traversal.

---

## 8. Migration from Phase 2.1

Domain presentation exports remain for component API compatibility:

- `technology.ts`
- `systems.ts`
- `research.ts`
- `applications.ts`

They **derive item lists and typed relation IDs from the entity registry**. Purpose strings and some `relatedDomains` (domain IDs, not entity IDs) remain as temporary display-specific compatibility maps documented in those files.

`domains.ts` remains the domain-level architecture map (not duplicated entity content).

---

## 9. Presentation adapter

- Helper: `getEntityRelationsSummary`
- Component: `src/components/knowledge/EntityRelationshipIndex.tsx`

Output groups (empty groups omitted):

- Part of
- Contains
- Depends On
- Used By
- Related Technologies
- Related Systems
- Related Research
- Related Applications
- Trust and Safety
- Related Pages

Uses Engineering Design System block and link styles. No new routes; not wired into a destination-page redesign.

---

## 10. Demonstration usage

| Page | Integration |
|------|-------------|
| `/[locale]/foundation/` | Hierarchy diagram, layer model order, section nav layer entries, and layer titles derive from foundation entity relationships. |
| `/[locale]/research/` | Research section index from `getEntitiesByDomain("research")`; compact related-domain block via `EntityRelationshipIndex` for `research-areas`. |

Purpose and Applications pages were not altered except through shared knowledge exports remaining API-compatible.

---

## 11. Content boundaries

- Summaries: one to two short paragraphs; target ~40–100 words.
- No long-form documentation in `entities.ts`.
- No claims that conceptual or in-development systems are operating in production.

---

## 12. Deferred

- Graph visualization / network diagrams
- CMS or database
- Full destination pages per entity
- Phase 3.1 (unauthorized)
- Expanding the entity list beyond Phase 2.1

---

## 13. Files

Created:

- `src/content/knowledge/entity-types.ts`
- `src/content/knowledge/entities.ts`
- `src/content/knowledge/entity-registry.ts`
- `src/components/knowledge/EntityRelationshipIndex.tsx`
- `docs/PHASE_3_0_UNIFIED_KNOWLEDGE_ENTITY_MODEL.md`

Modified (primary):

- Phase 2.1 knowledge domain exports
- Foundation and Research page content / Research page composition
- `AGENTS.md`, `docs/DECISIONS_LOG.md`
- Knowledge CSS and barrel exports
