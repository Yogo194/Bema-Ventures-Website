export default function ServiceDetail({ num, title, desc, deliverables, gold }) {
  return (
    <section className={'svc-detail-section' + (gold ? ' svc-detail-gold' : '')}>
      <div className="svc-detail-inner">
        <div className="svc-detail-left">
          <span className="svc-detail-num">{num}</span>
          <h2>{title}</h2>
        </div>
        <div className="svc-detail-right">
          <p className="svc-detail-desc">{desc}</p>
          <div className="svc-deliverables">
            <h3>Key Deliverables</h3>
            <ul>
              {deliverables.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <a href="mailto:Rotimiomotayo@gmail.com" className="btn btn-primary">
            Discuss the Engagement
          </a>
        </div>
      </div>
    </section>
  )
}
