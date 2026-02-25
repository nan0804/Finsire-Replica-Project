import { Routes, Route } from 'react-router-dom';
import './index.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import HowItWorks from './components/HowItWorks';
import WhyPledge from './components/WhyPledge';
import FAQ from './components/FAQ';
import Partners from './components/Partners';
import CTASection from './components/CTASection';
import Distributors from './pages/Distributors';
import Blogs from './pages/Blogs';
import BlogPost from './pages/BlogPost';
import Media from './pages/Media';
import Careers from './pages/Careers';
import AboutUs from './pages/AboutUs';
import BookDemo from './pages/BookDemo';
import GetLoan from './pages/GetLoan';
import Login from './pages/Login';
import Grievance from './pages/Grievance';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';

function Home() {
  return (<><Hero /><Benefits /><HowItWorks /><WhyPledge /><FAQ /><Partners /><CTASection /></>);
}

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/distributors" element={<Distributors />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/press-media" element={<Media />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/book-a-demo" element={<BookDemo />} />
        <Route path="/get-a-loan" element={<GetLoan />} />
        <Route path="/login" element={<Login />} />
        <Route path="/grievance" element={<Grievance />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
      </Routes>
      <Footer />
    </>
  );
}
