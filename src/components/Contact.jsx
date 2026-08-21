import { useEffect, useState } from 'react'
import { collaboration, contact, person } from '../content'

export function ContactBody() {
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
    <div className="grid gap-12 lg:grid-cols-12">
      <div className="reveal lg:col-span-7">
        <p className="max-w-lg text-base leading-relaxed text-muted">{contact.body}</p>

        {collaboration ? (
          <div className="mt-10 max-w-lg border-t border-rule pt-6">
            <span className="label mb-3 block text-accent">{collaboration.label}</span>
            <p className="text-[0.9375rem] leading-relaxed text-muted">{collaboration.body}</p>
          </div>
        ) : null}
      </div>

      <div
        className="reveal flex flex-col gap-6 lg:col-span-4 lg:col-start-9"
        style={{ transitionDelay: '120ms' }}
      >
        <div>
          <span className="label mb-3 block">Email</span>
          <a
            href={`mailto:${person.email}`}
            className="link-underline block font-display text-lg font-semibold leading-tight tracking-[-0.01em] sm:text-xl"
          >
            {person.email}
          </a>
        </div>
        <button
          type="button"
          onClick={copy}
          className="label self-start border border-rule px-4 py-2.5 transition-colors hover:border-ink hover:text-ink"
        >
          {copied ? 'Copied to clipboard' : 'Copy address'}
        </button>
      </div>
    </div>
  )
}
