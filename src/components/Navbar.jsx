import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/#services' },
  { label: 'Insights', to: '/#blog' },
  { label: 'Contact', to: '/#contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
  }, [menuOpen])

  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  return (
    <>
      <header className="navbar">
        <div className="navbar-inner">
          <Link to="/" className="logo">
            <div className="logo-icon">
              <img src="/assets/logo-mask.png" alt="" className="logo-mask" />
            </div>
            <div className="logo-text">
              <span className="logo-name">BEMA VENTURES</span>
              <span className="logo-sub">&amp; SERVICES LIMITED</span>
            </div>
          </Link>
          <nav className="nav-links">
            {navItems.map(({ label, to }) => (
              <NavLink
                key={label}
                to={to}
                className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}
                end={to === '/'}
              >
                {label}
              </NavLink>
            ))}
          </nav>
          <button className="menu-btn" onClick={() => setMenuOpen(true)} aria-label="Toggle menu">
            <img src="/assets/icon-menu.svg" alt="" width="25" height="20" />
          </button>
        </div>
      </header>

      {menuOpen && (
        <div className="mobile-menu open">
          <div className="mobile-menu-top">
            <div className="logo">
              <div className="logo-text">
                <span className="logo-name" style={{ color: '#02264f', fontFamily: 'Inter,sans-serif', fontWeight: 700, fontSize: 18 }}>
                  BEMA VENTURES
                </span>
              </div>
            </div>
            <button className="mobile-menu-close" onClick={() => setMenuOpen(false)} aria-label="Close menu">&#x2715;</button>
          </div>
          <nav className="mobile-nav">
            {navItems.map(({ label, to }) => (
              <Link key={label} to={to} onClick={() => setMenuOpen(false)}>{label}</Link>
            ))}
          </nav>
        </div>
      )}
    </>
  )
}
