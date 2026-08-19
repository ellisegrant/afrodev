// ─────────────────────────────────────────────────────────────────────────────
// EVERYTHING YOU EDIT LIVES IN THIS FILE.
// The components read from here — you should never have to touch JSX to change
// a word, add a project, or swap a link.
//
// Anything marked TODO is a guess drawn from the repos on your machine.
// Verify it before you put this in front of a client.
// ─────────────────────────────────────────────────────────────────────────────

export const person = {
  name: 'Ellise Grant Boamah',
  alias: 'Afrodev',
  role: 'Software Developer',
  location: 'Accra, Ghana',
  timezone: 'Africa/Accra',
  email: 'inoxcel4u@gmail.com',
  available: true,
  availableNote: 'Available for freelance & full-time work',
}

// The opening statement. Keep it to one thought. The `emphasis` words render
// in italic serif — pick two or three, no more.
export const hero = {
  line: 'I build software that ships, holds up, and stays understandable a year later.',
  emphasis: ['ships', 'holds up'],
  intro:
    'Full-stack developer working across React, Node and Postgres. Most of my work is the unglamorous middle: auth that actually locks, schemas that survive a change of mind, interfaces people do not need explained to them.',
}

export const links = [
  // TODO: replace with your real handles.
  { label: 'GitHub', href: 'https://github.com/', handle: '@afrodev' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/', handle: 'Ellise Grant Boamah' },
  { label: 'X', href: 'https://x.com/', handle: '@afrodev' },
]

// Projects render as an indexed list. Order matters — best work first.
// `year`, `role` and `stack` are pulled from the repos; `blurb` is the part
// worth rewriting in your own voice.
//
// `image` is a path under public/projects/. Rows without one simply render no
// preview — nothing breaks, so add them as you capture them. Aim for roughly
// 1000x480 (a 2:1 crop of the top of the page); see README for the recipe.
export const projects = [
  {
    id: '001',
    title: 'GoGMI LMS',
    year: '2026',
    role: 'Full-stack', // TODO: solo? team? client name?
    blurb:
      'A learning management system built end to end — course delivery on the front, a hardened Express API behind it. Role-based access, JWT sessions, file uploads and request validation at every boundary.',
    stack: ['React', 'Vite', 'Express', 'Prisma', 'PostgreSQL', 'JWT', 'Zod'],
    href: null, // TODO: live URL
    repo: null, // TODO: repo URL
    image: null, // TODO: needs Postgres + env to run, so I could not capture it
    note: 'Frontend, API and schema.',
  },
  {
    id: '002',
    title: 'WatchWithMe',
    year: '2026',
    role: 'Full-stack',
    blurb:
      'Real-time watch parties. Everyone in a room stays frame-aligned on the same video — the hard part is not the player, it is reconciling clocks and late joiners over sockets without the room drifting apart.',
    stack: ['React', 'Socket.IO', 'Express', 'Supabase', 'YouTube API'],
    href: null,
    repo: null,
    image: null, // TODO: needs Supabase credentials to run
    note: 'Realtime sync, rooms, presence.',
  },
  {
    id: '003',
    title: 'Staay',
    year: '2026',
    role: 'Frontend',
    blurb:
      'A 3D web experience rendered in the browser with React Three Fiber — scene composition, animation choreography and state kept light enough to hold sixty frames on a mid-range phone.',
    stack: ['React Three Fiber', 'Three.js', 'Zustand', 'Framer Motion', 'Supabase'],
    href: null,
    repo: null,
    image: null, // TODO: needs Supabase credentials to run
    note: 'WebGL, motion, performance budget.',
  },
  {
    id: '004',
    title: 'The Cabin Tea Podcast',
    year: '2026',
    role: 'Design & build',
    blurb:
      'A podcast site with real routes, per-episode social cards generated at build time, and an editorial layout that gives long-form show notes room to breathe.',
    stack: ['Vite', 'React Router', 'Tailwind', 'Vercel'],
    href: 'https://www.thecabintea.com/',
    repo: null,
    image: '/projects/cabintea.jpg',
    note: 'Build-time meta generation.',
  },
  {
    id: '005',
    title: 'Inoxcel',
    year: '2026',
    role: 'Frontend',
    blurb:
      'Marketing site for a delivery consultancy. Every service is a real, linkable route rather than a client-side tab switch — shareable, indexable, and correct with the back button.',
    stack: ['React', 'React Router v7', 'Vite'],
    href: null, // TODO: live URL — captured from a local build
    repo: null,
    image: '/projects/inoxcel.jpg',
    note: 'Routing architecture, page system.',
  },
]

// Grouped so the reader can scan by concern rather than read a wall of logos.
export const stack = [
  { group: 'Languages', items: ['JavaScript', 'TypeScript', 'SQL', 'HTML', 'CSS'] },
  { group: 'Frontend', items: ['React', 'React Router', 'Vite', 'Tailwind', 'Three.js'] },
  { group: 'Backend', items: ['Node', 'Express', 'Prisma', 'PostgreSQL', 'Supabase'] },
  { group: 'Practice', items: ['REST APIs', 'Auth & sessions', 'Schema design', 'Realtime', 'Git'] },
]

// Three or four beats, plain-spoken. This is the section people actually read.
export const about = [
  'I am Ellise Grant Boamah — most people I work with call me Afrodev. I am a software developer based in Accra, Ghana, and I have spent the last few years building full-stack products for the web: learning platforms, realtime apps, marketing sites, and the APIs underneath them.',
  'I care about the parts that do not photograph well. A clear data model. Auth you cannot walk around. Error states written for the person having the bad day. Code the next developer can read without a meeting.',
  'I work end to end — I am as comfortable shaping a Postgres schema as I am arguing about type scale — which means fewer handoffs, fewer things lost between them, and a product that feels like one decision rather than five.',
]

// TODO: fill these in, or delete the section entirely from App.jsx.
export const experience = [
  // { org: 'Company', role: 'Software Developer', period: '2024 — Present', note: 'One line on what you shipped.' },
]

export const contact = {
  heading: 'Have something worth building?',
  body: 'Open to freelance projects, contract work and full-time roles. Tell me what you are making and where it is stuck — I read everything.',
}
