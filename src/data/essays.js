export const essayCategories = [
  'All',
  'Governance',
  'Risk Management',
  'AI & Compliance',
  'Internal Audit',
  'Fintech',
  'Regulation',
]

const author = {
  name: 'Rotimi Omotayo',
  role: 'Founder & Principal',
  photo: 'insights-author.jpg',
  bio: 'Rotimi is a professional accountant, banker and compliance expert with more than three decades of senior experience across financial services. A former Chief Audit Executive of a Tier-2 bank, he advises boards and executives on governance, risk, assurance and regulatory matters — with a focus on judgement that holds under scrutiny.',
}

/** @typedef {{ type: 'p', text: string } | { type: 'h2', text: string } | { type: 'pullquote', text: string } | { type: 'steps', items: { title: string, text: string }[] }} EssayBlock */

/**
 * @type {Array<{
 *   slug: string
 *   featured?: boolean
 *   img: string
 *   category: string
 *   read: string
 *   date: string
 *   title: string
 *   excerpt: string
 *   dek: string
 *   takeaways: string[]
 *   lead: string
 *   blocks: EssayBlock[]
 * }>}
 */
export const essays = [
  {
    slug: 'board-oversight',
    featured: true,
    img: 'insights-featured.jpg',
    category: 'Governance',
    read: '12 min read',
    date: 'April 2026',
    title: 'The new shape of board oversight: from quarterly cadence to continuous assurance',
    excerpt: 'For a generation, the boardroom calendar was a settled affair. Four meetings, a strategy day, and the audit committee in between. That settlement is over. We examine why the most resilient boards are moving from periodic review to continuous assurance — and what that demands of the executive.',
    dek: 'For a generation, the boardroom calendar was a settled affair. Four meetings, a strategy day, and the audit committee in between. That settlement is over — and the boards that adapt will be the ones that remain effective.',
    takeaways: [
      'Periodic board packs are no longer sufficient evidence of oversight in a continuous-risk environment.',
      'Continuous assurance is a design choice — not a dashboard product or a reporting theatre.',
      'The executive must own the flow of material information; the board must own the appetite for it.',
      'Start with the few risks that could impair the franchise, not with a catalogue of every metric.',
    ],
    lead: 'The traditional board calendar was built for a world in which material change arrived slowly enough to be digested between meetings. That world has narrowed. Regulatory expectations now move on monthly — sometimes weekly — cycles. Operational incidents propagate at the speed of digital distribution. Model risk, third-party concentration and conduct exposures do not wait politely for the next quarterly pack.',
    blocks: [
      { type: 'p', text: 'In this environment, boards that continue to treat oversight as a periodic event are not merely inefficient. They are structurally under-informed. The question is no longer whether continuous assurance is desirable. It is whether the institution can evidence that the board received, considered and acted upon material information with a cadence that matches the risk.' },
      { type: 'h2', text: 'What continuous assurance is — and is not' },
      { type: 'p', text: 'Continuous assurance is often mis-sold as a technology programme: more dashboards, more alerts, more real-time feeds into the board portal. Technology can help. It is not the substance. Continuous assurance is a governance design in which the flow of material information to the board and its committees is timely, risk-weighted and decision-ready — and in which the board\'s response is correspondingly disciplined.' },
      { type: 'p', text: 'It is not an invitation to drown directors in noise. The boards that fail at continuous assurance usually fail in one of two directions: they either receive everything and read nothing of consequence, or they receive so little that the quarterly meeting remains the only moment of genuine scrutiny. Both are forms of theatre. Neither constitutes oversight.' },
      { type: 'p', text: 'Done well, continuous assurance means three things. First, a standing agreement between the board and executive on which risks, thresholds and events trigger out-of-cycle escalation. Second, a reporting architecture that surfaces exceptions, trends and early-warning indicators without requiring directors to reconstruct the narrative from raw data. Third, a committee structure with the capacity and mandate to interrogate those signals between full board meetings.' },
      { type: 'pullquote', text: 'Continuous assurance is a design choice about how material information reaches the board — not a product catalogue of dashboards.' },
      { type: 'h2', text: 'Why the quarterly settlement collapsed' },
      { type: 'p', text: 'Several forces converged. Supervisors — particularly in financial services — have made clear that board awareness of emerging issues is itself a supervisory interest. Waiting until the next scheduled meeting to disclose a material control failure or a shifting customer-outcome pattern is no longer a defensible posture, if it ever was.' },
      { type: 'p', text: 'At the same time, the operating model of many firms has become more interdependent. A payment outage, a vendor failure, a model drift event or a conduct spike in a digital channel can impair franchise value within days. The audit committee that meets four times a year cannot, by calendar alone, claim continuous visibility over such exposures.' },
      { type: 'p', text: 'There is also a talent and attention problem. Boards are asked to oversee a wider risk surface — climate, cyber, AI, operational resilience, Consumer Duty — without a proportional expansion of time. Continuous assurance, properly designed, is a response to that constraint: it concentrates board attention where the residual risk is highest, rather than spreading it evenly across a fixed agenda.' },
      { type: 'h2', text: 'What this demands of the executive' },
      { type: 'p', text: 'Continuous assurance fails most often at the executive layer, not the board layer. Directors cannot escalate what management has not surfaced. The executive must therefore own three obligations.' },
      { type: 'p', text: '<strong>Judgement on materiality.</strong> Escalation criteria must be written, tested and lived. Vague commitments to “keep the board informed” produce either silence or panic. Materiality thresholds — for losses, customer harm, regulatory breach, control degradation — need to be explicit enough that a busy CRO or COO can act without waiting for a consensus meeting.' },
      { type: 'p', text: '<strong>Quality of the narrative.</strong> Boards do not need more data points. They need a clear statement of what has changed, why it matters, what management is doing, and what decision — if any — is required of the board. Continuous reporting that merely appends charts to a portal is continuous noise.' },
      { type: 'p', text: '<strong>Capacity between meetings.</strong> If the only forum for serious challenge is the quarterly board, continuous assurance will collapse into email updates that nobody interrogates. The executive must support committee chairs with briefing cadence, access to second- and third-line leaders, and the willingness to convene extraordinary sessions when thresholds are breached.' },
      { type: 'h2', text: 'A practical sequence for boards' },
      { type: 'p', text: 'Institutions that have moved successfully from periodic review to continuous assurance rarely begin with a wholesale redesign. They begin with focus.' },
      {
        type: 'steps',
        items: [
          { title: 'Name the franchise risks.', text: 'Identify the handful of exposures that could impair customers, capital, licence or reputation within a short horizon. Continuous assurance starts there — not with every KPI in the management information suite.' },
          { title: 'Define escalation triggers.', text: 'For each franchise risk, agree the quantitative and qualitative thresholds that require out-of-cycle board or committee notification. Document ownership and response expectations.' },
          { title: 'Rewrite the board pack around exceptions.', text: 'Replace volume with signal. Leading indicators, control health, open issues and customer-outcome trends should dominate; static status reporting should shrink.' },
          { title: 'Empower the committees.', text: 'Audit, risk and, where relevant, technology or conduct committees need mandate and diary space to act between full board meetings. Continuous assurance without committee capacity is aspiration, not design.' },
          { title: 'Test the pathway.', text: 'Run a tabletop: simulate a material incident and observe how information would reach the chair, the relevant committee and the full board. Most firms discover gaps in the first rehearsal.' },
        ],
      },
      { type: 'h2', text: 'Assurance without theatre' },
      { type: 'p', text: 'There is a cultural hazard in any move toward continuous oversight: the appearance of hyperactivity can substitute for the substance of challenge. Boards that receive daily alerts but never change a decision, a resource allocation or a risk appetite have not achieved continuous assurance. They have achieved continuous distraction.' },
      { type: 'p', text: 'The discipline that matters is the same discipline that has always distinguished effective boards: curiosity about the exception, insistence on root cause, and the willingness to require remediation with deadlines that are monitored. Continuous assurance simply moves that discipline closer to the speed of the risk.' },
      { type: 'p', text: 'For executives, the reciprocal obligation is candour. Continuous assurance cannot coexist with a culture of managed surprise — where bad news is held until it can be packaged, softened or timed to a favourable agenda. The boards that will thrive are those whose executives understand that early, unvarnished escalation is a professional duty, not a career risk.' },
      { type: 'h2', text: 'Closing' },
      { type: 'p', text: 'The quarterly cadence was never a law of nature. It was a convention that fitted a slower institutional world. That world has not entirely disappeared, but it no longer defines the risk clock of a modern regulated firm.' },
      { type: 'p', text: 'Continuous assurance will look different in every organisation. What it shares, where it works, is a simple architecture: clear franchise risks, explicit triggers, exception-led reporting, committee capacity, and an executive culture that surfaces material change without delay. Boards that build that architecture will find that their meetings become sharper, not longer — because the work of awareness has already begun before the papers are opened.' },
    ],
  },
  {
    slug: 'fintech-risk-maturity',
    img: 'insights-essay-1.jpg',
    category: 'Risk Management',
    read: '12 min read',
    date: 'March 2026',
    title: 'Risk management in fintech: from velocity to maturity',
    excerpt: "How the most resilient fintechs are graduating their second-line functions without slowing the business — a practitioner's view from the engagements that worked.",
    dek: 'Growth-stage fintechs often discover that the risk framework that got them authorised is not the one that will keep them authorised. Maturity is not bureaucracy — it is the capacity to scale control with scale of risk.',
    takeaways: [
      'Second-line maturity must track product and geographic expansion, not headcount fashion.',
      'Velocity and control are not opposites when materiality, ownership and escalation are clear.',
      'Boards should demand evidence of risk appetite in use — not only risk appetite on paper.',
      'The firms that mature well invest early in MI that shows exceptions, not only green status.',
    ],
    lead: 'Fintech risk management has a distinctive pathology. The same qualities that win customers and capital — speed, product iteration, lean operating models — can leave second-line capability lagging the risk the firm actually runs. The result is familiar: a control environment that looked adequate at authorisation and looks fragile eighteen months later.',
    blocks: [
      { type: 'p', text: 'This is not an argument against velocity. It is an argument for proportionate maturity. The fintechs that sustain growth under supervisory scrutiny are those that treat risk management as a scaling function: as products, markets and customer volumes expand, so do the clarity of ownership, the quality of MI and the independence of challenge.' },
      { type: 'h2', text: 'The velocity trap' },
      { type: 'p', text: 'Early-stage firms often concentrate scarce risk and compliance talent on the next regulatory milestone — authorisation, a variation of permission, a new product notification. Once the milestone is cleared, attention returns to growth. Controls that were designed for a simpler product set quietly become outdated. Policies exist; operating effectiveness does not keep pace.' },
      { type: 'p', text: 'Supervisors notice. So do investors conducting diligence for later rounds. The gap between documented framework and lived practice becomes the story of the engagement. Closing that gap under time pressure is always more expensive than building maturity in step with growth.' },
      { type: 'pullquote', text: 'Maturity is not the enemy of speed. Unowned risk is.' },
      { type: 'h2', text: 'What maturity looks like in practice' },
      { type: 'p', text: 'Mature fintech risk management shares a handful of traits that travel across business models.' },
      { type: 'p', text: '<strong>Risk appetite that constrains decisions.</strong> Appetite statements that never appear in product forums, credit committees or incident reviews are decorative. Mature firms show how breaches are escalated, how temporary tolerances are approved, and how appetite informs go/no-go choices.' },
      { type: 'p', text: '<strong>A second line with genuine independence.</strong> Independence is not measured by reporting lines alone. It is measured by whether the CRO or Head of Risk can stop, slow or redesign a launch without political penalty — and whether that challenge is documented.' },
      { type: 'p', text: '<strong>MI built for exceptions.</strong> Boards and executives do not need forty green KPIs. They need leading indicators for fraud, operational incidents, customer outcomes, liquidity stress and third-party concentration — with thresholds that trigger action.' },
      { type: 'h2', text: 'A sequence that preserves velocity' },
      { type: 'p', text: 'Firms that graduate their risk function without freezing the product roadmap tend to follow a deliberate order.' },
      {
        type: 'steps',
        items: [
          { title: 'Map risk to the actual product surface.', text: 'Inventory products, payment rails, customer segments and critical third parties. Align risk ownership to that map, not to an inherited org chart.' },
          { title: 'Fix escalation before you fix frameworks.', text: 'Write and test who must be told, when, for material incidents and control failures. Maturity starts with flow of information under pressure.' },
          { title: 'Staff the second line for the next twelve months of growth.', text: 'Hire or contract for the risk profile you are building toward, not the one you had at authorisation.' },
          { title: 'Instrument the board pack.', text: 'Replace narrative reassurance with exception reporting, open issues and appetite utilisation. Make status subordinate to signal.' },
          { title: 'Rehearse supervisory conversations.', text: 'If you cannot explain how risk appetite constrained a recent decision, the framework is not yet mature — regardless of policy length.' },
        ],
      },
      { type: 'h2', text: 'Closing' },
      { type: 'p', text: 'The most resilient fintechs do not choose between velocity and control. They design for both: clear ownership, independent challenge, and MI that makes residual risk visible while there is still time to act. That is maturity — and it is what separates firms that scale from firms that stall under their own success.' },
    ],
  },
  {
    slug: 'consumer-duty',
    img: 'insights-essay-2.jpg',
    category: 'Regulation',
    read: '12 min read',
    date: 'February 2026',
    title: 'Consumer Duty, two years on: from compliance to standard',
    excerpt: 'The firms that prospered did not treat the Duty as a programme. They treated it as a permanent shift in how customer outcomes are evidenced.',
    dek: 'Two years on, the Consumer Duty has sorted the market. Some firms ran a programme and hoped for quiet. Others rebuilt how they evidence fair outcomes. The second group is still standing taller.',
    takeaways: [
      'Duty maturity is evidenced in ongoing customer-outcome MI — not in a closed programme pack.',
      'Product governance and fair-value assessments must survive contact with real customer behaviour.',
      'Boards need outcome narratives they can challenge, not assurance statements they can only note.',
      'Vulnerable-customer frameworks fail when they are bolted on rather than designed into journeys.',
    ],
    lead: 'When the Consumer Duty arrived, many firms treated it as a finite compliance programme: gap analysis, remediation plan, board attestation, close. That approach produced paper. It did not produce a lasting standard of customer-outcome evidence. Two years on, the difference is visible in how firms talk to their boards — and how supervisors talk to firms.',
    blocks: [
      { type: 'p', text: 'The Duty was never intended as a one-time project. It was a permanent elevation of the standard against which products, communications, support and fair value are judged. Firms that understood this early invested in data, governance and culture. Firms that did not are still explaining why outcomes look worse than their policies promised.' },
      { type: 'h2', text: 'What “good” now looks like' },
      { type: 'p', text: 'Mature Duty practice shares several traits. Customer-outcome MI is continuous, segmented and linked to product decisions. Fair-value assessments are living documents revisited when costs, claims or customer behaviour shift. Communications testing is not a launch ritual but a standing discipline. Support journeys are measured for friction that harms customers who need help most.' },
      { type: 'p', text: 'Crucially, the board receives more than a green RAG. It receives a narrative: which customer groups are experiencing poorer outcomes, why, what is being done, and when the board will see evidence of improvement. That is the difference between compliance theatre and a standard of oversight.' },
      { type: 'pullquote', text: 'The Duty rewards firms that evidence outcomes continuously — not those that attested once and moved on.' },
      { type: 'h2', text: 'Where programmes still fail' },
      { type: 'p', text: 'Three failure modes recur. First, outcome frameworks that cannot be populated with reliable data — so boards are asked to take comfort in methodology rather than evidence. Second, product governance that treats fair value as a static assessment rather than a recurring test against real-world experience. Third, vulnerable-customer processes that sit outside the core journey, activated too late to prevent harm.' },
      { type: 'p', text: 'Each of these is fixable. None is fixed by another policy refresh alone.' },
      { type: 'h2', text: 'A practical board agenda' },
      {
        type: 'steps',
        items: [
          { title: 'Demand segmented outcome MI.', text: 'Ask which customers are worse off, by product and channel, and what leading indicators predicted the deterioration.' },
          { title: 'Reopen fair value on evidence.', text: 'Require triggers — cost changes, claims experience, complaints themes — that force reassessment without waiting for an annual cycle.' },
          { title: 'Test support under stress.', text: 'Review how customers in financial difficulty or with characteristics of vulnerability actually experience contact centres, apps and complaints handling.' },
          { title: 'Link remediation to deadlines.', text: 'Outcome issues without owners, budgets and board follow-up dates are not managed risks — they are known unknowns.' },
          { title: 'Retire the programme mindset.', text: 'If Duty reporting still lives in a “project” pack rather than BAU governance, the firm has not yet made the shift to standard.' },
        ],
      },
      { type: 'h2', text: 'Closing' },
      { type: 'p', text: 'Two years on, the Consumer Duty has become what it was meant to be: a lasting test of whether firms can evidence that customers receive fair outcomes. The firms that prospered treated that test as permanent. Those still treating it as a closed programme will find the next supervisory conversation less forgiving than the first.' },
    ],
  },
  {
    slug: 'operational-resilience',
    img: 'insights-essay-3.jpg',
    category: 'Fintech',
    read: '12 min read',
    date: 'January 2026',
    title: 'Operational resilience for the consumer-facing fintech',
    excerpt: 'PS21/3 is no longer the headline — execution is. We outline the operational tests, scenario rigour and board reporting that distinguish credible resilience.',
    dek: 'Important business services are mapped. Impact tolerances are set. The hard work now is proving that the firm can stay within those tolerances when something real goes wrong.',
    takeaways: [
      'Resilience credibility lives in testing and remediation, not in the original mapping exercise.',
      'Third-party and cloud concentration must be treated as first-order franchise risks.',
      'Board reporting should show tolerance breaches, near-misses and unresolved vulnerabilities.',
      'Consumer-facing fintechs must rehearse customer communication as part of resilience, not as an afterthought.',
    ],
    lead: 'For consumer-facing fintechs, operational resilience is no longer a policy topic. It is a franchise topic. A prolonged outage in payments, onboarding or customer support does not merely breach an internal SLA — it harms customers, attracts supervisory attention and can erode the trust on which growth depends.',
    blocks: [
      { type: 'p', text: 'PS21/3 and related expectations forced a useful first step: identify important business services, map resources, set impact tolerances. Many firms completed that work diligently. Fewer have built the ongoing discipline that makes the framework real — severe but plausible scenario testing, honest board reporting, and remediation that actually closes vulnerabilities.' },
      { type: 'h2', text: 'Beyond the mapping pack' },
      { type: 'p', text: 'A completed mapping exercise is necessary and insufficient. Supervisors increasingly ask how the firm knows it can remain within impact tolerance. The answer cannot be a diagram. It must be evidence from tests, incidents and near-misses — including where the firm would have breached tolerance if a dependency had failed for longer.' },
      { type: 'p', text: 'Consumer-facing models amplify the stakes. Customers expect continuous availability. Social media compresses reputational damage. Payment and e-money firms sit on rails and vendors they do not control. Resilience therefore becomes a question of concentration, substitutability and communication speed as much as internal IT recovery.' },
      { type: 'pullquote', text: 'If the board only sees green resilience status, it is not seeing resilience.' },
      { type: 'h2', text: 'What credible execution requires' },
      { type: 'p', text: '<strong>Scenario rigour.</strong> Tests must stretch beyond the comfortable. Include simultaneous vendor failure, degraded cloud regions, data integrity issues and surge demand after an incident. Record where tolerance would have been breached and what investment closes the gap.' },
      { type: 'p', text: '<strong>Third-party realism.</strong> Concentration on a single cloud provider, payment processor or KYC vendor is a board-level risk. Exit plans that exist only on paper do not count. Firms need tested alternatives or accepted residual risk with explicit board acknowledgement.' },
      { type: 'p', text: '<strong>Customer communication as a control.</strong> Resilience includes telling customers what happened, what to do and when service will return — in language that reduces harm. That capability must be rehearsed with the same seriousness as technical failover.' },
      { type: 'h2', text: 'A board-ready sequence' },
      {
        type: 'steps',
        items: [
          { title: 'Revalidate important business services.', text: 'Confirm the list still matches how customers actually use the firm — including new products launched since the original mapping.' },
          { title: 'Stress the tolerances.', text: 'Run severe but plausible scenarios and document potential breaches without sanitising the findings for the pack.' },
          { title: 'Quantify third-party concentration.', text: 'Show dependency heat maps, substitutability and the cost or timeline of alternatives.' },
          { title: 'Track remediation to closure.', text: 'Open resilience vulnerabilities need owners, budgets and board dates — not perpetual “in progress” status.' },
          { title: 'Rehearse the customer narrative.', text: 'Include communications, complaints surge and vulnerable-customer handling in every major resilience exercise.' },
        ],
      },
      { type: 'h2', text: 'Closing' },
      { type: 'p', text: 'Operational resilience for the consumer-facing fintech is now an execution discipline. Mapping was the entry ticket. Credible firms prove, repeatedly, that they can stay within impact tolerance under stress — and that their boards see the uncomfortable evidence early enough to fund the fix.' },
    ],
  },
  {
    slug: 'board-effectiveness',
    img: 'insights-essay-4.jpg',
    category: 'Governance',
    read: '12 min read',
    date: 'December 2025',
    title: 'Board effectiveness in an era of accelerated regulation',
    excerpt: 'Why the board calendars of 2020 are no longer fit for the regulatory cadence of today — and what to change first, without theatre.',
    dek: 'Boards are asked to oversee more risk domains, at higher velocity, with no extra hours in the day. Effectiveness now depends less on longer meetings and more on sharper design.',
    takeaways: [
      'Calendar redesign beats agenda inflation — protect time for the few issues that matter most.',
      'Committee mandates must match the regulatory surface the firm actually faces.',
      'Information architecture is a board-effectiveness issue, not an administrative one.',
      'Skills matrices should reflect emerging risks — AI, cyber, resilience — with honest gap plans.',
    ],
    lead: 'Board effectiveness reviews often conclude that directors are diligent, engaged and well-intentioned — and still structurally behind the regulatory and operational clock. Diligence cannot compensate for a calendar built for a slower world, packs that bury exceptions, or committees whose mandates no longer match the firm\'s risk surface.',
    blocks: [
      { type: 'p', text: 'Accelerated regulation has expanded what boards must understand: Consumer Duty, operational resilience, climate, cyber, AI governance, financial crime typologies that evolve with product design. Adding every topic to an already crowded agenda produces the illusion of coverage. It does not produce effectiveness.' },
      { type: 'h2', text: 'What no longer works' },
      { type: 'p', text: 'The 2020-era board calendar assumed that quarterly deep dives plus an annual strategy day could absorb most material issues. That assumption breaks when supervisory expectations and operational incidents arrive between meetings. Packets grow; challenge thins. Directors leave meetings informed in volume and uncertain in priority.' },
      { type: 'p', text: 'Theatre follows: more slides, more attestations, more “noted” items. The board looks busy. Residual risk is not reduced.' },
      { type: 'pullquote', text: 'Effectiveness is the ability to change a decision in time — not the ability to receive every paper on time.' },
      { type: 'h2', text: 'Redesign before you add' },
      { type: 'p', text: 'Boards that remain effective under accelerated regulation typically start with subtraction and redesign, not addition.' },
      { type: 'p', text: '<strong>Protect deep-work time.</strong> Reserve board and committee slots for franchise risks and decisions that require judgement. Push routine compliance status into written packs or consent agendas where appropriate.' },
      { type: 'p', text: '<strong>Align committees to the risk surface.</strong> If technology, data and cyber now drive material franchise risk, ensure a committee has the mandate, skills and meeting cadence to challenge it — without duplicating the full board\'s work.' },
      { type: 'p', text: '<strong>Fix the information architecture.</strong> Exception-led MI, clear escalation criteria and concise decision papers matter more than another training session on reading denser packs.' },
      { type: 'h2', text: 'First moves that avoid theatre' },
      {
        type: 'steps',
        items: [
          { title: 'Audit the last four board agendas.', text: 'Identify items that consumed time without changing a decision, appetite or resource allocation. Cut or rewrite them.' },
          { title: 'Refresh the skills matrix honestly.', text: 'Map emerging risks to director capability. Where gaps exist, plan recruitment, advisers or education — and record residual risk.' },
          { title: 'Clarify committee boundaries.', text: 'Eliminate overlapping reviews that create false comfort and dilute accountability.' },
          { title: 'Install an exception protocol.', text: 'Agree what must reach the chair or committee between meetings, and rehearse it.' },
          { title: 'Commission a focused effectiveness review.', text: 'Ask reviewers to test design against today\'s regulatory cadence — not against a generic code checklist alone.' },
        ],
      },
      { type: 'h2', text: 'Closing' },
      { type: 'p', text: 'Board effectiveness in an era of accelerated regulation is a design problem. Calendars, committees, skills and information flows must be rebuilt for the speed of risk. Boards that do this without theatre will find they need fewer pages — and make better decisions with the time they already have.' },
    ],
  },
  {
    slug: 'internal-audit',
    img: 'insights-essay-5.jpg',
    category: 'Internal Audit',
    read: '12 min read',
    date: 'November 2025',
    title: 'Internal audit best practice: the next ten years',
    excerpt: "What separates an audit function that protects the institution from one that merely reports on it. Notes on talent, technology and the third line's true mandate.",
    dek: 'The third line’s mandate has not changed: independent assurance that matters. What has changed is the speed, complexity and technology of the risks it must assure.',
    takeaways: [
      'Protective audit functions prioritise residual risk and root cause — not issue volume.',
      'Technology enables coverage; judgement still defines quality.',
      'Talent models must blend domain expertise with data and cyber fluency.',
      'Boards should judge IA by influence on control maturity, not by reports delivered.',
    ],
    lead: 'Internal audit sits at a hinge point. Stakeholders want broader coverage, faster insight and sharper relevance to emerging risks. At the same time, the classic mandate remains: independent, objective assurance that helps the board and executive protect the institution. Best practice over the next decade will be defined by how well functions hold that mandate while modernising how they deliver it.',
    blocks: [
      { type: 'p', text: 'Functions that merely report — producing tidy issues, ageing charts and annual opinions disconnected from franchise risk — will look increasingly ornamental. Functions that protect will shape remediation priorities, elevate systemic themes and speak plainly when management optimism outruns control reality.' },
      { type: 'h2', text: 'From coverage theatre to residual-risk focus' },
      { type: 'p', text: 'The next decade will punish audit plans that chase completeness for its own sake. Dynamic planning, continuous risk assessment and thematic reviews of cross-cutting risks — data, third parties, change, conduct — will matter more than rotating through every entity on a fixed cycle.' },
      { type: 'p', text: 'Issue quality will matter more than issue quantity. A short report that forces a redesign of a broken control environment is worth more than a long report that catalogs symptoms. Root-cause discipline, already uneven across the profession, becomes non-negotiable.' },
      { type: 'pullquote', text: 'The third line protects when it changes what the first and second lines do next — not when it fills the board pack.' },
      { type: 'h2', text: 'Talent and technology' },
      { type: 'p', text: 'Technology will expand what IA can see: analytics on transactions, control telemetry, automated testing of configured rules. It will not replace the judgement required to interpret weak signals, challenge management narratives or decide where limited audit hours buy the most assurance.' },
      { type: 'p', text: 'Talent models must evolve accordingly. Domain specialists in credit, financial crime, payments and resilience remain essential. So do auditors fluent in data, cloud and model risk. Hybrid teams — permanent core plus specialist surge — will be common. So will harder conversations about whether the budget matches the risk surface the board expects IA to cover.' },
      { type: 'h2', text: 'A practical agenda for CAEs and boards' },
      {
        type: 'steps',
        items: [
          { title: 'Reanchor the plan to franchise risks.', text: 'Show explicitly how audit hours map to the risks that could impair customers, capital or licence.' },
          { title: 'Raise the bar on root cause.', text: 'Require every material issue to answer why the control failed — process, people, technology, incentives — and what systemic fix is needed.' },
          { title: 'Invest in analytics with a use case.', text: 'Fund tools only where they improve coverage or insight on named risks; avoid technology for its own brochure value.' },
          { title: 'Refresh the skills mix.', text: 'Close gaps in cyber, data and model risk through hiring, secondments or co-sourcing — and disclose residual capability gaps to the audit committee.' },
          { title: 'Measure influence, not output.', text: 'Track remediation quality, repeat findings and board actions taken — not merely reports issued on time.' },
        ],
      },
      { type: 'h2', text: 'Closing' },
      { type: 'p', text: 'Over the next ten years, internal audit will either deepen its role as a protective third line or drift into a reporting utility. Best practice belongs to functions that keep independence, modernise method and insist that assurance change behaviour. That is the mandate — and it has never been more needed.' },
    ],
  },
  {
    slug: 'ai-governance',
    img: 'insights-essay-6.jpg',
    category: 'AI & Compliance',
    read: '12 min read',
    date: 'October 2025',
    title: 'AI governance: a practical framework',
    excerpt: 'Model risk, third-party AI dependencies and the supervisory expectations now taking shape across the FCA, PRA and EBA. A working framework for boards.',
    dek: 'AI is already inside credit decisions, fraud systems, customer support and third-party tools. Governance that waits for a perfect regulatory handbook will arrive after the risk.',
    takeaways: [
      'Inventory AI use cases before you invent AI policy — boards need a map of where models already act.',
      'Third-party AI is still the firm’s risk; vendor assurances are not a substitute for oversight.',
      'Model risk disciplines adapt well to AI — if materiality, validation and monitoring are honest.',
      'Human accountability must remain clear even when outputs are automated.',
    ],
    lead: 'Boards are being asked to oversee artificial intelligence with a mixture of urgency and ambiguity. Use cases multiply across the firm and its vendors. Supervisory expectations are forming across the FCA, PRA, EBA and related regimes. Waiting for final rules before installing governance is a strategy for surprise. A practical framework can be built now from disciplines boards already understand: inventory, materiality, accountability, validation and monitoring.',
    blocks: [
      { type: 'p', text: 'AI governance is not a separate religion from model risk, operational resilience and conduct. It is an extension of those disciplines to systems that learn, generate or decide at scale — including where the “model” is embedded in a supplier’s black box.' },
      { type: 'h2', text: 'Start with the map' },
      { type: 'p', text: 'Most firms underestimate how much AI they already run. Credit scoring enhancements, fraud detection, chatbots, marketing optimisation, document processing, vendor KYC tools — the inventory is usually longer than the first workshop suggests. Without that map, policy is abstract and assurance is guesswork.' },
      { type: 'p', text: 'Classify use cases by customer impact, financial impact, explainability needs and substitutability. High-materiality use cases earn stricter validation, monitoring and human oversight. Low-materiality tools still need ownership — but not the same ceremony.' },
      { type: 'pullquote', text: 'If the board cannot name where AI can harm a customer, it does not yet have AI governance.' },
      { type: 'h2', text: 'A working framework' },
      { type: 'p', text: '<strong>Accountability.</strong> Every material AI use case needs a named business owner, a risk owner and a technical owner. “The model decided” is not an acceptable end state for customer or regulatory outcomes.' },
      { type: 'p', text: '<strong>Lifecycle control.</strong> Adapt model-risk practice: development standards, independent validation proportionate to materiality, approval gates, change control, ongoing performance and bias/drift monitoring, and retirement criteria.' },
      { type: 'p', text: '<strong>Third-party AI.</strong> Procurement and outsourcing controls must ask what models a vendor uses, what data trains them, how performance is monitored and what happens when the tool fails. Concentration on a single AI provider is an operational resilience issue.' },
      { type: 'p', text: '<strong>Conduct and explainability.</strong> Where AI affects customer outcomes — credit, support, personalised pricing — firms need to evidence fairness and provide explanations commensurate with the decision’s impact.' },
      { type: 'h2', text: 'Board sequence' },
      {
        type: 'steps',
        items: [
          { title: 'Commission an AI inventory.', text: 'Include internal models and material vendor tools. Refresh it on a defined cadence.' },
          { title: 'Set materiality tiers.', text: 'Agree which use cases require full model-risk treatment, enhanced monitoring or standard IT controls.' },
          { title: 'Assign owners and escalation.', text: 'Document who can approve deployment, who monitors drift and who escalates customer harm or model failure.' },
          { title: 'Extend third-party due diligence.', text: 'Update outsourcing and procurement standards for AI-specific questions and ongoing assurance.' },
          { title: 'Report exceptions to the board.', text: 'Surface material incidents, validation gaps, vendor concentrations and unresolved drift — not a generic “AI strategy” slide.' },
        ],
      },
      { type: 'h2', text: 'Closing' },
      { type: 'p', text: 'AI governance will keep evolving with supervisory guidance. Firms that wait for perfection will govern too late. Firms that inventory use cases, apply proportionate model-risk discipline, hold humans accountable and treat vendor AI as their own risk will be ready for both the technology and the scrutiny that follows it.' },
    ],
  },
]

export { author }

export function getEssay(slug) {
  return essays.find((e) => e.slug === slug) ?? null
}

export function getFeaturedEssay() {
  return essays.find((e) => e.featured) ?? essays[0]
}

export function getListingEssays() {
  return essays.filter((e) => !e.featured)
}

export function getRelatedEssays(slug, limit = 3) {
  const current = getEssay(slug)
  if (!current) return essays.filter((e) => !e.featured).slice(0, limit)

  const sameCategory = essays.filter(
    (e) => e.slug !== slug && e.category === current.category,
  )
  const others = essays.filter(
    (e) => e.slug !== slug && e.category !== current.category,
  )
  return [...sameCategory, ...others].slice(0, limit)
}

export function essayPath(slug) {
  return `/insights/${slug}`
}
