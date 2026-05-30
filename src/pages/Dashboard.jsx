import { useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { Logo, Icon, RiskBadge } from '../components/ui'
import { LOB_CONFIG } from '../data/lobData'
import { getOverallRiskTemp } from '../data/marketConditions'
import { getCountryData } from '../data/locationData'
import Overview from './dashboard/Overview'
import LobTab from './dashboard/LobTab'
import NewsPage from './dashboard/NewsPage'

function getSelections() {
  try { return JSON.parse(localStorage.getItem('uwaii_selections') || '{}') }
  catch { return {} }
}

export default function Dashboard() {
  const navigate = useNavigate()

  const selections = useMemo(getSelections, [])
  const selectedLobs     = selections.lobs?.length     ? selections.lobs     : ['motor', 'travel', 'cyber']
  const selectedCountries = selections.countries?.length ? selections.countries : ['us']
  const selectedRole     = selections.role              || 'underwriter'

  const [activeTab,     setActiveTab]     = useState('overview')
  const [activeCountry, setActiveCountry] = useState(selectedCountries[0] || 'us')

  const riskLevel      = getOverallRiskTemp(selectedLobs)
  const countryData    = getCountryData(activeCountry)

  const pageTitle = activeTab === 'overview'
    ? 'Overview'
    : activeTab === 'signals'
    ? 'Market Signals'
    : LOB_CONFIG[activeTab]?.label ?? 'Dashboard'

  const now     = new Date()
  const timeStr = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false })

  return (
    <div className="app">
      {/* ============================  SIDEBAR  ============================ */}
      <aside className="side">
        <div style={{ marginBottom: 10 }}>
          <Logo />
        </div>

        <div
          className={`navitem${activeTab === 'overview' ? ' on' : ''}`}
          onClick={() => setActiveTab('overview')}
        >
          <Icon name="overview" size={16} sw={1.8} cls="ic" />
          Overview
        </div>

        <div
          className={`navitem${activeTab === 'signals' ? ' on' : ''}`}
          onClick={() => setActiveTab('signals')}
        >
          <Icon name="news" size={16} sw={1.8} cls="ic" />
          Signals
        </div>

        <div className="sec">Your Lines</div>

        {selectedLobs.map(lobId => {
          const lob = LOB_CONFIG[lobId]
          if (!lob) return null
          return (
            <div
              key={lobId}
              className={`navitem${activeTab === lobId ? ' on' : ''}`}
              onClick={() => setActiveTab(lobId)}
            >
              <Icon name={lobId} size={16} sw={1.8} cls="ic" />
              {lob.label}
            </div>
          )
        })}

        <div style={{ flex: 1 }} />

        <div className="sec">Account</div>
        <div className="navitem">
          <Icon name="settings" size={16} sw={1.8} cls="ic" />
          Settings
        </div>
        <div className="navitem" onClick={() => navigate('/builder')}>
          <Icon name="reconfigure" size={16} sw={1.8} cls="ic" />
          Reconfigure
        </div>
      </aside>

      {/* ============================  MAIN  ============================ */}
      <div style={{ display: 'flex', flexDirection: 'column', minWidth: 0, height: '100vh', overflowY: 'auto' }}>

        {/* ----  TOP BAR  ---- */}
        <header className="topbar">
          {/* Title */}
          <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: 12 }}>
            <h1 style={{
              fontFamily: 'var(--serif)', fontSize: 19, fontWeight: 600,
              letterSpacing: '-.02em', margin: 0,
            }}>
              {pageTitle}
            </h1>
            <RiskBadge level={riskLevel} />
          </div>

          {/* Country switcher — tabs if ≤3, dropdown if >3 */}
          {selectedCountries.length <= 3 ? (
            <div className="row ac g6">
              {selectedCountries.map(code => {
                const c = getCountryData(code)
                return (
                  <button
                    key={code}
                    className={`btn btn-sm${activeCountry === code ? ' btn-primary' : ''}`}
                    style={{ gap: 6, fontWeight: activeCountry === code ? 600 : 500 }}
                    onClick={() => setActiveCountry(code)}
                  >
                    <span style={{ fontSize: 15 }}>{c.flag}</span>
                    <span>{c.name}</span>
                  </button>
                )
              })}
            </div>
          ) : (
            <select
              className="btn btn-sm"
              value={activeCountry}
              onChange={e => setActiveCountry(e.target.value)}
              style={{ fontFamily: 'var(--sans)', paddingRight: 28 }}
            >
              {selectedCountries.map(code => {
                const c = getCountryData(code)
                return <option key={code} value={code}>{c.flag} {c.name}</option>
              })}
            </select>
          )}

          <span style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--ink-4)', whiteSpace: 'nowrap' }}>
            Updated {timeStr}
          </span>
        </header>

        {/* ----  PAGE CONTENT  ---- */}
        <main className="page">
          {activeTab === 'overview' ? (
            <Overview
              selectedLobs={selectedLobs}
              selectedCountries={selectedCountries}
              activeCountry={activeCountry}
              role={selectedRole}
            />
          ) : activeTab === 'signals' ? (
            <NewsPage selectedLobs={selectedLobs} />
          ) : (
            <LobTab
              lob={activeTab}
              country={activeCountry}
              role={selectedRole}
            />
          )}
        </main>
      </div>
    </div>
  )
}
