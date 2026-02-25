# Finsire Clone — React

A pixel-faithful clone of [finsire.com](https://www.finsire.com) built with React.

## Project Structure

```
finsire-clone/
├── public/
│   └── index.html
├── src/
│   ├── App.js                        # Root router — all routes defined here
│   ├── index.js                      # React entry point
│   ├── index.css                     # Global styles, CSS variables, fonts
│   │
│   ├── components/                   # Reusable UI sections (used on Home page)
│   │   ├── Navbar.jsx                # Top navigation bar with all links
│   │   ├── Navbar.css
│   │   ├── Hero.jsx                  # Landing hero with CTA
│   │   ├── Hero.css
│   │   ├── Benefits.jsx              # Key benefits section
│   │   ├── Benefits.css
│   │   ├── HowItWorks.jsx            # Step-by-step process section
│   │   ├── HowItWorks.css
│   │   ├── WhyPledge.jsx             # Why pledge mutual funds section
│   │   ├── WhyPledge.css
│   │   ├── FAQ.jsx                   # Accordion FAQ section
│   │   ├── FAQ.css
│   │   ├── Partners.jsx              # Partner logos strip
│   │   ├── Partners.css
│   │   ├── StatsBar.jsx              # Stats highlight bar
│   │   ├── StatsBar.css
│   │   ├── CTASection.jsx            # Bottom CTA banner
│   │   ├── CTASection.css
│   │   ├── Footer.jsx                # Site-wide footer with all links
│   │   └── Footer.css
│   │
│   └── pages/                        # One file per route/page
│       ├── Page.css                  # Shared styles (back bar, blog grid, hero)
│       ├── Legal.css                 # Shared styles for Privacy & Terms pages
│       │
│       ├── AboutUs.jsx               # /about-us
│       │
│       ├── blogData.js               # Blog post data + full article content (all 9 posts)
│       ├── Blogs.jsx                 # /blogs — blog listing grid
│       ├── BlogPost.jsx              # /blog/:slug — individual blog post page
│       ├── BlogPost.css
│       │
│       ├── BookDemo.jsx              # /book-a-demo — two-column demo request form
│       ├── BookDemo.css
│       │
│       ├── Careers.jsx               # /careers — no openings page with SVG illustration
│       ├── Careers.css
│       │
│       ├── Distributors.jsx          # /distributors — B2B platform landing page
│       ├── Distributors.css
│       │
│       ├── GetLoan.jsx               # /get-a-loan — sign up with phone + PAN
│       ├── GetLoan.css               # Shared styles for GetLoan and Login pages
│       │
│       ├── Login.jsx                 # /login — phone number login
│       ├── Login.css
│       │
│       ├── Grievance.jsx             # /grievance — WhatsApp + officer details
│       ├── Grievance.css
│       │
│       ├── Media.jsx                 # /press-media — press coverage listing
│       ├── Media.css
│       │
│       ├── PrivacyPolicy.jsx         # /privacy-policy — 22-section legal doc with TOC
│       ├── TermsConditions.jsx       # /terms-conditions — 14-section legal doc with TOC
│       └── Legal.css                 # Shared TOC sidebar styles for legal pages
│
└── package.json
└── README.md
```

## Getting Started

### Prerequisites
- Node.js 16+ installed
- npm or yarn

### Installation

```bash
# 1. Navigate into the folder
cd finsire-clone

# 2. Install dependencies
npm install

# 3. Start the dev server
npm start
```

The app will open at **http://localhost:3000**

### Build for Production

```bash
npm run build
```


