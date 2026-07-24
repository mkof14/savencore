# SAVEN Core — Phase 1D.1 Home Hero and Purpose

**Document status:** Complete  
**Date:** 2026-07-24  
**Phase:** 1D.1 — Home Hero, Human Purpose, Application strip  

---

## 1. Component structure

```
src/content/home/en.ts
src/components/home/
  HomeHero.tsx
  HumanPurpose.tsx
  ApplicationContexts.tsx
  home.css
app/[locale]/page.tsx   # composes the three sections only
```

---

## 2. Content decisions

- English is canonical and used as controlled fallback on all locale routes.
- Copy avoids promotional / inflated claim language.
- No medical, regulatory, clinical, or deployment claims.
- Principles are stated as design principles, not certifications.
- Application contexts use “designed to” / “intended to” language.

---

## 3. Hero composition

- Eyebrow: SAVEN Core  
- H1: Intelligent systems built to support human life.  
- Supporting paragraph + status line  
- Two rectangular text-led actions: Foundation, Applications  
- Optional CSS structural field (desktop): lines, blocks, mono labels — `aria-hidden="true"`  
- No images, robots, spheres, or gradients  

---

## 4. Human Purpose structure

- Section label + H2  
- Two short paragraphs  
- Three editorial principle columns (not cards): Human oversight, Privacy by design, Safety before autonomy  

---

## 5. Application strip structure

- Section label + H2  
- Three columns: Hospitals, Home, Everyday Life  
- Each: title, one sentence, link to `/{locale}/applications/`  

---

## 6. English fallback behavior

All valid locale routes render the English content module.  
Locale prefixes and RTL document direction remain intact.  
No machine translation and no localized slugs in this phase.

---

## 7. Accessibility

- Exactly one H1 (Hero)  
- Heading order: H1 → H2 → H3  
- Semantic sections  
- Meaningful link text  
- Decorative hero field hidden from assistive technology  
- Focus-visible styles; reduced-motion via global CSS variables  

---

## 8. Responsive behavior

- Mobile: single-column hero (structural field hidden)  
- Desktop (≥1024px): two-column hero with structural field  
- Purpose principles and application contexts: 1 → 3 columns  
- Container uses Phase 1B/1C.1 width and padding tokens  
- No horizontal overflow at 320px  

---

## 9. Intentionally deferred Home sections

Not created in Phase 1D.1:

4. BioMath Life → BioMath Core → SAVEN → SAVEN Core  
5. How the System Works  
6. Technology Overview  
7. Systems  
8. Research & Labs  
9. Safety • Privacy • Human Oversight  
10. Development Status  
11. Company  
12. Investors  

Phase 1D.2 remains unauthorized.
