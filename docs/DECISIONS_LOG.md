# SAVEN Core — Decisions Log

**Document status:** Append-only  
**Authority:** Records owner-approved decisions that govern the project  
**Last updated:** 2026-08-08 (D-0278 — Lab video: Site main clip first in playlist)

## Rules

1. This log is **append-only**. Do not rewrite or delete prior entries.
2. Corrections are recorded as new entries that supersede earlier decisions by reference.
3. Each entry must include: date, decision ID, summary, status, scope, and implications.
4. Material architecture, naming, legal, or positioning changes require an entry here.
5. Phase advancement requires an explicit entry or direct owner instruction subsequently logged here.

---

## Decision Index

| ID | Date | Summary | Status |
|----|------|---------|--------|
| D-0001 | 2026-07-24 | Phase 0 documentation-only foundation approved | Active |
| D-0002 | 2026-07-24 | Primary public statements and positioning approved | Active |
| D-0003 | 2026-07-24 | Foundation sequence and principal taxonomy approved | Active |
| D-0004 | 2026-07-24 | Development status system approved | Active |
| D-0005 | 2026-07-24 | Primary navigation and Purpose label approved | Partially superseded by D-0012 |
| D-0006 | 2026-07-24 | Ten-locale architecture and RTL requirement approved | Active; root route resolved by D-0014 |
| D-0007 | 2026-07-24 | Design direction and straight-corner rule approved | Active |
| D-0008 | 2026-07-24 | Planned technical stack recorded; not to be installed in Phase 0 | Active |
| D-0009 | 2026-07-24 | Invention prohibitions and legal draft-only rule approved | Active |
| D-0010 | 2026-07-24 | Phase 1 not authorized | Partially superseded by D-0018 (1A only) |
| D-0011 | 2026-07-24 | Home page section order approved | Active |
| D-0012 | 2026-07-24 | Primary/utility navigation grouping approved | Active |
| D-0013 | 2026-07-24 | Technology taxonomy independence rules approved | Active |
| D-0014 | 2026-07-24 | Root URL `/` redirects to `/en/` | Active |
| D-0015 | 2026-07-24 | Content outside components; CMS deferred | Active |
| D-0016 | 2026-07-24 | Design implementation constraints restated | Active |
| D-0017 | 2026-07-24 | Phase 0.75A Architecture Decisions document approved | Active |
| D-0018 | 2026-07-24 | Phase 1A technical initialization authorized | Active |
| D-0019 | 2026-07-24 | npm selected as package manager | Active |
| D-0020 | 2026-07-24 | Tailwind deferred | Active |
| D-0021 | 2026-07-24 | CMS / database / authentication deferred | Active |
| D-0022 | 2026-07-24 | Browser-language auto-detection deferred | Active |
| D-0023 | 2026-07-24 | Localized slug decision remains unresolved | Active |
| D-0024 | 2026-07-24 | Next.js 16 proxy convention adopted | Active |
| D-0025 | 2026-07-24 | Deprecated middleware convention removed | Active |
| D-0026 | 2026-07-24 | Git repository initialized; baseline commit pending identity | Active |
| D-0027 | 2026-07-24 | Phase 1B remains unauthorized | Superseded by D-0028 |
| D-0028 | 2026-07-24 | Phase 1B design foundation authorized | Active |
| D-0029 | 2026-07-24 | Design token modules and spacing scale adopted | Active |
| D-0030 | 2026-07-24 | Straight-corner radius default and system fonts adopted | Active |
| D-0031 | 2026-07-24 | Neutral semantic colors only; brand accents deferred | Active |
| D-0032 | 2026-07-24 | Header / Footer / Home remain unauthorized after Phase 1B | Partially superseded by D-0033 (shell only) |
| D-0033 | 2026-07-24 | Phase 1C global site shell authorized | Active |
| D-0034 | 2026-07-24 | Centralized navigation data adopted | Active |
| D-0035 | 2026-07-24 | Accessible disclosure + rectangular mobile navigation | Active |
| D-0036 | 2026-07-24 | Text wordmark and flagless language selector | Active |
| D-0037 | 2026-07-24 | Unresolved destination routes may remain unimplemented | Active |
| D-0038 | 2026-07-24 | Phase 1D remains unauthorized | Partially superseded by D-0039 (1D.1 only) |
| D-0039 | 2026-07-24 | Phase 1D.1 Home Hero and Purpose authorized | Active |
| D-0040 | 2026-07-24 | Editorial Hero layout without imagery | Active |
| D-0041 | 2026-07-24 | Approved Hero copy adopted | Active |
| D-0042 | 2026-07-24 | Three application contexts on Home | Active |
| D-0043 | 2026-07-24 | English fallback across locale Home routes | Active |
| D-0044 | 2026-07-24 | Home built in incremental section phases | Active |
| D-0045 | 2026-07-24 | Phase 1D.2 remains unauthorized | Superseded by D-0046 |
| D-0046 | 2026-07-24 | Phase 1D.2 Foundation and System Logic authorized | Active |
| D-0047 | 2026-07-24 | Four-stage Foundation Chain adopted | Active |
| D-0048 | 2026-07-24 | Human Data Model terminology retained | Active |
| D-0049 | 2026-07-24 | Five-step governed system logic adopted | Active |
| D-0050 | 2026-07-24 | Six-part Technology Overview as disciplines | Active |
| D-0051 | 2026-07-24 | No imagery in Phase 1D.2 | Active |
| D-0052 | 2026-07-24 | Phase 1D.3 remains unauthorized | Superseded by D-0053 |
| D-0053 | 2026-07-24 | Phase 1D.3 Systems, Research and Trust authorized | Active |
| D-0054 | 2026-07-24 | Five-system Home overview adopted | Active |
| D-0055 | 2026-07-24 | Research and Labs remain separate concepts | Active |
| D-0056 | 2026-07-24 | Trust Architecture pillars and autonomy limit line | Active |
| D-0057 | 2026-07-24 | No imagery in Phase 1D.3 | Active |
| D-0058 | 2026-07-24 | Phase 1D.4 remains unauthorized | Superseded by D-0059 |
| D-0059 | 2026-07-24 | Phase 1D.4 Home completion authorized | Active |
| D-0060 | 2026-07-24 | Four-stage Development Status without dates or percentages | Active |
| D-0061 | 2026-07-24 | Company principles adopted | Active |
| D-0062 | 2026-07-24 | Investor communication without financial claims | Active |
| D-0063 | 2026-07-24 | Roadmap by capability; approved Home closing statement | Active |
| D-0064 | 2026-07-24 | Home page structural build complete | Active |
| D-0065 | 2026-07-24 | Further Home visual review before destination pages | Active |
| D-0066 | 2026-07-24 | Phase 1E remains unauthorized | Superseded by D-0067 |
| D-0067 | 2026-07-24 | Phase 1E.1 corporate Home restructure authorized | Active |
| D-0068 | 2026-07-24 | Home is a corporate gateway, not a full presentation | Active |
| D-0069 | 2026-07-24 | Seven-region Home structure adopted | Active |
| D-0070 | 2026-07-24 | Long-form content belongs on destination pages | Active |
| D-0071 | 2026-07-24 | Technology and Systems combined on Home; taxonomies separate | Active |
| D-0072 | 2026-07-24 | Research, Labs and Trust combined visually; concepts separate | Active |
| D-0073 | 2026-07-24 | Closing Company, Investors and Roadmap region | Active |
| D-0074 | 2026-07-24 | Phase 1E.2 destination pages remain unauthorized | Superseded by D-0075 |
| D-0075 | 2026-07-24 | Phase 1E.2 internal page architecture authorized | Active |
| D-0076 | 2026-07-24 | Four internal page types adopted | Active |
| D-0077 | 2026-07-24 | Compact internal masthead; shared page architecture | Active |
| D-0078 | 2026-07-24 | Internal page content outside JSX; four demo routes only | Active |
| D-0079 | 2026-07-24 | Full destination-page development deferred | Active |
| D-0080 | 2026-07-24 | Phase 1E.3 remains unauthorized | Active |
| D-0081 | 2026-07-24 | Phase 1F.1 Purpose and Foundation authorized | Active |
| D-0082 | 2026-07-24 | Purpose and Foundation are permanent reference pages | Active |
| D-0083 | 2026-07-24 | Foundation layer field model adopted | Active |
| D-0084 | 2026-07-24 | HTML/CSS architecture diagrams only | Active |
| D-0085 | 2026-07-24 | Phase 1F.2 remains unauthorized | Active |
| D-0086 | 2026-07-24 | Phase 2.1 knowledge architecture authorized | Active |
| D-0087 | 2026-07-24 | Eight knowledge domains adopted | Active |
| D-0088 | 2026-07-24 | Knowledge content and visual blocks separated from page redesign | Active |
| D-0089 | 2026-07-24 | Phase 2.2 remains unauthorized | Superseded by D-0090 |
| D-0090 | 2026-07-24 | Phase 2.2 engineering design system authorized | Active |
| D-0091 | 2026-07-24 | Shared engineering documentation visual language adopted | Active |
| D-0092 | 2026-07-24 | Neutral callout types; single table and diagram language | Active |
| D-0093 | 2026-07-24 | Phase 2.3 remains unauthorized | Active |
| D-0094 | 2026-07-24 | One canonical knowledge entity registry | Active |
| D-0095 | 2026-07-24 | Static TypeScript knowledge model; no runtime database | Active |
| D-0096 | 2026-07-24 | Relationship IDs are the source of truth | Active |
| D-0097 | 2026-07-24 | Deterministic entity registry validation | Active |
| D-0098 | 2026-07-24 | Domain exports derive from the entity registry | Active |
| D-0099 | 2026-07-24 | No graph visualization in Phase 3.0 | Active |
| D-0100 | 2026-07-24 | Phase 3.0 authorized; Foundation and Research demo only | Active |
| D-0101 | 2026-07-24 | Phase 3.1 remains unauthorized | Superseded by D-0102 |
| D-0102 | 2026-07-24 | Phase 3.1 Technology domain authorized | Active |
| D-0103 | 2026-07-24 | Technology domain consumes canonical entity registry | Active |
| D-0104 | 2026-07-24 | Technology is the reference knowledge-domain implementation | Active |
| D-0105 | 2026-07-24 | Phase 3.2 remains unauthorized | Superseded by D-0106 |
| D-0106 | 2026-07-24 | Phase 3.2 Human Data Model page authorized | Active |
| D-0107 | 2026-07-24 | Human Data Model is the flagship engineering reference page | Active |
| D-0108 | 2026-07-24 | Phase 3.3 remains unauthorized | Active |
| D-0109 | 2026-07-24 | Content Wave 1.1 Human Data page authorized | Active |
| D-0110 | 2026-07-24 | Plain-language editorial standard for knowledge pages | Active |
| D-0111 | 2026-07-24 | Approved definitions: Human Data and Human Data Model | Active |
| D-0112 | 2026-07-24 | Content Wave 1.2 Data Infrastructure page authorized | Active |
| D-0113 | 2026-07-24 | Technology knowledge domain content sprint completed | Active |
| D-0114 | 2026-07-24 | Systems knowledge domain content sprint completed | Active |
| D-0115 | 2026-07-24 | Approved Systems page boundaries and definitions | Active |
| D-0116 | 2026-07-24 | Relation links use published routes only | Active |
| D-0117 | 2026-07-24 | Systems core architecture sprint completed | Active |
| D-0118 | 2026-07-24 | Systems core page template and domain chain | Active |
| D-0119 | 2026-07-24 | Design Sprint 1 SAVEN Core visual system authorized and completed | Active |
| D-0120 | 2026-07-24 | KnowledgeHero-first rhythm and page-specific signal diagrams | Active |
| D-0121 | 2026-07-24 | Content + Design Sprint 2 Applications and Trust authorized and completed | Active |
| D-0122 | 2026-07-24 | Trust published as primary knowledge domain distinct from /legal | Active |
| D-0123 | 2026-07-24 | Trust vs Technology Privacy/Security vs Systems Safety Layer boundaries | Active |
| D-0124 | 2026-07-24 | Home Knowledge Explorer entrance authorized and completed | Active |
| D-0125 | 2026-07-24 | Knowledge Object Architecture authorized and completed | Active |
| D-0126 | 2026-07-24 | Language, navigation and footer refinement authorized and completed | Active |
| D-0127 | 2026-07-25 | Human-first design philosophy correction (v1.1) | Active |
| D-0128 | 2026-07-25 | SAVEN Experience Redesign authorized | Active |
| D-0129 | 2026-07-25 | Homepage Direction B + Robotics Lab care purpose approved | Superseded for homepage primacy by D-0130 |
| D-0130 | 2026-07-25 | Official site assignment — engineering showcase; A+B home; Physical World hero | Active |
| D-0131 | 2026-07-25 | Owner canonical scopes for Robotics Lab / Interface / Future Lab | Active |
| D-0132 | 2026-07-25 | Two-layer UX — keep technical pages; footer is depth map; public surface stays simple | Active |
| D-0133 | 2026-07-25 | Phase 1 Layer-1 homepage — Intelligence for the Physical World | Active |
| D-0134 | 2026-07-25 | Header emptied; homepage clarity-only; site map in footer | Active |
| D-0135 | 2026-07-25 | Homepage hero imagery + living atmosphere + visual essence section | Active |
| D-0136 | 2026-07-25 | Photoreal home hero required; labeled wireframe diagrams rejected | Active |
| D-0137 | 2026-07-25 | Multi-robot assistive hero scene + highly visible living motion | Active |
| D-0138 | 2026-07-25 | Homepage hero uses living photoreal video of multi-robot assistance | Active |
| D-0139 | 2026-07-25 | Smooth living assistive multi-robot hero motion required | Active |
| D-0140 | 2026-07-25 | Hero loop must show smooth assistive robot action, not camera-only motion | Active |
| D-0141 | 2026-07-25 | Multi-domain living assistive scenes on home authorized from owner references | Active |
| D-0142 | 2026-07-25 | Expanded medical/care living scenes on home authorized from owner reference | Active |
| D-0143 | 2026-07-25 | Homepage closing SAVEN what-we-do graphic with owner acronym + tagline | Superseded by D-0144 |
| D-0144 | 2026-07-25 | Owner withdrew homepage closing what-we-do graphic | Superseded by D-0145 |
| D-0145 | 2026-07-25 | Closing SAVEN meaning graphic as blended homepage bottom background | Active |
| D-0146 | 2026-07-25 | Closing graphic must be full-bleed (no side bars); WebP optimized | Superseded by D-0147 |
| D-0147 | 2026-07-25 | Closing graphic: responsive natural-aspect banner on full-bleed dark band | Active |
| D-0148 | 2026-07-25 | Care→closing bridge full-bleed; no letterboxed light strip | Active |
| D-0149 | 2026-07-25 | Localize home Layer-1 content to body locales + living help collage hero | Active |
| D-0150 | 2026-07-25 | Single home living carousel; industrial/agriculture/teamwork removed | Active |
| D-0151 | 2026-07-25 | Living collage motion + hero copy clear of photos | Active |
| D-0152 | 2026-07-25 | Hero collage: tighter gap + unmistakable living motion | Active |
| D-0153 | 2026-07-25 | Header important-pages menu restored (short hubs) | Active |
| D-0154 | 2026-07-25 | Legal pages returned to footer + draft/approved content rules | Active |
| D-0155 | 2026-07-25 | Theme sun/moon + language flags + upward footer language | Active |
| D-0156 | 2026-07-25 | Sign In/Up + Google auth page | Active |
| D-0157 | 2026-07-25 | Unified readable Layer-1 hub visual system + image optimization | Active |
| D-0158 | 2026-07-25 | Auth card polish + visual Layer-1 hubs | Active |
| D-0159 | 2026-07-25 | Robotics Lab / Research hero / Investors brochure expansion | Active |
| D-0160 | 2026-07-25 | Unified visual domain-page system (hubs + leaves) | Active |
| D-0166 | 2026-07-26 | Labs visual pages + SAVEN data/action loop diagram | Active |
| D-0167 | 2026-07-26 | Labs data-loop diagram placement + visual enrichment | Active |
| D-0168 | 2026-07-26 | Typography system — Apple-like clarity sitewide | Active |
| D-0169 | 2026-07-26 | Visible Apple-clean Inter webfont + sans titles | Active |
| D-0170 | 2026-07-26 | Theme contrast fix — home hero/care + dark chrome | Superseded for chrome/care by D-0171 |
| D-0171 | 2026-07-26 | Full light/dark theme coverage — chrome + content planes | Partially superseded by D-0172 for home shell/closing |
| D-0172 | 2026-07-26 | Theme plane completion — unfreeze home/care/closing/labs surround | Active |
| D-0161 | 2026-07-26 | Full page-body localization (10 locales) + cleanup + Vercel prep | Active |
| D-0162 | 2026-07-26 | PWA + SEO / security headers / marketing surface prep | Active |
| D-0163 | 2026-07-26 | Credentials sign-in form + show password + Google | Active |
| D-0173 | 2026-07-26 | Investors visual + Contact page/form + About team narrative | Active |
| D-0174 | 2026-07-26 | Positioning: uses/advances AI; does not claim to create AI | Active |
| D-0175 | 2026-07-26 | Experience Redesign UI freeze — completed approved snapshot | Active |
| D-0176 | 2026-07-26 | Admin Platform / Social footer — first vertical slice | Active |
| D-0177 | 2026-07-26 | Owner always super_admin via demo operator / dev defaults | Active |
| D-0178 | 2026-07-26 | Admin Platform expansion + branded email templates | Active |
| D-0179 | 2026-07-26 | Falcon domain presence + OG share defaults | Active |
| D-0180 | 2026-07-26 | Email templates restyled to owner example | Active |
| D-0181 | 2026-07-26 | Footer Legal equal columns, More hub, socials bottom row | Active |
| D-0182 | 2026-07-26 | Rename Applications “Home” leaf to Home Application | Active |
| D-0183 | 2026-07-26 | Expanded email templates + public/admin Media library | Active |
| D-0184 | 2026-07-26 | Admin Media simplified Add content UX (File / Video / Link) | Active |
| D-0185 | 2026-07-26 | Admin Media traditional CMS UX + video/delete fixes | Active |
| D-0186 | 2026-07-26 | Admin Media delete-all + upload CTAs + public Media viewer | Active |
| D-0187 | 2026-07-26 | Admin Media library filter chip contrast (light/dark) | Active |
| D-0188 | 2026-07-27 | Footer Architecture column — Systems depth map | Active |
| D-0189 | 2026-07-27 | SAVEN Robotics Interface — interoperability copy + hub diagram | Active |
| D-0190 | 2026-07-27 | Robotics Interface diagram — color, motion, device illustration | Active |
| D-0191 | 2026-07-27 | Robotics Interface diagram — SAVEN logo + photoreal device thumbs | Active |
| D-0192 | 2026-07-27 | Robotics Interface diagram — thumb visibility + section polish | Active; device photo approach superseded by D-0193 |
| D-0193 | 2026-07-27 | Robotics Interface diagram — large SVG device illustrations | Active |
| D-0194 | 2026-07-27 | Gap backlog execution pass (docs, legal UX, Blob, Systems, Roadmap, …) | Active |
| D-0195 | 2026-07-27 | Owner YouTube URL live in footer (committed default + env override) | Active |
| D-0196 | 2026-07-27 | Owner X (Twitter) URL live in footer (committed default + env override) | Active |
| D-0197 | 2026-07-27 | Owner Instagram URL live in footer (committed default + env override) | Active |
| D-0198 | 2026-07-27 | Owner Facebook URL live in footer (committed default + env override) | Active |
| D-0199 | 2026-07-27 | Footer section columns — nine equal tracks in one desktop row | Superseded by D-0200 |
| D-0200 | 2026-07-27 | Footer section columns — two balanced rows + visual separations | Superseded by D-0205 |
| D-0201 | 2026-07-27 | Media download (mobile + desktop) + Vercel Blob deploy readiness | Active |
| D-0202 | 2026-07-27 | Public FAQ page (accordion, governance-safe) | Active |
| D-0203 | 2026-07-28 | Deep FAQ Q&A translations (10 locales) + Media download polish | Active |
| D-0204 | 2026-07-28 | Max-size favicon / PWA / apple-touch icons from brand mark | Active (fill supersede: D-0205) |
| D-0205 | 2026-07-28 | Apple-style footer (5 columns, stacked groups) + max-fill favicon | Superseded by D-0209 (layout); fill by D-0208 |
| D-0206 | 2026-07-28 | Footer — more space between stacked sections; slightly smaller type; earlier 5-col row | Active |
| D-0207 | 2026-07-28 | Theme tokens — light off-white + dark soft gray-blue; footer 5-col from ≥720px | Active (light off-white deepen: D-0208) |
| D-0208 | 2026-07-28 | Footer socials/bar, care carousel links, direction table, footer fit, off-white deepen, favicon fill, nav one-row, Windows hover | Active |
| D-0209 | 2026-07-28 | Footer one forced row (9 equal columns) + care stage Application CTAs | Active |
| D-0210 | 2026-07-28 | Footer language switcher hover color (Windows Chrome-safe) | Active |
| D-0211 | 2026-07-28 | Deeper off-white, navy-tile favicon, footer form/disclaimer, FAQ care Q&As | Active (footer form removed: D-0212) |
| D-0212 | 2026-07-28 | Footer: remove Get in touch; disclaimer under socials; denser links; slogan lockup | Active |
| D-0213 | 2026-07-28 | Admin light/dark theme + logo + accents; footer Install app in Resources | Active |
| D-0214 | 2026-07-28 | Email chrome restyle to site tokens; remove footer social icons | Active |
| D-0215 | 2026-07-28 | Future Lab naming beyond classic R&D + visual lab page; footer Install same size as links | Active |
| D-0216 | 2026-07-28 | Explore SAVEN interactive closing band + legal interim policy pass | Active |
| D-0217 | 2026-07-28 | Closing band: SAVEN wordmark glow + upper corner nav | Active (denser nav / glow size: D-0218) |
| D-0218 | 2026-07-28 | Closing band: denser upper nav + ~2× SAVEN glow + lively hover | Active |
| D-0219 | 2026-07-28 | Homepage clarity pack (definition, chain, pillars, audience, boundaries) — reversible flag | Active |
| D-0220 | 2026-07-28 | Analysis backlog execution — legal chrome honesty, clarity v2 density, ops docs, durable Admin JSON/Blob, corner More links, title search, CSP defer | Partially superseded (corner More links → D-0221) |
| D-0221 | 2026-07-29 | Restore dense closing corner nav; richer clarity cards; smaller footer Install app | Partially superseded (Install size → D-0222) |
| D-0222 | 2026-07-29 | Force footer Install app clearly smaller than column links | Superseded by D-0223 |
| D-0223 | 2026-07-29 | Restore always-visible footer Install app; match column link type | Active |
| D-0224 | 2026-07-29 | Fix Install app help UX (no bare Close); restore media downloads | Active |
| D-0225 | 2026-07-29 | Explore SAVEN cinematic letter showcase (clarity band) | Active |
| D-0226 | 2026-07-29 | Explore SAVEN: larger letter tabs + compact band | Active |
| D-0227 | 2026-07-29 | BioMath Core: 20 categories / 200+ services → SAVEN actions | Active |
| D-0228 | 2026-07-29 | BioMath Core leaf `/foundation/biomath-core/` + home Go deeper | Active |
| D-0229 | 2026-07-29 | BioMath Core catalog redesign, transparent logo, home order | Partially superseded by D-0230 (home merge + leaf capability diagrams) |
| D-0230 | 2026-07-29 | BioMath Core capability redesign + home merged bridge | Partially superseded by D-0231 (owner graphics as page assets) |
| D-0231 | 2026-07-29 | BioMath Core owner capability images on leaf | Partially superseded by D-0232 (native components primary) |
| D-0232 | 2026-07-29 | BioMath Core site-native themeable components | Partially superseded by D-0234 (rich illustration panels primary) |
| D-0233 | 2026-07-29 | Living Model + Four-layer stack visual redesign | Partially superseded by D-0234 (owner-grade panels replace primitive SVG primacy) |
| D-0234 | 2026-07-29 | BioMath Core rich illustration panels | Active; refined by D-0235 (unified English diagram series) |
| D-0235 | 2026-07-29 | BioMath Core unified English diagram series | Active; refined by D-0236 |
| D-0236 | 2026-07-29 | BioMath Core Engine cache-bust + compact panels + hero band | Active; refined by D-0237 (category panels) |
| D-0237 | 2026-07-29 | BioMath Core category panels — no counts, Environments chrome | Active; refined by D-0238 |
| D-0238 | 2026-07-29 | BioMath Core diagram rhythm + Black Box sensitive-data storage intent | Active; refined by D-0239 |
| D-0239 | 2026-07-29 | BioMath Core follow-ups — policy links, TOC, Trust paths, a11y | Active |
| D-0240 | 2026-07-29 | Security / SEO / Marketing hygiene | Active |
| D-0241 | 2026-07-29 | Performance / Downloads / critical-path speed | Active |
| D-0242 | 2026-07-29 | i18n audit — BioMath Core + public UI chrome | Active |
| D-0243 | 2026-07-29 | Contact rate limit + BMC mobile / what-is-not / home sync | Active |
| D-0244 | 2026-07-29 | Theme bootstrap via next/script (React 19 / Next 16.2) | Active |
| D-0245 | 2026-07-29 | Search page balance + home YouTube feature band | Active |
| D-0246 | 2026-07-29 | Investors professional page (BMC framing, SAVEN-owned) | Active |
| D-0247 | 2026-07-29 | Nav Home/Trust/Research + Investors chrome + footer completeness | Active |
| D-0248 | 2026-07-29 | Investors polish + related-page sync + translation audit | Active |
| D-0249 | 2026-07-30 | Home closing SAVEN frame matched to YouTube frame | Active |
| D-0250 | 2026-07-30 | Theme bootstrap via useServerInsertedHTML (React 19 / Next 16.2) | Active |
| D-0251 | 2026-07-30 | BioMath Core diagrams — hover life + section anchor links | Active |
| D-0252 | 2026-07-30 | Public chrome: remove In Development messaging + BMC 200+ under 20 | Active |
| D-0253 | 2026-07-30 | Investors locale repair after D-0252 + downloads/PWA verify | Active |
| D-0254 | 2026-07-30 | Final public site snapshot freeze | Active |
| D-0255 | 2026-08-08 | Home particle morph hero (WebGL; approved reference) | Active |
| D-0256 | 2026-08-08 | Particle hero densify, rebake from 5-panel refs, snappy loop | Active |
| D-0257 | 2026-08-08 | Particle hero true 16:9 frames — never display 5-panel sheet | Active |
| D-0258 | 2026-08-08 | Restore professional HTML particle buffers (quality recovery) | Active |
| D-0259 | 2026-08-08 | Fix HUMAN + INTERFACE particle scenes (clean logo / dense human) | Active |
| D-0260 | 2026-08-08 | Official logo INTERFACE + sharper HUMAN + living holds + smaller stage | Active |
| D-0261 | 2026-08-08 | Rollback home to photo collage; particle morph → preview only | Active |
| D-0262 | 2026-08-08 | Dark clarity / Explore SAVEN cards → gray-blue slate | Active |
| D-0263 | 2026-08-08 | Test / Lab experiments hub (`/lab/`) + footer Resources link | Active |
| D-0264 | 2026-08-08 | Lab particle experiment — human + energy waves (preview) | Active |
| D-0265 | 2026-08-08 | Lab particle story — Understanding → Assistance → Care | Active |
| D-0266 | 2026-08-08 | Lab video splash — GWR MVP preview band on `/lab/` | Active |
| D-0267 | 2026-08-08 | Retire particle experiment; light Lab video + cinematic effects | Active |
| D-0268 | 2026-08-08 | Lab splash: one video only — remove depth blur duplicate | Active |
| D-0269 | 2026-08-08 | Lab video band — designed cut, sound/mute, parallax, cursor light, editorial frame | Superseded (framing) by D-0270 |
| D-0270 | 2026-08-08 | Lab video — remove editorial frame; amplify parallax / cursor / Ken Burns / grade | Superseded (cut/chrome edges) by D-0271 |
| D-0271 | 2026-08-08 | Lab video — skip in-file black first scene; soft embed into page background | Soft embed Active; intro skip superseded by D-0276 (grain/vignette/grade retired by D-0272) |
| D-0272 | 2026-08-08 | Lab video — remove grain/heavy darkenings; overlay copy + explore links | Active |
| D-0273 | 2026-08-08 | Lab video — symmetric soft blend into page background (top = bottom) | Active |
| D-0274 | 2026-08-08 | Lab video — restore original frame size (no zoom crop) | Active (intro skip portion superseded by D-0276) |
| D-0275 | 2026-08-08 | Lab video — chapter scrub + timed captions (Understanding → Assistance → Care) | Active (chapter times retimed by D-0276) |
| D-0276 | 2026-08-08 | Lab video — restore opening dots-person scene (no aggressive intro skip) | Active |
| D-0277 | 2026-08-08 | Lab video — second clip (SAVEN) + extensible multi-clip switcher | Active |
| D-0278 | 2026-08-08 | Lab video — Site main clip first (SAVEN_site 1) in playlist switcher | Active |

---

## Entries

### D-0001 — Phase 0 documentation-only foundation

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Create permanent project specification and development governance documents before any website build work.
- **In scope:** Master Spec, Project Rules, IA, Content Model, Design Principles, Localization Spec, Trust/Legal Structure, Roadmap Content Model, Decisions Log, AGENTS.md
- **Out of scope:** Next.js initialization, package installation, page generation, visual components, images, `package.json`, application code
- **Implications:** No implementation phase may begin until explicitly approved.

### D-0002 — Primary public statements and positioning

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Approve the following public statements for website use:
  - Primary: “Intelligent systems built to support human life.”
  - Supporting: “SAVEN Core develops intelligent systems that help people in hospitals, at home and wherever life happens — across every age and stage of life.”
  - Positioning: “From human understanding to physical assistance.”
- **Implications:** Additional marketing claims require new approval. Inflated claim language remains prohibited.

### D-0003 — Foundation sequence and principal taxonomy

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** The company foundation sequence is BioMath Life → BioMath Core → SAVEN → SAVEN Core and must be presented as continuous, not unrelated projects. Initial systems, labs, technology areas, primary human applications, and future extensions are those listed in the Master Spec.
- **Implications:** Taxonomy changes require a superseding decision. Primary human applications always appear before future extensions.

### D-0004 — Development status system

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Adopt status values Research, Architecture, In Development, Prototype, Validation, Pilot, Operational. Current public content primarily uses Research, Architecture, In Development. All principal systems are currently in development and must not be presented as completed or commercially available products.
- **Implications:** Status fields (status, last updated, explanation, public/restricted) are mandatory for relevant entities.

### D-0005 — Primary navigation and Purpose label

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Top-level navigation is Purpose, Foundation, Technology, Systems, Labs, Applications, Research, Roadmap, Company, Investors. Utility navigation is Search, Language, Contact. “Mission” is not used as the principal navigation label.
- **Implications:** Navigation changes require explicit approval. Footer structure follows Master Spec columns.

### D-0006 — Ten-locale architecture and RTL

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Architecture must support `en`, `es`, `de`, `fr`, `ja`, `zh-cn`, `ar`, `he`, `uk`, `ru` from the beginning, with English as source language. Arabic and Hebrew require complete RTL support. Browser auto-translation is not the localization system. Fallback to English when approved localized content is unavailable.
- **Implications:** Routing, content model, and UI architecture must be locale-ready before broad page build-out. Open owner decisions remain for `/` vs `/en/` default behavior and localized slugs.

### D-0007 — Design direction

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Visual direction is modern, precise, engineering-led, human-centered, light-primary with controlled dark technology sections, straight corners, no rounded-card system, restrained motion, and WCAG 2.2 AA target. Prohibited patterns include generic AI gradients, glowing spheres, glassmorphism, fake interfaces, and unrelated stock robots.
- **Implications:** Design tokens and components in later phases must comply. No decorative futurism for its own sake.

### D-0008 — Planned technical stack (deferred installation)

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Planned direction includes Next.js, TypeScript, App Router, React, next-intl, Vercel, structured content, later headless CMS, multilingual metadata, RTL, structured SEO, secure forms, cookie consent, and privacy-controlled analytics. None of these are installed or configured in Phase 0.
- **Implications:** Stack setup requires a future phase approval entry.

### D-0009 — Invention prohibitions and legal draft-only rule

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Do not invent products, customers, partners, approvals, patents, metrics, medical outcomes, team members, revenue, investment, or final legal/medical text. Trust/legal pages exist as draft structures until legal review. Social URLs remain configurable without fake links. Copyright line uses “SAVEN Core” without “Inc.” until legal name confirmation. Preferred trust language approved: “Designed around privacy, controlled access, data minimization, safety, traceability, and human oversight.”
- **Implications:** Agents must refuse requests that require invented facts or final legal prose.

### D-0010 — Phase 1 not authorized

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** After Phase 0 document creation, work stops. Phase 1 (implementation) is not authorized.
- **Implications:** Coding agents must not begin application scaffolding until a new decision or explicit owner instruction authorizes the next phase.

### D-0011 — Home page section order approved

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Approve the home page section order recorded in `ARCHITECTURE_DECISIONS.md` §1: Hero; Human Purpose; Hospital • Home • Everyday Life; BioMath Life → BioMath Core → SAVEN → SAVEN Core; How the System Works; Technology Overview; Systems; Research & Labs; Safety • Privacy • Human Oversight; Development Status; Company; Investors; Footer.
- **Implications:** Home is the comprehension spine. Leaf-page production should not precede an implementation of this order without owner approval.

### D-0012 — Primary/utility navigation grouping approved

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Primary navigation is Purpose, Foundation, Technology, Applications, Research, Company. Utility navigation is Investors, Search, Language, Contact. Technology contains Technology, Systems, Labs. Research contains Research, Publications, Roadmap. Company contains About, Leadership, Careers, Contact, Trust.
- **Supersedes:** D-0005 primary/utility grouping (flat ten-item primary nav). Purpose label rule from D-0005 remains in force.
- **Implications:** Systems, Labs, Roadmap, and Investors are no longer peer primary items. Route inventory may still expose dedicated pages; grouping changes presentation, not taxonomy independence.

### D-0013 — Technology taxonomy independence rules approved

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Technology = disciplines; Systems = products and engineering systems; Labs = research organizations; Applications = where technology is used; Research = publications and engineering work; Roadmap = development timeline. These concepts must remain independent.
- **Implications:** Templates and content types must not collapse these into one interchangeable catalog. Cross-links are allowed; identity substitution is not.

### D-0014 — Root URL redirects to `/en/`

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** `/` redirects to `/en/`. English remains canonical. Architecture continues to support all ten locales with RTL for Arabic and Hebrew.
- **Resolves:** Open root-route question from D-0006 / prior pending list item 2.
- **Implications:** Locale-prefixed English at `/en/` is mandatory. Other locale prefixes remain required.

### D-0015 — Content outside components; CMS deferred

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** English is the source language. Content must remain outside React components. Architecture must allow future CMS integration. No CMS is selected yet.
- **Implications:** Do not hardcode narrative content in components. Choose a structured content approach in Phase 1 that can migrate to a headless CMS later without IA rewrite.

### D-0016 — Design implementation constraints restated

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** The website must look like a serious engineering organization. Avoid startup templates, glowing AI gradients, glassmorphism, rounded card systems, fake robotics imagery, and excessive animations. Straight corners remain mandatory.
- **Implications:** Restates D-0007 for implementation gating; does not modify Master Spec philosophy.

### D-0017 — Phase 0.75A Architecture Decisions document approved

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Create and adopt `docs/ARCHITECTURE_DECISIONS.md` as the record of implementation decisions approved after the Phase 0 Architecture Review.
- **In scope:** Documentation only.
- **Out of scope:** Phase 1, Next.js initialization, dependency installation, application code, modification of approved philosophy.
- **Implications:** D-0010 remains in force. Phase 1 still requires explicit authorization and scope definition.

### D-0018 — Phase 1A technical initialization authorized

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Authorize Phase 1A only: initialize Next.js App Router, React, TypeScript, ESLint, locale-prefixed routing, `/` → `/en/` redirect, ten-locale structural support, RTL document direction for Arabic and Hebrew, minimal global CSS, and successful lint/type-check/build validation.
- **Supersedes:** D-0010 for Phase 1A scope only.
- **Out of scope:** Design system, production Home page, Header/Footer/Mega Menu, marketing sections, CMS, database, forms, analytics, cookie consent, authentication, investor access, Phase 1B+.
- **Implications:** Broader Phase 1 work remains unauthorized until explicitly approved. See `docs/PHASE_1A_TECHNICAL_FOUNDATION.md`.

### D-0019 — npm selected as package manager

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Use npm as the package manager for the SAVEN Core website repository.
- **Implications:** Lockfile is `package-lock.json`. Do not introduce parallel package-manager lockfiles without a superseding decision.

### D-0020 — Tailwind deferred

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Do not install or configure Tailwind CSS in Phase 1A. Styling remains a minimal global CSS foundation only.
- **Implications:** Design-system and token work belong to a later authorized phase.

### D-0021 — CMS / database / authentication deferred

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Local CMS, database, and authentication are not part of Phase 1A. No speculative folders or integrations for these capabilities.
- **Implications:** Reinforces D-0015. Content remains outside React components when content work begins; CMS selection remains open.

### D-0022 — Browser-language auto-detection deferred

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Do not auto-detect or redirect based on browser language in Phase 1A. Locale routes are explicit path prefixes only.
- **Implications:** Users reach locales via `/en/`, `/ar/`, etc. Future locale preference behavior requires a separate decision.

### D-0023 — Localized slug decision remains unresolved

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Localized path slugs remain unresolved. Phase 1A uses English slugs only (none implemented beyond locale prefixes).
- **Implications:** Owner must decide later whether localized slugs are desired; until then, keep English path segments.

### D-0024 — Next.js 16 proxy convention adopted

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Adopt the Next.js 16 `proxy.ts` file convention for the `/` → `/en/` redirect and route matcher. Export name is `proxy`.
- **Implications:** Do not reintroduce `middleware.ts`. Do not expand proxy behavior beyond approved foundation redirects without a new decision.

### D-0025 — Deprecated middleware convention removed

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Remove `middleware.ts` after manual migration to `proxy.ts`. No canary codemod used.
- **Implications:** Builds must not emit the middleware deprecation notice. Proxy retains prior redirect/matcher behavior only.

### D-0026 — Git repository initialized; baseline commit pending identity

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Initialize a local Git repository on branch `main` for the SAVEN Core workspace. Stage the technical foundation and documentation for a baseline commit titled `chore: establish SAVEN Core technical foundation`.
- **Blocked:** Commit not created because Git `user.name` and `user.email` are unset. Identity must be configured by the owner (no invented values; no global config changes by agents).
- **Implications:** No remote configured. No push. Baseline hash pending owner commit after identity setup.

### D-0027 — Phase 1B remains unauthorized

- **Date:** 2026-07-24
- **Status:** Superseded by D-0028
- **Decision:** Phase 1A.1 authorization does not extend to Phase 1B. Design system, Home page, Header/Footer/navigation, marketing pages, CMS, forms, authentication, analytics, and visual design remain unauthorized.
- **Implications:** Agents must stop after Phase 1A.1 corrections and Git baseline preparation.

### D-0028 — Phase 1B design foundation authorized

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Authorize Phase 1B to create the visual engineering foundation under `src/design/` and document it in `docs/PHASE_1B_DESIGN_FOUNDATION.md`.
- **Supersedes:** D-0027 for design-foundation scope only.
- **Out of scope:** Home page, Header, Footer, navigation, content sections, marketing copy, UI components, custom fonts, final brand colors.
- **Implications:** Subsequent UI work must consume these tokens. Phase 1B does not authorize component or page build-out.

### D-0029 — Design token modules and spacing scale adopted

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Adopt modules `tokens.ts`, `spacing.ts`, `typography.ts`, `breakpoints.ts`, `container.ts`, `motion.ts`, and `radius.ts`. Spacing scale is exclusively 4, 8, 12, 16, 24, 32, 48, 64, 96.
- **Implications:** No random spacing. Breakpoints and containers follow one responsive ladder (sm → 2xl).

### D-0030 — Straight-corner radius default and system fonts adopted

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Global border radius remains `0`. Typography uses system font stacks and the defined type roles only. Custom brand fonts remain deferred.
- **Implications:** Any future rounding must be explicit opt-in per component, never a sitewide card radius system.

### D-0031 — Neutral semantic colors only; brand accents deferred

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Phase 1B defines only neutral semantic color tokens (`background`, `surface`, `text`, `textSecondary`, `border`, `divider`, `success`, `warning`, `error`) plus limited dark-section neutrals. Final brand accent colors are not selected.
- **Implications:** Do not introduce purple/indigo AI gradients, neon, or template brand palettes.

### D-0032 — Header / Footer / Home remain unauthorized after Phase 1B

- **Date:** 2026-07-24
- **Status:** Partially superseded by D-0033 (shell only)
- **Decision:** Completing Phase 1B does not authorize Header, Footer, navigation, Home page, or component libraries.
- **Implications:** Stop after design foundation validation unless a new phase is explicitly authorized.

### D-0033 — Phase 1C global site shell authorized

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Authorize a reusable localized site shell: Header, desktop/mobile navigation, utility navigation, language selector, and Footer integrated into `app/[locale]/layout.tsx`.
- **Out of scope:** Production Home page, marketing sections, CMS, search functionality, forms, authentication, analytics, cookie consent, investor portal, translated marketing copy.
- **Implications:** See `docs/PHASE_1C_GLOBAL_SITE_SHELL.md`.

### D-0034 — Centralized navigation data adopted

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Primary, utility, and footer navigation are defined once in `src/navigation/site-navigation.ts` and consumed by shell components. Labels/grouping follow Architecture Decisions.
- **Implications:** Do not hard-code duplicate navigation trees in desktop, mobile, or Footer.

### D-0035 — Accessible disclosure + rectangular mobile navigation

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Desktop groups use accessible disclosure menus (not hover-only mega menus). Mobile navigation is a full-viewport rectangular surface with explicit open/close, Escape-to-close, and temporary body-scroll lock.
- **Implications:** No third-party UI packages. No pill-shaped/floating mobile panels.

### D-0036 — Text wordmark and flagless language selector

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Header brand is a text wordmark “SAVEN Core” until a brand asset is approved. Language selector lists all ten canonical locales with text labels/codes and no flags.
- **Implications:** No automatic browser-language detection. Preserve path locale segment when safe.

### D-0037 — Unresolved destination routes may remain unimplemented

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Shell links may point to approved routes that are not yet implemented. Fake destination pages must not be created solely to avoid 404 responses.
- **Implications:** 404s for unimplemented IA routes are acceptable in Phase 1C.

### D-0038 — Phase 1D remains unauthorized

- **Date:** 2026-07-24
- **Status:** Partially superseded by D-0039 (1D.1 only)
- **Decision:** Completing Phase 1C does not authorize Phase 1D, the production Home page, or further marketing page build-out.
- **Implications:** Stop after Phase 1C commit unless explicitly authorized.

### D-0039 — Phase 1D.1 Home Hero and Purpose authorized

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Authorize Home sections 1–3 only: Hero, Human Purpose, and Hospital / Home / Everyday Life strip. See `docs/PHASE_1D_1_HOME_HERO_PURPOSE.md`.
- **Out of scope:** Remaining Home sections, imagery, CMS, forms, analytics, search, authentication, backend.
- **Implications:** Lower Home sections require a later phase authorization.

### D-0040 — Editorial Hero layout without imagery

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Home Hero uses a left-aligned editorial layout with optional CSS-only structural field. No images, video, robots, silhouettes, or glowing AI visuals.
- **Implications:** Decorative structure must remain `aria-hidden` and gradient-free.

### D-0041 — Approved Hero copy adopted

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Adopt the Phase 1D.1 Hero copy: eyebrow “SAVEN Core”; heading “Intelligent systems built to support human life.”; approved supporting text, status line, and Foundation / Applications actions.
- **Implications:** Inflated marketing language remains prohibited.

### D-0042 — Three application contexts on Home

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Home includes a three-part Hospitals / Home / Everyday Life strip with development-safe explanatory sentences and locale-aware Applications links.
- **Implications:** Do not imply active commercial deployment.

### D-0043 — English fallback across locale Home routes

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** For Phase 1D.1, all valid locale Home routes render controlled English content while preserving locale-prefixed links and RTL document direction.
- **Implications:** No machine translation and no localized slugs in this phase.

### D-0044 — Home built in incremental section phases

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Home development proceeds in small authorized section slices rather than a single full-page build.
- **Implications:** Agents must not invent or implement deferred Home sections.

### D-0045 — Phase 1D.2 remains unauthorized

- **Date:** 2026-07-24
- **Status:** Superseded by D-0046
- **Decision:** Completing Phase 1D.1 does not authorize Phase 1D.2 or any remaining Home sections.
- **Implications:** Stop after Phase 1D.1 commit unless explicitly authorized.

### D-0046 — Phase 1D.2 Foundation and System Logic authorized

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Authorize Home sections 4–6: Foundation Chain, How the System Works, and Technology Overview. See `docs/PHASE_1D_2_FOUNDATION_SYSTEM_LOGIC.md`.
- **Out of scope:** Systems, Research, Safety section, Development Status, Company, Investors, Roadmap, imagery, CMS, backend.
- **Implications:** Remaining Home sections require later authorization.

### D-0047 — Four-stage Foundation Chain adopted

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Present BioMath Life → BioMath Core → SAVEN → SAVEN Core as an explicit four-stage progression with roles and descriptions. Do not use four rounded cards or imply full operational status.
- **Implications:** Hierarchy must remain connected and continuous.

### D-0048 — Human Data Model terminology retained

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Retain “Human Data Model” terminology in the System Logic Understand step and related public Home content where relevant.
- **Implications:** Do not replace with generic alternatives such as “digital twin.”

### D-0049 — Five-step governed system logic adopted

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Adopt Observe → Understand → Evaluate → Assist → Learn with a governance note that important actions remain subject to permissions, safeguards, and human oversight.
- **Implications:** Do not present a fully autonomous loop, diagnosis, continuous medical monitoring, or unreviewed self-learning.

### D-0050 — Six-part Technology Overview as disciplines

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Present six technology disciplines with defined roles, each linking to the Technology route. Technology is enabling infrastructure; none is the purpose by itself.
- **Implications:** No AI-first positioning, logos, certifications, or medical claims.

### D-0051 — No imagery in Phase 1D.2

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Phase 1D.2 uses typography, lines, indexes, and grids only. No images, video, icons, robots, or silhouettes.
- **Implications:** Visual sequencing remains CSS-based and lightweight.

### D-0052 — Phase 1D.3 remains unauthorized

- **Date:** 2026-07-24
- **Status:** Superseded by D-0053
- **Decision:** Completing Phase 1D.2 does not authorize Phase 1D.3 or any later Home sections.
- **Implications:** Stop after Phase 1D.2 commit unless explicitly authorized.

### D-0053 — Phase 1D.3 Systems, Research and Trust authorized

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Authorize Home sections 7–9: Systems, Research & Labs, and Safety/Privacy/Human Oversight (Trust Architecture). See `docs/PHASE_1D_3_SYSTEMS_RESEARCH_TRUST.md`.
- **Out of scope:** Development Status, Company, Investors, Roadmap, imagery, CMS, backend.
- **Implications:** Remaining Home sections require later authorization.

### D-0054 — Five-system Home overview adopted

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Present five systems on Home: SAVEN Robotics Interface, SAVEN Systems Architecture, SAVEN AI, SAVEN Drone Platform, and Human Data Model Interface, each linking to the Systems route.
- **Implications:** Use development-safe language; do not imply deployment or medical-device approval.

### D-0055 — Research and Labs remain separate concepts

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Research and Labs are presented as two clearly separated layers with a relationship statement: research defines what must be understood; labs determine how it can be built, tested and governed.
- **Implications:** Do not invent publications, partners, universities, or lab names beyond approved terminology.

### D-0056 — Trust Architecture pillars and autonomy limit line

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Trust Architecture comprises Safety Architecture, Privacy Architecture, and Human Oversight, with the principle line: “Autonomy is limited by purpose, permission, risk and human authority.”
- **Implications:** Present as engineering principles, not certifications or compliance claims.

### D-0057 — No imagery in Phase 1D.3

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Phase 1D.3 uses typography, borders, indexes, and layout only. No images, icons, shields, locks, robots, or science decoration.
- **Implications:** Visual distinction between sections remains structural.

### D-0058 — Phase 1D.4 remains unauthorized

- **Date:** 2026-07-24
- **Status:** Superseded by D-0059
- **Decision:** Completing Phase 1D.3 does not authorize Phase 1D.4 or any later Home sections.
- **Implications:** Stop after Phase 1D.3 commit unless explicitly authorized.

### D-0059 — Phase 1D.4 Home completion authorized

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Authorize Home sections 10–13: Development Status, Company, Investors, and Roadmap / Closing. See `docs/PHASE_1D_4_HOME_COMPLETION.md`.
- **Out of scope:** Destination pages, imagery, CMS, backend, forms, analytics, authentication, investor portal, Phase 1E.
- **Implications:** Completes the authorized Home structural build.

### D-0060 — Four-stage Development Status without dates or percentages

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Present Development Status as Foundation (Established), Digital Systems (In development), Physical Systems (Planned and under research), and Deployment Readiness (Future phase), with an explicit non-deployment / non-approval note.
- **Implications:** No invented dates, percentages, progress bars, or “coming soon” language.

### D-0061 — Company principles adopted

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Company Home section uses three principles: Purpose before technology; Engineering before promotion; Responsibility before scale.
- **Implications:** No headquarters, legal entity, headcount, leadership, or partner invention on Home.

### D-0062 — Investor communication without financial claims

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Investors Home section describes long-term capital posture and possible material types only; links to investor overview and request-access routes without forms or authentication.
- **Implications:** No funding rounds, valuation, revenue, forecasts, or return claims.

### D-0063 — Roadmap by capability; approved Home closing statement

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Roadmap Home section uses Architecture, Software, Physical Systems, and Readiness categories (not dated milestones), ending with: “Intelligent systems are valuable only when people can understand, govern and trust how they are used.”
- **Implications:** Capability framing remains public until owner-approved dated roadmap entries exist.

### D-0064 — Home page structural build complete

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** The thirteen-section Home structural build authorized across Phases 1D.1–1D.4 is complete.
- **Implications:** Further Home work is limited to authorized visual review or later phases; do not add sections without approval.

### D-0065 — Further Home visual review before destination pages

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Destination-page development remains deferred until further Home visual review is authorized.
- **Implications:** Linked routes may continue to 404 until explicitly built.

### D-0066 — Phase 1E remains unauthorized

- **Date:** 2026-07-24
- **Status:** Superseded by D-0067
- **Decision:** Completing Phase 1D.4 does not authorize Phase 1E or any destination-page, localization, CMS, or product-surface work.
- **Implications:** Stop after Phase 1D.4 commit unless explicitly authorized.

### D-0067 — Phase 1E.1 corporate Home restructure authorized

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Authorize restructuring the completed Home page into a compact corporate gateway. See `docs/PHASE_1E_1_CORPORATE_HOME_RESTRUCTURE.md`.
- **Out of scope:** Destination pages, navigation redesign, taxonomy changes, Phase 1E.2.
- **Implications:** Home presentation becomes shorter and navigational; long-form content is preserved for later pages.

### D-0068 — Home is a corporate gateway, not a full presentation

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Home explains SAVEN Core quickly, presents principal organizational areas, and routes into deeper sections rather than telling the entire company story on one page.
- **Implications:** Header remains the primary site map; Home supplements navigation.

### D-0069 — Seven-region Home structure adopted

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Home comprises exactly seven regions: Hero; Purpose and Foundation; Applications; Technology and Systems; Research and Trust; Development Status; Company, Investors and Roadmap.
- **Implications:** The prior thirteen full-height standalone sections are retired from Home presentation.

### D-0070 — Long-form content belongs on destination pages

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Approved long-form Home copy is retained in `src/content/home/en.ts` for destination-page reuse and is not rendered in full on Home.
- **Implications:** Compact Home exports derive shared strings from preserved sources where practical.

### D-0071 — Technology and Systems combined on Home; taxonomies separate

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Technology and Systems appear together as a Home directory region but remain separate site taxonomies with separate destinations.
- **Implications:** Do not merge Technology and Systems in information architecture.

### D-0072 — Research, Labs and Trust combined visually; concepts separate

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Research, Labs, and Trust Architecture share one Home region as three columns while remaining separate concepts and destinations.
- **Implications:** Detailed Trust pillars remain for the Trust destination page.

### D-0073 — Closing Company, Investors and Roadmap region

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Company, Investors, and Roadmap form one institutional closing region with the approved closing statement retained below the columns.
- **Implications:** No giant CTA banner; links remain restrained.

### D-0074 — Phase 1E.2 destination pages remain unauthorized

- **Date:** 2026-07-24
- **Status:** Superseded by D-0075
- **Decision:** Completing Phase 1E.1 does not authorize Phase 1E.2 or any destination-page development.
- **Implications:** Stop after Phase 1E.1 commit unless explicitly authorized.

### D-0075 — Phase 1E.2 internal page architecture authorized

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Authorize reusable internal page architecture and four demonstration routes only. See `docs/PHASE_1E_2_INTERNAL_PAGE_ARCHITECTURE.md`.
- **Out of scope:** Full destination catalog, CMS, forms, search functionality, Phase 1E.3.
- **Implications:** Later pages must use the shared page types rather than inventing one-off layouts.

### D-0076 — Four internal page types adopted

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Adopt Editorial, Technical, Research, and Directory as the four internal page types for the corporate site.
- **Implications:** Destination pages map to these types; Home remains a separate gateway composition.

### D-0077 — Compact internal masthead; shared page architecture

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Internal pages use a compact masthead and shared page-level components (`PageMasthead`, section nav, related links) rather than Home Hero patterns.
- **Implications:** No landing-page Hero reuse on internal routes.

### D-0078 — Internal page content outside JSX; four demo routes only

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Store demonstration page content in `src/content/pages/en/` and implement only `/purpose/`, `/foundation/`, `/research/`, and `/applications/` in this phase.
- **Implications:** English fallback remains active; no additional locale content files yet.

### D-0079 — Full destination-page development deferred

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Full long-form destination pages beyond the four demonstration routes remain deferred.
- **Implications:** Remaining IA routes may continue to 404 until explicitly authorized.

### D-0080 — Phase 1E.3 remains unauthorized

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Completing Phase 1E.2 does not authorize Phase 1E.3 or broader destination-page build-out.
- **Implications:** Stop after Phase 1E.2 commit unless explicitly authorized.

### D-0081 — Phase 1F.1 Purpose and Foundation authorized

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Authorize permanent Purpose and Foundation content architecture on the existing Editorial and Technical page types. See `docs/PHASE_1F_1_PURPOSE_FOUNDATION.md`.
- **Out of scope:** Marketing/investor copy, product documentation, additional page types, Phase 1F.2.
- **Implications:** These pages become reference content for later site sections.

### D-0082 — Purpose and Foundation are permanent reference pages

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Purpose answers why SAVEN Core exists; Foundation answers what SAVEN Core is built upon, using the fixed BioMath Life → BioMath Core → SAVEN → SAVEN Core sequence.
- **Implications:** Later pages should align to this architecture rather than inventing alternate foundation stories.

### D-0083 — Foundation layer field model adopted

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Each foundation layer documents Purpose, Role, Relationship, Scope, Outputs, and Dependencies, followed by Human Data Model, System Relationships, Technology Relationships, and Development Philosophy.
- **Implications:** TechnicalPage supports structured layer fields for Foundation without a new page type.

### D-0084 — HTML/CSS architecture diagrams only

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Architecture diagrams on Purpose and Foundation use HTML/CSS figures (hierarchy, layers, flow, relationship). No image assets.
- **Implications:** Diagrams remain responsive, semantic, and RTL-safe.

### D-0085 — Phase 1F.2 remains unauthorized

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Completing Phase 1F.1 does not authorize Phase 1F.2 or further destination-page content phases.
- **Implications:** Stop after Phase 1F.1 commit unless explicitly authorized.

### D-0086 — Phase 2.1 knowledge architecture authorized

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Authorize the permanent knowledge architecture for SAVEN Core as an engineering knowledge center. See `docs/PHASE_2_1_KNOWLEDGE_ARCHITECTURE.md`.
- **Out of scope:** Home redesign, navigation changes, backend, long-form destination content, Phase 2.2.
- **Implications:** Later knowledge pages consume this registry rather than inventing alternate taxonomies.

### D-0087 — Eight knowledge domains adopted

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Adopt Purpose, Foundation, Technology, Systems, Research, Applications, Trust, and Company as the top-level knowledge domains with explicit related-domain links and future-expansion placeholders.
- **Implications:** Technology, Systems, Research, and Applications include architecture-only subsection/category models in `src/content/knowledge/`.

### D-0088 — Knowledge content and visual blocks separated from page redesign

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Knowledge models and reusable visual blocks (Knowledge Index, Section Navigator, Related Topics, Engineering Note, Future Expansion, Architecture Diagram) are introduced without redesigning Home, Purpose, Foundation, or site navigation.
- **Implications:** Blocks may be composed into destination pages in later authorized phases.

### D-0089 — Phase 2.2 remains unauthorized

- **Date:** 2026-07-24
- **Status:** Superseded by D-0090
- **Decision:** Completing Phase 2.1 does not authorize Phase 2.2 or knowledge destination-page build-out.
- **Implications:** Stop after Phase 2.1 commit unless explicitly authorized.

### D-0090 — Phase 2.2 engineering design system authorized

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Authorize the permanent engineering documentation design system. See `docs/ENGINEERING_DESIGN_SYSTEM.md`.
- **Out of scope:** Home redesign, navigation changes, new routes/content pages, Phase 2.3.
- **Implications:** Future knowledge pages use shared engineering blocks and styles.

### D-0091 — Shared engineering documentation visual language adopted

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Consolidate documentation presentation in `src/components/engineering/` with standard content blocks, metadata header, typography roles, and page rhythm.
- **Implications:** `pages.css` and `knowledge.css` import the shared system and retain only composition-specific rules.

### D-0092 — Neutral callout types; single table and diagram language

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Adopt four neutral callout types (Information, Engineering Note, Important, Future Work), one table system with architecture/taxonomy/relationships/status variants, and one HTML/CSS(/SVG) diagram language shared with existing page and knowledge diagram class names.
- **Implications:** No warning colors, gradients, shadows, or image-based diagrams.

### D-0093 — Phase 2.3 remains unauthorized

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Completing Phase 2.2 does not authorize Phase 2.3 or destination-page build-out.
- **Implications:** Stop after Phase 2.2 commit unless explicitly authorized.

### D-0094 — One canonical knowledge entity registry

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Adopt a single canonical `KnowledgeEntity` registry in `src/content/knowledge/entities.ts` as the shared source of truth for approved knowledge entities.
- **Implications:** Future knowledge pages must not maintain competing entity lists.

### D-0095 — Static TypeScript knowledge model; no runtime database

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** The knowledge entity model is a static TypeScript content model. No runtime database, CMS, API, or search engine is introduced in Phase 3.0.
- **Implications:** Content remains compile-time typed data until a later authorized persistence phase.

### D-0096 — Relationship IDs are the source of truth

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Cross-entity relationships are encoded as typed ID arrays on each entity (`parentId`, `childIds`, `dependencyIds`, `usedByIds`, related-* fields).
- **Implications:** Presentation layers adapt from IDs; they do not invent parallel relationship graphs.

### D-0097 — Deterministic entity registry validation

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Registry validation runs on module import via `assertEntityRegistryValid()` (unique IDs/slugs, referential integrity, parent-child consistency, Foundation hierarchy, locale-neutral page links).
- **Implications:** Invalid registries fail development/build without adding a new test framework.

### D-0098 — Domain exports derive from the entity registry

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Phase 2.1 domain presentation exports (`technology`, `systems`, `research`, `applications`) derive item lists and relation IDs from the canonical registry. Display-only purpose copy may remain as temporary compatibility maps.
- **Implications:** Avoids two competing sources of truth while preserving existing component APIs.

### D-0099 — No graph visualization in Phase 3.0

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Phase 3.0 does not add graph visualization, network layout libraries, or graph traversal algorithms.
- **Implications:** Relationship presentation is limited to typed grouped lists via `EntityRelationshipIndex` / `getEntityRelationsSummary`.

### D-0100 — Phase 3.0 authorized; Foundation and Research demo only

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Authorize Phase 3.0 unified knowledge entity model. Demonstrate registry consumption only on existing Foundation and Research pages. Do not redesign Home, change navigation, or add routes.
- **Implications:** See `docs/PHASE_3_0_UNIFIED_KNOWLEDGE_ENTITY_MODEL.md`.

### D-0101 — Phase 3.1 remains unauthorized

- **Date:** 2026-07-24
- **Status:** Superseded by D-0102
- **Decision:** Completing Phase 3.0 does not authorize Phase 3.1, destination-page build-out, CMS/database work, or graph visualization.
- **Implications:** Stop after Phase 3.0 commit unless explicitly authorized.

### D-0102 — Phase 3.1 Technology domain authorized

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Authorize Phase 3.1 to build the Technology knowledge domain index at `/[locale]/technology/`. See `docs/PHASE_3_1_TECHNOLOGY_DOMAIN.md`.
- **Out of scope:** Home redesign, global navigation changes, backend/CMS/database/search/auth/APIs, graph libraries.
- **Implications:** Technology becomes the first complete knowledge domain page.

### D-0103 — Technology domain consumes canonical entity registry

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Technology categories, statuses, relations and futureTopics are read from `getEntitiesByDomain("technology")` and related registry helpers. Entity definitions are not duplicated in page content.
- **Implications:** `src/content/pages/en/technology.ts` holds long-form page copy only.

### D-0104 — Technology is the reference knowledge-domain implementation

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** The Technology page structure (metadata → introduction → overview → categories → relationships → principles → scope → future → related domains → references) is the reference pattern for later knowledge domains.
- **Implications:** Future domain pages should reuse Engineering Design System blocks and registry-driven category patterns unless a later decision supersedes this.

### D-0105 — Phase 3.2 remains unauthorized

- **Date:** 2026-07-24
- **Status:** Superseded by D-0106
- **Decision:** Completing Phase 3.1 does not authorize Phase 3.2 or additional domain build-out.
- **Implications:** Stop after Phase 3.1 commit unless explicitly authorized.

### D-0106 — Phase 3.2 Human Data Model page authorized

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Authorize the Human Data Model flagship knowledge page at `/[locale]/technology/human-data-model/`. See `docs/PHASE_3_2_HUMAN_DATA_MODEL.md`.
- **Out of scope:** Home redesign, navigation changes, backend/CMS/database, invented capability claims.
- **Implications:** Relationships and futureTopics render from the canonical `human-data-model` entity.

### D-0107 — Human Data Model is the flagship engineering reference page

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** The Human Data Model page is the engineering reference pattern for deep knowledge documentation: metadata, summary, principles, architecture, categories, registry-driven relations, privacy/trust, scope and future topics.
- **Implications:** Later flagship entity pages should follow this structure unless superseded.

### D-0108 — Phase 3.3 remains unauthorized

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Completing Phase 3.2 does not authorize Phase 3.3 or further domain/entity page build-out.
- **Implications:** Stop after Phase 3.2 commit unless explicitly authorized.

### D-0109 — Content Wave 1.1 Human Data page authorized

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Authorize Content Wave 1.1 to create the Human Data knowledge page at `/[locale]/technology/human-data/` for readability-focused documentation. See `docs/CONTENT_WAVE_1_1_HUMAN_DATA.md`.
- **Out of scope:** Site redesign, navigation changes, Entity Registry edits, changes to existing page templates.
- **Implications:** New page content and a dedicated page composition may be added; architecture systems remain unchanged.

### D-0110 — Plain-language editorial standard for knowledge pages

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Knowledge documentation uses plain, direct English: one main idea per short paragraph; important terms introduced at first use; no marketing claims; no unexplained jargon; current scope separated from future topics. See `docs/CONTENT_REVIEW_1_TECHNOLOGY_FOUNDATION.md`.
- **Implications:** Later knowledge pages should meet this editorial standard unless a superseding decision is logged.

### D-0111 — Approved definitions: Human Data and Human Data Model

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Adopt permanent definitions — **Human Data:** information about a person from different sources. **Human Data Model:** the structured representation that organizes Human Data and preserves context and relationships. Related approved terms: Technology (technical capabilities and engineering foundations used to build SAVEN Core systems); Knowledge Engine (organizes knowledge and provides consistent context; does not make independent decisions); AI Decision Support (supports human review and decision-making; does not replace human judgment).
- **Implications:** These three Technology foundation pages, and future pages that reuse the terms, must not redefine them differently.

### D-0112 — Content Wave 1.2 Data Infrastructure page authorized

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Authorize Content Wave 1.2 to create the Data Infrastructure knowledge page at `/[locale]/technology/data-infrastructure/`. See `docs/CONTENT_WAVE_1_2_DATA_INFRASTRUCTURE.md`.
- **Out of scope:** Site redesign, navigation changes, vendor/database/cloud implementation detail, Entity Registry edits unless a missing relationship is required.
- **Implications:** Page remains architecture-level; Future Topics and related lists come from the existing `data-infrastructure` entity.

### D-0113 — Technology knowledge domain content sprint completed

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Authorize and record completion of the Technology content sprint: Interoperability, Privacy, Security, Artificial Intelligence, Automation and Robotics leaf pages under `/[locale]/technology/`. See `docs/CONTENT_SPRINT_TECHNOLOGY_COMPLETE.md`.
- **Out of scope:** Home redesign, navigation changes, Entity Registry redesign, Systems/Trust domain build-out.
- **Implications:** Every Technology registry entity now has a published knowledge page. Shared template is `TechnologyDisciplinePage`.

### D-0114 — Systems knowledge domain content sprint completed

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Authorize and record completion of the Systems content sprint: Systems Overview plus Knowledge Engine, AI Decision Support, Safety Layer, Communication Layer, Clinical Interfaces, Robotics Layer and Drone Systems under `/[locale]/systems/`. See `docs/CONTENT_SPRINT_SYSTEMS_COMPLETE.md`.
- **Out of scope:** Applications leaf pages, Trust page, Labs, Company, Home redesign, Entity Registry entity invention.
- **Implications:** Systems appears in primary, mobile and footer navigation from the shared published-route source. Shared template is `SystemDisciplinePage`.

### D-0115 — Approved Systems page boundaries and definitions

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Adopt the Systems boundaries recorded in `docs/CONTENT_SPRINT_SYSTEMS_COMPLETE.md`: Knowledge Engine does not make independent decisions; AI Decision Support does not replace human judgment; Clinical Interfaces claim no diagnosis, treatment or autonomous medical action; Robotics Layer implies no autonomous deployment without oversight; Drone Systems avoid military, surveillance or unsupported operational claims.
- **Implications:** Later Systems pages must not redefine these boundaries differently.

### D-0116 — Relation links use published routes only

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Entity relation and related-page links resolve through published leaf paths when available (`ENTITY_PAGE_HREFS`) and omit destinations that are not in `PUBLISHED_ROUTES`. Unpublished Applications and Research leaves link to their domain overviews only.
- **Implications:** Navigation and knowledge relation indexes must not expose unpublished leaf URLs.

### D-0117 — Systems core architecture sprint completed

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Authorize and record completion of the Systems core architecture sprint: Systems Overview plus seven system pages under `/[locale]/systems/`, focused on explaining how SAVEN Core works. See `docs/CONTENT_SPRINT_SYSTEMS_CORE.md`.
- **Out of scope:** Applications leaf pages, Trust page, Labs, Company, Home redesign, Entity Registry entity invention.
- **Implications:** Systems remains published in primary, mobile and footer navigation. Content prioritizes architecture chain clarity over page inventory alone.

### D-0118 — Systems core page template and domain chain

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Systems leaf pages use the core section set (metadata, summary, why it matters, purpose, architecture role, inputs, outputs, relationships, principles, human oversight, scope, future topics, related technology/systems/applications, references). Empty sections are hidden. Domain reading order is Technology → Systems → Applications.
- **Implications:** Later Systems edits must preserve this chain and must not restore Systems or Labs inside the Technology dropdown.

### D-0119 — Design Sprint 1 SAVEN Core visual system authorized and completed

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Establish a distinctive SAVEN Core visual system for the knowledge experience under the concept HUMAN SIGNALS → STRUCTURED KNOWLEDGE → CONTROLLED ACTION. Reusable components include KnowledgeHero, DomainPositionMap, ArchitectureMap, SignalDiagram, ScopePanel, ConceptGrid, RelationshipFlow, KnowledgePageNavigation, and EngineeringAnnotation. Geometry remains straight-corner; functional signal accents may mark meaning on borders and nodes only. See `docs/DESIGN_SPRINT_1_SAVEN_VISUAL_SYSTEM.md`.
- **In scope:** Systems Overview, Technology Overview, Human Data, Human Data Model, Data Infrastructure, Knowledge Engine, AI Decision Support, Safety Layer; shared engineering CSS/tokens; documentation.
- **Out of scope:** New routes, long-form content invention, IA changes, brand/logo changes, Applications/Research full redesign, animation.
- **Implications:** Later knowledge pages should extend these components rather than invent parallel visual languages.

### D-0120 — KnowledgeHero-first rhythm and page-specific signal diagrams

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Target knowledge pages open with KnowledgeHero (one H1 + page-specific SignalDiagram). Metadata, section navigation, and previous/next move to supporting positions after primary content. Systems Overview uses ArchitectureMap for multi-role relationships rather than a single vertical list.
- **Implications:** Do not restore metadata / location / TOC bands as consecutive full-width blocks before the first subject visualization.

### D-0121 — Content + Design Sprint 2 Applications and Trust authorized and completed

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Complete Applications Overview plus eight application contexts and Trust Overview plus seven Trust topics using Visual System v1. See `docs/CONTENT_DESIGN_SPRINT_2_APPLICATIONS_TRUST.md`.
- **In scope:** Application and Trust routes, registry entities, navigation/footer publication, visual completion of remaining Technology/Systems leaves, documentation.
- **Out of scope:** Legal policy pages, brand redesign, unsupported product/regulatory claims, animation.
- **Implications:** Later Applications/Trust edits must preserve development-safe language and page-boundary separations.

### D-0122 — Trust published as primary knowledge domain distinct from /legal

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Publish the knowledge Trust domain at `/trust/` in primary and footer navigation because Trust is a top-level knowledge domain in the architecture model. This does not publish `/legal/*` policy documents.
- **Implications:** Trust pages are governance/architecture pages, not privacy policies, terms, or certifications.

### D-0123 — Trust vs Technology Privacy/Security vs Systems Safety Layer boundaries

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Technology Privacy/Security remain engineering foundations. Systems Safety Layer remains system-wide safeguards. Trust Privacy/Security/Safety document organizational commitments, governance and reader-facing limits.
- **Implications:** Do not merge these page types or duplicate their roles.

### D-0124 — Home Knowledge Explorer entrance authorized and completed

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Replace the corporate gateway Home with a Knowledge Explorer entrance: engineering hero with architecture chain, domain explorer cards, dependency map, honest platform status, featured concepts, and structured domain entrances. No new domains or long-form Home prose.
- **Implications:** Home explains what SAVEN Core is, how domains connect, and where to begin. Research remains In Progress; Company remains Planned. Do not link unpublished Company/Investors/Roadmap destinations from Home.

### D-0125 — Knowledge Object Architecture authorized and completed

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Introduce a reusable Knowledge Object layer over the Phase 3.0 entity registry and published page metadata. Every published page exposes passport, maturity, evidence, directional relationships, dependency/graph views, lifecycle, version placeholders, and reading paths. Unknown fields display “Not yet assigned.” Validated maturity is never inferred.
- **Implications:** No new public domains, navigation redesign, visual-language redesign, or URL changes. See `docs/KNOWLEDGE_OBJECT_ARCHITECTURE.md`.

### D-0126 — Language, navigation and footer refinement authorized and completed

- **Date:** 2026-07-24
- **Status:** Active
- **Decision:** Simplify public language and UI labels; reduce primary navigation to Home + Technology/Systems/Applications/Trust/Research with short dropdowns; make the footer the complete published sitemap (mobile accordion); localize full site content for en/ar/he/ru/uk. Other locales keep English fallback. Legal destinations remain unpublished.
- **Implications:** See `docs/LANGUAGE_AND_LOCALIZATION.md` and `docs/TERMINOLOGY_GUIDE.md`.

### D-0127 — Human-first design philosophy correction (v1.1)

- **Date:** 2026-07-25
- **Status:** Active
- **Decision:** Keep Knowledge Objects and Visual System, but restore progressive disclosure: human understanding first, professional context second, engineering document details third (collapsed). Remove technical chrome from the first viewport. Soften Home to Understand → Explore → Discover → Continue. Footer remains the complete map; Company/Legal/Contact appear as planned groups without unpublished links. UI chrome is localized for all ten system locales; page bodies remain fully localized for en/ar/he/ru/uk.
- **Implications:** Do not return Knowledge Passport or metadata to the hero/first screen. Translate every UI update across all UI locale catalogs.

### D-0128 — SAVEN Experience Redesign authorized

- **Date:** 2026-07-25
- **Status:** Active
- **Decision:** Owner-authorized experience redesign. Priority is memorable, domain-distinct visual composition — not documentation aesthetics. Distinctive display/sans typography (Newsreader + IBM Plex family, Arabic/Hebrew faces), cool-paper atmosphere, full-bleed home monument, domain-specific hero languages (Technology strata, Systems constellation, Applications places, Trust rings, Research open field), and a permanent visual footer map are approved. Straight corners remain. No neon/glow marketing effects. Labels and Knowledge Object placement rules from D-0127 remain.
- **Implications:** Pages must remain visually non-interchangeable across domains. Future UI work should preserve domain composition languages.

### D-0129 — Homepage Direction B + Robotics Lab care purpose approved

- **Date:** 2026-07-25
- **Status:** Active
- **Decision:** Owner approved («ок на homepage») promoting Direction B (One Human Hour) and the SAVEN Robotics Lab human-care purpose from the creative preview onto the public homepage. First viewport states what SAVEN is, who it is for, why care, and what becomes easier; the scroll hour is visual proof. Closing energy: Turning Intelligence Into Human Care. Creating / designed to / helping language only — no invented customers, metrics, approvals, or deployment claims.
- **Implications:** Locale home routes (`/[locale]/`) render the Human Hour experience inside the existing site shell. Preview route `/[locale]/preview/human-hour/` permanently redirects to the locale home. Page bodies localized for en/ar/he/ru/uk; UI chrome for beat labels across all ten locales. Technology / Systems / Trust / Applications interior redesigns are out of scope for this decision.

### D-0130 — Official site assignment: engineering/technology showcase (public + investors)

- **Date:** 2026-07-25
- **Status:** Active
- **Decision:** Owner course-correction for `www.savencore.com`. The site is an **engineering and technology showcase** for public visitors and investors — not a documentary care-film as the whole brand, and not Human Hour as the entire homepage identity. Canonical first-screen hero: **Intelligence for the Physical World.** Supporting and explanation copy as recorded in `docs/SITE_ASSIGNMENT.md` §3. Homepage model is **A + B** (directions showcase + flagship paths into Labs / Interface / Future Lab and related approved workstreams). Tagline retained: **Turning Intelligence Into Human Care.** Official naming: SAVEN Core / SAVEN Robotics Lab / logo lockup. Everything remains in development; public status language stays Research / Architecture / In Development (honest; never commercially deployed or approved unless later true). Investors require a separate structural section/path without invented metrics (D-0062 still applies). Visuals: use repo/public assets; otherwise diagrammatic/engineering visuals — no fake photography claims. Human Hour preview/home pivot (D-0129) is **superseded as primary homepage direction**; Human Hour may be demoted to optional later proof or removed from home primacy. Full site redesign is **not** authorized by this entry alone — `docs/SITE_ASSIGNMENT.md` is the executive assignment; implementation proceeds in small phases with separate authorization.
- **In scope:** `docs/SITE_ASSIGNMENT.md`; this decision; agent brief for later phased execution.
- **Out of scope:** Immediate full homepage rewrite; inventing partners/customers/metrics/patents/approvals; auth investor portal; CMS; legal final text; new product lines beyond approved taxonomy.
- **Implications:** Agents must read `docs/SITE_ASSIGNMENT.md` before homepage or IA presentation work. On homepage identity and first-screen copy, D-0130 + SITE_ASSIGNMENT win over D-0129 and `CREATIVE_DIRECTION.md` until revised. Conflicts with Master Spec primary statement, Phase 0 IA primary nav, and as-built `site-navigation.ts` are flagged in SITE_ASSIGNMENT §5.3 — do not silently change navigation or Master Spec without further owner approval.

### D-0131 — Owner canonical scopes: Robotics Lab / Interface / Future Lab

- **Date:** 2026-07-25
- **Status:** Active
- **Decision:** Owner supplied canonical definitions for the three primary flagship workstreams. (1) **SAVEN Robotics Lab** — primary engineering direction (**In Development**): robotic systems; autonomous mobility; robot control; sensors and machine perception; human–machine interaction. (2) **SAVEN Robotics Interface** — system for interacting with robots and autonomous machines (**In Development**); capability list is **possible components** only (command and control, visual interface, mission planning, real-time telemetry, fleet management, human–robot interaction, remote operations, AI-assisted decision support, system diagnostics, role-based access, digital mission environment) — not shipped products. (3) **Internal Future Lab** — research environment of SAVEN Core (**Research**): advanced robotics forms; embodied AI; autonomous decision-making; human–machine interaction; new sensor systems; physical-environment modeling; robotics for medicine; future infrastructure technologies; non-standard engineering concepts. English is the canonical public brief; recorded in `docs/SITE_ASSIGNMENT.md` §5.0 and noted in `docs/INFORMATION_ARCHITECTURE.md` §§5.4–5.5.
- **In scope:** Documentation updates to SITE_ASSIGNMENT and IA notes; this decision entry.
- **Out of scope:** Building flagship pages; changing live routes/nav; homepage rewrite; inventing shipped Interface modules or Operational status.
- **Implications:** Home A+B and future Lab/Interface pages must use these scopes and statuses. Route choice among IA slugs vs shorter `/robotics-lab/` / `/robotics-interface/` / `/future-lab/` remains open (SITE_ASSIGNMENT §5.0.4 / §11). As-built `/systems/robotics-layer/` is not automatically the Robotics Interface page.

### D-0132 — Two-layer UX: simple public surface + footer depth map

- **Date:** 2026-07-25
- **Status:** Active
- **Decision:** Owner critical UX/IA direction for `www.savencore.com`. (1) **Keep all existing technical pages** already built — do not delete routes or page components to simplify. (2) Place them in **proper footer sections by domain** so depth is available. (3) **Do not load ordinary visitors with technical information** — primary experience stays simple, clear, visual, big-company spirit. (4) Technical/engineering content is **for those who want it** (engineers, digging investors, specialists) — never scare people; never make the site feel like a documentation manual / instruction wiki. (5) Priorities: simplicity, convenience, understanding, simple navigation, strong UX/UI. (6) **Two-layer model:** Layer 1 = Home A+B, flagship workstreams, Investors path, short human header, hero *Intelligence for the Physical World.*; Layer 2 = existing Technology / Systems / Applications / Trust / Research technical pages, reachable mainly via **footer** (and contextual Learn more), not as the default mental model. (7) Primary header stays short — not a documentation index. (8) Visitor footer links are **published only** — no Coming Soon badges. (9) Phase 1 homepage (when authorized) follows SITE_ASSIGNMENT A+B; Human Hour is not the public default identity.
- **In scope:** `docs/SITE_ASSIGNMENT.md` §2.1; `src/navigation/site-navigation.ts` footer reorganization to published domain groups; UI chrome label sync in `src/i18n/ui/`; this decision; AGENTS.md Current Phase note.
- **Out of scope:** Homepage redesign; deleting technical pages; expanding primary header into a full docs index; publishing unpublished Labs / Investors / Legal / Resources leaves; inventing new product lines.
- **Implications:** Agents treat the footer as the complete published depth map. Do not dump full technical leaf lists into the primary header for casual users. Do not remove published technical destinations. Further primary-nav alignment to SITE_ASSIGNMENT §5.2 still requires a separate authorizing phase.

---



### D-0133 — Phase 1 Layer-1 homepage: Intelligence for the Physical World

- **Date:** 2026-07-25
- **Status:** Active
- **Decision:** Owner authorized Phase 1 homepage rebuild per `docs/SITE_ASSIGNMENT.md`. Replace Human Hour as the public home identity with Layer 1: hero **Intelligence for the Physical World.**; directions showcase (A); flagship paths (B) for SAVEN Robotics Lab, SAVEN Robotics Interface, and Internal Future Lab; Investors structural page; closing tagline **Turning Intelligence Into Human Care**. Publish Scheme A flagship routes (`/labs/`, `/labs/saven-robotics-lab/`, `/labs/internal-future-lab/`, `/systems/saven-robotics-interface/`) and `/investors/` as simple Layer-1 pages. Keep all existing technical pages; footer remains the depth map (Labs + Interface + Investors added). Status language: In Development / Research — no deployment claims.
- **In scope:** Homepage component; flagship + investors pages; published-routes; footer groups; this decision.
- **Out of scope:** Full redesign of Technology/Systems interiors; inventing metrics/partners; primary-nav mega expansion into a docs index.
- **Implications:** D-0129 Human Hour homepage primacy is superseded for the public home. Human Hour assets may remain in repo as optional later proof, not the default home.



### D-0134 — Header emptied; homepage clarity-only; site map in footer

- **Date:** 2026-07-25
- **Status:** Active
- **Decision:** Owner feedback: primary menu content moves entirely to the footer; homepage must communicate what SAVEN is in a few seconds without inventory dumps or template diagrams. (1) Primary header navigation is empty — logo + language only. (2) Homepage is a single clarity composition: brand, *Intelligence for the Physical World.*, one breath sentence, three build pillars, tagline, footer cue — no SVG node diagram, no directions list, no flagship grid on home. (3) Flagship and technical pages remain published; discovery is via footer.
- **In scope:** SiteHeader; primaryNavigation; PhysicalWorldHome; this decision.
- **Out of scope:** Deleting technical/flagship pages; inventing photography.
- **Implications:** Agents must not restore a documentation-style header mega-menu without a new decision. Home must not become a sitemap.

### D-0135 — Homepage hero imagery + living atmosphere + visual essence section

- **Date:** 2026-07-25
- **Status:** Active
- **Decision:** Owner authorized homepage visual enrichment beyond the D-0134 diagram-freeze for the first screen. (1) Hero gains edge-to-edge thematic imagery and a living/animated atmosphere (CSS motion + original diagrammatic illustration language) themed around AI/robotics/physical world/human care — cool-paper engineering grammar (D-0128), straight corners, no neon/glow/purple-AI aesthetics. (2) Immediately after the hero, add one simple visual essence section explaining that SAVEN builds systems so robots, manipulators, and devices can help people — tangible in seconds, not a technical inventory. (3) Header remains logo + language only; full map stays in the footer (D-0134). (4) No fake stock “hospital robot” deployment photography; no invented customers, metrics, partners, or operational claims. Status language remains in development / research — confident, not WIP-apology. (5) English remains canonical for this home content module.
- **In scope:** `PhysicalWorldHome` + CSS; `src/content/home/physical-world/`; optional original assets under `public/home/`; AGENTS current-phase pointer; this decision.
- **Out of scope:** Restoring header mega-menu; putting A+B inventory back on home; deleting flagship/technical pages; CMS; photography claiming real deployments; full page-body localization beyond existing en-first home pattern.
- **Implications:** Homepage region order is now Hero (clarity + living visual) → Essence (simple visual explanation) → Footer map. Prior “no imagery on home” freeze from D-0134 is superseded for this authorized hero/essence work only.

### D-0136 — Photoreal home hero required; labeled wireframe diagrams rejected

- **Date:** 2026-07-25
- **Status:** Active
- **Decision:** Owner rejected the labeled Human→Systems→Physical stick-figure / wireframe hero as primitive. Home hero must use **photoreal / real-world** imagery (cinematic, grounded robotics assisting humans) with a living CSS atmosphere (ken-burns / slow drift). Essence Assist / Move / Sense / Support must use tangible scene imagery, not clip-art icons. No deployment claims, partner logos, or “already in hospitals” captions. Atmospheric product-direction photography is authorized for the homepage; labeled flowchart hero language is forbidden.
- **In scope:** `public/home/` photoreal assets; `PhysicalWorldHome` hero/essence markup + CSS; this decision.
- **Out of scope:** Restoring header mega-menu; inventory dump on home; inventing customers/metrics/deployments.
- **Implications:** D-0135’s “diagrammatic illustration language” for the hero is superseded by photoreal visual language. Agents must not return labeled stick-figure hero compositions.

### D-0137 — Multi-robot assistive hero scene + highly visible living motion

- **Date:** 2026-07-25
- **Status:** Active
- **Decision:** Owner required the homepage hero main image to make the SAVEN idea unmistakable at a glance: (1) one photoreal frame showing a human helped/supervised in a real physical space with **at least two robots/devices** (e.g. manipulator + mobile assistive platform); (2) readable real-world lighting preferred over pure silhouette mystery; (3) living motion on that one picture must be **highly visible** (stronger ken-burns / layered parallax / soft light + gentle arm-path cues) without neon, glow, HUD, or labeled flowchart overlays; (4) brand + *Intelligence for the Physical World.* remain readable via scrim; (5) no deployment claims; stick-figure diagrams stay forbidden (D-0136).
- **In scope:** `public/home/hero-multi-robot-assist-v2.png` (and related hero assets); `PhysicalWorldHome` layered media + CSS motion; this decision.
- **Out of scope:** Restoring header mega-menu; inventory dump on home; inventing customers/metrics/deployments; neon/sci-fi decoration.
- **Implications:** Hero success test = ~2 seconds: people + multiple robots/devices + movement → physical-world assistance systems. Prefer multi-device assistive composition over single-arm silhouette.

### D-0138 — Homepage hero uses living photoreal video of multi-robot assistance

- **Date:** 2026-07-25
- **Status:** Active
- **Decision:** Owner required the homepage hero to feel truly live — real photoreal photo/video of help to people with robots, devices, and systems — not a static concept mockup animated only by CSS ken-burns/ghosting. (1) Hero uses a short looping muted autoplay video (`hero-assist-loop`) showing clear assistive action: human present, robotic manipulator, and at least one other device/mobile system, real-world interior lighting. (2) Static labeled wireframe / stick-figure diagrams remain forbidden (D-0136). (3) `prefers-reduced-motion: reduce` shows a strong still poster only — no video autoplay / no decorative motion. (4) Brand + *Intelligence for the Physical World.* stay hero-level and readable via gradient scrim. (5) Essence Assist / Move / Sense / Support stay in the same living photoreal language. (6) No deployment claims, partners, or metrics.
- **In scope:** `public/home/hero-assist-loop.mp4` (+ `.webm`), `hero-assist-poster.png`, essence stills from the sequence; `HeroLivingMedia` + `PhysicalWorldHome` + CSS; AGENTS current-phase pointer; this decision.
- **Out of scope:** Restoring header mega-menu; inventing customers/metrics/deployments; neon/HUD/sci-fi decoration; CMS.
- **Implications:** D-0137’s CSS ken-burns-as-primary-motion approach is superseded for the hero: **video carries the motion**. Success test without reading copy: visitor instantly sees living real-world assistance via actual video (or undeniable multi-frame living photo sequence).

### D-0139 — Smooth living assistive multi-robot hero motion required

- **Date:** 2026-07-25
- **Status:** Active
- **Decision:** Owner rejected jerky / stuttering hero motion and asked for clearer automation, robots, and help. (1) Hero loop must feel **smooth**: dense near-pose keyframes with crossfade/morph blending (not hard slideshow cuts), ~24–30 fps, ~8–12s ease cycle; no competing CSS ken-burns on the video layer. (2) Scene must show **richer assistive automation** in one living picture: human clearly helped, multiple robots/devices (manipulator + mobile service robot + optional third sensor/device cue), visible helpful actions. (3) `prefers-reduced-motion: reduce` remains static poster only (D-0138). (4) Essence stills stay aligned to the same assistive photoreal language. (5) No neon/HUD; no deployment claims.
- **In scope:** Regenerated `public/home/hero-assist-loop.mp4` (+ `.webm`), poster, essence stills; `HeroLivingMedia` playback attributes; CSS (no layout thrash / no transform fight); AGENTS phase pointer; this decision.
- **Out of scope:** Fake deployment photography; inventing customers/metrics; header mega-menu restore; CMS.
- **Implications:** Supersedes acceptance of jump-cut slideshow-as-video for the homepage hero. Smooth morph/crossfade (or equivalent) is required; richer multi-device assist story is required at a glance.

### D-0140 — Hero loop must show smooth assistive robot action, not camera-only motion

- **Date:** 2026-07-25
- **Status:** Active
- **Decision:** Hero living media must show **pose change** (manipulator / mobile robot assisting) via smooth crossfade of near-pose keyframes — not camera zoom/pan on a single still. CSS opacity crossfade of `public/home/hero-frames/01–06.png` is an accepted delivery; reduced-motion stays poster-only.
- **Implications:** Supersedes ken-burns-only / single-still “video” as the homepage living signal.

### D-0141 — Multi-domain living assistive scenes on home

- **Date:** 2026-07-25
- **Status:** Active
- **Decision:** Homepage may present a **multi-domain living gallery** of assistive robot–human scenes (healthcare, home, industrial, research, education vision, agriculture, communities, teamwork), inspired by owner-supplied reference collages. Auto-advancing crossfade theater with domain rail is authorized. Scene art must not present invented KPI dashboards or fake deployment metrics as company data.
- **Implications:** Replaces the prior four-up essence strip as the primary post-hero visual story. Light photoreal assist hero (D-0140) may remain above. Vision-of-help language OK; no commercial deployment claims.

### D-0142 — Expanded medical/care living scenes on home

- **Date:** 2026-07-25
- **Status:** Active
- **Decision:** Owner authorized a dedicated **care / medical living theater** on the homepage (second theater under multi-domain scenes), inspired by a new medical-cluster reference. Scenes may include hospital care, home care for elders, children/family care, emergency response vision, surgical support vision, rural/remote care, and tasteful mental-health / disaster-relief support visions. Auto crossfade + rail; `prefers-reduced-motion` stays on the first care scene. Vision imagery OK; no fake KPI dashboards as company metrics; no commercial deployment or “Crisis Help 24/7” live-product claims.
- **In scope:** `public/home/care/*` scene art; home care section content/CSS; reference copy under `public/home/refs/`; this decision.
- **Out of scope:** Fake deployment photography; inventing clinical products/metrics; header mega-menu restore; CMS.
- **Implications:** Extends D-0141 with a focused care cluster without collapsing 16 thumbs into one rail.

### D-0143 — Homepage closing SAVEN what-we-do graphic

- **Date:** 2026-07-25
- **Status:** Active
- **Decision:** Owner authorized a homepage **closing graphic** (above the site footer) showing what SAVEN does. The asset may present the SAVEN wordmark, body-form icons (human, robotic arm, phone, humanoid, wheelchair), the acronym expansion **Support · Action · Verification · Environment · Network**, and the tagline **One Intelligence. Many Bodies. Real-World Action.** Do not invent extra product, deployment, or metric claims beyond the image.
- **In scope:** `public/home/saven-what-we-do.png` (+ optional ref copy); home closing section content/CSS; this decision.
- **Out of scope:** Header mega-menu restore; inventing claims beyond the supplied graphic; CMS.
- **Implications:** Extends the Layer 1 home story with a final “what we do” visual after multi-domain and care living sections.

### D-0144 — Owner withdrew homepage closing what-we-do graphic

- **Date:** 2026-07-25
- **Status:** Active
- **Decision:** Owner withdrew the homepage closing SAVEN “what we do” / acronym graphic authorized in D-0143. Remove the section from the homepage; do not show `saven-what-we-do.png` (or equivalent) at the bottom of home.
- **In scope:** Home closing section removal; asset cleanup; this decision.
- **Out of scope:** Rewriting D-0143; header mega-menu restore.
- **Implications:** Supersedes D-0143 for publication. Homepage ends after multi-domain + care living sections (and deepen link), then the site footer.

### D-0145 — Closing SAVEN meaning graphic as blended homepage background

- **Date:** 2026-07-25
- **Status:** Active
- **Decision:** Owner authorized a new closing SAVEN meaning graphic as an **atmospheric blended homepage bottom background** (after all home content, before the site footer). Asset may present the SAVEN logo mark + wordmark, pillars **Support · Action · Verification · Environment · Network**, and tagline **One Intelligence. Many Bodies. Real-World Action.** Integrate with smooth transitions from the preceding light care/deepen region into near-black (#0a0a0a) and softly into the dark footer — not a hard-placed card. Optional subtle ambient motion must respect `prefers-reduced-motion`. Do not invent extra product, deployment, or metric claims beyond the image.
- **In scope:** `public/home/saven-closing-bg.png` (+ optional ref copy); home closing band in `PhysicalWorldHome` / CSS / EN content; this decision.
- **Out of scope:** Header mega-menu restore; inventing claims beyond the supplied graphic; CMS; restoring the prior hard-card placement from D-0143.
- **Implications:** Supersedes the withdrawal posture of D-0144 for publication by authorizing a **new blended-background approach** with a new asset. Prior hard-placed graphic approach remains withdrawn.

### D-0146 — Closing graphic full-bleed; WebP optimized

- **Date:** 2026-07-25
- **Status:** Superseded by D-0147
- **Decision:** The homepage closing SAVEN meaning graphic (D-0145) must render **full-bleed / edge-to-edge** — no black vertical side pillars / letterboxing. Prefer `object-fit: cover` (or equivalent background cover) with centered focal point on a full-width canvas. Ship an optimized **WebP** primary (`public/home/saven-closing-bg.webp`, sensible max width, stripped metadata, target roughly under 300–500KB) with PNG fallback as needed. Keep smooth blend into the prior section and footer; subtle living motion optional; `prefers-reduced-motion` stays static.
- **In scope:** Closing band CSS/markup; `saven-closing-bg.webp` (+ PNG fallback); this decision.
- **Out of scope:** New claims beyond the graphic; header mega-menu; CMS.
- **Implications:** Clarifies presentation and media efficiency for D-0145 without changing authorized content.

### D-0147 — Closing graphic: natural-aspect banner on full-bleed dark band

- **Date:** 2026-07-25
- **Status:** Active
- **Decision:** Redo the homepage closing SAVEN meaning graphic as a **responsive natural-aspect banner** on a matching **full-bleed dark band** (`#0a0a0a` / image-edge charcoal). Display the full original composition (logo, wordmark, five labeled icons, tagline) with `width: 100%`, `height: auto`, optional centered `max-width` (~1200–1400px) — **no `object-fit: cover`**, no forced min-height crop, no cover-zoom. Soft page blends are CSS overlays only (care/white → transparent at top; transparent → footer navy at bottom). Encode optimized WebP (+ PNG fallback) from the **full original** asset. No scale/drift enlargement animation.
- **In scope:** `public/home/saven-closing-bg.webp` (+ PNG); closing markup/CSS in `PhysicalWorldHome`; this decision.
- **Out of scope:** New claims beyond the graphic; header mega-menu; CMS; inventing deployment photography.
- **Implications:** Supersedes the cover/contain-canvas approaches of D-0146 and the interim padded-ultrawide attempt; readable complete graphic is required.

### D-0148 — Care→closing bridge full-bleed; no letterboxed light strip

- **Date:** 2026-07-25
- **Status:** Active
- **Decision:** The care→closing transition must be **full-bleed**. Care + deepen share one full-width light plane (`.pw-care-block`); background must not live on a max-width `.pw-home__inner` while `.pw-home` navy shows as vertical side pillars. Soften into closing `#0a0a0a` with a short full-bleed bottom veil — do not leave a letterboxed light strip (полоса) above the closing graphic. Closing top fade stays dark-to-transparent (no reintroduced light band).
- **In scope:** `PhysicalWorldHome` care-block markup; `.pw-care-block` / deepen-row / `.pw-closing__fade-top` CSS; this decision.
- **Out of scope:** Changing closing graphic asset crop; header mega-menu; CMS.
- **Implications:** Clarifies D-0145 / D-0147 blend presentation — backgrounds edge-to-edge; copy may remain in `.pw-home__inner`.

### D-0149 — Localize home Layer-1 content + living help collage hero

- **Date:** 2026-07-25
- **Status:** Active
- **Decision:** (1) Localize the Layer-1 Physical World homepage content module to approved body locales **en / ar / he / ru / uk** (English remains canonical; es/de/fr/ja/zh-cn continue to fall back to English via `resolveContentLocale`). Aria labels that were hardcoded English move into the content module. (2) Replace the single-scene wheelchair pose-step hero as the primary living hero with an elegant **living photoreal help collage** of several clear assist scenes (manipulator / hospital / home elder / family / mobile delivery), under `public/home/hero-collage/`, with staggered panel emphasis animation. `prefers-reduced-motion` shows a static collage. Brand + *Intelligence for the Physical World.* remain readable via scrim. Vision tone only — no fake deployment claims, KPI overlays, or neon HUD.
- **In scope:** `src/content/home/physical-world/locales/*`; getter; `HeroLivingMedia` collage; hero CSS; collage WebP/JPEG assets; this decision; AGENTS current-phase one-liner.
- **Out of scope:** Full page-body localization for es/de/fr/ja/zh-cn; header mega-menu restore; inventing deployment photography or metrics; CMS.
- **Implications:** Supersedes D-0140 single-scene pose-step crossfade as the **primary** homepage hero living signal. Prior `hero-frames` assets may remain unused/retired. Multi-domain and care theaters (D-0141 / D-0142) stay post-hero.

### D-0150 — Single home living carousel; industrial / agriculture / teamwork removed

- **Date:** 2026-07-25
- **Status:** Active
- **Decision:** Collapse the two post-hero home theaters (multi-domain D-0141 + care D-0142) into **one** large living carousel of care/help scenes only. Curated scenes: hospital care, home care, children & family, emergency, surgical support, rural & remote, mental health, disaster relief. **Remove** industrial, agriculture, and teamwork (and similar non-care domain panels) from home galleries. Keep living crossfade + thumb rail + `prefers-reduced-motion` first-scene behavior. Hero collage (D-0149) remains separate and unchanged unless it contains those removed themes.
- **In scope:** `PhysicalWorldHome` / `LivingDomains` single theater; `src/content/home/physical-world/` locales en/ar/he/ru/uk; theater CSS stage sizing; unused industrial/agriculture/teamwork domain assets; this decision; AGENTS current-phase one-liner.
- **Out of scope:** Applications sitemap leaves for industrial/agriculture; inventing new photography; CMS; header mega-menu.
- **Implications:** Supersedes dual-theater presentation of D-0141 / D-0142 on the homepage. Care-focused Layer 1 story after the hero.

### D-0151 — Living collage motion + hero copy clear of photos

- **Date:** 2026-07-25
- **Status:** Active
- **Decision:** (1) Hero help collage must feel **alive**: soft panel emphasis cycle plus subtle per-panel ken-burns / opacity crossfade (long easings; not jerky). `prefers-reduced-motion` remains a static collage. (2) Hero layout is a true **two-column** composition — copy on the start side, collage on the end side (stacked on small viewports) — with **no text over photos**. Scrim/grain stay behind the text column only (soft seam into the collage), not a full-bleed wash over help scenes. RTL mirrors via document direction.
- **In scope:** `HeroLivingMedia`, `PhysicalWorldHome` hero markup, `physical-world-home.css` hero grid/motion; this decision; AGENTS phase pointer.
- **Out of scope:** New photography; inventing deployment claims; header mega-menu; CMS.
- **Implications:** Clarifies D-0149 living-collage acceptance: motion must be perceptible; readability must not rely on text stacked over collage panels.

### D-0152 — Hero collage: tighter gap + unmistakable living motion

- **Date:** 2026-07-25
- **Status:** Active
- **Decision:** Owner feedback on D-0151: (1) Reduce the empty middle between hero copy and collage — tighten grid ratio, end-align copy toward the collage, narrower end padding / shorter seam — while keeping two columns and **no text over photos**. (2) Living collage motion must be **unmistakable**: stronger inactive/active opacity contrast, ~3.2s featured-panel cycle, soft brand gold/teal inset rim on the active panel, slight active scale-up, and clearer ken-burns (scale ~1→1.09 over ~8–12s, staggered). `prefers-reduced-motion` stays static (no cycle, no ken-burns, even emphasis).
- **In scope:** `HeroLivingMedia` step timing; `physical-world-home.css` hero grid/padding/motion; this decision; AGENTS phase pointer.
- **Out of scope:** New photography; inventing claims; header mega-menu; CMS; commit.
- **Implications:** Supersedes D-0151 acceptance for gap size and motion strength only; two-column no-overlay rule from D-0151 remains.

### D-0153 — Header important-pages menu restored

- **Date:** 2026-07-25
- **Status:** Active
- **Decision:** Owner restores a short primary header menu of important Layer-1 hubs (≤7): Purpose, Labs, Applications, Technology, Research, Trust, Investors. Logo remains Home. Full leaf lists stay in the footer depth map. This is not a docs mega-menu.
- **In scope:** `primaryNavigation`, SiteHeader / DesktopNavigation / MobileNavigation, UI chrome labels, SITE_ASSIGNMENT Layer-1 header note.
- **Out of scope:** Restoring every leaf in header dropdowns; inventing unpublished destinations.
- **Implications:** Partially supersedes D-0134 empty-header rule. Footer remains the complete published map (D-0132).

### D-0154 — Legal pages returned to footer + draft content rules

- **Date:** 2026-07-25
- **Status:** Active
- **Decision:** Publish structural `/legal/*` destinations from `TRUST_LEGAL_STRUCTURE.md` and return a Legal column to the footer. Bodies use clear **Draft — pending legal review** framing and honest section outlines. Do not invent registration numbers, counsel names, or present drafts as binding effective policy. Prefer any existing approved copy when available; otherwise structural drafts only.
- **In scope:** Legal routes in `published-routes.ts`, footer Legal group, legal page components/content, UI labels.
- **Out of scope:** Final counsel-approved policies; cookie consent UI; invented contact emails.
- **Implications:** Partially supersedes D-0122 / D-0126 “legal unpublished” posture for structural draft publication only. D-0009 invention prohibitions remain.

### D-0155 — Theme sun/moon + language flags + upward footer language

- **Date:** 2026-07-25
- **Status:** Active
- **Decision:** Theme control is a sun (light) / moon (dark) icon toggle with two distinct colors, placed in header utilities and synced in the footer. Language menus show country/region flags; the footer language popover opens upward.
- **In scope:** ThemeSwitch, LanguageSelector, site-shell / experience chrome CSS, locale flag map, UI strings.
- **Out of scope:** New theme palettes beyond existing light/dark tokens; neon decoration.
- **Implications:** Footer Copyright line includes the word “Copyright” with © year and SAVEN Core.

### D-0156 — Sign In/Up + Google auth page

- **Date:** 2026-07-25
- **Status:** Active
- **Decision:** Add a neat text link **Sign In/Up** (not a filled button) in header and footer. Publish `/[locale]/auth/sign-in/` with SAVEN logo, site styling, back control, and Google sign-in via Auth.js. Use env vars `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET`, `AUTH_SECRET` (documented in `.env.example`). If credentials are missing, show a graceful configure path — do not fake a logged-in user. This is not a full investor portal.
- **In scope:** Auth.js Google provider, sign-in page UI, chrome links, package dependency, env example.
- **Out of scope:** CMS accounts database; role-based portal; inventing user profiles; committing secrets.
- **Implications:** Partially supersedes D-0021 authentication deferral for this public sign-in entry only.

### D-0157 — Unified readable Layer-1 hub visual system + image optimization

- **Date:** 2026-07-25
- **Status:** Active
- **Decision:** The seven header Layer-1 hubs (Purpose, Labs, Applications, Technology, Research, Trust, Investors) share one calm readable public shell (`HubReadablePage` / `layer1-hub.css`): clear masthead (label, title, short lead, optional status), generous spacing, short sections, progressive disclosure for depth, and path lists — not Knowledge Passport / dense engineering chrome on first viewport. Technology and Trust **hub entry** pages use this light readable style; leaf technical pages may keep deeper experience grammar. English hub copy may be clarified for ordinary readers without inventing products, metrics, or operational claims. Optimize critical imagery (care carousel, brand mark, closing band) to WebP (+ JPEG/PNG fallbacks) for faster load; unused heavy refs remain off the critical path.
- **In scope:** Hub shell component/CSS; seven hub routes; flagship leaf pages aligned to the same shell; EN readability edits; UI chrome `hub.*` strings across `src/i18n/ui/*`; image optimization for in-use assets; this decision; AGENTS phase pointer.
- **Out of scope:** Full es/de/fr/ja/zh-cn page bodies; inventing claims; neon/glow; returning passport chrome to Layer-1 hubs; deleting published leaf routes.
- **Implications:** Hub destinations supersede prior EditorialPage / ApplicationsPage / TechnologyExperience / ResearchPage / TrustPage / FlagshipSimplePage presentation for those seven menu URLs only. Leaf discipline pages unchanged in route inventory.

### D-0158 — Auth card polish + visual Layer-1 hubs

- **Date:** 2026-07-25
- **Status:** Active
- **Decision:** Polish `/[locale]/auth/sign-in/` into a substantial SAVEN-styled card (larger logo, larger panel, brand atmosphere, clear back / title / Google or configure state). Upgrade the shared Layer-1 hub shell from text-led readable pages to visual hubs: atmospheric masthead using approved `public/home/` imagery, short what/why/next cues, visual path grids with image thumbs where destinations exist, calm motion with `prefers-reduced-motion` respect, and progressive disclosure for depth. No invented metrics, customers, or deployment claims; straight corners; no neon.
- **In scope:** Auth sign-in component/CSS; `HubReadablePage` / `layer1-hub.css`; hub content builders + visual asset map; UI strings `auth.*` / `hub.*` across `src/i18n/ui/*`; this decision; AGENTS phase pointer.
- **Out of scope:** Full investor portal; inventing product photography; leaf marketing pages; passport chrome return; final legal prose; commit.
- **Implications:** Supersedes the text-primary first-viewport presentation of D-0157 for the seven Layer-1 hubs while keeping the shared shell and honest status language. Auth remains Google-via-env only (D-0156).

### D-0159 — Robotics Lab / Research hero / Investors brochure expansion

- **Date:** 2026-07-25
- **Status:** Active
- **Decision:** Owner-authorized content expansion on Layer-1 visual hubs. (1) **SAVEN Robotics Lab** (+ Labs hub) gain richer honest brochure sections from D-0131 scope: what we build, how it helps people, workstreams (robotic systems, mobility, control, perception, HMI), and In Development status — no fake deployments. (2) **Research** hub masthead replaced with a dedicated photoreal research atmosphere asset (`public/hub/research-masthead.webp`, JPEG fallback), Research-only. (3) **Investors** expands to brochure structure: posture, perspectives, platform potential, development progress (architecture/status framing — not financial results), human benefit, and long-term value-creation thesis in careful language — no promised returns, IRR/ROI, valuations, revenue, customers, or traction metrics (D-0062 remains). Sign In remains existing auth entry, not a full portal.
- **In scope:** `src/content/flagship/en.ts`; hub builders / visuals; Robotics Lab route wiring; Research masthead asset; `docs/DECISIONS_LOG.md` / AGENTS phase pointer; smoke + screenshots.
- **Out of scope:** Invented lab results/publications; financial claims; full es/de/fr/ja/zh-cn page bodies; investor portal; commit.
- **Implications:** EN flagship/brochure bodies are the canonical expansion; flagship content remains EN-first (no parallel ar/he/ru/uk flagship modules yet). UI chrome unchanged unless new `hub.*` keys are added. Category opportunity language for capital must stay aspirational and non-promissory.

### D-0160 — Unified visual domain-page system (hubs + leaves)

- **Date:** 2026-07-25
- **Status:** Active
- **Decision:** Extend the Layer-1 visual hub language (D-0157/D-0158) into a shared **DomainVisualPage** shell for all listed Technology, Systems, Labs, Applications, Trust, Research, and Company destinations (hubs and leaves). Every covered route gets a thematic photoreal / cinematic documentary-tech masthead (WebP under `public/domain/` organized by domain, plus reuse of approved home/care/research assets where thematically perfect), a clear title + short human lead, what/why/next cues where appropriate, and progressive disclosure for engineering depth. One image language family; no neon; straight corners; no fake KPI dashboards or invented deployment photography. Status language remains Research / Architecture / In Development. English remains canonical; structural visual wrap must not break locale getters.
- **In scope:** `DomainVisualPage` / `HubReadablePage` shell; `src/content/domain/*` visual map + leaf adapters; route wiring for listed destinations including Systems hub and Foundation; thematic assets; path thumbs from leaf mastheads; AGENTS phase pointer; this decision; verification smoke + sample screenshots.
- **Out of scope:** Invented products/metrics/customers/returns; final legal prose; full es/de/fr/ja/zh-cn page bodies; CMS; investor portal; commit.
- **Implications:** Supersedes bare KnowledgeHero-first presentation for listed Technology/Systems/Applications/Trust leaves and TechnicalPage-first Foundation / Systems overview in favor of the shared visual chrome. Depth content may remain below the first screen. Legal routes unchanged.

### D-0161 — Full page-body localization (10 locales) + cleanup + Vercel prep

- **Date:** 2026-07-26
- **Status:** Active
- **Decision:** Owner authorizes **full page-body localization** for all ten system locales (`en`, `es`, `de`, `fr`, `ja`, `zh-cn`, `ar`, `he`, `uk`, `ru`), superseding prior limits that left `es`/`de`/`fr`/`ja`/`zh-cn` on English body fallback. English remains the canonical source. Existing patterns apply: `src/content/**` locale modules and page dictionaries, getters with `CONTENT_LOCALES`, and `src/i18n/ui/*` for chrome. Also authorized in the same prep pass: retire unused Human Hour / orphaned homepage assets; performance hygiene (WebP, `next/image` sizes, drop unreferenced multi‑MB public files); mobile pass on header/hubs/home/auth/footer; and Vercel deploy readiness (`next build`, env documentation, concise deploy notes). Legal pages: translate draft banners and structural draft copy only — meaning of “Draft — pending legal review” must stay accurate; do not present as effective law (D-0154 remains). Do not invent company facts, metrics, customers, partners, returns, or traction while translating. RTL (`ar`/`he`) must remain intact. Commit/push only if the owner separately requests.
- **In scope:** Extend `CONTENT_LOCALES`; page dictionaries for `es`/`de`/`fr`/`ja`/`zh-cn`; sync/complete `ar`/`he`/`ru`/`uk` with latest EN where drifted; Physical World home locale modules; flagship (Labs / Investors / Robotics Lab / Future Lab / Robotics Interface) localized bodies; legal draft localization; UI chrome gap fill; unused asset/code cleanup; image/`next.config` performance; mobile fixes + screenshots under `tmp/vercel-prep/`; `.env.example` Auth/Google/URL vars; `docs/VERCEL_DEPLOY.md`; `npm run build` / `tsc --noEmit` green; AGENTS Current Phase pointer; this decision.
- **Out of scope:** Invented facts/metrics; final binding legal prose; CMS/database/analytics/cookie consent; investor portal beyond existing Sign In; new leaf marketing pages beyond D-0160 set; commit/push unless owner asks.
- **Implications:** `resolveContentLocale` no longer falls `es`/`de`/`fr`/`ja`/`zh-cn` to English for authorized body modules. Prior “Home body locales: en/ar/he/ru/uk” and “full es/de/fr/ja/zh-cn page bodies without approval” gates in AGENTS are superseded by this entry. Translation quality may be professionalized later by a vendor (pending list item); structural completeness for all published routes is the bar for this phase.

### D-0162 — PWA + SEO / security headers / marketing surface prep

- **Date:** 2026-07-26
- **Status:** Active
- **Decision:** Owner authorizes a production-readiness pass covering: (1) **security headers** (CSP pragmatic for Next.js + Auth.js, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`, `X-Frame-Options` / `frame-ancestors`, production HSTS via Vercel env); (2) **SEO** root/locale metadata, per-locale `hreflang` alternates, canonicals, App Router `sitemap.xml` + `robots.txt`, Open Graph / Twitter cards, default OG image from brand, honest Organization JSON-LD (no invented addresses); (3) **marketing share surface** for home + hubs without fake testimonials/metrics; (4) **performance** hygiene (dynamic import for heavy home clients, LCP preload where safe); (5) **mobile** polish at ~390px for header/home/footer/auth; (6) **PWA installability** via Web App Manifest, icons, apple-mobile-web-app meta, discreet Install app UI chrome (translated), and a lightweight offline-shell service worker when stable. Auth routes remain `noindex`. Legal meta must keep draft framing. Manual security review required when automated security-review tooling cannot compute diffs. Durable audit written to `docs/SITE_AUDIT_REPORT.md` + `tmp/audit/summary.json`. Commit/push only if the owner separately requests.
- **In scope:** `next.config.ts` headers; `proxy.ts` auth/preview `X-Robots-Tag`; SEO helpers + page `generateMetadata`; `app/sitemap.ts` / `app/robots.ts` / `app/manifest.ts`; brand OG + PWA icons; Install UI + i18n `pwa.*`; SW shell; mobile CSS; auth secret production hardening; `.env.example` / deploy notes; D-0162 + AGENTS phase pointer; audit artifacts; `tsc` / `build` green.
- **Out of scope:** Invented metrics/customers/legal finals; nonce-strict CSP hardening; full offline domain content; analytics/cookie consent; CMS; new leaf marketing pages; commit/push unless owner asks.
- **Implications:** Marketing = meta/OG/sitemap/sharing only. PWA is installable brochure shell, not an app product claim. CSP still allows `'unsafe-inline'` / `'unsafe-eval'` for Next pragmatism — track as backlog. Auth.js `pages.signIn` remains EN fallback path.

### D-0163 — Credentials sign-in form + show password + Google

- **Date:** 2026-07-26
- **Status:** Active
- **Decision:** Owner authorizes a simple authorization UI on `/[locale]/auth/sign-in/`: email + password fields, accessible show/hide password control, primary Sign in action, divider, then Continue with Google. Credentials provider validates against optional env allowlist (`AUTH_DEMO_EMAIL` / `AUTH_DEMO_PASSWORD` + `AUTH_SECRET`) for staging/launch operator testing only — not a full user database. When credentials or Google are unset, show honest “not configured” state; do not invent logged-in success. Auth.js `pages.signIn` uses locale-neutral `/auth/sign-in/` which redirects to the localized page (fixes SEC-003 EN-only hardcode). Google remains the primary public path when configured; real user store/DB is explicitly later.
- **In scope:** Auth.js Credentials + Google providers; sign-in form UI/CSS; show password toggle; credentials server action; locale redirect route; `auth.*` UI strings across `src/i18n/ui/*`; `.env.example` / `docs/VERCEL_DEPLOY.md`; D-0163 + AGENTS phase pointer; `tsc` / `build` green; owner-authorized commit/push for go-live.
- **Out of scope:** Full user database/Prisma; magic-link email; inventing accounts/metrics; investor portal beyond this sign-in entry; fake “account created” success.
- **Implications:** Partially extends D-0156/D-0158. Production should prefer Google OAuth; demo credentials are optional and must never be committed as real secrets. Supersedes D-0162 note that `pages.signIn` remains EN-only fallback.

### D-0164 — Public auth soft-degrade + Install in footer + BrandName lockup

- **Date:** 2026-07-26
- **Status:** Active
- **Decision:** Owner polish before go-live: (1) remove public “Setup required” / env-var developer panels from `/[locale]/auth/sign-in/`; when credentials or Google are unset, disable controls and optionally show one short human soft line — no env names, no admin chrome, no “You are not signed in” status strip; (2) move **Install app** out of header/menu — footer only (near language/theme/copyright bar); (3) homepage hero (and sitewide company-name text) must use `BrandName` with the same sans / uppercase / SAVEN light + CORE gold language as `SavenLogo` wordmark — `BrandName` is the single source for “SAVEN Core” wordmark text.
- **In scope:** Auth UI/CSS + `auth.*` soft strings (10 locales); header remove Install; footer Install remains; `BrandName` + logo CSS alignment; hero/auth title usage; D-0164 + AGENTS phase pointer; `tsc`; smoke screenshots; commit/push.
- **Out of scope:** Full user DB; inventing auth success; new marketing leaves; neon/glow; legal finals.
- **Implications:** Partially supersedes D-0163 public “not configured” panel wording and D-0162 header Install placement. Operator/env setup remains in `.env.example` / deploy docs only — not on the public page.

### D-0165 — Editorial hub/domain openings (no instruction-manual trio)

- **Date:** 2026-07-26
- **Status:** Active
- **Decision:** Owner rejects the post-masthead bordered three-column **WHAT THIS IS / WHY IT MATTERS / WHERE TO GO NEXT** block and wiki-style **MORE DETAIL** accordion as looking like a technical instruction manual. All pages using `HubReadablePage` / `DomainVisualPage` must open with a friendlier, airy editorial composition in SAVEN spirit: soft story band with short readable beats (sentence-case labels, gold accent sparingly, no ALL-CAPS instruction headers), and progressive disclosure restyled as modern product UI (or clear readable hierarchy) — still progressive disclosure OK. Content facts stay; presentation changes. Straight corners; no neon; BrandName lockup (D-0164) unchanged.
- **In scope:** `HubReadablePage` + `layer1-hub.css` opening/depth chrome; `hub.what` / `hub.why` / `hub.next` / `hub.deeper` UI strings across all 10 locales; D-0165 + AGENTS phase pointer; `tsc`; smoke hubs/leaves; screenshots under `tmp/hub-openings/`; commit/push for go-live.
- **Out of scope:** Inventing metrics/claims; new marketing leaves; neon/glow; legal finals; changing masthead photography set.
- **Implications:** Supersedes the D-0157–D-0160 “what/why/next cue cards” presentation grammar for the first post-hero body block. Hub/domain content adapters may keep the same three highlight texts; labels and layout are editorial, not docs chrome.

### D-0166 — Labs visual pages + SAVEN data/action loop diagram

- **Date:** 2026-07-26
- **Status:** Active
- **Decision:** Owner authorizes elevating Labs pages (`/labs/`, `/labs/saven-robotics-lab/`, `/labs/internal-future-lab/`) with real assistive robotics/human-help scene imagery (WebP under `public/domain/labs/`), richer honest descriptions, and a modern animated architecture diagram on the Labs overview: Human Data Model → SAVEN (analyze / roles / events / actions) → executive devices (robots, manipulators, sensors) → return telemetry → SAVEN, with optional ascent to BioMath Core when needed. Framing remains architecture / In Development / Research — no operational hospital deployment claims, no fake metrics/customers. Animation uses SVG + CSS / SMIL; `prefers-reduced-motion` shows a static labeled diagram. Straight corners; brand gold/blue accents; no neon HUD template look. Foundation sequence reminder: BioMath Life → BioMath Core → SAVEN → SAVEN Core.
- **In scope:** `LabsDataLoop` client component; `HubPageContent.diagram` / `scenes`; Labs mastheads + scene bands; flagship Labs copy; flagship dictionaries + `hub.scenes` UI (10 locales); D-0166 + AGENTS phase pointer; `tsc`; smoke Labs routes; screenshots under `tmp/labs-visual/`; commit/push.
- **Out of scope:** Invented traction/deployments; new marketing leaves beyond Labs set; neon/glow fireworks; CMS/database; final legal prose; graph CMS.
- **Implications:** Extends D-0160 Labs visuals and D-0159 brochure depth with an interactive architecture narrative on `/labs/` only.

### D-0167 — Labs data-loop diagram placement + visual enrichment

- **Date:** 2026-07-26
- **Status:** Active
- **Decision:** Owner authorizes moving the Labs overview animated data/action loop diagram higher on `/labs/` — immediately under the visual masthead, before the story-band / body / scenes / path grids — so it sits in the first scroll attention zone. Visual enrichment authorized: deeper navy/charcoal diagram field, gold accents, soft blue data paths, warm Human Data Model tint, layered gradient fills on SAVEN and the executive-device cluster, clearer path particles / flow pulses / soft node breathing, and miniature device silhouettes for clarity. Still architecture framing with honesty note; no neon/glow spam; straight corners; `prefers-reduced-motion` remains a richer static still. No new marketing claims or operational deployment language.
- **In scope:** `HubReadablePage` diagram order; `LabsDataLoop` + `labs-data-loop.css` visual upgrade; D-0167 + AGENTS phase pointer; `tsc`; smoke `/en/labs/`; screenshots `tmp/labs-visual/diagram-high-*.png`; commit/push.
- **Out of scope:** New UI copy strings (reuse D-0166 labels); invented traction; neon HUD; CMS; other hub pages.
- **Implications:** Supersedes D-0166 placement of the diagram after story/body; visual language remains brand-atmospheric, not sci-fi chrome.

### D-0168 — Typography system — Apple-like clarity sitewide

- **Date:** 2026-07-26
- **Status:** Active
- **Decision:** Owner authorizes a sitewide typography system optimized for Apple-like clarity and readability on all pages. Primary body/UI face is the system SF-adjacent stack (`ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", …`) via CSS `--font-sans` — not IBM Plex Sans for Latin/Cyrillic. Source Serif remains loaded for large display titles only (hero / masthead H1 scale); mid-size section titles and UI chrome use sharp sans. Fluid type scale, body ~17px with line-height ~1.47–1.6, heading letter-spacing about `-0.015em` to `-0.022em`, body tracking near 0, weights 400 / 500–600 (no ultra-light body). Font smoothing: default/subpixel on light theme; antialiased on dark theme and dark chrome. Arabic keeps IBM Plex Sans Arabic; Hebrew keeps Heebo; BrandName/logo lockup structure and gold/ink colors stay (D-0164), lockup face inherits clearer sans. Supersedes D-0128 custom Latin sans (IBM Plex) for body/UI; does not invent content or change navigation.
- **In scope:** `src/design/fonts.ts`, `src/design/typography.ts`, `app/globals.css` type tokens; hub/home/labs/auth/experience/engineering/technology/shell CSS inheritance sweep; D-0168 + AGENTS phase pointer; `tsc`; smoke `/en/`, `/en/labs/`, `/en/technology/`, `/ar/`; screenshots `tmp/type-clarity/`; commit/push.
- **Out of scope:** New UI chrome strings; neon; inventing content; changing BrandName color/structure; final legal prose; CMS.
- **Implications:** Single CSS-variable source updates all pages; RTL locales keep dedicated faces with improved sizing/smoothing; display serif is opt-in at large scale only.

### D-0169 — Visible Apple-clean Inter webfont + sans titles

- **Date:** 2026-07-26
- **Status:** Active
- **Decision:** Owner reports D-0168 was not visibly noticeable (system-ui ≈ SF Pro on macOS; hero/masthead titles still used Source Serif). Authorize a **visible** Apple-clean pass: load **Inter** via `next/font` (weights 400/500/600/700) as the first face for `--font-sans` / `--font-ui`; migrate all marketing/display titles (`.pw-hero__title`, `.hub-page__title`, knowledge/home hero titles, section titles that used `--font-display`) to sharp sans with Apple-like tracking/semibold; **stop loading Source Serif 4**; keep Arabic IBM Plex Sans Arabic and Hebrew Heebo; BrandName lockup structure/colors unchanged (D-0164). Slightly stronger secondary-text contrast; body ~18px; bump service worker cache to `savencore-shell-v2` so clients fetch new CSS. Supersedes D-0168 for Latin/Cyrillic face choice and for display-title face (sans, not serif).
- **In scope:** `src/design/fonts.ts`, `src/design/typography.ts`, `app/globals.css` tokens; hub/home/experience title CSS; `public/sw.js` cache name; D-0169 + AGENTS phase pointer; `tsc` + build; screenshots `tmp/type-clarity/v2-*.png`; commit/push; production deploy.
- **Out of scope:** New UI chrome strings; neon; inventing content; changing BrandName color/structure; final legal prose; CMS.
- **Implications:** Titles and body share one crisp Inter stack sitewide; DevTools should show Inter (not Source Serif) on Latin pages; hard refresh / SW update may be needed once after deploy.

### D-0170 — Theme contrast fix — home hero/care + dark chrome

- **Date:** 2026-07-26
- **Status:** Active
- **Decision:** Owner reports that toggling light/dark theme on the homepage makes part of the text disappear (including concerns for footer/menu). Root cause: D-0169 global `h1–h4 { color: var(--color-text) }` overrode dark-band headings, so in light theme the hero H1 became dark ink on the always-dark hero (`#0b1220`). Care living block also mixed theme `--color-background` into a light paper plane, so dark theme inverted care copy toward light-on-light. Authorize a contrast fix: (1) dark atmospheric bands (hero, knowledge heroes) keep light ink via `color: inherit` from the band parent; (2) care living block stays a fixed light paper plane in both themes with scoped light-ink CSS variables; (3) header and footer remain dark chrome with scoped light text / bright gold accent tokens so menu and footer stay readable in both themes; (4) header/footer logo stays `tone="dark"` (white SAVEN on dark chrome); (5) bump service worker cache to `savencore-shell-v3`. No navigation, content, or palette invention beyond contrast repair.
- **In scope:** `physical-world-home.css`, `globals.css`, `experience.css`, `site-shell.css`, `public/sw.js`, D-0170 + AGENTS phase pointer; Playwright screenshots `tmp/theme-fix/`; `tsc`; smoke `/en/`; commit/push; production deploy.
- **Out of scope:** New theme palettes; neon; inventing content; changing BrandName structure; final legal prose; CMS.
- **Implications:** Theme toggle must keep all home/header/footer text readable; hero may stay dark atmospheric with light copy in both themes; care plane stays light paper in both themes.

### D-0171 — Full light/dark theme coverage

- **Date:** 2026-07-26
- **Status:** Partially superseded by D-0172 for home shell / closing exceptions
- **Decision:** Owner reports that not everything switches when toggling light/dark (D-0170 only repaired hero H1 contrast and kept care + header/footer locked). Authorize **full theme coverage**: (1) **Light theme** = light page backgrounds, surfaces, text, borders, cards/story-bands, care living plane, hub/domain bodies, labs surround chrome, auth (light paper card), and **light header/footer/menus** (Apple-like); logo ink navy on light chrome. (2) **Dark theme** = dark page + dark chrome (navy header/footer) with light ink / bright gold; logo white on dark chrome. (3) **Intentional exceptions** that stay atmospheric in both themes: photoreal home hero collage, domain/hub mastheads and other dark photo heroes, homepage closing meaning band, Labs diagram stage (navy canvas). Surrounding page chrome and body planes must still flip. (4) Prefer CSS variables (`--color-background`, `--color-surface`, `--color-surface-muted`, `--color-text`, `--color-text-secondary`, `--color-border`, footer-scoped `--footer-*`, auth-scoped `--auth-*`). (5) Bump service worker cache to `savencore-shell-v4`. Supersedes D-0170 items that forced care/header/footer to ignore theme.
- **In scope:** `globals.css`, `site-shell.css`, `experience.css`, `physical-world-home.css`, `sign-in.css`, `saven-logo.css`, `layer1-hub.css`, `engineering.css` token sweep; `public/sw.js`; D-0171 + AGENTS phase pointer; Playwright screenshots `tmp/theme-full/`; `tsc`; smoke; commit/push; production deploy.
- **Out of scope:** New theme palettes beyond existing tokens; neon; inventing content; changing BrandName structure; final legal prose; CMS; inventing leaf pages.
- **Implications:** Theme toggle must visibly flip the whole site except documented atmospheric photo/diagram exceptions; light mode header/footer are no longer always-dark.

### D-0172 — Theme plane completion (unfreeze home / care / closing)

- **Date:** 2026-07-26
- **Status:** Active
- **Decision:** Owner reports D-0171 incomplete — not all backgrounds flip. Root cause: `.pw-home` forced `#0b1220` / light ink for the entire homepage shell, so care and closing could not read as theme surfaces. Authorize completion: (1) `.pw-home` uses `var(--color-background)` / `var(--color-text)`. (2) **Only** `.pw-hero` (+ collage) stays dark atmospheric with light copy in both themes. (3) Care living plane (`.pw-living-block`) and closing band (`.pw-closing`) follow theme surfaces; fades use `--color-surface` / `--color-background` (supersedes D-0171 closing-as-always-dark exception). Photo asset itself may remain. (4) Labs `.ldl` outer surround follows theme; only `.ldl__stage` stays navy canvas. (5) Auth page atmosphere + Google button use theme tokens. (6) Hub body/path placeholders use `--color-surface-muted` (mastheads stay dark photo). (7) Bump SW cache to `savencore-shell-v5`.
- **In scope:** `physical-world-home.css`, `labs-data-loop.css`, `sign-in.css`, `layer1-hub.css`, `public/sw.js`, D-0172 + AGENTS phase pointer; Playwright full-page home light/dark under `tmp/theme-bg/`; `tsc`; local `npm run dev`; commit/push for sync (Vercel deploy optional this turn).
- **Out of scope:** New palettes; neon; inventing content; final legal prose; CMS; changing masthead/hero collage atmospheric treatment.
- **Implications:** Theme toggle must visibly flip home care + closing + page shell + labs surround; frozen light-care / black-home shells are prohibited.

### D-0173 — Investors visual upgrade + Contact page/form + About team narrative

- **Date:** 2026-07-26
- **Status:** Active
- **Decision:** Owner authorizes three company-surface upgrades: (1) **Investors** (`/investors/`) — richer visual brochure via DomainVisualPage / HubReadablePage: icon story beats (platform potential, human benefit, long-term value, responsible growth — no fake returns), thematic WebP scenes under `public/domain/company/`, visual path cards; honest D-0159 posture retained. (2) **Contact** — new published route `/contact/`, footer Company link, public address **`info@savencore.com`**, beautiful accessible form that composes a `mailto:` message (opens the visitor’s email app). Honest success copy — no CRM / SMTP claim; full mail API later. (3) **About / Foundation** (`/foundation/`) — open “Who we are” team narrative: professional team with deep experience across AI/robotics/data/care systems/engineering and years building major projects in related domains — **no names**, no invented headcount, customers, patents, valuations, or deployment claims. UI chrome + content strings translated across locales.
- **In scope:** Investors content/visuals/CSS icons; Contact page + form + dictionaries; Foundation team section + dictionaries; `published-routes`, footer, sitemap; `src/i18n/ui/*`; D-0173 + AGENTS phase pointer; `tsc`; smoke `/en/investors/`, `/en/contact/`, `/en/foundation/`; screenshots `tmp/company-pages/`; commit/push; optional Vercel prod.
- **Out of scope:** SMTP/CRM backend; named leadership bios; investor portal; inventing metrics/returns/clients; final legal prose; neon.
- **Implications:** Contact email destination is approved for public use; Contact mailto form is authorized; team narrative without names is authorized; pending “Contact emails / forms destinations” item is resolved for this public channel.

### D-0174 — Positioning: SAVEN uses and advances AI; does not claim to create AI

- **Date:** 2026-07-26
- **Status:** Active
- **Decision:** Owner rule: SAVEN Core does **not** create, build, or invent AI. Public and documentation copy must say the company **uses / refines / advances / applies** AI alongside robotics, autonomous systems, and engineering technologies. Domain/discipline page titles such as “Artificial Intelligence” remain OK. Claims that SAVEN creates AI (any locale) are prohibited.
- **Canonical English replacements:** (1) Investors body: “SAVEN Core uses and advances AI alongside robotics, autonomous systems, and engineering technologies meant to operate in real environments.” (2) Home oneBreath: “We use and refine AI with robotics that work in the real world — so machines can sense, move, and assist under human control.” (3) SITE_ASSIGNMENT explanation: “SAVEN Core applies and advances AI alongside robotics…”.
- **In scope:** Flagship EN + all locale dictionaries + `scripts/fl-translations/` sync copies; home physical-world oneBreath all locales; `docs/SITE_ASSIGNMENT.md`; AI technology page scan (reframe only if create-AI claims found); D-0174 + AGENTS phase pointer; `tsc`; commit/push; Vercel prod.
- **Out of scope:** Inventing new product claims; changing robotics “builds engineering basis” language; SMTP/CMS; neon.
- **Implications:** All future copy and translations must follow use/refine/advance framing for AI; dictionary keys that embed the old English must be renamed when EN changes.

### D-0175 — Experience Redesign UI freeze — completed approved snapshot

- **Date:** 2026-07-26
- **Status:** Active
- **Decision:** Owner pin/freeze: the public site state after this Experience Redesign UI pass is an **approved completed snapshot**. Do not casually regress Contact, Applications, Labs, or Purpose masthead treatments without a new decision. Prior AI positioning (D-0174) remains in force and is already on `main`.
- **Freeze coverage:** (1) Contact — smaller secondary email link + company horizon hero (`scene-long-horizon`). (2) Applications hub — robotics hand masthead (distinct from care overview). (3) Labs hub — multi-robot / trolley+humanoid masthead crop. (4) Purpose hub — diverse multi-care collage (home / disaster / hospital / rural-remote; ages and need-help contexts). Hub collage rendering + masthead object-position tuning included.
- **Freeze commit:** `2417475b8b123aecc1b955549a158079bd939b64` (`2417475` on `main`).
- **In scope:** Contact form/CSS contrast; hub masthead collage path; `domain-visuals` / hub visual wiring; Layer-1 hub CSS; D-0175 + AGENTS phase pointer; commit/push; Vercel production deploy to `https://www.savencore.com`.
- **Out of scope:** Legal dictionary WIP under `scripts/fl-translations/*-legal.mjs` and related legal locale churn; SMTP/CRM; inventing imagery beyond approved care/domain assets; neon.
- **Implications:** This snapshot is the baseline for further Experience work; material visual regress of the frozen hubs/Contact requires owner approval / a new Decisions Log entry.

### D-0176 — Admin Platform / Social footer — first vertical slice

- **Date:** 2026-07-26
- **Status:** Active
- **Decision:** Owner authorizes the next development block after the D-0175 public UI freeze: (1) **Footer socials** — Facebook, YouTube, X, LinkedIn, Instagram icons always visible; links activate only via `NEXT_PUBLIC_SOCIAL_*` env (empty/`#` = disabled with `aria-disabled`; no invented live profile URLs). (2) **Admin platform** under `/[locale]/admin/` — restricted, not in public primary nav or sitemap; footer **Admin** link only for signed-in role ≥ `viewer`. RBAC hierarchy `super_admin` > `admin` > `editor` > `marketer` > `viewer` via `AUTH_DEMO_ROLE` + `AUTH_ADMIN_ALLOWLIST`. (3) **Email templates** — English content modules with branded HTML (logo, SAVEN Core, https://www.savencore.com, `info@savencore.com`, © 2026) and admin preview; categories cover welcome/invite, careful investor intro (no fake claims), partnership ack, press, newsletter, event, security notice, internal ops. SMTP send not included. (4) **Media library** — seed brand assets + local `storage/admin-media/` uploads in development; actions Copy / Print / Share / Download / PDF + preview. Durable object storage later. (5) **Marketing / technical monitoring** — honest structural tools only (checklists, published-route inventory, version/locale/commit health) — **no fabricated traffic/ROI/analytics**. Status labels: Architecture / In Development. Public Experience freeze heroes/IA remain unchanged.
- **In scope:** Social config + footer icons + i18n; auth role claims; admin layout/pages/API; email template modules; media store; marketing checklist; site-health monitoring; `docs/ADMIN_PLATFORM.md`; D-0176 + AGENTS phase pointer; `tsc`/smoke; commit/push; Vercel production deploy.
- **Out of scope:** Invented social URLs as live profiles; fake metrics/customers/partners; SMTP/CRM; S3/durable media; Google Analytics / cookie consent; full multi-user DB; regressing D-0175 frozen public mastheads; final legal prose.
- **Implications:** Official social account URLs remain a pending owner decision for real values, but the UI shell and env wiring are authorized. Admin is a real restricted surface, not a decorative fake dashboard. See `docs/ADMIN_PLATFORM.md`.

### D-0177 — Owner always super_admin via demo operator / dev defaults

- **Date:** 2026-07-26
- **Status:** Active
- **Decision:** Owner requires a reliable path to enter `/[locale]/admin/` as `super_admin` without friction, without an unauthenticated public backdoor. (1) The Credentials demo/operator identity **always** resolves to role `super_admin`. (2) Local/dev: when `AUTH_DEMO_EMAIL` / `AUTH_DEMO_PASSWORD` are unset, documented development defaults (`admin@savencore.com` / `SavenCore-Dev-Admin!`) apply only if `NODE_ENV === "development"` — never as a silent production password. (3) Gitignored `.env.local` holds working `AUTH_SECRET` + `AUTH_DEMO_*` for immediate `npm run dev`. (4) Production (Vercel) requires explicit `AUTH_DEMO_*` (+ `AUTH_SECRET`) env; owner sets them in the Vercel project. No open `/admin` without auth.
- **In scope:** `src/admin/demo-operator.ts`; auth credentials resolution; role mapping; `.env.example`; gitignored `.env.local` for local; `docs/ADMIN_PLATFORM.md` / `docs/VERCEL_DEPLOY.md`; D-0177 + AGENTS phase pointer; local smoke; commit/push so prod can use `AUTH_DEMO_*` once set.
- **Out of scope:** Unauthenticated admin access; inventing a full user DB; committing production secrets; changing public Experience freeze (D-0175).
- **Implications:** Extends D-0163 / D-0176. Owner must set Vercel env for production email/password login; local example password must be changed for any shared or production use.

### D-0178 — Admin Platform expansion + branded email templates

- **Date:** 2026-07-26
- **Status:** Active
- **Decision:** Owner authorizes Admin Platform expansion after feedback that email template preview showed a broken logo / plain brand text, admin UI needed SAVEN polish, and working modules were missing. (1) **Branded email HTML** — email-safe PNG mark (`/brand/saven-logo-mark.png`) with absolute production URL; admin preview rewrites host to the current origin; header uses SAVEN (light) + CORE (gold `#d4a84b`) lockup matching `BrandName`, navy header, gold accent rule, tagline, site, `info@savencore.com`, © 2026. (2) **Admin UI polish** — clearer nav hierarchy, brand lockup in shell, straight-corner cards/sections, no neon. (3) **Working modules** (JSON store under `storage/admin/`, gitignored runtime writes; seed defaults in code): roles/permissions matrix; operator assignments; invitations with token links; in-app notifications; mailings compose/preview/send with SMTP when `SMTP_*` set otherwise honest **simulated** send + outbox. (4) Demo/owner Credentials operator remains always `super_admin` (D-0177). Public Experience Redesign freeze (D-0175) and public IA unchanged.
- **In scope:** Email brand chrome; admin pages/APIs/nav/i18n; permission matrix; operators/invitations/notifications/mailings stores; optional SMTP helper; `docs/ADMIN_PLATFORM.md`; D-0178 + AGENTS phase pointer; `tsc`/smoke; commit/push/deploy.
- **Out of scope:** Inventing customers/metrics/ROI; neon; durable S3/DB; fabricating SMTP delivery success without SMTP; changing public IA/heroes; final legal prose.
- **Implications:** On Vercel (read-only FS), JSON persistence may be unavailable until durable storage — UI must stay honest. SMTP is optional; simulated send must never claim real delivery.

### D-0179 — Falcon domain presence + OG share defaults

- **Date:** 2026-07-26
- **Status:** Active
- **Decision:** Owner authorizes (1) **Falcon brand presence on domain pages** — the approved SAVEN brand mark in `public/brand/saven-logo-mark.webp` (and PNG companion) is the project falcon mark; place it tastefully as a quiet seal on Layer-1 / domain visual mastheads (`HubReadablePage`), straight corners, no neon, without replacing Purpose collage or frozen heroes (D-0175). No invented stock falcon photography. (2) **Sitewide Open Graph / Twitter share defaults** — when any public URL is shared, previews must show the SAVEN falcon logo + site name **SAVEN Core**: `metadataBase` `https://www.savencore.com`, `og:site_name` = SAVEN Core, `og:title` / Twitter title from page title, `og:image` = absolute `/brand/og-default.png` (1200×630 branded canvas with mark + name), `twitter:card` = `summary_large_image`. Page-level metadata may override title/description but must keep the default share image and site name (do not substitute thematic mastheads as OG images).
- **In scope:** Domain masthead falcon seal + CSS; regenerate `public/brand/og-default.png` (+ webp); SEO metadata helper defaults; media-store seed descriptions; D-0179 + AGENTS phase pointer; smoke `/en/` meta + OG image HTTP 200; commit/push; production deploy.
- **Out of scope:** Invented falcon photography/stock; changing Purpose collage or home hero; inventing company facts; neon/glow decoration; CMS/analytics.
- **Implications:** Extends D-0169 SEO/share surface. Social crawlers cache OG images — cache bust may take time after deploy.

### D-0180 — Email templates restyled to owner example

- **Date:** 2026-07-26
- **Status:** Active
- **Decision:** Owner requires admin email / newsletter HTML templates to match the provided design example: dark navy header with falcon mark + SAVEN (white) / CORE (gold) lockup + tagline **Turning Intelligence Into Human Care** + subtle network graphic; white centered body; navy CTA with gold thin border and **straight corners**; 2×2 feature pillar grid with line icons; cream quote band with gold left rule; contact row to `info@savencore.com`; footer lockup + www.savencore.com + copyright © 2026 SAVEN Core + LinkedIn / YouTube / Email icons. Shared chrome wraps all templates; per-template content is the middle body only. Copy must stay governance-safe: use Master Spec primary/positioning statements for the quote (do not invent “reduce suffering…” mission language); replace example “Built for Scale” with honest **Built for Continuity** / foundation framing; no fake metrics or customers. Absolute image URLs under `https://www.savencore.com/brand/…` and `/email/…`; admin preview continues to rewrite hosts to the current origin.
- **In scope:** `src/content/admin/email-templates/brand.ts` + template bodies; `public/email/*` decorative icons/network; docs (`ADMIN_PLATFORM.md`, D-0180, AGENTS phase pointer); `tsc`; commit/push; production deploy.
- **Out of scope:** Inventing mission claims, metrics, or social profile URLs; neon/glow; changing public Experience freeze (D-0175); SMTP/CRM beyond existing optional send.
- **Implications:** Extends D-0176 / D-0178 branded email. Mailings that inject template HTML pick up the new chrome automatically. Owner should hard-refresh admin template preview after deploy.

### D-0181 — Footer Legal equal columns, More hub, socials bottom row

- **Date:** 2026-07-26
- **Status:** Active
- **Decision:** Owner requires the public footer Legal column to share **equal column weight** with other footer sections (same grid track, balanced visual mass). Show a **primary** Legal link set in the column; overflow destinations are reached via a localized **More** link to a structural `/[locale]/legal/` index hub that lists existing draft legal routes only (no new policy bodies, no invented legal claims). Restructure the footer for neater symmetry: intro (brand + tagline) → equal columns grid → **full-width social icons row under the grid** → copyright / utilities bar. Social icons keep `NEXT_PUBLIC_SOCIAL_*` disabled-when-unset behavior; hover/focus may use subtle brand-compatible network tints (not neon/glow). Admin footer link visibility for signed-in admins is unchanged. UI chrome strings (More, Legal hub lead, social aria) must be translated across all ten locales.
  - **In scope:** `SiteFooter`, `FooterSocials`, `site-shell.css`; `site-navigation` primary Legal + More; `published-routes` + legal index page; `src/i18n/ui/*`; D-0181 + AGENTS phase pointer; smoke `/en/` (+ brief RTL if easy); commit/push; production deploy.
  - **Out of scope:** Final legal/policy prose; inventing social profile URLs; Experience Redesign hero freeze changes; neon/glow decoration; changing Admin visibility rules.
  - **Implications:** Footer depth-map assertion treats `/legal/` hub + More as covering Legal leaf routes not listed in the primary column. Extends D-0154 structural Legal publish and D-0176 social row.

### D-0182 — Rename Applications “Home” leaf to Home Application

- **Date:** 2026-07-26
- **Status:** Active
- **Decision:** Owner requires the Applications leaf formerly labeled **Home** (page eyebrow/label + Architecture status read as “Home Architecture”) to be renamed so it is not confused with the website homepage nav **Home**. Canonical display title: **Home Application** (matches existing definition term / content key `home-application`). Route remains `/applications/home/`. Site-root nav label `nav.home` → `/` is unchanged.
  - **In scope:** `site-navigation` applications-home label; `src/i18n/ui/*` `applications-home`; EN page/entity/hub titles; locale page dictionaries; D-0182 note; commit/push/deploy when clean relative to concurrent D-0181 footer WIP.
  - **Out of scope:** URL slug change; inventing product/deployment claims; renaming the website homepage.
  - **Implications:** Footer/Applications hub cards, domain leaf label, and related-application entity title show Home Application in all ten locales.

### D-0183 — Expanded email templates + public/admin Media library

- **Date:** 2026-07-26
- **Status:** Active
- **Decision:** Owner authorizes (1) **additional English email templates** for business-life cases (event follow-up, research update, partnership follow-up, press-kit invite, care-domain newsletter variant, meeting thank-you, soft re-engagement, internal briefing), all wrapped in the D-0180 branded chrome and wired into Admin Templates + Mailings. Copy stays governance-safe (approved positioning; Research / Architecture / In Development status language only; no fake metrics, customers, or operational claims). (2) **Public Media hub** at `/[locale]/media/` — footer Company column link “Media”; marketing-polished Layer-1 visual grammar (navy/gold, falcon seal, atmospheric company masthead, straight corners); sections for Videos, Documents & presentations, Links, and Brand assets; preview / download / copy / share actions; premium empty states; content from the shared media library (seed brand assets + public uploads/links) without inventing press quotes or partner logos. (3) **Admin Media enhancement** — upload video/documents/presentations; add link entries (URL + title + type); filter by type; preview/download/copy/share/delete (mutations require editor+ / `media_upload`; seed assets not deletable); persist under `storage/admin-media/` with honest Vercel filesystem durability note; public file access for `visibility=public` items via `/api/media/[id]/`.
- **In scope:** Email template modules; media types/store/API; Admin Media UI; public Media page + CSS + content dictionaries; footer / published-routes / sitemap; `src/i18n/ui/*`; `docs/ADMIN_PLATFORM.md` + D-0183 + AGENTS phase pointer; `tsc`/smoke; commit/push; production deploy.
- **Out of scope:** Durable S3/DB media on Vercel; inventing press quotes, partner logos, operational product videos; final legal/policy prose; neon/glow; Experience Redesign hero freeze changes (D-0175).
- **Implications:** Extends D-0176 / D-0178 / D-0180 admin media and email surfaces. Public `/media/` is a marketing content library, not a legal policy. Footer Company gains Media without disturbing Legal/More/socials layout (D-0181).

### D-0184 — Admin Media simplified Add content UX

- **Date:** 2026-07-26
- **Status:** Active
- **Decision:** Owner authorizes a **simpler Admin Media upload UX** so operators can place video and SAVEN content with fewer fields and clicks. Primary flow: **Add content** with segmented control **File | Video | Link**; large drag-and-drop + browse with plain accepted types; Video tab accepts YouTube/Vimeo/direct URL (live embed preview when valid) or file upload; Link tab is title + URL + optional note with one-click save; post-add success strip with thumbnail and Copy link / Open / Delete; default titles from filename/URL; clear empty state; storage durability note demoted (not the hero); mutations remain editor+ via `media_upload` / `manage_media` matrix. Public `/media/` preview gains honest YouTube/Vimeo iframe embeds for video link entries. No invented press/partner content; no durable S3 in this phase.
- **In scope:** `MediaLibraryClient` + admin CSS; `media-embed` helper; media types/store/API optional display name; public Media preview embeds; `src/i18n/ui/*`; `docs/ADMIN_PLATFORM.md` + D-0184 + AGENTS phase pointer; `tsc`/smoke; commit/push; production deploy.
- **Out of scope:** Object storage on Vercel; inventing media catalog content; neon/glow; Experience Redesign hero freeze (D-0175).
- **Implications:** Extends D-0183 Admin Media. Same RBAC and storage honesty; UX only (plus embed preview).

### D-0185 — Admin Media traditional CMS UX + video/delete fixes

- **Date:** 2026-07-26
- **Status:** Active
- **Decision:** Owner authorizes a **durable Admin Media repair**: (1) fix video placement failures — MIME/extension inference for MP4/WebM/MOV, clear size/type/storage errors, YouTube/Vimeo embed CSP (`frame-src` + thumbnail `img-src`), inline Content-Disposition for video/image preview, honest Vercel filesystem + ~4.5 MB body limits with UI banner preferring URL embeds for large video; (2) **Delete** visible and working for non-seed upload/link rows (optimistic UI; seed/`seed-*` protected; editor+ + `manage_media`); (3) **traditional CMS navigation** — horizontal tabs Upload file / Upload video / Add link, visible Choose file inputs, upload progress, library table (Name / Type / Date / Open · Copy · Delete) with All files · Videos · Links filters. No fake success on read-only hosts; durable object storage remains a later phase.
- **In scope:** `MediaLibraryClient` + admin CSS; media types/store/API; CSP in `next.config.ts`; admin media page props; `src/i18n/ui/*`; `docs/ADMIN_PLATFORM.md` + D-0185 + AGENTS phase pointer; `tsc`; commit/push; production deploy.
- **Out of scope:** S3/Blob object storage; inventing catalog videos; public Media delete; neon/glow; Experience Redesign hero freeze (D-0175); auth/RBAC hierarchy redesign.
- **Implications:** Supersedes D-0184 UX presentation (same library, clearer CMS grammar). Production Vercel still cannot persist new library rows until object storage; local `storage/admin-media/` remains the writable path.

### D-0186 — Admin Media delete-all + upload CTAs + public Media viewer

- **Date:** 2026-07-26
- **Status:** Active
- **Decision:** Owner authorizes (1) **Delete for every library row** managed by operators with `manage_media` / editor+ — including seed/`seed-*` catalog rows — via confirm dialog; seed deletes **soft-hide** from admin + public lists (`storage/admin-media/hidden.json`) without removing `/public` brand files; upload/link rows hard-delete as before; Delete always visible when permitted (honest storage errors on Vercel); (2) **visible Upload CTAs** — navy/gold elevated panels, tab chrome, large primary buttons with subtle shadows, straight corners; (3) **public `/[locale]/media/` viewer redesign** — gallery hero context, filters All / Videos / Docs / Links, card grid with thumbnails, large play affordance for video, prominent View + Download, type badges, polished empty states. Keep honest Vercel FS durability note. No invented media titles/metrics.
- **In scope:** `MediaLibraryClient` + admin CSS; media types/store/API delete; public `MediaPage` + CSS; `src/i18n/ui/*`; `docs/ADMIN_PLATFORM.md` + D-0186 + AGENTS phase pointer; `tsc`; commit/push; production deploy.
- **Out of scope:** S3/Blob object storage; inventing catalog content; neon/glow; Experience Redesign hero freeze (D-0175); auth/RBAC hierarchy redesign.
- **Implications:** Supersedes D-0185 seed delete protection. Soft-hidden seeds can be restored later by clearing `hidden.json` (operator tooling may follow). Production mutations still require writable FS (local) until durable storage.

### D-0187 — Admin Media library filter chip contrast

- **Date:** 2026-07-26
- **Status:** Active
- **Decision:** Owner authorizes a small Admin Media UI fix: Library / Videos / Docs / Links filter chips must have clear contrast vs the library panel in both light and dark admin themes (border, distinct background, stronger text via theme ink, navy/gold active + visible hover). Straight corners; no neon. Upload CTAs from D-0186 remain unchanged.
- **In scope:** `src/components/admin/admin.css` tab/chip styles; D-0187 + brief ADMIN_PLATFORM / AGENTS pointer; commit/push; production deploy.
- **Out of scope:** Public `/media/` filters; Upload CTA redesign; storage/RBAC changes.
- **Implications:** Follow-up polish on D-0186 library chrome only.

### D-0188 — Footer Architecture column (Systems depth map)

- **Date:** 2026-07-27
- **Status:** Active
- **Decision:** Owner requires a visible footer section named **Architecture** listing all Architecture / Systems pages. Root cause: “Architecture” is primarily a maturity status and was never a footer domain column; a Coming Soon stub “Architecture” briefly lived under Systems and was removed when the visitor footer became published-routes-only (D-0132). Systems pages document architecture (“systems are architecture”). Restore a first-class footer column **Architecture** that carries the full published Systems depth map (Overview + Knowledge Engine, AI Decision Support, Safety Layer, Communication Layer, Clinical Interfaces, Robotics Layer, Drone Systems, SAVEN Robotics Interface). Domain routes remain `/systems/*`; page bodies and primary naming stay Systems. Equal column weight with sibling footer sections (D-0181 eight-track grid unchanged — Systems column retitled). Localize the Architecture title across all ten UI locales. Do not invent unpublished IA leaves (e.g. `/technology/safety-architecture`).
- **In scope:** `site-navigation` footer group id/title; `SiteFooter` comment; `src/i18n/ui/*` `footer.architecture`; `INFORMATION_ARCHITECTURE` as-built note; D-0188 + AGENTS phase pointer; commit/push; production deploy.
- **Out of scope:** Renaming `/systems/` routes; inventing architecture leaf pages; changing Technology/Trust/Legal/Media/Home Application; neon/glow; Experience Redesign hero freeze (D-0175).
- **Implications:** Visitors see Architecture in the footer with all published Systems architecture pages. Agents treat Architecture as the footer label for the Systems Layer-2 depth map.

### D-0189 — SAVEN Robotics Interface content + animated hub diagram

- **Date:** 2026-07-27
- **Status:** Active
- **Decision:** Owner authorizes expanded public copy and an animated architecture diagram on **SAVEN Robotics Interface** (`/systems/saven-robotics-interface/`). Positioning: the Interface is an important SAVEN system part — a shared interface layer for communication between diverse robots/devices and for coordinating shared/common tasks under one control and communication system (SAVEN), with human oversight preserved. Status remains **In Development** / architecture — not Operational, not a commercial control product, no invented fleets/metrics/deployments. Device classes (manipulators, mobile/trolley robots, assistive forms, sensors) are architecture concepts, not product SKUs. Diagram: center SAVEN, ring labeled SAVEN Robotics Interface, outer device nodes with intentional motion (link pulses, soft ring orbit, sequential device highlight); navy/gold/blue quality bar matching Labs `LabsDataLoop`; respect `prefers-reduced-motion`. English canonical; localize new page-body and diagram strings across flagship dictionaries (10 locales). Domain visual shell unchanged.
- **In scope:** Flagship Robotics Interface brochure copy; `RoboticsInterfaceDiagram` + CSS; hub `diagram` kind wiring; diagram labels + flagship dictionary patch; D-0189 + AGENTS / IA brief pointer; `tsc`/smoke; commit/push; production deploy.
- **Out of scope:** Invented photography/logo assets; claiming Operational/commercial availability; neon/glow excess; merging `/systems/robotics-layer/` with the Interface workstream; Labs diagram redesign; CMS.
- **Implications:** Robotics Interface page teaches interoperability and common-task coordination visually and in copy; agents treat the diagram as architecture storytelling only.

### D-0190 — Robotics Interface diagram visual enrichment

- **Date:** 2026-07-27
- **Status:** Active
- **Decision:** Owner requests richer color differentiation, more dynamism, and clearer robot/device visuals on the SAVEN Robotics Interface hub diagram (`RoboticsInterfaceDiagram`). Enrich within approved navy/gold/blue/teal palette — no neon/glow excess. Per-device accent colors and illustrated SVG silhouettes (manipulator arm, mobile base, trolley, assistive care form, sensor array). Stronger SAVEN center and more visible interface ring. Intentional motion: staggered node pop-in, ring orbit beads, bidirectional link traffic, icon micro-motion; respect `prefers-reduced-motion`. Architecture claims remain **In Development**; device classes stay concepts, not products.
- **In scope:** `RoboticsInterfaceDiagram` + CSS; D-0190 + AGENTS / IA brief pointer; type-check; commit/push; production deploy.
- **Out of scope:** Copy/localization changes; inventing products/fleets/metrics; neon excess; Labs diagram redesign; CMS.
- **Implications:** Diagram remains architecture storytelling with clearer visual device types and motion hierarchy.

### D-0191 — Robotics Interface diagram brand mark + photoreal device thumbs

- **Date:** 2026-07-27
- **Status:** Active for center brand mark; **photoreal device thumbs superseded by D-0193**
- **Decision:** Owner requests realistic, high-quality diagram icons and the **SAVEN brand mark** in the center node of the SAVEN Robotics Interface hub diagram. Replace crude SVG device silhouettes with cropped WebP thumbnails reused from approved site assets (domain / hero collage). Center node uses `/brand/saven-logo-mark.webp` (same mark as email/OG/header) with accessible description. Preserve D-0190 color accents, link traffic, ring motion, and `prefers-reduced-motion` behavior — no neon excess. Architecture framing unchanged (**In Development**; device classes remain concepts, not products).
- **In scope:** `RoboticsInterfaceDiagram` + CSS; cropped thumbs under `public/domain/systems/diagram/`; D-0191 + AGENTS / IA brief pointer; type-check; smoke; commit/push; production deploy.
- **Out of scope:** Inventing photography; copy/localization changes; claiming Operational fleets; Labs diagram redesign; CMS.
- **Implications:** Diagram center reads as branded SAVEN; device nodes use premium photoreal crops from existing approved imagery only.

### D-0192 — Robotics Interface diagram thumb visibility + section polish

- **Date:** 2026-07-27
- **Status:** Active; **device photo approach superseded by D-0193** (section title / masthead polish retained)
- **Decision:** Owner requests circular photoreal device thumbs that remain **clearly visible at small size**, a larger **“SAVEN Robotics Interface”** title above the diagram, and a more modern/attractive diagram section within brand grammar (navy/gold, straight corners, no neon excess). Enlarge node diameter; per-device zoom/offset crops on robot faces and distinctive features (CSS/SVG crop, not new photography); stronger rim/ring contrast; slightly larger center brand mark; refined section masthead, spacing, and subtle atmosphere. Preserve D-0190/D-0191 motion and `prefers-reduced-motion`. Architecture framing unchanged (**In Development**; device classes remain concepts, not products).
- **In scope:** `RoboticsInterfaceDiagram` + CSS; D-0192 + AGENTS / IA brief pointer; type-check; commit/push; production deploy; Russian brief for owner.
- **Out of scope:** Regenerating asset photography; inventing products/fleets/metrics; neon excess; Labs diagram redesign; CMS; copy invention beyond title hierarchy (existing localized strings).
- **Implications:** Diagram thumbs read clearly when small; section title hierarchy leads with SAVEN Robotics Interface; visual polish stays within approved experience grammar.

### D-0193 — Robotics Interface diagram large SVG device illustrations

- **Date:** 2026-07-27
- **Status:** Active
- **Decision:** Owner rejects photoreal circular device thumbs as not acceptable (“картинки не годятся”) and requires the diagram to be **much clearer / more visual (наглядней)**. **Remove** small photo thumbnails as the primary device representation. Replace with **large, high-contrast custom SVG illustrations** of each device class (manipulator arm, mobile robot, trolley robot, assistive robot, sensors) — bold shapes, distinct per-device colors, readable labels under each node. Keep the real SAVEN brand mark at center (crisp and prominent). Retain large **“SAVEN Robotics Interface”** title and modern navy/gold section treatment from D-0192. Enlarge canvas; strengthen color-coded connection lines so the hub story is instantly understandable. Preserve motion / `prefers-reduced-motion` from D-0190. Architecture framing unchanged (**In Development**; device classes remain concepts, not products). Supersedes D-0191/D-0192 photo-thumb approach for device nodes.
- **In scope:** `RoboticsInterfaceDiagram` + CSS; remove unused diagram WebP thumbs under `public/domain/systems/diagram/`; D-0193 + AGENTS / IA brief pointer; type-check; commit/push; production deploy; Russian brief for owner.
- **Out of scope:** Reintroducing photo circles; inventing products/fleets/metrics; neon excess; Labs diagram redesign; CMS; inventing new marketing copy.
- **Implications:** Device nodes are diagrammatic and obvious at a glance; photography is no longer used for Robotics Interface hub device icons.

### D-0194 — Gap backlog execution pass

- **Date:** 2026-07-27
- **Status:** Active
- **Decision:** Owner authorizes executing the site gap-analysis backlog in priority order (agent brief / canvas `site-gap-analysis`), shipping everything agents can do **without** inventing company facts, final legal/medical text, social profile URLs, Operational claims, analytics, or investor portal. One decision covers the full pass.
- **Shipped in this pass:**
  1. **D-DOC** — `SITE_ASSIGNMENT.md` as-built sync (Labs / Interface / Media / Architecture footer / Contact / Systems header / Roadmap).
  2. **Legal trust UX** — stronger draft banners; Cookie Preferences clearly “no live CMP / not active consent UI”.
  3. **Admin durable readiness** — optional **Vercel Blob** (`BLOB_READ_WRITE_TOKEN`) with graceful local-FS / honest-unavailable fallback; docs + env documented.
  4. **S-1** — Systems hub naming bridge: Robotics Layer ≠ SAVEN Robotics Interface; Interface on Systems paths.
  5. **N-1** — Systems added to primary header (≤7 hubs; Purpose remains via footer Mission).
  6. **H-2** — Home Flagship Gateway after care carousel (Lab / Interface / Future Lab / Investors; honest statuses).
  7. **R-1** — Public `/roadmap/` Direction page (Research / Architecture / In Development horizons; not a guarantee; no fake years).
  8. **C-1** — `/company/` registry hrefs → `/foundation/`; `/company/about/` redirect; Foundation sequence remains on `/foundation/`.
  9. **SO-1** — Public footer social icons **hidden** until `NEXT_PUBLIC_SOCIAL_*` configured.
  10. **I-1** — `/investors/contact/` thin CTA to Contact / mailto.
  11. **TR-1** — `/resources/report-a-security-issue/` → `info@savencore.com` pattern.
  12. **RE-1** — `/research/areas/` + `/research/notes/` honest leaves (no fake publications list).
  13. **AP-1** — Applications human-care-first order confirmed; future-extension copy clarified.
  14. **CT-1** — Contact form: SMTP send when configured, else mailto fallback + honest UX (same inbox).
  15. **L10N-1** — `%2F` artifacts fixed; FR legal dictionary regenerated (quality pass).
  16. **SEC/SEO/AN** — CSP left pragmatic (safe); GA not enabled; Search Console documented as owner ops.
- **Out of scope / blocked for owner:** Final counsel legal text; inventing social URLs / metrics / Operational / Inc. / leadership bios; investor portal; fake analytics dashboards; Knowledge Passport in first viewport; roadmap baseline year / dated entries; full admin DB for non-media stores.
- **Implications:** Agents treat this entry as authorization for the listed ships. Do not present draft legal as effective law. Do not claim Blob or SMTP persistence/delivery without the env tokens configured. Append further work as new D-IDs.

### D-0195 — YouTube social live (owner URL)

- **Date:** 2026-07-27
- **Status:** Active
- **Decision:** Owner supplies `https://youtu.be/0C1Sk_RAnSw` as the YouTube social destination (“ссылка на Youtube channel”) and requires the footer YouTube icon to be **visible and clickable**. Commit this URL as the site default in `src/config/social.ts` so production works without waiting for a Vercel env var; `NEXT_PUBLIC_SOCIAL_YOUTUBE` remains an override. Other social networks stay unset and **hidden** (SO-1 / D-0194) — do not invent Facebook/X/LinkedIn/Instagram. Link opens in a new tab with `rel="noopener noreferrer"` and aria-label YouTube.
- **URL note:** The supplied value is a **youtu.be video shortlink** (`youtu.be/VIDEO_ID`), not a typical `/channel/…` or `/@handle` channel URL. Use exactly the owner-given URL; do not “correct” it to a channel page without a further owner decision.
- **In scope:** `src/config/social.ts` defaults; `.env.example` / local `.env.local` documentation; email template social helper alignment; D-0195 + brief AGENTS/ADMIN/VERCEL doc pointers; type-check; commit/push; production deploy; Russian brief for owner.
- **Out of scope:** Inventing other social URLs; changing SO-1 hide-when-unset behavior for unset networks; claiming the shortlink is a verified channel page; analytics.
- **Implications:** Partially resolves “Official social account URLs” pending item for **YouTube only**. Facebook / X / LinkedIn / Instagram remain owner-pending.

### D-0196 — X (Twitter) social live (owner URL)

- **Date:** 2026-07-27
- **Status:** Active
- **Decision:** Owner supplies `https://x.com/SAVENcore` as the X (Twitter) social destination and requires the footer X icon to be **visible and clickable**. Commit this URL as the site default in `src/config/social.ts` so production works without waiting for a Vercel env var; `NEXT_PUBLIC_SOCIAL_X` remains an override. YouTube remains live per D-0195. Other social networks stay unset and **hidden** (SO-1 / D-0194) — do not invent Facebook/LinkedIn/Instagram. Link opens in a new tab with `rel="noopener noreferrer"` and aria-label X.
- **In scope:** `src/config/social.ts` defaults; `.env.example` / local `.env.local` documentation; D-0196 + brief AGENTS/ADMIN/VERCEL doc pointers; type-check; commit/push; production deploy; Russian brief for owner.
- **Out of scope:** Inventing other social URLs; changing SO-1 hide-when-unset behavior for unset networks; analytics.
- **Implications:** Partially resolves “Official social account URLs” pending item for **YouTube + X**. Facebook / LinkedIn / Instagram remain owner-pending.

### D-0197 — Instagram social live (owner URL)

- **Date:** 2026-07-27
- **Status:** Active
- **Decision:** Owner supplies `https://www.instagram.com/savencore/` as the Instagram social destination and requires the footer Instagram icon to be **visible and clickable**. Commit this URL as the site default in `src/config/social.ts` so production works without waiting for a Vercel env var; `NEXT_PUBLIC_SOCIAL_INSTAGRAM` remains an override. YouTube remains live per D-0195; X remains live per D-0196. Other social networks stay unset and **hidden** (SO-1 / D-0194) — do not invent Facebook/LinkedIn. Link opens in a new tab with `rel="noopener noreferrer"` and aria-label Instagram.
- **In scope:** `src/config/social.ts` defaults; `.env.example` / local `.env.local` documentation; D-0197 + brief AGENTS/ADMIN/VERCEL doc pointers; type-check; commit/push; production deploy; Russian brief for owner.
- **Out of scope:** Inventing other social URLs; changing SO-1 hide-when-unset behavior for unset networks; analytics.
- **Implications:** Partially resolves “Official social account URLs” pending item for **YouTube + X + Instagram**. Facebook / LinkedIn remain owner-pending.

### D-0198 — Facebook social live (owner URL)

- **Date:** 2026-07-27
- **Status:** Active
- **Summary:** Owner Facebook profile URL committed as live footer social default.
- **Decision:** Owner supplies `https://www.facebook.com/profile.php?id=61592276954371` as the Facebook social destination and requires the footer Facebook icon to be **visible and clickable**. Commit this URL as the site default in `src/config/social.ts` so production works without waiting for a Vercel env var; `NEXT_PUBLIC_SOCIAL_FACEBOOK` remains an override. YouTube remains live per D-0195; X remains live per D-0196; Instagram remains live per D-0197. Other social networks stay unset and **hidden** (SO-1 / D-0194) — do not invent LinkedIn. Link opens in a new tab with `rel="noopener noreferrer"` and aria-label Facebook.
- **In scope:** `src/config/social.ts` defaults; `.env.example` / local `.env.local` documentation; D-0198 + brief AGENTS/ADMIN/VERCEL doc pointers; type-check; commit/push; production deploy; Russian brief for owner.
- **Out of scope:** Inventing other social URLs; changing SO-1 hide-when-unset behavior for unset networks; analytics.
- **Implications:** Partially resolves “Official social account URLs” pending item for **YouTube + X + Instagram + Facebook**. LinkedIn remains owner-pending.

### D-0199 — Footer section columns one equal desktop row

- **Date:** 2026-07-27
- **Status:** Superseded by D-0200
- **Summary:** All nine footer section columns share equal width in one desktop row.
- **Decision:** Owner requires footer section columns (Technology, Architecture, Labs, Applications, Trust, Research, Company, Resources, Legal) to be **more symmetrical** and sit in **one horizontal row** on desktop. Root cause after D-0194 Resources: the grid still used an **eight-track** layout (D-0181 / D-0188), so the ninth column wrapped alone. Update `.site-footer__grid` to **nine equal `minmax(0, 1fr)` tracks** at ≥1200px; mid widths use a balanced **3×3** wrap; narrow screens keep the existing accordion. Align section titles on a shared baseline band; keep socials bottom row, Legal More, Home Application naming, and live socials (FB/YT/X/IG) unchanged. Straight corners / brand grammar retained.
- **In scope:** `site-shell.css` footer grid/title polish; D-0199 + brief AGENTS / SITE_ASSIGNMENT pointers; type-check; commit/push; production deploy; Russian brief for owner; smoke www footer.
- **Out of scope:** Changing footer link inventory, i18n copy, social URLs, Legal More hub, navigation taxonomy, or inventing columns/pages.
- **Implications:** Supersedes the eight-track desktop footer grid note from D-0181 / D-0188 for column count only; equal-weight and socials-under-grid rules from D-0181 remain. **Layout superseded by D-0200** (owner: one row too dense).

### D-0200 — Footer two-row columns with visual separations

- **Date:** 2026-07-27
- **Status:** Superseded by D-0205
- **Summary:** Footer section columns use two balanced desktop rows with hairline separations and more breathing room.
- **Decision:** Owner feedback: footer texts look bad with too much copy side-by-side — **split into two rows** and add **visual separations**. Revert/replace the cramped nine-column single row (D-0199). Desktop (≥1100px): **two rows** — primary **5** equal tracks (Technology, Architecture, Labs, Applications, Trust) + secondary **4** equal tracks (Research, Company, Resources, Legal); clear horizontal gap and a restrained gold/navy hairline between rows; subtle column hairlines within each row; improved list gap / line-height. Mid widths (≥900px): same two-row bands with cleaner wrap (3 + 2 / 2 + 2). Narrow screens keep accordion. Do not change socials bottom bar, Legal More, live socials (FB/YT/X/IG), Home Application naming, or link inventory. Straight corners / brand grammar retained — no neon.
- **In scope:** `SiteFooter.tsx` row split; `site-shell.css` footer grid/divider/spacing polish; D-0200 + AGENTS / SITE_ASSIGNMENT / IA pointers; type-check; commit/push; production deploy; Russian brief for owner; smoke www footer.
- **Out of scope:** Changing footer link inventory, i18n copy, social URLs, Legal More hub, navigation taxonomy, or inventing columns/pages.
- **Implications:** Supersedes D-0199 one-row desktop layout. Equal-weight section columns within each row and socials-under-grid rules from D-0181 remain. **Layout superseded by D-0205** (Apple-style five columns with stacked section groups).

### D-0201 — Media download (mobile + desktop) + Vercel Blob deploy readiness

- **Date:** 2026-07-27
- **Status:** Active
- **Summary:** Same-origin attachment download routes for public + admin Media; Blob uploads stream correctly; Vercel deploy docs clarify durable media env.
- **Decision:** Owner requires fixing **download for mobile and desktop** (public Media + Admin Media View/Download/Copy) and preparing a solid **Vercel deploy** path for media persistence. Root causes: (1) HTML `download` attribute is unreliable on mobile Safari and ignored cross-origin; (2) public `/api/media/[id]/` always used `Content-Disposition: inline`; (3) Vercel Blob uploads stored a CDN `externalUrl` and were treated as external links, so `readMediaFile` returned null and clients opened the CDN URL (CSP / Save As broken). Authorize: same-origin `/api/media/download/[id]/` (public) and `/api/admin/media/download/[id]/` (viewer+); stream hosted files (seed + FS + Blob) with `Content-Disposition: attachment` + correct MIME; keep preview/view inline; external links open only (no force-download); distinguish hosted uploads from link rows; document `BLOB_READ_WRITE_TOKEN` as required for durable Media on Vercel; confirm build; commit/push for production deploy.
- **In scope:** media store/blob read path; public + admin download API routes; MediaPage + MediaLibraryClient download UX; `docs/VERCEL_DEPLOY.md` / `ADMIN_PLATFORM.md` / `.env.example` / `vercel.json`; D-0201 + AGENTS pointer; type-check + build; commit/push; Russian owner report.
- **Out of scope:** Inventing media content; raising Vercel body limit beyond platform defaults; full CMS/DB; changing auth model; inventing social URLs.
- **Implications:** Extends D-0194 Blob path. Owner must set `BLOB_READ_WRITE_TOKEN` on Vercel for durable uploads after deploy.

### D-0202 — Public FAQ page (accordion, governance-safe)

- **Date:** 2026-07-27
- **Status:** Active
- **Summary:** Full public FAQ at `/faq/` with thematic accordion sections; footer Resources link; sitemap; governance-safe copy grounded in Master Spec and published pages.
- **Decision:** Owner requires a **full FAQ** in the footer with many Q&As, accordion UI, site style, thematic tint per topic, and colored accents between question/answer. Route: `/[locale]/faq/`. Footer placement: **Resources** (with Report a Security Issue). Content must put all possible honest SAVEN information (purpose, foundation sequence, technology, systems/architecture, SAVEN Robotics Interface, labs, applications, trust/Responsible AI, research/roadmap, investors, media/contact/socials, locales/RTL, terminology, status language, explicit non-claims) without inventing customers, partners, metrics, Operational products, patents, team names, final legal claims, or “we create AI” (D-0174). Status vocabulary: Research / Architecture / In Development primarily. UI: accessible accordion (`button` + `aria-expanded`, multi-open + expand/collapse all), section accent colors, links to published destinations. English canonical; UI chrome in all `src/i18n/ui/*`; page dictionaries for all ten locales (Russian answers complete; other locales localize chrome/sections/questions with English answer fallback via `deepLocalize`).
- **In scope:** `src/content/faq/*`, `FaqPage` + CSS, `app/[locale]/faq/`, `published-routes`, footer Resources, `domain-visuals`, sitemap hub priority, UI navEntries, D-0202 + AGENTS / SITE_ASSIGNMENT / IA pointers; type-check; smoke `/en/faq/`; commit/push; production deploy; Russian owner brief + URL.
- **Out of scope:** Inventing facts/products/traction; final legal prose; CMS; analytics; neon; header mega-menu; inventing social URLs; Operational claims.
- **Implications:** FAQ is a Layer-2 Resources destination. Further full answer localization for non-RU locales may deepen packs without changing route or governance rules.

### D-0203 — Deep FAQ Q&A translations (10 locales) + Media download polish

- **Date:** 2026-07-28
- **Status:** Active
- **Summary:** Complete professional FAQ question **and answer** dictionaries for all ten locales; fix leftover `%2F` Sign In/Up artifacts in flagship Investors copy; polish Media download UX (Downloading state + iOS-friendly trigger) with UI chrome in all locales.
- **Decision:** Owner request «делаем глубокие переводы». EN remains canonical FAQ source (`src/content/faq/en.ts`). Non-EN locales use `deepLocalize` maps under `src/content/faq/dictionaries/*`. RU already complete (D-0202); es/de/fr/ja/zh-cn/ar/he/uk now include full answer packs (~153 previously missing keys) authored to match EN meaning without new claims. Brand/product proper names may remain Latin where EN/RU keep them. Media download continues D-0201 with clearer downloading state and Apple-touch `window.open` / `location.assign` fallback.
- **In scope:** FAQ dictionaries + `scripts/faq-i18n` answer packs; flagship `%2F` fixes; `MediaPage` / `media-urls` download polish; UI `downloading` / `actionDownloading` in all `src/i18n/ui/*`; D-0203 + AGENTS pointer; `tsc`; smoke `/ru/faq/`, `/ar/faq/`, `/ja/faq/`, `/es/faq/`; commit/push; production deploy; Russian coverage report.
- **Out of scope:** Inventing company facts; new FAQ items; final legal prose; CMS/analytics; inventing social URLs; Operational claims; regenerating unrelated legal MT packs.
- **Implications:** FAQ pages should no longer fall back to English answers on non-EN locales for published Q&A strings. Further quality edits can deepen packs without route changes.

### D-0204 — Max-size favicon / PWA / apple-touch icons from brand mark

- **Date:** 2026-07-28
- **Status:** Active
- **Summary:** Regenerate site favicons and app icons from the approved falcon mark (`public/brand/saven-logo-mark.webp`, 479×647) at the largest practical sizes; wire Next.js metadata + web manifest to prefer them.
- **Decision:** Owner request «увелич фавикон до максимального размера возможного». Do not upscale the tiny legacy 16/32 assets or the 128×128 PNG companion. Render down from the webp mark: PNG favicons 16/32/48, ICO embedding 16/32/48/64, SVG favicon pointing at `/icons/icon-512.png`, apple-touch 180×180 on navy `#0b1220`, PWA 192 + 512 (any) + 512 maskable (navy, safer padding). Open Graph `og-default` remains the share card (not a favicon substitute).
- **In scope:** `public/favicon*` + `public/icons/*`; Next.js file icons `app/icon.png` (512), `app/apple-icon.png` (180), `app/favicon.ico` (16–64); `src/lib/seo/metadata.ts` icons; `app/manifest.ts`; locale layout apple-touch sizes; SW shell icon; media seed favicon path; D-0204 + AGENTS pointer; type-check; commit/push; production deploy; smoke icon URLs on www; Russian owner brief (sizes + hard-refresh tip).
- **Out of scope:** Inventing a vector falcon; changing OG share art; inventing brand colors beyond `#0b1220`; CMS; analytics.
- **Implications:** Browsers cache favicons aggressively — owners may need a hard refresh / clear site data to see the new tab icon immediately.

### D-0205 — Apple-style footer columns + max-fill favicon

- **Date:** 2026-07-28
- **Status:** Active
- **Summary:** Compact footer modeled on apple.com density (SAVEN brand tokens): one desktop row of **five equal columns**, with existing section groups **stacked vertically inside columns**; regenerate favicons with larger falcon mark fill.
- **Decision:** Owner requires (1) footer more compact / Apple-like — not nine cramped tracks (D-0199) and not two dense rows (D-0200); (2) favicon mark even larger in the 512 canvas (less padding). Column mapping: (1) Technology + Architecture; (2) Labs + Applications; (3) Trust + Research; (4) Company + Resources; (5) Legal. Within each column: bold section title + compact link list, then the next stacked group. Thin hairline dividers use existing footer tokens (light + dark). Bottom band keeps copyright, Install/Sign In, language/theme; social row keeps live FB/YT/X/IG; Legal More unchanged. Mobile keeps accordion collapse. Favicon: same size ladder as D-0204 but ~3.5–5% padding on any-purpose icons (~93% height fill); apple-touch ~6%; maskable ~12% safer pad. No new routes or invented pages.
- **In scope:** `SiteFooter.tsx` column map; `site-shell.css` compact footer grid/type; regenerate `public/favicon*` + `public/icons/*` + `app/icon.png` / `apple-icon.png` / `favicon.ico`; SW cache bump; D-0205 + AGENTS / SITE_ASSIGNMENT / IA pointers; type-check; commit/push; production deploy; Russian owner brief (column map + hard-refresh tip).
- **Out of scope:** Changing footer link inventory, inventing social URLs, Legal More hub changes, Home Application rename, inventing pages, neon/glow, Apple brand colors/copy.
- **Implications:** Supersedes D-0199 / D-0200 footer layout. Favicon cache still aggressive — hard refresh / clear site data may be required.

### D-0206 — Footer stacked-section spacing + slightly smaller type

- **Date:** 2026-07-28
- **Status:** Active
- **Summary:** Keep Apple-style five-column footer (D-0205); increase vertical air between stacked section groups within columns; slightly reduce title/link font size; ensure desktop stays one row of five columns earlier.
- **Decision:** Owner requires (1) **more spacing** between stacked category blocks inside footer columns; (2) desktop remains **one row** of five equal columns; (3) **slightly smaller** fonts for section titles and links (still readable). Fix undefined spacing tokens (`--space-28` / `--space-20`) that prevented column gap from applying; use defined scale (`--space-48` between stacked groups). Lower five-column breakpoint from 900px → **800px** so the single row appears earlier. Mobile accordion, social row, and legal/utilities bottom bar unchanged. No link inventory, social URL, or IA changes.
- **In scope:** `site-shell.css` footer grid/type; D-0206 + AGENTS / SITE_ASSIGNMENT / IA pointers; type-check; commit/push; production deploy; local smoke; Russian owner brief.
- **Out of scope:** Changing footer link inventory, inventing social URLs, Legal More hub, navigation taxonomy, inventing pages, neon/glow.
- **Implications:** Refines D-0205 spacing/type only; five-column Apple map and column pairing remain.

### D-0207 — Off-white / soft gray-blue theme + footer one-row earlier

- **Date:** 2026-07-28
- **Status:** Active
- **Summary:** Escape generic AI-template page chrome: light theme uses cool **off-white** (not pure `#fff`); dark theme and atmospheric fields use **soft charcoal gray-blue** (not deep template navy `#0b1220`); keep Apple-style five-column footer in **one horizontal row** from typical laptop widths (≥720px).
- **Decision:** Owner requires (1) desktop footer remains a single row of five equal columns (D-0205 map), compact with good gaps — lower breakpoint 800px → **720px** and sync accordion `matchMedia` to `max-width: 719px`; (2) light page/body/main/surface chrome → Apple-adjacent off-white family (`#f5f5f7` background, `#fafafb` surface, `#eeeff2` muted) — avoid pure white as default page bg; (3) dark backgrounds and atmospheric hero/masthead fields → muted soft gray-blue (`#1c1f26` field / dark bg, `#252830` elevated, `#2a2e38` mid) instead of `#0b1220` / similar navy freezes; migrate hardcoded fills to `--color-*` / `--color-field*` tokens across home, hubs, experience chrome, media, admin, email brand navy, theme-color meta; keep gold accents, straight corners, brand lockup; no neon; preserve WCAG-ish text contrast (ink `#1a1d24` on off-white). Socials/legal bottom bar and stacked section groups within columns unchanged.
- **In scope:** `app/globals.css` tokens; `src/design/tokens.ts`; `src/config/site.ts` theme colors; footer CSS/JS breakpoint; CSS migrations for hardcoded `#fff` / `#0b1220` backgrounds; D-0207 + AGENTS / SITE_ASSIGNMENT / IA pointers; type-check; local smoke; commit/push; production deploy; Russian owner brief (token values + footer note).
- **Out of scope:** Changing footer link inventory, inventing social URLs, navigation taxonomy, inventing pages, neon/glow, rewriting diagram stroke color-mix endpoints that use `#fff` only as a lighten mix (not page chrome).
- **Implications:** Light and dark theme toggles both read intentional (off-white paper / soft charcoal field). Prior navy `#0b1220` remains only where unused; atmospheric bands share `--color-field` in both themes. Light off-white values deepened further by **D-0208**, then again by **D-0211** (`#e6e6e9` / `#eeeeef`).

### D-0208 — Footer socials/bar, care carousel, direction table, chrome polish

- **Date:** 2026-07-28
- **Status:** Active
- **Summary:** Owner multi-request polish pass: colored lively footer socials; smaller footer bottom bar with `Copyright © 2026 SAVEN CORE. All rights reserved.` via BrandName; Care carousel click raises the scene + published Application links under thumbs; direction flagships as a readable zebra table (eng-tables match); force five footer columns one row + compressed link spacing + footer-only “Robotics Interface” label; deepen light off-white (`#f0f0f2` / `#f6f6f8`); maximize favicon mark fill (`?v=208`); header hubs stay one row on language switch; sitewide nav/link hover colors reliable on Windows Chrome.
- **Decision:** Implement A–I as authorized owner polish without inventing routes, neon, or legal prose. Keep D-0205 column map; compress Architecture stack so it does not read as a second footer row; social brand tints tasteful (FB blue, YT red, X ink/paper, IG gradient); hover uses explicit `:hover` / `:focus-visible` accent colors without `@media (hover: hover)` gating; `prefers-reduced-motion` may zero duration but must not remove color hover.
- **In scope:** `site-shell.css`, `FooterSocials` styles, `SiteFooter` bar, `LivingDomains` + home CSS/content, flagship table + eng-table polish, theme tokens/globals/site theme-color, favicon regeneration + cache bust, nav label shortenings where needed, D-0208 + AGENTS / SITE_ASSIGNMENT / IA pointers; type-check; commit/push; production deploy; restart local `:3000`; Russian A–I brief.
- **Out of scope:** Inventing pages/routes/socials, neon/glow, binding legal, CMS/analytics, LinkedIn (still hidden).
- **Implications:** Supersedes D-0205 favicon fill ratio and D-0207 light off-white values for page chrome; footer Architecture remains stacked under Technology within column 1.


### D-0209 — Footer one forced row (9 equal columns) + care stage Application CTAs

- **Date:** 2026-07-28
- **Status:** Active
- **Summary:** Owner incomplete-work pass: force every footer **section** into a **single horizontal desktop row** (Technology · Architecture · Labs · Applications · Trust · Research · Company · Resources · Legal as nine equal `minmax(0, 1fr)` columns — Architecture is its own column, never stacked under Technology); compress type/gaps and shorten a few footer-only labels so content wraps **inside** columns only. Care living carousel gains matching published Application links **on the large featured/fullscreen stage** (not only under thumbnails), with contrast scrim CTA in SAVEN grammar. Routes unchanged (healthcare / home / hospitals / emergency per scene map).
- **Decision:** Supersede D-0205–D-0208 stacked five-column footer map for desktop layout. Accordion remains below 860px. Stage CTAs reuse the D-0208 scene→Applications route map; no invented routes.
- **In scope:** `SiteFooter.tsx`, `site-shell.css`, `LivingDomains.tsx`, `physical-world-home.css`, footer label shortenings in nav + i18n, D-0209 + AGENTS / SITE_ASSIGNMENT / IA pointers; type-check; local `:3000` smoke; commit/push; production deploy; Russian owner brief.
- **Out of scope:** Inventing pages/routes/socials, neon/glow, binding legal, LinkedIn, changing Application leaf inventory.
- **Implications:** Desktop footer is nine equal tracks in one CSS grid row. Care stage CTAs are visible on the big image; rail links remain.

### D-0210 — Footer language switcher hover color

- **Date:** 2026-07-28
- **Status:** Active
- **Summary:** Owner bug: footer language control did not change color on hover. Root cause: `.site-footer__utilities .language-selector__summary` set soft ink later with equal specificity, so the shared `:hover` accent rule never won. Fix matches D-0208 Windows Chrome pattern — explicit `summary.language-selector__summary:hover` / `:focus-visible` (and locale-code child) with higher-specificity footer utilities rules using `--color-accent-strong`; same for option rows; footer theme toggle hover border uses accent for bar consistency. Light + dark footer tokens already remap accent gold.
- **Decision:** Repair hover/focus-visible color only; no IA, copy, or navigation changes. Do not gate on `@media (hover: hover)`.
- **In scope:** `site-shell.css`, `experience.css` (header dark summary/code parity), D-0210 + AGENTS / SITE_ASSIGNMENT / IA pointers; type-check; local smoke; commit/push; production deploy; Russian brief.
- **Out of scope:** Inventing pages/routes/socials, neon/glow, binding legal, changing language inventory.
- **Implications:** Footer language (and nearby theme) chrome hover is reliable on Windows Chrome and touch-hybrid browsers.

### D-0211 — Deeper off-white, navy-tile favicon, footer Get in touch + medical disclaimer, FAQ care Q&As

- **Date:** 2026-07-28
- **Status:** Active
- **Summary:** Owner polish: deeper light off-white page chrome; bold navy-tile favicon for readable tabs; larger footer link type + wider nine-column gaps (one row kept); compact footer Get in touch form (SMTP↔mailto like Contact); protective medical disclaimer on footer + all legal pages; expanded Medical Disclaimer draft + matching FAQ Trust Q&As — all locales.
- **Decision:** (1) Light theme backgrounds deepen beyond D-0208 to `#e6e6e9` / `#eeeeef` / muted `#dcdce0` (still cool off-white, not warm cream). (2) Favicons regenerate as solid navy `#0b1220` square badges with trimmed, large-fill falcon mark (`?v=211`; maskable retains safer pad). (3) Footer page-name links slightly larger; column-gap widened; nine equal columns remain one horizontal desktop row (≥860px). (4) Compact footer form: name / email / message → `info@savencore.com` via same SMTP↔mailto pattern as Contact. (5) Protective medical disclaimer (no diagnosis; support doctors/medical workers/people; no prescribe/sell medicines; not emergency care; informational only) on footer strip + every legal page masthead; expand `/legal/medical-disclaimer/` sections accordingly (still draft-framed). (6) FAQ Trust section gains matching care/medical Q&As; translate UI + legal/FAQ dictionaries for all 10 locales. No Operational medical claims; no inventing clinical products.
- **In scope:** Theme tokens/globals/site theme-color; favicon/PWA/SW cache; footer CSS + `FooterContactForm` + `MedicalDisclaimerNotice`; legal pages/index + medical-disclaimer content; FAQ en + locale dicts; UI chrome i18n; D-0211 + AGENTS / SITE_ASSIGNMENT / IA pointers; type-check; commit/push; production deploy; local `:3000`; Russian owner brief.
- **Out of scope:** Binding legal counsel text, inventing social URLs/routes, neon/glow, CMS/analytics/CMP, LinkedIn, Operational product claims.
- **Implications:** Supersedes D-0208 light off-white values and favicon fill approach for tab visibility (navy badge). Medical disclaimer remains protective draft language aligned with Master Spec claim prohibitions. Footer Get in touch form removed by **D-0212** (Contact page retains the form).

### D-0212 — Footer: remove Get in touch; disclaimer under socials; denser links; slogan lockup

- **Date:** 2026-07-28
- **Status:** Active
- **Summary:** Owner footer polish: remove Get in touch form from the footer (Contact page only); place medical disclaimer between social icons and the copyright/utilities bar; further compress vertical rhythm of footer page-link lists; restyle the three-line footer slogan as a memorable navy/gold typographic lockup (straight corners, no neon).
- **Decision:** (1) Delete footer contact UI + `FooterContactForm` + `footerContact` i18n; Contact `/contact/` SMTP↔mailto unchanged. (2) Bottom order: socials → medical disclaimer → copyright bar. (3) Tighter list `gap` / link `line-height` / title margins; nine equal desktop columns remain one row. (4) Slogan lines render as stacked `.site-footer__tagline-line` with gold markers and weight hierarchy; existing locale strings keep `\n` separation. Colorful social hover (D-0208) preserved.
- **In scope:** `SiteFooter.tsx`, `site-shell.css`, layout smtp prop cleanup, delete `FooterContactForm.tsx`, UI i18n `footerContact` removal, D-0212 + AGENTS / SITE_ASSIGNMENT / IA pointers; type-check; local `:3000`; commit/push; production deploy; Russian owner brief.
- **Out of scope:** Inventing pages/routes/socials, neon/glow, binding legal, changing Contact form behavior, LinkedIn, column inventory.
- **Implications:** Footer no longer duplicates Contact acquisition; disclaimer reads after socials as a quieter protective note before copyright.

### D-0213 — Admin theme/logo/accents; footer Install app in Resources column

- **Date:** 2026-07-28
- **Status:** Active
- **Summary:** Owner polish: Admin Platform follows public site light/dark (`html[data-theme]` / shared theme tokens + ThemeSwitch in admin chrome); SAVEN logo mark before Admin Platform / brand heading; richer navy/gold/off-white/soft gray-blue accents (straight corners, no neon); move **Install app** out of the tiny bottom utilities bar into the main footer link grid under **Resources**, with smaller type; PWA behavior unchanged.
- **Decision:** (1) Wire admin shell CSS to site globals (`--color-background` / surface / ink / accent / field); keep atmospheric navy sidebar; add ThemeSwitch in admin nav footer so theme can change while site header/footer are hidden. (2) Brand heading: `/brand/saven-logo-mark.webp` before SAVEN CORE + eyebrow + Admin title. (3) Enrich cards, active nav, notes, primary buttons with gold/navy/soft-blue hierarchy. (4) Relocate Install app into Resources column; smaller font than page links; Sign In / Admin remain in bottom bar. RBAC unchanged.
- **In scope:** `AdminShell`, `admin.css`, `ThemeSwitch` placement, `SiteFooter`, `InstallAppControl`, `site-shell.css`, D-0213 + AGENTS / SITE_ASSIGNMENT / IA / ADMIN_PLATFORM pointers; type-check; local `:3000`; commit/push; production deploy; Russian owner brief.
- **Out of scope:** Inventing pages/routes/socials, neon/glow, binding legal, changing admin RBAC/permissions, LinkedIn, CMS/analytics.
- **Implications:** Admin chrome matches public theme flip; Install app reads with Layer-2 Resources rather than the copyright utilities strip.

### D-0214 — Email chrome restyle to site tokens; remove footer social icons

- **Date:** 2026-07-28
- **Status:** Active
- **Summary:** Owner requires mailing / email templates without social network icons and closer to current public site style (off-white / soft gray-blue, navy/gold BrandName lockup, falcon mark, straight corners, tagline, no neon).
- **Decision:** (1) Remove the LinkedIn / YouTube / Email icon row from shared email footer chrome (D-0180 layout in `brand.ts`); public-site footer socials remain unchanged. (2) Restyle shared wrap to D-0207/D-0211 tokens: page `#e6e6e9`, surface `#eeeeef`, soft charcoal header `#1c1f26`, gold `#d4a84b` accent rules, soft gray-blue quote band (not warm cream), refined pillars / contact / lockup / typography. Keep falcon PNG mark, tagline, `info@savencore.com`, `www.savencore.com`, © 2026, honest Master Spec pillars/quote, absolute asset URLs + admin preview rewrite. No invented claims.
- **In scope:** `src/content/admin/email-templates/brand.ts`; `docs/ADMIN_PLATFORM.md`; D-0214 + AGENTS phase pointer; type-check; commit/push; production deploy; Russian owner brief.
- **Out of scope:** Changing per-template body copy beyond chrome; inventing social/product claims; neon/glow; CMS; public footer social behavior.
- **Implications:** Supersedes D-0180 footer social-icon row for email only. All Admin Templates / Mailings that use `wrapEmailHtml` pick up the new chrome automatically.

### D-0215 — Future Lab beyond classic R&D; visual lab page; Install app link size

- **Date:** 2026-07-28
- **Status:** Active
- **Summary:** Owner requires Internal Future Lab to explain beautifully that the name **replaces an outdated understanding of classic R&D** (SAVEN believes siloed research-and-development framing is not enough for continuous embodied inquiry); same explanation in FAQ; richer lab-spirit visuals from approved `public/` assets; footer **Install app** same type size as other Resources column links (supersedes D-0213 smaller Install type).
- **Decision:**
  1. **Naming:** Future Lab is a deliberate new name for SAVEN Core’s research environment — broader continuous inquiry than classic R&D; human care remains primary; public status **Research** (not Operational).
  2. **Page:** Enrich `/labs/internal-future-lab/` with R&D naming section, icon highlights, four visual scenes, and masthead collage from approved labs/technology WebPs; straight corners; navy/gold/off-white; no neon; no invented metrics/customers.
  3. **FAQ:** Update “What is Internal Future Lab?” and add “Why Future Lab instead of R&D?”; localize across all FAQ locale dictionaries.
  4. **Footer:** Install app control uses the same font-size (and soft ink) as `.site-footer__link` (0.6875rem / 0.75rem ≥860px).
- **In scope:** Future Lab flagship EN + dictionaries; labs scenes; hub collage; HubReadablePage rich-scene layout CSS; FAQ EN + dictionaries; `site-shell.css` Install size; SITE_ASSIGNMENT §5.0.3 / IA naming pointers; D-0215 + AGENTS; type-check; smoke; commit/push; production deploy; Russian owner brief + URLs.
- **Out of scope:** Inventing photography beyond repo; Operational claims; neon; LinkedIn; CMS/analytics; changing Robotics Lab scopes.
- **Implications:** Partially supersedes D-0213 Install “smaller than page links.” Clarifies D-0131 Future Lab naming for public visitors. As-built code landed in the same production push wave as D-0216 (shared commit bundle); this entry is the governing decision ID.

### D-0216 — Explore SAVEN closing band + legal interim policy pass

- **Date:** 2026-07-28
- **Status:** Active
- **Summary:** Owner wants the homepage dark SAVEN closing graphic (Support · Action · Verification · Environment · Network) to be useful — clickable pillars plus one unique interactive feature — and legal pages without the scary structural-DRAFT banner, upgraded toward coherent public interim policies (still no invented entity/registration/DPO/GDPR-certified claims; counsel review recommended for regulated jurisdictions).
- **Decision:**
  1. **Explore SAVEN interactive map** on the home closing band: five pillar hotspots + keyboard-accessible rail; hover/focus reveals one-line meaning + Go deeper CTA; click navigates to published routes only — Support → `/purpose/`; Action → `/systems/saven-robotics-interface/`; Verification → `/trust/human-oversight/`; Environment → `/applications/`; Network → `/systems/`. Brand grammar retained (navy/gold on dark art; no neon). UI strings in all 10 home locales.
  2. **Legal:** Owner authorizes removing the structural-DRAFT banner sitewide. Replace with a short honest notice (“These pages describe SAVEN Core information practices and terms of site use. For questions: info@savencore.com.”) and upgrade Legal page bodies to owner-authorized **interim site policies** (privacy, terms, cookies, accessibility, security, IP, rights, medical/research disclaimers aligned with existing Medical Disclaimer). Cookie Preferences stays honest: **no live CMP** — browser settings + contact. FAQ legal Q&As updated accordingly. Formal entity name, governing law venue, and jurisdiction-specific counsel packs remain open.
- **In scope:** `ClosingExploreMap` + home closing CSS/content; legal `pages.ts` / types / Legal pages chrome; FAQ EN + locale dicts (merge carefully with Future Lab FAQ WIP); UI legal chrome i18n; D-0216 + AGENTS / SITE_ASSIGNMENT / IA pointers; type-check; commit/push; production deploy; Russian owner brief with link map.
- **Out of scope:** Inventing registration/DPO/certifications; live CMP/analytics; Knowledge Passport in first viewport; neon; clobbering Future Lab Install/content WIP beyond FAQ merge.
- **Implications:** Partially supersedes D-0154 “draft-only banner” presentation for public Legal pages — interim policies stand as owner-authorized site policies; counsel review still recommended before regulated claims. Closing band becomes a navigational Explore map rather than a static image alone.

### D-0217 — Closing band SAVEN glow + upper corner nav

- **Date:** 2026-07-28
- **Status:** Active
- **Summary:** Owner wants the dark SAVEN closing graphic’s empty upper corners used for quiet navigation, and the baked-in **SAVEN** wordmark to glow tastefully on hover/focus (explicit glow exception for this element only).
- **Decision:**
  1. **Wordmark glow (owner-authorized):** Soft gold/blue brand glow on hover/focus of the SAVEN letters via CSS `text-shadow` + radial wash over the wordmark hotspot. Not neon spam. `prefers-reduced-motion`: color/brightness shift only, no expansive pulse.
  2. **Upper corner links (published routes only):**
     - **Left:** Purpose → `/purpose/` · Labs → `/labs/`
     - **Right:** Trust → `/trust/` · Contact → `/contact/`
     - Rationale: balanced pair — mission + where work is built (left) vs assurance + authorized reach channel (right). Complements pillar Explore map (D-0216) without covering falcon / SAVEN / pillars. Quiet small-caps labels that brighten on hover.
  3. Pillar interactivity from D-0216 retained.
- **In scope:** `ClosingExploreMap` + closing CSS; home physical-world types + all 10 locales; D-0217 + AGENTS / SITE_ASSIGNMENT / IA pointers; type-check; commit/push; production deploy; Russian owner brief.
- **Out of scope:** Neon elsewhere; inventing routes; changing pillar destinations; legal/CMP changes.
- **Implications:** Narrow exception to the “no glow” rule for this closing wordmark only. Corner nav is secondary to Explore pillars.

### D-0218 — Closing band denser upper nav + ~2× SAVEN glow

- **Date:** 2026-07-28
- **Status:** Active
- **Summary:** Owner wants a stronger (~2× radius) SAVEN wordmark glow, denser published-route clusters in the dark upper corners (beyond Purpose · Labs | Trust · Contact), and livelier Windows-friendly `:hover` affordance on those links — without covering falcon / SAVEN / Explore pillars or adding neon spam elsewhere.
- **Decision:**
  1. **Wordmark glow ~2×:** Double text-shadow blur radii and enlarge the soft gold/blue radial wash on hover/focus (still brand soft glow only; `prefers-reduced-motion` keeps color/brightness without scale pulse).
  2. **Dense upper-corner clusters (published routes only):**
     - **Left:** Purpose · Labs · Human Data Model · Robotics · Automation · Interoperability
     - **Right:** Knowledge Engine · Robotics Layer · Robotics Interface · Internal Future Lab · Trust · Contact · FAQ
     - Routes: `/purpose/`, `/labs/`, `/technology/human-data-model/`, `/technology/robotics/`, `/technology/automation/`, `/technology/interoperability/`, `/systems/knowledge-engine/`, `/systems/robotics-layer/`, `/systems/saven-robotics-interface/`, `/labs/internal-future-lab/`, `/trust/`, `/contact/`, `/faq/`.
  3. **Lively link hover:** Explicit `:hover` / `:focus-visible` color lift, soft gold underline, slight scale + brand glow (Windows Chrome-safe); no transform under reduced motion.
  4. Pillar Explore map (D-0216) unchanged.
- **In scope:** Closing CSS + `ClosingExploreMap` content (all 10 home locales); D-0218 + AGENTS / SITE_ASSIGNMENT / IA pointers; type-check; commit/push; production deploy; Russian owner brief.
- **Out of scope:** Neon elsewhere; inventing routes; changing pillar destinations; legal/CMP changes.
- **Implications:** D-0217 corner pair expands to denser clusters; glow exception remains limited to this closing wordmark.

### D-0219 — Homepage clarity pack (reversible)

- **Date:** 2026-07-28
- **Status:** Active
- **Summary:** Owner approved implementing all prior homepage clarity advisory items so visitors answer “what is SAVEN?” within the first seconds — with an explicit revert path.
- **Decision:**
  1. Ship a gated **Home Clarity Pack** (`HomeClarityPack` + `src/config/home-clarity.ts`) on Physical World home:
     - **What is SAVEN** — 1–2 definition sentences (systems linking human understanding ↔ robots/devices under human control; AI as tool; uses/advances, does not create — aligns D-0174).
     - **3-step clickable chain** — Human understanding → SAVEN → physical assistance (Purpose · Robotics Interface · Applications).
     - **Compact Explore SAVEN** strip (Support · Action · Verification · Environment · Network) early on the page; **keep** the rich closing Explore band (D-0216–D-0218).
     - **Audience fork** — Care/Purpose/Applications · Technology/Labs/Interface/Systems · Investors.
     - **Care carousel** stage — stronger “Why this is SAVEN” one-liner + existing Application CTA.
     - **What we are not** — three short points (not creating AI as purpose; not diagnosing; not prescribing/selling medicines — aligns medical disclaimer / D-0174 / D-0211).
  2. **Default ON.** Revert without deleting code:
     - Set `HOME_CLARITY_V1_DEFAULT = false` in `src/config/home-clarity.ts`, **or**
     - Set env `NEXT_PUBLIC_HOME_CLARITY_V1=false` and rebuild/redeploy.
     - When false, home renders the pre-D-0219 structure (hero → living carousel → flagships → closing).
  3. Full removal later: delete `HomeClarityPack`, ungated clarity usage in `PhysicalWorldHome` / `LivingDomains`, clarity CSS, optional `clarity` / `why*` content fields, and this config; commit note referencing D-0219.
  4. English canonical; all 10 physical-world home locales translated. No Knowledge Passport in first viewport; no Operational / customer invention; straight corners; brand tokens.
- **In scope:** Config flag; `HomeClarityPack`; home CSS; living stage why-line; content types + 10 locales; D-0219 + AGENTS / SITE_ASSIGNMENT / IA pointers; type-check; commit/push; Vercel prod; local `:3000` restart; Russian owner brief + revert instructions.
- **Out of scope:** Changing closing Explore map behavior; inventing routes; legal pack rewrite; analytics/CMP.
- **Implications:** Homepage gains early clarity blocks while remaining one commit/flag flip from the prior structure.

### D-0220 — Analysis backlog execution (multi-role site analysis)

- **Date:** 2026-07-28
- **Status:** Active
- **Summary:** Owner ordered implementing all possible recommendations from the multi-role site analysis (legal honesty, home density, ops docs, durable Admin beyond Media, closing corner progressive disclosure, translation QA, lightweight title search) without inventing facts. LinkedIn URL, dated Roadmap years, investor PDF, and leadership remain blocked pending owner facts.
- **Decision:**
  1. **Legal chrome honesty** — Sitewide notice and FAQ reinforce that Legal pages are **site policies / terms of use of the website**, not a complete multi-jurisdiction regulatory compliance pack. Keep medical disclaimer. Do not invent entity address, DPO, governing law, or “GDPR certified”.
  2. **Home clarity v2 density** — Keep `HOME_CLARITY_V1` (default on). Add `HOME_CLARITY_V2` (default on when V1 on): denser spacing, compact early Explore pillar row (no support line / CTAs), tighter audience cards. Revert density: `NEXT_PUBLIC_HOME_CLARITY_V2=false` or `HOME_CLARITY_V2_DEFAULT=false`. Revert full clarity: `NEXT_PUBLIC_HOME_CLARITY_V1=false` (see D-0219).
  3. **Ops docs** — Strengthen `VERCEL_DEPLOY.md` / `ADMIN_PLATFORM.md` AUTH_* / BLOB_* / SMTP_* checklists (owner pastes secrets).
  4. **Durable Admin JSON** — When `BLOB_READ_WRITE_TOKEN` is set, invitations/roles/permissions/mailings/notifications/outbox persist via Vercel Blob (`admin-store/`). Otherwise honest **local-only / not durable** banners on those Admin pages.
  5. **Closing corner nav** — Purpose / Labs / Trust / Contact stay visible; other corner links under **More links** expand/collapse.
  6. **Lightweight search** — Published-route title search at `/search/` + header/footer link; honest empty states; no CMS/full-text.
  7. **CSP** — Do not tighten script-src yet (Next.js + Auth.js breakage risk); document deferral in deploy docs.
  8. **Blocked** — LinkedIn URL; dated Roadmap; investor PDF; leadership bios — require owner-supplied facts.
- **In scope:** Legal types/UI/FAQ locales; home-clarity V2; ClosingExploreMap disclosure; json-store Blob backend; Admin banners; `/search/`; ops docs; D-0220 + AGENTS/IA/SITE_ASSIGNMENT pointers; type-check; commit/push/deploy.
- **Out of scope:** Full CMS; inventing entity/DPO/law; Operational claims; LinkedIn/leadership/roadmap dates/investor PDF without facts; nonce CSP pass.
- **Implications:** Public trust language is clearer; home is denser with two-flag revert; Admin durability matches Media when Blob is configured; search is title-only and honest.

### D-0221 — Closing corner restore + clarity visual enrichment

- **Date:** 2026-07-29
- **Status:** Active
- **Summary:** Owner feedback «не вижу изменений»: D-0220 progressive disclosure hid the dense two-sided closing corner lists behind **More links**; clarity blocks felt under-visual; Install app needed smaller footer type. Implement fully, verify local + prod HTML, redeploy.
- **Decision:**
  1. **Closing corner nav** — Restore always-visible dense left/right clusters on the dark SAVEN closing band (Purpose, Labs, Human Data Model, Robotics, Automation, Interoperability | Knowledge Engine, Robotics Layer, Robotics Interface, Internal Future Lab, Trust, Contact, FAQ). Supersede D-0220 §5 “More links” collapse for this band.
  2. **Home clarity visual** — Keep `HOME_CLARITY_V1` / `HOME_CLARITY_V2` gates. Enrich definition / 3-step chain / Explore pillars / audience fork with navy/gold/off-white card grammar, clearer spacing, accents, and visible support/meaning copy (not text-only density).
  3. **Footer Install app** — Smaller type than other Resources column links (supersedes D-0215 same-size rule for Install only).
- **In scope:** `ClosingExploreMap`, `HomeClarityPack` + CSS, footer install CSS, D-0221 + AGENTS/IA/SITE_ASSIGNMENT pointers; commit/push/Vercel prod; local + www smoke.
- **Out of scope:** New routes; inventing facts; neon beyond approved wordmark glow; CMS/full-text search.
- **Implications:** Closing band again shows full corner destinations without a center toggle; clarity remains flag-gated but reads as site-styled cards.

### D-0222 — Footer Install app type forced clearly smaller

- **Date:** 2026-07-29
- **Status:** Superseded by D-0223
- **Summary:** Owner bug «ты не сделал меньше шрифт Install app in footer» — D-0221 size did not visibly apply because a later `font: inherit` on `button.install-app.site-footer__install-control` overrode the smaller `font-size`. Force Install clearly below column links and remove the inherit conflict.
- **Decision:**
  1. **Install type** — `.site-footer__install-control` (and button/summary variants) use `0.5rem` (mobile) / `0.55rem` (≥860px) with `!important`; column links remain `0.6875rem` / `0.75rem`.
  2. **No `font: inherit`** on Install control selectors — use `font-family: inherit` only so size is not reset.
  3. Slightly tighter Install block padding/letter-spacing so the control reads secondary to Resources links.
- **In scope:** `site-shell.css`, D-0222 + AGENTS / SITE_ASSIGNMENT / IA pointers; verify built CSS; commit/push/Vercel prod; local `:3000`; Russian owner brief.
- **Out of scope:** Nav/IA changes; new routes; inventing facts.
- **Implications:** Install app in Resources is visibly secondary to FAQ / security / search links; supersedes D-0221 §3 sizing detail (and D-0215 same-size rule for Install).

### D-0223 — Restore always-visible footer Install app; match column link type

- **Date:** 2026-07-29
- **Status:** Active
- **Summary:** Owner report «Install app disappeared» — control returned `null` unless `beforeinstallprompt` fired or the device was iOS, so desktop HTML often had no Install row. Also reverse D-0222 tiny type: Install must match other Resources column links.
- **Decision:**
  1. **Always visible** — `InstallAppControl` always renders in the Resources list (SSR + client), except when the app is already installed (standalone) or the tip was dismissed. Non-prompt browsers get a details tip (`browserTip` / `iosTip`).
  2. **Same type as links** — Install uses `.site-footer__link` font-size (`0.6875rem` / `0.75rem` ≥1200px). Remove D-0222 `0.5rem` / `0.55rem` `!important` shrink.
  3. Placement remains under Resources as a list item alongside FAQ / search / security.
- **In scope:** `InstallAppControl`, `SiteFooter`, `site-shell.css`, `src/i18n/ui/*` (`browserTip`), D-0223 + AGENTS / SITE_ASSIGNMENT / IA pointers; local `:3000` HTML smoke; commit/push/Vercel prod; Russian owner brief.
- **Out of scope:** Header Install; inventing PWA store listings; nav/IA beyond Resources Install visibility.
- **Implications:** Supersedes D-0222 sizing; restores D-0215 same-size rule for Install; Install text is present in footer HTML without waiting for installability events.

### D-0224 — Fix Install app help UX; restore media downloads

- **Date:** 2026-07-29
- **Status:** Active
- **Summary:** Owner bug: clicking **Install app** in the footer showed a bare underlined **Close** (no tip), so Install appeared broken. Root cause: `<details>` put the tip in an absolutely positioned popover while **Close** stayed a sibling in normal flow (looked like a Resources link). Also re-verify / harden public + admin Media downloads (D-0201) for desktop and iOS.
- **Decision:**
  1. **Install UX** — Always visible in Resources at column link type (D-0223). If `beforeinstallprompt` is available, click runs the native prompt. If already installed (standalone), show **Installed**. Otherwise click opens a compact **How to install** panel (iOS Share → Add to Home Screen / browser Install tip) with **Close** inside the panel only — no bare Close footer link. Escape / outside click dismisses; Install stays visible after close.
  2. **Downloads** — Keep View vs Download split. Hosted files use `/api/media/download/[id]/` and `/api/admin/media/download/[id]/` with `Content-Disposition: attachment`. Public/admin **View** routes stream seeds + uploads same-origin inline (fix relative `NextResponse.redirect(publicPath)` 500). Client `triggerMediaDownload` prefers fetch→blob→object URL (desktop + iOS), with Apple `window.open` / `location.assign` and same-origin anchor fallbacks.
- **In scope:** `InstallAppControl`, `site-shell.css`, `src/i18n/ui/*` (`installed` / `howToInstall` / `closeHelp`), `media-urls.ts`, public + admin media View routes, D-0224 + AGENTS / SITE_ASSIGNMENT / IA pointers; local `:3000` smoke; commit/push/Vercel prod; Russian owner brief.
- **Out of scope:** Header Install; neon; inventing store listings; CMS; changing View/Download product rules beyond restore.
- **Implications:** Clarifies non-Chrome Install path; Close never appears as a Resources column link; download path remains same-origin attachment-first.

### D-0225 — Explore SAVEN cinematic letter showcase

- **Date:** 2026-07-29
- **Status:** Active
- **Summary:** Owner wants the clarity **Explore SAVEN** strip highlighted and redesigned as a cinematic five-pillar band: logo beside the title, highly visual S–A–V–E–N letter heroes, split composition (letter + title/body/CTA), dark band aesthetic; glow contained to this section; closing rail letter consistency; English canonical copy with all 10 locales for pillar bodies.
- **Decision:**
  1. **Clarity Explore redesign** — Replace the compact five-card Explore strip with `ExploreSavenShowcase`: SAVEN logo mark (`/brand/saven-logo-mark.webp`) next to the section title; keyboard-accessible S–A–V–E–N tab rail; active panel is split letter visual + title/body/CTA. Remains gated by `HOME_CLARITY_V1` (and rendered inside the clarity pack).
  2. **Letter heroes** — WebP assets under `public/home/explore-saven/` (S amber/gold crystalline · A gold energy · V cyan/chrome · E blue network · N blue fiber). Contained soft glow only inside `.pw-explore-saven` — not sitewide neon.
  3. **Copy / routes** — Canonical EN: Support → `/purpose/` · Action → Robotics Interface · Verification → Human Oversight · Environment → Applications · Network → Systems. Bodies stay honest; no invented product claims. Closing Explore rail/panel labels show letter + pillar name for consistency.
  4. **i18n** — Heading/support + pillar labels/meanings/CTAs via existing physical-world home locales (all 10).
- **In scope:** `ExploreSavenShowcase`, `HomeClarityPack`, closing rail label tweak, explore letter WebPs, home CSS, D-0225 + AGENTS / SITE_ASSIGNMENT / IA; type-check; commit/push/Vercel prod; local `:3000`; Russian owner brief.
- **Out of scope:** Inventing claims; neon outside this band; CMS; changing pillar destinations; ungating when `HOME_CLARITY_V1` is off.
- **Implications:** Narrow glow exception (with D-0217/D-0218 closing wordmark) for clarity Explore letter band only. Compact pre-D-0225 Explore cards remain unused while clarity is on.

### D-0226 — Explore SAVEN larger letter tabs + compact band

- **Date:** 2026-07-29
- **Status:** Active
- **Summary:** Owner feedback on D-0225: letter buttons must read as obvious clickable controls (larger hit targets, stronger hover/selected navy–gold chrome); the whole clarity Explore band must be shorter/more compact (tighter padding, denser title+logo row, cropped/smaller letter heroes). Keep site style — no neon spam.
- **Decision:**
  1. **Letter tab affordance** — Enlarge S–A–V–E–N letter badges and tab min-height; stronger gold/navy active fill and hover ring; preserve `role="tablist"` / arrow-key / Home–End keyboard behavior.
  2. **Compact section** — Reduce section padding, inner gaps, title/logo scale, panel padding; cap letter visual height (~13.5rem desktop / ~11.5rem mobile) with `object-fit: cover` crop; slightly denser copy/CTA.
  3. **Glow scope unchanged** — Contained soft glow remains inside `.pw-explore-saven` only (D-0225).
- **In scope:** `ExploreSavenShowcase`, explore-saven CSS in `physical-world-home.css`, D-0226 + AGENTS / SITE_ASSIGNMENT / IA; type-check; commit/push/Vercel prod; local `:3000`; Russian owner brief.
- **Out of scope:** New letter assets; neon outside this band; changing pillar routes/copy; ungating when `HOME_CLARITY_V1` is off.
- **Implications:** D-0225 layout remains; density and tab chrome are refined for scanability and vertical budget.

### D-0227 — BioMath Core model scope accents (20 categories / 200+ services → SAVEN actions)

- **Date:** 2026-07-29
- **Status:** Active
- **Summary:** Owner authorizes strong public accents that (1) information for SAVEN’s next-level actions and commands is formed from BioMath Core reports and conclusions under human control (AI as tool), and (2) BioMath Core covers **20 categories** and **200+ services** as Architecture / In Development model scope — not an Operational commercial catalog. Medical disclaimer spirit retained: reports inform assistance/command architecture; they do not diagnose, prescribe, or sell medicines.
- **Decision:**
  1. **Home clarity accent** — Gold-bordered callout between “What is SAVEN” and the 3-step chain (`HomeClarityPack` biomathCallout): BioMath Core reports → SAVEN next-level actions/commands; scope line “20 categories · 200+ services”; link to `/foundation/#biomath-core`.
  2. **Foundation BioMath Core** — Expand layer fields (role / relationship / scope / outputs) and add a 20-category scope grid + “200+ services” highlight with Architecture / In Development disclaimer.
  3. **FAQ** — Dedicated Q&As on BioMath Core coverage (20 / 200+) and reports→actions relationship; all 10 locales.
  4. **Optional cross-links** — One-liners on Purpose, Human Data, and Technology overview pages.
  5. **Governance** — Owner-supplied numbers OK as model coverage. No fake deployments/customers. English canonical; translate new UI/FAQ/page strings to all locales. Straight corners; brand gold accents; no neon.
- **In scope:** `biomath-core/scope.ts`, home clarity types/locales/CSS/`HomeClarityPack`, Foundation + TechnicalPage scope grid, FAQ EN + dictionaries, Purpose / Human Data / Technology one-liners + page dictionaries, D-0227 + AGENTS / SITE_ASSIGNMENT / IA; type-check; commit/push/Vercel prod; smoke; Russian owner brief.
- **Out of scope:** Inventing Operational commercial catalogs; diagnosis/prescription claims; neon; new leaf routes; CMS.
- **Implications:** BioMath Core model scope is now a first-class public accent on Home, Foundation, FAQ, and selected depth pages.


### D-0228 — BioMath Core leaf page and home Go deeper / Who we are

- **Date:** 2026-07-29
- **Status:** Active
- **Summary:** Owner authorizes a published BioMath Core leaf at `/foundation/biomath-core/`, footer Company placement, home clarity “Go deeper / Who we are” compact section, and owner brand assets (logo + sphere). Supersedes D-0227 out-of-scope item “new leaf routes” for this leaf only. Positioning from D-0227 remains in force (reports → SAVEN actions under human control; 20 categories · 200+ services as Architecture / In Development model scope; not diagnosis / prescribe / sell medicines; not Operational commercial catalog).
- **Decision:**
  1. **Route** — Publish `/foundation/biomath-core/` (IA path). Register in `published-routes`, App Router page, title search via footer coverage.
  2. **Page** — Dedicated BioMath Core page: BMC logo + core sphere hero; foundation sequence with BioMath Core emphasis; Human Data Model relationship; reports→SAVEN actions gold callout; Health Categories grid (20) in site-native dark navy cards with limited accent glow (recreated from owner UI reference — not a live AI store); CTAs to Human Data / Purpose / Technology / FAQ / Foundation; status Architecture.
  3. **Assets** — Owner logo → `public/brand/biomath-core-logo.png`; sphere → `public/domain/foundation/biomath-core-sphere.png`. Reference screenshot stored for design only; UI recreated, not embedded as live storefront.
  4. **Home** — Clarity pack adds compact Go deeper / Who we are panel (BMC logo + body + CTA). Biomath callout CTA retargets to the leaf.
  5. **Footer** — Company column: BioMath Core after About.
  6. **FAQ** — Cross-link BioMath Q&As to the leaf.
  7. **i18n** — EN canonical page + 9 dictionaries; physical-world home locales; UI `footer-company-biomath-core` in all 10 chrome locales.
- **In scope:** Leaf page + CSS/icons, assets, published-routes, footer, home clarity types/locales/CSS/`HomeClarityPack`, FAQ links, Foundation related link, domain-visuals masthead map, D-0228 + AGENTS / SITE_ASSIGNMENT / IA; type-check; commit/push/Vercel; smoke; Russian owner brief.
- **Out of scope:** Operational commercial catalog claims; neon storefront recreation; inventing additional foundation leaves (BioMath Life / SAVEN / SAVEN Core) unless later authorized; CMS.
- **Implications:** BioMath Core is a first-class public leaf. Foundation hub retains summary scope grid; leaf is the deep page. D-0227 accents remain; home CTA destination is the leaf.


### D-0229 — BioMath Core catalog redesign, transparent logo, home section order

- **Date:** 2026-07-29
- **Status:** Active
- **Summary:** Owner authorizes (A) moving home BioMath Core → SAVEN callout and Go deeper / Who we are immediately before “What we are not”; (B) transparent BioMath Core logo (PNG/WebP, no dark plate) for light + dark themes, smaller brand mark on home and leaf; (C) BioMath Core leaf redesign — title **BioMath Core**, tagline **Where health data becomes daily clarity.**, Complete Services Catalog intro, 20-category diagram with owner-supplied service counts and blurbs (site-native navy/gold/BMC accents; not neon; not live e-commerce); remove categories screenshot/reference image from public use; (D) i18n for new EN strings across 10 locales. Framing remains Architecture / In Development model coverage — not Operational storefront; medical non-claims retained (not diagnose / prescribe / sell medicines). “Digital Therapeutics Store” is a category name in the model catalog only.
- **Decision:**
  1. **Home order** — Clarity post-living: BioMath callout → Go deeper / Who we are → What we are not. Post-hero keeps definition → chain → Explore SAVEN → audience.
  2. **Logo** — Process `public/brand/biomath-core-logo.png` (+ `.webp`) to transparent background; use smaller mark on home Go deeper and BMC hero.
  3. **Leaf** — Hero title/tagline as above; catalog heading + 20-category cards with counts/blurbs; keep foundation sequence, Human Data Model, reports→SAVEN, status, medical note.
  4. **i18n** — EN canonical; page dictionaries + FAQ category list + Foundation category labels updated for all 10 locales.
- **In scope:** HomeClarityPack order/CSS, BMC page/CSS/content/scope, logo assets, FAQ + foundation dictionaries, D-0229 + AGENTS / SITE_ASSIGNMENT / IA; type-check; commit/push/Vercel; smoke; Russian owner brief.
- **Out of scope:** Operational commercial catalog; live storefront; inventing additional foundation leaves; neon spam.
- **Implications:** BioMath Core leaf is the model catalog depth page; home BioMath accents sit lower, just before boundaries.


### D-0230 — BioMath Core capability redesign + home merged bridge

- **Date:** 2026-07-29
- **Status:** Active
- **Summary:** Owner authorizes (A) replacing home phrasing “basis of everything” with professional Human Data Model / continuous-context wording; (B) smaller BioMath Core logo on home and leaf; (C) merging the two home clarity cards (BioMath → SAVEN callout + Go deeper / Who we are) into **one** compact bridge panel immediately before “What we are not”; (D) full BioMath Core leaf capability redesign with site-native SVG/CSS/HTML diagrams (inspiration only from owner references — not pasted as-is): One Human = One Living Model; four-layer stack; dual roles / puzzle; Master Infrastructure Formula; Environments helix — while keeping transparent small logo, tagline **Where health data becomes daily clarity.**, foundation sequence, reports→SAVEN callout, Complete Services Catalog + 20 categories, Architecture / In Development framing, and medical non-claims. English canonical; i18n all 10 locales.
- **Decision:**
  1. **Home** — Single `biomathBridge` panel (Who we are / BioMath Core → SAVEN / Human Data Model foundation + continuous context / 20 categories · 200+ services / Explore BioMath Core + smaller transparent logo). No “everything” wording.
  2. **Leaf diagrams** — Five capability sections as site-native graphics (navy / gold / soft gray-blue / BMC orange-blue accents; straight corners; limited glow; no neon spam; no Operational product claims).
  3. **Retained** — Catalog, medical non-claims, foundation sequence links, Architecture / In Development status.
  4. **i18n** — EN source; home locales + page dictionaries for all 10 locales.
- **In scope:** HomeClarityPack / types / locales / CSS; BioMathCorePage + Visuals + CSS + EN content + dictionaries; D-0230 + AGENTS / SITE_ASSIGNMENT / IA; type-check; commit/push/Vercel; smoke; Russian owner brief.
- **Out of scope:** Pasting owner screenshots as public assets; Operational catalog; inventing clinical/product claims; additional foundation leaves.
- **Implications:** Home BioMath story is one compact bridge; leaf emphasizes power / technology / capabilities while catalog remains model coverage.


### D-0231 — BioMath Core owner capability images on leaf

- **Date:** 2026-07-29
- **Status:** Active
- **Summary:** Owner requires the five capability reference graphics to be **published page assets** (not inspiration-only SVG recreations). Supersedes D-0230 item that treated owner screenshots as out-of-scope for pasting. Home merged bridge from D-0230 remains in force.
- **Decision:**
  1. **Assets** — Process owner screenshots into `public/domain/foundation/biomath-core/` as WebP (+ PNG companions): `living-model`, `layer-stack`, `dual-roles`, `formula`, `environments`. Keep transparent BMC logo and sphere.
  2. **Leaf** — Each capability section shows the processed image prominently, with English site-style captions/callouts (navy/gold/off-white). Retain Living Model, Layer stack + critical dependency callout, Dual roles, Formula, Environments, Complete Services Catalog + 20 categories, tagline, medical non-claims, Architecture / In Development status.
  3. **Home** — Unchanged from D-0230: one merged bridge before “What we are not”; no “basis of everything”; smaller transparent logo.
  4. **Governance** — Architecture / In Development model coverage — not an Operational storefront.
- **In scope:** Public assets; BioMathCorePage / Visuals / CSS / EN content + dictionaries; D-0231 + AGENTS / SITE_ASSIGNMENT; type-check; commit/push/Vercel prod; curl proof of asset URLs in HTML; local :3000 restart; Russian owner brief.
- **Out of scope:** Operational catalog; inventing clinical/product claims; additional foundation leaves.
- **Implications:** BioMath Core leaf proves owner graphics in production HTML; SVG-only capability presentation is no longer acceptable for these five concepts.


### D-0232 — BioMath Core site-native themeable components (supersedes pasted primary UI)

- **Date:** 2026-07-29
- **Status:** Active
- **Summary:** Owner requires BioMath Core leaf visuals to be **adapted site-native CSS/SVG/HTML components** — smaller, theme-switchable (light off-white + dark soft gray-blue) — not large pasted dark PNG/WebP screenshots as the primary UI. Supersedes D-0231 for presentation primacy; owner concepts remain the source of truth for content/structure. Optional small decorative crops of owner art may appear as accents inside components, but primary UI must be native.
- **Decision:**
  1. **20-category catalog** — Site-native CSS card grid with EN counts + blurbs and Architecture disclaimer; themeable; not a dark orbital/screenshot wallpaper.
  2. **Existing capability sections** — Living Model, four-layer stack, dual roles, Master Infrastructure Formula, Environments converted to themeable native components (retire huge full-bleed dark screenshots as primary).
  3. **New adapted sections (EN canonical)** — Engine three simulation phases; **one** Second Opinion section (local vs systemic / dual-model / verified result); Black Box Architecture; Output: Structured Understanding (five pillars including The Second Opinion).
  4. **Style** — SAVEN navy/gold + BMC orange/blue accents; straight corners; limited accent glow only; works light and dark; medical/status disclaimers unchanged in spirit.
  5. **i18n** — English canonical; chrome + key section titles across all 10 locales.
  6. **Home** — Unchanged from D-0230 merged bridge.
- **In scope:** BioMathCorePage / Visuals / CSS / EN content + dictionaries; D-0232 + AGENTS / SITE_ASSIGNMENT; type-check; local :3000; commit/push/Vercel prod; Russian owner brief; proof that categories are CSS cards.
- **Out of scope:** Operational catalog; inventing clinical/product claims; restoring pasted screenshots as primary UI; additional foundation leaves.
- **Implications:** Owner must see adapted interactive/site components on the leaf, not “just pictures.” D-0231 assets may remain in `public/` but are not required as primary presentation.


### D-0233 — Living Model + Four-layer stack visual redesign

- **Date:** 2026-07-29
- **Status:** Active
- **Summary:** Owner requires the BioMath Core leaf sections **One Human = One Living Model** and **Four-layer stack** to be redone as clearer, illustrative site-native visuals (наглядно и визуально) — digital living-human wireframe + numbered principles, and a composed layered stack with critical-dependency callout — inspired by owner sample diagrams but **not** pasted dark neon posters as primary UI. Continues D-0232 themeable component direction.
- **Decision:**
  1. **Living Model** — Themeable SVG digital-human silhouette/mesh (ONE / HUMAN badge) plus three numbered principle steps; owner engine-output / living-model references guide metaphor only.
  2. **Four-layer stack** — Visual stacked plates with distinct layer treatments (strategy slab, core orb, SAVEN helix, body mesh) and **Critical dependency** callout beside the stack; themeable light/dark.
  3. **Assets** — D-0231 `living-model` / `layer-stack` WebPs remain optional secondary; primary presentation is CSS/SVG components.
  4. **i18n** — English canonical; new chrome/body strings (`ONE` / `HUMAN` / `Critical dependency` / updated visual label) across page dictionaries for all 10 locales.
  5. **Unchanged** — Other BMC capability sections, 20-category CSS cards, medical/status disclaimers, home merged bridge (D-0230).
- **In scope:** BioMathCorePage / Visuals / CSS / EN content + dictionaries; D-0233 + AGENTS / SITE_ASSIGNMENT notes; type-check; local :3000 smoke; commit/push/Vercel prod; owner brief.
- **Out of scope:** Pasting owner screenshots as primary UI; Operational catalog; inventing clinical/product claims; redesigning Second Opinion / Engine / catalog unless needed for layout flow.
- **Implications:** Living Model and Four-layer stack read as clear visual compositions matching SAVEN BMC grammar, not plain text lists or dark screenshot dumps.


### D-0234 — BioMath Core rich illustration panels (owner sample quality)

- **Date:** 2026-07-29
- **Status:** Active; refined by D-0235
- **Summary:** Owner rejected D-0232/D-0233 primitive CSS/SVG wireframes as too thin (“примитивно”). BioMath Core capability sections must present **owner-grade dense illustrative panels** matching sample quality — wrapped in **themeable site chrome** (frames, captions, English legends/status) — not childish stick-figure diagrams and not a single full-page dark poster dump.
- **Decision:**
  1. **Primary visual weight** — Optimized WebP/PNG illustration assets under `public/domain/foundation/biomath-core/diagrams/` (from owner samples + prior D-0231 English capability art). Each figure sits in a framed light or dark artboard panel with English HTML caption/legend.
  2. **Sections redone** — Living Model; Four-layer stack; Engine (3 phases); **one** Second Opinion (dual paths + dual-model concepts synthesized — not three competing SO sections); Black Box; Output pillars; Master Infrastructure Formula; Foundation sequence (premium glass steps + helix, not a plain arrow list). Dual roles / Environments keep rich panels. 20-category CSS cards remain.
  3. **Language** — English canonical UI/captions/legends. Baked Russian in any source art is compensated by English section titles + legends around the panel.
  4. **Theme** — Light page may host dark artboard frames when the illustration requires it; dark theme blends panels. Straight corners; no extra neon chrome beyond the illustration assets.
  5. **Governance** — Architecture / In Development only; no Operational/medical claim invention. Supersedes D-0232/D-0233 for **presentation primacy** of rich illustrations over primitive SVG.
  6. **i18n** — New EN captions/alts/legend strings across page dictionaries for all 10 locales.
- **In scope:** Diagram assets; BioMathCorePage / Visuals / CSS / EN content + dictionaries; D-0234 + AGENTS / SITE_ASSIGNMENT; type-check; local :3000; commit/push/Vercel prod; owner brief.
- **Out of scope:** Operational catalog; inventing clinical/product claims; restoring primitive SVG as primary capability UI; orbital wallpaper as category primary.
- **Implications:** BioMath Core leaf must read as premium technical illustration panels with site chrome — visibly closer to owner samples than to simplified wireframes.

### D-0235 — BioMath Core unified English diagram series

- **Date:** 2026-07-29
- **Status:** Active; refined by D-0236
- **Summary:** Owner requested Engine redraw with **English-only** on-image text (prior asset still had Russian title) and a **single coherent visual language** across BioMath Core diagram panels (not mismatched sample dumps).
- **Decision:**
  1. **Engine redraw** — `engine-phases.webp` retitled **BioMath Core Engine: 3 Simulation Phases** with English phase labels (Input / Core / Output). Concept preserved: biometric data tags → glowing core → living digital human model. No Russian/Cyrillic on-image.
  2. **Unified series** — Regenerated matching WebP set under `public/domain/foundation/biomath-core/diagrams/`: Living Model, Four-layer stack, Dual roles, Engine, Second Opinion, Black Box, Output pillars, Formula, Environments. Shared color grammar (deep navy + cyan/orange accents; light blueprint siblings for conceptual panels; dark technical artboards for process panels), consistent framing/typography, straight corners.
  3. **Chrome** — Themeable site frames/captions/HTML legends remain (D-0234). On-image English is now the primary label language for Engine and sibling panels; HTML legends stay localized.
  4. **Governance** — Architecture / In Development honesty unchanged; no Operational/medical claim invention; no invented KPI dashboards as primary meaning.
  5. **Cleanup** — Unused leftover sibling assets not wired in code (`formula-master`, `second-opinion-dual-model`, `second-opinion-tubes`) removed.
- **In scope:** Diagram WebPs; BioMathCoreVisuals dimensions; EN caption + locale dictionaries; D-0235 + AGENTS / SITE_ASSIGNMENT; verify local + prod; commit/push/Vercel prod.
- **Out of scope:** Changing IA/nav; inventing Operational products; restoring Russian on-image text.
- **Implications:** BioMath Core diagrams must read as one illustration family with English on-image labels where text is baked into art.

### D-0236 — BioMath Core Engine cache-bust + compact panels + hero band

- **Date:** 2026-07-29
- **Status:** Active; refined by D-0237
- **Summary:** Owner proof showed Russian Engine title still on the live leaf after D-0235. Root cause: same filename (`engine-phases.webp`) allowed Next Image / CDN / browser caches to keep serving the D-0234 Russian bitmap even after the static file was replaced. Also requested smaller diagram display sizes and a sharper BioMath Core top banner.
- **Decision:**
  1. **Engine cache-bust** — New asset `engine-phases-en-v2.webp` (1920×1280, English title **BioMath Core Engine: 3 Simulation Phases**, Input tags → Core orb/rings → digital human; sample aesthetic; no Cyrillic). Code points only to the new filename; remove the old `engine-phases.webp` path.
  2. **Compact diagrams** — `.bmc-figure` max-width ~52rem, centered; responsive `sizes` reduced so panels are not giant full-bleed posters.
  3. **Hero band** — Redesigned BioMath Core header: HUD grid + corner frame, smaller logo, Architecture status honesty, ambient diagram-series strip (`bmc-hero-ambient.webp`) instead of the large muddy sphere poster.
  4. **Governance** — Architecture / In Development only; no invented Operational KPI dashboards as primary meaning; English on-image for Engine remains mandatory.
  5. **i18n** — Hero visualAlt EN + locale dictionaries updated.
- **In scope:** Engine + hero assets; BioMathCorePage / Visuals / CSS; EN + dictionaries; D-0236 + AGENTS / SITE_ASSIGNMENT; local + prod OCR/hash proof; commit/push/Vercel prod.
- **Out of scope:** Changing IA/nav; Operational catalog; restoring Russian on-image text; inventing clinical claims.
- **Implications:** Engine URL must change when replacing on-image language so caches cannot resurrect Russian art; BMC diagrams stay compact; hero matches the diagram-series grammar.

### D-0237 — BioMath Core category panels — no counts, Environments chrome

- **Date:** 2026-07-29
- **Status:** Active; refined by D-0238
- **Summary:** Owner requires the BioMath Services 20-category section to drop per-card service-count digits (e.g. Critical Health **18**), enlarge category titles, and elevate the grid visually toward the **Environments** illustration-panel treatment (themeable framed artboard / diagram chrome from D-0234–D-0236) — still a card grid, not an orbital wallpaper screenshot, and not an Operational storefront.
- **Decision:**
  1. **No card counts** — Do not render `serviceCount` on category cards. Counts may remain in the content data model for internal use only.
  2. **Larger titles** — Category labels use a clearer type hierarchy (≈1–1.125rem).
  3. **Environments-like chrome** — Wrap the grid in a light/dark themeable artboard (HUD grid motif, framed surface); each card gets accent rule, corner marks, icon mark plate, and richer spacing matching diagram-series grammar.
  4. **Governance** — Architecture / In Development model coverage disclaimer retained; not Operational commercial catalog; not medical advice (no diagnose / prescribe / sell medicines).
  5. **i18n** — EN subtitle refined (“Themeable category panels”); all 10 locale dictionaries updated.
- **In scope:** BioMathCorePage / biomath-core-page.css; EN biomath-core + dictionaries; D-0237 + AGENTS / SITE_ASSIGNMENT; local :3000 + prod proof; commit/push/Vercel prod.
- **Out of scope:** Restoring orbital wallpaper as primary; inventing Operational live-service claims; changing IA/nav; inventing clinical claims.
- **Implications:** Category section reads as part of the BMC diagram series, not a plain text dump or KPI count strip.

### D-0238 — BioMath Core diagram rhythm + Black Box sensitive-data storage intent

- **Date:** 2026-07-29
- **Status:** Active; refined by D-0239
- **Summary:** Owner requires all BioMath Core diagrams/images to read smaller and more harmonious on the leaf (tighter max-widths, tighter vertical rhythm, smarter Black Box two-column layout) and an expanded Black Box section that explains, in simple language, the intended technical approach for storing personal / sensitive personal information — Architecture / In Development only.
- **Decision:**
  1. **Smaller harmonious panels** — Default `.bmc-figure` max-width ~40rem (narrow Black Box ~34rem); category artboard ~56rem; tighter body gaps and caption proximity; responsive `sizes` aligned to the new caps — not giant poster scroll.
  2. **Black Box layout** — Desktop two-column: compact illustration + prose block; stacks on small screens.
  3. **Sensitive-data copy** — Plain-English architecture intent: technical data-storage solutions for personal / sensitive personal data; principles labeled Storage · Access · Encryption posture · Isolation · Minimization; aligned with trust preferred language (privacy, controlled access, data minimization, safety, traceability, human oversight). Explicitly **not** Operational guarantees, certifications (SOC2/HIPAA), live production vault claims, final legal policy text, or medical advice.
  4. **i18n** — EN canonical + all biomath-core locale dictionaries for new body copy.
  5. **Governance** — Refines D-0236/D-0237 sizing; prior BMC illustration grammar remains.
- **In scope:** BioMathCorePage / Visuals / CSS; EN biomath-core + dictionaries; D-0238 + AGENTS / SITE_ASSIGNMENT; local + prod proof; commit/push/Vercel prod.
- **Out of scope:** Inventing certifications/partners/metrics; final legal policy; Operational “we already encrypt everything in production” claims; IA/nav changes.
- **Implications:** BMC leaf stays illustration-led but scroll-friendly; Black Box is the honest place for sensitive-storage architecture intent without overclaiming.

### D-0239 — BioMath Core follow-ups — policy links, TOC, Trust paths, a11y

- **Date:** 2026-07-29
- **Status:** Active
- **Summary:** Owner directs «делаем все по порядку» for actionable BioMath Core gap-review follow-ups in one phase: soft architecture→policy cross-links, docs sync, Continue exploring Trust paths, light on-page TOC, mobile/a11y polish, and stop exposing dead `serviceCount` on page card surface.
- **Decision:**
  1. **Black Box soft links** — After storage principles, link to already-published `/trust/privacy/`, `/trust/security/`, and `/legal/privacy-policy/` with framing that architecture intent connects to site policies — **no** new legal text, certifications, or Operational vault claims.
  2. **Docs sync** — `INFORMATION_ARCHITECTURE.md` / `SITE_ASSIGNMENT.md` / `AGENTS.md` no longer describe count/blurb-on-card category diagram as current; reflect D-0237 no-counts artboard + D-0238 smaller diagrams / Black Box storage + D-0239 links/TOC.
  3. **Continue exploring** — Add Trust · Privacy and Trust · Security to BMC paths block.
  4. **On-page TOC** — Compact themeable jump nav (straight corners) for major BMC sections; section `id` anchors with scroll-margin.
  5. **Mobile / a11y** — Black Box stack + category artboard mobile polish; subtle sequence helix dash motion with `prefers-reduced-motion: reduce` disabling it.
  6. **Cleanup** — Remove `serviceCount` from `BioMathCoreCategoryCard` / page mapping; counts may remain in `scope.ts` internally only.
  7. **i18n** — EN canonical + structural dictionary keys for new link/TOC/policy lines across 10 locales (not full owner translation QA).
- **In scope:** BioMathCorePage / Visuals / CSS; EN biomath-core + dictionaries; D-0239 + AGENTS / SITE_ASSIGNMENT / INFORMATION_ARCHITECTURE; local + prod proof; commit/push/Vercel prod.
- **Out of scope:** New BioMath Life / SAVEN leaves; final legal packs; SOC2/HIPAA/GDPR certified claims; Operational vault; new photography/KPI dashboards; regenerating diagram WebP series; CMS/analytics; owner translation QA retranslation of prior body.
- **Implications:** BMC leaf is easier to navigate and honestly bridges architecture intent to published Trust/Legal pages without inventing compliance theater.

### D-0240 — Security / SEO / Marketing hygiene

- **Date:** 2026-07-29
- **Status:** Active
- **Summary:** Owner-authorized hygiene pass for public-site security headers/crawl boundaries, SEO metadata and robots/sitemap gaps, and marketing consistency checks — safe fixes only; no exploits, no invented CMP/analytics/certifications.
- **Decision:**
  1. **Security** — Keep D-0162 CSP pragmatic posture; add `Cross-Origin-Opener-Policy: same-origin-allow-popups` for Auth.js Google handoff; production CSP `upgrade-insecure-requests`; strip SMTP transport errors from public Contact API responses; admin surfaces get robots disallow + `X-Robots-Tag` + layout `noIndex` (auth gate unchanged).
  2. **SEO** — Fix BioMath Core document title (use page title **BioMath Core**, not Foundation label) and richer description from approved page copy; elevate `/foundation/biomath-core/` sitemap hub priority; align `SITE_DEFAULT_DESCRIPTION` / Organization JSON-LD with Master Spec primary positioning (“Intelligent systems built to support human life.”); preserve existing canonical/hreflang via `buildPageMetadata`.
  3. **Marketing** — Confirm socials remain YT/X/IG/FB defaults only (LinkedIn hidden until owner URL); BMC Continue exploring Trust paths and Architecture / In Development status language remain; no Operational false claims.
  4. **Out of scope remains** — Cookie CMP, analytics, CSP nonce hardening, exploit PoCs, counsel-certified legal packs, inventing LinkedIn or compliance certifications.
- **In scope:** `next.config.ts`, `proxy.ts`, `app/robots.ts`, `app/sitemap.ts`, admin layout metadata, BMC + site SEO helpers/constants, Contact API, D-0240 + brief AGENTS pointer; commit/push/Vercel prod.
- **Out of scope:** New leaf pages; CMS/analytics/CMP; LinkedIn URL invention; Operational product claims; CSP nonce migration; rate-limiting Contact beyond current soft-degrade.
- **Implications:** Extends D-0162 production readiness without changing public IA or inventing compliance theater. Residual: CSP still allows `'unsafe-inline'`/`'unsafe-eval'` for Next.js; Contact has no hard rate limit; LinkedIn still owner-pending.

### D-0241 — Performance / Downloads / critical-path speed

- **Date:** 2026-07-29
- **Status:** Active
- **Summary:** Owner-authorized measurable page-load and download hardening — compress display-sized BioMath / hero assets, tighten image `sizes` / LCP priority, locale-scoped font preload, static-asset cache headers, and awaitable media download UX — without inventing CMS, analytics, CMP, or new products.
- **Decision:**
  1. **Asset weight** — Re-encode BioMath Core diagram WebPs to ~2× display width (~960–1280) and recompress home hero-collage WebP/JPEG to ~900w; keep English on-image Engine art (`engine-phases-en-v2.webp`); no new photography or invented KPI imagery.
  2. **Runtime image hygiene** — Accurate `width`/`height`/`sizes`/`quality`; LCP priority only on BMC hero (logo + ambient); below-fold diagrams lazy; `content-visibility` + contain on BMC sections/figures; Next `deviceSizes`/`imageSizes` aligned to ~40rem panels.
  3. **Fonts** — Locale-scoped CSS variable classes so Arabic/Hebrew faces are not applied (and not eagerly preloaded) on Latin/Cyrillic pages; mono `preload: false`.
  4. **Caching** — `Cache-Control` long-cache + SWR for `/domain/`, `/hub/`, `/home/`, `/brand/`, `/icons/`; public media inline view cache raised to 1 day + SWR; SW shell cache bump (`savencore-shell-v10`); downloads remain `private, no-store`.
  5. **Downloads** — `triggerMediaDownload` returns success/failure; Media + Admin await and surface honest failure; seed download APIs remain Content-Disposition attachment. Install app footer help unchanged in behavior (D-0224).
  6. **Critical paths** — Smoke home → BioMath Core, foundation, FAQ, trust/legal, search (title-only honesty preserved), media download.
- **In scope:** diagram/hero public assets; BioMathCore page/visuals/CSS; fonts + locale layout; next.config image sizes + asset cache headers (retag from accidental D-0240 comment); media view cache + download client; SW version; D-0241 + AGENTS pointer; local smoke + prod deploy.
- **Out of scope:** CMS/full-text search; analytics/CMP; new leaves; regenerating diagram *content* (English captions already shipped); care-carousel full re-encode pass; streaming Range downloads for multi-MB Blob files.
- **Implications:** Faster first paint on home and BMC without changing IA or claims. Residual backlog: care JPG dual delivery still present; media `readMediaFile` still buffers whole object; CSP nonce hardening remains D-0240 residual.

### D-0242 — i18n audit — BioMath Core + public UI chrome

- **Date:** 2026-07-29
- **Status:** Active
- **Summary:** Owner-authorized translation/i18n hygiene after D-0237–D-0239 BioMath Core keys — fix missing Continue exploring path labels, Trust · Privacy / Trust · Security link labels, and public footer/nav leftovers in es/de/fr/ja/zh-cn (+ robotics interface / Future Lab labels in ar/he/ru/uk). English remains canonical.
- **Decision:**
  1. **BioMath dictionaries** — Upsert D-0239 Continue exploring labels (`Human Data`, `Human Data Model`, `Purpose`, `Technology`, `FAQ`), translate `Trust · Privacy` / `Trust · Security` / Black Box where appropriate, and localize path notes + support sentence so RTL/full locales no longer fall back to English for those display strings.
  2. **UI chrome** — Fill public `navEntries` gaps (Research Areas/Notes, Roadmap, Investor Contact, Security Issue, SAVEN Robotics Interface) and `footer.labs` / `rightsReserved` in es/de/fr/ja/zh-cn; align Future Lab / robotics interface labels in ar/he/ru/uk. Legal/search/PWA/Media honesty strings already present across 10 locales (spot-checked).
  3. **Remaining** — Admin deep-copy still largely English via `...uiEn` spread in several locales (acceptable for restricted Admin until owner authorizes Admin i18n pass). FAQ acronym may remain `FAQ` in ru/uk/de/fr/ja by convention. Vendor/native-speaker QA still recommended for BioMath body prose.
- **In scope:** `src/content/pages/dictionaries/*/biomath-core.ts`; `src/i18n/ui/{es,de,fr,ja,zh-cn,ar,he,ru,uk}.ts`; D-0242 entry; type-check; commit/push/Vercel prod.
- **Out of scope:** New page-body localization campaigns; inventing legal/medical claims; Admin full translation; changing English source copy; CMS/analytics/CMP.
- **Implications:** Published BioMath Continue exploring / Trust soft-links and public footer labels no longer silently English in localized chrome after D-0239. Residual: Admin English leftovers; home ja/zh-cn clarity structure already localized for biomath bridge; native QA still advised.

### D-0243 — Contact rate limit + BMC mobile / what-is-not / home sync

- **Date:** 2026-07-29
- **Status:** Active
- **Summary:** Owner «делай, что сможешь» — ship doable advisory residuals: soft Contact API rate limit with mailto degrade, BioMath Core mobile polish, concise “What BioMath Core is not,” home↔BMC messaging sync, focused translation pass. Skip LinkedIn URL, CSP nonce migration, CMP/analytics, and invented Operational/legal claims.
- **Decision:**
  1. **Contact rate limit** — Soft in-memory IP-keyed limit (5 / 15 min / process) on `/api/contact`; when exceeded (or SMTP unset/fail), return the same `{ ok: false, fallback: "mailto" }` shape — no internals leaked (extends D-0240 soft-degrade).
  2. **BMC mobile polish** — TOC touch targets, Black Box two-column→stack (diagram first), smaller diagram max-widths, category artboard spacing, path/policy touch height; verify/extend `prefers-reduced-motion` (helix, card transform, transitions, hero glow filter).
  3. **What BioMath Core is not** — Concise themed block after Black Box (storefront / medical advice / Operational catalog / diagnose·prescribe·sell medicines) + TOC anchor; align with existing category disclaimer and home “What we are not.”
  4. **Home ↔ BMC sync** — BioMath bridge body/scopeLine state Architecture / In Development and not-Operational; BMC reports scopeLine matches the same honesty frame (reports→SAVEN actions unchanged).
  5. **i18n** — EN canonical + 9-locale dictionaries for new keys; agent-best-effort quality touch on ru/uk/ar/he recent BMC strings; home bridge localized in all 10 locales.
  6. **Deferred** — LinkedIn (needs owner URL); CSP nonce full migration; care-carousel dual-asset re-encode (already lean ~75–167 KB; skip as low ROI); CMS/analytics/CMP.
- **In scope:** Contact route + rate-limit helper + ContactForm; BioMathCore page/CSS/EN + dictionaries; home physical-world locales; D-0243 + AGENTS / SITE_ASSIGNMENT pointer; prove rate-limit logic + local/prod 200; commit/push/Vercel prod.
- **Out of scope:** LinkedIn; CSP nonce migration; new leaves; Operational/medical/legal invention; rewriting D-0240–D-0242.
- **Implications:** Contact spam bursts soft-degrade without confusing the honest mailto path; BMC boundaries and mobile reading improve without IA expansion. Residual: per-instance memory limit (not edge WAF); CSP `'unsafe-inline'`/`'unsafe-eval'` remains; LinkedIn owner-pending; native translation QA still advised.

### D-0244 — Theme bootstrap via next/script (React 19 / Next 16.2)

- **Date:** 2026-07-29
- **Status:** Active
- **Summary:** Fix Next.js 16.2 / React 19 overlay “Encountered a script tag while rendering React component” caused by an inline `<script dangerouslySetInnerHTML>` theme bootstrap in `app/[locale]/layout.tsx`.
- **Decision:**
  1. Remove the raw client-tree `<script>` from the locale layout.
  2. Load the same `savencore-theme` localStorage → `data-theme` IIFE from `public/theme-bootstrap.js` via `next/script` with `strategy="beforeInteractive"` in root `app/layout.tsx` (required placement for beforeInteractive in App Router) so theme still applies before paint (no FOUC).
  3. Leave Organization JSON-LD as `type="application/ld+json"` (not executable JS); theme toggle (`ThemeSwitch`) unchanged.
- **In scope:** `app/layout.tsx`, `app/[locale]/layout.tsx`, `public/theme-bootstrap.js`, D-0244 + AGENTS pointer; local hard-refresh proof + commit/push/Vercel prod.
- **Out of scope:** Theme API redesign; next-themes package; CSP nonce migration; inventing design tokens.
- **Implications:** Dev overlay clears; light/dark restore from localStorage remains; beforeInteractive remains root-layout-bound per Next.

### D-0245 — Search page balance + home YouTube feature band

- **Date:** 2026-07-29
- **Status:** Active
- **Summary:** Center the published `/search/` reading column (fix missing `.page-shell__inner` container styles that left content hugged to the viewport start) and add a strong, privacy-friendly YouTube presentation band on the homepage after the Explore SAVEN closing map and before `SiteFooter`.
- **Decision:**
  1. **Search balance** — Define `.page-shell__inner` alongside `.site-shell__inner` (max-width `--container-max-xl`, `margin-inline: auto`, container padding). Search page uses a centered `--container-max-md` column so title, form, and results read as one intentional composition in LTR and RTL, light and dark.
  2. **Home YouTube** — Publish `HomeYoutubeFeature` with embed ID `0C1Sk_RAnSw` via `youtube-nocookie.com`, `loading="lazy"`, accessible title, responsive 16:9 frame at `min(100%, 72rem)`, themeable soft band (no neon/glow). Copy: honest presentation/overview only; i18n in all 10 `src/i18n/ui/` locales (`watchTitle` / `watchSupport` / `watchEmbedTitle`).
  3. **CSP** — No change required: `frame-src` already allows `https://www.youtube-nocookie.com` (D-0240 / prior Media embeds).
- **In scope:** site-shell + search CSS/page; `HomeYoutubeFeature` + `PhysicalWorldHome`; UI i18n; D-0245 + AGENTS pointer; local proof + commit/push/Vercel prod.
- **Out of scope:** Full-text search/CMS; inventing Operational claims; additional social embeds; CSP nonce migration; LinkedIn.
- **Implications:** Search no longer visually left-hugged; home gains an approved media closer matching the existing YouTube social default. Residual: Media/admin embeds may still use `youtube.com/embed` (allowed); optional later switch to nocookie there.

### D-0246 — Investors professional page (BioMath Core framing, SAVEN-owned)

- **Date:** 2026-07-29
- **Status:** Active
- **Summary:** Replace the Layer-1 Investors hub shell on `/investors/` with a dedicated, themeable Investors brochure: memorable thesis hero, foundation sequence, honest Architecture / In Development building map, high-level capital-use categories (no amounts), engagement audiences, why-now category thesis, risk disclaimer, and CTAs to Investor Contact / Contact — inspired by BioMath Core investors structure but rewritten for SAVEN Core ownership and D-0062 claim rules.
- **Decision:**
  1. **Route** — Keep approved IA path `/investors/` (and existing `/investors/contact/`). Header/footer Investors links unchanged. No investor portal / data room / auth expansion.
  2. **Presentation** — Dedicated `InvestorsPage` + `investors-page.css` using site design tokens (light/dark, straight corners, field/accent grammar). Not a BioMath Core neon clone; capital / trust / clarity tone.
  3. **Copy rules** — English canonical. Do **not** invent metrics, rounds, valuations, revenue, CAC, customers, partners, patents, Operational products, or promised returns. Do **not** use the word **Platform** or buzz vocabulary (ecosystem, synergy, leverage, disrupt, cutting-edge, seamlessly, next-generation, revolutionary, holistic, etc.) in Investors page body/scenes. Prefer site language: intelligent systems for the physical world; BioMath Life → BioMath Core → SAVEN → SAVEN Core; Research · Architecture · In Development.
  4. **i18n** — UI chrome already covers Investors nav labels; page body localized via `src/content/investors/dictionaries/` for all nine non-English content locales (es/de/fr/ja/zh-cn/ar/he/ru/uk) with English fallback.
  5. **Contact** — Public channel remains `info@savencore.com` / `/investors/contact/` / `/contact/`. © 2026 SAVEN Core (no “Inc.”).
- **In scope:** Investors page component/CSS/content/dicts; `/investors/` route metadata; flagship Investors + scenes terminology scrub aligning with no-Platform rule; D-0246 + AGENTS pointer; local proof; commit/push/Vercel prod.
- **Out of scope:** Investor portal; invented financial claims; BMC metrics as SAVEN facts; inventing Inc./entity; nav schema invention; neon decoration.
- **Implications:** `/en/investors/` is the professional capital-posture brochure. Residual: Investor Contact leaf may still use DomainVisualPage shell; robotics Lab copy may still use “platforms” for physical robot form factors (outside Investors brochure).

### D-0247 — Nav Home/Trust/Research + Investors chrome + footer completeness

- **Date:** 2026-07-29
- **Status:** Active
- **Summary:** Owner-authorized navigation and Investors chrome cleanup: remove Investors page body copyright/Sign-In portal tease; make Home first-class in header and footer; keep Trust footer-only; delete the public Research hub and leaves; keep footer as the complete published depth map (8 desktop columns).
- **Decision:**
  1. **Investors** — Remove the on-page disclaimer block (“© 2026… Sign In/Up… not a full investor portal”). Site footer copyright remains. Do not invent an investor portal. Risk/engagement “not an offer / not a data room” honesty may remain in body copy.
  2. **Header** — Primary hubs ≤7: **Home**, Labs, Systems, Applications, Technology, Investors. **Trust** removed from primary header (footer Trust column retained). **Research** removed from primary header.
  3. **Research hub** — Unpublish `/research/`, `/research/areas/`, `/research/notes/` (routes/content/nav/footer/search index entries removed). Remap former Research outbound links to Research Applications, Roadmap, Labs, or Trust as appropriate. Keep Applications → Research Applications, status vocabulary **Research**, and Legal → Research Disclaimer.
  4. **Footer** — Add **Home** (`/`) under Company; remove Research column; desktop grid **8** equal columns; every published public route (except auth utilities and thin aliases / Legal More coverage) must appear in the footer depth map.
  5. **Docs** — AGENTS.md, INFORMATION_ARCHITECTURE.md, SITE_ASSIGNMENT.md updated for as-built nav.
- **In scope:** `site-navigation` / `published-routes`; Investors page; Research route/content cleanup; home/flagship/FAQ/knowledge href hygiene; UI i18n Home footer key; footer CSS column count; D-0247 + AGENTS pointers; commit/push/Vercel prod.
- **Out of scope:** Inventing new pages; Trust domain deletion; Research status vocabulary removal; admin/API routes in footer; investor portal.
- **Implications:** Header is Home-first and shorter on Trust/Research; Research URLs 404; footer remains the honest published sitemap.

### D-0248 — Investors polish + related-page sync + translation audit

- **Date:** 2026-07-29
- **Status:** Active
- **Summary:** Owner-authorized polish of `/investors/` English brochure for clarity/dignity/professionalism; ban list enforced (no Platform / ecosystem / marketing buzz); light sync of Investor Contact, Contact, home Investors teaser, and Foundation “platforms→systems” wording; translation audit across Investors dictionaries + related Contact/flagship keys; D-0247 disclaimer/portal chrome remains gone.
- **Decision:**
  1. **Investors EN** — Tighten thesis/CTA/scannability; prefer “continuous path” over stack jargon; keep Architecture / In Development / Research status honesty; no metrics, portal tease, or offer-to-sell language beyond existing risk honesty.
  2. **Related pages (light)** — Align Contact + Investor Contact subject-line guidance with Investors CTAs; home Investors teaser secondary link → `/investors/contact/` (remove unpublished `/investors/access/` “Request access”); Foundation who-we-are “complex platforms” → “complex systems”; Purpose/Trust had no Platform/ecosystem marketing hits.
  3. **Translations** — Refresh all 9 Investors locale dictionaries for polished EN keys; localize About/FAQ/Trust/Contact explore labels; keep approved status vocabulary in English; sync Contact + flagship Investors Contact dictionary keys; UI Home footer keys from D-0247 already present across `src/i18n/ui/`.
  4. **Chrome** — Investor Contact list/related drop Sign-In portal tease (site Sign In/Up remains in header); Investors page body stays free of copyright/portal disclaimer (D-0247).
- **In scope:** Investors page/content/CSS/dicts; Contact EN+dicts; flagship Investors/Investor Contact EN+dicts; home investor teaser; Foundation EN+dicts; hub related remap; D-0248 + AGENTS / SITE_ASSIGNMENT pointer; type-check; commit/push/Vercel prod.
- **Out of scope:** Invented metrics/partners/portal; boiling the ocean on all site Platform product names (e.g. named Drone Platform); counsel packs; CMS.
- **Implications:** Investors reads as patient-capital brochure aligned with site positioning; residual native QA still recommended for RTL typography and locale idioms.

### D-0249 — Home closing SAVEN frame matched to YouTube frame

- **Date:** 2026-07-30
- **Status:** Active
- **Summary:** Owner-authorized: make the dark closing SAVEN artboard outer frame on the home page the same size (and framing rhythm) as the YouTube feature frame immediately below it.
- **Decision:**
  1. **Shared media frame** — Closing Explore SAVEN stage and `.pw-youtube__frame` share `--pw-media-frame-max: 72rem`, the same `pw-home__inner` horizontal shell/padding, and the same border + soft shadow with straight corners.
  2. **Aspect** — YouTube keeps 16:9; closing artboard keeps the existing `saven-closing-bg` natural aspect (no crop, no new photography).
  3. **Theme** — Page chrome around both frames remains themeable light/dark; the artboard itself stays dark.
  4. **Fades** — Top/bottom closing fades become section transitions outside the framed artboard (no surface wash over the dark image).
- **In scope:** `PhysicalWorldHome` closing markup; `physical-world-home.css` closing + YouTube frame; D-0249 + AGENTS pointer; commit/push/Vercel prod.
- **Out of scope:** New imagery; neon extras; changing Explore hotspots/copy; inventing video or metrics.
- **Implications:** Home bottom media stack reads as a paired framed sequence (SAVEN artboard → YouTube) with aligned width on mobile and desktop.

### D-0250 — Theme bootstrap via useServerInsertedHTML (React 19 / Next 16.2)

- **Date:** 2026-07-30
- **Status:** Active
- **Summary:** Fix Next.js 16.2 / React 19 console error from D-0244: `beforeInteractive` `next/script` in fragment root `app/layout.tsx` cannot run “outside the main document” because locale layout owns `<html>`/`<head>`.
- **Decision:**
  1. Remove root `next/script` `beforeInteractive` + `public/theme-bootstrap.js`.
  2. Inject the same `savencore-theme` localStorage → `data-theme` IIFE via `useServerInsertedHTML` in a small client `ThemeBootstrap` mounted from the locale layout (head insertion stream — before paint, no FOUC).
  3. Keep locale-owned `<html>`/`<lang>`/`dir` architecture; do not invent middleware-header locale for root html ownership in this phase.
- **In scope:** `ThemeBootstrap`, `app/layout.tsx`, `app/[locale]/layout.tsx`, remove `public/theme-bootstrap.js`, D-0250 + AGENTS pointer; local hard-refresh proof + commit/push/Vercel prod.
- **Out of scope:** Theme API redesign; next-themes package; moving `<html>` to root; CSP nonce migration.
- **Implications:** Clears both D-0244 React script-in-component and D-0250 beforeInteractive-outside-document errors; theme toggle + localStorage restore remain. Supersedes D-0244 implementation mechanism (intent unchanged: FOUC-safe theme bootstrap).

### D-0251 — BioMath Core diagrams — hover life + section anchor links

- **Date:** 2026-07-30
- **Status:** Active
- **Summary:** Make BioMath Core capability diagrams interactive: subtle on-brand hover (scale / brightness / border accent / lift), keyboard-focusable hit-links to stable same-page section anchors (`#bmc-*`), themeable light/dark, `prefers-reduced-motion` respected; straight corners; no neon beyond approved BMC grammar. Catalog heading jumps to categories. Hero ambient links to Living Model.
- **Decision:**
  1. Wrap each diagram image frame (and the foundation sequence visual) in an accessible same-page link to its section id.
  2. Keep D-0238 panel max-widths; legends remain outside the hit-link.
  3. Localize `diagramNav.openSection` (“Open section”) via Biomath Core content dictionaries (all locales).
- **Diagram → anchor map:**
  - Hero ambient → `#bmc-living`
  - Living Model → `#bmc-living`
  - Four-layer stack → `#bmc-stack`
  - Dual roles → `#bmc-dual`
  - Engine → `#bmc-engine`
  - Second Opinion → `#bmc-opinion`
  - Black Box → `#bmc-blackbox`
  - Output → `#bmc-output`
  - Formula → `#bmc-formula`
  - Environments → `#bmc-envs`
  - Foundation sequence → `#bmc-sequence`
  - Complete Services Catalog heading → `#bmc-categories`
- **In scope:** `BioMathCoreVisuals`, `BioMathCorePage`, `biomath-core-page.css`, EN content + 9 locale dicts, D-0251 + AGENTS pointer; commit/push/Vercel prod; prove `/en/foundation/biomath-core/`.
- **Out of scope:** New leaf pages; Operational claims; inventing metrics; neon/glow circus; changing diagram assets or panel sizing caps.
- **Implications:** Diagrams double as in-page navigation affordances with shareable hashes; TOC anchors from D-0239 remain authoritative.

### D-0252 — Public chrome: remove In Development messaging + BMC 200+ under 20

- **Date:** 2026-07-30
- **Status:** Active
- **Summary:** Owner-directed: (1) BioMath Services / categories section must clearly state **more than 200 services under the 20 categories** (EN + all locale dictionaries). (2) Remove visitor-facing “still being built” maturity messaging site-wide — especially **In Development**, related unfinished-work voice, and prominent “not yet operational” maturity stamps — without claiming **Operational**, “available now,” fake customers, or medical claims.
- **Decision:**
  1. Public badges/leads/disclaimers: remove In Development or soften to neutral framing; keep **Architecture** or **Research** where a structural label is needed.
  2. Do not invent an Operational catalog; medical non-claims and honest “not a storefront / model coverage” BMC wording may remain when they do not read as “we’re still building.”
  3. Admin chrome and internal docs may retain In Development; FAQ may explain why Admin says In Development.
  4. Approved status vocabulary remains in docs (Research · Architecture · In Development · …); public chrome does not surface In Development.
- **In scope:** Home, BioMath Core, Investors, flagship Labs/Interface/roadmap, FAQ/legal/media/foundation/purpose/technology copy, locale dictionaries (10 locales), AGENTS status reminder, D-0252; commit/push/Vercel prod; prove BMC 200+ and key pages HTML without “In Development.”
- **Out of scope:** Claiming Operational products; inventing metrics/customers; changing admin `statusInDevelopment` badge; rewriting historical Decisions Log entries.
- **Implications:** Visitor experience reads as quiet professional architecture/scope framing; maturity honesty moves off public stamps into non-claims and Architecture/Research labels only.

### D-0253 — Investors locale repair after D-0252 + downloads/PWA verify

- **Date:** 2026-07-30
- **Status:** Active
- **Summary:** Owner-directed audit pass: verify mobile/desktop media downloads and Install app (PWA) behavior; spot-check D-0251–D-0252 translations; push and redeploy. Repair critical Investors dictionary leftovers from D-0252 status-line surgery (including UK “в розробці” / development-status phrasing and truncated/duplicated Architecture labels).
- **Decision:**
  1. Media “Download” remains same-origin attachment via `/api/media/download/[id]/` + `triggerMediaDownload` (fetch→blob with iOS/desktop fallbacks). Soft-hidden seeds (`hidden.json`) correctly 404 and must not be committed unless intentional.
  2. Footer **Install app** remains PWA install / how-to help — not a binary app store download.
  3. Investors public strings for the Research/Architecture status line and “honesty about scope and non-claims” must not reintroduce development-maturity wording after D-0252.
- **In scope:** Investors locale dictionaries (9 locales), D-0253 + AGENTS pointer; commit/push/Vercel prod; prove key routes 200 and Investors locale HTML without “в розробці” / broken Architecture leftovers.
- **Out of scope:** Changing download API contracts; committing `storage/admin-media/hidden.json`; inventing Operational claims; restoring public In Development stamps.
- **Implications:** Prod stays honest on downloads vs PWA; Investors locales match EN scope/non-claims framing after D-0252.

### D-0254 — Final public site snapshot freeze

- **Date:** 2026-07-30
- **Status:** Active
- **Summary:** Owner request («зафиксируй финальную версию») to freeze/record the final public SAVEN Core website snapshot on git and production.
- **Decision:**
  1. Annotated git tag `v2026.07.30-final` marks the final public site snapshot (“Final public site snapshot”) on `main`.
  2. Product tip at freeze (unchanged application code): `0314df6bbe139289bbc20ec963fbe8b5a0bece96`. This D-0254 series only records the freeze in the decisions log; the annotated tag points at the freeze-record tip on `main`.
  3. Production remains https://www.savencore.com (Vercel prod deploy after tag push).
- **In scope:** Decision log record; annotated tag; push to origin; Vercel production deploy.
- **Out of scope:** Committing `storage/admin-media/hidden.json` (soft-hidden media seeds; not intentional freeze content); new product/copy phases; inventing Operational claims.
- **Implications:** Future work continues from this tagged baseline; recreate or move the tag only with explicit owner approval.

### D-0255 — Home particle morph hero (WebGL; approved reference)

- **Date:** 2026-08-08
- **Status:** Active
- **Summary:** Owner-authorized ChatGPT/WebGL particle morph stage at the top of the homepage — images/particles only (no text on the canvas), extracted from the approved reference HTML (not committed as a 97MB monolith).
- **Decision:**
  1. First viewport visual is a full-bleed dark particle artboard (`HeroParticleScene`, dynamic `ssr: false`) using the reference WebGL2 engine: **650000** points, stride **28** bytes, **46s** loop morphing **HUMAN → INTERFACE → ROBOT → WATER → HUMAN**.
  2. Particle buffers are source of truth as gzipped Float32 binaries under `public/home/particle-hero/{human,interface,robot,water}.bin.gz` (~10–12MB each; ~46MB total). Client decompresses via `DecompressionStream`. Do **not** commit the reference HTML as one file.
  3. Brand copy (Intelligence for the Physical World. + supporting lines) sits **below** the particle stage — no HTML headlines/CTAs overlaid on the canvas. Living photoreal help collage is superseded as the upper hero media.
  4. `prefers-reduced-motion: reduce` → static poster (`poster.webp`). Canvas is decorative (`aria-hidden`); section has localized `particleHeroLabel` across 10 UI locales.
  5. Performance: desktop prefers full COUNT + DPR ≤ 2.5; mobile tries full COUNT first, then may lower DPR or subsample (½) if sustained frame time is high. Cover aspect matches reference 16:9 logical framing. Cleanup on unmount (cancel rAF, lose WebGL context).
  6. Owner explicitly authorizes this futuristic particle visual for the home hero (overrides general “no neon / no futuristic decoration” caution for this approved scene only). No Operational claims in surrounding copy.
  7. Git LFS was not available in the environment; binaries are committed as ordinary files (each well under GitHub’s hard limit).
- **In scope:** `HeroParticleScene`, `PhysicalWorldHome` layout + CSS, particle-hero public assets, UI i18n aria string, D-0255 + AGENTS / SITE_ASSIGNMENT pointers; commit/push/Vercel prod; prove home WebGL canvas + bin.gz HTTP 200.
- **Out of scope:** Replacing the care living carousel; inventing Operational/product claims; committing the 97MB reference HTML; neon decoration outside this approved particle scene.
- **Implications:** Home first paint downloads ~46MB of particle buffers (gzipped) after the stage mounts — acceptable per owner for this hero; reduced-motion and poster path remain light.

### D-0256 — Particle hero densify, rebake from 5-panel refs, snappy loop

- **Date:** 2026-08-08
- **Status:** Active
- **Summary:** Owner-directed quality upgrade (A→B→C) so the home particle stage matches the dense blue/orange reference aesthetic — not sparse/dark/blotchy — with snappier pacing and a bright load poster.
- **Decision:**
  1. **A — Render & timing:** Raise brightness/contrast (`light` ~1.7, fragment core/halo boost); smaller `gl_PointSize` (max ~1.72×DPR) for sharper density; shorten loop from **46s → ~24.5s** with holds **~1.1–1.2s** and continuous ambient wave/shimmer on holds (not frozen).
  2. **B — Rebake buffers:** Replace D-0255 HTML-extracted sparse buffers with luminance/saturation-weighted samples from the owner **5-panel** reference collage (UI chrome masked). Five scene files at COUNT **650000**: `human`, `logo`, `touch`, `water`, `return` under `public/home/particle-hero/*.bin.gz` (~12MB each gzipped; ~62MB total). Bake script: `scripts/bake-particle-hero.py`. Bright `poster.webp` from the human panel.
  3. **C — Wow polish:** ~1.25s scatter→converge intro; poster always shown under canvas while bins load (no black void); smooth morph easing retained; `prefers-reduced-motion` → high-quality static poster.
  4. Morph path: **intro → HUMAN → LOGO → TOUCH → WATER → RETURN → HUMAN**. No ASSIST/nav form chrome in targets. D-0255 layout (particle-first, copy below) remains.
- **In scope:** `HeroParticleScene` shaders/timeline, rebaked bins + poster, bake script, CSS load poster, D-0256 + AGENTS pointer; commit/push/Vercel prod.
- **Out of scope:** Inventing Operational claims; committing the 97MB reference HTML; changing care carousel / non-home pages.
- **Implications / limits:** Source panels in the collage are low native resolution (~600×80 before upscale) — density and color match the aesthetic via importance sampling + upscale/enhance, but facial micro-detail cannot exceed the source. Total particle download rises (~62MB gzipped for five scenes).

### D-0257 — Particle hero true 16:9 frames — never display 5-panel sheet

- **Date:** 2026-08-08
- **Status:** Active
- **Summary:** Owner rejected the live hero looking like their vertical 5-panel reference collage («просто мой референс, так не годится»). Fix so the hero is one full-bleed cinematic frame at a time with live WebGL morph — never the stacked storyboard sheet.
- **Decision:**
  1. **Root cause:** D-0256 bake kept each panel’s ultra-wide strip aspect (~7–8:1) and mapped UV as if 16:9, producing storyboard-banner geometry instead of cinematic full-bleed frames. The 5-panel sheet must be bake source only.
  2. **Rebake:** Crop five panels separately; cover-crop each into a true **1920×1080** artboard with per-scene focal points; sample COUNT **650000** per scene. Guardrail aborts if a buffer looks like a stacked multi-panel sheet. Poster = single human 16:9 frame only.
  3. **Runtime:** Cache-bust particle assets (`?v=d0257`); fade out poster once WebGL is live; console-warn on bin/WebGL failure → poster fallback. Morph path unchanged: intro → HUMAN → LOGO → TOUCH → WATER → RETURN → HUMAN (~24.5s).
- **In scope:** `scripts/bake-particle-hero.py`, rebaked bins + poster, `HeroParticleScene` asset URLs / poster fade, CSS, D-0257 + AGENTS pointer; commit/push/Vercel prod.
- **Out of scope:** Publishing the collage image; inventing Operational claims.
- **Implications:** Owner should hard-refresh once (long-cache on `/home/*`); new `?v=` query bypasses stale bins/poster. Source panel resolution remains the quality ceiling.

### D-0258 — Restore professional HTML particle buffers (quality recovery)

- **Date:** 2026-08-08
- **Status:** Active
- **Summary:** Owner («все плохо») rejected D-0256/D-0257 collage-rebaked particle quality. Restore the professionally baked buffers from the approved WebGL HTML reference and realign the runtime engine.
- **Decision:**
  1. **Root cause of “все плохо”:** Collage sampling from a low-res 5-panel sheet cannot match the dense proprietary particle fields in `343434.html`. Additional point-size/light changes on muddier data made the hero look sparse/muddy/storyboard-like.
  2. **Restore source of truth:** Extract again `HUMAN` / `INTERFACE` / `ROBOT` / `WATER` Float32 buffers (COUNT **650000**, stride **28**) from the HTML into `public/home/particle-hero/{human,interface,robot,water}.bin.gz`. Remove collage-only `logo` / `touch` / `return` bins.
  3. **Runtime:** `HeroParticleScene` uses HTML-aligned shaders + additive blend; A-level polish — brighter light (~1.55–1.68), continuous hold shimmer, ~**24s** snappy loop, intro converge, single-frame HUMAN poster, cache-bust `?v=d0258`. Sheet never displayed.
  4. Extract helper: `scripts/extract-particle-hero-from-html.py`.
- **In scope:** Extracted bins + poster, `HeroParticleScene`, preload/docs/AGENTS, D-0258; commit/push/Vercel prod; prove original bins load (not 5-panel sheet).
- **Out of scope:** Re-introducing collage rebakes as primary; inventing Operational claims.
- **Implications / honest quality:** Visual quality should approach the standalone HTML file (same particle data + near-same shaders). Slight differences remain (site chrome, DPR/cover framing, shorter loop, brighter light). Not a pixel-identical port of the full-screen HTML page.

### D-0259 — Fix HUMAN + INTERFACE particle scenes (clean logo / dense human)

- **Date:** 2026-08-08
- **Status:** Active
- **Summary:** Owner («первая сцена плохо, лого плохо») rejected HTML INTERFACE (blotchy gray/prismatic swirl + sparse rings) and sparse first HUMAN. Rebake those two scenes; keep ROBOT/WATER from HTML if still OK.
- **Decision:**
  1. **INTERFACE:** Replace HTML logo buffer. Bake from owner best logo reference — brand flame mark `public/brand/saven-logo-mark.png` large on true **16:9**, soft ambient from collage panel 2; dense silhouette-fill sampling (COUNT **650000**, stride **28**); bias to blue/orange flame, suppress gray/ring noise.
  2. **HUMAN:** Rebake from collage panel 1 → 16:9 cover-crop with gray/hot remapped to blue/orange + silhouette fill (preferred over sparse HTML ghost + ASSIST chrome). Poster = improved HUMAN frame.
  3. **ROBOT / WATER:** Unchanged HTML buffers from D-0258.
  4. **Runtime:** Stronger intro → longer HUMAN hold; short logo hold (~1.4s); brighter light / slightly larger points; cache-bust `?v=d0259`.
  5. Bake helper: `scripts/bake-particle-hero-d0259.py`.
- **In scope:** `human.bin.gz`, `interface.bin.gz`, `poster.webp`, `HeroParticleScene`, preload, docs/AGENTS; commit/push/Vercel prod; prove new human/interface hashes ≠ D-0258.
- **Out of scope:** Replacing ROBOT/WATER; inventing Operational claims; displaying the 5-panel sheet.
- **Implications:** Hard-refresh required (`/home/*` long cache). Logo should read as clean blue/orange SAVEN flame; first scene denser blue/orange profile + waves.

### D-0260 — Official logo INTERFACE + sharper HUMAN + living holds + smaller stage

- **Date:** 2026-08-08
- **Status:** Active
- **Summary:** Owner: use official SAVEN logo; sharper first HUMAN; shrink particle stage; bring people/hands to life via intra-scene micro-morphs.
- **Decision:**
  1. **INTERFACE:** Bake from official brand mark `public/brand/saven-logo.png` (1024² — best repo mark) large on true 16:9 with soft brand glow; dense silhouette-fill particles (COUNT **650000**).
  2. **HUMAN:** Sharper collage panel-1 → 16:9 bake at higher sample res (2560×1440→1920×1080), stronger silhouette fill + unsharp; `human-alt.bin.gz` for breath/face micro-morph.
  3. **Living holds:** Ping-pong micro-morph during holds — HUMAN↔HUMAN_ALT, ROBOT↔ROBOT_ALT, WATER↔WATER_ALT (alts warped from HTML robot/water for arm lean / hand-glass reach). Not full Hollywood mime (no multi-frame video source).
  4. **Stage size:** CSS max ~68svh / max-height 72vh (was full viewport) — cinematic, less dominant.
  5. Cache-bust `?v=d0260`. Bake helper: `scripts/bake-particle-hero-d0260.py`. ROBOT/WATER primaries remain HTML.
- **In scope:** New/updated bins + poster, `HeroParticleScene`, CSS, preload, docs; commit/push/Vercel prod.
- **Out of scope:** Displaying 5-panel sheet; inventing Operational claims; true facial performance capture.
- **Implications:** Hard-refresh required. Extra ~3 alt buffers (~38MB gzipped total added vs 4-scene set).

### D-0261 — Rollback home to photo collage; particle morph → preview only

- **Date:** 2026-08-08
- **Status:** Active
- **Summary:** Owner («оживление скринов сделали все еще хуже, давай отмотаем все до начала, сделай старый главный экран, с фото… на отдельной тестовой странице делать эксперименты») rejects particle living-mime quality on the public home. Restore the pre–particle-hero living photoreal collage; isolate particle experiments to a preview route.
- **Decision:**
  1. **Public home:** Restore `HeroLivingMedia` collage as the upper hero (brand copy + photos). Remove `HeroParticleStage` from `PhysicalWorldHome`. Preload collage LCP image again.
  2. **Experiments:** Particle morph (`HeroParticleStage` / bins / bake scripts) remains in repo and is mounted only at `/[locale]/preview/particle-hero/` — not in main nav/footer. `noIndex` + existing `/*/preview/` robots disallow + proxy `X-Robots-Tag`.
  3. D-0255–D-0260 particle work is **superseded for the public home first viewport** (kept as preview experiment history).
- **In scope:** `PhysicalWorldHome`, preview page + CSS, home CSS comment, UI i18n preview title/lead (10 locales), D-0261 + AGENTS / SITE_ASSIGNMENT pointers; commit/push/Vercel prod.
- **Out of scope:** Deleting ~60MB particle bins; inventing Operational claims; adding particle link to public chrome.
- **Implications:** Home first screen is photos again. Particle R&D continues only via direct preview URL.

### D-0262 — Dark clarity / Explore SAVEN cards → gray-blue slate

- **Date:** 2026-08-08
- **Status:** Active
- **Summary:** Owner wants dark-theme home clarity / Explore SAVEN cards to read soft gray-blue (серо-синий), not deep navy.
- **Decision:** In `physical-world-home.css`, replace deep navy mixes (`#0b1524` / `#1a2438`) on dark definition panel, chain-link, pillar, and Explore SAVEN tabs/letter chips/panel with gray-blue slate (`#3a4454` / `#4a5568` / `#2f3848` / `#3d4a5c`). Dark hover overrides keep chain-link and pillar from snapping back to navy via `--color-surface`. Gold/amber accents and light theme unchanged.
- **In scope:** Home clarity CSS + this decision entry; commit/push/Vercel prod.
- **Out of scope:** Light theme, biomath bridge, flagship gateway, inventing Operational claims.
- **Implications:** Dark home cards read as soft slate gray-blue; gold accents remain the accent language.

### D-0263 — Test / Lab experiments hub (`/lab/`) + footer Resources link

- **Date:** 2026-08-08
- **Status:** Active
- **Summary:** Owner wants a dedicated test/lab page to iterate on novelties safely without breaking the main site, with a footer link for access.
- **Decision:**
  1. Publish **`/lab/`** as a locale-scoped experiments hub (English canonical labels: Test / Lab / Experiments). Distinct from product **`/labs/`** (Robotics Lab / Future Lab).
  2. Hub lists existing experiment surfaces (at least `/preview/particle-hero/`); future experiments may be added here. Themeable page-shell layout; not a marketing leaf.
  3. **SEO:** `noIndex` metadata, `robots.txt` disallow `/*/lab/`, proxy `X-Robots-Tag`, sitemap exclusion. Not in primary header menu.
  4. **Footer:** Resources column link **Lab** (`footer-resources-lab`) in all 10 UI locales. Route in `PUBLISHED_ROUTES` so footer assert passes.
  5. Partially supersedes D-0261 “not in footer” for particle access: particle preview remains out of primary chrome; discovery is via Lab hub, not a direct footer leaf to `/preview/`.
- **In scope:** `app/[locale]/lab/`, published routes, footer nav, robots/sitemap/proxy, UI i18n (10 locales), D-0263 + AGENTS / SITE_ASSIGNMENT pointers; commit/push/Vercel prod; local dev restart.
- **Out of scope:** Putting Lab in header hubs; inventing Operational claims; deleting particle bins; changing product `/labs/` marketing pages.
- **Implications:** Safe sandbox for novelties; public home and marketing leaves stay stable; Lab is discoverable via footer Resources.

### D-0264 — Lab particle experiment — human + energy waves (preview)

- **Date:** 2026-08-08
- **Status:** Active
- **Summary:** Owner requests quality particle animation tests on Lab (not public home) using new cinematic hero references — human point-cloud + SAVEN energy waves; images only on canvas.
- **Decision:**
  1. Bake three 16:9 frames from owner refs S010101 / S111 / S333 (UI/text masked) into `public/lab/particle/{wave-a,wave-b,wave-c}.bin.gz` (COUNT **650000**).
  2. New `LabParticleScene` morph loop (~18s) with continuous wave motion; cache-bust `?v=d0264`.
  3. Live WebGL on `/preview/particle-hero/`; `/lab/` features a prominent poster card linking to it. Public home unchanged (photo collage — D-0261).
  4. noindex retained on Lab + preview.
- **In scope:** Bake script, lab particle assets, LabParticleScene/Stage, Lab hub feature card, preview page, UI i18n, D-0264 docs; commit/push/Vercel prod.
- **Out of scope:** Putting particle on public home; inventing Operational claims; nav/header Lab link.
- **Implications:** Experiments iterate via Lab → preview; home first screen stays photos.

### D-0265 — Lab particle story — Understanding → Assistance → Care (preview)

- **Date:** 2026-08-08
- **Status:** Active
- **Summary:** Owner supplies three new cinematic frames for a clear Lab story: robots help people; SAVEN helps enable that. Not on the public home.
- **Decision:**
  1. Bake 16:9 dense buffers (COUNT **650000**) from owner screenshots into `public/lab/particle/{understand,assist,care}.bin.gz` + poster; replace D-0264 `wave-*` assets.
  2. Mask/blur **SAVEN ASSIST** HUD text blocks and related UI chrome in bake; keep humans, robots, glass, energy waves, and product **SAVEN** marks on robot bodies.
  3. Morph loop (~20s): **Understanding** (system / waves) → **Assistance** (robot arm) → **Care** (humanoid) → loop; continuous hold motion; cache-bust `?v=d0265`.
  4. Optional English (localized) captions **outside** the WebGL canvas on `/preview/particle-hero/` and story strip on `/lab/` feature card. No Operational claims; no Platform/ecosystem buzz.
  5. Public home remains photo collage (D-0261). Lab + preview remain noindex.
- **In scope:** Bake script, lab particle assets, LabParticleScene, Lab hub + preview chrome, UI i18n (10 locales), D-0265 docs; commit/push/Vercel prod.
- **Out of scope:** Public home particle; inventing Operational claims; header Lab link.
- **Implications:** Supersedes D-0264 Lab particle asset set and story for the preview experiment; discovery path unchanged (`/lab/` → `/preview/particle-hero/`).

### D-0266 — Lab video splash — GWR MVP preview band on `/lab/`

- **Date:** 2026-08-08
- **Status:** Active
- **Summary:** Owner supplies a ~10s h264 clip (`S989898_gwr_video_mvp.mp4`, ~14MB, 1280×720) as a full-bleed splash / top background on the Lab experiments hub for preview. Not on the public home.
- **Decision:**
  1. Serve from `public/lab/video/s989898-gwr-mvp.mp4` with poster `s989898-gwr-mvp-poster.webp`.
  2. `LabVideoHero` client band at the top of `/lab/` (~56–70vh, `object-fit: cover`, muted / playsInline / autoPlay / loop, dark straight-corner frame); no text overlay on the video.
  3. `prefers-reduced-motion: reduce` → static poster only.
  4. Public home unchanged (photo collage — D-0261). Lab remains noindex / footer Resources discovery (D-0263).
  5. Note: ~14MB first-load weight for the splash video; acceptable for Lab sandbox preview only.
- **In scope:** Video + poster assets, `LabVideoHero`, Lab page + CSS, D-0266 docs; commit/push/Vercel prod; local `/en/lab/` verify.
- **Out of scope:** Public home video hero; inventing Operational claims; header Lab link; compressing/re-encoding the owner source clip.
- **Implications:** Lab hub gains a video splash above the experiment list; particle story card (D-0265) remains below.

### D-0267 — Retire particle experiment; light Lab video + cinematic effects

- **Date:** 2026-08-08
- **Status:** Active
- **Summary:** Owner retires the particle/dots experiment entirely and continues the Lab video path with light multi-format delivery plus a curated modern cinematic stack on `/lab/` only. Public home photo collage stays.
- **Decision:**
  1. **Retire particles:** Delete `/preview/particle-hero/`, `HeroParticleScene` / `HeroParticleStage` / `LabParticleScene` / `LabParticleStage` + CSS, bake scripts, and all `public/home/particle-hero/**` + `public/lab/particle/**` assets (large `.bin.gz`). Remove Lab hub links/cards to the particle preview. Keep `/lab/` footer discovery.
  2. **Light video:** Re-encode GWR MVP splash to dual sources — desktop `*.webm` (VP9) + `*.mp4` (H.264) and mobile `*-mobile.*` (540p); poster WebP from first frame. Target roughly **~0.5–1.1MB** per variant (far below the prior ~14MB). `LabVideoHero` picks mobile/desktop via `matchMedia` / `saveData`, `preload` none/metadata, loads when in view, pauses offscreen (`IntersectionObserver`), `prefers-reduced-motion` → poster only, muted loop playsInline autoplay.
  3. **Cinematic stack (Lab only):** Ken Burns slow scale, soft vignette + bottom gradient fade into Lab content, fine film grain, slight CSS color grade, optional blurred duplicated video depth layer (desktop only), smooth fade-in when ready. Straight corners; no neon chrome UI.
  4. Lab page documents applied effects + residual future ideas (parallax scrub, cursor light, chapter cuts, etc.).
  5. Supersedes D-0261–D-0265 particle preview path for discovery; D-0255–D-0265 particle runtime/assets are retired from the repo. D-0266 video path continues and is optimized here.
- **In scope:** Deletions above; video re-encodes; `LabVideoHero` + Lab CSS/page; UI i18n (10 locales); AGENTS / SITE_ASSIGNMENT / D-0267; commit/push/Vercel prod; prove home collage, Lab video, particle 404s, smaller video bytes.
- **Out of scope:** Public home video hero; inventing Operational claims; re-adding WebGL particle morph; header Lab link.
- **Implications:** ~135MB+ particle binaries removed from the tree; Lab splash is mobile-friendly; experiments hub is video-forward.

### D-0268 — Lab splash: one video only (remove depth blur duplicate)

- **Date:** 2026-08-08
- **Status:** Active
- **Summary:** Owner reported Lab showing two videos. Root cause was the desktop cinematic depth layer: a second `<video>` with blur/scale behind the main media.
- **Decision:** Remove the `__depth` background video and related CSS entirely. Keep a single muted looping video + poster with Ken Burns, vignette, grain, grade, fade-in, mobile source pick, offscreen pause, and reduced-motion → poster. Lab stays preview-only (`/lab/`); not on public home.
- **In scope:** `LabVideoHero`, Lab CSS, Lab effects copy (10 locales), D-0268 / AGENTS / SITE_ASSIGNMENT notes; commit/push/Vercel prod.
- **Out of scope:** New master export; home hero video; audio; parallax/cursor effects (ideas only until approved).
- **Implications:** One visible video plane; less decode/bandwidth on desktop.

### D-0269 — Lab video band — designed cut, sound/mute, parallax, cursor light, editorial frame

- **Date:** 2026-08-08
- **Status:** Active
- **Summary:** Owner requests the Lab splash feel designed (not “an AI video dropped in”), still **Lab-only** — not moved to the public home.
- **Decision:**
  1. **Cut:** Re-encode from Desktop original `S989898_gwr_video_mvp.mp4` with intentional in/out (`ss=0.42`, `t=8.40` → ~8.4s), trim settle / bright end; keep light dual-format desktop + mobile WebM/MP4 + poster; cache-bust `?v=d0269`. **Audio retained** in encodes.
  2. **Sound + mute:** Video may have audio; **default muted** for autoplay policy; accessible Mute/Unmute control; optional mute preference in `sessionStorage` (`savencore-lab-video-muted`).
  3. **Interaction (Lab only):** Subtle scroll parallax on the media layer; soft radial **cursor light** on fine pointer / desktop only (hidden for coarse/touch); keep Ken Burns / vignette / grain / grade / fade when helpful.
  4. **Framing / copy:** Editorial shell (border, corner marks), eyebrow “Lab experiment” (localized), restrained caption on scrim, “Watch · Lab” chip, thin loop progress indicator. Honest Lab tone — no Operational claims, no Platform/ecosystem vocabulary.
  5. **`prefers-reduced-motion`:** Reduce/disable parallax and Ken Burns; poster OK; mute control available when video plays (motion path).
  6. Still one video plane (D-0268); not on public home; `/lab/` remains noindex / footer Resources discovery (D-0263).
- **In scope:** `public/lab/video/*` re-encodes; `LabVideoHero` + Lab CSS/page; UI i18n (10 locales); D-0269 / AGENTS / SITE_ASSIGNMENT; commit/push/Vercel prod.
- **Out of scope:** Public home video hero; multi-clip playlist; inventing Operational claims; header Lab link.
- **Implications:** Lab splash reads as a designed experiment band with optional sound and light interaction; home collage unchanged (D-0261).

### D-0270 — Lab video — remove editorial frame; amplify effects (owner visibility)

- **Date:** 2026-08-08
- **Status:** Active
- **Summary:** Owner feedback on D-0269: only Mute was noticeable; editorial frame disliked; parallax / cursor light / cut / other effects not perceived.
- **Decision:**
  1. **Remove editorial frame completely** — no `__shell` border, no corner marks, no picture-frame padding. Full-bleed video stage edge-to-edge within the Lab page.
  2. **Amplify Lab-only effects until obvious:** scroll parallax ≈ ±64px with slight scale; larger warmer/cooler cursor spotlight (`var(--lab-cx)` / `--lab-cy`, opacity 1 when active — not ~0); Ken Burns 1 → 1.12; stronger vignette / grain / grade (clear, not muddy).
  3. **Chrome simplification:** Keep Mute/Unmute. Caption moves to a thin strip **below** the video. Remove Watch chip, corner marks, heavy eyebrow overlay. Thin loop progress retained.
  4. **Cut:** Re-encode from Desktop `S989898_gwr_video_mvp.mp4` with clearly different in/out (`ss=1.20`, `t=7.60` → ~7.2s after `setpts`/`atempo` 1.05); audio retained; cache-bust `?v=d0270`.
  5. Still one video plane (D-0268); Lab-only; not on public home; `/lab/` remains noindex / footer Resources (D-0263). `prefers-reduced-motion` reduces parallax/Ken Burns; poster OK.
- **In scope:** `public/lab/video/*`; `LabVideoHero` + Lab CSS/page; UI i18n (10 locales); D-0270 / AGENTS / SITE_ASSIGNMENT; commit/push/Vercel prod.
- **Out of scope:** Public home video; inventing Operational claims; header Lab link.
- **Implications:** Lab splash reads as a bold full-bleed experiment band; D-0269 framing chrome is retired. Home collage unchanged (D-0261).

### D-0271 — Lab video — remove in-file black first scene; embed into page

- **Date:** 2026-08-08
- **Status:** Active
- **Summary:** Owner feedback on D-0270: black frame still visible in the first scene; preferred look is video **embedded into the Lab page background**, not a centered rectangle with clear edges.
- **Diagnosis:** Black bars were **in the MP4** (source letterbox ~69px top/bottom + dark right edge for ~0–2.0s of `S989898_gwr_video_mvp.mp4`). D-0270 `ss=1.20` still included that intro. CSS stage/`__media` `#061022` and hard vignette also read as a dark box.
- **Decision:**
  1. **Re-encode** from Desktop original: `ss=2.15`, `t=7.60`, center zoom-crop `scale=1.14` → crop 1280×720 (mobile 854×480), `setpts`/`atempo` 1.05 → ~7.2s; audio retained; poster refreshed; cache-bust `?v=d0271`.
  2. **CSS embed:** Remove hard `#061022` stage/media fills; soft alpha mask + themeable feather fades (top/sides/bottom → `--color-background`); softer vignette into page surface; Ken Burns `1.06→1.14` with `object-fit: cover`; Mute/caption/progress stay minimal — no frame chrome.
  3. Still one video plane (D-0268); Lab-only; not on public home; `/lab/` noindex / footer Resources (D-0263). `prefers-reduced-motion` reduces parallax/Ken Burns; poster OK.
- **In scope:** `public/lab/video/*`; `LabVideoHero` + Lab CSS/page; UI i18n (10 locales); D-0271 / AGENTS / SITE_ASSIGNMENT; commit/push/Vercel prod.
- **Out of scope:** Public home video; inventing Operational claims; header Lab link.
- **Implications:** First scene no longer shows letterbox black; band reads as continuous with the Lab page in light and dark themes. D-0270 cut/edge treatment superseded for this feedback.

### D-0272 — Lab video — clear picture, overlay copy, explore links

- **Date:** 2026-08-08
- **Status:** Active
- **Summary:** Owner feedback on D-0271: disliked film grain (“клетка”) and heavy darkenings; asked to remove them and propose more interesting Lab solutions — text overlay, links, and related ideas.
- **Decision:**
  1. **Remove** film-grain SVG overlay and heavy vignette / muddy color-grade layers; keep only a very light themeable feather into the page (prefer almost none at the bottom). Soft alpha mask page-embed (D-0271) retained — no hard black frame.
  2. **Add** tasteful on-video overlay (eyebrow + short line); glass-light CTA row linking only to published routes: Home `/`, BioMath Core `/foundation/biomath-core/`, Robotics Interface `/systems/saven-robotics-interface/`, Contact `/contact/` — honest Lab experiment labels; no Operational / Platform / ecosystem claims.
  3. **Ship now (without grain/vignette):** soft progress + clickable chapter ticks; light side ambient matching page background; scroll-linked caption opacity. Keep Mute, strong parallax, Ken Burns; soften cursor spotlight. Cache-bust `?v=d0272`. Lab `/lab/` only; not public home. Full UI i18n (10 locales).
- **In scope:** `LabVideoHero` + Lab CSS/page; UI i18n (10 locales); D-0272 / AGENTS / SITE_ASSIGNMENT; commit/push/Vercel prod.
- **Out of scope:** Public home video; inventing Operational claims; header Lab link; multi-clip playlist.
- **Implications:** Lab splash reads clearer and more interactive while staying embedded in the page surface. D-0271 grain/vignette/grade treatment superseded for this feedback.

### D-0273 — Lab video — symmetric soft blend into page background

- **Date:** 2026-08-08
- **Status:** Active
- **Summary:** Owner feedback on D-0272 soft-embed: asked for **symmetric** top and bottom blend into the Lab page background so both edges dissolve equally smoothly — not an asymmetric mask (top solid by 10% while bottom only started fading at 82%) or unequal fade strengths (top 55% vs bottom 28%).
- **Decision:**
  1. **Mask:** Vertically symmetric `-webkit-mask-image` / `mask-image`: transparent 0% → solid by ~13% → solid until ~87% → transparent 100%. Keep left/right soft and symmetric (transparent 0% → solid 6% → solid 94% → transparent 100%).
  2. **Fade overlays:** Equal top/bottom strength — both `color-mix(... --color-background 48%)` over full `--lab-feather-y`; left/right remain equal at 35% over `--lab-feather-x`. Page `--color-background` shows through faded edges (no black box).
  3. Do **not** reintroduce grain / vignette / heavy darkening. Cache-bust `?v=d0273`. Lab `/lab/` only; not public home. Overlay/links/chapters/mute/parallax/Ken Burns from D-0272 retained.
- **In scope:** Lab CSS (`lab.css`) + `LabVideoHero` cache tag; D-0273 / AGENTS / SITE_ASSIGNMENT; commit/push/Vercel prod.
- **Out of scope:** Public home video; inventing Operational claims; grain/vignette return.
- **Implications:** Lab splash embeds evenly into the page surface at top and bottom. Asymmetric D-0272 feather preference (“almost none at bottom”) superseded for this feedback.

### D-0274 — Lab video — restore original frame size (no zoom crop)

- **Date:** 2026-08-08
- **Status:** Active
- **Summary:** Owner feedback: video was over-enlarged and the top was cut off; restore original framing/size.
- **Decision:**
  1. Re-encode Lab splash from Desktop original **without** center zoom-crop (`scale=1.14` removed). Keep intro skip `ss=2.15` / `t=7.6` only to avoid letterbox black; native 1280×720 framing. Cache-bust `?v=d0274`.
  2. CSS: Stage locked to **16:9** (`aspect-ratio`, width capped by `70vh`) so tall viewports no longer crop the top; Ken Burns **1.0→1.03**; parallax inset `-4%/-2%`; parallax JS no longer scales the media layer.
  3. Keep symmetric soft page-bleed (D-0273); no grain/vignette return; Lab `/lab/` only.
- **In scope:** `public/lab/video/*`, `LabVideoHero` cache tag, `lab.css`, D-0274 notes; commit/push/Vercel prod.
- **Out of scope:** Public home video; inventing Operational claims.
- **Implications:** Framing matches the original MVP composition again; top subject is no longer cropped by zoom.

### D-0275 — Lab video — chapter scrub + timed captions

- **Date:** 2026-08-08
- **Status:** Active
- **Summary:** Owner asked to see the next Lab video experiment: clickable chapter ticks that jump to scene times, plus short timed captions along Understanding → Assistance → Care.
- **Decision:**
  1. Chapter ticks on `/lab/` are functional (not decorative): three absolute scene times across the ~7.6s loop (`0` / `~2.5s` / `~5.1s`) seek `video.currentTime` and resume playback. Accessible labels; larger hit targets. Cache-bust `?v=d0275`.
  2. Timed captions: one phrase at a time under the band, changing with video time — Understanding → Assistance → Care — honest Lab/preview language only (no Operational / deployment claims). Scroll-linked fade retained; reduced-motion shows static poster + fallback caption.
  3. Keep D-0273 symmetric soft page-embed and D-0274 original 16:9 framing; do not reintroduce grain, vignette, zoom-crop, editorial frame, or depth-blur second video. Mute-by-default retained. Lab `/lab/` only — not public home.
- **In scope:** `LabVideoHero`, `lab.css`, Lab page copy wiring, UI i18n (10 locales), D-0275 / AGENTS / SITE_ASSIGNMENT; commit/push/Vercel prod.
- **Out of scope:** Public home video; inventing Operational claims, products, metrics, customers, or partners.
- **Implications:** Lab splash chapters become a scrub affordance; captions narrate the cut without claiming deployed product status.

### D-0276 — Lab video — restore opening dots-person scene

- **Date:** 2026-08-08
- **Status:** Active
- **Summary:** Owner feedback (RU): the first scene where a person is made of dots/points disappeared from the Lab video splash. Diagnosis: D-0271 / D-0274 `ss=2.15` intro skip removed the letterboxed opening that **is** the dots-person scene (master ~0–2.0s), not pure black.
- **Decision:**
  1. Re-encode Lab splash from Desktop original `S989898_gwr_video_mvp.mp4` from **master t=0** through full ~10s — **no** `ss=2.15` (or similar) intro skip. Keep **original 16:9 framing** (no `scale=1.14` zoom-crop). Owner prioritizes the dots-person scene; mild source letterbox on that opening may remain. Poster refreshed from first frame. Cache-bust `?v=d0276`.
  2. Retimed chapter absolute times + timed captions on the ~10s loop: Understanding `0` (dots-person) → Assistance `~3.8s` → Care `~6.5s`. Soft symmetric page-embed, mute-by-default, clear picture (no grain/vignette/frame/depth-blur) retained. Lab `/lab/` only — not public home.
  3. Supersedes the overly aggressive letterbox intro skip from D-0271 / D-0274. Soft page-embed (D-0271) and original framing without zoom-crop (D-0274) remain in force otherwise.
- **In scope:** `public/lab/video/*`, `LabVideoHero` (CACHE / LOOP / CHAPTERS), UI i18n (10 locales) Lab effects copy, D-0276 / AGENTS / SITE_ASSIGNMENT; commit/push/Vercel prod.
- **Out of scope:** Public home video; inventing Operational claims, products, metrics, customers, or partners.
- **Implications:** Lab splash again opens on the dots-person beat; chapter scrub still narrates Understanding → Assistance → Care without deployment claims.

### D-0277 — Lab video — second clip (SAVEN) + extensible multi-clip switcher

- **Date:** 2026-08-08
- **Status:** Active
- **Summary:** Owner requests a second Lab splash clip from Desktop master `S-2_gwr_video_mvp.mp4`, display name **SAVEN**, plus a small cool video switcher designed as a multi-clip playlist (more clips later) — not a one-off toggle. Keep existing GWR / S989898 cut with dots-person opening (D-0276).
- **Decision:**
  1. Encode S-2 into `public/lab/video/s2-gwr-mvp*.{mp4,webm}` + poster WebP at the same light dual-format quality as D-0276 (desktop 1280×720 + mobile 854×480; WebM VP9 + MP4 H.264). **No zoom-crop.** Strip only pure-black head (~0.15s); keep full opening logo/mark. Cache-bust `?v=d0277`.
  2. Refactor `LabVideoHero` to a clips array `{ id, labelKey, sources, poster, chapters?, captionBeats? }`. First clip label **GWR** (neutral stem from existing master filename / Lab cut — not a new product name); second **SAVEN** (brand proper noun across locales). Compact straight-corner glass-light switcher with aria / current clip; mute, chapter scrub, and timed captions follow the active clip (SAVEN chapters retimed to logo → Lab forms → closer support; honest Lab caption beats). Soft page-embed / original 16:9 (D-0273 / D-0274) retained. Lab `/lab/` only — not public home.
  3. Switch loads new sources, plays from start (muted default), resets progress/chapters/captions; reduced-motion still shows poster. UI strings in all 10 locales.
- **In scope:** `public/lab/video/s2-*`, `LabVideoHero` + Lab CSS/page, UI i18n (10 locales), D-0277 / AGENTS / SITE_ASSIGNMENT; commit/push/Vercel prod.
- **Out of scope:** Public home video; inventing Operational claims, products, metrics, customers, or partners; inventing additional clip product names beyond owner **SAVEN** + neutral GWR Lab label.
- **Implications:** Lab band is a small extensible playlist; adding another clip is primarily assets + one array entry + i18n label/captions.

### D-0278 — Lab video — Site main clip first (SAVEN_site 1) in playlist switcher

- **Date:** 2026-08-08
- **Status:** Active
- **Summary:** Owner supplies Desktop master `SAVEN_site 1.mp4` (~60.5s, 1280×720) and asks to put this video **first / main** in the Lab playlist switcher (default selected on load). Keep prior GWR (S989898) and SAVEN (S-2) clips accessible after it.
- **Decision:**
  1. Encode into `public/lab/video/saven-site-1*.{mp4,webm}` + poster WebP at the same light dual-format quality as D-0277 (desktop 1280×720 + mobile 854×480; WebM VP9 + MP4 H.264). **No zoom-crop.** Opening has content (no pure-black head trim). Cache-bust `?v=d0278`.
  2. Prepend as playlist index 0 / default. Order: **Site** → **GWR** → **SAVEN**. Label **Site** from filename stem `SAVEN_site` — short neutral Lab label so it does not collide with existing clip label **SAVEN** (S-2). Not a new product name.
  3. Site chapters / timed captions from actual scenes (~60.5s): Understanding at 0 (brand/people), Assistance at ~7s (everyday support), Care at ~18s (care settings). GWR and SAVEN keep prior beats. Soft page-embed / original 16:9 / mute / switcher UX retained. Lab `/lab/` only — not public home.
- **Assumption:** Owner did not supply a display name; **Site** is derived neutrally from the master filename and is preferred over a second “SAVEN” switcher label.
- **In scope:** `public/lab/video/saven-site-1*`, `LabVideoHero` + Lab page, UI i18n (10 locales), D-0278 / AGENTS / SITE_ASSIGNMENT; commit/push/Vercel prod.
- **Out of scope:** Public home video; inventing Operational claims, products, metrics, customers, or partners; replacing GWR/SAVEN clips.
- **Implications:** Default Lab splash is the longer Site cut; switcher still exposes GWR and SAVEN.

## Pending Owner Decisions

These are not decisions yet; they are tracked for future resolution:

1. Legal entity name confirmation (whether “Inc.” or other suffix applies).
2. Default root route behavior: `/` → `/en/` vs English at `/`.
3. Whether localized path slugs will be used in a later phase.
4. Official social account URLs.
5. Contact emails / forms destinations.
6. Roadmap baseline year and first public roadmap entries.
7. Leadership content availability and publication policy.
8. Translation process/vendor selection.
9. Analytics and cookie consent vendor selection.
10. Authorization and scope definition for Phase 1.

### Pending list update — 2026-07-24 (Phase 0.75A)

Resolved from the list above:

- Item 2 — root route behavior — resolved by D-0014 (`/` → `/en/`).

Still open (owner decisions only):

1. Legal entity name confirmation (whether “Inc.” or other suffix applies).
2. Whether localized path slugs will be used in a later phase.
3. Official social account URLs.
4. Contact emails / forms destinations.
5. Roadmap baseline year and first public roadmap entries.
6. Leadership content availability and publication policy.
7. Translation process / vendor selection and locale launch sequencing for approved translations.
8. Analytics and cookie consent vendor selection.
9. CMS selection (explicitly deferred; architecture must remain CMS-ready) — D-0015.
10. Design token values, multilingual font stack, and named intentional motions.
11. Authorization and exact scope definition for Phase 1 — D-0010 remains active.

### Pending list update — 2026-07-24 (Phase 1A)

Resolved / narrowed:

- Phase 1A technical initialization authorized — D-0018 (does not authorize Phase 1B+).
- npm selected — D-0019.
- Tailwind deferred — D-0020.
- CMS / database / authentication deferred for this phase — D-0021.
- Browser-language auto-detection deferred — D-0022.
- Localized slug decision explicitly remains unresolved — D-0023.

Still open (owner decisions only):

1. Legal entity name confirmation.
2. Localized path slug policy (unresolved by D-0023).
3. Official social account URLs.
4. Contact emails / form destinations.
5. Roadmap baseline year and first public roadmap entries.
6. Leadership content availability and publication policy.
7. Translation process / vendor selection and locale launch sequencing.
8. Analytics and cookie consent vendor selection.
9. CMS selection (still deferred).
10. Design token values, multilingual font stack, and named intentional motions.
11. Authorization and exact scope for Phase 1B+ (design system / Home / navigation).

When resolved, append new decision entries; do not edit this section’s historical meaning—update by adding dated resolutions below or as new D- IDs.

### Pending list update — 2026-07-26 (D-0173)

Resolved from the list above:

- Item 4 — Contact emails / form destinations — resolved for the public channel by D-0173 (`info@savencore.com`, `/contact/` mailto form). SMTP/CRM remains future work. Named leadership bios remain unpublished; anonymous professional team narrative on Foundation is authorized.

### Pending list update — 2026-07-27 (D-0195)

Resolved / narrowed:

- Official social account URLs — **YouTube only** resolved by D-0195 (`https://youtu.be/0C1Sk_RAnSw` committed default; env override). Facebook / X / LinkedIn / Instagram remain open.

### Pending list update — 2026-07-27 (D-0196)

Resolved / narrowed:

- Official social account URLs — **YouTube + X** resolved (`https://youtu.be/0C1Sk_RAnSw` D-0195; `https://x.com/SAVENcore` D-0196; env overrides). Facebook / LinkedIn / Instagram remain open.

### Pending list update — 2026-07-27 (D-0197)

Resolved / narrowed:

- Official social account URLs — **YouTube + X + Instagram** resolved (`https://youtu.be/0C1Sk_RAnSw` D-0195; `https://x.com/SAVENcore` D-0196; `https://www.instagram.com/savencore/` D-0197; env overrides). Facebook / LinkedIn remain open.

### Pending list update — 2026-07-27 (D-0198)

Resolved / narrowed:

- Official social account URLs — **YouTube + X + Instagram + Facebook** resolved (`https://youtu.be/0C1Sk_RAnSw` D-0195; `https://x.com/SAVENcore` D-0196; `https://www.instagram.com/savencore/` D-0197; `https://www.facebook.com/profile.php?id=61592276954371` D-0198; env overrides). LinkedIn remains open.
