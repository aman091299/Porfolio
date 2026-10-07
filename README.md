# Aman Singh - Portfolio

Personal portfolio built with Next.js 16 (App Router), TypeScript, Tailwind CSS 4, AOS scroll animations and a few [Componentry](https://github.com/harshjdhv/componentry) components (MIT).

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
```

Production build: `npm run build && npm start`.

## Editing content

Everything on the page comes from `src/data/`:

- `site.ts` - name, social links, **email** and resume link. Add your email here and every contact button becomes a mailto link (until then they open LinkedIn).
- `experience.ts` - jobs on the timeline
- `projects.ts` - cards in "Selected work" (screenshots live in `src/assets/projects/`)
- `skills.ts` - skill groups and the words in the scrolling band

## Where things live

- `src/app/` - layout (fonts, metadata, theme script), page, global styles and theme tokens, favicon
- `src/components/` - one file per section (Nav, Hero, TechMarquee, About, Experience, Work, Skills, Contact, Footer)
- `src/components/ui/` - Componentry components: kinetic text reveal (hero), velocity scroll (tech band), signature (about)

Light and dark themes follow the visitor's system setting, and the toggle in the nav remembers their choice.
Animations switch off for visitors who have "reduce motion" turned on.
