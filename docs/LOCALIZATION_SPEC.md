# SAVEN Core — Localization Specification

**Document status:** Approved for Phase 0  
**Authority:** Derived from `SAVEN_CORE_MASTER_SPEC.md`  
**Last updated:** 2026-07-24  
**Source language:** English (United States)

This document defines locales, routing, translation workflow, fallback behavior, and RTL requirements. No i18n libraries are installed in Phase 0.

---

## 1. Goals

1. Support ten languages from the beginning of architecture.
2. Keep English as the canonical source of truth.
3. Never use browser auto-translation as the localization system.
4. Provide complete RTL support for Arabic and Hebrew.
5. Fall back to English when approved localized content is unavailable.
6. Track translation status and review status for every localized record.

---

## 2. Supported Locales

| Locale code | Language | Direction | Notes |
|-------------|----------|-----------|-------|
| `en` | English (United States) | LTR | Source / canonical |
| `es` | Spanish | LTR | |
| `de` | German | LTR | Expect longer strings |
| `fr` | French | LTR | Expect longer strings |
| `ja` | Japanese | LTR | CJK typography considerations |
| `zh-cn` | Simplified Chinese | LTR | CJK typography considerations |
| `ar` | Arabic | RTL | Full RTL required |
| `he` | Hebrew | RTL | Full RTL required |
| `uk` | Ukrainian | LTR | Cyrillic |
| `ru` | Russian | LTR | Cyrillic |

---

## 3. Routing

### 3.1 Required locale prefixes

- `/en/`
- `/es/`
- `/de/`
- `/fr/`
- `/ja/`
- `/zh-cn/`
- `/ar/`
- `/he/`
- `/uk/`
- `/ru/`

### 3.2 Path structure

```
/{locale}/{path}
```

Examples:

```
/en/purpose
/es/purpose
/ar/foundation/biomath-core
```

### 3.3 Default locale behavior

Future implementation decision (to be confirmed before build):

- Recommendation recorded for owner confirmation: redirect `/` to `/en/` or serve English at `/` with hreflang alternatives.
- Locale-prefixed routes remain mandatory for all supported languages.

Until owner decision, architecture must support locale-prefixed English at `/en/`.

### 3.4 Slugs

Phase 0 default: English slugs across locales for stability.

Localized slugs may be considered later only with owner approval and redirect maps.

---

## 4. Translation Workflow

### 4.1 Status fields

Every localized content variant must include:

| Field | Values |
|-------|--------|
| `translationStatus` | `not_started`, `in_progress`, `translated`, `in_review`, `approved`, `needs_update` |
| `reviewStatus` | `unreviewed`, `reviewed`, `approved` |

### 4.2 Publish rule

A localized variant may be publicly served only when:

1. `translationStatus` is `approved`, and
2. `reviewStatus` is `approved`.

Otherwise, fall back to English.

### 4.3 Source update rule

When English source content changes materially:

1. Mark related locale variants `needs_update`.
2. Continue serving last approved locale version **or** fall back to English according to a per-content policy.
3. Default policy: fall back to English if the approved locale version is stale relative to a critical source change (legal, safety, status, medical disclaimer).

### 4.4 Roles (logical)

- Author (English source)
- Translator
- Reviewer
- Approver

Tooling may be manual in early phases; workflow states remain required.

---

## 5. Fallback Behavior

1. Missing locale variant → serve English content with locale UI chrome if available.
2. Unapproved locale variant → serve English content.
3. Partial page translation is discouraged; prefer whole-page fallback for narrative pages.
4. UI chrome (nav labels, buttons, form labels) may be localized independently from page body content, but only approved UI strings are shown.
5. If UI chrome strings are missing, fall back to English UI strings.
6. Never silently machine-translate on request as a substitute for approved content.

### Language switcher behavior

When switching from locale A to locale B:

1. If approved equivalent exists, keep the same logical page.
2. If not, navigate to the English equivalent of the same page, or the locale home if no equivalent exists.
3. Persist user locale preference by later-approved privacy-compliant method.

---

## 6. Metadata and SEO

1. Every public page must support localized metadata.
2. Provide `hreflang` annotations for all available approved locales.
3. `x-default` should point to the English source URL pattern pending owner SEO decision.
4. Localized `title` and `description` must be translated and approved; otherwise English metadata is used.
5. Do not generate keyword-stuffed localized metadata.

---

## 7. RTL Requirements

Arabic (`ar`) and Hebrew (`he`) require complete RTL support.

### 7.1 Must flip or adapt

- layout direction;
- navigation;
- menus;
- typography;
- forms;
- arrows;
- breadcrumbs;
- tables;
- diagrams (layout/chrome; technical meaning must remain correct);
- carousels;
- animation direction where direction encodes meaning;
- mobile navigation;
- icons that imply direction;
- separators and chevrons.

### 7.2 Mixed-direction technical content

System names, code-like identifiers, and Latin trademarks (e.g., “BioMath Core”, “SAVEN AI”) may remain in source form inside RTL pages.

Requirements:

1. Use correct bidirectional isolation so Latin terms do not break surrounding RTL sentences.
2. Do not reverse Latin product names.
3. Diagrams with Latin labels must remain legible and semantically correct.
4. Forms must accept mixed-direction input safely.

### 7.3 Implementation constraints (future phase)

- Set document `dir` and lang correctly per locale.
- Logical CSS properties preferred over physical left/right where possible.
- Direction-aware components must be tested in both LTR and RTL.
- Mirrored decorative effects are insufficient if interaction order remains LTR-incorrect.

---

## 8. Formatting and Locale Conventions

Future implementation must support locale-aware:

- dates;
- numbers (if any are shown);
- quotation styles where relevant;
- open-graph locale tags.

Do not invent metrics solely to demonstrate formatting.

---

## 9. Content Types Subject to Localization

At minimum:

- navigation labels;
- footer labels;
- page titles and summaries;
- body sections;
- status labels and status explanations;
- legal/trust titles and approved texts;
- form labels and system messages;
- metadata.

Restricted fields are not localized for public output because they are not public.

---

## 10. Quality Bar

Translations must be:

- clear;
- direct;
- factual;
- culturally appropriate;
- consistent with SAVEN terminology;
- free from inflated claims;
- reviewed by a qualified reviewer before approval.

Do not replace SAVEN terminology with generic local equivalents that erase brand meaning.

---

## 11. Planned Technical Direction (Not Implemented in Phase 0)

- next-intl (planned)
- App Router locale segments
- message catalogs / structured content localization
- RTL-aware layout system

Do not install or configure these in Phase 0.

---

## 12. Open Decisions for Owner

1. Should `/` redirect to `/en/` or serve English without prefix?
2. Are localized slugs desired in a later phase?
3. Stale-translation policy exceptions beyond legal/safety/status pages?
4. Preferred translation vendor or internal process?

---

## 13. Phase 0 Boundary

Documentation only. No locale route implementation, message files, or i18n package installation.
