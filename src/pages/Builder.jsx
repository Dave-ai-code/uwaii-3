import { useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { Logo, Icon, Tag } from '../components/ui/index.jsx'
import { SparkLine } from '../components/charts/index.jsx'
import { LOB_CONFIG, LOB_IDS, ROLES } from '../data/lobData.js'
import { COUNTRY_LIST } from '../data/locationData.js'
import { travelData } from '../data/chartData.js'

const STEPS = [
  { n: 1, label: 'Lines of Business' },
  { n: 2, label: 'Geography' },
  { n: 3, label: 'Your Role' },
]

const REGION_ORDER = [
  { key: 'americas',        title: 'Americas' },
  { key: 'europe',          title: 'Europe' },
  { key: 'asiaPacific',     title: 'Asia Pacific' },
  { key: 'middleEastAfrica',title: 'Middle East & Africa' },
]

/* ============================================================
   STEP INDICATOR
   ============================================================ */
function StepDots({ current }) {
  return (
    <div className="row ac g6">
      {STEPS.map((s, i) => (
        <span key={s.n} className="row ac g6">
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            fontFamily: 'var(--mono)', fontSize: 11.5,
            color: current === s.n ? 'var(--brand-ink)' : current > s.n ? 'var(--down)' : 'var(--ink-4)',
          }}>
            <span style={{
              width: 22, height: 22, borderRadius: '50%', flexShrink: 0,
              background: current === s.n ? 'var(--brand)' : current > s.n ? 'var(--down)' : 'var(--line-strong)',
              color: current >= s.n ? '#fff' : 'var(--ink-4)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 10, fontWeight: 700,
            }}>
              {current > s.n ? '✓' : s.n}
            </span>
            <span style={{ display: 'inline' }}>{s.label}</span>
          </span>
          {i < STEPS.length - 1 && (
            <Icon name="chevron" size={12} style={{ color: 'var(--line-strong)', margin: '0 2px' }} />
          )}
        </span>
      ))}
    </div>
  )
}

/* ============================================================
   COUNTRY GROUP (geography selector row)
   ============================================================ */
function CountryGroup({ title, countries, selected, onToggle, maxReached }) {
  return (
    <div>
      <div style={{
        padding: '8px 14px 5px',
        fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.14em',
        textTransform: 'uppercase', color: 'var(--ink-4)',
        background: 'var(--surface-2)', borderBottom: '1px solid var(--line)',
        position: 'sticky', top: 0, zIndex: 2,
      }}>
        {title}
      </div>
      {countries.map(c => {
        const sel = selected.includes(c.code)
        const isGlobal = c.code === 'global'
        const disabled = !sel && maxReached && !isGlobal
        return (
          <div
            key={c.code}
            onClick={() => !disabled && onToggle(c.code)}
            style={{
              display: 'flex', alignItems: 'center', gap: 11,
              padding: '10px 14px', cursor: disabled ? 'default' : 'pointer',
              background: sel ? 'var(--brand-50)' : 'transparent',
              borderBottom: '1px solid var(--line)',
              opacity: disabled ? 0.38 : 1,
              transition: '.1s',
            }}
            onMouseEnter={e => { if (!disabled && !sel) e.currentTarget.style.background = 'var(--surface-3)' }}
            onMouseLeave={e => { e.currentTarget.style.background = sel ? 'var(--brand-50)' : 'transparent' }}
          >
            <span style={{ fontSize: 18, lineHeight: 1, flexShrink: 0 }}>{c.flag}</span>
            <span style={{
              flex: 1, fontSize: 14, fontWeight: sel ? 500 : 400,
              color: sel ? 'var(--brand-ink)' : 'var(--ink-2)',
            }}>
              {c.name}
              {isGlobal && <span className="muted" style={{ fontSize: 12, marginLeft: 6 }}>— all countries</span>}
            </span>
            {sel && <Icon name="check" size={14} style={{ color: 'var(--brand)', strokeWidth: 2.5, flexShrink: 0 }} />}
          </div>
        )
      })}
    </div>
  )
}

/* ============================================================
   LIVE PREVIEW PANEL
   ============================================================ */
function LivePreview({ selectedLobs, selectedCountries, selectedRole }) {
  const lobList = Array.from(selectedLobs)
  const isReady = lobList.length > 0 && selectedCountries.length > 0 && selectedRole !== null
  const sparkColor = lobList.includes('cyber') ? '#DB2777'
    : lobList.includes('property') ? '#D97706'
    : lobList.includes('marine') ? '#0891B2'
    : '#2A4DDB'

  const sampleHeadline = lobList.includes('cyber')
    ? 'CISA critical alert: Cisco IOS — 40,000+ devices exposed'
    : lobList.includes('property')
    ? 'NOAA upgrades 2025 hurricane season to Extremely Active'
    : lobList.includes('motor')
    ? 'Oil prices fall 12% on weaker China demand — WTI $68'
    : lobList.includes('marine')
    ? 'Red Sea disruptions continue week 18 — no resolution in sight'
    : lobList.includes('crop')
    ? 'USDA Drought Monitor: 47% of Corn Belt in severe drought'
    : lobList.includes('health')
    ? 'FDA approves third GLP-1 drug — first oral option'
    : lobList.includes('workerscomp')
    ? 'US construction employment hits 20-year high'
    : 'Live signals tailored to your book'

  const sampleTag = lobList.includes('cyber') ? 'ransomware freq ↑'
    : lobList.includes('property') ? 'CAT risk ↑'
    : 'freq ↑'

  return (
    <div className="card" style={{ padding: 18, position: 'sticky', top: 84 }}>
      <div className="row ac jb" style={{ marginBottom: 16 }}>
        <span className="eyebrow">Live preview</span>
        <span className="row ac g6 mono" style={{
          fontSize: 11,
          color: isReady ? 'var(--down)' : 'var(--brand)',
        }}>
          <span style={{
            width: 6, height: 6, borderRadius: '50%',
            background: isReady ? 'var(--down)' : 'var(--brand)',
          }} />
          {isReady ? 'ready' : 'assembling…'}
        </span>
      </div>

      {/* Selected LOBs */}
      <div style={{ marginBottom: 12 }}>
        <span className="mono" style={{ fontSize: 10, color: 'var(--ink-4)', letterSpacing: '.1em' }}>LINES</span>
        <div className="row wrap g6" style={{ marginTop: 6 }}>
          {lobList.length === 0
            ? <span className="chip dim" style={{ fontSize: 12 }}>Select lines →</span>
            : lobList.map(id => (
              <span key={id} className="chip brand" style={{ fontSize: 12, gap: 5 }}>
                {LOB_CONFIG[id].icon} {LOB_CONFIG[id].label}
              </span>
            ))}
        </div>
      </div>

      {/* Selected geographies */}
      <div style={{ marginBottom: 12 }}>
        <span className="mono" style={{ fontSize: 10, color: 'var(--ink-4)', letterSpacing: '.1em' }}>GEOGRAPHY</span>
        <div className="row wrap g6" style={{ marginTop: 6 }}>
          {selectedCountries.length === 0
            ? <span className="chip dim" style={{ fontSize: 12 }}>Select countries →</span>
            : selectedCountries.map(c => (
              <span key={c.code} className="chip" style={{ fontSize: 12, gap: 5 }}>
                {c.flag} {c.name}
              </span>
            ))}
        </div>
      </div>

      {/* Role */}
      <div style={{ marginBottom: 16 }}>
        <span className="mono" style={{ fontSize: 10, color: 'var(--ink-4)', letterSpacing: '.1em' }}>ROLE</span>
        <div style={{ marginTop: 6 }}>
          {selectedRole
            ? <span className="chip brand" style={{ fontSize: 12 }}>
                {ROLES.find(r => r.id === selectedRole)?.label}
              </span>
            : <span className="chip dim" style={{ fontSize: 12 }}>Select role →</span>}
        </div>
      </div>

      {/* Mini chart */}
      <div className="card flat" style={{ padding: '10px 12px', marginBottom: 10 }}>
        <div className="muted" style={{ fontSize: 11, marginBottom: 4 }}>
          {lobList.length > 0 ? `${LOB_CONFIG[lobList[0]].label} signal preview` : 'Signal preview'}
        </div>
        <SparkLine
          data={travelData.jetFuelVsAirfare.jetFuelIndex.slice(-12)}
          color={sparkColor}
          height={58}
        />
      </div>

      {/* Sample news item */}
      <div className="card flat" style={{ padding: '10px 12px', marginBottom: 12 }}>
        <span className="src" style={{ fontSize: 10.5 }}>
          {lobList.includes('cyber') ? 'CISA' : lobList.includes('property') ? 'NOAA' : 'Reuters'} · 2h
        </span>
        <p style={{ fontSize: 12.5, fontWeight: 500, margin: '3px 0 6px', lineHeight: 1.3 }}>
          {sampleHeadline}
        </p>
        <div className="row g6">
          <Tag dir="up">{sampleTag}</Tag>
          <Tag dir="down">exposure ↓</Tag>
        </div>
      </div>

      {/* Ready indicator */}
      {isReady && (
        <div style={{
          padding: '10px 14px', background: 'var(--down-bg)',
          border: '1px solid var(--down-line)', borderRadius: 'var(--r)',
          fontSize: 13, color: 'var(--down)', fontWeight: 500,
          display: 'flex', alignItems: 'center', gap: 8,
        }}>
          <Icon name="check" size={15} style={{ strokeWidth: 2.5 }} />
          Dashboard ready — click Generate
        </div>
      )}

      <p className="muted" style={{ fontSize: 11.5, marginTop: 12, textAlign: 'center', lineHeight: 1.4 }}>
        Your dashboard builds as you choose.
      </p>
    </div>
  )
}

/* ============================================================
   MAIN BUILDER PAGE
   ============================================================ */
export default function Builder() {
  const navigate = useNavigate()
  const [step, setStep] = useState(1)
  const [selectedLobs, setSelectedLobs] = useState(new Set())
  const [selectedCountryCodes, setSelectedCountryCodes] = useState([]) // array of country code strings
  const [selectedRole, setSelectedRole] = useState(null)
  const [geoSearch, setGeoSearch] = useState('')

  /* ---- LOB toggle ---- */
  const toggleLob = (id) => {
    setSelectedLobs(prev => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  /* ---- Country toggle (max 5, Global special case) ---- */
  const toggleCountry = (code) => {
    if (code === 'global') {
      setSelectedCountryCodes(prev =>
        prev.includes('global') ? [] : ['global']
      )
      return
    }
    setSelectedCountryCodes(prev => {
      const withoutGlobal = prev.filter(c => c !== 'global')
      if (withoutGlobal.includes(code)) return withoutGlobal.filter(c => c !== code)
      if (withoutGlobal.length >= 5) return withoutGlobal
      return [...withoutGlobal, code]
    })
  }

  const removeCountry = (code) => {
    setSelectedCountryCodes(prev => prev.filter(c => c !== code))
  }

  /* ---- Filtered / grouped countries for search ---- */
  const filteredCountries = useMemo(() => {
    const q = geoSearch.toLowerCase()
    if (!q) return COUNTRY_LIST
    return COUNTRY_LIST.filter(c =>
      c.code === 'global' || c.name.toLowerCase().includes(q)
    )
  }, [geoSearch])

  const grouped = useMemo(() => {
    const global = filteredCountries.filter(c => c.code === 'global')
    const byRegion = {}
    REGION_ORDER.forEach(r => {
      byRegion[r.key] = filteredCountries.filter(c => c.region === r.key)
    })
    return { global, ...byRegion }
  }, [filteredCountries])

  /* ---- Selected country objects for display ---- */
  const selectedCountryObjs = useMemo(() =>
    selectedCountryCodes
      .map(code => COUNTRY_LIST.find(c => c.code === code))
      .filter(Boolean),
    [selectedCountryCodes]
  )

  const nonGlobalCount = selectedCountryCodes.filter(c => c !== 'global').length
  const maxReached = nonGlobalCount >= 5 && !selectedCountryCodes.includes('global')

  /* ---- Step validation ---- */
  const canNext = {
    1: selectedLobs.size > 0,
    2: selectedCountryCodes.length > 0,
    3: selectedRole !== null,
  }

  /* ---- Generate ---- */
  const handleGenerate = () => {
    localStorage.setItem('uwaii_selections', JSON.stringify({
      lobs: Array.from(selectedLobs),
      countries: selectedCountryCodes,
      role: selectedRole,
    }))
    navigate('/dashboard')
  }

  /* ---- Step heading text ---- */
  const headings = {
    1: { title: 'Which lines do you underwrite?', sub: 'Select all lines you want to monitor. You can change these any time.' },
    2: { title: 'Where is your exposure?', sub: 'Select up to 5 countries. Your dashboard shows data in local currency and context.' },
    3: { title: "What's your role?", sub: 'Your signals will be ranked by what matters most to your perspective.' },
  }

  return (
    <div style={{ background: 'var(--bg)', minHeight: '100vh' }}>

      {/* ---- Top bar ---- */}
      <div className="row ac jb" style={{
        height: 62, borderBottom: '1px solid var(--line)', background: 'var(--surface)',
        padding: '0 28px', position: 'sticky', top: 0, zIndex: 20,
        boxShadow: 'var(--sh-1)',
      }}>
        <span className="row ac g12">
          <Logo />
          <span className="vrule" style={{ height: 22 }} />
          <span className="muted2" style={{ fontWeight: 500, fontSize: 14 }}>New dashboard</span>
        </span>

        <StepDots current={step} />

        <span className="row ac g10">
          <span className="mono muted" style={{ fontSize: 11, letterSpacing: '.06em' }}>
            STEP {step} OF 3
          </span>
          <button className="btn btn-ghost btn-sm" onClick={() => navigate('/')}>Cancel</button>
        </span>
      </div>

      {/* ---- Main content ---- */}
      <div className="page" style={{ maxWidth: 1100 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: 28, alignItems: 'start' }}>

          {/* ---- Left: current step ---- */}
          <div className="rise">
            {/* Step heading */}
            <div className="col g4" style={{ marginBottom: 26 }}>
              <span className="mono" style={{ fontSize: 11, color: 'var(--brand)', letterSpacing: '.12em' }}>
                STEP {step} OF 3 — {STEPS[step - 1].label.toUpperCase()}
              </span>
              <h1 className="serif" style={{ fontSize: 30, fontWeight: 500, lineHeight: 1.15 }}>
                {headings[step].title}
              </h1>
              <p className="muted2" style={{ fontSize: 15, lineHeight: 1.5, maxWidth: 520 }}>
                {headings[step].sub}
              </p>
            </div>

            {/* =========================================
                STEP 1 — Lines of Business
                ========================================= */}
            {step === 1 && (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 12 }}>
                {LOB_IDS.map(id => {
                  const lob = LOB_CONFIG[id]
                  const sel = selectedLobs.has(id)
                  return (
                    <div
                      key={id}
                      onClick={() => toggleLob(id)}
                      style={{
                        display: 'flex', alignItems: 'flex-start', gap: 14,
                        padding: '16px 18px',
                        background: sel ? 'var(--brand-50)' : 'var(--surface)',
                        border: `1px solid ${sel ? 'var(--brand-100)' : 'var(--line)'}`,
                        borderRadius: 'var(--r-lg)',
                        boxShadow: sel ? '0 0 0 1.5px var(--brand)' : 'var(--sh-1)',
                        cursor: 'pointer',
                        transition: '.14s',
                        userSelect: 'none',
                      }}
                    >
                      {/* Icon box */}
                      <span style={{
                        width: 42, height: 42, borderRadius: 10, flexShrink: 0,
                        background: sel ? 'var(--brand-100)' : 'var(--bg)',
                        border: `1px solid ${sel ? 'var(--brand-100)' : 'var(--line-strong)'}`,
                        color: sel ? 'var(--brand)' : 'var(--ink-3)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        transition: '.14s',
                      }}>
                        <Icon name={id} size={21} sw={1.6} />
                      </span>

                      {/* Text */}
                      <div className="col grow" style={{ minWidth: 0, gap: 3, paddingTop: 2 }}>
                        <span style={{
                          fontWeight: 600, fontSize: 14.5,
                          color: sel ? 'var(--brand-ink)' : 'var(--ink)',
                        }}>
                          {lob.label}
                        </span>
                        <span style={{
                          fontSize: 12.5, color: 'var(--ink-3)',
                          lineHeight: 1.35,
                        }}>
                          {lob.description}
                        </span>
                      </div>

                      {/* Checkbox */}
                      <span style={{
                        width: 20, height: 20, borderRadius: '50%', flexShrink: 0,
                        marginTop: 2,
                        border: `2px solid ${sel ? 'var(--brand)' : 'var(--line-strong)'}`,
                        background: sel ? 'var(--brand)' : 'transparent',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        transition: '.14s',
                      }}>
                        {sel && (
                          <Icon name="check" size={11} style={{ color: '#fff', strokeWidth: 3 }} />
                        )}
                      </span>
                    </div>
                  )
                })}
              </div>
            )}

            {/* =========================================
                STEP 2 — Geography
                ========================================= */}
            {step === 2 && (
              <div className="col g16">
                {/* Search box */}
                <div style={{ position: 'relative' }}>
                  <Icon name="search" size={15} style={{
                    position: 'absolute', left: 12, top: '50%',
                    transform: 'translateY(-50%)', color: 'var(--ink-4)',
                    pointerEvents: 'none',
                  }} />
                  <input
                    type="text"
                    placeholder="Search countries…"
                    value={geoSearch}
                    onChange={e => setGeoSearch(e.target.value)}
                    autoFocus
                    style={{
                      width: '100%',
                      padding: '10px 12px 10px 38px',
                      border: '1px solid var(--line-strong)',
                      borderRadius: 'var(--r)',
                      fontFamily: 'var(--sans)', fontSize: 14,
                      color: 'var(--ink)', background: 'var(--surface)',
                      outline: 'none',
                      boxShadow: 'var(--sh-1)',
                    }}
                    onFocus={e => { e.target.style.borderColor = 'var(--brand)' }}
                    onBlur={e => { e.target.style.borderColor = 'var(--line-strong)' }}
                  />
                  {geoSearch && (
                    <button
                      onClick={() => setGeoSearch('')}
                      style={{
                        position: 'absolute', right: 10, top: '50%',
                        transform: 'translateY(-50%)',
                        background: 'none', border: 'none', cursor: 'pointer',
                        color: 'var(--ink-4)', padding: 4,
                      }}
                    >
                      <Icon name="close" size={14} />
                    </button>
                  )}
                </div>

                {/* Country list */}
                <div className="card" style={{ overflow: 'hidden', maxHeight: 360, overflowY: 'auto' }}>
                  {grouped.global.length > 0 && (
                    <CountryGroup
                      title="Global"
                      countries={grouped.global}
                      selected={selectedCountryCodes}
                      onToggle={toggleCountry}
                      maxReached={false}
                    />
                  )}
                  {REGION_ORDER.map(r => (
                    grouped[r.key]?.length > 0 && (
                      <CountryGroup
                        key={r.key}
                        title={r.title}
                        countries={grouped[r.key]}
                        selected={selectedCountryCodes}
                        onToggle={toggleCountry}
                        maxReached={maxReached}
                      />
                    )
                  ))}
                  {filteredCountries.length <= 1 && geoSearch && (
                    <div className="muted" style={{ padding: '20px', textAlign: 'center', fontSize: 14 }}>
                      No countries match "{geoSearch}"
                    </div>
                  )}
                </div>

                {/* Max warning */}
                {maxReached && (
                  <div className="row ac g8" style={{
                    padding: '10px 14px',
                    background: 'var(--warn-bg)',
                    border: '1px solid #e8d5a3',
                    borderRadius: 'var(--r)',
                    fontSize: 13, color: 'var(--warn)',
                  }}>
                    <Icon name="alert" size={15} />
                    Maximum 5 countries selected. Remove one to add another.
                  </div>
                )}

                {/* Selected tags */}
                {selectedCountryCodes.length > 0 && (
                  <div>
                    <span className="mono" style={{ fontSize: 10.5, color: 'var(--ink-4)', letterSpacing: '.1em' }}>
                      SELECTED — {selectedCountryCodes.includes('global')
                        ? 'Global (all countries)'
                        : `${nonGlobalCount} of 5`}
                    </span>
                    <div className="row wrap g8" style={{ marginTop: 8 }}>
                      {selectedCountryObjs.map(c => (
                        <span key={c.code} className="chip brand" style={{ paddingRight: 8, gap: 6 }}>
                          <span style={{ fontSize: 15 }}>{c.flag}</span>
                          <span>{c.name}</span>
                          <span
                            role="button"
                            onClick={() => removeCountry(c.code)}
                            style={{
                              cursor: 'pointer', opacity: 0.65,
                              display: 'flex', alignItems: 'center',
                            }}
                          >
                            <Icon name="close" size={12} />
                          </span>
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* =========================================
                STEP 3 — Role
                ========================================= */}
            {step === 3 && (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 12 }}>
                {ROLES.map(r => {
                  const sel = selectedRole === r.id
                  return (
                    <div
                      key={r.id}
                      onClick={() => setSelectedRole(r.id)}
                      style={{
                        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                        padding: '16px 20px',
                        background: sel ? 'var(--brand-50)' : 'var(--surface)',
                        border: `1px solid ${sel ? 'var(--brand-100)' : 'var(--line)'}`,
                        borderRadius: 'var(--r-lg)',
                        boxShadow: sel ? '0 0 0 1.5px var(--brand)' : 'var(--sh-1)',
                        cursor: 'pointer',
                        transition: '.14s',
                        userSelect: 'none',
                      }}
                    >
                      <span style={{
                        fontWeight: sel ? 600 : 500, fontSize: 15,
                        color: sel ? 'var(--brand-ink)' : 'var(--ink-2)',
                      }}>
                        {r.label}
                      </span>
                      {/* Radio dot */}
                      <span style={{
                        width: 18, height: 18, borderRadius: '50%', flexShrink: 0,
                        border: `2px solid ${sel ? 'var(--brand)' : 'var(--line-strong)'}`,
                        background: sel ? 'var(--brand)' : 'transparent',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        transition: '.14s',
                      }}>
                        {sel && (
                          <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#fff' }} />
                        )}
                      </span>
                    </div>
                  )
                })}
              </div>
            )}

            {/* ---- Navigation buttons ---- */}
            <div className="row ac g12" style={{ marginTop: 28 }}>
              {step > 1 && (
                <button
                  className="btn btn-lg"
                  onClick={() => setStep(s => s - 1)}
                >
                  <Icon name="chevron" size={15} style={{ transform: 'rotate(180deg)' }} />
                  Back
                </button>
              )}

              {step < 3 ? (
                <button
                  className="btn btn-primary btn-lg"
                  disabled={!canNext[step]}
                  onClick={() => canNext[step] && setStep(s => s + 1)}
                  style={{
                    opacity: canNext[step] ? 1 : 0.45,
                    cursor: canNext[step] ? 'pointer' : 'not-allowed',
                  }}
                >
                  {step === 1 ? 'Next: Geography' : 'Next: Your Role'}
                  <Icon name="arrow" size={16} />
                </button>
              ) : (
                <button
                  className="btn btn-primary btn-lg"
                  disabled={!canNext[3]}
                  onClick={() => canNext[3] && handleGenerate()}
                  style={{
                    opacity: canNext[3] ? 1 : 0.45,
                    cursor: canNext[3] ? 'pointer' : 'not-allowed',
                    fontSize: 15,
                  }}
                >
                  Generate My Dashboard
                  <Icon name="arrow" size={16} />
                </button>
              )}

              {/* Hint text */}
              {step === 1 && selectedLobs.size === 0 && (
                <span className="muted" style={{ fontSize: 13 }}>Select at least one line to continue</span>
              )}
              {step === 2 && selectedCountryCodes.length === 0 && (
                <span className="muted" style={{ fontSize: 13 }}>Select at least one geography</span>
              )}
              {step === 3 && !selectedRole && (
                <span className="muted" style={{ fontSize: 13 }}>Select your role to generate</span>
              )}
            </div>
          </div>

          {/* ---- Right: Live preview (sticky) ---- */}
          <LivePreview
            selectedLobs={selectedLobs}
            selectedCountries={selectedCountryObjs}
            selectedRole={selectedRole}
          />
        </div>
      </div>
    </div>
  )
}
