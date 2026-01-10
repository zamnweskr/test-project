<!-- Copilot / AI instructions tailored to this repo -->
# Copilot instructions — vite-project

Purpose: help AI coding agents be productive immediately in this small Vite + React project.

- Project type: Vite + React (entry: [index.html](index.html) → [src/main.jsx](src/main.jsx) → `App` in [src/App.jsx](src/App.jsx)).
- Build tooling: `vite` (see `package.json` scripts). Use `npm run dev`, `npm run build`, `npm run preview`.

Quick commands
- Dev: `npm run dev` (starts Vite dev server)
- Build: `npm run build` (Vite build)
- Preview: `npm run preview` (serve the production build)
- Lint: `npm run lint` (runs `eslint .`)

Architecture & patterns (what to read first)
- Single-page React app with small component folder under `src/app/components` — primary example: [src/app/components/grid.jsx](src/app/components/grid.jsx).
- Static images live in `src/app/assets/images` and are imported directly (see `LETTERS.js`). New assets: import and export from `src/app/shared/LETTERS.js` or add similar module.
- Styling: Tailwind + PostCSS. See [src/app/components/tailwind.config.js](src/app/components/tailwind.config.js) and the PostCSS config (file under `src/app/components/ postcss.config.js` — note the filename contains a leading space in this repo). Tailwind content globs include `./src/**/*.{js,ts,jsx,tsx}` so update when adding new file extensions or top-level HTML.

Conventions and examples (do this in PRs)
- Components are functional React components (hooks-based). Follow `Grid` style: default export, local `useState`, and small, self-contained JSX.
- Use relative imports for local modules and images, matching patterns in `LETTERS.js` and `grid.jsx`:
  - `import X from '../assets/images/x.png'`
  - `export const LETTERS = [ { id: 1, name: 'A', src: A }, ... ]`
- Tailwind classes are used directly in JSX; prefer utility-first classes for layout and spacing (see `className` usage in `grid.jsx`). When adding global styles, update `index.css`.

Integration points & external deps
- Runtime deps: `react`, `react-dom`.
- Dev deps: `vite`, `@vitejs/plugin-react`, `tailwindcss`, `postcss`, `autoprefixer`, `eslint`.
- Vite config is minimal (`vite.config.js`) — add plugins there only when necessary.

Useful notes for editing/code-gen
- When adding a new component, export as default and place under `src/app/components`. Update imports in `src/App.jsx` if it becomes the new root view.
- If you add new file types or change directory layout, update `tailwind.config.js` `content` globs and `index.html` if adding top-level HTML files.
- Preserve image import style (static imports) to keep Vite asset handling predictable.

Known quirks & gotchas
- There is a PostCSS config file under `src/app/components` whose filename includes a leading space (` postcss.config.js`). Consider renaming to `postcss.config.js` at repo root if you change build setup.
- The repo uses Tailwind v4-dev dependency; verify local `tailwindcss` CLI usage if you add custom plugins.

If you make changes to scripts or tooling, update this file and the top-level `README.md`.

What I (AI) should do next when asked to implement features
- Read `src/app/components/grid.jsx` and `src/app/shared/LETTERS.js` to follow data + asset patterns.
- Run `npm run dev` locally to verify UI changes.
- Add unit tests only after a test harness is introduced — none exists in the repo currently.

If anything here is unclear or you'd like different priorities (tests, stricter lint rules, CI), tell me which area to expand.
