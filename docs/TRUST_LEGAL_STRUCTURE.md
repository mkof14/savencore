# SAVEN Core — Trust and Legal Structure

**Document status:** Approved for Phase 0 (structural only)  
**Authority:** Derived from `SAVEN_CORE_MASTER_SPEC.md`  
**Last updated:** 2026-07-24  

This document defines required trust, safety, privacy, and legal page structures.  
**It does not invent final legal language.** All legal body copy remains draft until legal review and owner approval.

---

## 1. Governing Rules

1. Provide complete structural support for all required trust and legal pages.
2. Do not invent final legal text.
3. Mark unapproved content as draft.
4. Never claim complete security, guaranteed safety, full legal compliance, regulatory approval, medical effectiveness, diagnostic capability, guaranteed privacy, or zero risk.
5. Preferred public trust language:
   > Designed around privacy, controlled access, data minimization, safety, traceability, and human oversight.
6. Public website materials must not be presented as:
   - medical advice;
   - diagnosis;
   - treatment;
   - emergency support;
   - regulatory approval;
   - a substitute for a qualified professional.
7. Do not add “Inc.” unless the legal company name is confirmed.
8. Copyright format:
   ```
   © 2026 SAVEN Core. All rights reserved.
   ```

---

## 2. Required Pages and Routes

All routes are relative to `/{locale}`.

| Page | Route | Draft until legal approval |
|------|-------|----------------------------|
| Privacy Policy | `/legal/privacy-policy` | yes |
| Terms of Use | `/legal/terms-of-use` | yes |
| Cookie Policy | `/legal/cookie-policy` | yes |
| Cookie Preferences | `/legal/cookie-preferences` | yes (functional UI later) |
| Accessibility Statement | `/legal/accessibility-statement` | yes |
| Security | `/legal/security` | yes |
| Responsible AI | `/legal/responsible-ai` | yes |
| Medical Disclaimer | `/legal/medical-disclaimer` | yes |
| Research Disclaimer | `/legal/research-disclaimer` | yes |
| Intellectual Property | `/legal/intellectual-property` | yes |
| Trademark Notice | `/legal/trademark-notice` | yes |
| Copyright Notice | `/legal/copyright` | yes |
| Data Rights | `/legal/data-rights` | yes |
| Regional Privacy Rights | `/legal/regional-privacy-rights` | yes |
| Do Not Sell or Share My Personal Information | `/legal/do-not-sell-or-share` | yes |
| Legal Notices | `/legal/legal-notices` | yes |

Related resource entry points:

| Page | Route |
|------|-------|
| Report a Security Issue | `/resources/report-a-security-issue` |
| Accessibility (resource alias) | `/resources/accessibility` |
| Media Contact | `/resources/media-contact` |
| Investor Contact | `/resources/investor-contact` |

---

## 3. Common Page Template (Structural)

Every legal/trust page must support:

| Field | Requirement |
|-------|-------------|
| Title | Required |
| Draft banner | Required while `isDraft = true` |
| Last updated | Required when available; otherwise “Date pending legal review” |
| Effective date | Only when approved |
| Summary | Short non-claim summary |
| Sections | Structured headings listed below |
| Contact pathway | How to ask questions / exercise rights / report issues |
| Related links | Cross-links to related legal pages |
| Locale + fallback | Per localization spec |

### Required draft banner (placeholder wording)

```
DRAFT FOR STRUCTURAL PURPOSES — Not final legal text. Pending legal review.
```

Do not present draft pages as binding policy.

---

## 4. Page-by-Page Section Structures

Section titles below are structural outlines only. Body text is not supplied here.

### 4.1 Privacy Policy

1. Overview
2. Who we are (legal entity placeholder — do not invent entity details)
3. Scope of this policy
4. Information we may collect (categories as placeholders)
5. How we may use information
6. Legal bases (where applicable; jurisdiction-dependent placeholders)
7. Sharing and processors (no invented partners)
8. Retention
9. Security practices (non-absolute language only)
10. International transfers (placeholder)
11. Your rights and choices
12. Children’s privacy (placeholder)
13. Changes to this policy
14. Contact for privacy requests

### 4.2 Terms of Use

1. Agreement to terms
2. Nature of the website (informational; systems in development)
3. Intellectual property
4. Acceptable use
5. No professional advice
6. Disclaimers
7. Limitation of liability (legal draft later)
8. Indemnity (legal draft later)
9. Governing law / venue (pending legal confirmation)
10. Changes
11. Contact

### 4.3 Cookie Policy

1. What cookies and similar technologies are
2. Types of cookies used (to be listed when actual tech is selected)
3. Purpose of each category
4. Managing preferences
5. Browser controls
6. Updates
7. Contact

### 4.4 Cookie Preferences

Functional page/control structure:

1. Preference summary
2. Essential cookies (always on)
3. Preferences / functional cookies
4. Analytics cookies (privacy-controlled; vendor TBD)
5. Save / update controls
6. Link to Cookie Policy

No dark patterns. No pre-checked non-essential consent.

### 4.5 Accessibility Statement

1. Commitment statement (non-absolute)
2. Target standard: WCAG 2.2 AA
3. Measures taken / in progress
4. Known limitations (honest; update over time)
5. Feedback and contact
6. Compatibility notes
7. Assessment approach (when available)

### 4.6 Security

1. Security posture overview using preferred language
2. Design principles: privacy, controlled access, data minimization, safety, traceability, human oversight
3. Vulnerability reporting pathway
4. Scope and limitations (no “complete security” claims)
5. Updates
6. Contact / report channel

### 4.7 Responsible AI

1. Purpose of AI within SAVEN Core (tool, not purpose)
2. Human oversight
3. Safety and evaluation principles
4. Transparency about development status
5. Limitations and non-claims
6. Feedback pathway
7. Related policies

### 4.8 Medical Disclaimer

1. Informational nature of website content
2. Not medical advice
3. Not diagnosis or treatment
4. Not emergency support
5. Not a substitute for a qualified professional
6. Development-status reminder
7. Contact for non-emergency inquiries

### 4.9 Research Disclaimer

1. Research and development context
2. No guarantee of outcomes
3. Preliminary nature of materials
4. No regulatory approval claims
5. Roadmap non-guarantee cross-reference
6. Contact

### 4.10 Intellectual Property

1. Ownership statement structure
2. Permitted use of site materials
3. Prohibited use
4. Notice of infringement pathway (process TBD by legal)
5. Contact

### 4.11 Trademark Notice

1. Trademark list structure (populate only with confirmed marks)
2. Correct brand usage guidance
3. Third-party marks disclaimer
4. Contact

### 4.12 Copyright Notice

1. Copyright line
2. Reservation of rights
3. Permission requests
4. Related IP links

### 4.13 Data Rights

1. Overview of rights concepts
2. Access / correction / deletion / restriction / portability request pathways (as applicable by region)
3. Verification process placeholder
4. Response timing placeholder
5. Contact

### 4.14 Regional Privacy Rights

1. Region selector / region sections structure
2. Placeholders for applicable regional frameworks (do not assert applicability without legal confirmation)
3. Rights specific summaries (draft)
4. Request submission method
5. Related links to Privacy Policy and Do Not Sell or Share

### 4.15 Do Not Sell or Share My Personal Information

1. Statement of purpose
2. Scope definitions pending legal review
3. Request mechanism structure
4. Authorized agent process placeholder
5. Related privacy links

### 4.16 Legal Notices

1. Entity and contact placeholders
2. Website notice collection point
3. Links to all legal/trust documents
4. Jurisdiction notes pending counsel

---

## 5. Cross-Cutting Disclaimers

### 5.1 Global footer / site-level cues

Where appropriate, public pages should make it easy to reach:

- Privacy Policy
- Medical Disclaimer
- Research Disclaimer
- Responsible AI
- Security
- Cookie Preferences

### 5.2 Systems, applications, and research pages

Pages describing hospitals, rehabilitation, or assistance contexts must not imply:

- clinical effectiveness;
- diagnostic capability;
- treatment claims;
- emergency service availability;
- regulatory clearance.

Include contextual links to Medical Disclaimer and Research Disclaimer where relevant.

### 5.3 Roadmap pages

Include non-guarantee language and link to Research Disclaimer / roadmap notes.

---

## 6. Claim Language Controls

### Allowed orientation (examples of tone, not final legal text)

- “in development”
- “research”
- “architecture”
- “designed around…”
- “intended to support…”
- “under evaluation”

### Disallowed absolutes

- “fully secure”
- “guaranteed safe”
- “HIPAA compliant” (unless later legally approved and factually true)
- “FDA approved” / equivalent claims without proof
- “diagnoses”
- “treats”
- “zero risk”
- “completely private”

---

## 7. Social and Contact Trust Notes

1. Social URLs remain configurable and empty until official accounts are supplied.
2. Do not invent security@, legal@, or other emails unless supplied.
3. Contact forms in later phases must be secure and privacy-reviewed.

---

## 8. Implementation Notes for Later Phases

1. Legal pages are content-managed records with `isDraft` flags.
2. Cookie consent management and analytics must include privacy controls.
3. Consent logs and preference storage require a later privacy engineering design.
4. Accessibility statement should be updated as real audits occur.
5. No final legal copy ships without recorded approval in `DECISIONS_LOG.md` or equivalent legal sign-off record.

---

## 9. Phase 0 Boundary

Create structure only. Do not write final policies, do not implement consent banners, and do not generate fake compliance badges.
