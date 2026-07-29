import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-inner">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-copy">
              <div className="tag">
                <img src="/assets/icon-business.svg" alt="" width="24" height="24" />
                <span>Governance · Risk · Compliance</span>
              </div>
              <h1 className="hero-headline">
                Where institutional trust <em>meets counsel.</em>
              </h1>
              <p className="hero-body">
                Bema Ventures is a UK-registered advisory firm guiding banks, fintechs and regulated enterprises through governance, risk and regulatory complexity — with the discretion and judgement the work demands.
              </p>
            </div>
            <div className="btn-group">
              <a
                href="mailto:Rotimiomotayo@gmail.com"
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Request a Consultation
                <img src="/assets/arrow-upright.svg" alt="" width="14" height="14" />
              </a>
              <Link to="/services" className="btn btn-outline">Explore Services</Link>
            </div>
          </div>
          <div className="hero-image">
            <img src="/assets/hero-bg.jpg" alt="Bema Ventures advisory" />
          </div>
        </div>
      </div>
    </section>
  )
}
