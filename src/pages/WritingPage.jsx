import { PageHeader } from '../components/PageHeader'
import { WritingList } from '../components/Writing'
import { posts } from '../lib/posts'
import { useReveal } from '../hooks/useReveal'
import { usePageTitle } from '../hooks/usePageTitle'

export default function WritingPage() {
  useReveal()
  usePageTitle('Writing')

  return (
    <>
      <PageHeader
        eyebrow="Writing"
        title="Notes and write-ups"
        meta={posts.length ? `${posts.length} posts` : null}
        lead="Notes on things I have built and the decisions behind them — usually written because I could not find the explanation I wanted when I needed it."
      />
      <div className="shell py-12 sm:py-16">
        {posts.length ? (
          <WritingList />
        ) : (
          <p className="text-base leading-relaxed text-muted">Nothing published yet.</p>
        )}
      </div>
    </>
  )
}
