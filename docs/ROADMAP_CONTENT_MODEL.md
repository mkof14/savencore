# SAVEN Core — Roadmap Content Model

**Document status:** Approved for Phase 0  
**Authority:** Derived from `SAVEN_CORE_MASTER_SPEC.md`  
**Last updated:** 2026-07-24  

This document defines the five-year roadmap structure for the SAVEN Core website.  
The roadmap represents a development horizon with continuing updates. **It must never be presented as a guarantee.**

---

## 1. Purpose

The roadmap system exists to:

1. communicate direction with engineering discipline;
2. show realistic development status;
3. connect objectives to systems and foundations;
4. separate public summaries from restricted details;
5. preserve change history as plans evolve.

It does not exist to invent timelines, product launches, commercial availability, or performance outcomes.

---

## 2. Horizon

- Horizon length: five years from the roadmap baseline year defined by the owner.
- Baseline year for public labeling must be explicitly set before roadmap publication.
- Continuing updates are expected; dates and statuses change over time.
- Absence of an item does not imply cancellation or secrecy by itself.

Until the owner supplies a baseline year and entries, the model remains empty of factual roadmap items.

---

## 3. Status System

Roadmap items use the shared public status system:

| Status | Public label |
|--------|----------------|
| `research` | Research |
| `architecture` | Architecture |
| `in_development` | In Development |
| `prototype` | Prototype |
| `validation` | Validation |
| `pilot` | Pilot |
| `operational` | Operational |

Current content defaults for most items:

- Research
- Architecture
- In Development

Do not assign Prototype, Validation, Pilot, or Operational unless owner-approved and factually justified.

---

## 4. Core Content Type: RoadmapItem

### 4.1 Required fields

| Field | Type | Required | Public | Notes |
|-------|------|----------|--------|-------|
| `id` | string | yes | yes | Stable ID |
| `title` | string | yes | yes | Short factual title |
| `year` | number | yes | yes | Calendar year in horizon |
| `phase` | string | yes | yes | Named phase label (owner-defined) |
| `objective` | string | yes | yes | What is being pursued |
| `system` | string \| string[] | yes | yes | Related system(s) / foundation node(s) |
| `status` | DevelopmentStatus | yes | yes | Current status |
| `statusExplanation` | string | yes | yes | Short explanation |
| `publicSummary` | string | yes | yes | Non-guaranteed public description |
| `visibility` | `public` \| `restricted` | yes | meta | Restricted items omitted from public site |
| `dependencies` | string[] | yes | yes/filtered | IDs of dependent items/systems; public-safe only in public payload |
| `lastUpdated` | date | yes | yes | ISO date |
| `changeHistory` | ChangeEvent[] | yes | summary only | Full detail may be restricted |

### 4.2 Optional fields

| Field | Type | Public | Notes |
|-------|------|--------|-------|
| `quarter` | `Q1`–`Q4` | optional | Use only if meaningful and approved |
| `applicationAreas` | string[] | yes | Prefer primary human applications first |
| `technologyAreas` | string[] | yes | |
| `labs` | string[] | yes | |
| `successSignals` | string[] | careful | Qualitative only; no invented metrics |
| `risks` | string[] | usually restricted | |
| `restrictedDetails` | richtext | no | Never public |
| `ownerNotes` | richtext | no | Internal |
| `displayOrder` | number | yes | Ordering within year/phase |
| `ctaLinks` | Link[] | yes | Only to real public pages |

### 4.3 ChangeEvent

| Field | Type | Required | Public |
|-------|------|----------|--------|
| `changedAt` | datetime | yes | yes (date) |
| `changeType` | `created` \| `status_change` \| `scope_change` \| `date_change` \| `clarification` \| `retired` | yes | yes |
| `summary` | string | yes | yes |
| `previousStatus` | DevelopmentStatus | no | yes if relevant |
| `newStatus` | DevelopmentStatus | no | yes if relevant |
| `internalNotes` | string | no | no |

---

## 5. Grouping and Views

Public roadmap views should support grouping by:

1. year;
2. phase;
3. system;
4. status;
5. application class (primary human vs future extension).

### Presentation order rules

1. Primary human applications context before future industrial extensions.
2. Foundation and enabling systems may appear early when they are prerequisites.
3. Do not present a launch calendar of commercial products unless true and approved.

### Recommended public sections (future UI)

- Horizon overview (non-guarantee statement)
- Year bands
- System tracks
- Status legend
- Update history (high-level)
- Link to Research Disclaimer / Roadmap disclaimer

---

## 6. Required Non-Guarantee Language

Every public roadmap surface must include a clear statement that:

1. items are directional;
2. timelines may change;
3. status updates are expected;
4. publication is not a commitment, offer, or product availability claim.

Structural disclaimer key: `roadmap_non_guarantee`

Placeholder orientation (not final legal text):

```
This roadmap describes a development horizon and may change.
It is not a guarantee of delivery, performance, availability, or regulatory approval.
```

Final disclaimer wording requires legal/owner approval.

---

## 7. Public vs Restricted Separation

### Public payload may include

- title, year, phase, objective
- system references that are public
- status and status explanation
- public summary
- public-safe dependencies
- last updated
- high-level change history summaries

### Public payload must never include

- `restrictedDetails`
- internal risks not approved for publication
- unpublished partner/customer names
- performance claims
- funding or commercial traction claims
- unapproved technical specifications

---

## 8. Validation Rules

1. `year` must fall within the defined five-year horizon once baseline is set.
2. `status` must be one of the approved enum values.
3. If `visibility = restricted`, item is excluded from public APIs and pages.
4. `publicSummary` must not contain guarantee language (“will ship”, “guaranteed”, “approved for clinical use”, etc.) unless explicitly owner-approved and factual.
5. `dependencies` must reference known IDs or be listed as unresolved owner inputs — do not invent systems.
6. Creating a RoadmapItem does not authorize Prototype/Operational claims.
7. English source is canonical; localized roadmap text follows `LOCALIZATION_SPEC.md`.

---

## 9. Relationship to Other Content Types

Roadmap items may reference:

- FoundationNode (BioMath Life, BioMath Core, SAVEN, SAVEN Core)
- System
- Lab
- TechnologyArea
- ApplicationArea
- ResearchItem

Referenced entities must already exist in the approved taxonomy. Do not invent new principal systems in roadmap entries without updating the Master Spec and Decisions Log.

---

## 10. Initial Taxonomy Anchors (No Invented Entries)

Roadmap entries, when later supplied by the owner, should anchor to approved areas such as:

**Foundation:** BioMath Life, BioMath Core, SAVEN, SAVEN Core  
**Systems:** SAVEN Robotics Interface, SAVEN Systems Architecture, SAVEN AI, SAVEN Drone Platform  
**Labs:** SAVEN Robotics Lab, Internal Future Lab  

No sample multi-year roadmap content is seeded in Phase 0 because factual entries have not been supplied.

---

## 11. Update Cadence

1. `lastUpdated` changes whenever status, scope, or public summary changes.
2. Material changes append a ChangeEvent.
3. Owner approval required before publishing status advances beyond current defaults.
4. Retired items remain in history with `changeType: retired` rather than disappearing silently, unless legal/privacy requires removal.

---

## 12. Phase 0 Boundary

Define the model only. Do not create roadmap page UI, seed fake milestones, or imply dates of delivery.
