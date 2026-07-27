export default function AboutCta() {
  return (
    <section className="about-cta-section">
      <div className="about-cta-inner">
        <div className="about-cta-rings" aria-hidden="true">
          <div className="about-cta-ring about-cta-ring-right">
            <div className="about-cta-ring-rotate about-cta-ring-rotate-right">
              <img src="/assets/about-cta-deco-1.svg" alt="" />
            </div>
          </div>
          <div className="about-cta-ring about-cta-ring-left">
            <div className="about-cta-ring-rotate about-cta-ring-rotate-left">
              <img src="/assets/about-cta-deco-2.svg" alt="" />
            </div>
          </div>
        </div>
        <div className="about-cta-text">
          <h2>Let&apos;s Build Your Business Future Together</h2>
          <p>Partner with Bema Ventures to streamline operations, grow your reach, and unlock your next stage of business growth.</p>
        </div>
        <a href="mailto:Rotimiomotayo@gmail.com" className="btn btn-primary">Request a Consultation</a>
      </div>
    </section>
  )
}
