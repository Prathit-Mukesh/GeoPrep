import React, { useState, useEffect, useRef, useCallback } from 'react'
import { MapContainer, TileLayer, useMap, useMapEvents, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { CAT, indiaData, worldData, quizData } from './data.js'

const INDIA_CENTER = [22.5, 82.0]
const WORLD_CENTER = [20, 10]
const INDIA_ZOOM = 5
const WORLD_ZOOM = 2

// ═══ HELPERS ═══
function loadData() {
  try {
    const d = JSON.parse(localStorage.getItem('geoprep') || '{}')
    return { custom: d.custom || [], notes: d.notes || [] }
  } catch { return { custom: [], notes: [] } }
}

function saveData(custom, notes) {
  localStorage.setItem('geoprep', JSON.stringify({ custom, notes }))
}

function mkIcon(type, active = false) {
  const c = CAT[type] || CAT.custom
  const s = active ? 34 : 26
  return L.divIcon({
    className: 'custom-marker',
    html: `<div style="width:${s}px;height:${s}px;background:${c.color};border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:${active ? 16 : 12}px;border:${active ? '3px solid #fff' : '2px solid rgba(255,255,255,0.7)'};box-shadow:${active ? '0 0 16px rgba(0,0,0,0.6)' : '0 2px 8px rgba(0,0,0,0.4)'};cursor:pointer;transition:all 0.2s">${c.icon}</div>`,
    iconSize: [s, s],
    iconAnchor: [s / 2, s / 2],
  })
}

// ═══ MAP CONTROLLER ═══
function MapController({ center, zoom }) {
  const map = useMap()
  useEffect(() => { map.setView(center, zoom, { duration: 0.8 }) }, [center, zoom])
  return null
}

function MapClickHandler({ isAdding, onAdd }) {
  useMapEvents({ click(e) { if (isAdding) onAdd(e.latlng.lat, e.latlng.lng) } })
  return null
}

// ═══ LANDING ═══
function Landing({ onSelect, onImport }) {
  const fileRef = useRef()
  const handleImport = (e) => {
    const f = e.target.files[0]
    if (!f) return
    const r = new FileReader()
    r.onload = ev => {
      try {
        const d = JSON.parse(ev.target.result)
        onImport(d)
        alert(`Imported! ${d.custom?.length || d.customMarkers?.length || 0} places, ${d.notes?.length || 0} notes.`)
      } catch { alert('Invalid file format') }
    }
    r.readAsText(f)
  }

  return (
    <div className="landing">
      <div className="landing-bg" />
      <div className="landing-content">
        <div className="landing-badge">UPSC CSE • Geography & Mapping</div>
        <h1 className="landing-title"><span className="landing-geo">Geo</span>Prep</h1>
        <p className="landing-subtitle">Master every river, mountain, strait, and pass.<br />30 years of PYQ locations mapped. Built for serious aspirants.</p>
        <div className="landing-cards">
          <button className="landing-card" onClick={() => onSelect('india')}>
            <div className="landing-card-icon">🇮🇳</div>
            <h2>India</h2>
            <p>Cities, Rivers, Mountains, Passes, Lakes, Islands, Plateaus & PYQ Locations</p>
            <span className="landing-card-count">{indiaData.length} locations pre-loaded</span>
          </button>
          <button className="landing-card" onClick={() => onSelect('world')}>
            <div className="landing-card-icon">🌍</div>
            <h2>World</h2>
            <p>Cities, Rivers, Mountains, Straits, Deserts, Canals & PYQ Locations</p>
            <span className="landing-card-count">{worldData.length} locations pre-loaded</span>
          </button>
        </div>
        <div className="landing-features">
          <div className="landing-feat">🗺️ Interactive Map — zoom to city level</div>
          <div className="landing-feat">📝 30 years of PYQ locations</div>
          <div className="landing-feat">🧠 {quizData.length} Geography Quiz Questions</div>
          <div className="landing-feat">📌 Add custom places & notes</div>
          <div className="landing-feat">💾 Export & Import your data</div>
        </div>
        <p className="landing-footer">Guest Mode — all data stays in your browser. No login needed.</p>
        <div className="landing-import">
          <label>📂 Import saved data
            <input type="file" accept=".json" ref={fileRef} onChange={handleImport} style={{ display: 'none' }} />
          </label>
        </div>
      </div>
    </div>
  )
}

// ═══ DETAIL PANEL ═══
function DetailPanel({ marker, onClose, onDelete }) {
  const c = CAT[marker.type] || CAT.custom
  return (
    <div className="panel">
      <button className="panel-close" onClick={onClose}>← Back to Map</button>
      <div className="detail-head" style={{ borderLeftColor: c.color }}>
        <span className="detail-icon">{c.icon}</span>
        <div>
          <h2>{marker.name}</h2>
          <span className="badge" style={{ background: c.color }}>{c.label}</span>
          {(marker.type === 'pyq' || marker.upscRelevance?.includes('PYQ')) && <span className="badge badge-pyq">PYQ</span>}
        </div>
      </div>
      <div className="detail-coords">📍 {marker.lat.toFixed(4)}°, {marker.lng.toFixed(4)}°</div>
      {marker.info && <div className="info-box"><h3 style={{ color: 'var(--accent)' }}>📋 Key Information</h3><p>{marker.info}</p></div>}
      {marker.upscRelevance && <div className="info-box upsc"><h3>🎯 UPSC Relevance</h3><p>{marker.upscRelevance}</p></div>}
      {marker.notes && <div className="info-box notes"><h3>📝 Your Notes</h3><p>{marker.notes}</p></div>}
      {marker.isCustom && <button className="del-btn" onClick={() => onDelete(marker.id)}>🗑️ Delete Place</button>}
    </div>
  )
}

// ═══ QUIZ PANEL ═══
function QuizPanel({ mode, onClose }) {
  const qs = quizData.filter(q => q.region === mode)
  const [qi, setQi] = useState(0)
  const [score, setScore] = useState(0)
  const [answered, setAnswered] = useState(0)
  const [selected, setSelected] = useState(null)
  const [showAnswer, setShowAnswer] = useState(false)

  if (!qs.length) return <div className="panel"><p style={{ padding: 32, textAlign: 'center', color: 'var(--text-dim)' }}>No questions available.</p></div>
  const q = qs[qi % qs.length]

  const handleAnswer = (i) => {
    if (showAnswer) return
    setSelected(i)
    setShowAnswer(true)
    setAnswered(a => a + 1)
    if (i === q.ans) setScore(s => s + 1)
  }

  const nextQ = () => {
    setQi(i => i + 1)
    setSelected(null)
    setShowAnswer(false)
  }

  return (
    <div className="panel">
      <div className="quiz-head"><h2>🧠 Quiz — {mode === 'india' ? 'India' : 'World'}</h2><button className="panel-close" onClick={onClose}>✕</button></div>
      <div className="quiz-score">Score: {score}/{answered} {answered > 0 && `(${Math.round(score / answered * 100)}%)`} — Q{(qi % qs.length) + 1}/{qs.length}</div>
      <div className="quiz-q">
        <p className="quiz-q-text">{q.q}</p>
        <div className="quiz-opts">
          {q.opts.map((o, i) => (
            <button key={i} className={`qo${showAnswer ? (i === q.ans ? ' correct' : i === selected ? ' wrong' : '') : ''}`} onClick={() => handleAnswer(i)}>
              <span className="qo-letter">{'ABCD'[i]}</span>{o}
            </button>
          ))}
        </div>
        {showAnswer && (
          <div className="quiz-exp">
            <strong>{selected === q.ans ? '✅ Correct!' : '❌ Incorrect'}</strong>
            <p>{q.exp}</p>
            <button className="btn btn-primary" onClick={nextQ}>Next Question →</button>
          </div>
        )}
      </div>
    </div>
  )
}

// ═══ NOTES PANEL ═══
function NotesPanel({ notes, onAdd, onDelete, onClose }) {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const handleAdd = () => {
    if (!title.trim()) return
    onAdd({ id: 'n-' + Date.now(), title: title.trim(), content: content.trim(), date: new Date().toISOString() })
    setTitle('')
    setContent('')
  }

  return (
    <div className="panel">
      <div className="notes-head"><h2>📝 Revision Notes</h2><button className="panel-close" onClick={onClose}>✕</button></div>
      <div className="notes-form">
        <input placeholder="Note title..." value={title} onChange={e => setTitle(e.target.value)} />
        <textarea placeholder="Write your revision note..." rows="3" value={content} onChange={e => setContent(e.target.value)} />
        <button className="btn btn-primary" onClick={handleAdd}>Add Note</button>
      </div>
      {notes.length ? notes.map(n => (
        <div className="note-card" key={n.id}>
          <div className="note-top"><h3>{n.title}</h3><span className="note-date">{new Date(n.date).toLocaleDateString()}</span></div>
          <p>{n.content}</p>
          <button className="note-del" onClick={() => onDelete(n.id)}>Delete</button>
        </div>
      )) : <p style={{ textAlign: 'center', color: 'var(--text-muted)', padding: 32 }}>No notes yet. Add revision notes to retain key facts!</p>}
    </div>
  )
}

// ═══ ADD MODAL ═══
function AddModal({ lat, lng, onSave, onCancel }) {
  const [name, setName] = useState('')
  const [type, setType] = useState('city')
  const [info, setInfo] = useState('')
  const [upsc, setUpsc] = useState('')
  const [notes, setNotes] = useState('')

  const handleSave = () => {
    if (!name.trim()) return alert('Name is required')
    onSave({ id: 'c-' + Date.now(), name: name.trim(), lat, lng, type, info: info.trim(), upscRelevance: upsc.trim(), notes: notes.trim(), isCustom: true })
  }

  return (
    <div className="modal-overlay" onClick={onCancel}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <h2>Add New Place</h2>
        <div className="modal-coords">📍 {lat.toFixed(4)}, {lng.toFixed(4)}</div>
        <label>Name *<input value={name} onChange={e => setName(e.target.value)} placeholder="e.g., Doklam Plateau" autoFocus /></label>
        <label>Category
          <select value={type} onChange={e => setType(e.target.value)}>
            {Object.entries(CAT).map(([k, v]) => <option key={k} value={k}>{v.icon} {v.label}</option>)}
          </select>
        </label>
        <label>Key Information<textarea value={info} onChange={e => setInfo(e.target.value)} rows="3" placeholder="Facts, features, significance..." /></label>
        <label>UPSC Relevance<textarea value={upsc} onChange={e => setUpsc(e.target.value)} rows="2" placeholder="How has UPSC tested this?" /></label>
        <label>Your Notes<textarea value={notes} onChange={e => setNotes(e.target.value)} rows="2" placeholder="Personal mnemonics, tricks..." /></label>
        <div className="modal-actions">
          <button className="btn btn-secondary" onClick={onCancel}>Cancel</button>
          <button className="btn btn-primary" onClick={handleSave}>Add Place</button>
        </div>
      </div>
    </div>
  )
}

// ═══ SEARCH ═══
function SearchBox({ markers, onSelect }) {
  const [query, setQuery] = useState('')
  const [open, setOpen] = useState(false)
  const ref = useRef()

  useEffect(() => {
    const handler = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false) }
    document.addEventListener('click', handler)
    return () => document.removeEventListener('click', handler)
  }, [])

  const results = query.trim()
    ? markers.filter(m => m.name.toLowerCase().includes(query.toLowerCase()) || m.info?.toLowerCase().includes(query.toLowerCase())).slice(0, 12)
    : []

  return (
    <div className="search-box" ref={ref}>
      <div className="search-wrap">
        <span className="search-icon">🔍</span>
        <input placeholder="Search places, rivers, mountains..." value={query} onChange={e => { setQuery(e.target.value); setOpen(true) }} onFocus={() => setOpen(true)} />
      </div>
      {open && results.length > 0 && (
        <div className="search-results open">
          {results.map(m => {
            const c = CAT[m.type] || CAT.custom
            return (
              <button key={m.id} className="sr" onClick={() => { onSelect(m); setQuery(''); setOpen(false) }}>
                <span style={{ color: c.color }}>{c.icon}</span>
                <span>{m.name}</span>
                <span className="sr-type">{c.label}</span>
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}

// ═══ MAIN APP ═══
export default function App() {
  const [mode, setMode] = useState(null) // null, 'india', 'world'
  const [custom, setCustom] = useState(() => loadData().custom)
  const [notes, setNotes] = useState(() => loadData().notes)
  const [filters, setFilters] = useState(() => Object.keys(CAT).reduce((a, k) => ({ ...a, [k]: true }), {}))
  const [selected, setSelected] = useState(null)
  const [panel, setPanel] = useState(null) // 'detail','quiz','notes'
  const [adding, setAdding] = useState(false)
  const [addCoords, setAddCoords] = useState(null)
  const mapRef = useRef()

  // Save on change
  useEffect(() => { saveData(custom, notes) }, [custom, notes])

  const baseData = mode === 'india' ? indiaData : worldData
  const allMarkers = [...(baseData || []), ...custom.filter(m => {
    if (mode === 'india') return m.lat > 5 && m.lat < 38 && m.lng > 65 && m.lng < 100
    return true
  })]
  const filteredMarkers = allMarkers.filter(m => filters[m.type] !== false)

  const counts = {}
  allMarkers.forEach(m => counts[m.type] = (counts[m.type] || 0) + 1)

  const handleSelect = useCallback((m) => {
    setSelected(m)
    setPanel('detail')
  }, [])

  const handleExport = () => {
    const d = { custom, notes }
    const b = new Blob([JSON.stringify(d, null, 2)], { type: 'application/json' })
    const u = URL.createObjectURL(b)
    const a = document.createElement('a')
    a.href = u; a.download = `geoprep-${new Date().toISOString().slice(0, 10)}.json`
    a.click(); URL.revokeObjectURL(u)
  }

  const handleImport = (d) => {
    if (d.custom) setCustom(prev => [...prev, ...d.custom])
    if (d.customMarkers) setCustom(prev => [...prev, ...d.customMarkers])
    if (d.notes) setNotes(prev => [...d.notes, ...prev])
  }

  const closePanel = () => { setPanel(null); setSelected(null) }

  if (!mode) return <Landing onSelect={setMode} onImport={handleImport} />

  const center = mode === 'india' ? INDIA_CENTER : WORLD_CENTER
  const zoom = mode === 'india' ? INDIA_ZOOM : WORLD_ZOOM

  return (
    <div className="app">
      {/* TOPBAR */}
      <header className="topbar">
        <div className="topbar-left">
          <button className="topbar-back" onClick={() => { setMode(null); setPanel(null) }}>
            ← <span className="topbar-logo"><span className="geo-text">Geo</span>Prep</span>
          </button>
          <div className="mode-toggle">
            <button className={mode === 'india' ? 'active' : ''} onClick={() => { setMode('india'); closePanel() }}>🇮🇳 India</button>
            <button className={mode === 'world' ? 'active' : ''} onClick={() => { setMode('world'); closePanel() }}>🌍 World</button>
          </div>
        </div>
        <div className="topbar-center">
          <SearchBox markers={allMarkers} onSelect={handleSelect} />
        </div>
        <div className="topbar-right">
          <button className={`tb${panel === 'quiz' ? ' active' : ''}`} onClick={() => { panel === 'quiz' ? closePanel() : setPanel('quiz') }}>🧠 Quiz</button>
          <button className={`tb${panel === 'notes' ? ' active' : ''}`} onClick={() => { panel === 'notes' ? closePanel() : setPanel('notes') }}>📝 Notes</button>
          <button className={`tb${adding ? ' adding' : ''}`} onClick={() => setAdding(!adding)}>{adding ? '✕ Cancel' : '📌 Add'}</button>
          <button className="tb" onClick={handleExport} title="Export data">💾</button>
        </div>
      </header>

      {adding && <div className="add-banner">Click anywhere on the map to add a new place</div>}

      {/* FILTERS */}
      <div className="filters">
        {Object.entries(CAT).map(([k, v]) => {
          if (!counts[k]) return null
          return (
            <button key={k} className={`chip${filters[k] ? ' on' : ''}`}
              style={filters[k] ? { background: v.color, borderColor: v.color } : {}}
              onClick={() => setFilters(f => ({ ...f, [k]: !f[k] }))}
            >
              {v.icon} {v.label} <span className="chip-ct">{counts[k]}</span>
            </button>
          )
        })}
      </div>

      {/* MAP + PANEL */}
      <div className="map-area">
        <MapContainer center={center} zoom={zoom} zoomControl={false} style={{ height: '100%', width: '100%' }} ref={mapRef}>
          <TileLayer url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png" attribution="© OSM © CARTO" maxZoom={18} />
          <MapController center={center} zoom={zoom} />
          <MapClickHandler isAdding={adding} onAdd={(lat, lng) => { setAdding(false); setAddCoords({ lat, lng }) }} />
          {filteredMarkers.map(m => (
            <Marker key={m.id} position={[m.lat, m.lng]} icon={mkIcon(m.type, selected?.id === m.id)}
              eventHandlers={{ click: () => handleSelect(m) }}
            />
          ))}
        </MapContainer>

        {/* SIDE PANELS */}
        {panel === 'detail' && selected && (
          <DetailPanel marker={selected} onClose={closePanel}
            onDelete={(id) => { setCustom(c => c.filter(x => x.id !== id)); closePanel() }}
          />
        )}
        {panel === 'quiz' && <QuizPanel mode={mode} onClose={closePanel} />}
        {panel === 'notes' && (
          <NotesPanel notes={notes}
            onAdd={(n) => setNotes(prev => [n, ...prev])}
            onDelete={(id) => setNotes(prev => prev.filter(n => n.id !== id))}
            onClose={closePanel}
          />
        )}
      </div>

      {/* STATS */}
      <div className="stats">
        <span>📍 {filteredMarkers.length} places shown</span>
        <span>📌 {custom.length} custom</span>
        <span>📝 {notes.length} notes</span>
      </div>

      {/* ADD MODAL */}
      {addCoords && (
        <AddModal lat={addCoords.lat} lng={addCoords.lng}
          onSave={(m) => { setCustom(c => [...c, m]); setAddCoords(null) }}
          onCancel={() => setAddCoords(null)}
        />
      )}
    </div>
  )
}
