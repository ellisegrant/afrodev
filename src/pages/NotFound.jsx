import { Link } from 'react-router-dom'
import { usePageTitle } from '../hooks/usePageTitle'

export default function NotFound() {
  usePageTitle('Not found')

  return (
    <section className="shell py-24 sm:py-32">
      <p className="label mb-5">404</p>
      <h1 className="font-display text-4xl font-bold tracking-[-0.02em] sm:text-6xl">
        That page does not exist.
      </h1>
      <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
        <Link to="/" className="link-underline label text-ink">Home →</Link>
        <Link to="/work" className="link-underline label text-ink">Work →</Link>
        <Link to="/writing" className="link-underline label text-ink">Writing →</Link>
      </div>
    </section>
  )
}
