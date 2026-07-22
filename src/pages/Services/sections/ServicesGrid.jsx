const services = [
  { num: '01', title: 'Governance, Risk & Compliance Advisory' },
  { num: '02', title: 'Internal Controls & Policy Development' },
  { num: '03', title: 'Organisational Readiness & Emerging Risk Assessment' },
  { num: '04', title: 'Corporate Governance Review' },
  { num: '05', title: 'Workforce & Capability Advisory' },
  { num: '06', title: 'Compliance Programme Implementation' },
  { num: '07', title: 'Audit & Fraud Investigation Advisory' },
]

export default function ServicesGrid() {
  return (
    <div className="svc-overview-grid">
      {services.map(({ num, title }) => (
        <div className="svc-overview-card" key={num}>
          <div className="svc-overview-card-top">
            <span className="svc-overview-num">{num}</span>
          </div>
          <p className="svc-overview-title">{title}</p>
        </div>
      ))}
    </div>
  )
}
