import { Link } from 'react-router-dom'
import { author } from '../../../data/essays'

export default function EssayHero({ essay }) {
  return (
    <section className="essay-hero-section">
      <div className="essay-hero-inner">
        <Link to="/insights" className="essay-back">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M19 12H5M5 12L11 6M5 12L11 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Back to Insights
        </Link>

        <div className="essay-hero-heading">
          <div className="section-label">{essay.category}</div>
          <h1>{essay.title}</h1>
          <p className="essay-hero-dek">{essay.dek}</p>
        </div>

        <div className="essay-hero-meta-row">
          <div className="essay-hero-author">
            <div className="essay-hero-avatar">
              <img src={`/assets/${author.photo}`} alt={author.name} />
            </div>
            <div className="essay-hero-author-info">
              <span className="essay-hero-author-name">{author.name}</span>
              <span className="essay-hero-author-role">{author.role}</span>
            </div>
          </div>
          <div className="essay-hero-meta">
            <span className="essay-hero-date">
              <img src="/assets/icon-calendar.svg" alt="" width="18" height="18" />
              {essay.date}
            </span>
            <span className="essay-hero-read">
              <img src="/assets/icon-time.svg" alt="" width="18" height="18" />
              {essay.read}
            </span>
          </div>
        </div>

        <div className="essay-hero-image">
          <img src={`/assets/${essay.img}`} alt="" />
        </div>
      </div>
    </section>
  )
}
