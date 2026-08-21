import { about, experience, links, lookingFor } from '../content'

export function AboutBody() {
  return (
    <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
      <div className="reveal space-y-6 lg:col-span-7">
        {about.map((paragraph, i) => (
          <p
            key={i}
            className={
              i === 0
                ? 'font-display text-xl font-semibold leading-snug tracking-[-0.01em] text-ink sm:text-2xl'
                : 'max-w-2xl text-[0.9375rem] leading-relaxed text-muted sm:text-base'
            }
          >
            {paragraph}
          </p>
        ))}
      </div>

      <aside className="reveal lg:col-span-4 lg:col-start-9" style={{ transitionDelay: '120ms' }}>
        {lookingFor ? (
          <div className="mb-10 border-l-2 border-accent pl-5">
            <span className="label mb-3 block text-accent">{lookingFor.label}</span>
            <p className="text-sm leading-relaxed text-muted">{lookingFor.body}</p>
          </div>
        ) : null}

        {experience.length > 0 ? (
          <div className="mb-10">
            <span className="label mb-4 block">Experience</span>
            <ul className="space-y-5">
              {experience.map((role) => (
                <li key={`${role.org}-${role.period}`} className="border-t border-rule pt-3">
                  <p className="font-display text-lg font-semibold leading-tight">{role.role}</p>
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

        <span className="label mb-4 block">Elsewhere</span>
        <ul className="space-y-3">
          {links.map((link) => (
            <li
              key={link.label}
              className="flex items-baseline justify-between gap-4 border-t border-rule pt-3"
            >
              <a
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="link-underline label text-ink"
              >
                {link.label} ↗
              </a>
              <span className="label truncate font-normal">{link.handle}</span>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  )
}
