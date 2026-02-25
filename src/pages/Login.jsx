import { useState } from 'react';
import { Link } from 'react-router-dom';
import './GetLoan.css';
import './Login.css';

export default function Login() {
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const submit = () => {
    if (!phone || !/^[6-9]\d{9}$/.test(phone)) {
      setError('Enter a valid 10-digit phone number');
      return;
    }
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
            <circle cx="50" cy="185" r="4" fill="#4ade80" fillOpacity="0.4"/>
            <circle cx="280" cy="175" r="5" fill="#22d3ee" fillOpacity="0.3"/>
          </svg>
        </div>
        <h1>Unlock Your Mutual<br/>Funds, Without Letting<br/>Them Go.</h1>
        <p>Get a loan in minutes, keep your funds invested,<br/>and watch them grow.</p>
      </div>

      <div className="gl-right">
        {submitted ? (
          <div className="gl-card login-card gl-success-card">
            <div className="gl-success-icon">✅</div>
            <h2>OTP Sent!</h2>
            <p>We've sent a one-time password to <strong style={{color:'#22d3ee'}}>{phone}</strong>. Please check your messages.</p>
            <Link to="/" className="gl-signup-btn" style={{textDecoration:'none', textAlign:'center', display:'block', marginTop:8}}>Back to Home</Link>
          </div>
        ) : (
          <div className="gl-card login-card">
            <h2>Welcome!</h2>
            <p className="gl-subtitle">Keep your investments intact while meeting your financial needs.</p>

            <div className="login-field-wrap">
              <div className="login-float-field">
                <input
                  type="tel"
                  maxLength={10}
                  value={phone}
                  onChange={e => { setPhone(e.target.value); setError(''); }}
                  placeholder="Enter your phone number"
                  className={`gl-input login-input ${error ? 'gl-input-error' : ''}`}
                  id="login-phone"
                />
                <label htmlFor="login-phone" className="login-float-label">Phone Number</label>
              </div>
              {error && <span className="gl-error" style={{marginTop:6, display:'block'}}>{error}</span>}
            </div>

            <div className="login-bottom">
              <button className="gl-signup-btn" onClick={submit}>Login</button>
              <p className="gl-login-row">
                <Link to="/get-a-loan" className="gl-login-link">
                  ← Back to Sign up
                </Link>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
