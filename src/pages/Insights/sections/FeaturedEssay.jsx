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
              <span className="featured-essay-read">
                <img src="/assets/icon-time.svg" alt="" width="18" height="18" />
                {essay.read}
              </span>
            </div>
          </div>
          <Link to={essayPath(essay.slug)} className="btn btn-primary">Read the Essay</Link>
        </div>
      </div>
    </section>
  )
}
