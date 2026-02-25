import { Link } from 'react-router-dom';
import Partners from '../components/Partners';
import './Page.css';
import './Distributors.css';

const BASE = "https://cdn.prod.website-files.com/6578337118890b80c9df8ea8/";

export default function Distributors() {
  return (
    <div style={{ background: '#fff' }}>

      <div className="dist-hero">
        <div className="dist-hero-inner">
          <p className="dist-compliance-badge">
            <img src={BASE + "68d7cbff49d820ee03aef103_verified.svg"} alt="" />
            The Tech Stack is Compliant with the Regulator-Approved Process
          </p>
          <h1>Powering banks, nbfcs & fintechs to launch and scale seamlessly</h1>
          <h2>Digital Infrastructure for Loan Against Mutual Funds and Shares</h2>
          <Link to="/book-a-demo" className="btn btn-primary btn-lg" style={{ marginTop: 32 }}>
            Request access
          </Link>
        </div>
      </div>

      <div className="dist-section">
        <div className="dist-section-label">Solution for lenders</div>
        <h2 className="dist-section-title">Plug and Play for Secured Credit</h2>

        <div className="dist-cards-3">
          {[
            {
              img: BASE + "68d8daf8d3a94b98c507fce7_SL-1.svg",
              title: "Loan Origination System",
              points: [
                "Instant on-boarding",
                "Dynamic pledging flows",
                "Portfolio discovery with CAS & AA flows"
              ]
            },
            {
              img: BASE + "68d7dae88ee9dd308ac44b86_key-icon-1.svg",
              title: "Collateral Management System",
              points: [
                "Maker-checker flows",
                "Collateral risk management",
                "Invoke and revoke functionalities"
              ]
            },
            {
              img: BASE + "68d8daf8fc035a9a28895eb9_SL-3.svg",
              title: "Loan Management System",
              points: [
                "Integration for secured lending",
                "Core banking insights",
                "LSPs/DLAs/DSAs management"
              ]
            }
          ].map((c, i) => (
            <div className="dist-card" key={i}>
              <img src={c.img} alt={c.title} className="dist-card-icon" />
              <h3>{c.title}</h3>
              <ul>
                {c.points.map((p, j) => (
                  <li key={j}>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="dist-tagline">
          An all-in-one platform to originate, manage, and scale secured lending
        </p>

        <Link to="/book-a-demo" className="btn btn-primary">
          Book a demo
        </Link>
      </div>

      <div className="dist-section dist-section-dark">
        <h2 className="dist-section-title" style={{ color: '#fff' }}>
          Ready to Power the Next Generation of Secured Lending?
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: 36 }}>
          Join leading banks, NBFCs, and fintechs building smarter credit products with Finsire.
        </p>
        <Link to="/book-a-demo" className="btn btn-primary btn-lg">
          Request access
        </Link>
      </div>

      <Partners />
    </div>
  );
}