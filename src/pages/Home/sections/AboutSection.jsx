export default function AboutSection() {
  return (
    <section className="about-section" id="about">
      <div className="about-inner">
        <div className="about-image">
          <img src="/assets/about-firm.jpg" alt="The firm" />
        </div>
        <div className="about-text">
          <div className="section-label">The Firm</div>
          <h2 className="section-heading">
            A senior advisory practice built on three decades inside the institutions we now counsel.
          </h2>
          <p className="section-italic">Unlock full potential through customized consulting solutions</p>
          <p className="section-body">
            We do not produce decks for their own sake. Every engagement is led by senior practitioners who have sat in the chair our clients occupy — and have answered to the regulators they answer to. The result is advice that is candid, commercially aware and built to be implemented.
          </p>
          <a href="#founder" className="btn btn-primary">
            Learn More
            <img src="/assets/arrow-right.svg" alt="" width="18" height="15" />
          </a>
        </div>
      </div>
    </section>
  )
}
