const values = [
  { num: '01', title: 'Independence', desc: 'We give counsel that is unshaped by commercial pressure. Where we cannot help, we say so.' },
  { num: '02', title: 'Discretion', desc: 'Sensitive matters are handled with the confidentiality the boardroom expects.' },
  { num: '03', title: 'Practitioner Depth', desc: 'Every engagement is led by professionals who have done the work, not merely studied it.' },
  { num: '04', title: 'Proportionality', desc: 'Frameworks scaled to the risk and the institution — never compliance for its own sake.' },
]

export default function ValuesSection() {
  return (
    <section className="about-values-section">
      <div className="about-values-inner">
        <div className="about-values-heading">
          <div className="about-values-heading-left">
            <div className="section-label">Vision &amp; Values</div>
          </div>
          <div className="about-values-heading-right">
            <h2>Considered. Independent. Implementable.</h2>
            <p>Our vision is to be the first call for boards and executives of regulated institutions when the matter is too important — or too sensitive — for anything less than senior counsel.</p>
          </div>
        </div>
        <div className="values-card-grid">
          {values.map(({ num, title, desc }) => (
            <div className="values-card" key={num}>
              <div className="values-card-top">
                <span className="values-card-num">{num}</span>
              </div>
              <div className="values-card-body">
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
