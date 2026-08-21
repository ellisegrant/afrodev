import { Link } from 'react-router-dom'
import { Hero } from '../components/Hero'
import { WorkList } from '../components/Work'
import { WritingList } from '../components/Writing'
import { posts } from '../lib/posts'
import { projects } from '../content'
import { useReveal } from '../hooks/useReveal'
import { usePageTitle } from '../hooks/usePageTitle'

/** A band with a heading on the left and a "see everything" link on the right. */
function Band({ title, to, cta, children }) {
  return (
    <section className="shell border-t border-rule py-14 sm:py-20">
      <header className="reveal mb-10 flex flex-wrap items-baseline justify-between gap-4">
        <h2 className="font-display text-2xl font-bold tracking-[-0.02em] sm:text-4xl">{title}</h2>
        <Link to={to} className="link-underline label text-ink">
          {cta} →
        </Link>
      </header>
      {children}
    </section>
  )
}

export default function Home() {
  useReveal()
  usePageTitle(null)

  return (
    <>
      <Hero />

      <Band title="Selected work" to="/work" cta={`All ${projects.length} projects`}>
        <WorkList limit={3} />
      </Band>

      {posts.length ? (
        <Band title="Writing" to="/writing" cta="All posts">
          <WritingList limit={2} />
        </Band>
      ) : null}
    </>
  )
}
