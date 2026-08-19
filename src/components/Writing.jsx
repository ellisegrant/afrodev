import { Link } from 'react-router-dom'
import { posts } from '../lib/posts'
import { Section } from './Section'

/**
 * Notes list. Renders nothing when there are no posts — a portfolio is better
 * with no writing section than with an empty one.
 */
export function Writing() {
  if (!posts.length) return null

  return (
    <Section id="writing" index="04" title="Writing" label={`${posts.length} posts`}>
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
        <p className="reveal max-w-sm text-[0.9375rem] leading-relaxed text-muted lg:col-span-4">
          Notes on things I have built and the decisions behind them — usually written
          because I could not find the explanation I wanted when I needed it.
        </p>

        <ul className="reveal lg:col-span-7 lg:col-start-6">
          {posts.map((post) => (
            <li key={post.slug} className="border-t border-rule first:border-t-0">
              <Link
                to={`/writing/${post.slug}`}
                className="group flex flex-col gap-1.5 py-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8"
              >
                <span className="min-w-0">
                  <span className="block font-display text-lg leading-tight transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1.5 sm:text-xl">
                    {post.title}
                  </span>
                  {post.summary ? (
                    <span className="mt-1.5 block text-sm leading-relaxed text-muted">
                      {post.summary}
                    </span>
                  ) : null}
                </span>
                <span className="label shrink-0 tabular-nums">{post.dateLabel}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
