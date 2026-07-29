import { useEffect } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import CtaSection from '../Home/sections/CtaSection'
import EssayHero from './sections/EssayHero'
import EssayBody from './sections/EssayBody'
import EssayAuthor from './sections/EssayAuthor'
import RelatedEssays from './sections/RelatedEssays'
import { getEssay } from '../../data/essays'

export default function Essay() {
  const { slug } = useParams()
  const essay = getEssay(slug)

  useEffect(() => {
    if (essay) {
      document.title = `${essay.title} — Bema Ventures & Services Limited`
    }
  }, [essay])

  if (!essay) {
    return <Navigate to="/insights" replace />
  }

  return (
    <>
      <Navbar />
      <main>
        <EssayHero essay={essay} />
        <EssayBody essay={essay} />
        <EssayAuthor />
        <RelatedEssays slug={essay.slug} />
        <CtaSection />
      </main>
      <Footer />
    </>
  )
}
