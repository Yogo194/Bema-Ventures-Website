import { useState } from 'react'

const testimonials = [
  {
    logo: 'logo-nextera.svg', logoAlt: 'NextEra Solutions', logoW: 35, logoH: 40,
    title: 'Quality judgement. Thanks Bema!',
    quote: '"Bema brought a quality of judgement to our governance review that we had not encountered from far larger firms. The recommendations were precise, defensible and — crucially — implementable."',
    avatar: 'testimonial-1.jpg', name: 'Daniel Yee', role: 'Chief Technology Officer',
  },
  {
    logo: 'logo-horizon.svg', logoAlt: 'Horizon Retail', logoW: 40, logoH: 40,
    title: 'Tripled our reach in a year.',
    quote: '"Rotimi\'s command of the regulatory landscape, paired with genuine commercial sensitivity, made him the obvious choice when we needed counsel ahead of a sensitive supervisory engagement."',
    avatar: 'testimonial-2.jpg', name: 'Selena Ward', role: 'Managing Director',
  },
]

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0)
  const total = testimonials.length

  return (
    <section className="testimonials-section" id="testimonials">
      <div className="testimonials-inner">
        <div className="section-header centered">
          <div className="section-label">Testimonials</div>
          <h2 className="section-heading">Client Success in Their Own Words</h2>
        </div>
        <div className="testimonials-slider">
          <div
            className="testi-track"
            style={{ transform: `translateX(-${current * 50}%)` }}
          >
            {testimonials.map((t) => (
              <div className="testi-card" key={t.name}>
                <div className="testi-card-top">
                  <img src="/assets/quote-mark.svg" alt="" width="40" height="40" />
                  <div className="testi-logo">
                    <img src={`/assets/${t.logo}`} alt={t.logoAlt} width={t.logoW} height={t.logoH} />
                  </div>
                </div>
                <div className="testi-body">
                  <h3>{t.title}</h3>
                  <p>{t.quote}</p>
                </div>
                <div className="testi-profile">
                  <div className="testi-avatar">
                    <img src={`/assets/${t.avatar}`} alt={t.name} />
                  </div>
                  <div className="testi-info">
                    <span className="testi-name">{t.name}</span>
                    <span className="testi-role">{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="testi-nav">
          <button
            className={'testi-btn testi-prev' + (current > 0 ? ' active' : '')}
            onClick={() => setCurrent(c => Math.max(0, c - 1))}
            aria-label="Previous testimonial"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M16 10H4M4 10L9 5M4 10L9 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button
            className={'testi-btn testi-next' + (current < total - 2 ? ' active' : '')}
            onClick={() => setCurrent(c => Math.min(total - 2, c + 1))}
            aria-label="Next testimonial"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
