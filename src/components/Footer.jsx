import { Link } from 'react-router-dom';
import './Footer.css';
const navCols = [
  {
    title: 'Company',
    links: [
      { label: 'Distributors', to: '/distributors' },
      { label: 'Blogs', to: '/blogs' },
      { label: 'Media', to: '/press-media' },
      { label: 'Careers', to: '/careers' },
      { label: 'About us', to: '/about-us' },
      { label: 'Grievance', to: '/grievance' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Terms & Conditions', to: '/terms-conditions' },
      { label: 'Privacy Policy', to: '/privacy-policy' },
    ],
  },
];
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-brand">
          <img src="https://cdn.prod.website-files.com/6578337118890b80c9df8ea8/68d6dc54f8aa4e9c0238a127_logo-white.svg" alt="Finsire" className="footer-logo-img" />
          <p>Empower your decisions effortlessly with our suite designed to optimize operations and elevate customer experience.</p>
          <p>Contact us: <a href="mailto:support@finsire.com?subject=Support" className="footer-email">support@finsire.com</a></p>
        </div>
        {navCols.map((col) => (
          <div className="footer-col" key={col.title}>
            <h4>{col.title}</h4>
            <ul>
              {col.links.map((link) => (
                <li key={link.label}>
                  {link.to ? <Link to={link.to}>{link.label}</Link> : <a href={link.href} target="_blank" rel="noreferrer">{link.label}</a>}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="footer-divider" />
      <div className="footer-bottom">
        <p>© 2026 Finsire Technologies Pvt. Ltd.</p>
        <div className="footer-legal">
          <Link to="/terms-conditions">Terms &amp; Conditions</Link>
          <Link to="/privacy-policy">Privacy Policy</Link>
        </div>
      </div>
      <div className="footer-disclaimer">
        <div className="footer-address-row">
          <img src="https://cdn.prod.website-files.com/6578337118890b80c9df8ea8/68d7bea32540c97503d3f8bc_Frame%202147225466.svg" alt="address" style={{ width: 16, height: 16, flexShrink: 0, marginTop: 2 }} />
          <p>Address: #48, 1st Floor, 2nd Street, Balaji Nagar, Royapettah, Chennai, Tamil Nadu - 600 014</p>
        </div>
        <p style={{ marginTop: 16 }}>Disclaimer: Loan approval and terms are subject to analysis of your mutual fund portfolio and fulfillment of KYC/eligibility criteria. The exact loan-to-value (LTV) offered will depend on the type of mutual funds pledged and may vary (e.g. up to ~50% for equity funds and ~75% for debt funds, as per industry norms and as per a particular lender). Mutual fund investments will be lien-marked in favor of the lender during the tenure of the loan, meaning you cannot redeem or sell those units until the loan is repaid. However, you continue to remain the owner of the funds and enjoy all gains/dividends. Interest rates and other charges will be clearly disclosed in the sanction letter; please read all terms and conditions carefully. Finsire is a technology platform facilitating loans issued by its partner banks/NBFCs – all loans are at the sole discretion of the lending partners. Mutual Funds are subject to market risks; a fall in NAV of pledged funds may require additional collateral or partial repayment (margin call). Make sure to borrow responsibly and have a repayment plan in place to avoid liquidation of your investments.</p>
        <img src="https://cdn.prod.website-files.com/6578337118890b80c9df8ea8/68dc23752effa0c5d2a8b38e_1dfcba7fbfa9bdf59a87b343231c16ed_FINSIRE-footer.svg" alt="Finsire" className="footer-bottom-logo" />
      </div>
    </footer>
  );
}
