import { PageHeader } from '../components/PageHeader'
import { ContactBody } from '../components/Contact'
import { contact, person } from '../content'
import { useReveal } from '../hooks/useReveal'
import { usePageTitle } from '../hooks/usePageTitle'

export default function ContactPage() {
  useReveal()
  usePageTitle('Contact')

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title={contact.heading}
        meta={person.available ? person.availableNote : null}
      />
      <div className="shell py-12 sm:py-16">
        <ContactBody />
      </div>
    </>
  )
}
