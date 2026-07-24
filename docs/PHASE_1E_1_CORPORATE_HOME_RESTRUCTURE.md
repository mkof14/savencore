# SAVEN Core — Phase 1E.1 Corporate Home Restructure

**Document status:** Complete  
**Date:** 2026-07-24  
**Phase:** 1E.1 — Corporate Home Restructure  

---

## 1. Why the thirteen-section model was replaced

Phases 1D.1–1D.4 produced a complete but long presentation-style Home page. For a large multi-page institutional site, that model:

- told too much of the company story on one route;
- repeated promotional section rhythm;
- competed with Header navigation instead of supporting it.

Phase 1E.1 converts Home into a compact corporate gateway: explain quickly, list principal areas, and route into deeper pages.

---

## 2. Final seven-region Home structure

1. Hero  
2. Purpose and Foundation  
3. Applications  
4. Technology and Systems  
5. Research and Trust  
6. Development Status  
7. Company, Investors and Roadmap  

Global Footer follows region 7.

---

## 3. Content removed from Home presentation

Removed from Home rendering (not deleted from the content source):

- Full Human Purpose principles and second paragraph  
- Full Foundation stage descriptions and introduction  
- Five-step System Logic process and governance note  
- Full Technology discipline descriptions  
- Full Systems descriptions  
- Research–Labs relationship statement as a standalone block  
- Trust Architecture pillar descriptions and autonomy principle line  
- Company principles list and first long paragraph  
- Full Investors second paragraph  
- Roadmap four capability categories as a Home grid  

---

## 4. Content preserved for future destination pages

Retained in `src/content/home/en.ts` under preserved exports:

| Export | Intended destination use |
|--------|--------------------------|
| `humanPurposeContent` | Purpose page |
| `foundationChainContent` | Foundation page |
| `systemLogicContent` | Foundation / Technology page |
| `applicationContextsContent` | Applications page |
| `technologyOverviewContent` | Technology page |
| `systemsOverviewContent` | Systems page |
| `researchLabsContent` | Research / Labs pages |
| `trustArchitectureContent` | Trust page |
| `developmentStatusContent` | Status / about reuse |
| `companyOverviewContent` | Company page |
| `investorOverviewContent` | Investors page |
| `roadmapClosingContent` | Roadmap page |

Active Home presentation exports derive titles, roles, and shared strings from these sources where practical.

---

## 5. Component restructuring

**Active components**

- `HomeHero`  
- `PurposeFoundationOverview`  
- `ApplicationDirectory`  
- `TechnologySystemsDirectory`  
- `ResearchTrustOverview`  
- `DevelopmentStatus`  
- `CorporateClosing`  

**Removed Home-only components** (content preserved in `en.ts`)

- `HumanPurpose`, `ApplicationContexts`, `FoundationChain`, `SystemLogic`  
- `TechnologyOverview`, `SystemsOverview`, `ResearchLabs`, `TrustArchitecture`  
- `CompanyOverview`, `InvestorOverview`, `RoadmapClosing`  

---

## 6. Corporate directory visual model

- Compact institutional regions with reduced vertical padding  
- Directory lists and indexed rows for Technology / Systems  
- Status presented as an HTML table register  
- Closing region as three columns + closing statement  
- Distinct compositions per region; no repeated full-height marketing sections  
- Straight corners; no gradients, shadows, imagery, or cards  

---

## 7. Responsive behavior

- Hero field from 1024px; controlled height  
- Purpose/Foundation two-column from 1024px  
- Applications three-column from 768px  
- Technology/Systems dual directory from 1024px  
- Research/Trust and Closing three-column from 768px  
- Status table scrolls horizontally if needed at narrow widths  

---

## 8. RTL behavior

- Locale `dir` from shell remains authoritative  
- Logical CSS for padding, borders, and alignment  
- Locale-aware links via `localizePath`  

---

## 9. Accessibility

- Exactly one H1 (Hero)  
- One H2 per region after Hero  
- H3 for subordinate titles  
- Semantic lists and a status table with caption  
- Meaningful link text; visible focus states  
- Status conveyed as text, not color alone  

---

## 10. Deferred destination pages

Linked but not built in this phase, including:

`/purpose/`, `/foundation/`, `/applications/`, `/technology/`, `/systems/`, `/research/`, `/labs/`, `/trust/`, `/company/`, `/contact/`, `/investors/`, `/investors/access/`, `/roadmap/`

Phase 1E.2 destination-page development remains unauthorized.
