import { writing } from '../content'
import { Section } from './Section'

/**
 * Notes list. Renders nothing at all when `writing` is empty — a portfolio is
 * better with no writing section than with an empty one.
 */
export function Writing() {
  if (!writing.length) return null

  return (
    <Section id="writing" index="04" title="Writing" label={`${writing.length} posts`}>
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
        <p className="reveal max-w-sm text-[0.9375rem] leading-relaxed text-muted lg:col-span-4">
          Notes on things I have built and the decisions behind them — usually written
          because I could not find the explanation I wanted when I needed it.
        </p>

        <ul className="reveal lg:col-span-7 lg:col-start-6">
          {writing.map((post) => {
            const Tag = post.href ? 'a' : 'div'
            return (
              <li key={post.title} className="border-t border-rule first:border-t-0">
                <Tag
                  {...(post.href
                    ? { href: post.href, target: '_blank', rel: 'noreferrer' }
                    : {})}
                  className={`group flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8 ${
                    post.href ? 'transition-colors' : ''
                  }`}
                >
                  <span
                    className={`font-display text-lg leading-tight sm:text-xl ${
                      post.href
                        ? 'transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1.5'
                        : ''
                    }`}
                  >
                    {post.title}
                  </span>
                  <span className="label shrink-0 tabular-nums">{post.date}</span>
                </Tag>
              </li>
            )
          })}
        </ul>
      </div>
    </Section>
  )
}
