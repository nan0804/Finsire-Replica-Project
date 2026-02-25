import { Link } from 'react-router-dom';
import Partners from '../components/Partners';
import './Page.css';
import './Careers.css';
export default function Careers() {
  return (
    <div style={{background:'#fff'}}>
      <div className="page-back-bar">
        <Link to="/" className="page-back-link">← Go Back to Website</Link>
      </div>
      <div className="careers-wrapper">
        {}
        <div className="careers-bg-left" />
        <div className="careers-bg-right" />
        <div className="careers-card">
          {}
          <svg className="careers-cup" viewBox="0 0 200 240" fill="none" xmlns="http://www.w3.org/2000/svg">
            {}
            <path d="M35 40 L165 40 L148 220 Q147 228 140 228 L60 228 Q53 228 52 220 Z" fill="#c8f5c0" fillOpacity="0.55" stroke="#4caf50" strokeWidth="3" strokeLinejoin="round"/>
            {}
            <ellipse cx="100" cy="40" rx="65" ry="10" fill="#a5d6a7" stroke="#4caf50" strokeWidth="2.5"/>
            {}
            <ellipse cx="100" cy="38" rx="65" ry="10" fill="#69c86a" fillOpacity="0.8" stroke="#388e3c" strokeWidth="2"/>
            {}
            <ellipse cx="100" cy="35" rx="30" ry="6" fill="#81c784" stroke="#388e3c" strokeWidth="1.5"/>
            {}
            <path d="M52 220 Q53 228 60 228 L140 228 Q147 228 148 220 L145 208 L55 208 Z" fill="#69c86a" fillOpacity="0.9" stroke="#388e3c" strokeWidth="2"/>
            {}
            <path d="M38 90 L162 90" stroke="#4caf50" strokeWidth="1" strokeOpacity="0.4"/>
            <path d="M40 130 L160 130" stroke="#4caf50" strokeWidth="1" strokeOpacity="0.4"/>
            <path d="M43 170 L157 170" stroke="#4caf50" strokeWidth="1" strokeOpacity="0.4"/>
            {}
            <path d="M50 60 Q55 55 60 100 Q58 130 55 160" stroke="white" strokeWidth="4" strokeLinecap="round" strokeOpacity="0.45"/>
          </svg>
          <h1>No current openings,<br/>but we'd love to connect.</h1>
          <p>Follow us for updates and be the first to know<br/>when new opportunities drop!</p>
          <div className="careers-ctas">
            <div className="careers-cta-item">
              <span className="careers-cta-label">Drop your resume at</span>
              <a href="mailto:hr@finsire.com" className="careers-cta-link">
                hr@finsire.com <span className="careers-arrow">↗</span>
              </a>
            </div>
            <div className="careers-cta-divider" />
            <div className="careers-cta-item">
              <span className="careers-cta-label">Follow us on</span>
              <a
                href="https://www.linkedin.com/company/finsire/"
                target="_blank"
                rel="noreferrer"
                className="careers-cta-link"
              >
                LinkedIn <span className="careers-arrow">↗</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Partners />
    </div>
  );
}
