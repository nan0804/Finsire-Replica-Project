import { Link } from 'react-router-dom';
import './WhyPledge.css';
const reasons = [
  {
    img: 'https://cdn.prod.website-files.com/6578337118890b80c9df8ea8/68e8c026fb5a42ad37d167fc_Cover%20DP.svg',
    title: 'Compounding Works',
    desc: 'Your funds stay invested, keep earning - even while pledged. No loss on market upside.',
  },
  {
    img: 'https://cdn.prod.website-files.com/6578337118890b80c9df8ea8/68e8c13bb9bccfbb2ecb9fdb_Cover%20DP%20Calendar.svg',
    title: 'Avoid Bad Timing Losses',
    desc: 'Selling in a dip locks losses. Pledging lets you ride the recovery and access cash.',
  },
  {
    img: 'https://cdn.prod.website-files.com/6578337118890b80c9df8ea8/68e8c13b5cb968c0490a79f3_Cover%20Paper%20Shield.svg',
    title: 'Maintain Tax Efficiency',
    desc: "No capital gains tax triggered because you're not selling units. Keep your tax planning intact.",
  },
  {
    img: 'https://cdn.prod.website-files.com/6578337118890b80c9df8ea8/68e8c13bdde91c52a4f72c4b_Cover%20DP%20Paper%20Money.svg',
    title: 'Access More, Pay Less',
    desc: 'Get up to 80% of your MF value with lower rates than personal loans or credit cards.',
  },
  {
    img: 'https://cdn.prod.website-files.com/6578337118890b80c9df8ea8/68e8c13b18e3a3543139705f_Cover%20DP%20Joystick.svg',
    title: 'Flexibility with Control',
    desc: 'Pay interest only on what you use. Repay principal when you want without any penalties.',
  },
];
export default function WhyPledge() {
  return (
    <section className="pledge-section">
      <div className="container">
        <div className="section-label">why pledge instead of selling?</div>
        <h2 className="section-title">Unlock cash, Preserve wealth</h2>
        <div className="pledge-grid">
          {reasons.map((r, i) => (
            <div className="pledge-card" key={i}>
              <img src={r.img} alt={r.title} className="pledge-card-img" />
              <h3>{r.title}</h3>
              <p>{r.desc}</p>
            </div>
          ))}
        </div>
        <p className="pledge-note">Let your portfolio keep growing while you get the funds you need</p>
        <div style={{ marginTop: 24 }}>
          <Link to="/get-a-loan" className="btn btn-primary btn-lg">Check my eligibility</Link>
        </div>
      </div>
    </section>
  );
}
