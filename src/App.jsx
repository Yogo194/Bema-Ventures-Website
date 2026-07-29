import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Insights from './pages/Insights'
import Essay from './pages/Essay'
import Contact from './pages/Contact'
import ScrollToTop from './components/ScrollToTop'
import HashScroll from './components/HashScroll'

export default function App() {
  return (
    <>
      <HashScroll />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/insights/:slug" element={<Essay />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <ScrollToTop />
    </>
  )
}
