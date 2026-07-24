# SAVEN Core — Phase 1D.2 Foundation and System Logic

**Document status:** Complete  
**Date:** 2026-07-24  
**Phase:** 1D.2 — Foundation Chain, System Logic, Technology Overview  

---

## 1. Page extension order

Authorized Home order after Phase 1D.2:

1. Hero  
2. Human Purpose  
3. Hospital / Home / Everyday Life  
4. Foundation Chain  
5. How the System Works (System Logic)  
6. Technology Overview  

Nothing below Technology Overview except neutral end spacing.

---

## 2. Foundation Chain composition

- Label: Foundation  
- H2 + introduction  
- Ordered list of four stages with index, title, role, description  
- Vertical connector lines between stages (decorative, `aria-hidden`)  
- Progression structure — not four cards  

Stages: BioMath Life → BioMath Core → SAVEN → SAVEN Core  

---

## 3. System Logic composition

- Label: System Logic  
- H2  
- Five-step ordered process grid: Observe → Understand → Evaluate → Assist → Learn  
- Understand retains **Human Data Model** terminology  
- Governance note below the process (distinct top border; not a warning box)  
- Governed assistance framing — not a fully autonomous loop  

---

## 4. Technology taxonomy

- Label: Technology  
- H2 + introduction  
- Six indexed disciplines in a responsive grid  
- Each links to `/{locale}/technology/`  
- Technology as enabling disciplines — not “AI-first” positioning  

Areas: Artificial Intelligence, Robotics, Autonomous Systems, Human Data and Intelligence, Safety Architecture, Privacy Architecture  

---

## 5. Content storage

Extended `src/content/home/en.ts` with:

- `foundationChainContent`  
- `systemLogicContent`  
- `technologyOverviewContent`  

Content remains outside JSX. English fallback continues for all locale routes.

---

## 6. Responsive behavior

- Foundation: single-column vertical progression at all widths  
- System Logic: 1 → 2 → 5 columns across breakpoints  
- Technology: 1 → 2 → 3 columns  
- No horizontal overflow at 320px  

---

## 7. RTL behavior

- Document `dir` from locale layout  
- Logical CSS properties for borders, padding, and connectors  
- Reading order follows DOM order of ordered/unordered lists  

---

## 8. Accessibility

- Exactly one H1 (Hero)  
- Each new section uses one H2  
- Stage/step/area titles use H3  
- Foundation and System Logic use semantic `<ol>`  
- Decorative connectors/indexes marked `aria-hidden` where appropriate  
- Visible focus on technology links  

---

## 9. Development-safe language

- “Being developed” / defined-role framing  
- No operational deployment claims  
- No diagnosis, continuous medical monitoring, or unreviewed self-learning claims  
- No “digital twin” language  

---

## 10. Intentionally deferred

Not created in Phase 1D.2:

7. Systems  
8. Research & Labs  
9. Safety • Privacy • Human Oversight (standalone section)  
10. Development Status  
11. Company  
12. Investors  

Phase 1D.3 remains unauthorized.
