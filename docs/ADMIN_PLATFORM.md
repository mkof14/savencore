# Admin Platform (D-0176 / D-0177 / D-0178 / D-0213 / D-0214)

**Status:** In Development / Architecture  
**Authority:** `docs/DECISIONS_LOG.md` D-0176, D-0177, D-0178, D-0213, D-0214  
**Public site freeze:** D-0175 Experience Redesign UI remains the approved public snapshot; this platform is a restricted vertical slice and does not invent metrics, customers, or live social profiles.

## Chrome (D-0213)

- Admin shell follows public site **light/dark** via `html[data-theme]` and shared globals (`--color-background`, surface, ink, accent, field). Atmospheric navy sidebar remains; ThemeSwitch lives in the admin nav footer (site header/footer are hidden on admin routes).
- Brand heading: SAVEN logo mark (`/brand/saven-logo-mark.webp`) before SAVEN CORE + Admin platform eyebrow + Admin title.
- Accents: navy / gold / off-white / soft gray-blue hierarchy on active nav, cards, notes, primary buttons — straight corners, no neon.
- RBAC and section gates are unchanged.

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
2. **Email templates** — EN modules under `src/content/admin/email-templates/` (D-0176 / D-0180 / D-0183 / D-0214). Shared chrome (D-0214 restyle of D-0180 layout): soft charcoal gray-blue header (`#1c1f26`) with PNG falcon mark (`/brand/saven-logo-mark.png`) + SAVEN (light) / CORE (gold `#d4a84b`) lockup + tagline + gold accent rule + subtle network graphic (`/email/header-network.png`); off-white / surface shell (`#e6e6e9` / `#eeeeef`); per-template middle body; 2×2 feature pillars (honest positioning — “Built for Continuity” instead of scale overclaims); soft gray-blue quote band with Master Spec mission/positioning lines; contact row (`info@savencore.com`); footer with lockup, tagline, site, contact, copyright © 2026 — **no social network icons**. CTA: navy + gold border, **straight corners**. Preview iframe rewrites absolute `/brand/` + `/email/` production URLs to the current origin. Library includes welcome/invite, investor intro, partnership ack + follow-up, press + press-kit invite, care newsletters, event invite + follow-up, research update, meeting thank-you, soft re-engagement, security, and internal ops/briefing.
3. **Mailings** — compose from template, manual recipient list, preview, send. If `SMTP_*` configured → real SMTP attempt; otherwise **simulated** send + outbox JSONL (`storage/admin/outbox.jsonl`) — never claims real delivery without SMTP.
4. **Invitations** — create (email, role, token, expiry); pending/accepted/revoked; copy link `/{locale}/auth/sign-in/?invite=TOKEN` → accept at `/{locale}/auth/accept-invite/?token=TOKEN`.
5. **Users & roles** — directory of demo + allowlist + assignments; assign/remove persisted roles (demo operator fixed).
6. **Permissions** — role × permission matrix UI; super_admin can save overrides to `storage/admin/permissions.json`.
7. **Notifications** — in-app create/list/mark read; seed system notices.
8. **Media library** (D-0183 / D-0184 / D-0185 / D-0186 / D-0187 / D-0194 / D-0201) — seed brand assets + curated site links + local upload/link store at `storage/admin-media/` (dev). **Durable production path:** when `BLOB_READ_WRITE_TOKEN` is set, uploads, links, index, and seed soft-hide persist via **Vercel Blob** (`src/lib/admin/media-blob.ts`). When the token is unset on Vercel, mutations stay blocked with an honest banner (no fake persistence). **Traditional CMS UX:** tabs **Upload file | Upload video | Add link** with elevated navy/gold Upload CTAs; visible Choose file / Choose video inputs; upload progress; Video URL form with YouTube/Vimeo embed preview (CSP `frame-src` / `img-src` allowlisted); library table (Name / Type / Date / Open · **Download** · Copy · **Delete**) with All files · Videos · Docs · Links filters (high-contrast chips in light/dark — D-0187). Mutations: editor+ and granular `manage_media`. **Delete on every row** (confirm dialog): upload/link hard-delete; seed/`seed-*` **soft-hide** via `hidden.json` (or Blob equivalent). Clear errors for size (40 MB local; ~4.5 MB Vercel body), type, and storage. Public `/[locale]/media/` viewer gallery (All / Videos / Docs / Links, View + Download cards). **Download (mobile + desktop):** same-origin attachment routes `/api/media/download/[id]/` (public) and `/api/admin/media/download/[id]/` (auth) with `Content-Disposition: attachment`; preview/view stays `/api/media/[id]/` / `/api/admin/media/[id]/` (inline). Blob-hosted uploads stream through these APIs (not cross-origin CDN) so CSP and Save As work.
9. **Marketing tools** — promotion + SEO checklists only; no fabricated traffic/ROI.
10. **Technical monitoring** — package version, locales, published routes, commit SHA when available.

### JSON store (D-0220)

Runtime files under `storage/admin/` (gitignored) in local development. Seed defaults live in code.

**Durable production path:** when `BLOB_READ_WRITE_TOKEN` is set, the same JSON files (invitations, operators, permissions, mailings, notifications) and the outbox NDJSON persist via Vercel Blob under `admin-store/` (`src/lib/admin/json-store.ts`). When the token is unset on Vercel, writes return “storage unavailable” and Admin pages for invitations / users / permissions / mailings / notifications show an honest **local-only / not durable** banner — no fake persistence.

### Optional SMTP

```bash
SMTP_HOST=
SMTP_PORT=587
SMTP_USER=
SMTP_PASS=
SMTP_FROM=info@savencore.com
SMTP_SECURE=false
```

**Owner checklist (paste secrets in Vercel — never commit):**

1. [ ] `AUTH_SECRET`, and either Google OAuth or `AUTH_DEMO_EMAIL` / `AUTH_DEMO_PASSWORD`
2. [ ] `AUTH_URL` = production origin
3. [ ] `BLOB_READ_WRITE_TOKEN` for durable Media **and** Admin JSON
4. [ ] `SMTP_*` only if real delivery is required
5. [ ] Redeploy after env changes

See `docs/VERCEL_DEPLOY.md` §2.
## Footer socials

Icons for Facebook, YouTube, X, LinkedIn, Instagram render **only when** configured (D-0194 SO-1). Facebook uses the owner-approved committed default `https://www.facebook.com/profile.php?id=61592276954371` (D-0198; `NEXT_PUBLIC_SOCIAL_FACEBOOK` overrides). YouTube uses `https://youtu.be/0C1Sk_RAnSw` (D-0195; `NEXT_PUBLIC_SOCIAL_YOUTUBE` overrides). X uses `https://x.com/SAVENcore` (D-0196; `NEXT_PUBLIC_SOCIAL_X` overrides). Instagram uses `https://www.instagram.com/savencore/` (D-0197; `NEXT_PUBLIC_SOCIAL_INSTAGRAM` overrides). Other networks: unset / `#` → icon hidden (no disabled placeholders). Do not invent additional profile URLs.

## Out of scope (later)

- Full relational DB / CMS for all admin + public content (Blob JSON covers Admin stores when token set — D-0220; not a CMS)
- Google Analytics / cookie consent CMP / ROI dashboards
- Inventing official social profile URLs (LinkedIn still open)
- Claiming SMTP delivery success when SMTP is unset
- Investor portal / data room / investor PDF without owner assets
- Final counsel-approved multi-jurisdiction legal packs (site policies remain website policies — D-0220)
- Dated public Roadmap years / leadership bios without owner-supplied facts
- Nonce-based CSP hardening (documented deferral — D-0220)