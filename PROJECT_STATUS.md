# Project Status — Ragni Chawala Portfolio

_Last updated: 12 September 2026_

## Summary

A personal portfolio website built with **React (JavaScript, no TypeScript) and Vite**. The site is complete, runs locally, and the production build passes with no errors. It is **not yet on GitHub or hosted online**. **One content fix is still needed:** the CV file in `public/` has to be replaced with the real PDF.

| Item | Status |
| --- | --- |
| Production build (`npm.cmd run build`) | ✅ Passes, no errors or warnings |
| All sections built and responsive | ✅ Checked at desktop (1440px), tablet (820px) and mobile (390px) |
| Light / Dark / System theme | ✅ Working |
| Profile photo | ✅ Added and displaying |
| CV download | ⚠️ Button works, but `public/Ragni-Chawla-CV.pdf` is not a real PDF yet (see Remaining issues) |
| Git / GitHub | ❌ Not started (the folder is not a Git repository yet) |
| Hosting | ❌ Not started |

---

## 1. What has been completed

- **Project setup:** React 19 + Vite 8 with plain JavaScript, a clean component structure, a complete `.gitignore`, a `README.md` and a `.env.example`. There is no backend, external API or database.
- **All requested sections:**
  1. Sticky navigation
  2. Hero with profile photo
  3. About Me
  4. Technical Skills
  5. Professional Experience
  6. Featured Projects
  7. Education
  8. Certifications
  9. Contact
  10. Footer with LinkedIn, GitHub and email
- **Content updates made during the session:**
  - Name shown as **Ragni Chawala** (site, page title, SEO tags).
  - GitHub set to **https://github.com/ragni33** (hero, contact card, footer).
  - Working Student role shows **Oceyon** and **August 2026 – Present**.
  - Skills trimmed: MATLAB, EEGLAB and BCILAB removed from the skills cards. Card 03 is **AI & Machine Learning** (6 skills) and card 05 is **AI Research & Analysis** (5 skills).
  - Phone number is not shown anywhere on the site.
- **Reliability fixes:**
  - The dev server no longer crashes when images or PDFs are copied into `public/` (a Windows file-lock issue).
  - The Download CV buttons check that the file really is a PDF before downloading. If it isn't, visitors see "The CV is unavailable right now. Please email …" instead of receiving a broken file.
- **Testing done:**
  - Visual screenshots of every section in both themes and at three screen sizes.
  - Automated browser test: the portrait loads, and both CV buttons download a valid `Ragni-Chawla-CV.pdf` when a real PDF is present (tested with a sample PDF). All checks passed.

## 2. Current design and features

### Design
- **Colours:** refined dark navy, teal and warm white. The light theme uses a warm white background, navy text and a deeper teal.
- **Typography:** Fraunces (serif headings), Inter (body text) and JetBrains Mono (small data-style labels), loaded from Google Fonts.
- **Details:** a subtle grid background in the hero, a "// profile" info card, Berlin coordinates under the photo, numbered section labels (01–07) and a dot-matrix corner on project cards.
- **Motion:** gentle fade-in on load and on scroll, and small hover lifts on cards. All animation is turned off for visitors who choose "reduce motion" on their device.

### Features
- **Theme switcher** (sun / moon / monitor icons in the navbar): Light, Dark or System default. The visitor's choice is remembered, and there is no flash of the wrong theme on page load.
- **Navigation:** sticky navbar that highlights the current section and scrolls smoothly. Below 1180px wide it becomes a menu button, which closes with the Esc key.
- **Skills:** grouped into 6 cards. A solid marker means applied experience; a dashed marker means currently developing. Filter buttons: All / Applied / Developing.
- **Experience:** timeline layout with a "Current" badge on the Oceyon role.
- **Projects:** 4 cards with status badges (In Development, Concept & Prototype, Academic Project).
- **Contact:** email, LinkedIn, GitHub and location cards, plus a form with validation. The form opens the visitor's email app with the message pre-filled, because there is no backend yet.
- **Accessibility:** semantic HTML, a "skip to main content" link, keyboard-friendly controls, visible focus outlines, alt text and screen-reader labels.
- **SEO:** page title, meta description, Open Graph and Twitter tags, and structured data (JSON-LD) describing you as a person.
- **Ready for a backend later:** all content lives in `src/data/`, and components read it through `src/services/portfolioService.js`, so a Node.js/Express API can be added without changing the UI. A `/api` proxy is prepared (commented out) in `vite.config.js`.

### Where to edit content

| What | File |
| --- | --- |
| Name, intro, email, LinkedIn, GitHub, photo and CV paths | `src/data/profile.js` |
| Skills and skill levels | `src/data/skills.js` |
| Experience | `src/data/experience.js` |
| Projects and status badges | `src/data/projects.js` |
| Education and certifications | `src/data/education.js` |
| Colours for both themes | `src/styles/tokens.css` |

## 3. Profile image and CV location

Both files go in the **`public/`** folder at the project root. The file names must match exactly (they are case-sensitive once hosted online).

| File | Path | Current state |
| --- | --- | --- |
| Profile photo | `public/ragni-profile.png` | ✅ Added and working (797 × 995 px, transparent background) |
| CV | `public/Ragni-Chawla-CV.pdf` | ⚠️ **Must be replaced.** The current file is a 3 KB copy of the website page, not your CV. |

To change either path, edit `portrait.src` or `cv.href` / `cv.fileName` in `src/data/profile.js`.

## 4. Remaining issues

1. **CV file is not a real PDF.** `public/Ragni-Chawla-CV.pdf` contains the website's HTML: it was saved from the Download button before a real CV existed. Replace it with your actual CV, keeping the exact file name. Anyone visiting the site can download it, so check that it has **no phone number** or other details you don't want public.
2. **Not under version control yet.** The folder is not a Git repository, so there is no history or backup of the code.
3. **Social-preview links need the final domain.** `og:image` and `twitter:image` use a relative path (`/ragni-profile.png`), and `og:url` / canonical link are not set. LinkedIn and other sites need full URLs, so update these in `index.html` once the site has a public address (a TODO is marked there).
4. **Project wording to review.** The *AI Business Intelligence Dashboard* card says "All company information is kept anonymous", while the Experience section now names Oceyon. Decide whether that wording should stay.
5. **Skill levels were assigned from your CV details.** Review "Applied" vs "Developing" in `src/data/skills.js`.
6. **Contact form depends on the visitor's email app** (mailto). It will not work for visitors with no email app set up. Email, LinkedIn and GitHub links are shown next to it as alternatives.
7. **Hosting in Germany, worth checking before going live (not legal advice):**
   - Fonts load from Google's servers. Some German rulings consider this a data-protection issue, so self-hosting the fonts may be preferable.
   - Consider whether the site needs an Impressum or privacy notice.

## 5. Next steps for tomorrow (GitHub and hosting)

### Before starting
1. Copy your real CV to `public/Ragni-Chawla-CV.pdf`.
2. Open a terminal in `C:\Users\ragni\ragni_portfolio` and run:
   ```bash
   npm.cmd install
   npm.cmd run build
   ```
3. Check the site locally: `npm.cmd run dev` → http://localhost:5173/ (add `-- --host` to test on your phone).

### Put the project on GitHub
1. Create an **empty** repository at https://github.com/new under `ragni33` (for example `ragni-portfolio`). Do not add a README or .gitignore there.
2. In the project folder:
   ```bash
   git init
   git add .
   git status          # confirm node_modules/ and dist/ are NOT listed
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/ragni33/ragni-portfolio.git
   git push -u origin main
   ```

### Host the site (recommended: Vercel or Netlify, free)
1. Sign in with GitHub and import the `ragni-portfolio` repository.
2. Settings (usually detected automatically for Vite):
   - **Build command:** `npm run build`
   - **Output directory:** `dist`
3. Deploy, then open the live URL and test the photo, the CV download, the theme switcher and the mobile menu.
4. Every future `git push` to `main` redeploys automatically.

_Alternative: GitHub Pages works too, but a project-page URL (`ragni33.github.io/ragni-portfolio/`) needs `base: '/ragni-portfolio/'` added in `vite.config.js`._

### After the site is live
1. In `index.html`, add `og:url` and a canonical link, and change `og:image` / `twitter:image` to full URLs (e.g. `https://your-domain/ragni-profile.png`).
2. Optionally connect a custom domain in the hosting dashboard.
3. Decide on the Google Fonts and Impressum / privacy points above.
4. Later: add the Node.js/Express API in a `server/` folder (see `README.md`).

## Useful commands

| Command | Purpose |
| --- | --- |
| `npm.cmd install` | Install dependencies |
| `npm.cmd run dev` | Start the dev server at http://localhost:5173/ |
| `npm.cmd run dev -- --host` | Same, reachable from your phone on the same Wi-Fi |
| `npm.cmd run build` | Production build into `dist/` |
| `npm.cmd run preview` | Preview the production build locally |

> Use `npm.cmd` instead of `npm` on this computer, because PowerShell blocks `npm.ps1`.
