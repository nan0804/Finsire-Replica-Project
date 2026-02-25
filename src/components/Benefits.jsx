import { Link } from 'react-router-dom';
import './Benefits.css';
const benefits = [
  {
    icon: 'https://cdn.prod.website-files.com/6578337118890b80c9df8ea8/68d7dae88ee9dd308ac44b86_key-icon-1.svg',
    title: 'Stay Invested, Keep Growing',
    desc: 'Your mutual funds remain invested, so you keep earning returns while accessing cash.',
  },
  {
    icon: 'https://cdn.prod.website-files.com/6578337118890b80c9df8ea8/68d7dae8b8ef3872f852e6db_key-icon-2.svg',
    title: 'Lower Interest, Higher Value',
    desc: 'Enjoy rates far below personal loans or credit cards, with a higher sanctioned amount.',
  },
  {
    icon: 'https://cdn.prod.website-files.com/6578337118890b80c9df8ea8/68d7dae82540c97503d70e82_key-icon-3.svg',
    title: 'Flexible Repayments',
    desc: 'Pay interest only on what you use and repay principal anytime without penalties.',
  },
  {
    icon: 'https://cdn.prod.website-files.com/6578337118890b80c9df8ea8/68d7dae8186e825ba06b6472_key-icon-4.svg',
    title: 'Instant & 100% Digital Process',
    desc: 'Apply online, pledge digitally, & get disbursal in minutes without branch visits.',
  },
];
export default function Benefits() {
  return (
    <section className="benefits-section">
      <div className="container">
        <div className="section-label">why loan against mutual funds</div>
        <h2 className="section-title">Key Benefits</h2>
        <div className="benefits-grid">
          {benefits.map((b, i) => (
            <div className="benefit-card" key={i}>
              <div className="benefit-card-bg" />
              <img src={b.icon} alt={b.title} className="benefit-icon-img" />
              <h3>{b.title}</h3>
              <p>{b.desc}</p>
            </div>
          ))}
        </div>
        <p className="benefits-note">
          Enjoy rates lower than personal loans or credit cards, with higher sanctioned limits
        </p>
        <div className="benefits-cta">
          <Link to="/get-a-loan" className="btn btn-primary btn-lg">Check my eligibility</Link>
        </div>
      </div>
    </section>
  );
}
