# Content + Design Sprint 2 — Applications and Trust

**Status:** Complete  
**Date:** 2026-07-24  
**Commit message:** `feat: complete Applications and Trust domains`

---

## Pages created

### Applications
- `/applications/` — Overview
- `/applications/healthcare/`
- `/applications/home/`
- `/applications/hospitals/`
- `/applications/emergency/`
- `/applications/industrial/`
- `/applications/government/`
- `/applications/agriculture/`
- `/applications/research-applications/`

### Trust
- `/trust/` — Overview
- `/trust/privacy/`
- `/trust/security/`
- `/trust/safety/`
- `/trust/human-oversight/`
- `/trust/transparency/`
- `/trust/ethics-and-responsible-use/`
- `/trust/limitations/`

---

## Page boundaries

| Concern | Location |
|---------|----------|
| Privacy / Security engineering foundations | Technology Privacy, Technology Security |
| System-wide safeguards and control mechanisms | Systems Safety Layer |
| Organizational commitments, governance, limits | Trust Privacy / Security / Safety and related Trust pages |
| Operating environments and outcomes | Applications pages |

Trust is published as a primary knowledge domain (architecture model), distinct from future `/legal/*` policy documents.

---

## Visual concepts

- **Applications:** real-world environments, human/physical contexts, operating boundaries, outcomes and constraints (`signal-action` accents).
- **Trust:** controlled boundaries, verification paths, oversight, responsibility, limitations (`signal-safety` accents).
- Subject-specific `SignalDiagram` variants for every overview and major leaf.
- Visual System v1 extended to remaining Technology leaves and all Systems leaves (dedicated diagrams).

---

## Reusable components

- `ApplicationsPage`, `ApplicationDisciplinePage`
- `TrustPage`, `TrustDisciplinePage`
- Extended `SignalDiagram` variants
- Existing `KnowledgeHero`, `ConceptGrid`, `ScopePanel`, `RelationshipFlow`, `KnowledgePageNavigation`

---

## Registry integration

New Trust entities:
- `trust-privacy`, `trust-security`, `trust-safety`, `human-oversight`, `transparency`, `ethics-responsible-use`, `limitations`
- `trust-architecture` updated with children and related trust IDs

Application and Trust IDs mapped in `ENTITY_PAGE_HREFS`. Relation links resolve only through `isPublishedRoute`.

---

## Navigation changes

- `applicationsNavChildren` and `trustNavChildren` added
- Primary nav and footer publish Applications children and Trust group
- `published-routes.ts` updated
- `domain-sequences.ts` supports applications and trust

---

## Unresolved gaps

- Legal policy pages under `/legal/*` remain unpublished
- Applications industrial/government/agriculture remain future-extension architecture pages
- Research domain still uses the thinner overview template
- Arabic/Hebrew content remains English source with RTL layout

---

## Validation results

- `npm run lint` / `type-check` / `build` — pass
- Browser verification screenshots under `tmp/sprint-2/`
