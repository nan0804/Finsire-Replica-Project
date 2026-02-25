import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <Link to="/" className="navbar-logo">
        <img
          src="https://cdn.prod.website-files.com/6578337118890b80c9df8ea8/68d6dc54f8aa4e9c0238a127_logo-white.svg"
          alt="Finsire"
        />
      </Link>
      <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
        <li><Link to="/distributors">Distributors</Link></li>
        <li><Link to="/blogs">Blogs</Link></li>
        <li><Link to="/press-media">Media</Link></li>
        <li><Link to="/careers">Careers</Link></li>
        <li><Link to="/about-us">About us</Link></li>
      </ul>
      <div className="navbar-actions">
        <Link to="/book-a-demo" className="btn btn-outline">Book a Demo</Link>
        <Link to="/get-a-loan" className="btn btn-primary">Get a Loan</Link>
      </div>
      <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span><span></span><span></span>
      </button>
    </nav>
  );
}
