# SAVEN Core — Project Rules

**Document status:** Binding  
**Authority:** Derived from `SAVEN_CORE_MASTER_SPEC.md`  
**Last updated:** 2026-07-24  

These rules are non-negotiable for all human contributors and coding agents working on the SAVEN Core website.

---

## 1. Architecture and Scope Discipline

1. Do not change approved architecture without explicit owner instruction.
2. Do not proceed to the next development phase without owner approval.
3. Work in small, reviewable phases.
4. Do not generate all pages at once.
5. Before every phase, state:
   - objective;
   - files to create or change;
   - expected result;
   - what will not be changed.
6. After every phase, report:
   - files created;
   - files modified;
   - tests performed;
   - unresolved items;
   - assumptions made.

---

## 2. Truth and Claims

1. Do not invent company facts.
2. Do not invent products, claims, metrics, partners, customers, approvals, patents, or team members.
3. Do not invent completed products, deployed systems, commercial availability, medical outcomes, team size, revenue, investment, market traction, or unsupported technical specifications.
4. Do not represent development-stage concepts as operational or commercially available products.
5. Do not write final legal or medical claims without supplied approved text.
6. Never claim complete security, guaranteed safety, full legal compliance, regulatory approval, medical effectiveness, diagnostic capability, guaranteed privacy, or zero risk.
7. Prefer the approved language: “Designed around privacy, controlled access, data minimization, safety, traceability, and human oversight.”

---

## 3. Terminology and Naming

1. Do not replace SAVEN terminology with generic alternatives.
2. Preserve the foundation sequence naming: BioMath Life → BioMath Core → SAVEN → SAVEN Core.
3. Use “Purpose” as the principal navigation label; do not use “Mission” for that role.
4. Never silently change navigation labels, design tokens, content architecture, or naming conventions.
5. Do not add “Inc.” to the company name unless the legal entity name is confirmed.

---

## 4. Content Hierarchy and Purpose

1. Primary human applications must always appear before future commercial and industrial extensions.
2. AI and robotics are tools, not the purpose. Human support remains primary.
3. Foundation narrative must present BioMath Life, BioMath Core, SAVEN, and SAVEN Core as a continuous sequence, not unrelated projects.
4. Keep public and restricted information structurally separate.
5. Keep English (United States) as the canonical source language.

---

## 5. Status and Roadmap Integrity

1. Every relevant technology, system, lab, or roadmap item must support:
   - current status;
   - last updated date;
   - short status explanation;
   - public or restricted classification.
2. Use only the approved status values: Research, Architecture, In Development, Prototype, Validation, Pilot, Operational.
3. Current content defaults to Research, Architecture, or In Development unless owner-supplied status is higher and approved.
4. The roadmap must never be presented as a guarantee.

---

## 6. Design Integrity

1. Preserve straight corners throughout the design.
2. Do not introduce a rounded-card visual system.
3. Do not add visual effects merely to make the site look futuristic.
4. Avoid prohibited patterns listed in `DESIGN_PRINCIPLES.md`, including generic AI gradients, glowing spheres, excessive neon, glassmorphism, fake interfaces, and stock/unrelated robots.
5. Maintain light primary environment with carefully controlled dark technology sections.
6. Maintain WCAG 2.2 AA as the accessibility target.

---

## 7. Localization Integrity

1. Prepare all architecture for ten languages and RTL from the beginning.
2. Do not use browser auto-translation as the localization system.
3. Fallback to English when approved localized content is unavailable.
4. Arabic and Hebrew require complete RTL support across layout, navigation, typography, forms, media controls, diagrams, and motion direction.
5. Support translation status and review status for localized content.

---

## 8. Legal and Trust Integrity

1. Provide structural support for all required trust and legal pages.
2. Mark unapproved legal text as draft until legal review is complete.
3. Public website materials must not be presented as medical advice, diagnosis, treatment, emergency support, regulatory approval, or a substitute for a qualified professional.
4. Social network URLs remain configurable placeholders until official accounts are supplied. Do not invent URLs.

---

## 9. Technical Boundaries by Phase

1. Phase 0 creates documentation only.
2. Do not initialize Next.js, install dependencies, create `package.json`, generate pages, create visual components, or create images until a later phase is explicitly approved.
3. Planned stack (Next.js, TypeScript, App Router, React, next-intl, Vercel, structured content, later headless CMS) must not be installed or configured before approval.
4. Secure forms, cookie consent, and privacy-controlled analytics are required in later phases; do not invent vendor commitments before selection.

---

## 10. Change Control

1. Approved architecture, navigation, design tokens, content models, and naming may change only through owner instruction.
2. Record material decisions in `DECISIONS_LOG.md` (append-only).
3. Update `SAVEN_CORE_MASTER_SPEC.md` when a decision changes a source-of-truth rule.
4. If documents conflict, follow the Master Spec unless a later logged decision explicitly supersedes it.

---

## 11. Agent Compliance Checklist

Before modifying the project, every agent must:

1. Read `/AGENTS.md`.
2. Read `docs/SAVEN_CORE_MASTER_SPEC.md`.
3. Read `docs/PROJECT_RULES.md`.
4. Read any domain-specific docs relevant to the task (IA, content model, design, localization, trust/legal, roadmap).
5. Confirm the current approved phase and stay within its scope.
6. Refuse requests that require inventing company facts, product claims, or final legal text.
