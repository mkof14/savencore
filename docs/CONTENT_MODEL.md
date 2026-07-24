# SAVEN Core — Content Model

**Document status:** Approved for Phase 0  
**Authority:** Derived from `SAVEN_CORE_MASTER_SPEC.md`  
**Last updated:** 2026-07-24  
**Canonical language:** English (United States)

This document defines structured content types and required fields for the public website. It does not invent company facts or final marketing copy beyond approved statements in the Master Spec.

---

## 1. Content Principles

1. English is the canonical source for all content records.
2. Localized variants reference the English source and carry translation/review status.
3. Public and restricted fields must be structurally separate.
4. Status fields are mandatory for systems, labs, technology areas, applications (where development claims appear), and roadmap items.
5. Do not invent facts to fill fields. Leave fields empty or marked `not_supplied` until owner content is provided.
6. Avoid inflated marketing language per Master Spec content principles.

---

## 2. Shared Enumerations

### 2.1 DevelopmentStatus

- `research`
- `architecture`
- `in_development`
- `prototype`
- `validation`
- `pilot`
- `operational`

Display labels:

- Research
- Architecture
- In Development
- Prototype
- Validation
- Pilot
- Operational

### 2.2 Visibility

- `public`
- `restricted`

### 2.3 TranslationStatus

- `not_started`
- `in_progress`
- `translated`
- `in_review`
- `approved`
- `needs_update`

### 2.4 ContentLifecycle

- `draft`
- `review`
- `approved`
- `published`
- `archived`

### 2.5 Locale

`en`, `es`, `de`, `fr`, `ja`, `zh-cn`, `ar`, `he`, `uk`, `ru`

---

## 3. Shared Field Groups

### 3.1 Identity

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| `id` | string | yes | Stable identifier |
| `slug` | string | yes | English path slug |
| `title` | string | yes | Public title |
| `navLabel` | string | no | Override for navigation |
| `summary` | string | yes | Short factual summary |
| `lifecycle` | ContentLifecycle | yes | Editorial state |

### 3.2 StatusBlock

Required for systems, labs, technology entries with development claims, and roadmap items.

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| `status` | DevelopmentStatus | yes | Current public status |
| `statusExplanation` | string | yes | Short factual explanation |
| `lastUpdated` | date | yes | ISO date |
| `visibility` | Visibility | yes | `public` or `restricted` |

### 3.3 SEOBlock

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| `metaTitle` | string | yes | Localized later |
| `metaDescription` | string | yes | Factual, non-inflated |
| `ogTitle` | string | no | Defaults to metaTitle |
| `ogDescription` | string | no | Defaults to metaDescription |
| `noIndex` | boolean | yes | Default false for public pages |

### 3.4 LocalizationRef

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| `sourceLocale` | Locale | yes | Always `en` for source |
| `locale` | Locale | yes | Variant locale |
| `translationStatus` | TranslationStatus | yes | Workflow state |
| `reviewStatus` | `unreviewed` \| `reviewed` \| `approved` | yes | Human review |
| `fallbackToEnglish` | boolean | yes | Default true when not approved |

### 3.5 RestrictedBlock

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| `restrictedSummary` | string | no | Never rendered on public site |
| `restrictedNotes` | string | no | Internal only |
| `accessClass` | string | no | Future access control label |

Restricted fields must never serialize into public page payloads.

---

## 4. Content Types

### 4.1 SiteSettings

Global configurable settings.

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| `siteName` | string | yes | `SAVEN Core` |
| `primaryStatement` | string | yes | Approved primary public statement |
| `supportingStatement` | string | yes | Approved supporting statement |
| `corePositioning` | string | yes | Approved positioning line |
| `copyrightLine` | string | yes | `© 2026 SAVEN Core. All rights reserved.` |
| `defaultLocale` | Locale | yes | `en` |
| `supportedLocales` | Locale[] | yes | All ten locales |
| `socialLinks` | SocialLink[] | yes | Configurable; URLs may be empty |
| `contactChannels` | ContactChannel[] | no | Only when supplied |

#### SocialLink

| Field | Type | Required |
|-------|------|----------|
| `network` | `facebook` \| `youtube` \| `linkedin` \| `x` \| `instagram` | yes |
| `label` | string | yes |
| `url` | string | no | Empty until official account supplied |
| `enabled` | boolean | yes | False when URL absent |

### 4.2 Page

Generic structured page.

| Field | Type | Required |
|-------|------|----------|
| Identity group | | yes |
| SEOBlock | | yes |
| `pageType` | `purpose` \| `foundation` \| `technology` \| `system` \| `lab` \| `application` \| `research` \| `roadmap` \| `company` \| `investors` \| `legal` \| `resource` \| `contact` \| `home` \| `utility` | yes |
| `heroTitle` | string | no | Must not overpower brand on branded surfaces |
| `heroSummary` | string | no | One short supporting sentence when used |
| `bodySections` | Section[] | yes | Structured sections |
| `relatedIds` | string[] | no | Related content references |
| LocalizationRef | | for variants | yes |

### 4.3 Section

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| `id` | string | yes | |
| `sectionType` | string | yes | e.g. `narrative`, `sequence`, `status`, `diagram`, `disclaimer` |
| `heading` | string | yes | One purpose per section |
| `body` | richtext | yes | Factual copy only when approved |
| `mediaRefs` | string[] | no | No fake screenshots |
| `ctaRefs` | string[] | no | |

### 4.4 FoundationNode

Represents BioMath Life, BioMath Core, SAVEN, SAVEN Core.

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| Identity group | | yes | |
| SEOBlock | | yes | |
| StatusBlock | | yes | |
| `sequenceOrder` | number | yes | 1–4 |
| `roleInSequence` | string | yes | Short role statement |
| `relationshipToPrevious` | string | yes | Continuity explanation |
| `relationshipToNext` | string | no | |
| `bodySections` | Section[] | yes | |
| RestrictedBlock | | no | |

### 4.5 TechnologyArea

| Field | Type | Required |
|-------|------|----------|
| Identity group | | yes |
| SEOBlock | | yes |
| StatusBlock | | yes |
| `category` | `technology` | yes |
| `humanPurposeLink` | string | yes | How this supports people |
| `bodySections` | Section[] | yes |
| RestrictedBlock | | no |

### 4.6 System

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| Identity group | | yes | |
| SEOBlock | | yes | |
| StatusBlock | | yes | Defaults currently Research / Architecture / In Development |
| `systemFamily` | string | yes | e.g. Robotics Interface |
| `dependsOn` | string[] | no | Foundation/system IDs |
| `relatedLabs` | string[] | no | |
| `relatedApplications` | string[] | no | |
| `bodySections` | Section[] | yes | |
| RestrictedBlock | | no | |

Approved initial systems:

- SAVEN Robotics Interface
- SAVEN Systems Architecture
- SAVEN AI
- SAVEN Drone Platform

### 4.7 Lab

| Field | Type | Required |
|-------|------|----------|
| Identity group | | yes |
| SEOBlock | | yes |
| StatusBlock | | yes |
| `focusAreas` | string[] | yes |
| `relatedSystems` | string[] | no |
| `bodySections` | Section[] | yes |
| RestrictedBlock | | no |

Approved initial labs:

- SAVEN Robotics Lab
- Internal Future Lab

### 4.8 ApplicationArea

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| Identity group | | yes | |
| SEOBlock | | yes | |
| StatusBlock | | yes | When development claims are shown |
| `applicationClass` | `primary_human` \| `future_extension` | yes | Ordering depends on this |
| `displayOrder` | number | yes | Primary human before extensions |
| `environment` | string | yes | e.g. hospital, home |
| `bodySections` | Section[] | yes | No medical outcome claims |
| RestrictedBlock | | no | |

### 4.9 ResearchItem

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| Identity group | | yes | |
| SEOBlock | | yes | |
| StatusBlock | | yes | |
| `researchType` | `area` \| `publication` \| `update` \| `news` \| `media` | yes | |
| `publishedAt` | date | no | Only if real |
| `externalUrl` | string | no | Only if real |
| `bodySections` | Section[] | yes | |
| RestrictedBlock | | no | |

Do not invent publications, results, or citations.

### 4.10 RoadmapItem

See `ROADMAP_CONTENT_MODEL.md` for the authoritative field list. Summary fields:

- year, phase, objective, system
- status, public summary, restricted details
- dependencies, last updated, change history

### 4.11 LegalDocument

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| Identity group | | yes | |
| SEOBlock | | yes | |
| `legalType` | enum | yes | privacy, terms, cookies, etc. |
| `isDraft` | boolean | yes | True until legal approval |
| `draftBanner` | string | yes | Required when `isDraft` |
| `effectiveDate` | date | no | Only when approved |
| `bodySections` | Section[] | yes | Structural placeholders allowed |
| `jurisdictionNotes` | string | no | Not final legal advice |

### 4.12 Disclaimer

| Field | Type | Required |
|-------|------|----------|
| Identity group | | yes |
| `disclaimerType` | `medical` \| `research` \| `security` \| `roadmap` \| `general` | yes |
| `body` | richtext | yes |
| `requiredOnPageTypes` | string[] | yes |

### 4.13 ContactChannel

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| `channelType` | `general` \| `media` \| `investor` \| `security` \| `careers` \| `partnerships` | yes | |
| `label` | string | yes | |
| `email` | string | no | Only when supplied |
| `formEnabled` | boolean | yes | |
| `instructions` | string | no | |

### 4.14 MediaAsset

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| `id` | string | yes | |
| `title` | string | yes | |
| `assetType` | `diagram` \| `architecture` \| `interface` \| `scenario` \| `photo` \| `video` | yes | |
| `altText` | string | yes | Required for accessibility |
| `caption` | string | no | |
| `isDecorative` | boolean | yes | |
| `approved` | boolean | yes | Do not publish unapproved assets |
| `usageNotes` | string | no | No fake UI screenshots |

---

## 5. Required Status Coverage

The following content types must include StatusBlock when published publicly with development implications:

- FoundationNode
- TechnologyArea
- System
- Lab
- ApplicationArea (when describing SAVEN capabilities)
- ResearchItem
- RoadmapItem

Default public statuses for current content:

- Research
- Architecture
- In Development

---

## 6. Public Payload Rules

When resolving content for the public website:

1. Exclude all RestrictedBlock fields.
2. Exclude unapproved localized variants; fall back to English.
3. Exclude SocialLink entries with empty URLs from rendered link lists, or render as disabled/unavailable per later UI decision without inventing destinations.
4. Exclude LegalDocument body text marked final unless `isDraft` is false and owner/legal approval exists.
5. Include draft banners for draft legal pages.
6. Never include invented metrics, partners, customers, patents, or approvals.

---

## 7. Approved Source Statements (Seed)

These are the only approved global statements for Phase 0 seeding:

- Primary: “Intelligent systems built to support human life.”
- Supporting: “SAVEN Core develops intelligent systems that help people in hospitals, at home and wherever life happens — across every age and stage of life.”
- Positioning: “From human understanding to physical assistance.”
- Trust preference: “Designed around privacy, controlled access, data minimization, safety, traceability, and human oversight.”

No additional marketing claims are authorized by this document.

---

## 8. Out of Scope for Phase 0

- CMS schemas in code
- JSON/YAML content files for pages
- Placeholder page copy beyond approved statements
- Media production
