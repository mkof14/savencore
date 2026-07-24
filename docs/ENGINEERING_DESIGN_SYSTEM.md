# SAVEN Core — Engineering Design System

**Document status:** Complete  
**Date:** 2026-07-24  
**Phase:** 2.2 — Engineering Documentation Design System  

---

## 1. Visual principles

1. Engineering documentation clarity over promotional layout.  
2. Straight corners only (`border-radius: 0`).  
3. No gradients, shadows, glass, or decorative imagery.  
4. Neutral palette only — no warning/alert color language in callouts.  
5. Consistent spacing, borders, typography, and link treatment.  
6. Home and global navigation remain outside this system’s redesign scope.  

Canonical styles: `src/components/engineering/engineering.css`  
Canonical components: `src/components/engineering/`

---

## 2. Content blocks

| Block | Component |
|-------|-----------|
| Engineering Summary | `EngineeringSummary` |
| Key Principles | `KeyPrinciples` |
| Architecture Overview | `ArchitectureOverview` |
| System Layers | `SystemLayers` |
| Engineering Note | `EngineeringNoteBlock` / `EngineeringCallout` |
| Implementation Status | `ImplementationStatus` |
| Dependencies | `Dependencies` |
| Related Topics | `RelatedTopicsBlock` |
| Future Expansion | `FutureExpansionBlock` |
| Reference Links | `ReferenceLinks` |

Each block uses `.eng-block` rhythm: shared heading, body measure, divider spacing.

---

## 3. Typography

Utility classes:

| Role | Class |
|------|-------|
| H1 | `.eng-type-h1` |
| H2 | `.eng-type-h2` |
| H3 | `.eng-type-h3` |
| Body | `.eng-type-body` |
| Caption | `.eng-type-caption` |
| Metadata | `.eng-type-metadata` |
| Labels | `.eng-type-label` |
| Technical terms | `.eng-type-term` |
| Code | `.eng-type-code` / `.eng-code` |

Internal page mastheads retain existing page-type selectors but share the same token values.

---

## 4. Metadata

`DocumentMetadata` supports optional fields:

- Category  
- Document Type  
- Status  
- Version  
- Last Updated  
- Reading Time  
- Related Domain  

Rendered as a definition list (`.eng-metadata`). All fields optional.

---

## 5. Callouts

Four permanent types (neutral engineering style only):

| Type | Class |
|------|-------|
| Information | `.eng-callout--information` |
| Engineering Note | `.eng-callout--engineering-note` |
| Important | `.eng-callout--important` |
| Future Work | `.eng-callout--future-work` |

No warning colors. Differentiation is border weight/style and surface only.

---

## 6. Tables

One table system: `.eng-table`

Variants:

- `architecture`  
- `taxonomy`  
- `relationships`  
- `status`  

Support via `EngineeringTable` and `ImplementationStatus`. No decorative styling.

---

## 7. Diagrams

One diagram language shared across:

- `.eng-diagram`  
- `.page-diagram` (existing Purpose/Foundation pages)  
- `.knowledge-diagram` (knowledge architecture blocks)  

Kinds: `hierarchy`, `layers`, `flow`, `relationship`.

HTML/CSS primary. SVG allowed for straight geometry only (`.eng-diagram-svg`). No images, gradients, or shadows.

---

## 8. Page rhythm

Recommended composition order:

```
Masthead
→ optional Document Metadata
→ Intro
→ Section content
→ Diagram
→ Table
→ Callouts / Notes
→ Related Topics / Reference Links
→ Future Expansion
→ Footer (global shell)
```

Spacing uses the global `--space-*` scale. Block separators use `--color-divider`.

---

## 9. CSS organization

| File | Role |
|------|------|
| `engineering/engineering.css` | Shared system (typography, blocks, callouts, tables, diagrams) |
| `pages/pages.css` | Page-type compositions only; imports engineering.css |
| `knowledge/knowledge.css` | Knowledge compositions only; imports engineering.css |
| `home/home.css` | Unchanged Home gateway styles |

No route-specific style files.

---

## 10. Compatibility

Phase 2.2 consolidates shared visuals without redesigning Home, changing navigation, or adding routes/pages. Existing Purpose, Foundation, Research, and Applications routes continue to use page-type components; their diagram styles now resolve through the engineering system.
