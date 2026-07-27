import { useEffect } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import CtaSection from '../Home/sections/CtaSection'
import ContactHero from './sections/ContactHero'
import ContactInfo from './sections/ContactInfo'
import ContactForm from './sections/ContactForm'
import ContactFaq from './sections/ContactFaq'

export default function Contact() {
  useEffect(() => {
    document.title = 'Contact — Bema Ventures & Services Limited'
  }, [])

  return (
    <>
      <Navbar />
      <main>
        <ContactHero />
        <ContactInfo />
        <ContactForm />
        <ContactFaq />
        <CtaSection />
      </main>
      <Footer />
    </>
  )
}
