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


## Writing

Posts are Markdown files in `src/posts/`. Adding one means adding a file — no
index to update, no route to register:

```markdown
---
title: Keeping a watch party in sync
date: 2026-07-18
summary: One sentence, shown in the list on the home page.
draft: true
---

Body copy here.
```

`date` drives the ordering (newest first) and is reformatted for display, so
`2026-07-18` renders as "18 July 2026". Set `draft: true` to keep a post out of
the site entirely while you work on it.

Each post gets a real route at `/writing/<filename>`. `vercel.json` rewrites all
paths to `index.html` so those routes survive a hard refresh.

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

## Project images

Images live in `public/projects/` and are referenced by the `image` field on
each project in `src/content.js`. A project without one renders no preview —
nothing breaks, so add them as you get them.

On pointer devices, hovering a project row floats a thumbnail that follows the
cursor (`src/components/HoverPreview.jsx`). On phones the image sits inside the
expanded row instead. Position is written directly to the node inside a rAF
loop rather than held in React state, so moving the mouse does not re-render
the list.

Target roughly **1000×480** — a 2:1 crop of the top of the page, which keeps the
site's own nav in frame. To capture one:

```bash
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
  --headless=new --hide-scrollbars --window-size=1440,900 \
  --virtual-time-budget=8000 --screenshot=shot.png "https://example.com"
```

Then crop off anything below ~690px (cookie banners tend to live there), scale
to 1000px wide, and save as JPEG around quality 82 — that lands each image
under ~90KB. Any image editor does this; `sips -s format jpeg -s formatOptions
82` handles the last step from the terminal.

**Still missing captures:** GoGMI LMS, WatchWithMe and Staay. Each needs
credentials (Postgres, Supabase) to run locally, so they could not be captured
from source — deploy them, or drop screenshots into `public/projects/` and set
the `image` field.

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

## Pages

Each section is a real route, not an anchor on one long page:

| Route | Page |
|---|---|
| `/` | Hero, current focus, three featured projects, two latest posts |
| `/work` | Every project |
| `/writing` | Post list |
| `/writing/<slug>` | A post |
| `/about` | Bio, what I'm looking for, links, toolkit |
| `/contact` | Email and the invitation to build |

`vercel.json` rewrites every path to `index.html` so these survive a refresh.

## Type

**Archivo** for anything structural — headings, labels, nav — because it stays
unambiguous at small sizes and holds up at heavy weights. **Inter** for reading.
**JetBrains Mono** only for genuinely technical text: code blocks, repo paths,
stack names.

Metadata labels use the display face rather than wide-tracked mono. Monospace at
11px with 0.22em tracking looks good in a screenshot and is slow to actually read,
and those labels appear on every page.

## Structure

```
src/
  content.js              all copy, projects, links
  main.jsx                routes + app shell (nav, footer, tab bar)
  index.css               design tokens, .label, .prose, reveals
  pages/                  Home, WorkPage, WritingPage, AboutPage, ContactPage, Post, NotFound
  posts/*.md              blog posts, frontmatter + body
  lib/posts.js            reads and sorts the Markdown
  components/             Hero, Work, About, Stack, Writing, Contact, Nav, TabBar,
                          Footer, PageHeader, HoverPreview, Clock, ThemeToggle
  hooks/                  useReveal, usePageTitle
```

## Before deploying

- Replace `public/favicon.svg` and the `icon-*.png` set with a real mark
- Add `public/og.png` (1200×630) — `index.html` already points at it
- Set the canonical URL in `index.html` if you use a custom domain

Deploys to Vercel or Netlify as a static build: build command `npm run build`,
output directory `dist`.
