# Gagani Senanayake — Portfolio Website

A responsive personal portfolio built with plain HTML, CSS and JavaScript (no framework, no build step), for **ITC 3179 — Personal Portfolio Website Development**.

## Structure

```
portfolio-website/
├── index.html
├── style.css
├── script.js
├── vercel.json
└── assets/
    ├── profile.jpg
    ├── teago.jpg
    ├── cybersummit.jpg
    ├── eternal.jpg
    ├── expensetracker.jpg
    └── Gagani_Senanayake_CV.pdf
```

## Deploy to Vercel

**GitHub + Vercel dashboard (recommended)**
1. Create a GitHub repository and upload everything inside this folder to the repo root (index.html must sit at the root, not inside a subfolder).
2. Go to vercel.com → sign in with GitHub → Add New → Project → import the repo.
3. Framework preset: "Other" — leave Build Command and Output Directory blank.
4. Click Deploy. You'll get a live URL to submit.

**Vercel CLI**
```bash
npm install -g vercel
cd portfolio-website
vercel --prod
```

## Local preview
```bash
npx serve .
```
or open `index.html` directly in a browser.

## Notes
- The contact form opens the visitor's email app pre-filled (works with zero backend). Swap in a service like Formspree if you'd rather receive submissions directly.
