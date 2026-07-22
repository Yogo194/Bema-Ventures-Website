import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="logo logo-white">
              <div className="logo-icon logo-icon-white">
                <img src="/assets/logo-mask.png" alt="" className="logo-mask logo-mask-white" />
              </div>
              <div className="logo-text">
                <span className="logo-name">BEMA VENTURES</span>
                <span className="logo-sub">&amp; SERVICES LIMITED</span>
              </div>
            </div>
            <div className="footer-newsletter">
              <p className="footer-newsletter-title">Stay Updated with Expert Insights</p>
              <p className="footer-newsletter-sub">Subscribe to our newsletter for tips, trends, and success stories in business consulting.</p>
              <form className="newsletter-form" onSubmit={e => e.preventDefault()}>
                <input type="email" placeholder="Enter your email" className="newsletter-input" />
                <button type="submit" className="newsletter-btn">Send</button>
              </form>
            </div>
          </div>
          <div className="footer-links">
            <div className="footer-col">
              <h4>Quick Links</h4>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/#services">Services</Link></li>
                <li><Link to="/#blog">Insights</Link></li>
                <li><Link to="/#contact">Contact Us</Link></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Contact</h4>
              <ul className="footer-contact">
                <li>
                  <img src="/assets/icon-envelope.svg" alt="" width="20" height="18" />
                  <a href="mailto:Rotimiomotayo@gmail.com">Rotimiomotayo@gmail.com</a>
                </li>
                <li>
                  <img src="/assets/icon-phone.svg" alt="" width="19" height="19" />
                  <a href="tel:+44723">+44723</a>
                </li>
                <li>
                  <img src="/assets/icon-map.svg" alt="" width="17" height="21" />
                  <span>178 Blackthorn Road, Southampton, United Kingdom SO19 7LQ</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-social">
          <span>Stay Connected</span>
          <div className="social-icons">
            {[
              { icon: 'social-twitter.svg', label: 'Twitter', w: 24, h: 24 },
              { icon: 'social-facebook.svg', label: 'Facebook', w: 24, h: 24 },
              { icon: 'social-instagram.svg', label: 'Instagram', w: 24, h: 24 },
              { icon: 'social-linkedin.svg', label: 'LinkedIn', w: 24, h: 24 },
            ].map(({ icon, label, w, h }) => (
              <a key={label} href="#" className="social-icon" aria-label={label}>
                <img src={`/assets/${icon}`} alt={label} width={w} height={h} />
              </a>
            ))}
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-policies">
            <a href="#">Privacy policy</a>
            <a href="#">Terms of Use</a>
            <a href="#">Cookie Preferences</a>
          </div>
          <p>&copy; 2026 Bema Ventures and Services Limited. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
