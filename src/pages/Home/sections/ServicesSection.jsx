const services = [
  { num: '01', title: 'Governance, Risk & Compliance Advisory', desc: 'Strategic GRC advisory for boards and executives navigating complex regulatory environments.' },
  { num: '02', title: 'Internal Controls & Policy Development', desc: 'End-to-end design of internal control environments and the policies that govern them.' },
  { num: '03', title: 'Organizational Readiness & Emerging Risk Assessment', desc: 'Cybersecurity, fintech and AI readiness assessments tailored to regulated organizations.' },
  { num: '04', title: 'Corporate Governance Review', desc: 'Independent reviews of board effectiveness, governance structures and committee mandates.' },
  { num: '05', title: 'Workforce & Capability Advisory', desc: 'Talent retention strategies and skills-gap advisory for risk, compliance and audit functions.' },
  { num: '06', title: 'Compliance Programme Implementation', desc: 'Design and stand-up of compliance programmes — from AML to conduct, sanctions and data.' },
  { num: '07', title: 'Audit & Fraud Investigation Advisory', desc: 'Internal audit transformation, quality assurance reviews and fraud investigation support.' },
]

export default function ServicesSection() {
  return (
    <section className="services-section" id="services">
      <div className="services-inner">
        <div className="section-header centered">
          <div className="section-label">Practice Areas</div>
          <h2 className="section-heading">Seven disciplines.<br />One standard.</h2>
        </div>
        <div className="service-grid">
          {services.map(({ num, title, desc }) => (
            <div className="service-card" key={num}>
              <div className="service-card-top">
                <span className="service-num">{num}</span>
                <img src="/assets/arrow-right.svg" alt="" width="18" height="15" />
              </div>
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
