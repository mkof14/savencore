# Design Sprint 1 — SAVEN Core Visual System

**Status:** Complete  
**Date:** 2026-07-24  
**Commit message:** `refactor: establish SAVEN Core visual system`

---

## Visual concept

**HUMAN SIGNALS → STRUCTURED KNOWLEDGE → CONTROLLED ACTION**

The knowledge experience uses a reusable visual grammar:

| Element | Role |
|---------|------|
| Nodes | Components, sources, review points |
| Signal paths | Directed relationships with verbs |
| System layers | Foundation / coordination / action |
| Coordinate marks | Compact mono identifiers (DEF, SYS, KE) |
| Measurement lines | Hierarchy cues without decoration |
| Controlled boundaries | Review, safety, and information limits |
| Status indicators | Small circular markers only |
| Architecture labels | Zone and role annotations |

These elements structure information. They are not ornamental.

---

## Geometry rules

- `border-radius: 0` on principal panels, cards, diagrams, and callouts
- Circles only for nodes, connection points, status indicators, and signal markers
- Thin rules, strong alignment, visible grid participation
- No gradients, neon, glass, decorative shadows, or animation in this sprint

---

## Component system

| Component | Purpose |
|-----------|---------|
| `KnowledgeHero` | First viewport: domain rail, title, explanation, status + page-specific visualization |
| `DomainPositionMap` | Compact Technology → Systems → Applications position |
| `SignalDiagram` | Page-specific hero visualization variants |
| `ArchitectureMap` | Systems Overview relationship map with roles and boundaries |
| `DefinitionPanel` | Definition with label rail and measurement line |
| `ScopePanel` | Distinct panels for definition, scope, oversight, safety, notes, limitations |
| `ConceptGrid` | Architecture-participating concept cards by role |
| `RelationshipFlow` | Node + path verb relationship sequences |
| `KnowledgePageNavigation` | Supporting prev/next panels and related relationship cards |
| `EngineeringAnnotation` | Compact technical annotation |

Existing components refined (not duplicated): `EngineeringCardGrid` (role/relationship), `DefinitionPanel`, callout structure via `ScopePanel`.

---

## Page-specific diagrams (`SignalDiagram`)

| Page | Variant | Communicates |
|------|---------|--------------|
| Systems Overview | `systems-overview` | Technology → Systems → Applications |
| Technology Overview | `technology-overview` | Layered foundation stack |
| Human Data | `human-data` | Multiple sources into controlled boundary |
| Human Data Model | `human-data-model` | Categories linked by relationships |
| Data Infrastructure | `data-infrastructure` | Organize → authorize → serve |
| Knowledge Engine | `knowledge-engine` | Sources into context-only layer |
| AI Decision Support | `ai-decision-support` | Analysis stopping at human review |
| Safety Layer | `safety-layer` | Checks → limits → escalation → oversight |

Systems Overview also uses `ArchitectureMap` for the full system relationship board.

---

## Domain identity (composition first)

| Domain | Composition |
|--------|-------------|
| Technology | Dashed hero visual frame; foundation-role concept cards; layer coordinates |
| Systems | Solid/surface hero; architecture map zones; control and action roles |
| Applications / Research | Domain rail position only (pages not redesigned in this sprint) |

Functional signal accents (`--signal-human`, `--signal-knowledge`, `--signal-control`, `--signal-safety`, `--signal-action`) mark meaning on borders and dots. They are not marketing fills.

---

## Content rhythm

1. `KnowledgeHero` (subject + diagram)
2. Definition / architecture map
3. Responsibilities and explanatory body
4. Concept cards and relationship flows
5. Scope / oversight / engineering notes
6. Related knowledge and references
7. `KnowledgePageNavigation` (supporting)
8. Metadata + section nav (quiet supporting band)

Metadata, location, previous/next, and TOC no longer dominate the first viewport.

---

## Responsive behavior

- **Desktop:** Hero copy and diagram side by side; architecture board uses zones
- **Tablet:** Hierarchy preserved; endpoint grid collapses as needed
- **Mobile:** Layers and flows stack; labels remain readable; no required horizontal pan for meaning

---

## Accessibility decisions

- Diagrams expose captions and `aria-label` / `role="img"` or grouped labels
- Meaning is not color-only (labels, borders, structure)
- Links remain keyboard-focusable with visible focus outlines
- No animation added; reduced-motion tokens unchanged
- One `h1` per page (in `KnowledgeHero`)

---

## Pages updated

- Systems Overview
- Technology Overview
- Human Data
- Human Data Model
- Data Infrastructure
- Knowledge Engine
- AI Decision Support
- Safety Layer

Other published pages keep prior templates and remain functional. System leaves without dedicated hero variants still receive `KnowledgeHero` with the systems-overview signal diagram so layout stays consistent.

---

## Remaining presentation gaps

- Applications and Research domain destinations not fully composed under this visual system
- Remaining Technology leaves (Interoperability, Privacy, Security, AI, Automation, Robotics) still use thinner discipline templates
- Final brand colors and custom fonts remain deferred
- SVG connector lines between ArchitectureMap zones can be refined later without changing IA
- Arabic/Hebrew typography density can be tuned after visual QA on those locales

---

## Verification

- `npm run lint`
- `npm run type-check`
- `npm run build`
- Browser screenshots under `tmp/design-sprint-1/` (before/after)
