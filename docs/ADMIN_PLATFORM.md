# Admin Platform (D-0176 / D-0177 / D-0178)

**Status:** In Development / Architecture  
**Authority:** `docs/DECISIONS_LOG.md` D-0176, D-0177, D-0178  
**Public site freeze:** D-0175 Experience Redesign UI remains the approved public snapshot; this platform is a restricted vertical slice and does not invent metrics, customers, or live social profiles.

## Access

- URL: `/[locale]/admin/` (example: `https://www.savencore.com/en/admin/`)
- Not listed in public primary navigation or sitemap.
- Footer shows **Admin** only when the signed-in user has an admin role ≥ `viewer`.
- Unauthenticated visitors are redirected to sign-in; authenticated users without a role are redirected home.
- There is **no** unauthenticated public `/admin` backdoor.

## Roles

Hierarchy (highest first):

| Role | Typical access |
|------|----------------|
| `super_admin` | Full admin surface + permission matrix edit |
| `admin` | Users, invitations, mailings, templates, media, monitoring |
| `editor` | Templates, media upload, monitoring |
| `marketer` | Mailings, templates, marketing checklists, media, monitoring |
| `viewer` | Dashboard, templates preview, notifications, media view, monitoring |

Enforcement: `src/admin/roles.ts` (section gates) + `src/admin/permissions.ts` (granular matrix) + `src/admin/require-role.ts` on pages and `/api/admin/*`.

### Owner / demo operator → always `super_admin` (D-0177)

The Credentials provider accepts a single env-based operator account. That identity **always** maps to `super_admin` (hard to misconfigure).

#### Local development

1. Prefer a gitignored `.env.local`:

```bash
AUTH_SECRET=<openssl rand -base64 32>
AUTH_DEMO_EMAIL=admin@savencore.com
AUTH_DEMO_PASSWORD=SavenCore-Dev-Admin!
AUTH_DEMO_ROLE=super_admin
```

2. If `AUTH_DEMO_EMAIL` / `AUTH_DEMO_PASSWORD` are unset and `NODE_ENV === "development"`, documented defaults apply. Prefer explicit `.env.local`.

3. Sign in at `/en/auth/sign-in/` → open `/en/admin/`.

#### Production (Vercel)

```bash
AUTH_SECRET=<strong secret>
AUTH_DEMO_EMAIL=<owner email>
AUTH_DEMO_PASSWORD=<strong password>
AUTH_DEMO_ROLE=super_admin
AUTH_URL=https://www.savencore.com
```

Optional Google / allowlist admins:

```bash
AUTH_ADMIN_ALLOWLIST=you@example.com:super_admin,editor@example.com:editor
```

Persisted role assignments (Users & roles / accepted invitations) are checked after the demo operator rule and before the allowlist (`resolveRoleForEmailAsync`).

## Modules (D-0178)

Nav: **Dashboard · Templates · Mailings · Invitations · Users & roles · Permissions · Notifications · Media · Monitoring · Marketing tools**

1. **Dashboard** — entry cards with honest counts; In Development labeling.
2. **Email templates** — EN modules under `src/content/admin/email-templates/`. Shared chrome (D-0180): navy header with PNG mark (`/brand/saven-logo-mark.png`) + SAVEN (light) / CORE (gold `#d4a84b`) lockup + tagline + subtle network graphic (`/email/header-network.png`); per-template middle body; 2×2 feature pillars (honest positioning — “Built for Continuity” instead of scale overclaims); cream quote band with Master Spec mission/positioning lines; contact row (`info@savencore.com`); footer with site, copyright © 2026, and LinkedIn/YouTube/Email icons (`NEXT_PUBLIC_SOCIAL_*` when set, else site/mailto). CTA: navy + gold border, **straight corners**. Preview iframe rewrites absolute `/brand/` + `/email/` production URLs to the current origin.
3. **Mailings** — compose from template, manual recipient list, preview, send. If `SMTP_*` configured → real SMTP attempt; otherwise **simulated** send + outbox JSONL (`storage/admin/outbox.jsonl`) — never claims real delivery without SMTP.
4. **Invitations** — create (email, role, token, expiry); pending/accepted/revoked; copy link `/{locale}/auth/sign-in/?invite=TOKEN` → accept at `/{locale}/auth/accept-invite/?token=TOKEN`.
5. **Users & roles** — directory of demo + allowlist + assignments; assign/remove persisted roles (demo operator fixed).
6. **Permissions** — role × permission matrix UI; super_admin can save overrides to `storage/admin/permissions.json`.
7. **Notifications** — in-app create/list/mark read; seed system notices.
8. **Media library** — seed brand assets + local upload store at `storage/admin-media/` (dev).
9. **Marketing tools** — promotion + SEO checklists only; no fabricated traffic/ROI.
10. **Technical monitoring** — package version, locales, published routes, commit SHA when available.

### JSON store

Runtime files under `storage/admin/` (gitignored). Seed defaults live in code. On read-only hosts (typical Vercel), writes return an honest “storage unavailable” error — durable DB/object storage is a later phase.

### Optional SMTP

```bash
SMTP_HOST=
SMTP_PORT=587
SMTP_USER=
SMTP_PASS=
SMTP_FROM=info@savencore.com
SMTP_SECURE=false
```

## Footer socials

Icons for Facebook, YouTube, X, LinkedIn, Instagram always render. Links activate only when `NEXT_PUBLIC_SOCIAL_*` is set. Empty / `#` → disabled (`aria-disabled`).

## Out of scope (later)

- Durable S3 / database for admin stores on Vercel
- Google Analytics / cookie consent / ROI dashboards
- Inventing official social profile URLs
- Claiming SMTP delivery success when SMTP is unset
