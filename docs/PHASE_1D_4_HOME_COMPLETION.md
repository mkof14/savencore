# SAVEN Core — Phase 1D.4 Home Completion

**Document status:** Complete  
**Date:** 2026-07-24  
**Phase:** 1D.4 — Development Status, Company, Investors, Roadmap  

---

## 1. Final page order

Authorized Home order after Phase 1D.4:

1. Hero  
2. Human Purpose  
3. Hospital / Home / Everyday Life  
4. Foundation Chain  
5. How the System Works  
6. Technology Overview  
7. Systems  
8. Research & Labs  
9. Safety, Privacy and Human Oversight (Trust Architecture)  
10. Development Status  
11. Company  
12. Investors  
13. Roadmap / Closing section  

Nothing below section 13 except the global Footer.

---

## 2. Development Status structure

- Label: Development Status  
- H2 + introduction  
- Ordered four-stage sequence with explicit Status labels  
- Stages: Foundation (Established), Digital Systems (In development), Physical Systems (Planned and under research), Deployment Readiness (Future phase)  
- Status note clarifying no commercial deployment, clinical use, or regulatory approval implication  
- No dates, percentages, or progress bars  

---

## 3. Company structure

- Label: Company  
- Editorial H2 + two body paragraphs  
- Three principles as an indexed rail: Purpose before technology; Engineering before promotion; Responsibility before scale  
- Links: About SAVEN Core → `/{locale}/company/`; Contact → `/{locale}/contact/`  
- No headquarters, legal entity, headcount, leadership, or partner claims  

---

## 4. Investors structure

- Label: Investors  
- Restrained institutional panel (surface + border; not a promotional banner)  
- Two body paragraphs; development-safe language only  
- Links: Investor overview → `/{locale}/investors/`; Request access → `/{locale}/investors/access/`  
- No funding, valuation, revenue, forecast, or automated-access claims  

---

## 5. Roadmap closing structure

- Label: Roadmap  
- Four capability categories: Architecture, Software, Physical Systems, Readiness  
- Link: View roadmap → `/{locale}/roadmap/`  
- Closing statement: Intelligent systems are valuable only when people can understand, govern and trust how they are used.  
- No dated milestones, delivery years, or fake timelines  

---

## 6. Development-safe language

- Staged development framing throughout  
- Explicit non-implication note on public status  
- Investor materials described as possible content types, not available products  
- Roadmap organized by capability and responsibility, not calendar promises  

---

## 7. Complete Home review

Reviewed for:

- Approved section order preserved  
- Distinct compositions across final four sections  
- Heading hierarchy: one H1 (Hero); one H2 per section  
- Repeated themes (Foundation / Physical Systems) retained as intentional status vs roadmap framing  
- No contradictory terminology introduced  
- Link treatment consistent with existing Home actions and text links  
- Destination pages remain deferred  

---

## 8. Responsive behavior

- Development Status: stacked rows; two-column meta/body from 768px  
- Company: editorial stack; editorial + principle rail from 1024px  
- Investors: single panel with responsive padding  
- Roadmap: one-column categories; 2×2 from 768px; closing block below  

---

## 9. RTL behavior

- Locale `dir` from shell remains authoritative for `ar` / `he`  
- Logical CSS properties used for padding, borders, and alignment  
- Locale-aware links via `localizePath`  

---

## 10. Accessibility

- Exactly one H1 on Home  
- H2 for each section heading; H3 for stages, principles, and categories  
- Semantic ordered list for Development Status stages  
- Status conveyed with text labels, not color alone  
- Visible focus states on interactive links  
- Decorative indexes `aria-hidden`  

---

## 11. Deferred destination pages

Routes linked but not built in this phase:

- `/{locale}/company/`  
- `/{locale}/contact/`  
- `/{locale}/investors/`  
- `/{locale}/investors/access/`  
- `/{locale}/roadmap/`  

---

## 12. Deferred localization

English remains the controlled fallback for all locale Home routes until localization is authorized.
