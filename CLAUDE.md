# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server at http://localhost:3000
npm run build    # Static export build → outputs to ./out
npm run lint     # ESLint (eslint-config-next)
npm start        # Serve a production build
```

There are no tests. Install with `npm install --legacy-peer-deps` (React 19 trips peer-dep checks on some Radix/utility packages — CI uses this flag).

## Architecture

This is a **single-page marketing landing site** for "Tensai Study Abroad", built with Next.js 16 (App Router), React 19, and Tailwind CSS v4. There is no backend, routing, or data layer — the entire site is `app/page.tsx`, which composes a fixed sequence of section components from `components/` (`Navbar`, `Hero`, `Features`, `Process`, `Testimonials`, `Contact`, `Footer`, `WhatsAppButton`). Each section is a self-contained presentational component; content (copy, phone numbers, links) is hardcoded inside them.

### Static export — the central constraint

`next.config.ts` sets `output: 'export'`, so the build emits a fully static site to `./out` with **no Node server at runtime**. This rules out Server Actions, API routes, `next/image` optimization, and dynamic routes. Practical consequences when editing:

- **Image `src` must use relative paths** (`./hero.jpg`, `./lovable-uploads/...`), not root-absolute (`/hero.jpg`). `images.unoptimized: true` is set because the optimizer can't run. Static assets live in `public/` and `public/lovable-uploads/`.
- `basePath` is intentionally empty (`// MUST BE EMPTY` comment) — don't change it.
- Note `next.config.ts` actually uses `module.exports` (CommonJS) despite the `.ts` extension.

### Deployment

Pushing to `master` triggers `.github/workflows/deploy.yml`, which runs `next build` and publishes `./out` to **GitHub Pages**. Any change merged to master goes live automatically.

### Styling

Tailwind v4 with CSS-first config — there is **no `tailwind.config.js`**. Theme tokens and custom classes are all defined in `app/globals.css`:

- `@theme { ... }` declares design tokens (colors, fonts). Fonts are Inter (`--font-sans`) and Montserrat (`--font-display`), imported via Google Fonts in globals.css; `app/layout.tsx` additionally wires Geist via `next/font`.
- Custom utility classes used throughout the components are defined here, not by Tailwind: `.container`, `.btn-primary`, `.btn-outline`, and the `.animate-fade-in*` / `.animate-delay-*` animation helpers. Reuse these rather than re-implementing inline.
- The brand blue `#004aad` appears as a hardcoded hex in components (e.g. nav hover states) alongside the themed `--color-primary`.

### Components & conventions

- `components/ui/` is a large shadcn/ui component library (Radix-based). Most of it is **unused** by the current landing page — treat it as an available toolbox, not active code.
- Mark a component `'use client'` only when it needs browser APIs or state (e.g. `Navbar` scroll listener, `WhatsAppButton` tooltip). Section components without interactivity stay server components.
- Import alias: `@/*` maps to the repo root (e.g. `@/components/Hero`, `@/lib/utils`). `lib/utils.ts` exports `cn()` for class merging.