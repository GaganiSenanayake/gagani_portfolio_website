# Gagani Senanayake — Portfolio Website

A responsive personal portfolio built with plain HTML, CSS and JavaScript (no framework, no build step), created for **ITC 3179 — Personal Portfolio Website Development**.

## Structure

```
portfolio/
├── index.html      → all page content (Home, About, Skills, Work, Contact)
├── style.css        → design tokens + layout + responsive rules
├── script.js         → nav menu, active-tab highlighting, contact form
├── vercel.json       → clean-URL config for Vercel
└── assets/
    ├── profile.jpg               → hero photograph
    └── Gagani_Senanayake_CV.pdf  → downloadable CV
```

## Before you deploy

1. **Update the LinkedIn link.** In `index.html`, search for `id="linkedinLink"` and replace the `href="#"` with your real LinkedIn profile URL.
2. **Swap in your final CV** if it changes — just overwrite `assets/Gagani_Senanayake_CV.pdf` and keep the filename, or update the two `href` references to it in `index.html`.
3. **Contact form**: it currently opens the visitor's email app with a pre-filled message (works with zero backend, so it's fine for static hosting). If you'd rather receive submissions directly, connect a form service such as [Formspree](https://formspree.io) by pointing the form's `action` at your Formspree endpoint, or add a Vercel Serverless Function.

## Deploy to Vercel

**Option A — Vercel CLI**
```bash
npm install -g vercel
cd portfolio
vercel        # first deploy, follow the prompts
vercel --prod # promote to your production URL
```

**Option B — GitHub + Vercel dashboard (recommended for submission)**
1. Create a new GitHub repository and push this folder:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com), click **Add New → Project**, and import the repository.
3. Framework preset: **Other** (static site) — no build command, no output directory needed.
4. Click **Deploy**. Vercel gives you a live URL (e.g. `https://your-project.vercel.app`) — this is what you submit.

## Local preview

Any static server works, e.g.:
```bash
npx serve .
```
or simply open `index.html` in a browser.

## Notes for your submission report

- **Sections covered**: Home (intro + photo + branding statement), About (bio, education, certifications, downloadable CV), Skills (project/business, technical, tools), Work (3 projects: TeaGo, Cyber Summit 2026, Eternal Bliss Planners), Contact (form + direct info + social links).
- **Responsiveness**: fluid grid layouts collapse to single-column below 880px; navigation becomes a toggled mobile menu below 680px.
- **Accessibility**: skip link, visible focus states, semantic landmarks (`header`, `main`, `section`, `footer`), labelled form fields, `aria-live` status message, `prefers-reduced-motion` respected.
