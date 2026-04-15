// UPSC Digital Atlas v3
// This loads the standalone HTML directly for identical behavior
// The standalone.html in /public has all features:
// - Day/Night theme toggle
// - Font size controls (A-/A+)
// - Revision dashboard with progress tracking
// - Auto-slideshow mode (10s per location)
// - PDF export by category (jsPDF)
// - Quiz, Notes, Custom markers, Search, Filters
// - Export/Import JSON data

// For development with React components, see App.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
