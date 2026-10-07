# Aman Singh - Portfolio

Personal portfolio built with Next.js 16 (App Router), TypeScript, Tailwind CSS 4, AOS scroll animations, Framer Motion and the Kinetic Text Reveal component from [Componentry](https://github.com/harshjdhv/componentry) (MIT).

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
```

Production build: `npm run build && npm start`.

## Editing content

Everything on the page comes from `src/data/`:

- `site.ts` - name, role, tagline, stats, the "Open to opportunities" switch (`openToWork`), **email**, resume link and social links
- `experience.ts` - jobs on the timeline (each company has its own accent colour)
- `projects.ts` - cards in "Featured Projects" (screenshots live in `src/assets/projects/`)
- `skills.ts` - stack groups with their icons and brand colours

## Contact form

The form posts to `src/app/api/contact/route.ts`, which emails you through [Resend](https://resend.com).
Copy `.env.example` to `.env.local` (and add the same variables on Vercel) with your Resend API key and the inbox that should receive messages.
Until that is set, the form opens the visitor's mail app if `email` is filled in `site.ts`, and otherwise points them to LinkedIn.

## How the page works

- `Starfield` - the drifting constellation behind the page, linking to the cursor.
- `Hud` - corner readouts (local time, time on page, cursor position) and the scroll bar on the right edge.
- `CursorRing` - the cyan ring that follows the mouse.
- Dark (black and cyan) is the default theme; the moon button in the nav switches to light and remembers the choice.
- One component per section in `src/components/` (Hero, About, Experience, Work, Stack, Contact, Footer).

Animations switch off for visitors who have "reduce motion" turned on.
