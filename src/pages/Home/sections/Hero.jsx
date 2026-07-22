import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-inner">
        <div className="hero-content">
          <div className="hero-text">
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
            <div className="btn-group">
              <a href="#contact" className="btn btn-primary">
                Request a Consultation
                <img src="/assets/arrow-upright.svg" alt="" width="14" height="14" />
              </a>
              <a href="#services" className="btn btn-outline">Explore Services</a>
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
