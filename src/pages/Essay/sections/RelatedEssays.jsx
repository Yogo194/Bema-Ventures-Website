import { Link } from 'react-router-dom'
import { essayPath, getRelatedEssays } from '../../../data/essays'

export default function RelatedEssays({ slug }) {
  const related = getRelatedEssays(slug)

  return (
    <section className="essay-related-section">
      <div className="essay-related-inner">
        <div className="essay-related-header">
          <div className="section-label">Continue reading</div>
          <h2 className="section-heading">Related essays</h2>
        </div>
        <div className="essay-related-grid">
          {related.map((essay) => (
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
      </div>
    </section>
  )
}
