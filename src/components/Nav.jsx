import { useEffect, useState } from 'react'
import { person } from '../content'
import { ThemeToggle } from './ThemeToggle'

// `always: true` keeps a link in the bar on narrow screens; the rest appear
// from the `sm` breakpoint up, so the mobile bar never crowds the wordmark.
const items = [
  { href: '#work', label: 'Work', always: true },
  { href: '#about', label: 'About' },
  { href: '#stack', label: 'Stack' },
  { href: '#contact', label: 'Contact', always: true },
]

export function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-40 bg-paper/85 backdrop-blur-sm transition-colors duration-300 ${
        scrolled ? 'border-b border-rule' : 'border-b border-transparent'
      }`}
    >
      <div className="shell flex h-14 items-center justify-between gap-6 sm:h-16">
        {/* Narrow screens get the handle alone — the full name needs room the
            mobile bar does not have, and truncating a person's name reads badly. */}
        <a href="#top" className="label text-ink transition-opacity hover:opacity-60">
          <span className="hidden sm:inline">{person.name}</span>
          <span className="mx-2 hidden text-muted sm:inline">/</span>
          <span className="text-accent">{person.alias}</span>
        </a>

        <nav className="flex shrink-0 items-center gap-4 sm:gap-7">
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`label link-underline transition-colors hover:text-ink ${
                item.always ? 'inline-block' : 'hidden sm:inline-block'
              }`}
            >
              {item.label}
            </a>
          ))}
          <ThemeToggle />
        </nav>
      </div>
    </header>
  )
}
