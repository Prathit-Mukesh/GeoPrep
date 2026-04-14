# UPSC GeoPrep — Geography & Mapping Tool 🗺️

> Interactive geography preparation tool for UPSC CSE aspirants. 100+ pre-loaded locations, 30 years of PYQ mapping, built-in quizzes, and revision tools.

## Features

- **India & World Maps** — Interactive Leaflet maps with zoom to city level
- **100+ Pre-loaded Locations** — Cities, rivers, mountains, passes, straits, lakes, islands, deserts, plateaus
- **30 Years of PYQ Locations** — Previous year question locations marked with UPSC relevance notes
- **18 UPSC-Pattern Quiz Questions** — Statement-based, trap-heavy, with detailed explanations
- **Custom Places** — Click map to add your own locations with notes
- **Revision Notes** — Built-in notepad for quick revision
- **Search** — Search across all markers by name or content
- **Category Filters** — Toggle marker types on/off
- **Export/Import** — Download your custom data as JSON, import on any device
- **Guest Mode** — No login needed, all data in localStorage
- **Dark Theme** — Easy on eyes for late-night study sessions

## Quick Start

### Option 1: Standalone HTML (No build needed)
Just open `public/standalone.html` in your browser. Everything works — no server needed.

### Option 2: Development Server

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Open http://localhost:5173
```

### Option 3: Production Build

```bash
npm run build
# Output in dist/ folder
```

## Deploy to Vercel (Recommended)

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → "Add New Project"
3. Import your GitHub repo
4. Vercel auto-detects Vite → Click "Deploy"
5. Done! Your site is live.

**Or use Vercel CLI:**
```bash
npm i -g vercel
vercel
```

## Deploy to GitHub Pages

1. Update `vite.config.js` — uncomment the `base` line and set your repo name:
   ```js
   base: '/your-repo-name/',
   ```

2. Deploy:
   ```bash
   npm run deploy
   ```

3. In GitHub repo → Settings → Pages → Source: "Deploy from a branch" → Branch: `gh-pages`

## Deploy to Netlify

1. Push to GitHub
2. Go to [netlify.com](https://netlify.com) → "Add new site" → "Import from Git"
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Deploy!

## Data Coverage

### India (60+ locations)
- 20 major cities with governance/economic significance
- 12 rivers with tributaries, dams, and water disputes
- 8 mountain ranges and peaks
- 8 passes with strategic importance
- 7 lakes (freshwater, brackish, saline)
- 3 islands including only active volcano
- 3 plateaus with mineral/economic data
- 12+ PYQ-specific locations (Silent Valley, Doklam, Sir Creek, etc.)

### World (50+ locations)
- 12 cities with international organization HQs
- 7 rivers including Nile, Amazon, Mekong, Congo
- 7 mountain ranges with continental significance
- 8 straits and chokepoints
- 5 deserts (including Antarctic trap!)
- 11 PYQ locations (Suez, South China Sea, Golan Heights, etc.)

### Quiz Bank
- 18 UPSC-pattern MCQs (India + World)
- Statement-based questions with traps
- Detailed explanations for every answer
- Score tracking per session

## Tech Stack

- **React 18** + **Vite 5** — Fast development and builds
- **Leaflet** + **React-Leaflet** — Interactive maps
- **CARTO Dark** tiles — Clean cartographic style
- **localStorage** — Zero-auth data persistence
- **Vanilla CSS** — No framework dependency

## License

Open source. Built for UPSC aspirants. Use freely, contribute welcome.
