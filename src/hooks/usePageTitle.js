import { useEffect } from 'react'
import { person } from '../content'

const base = `${person.name} — ${person.role}`

/** Sets the document title for a page; pass null for the site default. */
export function usePageTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} — ${person.name}` : base
  }, [title])
}
