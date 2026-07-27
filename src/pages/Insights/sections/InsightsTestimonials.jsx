import { useState } from 'react'

const testimonials = [
  {
    type: 'plain',
    quote: '"What distinguishes the firm is the willingness to say the difficult thing in the room. That is what a board pays for, and that is what we received."',
    avatar: 'insights-testi-1.jpg',
    name: 'Daniel Yee',
    role: 'Chief Technology Officer',
  },
  {
    type: 'featured',
    quote: '"What distinguishes the firm is the willingness to say the difficult thing in the room. That is what a board pays for, and that is what we received."',
    name: 'Danielle Yee',
    role: 'Chief Technology Officer',
    bg: 'insights-testi-bg.jpg',
  },
  {
    type: 'plain',
    quote: '"Bema brought a quality of judgement to our governance review that we had not encountered from far larger firms. The recommendations were precise, defensible and — crucially — implementable."',
    avatar: 'insights-testi-2.jpg',
    name: 'Selena Ward',
    role: 'Managing Director',
  },
]

export default function InsightsTestimonials() {
  const [offset, setOffset] = useState(0)
  const maxOffset = Math.max(0, testimonials.length - 3)

  return (
    <section className="insights-testi-section">
      <div className="insights-testi-inner">
        <div className="section-header centered">
          <div className="section-label">Testimonials</div>
          <h2 className="section-heading">Client Success in Their Own Words</h2>
        </div>

        <div className="insights-testi-grid">
          {testimonials.map((t) => (
            t.type === 'featured' ? (
              <div className="insights-testi-card insights-testi-card-featured" key={t.name}>
                <img src={`/assets/${t.bg}`} alt="" className="insights-testi-card-bg" />
                <div className="insights-testi-card-overlay" />
                <div className="insights-testi-featured-top">
                  <div className="insights-testi-company">
                    <img src="/assets/insights-nextera.svg" alt="" width="35" height="40" />
                    <span className="insights-testi-company-name">
                      <span>NextEra</span>
                      <span>Solutions</span>
                    </span>
                  </div>
                  <img src="/assets/insights-rating-white.svg" alt="5 star rating" className="insights-testi-rating" width="152" height="24" />
                </div>
                <div className="insights-testi-featured-body">
                  <p>{t.quote}</p>
                  <div className="insights-testi-featured-author">
                    <span className="insights-testi-name-light">{t.name}</span>
                    <span className="insights-testi-role-light">{t.role}</span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="insights-testi-card" key={t.name}>
                <img src="/assets/insights-rating.svg" alt="5 star rating" className="insights-testi-rating" width="152" height="24" />
                <div className="insights-testi-card-content">
                  <p>{t.quote}</p>
                  <div className="insights-testi-profile">
                    <div className="insights-testi-avatar">
                      <img src={`/assets/${t.avatar}`} alt={t.name} />
                    </div>
                    <div className="insights-testi-info">
                      <span className="insights-testi-name">{t.name}</span>
                      <span className="insights-testi-role">{t.role}</span>
                    </div>
                  </div>
                </div>
              </div>
            )
          ))}
        </div>

        <div className="insights-testi-nav">
          <button
            type="button"
            className={'insights-testi-btn' + (offset > 0 ? ' active' : '')}
            onClick={() => setOffset((o) => Math.max(0, o - 1))}
            aria-label="Previous testimonial"
            disabled={offset <= 0}
          >
            <svg width="32" height="32" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M16 10H4M4 10L9 5M4 10L9 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button
            type="button"
            className="insights-testi-btn filled"
            onClick={() => setOffset((o) => Math.min(maxOffset, o + 1))}
            aria-label="Next testimonial"
          >
            <svg width="32" height="32" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
