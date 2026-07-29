const channels = [
  {
    title: 'Call Us',
    detail: '+44723',
    href: 'tel:+44723',
    icon: '/assets/contact-icon-phone.svg',
  },
  {
    title: 'Email Us',
    detail: 'Rotimiomotayo1@gmail.com',
    href: 'mailto:Rotimiomotayo1@gmail.com',
    icon: '/assets/contact-icon-email.svg',
  },
  {
    title: 'Our Office',
    detail: '· 178 Blackthorn Road, Southampton, UK SO19 7LQ',
    href: null,
    icon: '/assets/contact-icon-office.svg',
  },
  {
    title: 'Business Hours',
    detail: 'Mon–Fri, 9:00 AM – 6:00 PM (EST)',
    href: null,
    icon: '/assets/contact-icon-hours.svg',
  },
]

export default function ContactInfo() {
  return (
    <section className="contact-info-section">
      <div className="contact-info-inner">
        <div className="contact-info-heading">
          <div className="section-label">Contact Info</div>
          <h2 className="section-heading">Reach us Anytime, Anywhere</h2>
          <p className="section-body">Get in touch directly through your preferred channel.</p>
        </div>
        <div className="contact-info-list">
          {channels.map(({ title, detail, href, icon }) => (
            <div className="contact-info-card" key={title}>
              <div className="contact-info-icon">
                <img src={icon} alt="" width="32" height="32" />
              </div>
              <div className="contact-info-text">
                <h3>{title}</h3>
                {href ? (
                  <a
                    href={href}
                    {...(href.startsWith('mailto:')
                      ? { target: '_blank', rel: 'noopener noreferrer' }
                      : {})}
                  >
                    {detail}
                  </a>
                ) : (
                  <p>{detail}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
