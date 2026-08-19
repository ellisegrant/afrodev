import { useEffect, useState } from 'react'

/* Hairline glyphs drawn to match the page's rule weight — a stroked icon set
   keeps the bar in the same visual language as the hairline dividers. */
const icons = {
  home: (
    <path d="M3 8.5 10 3l7 5.5V16a1 1 0 0 1-1 1h-3v-5H7v5H4a1 1 0 0 1-1-1V8.5Z" />
  ),
  work: (
    <>
      <path d="M3 5.5h14M3 10h14M3 14.5h9" />
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
  stack: (
    <>
      <path d="m10 3 7 3.5-7 3.5-7-3.5L10 3Z" />
      <path d="m3 10.5 7 3.5 7-3.5" />
    </>
  ),
}

// Every section gets a tab. Leaving one out would light the wrong tab while
// the reader is inside it.
const tabs = [
  { id: 'top', label: 'Home', icon: 'home' },
  { id: 'work', label: 'Work', icon: 'work' },
  { id: 'about', label: 'About', icon: 'about' },
  { id: 'stack', label: 'Stack', icon: 'stack' },
  { id: 'contact', label: 'Contact', icon: 'contact' },
]

/**
 * Bottom tab bar, phones only. Desktop keeps the links in the top nav — a tab
 * bar on a wide screen reads as a mobile site someone forgot to adapt.
 */
export function TabBar() {
  const [active, setActive] = useState('top')

  useEffect(() => {
    let frame = 0

    const update = () => {
      frame = 0
      // The tab the user is "in" is the last section whose top has passed the
      // header. Cheaper and steadier than ratio-based observation on sections
      // of wildly different heights.
      const line = 140
      let current = tabs[0].id
      for (const tab of tabs) {
        const el = document.getElementById(tab.id)
        if (el && el.getBoundingClientRect().top <= line) current = tab.id
      }
      // Anything within a screen of the bottom counts as the last tab, which
      // short final sections would otherwise never reach.
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 80) {
        current = tabs[tabs.length - 1].id
      }
      setActive(current)
    }

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }

    // rAF is throttled while the page is hidden, so a tab restored from the
    // background would keep whatever it last painted until the next scroll.
    const onVisible = () => {
      if (document.visibilityState === 'visible') update()
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    document.addEventListener('visibilitychange', onVisible)
    return () => {
      if (frame) cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      document.removeEventListener('visibilitychange', onVisible)
    }
  }, [])

  return (
    <nav
      aria-label="Sections"
      className="pb-safe fixed inset-x-0 bottom-0 z-40 border-t border-rule bg-paper/90 backdrop-blur-md sm:hidden"
    >
      <ul className="flex items-stretch">
        {tabs.map((tab) => {
          const isActive = active === tab.id
          return (
            <li key={tab.id} className="flex-1">
              <a
                href={`#${tab.id}`}
                aria-current={isActive ? 'true' : undefined}
                className={`flex min-h-[3.5rem] flex-col items-center justify-center gap-1.5 py-2 transition-colors duration-200 active:bg-ink/5 ${
                  isActive ? 'text-accent' : 'text-muted'
                }`}
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
                <span className="font-mono text-[0.5625rem] uppercase tracking-[0.12em]">
                  {tab.label}
                </span>
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
