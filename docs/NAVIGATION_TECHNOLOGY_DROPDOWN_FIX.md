# Navigation — Technology Dropdown Fix

**Date:** 2026-07-24  
**Commit message:** `fix: replace legacy Technology dropdown source`

## 1. Render path (verified)

```
app/[locale]/layout.tsx
  → SiteHeader
    → DesktopNavigation  (desktop ≥1024px)
    → MobileNavigation   (mobile)
         → primaryNavigation  (src/navigation/site-navigation.ts)
              → technology.children === technologyNavChildren
```

No alternate Header, no hard-coded submenu in components, no route-group layout override.

## 2. Legacy source (historical)

Before commit `340ef30`, `primaryNavigation` Technology children were hard-coded as:

1. Technology → `/technology/`
2. Systems → `/systems/`
3. Labs → `/labs/`

That exact array produced the visible labels Technology / Systems / Labs.

## 3. Why the previous fix looked ineffective

Source was already updated in `site-navigation.ts` (`technologyNavChildren`).

The process listening on **`http://127.0.0.1:3000` (`next dev`)** continued to serve a **stale Turbopack SSR bundle**. Editing `site-navigation.ts` did not change that process’s HTML output (HMR stuck). Fresh `next start` builds on other ports already rendered the correct Technology leaf list.

So the visible menu depended on which local server was open, not on a second navigation config.

## 4. Fix applied

- Confirmed Technology dropdown uses only `technologyNavChildren`.
- Added module-load assertion forbidding Systems/Labs inside Technology.
- Documented render path on DesktopNavigation.
- Cleared stale `.next` / restarted local `next dev` and verified rendered HTML.

## 5. Final Technology dropdown items

1. Technology Overview  
2. Human Data  
3. Human Data Model  
4. Data Infrastructure  
5. Interoperability  
6. Privacy  
7. Security  
8. Artificial Intelligence  
9. Automation  
10. Robotics  

Systems is a separate primary nav group (not inside Technology). Labs is not in navigation.
