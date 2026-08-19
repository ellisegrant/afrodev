import { useState } from 'react'
import { projects } from '../content'
import { Section } from './Section'
import { HoverPreview } from './HoverPreview'

/** github.com/owner/name -> owner/name, for the mono slug under a title. */
function repoPath(url) {
  if (!url) return null
  return url.replace(/^https?:\/\/(www\.)?github\.com\//, '').replace(/\.git$/, '')
}

function Row({ project, open, onToggle, onHover }) {
  const { id, title, year, role, blurb, stack, href, repo, note, image, status } = project

  return (
    <li
      className="reveal border-b border-rule"
      onMouseEnter={() => onHover(project)}
      onMouseLeave={() => onHover(null)}
    >
      <button
        type="button"
        onClick={onToggle}
        onFocus={() => onHover(project)}
        onBlur={() => onHover(null)}
        aria-expanded={open}
        className="group grid w-full grid-cols-[auto_1fr_auto] items-baseline gap-x-4 py-6 text-left transition-colors active:bg-ink/[0.04] sm:gap-x-8 sm:py-7 sm:active:bg-transparent"
      >
        <span className={`label transition-colors ${open ? 'text-accent' : 'group-hover:text-ink'}`}>
          {id}
        </span>

        <span className="min-w-0">
          <span
            className={`flex items-baseline gap-3 font-display text-2xl leading-tight transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] sm:text-4xl lg:text-5xl ${
              open ? 'translate-x-0' : 'group-hover:translate-x-2'
            }`}
          >
            {title}
            {status === 'ongoing' ? (
              <span className="label flex shrink-0 items-center gap-1.5 text-accent">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-70" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
                </span>
                In progress
              </span>
            ) : null}
          </span>
          {repoPath(repo) ? (
            <span className="label mt-2 flex items-center gap-1.5 normal-case tracking-normal">
              <svg viewBox="0 0 18 18" className="h-3 w-3 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M7 14.5c-3 1-3-1.5-4-2m8 4v-2.6c0-.8-.1-1.1-.4-1.4 2-.2 3.9-1 3.9-4.3a3.3 3.3 0 0 0-.9-2.3c.1-.2.4-1.1-.1-2.3 0 0-.8-.2-2.5 1a8.5 8.5 0 0 0-4.5 0C4.8 3.3 4 3.5 4 3.5c-.5 1.2-.2 2.1-.1 2.3a3.3 3.3 0 0 0-.9 2.3c0 3.3 1.9 4.1 3.9 4.3-.2.3-.4.7-.4 1.2V16" />
              </svg>
              {repoPath(repo)}
            </span>
          ) : null}
          <span className="label mt-1.5 block sm:hidden">
            {role} — {year}
          </span>
        </span>

        <span className="flex items-baseline gap-8">
          <span className="label hidden w-32 text-right sm:block">{role}</span>
          <span className="label hidden tabular-nums sm:block">{year}</span>
          <span
            aria-hidden="true"
            className={`label text-base leading-none text-ink transition-transform duration-500 sm:text-[0.6875rem] ${
              open ? 'rotate-45' : ''
            }`}
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
            {image ? (
              <figure className="overflow-hidden border border-rule bg-surface sm:hidden">
                <img
                  src={image}
                  alt={`${title} — screenshot`}
                  width={1000}
                  height={479}
                  loading="lazy"
                  decoding="async"
                  className="block w-full"
                  style={{ aspectRatio: '1000 / 479' }}
                />
              </figure>
            ) : null}

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
  const [hovered, setHovered] = useState(null)

  // Only projects that actually have a capture drive the preview; hovering the
  // rest simply hides it rather than showing an empty frame.
  const onHover = (project) => setHovered(project?.image ? project : null)

  return (
    <Section id="work" index="01" title="Selected work" label={`${projects.length} projects`}>
      <ul className="border-t border-rule" onMouseLeave={() => setHovered(null)}>
        {projects.map((project) => (
          <Row
            key={project.id}
            project={project}
            open={openId === project.id}
            onToggle={() => setOpenId((current) => (current === project.id ? null : project.id))}
            onHover={onHover}
          />
        ))}
      </ul>
      <HoverPreview project={hovered} />
    </Section>
  )
}
