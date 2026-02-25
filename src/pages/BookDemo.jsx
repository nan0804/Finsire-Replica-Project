import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Page.css';
import './BookDemo.css';
const BASE = "https://cdn.prod.website-files.com/6578337118890b80c9df8ea8/";
const partnerLogos = [
  { name: 'Lark',            img: BASE+'68d7bb4d1bee4131dc709a0a_Trancxn.png' },
  { name: 'Spark Capital',   img: BASE+'693bf9d7672500f15bde5edb_Spark%20Capital.png' },
  { name: 'Suryoday S...',   img: BASE+'693bf9d796947461acd8e9ec_iSeed.png' },
  { name: 'Bajaj Financ...', img: BASE+'68d7bb4d105b5ac81fa85b3f_Groww.png' },
  { name: 'Aditya Birla ...',img: BASE+'693bf9d760d35ff50674c7a5_1947%20Rise.png' },
  { name: 'PhonePe',         img: BASE+'68d7bb4d7762a2cd49ecef66_Google%20Pay.png' },
  { name: 'Karur Vysya',     img: BASE+'693bf9d7a31b3711de03314e_digio.png' },
  { name: 'Mobikwik',        img: BASE+'68d7bb4d33d399ab1f609738_ippopay.png' },
];
export default function BookDemo() {
  const [form, setForm] = useState({ firstName: '', company: '', email: '', phone: '' });
  const [submitted, setSubmitted] = useState(false);
  const handle = e => setForm({ ...form, [e.target.name]: e.target.value });
  const submit = e => { e.preventDefault(); setSubmitted(true); };
  return (
    <div className="demo-page">
      {}
      <div className="demo-left">
        <Link to="/" className="demo-back-link">← Go Back to Website</Link>
        <h1>Book a Demo<br/>Call with us</h1>
        <p>Partner with Finsire to experience industry leading digital infrastructure for assets. Simply fill out the form and tell us about your vision and requirements.</p>
        {}
        <div className="demo-logos-wrap">
          <div className="demo-logos-track">
            {[...partnerLogos, ...partnerLogos].map((p, i) => (
              <div className="demo-logo-item" key={i}>
                <div className="demo-logo-circle">
                  <img src={p.img} alt={p.name} />
                </div>
                <span>{p.name}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="demo-alt-contact">
          <p>Don't like filling forms? Alternate ways to contact us.</p>
          <div className="demo-contact-row">
            <a href="mailto:support@finsire.com" className="demo-contact-item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 7 10-7"/></svg>
              CONTACT US: SUPPORT@FINSIRE.COM
            </a>
            <a href="tel:+917358260365" className="demo-contact-item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.18 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6 6l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              PHONE: +91 73582 60365
            </a>
          </div>
        </div>
      </div>
      {}
      <div className="demo-right">
        {submitted ? (
          <div className="demo-success">
            <div className="demo-success-icon">✅</div>
            <h3>Request Submitted!</h3>
            <p>Thanks <strong>{form.firstName}</strong>! We will try to contact you as soon as possible at <strong>{form.email}</strong>.</p>
            <Link to="/" className="btn btn-primary" style={{marginTop:28}}>Back to Home</Link>
          </div>
        ) : (
          <>
            <p className="demo-form-subtitle">We will try to contact you as soon as possible!</p>
            <form className="demo-form" onSubmit={submit}>
              <div className="demo-field">
                <label>First Name*</label>
                <input name="firstName" value={form.firstName} onChange={handle} placeholder="Enter Your First Name" required />
              </div>
              <div className="demo-field">
                <label>Company Name*</label>
                <input name="company" value={form.company} onChange={handle} placeholder="Enter Your Company Name" required />
              </div>
              <div className="demo-field">
                <label>Email ID*</label>
                <input name="email" type="email" value={form.email} onChange={handle} placeholder="Enter Your Email Address" required />
              </div>
              <div className="demo-field">
                <label>Phone Number</label>
                <input name="phone" type="tel" value={form.phone} onChange={handle} placeholder="Enter Your Phone Number" />
              </div>
              <button type="submit" className="demo-submit-btn">Request Access</button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
