import { Link } from 'react-router-dom';
import './CTASection.css';
export default function CTASection() {
  return (
    <section className="cta-section">
      <div className="cta-glow" />
      <div className="cta-inner">
        <h2>Unlock More Power From Your Portfolio - Starting Today</h2>
        <div className="cta-badges">
          <div className="cta-badge">
            <img src="https://cdn.prod.website-files.com/6578337118890b80c9df8ea8/68d7e1242fbed4b3e64abc06_Leaf-left.svg" alt="" className="cta-badge-icon" />
            100% Secure
          </div>
          <div className="cta-badge">
            <img src="https://cdn.prod.website-files.com/6578337118890b80c9df8ea8/68d82aae51add6e45de064e7_Star%201.svg" alt="" className="cta-badge-icon" />
            Regulatory Compliant
          </div>
          <div className="cta-badge">
            <img src="https://cdn.prod.website-files.com/6578337118890b80c9df8ea8/68d82aae51add6e45de064e7_Star%201.svg" alt="" className="cta-badge-icon" />
            No-Prepayment Charges
          </div>
          <img src="https://cdn.prod.website-files.com/6578337118890b80c9df8ea8/68d7e12449d820ee03b19ef5_Leaf-right.svg" alt="" className="cta-badge-icon" />
        </div>
        <p>
          Stop letting your investments sit idle- unlock instant liquidity.<br />
          Borrow smart, stay invested, and keep growing.
        </p>
        <div className="cta-buttons">
          <Link to="/get-a-loan" className="btn btn-primary btn-lg">
            Check My Eligibility
            <img src="https://cdn.prod.website-files.com/6578337118890b80c9df8ea8/68d7d3efd7bbcab182bb6a0a_arrow_outward.svg" alt="" style={{width:16,height:16,filter:'invert(1)'}} />
          </Link>
          <Link to="/get-a-loan" className="btn btn-glass btn-lg">Apply Now</Link>
        </div>
      </div>
    </section>
  );
}
