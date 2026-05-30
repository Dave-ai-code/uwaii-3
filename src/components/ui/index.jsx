/* Shared UI component library — ported from design reference */

/* ---- Icon ---- */
const ICONS = {
  dashboard:   'M3 3h7v7H3zM14 3h7v4h-7zM14 10h7v11h-7zM3 13h7v8H3z',
  news:        'M4 5h13v14H4zM7 8h7M7 11h7M7 14h4M18 9h2v8a2 2 0 0 1-2 2',
  drivers:     'M3 17h4l3-9 4 14 3-7h4',
  alert:       'M12 4l8 14H4zM12 10v4M12 16.5v.5',
  report:      'M6 3h9l4 4v14H6zM14 3v5h5M9 13h6M9 16h6',
  search:      'M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14zM20 20l-4-4',
  chevron:     'M9 6l6 6-6 6',
  chevdown:    'M6 9l6 6 6-6',
  arrow:       'M5 12h14M13 6l6 6-6 6',
  ext:         'M14 5h5v5M19 5l-8 8M18 14v5H5V6h5',
  bell:        'M6 9a6 6 0 0 1 12 0c0 5 2 6 2 6H4s2-1 2-6zM10 20a2 2 0 0 0 4 0',
  check:       'M5 12l4 4 10-10',
  plus:        'M12 5v14M5 12h14',
  close:       'M6 6l12 12M18 6L6 18',
  sliders:     'M4 8h10M18 8h2M4 16h2M10 16h10M14 6v4M8 14v4',
  globe:       'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18',
  bolt:        'M13 3L5 13h6l-1 8 8-10h-6z',
  share:       'M16 6l-4-3-4 3M12 3v12M5 14v5h14v-5',
  clock:       'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM12 7v5l3 2',
  overview:    'M3 3h7v7H3zM14 3h7v4h-7zM14 10h7v11h-7zM3 13h7v8H3z',
  motor:       'M5 17H3a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h2M17 17h2a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-2M5 11V8a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v3M7 17a2 2 0 1 0 4 0 2 2 0 0 0-4 0M13 17a2 2 0 1 0 4 0 2 2 0 0 0-4 0',
  travel:      'M21 16v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2M12 8a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM3 16h18',
  cyber:       'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5',
  property:    'M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zM9 22V12h6v10',
  crop:        'M12 2a9 9 0 0 0-9 9c0 3.87 2.2 7.24 5.4 8.93C8 21.27 8 22 8 22h8s0-.73-.4-2.07A9.97 9.97 0 0 0 21 11a9 9 0 0 0-9-9z',
  marine:      'M2 20h20M6 20V8l6-4 6 4v12M10 12h4M10 16h4',
  workerscomp: 'M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 0 0 1.946-.806 3.42 3.42 0 0 1 4.438 0 3.42 3.42 0 0 0 1.946.806 3.42 3.42 0 0 1 3.138 3.138 3.42 3.42 0 0 0 .806 1.946 3.42 3.42 0 0 1 0 4.438 3.42 3.42 0 0 0-.806 1.946 3.42 3.42 0 0 1-3.138 3.138 3.42 3.42 0 0 0-1.946.806 3.42 3.42 0 0 1-4.438 0 3.42 3.42 0 0 0-1.946-.806 3.42 3.42 0 0 1-3.138-3.138 3.42 3.42 0 0 0-.806-1.946 3.42 3.42 0 0 1 0-4.438 3.42 3.42 0 0 0 .806-1.946 3.42 3.42 0 0 1 3.138-3.138z',
  health:      'M22 12h-4l-3 9L9 3l-3 9H2',
  reconfigure: 'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zM4.93 4.93l14.14 14.14',
  settings:    'M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z',
  app:         'M3 3h7v7H3zM14 3h7v4h-7zM14 10h7v11h-7zM3 13h7v8H3z',
}

export function Icon({ name, size = 18, sw = 1.8, style = {}, cls = '' }) {
  return (
    <svg
      className={cls}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={sw}
      strokeLinecap="round"
      strokeLinejoin="round"
      style={style}
    >
      <path d={ICONS[name] || ''} />
    </svg>
  )
}

/* ---- Logo ---- */
export function Logo({ lite = false, size = 18 }) {
  return (
    <span className="logo" style={{ fontSize: size }}>
      <span className={`mark${lite ? ' lite' : ''}`} />
      <span>UWAII</span>
    </span>
  )
}

/* ---- Tag (up/down/flat/warn) ---- */
export function Tag({ dir = 'flat', children }) {
  const ar = dir === 'up' ? '▲' : dir === 'down' ? '▼' : '■'
  return (
    <span className={`tag ${dir}`}>
      <span className="ar">{ar}</span>
      {children}
    </span>
  )
}

/* ---- Priority badge ---- */
export function PriorityBadge({ priority }) {
  const cls = {
    HIGH:   'priority-badge priority-high',
    MEDIUM: 'priority-badge priority-medium',
    LOW:    'priority-badge priority-low',
    INFO:   'priority-badge priority-info',
  }[priority] || 'priority-badge priority-low'
  return <span className={cls}>{priority}</span>
}

/* ---- Action badge ---- */
export function ActionBadge({ action }) {
  const cls = {
    ACT:     'action-act',
    REVIEW:  'action-review',
    MONITOR: 'action-monitor',
    NONE:    'action-none',
  }[action] || 'action-none'
  return <span className={cls}>{action}</span>
}

/* ---- Market condition badge ---- */
export function MarketBadge({ condition }) {
  const cls = {
    Hard:    'chip market-hard',
    Soft:    'chip market-soft',
    Stable:  'chip market-stable',
    Firming: 'chip market-firming',
  }[condition] || 'chip market-stable'
  return <span className={cls}>{condition}</span>
}

/* ---- Risk temperature badge ---- */
export function RiskBadge({ level }) {
  const cls = {
    Low:      'chip risk-low',
    Elevated: 'chip risk-elevated',
    High:     'chip risk-high',
    Critical: 'chip risk-critical',
  }[level] || 'chip risk-elevated'
  return (
    <span className={cls} style={{ fontWeight: 600 }}>
      <span style={{
        width: 8, height: 8, borderRadius: '50%',
        background: 'currentColor', display: 'inline-block', marginRight: 2,
        boxShadow: '0 0 0 3px rgba(0,0,0,.12)',
      }} />
      Risk: {level}
    </span>
  )
}

/* ---- Insight ("So what for your book") ---- */
export function Insight({ children, big = false, style = {} }) {
  return (
    <div className="insight" style={style}>
      <span className="lbl">
        <span className="ai" />
        <span>So what for your book</span>
      </span>
      <p style={big ? { fontSize: 18 } : undefined}>{children}</p>
    </div>
  )
}

/* ---- Stat tile ---- */
export function Stat({ label, value, delta, dir, big }) {
  return (
    <div className="card stat col">
      <span className="k">{label}</span>
      <div className="row ac g8" style={{ flexWrap: 'wrap' }}>
        <span className="v" style={big ? { fontFamily: 'var(--serif)', fontWeight: 500, fontSize: 30, letterSpacing: '-.01em' } : undefined}>
          {value}
        </span>
      </div>
      {delta && (
        <div className="sub">
          <Tag dir={dir}>{delta}</Tag>
        </div>
      )}
    </div>
  )
}

/* ---- Impact meter bars ---- */
export function Meter({ n = 3, max = 5 }) {
  return (
    <span className={`meter${n < 4 ? ' lo' : ''}`}>
      {Array.from({ length: max }).map((_, i) => (
        <i key={i} className={i < n ? 'on' : ''} />
      ))}
    </span>
  )
}

/* ---- Source citation row ---- */
export function Source({ items }) {
  return (
    <span className="src">
      <Icon name="globe" size={12} sw={1.6} />
      {items.map((s, i) => (
        <span key={s} style={{ display: 'inline-flex', alignItems: 'center', gap: 5 }}>
          {i > 0 && <span className="dot" />}
          <span>{s}</span>
        </span>
      ))}
    </span>
  )
}

/* ---- Confidence bars ---- */
export function Confidence({ level }) {
  const map = { High: 3, Med: 2, Low: 1 }
  const n = map[level] || 1
  return (
    <span className="row ac g6" style={{ fontFamily: 'var(--mono)', fontSize: 11.5, color: 'var(--ink-3)' }}>
      <span className="row g4">
        {[1, 2, 3].map(i => (
          <span key={i} style={{
            width: 5, height: 11, borderRadius: 2,
            background: i <= n ? 'var(--ink-2)' : 'var(--line-strong)',
          }} />
        ))}
      </span>
      {level} confidence
    </span>
  )
}

/* ---- Chain of impact ---- */
export function Chain({ steps }) {
  return (
    <div className="chain scrollx">
      {steps.map((s, i) => (
        <span key={i} style={{ display: 'contents' }}>
          <div className={`node${i === steps.length - 1 ? ' end' : ''}`}>{s}</div>
          {i < steps.length - 1 && (
            <span className="arr"><Icon name="chevron" size={16} sw={2} /></span>
          )}
        </span>
      ))}
    </div>
  )
}

/* ---- Eyebrow + rule heading ---- */
export function Eyebrow({ children, right }) {
  return (
    <div className="row ac jb" style={{ marginBottom: 14 }}>
      <div className="eyebrow-rule" style={{ flex: right ? 'none' : 1 }}>
        <span className="eyebrow nowrap">{children}</span>
      </div>
      {right}
    </div>
  )
}

/* ---- Book selector pill ---- */
export function BookPill({ label = 'Travel · United States', onClick }) {
  return (
    <span className="bookpill" onClick={onClick}>
      <span className="flag">✦</span>
      <span className="col" style={{ lineHeight: 1.1 }}>
        <span style={{ fontSize: 11, color: 'var(--ink-3)' }} className="mono">LINE · GEOGRAPHY</span>
        <span style={{ fontWeight: 600, fontSize: 14 }}>{label}</span>
      </span>
      <Icon name="chevdown" size={15} style={{ color: 'var(--ink-3)', marginLeft: 2 }} />
    </span>
  )
}

/* ---- Divider ---- */
export function Divider() {
  return <hr className="divider" />
}
