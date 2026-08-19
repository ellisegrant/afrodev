# afrodev

Portfolio site for Ellise Grant Boamah (Afrodev) — software developer, Accra.

## Running it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # -> dist/
npm run preview  # serve the built output
```

## Where to edit things

**`src/content.js` holds every word, project and link on the site.** Adding a
project, changing the headline, or swapping a social handle is an edit to that
file only — you should never need to open a component to change copy.

Items marked `TODO` in that file are placeholders inferred from repos on this
machine. Fill them in before sending the site to anyone:

- Real GitHub / LinkedIn / X URLs in `links`
- `href` (live site) and `repo` for each project — projects with neither simply
  render without link buttons
- `role` and `year` per project, and the `experience` array if you want a work
  history block in the About section (leave it empty and the block disappears)

## Design

Editorial/typographic: paper background, near-black ink, one warm accent used
sparingly. Instrument Serif for display, Instrument Sans for body copy,
JetBrains Mono for every piece of metadata — that mono/serif split is the
system, so new sections should follow it rather than introduce a third voice.

Colors are CSS custom properties in `src/index.css` (`--paper`, `--ink`,
`--muted`, `--rule`, `--accent`) exposed to Tailwind as `bg-paper`, `text-ink`
and so on. Dark mode redefines only those variables under `.dark`, so changing
a color means editing one line, not hunting through components.

Theme is toggled by a class on `<html>`, persisted to `localStorage`, and set by
a small inline script in `index.html` before first paint so the page never
flashes the wrong theme.

## Mobile

Phones get app chrome rather than a shrunk-down desktop page:

- A fixed bottom **tab bar** (`src/components/TabBar.jsx`) with hairline icons
  drawn to match the page's rule weight. It highlights the section you are in
  by scroll position, rAF-throttled, with a `visibilitychange` catch-up for
  when the page comes back from the background.
- Top bar drops to wordmark + theme control, the way a native app splits
  identity from navigation.
- 56px tab targets, `env(safe-area-inset-*)` padding for notched phones,
  `overscroll-behavior: none` to kill rubber-banding, and no text selection on
  chrome elements.
- The site is **installable**: `public/manifest.webmanifest` plus apple-touch
  meta launch it standalone from the home screen, with light/dark status bars.

Everything above is `sm:`-gated — the desktop layout is untouched by it.

Icons were generated from SVG via `qlmanage`/`sips`. To regenerate, edit the
source SVG and re-run those; `icon-maskable-512.png` keeps the glyph inside the
80% safe zone so Android's mask never clips it.

## Structure

```
src/
  content.js              all copy, projects, links
  App.jsx                 section order
  index.css               design tokens + shared classes (.label, .shell, .reveal)
  hooks/useReveal.js      one IntersectionObserver for all scroll reveals
  components/
    Nav, Hero, Work, About, Stack, Contact, Footer
    TabBar.jsx              mobile bottom tab bar + scroll spy
    Section.jsx           shared numbered section header
    Clock.jsx             live Accra time
    ThemeToggle.jsx
```

## Before deploying

- Replace `public/favicon.svg` and the `icon-*.png` set with a real mark
- Add `public/og.png` (1200×630) — `index.html` already points at it
- Set the canonical URL in `index.html` if you use a custom domain

Deploys to Vercel or Netlify as a static build: build command `npm run build`,
output directory `dist`.
