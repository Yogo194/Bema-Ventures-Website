export default function ContactForm() {
  return (
    <section className="contact-form-section" id="contact-form">
      <div className="contact-form-inner">
        <div className="contact-form-heading">
          <div className="section-label">Form</div>
          <h2 className="section-heading">Send Us a Message</h2>
        </div>
        <div className="contact-form-layout">
          <div className="contact-form-media">
            <div className="contact-form-building">
              <img src="/assets/contact-building.jpg" alt="Bema Ventures office exterior" />
            </div>
            <div className="contact-form-map">
              <img src="/assets/contact-map.png" alt="Map showing 178 Blackthorn Road, Southampton" />
            </div>
          </div>
          <form
            className="contact-form-card"
            onSubmit={e => e.preventDefault()}
          >
            <p className="contact-form-intro">
              Fill out the form and our team will respond within 24 hours.
            </p>
            <div className="contact-form-fields">
              <div className="contact-form-row">
                <label className="contact-field">
                  <span>First Name</span>
                  <input type="text" name="firstName" placeholder="Enter your first name" />
                </label>
                <label className="contact-field">
                  <span>Last Name</span>
                  <input type="text" name="lastName" placeholder="Enter your last name" />
                </label>
              </div>
              <div className="contact-form-row">
                <label className="contact-field">
                  <span>Email Address</span>
                  <input type="email" name="email" placeholder="Enter your email address" />
                </label>
                <label className="contact-field">
                  <span>Company Name</span>
                  <input type="text" name="company" placeholder="Enter your company name" />
                </label>
              </div>
              <label className="contact-field">
                <span>Subject</span>
                <input type="text" name="subject" placeholder="Enter subject message" />
              </label>
              <label className="contact-field">
                <span>Message</span>
                <textarea name="message" placeholder="Enter your message here" rows="5" />
              </label>
            </div>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  )
}
