# Admin Platform (D-0176)

**Status:** In Development / Architecture  
**Authority:** `docs/DECISIONS_LOG.md` D-0176  
**Public site freeze:** D-0175 Experience Redesign UI remains the approved public snapshot; this platform is a restricted vertical slice and does not invent metrics, customers, or live social profiles.

## Access

- URL: `/[locale]/admin/` (example: `https://www.savencore.com/en/admin/`)
- Not listed in public primary navigation or sitemap.
- Footer shows **Admin** only when the signed-in user has an admin role ≥ `viewer`.
- Unauthenticated visitors are redirected to sign-in; authenticated users without a role are redirected home.

## Roles

Hierarchy (highest first):

| Role | Typical access |
|------|----------------|
| `super_admin` | Full admin surface |
| `admin` | Administration + all operator tools |
| `editor` | Email templates, media view + upload, monitoring |
| `marketer` | Marketing checklists + media actions + templates + monitoring |
| `viewer` | Dashboard, templates preview, media view/actions, monitoring |

Enforcement: `src/admin/roles.ts` + `src/admin/require-role.ts` on pages and `/api/admin/*`.

### Configuring a super admin

1. Keep existing Auth.js setup (`AUTH_SECRET`, optional Google, optional demo credentials).
2. For the demo credentials operator:

```bash
AUTH_DEMO_EMAIL=operator@example.com
AUTH_DEMO_PASSWORD=...
AUTH_DEMO_ROLE=super_admin
```

If `AUTH_DEMO_ROLE` is omitted, the demo operator defaults to `super_admin`.

3. For Google (or any Auth.js) emails, use an allowlist:

```bash
AUTH_ADMIN_ALLOWLIST=you@example.com:super_admin,editor@example.com:editor
```

Format: `email:role` comma-separated. Unknown emails can sign in publicly but receive no admin role.

## Modules in this slice

1. **Dashboard** — entry cards; honest “In Development” labeling.
2. **Email templates** — EN content modules under `src/content/admin/email-templates/`; branded HTML (logo, SAVEN Core, site URL, `info@savencore.com`, © 2026); admin preview via `srcDoc` iframe. SMTP send is **not** configured.
3. **Media library** — seed brand assets + local upload store at `storage/admin-media/` (dev). Actions: Preview, Copy, Print, Share, Download, PDF (native PDF download or print→Save as PDF). Durable object storage is next phase.
4. **Marketing tools** — promotion + SEO checklists only; no fabricated traffic/ROI.
5. **Technical monitoring** — package version, locale count, published-route inventory, commit SHA when Vercel provides it; explicit notes about missing analytics/SMTP/S3.

## Footer socials

Icons for Facebook, YouTube, X, LinkedIn, Instagram always render. Links activate only when configured:

```bash
NEXT_PUBLIC_SOCIAL_FACEBOOK=
NEXT_PUBLIC_SOCIAL_YOUTUBE=
NEXT_PUBLIC_SOCIAL_X=
NEXT_PUBLIC_SOCIAL_LINKEDIN=
NEXT_PUBLIC_SOCIAL_INSTAGRAM=
```

Empty / `#` → visible disabled control with `aria-disabled` (no invented profile URLs).

## Out of scope (next phases)

- Real SMTP / CRM send and invitation delivery
- Durable S3 (or equivalent) media storage on Vercel
- Google Analytics / cookie consent / ROI dashboards
- Full multi-user database and invitation workflow UI beyond templates
- Inventing official social profile URLs
