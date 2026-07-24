# AGENTS.md — SAVEN Core Website

This repository is the SAVEN Core public website project (`https://www.savencore.com`).

If you are a coding agent (Cursor or otherwise), read this file before making any changes.

---

## Current Phase

**Content Review 1 — Technology Foundation (authorized; clarity pass complete)**

Technology, Human Data and Human Data Model pages refined for plain language and a connected reading path. See `docs/CONTENT_REVIEW_1_TECHNOLOGY_FOUNDATION.md` and Decisions D-0110–D-0111. Home, navigation, Entity Registry and page templates were not redesigned.

**Do not begin without explicit owner approval:**

- Further content waves or domain destination-page build-out;
- Home redesign or navigation changes;
- Entity Registry edits unless explicitly authorized;
- custom brand fonts / final brand colors / logo asset / imagery;
- CMS, database, working search, forms, analytics, cookie consent;
- authentication or investor portal;
- leaf marketing pages across the sitemap;
- graph visualization or knowledge CMS.

---

## Mandatory Reading Order

Before modifying anything in this repository, read:

1. `docs/SAVEN_CORE_MASTER_SPEC.md` — complete source of truth
2. `docs/PROJECT_RULES.md` — non-negotiable development rules
3. `docs/DECISIONS_LOG.md` — approved decisions and phase authorization
4. Domain documents relevant to your task:
   - `docs/INFORMATION_ARCHITECTURE.md`
   - `docs/CONTENT_MODEL.md`
   - `docs/DESIGN_PRINCIPLES.md`
   - `docs/LOCALIZATION_SPEC.md`
   - `docs/TRUST_LEGAL_STRUCTURE.md`
   - `docs/ROADMAP_CONTENT_MODEL.md`

If documents conflict, follow the Master Spec unless a later `DECISIONS_LOG.md` entry explicitly supersedes it.

---

## Non-Negotiable Rules

1. Do not change approved architecture without explicit instruction.
2. Do not invent company facts.
3. Do not invent products, claims, metrics, partners, customers, approvals, patents, or team members.
4. Do not represent development concepts as operational products.
5. Do not generate all pages at once.
6. Work in small reviewable phases.
7. Before every phase, state objective, files to create or change, expected result, and what will not be changed.
8. After every phase, report files created, files modified, tests performed, unresolved items, and assumptions made.
9. Never silently change navigation, design tokens, content architecture, or naming.
10. Do not replace SAVEN terminology with generic alternatives.
11. Preserve straight corners throughout the design.
12. Do not add visual effects merely to make the site look futuristic.
13. Do not write final legal or medical claims without supplied approved text.
14. Keep public and restricted information structurally separate.
15. Keep English as the canonical source language.
16. Prepare all architecture for ten languages and RTL from the beginning.
17. Do not proceed to the next development phase without approval.

---

## Positioning Reminder

Primary public statement:

> Intelligent systems built to support human life.

Supporting statement:

> SAVEN Core develops intelligent systems that help people in hospitals, at home and wherever life happens — across every age and stage of life.

Core positioning:

> From human understanding to physical assistance.

Foundation sequence (continuous, not unrelated):

BioMath Life → BioMath Core → SAVEN → SAVEN Core

AI and robotics are tools, not the purpose. Human support is primary.

---

## Status Reminder

All principal systems are in development.

Use only approved statuses:

Research · Architecture · In Development · Prototype · Validation · Pilot · Operational

Current content primarily uses Research, Architecture, and In Development.

---

## Phase Protocol

### Before starting work

State:

- objective;
- files to create or change;
- expected result;
- what will not be changed.

Confirm the work is authorized by the current phase / Decisions Log.

### After finishing work

Report:

- files created;
- files modified;
- tests performed;
- unresolved items;
- assumptions made.

### Decision logging

Append material approvals and phase changes to `docs/DECISIONS_LOG.md`. Do not rewrite prior entries.

---

## Refusal Conditions

Refuse or stop and ask the owner when a request would require:

- inventing company facts, products, customers, partners, patents, metrics, or team members;
- presenting in-development systems as operational or commercially available;
- writing final legal, medical, or regulatory claims without approved text;
- silently changing navigation, taxonomy, or design principles;
- installing the application stack before Phase 1 (or later) authorization;
- skipping documentation governance for convenience.

---

## Copyright and Naming

Use:

```
© 2026 SAVEN Core. All rights reserved.
```

Do not add “Inc.” unless the legal company name is confirmed in the Decisions Log.
