import { useEffect } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import CtaSection from '../Home/sections/CtaSection'
import InsightsHero from './sections/InsightsHero'
import FeaturedEssay from './sections/FeaturedEssay'
import EssaysSection from './sections/EssaysSection'
// import InsightsTestimonials from './sections/InsightsTestimonials'

export default function Insights() {
  useEffect(() => {
    document.title = 'Insights — Bema Ventures & Services Limited'
  }, [])

  return (
    <>
      <Navbar />
      <main>
        <InsightsHero />
        <FeaturedEssay />
        <EssaysSection />
        {/* <InsightsTestimonials /> */}
        <CtaSection />
      </main>
      <Footer />
    </>
  )
}
