import { PageHeader } from '../components/PageHeader'
import { WorkList } from '../components/Work'
import { projects } from '../content'
import { useReveal } from '../hooks/useReveal'
import { usePageTitle } from '../hooks/usePageTitle'

export default function WorkPage() {
  useReveal()
  usePageTitle('Work')

  const ongoing = projects.filter((p) => p.status === 'ongoing').length

  return (
    <>
      <PageHeader
        eyebrow="Selected work"
        title="Things I have built"
        meta={`${projects.length} projects${ongoing ? ` — ${ongoing} in progress` : ''}`}
        lead="Client platforms, internal tools and side projects. Open any row for what it does, what it is built with, and where to see it running."
      />
      <WorkList />
    </>
  )
}
