import { useEffect, useState } from 'react'
import { links, person } from '../content'
import { ThemeToggle } from './ThemeToggle'

// Phones navigate from the bottom tab bar, so the pill carries only the
// wordmark and controls there — the same split a native app uses.
const items = [
  { href: '#work', label: 'Work' },
  { href: '#about', label: 'About' },
  { href: '#stack', label: 'Stack' },
  { href: '#contact', label: 'Contact' },
]

const MailIcon = () => (
  <>
    <rect x="2.5" y="4" width="13" height="10" rx="1" />
    <path d="m3 5 6 4.5L15 5" />
  </>
)

const GithubIcon = () => (
  <path d="M7 14.5c-3 1-3-1.5-4-2m8 4v-2.6c0-.8-.1-1.1-.4-1.4 2-.2 3.9-1 3.9-4.3a3.3 3.3 0 0 0-.9-2.3c.1-.2.4-1.1-.1-2.3 0 0-.8-.2-2.5 1a8.5 8.5 0 0 0-4.5 0C4.8 3.3 4 3.5 4 3.5c-.5 1.2-.2 2.1-.1 2.3a3.3 3.3 0 0 0-.9 2.3c0 3.3 1.9 4.1 3.9 4.3-.2.3-.4.7-.4 1.2V16" />
)

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const github = links.find((link) => link.label === 'GitHub')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="pt-safe sticky top-0 z-40 flex justify-center px-4 pt-3 sm:pt-5">
      <nav
        className={`flex items-center gap-2 rounded-full border px-3 py-2 backdrop-blur-md transition-all duration-300 sm:gap-4 sm:px-4 ${
          scrolled
            ? 'border-rule bg-paper/90 shadow-[0_10px_30px_-18px_rgb(0_0_0_/_0.5)]'
            : 'border-rule/70 bg-paper/70'
        }`}
      >
        <a
          href="#top"
          className="label whitespace-nowrap px-1 text-ink transition-opacity hover:opacity-60"
        >
          <span className="hidden lg:inline">{person.name}</span>
          <span className="mx-2 hidden text-muted lg:inline">/</span>
          <span className="text-accent">{person.alias}</span>
        </a>

        <span aria-hidden="true" className="hidden h-4 w-px bg-rule sm:block" />

        {items.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="label hidden whitespace-nowrap px-1 transition-colors hover:text-ink sm:inline-block"
          >
            {item.label}
          </a>
        ))}

        <span aria-hidden="true" className="hidden h-4 w-px bg-rule sm:block" />

        <div className="flex items-center gap-1">
          <ThemeToggle />
          <IconLink href={`mailto:${person.email}`} label="Email Ellise">
            <MailIcon />
          </IconLink>
          {github ? (
            <IconLink href={github.href} label="GitHub profile" external>
              <GithubIcon />
            </IconLink>
          ) : null}
        </div>
      </nav>
    </header>
  )
}

function IconLink({ href, label, external, children }) {
  return (
    <a
      href={href}
      aria-label={label}
      {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
      className="flex h-8 w-8 items-center justify-center rounded-full text-muted transition-colors hover:bg-ink/5 hover:text-ink"
    >
      <svg
        viewBox="0 0 18 18"
        className="h-4 w-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        {children}
      </svg>
    </a>
  )
}
