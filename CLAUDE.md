# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Memorial website for Capt. Dekel Swissa z"l, who fell at the Pega outpost during the Iron Swords War. Single-page React app, **entirely in Hebrew with RTL layout**. Deployed to Vercel.

## Commands

```bash
npm run dev      # Vite dev server
npm run build    # tsc type-check + vite build (build FAILS on type errors)
npm run lint     # eslint, --max-warnings 0 (any warning fails)
npm run preview  # serve the production build locally
```

There is no test suite. `npm run build` is the gate: it runs `tsc` first, and the strict TS config (`noUnusedLocals`, `noUnusedParameters`, `strict`) will fail the build on unused imports/vars — see commit 570a542 where an unused import broke the build.

## Architecture

- **Routing uses `HashRouter`** (`src/App.tsx`), not BrowserRouter. URLs are `/#/battle`, `/#/gallery`, etc. This is deliberate for static Vercel hosting (avoids server-side route config). Adding a page = add a `<Route>` in `App.tsx` AND an entry to `NAVIGATION_ITEMS` in `src/lib/constants.ts`.
- **Navigation is data-driven** from `NAVIGATION_ITEMS` in `src/lib/constants.ts`. Each item has an `icon` string key; the mapping from key → Lucide icon component lives in `getIcon()` in `src/App.tsx`. Adding a new icon requires updating that switch.
- **Page content is hardcoded in the page components**, not fetched. Photos, letters, articles, and text are arrays defined inline at the top of each `src/pages/*.tsx` file (e.g. `SAMPLE_LETTERS` in `WriteToUs.tsx`, image arrays in `Gallery.tsx`/`House.tsx`). To change site content, edit these arrays.
- **Static assets** live in `public/images/{dekel,house,notebooks}` and `public/movies`. Reference them with **relative paths** (`./images/dekel/main.JPG`), not absolute (`/images/...`) — absolute paths break under HashRouter. Note filename extensions vary in case (`.JPG`, `.jpg`, `.jpeg`); match the actual file exactly.
- **`@/` aliases `src/`** (configured in both `vite.config.ts` and `tsconfig.json`).

## Styling

- Tailwind with a custom `primary` palette (`primary-main` cream through `primary-fifth` deep navy) defined in `tailwind.config.js` and mirrored in `src/lib/constants.ts` `COLORS`. Use these tokens, not raw hex.
- Font is `Heebo` (Hebrew sans). RTL: use `space-x-reverse` with `space-x-*` for horizontal spacing.
- Animations via `framer-motion`; class merging via `cn()` in `src/lib/utils.ts`.

## Contact form (WriteToUs)

`src/pages/WriteToUs.tsx` sends mail via `@emailjs/browser` with **hardcoded** service/template/public-key IDs (EmailJS public keys are client-side by design). It enforces a 5-minute client-side cooldown persisted in `localStorage` (`lastSubmissionTime`).
