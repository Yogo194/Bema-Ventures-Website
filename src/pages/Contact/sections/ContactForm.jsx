import { useState } from 'react'
import { sendContactMessage, validateContactForm } from '../../../utils/contactForm'

const INITIAL_VALUES = {
  firstName: '',
  lastName: '',
  email: '',
  company: '',
  subject: '',
  message: '',
  botcheck: '',
}

export default function ContactForm() {
  const [values, setValues] = useState(INITIAL_VALUES)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | submitting | success | error
  const [statusMessage, setStatusMessage] = useState('')

  function handleChange(e) {
    const { name, value, type, checked } = e.target
    setValues(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (checked ? '1' : '') : value,
    }))
    if (errors[name]) {
      setErrors(prev => {
        const next = { ...prev }
        delete next[name]
        return next
      })
    }
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setStatusMessage('')

    const { valid, errors: nextErrors } = validateContactForm(values)
    setErrors(nextErrors)
    if (!valid) {
      setStatus('idle')
      return
    }

    setStatus('submitting')
    try {
      const result = await sendContactMessage(values)
      setStatus('success')
      setStatusMessage(result.message)
      setValues(INITIAL_VALUES)
      setErrors({})
    } catch (err) {
      setStatus('error')
      setStatusMessage(err.message || 'Something went wrong. Please try again.')
    }
  }

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
          <form className="contact-form-card" onSubmit={handleSubmit} noValidate>
            <p className="contact-form-intro">
              Fill out the form and our team will respond within 24 hours.
            </p>
            <div className="contact-form-fields">
              {/* Honeypot — leave empty; hidden from users */}
              <input
                type="checkbox"
                name="botcheck"
                className="contact-form-honeypot"
                tabIndex={-1}
                autoComplete="off"
                checked={Boolean(values.botcheck)}
                onChange={handleChange}
                aria-hidden="true"
              />
              <div className="contact-form-row">
                <label className={'contact-field' + (errors.firstName ? ' has-error' : '')}>
                  <span>First Name</span>
                  <input
                    type="text"
                    name="firstName"
                    value={values.firstName}
                    onChange={handleChange}
                    placeholder="Enter your first name"
                    autoComplete="given-name"
                    aria-invalid={Boolean(errors.firstName)}
                    aria-describedby={errors.firstName ? 'error-firstName' : undefined}
                  />
                  {errors.firstName && (
                    <em className="contact-field-error" id="error-firstName">{errors.firstName}</em>
                  )}
                </label>
                <label className={'contact-field' + (errors.lastName ? ' has-error' : '')}>
                  <span>Last Name</span>
                  <input
                    type="text"
                    name="lastName"
                    value={values.lastName}
                    onChange={handleChange}
                    placeholder="Enter your last name"
                    autoComplete="family-name"
                    aria-invalid={Boolean(errors.lastName)}
                    aria-describedby={errors.lastName ? 'error-lastName' : undefined}
                  />
                  {errors.lastName && (
                    <em className="contact-field-error" id="error-lastName">{errors.lastName}</em>
                  )}
                </label>
              </div>
              <div className="contact-form-row">
                <label className={'contact-field' + (errors.email ? ' has-error' : '')}>
                  <span>Email Address</span>
                  <input
                    type="email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    placeholder="Enter your email address"
                    autoComplete="email"
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? 'error-email' : undefined}
                  />
                  {errors.email && (
                    <em className="contact-field-error" id="error-email">{errors.email}</em>
                  )}
                </label>
                <label className="contact-field">
                  <span>Company Name</span>
                  <input
                    type="text"
                    name="company"
                    value={values.company}
                    onChange={handleChange}
                    placeholder="Enter your company name"
                    autoComplete="organization"
                  />
                </label>
              </div>
              <label className={'contact-field' + (errors.subject ? ' has-error' : '')}>
                <span>Subject</span>
                <input
                  type="text"
                  name="subject"
                  value={values.subject}
                  onChange={handleChange}
                  placeholder="Enter subject message"
                  aria-invalid={Boolean(errors.subject)}
                  aria-describedby={errors.subject ? 'error-subject' : undefined}
                />
                {errors.subject && (
                  <em className="contact-field-error" id="error-subject">{errors.subject}</em>
                )}
              </label>
              <label className={'contact-field' + (errors.message ? ' has-error' : '')}>
                <span>Message</span>
                <textarea
                  name="message"
                  value={values.message}
                  onChange={handleChange}
                  placeholder="Enter your message here"
                  rows="5"
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? 'error-message' : undefined}
                />
                {errors.message && (
                  <em className="contact-field-error" id="error-message">{errors.message}</em>
                )}
              </label>
            </div>

            {statusMessage && (
              <p
                className={
                  'contact-form-status' +
                  (status === 'success' ? ' is-success' : '') +
                  (status === 'error' ? ' is-error' : '')
                }
                role="status"
              >
                {statusMessage}
              </p>
            )}

            <button
              type="submit"
              className="btn btn-primary"
              disabled={status === 'submitting'}
            >
              {status === 'submitting' ? 'Sending…' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
