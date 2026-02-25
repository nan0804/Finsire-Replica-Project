import { Link } from 'react-router-dom';
import Partners from '../components/Partners';
import './Page.css';
import './Legal.css';
export default function PrivacyPolicy() {
  return (
    <div style={{background:'#fff'}}>
      <div style={{background:'#0a1f2e'}}>
        <div className="legal-hero">
          <h1>Privacy Policy</h1>
          <p className="legal-updated">Last update on: 16 February 2026</p>
        </div>
      </div>
      <div className="legal-body">
        <div className="legal-toc">
          <div className="legal-toc-title">Contents</div>
          {["Introduction","Data We Collect","How We Collect Data","How We Use Data","How We Store Data","How We Share Data","Data Retention","Data Destruction","Data Breach Notification","Third Party Redirection","Access & Updating Data","Delete Your Data","Data Security","Cookies","Your Consent","Changes to Policy","Governing Law","Grievance Redressal","Lending Partners","Customer Support – BFL","Query Resolution Policy","Disclosure – BFL"].map((s,i)=>(
            <a key={i} href={`#pp-${i+1}`} className="legal-toc-item">{i+1}. {s}</a>
          ))}
        </div>
        <div className="legal-content">
          <section id="pp-1"><h2>1. Introduction</h2>
            <p>This is the Privacy Policy ("Policy") of FINSIRE TECHNOLOGIES PRIVATE LIMITED, incorporated under the Companies Act 2013 with its registered office at 48, First Floor, 2nd Street, Balaji Nagar, Royapettah, Chennai, 600014 ("Company"). The Policy has been drafted in accordance with the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011, and The Digital Personal Data Protection Act, 2023.</p>
            <p>Finsire Technologies Private Limited, referred to as "Company", "We", "Us" or "Our", owns and operates the website www.finsire.com and/or the mobile application and SDKs, 'Finsire' (the "Platform").</p>
            <p>"You" and "Your" shall mean anyone who visits, accesses, or uses our Platform or obtains Services from Us through our Platform.</p>
            <p>We are committed to protecting Your privacy and the information that You share while using the Platform. This Privacy Policy specifies the manner in which personal data and other information are collected, received, stored, processed, disclosed, transferred, dealt with or otherwise handled by the Company.</p>
            <p>Please read the Privacy Policy carefully prior to using or registering on the Platform. By visiting the Platform, You accept and agree to be bound by the terms and conditions of this privacy policy.</p>
          </section>
          <section id="pp-2"><h2>2. Data We Collect About You</h2>
            <p>We collect, transmit, and store personal data about you on our secured servers after obtaining your consent. The information collected includes:</p>
            <ul>
              <li><strong>Identity and profile-related data:</strong> Name, date of birth, gender, purpose of loan, address, employment status, company name, contact information, and marital status.</li>
              <li><strong>Financial identifiers:</strong> PAN details, bank account details (account number & IFSC), email address.</li>
              <li><strong>Financial savings data:</strong> Investments in financial assets — shares, mutual funds, bonds, insurance.</li>
              <li><strong>Financial data:</strong> Past credit history, income details, loan history, bank account statements.</li>
              <li><strong>Device data:</strong> IP addresses, browser types and versions, cookies, time zone settings, operating systems, and device information.</li>
              <li><strong>App data:</strong> Installed application information (package names) to assess creditworthiness and provide customized loan offers.</li>
              <li><strong>Transaction data:</strong> Details of transactions occurring through the Platform or in connection with the Services.</li>
            </ul>
          </section>
          <section id="pp-3"><h2>3. How We Collect Data About You</h2>
            <p>We use different methods to collect and process personal data about you:</p>
            <ul>
              <li><strong>Information you provide us:</strong> When you use our Services, register on the Platform, or correspond with us.</li>
              <li><strong>Information collected automatically:</strong> Each time you visit the Platform, we automatically collect personal data through tools like cookies.</li>
              <li><strong>Information from third parties:</strong> Including Mutual Funds RTAs, Demat Depositories, credit information bureaus, business partners, and technical sub-contractors.</li>
            </ul>
            <p>Our current partners for customer acquisition include One Mobikwik Systems Limited and Aditya Birla Capital Digital Limited.</p>
          </section>
          <section id="pp-4"><h2>4. How We Use Your Personal Data and For What Purposes</h2>
            <p>We use your personal data for the following purposes:</p>
            <ul>
              <li>To register you as a user of the Platform</li>
              <li>To provide you with the Services</li>
              <li>To facilitate your application to avail a loan from our regulated lending partners</li>
              <li>To manage our relationship with you, including notifying you of changes to any Services</li>
              <li>To administer and protect our business and the Platform</li>
              <li>To send you communication, including through WhatsApp business messages</li>
              <li>To monitor trends so we can improve the Platform and Services</li>
              <li>To enforce our Terms and respond to legal requirements</li>
              <li>To ensure compliance with applicable laws</li>
            </ul>
          </section>
          <section id="pp-5"><h2>5. How We Store and Retain Data About You</h2>
            <p>We shall retain/store user's information in India as long as it is required to provide services or for business purposes, in accordance with applicable law and regulatory requirements.</p>
            <ul>
              <li>All necessary records of transactions — <strong>8 years</strong> from the date of transaction.</li>
              <li>Information may be retained longer in case of investigations under law or to enhance our products/services.</li>
            </ul>
            <p>We ensure that access to user data is restricted using access controls and industry-standard encryption algorithms, with a robust incident management system in place.</p>
          </section>
          <section id="pp-6"><h2>6. How We Share Your Personal Data</h2>
            <p>We share your personal data strictly on a need-to-know basis. No personal data is shared with any third party outside those listed below.</p>
            <div className="legal-table-wrap">
              <table className="legal-table">
                <thead><tr><th>Third Party Name</th><th>Data Shared</th><th>Purpose of Sharing</th></tr></thead>
                <tbody>
                  {[["Bajaj Finance Limited","Customer and service related information","Lending partner"],["Suryoday Small Finance Bank","Customer and service related information","Lending partner"],["City Union Bank","Data stored on Lender's systems as per their internal policies","Providing infra and services"],["Aditya Birla Capital Digital","As per Lender's policies","Referral partner – customer acquisition"],["One Mobikwik Systems Limited","As per Lender's policies","Referral partner – customer acquisition"],["Justkare Technologies Pvt Ltd","As per Lender's policies","Referral partner – customer acquisition"],["Sumanju Technologies Pvt Ltd","Service-related information","Technology Service Provider – contracted infra support"],["RTAs (CAMS, KFintech)","Regulatory information","MF portfolio retrieval for loan eligibility"],["MF Central","Regulatory information","Consolidated MF portfolio verification"],["CERSAI (CKYC)","Regulatory information","KYC validation and compliance"],["NSDL","Regulatory information","PAN verification"],["UIDAI / Digilocker","Regulatory information","Aadhaar-based KYC verification"],["Digio","Service-related information","KYC validation and compliance"],["AWS (Amazon Web Services India)","Encrypted technical/hosting data","Cloud hosting and secure storage"],["Alohaa","Phone number","Communication services – SMS/notifications"],["Finvu","Service-related information","Non-lending infra product support"],["Perfios","Service-related information","Non-lending infra product support"]].map(([a,b,c],i)=>(
                    <tr key={i}><td>{a}</td><td>{b}</td><td>{c}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
          <section id="pp-7"><h2>7. Data Retention</h2>
            <ul>
              <li>Records relating to completed or active loans — retained for <strong>8 years</strong> from the date of the transaction.</li>
              <li>Incomplete loan applications — deleted within <strong>2 years</strong> of inactivity.</li>
              <li>Deletion requests — processed within a maximum of <strong>7 days</strong> of receiving the request, unless retention is required for legal/regulatory obligations.</li>
            </ul>
          </section>
          <section id="pp-8"><h2>8. Data Destruction Protocol</h2>
            <p>All personal data shall be destroyed or rendered irretrievable once the applicable retention period expires. Data destruction is performed in accordance with <strong>NIST Special Publication 800-88</strong> (Guidelines for Media Sanitization), ensuring data is permanently erased and prevents recovery or unauthorized access.</p>
          </section>
          <section id="pp-9"><h2>9. Data Breach Notification</h2>
            <p>In the event of a data breach, we are committed to notifying affected individuals within <strong>120 hours</strong> of becoming aware of the incident, via email or other direct communication. Contact us at <a href="mailto:support@finsire.com">support@finsire.com</a> for any concerns.</p>
          </section>
          <section id="pp-10"><h2>10. Privacy Policy (Third Party Redirection)</h2>
            <p>When applying for a loan through Finsire's platform — whether directly or through a third-party platform — the data we collect and how it is used is governed by this Privacy Policy. By continuing with your application, you consent to the use of your data as outlined in this Policy.</p>
          </section>
          <section id="pp-11"><h2>11. Access and Updating Your Personal Data</h2>
            <p>You are responsible for ensuring that all personal data provided by you is accurate and up-to-date. You may edit, modify, or request deletion/withdrawal of your personal data at any time by writing to <a href="mailto:support@finsire.com">support@finsire.com</a> from your registered email ID or phone number.</p>
          </section>
          <section id="pp-12"><h2>12. Delete Your Personal Data</h2>
            <p>To withdraw consent, restrict sharing, or delete your data, write to <a href="mailto:support@finsire.com">support@finsire.com</a> specifying one of the following:</p>
            <ul>
              <li>Withdraw consent for a specific purpose</li>
              <li>Stop sharing my data with third parties</li>
              <li>Delete / forget my account & data</li>
              <li>Other (please specify)</li>
            </ul>
            <p>We'll confirm your identity, process the request within T+7 days, and reply with a completion certificate. For any questions, call <a href="tel:+918468069001">+91 8468069001</a> (9 am–6 pm, Mon–Fri).</p>
          </section>
          <section id="pp-13"><h2>13. Data Security</h2>
            <p>Our Platform has reasonable security measures and safeguards in place to protect Your Personal Information from loss, misuse, unauthorized access, disclosure, destruction, and alteration. We use the latest secure server layer encryption and access controls on our systems. Please do not share your Account login, password, and OTP details with anybody.</p>
          </section>
          <section id="pp-14"><h2>14. Cookies</h2>
            <p>Cookies are small data files stored on your device. We use cookies and other tracking technologies to distinguish you from other users and remember your preferences. You are always free to decline our cookies if your browser permits, although this may limit certain features of the Platform.</p>
          </section>
          <section id="pp-15"><h2>15. Your Consent to Privacy Policy</h2>
            <p>By visiting the Platform or creating an account, You signify Your acceptance of the provisions of this Privacy Policy. You may withdraw Your consent at any time by writing to <a href="mailto:support@finsire.com">support@finsire.com</a>.</p>
          </section>
          <section id="pp-16"><h2>16. Changes to Privacy Policy</h2>
            <p>We reserve the right to change, modify, add, or remove portions of this Privacy Policy at any time. Any changes will be effective immediately. Your continued usage of the Platform shall signify Your consent to such changes.</p>
          </section>
          <section id="pp-17"><h2>17. Governing Law & Jurisdiction</h2>
            <p>This policy will be governed by and construed in accordance with the laws of India and subjected to the exclusive jurisdiction of Courts of Chennai.</p>
          </section>
          <section id="pp-18"><h2>18. Grievance Redressal Mechanism</h2>
            <p>You can contact the Grievance Redressal Officer (GRO) of the Company:</p>
            <div className="legal-contact-box">
              <p><strong>Name:</strong> Unnati Singh</p>
              <p><strong>Email:</strong> <a href="mailto:grievance.officer@finsire.com">grievance.officer@finsire.com</a></p>
              <p><strong>Resolution Time Frame:</strong> 15 days</p>
              <p><strong>Phone Number:</strong> +91 8468069001</p>
              <p><strong>Available:</strong> All days except national holidays (10:00 AM – 6:00 PM)</p>
            </div>
            <p style={{marginTop:16}}>Grievance Redressal Officer – Bajaj Finance Limited:</p>
            <div className="legal-contact-box">
              <p><strong>Name:</strong> Ganesh Iyer</p>
              <p><strong>Phone:</strong> +91 22 41803901</p>
              <p><strong>Email:</strong> <a href="mailto:grievanceredressalteam@bajajfinserv.in">grievanceredressalteam@bajajfinserv.in</a></p>
            </div>
            <p style={{marginTop:16}}>If a complaint is not resolved within 30 days, borrowers can lodge a complaint on the <a href="https://cms.rbi.org.in/cms/indexpage.html#eng" target="_blank" rel="noreferrer">RBI Complaint Management System (CMS)</a> portal.</p>
          </section>
          <section id="pp-19"><h2>19. List of the Lending Partners</h2>
            <ul>
              <li><a href="https://www.bajajfinserv.in/" target="_blank" rel="noreferrer">Bajaj Finance Limited</a> — <a href="https://www.bajajfinserv.in/privacy-policy" target="_blank" rel="noreferrer">Privacy Policy</a> | <a href="https://www.bajajfinserv.in/grievance-redressal" target="_blank" rel="noreferrer">Grievance Redressal Policy</a></li>
              <li><a href="https://sachet.rbi.org.in/" target="_blank" rel="noreferrer">Sachet Portal</a></li>
              <li><a href="https://cms.rbi.org.in/cms/indexpage.html#eng" target="_blank" rel="noreferrer">RBI CMS</a></li>
            </ul>
          </section>
          <section id="pp-20"><h2>20. Customer Support For Bajaj Finance Limited</h2>
            <div className="legal-contact-box">
              <p><strong>Toll-Free Number:</strong> 1800 2100 270</p>
              <p><strong>Email ID:</strong> <a href="mailto:wecare@bajajfinserv.in">wecare@bajajfinserv.in</a></p>
              <p><strong>Phone Number:</strong> +91 22 41803901</p>
            </div>
          </section>
          <section id="pp-21"><h2>21. Finsire's Policy for Customer Support Query Resolution</h2>
            <p>All queries/complaints to be raised at <a href="mailto:support@finsire.com">support@finsire.com</a>. Aiming to address and resolve issues within 48–72 hours.</p>
            <ul>
              <li><strong>Level 1 (L1) – Basic Support:</strong> Response Time: 24–48 hours.</li>
              <li><strong>Level 2 (L2) – Technical & Advanced Support:</strong> Response Time: 48–72 hours.</li>
            </ul>
          </section>
          <section id="pp-22"><h2>22. Disclosure: Lending Partnership with Bajaj Finance Limited</h2>
            <div className="legal-contact-box">
              <p><strong>Name of the Lender:</strong> Bajaj Finance Limited</p>
              <p><strong>Loan Product Sourced:</strong> Loan against Mutual Funds</p>
              <p><strong>Relation:</strong> Finsire Technologies Pvt Ltd is the Lending Service Provider (LSP) of Bajaj Finance Limited</p>
              <p><strong>Link:</strong> <a href="https://www.bajajfinserv.in/bajaj-finserv-partners" target="_blank" rel="noreferrer">bajajfinserv.in/bajaj-finserv-partners</a></p>
            </div>
          </section>
        </div>
      </div>
      <Partners />
    </div>
  );
}
