import { Link } from 'react-router-dom';
import Partners from '../components/Partners';
import './Page.css';
import './Legal.css';
export default function TermsConditions() {
  return (
    <div style={{background:'#fff'}}>
      <div style={{background:'#0a1f2e'}}>
        <div className="legal-hero">
          <h1>Terms & Conditions</h1>
          <p className="legal-updated">Last updated: February 2026</p>
        </div>
      </div>
      <div className="legal-body">
        <div className="legal-toc">
          <div className="legal-toc-title">Contents</div>
          {["Acceptance of Terms","Use of Platform","Eligibility","Services Offered","Loan Against Mutual Funds","User Obligations","Intellectual Property","Disclaimer of Warranties","Limitation of Liability","Indemnification","Privacy Policy","Governing Law","Amendments","Contact Us"].map((s,i)=>(
            <a key={i} href={`#tc-${i+1}`} className="legal-toc-item">{i+1}. {s}</a>
          ))}
        </div>
        <div className="legal-content">
          <section id="tc-1"><h2>1. Acceptance of Terms</h2>
            <p>These Terms and Conditions ("Terms") govern your access to and use of the Finsire Technologies Private Limited ("Finsire", "Company", "We", "Us", "Our") platform, website at www.finsire.com, mobile application, and related services (collectively, the "Platform").</p>
            <p>By accessing or using the Platform, you ("User", "You", "Your") agree to be bound by these Terms. If you do not agree to these Terms, please do not access or use the Platform. We reserve the right to modify these Terms at any time, and such modifications shall be effective immediately upon posting.</p>
          </section>
          <section id="tc-2"><h2>2. Use of Platform</h2>
            <p>The Platform is intended to facilitate Loan Against Mutual Funds (LAMF) and related secured lending services. You agree to use the Platform only for lawful purposes in a manner consistent with all applicable laws and regulations in India.</p>
            <p>You shall not use the Platform to:</p>
            <ul>
              <li>Engage in any fraudulent, deceptive, or misleading activity</li>
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe on the intellectual property rights of Finsire or any third party</li>
              <li>Transmit any harmful, offensive, or disruptive content</li>
              <li>Attempt to gain unauthorized access to any part of the Platform</li>
            </ul>
          </section>
          <section id="tc-3"><h2>3. Eligibility</h2>
            <p>To use our Services, you must:</p>
            <ul>
              <li>Be at least 18 years of age</li>
              <li>Be a resident of India</li>
              <li>Hold mutual fund investments in your name with registered RTAs (CAMS or KFintech)</li>
              <li>Have a valid PAN card and bank account in your name</li>
              <li>Have completed KYC as required by applicable regulations</li>
            </ul>
            <p>Finsire reserves the right to refuse service or terminate accounts at its sole discretion if eligibility requirements are not met.</p>
          </section>
          <section id="tc-4"><h2>4. Services Offered</h2>
            <p>Finsire is a technology platform that facilitates Loan Against Mutual Funds (LAMF) by connecting borrowers with RBI-regulated banks and NBFCs. Finsire acts as a Lending Service Provider (LSP) and does not itself lend money. Our services include:</p>
            <ul>
              <li>Portfolio discovery and eligibility assessment</li>
              <li>Digital lien marking via SEBI-compliant processes through CAMS and KFintech</li>
              <li>Multi-lender loan origination and processing</li>
              <li>Loan management and monitoring</li>
              <li>Pledge and de-pledge processing</li>
            </ul>
          </section>
          <section id="tc-5"><h2>5. Loan Against Mutual Funds</h2>
            <p>All loans facilitated through the Platform are issued by our partner banks and NBFCs, subject to their individual terms and conditions. Key aspects include:</p>
            <ul>
              <li><strong>Loan-to-Value (LTV):</strong> Up to ~50% for equity funds and ~75% for debt funds, as per RBI/SEBI guidelines and lender policies.</li>
              <li><strong>Lien Marking:</strong> Your mutual fund units will be lien-marked in favor of the lender. You cannot redeem or sell those units until the loan is repaid, but you retain ownership and continue to earn returns/dividends.</li>
              <li><strong>Margin Calls:</strong> If the NAV of pledged funds falls significantly, the lender may require additional collateral or partial repayment.</li>
              <li><strong>Repayment:</strong> All repayment terms, interest rates, and charges will be disclosed in the sanction letter.</li>
            </ul>
            <p>Finsire is not responsible for loan decisions made by lending partners. All loans are at the sole discretion of the lending partners. Mutual Fund investments are subject to market risks.</p>
          </section>
          <section id="tc-6"><h2>6. User Obligations</h2>
            <p>As a user of the Platform, you agree to:</p>
            <ul>
              <li>Provide accurate, complete, and up-to-date information</li>
              <li>Maintain the confidentiality of your account credentials</li>
              <li>Notify us immediately of any unauthorized use of your account</li>
              <li>Comply with all applicable laws and regulations</li>
              <li>Borrow responsibly and have a repayment plan in place</li>
              <li>Not misrepresent your identity, financial status, or investment portfolio</li>
            </ul>
          </section>
          <section id="tc-7"><h2>7. Intellectual Property</h2>
            <p>All content on the Platform, including text, graphics, logos, icons, images, software, and overall design, is the property of Finsire Technologies Private Limited and is protected by applicable intellectual property laws.</p>
            <p>You are granted a limited, non-exclusive, non-transferable license to access and use the Platform solely for personal, non-commercial purposes. You may not reproduce, distribute, modify, or create derivative works of any content without our prior written consent.</p>
          </section>
          <section id="tc-8"><h2>8. Disclaimer of Warranties</h2>
            <p>The Platform and Services are provided on an "as is" and "as available" basis without any warranties of any kind, either express or implied. Finsire does not warrant that the Platform will be uninterrupted, error-free, or free of viruses or other harmful components.</p>
            <p>Mutual Fund investments are subject to market risks. The value of pledged funds may fluctuate, and Finsire does not guarantee any specific loan amount or terms.</p>
          </section>
          <section id="tc-9"><h2>9. Limitation of Liability</h2>
            <p>To the fullest extent permitted by applicable law, Finsire shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the Platform or Services, including but not limited to loss of profits, data, or goodwill.</p>
            <p>Finsire's total liability to you for any claims arising from these Terms shall not exceed the amount paid by you for the Services in the preceding three months.</p>
          </section>
          <section id="tc-10"><h2>10. Indemnification</h2>
            <p>You agree to indemnify, defend, and hold harmless Finsire and its officers, directors, employees, agents, and partners from any claims, liabilities, damages, losses, costs, or expenses (including reasonable legal fees) arising from your use of the Platform, violation of these Terms, or infringement of any third-party rights.</p>
          </section>
          <section id="tc-11"><h2>11. Privacy Policy</h2>
            <p>Your use of the Platform is also governed by our <Link to="/privacy-policy">Privacy Policy</Link>, which is incorporated into these Terms by reference. Please review our Privacy Policy to understand our practices regarding the collection, use, and disclosure of your personal data.</p>
          </section>
          <section id="tc-12"><h2>12. Governing Law</h2>
            <p>These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of the courts of Chennai, Tamil Nadu, India.</p>
          </section>
          <section id="tc-13"><h2>13. Amendments</h2>
            <p>Finsire reserves the right to amend these Terms at any time. We will notify you of significant changes by posting the updated Terms on the Platform. Your continued use of the Platform after the effective date constitutes your acceptance of the amended Terms.</p>
          </section>
          <section id="tc-14"><h2>14. Contact Us</h2>
            <div className="legal-contact-box">
              <p><strong>Email:</strong> <a href="mailto:support@finsire.com">support@finsire.com</a></p>
              <p><strong>Phone:</strong> <a href="tel:+918645627153">+91 86456 27153</a></p>
              <p><strong>Address:</strong> #48, 1st Floor, 2nd Street, Balaji Nagar, Royapettah, Chennai, Tamil Nadu - 600 014</p>
            </div>
          </section>
        </div>
      </div>
      <Partners />
    </div>
  );
}
