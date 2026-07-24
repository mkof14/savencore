# SAVEN Core — Phase 1C Global Site Shell

**Document status:** Complete  
**Date:** 2026-07-24  
**Phase:** 1C — Global Site Shell  
**Authority:** Authorized reusable shell only (not Home page content)

---

## 1. Component structure

```
src/navigation/
  navigation-types.ts
  site-navigation.ts      # Primary, utility, footer data (single source)
  locale-path.ts          # Locale-prefixed href helpers

src/components/site/
  SiteHeader.tsx
  DesktopNavigation.tsx
  MobileNavigation.tsx
  LanguageSelector.tsx
  SiteFooter.tsx
  site-shell.css
```

Integrated in `app/[locale]/layout.tsx`:

```
<html>
  <body>
    <div class="site-shell">
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </div>
  </body>
</html>
```

Exactly one `html`, one `body`, and one `main` landmark on localized routes.

---

## 2. Centralized navigation model

All Header, mobile, and Footer link trees consume `src/navigation/site-navigation.ts`.

Primary (with approved groups):

- Purpose, Foundation, Technology (Technology / Systems / Labs), Applications, Research (Research / Publications / Roadmap), Company (About / Leadership / Careers / Contact / Trust)

Utility:

- Investors, Search, Contact  
- Language is a selector control (not a destination page)

Footer groups (Phase 1C):

- Purpose, Foundation, Technology, Systems, Applications, Research, Company, Investors, Trust / Legal

Unresolved owner data (emails, phones, addresses, social URLs) is omitted.

---

## 3. Header behavior

- Text wordmark: “SAVEN Core” linking to `/{locale}/`
- Desktop primary + utility navigation
- Language selector (desktop)
- Mobile menu control (viewport &lt; 1024px)
- Active section indication via underline + `aria-current="page"` where appropriate
- No sticky header, shadows, gradients, rounded containers, or logo image

Desktop groups use accessible disclosure buttons (`aria-expanded`, `aria-controls`). Escape and outside click close open panels. Submenus are not hover-only.

---

## 4. Mobile navigation behavior

- Full-viewport rectangular panel (not a floating/pill drawer)
- Explicit Menu / Close controls with accessible names
- Escape closes the menu and returns focus to the Menu control
- On open, focus moves to Close
- Body scroll locked only while open; overflow restored on close/unmount/route change
- Includes primary, utility, and language selector
- Short opacity transition only; respects reduced-motion CSS variables

---

## 5. Language selector behavior

- Lists exactly the ten locales from `src/config/locales.ts`
- Labels from `LOCALE_LABELS` (English names + locale codes; no flags)
- Preserves current path by swapping the locale segment when present
- Falls back to `/{locale}/` when path rewriting is unsafe
- Indicates the current locale with `aria-current="true"`
- No browser-language detection, no auto-translation

---

## 6. Footer structure

- Multi-column responsive grid using Phase 1B spacing/containers
- Group titles as `h2` (footer-scoped), links as lists
- Copyright line only: `© 2026 SAVEN Core. All rights reserved.`
- No newsletter, social icons, invented legal entity details, or contact inventing

---

## 7. RTL handling

- Document `dir` remains owned by locale layout (`ar` / `he` → `rtl`)
- Shell CSS prefers logical properties (`margin-inline`, `inset-inline-*`, `padding-inline`)
- Navigation and footer mirror naturally with document direction
- No client-side `dir` mutation

---

## 8. Accessibility behavior

- Landmarks: `header`, `nav` (Primary / Utility), `main`, `footer`
- Keyboard-operable desktop disclosures and mobile dialog
- Visible `:focus-visible` outlines
- `aria-expanded` / `aria-controls` on menu controls
- Minimum interactive target height ≈ 2.75rem
- Reduced-motion honored via global CSS variables
- No formal WCAG certification claimed

---

## 9. Route limitations

- Shell links point to approved locale-prefixed destinations
- Destination pages are intentionally **not** created in Phase 1C
- Unimplemented routes may 404; this is expected
- Technical placeholder remains on `/{locale}/` — not a production Home page

---

## 10. Intentionally deferred

- Production Home page and sections
- Working search
- Contact forms
- CMS / auth / analytics / cookie consent
- Custom fonts, brand accents, logo asset
- Sticky header
- Complex mega menus
- Localized path slugs
- Phase 1D+

---

## 11. Validation

```bash
npm run lint
npm run type-check
npm run build
```
