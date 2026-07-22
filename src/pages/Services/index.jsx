import { useEffect } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import ServicesHero from './sections/ServicesHero'
import ServicesGrid from './sections/ServicesGrid'
import ServiceDetail from './sections/ServiceDetail'
import BespokeSection from './sections/BespokeSection'
import FaqSection from '../Home/sections/FaqSection'
import CtaSection from '../Home/sections/CtaSection'

const services = [
  {
    num: '01',
    title: 'Governance, Risk & Compliance Advisory',
    desc: 'We help boards, executive committees and risk leaders design integrated governance frameworks that withstand regulatory scrutiny and inform better decision-making at every level of the organisation.',
    deliverables: [
      'Enterprise GRC framework design',
      'Board and committee charters',
      'Risk appetite statements',
      'Regulatory engagement strategy',
    ],
    gold: true,
  },
  {
    num: '02',
    title: 'Internal Controls & Policy Development',
    desc: 'From process-level controls to enterprise-wide policy libraries, we build control environments that are auditable, defensible and proportionate to the risk they manage.',
    deliverables: [
      'Control framework design and documentation',
      'Policy and procedure libraries',
      'Control testing and remediation plans',
      'Three-lines-of-defence operating model',
    ],
    gold: false,
  },
  {
    num: '03',
    title: 'Organisational Readiness & Emerging Risk Assessment',
    desc: 'Emerging risks demand emerging capabilities. We assess readiness across cyber, AI, fintech partnerships and operational resilience, translating findings into an actionable roadmap.',
    deliverables: [
      'Cyber and operational resilience reviews',
      'AI governance and model risk assessments',
      'Fintech partnership risk diligence',
      'Prioritised remediation roadmap',
    ],
    gold: true,
  },
  {
    num: '04',
    title: 'Workforce & Capability Advisory',
    desc: 'The strongest controls fail without the right people. We advise on capability frameworks, succession planning and talent retention for second- and third-line functions.',
    deliverables: [
      'Capability and skills-gap analyses',
      'Function-level target operating models',
      'Succession and retention strategies',
      'Training and accreditation pathways',
    ],
    gold: false,
  },
  {
    num: '05',
    title: 'Corporate Governance Review',
    desc: 'Periodic, independent assessments of governance practice — benchmarked against UK Corporate Governance Code, sector codes and international good practice.',
    deliverables: [
      'Board effectiveness review',
      'Committee terms of reference assessment',
      'Governance gap analysis',
      'Board pack and reporting review',
    ],
    gold: true,
  },
  {
    num: '06',
    title: 'Compliance Programme Implementation',
    desc: 'We move compliance from policy to practice — building monitoring, training, reporting and assurance routines that embed regulatory requirements into the business.',
    deliverables: [
      'Compliance programme blueprint',
      'Monitoring and testing plans',
      'Regulatory reporting frameworks',
      'Training and culture programmes',
    ],
    gold: false,
  },
  {
    num: '07',
    title: 'Audit & Fraud Investigation Advisory',
    desc: 'Drawing on senior audit and banking leadership experience, we advise on internal audit strategy, conduct external quality assessments and support sensitive fraud investigations.',
    deliverables: [
      'Internal audit strategy and methodology',
      'External quality assessment (EQA)',
      'Fraud investigation procedures',
      'Forensic and root-cause reviews',
    ],
    gold: true,
  },
]

export default function Services() {
  useEffect(() => {
    document.title = 'Services — Bema Ventures & Services Limited'
  }, [])

  return (
    <>
      <Navbar />
      <main>
        <ServicesHero />
        <ServicesGrid />
        {services.map((svc) => (
          <ServiceDetail key={svc.num} {...svc} />
        ))}
        <BespokeSection />
        <FaqSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  )
}
