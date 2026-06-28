# Aerisk — Website

Marketing site for Aerisk. **React + Vite + Tailwind v4 (TypeScript).** Single-page,
technical/credible dark theme. Runs locally now; prepared for **Cloudflare Pages**.

## Local development

```bash
cd website
npm install
npm run dev        # http://localhost:5173
```

Other scripts:

```bash
npm run build      # production build → dist/
npm run preview    # serve the production build locally
npm run lint       # type-check (tsc --noEmit)
```

## Editing content

- **Services** — `src/data/services.ts` (single source for the service cards).
- **Sections** — `src/components/*` (Hero, Services, Approach, WhyAerisk, About, Contact, Footer).
- **Theme/tokens** — `src/index.css` (`@theme` block: colors, fonts).

## Placeholders to replace before launch

- `src/components/About.tsx` — principal names & bios (currently `[ Name ]` / `[ Short bio ]`).
- Contact email `contact@aerisk.aero` (in `Contact.tsx` and `Footer.tsx`).
- Visual logo is deferred — a text wordmark (`src/components/Wordmark.tsx`) is used for now.

## Deploying to Cloudflare Pages (later)

Connect the (private) repo and configure the project:

| Setting | Value |
|---|---|
| Production branch | `master` (or your default) |
| **Root directory** | `website` |
| Build command | `npm run build` |
| Build output directory | `dist` |

SPA routing is handled by `public/_redirects` (`/* /index.html 200`). `vite.config.ts`
uses `base: '/'`, correct for serving at the root of `aerisk.aero`. Add the custom
domain in the Pages project once `aerisk.aero` is registered.
