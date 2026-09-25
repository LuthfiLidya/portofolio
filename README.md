# Lupio portfolio

Current scope: animated hero and About Me sections for Luthfi Lidya Ningrum. Project, experience, achievement, and contact sections will follow when their content is available.

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

The static site is generated in `out/`. On Vercel, import this repository, keep Root Directory at `./`, and use the Next.js framework preset.

## Assets

- `img/hero-section.png`: Canva composition reference.
- `img/about-me.png`: Canva About Me composition reference.
- `img/lupio.jpeg`: original portrait.
- `img/lupio-transparant.png`: transparent portrait source.
- `img/lupio-about-me.png`: About Me portrait source.
- `public/img/lupio-transparant.png`: copy served by the site.
- `public/img/lupio-about-me.png`: About Me portrait served by the site.
- `public/img/software/`: software marks used in the About Me section. Product names and logos belong to their respective owners.

The intro, hero, and scroll motion live in `src/components/LupioPortfolio.tsx`. About Me content lives in `src/components/AboutMe.tsx`. The visual layout and responsive rules live in `src/app/globals.css`.
