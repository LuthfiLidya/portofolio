# Lupio portfolio

Current scope: animated hero section for Luthfi Lidya Ningrum. The rest of the portfolio will be built when project details and contact links are available.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production build

```bash
npm run build
```

The static site is generated in `out/`. On Vercel, create a project with `lupio` as its Root Directory and use the Next.js framework preset.

## Assets

- `img/hero-section.png`: Canva composition reference.
- `img/lupio.jpeg`: original portrait.
- `img/lupio-transparant.png`: transparent portrait source.
- `public/img/lupio-transparant.png`: copy served by the site.

The intro and hero motion live in `src/components/LupioPortfolio.tsx`. The visual layout and responsive rules live in `src/app/globals.css`.
