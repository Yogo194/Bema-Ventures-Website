import { useEffect } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Hero from './sections/Hero'
import CredentialsBar from './sections/CredentialsBar'
import AboutSection from './sections/AboutSection'
import ServicesSection from './sections/ServicesSection'
import FounderSection from './sections/FounderSection'
import ValuesSection from './sections/ValuesSection'
import TestimonialsSection from './sections/TestimonialsSection'
import FaqSection from './sections/FaqSection'
import BlogSection from './sections/BlogSection'
import CtaSection from './sections/CtaSection'

export default function Home() {
  useEffect(() => {
    document.title = 'Bema Ventures & Services Limited'
  }, [])

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <CredentialsBar />
        <AboutSection />
        <ServicesSection />
        <FounderSection />
        <ValuesSection />
        <TestimonialsSection />
        <FaqSection />
        <BlogSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  )
}
