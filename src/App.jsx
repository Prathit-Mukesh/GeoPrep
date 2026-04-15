import React, { useState, useEffect, useRef, useCallback } from 'react'
import { MapContainer, TileLayer, useMap, useMapEvents, Marker } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { jsPDF } from 'jspdf'
import { CAT, indiaData, worldData, quizData } from './data.js'

// ═══ CONSTANTS ═══
const INDIA_CENTER = [22.5, 82.0]
const WORLD_CENTER = [20, 10]

// ═══ HELPERS ═══
function loadData() {
  try {
    const d = JSON.parse(localStorage.getItem('atlas') || '{}')
    return { custom: d.custom||[], notes: d.notes||[], theme: d.theme||'dark', fontSize: d.fontSize||13, visited: new Set(d.visited||[]) }
  } catch { return { custom:[], notes:[], theme:'dark', fontSize:13, visited:new Set() } }
}
function saveData(obj) { localStorage.setItem('atlas', JSON.stringify({...obj, visited:[...obj.visited]})) }

function mkIcon(type, active=false) {
  const c = CAT[type]||CAT.custom, s = active?34:26
  return L.divIcon({ className:'custom-marker',
    html:`<div style="width:${s}px;height:${s}px;background:${c.color};border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:${active?16:12}px;border:${active?'3px solid #fff':'2px solid rgba(255,255,255,0.7)'};box-shadow:${active?'0 0 16px rgba(0,0,0,0.6)':'0 2px 8px rgba(0,0,0,0.4)'};cursor:pointer">${c.icon}</div>`,
    iconSize:[s,s], iconAnchor:[s/2,s/2] })
}

// ═══ MAP HELPERS ═══
function MapCtrl({ center, zoom }) {
  const map = useMap()
  useEffect(() => { map.setView(center, zoom, { duration:0.6 }) }, [center, zoom])
  return null
}
function MapClick({ active, onAdd }) {
  useMapEvents({ click(e) { if(active) onAdd(e.latlng.lat, e.latlng.lng) } })
  return null
}

// ═══ LANDING ═══
function Landing({ onSelect, onImport, theme, onTheme, fontSize, onFontSize }) {
  return (
    <div className="landing">
      <div className="landing-controls">
        <button className="ctrl-btn" onClick={onTheme}>{theme==='dark'?'☀️ Light':'🌙 Dark'}</button>
        <button className="ctrl-btn" onClick={()=>onFontSize(-1)}>A-</button>
        <button className="ctrl-btn" onClick={()=>onFontSize(1)}>A+</button>
      </div>
      <div className="landing-bg" />
      <div className="landing-content">
        <div className="landing-badge">UPSC CSE • Digital Atlas</div>
        <h1 className="landing-title"><span className="landing-geo">Digital</span> Atlas</h1>
        <p className="landing-tagline">Your complete geography reference — no YouTube, no expensive atlas books.</p>
        <div className="landing-cards">
          <button className="landing-card" onClick={()=>onSelect('india')}>
            <div className="landing-card-icon">🇮🇳</div>
            <h2>India Atlas</h2>
            <p>Cities, Rivers, Mountains, Passes, Lakes, Islands, Plateaus & PYQ Locations</p>
            <span className="landing-card-count">{indiaData.length} locations</span>
          </button>
          <button className="landing-card" onClick={()=>onSelect('world')}>
            <div className="landing-card-icon">🌍</div>
            <h2>World Atlas</h2>
            <p>Cities, Rivers, Mountains, Straits, Deserts & PYQ Locations</p>
            <span className="landing-card-count">{worldData.length} locations</span>
          </button>
        </div>
        <div className="landing-features">
          {['🗺️ Interactive Maps','📝 PYQ Mapped','🧠 Quiz','📊 Dashboard','▶️ Slideshow','📥 PDF Export','🌗 Day/Night','🔤 Font Control'].map(f=>
            <div className="landing-feat" key={f}>{f}</div>)}
        </div>
        <p className="landing-footer">No login. No ads. All data in your browser.</p>
        <div className="landing-bottom">
          <label className="landing-btn">📂 Import Data
            <input type="file" accept=".json" style={{display:'none'}} onChange={e=>{
              const f=e.target.files[0]; if(!f)return
              const r=new FileReader()
              r.onload=ev=>{try{onImport(JSON.parse(ev.target.result))}catch{alert('Invalid file')}}
              r.readAsText(f)
            }} />
          </label>
        </div>
      </div>
    </div>
  )
}

// ═══ DASHBOARD ═══
function Dashboard({ allMarkers, counts, visited, dashFilter, onDashFilter, onSelectPlace, onStartSlide }) {
  const total = allMarkers.length
  const visitedCount = allMarkers.filter(m=>visited.has(m.id)).length
  const pct = total ? Math.round(visitedCount/total*100) : 0
  const pyqItems = allMarkers.filter(m=>m.type==='pyq'||m.upscRelevance?.includes('PYQ'))
  const pyqVisited = pyqItems.filter(m=>visited.has(m.id)).length

  return (
    <div className="dashboard">
      <div className="dash-title">📊 Dashboard</div>
      <div className="dash-section">
        <h3>Revision Progress</h3>
        <div className="dash-progress">
          <div className="dash-progress-label"><span>Overall</span><span>{visitedCount}/{total} ({pct}%)</span></div>
          <div className="dash-progress-bar"><div className="dash-progress-fill" style={{width:pct+'%',background:'var(--accent)'}} /></div>
        </div>
        <div className="dash-progress">
          <div className="dash-progress-label"><span>PYQ Locations</span><span>{pyqVisited}/{pyqItems.length}</span></div>
          <div className="dash-progress-bar"><div className="dash-progress-fill" style={{width:pyqItems.length?pyqVisited/pyqItems.length*100+'%':'0%',background:'var(--danger)'}} /></div>
        </div>
      </div>
      <div className="dash-section">
        <h3>Categories {dashFilter && <button onClick={()=>onDashFilter(null)} style={{background:'none',border:'none',color:'var(--accent)',cursor:'pointer',fontSize:10,marginLeft:6}}>Clear ✕</button>}</h3>
        <div className="dash-grid">
          {Object.entries(CAT).filter(([k])=>counts[k]).map(([k,v])=>
            <div key={k} className={`dash-card ${dashFilter===k?'active':''}`} onClick={()=>onDashFilter(dashFilter===k?null:k)}>
              <div className="dash-card-icon">{v.icon}</div>
              <div className="dash-card-count">{counts[k]}</div>
              <div className="dash-card-label">{v.label}</div>
            </div>
          )}
        </div>
      </div>
      <div className="dash-section">
        <h3>PYQ Locations</h3>
        <div className="dash-list">
          {allMarkers.filter(m=>m.type==='pyq').slice(0,10).map(m=>
            <div key={m.id} className="dash-item" onClick={()=>onSelectPlace(m)}>
              <div className="dash-item-dot" style={{background:visited.has(m.id)?'var(--success)':'var(--danger)'}} />
              <span className="dash-item-name">{m.name}</span>
              {m.upscRelevance?.match(/PYQ:\s*([\d,\s]+)/) && <span className="dash-item-tag">{m.upscRelevance.match(/PYQ:\s*([\d,\s]+)/)[1].trim()}</span>}
            </div>
          )}
        </div>
      </div>
      <div className="dash-section">
        <div className="dash-grid">
          <button className="dash-card dash-card-full" onClick={onStartSlide} style={{borderColor:'var(--success)'}}>
            <div className="dash-card-icon">▶️</div>
            <div className="dash-card-label" style={{color:'var(--success)',fontWeight:600}}>START AUTO-REVISION (10s each)</div>
          </button>
        </div>
      </div>
    </div>
  )
}

// ═══ DETAIL PANEL ═══
function DetailPanel({ marker, onClose, onDelete, slideshow, onPrev, onNext }) {
  const c = CAT[marker.type]||CAT.custom
  return (
    <div className="panel">
      <button className="panel-close" onClick={onClose}>← Back</button>
      <div className="detail-head" style={{borderLeftColor:c.color}}>
        <span className="detail-icon">{c.icon}</span>
        <div>
          <h2>{marker.name}</h2>
          <span className="badge" style={{background:c.color}}>{c.label}</span>
          {(marker.type==='pyq'||marker.upscRelevance?.includes('PYQ')) && <span className="badge badge-pyq">PYQ</span>}
        </div>
      </div>
      <div className="detail-coords">📍 {marker.lat.toFixed(4)}°, {marker.lng.toFixed(4)}°</div>
      {marker.info && <div className="info-box"><h3 style={{color:'var(--accent)'}}>📋 Key Information</h3><p>{marker.info}</p></div>}
      {marker.upscRelevance && <div className="info-box upsc"><h3>🎯 UPSC Relevance</h3><p>{marker.upscRelevance}</p></div>}
      {marker.notes && <div className="info-box notes"><h3>📝 Your Notes</h3><p>{marker.notes}</p></div>}
      {marker.isCustom && <button className="del-btn" onClick={()=>onDelete(marker.id)}>🗑️ Delete</button>}
      {slideshow && <div className="slide-nav"><button onClick={onPrev}>← Previous</button><button onClick={onNext}>Next →</button></div>}
    </div>
  )
}

// ═══ QUIZ ═══
function QuizPanel({ mode, onClose }) {
  const qs = quizData.filter(q=>q.region===mode)
  const [qi,setQi] = useState(0)
  const [score,setScore] = useState(0)
  const [ans,setAns] = useState(0)
  const [sel,setSel] = useState(null)
  const [show,setShow] = useState(false)
  if(!qs.length) return <div className="panel"><p style={{padding:32,textAlign:'center'}}>No questions.</p></div>
  const q = qs[qi%qs.length]
  const pick = i => { if(show)return; setSel(i);setShow(true);setAns(a=>a+1);if(i===q.ans)setScore(s=>s+1) }
  const next = () => { setQi(i=>i+1);setSel(null);setShow(false) }
  return (
    <div className="panel">
      <div className="quiz-head"><h2>🧠 Quiz</h2><button className="panel-close" onClick={onClose}>✕</button></div>
      <div className="quiz-score">Score: {score}/{ans} {ans>0&&`(${Math.round(score/ans*100)}%)`} — Q{(qi%qs.length)+1}/{qs.length}</div>
      <div className="quiz-q">
        <p className="quiz-q-text">{q.q}</p>
        <div className="quiz-opts">
          {q.opts.map((o,i)=><button key={i} className={`qo${show?(i===q.ans?' correct':i===sel?' wrong':''):''}`} onClick={()=>pick(i)}><span className="qo-letter">{'ABCD'[i]}</span>{o}</button>)}
        </div>
        {show && <div className="quiz-exp"><strong>{sel===q.ans?'✅ Correct!':'❌ Incorrect'}</strong><p>{q.exp}</p><button className="btn btn-primary" onClick={next}>Next →</button></div>}
      </div>
    </div>
  )
}

// ═══ NOTES ═══
function NotesPanel({ notes, onAdd, onDel, onClose }) {
  const [t,setT]=useState(''); const [c,setC]=useState('')
  const add = () => { if(!t.trim())return; onAdd({id:'n-'+Date.now(),title:t.trim(),content:c.trim(),date:new Date().toISOString()});setT('');setC('') }
  return (
    <div className="panel">
      <div className="notes-head"><h2>📝 Notes</h2><button className="panel-close" onClick={onClose}>✕</button></div>
      <div className="notes-form">
        <input placeholder="Title..." value={t} onChange={e=>setT(e.target.value)} />
        <textarea placeholder="Note..." rows="3" value={c} onChange={e=>setC(e.target.value)} />
        <button className="btn btn-primary" onClick={add}>Add</button>
      </div>
      {notes.length?notes.map(n=><div key={n.id} className="note-card"><div className="note-top"><h3>{n.title}</h3><span className="note-date">{new Date(n.date).toLocaleDateString()}</span></div><p>{n.content}</p><button className="note-del" onClick={()=>onDel(n.id)}>Delete</button></div>):<p style={{textAlign:'center',color:'var(--text-muted)',padding:24}}>No notes yet.</p>}
    </div>
  )
}

// ═══ ADD MODAL ═══
function AddModal({ lat, lng, onSave, onCancel }) {
  const [name,setName]=useState('');const[type,setType]=useState('city');const[info,setInfo]=useState('');const[upsc,setUpsc]=useState('');const[notes,setNotes]=useState('')
  return (
    <div className="modal-overlay" onClick={onCancel}>
      <div className="modal" onClick={e=>e.stopPropagation()}>
        <h2>Add Place</h2><div className="modal-coords">📍 {lat.toFixed(4)}, {lng.toFixed(4)}</div>
        <label>Name *<input value={name} onChange={e=>setName(e.target.value)} autoFocus /></label>
        <label>Category<select value={type} onChange={e=>setType(e.target.value)}>{Object.entries(CAT).map(([k,v])=><option key={k} value={k}>{v.icon} {v.label}</option>)}</select></label>
        <label>Information<textarea value={info} onChange={e=>setInfo(e.target.value)} rows="3" /></label>
        <label>UPSC Relevance<textarea value={upsc} onChange={e=>setUpsc(e.target.value)} rows="2" /></label>
        <label>Notes<textarea value={notes} onChange={e=>setNotes(e.target.value)} rows="2" /></label>
        <div className="modal-actions">
          <button className="btn btn-secondary" onClick={onCancel}>Cancel</button>
          <button className="btn btn-primary" onClick={()=>{if(!name.trim())return alert('Name required');onSave({id:'c-'+Date.now(),name:name.trim(),lat,lng,type,info:info.trim(),upscRelevance:upsc.trim(),notes:notes.trim(),isCustom:true})}}>Add</button>
        </div>
      </div>
    </div>
  )
}

// ═══ PDF MODAL ═══
function PdfModal({ mode, allMarkers, onClose }) {
  const [cats,setCats] = useState(()=>Object.keys(CAT).filter(k=>k!=='custom'))
  const [gen,setGen] = useState(false)
  const [status,setStatus] = useState('')
  const [pct,setPct] = useState(0)
  const counts = {}; allMarkers.forEach(m=>counts[m.type]=(counts[m.type]||0)+1)
  const toggle = k => setCats(c=>c.includes(k)?c.filter(x=>x!==k):[...c,k])

  const generate = () => {
    const items = allMarkers.filter(m=>cats.includes(m.type))
    if(!items.length) return alert('No items selected')
    setGen(true); setStatus('Starting...')
    setTimeout(()=>{
      const doc = new jsPDF({orientation:'portrait',unit:'mm',format:'a4'})
      const pw=210,ml=15,mr=15,mt=20,mb=15,cw=pw-ml-mr
      let y=mt
      doc.setFont('helvetica','bold');doc.setFontSize(28);doc.setTextColor(37,99,235)
      doc.text('UPSC Digital Atlas',pw/2,80,{align:'center'})
      doc.setFontSize(14);doc.setTextColor(100)
      doc.text(`${mode==='india'?'India':'World'} — ${items.length} Locations`,pw/2,95,{align:'center'})
      doc.setFontSize(10)
      doc.text(`Generated: ${new Date().toLocaleDateString('en-IN',{day:'numeric',month:'long',year:'numeric'})}`,pw/2,110,{align:'center'})

      let done=0;const total=items.length
      cats.forEach(catKey=>{
        const ci=items.filter(m=>m.type===catKey);if(!ci.length)return
        const cat=CAT[catKey]
        doc.addPage();y=mt
        doc.setFillColor(37,99,235);doc.rect(ml,y-6,cw,10,'F')
        doc.setFont('helvetica','bold');doc.setFontSize(14);doc.setTextColor(255)
        doc.text(`${cat.label.toUpperCase()} (${ci.length})`,ml+4,y+1);y+=14
        ci.forEach((m,idx)=>{
          if(y>297-mb-40){doc.addPage();y=mt}
          doc.setFont('helvetica','bold');doc.setFontSize(11);doc.setTextColor(30)
          doc.text(`${idx+1}. ${m.name}`,ml,y)
          doc.setFont('helvetica','normal');doc.setFontSize(8);doc.setTextColor(120)
          doc.text(`[${m.lat.toFixed(2)}°, ${m.lng.toFixed(2)}°]`,ml+cw,y,{align:'right'});y+=5
          if(m.info){doc.setFontSize(9);doc.setTextColor(50);const l=doc.splitTextToSize(m.info,cw-4);if(y+l.length*4>297-mb){doc.addPage();y=mt}doc.text(l,ml+2,y);y+=l.length*4+2}
          if(m.upscRelevance){const ul=doc.splitTextToSize(m.upscRelevance,cw-8);doc.setFillColor(255,247,230);doc.rect(ml,y-3,cw,4+ul.length*3.5,'F');doc.setDrawColor(245,158,11);doc.rect(ml,y-3,cw,4+ul.length*3.5,'S');doc.setFont('helvetica','bold');doc.setFontSize(7);doc.setTextColor(180,100,0);doc.text('UPSC RELEVANCE:',ml+2,y);doc.setFont('helvetica','normal');doc.setFontSize(8);doc.setTextColor(80);doc.text(ul,ml+2,y+3.5);y+=ul.length*3.5+8}
          doc.setDrawColor(220);doc.line(ml,y,ml+cw,y);y+=5
          done++;setPct(Math.round(done/total*100));setStatus(`${m.name} (${done}/${total})`)
        })
      })
      doc.save(`UPSC-Atlas-${mode}-${new Date().toISOString().slice(0,10)}.pdf`)
      setStatus('✅ Downloaded!');setTimeout(onClose,1500)
    },100)
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal pdf-modal" onClick={e=>e.stopPropagation()}>
        <h2>📥 Download PDF Atlas</h2>
        <p style={{color:'var(--text-dim)',fontSize:'var(--fs-sm)',margin:'8px 0 12px'}}>Select categories:</p>
        <div style={{display:'flex',gap:6,marginBottom:8}}>
          <button className="btn btn-primary" style={{fontSize:11,padding:'4px 10px'}} onClick={()=>setCats(Object.keys(CAT).filter(k=>k!=='custom'))}>All</button>
          <button className="btn btn-secondary" style={{fontSize:11,padding:'4px 10px'}} onClick={()=>setCats([])}>None</button>
        </div>
        <div className="pdf-cats">
          {Object.entries(CAT).filter(([k])=>k!=='custom'&&counts[k]).map(([k,v])=>
            <label key={k} className={`pdf-cat ${cats.includes(k)?'selected':''}`} onClick={()=>toggle(k)}>
              <input type="checkbox" checked={cats.includes(k)} readOnly /> {v.icon} {v.label} ({counts[k]||0})
            </label>
          )}
        </div>
        <div className="modal-actions">
          <button className="btn btn-secondary" onClick={onClose}>Cancel</button>
          <button className="btn btn-primary" onClick={generate} disabled={gen}>📄 Generate PDF</button>
        </div>
        {gen && <div className="pdf-progress"><div className="pdf-progress-text">{status}</div><div className="dash-progress-bar"><div className="dash-progress-fill" style={{width:pct+'%',background:'var(--accent)'}} /></div></div>}
      </div>
    </div>
  )
}

// ═══ SEARCH ═══
function SearchBox({ markers, onSelect }) {
  const [q,setQ]=useState('');const[open,setOpen]=useState(false);const ref=useRef()
  useEffect(()=>{const h=e=>{if(ref.current&&!ref.current.contains(e.target))setOpen(false)};document.addEventListener('click',h);return()=>document.removeEventListener('click',h)},[])
  const res = q.trim() ? markers.filter(m=>m.name.toLowerCase().includes(q.toLowerCase())||m.info?.toLowerCase().includes(q.toLowerCase())).slice(0,12) : []
  return (
    <div className="search-box" ref={ref}>
      <div className="search-wrap"><span style={{fontSize:12,color:'var(--text-muted)'}}>🔍</span><input placeholder="Search..." value={q} onChange={e=>{setQ(e.target.value);setOpen(true)}} onFocus={()=>setOpen(true)} /></div>
      {open&&res.length>0 && <div className="search-results open">{res.map(m=>{const c=CAT[m.type]||CAT.custom;return<button key={m.id} className="sr" onClick={()=>{onSelect(m);setQ('');setOpen(false)}}><span style={{color:c.color}}>{c.icon}</span><span>{m.name}</span><span className="sr-type">{c.label}</span></button>})}</div>}
    </div>
  )
}

// ═══════════════════════════════════════════════════════════════════
// MAIN APP
// ═══════════════════════════════════════════════════════════════════
export default function App() {
  const init = loadData()
  const [mode,setMode] = useState(null)
  const [custom,setCustom] = useState(init.custom)
  const [notes,setNotes] = useState(init.notes)
  const [theme,setTheme] = useState(init.theme)
  const [fontSize,setFontSize] = useState(init.fontSize)
  const [visited,setVisited] = useState(init.visited)
  const [filters,setFilters] = useState(()=>Object.keys(CAT).reduce((a,k)=>({...a,[k]:true}),{}))
  const [selected,setSelected] = useState(null)
  const [panel,setPanel] = useState(null)
  const [adding,setAdding] = useState(false)
  const [addCoords,setAddCoords] = useState(null)
  const [dashFilter,setDashFilter] = useState(null)
  const [showPdf,setShowPdf] = useState(false)

  // Slideshow
  const [slideshow,setSlideshow] = useState(false)
  const [slideIdx,setSlideIdx] = useState(0)
  const [slideProg,setSlideProg] = useState(0)
  const slideTimer = useRef(null)

  // Save
  useEffect(()=>{ saveData({custom,notes,theme,fontSize,visited}) },[custom,notes,theme,fontSize,visited])
  useEffect(()=>{ document.body.dataset.theme=theme },[theme])
  useEffect(()=>{
    const r=document.documentElement.style
    r.setProperty('--fs',fontSize+'px');r.setProperty('--fs-sm',(fontSize-2)+'px');r.setProperty('--fs-lg',(fontSize+2)+'px')
    r.setProperty('--fs-h1',Math.max(22,fontSize+15)+'px');r.setProperty('--fs-h2',Math.max(18,fontSize+7)+'px')
  },[fontSize])

  const baseData = mode==='india'?indiaData:worldData
  const allMarkers = [...(baseData||[]), ...custom.filter(m=>{ if(mode==='india')return m.lat>5&&m.lat<38&&m.lng>65&&m.lng<100; return true })]
  const filteredMarkers = allMarkers.filter(m=>filters[m.type]!==false).filter(m=>!dashFilter||m.type===dashFilter)
  const counts = {}; allMarkers.forEach(m=>counts[m.type]=(counts[m.type]||0)+1)

  const selectPlace = useCallback(m=>{ setSelected(m);setPanel('detail');setVisited(v=>{const n=new Set(v);n.add(m.id);return n}) },[])
  const closePanel = ()=>{ setPanel(null);setSelected(null) }
  const toggleTheme = ()=>setTheme(t=>t==='dark'?'light':'dark')
  const changeFontSize = d=>setFontSize(s=>Math.max(10,Math.min(20,s+d)))

  // Slideshow logic
  const startSlide = ()=>{
    if(filteredMarkers.length<2)return
    setSlideshow(true);setSlideIdx(0);setSlideProg(0)
    selectPlace(filteredMarkers[0])
  }
  const stopSlide = ()=>{ setSlideshow(false);clearInterval(slideTimer.current);slideTimer.current=null;setSlideProg(0) }

  useEffect(()=>{
    if(!slideshow)return
    slideTimer.current=setInterval(()=>{
      setSlideProg(p=>{
        if(p>=100){
          setSlideIdx(i=>{
            const next=(i+1)%filteredMarkers.length
            selectPlace(filteredMarkers[next])
            return next
          })
          return 0
        }
        return p+3.33
      })
    },333)
    return()=>clearInterval(slideTimer.current)
  },[slideshow,filteredMarkers.length])

  const slidePrev = ()=>{const i=(slideIdx-1+filteredMarkers.length)%filteredMarkers.length;setSlideIdx(i);selectPlace(filteredMarkers[i]);setSlideProg(0)}
  const slideNext = ()=>{const i=(slideIdx+1)%filteredMarkers.length;setSlideIdx(i);selectPlace(filteredMarkers[i]);setSlideProg(0)}

  const handleExport = ()=>{
    const d={custom,notes,visited:[...visited]};const b=new Blob([JSON.stringify(d,null,2)],{type:'application/json'})
    const u=URL.createObjectURL(b),a=document.createElement('a');a.href=u;a.download=`atlas-${new Date().toISOString().slice(0,10)}.json`;a.click()
  }
  const handleImport = d=>{if(d.custom)setCustom(p=>[...p,...d.custom]);if(d.customMarkers)setCustom(p=>[...p,...d.customMarkers]);if(d.notes)setNotes(p=>[...d.notes,...p]);alert('Imported!')}

  const center = mode==='india'?INDIA_CENTER:WORLD_CENTER
  const zoom = mode==='india'?5:2
  const tileUrl = theme==='dark'?'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png':'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png'

  if(!mode) return <Landing onSelect={setMode} onImport={handleImport} theme={theme} onTheme={toggleTheme} fontSize={fontSize} onFontSize={changeFontSize} />

  return (
    <div className="app">
      <header className="topbar">
        <div className="topbar-left">
          <button className="topbar-back" onClick={()=>{stopSlide();setMode(null);setPanel(null);setDashFilter(null)}}>← <span className="topbar-logo"><span className="geo-text">Digital</span> Atlas</span></button>
          <div className="mode-toggle">
            <button className={mode==='india'?'active':''} onClick={()=>{stopSlide();setMode('india');closePanel();setDashFilter(null)}}>🇮🇳 India</button>
            <button className={mode==='world'?'active':''} onClick={()=>{stopSlide();setMode('world');closePanel();setDashFilter(null)}}>🌍 World</button>
          </div>
        </div>
        <div className="topbar-center"><SearchBox markers={allMarkers} onSelect={selectPlace} /></div>
        <div className="topbar-right">
          <button className={`tb ${slideshow?'slideshow':''}`} onClick={()=>slideshow?stopSlide():startSlide()}>{slideshow?'⏹ Stop':'▶️ Revise'}</button>
          <button className={`tb ${panel==='quiz'?'active':''}`} onClick={()=>panel==='quiz'?closePanel():setPanel('quiz')}>🧠</button>
          <button className={`tb ${panel==='notes'?'active':''}`} onClick={()=>panel==='notes'?closePanel():setPanel('notes')}>📝</button>
          <button className={`tb ${adding?'adding':''}`} onClick={()=>setAdding(!adding)}>{adding?'✕':'📌'}</button>
          <button className="tb" onClick={()=>setShowPdf(true)}>📥</button>
          <button className="tb" onClick={handleExport}>💾</button>
          <button className="ctrl-btn" onClick={toggleTheme} style={{padding:'4px 8px'}}>{theme==='dark'?'☀️':'🌙'}</button>
          <button className="ctrl-btn" onClick={()=>changeFontSize(-1)} style={{padding:'4px 6px'}}>A-</button>
          <button className="ctrl-btn" onClick={()=>changeFontSize(1)} style={{padding:'4px 6px'}}>A+</button>
        </div>
      </header>
      {adding && <div className="add-banner">Click anywhere on the map to add a new place</div>}
      {slideshow && <div className="slideshow-bar"><div className="slideshow-bar-fill" style={{width:slideProg+'%'}} /></div>}
      <div className="filters">
        {Object.entries(CAT).map(([k,v])=>{if(!counts[k])return null;const on=filters[k]&&(!dashFilter||dashFilter===k);return<button key={k} className={`chip ${on?'on':''}`} style={on?{background:v.color,borderColor:v.color}:{}} onClick={()=>{setDashFilter(null);setFilters(f=>({...f,[k]:!f[k]}))}}>{v.icon} {v.label} <span className="chip-ct">{counts[k]}</span></button>})}
      </div>
      <div className="map-area">
        <MapContainer center={center} zoom={zoom} zoomControl={false} style={{flex:1,minWidth:0}}>
          <TileLayer url={tileUrl} attribution="© OSM © CARTO" maxZoom={18} />
          <MapCtrl center={selected?[selected.lat,selected.lng]:center} zoom={selected?Math.max(zoom,7):zoom} />
          <MapClick active={adding} onAdd={(lat,lng)=>{setAdding(false);setAddCoords({lat,lng})}} />
          {filteredMarkers.map(m=><Marker key={m.id} position={[m.lat,m.lng]} icon={mkIcon(m.type,selected?.id===m.id)} eventHandlers={{click:()=>selectPlace(m)}} />)}
        </MapContainer>
        <div id="sp">
          {panel==='detail'&&selected && <DetailPanel marker={selected} onClose={closePanel} onDelete={id=>{setCustom(c=>c.filter(x=>x.id!==id));closePanel()}} slideshow={slideshow} onPrev={slidePrev} onNext={slideNext} />}
          {panel==='quiz' && <QuizPanel mode={mode} onClose={closePanel} />}
          {panel==='notes' && <NotesPanel notes={notes} onAdd={n=>setNotes(p=>[n,...p])} onDel={id=>setNotes(p=>p.filter(n=>n.id!==id))} onClose={closePanel} />}
        </div>
        <Dashboard allMarkers={allMarkers} counts={counts} visited={visited} dashFilter={dashFilter} onDashFilter={setDashFilter} onSelectPlace={selectPlace} onStartSlide={startSlide} />
      </div>
      <div className="stats">
        <span>📍 {filteredMarkers.length} shown</span>
        <span>✅ {[...visited].filter(id=>allMarkers.some(m=>m.id===id)).length} visited</span>
        <span>📌 {custom.length} custom</span>
        <span>📝 {notes.length} notes</span>
        {slideshow && <span>▶️ {slideIdx+1}/{filteredMarkers.length}</span>}
      </div>
      {addCoords && <AddModal lat={addCoords.lat} lng={addCoords.lng} onSave={m=>{setCustom(c=>[...c,m]);setAddCoords(null)}} onCancel={()=>setAddCoords(null)} />}
      {showPdf && <PdfModal mode={mode} allMarkers={allMarkers} onClose={()=>setShowPdf(false)} />}
    </div>
  )
}
