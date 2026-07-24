# SAVEN Core — Phase 1F.1 Purpose & Foundation

**Document status:** Complete  
**Date:** 2026-07-24  
**Phase:** 1F.1 — Purpose & Foundation content architecture  

---

## 1. Objective

Establish Purpose and Foundation as permanent reference pages:

- **Purpose** answers why SAVEN Core exists.  
- **Foundation** answers what SAVEN Core is built upon.  

Tone: engineering organization. Not marketing, investor, or product documentation.

---

## 2. Final Purpose structure

Page type: Editorial  

| Order | Heading | Level |
|------:|---------|-------|
| 1 | Intelligent systems built to support human life. | H1 |
| 2 | Purpose | H2 |
| 3 | Mission | H2 |
| 4 | What We Build | H2 |
| 5 | Who We Build For | H2 |
| 6 | Engineering Principles | H2 |
| 6a–f | Six principles | H3 |
| 7 | Human-Centered Systems | H2 |
| 8 | Responsible Intelligence | H2 |
| 9 | Long-Term Vision | H2 |
| 10 | Related Pages | H2 |

Related links: Foundation, Technology, Research, Trust.

Diagram: Purpose orientation (flow).

---

## 3. Final Foundation structure

Page type: Technical  

| Order | Heading | Level |
|------:|---------|-------|
| 1 | A connected path from human understanding to physical systems. | H1 |
| 2 | Foundation hierarchy (diagram) | caption |
| 3 | BioMath Life | H2 |
| 3a–f | Purpose, Role, Relationship, Scope, Outputs, Dependencies | H3 |
| 4 | BioMath Core | H2 + same H3 fields |
| 5 | SAVEN | H2 + same H3 fields |
| 6 | SAVEN Core | H2 + same H3 fields |
| 7 | Layer model / Governed system flow / Relationship model | diagrams |
| 8 | Human Data Model | H2 |
| 9 | System Relationships | H2 |
| 10 | Technology Relationships | H2 |
| 11 | Development Philosophy | H2 |
| 12 | Related Pages | H2 |

Related links: Purpose, Technology, Systems, Research.

Layer order is fixed:

```
BioMath Life → BioMath Core → SAVEN → SAVEN Core
```

---

## 4. Architecture diagrams

HTML/CSS only (`ArchitectureDiagram`):

| Kind | Use on Foundation / Purpose |
|------|-----------------------------|
| `hierarchy` | Vertical foundation sequence |
| `layers` | Stacked layer model |
| `flow` | Purpose orientation; Observe→Learn |
| `relationship` | Foundation ↔ Human Data Model ↔ Systems ↔ Technology |

No images. Responsive flex/grid layouts. Semantic `figure` / `ol` with accessible descriptions.

---

## 5. Content organization

```
src/content/pages/en/purpose.ts
src/content/pages/en/foundation.ts
```

Content remains outside JSX. Page shells consume typed models only. English fallback remains active for all locales.

---

## 6. Component refinements

- `EditorialPage` — subsections, diagrams, Related Pages heading  
- `TechnicalPage` — foundation layers, diagrams, optional architecture sections  
- `ArchitectureDiagram` — shared HTML/CSS diagram renderer  
- `page-types.ts` — diagram, subsection, and layer field models  

No new page types.

---

## 7. Future expansion

Deferred:

- Child Foundation routes (`/foundation/biomath-life`, etc.)  
- Full Trust / Technology / Systems destination pages  
- Localized Purpose/Foundation translations  
- Phase 1F.2 and later content phases  

These pages are the reference base for later site sections.
