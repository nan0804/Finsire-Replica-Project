import { useState } from 'react';
import './FAQ.css';
const faqs = [
  {
    q: 'What exactly is a loan against mutual funds?',
    a: "It's a secured loan where you use your mutual fund units as collateral. You don't sell them as they remain invested, and you keep earning returns while getting instant liquidity.",
  },
  {
    q: 'How much can I borrow?',
    a: "Loan amounts are usually 50%–80% of your mutual fund value, depending on whether it's equity or debt funds. Our eligibility checker will give you an instant figure.",
  },
  {
    q: 'Which mutual funds are eligible?',
    a: 'Most equity and debt mutual funds from major AMCs are accepted. We cover 6,000+ schemes through CAMS and KFintech.',
  },
  {
    q: 'Is my money safe when I pledge?',
    a: 'Yes. Your units stay in your name. They are just lien-marked digitally with the registrar. Once you repay, the lien is removed, and your funds are free again.',
  },
  {
    q: 'How fast will I get the loan?',
    a: 'Approval is instant in most cases, and funds are usually disbursed within a few working hours often on the same day.',
  },
  {
    q: "What's the interest rate?",
    a: 'Our partner lenders offer competitive rates, much lower than personal loans or credit cards. The rate depends on your pledged funds and lender.',
  },
  {
    q: 'How do I repay the loan?',
    a: "Pay interest monthly on the amount you've used. You can repay the principal anytime as there are no prepayment charges.",
  },
  {
    q: 'Will this affect my credit score?',
    a: 'Checking eligibility will not impact your score. If you take a loan, repayment behaviour will be reported to bureaus as with any credit product.',
  },
];
function FAQItem({ q, a, open, toggle }) {
  return (
    <div className={`faq-item ${open ? 'open' : ''}`}>
      <button className="faq-question" onClick={toggle}>
        <span>{q}</span>
        <span className="faq-chevron">{open ? '−' : '+'}</span>
      </button>
      <div className="faq-answer">
        <p>{a}</p>
      </div>
    </div>
  );
}
export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? faqs : faqs.slice(0, 4);
  return (
    <section className="faq-section">
      <div className="container">
        <div className="faq-layout">
          <div className="faq-left">
            <div className="section-label">Frequently Asked Questions</div>
            <h2 className="section-title">We've Got Answers</h2>
            <div className="faq-contact">
              <p className="faq-contact-label">Learn about LAMF</p>
              <p className="faq-contact-sub">Call us for a 5-minute practical introduction</p>
              <a href="tel:+918645627153" className="faq-phone">+91 86456 27153</a>
            </div>
          </div>
          <div className="faq-right">
            {visible.map((f, i) => (
              <FAQItem
                key={i}
                q={f.q}
                a={f.a}
                open={openIdx === i}
                toggle={() => setOpenIdx(openIdx === i ? null : i)}
              />
            ))}
            {!showAll && (
              <button className="faq-view-all" onClick={() => setShowAll(true)}>
                View all
                <img
                  src="https://cdn.prod.website-files.com/6578337118890b80c9df8ea8/68d7fb405f56b3c41f0a2dea_keyboard_arrow_right.svg"
                  alt="→"
                  style={{ width: 20, height: 20 }}
                />
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
