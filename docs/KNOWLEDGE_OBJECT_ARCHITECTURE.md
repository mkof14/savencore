# SAVEN Core — Knowledge Object Architecture

**Document status:** Active  
**Date:** 2026-07-24  
**Phase:** Knowledge Object Architecture (Phase 2 extension)  
**Authority:** Extends Phase 3.0 entity registry; does not invent product claims

---

## 1. Purpose

Every published page is a structured **Knowledge Object** — an engineering object with identity, metadata, lifecycle, relationships, dependencies, maturity, validation signals, and ownership placeholders.

This layer is reusable across Technology, Systems, Applications, Trust, Research, Purpose, Foundation, and Home references.

---

## 2. Object schema

Canonical TypeScript model: `src/content/knowledge-objects/types.ts`

| Field | Description |
|-------|-------------|
| Knowledge ID | Stable object id (`entityId` or `page-*`) |
| Title | Display title |
| Domain | Domain label |
| Category | Document category (from page metadata when present) |
| Type | Primary classification |
| Status | Document/entity status label |
| Version | Document version when assigned |
| Reading Time | From page metadata when assigned |
| Maturity | Engineering maturity state |
| Evidence Level | Evidence classification (separate from maturity) |
| Owner | Assigned owner or `Not yet assigned.` |
| Last Review | From `lastUpdated` when present |
| Current Scope | Development/current-scope note when present |
| Future Scope | From entity `futureTopics` when present |

Unknown values render as **`Not yet assigned.`** Values are never fabricated.

---

## 3. Metadata model

Page templates enrich catalog identity with existing `PageMetadata`:

- `category`, `documentType`, `status`, `version`, `lastUpdated`, `readingTime`, `relatedDomain`

Resolution: `resolveKnowledgeObject()` in `src/content/knowledge-objects/resolve.ts`.

Catalog identity: `src/content/knowledge-objects/catalog.ts` (all published destinations).

---

## 4. Classification (Type)

Primary types:

`Foundation` · `System` · `Interface` · `Control` · `Application` · `Policy` · `Research` · `Standard` · `Reference`

Derived conservatively from entity type + explicit overrides (e.g. Safety Layer → Control, Trust leaves → Policy).

---

## 5. Maturity model

`Draft` · `Internal Review` · `Engineering Review` · `Published` · `Validated` · `Experimental` · `Deprecated`

Rules:

- Prefer document status mapping (Architecture / In Development → Engineering Review).
- Entity status is fallback only.
- **Validated is never inferred.**

---

## 6. Evidence model

`Concept` · `Engineering` · `Prototype` · `Operational` · `Clinical` · `Research` · `Future` · `Unknown`

Evidence is independent of maturity. Unclear cases resolve to `Unknown`.

---

## 7. Relationship model

Directional kinds:

`Depends On` · `Uses` · `Produces` · `Consumes` · `Implements` · `Protects` · `Controls` · `Supports` · `Related To` · `Referenced By`

Edges are derived from Phase 3.0 entity IDs (`dependencyIds`, `usedByIds`, typed neighbors, parent/child). Unpublished destinations are omitted.

Generic “Related Pages” is not used in Knowledge Object relationship UI.

---

## 8. Dependency model

Every object exposes:

- **Outgoing dependencies** — `Depends On`
- **Incoming dependencies** — `Referenced By` / consumers

UI: `DependencyGraph` (lightweight HTML/CSS; no canvas libraries).

---

## 9. Knowledge graph view

Every object can expose:

- Parents
- Children
- Dependencies
- Consumers
- Providers

UI: `KnowledgeGraphPanel`. Works across domains via the shared catalog + entity registry.

---

## 10. Lifecycle

Fields: Created · Reviewed · Published · Updated · Next Review · Deprecated · Future Revision  

Unavailable fields show `Not yet assigned.` Published/Updated may use document `lastUpdated` when present.

---

## 11. Version history

Fields: Version · Previous Version · Summary of Changes · Date  

Only the current assigned version is shown. Prior history is not invented.

---

## 12. Components

| Component | Role |
|-----------|------|
| `KnowledgePassport` | Compact identity/metadata card |
| `EngineeringSidebar` | Passport, dependencies, reading time, position, next reading |
| `DependencyGraph` | Incoming/outgoing dependency view |
| `KnowledgeGraphPanel` | Parents/children/deps/consumers/providers |
| `KnowledgeLifecycle` | Lifecycle dossier |
| `VersionHistory` | Revision placeholders / current version |
| `ReadingPathsPanel` | Journeys containing the object |
| `KnowledgeObjectFrame` | Shared page body + sidebar + dossier |

Styles: `src/components/knowledge-object/knowledge-object.css` (Visual System v1).

---

## 13. Reading paths

Defined in `src/content/knowledge-objects/reading-paths.ts`:

- Executive
- Engineer
- Research
- Healthcare
- Safety
- Developer

Each path references Knowledge Object IDs only. Invalid IDs fail build validation.

---

## 14. Engineering sidebar behavior

- **Desktop:** sticky sidebar beside main content
- **Tablet:** collapsible disclosure
- **Mobile:** inline below main content

Contains: Passport · Dependencies · Reading Time · Current Position · Next Recommended Reading

---

## 15. URL stability

Published URLs are unchanged. Navigation data is unchanged. Knowledge Objects bind to existing hrefs.

---

## 16. Performance

- Static TypeScript resolution (no runtime graph DB)
- Lightweight HTML/CSS graphs
- Shared catalog + entity registry (no duplicated content bodies)
- Client JS limited to sidebar collapse toggle

---

## 17. Accessibility

- Semantic sections / lists / definition lists
- Sidebar toggle has `aria-expanded` / `aria-controls`
- Links are keyboard focusable with visible focus rings
- High-contrast borders/text (Visual System neutrals)
- Logical CSS properties for RTL (`ar`, `he`)

---

## 18. Future extension

- Explicit owner assignment workflow
- Curated version-history entries when approved
- Optional `Produces` / `Consumes` / `Implements` edges when entity fields expand
- Localized metadata labels (English remains canonical source)
- Validated maturity only after explicit evidence review
