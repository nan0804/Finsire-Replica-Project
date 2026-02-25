import './StatsBar.css';
const stats = [
  { num: '6,000+', label: 'MF Schemes Covered' },
  { num: '80%', label: 'Max Loan-to-Value' },
  { num: '5 min', label: 'Avg. Disbursal Time' },
  { num: '100%', label: 'Digital Process' },
  { num: '₹0', label: 'Prepayment Charges' },
];
export default function StatsBar() {
  return (
    <div className="stats-bar">
      <div className="stats-inner">
        {stats.map((s, i) => (
          <div className="stat" key={i}>
            <div className="stat-num">{s.num}</div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
