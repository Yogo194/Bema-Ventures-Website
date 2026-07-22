const values = [
  { icon: 'icon-compass.svg', w: 32, h: 32, title: 'Independence', desc: 'We answer to the engagement, never to a sales target. Our counsel is unconflicted and singularly focused on the client\'s interest.' },
  { icon: 'icon-law.svg', w: 32, h: 32, title: 'Judgement', desc: 'Three decades inside regulated institutions inform every recommendation. We weigh trade-offs as practitioners, not theorists.' },
  { icon: 'icon-security.svg', w: 32, h: 32, title: 'Discretion', desc: 'The matters entrusted to us are sensitive by nature. Confidentiality is the default condition of every conversation.' },
  { icon: 'icon-eye.svg', w: 29, h: 23, title: 'Candour', desc: 'We tell boards what they need to hear, not what is comfortable. Polished evasion has no place in serious advisory work.' },
]

export default function ValuesSection() {
  return (
    <section className="values-section" id="values">
      <div className="values-inner">
        <div className="values-header">
          <div className="values-header-left">
            <div className="section-label">Our Values</div>
          </div>
          <div className="values-header-right">
            <h2 className="section-heading">Four principles that govern every engagement.</h2>
            <p className="section-body">
              The work is technical; the standard is ethical. These are the commitments we make to every client, on every brief, without exception.
            </p>
          </div>
        </div>
        <div className="values-grid">
          {values.map(({ icon, w, h, title, desc }) => (
            <div className="value-card" key={title}>
              <img src={`/assets/${icon}`} alt="" width={w} height={h} />
              <div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
