import { Link } from 'react-router-dom';
import './Hero.css';
const lenders = [
  {
    cover: 'https://cdn.prod.website-files.com/6578337118890b80c9df8ea8/68d7d0607ca91f74c1dea1ab_Cover-1.png',
    logo: 'https://cdn.prod.website-files.com/6578337118890b80c9df8ea8/68d7cfd8cdc8f3c61231f1d1_Lenders%20Logo-1.png',
    name: 'City Union Bank',
    tagIcon: 'https://cdn.prod.website-files.com/6578337118890b80c9df8ea8/68dc1db4b25e0f8c4b3f18db_percent_discount.png',
    tag: 'Lowest interest rates',
  },
  {
    cover: 'https://cdn.prod.website-files.com/6578337118890b80c9df8ea8/68e8bbeb7864335c41dc123f_BFL%20Building%20Container%201.png',
    logo: 'https://cdn.prod.website-files.com/6578337118890b80c9df8ea8/695b6a59587f9bd0edfa5be4_Bajaj%20Finance_Logo_Primary.png',
    name: 'Bajaj Finance Limited',
    tagIcon: 'https://cdn.prod.website-files.com/6578337118890b80c9df8ea8/68dc1db4b25e0f8c4b3f18de_stars.png',
    tag: 'Leads with 35%+ MARKET share',
  },
  {
    cover: 'https://cdn.prod.website-files.com/6578337118890b80c9df8ea8/68d7d060637f8b6b83c17be8_Cover-3.png',
    logo: 'https://cdn.prod.website-files.com/6578337118890b80c9df8ea8/68d7cfd8364aeedcca85c108_Lenders%20Logo-3.png',
    name: 'Suryoday Small Finance Bank',
    tagIcon: 'https://cdn.prod.website-files.com/6578337118890b80c9df8ea8/68dc1db4420d16ac5a89289b_whatshot.png',
    tag: 'highest loan-to-value',
  },
  {
    cover: 'https://cdn.prod.website-files.com/6578337118890b80c9df8ea8/68d7d060b6033920cdf84086_Cover-4.png',
    logo: 'https://cdn.prod.website-files.com/6578337118890b80c9df8ea8/68d7cfd892c75a0a4ac9d084_Lenders%20Logo-4.png',
    name: 'Karur Vysya Bank',
    tagIcon: 'https://cdn.prod.website-files.com/6578337118890b80c9df8ea8/68e8b15a6523671093030fbc_verified.png',
    tag: 'Newly Added partner',
  },
  {
    cover: 'https://cdn.prod.website-files.com/6578337118890b80c9df8ea8/68d7d0603baf6fafdca16fc6_Cover-5.png',
    logo: 'https://cdn.prod.website-files.com/6578337118890b80c9df8ea8/68d7cfd864c36ce4b5d7dcf3_Lenders%20Logo-5.png',
    name: 'Aditya Birla Capital',
    tagIcon: 'https://cdn.prod.website-files.com/6578337118890b80c9df8ea8/68e8b15a6523671093030fbc_verified.png',
    tag: 'Newly added partner',
  },
];
export default function Hero() {
  const tripled = [...lenders, ...lenders, ...lenders];
  return (
    <section className="hero">
      <div className="hero-glow hero-glow-1" />
      <div className="hero-glow hero-glow-2" />
      <div className="hero-content">
        <div className="hero-badge">
          <img
            src="https://cdn.prod.website-files.com/6578337118890b80c9df8ea8/68d7cbff49d820ee03aef103_verified.svg"
            alt="verified"
            className="hero-badge-icon"
          />
          Building for RBI-Regulated Banks and NBFCs
        </div>
        <h1 className="hero-title">
          <strong>Digital Infrastructure for Loan Against Mutual Funds and Shares</strong>
        </h1>
        <div className="hero-ctas">
          <a href="/book-a-demo" className="btn btn-outline btn-lg">
            How it works
            <img src="https://cdn.prod.website-files.com/6578337118890b80c9df8ea8/68d7d3efd7bbcab182bb6a0a_arrow_outward.svg" alt="" style={{width:16,height:16}} />
          </a>
          <Link to="/get-a-loan" className="btn btn-primary btn-lg">Check my eligibility</Link>
        </div>
      </div>
      {}
      <div className="lender-strip">
        <div className="lender-strip-inner">
          {tripled.map((l, i) => (
            <a href="#" className="lender-card" key={i}>
              <img src={l.cover} alt={l.name} className="lender-card-cover" />
              <img src={l.logo} alt={l.name} className="lender-card-logo-img" />
              <div className="lender-card-name">{l.name}</div>
              <div className="lender-card-tag">
                <img src={l.tagIcon} alt="" className="lender-tag-icon" />
                {l.tag}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
