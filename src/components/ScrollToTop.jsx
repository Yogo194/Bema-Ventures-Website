import { useState, useEffect } from 'react'

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const goTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      type="button"
      className={'scroll-to-top' + (visible ? ' is-visible' : '')}
      onClick={goTop}
      aria-label="Go to top"
    >
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <path
          d="M9 3.75L15.75 10.5L14.6925 11.5575L9.75 6.6225V15H8.25V6.6225L3.3075 11.5575L2.25 10.5L9 3.75Z"
          fill="currentColor"
        />
      </svg>
    </button>
  )
}
