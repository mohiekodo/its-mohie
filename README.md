# its-mohie — Portfolio SPA

This is a React 18 + TypeScript + Vite single-page portfolio implementing the design/content in portfolio_prompt.md.

Quick start
- npm install
- npm run dev

Scripts
- dev: Start Vite dev server
- build: Type-check and build for production
- preview: Preview production build
- lint: Run ESLint
- format: Run Prettier
- type-check: TypeScript check

Environment variables (.env)
- VITE_EMAILJS_PUBLIC_KEY=
- VITE_EMAILJS_SERVICE_ID=
- VITE_EMAILJS_TEMPLATE_ID=

Tech stack
- React, TypeScript, Vite
- Tailwind CSS, Headless UI, Lucide React
- Framer Motion, React Intersection Observer
- React Hook Form, EmailJS
- React Helmet Async

Structure
- src/components/layout: Header, Layout
- src/components/sections: Hero, About, Experience, Projects, Leadership, Contact
- src/styles: globals.css
- src/data: content.ts
- src/types: shared types
- src/utils: constants.ts

