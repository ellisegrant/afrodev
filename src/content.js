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
  email: 'elliseboamah@gmail.com',
  available: true,
  availableNote: 'Available for freelance & full-time work',
}

// The opening statement. Keep it to one thought. The `emphasis` words render
// in italic serif — pick two or three, no more.
export const hero = {
  line: 'I build software that ships, holds up, and stays understandable a year later.',
  emphasis: ['ships', 'holds up'],
  // Written as segments so parts of the sentence can be links. A segment with
  // an `href` renders in the accent colour and navigates; plain strings do not.
  intro: [
    { text: 'Full-stack developer working across React, Node and Postgres. Most of my ' },
    { text: 'work', href: '#work' },
    { text: ' is the unglamorous middle: auth that actually locks, schemas that survive a change of mind, interfaces people do not need explained to them. More on ' },
    { text: 'how I think', href: '#about' },
    { text: ' and ' },
    { text: 'what I reach for', href: '#stack' },
    { text: '.' },
  ],
}

// The two things worth saying out loud that a project list cannot say for you:
// what you want to work on next, and that you are open to building with people.
export const lookingFor = {
  label: 'What I am looking for',
  body: 'I follow football closely, and I want to work where the game meets software — club and league products, fan platforms, ticketing and matchday tooling, performance and match data. If you are building in that space, I would rather hear about it early than late.',
}

export const collaboration = {
  label: 'Building something?',
  body: 'I like building things with other people, including the half-formed ones. If you have an idea you want made — a product, a tool, a weekend experiment — reach out even if it is not fully thought through yet.',
}

// Three short present-tense lines. This is the part of a portfolio that goes
// stale fastest — rewrite it whenever what you are actually doing changes.
export const focus = [
  'Designing APIs that stay readable as the product grows past their first shape.',
  'Building auth and permissions that hold up when real users arrive.',
  'Shaping Postgres schemas that survive a change of mind.',
]

export const links = [
  // TODO: replace with your real handles.
  { label: 'GitHub', href: 'https://github.com/', handle: '@afrodev' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/', handle: 'Ellise Grant Boamah' },
  { label: 'X', href: 'https://x.com/', handle: '@afrodev' },
]

// Projects render as an indexed list. Order matters — best work first.
// Set `status: 'ongoing'` on anything still actively being built and the row
// shows a live marker. Omit it and the project reads as shipped.
// `year`, `role` and `stack` are pulled from the repos; `blurb` is the part
// worth rewriting in your own voice.
//
// `image` is a path under public/projects/. Rows without one simply render no
// preview — nothing breaks, so add them as you capture them. Aim for roughly
// 1000x480 (a 2:1 crop of the top of the page); see README for the recipe.
export const projects = [
  {
    id: '001',
    // TODO: confirm your role and which parts you built — the wording below
    // describes the product, not your specific contribution.
    title: 'Ventry Tickets',
    year: '2026',
    role: 'Frontend',
    blurb:
      'A digital ticketing platform for African events — organisers publish an event, sell tiered ticket types, run discount codes and check attendees in by QR at the door. Built for the realities of the market it serves: USSD ticketing for buyers without smartphones, WhatsApp delivery, multi-language support, and a transparent fee calculator that shows an organiser exactly what lands in their account before they commit.',
    stack: ['Next.js', 'React', 'Tailwind', 'Vercel', 'Payments', 'QR check-in'],
    href: 'https://www.ventrytickets.com',
    repo: null,
    image: '/projects/ventry.jpg',
    note: 'Ticketing, payments, organiser tooling.',
  },
  {
    id: '002',
    title: 'GoGMI Learning Platform',
    year: '2026',
    role: 'Full-stack',
    blurb:
      'The learning management system for the Gulf of Guinea Maritime Institute — professional maritime courses, certifications and CPD point tracking. Course delivery on the front, a hardened Express API behind it: role-based access, JWT sessions, file uploads and request validation at every boundary.',
    stack: ['React', 'Vite', 'Express', 'Prisma', 'PostgreSQL', 'JWT', 'Zod'],
    href: 'https://lms.gogmi.org.gh',
    repo: 'https://github.com/GoGMI-Ghana/GoGMI-LMS',
    image: '/projects/lms.jpg',
    note: 'Frontend, API and schema.',
  },
  {
    id: '003',
    title: 'GoGMI Intranet',
    year: '2026',
    role: 'Full-stack',
    blurb:
      'The internal portal the institute runs on — staff collaboration, work management and organisation-wide updates behind a single sign-in. Built as a separate frontend and backend so the intranet could evolve without touching the public site.',
    stack: ['React', 'Vite', 'Express', 'Node', 'PostgreSQL'],
    href: 'https://intranet.gogmi.org.gh',
    repo: 'https://github.com/ellisegrant/Gogmi-Intranet',
    image: '/projects/intranet.jpg',
    note: 'Separate frontend and backend services.',
  },
  {
    id: '004',
    title: 'Jesley',
    year: '2026',
    role: 'Full-stack',
    blurb:
      'Watch together, anywhere. Everyone in a room stays frame-aligned on the same video — the hard part is not the player, it is reconciling clocks and late joiners over sockets without the room drifting apart. Guest access means a room is one link away, no account required.',
    stack: ['React', 'Socket.IO', 'Express', 'Supabase', 'YouTube API'],
    href: 'https://jesley.vercel.app',
    repo: 'https://github.com/ellisegrant/WatchWithMe-Frontend',
    image: '/projects/watchwithme.jpg',
    note: 'Realtime sync, rooms, presence.',
  },
  {
    id: '005',
    title: 'The Cabin Tea Podcast',
    year: '2026',
    role: 'Design & build',
    blurb:
      'A podcast site with real routes, per-episode social cards generated at build time, and an editorial layout that gives long-form show notes room to breathe.',
    stack: ['Vite', 'React Router', 'Tailwind', 'Vercel'],
    href: 'https://www.thecabintea.com',
    repo: 'https://github.com/ellisegrant/TheCabinteaPodcast',
    image: '/projects/cabintea.jpg',
    note: 'Build-time meta generation.',
  },
  {
    id: '006',
    title: 'Staay',
    year: '2026',
    role: 'Frontend',
    blurb:
      'A beauty and fashion storefront with a 3D web experience rendered in the browser through React Three Fiber — scene composition, animation choreography and state kept light enough to hold sixty frames on a mid-range phone.',
    stack: ['React Three Fiber', 'Three.js', 'Zustand', 'Framer Motion', 'Supabase'],
    href: 'https://staayonline.com',
    repo: 'https://github.com/staaybystaay/staayonline',
    // TODO: needs a screenshot — the live site opens with a mailing-list modal
    // that blocks automated capture. Drop a 1440x690 image at this path.
    image: null,
    note: 'WebGL, motion, performance budget.',
  },
  {
    id: '007',
    title: 'Inoxcel',
    year: '2026',
    role: 'Frontend',
    blurb:
      'Marketing site for a delivery consultancy. Every service is a real, linkable route rather than a client-side tab switch — shareable, indexable, and correct with the back button.',
    stack: ['React', 'React Router v7', 'Vite'],
    href: 'https://inoxcel-site.vercel.app',
    repo: 'https://github.com/ellisegrant/inoxcel-site-',
    image: '/projects/inoxcel.jpg',
    note: 'Routing architecture, page system.',
  },
  {
    id: '008',
    title: 'GoGMI Institute Site',
    year: '2026',
    role: 'Frontend',
    blurb:
      'The public face of the Gulf of Guinea Maritime Institute — the organisation, its areas of work and its research, presented for a policy audience rather than a consumer one.',
    stack: ['React', 'Vite', 'Framer Motion', 'Radix UI', 'Tailwind'],
    href: 'https://gogmi.org.gh',
    repo: 'https://github.com/ellisegrant/Gogmi-v.20',
    // TODO: needs a screenshot — the homepage opens with a full-screen event
    // announcement that blocks automated capture.
    image: null,
    note: 'Public site for the institute.',
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
  'Away from the editor I am watching football. It is the thing I would most like to build for: the sport moves enormous amounts of money, attention and data, and a lot of the software around it is still worse than the game deserves.',
]

// TODO: fill these in, or delete the section entirely from App.jsx.
export const experience = [
  // { org: 'Company', role: 'Software Developer', period: '2024 — Present', note: 'One line on what you shipped.' },
]

// Posts render newest first. `date` is shown as-is, so write it the way you
// want it read. An empty array hides the whole section.
export const writing = [
  // { title: 'Why our LMS auth was wrong twice', date: 'August 2026', href: 'https://...' },
]

export const contact = {
  heading: 'Have something worth building?',
  body: 'Open to freelance projects, contract work and full-time roles — and always open to building something with someone. Tell me what you are making and where it is stuck. I read everything.',
}
