# Project Status — Ragni Chawala Portfolio

_Last updated: 16 September 2026_

## Summary

Personal portfolio built with **React 19 + Vite 8 (JavaScript, no TypeScript)**. The site is **live on GitHub Pages**, the code is on GitHub, and the production build passes with no errors.

| Item | Status |
| --- | --- |
| Live site | ✅ https://ragni33.github.io/portfolio/ |
| Repository | ✅ https://github.com/ragni33/portfolio (public) |
| Automatic deploys | ✅ Every push to `main` rebuilds and redeploys |
| Production build | ✅ Passes, no errors or warnings |
| Profile photo | ✅ Live and working |
| CV download | ✅ Real CV (1 MB) downloads from both buttons |
| Uncommitted work | ⚠️ One change, see "Where things stand" |

---

## 1. What was completed today

### Published the site
- Created the GitHub repository `ragni33/portfolio` and pushed the project (5 commits).
- Added `.github/workflows/deploy.yml`, which builds the site and publishes `dist/` to GitHub Pages on every push to `main`.
- Set the Vite `base` to `/portfolio/`, and made the photo and CV paths use `import.meta.env.BASE_URL` so they work both locally and at the project URL.
- Turned on GitHub Pages (Source: GitHub Actions) and confirmed the deploy succeeded.

### Real CV
- Replaced the broken placeholder file with your real `Ragni-Chawla-CV.pdf` (1,046,052 bytes).
- Both Download CV buttons check the file is a genuine PDF before downloading, and fall back to a "CV coming soon" button if it is ever missing.
- Verified on the live site: both buttons save a valid PDF of the correct size.

### Hero section
- Fixed the cropping problem: the hero now fits laptop screens (660px at 1366×768, 692px at 1280×800, 612px at 1280×720).
- Enlarged the portrait to **566×708** at 1440×900 (was 430×538), balanced against the 544px text column and centred on it to the pixel.
- Removed the floating "// profile" card that covered the photo.
- Removed the "52.52° N · 13.40° E / BERLIN" caption under the photo.
- Photo uses `object-fit: cover` with `object-position: 50% 15%`, so the head and upper body are never cut.

### Content changes
- **About:** removed the Location / Studying / Background row and its divider.
- **Technical skills:** new headline ("Technical skills for building intelligent digital solutions.") and description; removed the solid/outlined marker explanation; fixed skill badges that looked faded or disabled; the All / Applied / Developing filters and 37 skill chips remain.
- **Projects:** replaced P-03 and P-04 with **E-Commerce Storefront** and **Task Management Dashboard**; removed all status badges; new section headline and summary.
- **Experience:** the Working Student role now shows **Oceyon** and **August 2026 – Present**.

### Testing
Automated browser tests were run against both the local build and the live site, in dark and light themes, at 12 screen sizes from 1536×864 down to 320×568. All passed: no horizontal overflow, no image cropping, correct text, working CV download.

## 2. Where things stand right now

- **Live site** = commit `f7f43be`. Everything above is live **except** the change below.
- **Uncommitted (saved on your computer only):** `src/components/sections/Hero.css` — moves the photo closer to the left edge on wide screens (photo starts at x=64 instead of x=130 at 1440px; no shift below ~1310px wide, so it never crowds the edge).
  This change is built and tested but **not committed and not pushed**, as you asked.

## 3. Next steps for tomorrow

1. **Start the dev server** in `C:\Users\ragni\ragni_portfolio`:
   ```bash
   npm.cmd run dev
   ```
   Open **http://localhost:5173/portfolio/** (note the `/portfolio/` path).

2. **Review the one pending change** (photo moved left on wide screens), then either:
   - **Keep it:**
     ```bash
     git add -A
     git commit -m "Move the hero portrait closer to the left edge"
     git push
     ```
     The site redeploys automatically; it takes about a minute.
   - **Discard it:**
     ```bash
     git checkout -- src/components/sections/Hero.css
     ```

3. **Check the deploy** at https://github.com/ragni33/portfolio/actions, then open the live site and press **Ctrl + Shift + R** to bypass the browser cache.

### Optional improvements, not urgent
- **Link previews:** in `index.html`, add `og:url` and a canonical link, and change `og:image` / `twitter:image` to the full address (`https://ragni33.github.io/portfolio/ragni-profile.png`), so LinkedIn shows your photo when the link is shared.
- **Phones:** the photo sits below the text in the hero. It can be moved above the text if you prefer.
- **Remaining badges:** "Current" (Oceyon) and "In progress" (MSc) are still shown by choice.
- **Germany-specific, worth checking before wider sharing (not legal advice):** fonts load from Google's servers, which some German rulings treat as a data-protection issue; self-hosting them avoids it. Consider whether the site needs an Impressum or privacy notice.
- **Later:** add the Node.js/Express API in a `server/` folder (see `README.md`); the UI already reads content through `src/services/portfolioService.js`.

## Useful commands

| Command | Purpose |
| --- | --- |
| `npm.cmd install` | Install dependencies |
| `npm.cmd run dev` | Dev server at http://localhost:5173/portfolio/ |
| `npm.cmd run dev -- --host` | Same, reachable from your phone on the same Wi-Fi |
| `npm.cmd run build` | Production build into `dist/` |
| `npm.cmd run preview` | Preview the production build |
| `git status` | See what has changed |
| `git log --oneline -5` | Recent commits |

> Use `npm.cmd` instead of `npm` on this computer, because PowerShell blocks `npm.ps1`.

## Where to edit content

| What | File |
| --- | --- |
| Name, intro, email, LinkedIn, GitHub, photo and CV paths | `src/data/profile.js` |
| Skills and skill levels | `src/data/skills.js` |
| Experience | `src/data/experience.js` |
| Projects | `src/data/projects.js` |
| Education and certifications | `src/data/education.js` |
| Colours for both themes | `src/styles/tokens.css` |
| Photo and CV files | `public/` |
