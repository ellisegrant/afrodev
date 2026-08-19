import { useEffect, useRef } from 'react'

const WIDTH = 320
const RATIO = 1000 / 479 // the capture ratio, so the frame never letterboxes

/**
 * Cursor-following project thumbnail, pointer devices only.
 *
 * Position is written straight to the node inside a rAF loop rather than held
 * in state — a setState per mousemove would re-render the whole work list
 * dozens of times a second.
 */
export function HoverPreview({ project }) {
  const nodeRef = useRef(null)
  const pointer = useRef({ x: 0, y: 0 })
  const eased = useRef({ x: 0, y: 0 })
  const started = useRef(false)

  useEffect(() => {
    if (!project) {
      started.current = false
      return
    }

    let frame = 0
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const place = (x, y) => {
      const node = nodeRef.current
      if (!node) return
      const height = WIDTH / RATIO
      // Flip to the left of the cursor near the right edge, and keep the frame
      // clear of the top and bottom of the window.
      const left = x + WIDTH + 40 > window.innerWidth ? x - WIDTH - 24 : x + 24
      const top = Math.min(Math.max(y - height / 2, 16), window.innerHeight - height - 16)
      node.style.transform = `translate3d(${left}px, ${top}px, 0)`
    }

    const onMove = (event) => {
      pointer.current = { x: event.clientX, y: event.clientY }
      if (!started.current) {
        // Snap on the first frame, otherwise the thumbnail visibly flies in
        // from wherever the last hover left it.
        eased.current = { ...pointer.current }
        started.current = true
        place(eased.current.x, eased.current.y)
      }
    }

    const tick = () => {
      eased.current.x += (pointer.current.x - eased.current.x) * 0.16
      eased.current.y += (pointer.current.y - eased.current.y) * 0.16
      place(eased.current.x, eased.current.y)
      frame = requestAnimationFrame(tick)
    }

    window.addEventListener('mousemove', onMove)
    if (reduced) {
      // No trailing lag — the frame just appears where the cursor is.
      const snap = (event) => place(event.clientX, event.clientY)
      window.addEventListener('mousemove', snap)
      return () => {
        window.removeEventListener('mousemove', onMove)
        window.removeEventListener('mousemove', snap)
      }
    }
    frame = requestAnimationFrame(tick)
    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(frame)
    }
  }, [project])

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none fixed left-0 top-0 z-30 hidden transition-opacity duration-300 sm:block ${
        project ? 'opacity-100' : 'opacity-0'
      }`}
      ref={nodeRef}
      style={{ width: WIDTH }}
    >
      {project ? (
        <figure className="overflow-hidden border border-rule bg-surface shadow-[0_18px_40px_-24px_rgba(0,0,0,0.45)]">
          <img
            src={project.image}
            alt=""
            width={1000}
            height={479}
            className="block w-full"
            style={{ aspectRatio: '1000 / 479' }}
          />
          <figcaption className="label border-t border-rule px-3 py-2">
            {project.title}
          </figcaption>
        </figure>
      ) : null}
    </div>
  )
}
