import { Link } from 'react-router-dom'
import { posts } from '../lib/posts'

/** Post list. `limit` trims it for the teaser on the home page. */
export function WritingList({ limit }) {
  const shown = limit ? posts.slice(0, limit) : posts
  if (!shown.length) return null

  return (
    <ul>
      {shown.map((post) => (
        <li key={post.slug} className="reveal border-b border-rule">
          <Link
            to={`/writing/${post.slug}`}
            className="group flex flex-col gap-2 py-6 sm:flex-row sm:items-baseline sm:justify-between sm:gap-10"
          >
            <span className="min-w-0">
              <span className="block font-display text-xl font-semibold leading-snug tracking-[-0.01em] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1.5 sm:text-2xl">
                {post.title}
              </span>
              {post.summary ? (
                <span className="mt-2 block max-w-xl text-[0.9375rem] leading-relaxed text-muted">
                  {post.summary}
                </span>
              ) : null}
            </span>
            <span className="label shrink-0 tabular-nums">{post.dateLabel}</span>
          </Link>
        </li>
      ))}
    </ul>
  )
}
