import { PageHeader } from '../components/PageHeader'
import { AboutBody } from '../components/About'
import { StackGrid } from '../components/Stack'
import { person } from '../content'
import { useReveal } from '../hooks/useReveal'
import { usePageTitle } from '../hooks/usePageTitle'

export default function AboutPage() {
  useReveal()
  usePageTitle('About')

  return (
    <>
      <PageHeader
        eyebrow="About"
        title={person.name}
        meta={person.location}
        lead="Software developer working end to end — interfaces, APIs, and the schemas underneath them."
      />

      <div className="shell py-12 sm:py-16">
        <AboutBody />
      </div>

      <section className="shell border-t border-rule py-14 sm:py-20">
        <header className="reveal mb-10 flex flex-wrap items-baseline justify-between gap-4">
          <h2 className="font-display text-2xl font-bold tracking-[-0.02em] sm:text-4xl">Toolkit</h2>
          <span className="label">What I reach for</span>
        </header>
        <StackGrid />
      </section>
    </>
  )
}
