import { useEffect } from 'react'

/**
 * Adds `.is-visible` to every `.reveal` element once it scrolls into view, then
 * stops watching it. One observer for the whole page rather than one per
 * component — cheaper, and it keeps the stagger consistent across sections.
 *
 * A MutationObserver picks up `.reveal` nodes that appear after mount. Without
 * it, anything rendered later (or swapped in by hot reload) would keep the
 * opacity:0 the base class sets and never become visible.
 */
export function useReveal() {
  useEffect(() => {
    const show = (node) => node.classList.add('is-visible')

    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll('.reveal').forEach(show)
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          show(entry.target)
          io.unobserve(entry.target)
        })
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.05 },
    )

    const watch = (root) => {
      if (root.nodeType !== 1) return
      if (root.matches?.('.reveal:not(.is-visible)')) io.observe(root)
      root.querySelectorAll?.('.reveal:not(.is-visible)').forEach((n) => io.observe(n))
    }

    watch(document.body)

    const mo = new MutationObserver((records) => {
      records.forEach((record) => record.addedNodes.forEach(watch))
    })
    mo.observe(document.body, { childList: true, subtree: true })

    return () => {
      io.disconnect()
      mo.disconnect()
    }
  }, [])
}
