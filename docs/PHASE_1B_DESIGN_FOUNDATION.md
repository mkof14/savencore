# SAVEN Core — Phase 1B Design Foundation

**Document status:** Complete  
**Date:** 2026-07-24  
**Phase:** 1B — Design Foundation  
**Authority:** Authorized visual engineering foundation only  

---

## 1. Purpose

Phase 1B establishes a scalable, maintainable design foundation for the SAVEN Core website.

Goals:

- consistency;
- simplicity;
- readability;
- long-term maintainability;
- serious engineering character (not startup / AI-landing / medical / sci-fi aesthetics).

Out of scope for this phase:

- production Home page;
- Header / Footer / navigation;
- content sections and marketing copy;
- UI components;
- custom brand fonts;
- final brand colors.

---

## 2. Token organization

Source files live under `src/design/`:

| File | Responsibility |
|------|----------------|
| `tokens.ts` | Hub: semantic colors + re-exports |
| `spacing.ts` | Single spacing scale |
| `typography.ts` | Type roles and system font stacks |
| `breakpoints.ts` | Responsive ladder + media helpers |
| `container.ts` | Max widths and gutters |
| `motion.ts` | Conservative durations and easing |
| `radius.ts` | Straight-corner default + opt-in only |

CSS custom properties in `app/globals.css` mirror these tokens for stylesheet use.  
TypeScript modules remain the programmatic source of truth for future components.

**Rule:** Do not introduce ad-hoc spacing, type sizes, radii, or colors outside these tokens without a Decisions Log entry.

---

## 3. Spacing scale

One scale only (px at 16px root → rem in CSS):

| px | rem | CSS variable |
|----|-----|--------------|
| 4 | 0.25 | `--space-4` |
| 8 | 0.5 | `--space-8` |
| 12 | 0.75 | `--space-12` |
| 16 | 1 | `--space-16` |
| 24 | 1.5 | `--space-24` |
| 32 | 2 | `--space-32` |
| 48 | 3 | `--space-48` |
| 64 | 4 | `--space-64` |
| 96 | 6 | `--space-96` |

No random spacing. Layout rhythm must pick from this scale.

---

## 4. Typography scale

Roles defined (system fonts only):

| Role | Size | Weight | Use |
|------|------|--------|-----|
| Display | 3.5rem | 600 | Rare hero-level brand/display |
| H1 | 2.5rem | 600 | Primary page title |
| H2 | 2rem | 600 | Major section |
| H3 | 1.5rem | 600 | Subsection |
| H4 | 1.25rem | 600 | Minor heading |
| Body Large | 1.125rem | 400 | Lead paragraphs |
| Body | 1rem | 400 | Default reading text |
| Small | 0.875rem | 400 | Secondary UI text |
| Caption | 0.75rem | 400 | Meta / status / footnotes |

Font stacks:

- sans: `system-ui` stack
- mono: `ui-monospace` stack (for future technical labels)

Custom brand fonts remain deferred.

---

## 5. Breakpoint strategy

Mobile-first min-width breakpoints:

| Name | Min width |
|------|-----------|
| sm | 640px |
| md | 768px |
| lg | 1024px |
| xl | 1280px |
| 2xl | 1536px |

Helpers are exported as `media.*` for future styled systems.  
One ladder for the whole site — do not invent parallel breakpoint sets.

---

## 6. Container strategy

Max content widths align to the breakpoint ladder:

| Size | Max width |
|------|-----------|
| sm | 40rem (640px) |
| md | 48rem (768px) |
| lg | 64rem (1024px) |
| xl | 80rem (1280px) |
| 2xl | 96rem (1536px) |

Horizontal padding from the spacing scale only:

- base: 16
- md+: 24
- lg+: 32

Containers are centered, full-width up to max-width, with no card chrome implied.

---

## 7. Color system (neutral semantic only)

Light primary environment:

| Token | Role |
|-------|------|
| `background` | Page canvas |
| `surface` | Subtle recessed / panel surface |
| `text` | Primary text |
| `textSecondary` | Secondary text |
| `border` | Structural borders |
| `divider` | Quiet separators |
| `success` | Functional success |
| `warning` | Functional warning |
| `error` | Functional error |

Also defined (controlled use later): `colorDarkSection.*` for limited technology sections — not a sitewide dark theme.

Final brand accent colors are **not** defined in Phase 1B.

Avoid: purple/indigo AI gradients, neon, glassmorphism tints, warm cream+terracotta template palettes.

---

## 8. Radius philosophy

- Global default radius: `0`
- Straight corners are mandatory for the design system
- Non-zero radii exist only as explicit `radius.optIn` values and must never be applied globally
- Future components that need rounding must opt in individually and only with approval

CSS: `--radius-default: 0` and universal `border-radius: 0` reset remain in force.

---

## 9. Motion philosophy

Very conservative:

| Token | Value |
|-------|-------|
| fast | 120ms |
| base | 180ms |
| slow | 240ms |
| standard easing | `cubic-bezier(0.2, 0, 0, 1)` |

Rules:

- short transitions only;
- no bouncing / spring physics;
- no dramatic page choreography;
- no animated backgrounds;
- honor `prefers-reduced-motion` (durations collapse to 0 in CSS).

Intentional motion for branded surfaces remains a later phase concern (2–3 named motions when authorized).

---

## 10. Prohibited visual patterns (reaffirmed)

- rounded card systems;
- floating panels as default chrome;
- glassmorphism;
- glowing gradients;
- neon;
- excessive shadows;
- animated backgrounds;
- startup / AI-landing template aesthetics.

---

## 11. Validation

Phase 1B requires:

```bash
npm run lint
npm run type-check
npm run build
```

---

## 12. Phase boundary

Stop after the design foundation.

Do not begin Header, Footer, navigation, Home page, or component libraries without explicit authorization.
