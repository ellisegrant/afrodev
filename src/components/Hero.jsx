import { Link } from 'react-router-dom'
import { focus, hero, person } from '../content'
import { Clock } from './Clock'

/** Wraps the words listed in `hero.emphasis` in italic serif, in place. */
function Statement({ line, emphasis }) {
  if (!emphasis?.length) return line

  const pattern = new RegExp(
    `(${emphasis.map((w) => w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`,
    'g',
  )

  return line.split(pattern).map((chunk, i) =>
    emphasis.includes(chunk) ? (
      <span key={i} className="text-accent">
        {chunk}
      </span>
    ) : (
      <span key={i}>{chunk}</span>
    ),
  )
}

/** Renders `hero.intro` segments, turning the ones with an href into links. */
function Intro({ segments }) {
  return segments.map((segment, i) =>
    segment.href ? (
      <Link
        key={i}
        to={segment.href}
        className="link-underline text-accent transition-opacity hover:opacity-75"
      >
        {segment.text}
      </Link>
    ) : (
      <span key={i}>{segment.text}</span>
    ),
  )
}

export function Hero() {
  return (
    <section className="shell pb-16 pt-10 sm:pb-24 sm:pt-14 lg:pb-32 lg:pt-20">
      <div className="reveal label mb-10 flex flex-col gap-y-1.5 sm:mb-16 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-6 sm:gap-y-2">
        <span>{person.role}</span>
        <span aria-hidden="true" className="hidden text-rule sm:inline">—</span>
        <span>{person.location}</span>
        <span aria-hidden="true" className="hidden text-rule sm:inline">—</span>
        <Clock timezone={person.timezone} />
      </div>

      <div className="grid gap-x-8 gap-y-12 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <h1
            className="reveal font-display text-[2.6rem] font-extrabold leading-[1.02] tracking-[-0.03em] sm:text-6xl lg:text-[4.6rem]"
            style={{ transitionDelay: '80ms' }}
          >
            <Statement line={hero.line} emphasis={hero.emphasis} />
          </h1>

          <p
            className="reveal mt-10 max-w-xl text-[0.9375rem] leading-relaxed text-muted sm:mt-12 lg:text-base"
            style={{ transitionDelay: '160ms' }}
          >
            <Intro segments={hero.intro} />
          </p>

          <div
            className="reveal mt-10 flex flex-wrap items-center gap-x-8 gap-y-3"
            style={{ transitionDelay: '240ms' }}
          >
            {person.available ? (
              <span className="label flex items-start gap-2 text-ink">
                <span className="relative mt-[0.4em] flex h-1.5 w-1.5 shrink-0">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-70" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
                </span>
                {person.availableNote}
              </span>
            ) : null}
            <Link to="/work" className="link-underline label text-ink">
              See selected work →
            </Link>
          </div>
        </div>

        {/* Present-tense rail: what is actually on the bench right now. */}
        {focus.length ? (
          <aside
            className="reveal lg:col-span-3 lg:col-start-10 lg:border-l lg:border-rule lg:pl-8"
            style={{ transitionDelay: '320ms' }}
          >
            <span className="label mb-5 block">Current focus</span>
            <ul className="space-y-4">
              {focus.map((item) => (
                <li key={item} className="text-sm leading-relaxed text-muted">
                  {item}
                </li>
              ))}
            </ul>
          </aside>
        ) : null}
      </div>
    </section>
  )
}
