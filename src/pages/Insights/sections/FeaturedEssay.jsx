import { Link } from 'react-router-dom'
import { essayPath, getFeaturedEssay } from '../../../data/essays'

export default function FeaturedEssay() {
  const essay = getFeaturedEssay()

  return (
    <section className="featured-essay-section">
      <div className="featured-essay-inner">
        <div className="featured-essay-image">
          <img src={`/assets/${essay.img}`} alt="" />
        </div>
        <div className="featured-essay-content">
          <div className="featured-essay-text">
            <div className="section-label">{essay.category}</div>
            <h2>{essay.title}</h2>
            <p>{essay.excerpt}</p>
            <div className="featured-essay-meta">
              <span className="featured-essay-date">
                <img src="/assets/icon-calendar.svg" alt="" width="18" height="18" />
                {essay.date}
              </span>
              <span className="featured-essay-read">
                <img src="/assets/icon-time.svg" alt="" width="18" height="18" />
                {essay.read}
              </span>
            </div>
          </div>
          <div className="featured-essay-author">
            <div className="featured-essay-avatar">
              <img src="/assets/insights-author.jpg" alt="Rotimi Omotayo" />
            </div>
            <div className="featured-essay-author-info">
              <span className="featured-essay-author-name">Rotimi Omotayo</span>
              <span className="featured-essay-author-role">Founder &amp; Principal</span>
            </div>
          </div>
          <Link to={essayPath(essay.slug)} className="btn btn-primary">Read the Essay</Link>
        </div>
      </div>
    </section>
  )
}
