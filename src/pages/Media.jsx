import { Link } from 'react-router-dom';
import Partners from '../components/Partners';
import './Page.css';
import './Media.css';
const BASE = "https://cdn.prod.website-files.com/68d7e7065b4cad954e1c911b/";
const industrystory = [
  { img: BASE+"68d90b4af00831a48d7bfc00_Media%20type%3DMint.png", title: "Are loans against stocks and mutual funds good for investors?", date: "26 January 2023", url: "https://www.livemint.com/money/personal-finance/are-loans-against-stocks-and-mutual-funds-good-for-investors-11674738565114.html" },
  { img: BASE+"68d90b7011793e72dd6fbe2f_Media%20type%3DBT%20Money%20Today.png", title: "Is maintaining a credit score of 750 for home loans, car loans or personal loans enough?", date: "15 June 2023", url: "https://www.businesstoday.in/personal-finance/story/is-maintaining-a-credit-score-of-750-for-home-loans-car-loans-or-personal-loans-enough-385685-2023-06-15" },
  { img: BASE+"68d90b4af00831a48d7bfc00_Media%20type%3DMint.png", title: "Google to impose stricter guidelines for personal loans applications on Play Store effective", date: "06 April 2023", url: "https://www.livemint.com/news/india/google-to-impose-stricter-guidelines-for-personal-loans-for-applications-on-the-play-store-effective-from-may-31/amp-11680781516387.html" },
  { img: BASE+"68d90b9300d99ace1691d040_Media%20type%3DCNBC.png", title: "How to get a loan against mutual funds — interest rate and key details", date: "20 February 2023", url: "https://www.cnbctv18.com/personal-finance/how-to-get-a-loan-against-mutual-funds--interest-rate-and-key-details-15984641.htm" },
  { img: BASE+"68d90b4af00831a48d7bfc00_Media%20type%3DMint.png", title: "Why ONDC can't be a UPI of e-commerce? All you need to know", date: "11 May 2023", url: "https://www.livemint.com/money/personal-finance/why-ondc-can-t-be-a-upi-of-e-commerce-all-you-need-to-know-151684819215965.html" },
];
const interviews = [
  { img: BASE+"68d90bd472bb6e3bc598e521_Media%20type%3DTrak.in.png", title: "This Tech Startup Is Enabling Seamless Collateralisation Of Digital Assets Like MF, Stocks, Salary & More", date: "12 February 2023", url: "https://trak.in/stories/exclusive-interview-this-tech-startup-is-enabling-seamless-collateralisation-of-digital-assets-like-mf-stocks-salary-more/" },
  { img: BASE+"68d90bf0bb02099a1e075a82_Media%20type%3DCXO%20today.png", title: "Fintech startup Finsire disrupting the traditional loan market with its innovative approach", date: "04 March 2023", url: "https://cxotoday.com/interviews/fintech-startup-finsire-disrupting-the-traditional-loan-market-with-its-innovative-approach/" },
  { img: BASE+"68d90c069ff2f38bb37d5212_Media%20type%3DDeezer.png", title: "Unlock Loans Through Digital Assets With Shreyans Nahar of Finsire", date: "20 February 2023", url: "https://www.deezer.com/en/show/59328" },
  { img: BASE+"68d90c1f105b5ac81fc9112e_Media%20type%3DApple%20Podcast.png", title: "Digital Public Infrastructure for Assets — Shreyans Nahar (Apple Podcast)", date: "11 May 2023", url: "https://podcasts.apple.com/in/podcast/digital-public-infrastructure-for-assets-shreyans-nahar/id1509981658?i=1000638177531" },
  { img: BASE+"68d90c2d328a9f4f1ffbb831_Media%20type%3DSpotify.png", title: "Unlock Loans Through Digital Assets (Spotify / Transfin)", date: "11 May 2023", url: "https://transfin.substack.com/p/s6-ep127-unlock-loans-through-digital" },
  { img: BASE+"68d90c3e6e25d06183541e09_Media%20type%3DAudioBoom.png", title: "Unlock Loans Through Digital Assets With Shreyans Nahar of Finsire", date: "20 February 2023", url: "https://audioboom.com/posts/8260837-unlock-loans-through-digital-assets-with-shreyans-nahar-of-finsire" },
  { img: BASE+"68d90c51090cb5cda1d74a28_Media%20type%3DAzure.png", title: "Valuing and collateralizing diverse (YouTube)", date: "28 March 2023", url: "https://www.youtube.com/watch?v=SGOS7daw76I" },
  { img: BASE+"68d90c645c3e63701cd270bc_Media%20type%3DFintech%20Ki%20Baat.png", title: "Credit Card Against Assets — Fintech Ki Baat", date: "11 May 2023", url: "https://creators.spotify.com/pod/profile/shreyas-jani/episodes/Changing-the-way-Bharat-Borrows-Loan-Against-Assets----with-Shreyans-Nahar-Founder---Finsire--Part-1-Founders-Journey-e23rfh0" },
];
const pressrelease = [
  { img: BASE+"68d90c7cc3bb13c9d62fea4b_Media%20type%3DThe%20Hindu.png", title: "Chennai-based fintech startup raises USD 1.3 million in seed funding", date: "16 March 2023", url: "https://www.thehindu.com/news/cities/chennai/chennai-based-fintech-startup-raises-usd-13-million-in-seed-funding/article66623684.ece" },
  { img: BASE+"68d90c8edc2ff6166da28a20_Media%20type%3DTH%20Business%20Line.png", title: "Fintech startup Finsire raises $1.3 million in seed funding", date: "15 March 2023", url: "https://www.thehindubusinessline.com/money-and-banking/fintech-startup-finsire-raises-13-million-in-seed-funding/article66622617.ece" },
  { img: BASE+"68d90ca32051cb9faf2a0bcd_Media%20type%3DEntrackr.png", title: "Fintech startup Finsire bags $1.3 Mn in seed round", date: "15 March 2023", url: "https://entrackr.com/2023/03/fintech-startup-finsire-bags-1-3-mn-in-seed-round/" },
  { img: BASE+"68d90cb3c9aab225f6ece7c9_Media%20type%3DVCCIRCLE.png", title: "Fintech firm Finsire has raised seed funding of $1.3 million (around Rs 10.4 crore) led by DevX Venture fund.", date: "16 March 2023", url: "https://www.vccircle.com/earlystage-startups-aerem-zouk-others-raise-funding" },
  { img: BASE+"68d90bc16c9537fa67a22d1e_Media%20type%3DTOI.png", title: "Fintech startup Finsire raises $1.3 million", date: "16 March 2023", url: "https://timesofindia.indiatimes.com/business/india-business/fintech-startup-finsire-raises-1-3-million/articleshow/98686954.cms?from=mdr" },
  { img: BASE+"68d90cd658f7d78bc3dafe77_Media%20type%3DTech%20Panda.png", title: "Lending infratech and asset collateralization API FinTech company Finsire announced raising $1.3M in seed funding.", date: "28 March 2023", url: "https://thetechpanda.com/funding-alert-tech-startups-that-raked-in-moolah-this-month-4/38399/" },
  { img: BASE+"68d90cea11793e72dd6fe6ce_Media%20type%3DEntrepreneur.png", title: "Fintech Startup Finsire Raises $1.3 Million In Seed Funding", date: "16 March 2023", url: "https://www.entrepreneur.com/en-in/news-and-trends/fintech-startup-finsire-raises-13-million-in-seed-funding/447731" },
  { img: BASE+"68d90d0764c36ce4b5f96f3f_Media%20type%3DStartup%20Lab.png", title: "Fintech Startup Finsire Raises $1.3 Mn In Seed Funding", date: "17 March 2023", url: "https://thestartuplab.in/fintech-startup-finsire-raises-1-3-mn-in-seed-funding/" },
  { img: BASE+"68d90d185155deb2432de8bc_Media%20type%3DStartup%20Story.png", title: "Finsire secures $1.3M in seed funding for fintech Startup", date: "17 March 2023", url: "https://startupstorymedia.com/insights-finsire-secures-1-3m-in-seed-funding-for-fintech-startup/" },
];
function MediaSection({ label, items }) {
  return (
    <div className="media-section">
      <h2 className="media-section-label">{label}</h2>
      <div className="media-grid">
        {items.map((item, i) => (
          <a key={i} href={item.url} target="_blank" rel="noreferrer" className="media-card">
            <img src={item.img} alt={item.title} className="media-card-img" onError={e=>{ e.target.style.display='none'; }} />
            <div className="media-card-body">
              <h3>{item.title}</h3>
              <span className="media-card-date">{item.date}</span>
              <span className="media-read-more">Read more</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
export default function Media() {
  return (
    <div style={{background:'#fff'}}>
      <div className="page-back-bar">
        <Link to="/" className="page-back-link">← Go Back to Website</Link>
      </div>
      <div className="media-hero">
        <div className="media-hero-label">Press & Media</div>
        <h1>industry story</h1>
      </div>
      <div className="media-body">
        <MediaSection label="industry story" items={industrystory} />
        <MediaSection label="Interview" items={interviews} />
        <MediaSection label="press release" items={pressrelease} />
      </div>
      <Partners />
    </div>
  );
}
