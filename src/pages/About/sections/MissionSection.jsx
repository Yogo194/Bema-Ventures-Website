export default function MissionSection() {
  return (
    <section className="mission-section">
      <div className="mission-inner">
        <div className="section-label" style={{ textAlign: 'center', width: '100%' }}>Mission</div>
        <div className="mission-text">
          <h2>To be the most active and reliable advisory organisation on governance, risk and compliance.</h2>
          <div className="mission-body">
            <p>We were founded on a single conviction: that the most useful advice on governance, risk and compliance comes from those who have practised it at the most senior levels — not from those who have only consulted on it.</p>
            <p>Our work spans the full spectrum of GRC, from board-effectiveness reviews to forensic investigations, from compliance programme build-outs to AI and emerging-risk readiness. What unites these engagements is a refusal to deliver theory where what is needed is judgement.</p>
          </div>
        </div>
        <div className="video-container">
          <img src="/assets/about-video-bg.jpg" alt="Team at work" className="video-bg" />
          <button className="play-btn" aria-label="Play video">
            <img src="/assets/icon-play.svg" alt="" width="80" height="80" />
          </button>
        </div>
      </div>
    </section>
  )
}
