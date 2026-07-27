export default function FeaturedEssay() {
  return (
    <section className="featured-essay-section">
      <div className="featured-essay-inner">
        <div className="featured-essay-image">
          <img src="/assets/insights-featured.jpg" alt="Boardroom discussion" />
        </div>
        <div className="featured-essay-content">
          <div className="featured-essay-text">
            <div className="section-label">Governance</div>
            <h2>The new shape of board oversight: from quarterly cadence to continuous assurance</h2>
            <p>For a generation, the boardroom calendar was a settled affair. Four meetings, a strategy day, and the audit committee in between. That settlement is over. We examine why the most resilient boards are moving from periodic review to continuous assurance — and what that demands of the executive.</p>
            <div className="featured-essay-meta">
              <span className="featured-essay-date">
                <img src="/assets/icon-calendar.svg" alt="" width="18" height="18" />
                April 2026
              </span>
              <span className="featured-essay-read">
                <img src="/assets/icon-time.svg" alt="" width="18" height="18" />
                12 min read
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
          <a href="#" className="btn btn-primary">Read the Essay</a>
        </div>
      </div>
    </section>
  )
}
