# SAVEN Core — Content Sprint: Technology Domain Complete

**Document status:** Complete  
**Date:** 2026-07-24  
**Sprint:** Technology domain completion  

---

## 1. Pages created

| Page | Route |
|------|--------|
| Interoperability | `/[locale]/technology/interoperability/` |
| Privacy | `/[locale]/technology/privacy/` |
| Security | `/[locale]/technology/security/` |
| Artificial Intelligence | `/[locale]/technology/artificial-intelligence/` |
| Automation | `/[locale]/technology/automation/` |
| Robotics | `/[locale]/technology/robotics/` |

Already complete before this sprint:

- Technology Index  
- Human Data  
- Human Data Model  
- Data Infrastructure  

The Technology domain now has a published leaf page for every Technology entity in the registry.

---

## 2. Editorial decisions

- Shared leaf template: `TechnologyDisciplinePage` with fixed section order (Metadata → Executive Summary → Why It Matters → Purpose → Core Concepts → Relationships → Principles → Scope → Future Topics → Related Systems / Research / Applications → Reference Links).
- Plain English; architecture level only; no vendors, cloud, APIs, databases or protocols.
- Approved terminology reused (Human Data, Human Data Model, Knowledge Engine, AI Decision Support, Technology).
- Each page focuses on its own responsibility; cross-links replace duplicated explanations.
- Shared live Reference Links list across the domain (excludes unpublished `/trust/` and `/systems/` destinations).
- Future Topics and relationship lists remain registry-driven; empty groups stay hidden.

---

## 3. Terminology updates

No redefinition of approved terms. Clarified page-local roles only:

| Discipline | Role emphasis |
|------------|----------------|
| Interoperability | Approved external exchange under limits |
| Privacy | What may be used, why, and by whom |
| Security | Protection of pathways and interfaces |
| Artificial Intelligence | Assisted judgment under oversight |
| Automation | Bounded delegated behavior |
| Robotics | Governed physical assistance |

---

## 4. Domain-wide review results

| Check | Result |
|-------|--------|
| Terminology | Consistent with D-0110 / D-0111 |
| Readability | Short paragraphs; summaries answer what / why / how |
| Section consistency | Shared template for six new pages |
| Page boundaries | Distinct responsibility per discipline |
| Internal references | Live Technology routes + Foundation / Research / Applications / Purpose |
| Metadata | Category Technology; Document Type Knowledge; Status Architecture |
| Engineering accuracy | No production, vendor or certification claims |
| Why It Matters | Present on all six new pages |
| Empty presentation | Hidden via `EntityRelationshipIndex` / Future Topics guards |

---

## 5. Unresolved gaps

- Systems and Trust domain index pages remain unpublished; registry relation links may still hash to those domains.
- Knowledge Engine and AI Decision Support system leaf pages are not yet published.
- Technology category summaries on the index still come from the Entity Registry (registry text not rewritten in this sprint).
- Existing Human Data / Human Data Model / Data Infrastructure page templates remain separate compositions (not migrated to `TechnologyDisciplinePage`) to avoid unnecessary redesign.

---

## 6. Files

Created: six routes, six content modules, shared types/helpers, `TechnologyDisciplinePage`, this document.

Modified: Technology index references; prior Technology leaf reference lists; `knowledge.css`; `AGENTS.md`; `DECISIONS_LOG.md`.
