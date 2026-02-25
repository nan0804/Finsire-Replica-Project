import { Link } from 'react-router-dom';
import { blogs } from './blogData';
import './Page.css';

export default function Blogs() {
  return (
    <div>
      <div className="page-back-bar">
        <Link to="/" className="page-back-link">← Go Back to Website</Link>
      </div>
      <div className="blogs-hero">
        <div className="blogs-label">blogs</div>
        <h1>Fresh Read from Finsire</h1>
        <p>Stay updated with latest features &amp; fintech insights.</p>
      </div>
      <div className="blogs-body">
        <div className="blogs-category-header">
          <span>Lending</span>
        </div>
        <div className="blogs-grid">
          {blogs.map((b, i) => (
            <Link to={`/blog/${b.slug}`} className="blog-card" key={i}>
              <img src={b.img} alt={b.title} className="blog-card-img" />
              <div className="blog-card-body">
                <h3>{b.title}</h3>
                <p>{b.desc}</p>
                <div className="blog-card-meta">
                  <span>{b.date}</span>
                  <span>{b.read}</span>
                  <span className="blog-read-more">Read more</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
