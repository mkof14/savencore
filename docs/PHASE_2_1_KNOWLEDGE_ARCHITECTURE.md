# SAVEN Core — Phase 2.1 Knowledge Architecture

**Document status:** Complete  
**Date:** 2026-07-24  
**Phase:** 2.1 — Knowledge Architecture  

---

## 1. Objective

Establish SAVEN Core as an engineering knowledge center by defining:

- major knowledge domains;
- relationships between domains;
- page hierarchy placeholders;
- reusable knowledge navigation and visual blocks.

This phase does **not** redesign Home, change site navigation, or rewrite Purpose/Foundation pages.

---

## 2. Knowledge map

Top-level domains:

1. Purpose  
2. Foundation  
3. Technology  
4. Systems  
5. Research  
6. Applications  
7. Trust  
8. Company  

Each domain record includes: purpose, scope, parent, children, related domains, future expansion placeholders.

Canonical registry:

```
src/content/knowledge/
  types.ts
  domains.ts
  technology.ts
  systems.ts
  research.ts
  applications.ts
  index.ts
```

---

## 3. Domain hierarchy

| Domain | Children (architecture ids) |
|--------|-----------------------------|
| Purpose | purpose, mission, what-we-build, who-we-build-for, engineering-principles, human-centered-systems, responsible-intelligence, long-term-vision |
| Foundation | biomath-life, biomath-core, saven, saven-core, human-data-model, system-relationships, technology-relationships, development-philosophy |
| Technology | artificial-intelligence, human-data, robotics, automation, privacy, security, data-infrastructure, interoperability |
| Systems | human-data-model, ai-decision-support, robotics-layer, drone-systems, clinical-interfaces, knowledge-engine, safety-layer, communication-layer |
| Research | research-areas, white-papers, engineering-notes, publications, future-research, laboratories |
| Applications | healthcare, home, hospitals, emergency, industrial, government, agriculture, research |
| Trust | safety-architecture, privacy-architecture, human-oversight, permissions, accountability |
| Company | about, approach, collaboration, contact |

---

## 4. Relationship model

Required cross-links (domain → related domains):

| Domain | Related |
|--------|---------|
| Technology | Systems, Research, Trust, Foundation |
| Systems | Technology, Applications, Research, Trust |
| Research | Technology, Systems, Foundation (+ Trust) |
| Purpose | Foundation, Trust, Research, Company |
| Foundation | Purpose, Technology, Systems, Research |
| Applications | Systems, Technology, Purpose, Trust |
| Trust | Purpose, Systems, Technology, Research |
| Company | Purpose, Research, Applications, Trust |

Technology subsections also reference related systems. Systems subsections reference related technology and applications. Applications categories reference systems and domains.

---

## 5. Visual blocks

Reusable CSS-only components in `src/components/knowledge/`:

| Block | Role |
|-------|------|
| Knowledge Index | Indexed domain list |
| Section Navigator | Optional section/domain links (not sticky) |
| Related Topics | Cross-domain links |
| Engineering Note | Restrained note callout |
| Future Expansion | Explicit deferred-topic list |
| Architecture Diagram | hierarchy / layers / flow / relationship figures |

No images. Straight corners. No gradients or shadows.

---

## 6. Future expansion strategy

1. Keep architecture records ahead of long-form content.  
2. Add destination pages by consuming knowledge models — do not invent alternate taxonomies.  
3. Fill white papers / publications only with owner-approved entries.  
4. Preserve human application precedence over industrial extensions.  
5. Trust and Company remain domains even before full destination pages exist.  

Phase 2.2 and destination build-out remain unauthorized until explicitly approved.

---

## 7. Out of scope (this phase)

- Home redesign  
- Navigation changes  
- Backend, CMS, search, forms  
- Long-form Technology / Systems / Research / Applications pages  
- New marketing claims  
