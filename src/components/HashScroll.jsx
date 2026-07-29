import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function HashScroll() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0)
      return
    }

    const id = hash.slice(1)
    const scrollToHash = () => {
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    // Wait a frame so the destination route has painted
    const t = window.setTimeout(scrollToHash, 50)
    return () => window.clearTimeout(t)
  }, [pathname, hash])

  return null
}
