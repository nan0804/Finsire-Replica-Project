import { useParams, Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { blogs } from './blogData';
import './BlogPost.css';

export default function BlogPost() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const post = blogs.find(b => b.slug === slug);

  useEffect(() => { window.scrollTo(0, 0); }, [slug]);

  if (!post) {
    return (
      <div className="bp-notfound">
        <h2>Post not found</h2>
        <Link to="/blogs">← Back to Blogs</Link>
      </div>
    );
  }

  const others = blogs.filter(b => b.slug !== slug).slice(0, 3);

  return (
    <div className="bp-page">
      <div className="bp-topbar">
        <Link to="/" className="bp-logo">
          <svg width="22" height="22" viewBox="0 0 32 32" fill="none"><path d="M4 8h10l4 4-4 4H4V8z" fill="#1b7a8c"/><path d="M14 16h14v8H14z" fill="#0d3d4f"/></svg>
          <span>FINSIRE</span>
        </Link>
        <Link to="/blogs" className="bp-blogs-link">BLOGS</Link>
      </div>

      <div className="bp-hero-img">
        <img src={post.img} alt={post.title} />
      </div>

      <div className="bp-content-wrap">
        <h1 className="bp-title">{post.title}</h1>
        <div className="bp-meta">
          <span>{post.date}</span>
          <span className="bp-meta-divider">|</span>
          <span>{post.read}</span>
        </div>

        <article className="bp-article">
          {post.content.map((block, i) => {
            if (block.type === 'h2') return <h2 key={i}>{block.text}</h2>;
            if (block.type === 'h3') return <h3 key={i}>{block.text}</h3>;
            return <p key={i}>{block.text}</p>;
          })}
        </article>

        <div className="bp-cta-box">
          <p>Ready to unlock the value of your mutual fund portfolio?</p>
          <Link to="/get-a-loan" className="bp-cta-btn">Check My Eligibility →</Link>
        </div>
      </div>

      {others.length > 0 && (
        <div className="bp-related">
          <div className="bp-related-inner">
            <h3>More from Finsire</h3>
            <div className="bp-related-grid">
              {others.map((b, i) => (
                <Link to={`/blog/${b.slug}`} className="bp-related-card" key={i}>
                  <img src={b.img} alt={b.title} />
                  <div className="bp-related-body">
                    <p className="bp-related-title">{b.title}</p>
                    <div className="bp-related-meta">
                      <span>{b.date}</span>
                      <span>{b.read}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
