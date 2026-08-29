# Portfolio — Nanda Nabil Falah

A bilingual (Bahasa Indonesia / English) digital product portfolio. Built with
Next.js App Router, TypeScript, and Tailwind CSS.

It lives in a subdirectory of the `dashboard-kinerja` repository so the Work
Activity Tracker dashboard at the repository root keeps working untouched. The
portfolio is self-contained and can be moved into its own repository at any time
by copying this folder.

```bash
cd portfolio
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm run lint       # eslint
npm run typecheck  # tsc --noEmit
```

## Before going live

Two things in `src/content/site.ts`:

1. `url` — set it to the real deployed origin. Canonical links, OpenGraph URLs,
   and the sitemap all read from it.
2. `email`, `linkedin`, `whatsapp` — they are `null` on purpose. Fill in the ones
   you want published; the contact page, the footer, and the CTA all pick them up
   automatically, and anything still `null` is simply not rendered. Nothing
   invented, no dead links.

## How the content is organised

Everything the site says lives under `src/content/`. No page component contains
copy.

```
src/content/
  locales.ts             the two locales, and the Bilingual string type
  site.ts                name, links, contact channels
  types.ts               the Project / CaseStudy shape
  projects/              one file per project, plus index.ts
  dictionary/
    types.ts             the shape every locale must satisfy
    id.ts, en.ts         all interface copy
```

Both dictionaries are typed against `Dictionary`, so a missing translation is a
compile error rather than an English string leaking into the Indonesian page.
The same applies to project copy: every field is `Record<Locale, string>`, so
neither language can be forgotten.

## Adding a project

1. Copy an existing file in `src/content/projects/` and edit it.
2. Import it in `src/content/projects/index.ts` and add it to the `projects`
   array. Set `order`, and `featured: true` if it belongs in Selected Work.
3. Drop screenshots into `public/screenshots/` and list them under
   `screenshots` with their real pixel dimensions.

That is all. The homepage, the Work index and its filters, the case-study route,
the previous/next links, and the sitemap all derive from that array.

## Screenshots

A project shows real screenshots when it has them, and a labelled empty frame
when it does not — see `placeholders` in each project file. The frames are
deliberately blank: a mocked-up interface would misrepresent what the product
actually does.

Each placeholder carries a `note` describing exactly what to capture and what to
keep out of the shot. When you add the real image, move the entry from
`placeholders` to `screenshots`.

The screenshots currently in `public/screenshots/` are the **real interfaces**
of the Work Activity Tracker dashboard and the finance dashboard, rendered
against synthetic demo data — no real names, account numbers, balances, or
transactions. Screenshots marked `demoData: true` say so in their caption. Never
replace them with captures containing real data.

## Language handling

- Routes are `/id/...` and `/en/...`; Indonesian is the default.
- `src/middleware.ts` sends a bare `/` to the stored preference, then the
  browser's `Accept-Language`, then Indonesian.
- The ID | EN control is two real links, so it works without JavaScript. Clicking
  one also writes a `NEXT_LOCALE` cookie that the middleware reads next time.
- Each page declares its own `canonical` and `hreflang` alternates, and the
  OpenGraph card is generated per locale.

## Design notes

- Tokens live at the top of `src/app/globals.css`. Text tones are contrast
  checked against the page background — the comment there records the ratios.
- The teal accent is reserved for state: active nav, links, status, selected
  filters, small labels. It is not a decorative colour.
- Motion is one fade-and-rise on section entry (`src/components/reveal.tsx`),
  plus hover transitions. It is disabled under `prefers-reduced-motion` and
  neutralised when printing.
- Everything renders on the server except four small client components: the
  navbar, the language toggle, the work filters, and the reveal wrapper.
