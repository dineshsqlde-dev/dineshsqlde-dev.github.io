# Dinesh Kumar Yarragudi: Portfolio
React + Vite + TypeScript + Tailwind + Framer Motion.

## Develop
`npm install` then `npm run dev`. Production build: `npm run build` (output in `dist/`).

## Edit content
All text, projects, skills and links live in `src/data/site.ts`. Set `LINKS.linkedin` and `LINKS.github`; until then they show as "not set" rather than fake links.

## Deploy (GitHub Pages)
1. Create a repo named `USERNAME.github.io` and push to `main`.
2. Settings > Pages > Source: **GitHub Actions**.
3. The workflow in `.github/workflows/deploy.yml` builds and publishes on every push. `vite.config.ts` uses `base: '/'`, correct for a user site. For a project site, set it to `'/<repo>/'`.
