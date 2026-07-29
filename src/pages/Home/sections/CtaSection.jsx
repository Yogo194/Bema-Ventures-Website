export default function CtaSection() {
  return (
    <section className="cta-section" id="contact">
      <div className="cta-inner">
        <div className="cta-ellipse" aria-hidden="true"></div>

        <div className="cta-clouds" aria-hidden="true">
          <div className="cta-cloud cta-cloud-1">
            <img src="/assets/cta-clouds.png" alt="" />
          </div>
          <div className="cta-cloud cta-cloud-2">
            <img src="/assets/cta-clouds.png" alt="" />
          </div>
          <div className="cta-cloud cta-cloud-3">
            <img src="/assets/cta-clouds.png" alt="" />
          </div>
          <div className="cta-cloud cta-cloud-4">
            <img src="/assets/cta-clouds.png" alt="" />
          </div>
          <div className="cta-cloud cta-cloud-5">
            <img src="/assets/cta-clouds.png" alt="" />
          </div>
          <div className="cta-cloud cta-cloud-6">
            <img src="/assets/cta-clouds.png" alt="" />
          </div>
          <div className="cta-cloud cta-cloud-7">
            <img src="/assets/cta-clouds.png" alt="" />
          </div>
        </div>

        <div className="cta-birds" aria-hidden="true">
          <img src="/assets/cta-birds.png" alt="" />
        </div>

        <div className="cta-text">
          <h2>
            When the matter requires a steady<br />
            hand, begin a conversation.
          </h2>
          <p>Initial consultations are confidential and without obligation. We respond personally to every enquiry within one business day.</p>
        </div>
        <a
          href="mailto:Rotimiomotayo@gmail.com"
          className="btn btn-primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          Request a Consultation
        </a>
      </div>
    </section>
  )
}
