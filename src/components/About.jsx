import { about, experience, links, lookingFor, person } from '../content'
import { Section } from './Section'

export function About() {
  return (
    <Section id="about" index="02" title="About" label={person.alias}>
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="reveal space-y-6 lg:col-span-7">
          {about.map((paragraph, i) => (
            <p
              key={i}
              className={
                i === 0
                  ? 'font-display text-xl leading-snug sm:text-2xl lg:text-[1.75rem]'
                  : 'max-w-2xl text-[0.9375rem] leading-relaxed text-muted'
              }
            >
              {paragraph}
            </p>
          ))}
        </div>

        <aside className="reveal lg:col-span-4 lg:col-start-9" style={{ transitionDelay: '120ms' }}>
          {experience.length > 0 ? (
            <div className="mb-10">
              <span className="label mb-4 block">Experience</span>
              <ul className="space-y-5">
                {experience.map((role) => (
                  <li key={`${role.org}-${role.period}`} className="border-t border-rule pt-3">
                    <p className="font-display text-lg leading-tight">{role.role}</p>
                    <p className="label mt-1">
                      {role.org} — {role.period}
                    </p>
                    {role.note ? (
                      <p className="mt-2 text-sm leading-relaxed text-muted">{role.note}</p>
                    ) : null}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          {lookingFor ? (
            <div className="mb-10 border-l-2 border-accent pl-5">
              <span className="label mb-3 block text-accent">{lookingFor.label}</span>
              <p className="text-sm leading-relaxed text-muted">{lookingFor.body}</p>
            </div>
          ) : null}

          <span className="label mb-4 block">Elsewhere</span>
          <ul className="space-y-3">
            {links.map((link) => (
              <li key={link.label} className="flex items-baseline justify-between gap-4 border-t border-rule pt-3">
                <a
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="link-underline font-mono text-[0.6875rem] uppercase tracking-widest2 text-ink"
                >
                  {link.label} ↗
                </a>
                <span className="label truncate">{link.handle}</span>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </Section>
  )
}
