import { links, person } from '../content'

export function Footer() {
  return (
    <footer className="shell border-t border-rule py-10">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="label">
          © {new Date().getFullYear()} {person.name} — {person.location}
        </p>

        <nav className="flex flex-wrap gap-x-6 gap-y-2">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="label link-underline transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <p className="label">
          Set in Instrument Serif &amp; JetBrains Mono
        </p>
      </div>
    </footer>
  )
}
