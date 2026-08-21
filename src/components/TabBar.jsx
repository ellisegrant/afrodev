import { NavLink } from 'react-router-dom'

/* Hairline glyphs drawn to match the page's rule weight. */
const icons = {
  home: <path d="M3 8.5 10 3l7 5.5V16a1 1 0 0 1-1 1h-3v-5H7v5H4a1 1 0 0 1-1-1V8.5Z" />,
  work: <path d="M3 5.5h14M3 10h14M3 14.5h9" />,
  writing: (
    <>
      <path d="M3 15h12" />
      <path d="M11.5 3.5a1.6 1.6 0 0 1 2.3 2.3L7 12.6l-3 .9.9-3 6.6-7Z" />
    </>
  ),
  about: (
    <>
      <circle cx="10" cy="7" r="3" />
      <path d="M4 17c0-3.3 2.7-5 6-5s6 1.7 6 5" />
    </>
  ),
  contact: (
    <>
      <rect x="3" y="5" width="14" height="10" rx="1" />
      <path d="m3.5 6 6.5 5 6.5-5" />
    </>
  ),
}

const tabs = [
  { to: '/', label: 'Home', icon: 'home' },
  { to: '/work', label: 'Work', icon: 'work' },
  { to: '/writing', label: 'Writing', icon: 'writing' },
  { to: '/about', label: 'About', icon: 'about' },
  { to: '/contact', label: 'Contact', icon: 'contact' },
]

/**
 * Bottom tab bar, phones only. Now that each section is its own route the
 * active tab comes from the router rather than a scroll position.
 */
export function TabBar() {
  return (
    <nav
      aria-label="Sections"
      className="pb-safe fixed inset-x-0 bottom-0 z-40 border-t border-rule bg-paper/90 backdrop-blur-md sm:hidden"
    >
      <ul className="flex items-stretch">
        {tabs.map((tab) => (
          <li key={tab.to} className="flex-1">
            <NavLink
              to={tab.to}
              end={tab.to === '/'}
              className={({ isActive }) =>
                `flex min-h-[3.5rem] flex-col items-center justify-center gap-1.5 py-2 transition-colors duration-200 active:bg-ink/5 ${
                  isActive ? 'text-accent' : 'text-muted'
                }`
              }
            >
              <svg
                viewBox="0 0 20 20"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                {icons[tab.icon]}
              </svg>
              <span className="font-display text-[0.5625rem] font-semibold uppercase tracking-[0.08em]">
                {tab.label}
              </span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}
