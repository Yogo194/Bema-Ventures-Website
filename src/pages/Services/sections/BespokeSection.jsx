export default function BespokeSection() {
  return (
    <section className="bespoke-section">
      <div className="bespoke-image">
        <img src="/assets/services-bespoke.jpg" alt="Bespoke consulting engagement" />
      </div>
      <div className="bespoke-text">
        <div className="bespoke-copy">
          <p className="bespoke-label">Bespoke</p>
          <div className="bespoke-title-block">
            <h2>
              Custom consulting engagements,
              <br />
              scoped to the matter at hand.
            </h2>
            <p>
              Where the work falls outside our standard practice areas — or spans several of them — we scope a tailored engagement led by senior practitioners and grounded in your specific regulatory and commercial context.
            </p>
          </div>
        </div>
        <a
          href="mailto:bemaventuresltd@gmail.com"
          className="btn btn-outline-white"
          target="_blank"
          rel="noopener noreferrer"
        >
          Discuss a Bespoke Engagement
        </a>
      </div>
    </section>
  )
}
