# its-mohie — Portfolio SPA

A React 18 + TypeScript + Vite single-page portfolio for Mohieddin Tanna.

[![Status](https://api.netlify.com/api/v1/badges/55b33fc1-683b-4dcf-ac97-87c5a48b412c/deploy-status)](https://app.netlify.com/projects/itsmohie/deploys)

## Quick start

```sh
npm install
cp .env.example .env   # add your EmailJS credentials for the contact form
npm run dev
```

## Scripts

- `dev`: Start the Vite dev server
- `build`: Type-check and build for production
- `preview`: Preview the production build
- `lint`: Run ESLint
- `format` / `format:check`: Run Prettier (write / check only)
- `type-check`: TypeScript check
- `check`: Type-check, lint and build in one go (run this before opening a PR)

## Tech stack

- React, TypeScript, Vite
- Tailwind CSS, Headless UI, Lucide React
- Framer Motion
- React Hook Form, EmailJS

## Structure

- `src/components/layout`: Header, Footer, Layout (skip link, `<main>` landmark)
- `src/components/sections`: Hero, About, Experience, Projects, Leadership, Testimonials, Contact
- `src/components/ui`: shared primitives (Container, AnimatedSection)
- `src/data/content.ts`: all editable content (experience, projects, testimonials, leadership, skills)
- `src/utils/constants.ts`: site metadata, section IDs and nav items (single source of truth)
- `src/styles/globals.css`: global styles, design tokens and utility classes
- `public/`: static assets, `resume.pdf`, `og-image.png`, `robots.txt`, `sitemap.xml`
- `scripts/og-image.svg`: source for `public/og-image.png`

## Editing content

Update `src/data/content.ts` for copy changes. "Years of experience" is derived from
`CAREER_START` in `src/utils/constants.ts`, so it never goes stale.

## SEO and social previews

All meta tags and JSON-LD live statically in `index.html` so crawlers and link-preview bots see
them without running JavaScript. To regenerate the social image after editing
`scripts/og-image.svg` (macOS, with Chrome installed):

```sh
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless=new --hide-scrollbars \
  --window-size=1200,630 --screenshot=public/og-image.png "file://$PWD/scripts/og-image.svg"
```

## Deployment

Deployed on Netlify (`netlify.toml`). It sets security headers (including a CSP that allows Google
Fonts and the EmailJS API), long-lived caching for hashed bundles in `/static/`, and an SPA
fallback redirect. If you add a new third-party origin, update the CSP there.
