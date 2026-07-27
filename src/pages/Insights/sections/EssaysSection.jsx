import { useState } from 'react'

const categories = [
  'All',
  'Governance',
  'Risk Management',
  'AI & Compliance',
  'Internal Audit',
  'Fintech',
  'Regulation',
]

const essays = [
  {
    img: 'insights-essay-1.jpg',
    category: 'Risk Management',
    read: '12 min read',
    title: 'Risk management in fintech: from velocity to maturity',
    excerpt: "How the most resilient fintechs are graduating their second-line functions without slowing the business — a practitioner's view from the engagements that worked.",
  },
  {
    img: 'insights-essay-2.jpg',
    category: 'Regulation',
    read: '12 min read',
    title: 'Consumer Duty, two years on: from compliance to standard',
    excerpt: 'The firms that prospered did not treat the Duty as a programme. They treated it as a permanent shift in how customer outcomes are evidenced.',
  },
  {
    img: 'insights-essay-3.jpg',
    category: 'Fintech',
    read: '12 min read',
    title: 'Operational resilience for the consumer-facing fintech',
    excerpt: 'PS21/3 is no longer the headline — execution is. We outline the operational tests, scenario rigour and board reporting that distinguish credible resilience.',
  },
  {
    img: 'insights-essay-4.jpg',
    category: 'Governance',
    read: '12 min read',
    title: 'Board effectiveness in an era of accelerated regulation',
    excerpt: 'Why the board calendars of 2020 are no longer fit for the regulatory cadence of today — and what to change first, without theatre.',
  },
  {
    img: 'insights-essay-5.jpg',
    category: 'Internal Audit',
    read: '12 min read',
    title: 'Internal audit best practice: the next ten years',
    excerpt: "What separates an audit function that protects the institution from one that merely reports on it. Notes on talent, technology and the third line's true mandate.",
  },
  {
    img: 'insights-essay-6.jpg',
    category: 'AI & Compliance',
    read: '12 min read',
    title: 'AI governance: a practical framework',
    excerpt: 'Model risk, third-party AI dependencies and the supervisory expectations now taking shape across the FCA, PRA and EBA. A working framework for boards.',
  },
]

export default function EssaysSection() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All'
    ? essays
    : essays.filter((e) => e.category === active)

  return (
    <section className="essays-section">
      <div className="essays-inner">
        <div className="essays-header">
          <div className="section-label">Insights</div>
          <h2 className="section-heading">Featured Essays</h2>
        </div>

        <div className="essays-filters" role="tablist" aria-label="Essay categories">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              role="tab"
              aria-selected={active === cat}
              className={'essays-filter' + (active === cat ? ' active' : '')}
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="essays-grid">
          {filtered.map((essay) => (
            <article className="essay-card" key={essay.title}>
              <div className="essay-card-image">
                <img src={`/assets/${essay.img}`} alt="" />
              </div>
              <div className="essay-card-body">
                <div className="essay-card-meta">
                  <span className="essay-card-category">{essay.category}</span>
                  <span className="essay-card-read">{essay.read}</span>
                </div>
                <div className="essay-card-text">
                  <h3>{essay.title}</h3>
                  <p>{essay.excerpt}</p>
                </div>
                <a href="#" className="btn btn-text essay-card-link">
                  Read Essay
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>

        <button type="button" className="btn btn-outline essays-more">Show More</button>
      </div>
    </section>
  )
}
