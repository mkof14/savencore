# SAVEN Core — Content Review 1: Technology Foundation

**Document status:** Complete  
**Date:** 2026-07-24  
**Review:** Content Review 1 — Technology Foundation  

---

## 1. Pages reviewed

| Page | Route |
|------|--------|
| Technology Index | `/[locale]/technology/` |
| Human Data | `/[locale]/technology/human-data/` |
| Human Data Model | `/[locale]/technology/human-data-model/` |

No new routes. No Entity Registry edits. No global navigation changes. Existing page templates were not redesigned.

---

## 2. Terminology decisions

Permanent plain-language definitions:

| Term | Definition |
|------|------------|
| **Technology** | The technical capabilities and engineering foundations used to build SAVEN Core systems. |
| **Human Data** | Information about a person from different sources. |
| **Human Data Model** | The structured representation that organizes Human Data and preserves context and relationships. |
| **Knowledge Engine** | A system layer that organizes knowledge and provides consistent context to other components. It does not make independent decisions. |
| **AI Decision Support** | A system that uses available information to support human review and decision-making. It does not replace human judgment. |

These definitions are used consistently across the three pages and recorded in `docs/DECISIONS_LOG.md`.

---

## 3. Duplicated content removed or narrowed

- Human Data Model category copy no longer restates Human Data category meanings; it describes how the model groups information and points readers to the Human Data page.
- Human Data model-relationship section no longer repeats long organizing detail; it states the difference and links forward.
- Technology Related Domains no longer links to unpublished `/systems/` and `/trust/` routes; live related pages only.
- Repeated “no production / no deployment” phrasing reduced to one clear scope statement per page where possible.

---

## 4. Readability improvements

- Titles, introductions and summaries rewritten in plain English.
- Executive Summary / first-body summary: two short paragraphs, 60–120 words, no unexplained terms.
- One idea per short paragraph; jargon reduced (`engineering substrate`, `permissioned representation`, etc.).
- Important terms introduced before reuse (especially Knowledge Engine and AI Decision Support on the Human Data Model page).
- Section naming aligned where helpful (`Future Topics`, Summary labels).

---

## 5. Cross-page flow

Reading path:

1. Technology Index  
2. Human Data  
3. Human Data Model  
4. Future Knowledge Engine page (mentioned in prose; not linked—page not published)

Reference Links updated on all three pages to support that path using live routes only.

---

## 6. Empty presentation

- Technology category blocks skip empty relation groups and empty Future Topics.
- Relationship matrix omits empty layers instead of showing placeholder text.
- `EntityRelationshipIndex` continues to omit empty groups.

---

## 7. Unresolved content gaps

- Technology category **summaries** still come from the Entity Registry and were not rewritten (registry edits out of scope).
- Knowledge Engine destination page does not exist yet.
- Systems and Trust domain index pages are not live; they remain architectural placeholders elsewhere in the project, but were removed from these three pages’ live link lists.
- Entity Registry `relatedPageLinks` for Human Data still point only to `/technology/` (registry not modified).

---

## 8. Pages / areas intentionally left unchanged

- Home and global navigation  
- Entity Registry (`entities.ts`, validation, helpers)  
- Page composition components’ overall structure (TechnologyPage, HumanDataPage, HumanDataModelPage section order)  
- Non-Technology knowledge pages (Purpose, Foundation, Research, Applications)  

---

## 9. Files touched

Content:

- `src/content/pages/en/technology.ts`
- `src/content/pages/en/human-data.ts`
- `src/content/pages/en/human-data-model.ts`

Presentation (empty-state only):

- `src/components/knowledge/TechnologyCategoryList.tsx`
- `src/components/knowledge/TechnologyRelationshipMatrix.tsx`

Docs:

- `docs/CONTENT_REVIEW_1_TECHNOLOGY_FOUNDATION.md`
- `docs/DECISIONS_LOG.md`
- `AGENTS.md`
