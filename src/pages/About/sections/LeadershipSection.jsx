const credentials = [
  { title: 'Professional Accountant', desc: 'Qualified, with deep technical grounding' },
  { title: 'Banker', desc: 'Senior experience in regulated financial institutions' },
  { title: 'Compliance Expert', desc: 'Across AML/CFT/CPF, conduct and regulatory affairs' },
  { title: 'Former Chief Audit Executive', desc: 'Tier-2 bank leadership' },
]

export default function LeadershipSection() {
  return (
    <section className="leadership-section">
      <div className="leadership-inner">
        <div className="founder-photo-wrap">
          <img src="/assets/founder-portrait.jpg" alt="Rotimi Omotayo" />
          <div className="founder-photo-gradient"></div>
          <div className="founder-photo-caption">
            <p className="founder-name">Rotimi Omotayo</p>
            <p className="founder-title-label">Founder &amp; Principal</p>
          </div>
        </div>
        <div className="leadership-content">
          <div className="leadership-text">
            <div className="section-label">Leadership</div>
            <h2>A career inside the institutions we now advise.</h2>
            <div className="leadership-bio">
              <p>Rotimi Omotayo is a professional accountant, banker and compliance expert with more than three decades of senior experience across the financial services sector. He served as Chief Audit Executive of a Tier-2 bank, where he led a wide-ranging mandate covering internal audit, fraud investigation, regulatory engagement and board-level risk reporting.</p>
              <p>Throughout his career, Rotimi has advised boards and executive committees on the matters that determine institutional resilience — from the design of internal control environments to the conduct of sensitive investigations. He founded Bema Ventures to make that depth of experience available to organisations seeking counsel of equivalent calibre.</p>
            </div>
          </div>
          <div className="credentials-grid">
            {credentials.map(({ title, desc }) => (
              <div className="credential-card" key={title}>
                <h4>{title}</h4>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
