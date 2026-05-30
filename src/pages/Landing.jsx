import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { Logo, Icon, Tag, Insight, Confidence, Source } from '../components/ui/index.jsx'
import { SparkLine } from '../components/charts/index.jsx'
import { travelData, motorData, cyberData, propertyData, marineData, cropData, healthData, workersCompData } from '../data/chartData.js'

/* ---- Rotating insight definitions ---- */
const INSIGHTS = [
  {
    lob: 'Travel', country: 'US', time: '2h ago',
    headline: <>Middle-East tension pushes jet&nbsp;fuel <span style={{ color: 'var(--up)' }}>+8%</span> this week</>,
    spark: travelData.jetFuelVsAirfare.jetFuelIndex.slice(-12),
    sparkColor: '#C0362F',
    tags: [['up','trip-cost'],['up','cancel freq'],['down','travel demand']],
    insight: 'Higher airfares dampen US outbound trips, lowering exposure, but raise per-trip cancellation costs. Watch advisory levels on affected routes.',
    confidence: 'High', sources: ['Reuters','EIA','State Dept'],
  },
  {
    lob: 'Motor', country: 'US', time: '3h ago',
    headline: <>WTI crude at <span style={{ color: 'var(--down)' }}>$68/barrel</span> — 90-day frequency signal</>,
    spark: motorData.fuelVsFrequency.fuelPrice.slice(-12),
    sparkColor: '#2A4DDB',
    tags: [['down','fuel cost'],['up','miles driven'],['up','claim freq']],
    insight: 'Gas prices follow crude in 2–3 weeks. Miles driven expected +3–4% by Q3 — lagged frequency uptick likely within 90 days. Review Q3 loss projections.',
    confidence: 'High', sources: ['EIA','FHWA','BLS'],
  },
  {
    lob: 'Cyber', country: 'Global', time: '1h ago',
    headline: <>CISA: <span style={{ color: 'var(--up)' }}>12 critical</span> active vulnerability alerts — ransomware risk elevated</>,
    spark: [2468,2484,2502,2522,2544,2568,2594,2622,2652,2684,2718,2847],
    sparkColor: '#C0362F',
    tags: [['up','ransomware freq'],['up','severity'],['watch','manufacturing']],
    insight: 'Critical CVEs typically weaponised in 14–21 days. Manufacturing and healthcare are most exposed this cycle. Underwriters should flag vulnerable-industry concentrations.',
    confidence: 'High', sources: ['CISA','Mandiant'],
  },
  {
    lob: 'Property', country: 'US', time: '5h ago',
    headline: <>NOAA: 2025 Atlantic hurricane season forecast <span style={{ color: 'var(--up)' }}>extremely active</span></>,
    spark: propertyData.catLossesAnnual.lossesB.slice(-12),
    sparkColor: '#C0362F',
    tags: [['up','CAT frequency'],['up','Gulf Coast acc'],['watch','ITV adequacy']],
    insight: '17–25 named storms forecast. Construction costs up 42% since 2019 — ITV adequacy gap has widened significantly. Gulf Coast accumulations need urgent review.',
    confidence: 'High', sources: ['NOAA','Swiss Re'],
  },
  {
    lob: 'Marine', country: 'Global', time: '4h ago',
    headline: <>Red Sea at <span style={{ color: 'var(--up)' }}>34% normal</span> volume — Cape diversion week 18</>,
    spark: marineData.redSeaTraffic.volumeNormal,
    sparkColor: '#C0362F',
    tags: [['up','spoilage claims'],['up','war risk prem'],['up','voyage ext']],
    insight: '67% of container traffic still diverting via Cape of Good Hope, adding 14 days. Spoilage and delay claims persisting. War risk premiums up 87% since Q4 2023.',
    confidence: 'High', sources: ['Drewry','Lloyd\'s','IMO'],
  },
  {
    lob: 'Crop', country: 'US', time: '6h ago',
    headline: <>USDA: <span style={{ color: 'var(--up)' }}>47%</span> of US Corn Belt in severe drought</>,
    spark: cropData.droughtCoverage.droughtPct.slice(-12),
    sparkColor: '#E5A020',
    tags: [['up','yield deviation'],['up','indemnity risk'],['watch','Q3 pricing']],
    insight: 'Corn conditions deteriorating. Indemnity pressure building for Q3. Commodity price volatility elevated — wheat prices sensitive to any Ukraine corridor disruption.',
    confidence: 'Medium', sources: ['USDA','NOAA Drought Monitor'],
  },
  {
    lob: 'Health', country: 'US', time: '8h ago',
    headline: <>GLP-1 prescriptions up <span style={{ color: 'var(--down)' }}>+387%</span> YoY — first obesity decline since 2010</>,
    spark: healthData.glp1Prescriptions.indexVol,
    sparkColor: '#1E8A3C',
    tags: [['down','long-term morbidity'],['up','drug cost'],['watch','benefit design']],
    insight: 'Short-term: specialty drug cost pressure significant. Long-term: first sustained obesity decline creates meaningful life/health morbidity improvement signal for pricing.',
    confidence: 'High', sources: ['FDA','CMS','IQVIA'],
  },
  {
    lob: 'Workers Comp', country: 'US', time: '7h ago',
    headline: <>US construction employment hits <span style={{ color: 'var(--up)' }}>20-year high</span> — exposure growing</>,
    spark: workersCompData.employmentBySector.construction.map(v => v * 10),
    sparkColor: '#E5A020',
    tags: [['up','frequency exposure'],['up','severity'],['watch','claims volume']],
    insight: 'Highest-risk WC class growing fastest. Medical CPI at +6.8% YoY already pressuring severity above plan. Construction frequency correlates strongly with activity level.',
    confidence: 'High', sources: ['BLS','OSHA'],
  },
]

/* ============================================================
   Live Insight Card — rotating carousel
   ============================================================ */
function LiveInsightCard() {
  const [idx, setIdx] = useState(0)
  const [visible, setVisible] = useState(true)
  const timerRef = useRef(null)
  const pausedRef = useRef(false)

  function goTo(next) {
    setVisible(false)
    setTimeout(() => {
      setIdx(next)
      setVisible(true)
    }, 220)
  }

  function startTimer() {
    timerRef.current = setInterval(() => {
      if (!pausedRef.current) {
        goTo((idx + 1 + INSIGHTS.length) % INSIGHTS.length)
      }
    }, 5000)
  }

  useEffect(() => {
    timerRef.current = setInterval(() => {
      if (!pausedRef.current) {
        setVisible(false)
        setTimeout(() => {
          setIdx(prev => {
            const next = (prev + 1) % INSIGHTS.length
            return next
          })
          setVisible(true)
        }, 220)
      }
    }, 5000)
    return () => clearInterval(timerRef.current)
  }, [])

  const ins = INSIGHTS[idx]

  function prev() {
    clearInterval(timerRef.current)
    goTo((idx - 1 + INSIGHTS.length) % INSIGHTS.length)
  }
  function next() {
    clearInterval(timerRef.current)
    goTo((idx + 1) % INSIGHTS.length)
  }

  return (
    <div
      className="lp-hero-card rise d2"
      style={{ padding: 20, width: '100%' }}
      onMouseEnter={() => { pausedRef.current = true }}
      onMouseLeave={() => { pausedRef.current = false }}
    >
      {/* Header row */}
      <div className="row ac jb" style={{ marginBottom: 12 }}>
        <span className="row ac g8">
          <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--up)', boxShadow: '0 0 0 3px var(--up-bg)', flexShrink: 0 }} />
          <span className="eyebrow" style={{ color: 'var(--ink-2)' }}>Live insight</span>
        </span>
        <span className="src">{ins.lob} · {ins.country} <span className="dot" /> {ins.time}</span>
      </div>

      {/* Animated content */}
      <div style={{ opacity: visible ? 1 : 0, transition: 'opacity 0.2s ease' }}>
        <h3 className="serif" style={{ fontSize: 21, lineHeight: 1.18, fontWeight: 500, marginBottom: 12, minHeight: 52 }}>
          {ins.headline}
        </h3>

        <div className="row wrap g6" style={{ marginBottom: 14 }}>
          {ins.tags.map(([dir, label]) => <Tag key={label} dir={dir}>{label}</Tag>)}
        </div>

        <div className="card flat q" style={{ padding: '8px 12px', marginBottom: 14 }}>
          <SparkLine data={ins.spark} color={ins.sparkColor} height={44} />
        </div>

        <Insight>{ins.insight}</Insight>

        <div className="row ac jb" style={{ marginTop: 14 }}>
          <Confidence level={ins.confidence} />
          <Source items={ins.sources} />
        </div>
      </div>

      {/* Navigation */}
      <div className="row ac jb" style={{ marginTop: 16 }}>
        <div className="row ac g6">
          {INSIGHTS.map((_, i) => (
            <button
              key={i}
              onClick={() => { clearInterval(timerRef.current); goTo(i) }}
              style={{
                width: i === idx ? 18 : 6, height: 6,
                borderRadius: 3, border: 'none', padding: 0, cursor: 'pointer',
                background: i === idx ? 'var(--brand)' : 'var(--line-strong)',
                transition: 'width 0.25s, background 0.2s',
              }}
            />
          ))}
        </div>
        <div className="row ac g8">
          <button
            onClick={prev}
            style={{ width: 28, height: 28, borderRadius: 6, border: '1px solid var(--line)', background: 'var(--surface)', cursor: 'pointer', display:'flex', alignItems:'center', justifyContent:'center' }}
          >
            <Icon name="chevLeft" size={13} />
          </button>
          <button
            onClick={next}
            style={{ width: 28, height: 28, borderRadius: 6, border: '1px solid var(--line)', background: 'var(--surface)', cursor: 'pointer', display:'flex', alignItems:'center', justifyContent:'center' }}
          >
            <Icon name="chevron" size={13} />
          </button>
        </div>
      </div>
    </div>
  )
}

/* ============================================================
   Mini Dashboard Preview
   ============================================================ */
function MiniDashboard() {
  return (
    <div className="card" style={{ overflow: 'hidden', boxShadow: 'var(--sh-3)' }}>
      {/* Header */}
      <div className="row ac jb" style={{
        padding: '13px 18px', borderBottom: '1px solid var(--line)', background: 'var(--surface-2)',
      }}>
        <span className="row ac g10">
          <Logo size={15} />
          <span className="muted" style={{ fontSize: 13 }}>/ Travel · US</span>
        </span>
        <span className="chip" style={{ fontSize: 12 }}>
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--up)', marginRight: 4 }} />
          Impact: Elevated
        </span>
      </div>

      <div className="row" style={{ gap: 0 }}>
        {/* Main panel */}
        <div className="col grow" style={{ padding: 18, gap: 14, minWidth: 0 }}>
          {/* 3 mini stat tiles */}
          <div className="row g12" style={{ flexWrap: 'wrap' }}>
            {[
              { k: 'Trip-cancel freq', v: '5.0', unit: '/1k', tag: 'up', delta: '+6.4%' },
              { k: 'Med severity', v: '$2,480', tag: 'up', delta: '+4.1%' },
              { k: 'Exposure (GWP)', v: '104', tag: 'down', delta: '−2.8%' },
            ].map(s => (
              <div key={s.k} className="grow" style={{ minWidth: 110 }}>
                <div className="card flat" style={{ padding: '10px 12px' }}>
                  <div className="muted" style={{ fontSize: 11, marginBottom: 4 }}>{s.k}</div>
                  <div className="mono" style={{ fontSize: 18, fontWeight: 500 }}>
                    {s.v}
                    {s.unit && <span style={{ fontSize: 11 }} className="muted"> {s.unit}</span>}
                  </div>
                  <div style={{ marginTop: 4 }}><Tag dir={s.tag}>{s.delta}</Tag></div>
                </div>
              </div>
            ))}
          </div>

          {/* Mini chart */}
          <div className="card flat" style={{ padding: 16 }}>
            <div className="row ac jb" style={{ marginBottom: 6 }}>
              <span style={{ fontWeight: 600, fontSize: 14 }}>Trip-cancellation frequency</span>
              <Tag dir="up">+6.4%</Tag>
            </div>
            <SparkLine data={travelData.jetFuelVsAirfare.jetFuelIndex} color="#2A4DDB" height={80} />
          </div>
        </div>

        {/* Right news rail */}
        <div className="col" style={{
          width: 240, borderLeft: '1px solid var(--line)',
          padding: 16, gap: 10, background: 'var(--surface-2)', flexShrink: 0,
        }}>
          <span className="eyebrow">Live news</span>
          {[
            { src: 'Reuters', time: '2h', head: 'Hormuz disruption widens — jet fuel +8%', tags: [['up', 'trip-cost'], ['up', 'freq']] },
            { src: 'NOAA', time: '4h', head: 'Gulf storm Cat 2 watch for Florida in 5 days', tags: [['up', 'cancel freq']] },
          ].map((n, i) => (
            <div key={i} className="card flat" style={{ padding: 12 }}>
              <span className="src" style={{ fontSize: 11 }}>{n.src} · {n.time}</span>
              <p style={{ fontSize: 13, fontWeight: 500, margin: '4px 0 8px', lineHeight: 1.25 }}>{n.head}</p>
              <div className="row g6">
                {n.tags.slice(0, 2).map((t, j) => <Tag key={j} dir={t[0]}>{t[1]}</Tag>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ============================================================
   Landing Page
   ============================================================ */
export default function Landing() {
  const navigate = useNavigate()

  return (
    <div style={{ background: 'var(--bg)' }}>

      {/* ---- Navigation ---- */}
      <div style={{ borderBottom: '1px solid var(--line)', background: 'var(--surface)' }}>
        <div className="lp-nav">
          <Logo />
          <span className="grow" />
          <div className="row ac g24" style={{ marginRight: 8 }}>
            {['Product', 'Signals', 'About'].map(l => (
              <span key={l} className="muted2" style={{ fontWeight: 500, fontSize: 14, cursor: 'pointer' }}>{l}</span>
            ))}
          </div>
          <button className="btn btn-ghost" onClick={() => navigate('/dashboard')}>Sign in</button>
          <button className="btn btn-primary" onClick={() => navigate('/builder')}>Get started</button>
        </div>
      </div>

      {/* ---- Hero ---- */}
      <div className="dotgrid" style={{ borderBottom: '1px solid var(--line)' }}>
        <div className="lp-section" style={{
          display: 'grid', gridTemplateColumns: '1.05fr .95fr', gap: 54,
          alignItems: 'center', padding: '62px 32px',
        }}>
          <div className="rise d1">
            <span className="kicker">
              <span style={{ fontFamily: 'var(--mono)' }}>UW</span>
              · Underwriting AI Intelligence
            </span>
            <h1 className="serif" style={{
              fontSize: 56, lineHeight: 1.03, fontWeight: 500,
              letterSpacing: '-.02em', margin: '20px 0 18px',
            }}>
              Most insurers look{' '}
              <span style={{ fontStyle: 'italic', color: 'var(--ink-3)' }}>inward.</span>
              <br />
              The real risk is{' '}
              <span style={{ color: 'var(--brand)' }}>outside.</span>
            </h1>
            <p style={{ fontSize: 18, lineHeight: 1.55, color: 'var(--ink-2)', maxWidth: 460, marginBottom: 26 }}>
              UWAII connects your portfolio to live public data and world news, then tells you —
              in plain English — how today's events move frequency, severity and exposure on your book.
            </p>
            <div className="row ac g14" style={{ gap: 14 }}>
              <button className="btn btn-primary btn-lg" onClick={() => navigate('/builder')}>
                Build My Dashboard <Icon name="arrow" size={17} />
              </button>
              <span className="muted" style={{ fontSize: 14 }}>No internal data needed to start</span>
            </div>
          </div>
          <LiveInsightCard />
        </div>
      </div>

      {/* ---- Problem ---- */}
      <div style={{ background: 'var(--surface-2)', borderBottom: '1px solid var(--line)' }}>
        <div className="lp-section" style={{ padding: '52px 32px' }}>
          <div className="col ac" style={{ textAlign: 'center', gap: 10, marginBottom: 36 }}>
            <span className="eyebrow">The problem</span>
            <h2 className="serif" style={{ fontSize: 34, fontWeight: 500, maxWidth: 700 }}>
              Internal data tells you what already happened.<br />
              External signals tell you what's coming.
            </h2>
            <p className="muted2" style={{ fontSize: 16, maxWidth: 600, lineHeight: 1.6 }}>
              Insurance companies watch their own loss runs, exposure data and actuarial models.
              But the external signals that move loss ratios — fuel prices, geopolitical events,
              weather patterns, disease outbreaks — arrive weeks or months earlier, from outside.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
            {[
              { icon: '📉', title: 'Loss ratios shift before you see it', body: 'Fuel price drops drive miles-traveled up in 60 days. Cyber incidents follow vulnerability disclosures by 2–3 weeks. The signal is public — most underwriters never see it.' },
              { icon: '📰', title: 'News moves risk, but nobody quantifies it', body: 'A NOAA hurricane upgrade, a State Department advisory change, a USDA drought monitor reading — all have quantifiable impacts on specific LOBs that go unmeasured.' },
              { icon: '⏱️', title: 'Markets react fast. You need to too.', body: 'Hard markets harden, soft markets soften, and the external signals appear first. UWAII gives underwriters the same early-warning data that moves the broader market.' },
            ].map(c => (
              <div key={c.title} className="value-card">
                <div style={{ fontSize: 28, marginBottom: 12 }}>{c.icon}</div>
                <h3 style={{ fontSize: 18, marginBottom: 8 }}>{c.title}</h3>
                <p className="muted2" style={{ fontSize: 14.5, lineHeight: 1.55 }}>{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ---- How it works (4 steps) ---- */}
      <div className="lp-section" style={{ padding: '56px 32px 20px' }}>
        <div className="col ac" style={{ textAlign: 'center', gap: 8, marginBottom: 36 }}>
          <span className="eyebrow">How it works</span>
          <h2 className="serif" style={{ fontSize: 34, fontWeight: 500 }}>
            From the outside world to your book — daily
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
          {[
            ['01', 'Select Lines of Business', 'Choose from Motor, Travel, Cyber, Property, Crop, Marine, Workers Comp, or Health. Multi-select for a full portfolio view.', 'sliders'],
            ['02', 'Select Your Geography', 'Pick specific countries — from the US and UK to Singapore and Brazil. Get data in local currency and context.', 'globe'],
            ['03', 'Generate Your Dashboard', 'In seconds, a personalised dashboard pulls together live signals, market conditions, and chart trends for your exact book.', 'bolt'],
            ['04', 'Daily Intelligence', 'Every morning, UWAII ranks the signals that moved overnight and explains — in plain English — what it means for your book today.', 'news'],
          ].map(s => (
            <div key={s[0]} className="value-card">
              <div className="row ac jb" style={{ marginBottom: 14 }}>
                <span className="mono" style={{ fontSize: 13, color: 'var(--brand)', letterSpacing: '.1em' }}>{s[0]}</span>
                <span style={{
                  width: 38, height: 38, borderRadius: 10, background: 'var(--brand-50)',
                  color: 'var(--brand)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <Icon name={s[3]} size={19} />
                </span>
              </div>
              <h3 style={{ fontSize: 17, marginBottom: 8 }}>{s[1]}</h3>
              <p className="muted2" style={{ fontSize: 14, lineHeight: 1.5 }}>{s[2]}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ---- Product preview ---- */}
      <div className="lp-section" style={{ padding: '40px 32px 56px' }}>
        <div className="row ac jb wrap g12" style={{ marginBottom: 18 }}>
          <div className="col g4">
            <span className="eyebrow">The product</span>
            <h2 className="serif" style={{ fontSize: 28, fontWeight: 500 }}>
              One screen. Your whole external picture.
            </h2>
          </div>
          <button className="btn" onClick={() => navigate('/dashboard')}>
            Open live demo <Icon name="ext" size={15} />
          </button>
        </div>
        <MiniDashboard />
      </div>

      {/* ---- Belief strip ---- */}
      <div style={{ background: 'var(--ink)', color: '#fff' }}>
        <div className="lp-section" style={{ padding: '60px 32px', textAlign: 'center' }}>
          <h2 className="serif" style={{
            fontSize: 40, fontWeight: 400, lineHeight: 1.18,
            maxWidth: 840, margin: '0 auto', letterSpacing: '-.01em',
          }}>
            "Internal data tells you what{' '}
            <span style={{ color: '#9aa6c9' }}>already happened.</span>
            <br />
            UWAII tells you{' '}
            <span style={{ fontStyle: 'italic' }}>what's coming.</span>"
          </h2>
        </div>
      </div>

      {/* ---- Who it's for ---- */}
      <div className="lp-section" style={{ padding: '52px 32px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40 }}>
          <div>
            <span className="eyebrow">Built for the whole desk</span>
            <p className="muted2" style={{ fontSize: 14, marginTop: 8, marginBottom: 16, lineHeight: 1.5 }}>
              Every role on the insurance desk gets a different lens on the same external signals.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
              {[
                { role: 'Underwriter', desc: 'Spot pricing opportunities before competitors' },
                { role: 'Actuary', desc: 'Stress-test loss projections with live external data' },
                { role: 'Portfolio Manager', desc: 'Monitor accumulation risk across geographies' },
                { role: 'CUO', desc: 'Board-level external risk dashboard, daily' },
                { role: 'MGA Principal', desc: 'Differentiate your book with signal intelligence' },
                { role: 'Risk Manager', desc: 'Identify emerging risks weeks ahead of losses' },
              ].map(r => (
                <div key={r.role} className="card flat q" style={{ padding: '12px 14px' }}>
                  <div style={{ fontWeight: 600, fontSize: 14 }}>{r.role}</div>
                  <div className="muted" style={{ fontSize: 12.5, marginTop: 2, lineHeight: 1.4 }}>{r.desc}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <span className="eyebrow">Across every line</span>
            <p className="muted2" style={{ fontSize: 14, marginTop: 8, marginBottom: 16, lineHeight: 1.5 }}>
              From Motor to Marine, eight lines of business with dedicated signal tracking.
            </p>
            <div className="row wrap g8">
              {[
                { label: 'Motor / Auto', icon: '🚗', active: true },
                { label: 'Travel', icon: '✈️', active: false },
                { label: 'Cyber', icon: '💻', active: false },
                { label: 'Property / CAT', icon: '🏠', active: false },
                { label: 'Crop', icon: '🌾', active: false },
                { label: 'Marine', icon: '🚢', active: false },
                { label: 'Workers Comp', icon: '👷', active: false },
                { label: 'Health / Life', icon: '🏥', active: false },
              ].map(l => (
                <span key={l.label} className={`chip${l.active ? ' brand' : ''}`} style={{ fontSize: 13 }}>
                  {l.icon} {l.label}
                </span>
              ))}
            </div>
            <div className="card" style={{ padding: '18px 20px', marginTop: 20, background: 'var(--brand-50)', borderColor: 'var(--brand-100)' }}>
              <div className="mono" style={{ fontSize: 10.5, letterSpacing: '.14em', color: 'var(--brand-ink)', marginBottom: 8 }}>
                COVERAGE
              </div>
              <div className="row wrap g16">
                {[
                  { n: '40+', label: 'Countries' },
                  { n: '8', label: 'Lines of business' },
                  { n: '20+', label: 'Live signals' },
                  { n: '4×', label: 'Daily updates' },
                ].map(s => (
                  <div key={s.label}>
                    <div className="mono" style={{ fontSize: 22, fontWeight: 600, color: 'var(--brand-ink)' }}>{s.n}</div>
                    <div style={{ fontSize: 12, color: 'var(--brand-ink)', opacity: 0.7 }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ---- Final CTA ---- */}
      <div style={{ borderTop: '1px solid var(--line)' }}>
        <div className="lp-section" style={{ padding: '56px 32px', textAlign: 'center' }}>
          <h2 className="serif" style={{ fontSize: 36, fontWeight: 500, marginBottom: 10 }}>
            Start with one book. See it in two minutes.
          </h2>
          <p className="muted2" style={{ fontSize: 16, marginBottom: 24 }}>
            No integration, no internal data. Just pick a line and a country.
          </p>
          <button className="btn btn-primary btn-lg" onClick={() => navigate('/builder')}>
            Build a dashboard <Icon name="arrow" size={17} />
          </button>
        </div>
      </div>

      {/* ---- Footer ---- */}
      <div style={{ borderTop: '1px solid var(--line)', background: 'var(--surface)' }}>
        <div className="lp-section row ac jb wrap g16" style={{ padding: '22px 32px' }}>
          <Logo size={15} />
          <div className="row ac g24">
            {['Product', 'Signals', 'Privacy', 'Terms'].map(l => (
              <span key={l} className="muted" style={{ fontSize: 13, cursor: 'pointer' }}>{l}</span>
            ))}
          </div>
          <span className="muted" style={{ fontSize: 13 }}>
            © 2026 UWAII · Underwriting AI Intelligence · Demo with illustrative data
          </span>
        </div>
      </div>

    </div>
  )
}
