import { useState } from 'react';
import { Link } from 'react-router-dom';
import './GetLoan.css';

export default function GetLoan() {
  const [form, setForm] = useState({ phone: '', pan: '', agreed: false });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handle = e => {
    const { name, value, type, checked } = e.target;
    setForm(f => ({ ...f, [name]: type === 'checkbox' ? checked : value }));
    setErrors(er => ({ ...er, [name]: '' }));
  };

  const validate = () => {
    const e = {};
    if (!form.phone || !/^[6-9]\d{9}$/.test(form.phone)) e.phone = 'Enter a valid 10-digit phone number';
    if (!form.pan || !/^[A-Z]{5}[0-9]{4}[A-Z]$/.test(form.pan.toUpperCase())) e.pan = 'Enter a valid PAN (e.g. ABCDE1234F)';
    if (!form.agreed) e.agreed = 'Please accept the terms to continue';
    return e;
  };

  const submit = e => {
    e.preventDefault();
    const e2 = validate();
    if (Object.keys(e2).length) { setErrors(e2); return; }
    setSubmitted(true);
  };

  return (
    <div className="gl-page">
      <div className="gl-left">
        <Link to="/" className="gl-back">← Back to Website</Link>
        <div className="gl-illustration">
          <svg viewBox="0 0 340 260" fill="none" xmlns="http://www.w3.org/2000/svg" className="gl-svg">
            <rect x="30" y="20" width="100" height="130" rx="8" fill="#1e3a4a" stroke="#2d5a6e" strokeWidth="2"/>
            <rect x="44" y="36" width="72" height="8" rx="3" fill="#0d9488"/>
            <rect x="44" y="52" width="55" height="6" rx="3" fill="#1e4a5a"/>
            <rect x="44" y="80" width="12" height="40" rx="3" fill="#4ade80"/>
            <rect x="62" y="95" width="12" height="25" rx="3" fill="#22d3ee"/>
            <rect x="80" y="70" width="12" height="50" rx="3" fill="#4ade80"/>
            <rect x="98" y="85" width="12" height="35" rx="3" fill="#22d3ee"/>
            <rect x="22" y="10" width="14" height="18" rx="2" fill="#2d5a6e"/>
            <rect x="25" y="6" width="8" height="8" rx="1" fill="#1a3a4a"/>
            <ellipse cx="175" cy="95" rx="28" ry="35" fill="#1e3a4a" stroke="#2d5a6e" strokeWidth="2"/>
            <ellipse cx="175" cy="95" rx="18" ry="22" fill="#0d4a5a"/>
            <path d="M163 88 L175 76 L187 88" stroke="#4ade80" strokeWidth="2.5" strokeLinecap="round"/>
            <rect x="171" y="76" width="8" height="32" rx="2" fill="#4ade80"/>
            <ellipse cx="175" cy="110" rx="10" ry="6" fill="#0d9488"/>
            <rect x="220" y="30" width="95" height="110" rx="8" fill="#1e3a4a" stroke="#2d5a6e" strokeWidth="2"/>
            <rect x="235" y="50" width="16" height="70" rx="3" fill="#2d5a6e"/>
            <rect x="256" y="50" width="16" height="70" rx="3" fill="#2d5a6e"/>
            <rect x="277" y="50" width="16" height="70" rx="3" fill="#2d5a6e"/>
            <rect x="228" y="120" width="72" height="8" rx="3" fill="#0d4a5a"/>
            <ellipse cx="267" cy="22" rx="20" ry="8" fill="#1e3a4a" stroke="#2d5a6e" strokeWidth="2"/>
            <rect x="80" y="185" width="120" height="18" rx="5" fill="#4ade80" fillOpacity="0.9"/>
            <rect x="90" y="203" width="100" height="12" rx="4" fill="#22c55e" fillOpacity="0.7"/>
            <rect x="100" y="215" width="80" height="8" rx="3" fill="#16a34a" fillOpacity="0.5"/>
            <ellipse cx="85" cy="197" rx="14" ry="14" fill="#4ade80" fillOpacity="0.2"/>
            <ellipse cx="195" cy="200" rx="10" ry="10" fill="#22d3ee" fillOpacity="0.2"/>
            <circle cx="50" cy="185" r="4" fill="#4ade80" fillOpacity="0.4"/>
            <circle cx="280" cy="175" r="5" fill="#22d3ee" fillOpacity="0.3"/>
            <circle cx="30" cy="165" r="3" fill="#4ade80" fillOpacity="0.3"/>
          </svg>
        </div>
        <h1>Unlock Your Mutual<br/>Funds, Without Letting<br/>Them Go.</h1>
        <p>Get a loan in minutes, keep your funds invested,<br/>and watch them grow.</p>
      </div>

      <div className="gl-right">
        {submitted ? (
          <div className="gl-card gl-success-card">
            <div className="gl-success-icon">🎉</div>
            <h2>You're on your way!</h2>
            <p>We've received your details. Our team will reach out shortly to help you unlock your loan.</p>
            <Link to="/" className="gl-signup-btn" style={{textDecoration:'none', textAlign:'center', display:'block', marginTop:8}}>Back to Home</Link>
          </div>
        ) : (
          <div className="gl-card">
            <h2>Welcome!</h2>
            <p className="gl-subtitle">Keep your investments intact while meeting your financial needs.</p>

            <div className="gl-fields">
              <div className="gl-field">
                <label>Phone Number</label>
                <input
                  name="phone"
                  type="tel"
                  maxLength={10}
                  value={form.phone}
                  onChange={handle}
                  placeholder="Enter your phone number"
                  className={errors.phone ? 'gl-input gl-input-error' : 'gl-input'}
                />
                {errors.phone && <span className="gl-error">{errors.phone}</span>}
              </div>
              <div className="gl-field">
                <label>PAN Number</label>
                <input
                  name="pan"
                  type="text"
                  maxLength={10}
                  value={form.pan}
                  onChange={e => handle({ target: { name: 'pan', value: e.target.value.toUpperCase() } })}
                  placeholder="Enter your PAN number"
                  className={errors.pan ? 'gl-input gl-input-error' : 'gl-input'}
                />
                {errors.pan && <span className="gl-error">{errors.pan}</span>}
              </div>
            </div>

            <div className="gl-consent-area">
              <div className={`gl-consent-row ${errors.agreed ? 'gl-consent-error' : ''}`}>
                <div
                  className={`gl-checkbox ${form.agreed ? 'gl-checkbox-checked' : ''}`}
                  onClick={() => { setForm(f => ({ ...f, agreed: !f.agreed })); setErrors(er => ({ ...er, agreed: '' })); }}
                >
                  {form.agreed && <svg viewBox="0 0 12 10" fill="none"><path d="M1 5l3.5 3.5L11 1" stroke="#0d0d0d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>}
                </div>
                <p>
                  By continuing, you agree to Finsire collecting your PAN and phone number to access your mutual fund holdings for assessing your loan eligibility, in accordance with Finsire's{' '}
                  <Link to="/terms-conditions" className="gl-link">Terms &amp; Conditions</Link>{' '}and{' '}
                  <Link to="/privacy-policy" className="gl-link">Privacy Policy.</Link>
                </p>
              </div>
              {errors.agreed && <span className="gl-error">{errors.agreed}</span>}

              <button className="gl-signup-btn" onClick={submit}>Sign Up</button>
              <p className="gl-login-row">
                Are you already registered?{' '}
                <Link to="/login" className="gl-login-link">Log in</Link>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
