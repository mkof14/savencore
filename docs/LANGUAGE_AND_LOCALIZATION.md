# SAVEN Core — Language and Localization

**Status:** Active  
**Date:** 2026-07-24  
**Authority:** Language, Navigation and Footer Refinement sprint

---

## 1. Language principles

Public copy should read as if written by experienced people explaining complex ideas clearly.

- Simple, direct, natural English (canonical source)
- Short sentences; one idea per paragraph
- No AI tone, academic density, or buzzwords
- Understandable by healthcare professionals, engineers, researchers, investors, business leaders, and educated general readers
- See also `docs/TERMINOLOGY_GUIDE.md`

---

## 2. Terminology

UI chrome prefers reader-facing labels:

- Main topics
- What this covers / What comes next
- Notes
- Related concepts
- Document information
- Suggested reading
- Status

“Knowledge Object” remains an internal architecture term; public UI prefers Document / Topic / Page.

---

## 3. Navigation simplification

Top navigation exposes:

- Home
- Technology
- Systems
- Applications
- Trust
- Research

Company is omitted until published.

Dropdowns contain only a few key entry points. Full page lists live in the footer.

Purpose and Foundation remain published and are linked from the footer About / Resources groups.

---

## 4. Footer organization

The footer is the complete published site map.

Groups:

- About
- Technology
- Systems
- Applications
- Trust
- Research
- Resources

Legal policy destinations are omitted until published (no broken links).

Layout:

- Desktop: multi-column
- Tablet: two-column
- Mobile: accordion (`details` / `summary`)

---

## 5. Translation approach

### Content locales (full page bodies)

`en` · `ar` · `he` · `ru` · `uk`

### UI chrome locales (navigation, footer, labels)

All ten system locales: `en` · `es` · `de` · `fr` · `ja` · `zh-cn` · `ar` · `he` · `uk` · `ru`

Page bodies for `es` / `de` / `fr` / `ja` / `zh-cn` still fall back to English until approved. Any UI string change must update every UI locale catalog.

### Layers

1. **UI chrome** — `src/i18n/ui/{locale}.ts` via `getUi(locale)`
2. **Home** — `src/content/home/locales/{locale}.ts` via `getHomeContent(locale)`
3. **Page bodies** — English modules remain canonical; locale dictionaries under `src/content/pages/dictionaries/{locale}/` applied by `get-localized-page.ts`

### Rules

- Natural language per locale (not literal translation)
- No mixed-language pages for content locales
- No English placeholders in translated UI/body for content locales
- Keep SAVEN Core and stable product names consistent
- Preserve published URLs and English path slugs
- RTL (`ar`, `he`) uses document `dir` plus logical CSS

---

## 6. Remaining work outside this sprint

- Full localization for `es`, `de`, `fr`, `ja`, `zh-cn`
- Legal pages (Privacy Policy, Terms, Cookies) when authorized
- Glossary / Contact destinations when authorized
- Optional localization of diagram caption strings in SignalDiagram
