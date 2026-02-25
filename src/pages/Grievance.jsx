import { Link } from 'react-router-dom';
import Partners from '../components/Partners';
import './Page.css';
import './Grievance.css';
const WA = "https://api.whatsapp.com/send/?phone=917358260365&text=Hey%2C+I+have+a+query+regarding+the+loan+process.+Could+you+please+help%3F?+&type=phone_number&app_absent=0";
export default function Grievance() {
  return (
    <div style={{background:'#fff'}}>
      <div className="grv-layout">
        {}
        <div className="grv-left">
          <div className="grv-label">Grievance</div>
          <h1>Finsire Consumer Grievance</h1>
          <div className="grv-connect-box">
            <div className="grv-connect-title">Connect With Us</div>
            <a href={WA} target="_blank" rel="noreferrer" className="grv-wa-btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Let's talk
            </a>
            <p className="grv-reply-note">We usually reply within 5 to 10 minutes.</p>
            <p className="grv-hours">Our team of experts is available Monday to Saturday, 9:30 AM – 6:30 PM.</p>
          </div>
          <div className="grv-officer-box">
            <div className="grv-officer-title">Grievance Officer Detail</div>
            <div className="grv-officer-row"><span>Name</span><span>:</span><span>Unnati Singh</span></div>
            <div className="grv-officer-row"><span>Email ID</span><span>:</span><a href="mailto:grievance.officer@finsire.com?subject=Grievance Officer Detail">grievance.officer@finsire.com</a></div>
            <p className="grv-officer-note">Operational on all days except national holidays (10:00 AM – 6:00 PM)</p>
          </div>
          <div className="grv-links-box">
            <div className="grv-links-title">Links</div>
            <a href="https://cms.rbi.org.in/cms/indexpage.html#eng" target="_blank" rel="noreferrer" className="grv-link-item">
              <span>RBI Complaint Management System</span>
              <img src="https://cdn.prod.website-files.com/6578337118890b80c9df8ea8/68d8f6939ebc84637c2b2007_Icon%20Button.svg" alt="→" className="grv-link-arrow" />
            </a>
            <a href="https://sachet.rbi.org.in/" target="_blank" rel="noreferrer" className="grv-link-item">
              <span>RBI Sachet Portal</span>
              <img src="https://cdn.prod.website-files.com/6578337118890b80c9df8ea8/68d8f6939ebc84637c2b2007_Icon%20Button.svg" alt="→" className="grv-link-arrow" />
            </a>
            <p className="grv-links-note">You can follow these links to get more information</p>
          </div>
        </div>
        {}
        <div className="grv-right">
          <div className="grv-right-inner">
            <div className="grv-stat">
              <div className="grv-stat-num">15</div>
              <div className="grv-stat-label">days resolution<br/>timeframe</div>
            </div>
            <div className="grv-stat">
              <div className="grv-stat-num">5–10</div>
              <div className="grv-stat-label">min reply<br/>on WhatsApp</div>
            </div>
            <div className="grv-stat">
              <div className="grv-stat-num">Mon–Sat</div>
              <div className="grv-stat-label">9:30 AM – 6:30 PM<br/>team availability</div>
            </div>
          </div>
        </div>
      </div>
      <Partners />
    </div>
  );
}
