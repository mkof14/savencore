# SAVEN Core — Phase 1E.2 Internal Page Architecture

**Document status:** Complete  
**Date:** 2026-07-24  
**Phase:** 1E.2 — Internal Page Architecture  

---

## 1. Four page types

| Type | Component | Intended uses |
|------|-----------|---------------|
| Editorial | `EditorialPage` | Purpose, About, Trust |
| Technical | `TechnicalPage` | Foundation, Technology, Systems |
| Research | `ResearchPage` | Research, Publications, Labs |
| Directory | `DirectoryPage` | Applications, Investors, Roadmap, Contact, Search |

---

## 2. Shared page structure

Every internal page type uses:

1. Compact page masthead (label, H1, introduction, optional status)  
2. Optional local section navigation  
3. Optional development / access note  
4. Main content region (type-specific)  
5. Related links  
6. Global Footer (from locale layout)  

Internal mastheads are deliberately more compact than the Home Hero. Home Hero components are not reused.

---

## 3. Component architecture

```
src/components/pages/
  page-types.ts
  pages.css
  PageMasthead.tsx
  PageIntro.tsx
  PageSectionNav.tsx
  PageRelatedLinks.tsx
  EditorialPage.tsx
  TechnicalPage.tsx
  ResearchPage.tsx
  DirectoryPage.tsx
```

Reusable page-level architecture only. No Button/Card/Modal framework. No route-specific company copy inside reusable components.

---

## 4. Typed data models

Defined in `page-types.ts`:

- Common: `label`, `title`, `introduction`, optional `status`, `sectionNav`, `relatedLinks`  
- Editorial: `sections`, optional `principles`  
- Technical: `architectureSections`, optional `indexedItems`, `developmentNote`  
- Research: `areas`, optional `entries`, `filterLabels` (structural only)  
- Directory: `entries`, optional `groups`, `accessNote`  

No CMS schemas. No database models.

---

## 5. Demonstration routes

| Route | Page type |
|-------|-----------|
| `/{locale}/purpose/` | Editorial |
| `/{locale}/foundation/` | Technical |
| `/{locale}/research/` | Research |
| `/{locale}/applications/` | Directory |

These routes validate the architecture with concise approved content. Full destination-page content is deferred.

---

## 6. Content storage

```
src/content/pages/en/
  purpose.ts
  foundation.ts
  research.ts
  applications.ts
```

English is the controlled fallback for all valid locales. No additional locale translation files in this phase. Content remains outside JSX.

---

## 7. Local navigation

- Optional via `sectionNav`  
- Anchor links to section `id` values  
- Keyboard accessible; visible focus styles  
- Not sticky  
- No JavaScript scroll spy  
- Section `:target` outline provides a restrained active cue without scroll tracking  
- RTL-safe flex wrapping and logical properties  

---

## 8. Responsive behavior

- Compact masthead at all breakpoints  
- Directory entries: one column → three columns from 768px  
- Directory groups: one column → two columns from 768px  
- Technical index: number + body grid  
- Editorial body constrained for reading length  

---

## 9. RTL behavior

- Locale `dir` from `app/[locale]/layout.tsx`  
- Logical CSS for padding and borders  
- Locale-aware related and directory links via `localizePath`  

---

## 10. Accessibility

- Exactly one H1 per page (masthead)  
- Correct H2/H3 hierarchy within each type  
- Semantic `article`, `section`, `nav`, lists  
- Meaningful link text  
- Visible focus states  
- Filter chips are non-interactive placeholders with an explicit note  

---

## 11. Deferred full destination-page development

Not created in this phase:

- Technology, Systems, Labs, Publications, Trust, Company/About  
- Investors, Roadmap, Contact, Search  
- Full long-form destination content beyond demonstration pages  

Phase 1E.3 remains unauthorized.
