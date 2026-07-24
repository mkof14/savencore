# SAVEN Core — Design Principles

**Document status:** Approved for Phase 0  
**Authority:** Derived from `SAVEN_CORE_MASTER_SPEC.md`  
**Last updated:** 2026-07-24  

This document defines visual rules, composition principles, motion guidance, and prohibited patterns for the SAVEN Core website. No visual components are implemented in Phase 0.

---

## 1. Design Intent

The website must feel like a serious international engineering and research organization.

It must communicate:

- human purpose;
- technological depth;
- engineering discipline;
- clear system architecture;
- responsible development;
- long-term scale;
- research activity;
- safety;
- privacy;
- human oversight;
- realistic development status.

It must not look like:

- a generic AI startup;
- a SaaS landing page;
- a robotics product catalog;
- a medical claims website;
- a science-fiction entertainment site;
- a collection of unrelated future concepts;
- a standard corporate template;
- a generated startup template.

---

## 2. Visual Character

Required character:

- modern;
- precise;
- fresh;
- technologically advanced;
- highly visual;
- engineering-led;
- human-centered;
- controlled;
- credible;
- internationally appropriate.

---

## 3. Non-Negotiable Visual Rules

1. **Straight corners.** Preserve square/orthogonal corners throughout the design system.
2. **No rounded-card visual system.** Cards are not the default container language.
3. **Strong modular grid.** Layouts must read as engineered modules, not decorative collage.
4. **Large typography.** Clear hierarchy with purposeful display and body scales.
5. **Substantial whitespace.** Avoid dense marketing packing.
6. **Light primary environment.** Default site atmosphere is light.
7. **Controlled dark technology sections.** Dark sections are intentional, limited, and meaningful.
8. **Limited color palette.** Restrained, coherent, internationally appropriate.
9. **Accessible contrast.** Target WCAG 2.2 AA.
10. **Responsive excellence.** High-quality mobile experience is required, not optional.

---

## 4. Composition Rules

### 4.1 First viewport / branded surfaces

- One composition, not a dashboard.
- Brand or product name must be a hero-level signal, not only nav text.
- No headline should overpower the brand.
- Brand test: if the first viewport could belong to another brand after removing the nav, branding is too weak.
- Hero budget: brand, one headline, one short supporting sentence, one CTA group, one dominant visual plane.
- Do not place stats, schedules, promos, metadata strips, or secondary marketing modules in the first viewport.
- Full-bleed hero visual plane by default on promotional/landing surfaces.
- No detached labels, floating badges, promo stickers, or callout chips overlaid on hero media.

### 4.2 Sections

- One job per section.
- One headline per section.
- Usually one short supporting sentence.
- Reduce clutter: avoid pill clusters, stat strips, icon rows, boxed promos, and competing text blocks.

### 4.3 Cards

- Default: no cards.
- Never use cards in the hero.
- Cards are allowed only when they are the container for a user interaction.
- If removing border, shadow, background, or radius does not hurt interaction or understanding, it should not be a card.
- When interaction containers are needed, keep straight corners.

---

## 5. Typography

1. Use expressive, purposeful fonts. Avoid default generic stacks as the brand voice (Inter, Roboto, Arial, system-ui as the primary brand identity).
2. Maintain clear hierarchy: brand/display, section heading, body, meta/status.
3. Technical content may use a restrained monospace for identifiers, status codes, or architecture labels when meaningful.
4. Support all ten languages, including CJK, Arabic, Hebrew, Cyrillic, and Latin extended.
5. RTL typography must be first-class, not a mirrored afterthought.

Font selection occurs in a later design-token phase and must be owner-approved.

---

## 6. Color and Atmosphere

1. Define CSS variables / design tokens in a later approved phase.
2. Light primary environment with controlled accent usage.
3. Dark technology sections only where they clarify architecture, systems, or research depth.
4. Avoid relying on flat single-color emptiness; use restrained gradients, patterns, or real imagery for atmosphere without becoming decorative noise.
5. Do not default to common AI-template looks:
   - purple-on-white or purple-to-indigo gradient themes;
   - warm cream background with terracotta accent and generic serif display pairing as a template shortcut;
   - broadsheet hairline newspaper pastiche.
6. Avoid bias toward dark-mode-as-default, purple glow, multi-layer shadows, and rounded-full pills.

Exact token values are deferred until design token approval.

---

## 7. Imagery and Visual Systems

Preferred visual types:

- technical diagrams;
- system architecture visuals;
- interface visuals that are real or clearly conceptual and labeled as such;
- realistic human assistance scenarios;
- engineering process and research context.

Imagery rules:

1. Show product, place, atmosphere, or context. Decorative abstraction alone is not the main visual idea.
2. No random stock robots.
3. No unrelated humanoid robots.
4. No fake interface screenshots presented as real product UI.
5. No medical outcome imagery that implies clinical claims.
6. Human presence should reinforce assistance and dignity, not spectacle.

---

## 8. Motion

1. Restrained motion only.
2. Use motion to create presence and hierarchy, not noise.
3. For visually led work, plan at least 2–3 intentional motions — not dozens of micro-animations.
4. Respect reduced-motion preferences.
5. Animation direction must flip correctly in RTL contexts where direction carries meaning (e.g., chevrons, progress, carousels).
6. Do not add motion merely to appear futuristic.

---

## 9. Components and UI Patterns (Future Implementation Constraints)

When UI implementation begins (later phase):

1. Straight corners on buttons, inputs, containers, dialogs, and media frames unless a later owner decision revises this rule.
2. Status presentation must be clear, factual, and visually secondary to purpose.
3. Architecture diagrams should be legible at desktop and usable on mobile (stacked or simplified variants allowed).
4. Forms must be clear, accessible, and secure; no decorative complexity.
5. Cookie and privacy controls must be understandable and non-dark-patterned.
6. Navigation must remain stable; do not silently restyle information architecture into mega-menu novelty without approval.

---

## 10. Explicitly Prohibited Patterns

- generic blue-purple AI gradients;
- glowing AI spheres;
- excessive neon;
- glassmorphism;
- excessive rounded cards;
- random stock robots;
- unrelated humanoid robots;
- fake interface screenshots;
- decorative complexity without meaning;
- excessive animation;
- generic startup illustrations;
- template-like page repetition;
- empty marketing language;
- emoji-led visual systems;
- glow-heavy “AI aura” treatments;
- floating badge/sticker clutter on heroes.

---

## 11. Accessibility Design Requirements

1. Target WCAG 2.2 AA.
2. Maintain accessible contrast in light and dark sections.
3. Do not rely on color alone for status.
4. Provide text alternatives for meaningful visuals.
5. Ensure keyboard focus states are visible and non-destructive to layout.
6. Support zoom and reflow without loss of critical content.
7. RTL and LTR must both meet accessibility expectations.

---

## 12. Content-Design Alignment

Design must support content principles:

- clear, direct, factual language;
- no inflated claims;
- innovation shown through architecture, status, safety, interfaces, and research — not hype adjectives.

Status, privacy, safety, and human oversight cues should be easy to find without looking like legal panic or medical advertising.

---

## 13. International Appropriateness

1. Avoid culturally narrow visual metaphors.
2. Avoid imagery that implies a single geography as the whole company story.
3. Ensure layouts do not break with longer German/French strings or compact Japanese/Chinese labels.
4. Mixed-direction technical content (e.g., English system names inside Arabic/Hebrew pages) must remain readable.

---

## 14. Phase 0 Boundary

This phase defines principles only.

Do not create:

- component libraries;
- CSS/design token files;
- mockups as application code;
- image assets;
- animation implementations.
