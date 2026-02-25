import './HowItWorks.css';
const steps = [
  {
    num: '01',
    badge: 'Step 1/3',
    title: 'Apply and check eligibility',
    desc: 'Your mutual funds remain invested, so you keep earning returns while accessing cash.',
  },
  {
    num: '02',
    badge: 'Step 2/3',
    title: 'Pledge your funds',
    desc: 'Select the funds you wish to pledge. Lien marking is carried out digitally via a SEBI-compliant process, with no requirement for physical paperwork.',
  },
  {
    num: '03',
    badge: 'Step 3/3',
    title: 'Get instant disbursal',
    desc: 'The loan is approved within minutes and credited directly to your bank account, available 24x7. Your investments stay intact while you access liquidity.',
  },
];
export default function HowItWorks() {
  return (
    <section className="hiw-section">
      <div className="hiw-container">
        <div className="section-label">
          How it works
        </div>
        <h2 className="section-title hiw-title">
          From Portfolio to Cash in Just 3 Steps
        </h2>
        <div className="hiw-steps">
          {steps.map((s, i) => (
            <div className="hiw-step" key={i}>
              <div className="hiw-step-num">{s.num}</div>
              <div className="hiw-step-badge">{s.badge}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
