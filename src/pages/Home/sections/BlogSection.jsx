const posts = [
  {
    img: 'blog-1.jpg', alt: 'Board oversight article',
    date: 'April 2026', read: '12 min read',
    title: 'The change in board oversight: quarterly to continuous',
  },
  {
    img: 'blog-2.jpg', alt: 'Fintech risk management article',
    date: 'April 2026', read: '12 min read',
    title: 'Risk management in fintech: from velocity to maturity',
  },
]

export default function BlogSection() {
  return (
    <section className="blog-section" id="blog">
      <div className="blog-inner">
        <div className="blog-header">
          <div className="blog-header-text">
            <div className="section-label">Blog</div>
            <h2 className="section-heading">Considered writing for<br />considered readers.</h2>
          </div>
          <a href="#" className="btn btn-primary">
            View All
            <img src="/assets/arrow-upright.svg" alt="" width="14" height="14" />
          </a>
        </div>
        <div className="blog-grid">
          {posts.map((post) => (
            <article className="blog-card" key={post.title}>
              <div className="blog-image">
                <img src={`/assets/${post.img}`} alt={post.alt} />
              </div>
              <div className="blog-meta">
                <span className="blog-date">
                  <img src="/assets/icon-calendar.svg" alt="" width="22" height="22" />
                  {post.date}
                </span>
                <span className="blog-read">
                  <img src="/assets/icon-time.svg" alt="" width="22" height="22" />
                  {post.read}
                </span>
              </div>
              <h3 className="blog-title">{post.title}</h3>
              <a href="#" className="btn btn-text">
                Read More
                <img src="/assets/arrow-right.svg" alt="" width="18" height="15" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
