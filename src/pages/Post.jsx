import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getPost } from '../lib/posts'
import { person } from '../content'
import { useReveal } from '../hooks/useReveal'

export default function Post() {
  const { slug } = useParams()
  const post = getPost(slug)
  useReveal()

  useEffect(() => {
    window.scrollTo(0, 0)
    if (post) document.title = `${post.title} — ${person.name}`
    return () => {
      document.title = `${person.name} — ${person.role}`
    }
  }, [post])

  if (!post) {
    return (
      <article className="shell py-24">
        <h1 className="font-display text-4xl">Post not found</h1>
        <Link
          to="/"
          className="link-underline mt-6 inline-block font-mono text-[0.6875rem] uppercase tracking-widest2"
        >
          Back to the site
        </Link>
      </article>
    )
  }

  return (
    <article className="shell py-14 sm:py-20">
      <Link
        to="/#writing"
        className="label link-underline mb-12 inline-block transition-colors hover:text-ink"
      >
        ← Writing
      </Link>

      <header className="reveal mb-12 max-w-3xl border-b border-rule pb-10">
        <p className="label mb-5">{post.dateLabel}</p>
        <h1 className="font-display text-[2.25rem] leading-[1.08] tracking-[-0.015em] sm:text-5xl lg:text-6xl">
          {post.title}
        </h1>
        {post.summary ? (
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted">{post.summary}</p>
        ) : null}
      </header>

      <div className="prose reveal" dangerouslySetInnerHTML={{ __html: post.html }} />

      <footer className="mt-16 border-t border-rule pt-8">
        <p className="label">
          {person.name} — {person.location}
        </p>
        <Link
          to="/#contact"
          className="link-underline mt-4 inline-block font-mono text-[0.6875rem] uppercase tracking-widest2 text-ink"
        >
          Get in touch
        </Link>
      </footer>
    </article>
  )
}
