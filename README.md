# Finsire Clone — React

A pixel-faithful clone of [finsire.com](https://www.finsire.com) built with React.

## Project Structure

```
finsire-clone/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.jsx / .css        ← Fixed sticky nav with mobile hamburger
│   │   ├── Hero.jsx / .css          ← Hero + auto-scrolling lender carousel
│   │   ├── StatsBar.jsx / .css      ← Green stats strip
│   │   ├── Benefits.jsx / .css      ← Key benefits grid
│   │   ├── HowItWorks.jsx / .css    ← Dark 3-step section
│   │   ├── WhyPledge.jsx / .css     ← Pledge vs sell comparison
│   │   ├── FAQ.jsx / .css           ← Accordion FAQ
│   │   ├── Partners.jsx / .css      ← Auto-scrolling partner logos
│   │   ├── CTASection.jsx / .css    ← Dark CTA section
│   │   └── Footer.jsx / .css        ← Full footer with disclaimer
│   ├── App.js
│   ├── index.js
│   └── index.css                    ← Global CSS variables & reset
├── package.json
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

## Features Implemented

- ✅ Fixed sticky navbar with scroll shadow + mobile hamburger menu
- ✅ Hero section with animated lender card marquee (auto-scrolling, pauses on hover)
- ✅ Stats bar with key metrics
- ✅ Benefits grid with hover animations
- ✅ Dark "How it Works" 3-step section
- ✅ "Why Pledge" comparison cards
- ✅ FAQ accordion (smooth expand/collapse)
- ✅ Partner logo marquee strip
- ✅ Dark gradient CTA section
- ✅ Full footer with 4 columns + legal disclaimer
- ✅ Fully responsive (mobile-friendly)
- ✅ CSS variables for easy theming
- ✅ Google Fonts (Sora + DM Sans)

## Customization

All colors are defined as CSS variables in `src/index.css`:

```css
--green: #1a7a4a        /* Primary brand green */
--green-light: #2ecc71  /* Accent green */
--green-pale: #e8f5ee   /* Light green backgrounds */
--dark: #0d1117         /* Dark sections */
--accent: #f4a012       /* Orange accent */
```
