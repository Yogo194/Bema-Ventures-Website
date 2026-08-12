const SUBMIT_URL = 'https://api.web3forms.com/submit'
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

/**
 * Validate contact form fields.
 * @param {Record<string, string>} values
 * @returns {{ valid: boolean, errors: Record<string, string> }}
 */
export function validateContactForm(values) {
  const errors = {}
  const firstName = values.firstName?.trim() ?? ''
  const lastName = values.lastName?.trim() ?? ''
  const email = values.email?.trim() ?? ''
  const subject = values.subject?.trim() ?? ''
  const message = values.message?.trim() ?? ''

  if (!firstName) errors.firstName = 'First name is required.'
  else if (firstName.length < 2) errors.firstName = 'Enter at least 2 characters.'

  if (!lastName) errors.lastName = 'Last name is required.'
  else if (lastName.length < 2) errors.lastName = 'Enter at least 2 characters.'

  if (!email) errors.email = 'Email address is required.'
  else if (!EMAIL_PATTERN.test(email)) errors.email = 'Enter a valid email address.'

  if (!subject) errors.subject = 'Subject is required.'
  else if (subject.length < 3) errors.subject = 'Enter at least 3 characters.'

  if (!message) errors.message = 'Message is required.'
  else if (message.length < 10) errors.message = 'Enter at least 10 characters.'

  return { valid: Object.keys(errors).length === 0, errors }
}

/**
 * Send a validated contact message via Web3Forms.
 *
 * @param {object} values
 * @param {string} values.firstName
 * @param {string} values.lastName
 * @param {string} values.email
 * @param {string} [values.company]
 * @param {string} values.subject
 * @param {string} values.message
 * @param {string} [values.botcheck] Honeypot — must stay empty
 * @returns {Promise<{ ok: boolean, message: string }>}
 */
export async function sendContactMessage(values) {
  const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY

  if (!accessKey) {
    throw new Error(
      'Contact form is not configured. Add VITE_WEB3FORMS_ACCESS_KEY to your .env file.'
    )
  }

  // Bots that fill the honeypot are rejected silently by Web3Forms.
  if (values.botcheck) {
    return {
      ok: true,
      message: 'Your message has been sent. We will respond within 24 hours.',
    }
  }

  const name = `${values.firstName.trim()} ${values.lastName.trim()}`
  const subject = values.subject.trim()

  const payload = {
    access_key: accessKey,
    subject: `Bema Ventures enquiry: ${subject}`,
    from_name: name,
    name,
    email: values.email.trim(),
    company: values.company?.trim() || '—',
    enquiry_subject: subject,
    message: values.message.trim(),
    botcheck: '',
  }

  const response = await fetch(SUBMIT_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(payload),
  })

  const data = await response.json().catch(() => ({}))
  const rawMessage = typeof data.message === 'string' ? data.message : ''

  if (!response.ok || data.success === false || data.success === 'false') {
    throw new Error(rawMessage || 'Unable to send your message. Please try again.')
  }

  return {
    ok: true,
    message: 'Your message has been sent. We will respond within 24 hours.',
  }
}
