# Ragni Chawala — Portfolio

Personal portfolio built with React (JavaScript) and Vite.

## Scripts

> On this machine use `npm.cmd` instead of `npm` (PowerShell blocks `npm.ps1`).

```bash
npm.cmd install      # install dependencies
npm.cmd run dev      # start the dev server at http://localhost:5173
npm.cmd run build    # production build into /dist
npm.cmd run preview  # preview the production build
```

## Assets to add

Place these files in `public/` — the site already references them:

| File                        | Used by                                             |
| --------------------------- | --------------------------------------------------- |
| `public/ragni-profile.png`  | Hero portrait and Open Graph image (4:5 works best) |
| `public/Ragni-Chawla-CV.pdf`| "Download CV" buttons                               |

Until the portrait exists, the hero shows an "RC" monogram placeholder.

## Editing content

All text content lives in `src/data/`:

- `profile.js` — name, intro, email, LinkedIn and GitHub links
- `skills.js` — skill categories and levels (`applied` / `developing`)
- `experience.js`, `projects.js`, `education.js`

## Structure

```
src/
├── components/
│   ├── layout/     Navbar, Footer
│   ├── sections/   Hero, About, Skills, Experience, Projects, Education,
│   │               Certifications, Contact, ContactForm
│   └── ui/         Badge, Icons, Reveal, SectionHeading, socialLinks
├── data/           Static portfolio content
├── hooks/          useActiveSection, useReveal, useScrolled
├── services/       portfolioService.js — data-access layer
└── styles/         Design tokens and global styles
```

## Adding a Node.js / Express API later

The UI reads content only through `src/services/portfolioService.js`, so a backend can be introduced without changing components:

1. Create the API in a separate `server/` folder (e.g. Express on port 5000).
2. Uncomment the `/api` proxy in `vite.config.js`.
3. Copy `.env.example` to `.env` and set `VITE_API_BASE_URL` if the API runs on another origin.
4. Replace the service functions with `request('/api/...')` calls, and swap `buildMailtoLink` in the contact form for a `POST /api/contact` request.
