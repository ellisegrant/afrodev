import { useState } from 'react'
import { projects } from '../content'
import { Section } from './Section'

function Row({ project, open, onToggle }) {
  const { id, title, year, role, blurb, stack, href, repo, note } = project

  return (
    <li className="reveal border-b border-rule">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="group grid w-full grid-cols-[auto_1fr_auto] items-baseline gap-x-4 py-5 text-left sm:gap-x-8 sm:py-7"
      >
        <span className={`label transition-colors ${open ? 'text-accent' : 'group-hover:text-ink'}`}>
          {id}
        </span>

        <span className="min-w-0">
          <span
            className={`block font-display text-2xl leading-tight transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] sm:text-4xl lg:text-5xl ${
              open ? 'translate-x-0' : 'group-hover:translate-x-2'
            }`}
          >
            {title}
          </span>
          <span className="label mt-1.5 block sm:hidden">
            {role} — {year}
          </span>
        </span>

        <span className="hidden items-baseline gap-8 sm:flex">
          <span className="label w-32 text-right">{role}</span>
          <span className="label tabular-nums">{year}</span>
          <span
            aria-hidden="true"
            className={`label text-ink transition-transform duration-500 ${open ? 'rotate-45' : ''}`}
          >
            +
          </span>
        </span>
      </button>

      {/* Grid-rows trick: animates to auto height without measuring anything. */}
      <div
        className={`grid transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <div className="grid gap-8 pb-10 sm:grid-cols-12 sm:gap-10">
            <p className="text-[0.9375rem] leading-relaxed text-muted sm:col-span-6 sm:col-start-2 lg:col-span-5">
              {blurb}
            </p>

            <div className="flex flex-col gap-6 sm:col-span-4 sm:col-start-9">
              <div>
                <span className="label mb-3 block">Built with</span>
                <ul className="flex flex-wrap gap-x-2 gap-y-2">
                  {stack.map((tech) => (
                    <li
                      key={tech}
                      className="border border-rule px-2.5 py-1 font-mono text-[0.6875rem] text-muted"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>

              {note ? <p className="label leading-relaxed">{note}</p> : null}

              {href || repo ? (
                <div className="flex flex-wrap gap-x-6 gap-y-2">
                  {href ? (
                    <a
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      className="link-underline font-mono text-[0.6875rem] uppercase tracking-widest2 text-ink"
                    >
                      Live site ↗
                    </a>
                  ) : null}
                  {repo ? (
                    <a
                      href={repo}
                      target="_blank"
                      rel="noreferrer"
                      className="link-underline font-mono text-[0.6875rem] uppercase tracking-widest2 text-ink"
                    >
                      Source ↗
                    </a>
                  ) : null}
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </li>
  )
}

export function Work() {
  const [openId, setOpenId] = useState(projects[0]?.id ?? null)

  return (
    <Section id="work" index="01" title="Selected work" label={`${projects.length} projects`}>
      <ul className="border-t border-rule">
        {projects.map((project) => (
          <Row
            key={project.id}
            project={project}
            open={openId === project.id}
            onToggle={() => setOpenId((current) => (current === project.id ? null : project.id))}
          />
        ))}
      </ul>
    </Section>
  )
}
