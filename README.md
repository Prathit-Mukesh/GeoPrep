# UPSC Digital Atlas v3 🗺️

> Complete geography reference for UPSC CSE — replaces atlas books and YouTube videos.

## Features
- **100+ Locations** (India + World) with UPSC relevance notes
- **📊 Revision Dashboard** — Progress tracking, category filtering, PYQ quick-access
- **▶️ Auto-Slideshow** — Cycles through locations every 10 seconds for revision
- **📥 PDF Export** — Download atlas by category (jsPDF)
- **🌗 Day/Night Theme** — Toggle with persistent preference
- **🔤 Font Size Control** — A-/A+ buttons (10px to 20px range)
- **🧠 18 Quiz Questions** — UPSC-pattern with traps and explanations
- **📝 Revision Notes** — Built-in notepad
- **📌 Custom Markers** — Click map to add your own places
- **💾 Export/Import** — JSON data portability
- **✅ Visit Tracking** — Green/red indicators show revision progress

## Quick Start

### Option 1: Standalone HTML (Recommended)
Open `public/standalone.html` in any browser. No build needed.

### Option 2: Dev Server
```bash
npm install
npm run dev
```

### Option 3: Deploy to Vercel
Push to GitHub → Import in Vercel → Auto-deploys.

### Option 4: Deploy to GitHub Pages
1. Edit `vite.config.js`: uncomment `base` line, set repo name
2. Run `npm run deploy`

## Tech Stack
React 18, Vite 5, Leaflet, jsPDF, localStorage
