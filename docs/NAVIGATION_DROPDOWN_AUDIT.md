# SAVEN Core — Navigation Dropdown Audit

**Document status:** Complete  
**Date:** 2026-07-24  
**Change:** Populate global navigation from published routes only  

---

## 1. Root cause

`src/navigation/site-navigation.ts` still described the Phase 1C planned IA:

- Technology children were **Systems** and **Labs** (not Technology leaf pages).
- Research/Company/utility/footer linked many unpublished routes.
- Desktop and mobile both consumed that tree, so dropdowns looked empty of useful children and pointed at 404s.

---

## 2. Shared source of truth

| Source | Role |
|--------|------|
| `src/navigation/published-routes.ts` | Canonical published route list |
| `technologyNavChildren` in `site-navigation.ts` | Technology dropdown + footer Technology links + Technology page references |
| `primaryNavigation` | Desktop + mobile primary menus |
| `footerNavigation` | Footer only (same published constraint) |

Desktop and mobile derive from `primaryNavigation` only. No per-component duplicate Technology lists.

---

## 3. Dropdowns reviewed

### Technology
Added / retained:

1. Technology Overview  
2. Human Data  
3. Human Data Model  
4. Data Infrastructure  
5. Interoperability  
6. Privacy  
7. Security  
8. Artificial Intelligence  
9. Automation  
10. Robotics  

### Systems
No Systems index or leaf pages are published. **No Systems dropdown** (avoids broken links). Gap documented below.

### Research (Labs / Research)
Published: `/research/` only.  
Dropdown contents:

1. Research Overview  

Removed unpublished: Publications, Roadmap, Labs, Research Areas.

### Company
`/company/` and children unpublished. **Removed** from primary navigation.

### Utility
Investors, Search, Contact unpublished. **Utility nav empty** (section hidden when empty).

---

## 4. Unpublished links removed

From primary / utility / footer (non-exhaustive of prior IA):

- `/systems/`, `/labs/`, and Systems leaf paths  
- `/company/`, leadership, careers, contact (as primary/utility)  
- `/trust/`, legal policy paths  
- `/investors/`, `/search/`  
- `/research/publications/`, `/roadmap/`, `/research/areas/`  
- Stale Technology footer paths (`autonomous-systems`, `human-data-and-intelligence`, `safety-architecture`, `privacy-architecture`)  
- Foundation leaf paths not yet published (`biomath-life`, etc.)  
- Applications leaf paths not yet published  

---

## 5. Presentation / behavior

- Technology panel uses two columns when more than six children.  
- Dropdown gap removed so hover can reach links.  
- Hover opens groups; click toggles; Escape closes; focus styles retained.  
- Square corners preserved.  

---

## 6. Remaining navigation gaps

| Gap | Status |
|-----|--------|
| Systems domain index / leaves | Not published — no nav entry yet |
| Labs | Not published |
| Company / Contact / Investors / Search | Not published |
| Trust / Legal pages | Not published |
| Research Publications / White Papers / Engineering Notes | Not published as routes |
| Applications category leaves | Index only |
| Foundation layer leaves | Index only |

When those routes ship, add them to `published-routes.ts` and the relevant nav children in `site-navigation.ts`.

---

## 7. Reachability of published pages

Every published primary page is reachable from header and/or footer:

Purpose, Foundation, Technology (+ all Technology leaves), Applications, Research, Home (brand).
