export default function FounderSection() {
  return (
    <section className="founder-section" id="founder">
      <div className="founder-inner">
        <div className="founder-image">
          <img src="/assets/founder.jpg" alt="Rotimi Omotayo" />
        </div>
        <div className="founder-text">
          <div className="section-label">Founder</div>
          <h2 className="section-heading">Rotimi Omotayo</h2>
          <p className="section-italic">Professional Accountant · Banker · Compliance Expert</p>
          <p className="section-body">
            A seasoned former Chief Audit Executive of a Tier-2 bank, Rotimi has spent his career at the intersection of finance, audit and regulation. He founded Bema Ventures to bring that depth of practitioner experience to the boards and executives who need it most.
          </p>
          <div className="key-metrics">
            <div className="metric">
              <span className="metric-value">30+</span>
              <span className="metric-label">Years</span>
            </div>
            <div className="metric">
              <span className="metric-value">CAE</span>
              <span className="metric-label">Tier-2 Bank</span>
            </div>
            <div className="metric">
              <span className="metric-value">UK</span>
              <span className="metric-label">Registered</span>
            </div>
          </div>
          <a href="#contact" className="btn btn-primary">
            Read Full Profile
            <img src="/assets/arrow-right.svg" alt="" width="18" height="15" />
          </a>
        </div>
      </div>
    </section>
  )
}
