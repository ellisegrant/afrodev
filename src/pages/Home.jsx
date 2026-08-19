import { Hero } from '../components/Hero'
import { Work } from '../components/Work'
import { About } from '../components/About'
import { Stack } from '../components/Stack'
import { Writing } from '../components/Writing'
import { Contact } from '../components/Contact'
import { useReveal } from '../hooks/useReveal'

export default function Home() {
  useReveal()

  return (
    <>
      <Hero />
      <Work />
      <About />
      <Stack />
      <Writing />
      <Contact />
    </>
  )
}
