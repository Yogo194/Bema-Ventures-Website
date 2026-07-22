import { useEffect } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import AboutHero from './sections/AboutHero'
import MissionSection from './sections/MissionSection'
import ValuesSection from './sections/ValuesSection'
import LeadershipSection from './sections/LeadershipSection'
import AboutCta from './sections/AboutCta'

export default function About() {
  useEffect(() => {
    document.title = 'About Us — Bema Ventures & Services Limited'
  }, [])

  return (
    <>
      <Navbar />
      <main>
        <AboutHero />
        <MissionSection />
        <ValuesSection />
        <LeadershipSection />
        <AboutCta />
      </main>
      <Footer />
    </>
  )
}
