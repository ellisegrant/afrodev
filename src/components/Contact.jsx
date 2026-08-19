import { useEffect, useState } from 'react'
import { collaboration, contact, person, writing } from '../content'

export function Contact() {
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (!copied) return
    const id = setTimeout(() => setCopied(false), 2000)
    return () => clearTimeout(id)
  }, [copied])

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(person.email)
      setCopied(true)
    } catch {
      // Clipboard blocked (insecure context, or the user said no) — the mailto
      // link beside this button still works, so fail quietly.
    }
  }

  return (
    <section id="contact" className="shell border-t border-rule py-20 sm:py-28 lg:py-36">
      <div className="grid gap-12 lg:grid-cols-12">
        <div className="reveal lg:col-span-8">
          <span className="label mb-6 block">{writing.length ? '05' : '04'} — Contact</span>
          <h2 className="font-display text-4xl leading-[1.05] sm:text-6xl lg:text-7xl">
            {contact.heading}
          </h2>
          <p className="mt-8 max-w-lg text-[0.9375rem] leading-relaxed text-muted">{contact.body}</p>

          {collaboration ? (
            <div className="mt-10 max-w-lg border-t border-rule pt-6">
              <span className="label mb-3 block text-accent">{collaboration.label}</span>
              <p className="text-[0.9375rem] leading-relaxed text-muted">{collaboration.body}</p>
            </div>
          ) : null}
        </div>

        <div className="reveal flex flex-col justify-end gap-6 lg:col-span-4" style={{ transitionDelay: '120ms' }}>
          <a
            href={`mailto:${person.email}`}
            className="link-underline block font-display text-2xl leading-tight sm:text-3xl"
          >
            {person.email}
          </a>
          <button
            type="button"
            onClick={copy}
            className="label self-start border border-rule px-4 py-2.5 transition-colors hover:border-ink hover:text-ink"
          >
            {copied ? 'Copied to clipboard' : 'Copy address'}
          </button>
        </div>
      </div>
    </section>
  )
}
