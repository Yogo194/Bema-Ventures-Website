import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  essayCategories,
  essayPath,
  getListingEssays,
} from '../../../data/essays'

export default function EssaysSection() {
  const [active, setActive] = useState('All')
  const essays = getListingEssays()

  const filtered = active === 'All'
    ? essays
    : essays.filter((e) => e.category === active)

  return (
    <section className="essays-section" id="essays">
      <div className="essays-inner">
        <div className="essays-header">
          <div className="section-label">Insights</div>
          <h2 className="section-heading">Featured Essays</h2>
        </div>

        <div className="essays-filters" role="tablist" aria-label="Essay categories">
          {essayCategories.map((cat) => (
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
            <article className="essay-card" key={essay.slug}>
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
                <Link to={essayPath(essay.slug)} className="btn btn-text essay-card-link">
                  Read Essay
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>

        <button type="button" className="btn btn-outline essays-more">Show More</button>
      </div>
    </section>
  )
}
