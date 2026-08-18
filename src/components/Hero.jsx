import { hero, person } from '../content'
import { Clock } from './Clock'

/** Wraps the words listed in `hero.emphasis` in italic serif, in place. */
function Statement({ line, emphasis }) {
  if (!emphasis?.length) return line

  const pattern = new RegExp(`(${emphasis.map((w) => w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`, 'g')

  return line.split(pattern).map((chunk, i) =>
    emphasis.includes(chunk) ? (
      <em key={i} className="font-display italic text-accent">
        {chunk}
      </em>
    ) : (
      <span key={i}>{chunk}</span>
    ),
  )
}

export function Hero() {
  return (
    <section id="top" className="shell pb-16 pt-14 sm:pb-24 sm:pt-20 lg:pb-32 lg:pt-28">
      <div className="reveal label mb-10 flex flex-col gap-y-1.5 sm:mb-16 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-6 sm:gap-y-2">
        <span>{person.role}</span>
        <span aria-hidden="true" className="hidden text-rule sm:inline">—</span>
        <span>{person.location}</span>
        <span aria-hidden="true" className="hidden text-rule sm:inline">—</span>
        <Clock timezone={person.timezone} />
      </div>

      <h1
        className="reveal font-display text-[2.75rem] leading-[1.04] tracking-[-0.015em] sm:text-6xl lg:text-[5.25rem] xl:text-[6rem]"
        style={{ transitionDelay: '80ms' }}
      >
        <Statement line={hero.line} emphasis={hero.emphasis} />
      </h1>

      <div className="mt-12 grid gap-10 border-t border-rule pt-8 sm:mt-20 lg:grid-cols-12 lg:gap-x-8">
        <p
          className="reveal max-w-xl text-[0.9375rem] leading-relaxed text-muted lg:col-span-5 lg:col-start-5 lg:text-base"
          style={{ transitionDelay: '160ms' }}
        >
          {hero.intro}
        </p>

        <div
          className="reveal flex flex-col items-start gap-3 lg:col-span-3 lg:col-start-10 lg:items-end"
          style={{ transitionDelay: '240ms' }}
        >
          {person.available ? (
            <span className="label flex items-start gap-2 text-ink lg:justify-end lg:text-right">
              <span className="relative mt-[0.4em] flex h-1.5 w-1.5 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-70" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
              </span>
              {person.availableNote}
            </span>
          ) : null}
          <a
            href="#work"
            className="link-underline font-mono text-[0.6875rem] uppercase tracking-widest2 text-ink"
          >
            See selected work
          </a>
        </div>
      </div>
    </section>
  )
}
