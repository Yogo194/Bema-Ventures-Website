import { useState } from 'react'

const faqs = [
  {
    q: 'What types of organisations do you typically advise?',
    a: 'We advise regulated financial institutions — banks, fintechs, asset managers and insurers — as well as professional services firms, public bodies and any enterprise with significant governance or compliance obligations. We do not have a minimum size threshold; we select engagements by fit, not by revenue.',
  },
  {
    q: 'How do engagements typically begin?',
    a: 'Every engagement begins with a confidential conversation, without obligation. From there, we issue a tailored engagement letter setting out scope, deliverables, timeline and fees. We do not work on speculative or contingent terms.',
  },
  {
    q: 'Who leads the work — partners or juniors?',
    a: 'All work is led by senior practitioners. We do not operate a model where client-facing work is handed to junior staff after the initial engagement. The person you meet is the person who does the work.',
  },
  {
    q: 'What is your approach to fees?',
    a: 'We typically work on fixed-fee retainers or clearly scoped project fees. Day rates are available for shorter interventions. All fees are agreed in writing before work commences.',
  },
  {
    q: 'How do you protect confidentiality?',
    a: 'Confidentiality is a precondition, not a bolt-on. All engagements are covered by a mutual NDA as standard. We do not refer to clients by name without explicit consent. Sensitive matters discussed in initial consultations are treated with the same discretion as live engagements.',
  },
]

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState(1)

  return (
    <section className="faq-section" id="faq">
      <div className="faq-inner">
        <div className="section-header centered">
          <div className="section-label">FAQ</div>
          <h2 className="section-heading">Questions, answered plainly.</h2>
          <p className="section-body" style={{ maxWidth: 600, margin: '0 auto' }}>
            For matters not covered below, please write to us directly. Every enquiry is answered personally within one business day.
          </p>
        </div>
        <div className="faq-list">
          {faqs.map((faq, i) => {
            const isOpen = openIdx === i
            return (
              <div className={'faq-item' + (isOpen ? ' open' : '')} key={i}>
                <button
                  className="faq-question"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIdx(isOpen ? -1 : i)}
                >
                  <span>{faq.q}</span>
                  <img
                    src={isOpen ? '/assets/caret-up.svg' : '/assets/caret-down.svg'}
                    className="faq-icon"
                    alt=""
                    width="28"
                    height="15"
                  />
                </button>
                {isOpen && (
                  <div className="faq-answer">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
