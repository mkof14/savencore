# SAVEN Core — Phase 1D.3 Systems, Research and Trust

**Document status:** Complete  
**Date:** 2026-07-24  
**Phase:** 1D.3 — Systems, Research & Labs, Trust Architecture  

---

## 1. Page extension order

Authorized Home order after Phase 1D.3:

1. Hero  
2. Human Purpose  
3. Hospital / Home / Everyday Life  
4. Foundation Chain  
5. How the System Works  
6. Technology Overview  
7. Systems  
8. Research & Labs  
9. Safety, Privacy and Human Oversight (Trust Architecture)  

Nothing below section 9 except neutral end spacing.

---

## 2. Systems composition

- Label: Systems  
- H2 + introduction  
- Ordered architectural list of five systems  
- Each item: index, role, title, description, link to `/{locale}/systems/`  
- Stacked editorial rows — not equal marketing tiles  

Systems: SAVEN Robotics Interface, SAVEN Systems Architecture, SAVEN AI, SAVEN Drone Platform, Human Data Model Interface  

---

## 3. Research versus Labs separation

- Label: Research & Labs  
- H2 + introduction  
- Two-layer comparison panel (Research | Labs)  
- Distinct backgrounds/borders; separate destinations  
- Relationship statement beneath the pair  

Research → `/{locale}/research/`  
Labs → `/{locale}/labs/`  

---

## 4. Trust Architecture composition

- Label: Trust Architecture  
- H2 + introduction  
- Three pillars: Safety Architecture, Privacy Architecture, Human Oversight  
- Principle line: autonomy limited by purpose, permission, risk and human authority  
- Engineering principles — not certifications or compliance claims  

---

## 5. Development-safe language

- “Being developed” / “intended to support” framing  
- No deployment, medical-device approval, or autonomous decision-authority claims  
- No partnership, university, or publication counts  
- No compliance or formal validation claims  

---

## 6. Content storage

Extended `src/content/home/en.ts` with:

- `systemsOverviewContent`  
- `researchLabsContent`  
- `trustArchitectureContent`  

English fallback remains active for all locale routes.

---

## 7. Responsive / RTL / accessibility

- Systems: stacked rows; two-column meta/body from `md`  
- Research & Labs: 1 → 2 columns  
- Trust: 1 → 3 pillars  
- Logical CSS; one H1; H2 per section; H3 for item titles  
- Meaningful links; visible focus  

---

## 8. Deferred Home sections

Not created in Phase 1D.3:

10. Development Status  
11. Company  
12. Investors  

Phase 1D.4 remains unauthorized.
