import { useMemo } from 'react'
import { MarketBadge, Tag, Eyebrow, Insight } from '../../components/ui'
import {
  UWLineChart, UWDualLineChart, UWAreaChart, UWBarChart,
} from '../../components/charts'
import { LOB_CONFIG, lobStats, lobInsights } from '../../data/lobData'
import { marketConditions, getRateTrendSummary } from '../../data/marketConditions'
import { signals } from '../../data/signals'
import {
  motorData, travelData, cyberData, propertyData,
  cropData, marineData, workersCompData, healthData,
} from '../../data/chartData'

/* ============================================================
   HELPERS
   ============================================================ */

function StatCard({ label, value, delta, dir }) {
  const borderColor = dir === 'up' ? 'var(--up)' : dir === 'down' ? 'var(--down)' : 'var(--line-strong)'
  const tagDir      = dir === 'up' ? 'up'        : dir === 'down' ? 'down'        : 'flat'
  return (
    <div className="card" style={{ borderTop: `3px solid ${borderColor}`, padding: '14px 16px' }}>
      <div style={{ fontSize: 12, color: 'var(--ink-3)', marginBottom: 8 }}>{label}</div>
      <div style={{ fontFamily: 'var(--mono)', fontSize: 22, fontWeight: 500, letterSpacing: '-.02em', lineHeight: 1 }}>
        {value}
      </div>
      {delta && (
        <div style={{ marginTop: 8 }}>
          <Tag dir={tagDir}>{delta}</Tag>
        </div>
      )}
    </div>
  )
}

function MarketStrip({ selectedLobs }) {
  return (
    <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 28 }}>
      {selectedLobs.map(lobId => {
        const lob = LOB_CONFIG[lobId]
        const mc  = marketConditions[lobId]
        if (!lob || !mc) return null
        const upColor = mc.rateDir === 'up' ? 'var(--up)' : mc.rateDir === 'down' ? 'var(--down)' : 'var(--ink-3)'
        const upBg    = mc.rateDir === 'up' ? 'var(--up-bg)' : mc.rateDir === 'down' ? 'var(--down-bg)' : 'var(--surface-3)'
        const arrow   = mc.rateDir === 'up' ? '▲' : mc.rateDir === 'down' ? '▼' : '→'
        return (
          <div key={lobId} className="card" style={{ padding: '12px 16px', minWidth: 160, display: 'flex', flexDirection: 'column', gap: 6 }}>
            <div className="row ac jb g8">
              <span style={{ fontSize: 13, fontWeight: 600 }}>{lob.icon} {lob.label}</span>
              <MarketBadge condition={mc.condition} />
            </div>
            <div className="row ac g6">
              <span style={{ fontFamily: 'var(--mono)', fontSize: 13, fontWeight: 700, color: upColor, background: upBg, padding: '2px 7px', borderRadius: 5 }}>
                {arrow} {mc.rateChange}
              </span>
              <span style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--ink-4)' }}>YoY rate</span>
            </div>
          </div>
        )
      })}
    </div>
  )
}

function RateLRTable({ selectedLobs }) {
  const rows = getRateTrendSummary(selectedLobs)
  return (
    <div className="card flat" style={{ overflow: 'hidden' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'var(--mono)', fontSize: 12.5 }}>
        <thead>
          <tr style={{ borderBottom: '1px solid var(--line)' }}>
            {['LOB', 'Condition', 'Rate Chg', 'LR Est.', 'Target'].map((h, i) => (
              <th key={h} style={{
                textAlign: i === 0 ? 'left' : i === 1 ? 'center' : 'right',
                padding: '10px 12px',
                fontWeight: 600, color: 'var(--ink-3)', fontSize: 11,
                letterSpacing: '.08em', textTransform: 'uppercase',
              }}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => {
            const lob    = LOB_CONFIG[row.lob]
            const overLr = row.lrCurrent > row.lrTarget
            return (
              <tr key={row.lob} style={{ borderBottom: i < rows.length - 1 ? '1px solid var(--line)' : 'none' }}>
                <td style={{ padding: '10px 12px', fontWeight: 500 }}>{lob?.icon} {lob?.label}</td>
                <td style={{ padding: '10px 12px', textAlign: 'center' }}>
                  <MarketBadge condition={row.condition} />
                </td>
                <td style={{ padding: '10px 12px', textAlign: 'right', color: 'var(--up)', fontWeight: 700 }}>
                  {row.rateChange}
                </td>
                <td style={{ padding: '10px 12px', textAlign: 'right', color: overLr ? 'var(--up)' : 'var(--down)', fontWeight: 600 }}>
                  {row.lrCurrent}%
                </td>
                <td style={{ padding: '10px 12px', textAlign: 'right', color: 'var(--ink-3)' }}>
                  {row.lrTarget}%
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

function NewsStrip({ selectedLobs }) {
  const relevant = useMemo(() => signals
    .filter(s => s.lobs.some(l => selectedLobs.includes(l)))
    .filter(s => s.priority === 'HIGH' || s.priority === 'MEDIUM')
    .slice(0, 5),
  [selectedLobs])

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
      {relevant.map((sig, i) => {
        const priColor = sig.priority === 'HIGH' ? 'var(--up)' : 'var(--warn)'
        const actCls   = { ACT: 'action-act', REVIEW: 'action-review', MONITOR: 'action-monitor', NONE: 'action-none' }[sig.commentary.action] || 'action-none'
        return (
          <div key={sig.id} className="feedrow" style={{ padding: '12px 16px', borderBottom: i < relevant.length - 1 ? '1px solid var(--line)' : 'none' }}>
            <div className="row ac jb g8" style={{ marginBottom: 4 }}>
              <span style={{ fontFamily: 'var(--mono)', fontSize: 10.5, fontWeight: 700, color: priColor, letterSpacing: '.06em' }}>
                {sig.priority}
              </span>
              <div className="row ac g6">
                <span className={actCls}>{sig.commentary.action}</span>
                <span style={{ fontFamily: 'var(--mono)', fontSize: 10.5, color: 'var(--ink-4)' }}>{sig.time}</span>
              </div>
            </div>
            <div style={{ fontSize: 13.5, fontWeight: 600, lineHeight: 1.35, marginBottom: 4 }}>{sig.headline}</div>
            <div style={{ fontSize: 12.5, color: 'var(--ink-3)', lineHeight: 1.4 }}>{sig.summary}</div>
          </div>
        )
      })}
    </div>
  )
}

/* ============================================================
   PER-LOB CHART DEFINITIONS
   Each entry: { title, subtitle, node }
   ============================================================ */
function motorChart() {
  const d    = motorData.fuelVsFrequency
  const n    = 12
  const data = d.months.slice(-n).map((x, i) => ({
    x, fuel: d.fuelPrice.slice(-n)[i], freq: d.frequencyIndex.slice(-n)[i],
  }))
  return {
    title:    'Fuel Price vs Claim Frequency',
    subtitle: '60-day lag: lower fuel → more miles',
    node: (
      <UWDualLineChart
        data={data} xKey="x"
        leftLine={{ key: 'fuel', name: 'Fuel $/gal', color: 'warn' }}
        rightLine={{ key: 'freq', name: 'Freq Index', color: 'brand' }}
        height={160}
      />
    ),
  }
}

function travelChart() {
  const d    = travelData.jetFuelVsAirfare
  const n    = 12
  const data = d.months.slice(-n).map((x, i) => ({
    x, fuel: d.jetFuelIndex.slice(-n)[i], fare: d.avgAirfareIndex.slice(-n)[i],
  }))
  return {
    title:    'Jet Fuel vs Average Airfare',
    subtitle: 'Jet fuel leads airfare ~30 days',
    node: (
      <UWDualLineChart
        data={data} xKey="x"
        leftLine={{ key: 'fuel', name: 'Jet Fuel Idx', color: 'warn' }}
        rightLine={{ key: 'fare', name: 'Airfare Idx', color: 'brand' }}
        height={160}
      />
    ),
  }
}

function cyberChart() {
  const data = [
    { x: '2019', n: 156 }, { x: '2020', n: 395 }, { x: '2021', n: 862 },
    { x: '2022', n: 1748 }, { x: '2023', n: 2468 }, { x: '2024', n: 2792 },
    { x: '2025', n: 2847 },
  ]
  return {
    title:    'Ransomware Incidents',
    subtitle: 'Annual peak — exponential growth',
    node: (
      <UWLineChart
        data={data} xKey="x"
        lines={[{ key: 'n', name: 'Incidents', color: 'up' }]}
        height={160}
      />
    ),
  }
}

function propertyChart() {
  const d    = propertyData.catLossesAnnual
  const data = d.years.slice(-12).map((x, i) => ({
    x, losses: d.lossesB.slice(-12)[i],
  }))
  return {
    title:    'Insured CAT Losses ($B)',
    subtitle: 'Red = >$100B year — avg line $68B',
    node: (
      <UWBarChart
        data={data} xKey="x"
        bars={[{ key: 'losses', name: 'Losses $B', color: 'brand' }]}
        highlightThreshold={100}
        referenceLine={68}
        height={160}
      />
    ),
  }
}

function cropChart() {
  const d    = cropData.commodityPrices
  const data = d.years.map((x, i) => ({
    x, corn: d.corn[i], wheat: d.wheat[i],
  }))
  return {
    title:    'Commodity Prices',
    subtitle: 'Annual avg — Ukraine spike 2022',
    node: (
      <UWLineChart
        data={data} xKey="x"
        lines={[
          { key: 'corn',  name: 'Corn $/bu',  color: 'warn' },
          { key: 'wheat', name: 'Wheat $/bu', color: 'brand', dashed: false },
        ]}
        height={160}
      />
    ),
  }
}

function marineChart() {
  const d    = marineData.redSeaTraffic
  const data = d.months.map((x, i) => ({ x, vol: d.volumeNormal[i] }))
  return {
    title:    'Red Sea Traffic vs Normal',
    subtitle: 'Houthi disruption — Dec 2023 drop',
    node: (
      <UWAreaChart
        data={data} xKey="x"
        areas={[{ key: 'vol', name: '% of Normal', color: 'up' }]}
        height={160}
      />
    ),
  }
}

function workerscompChart() {
  const d    = workersCompData.medCpiVsSeverity
  const n    = 12
  const data = d.months.slice(-n).map((x, i) => ({
    x, cpi: d.medCpi.slice(-n)[i], sev: d.severityIndex.slice(-n)[i],
  }))
  return {
    title:    'Medical CPI vs Claim Severity',
    subtitle: 'Medical CPI leads severity ~90 days',
    node: (
      <UWDualLineChart
        data={data} xKey="x"
        leftLine={{ key: 'cpi', name: 'Med CPI %', color: 'warn' }}
        rightLine={{ key: 'sev', name: 'Severity Idx', color: 'up' }}
        height={160}
      />
    ),
  }
}

function healthChart() {
  const d    = healthData.glp1Prescriptions
  const data = d.years.map((x, i) => ({ x, vol: d.indexVol[i] }))
  return {
    title:    'GLP-1 Prescription Volume',
    subtitle: 'Index 100 = 2019 — exponential growth',
    node: (
      <UWLineChart
        data={data} xKey="x"
        lines={[{ key: 'vol', name: 'Rx Index', color: 'down' }]}
        height={160}
      />
    ),
  }
}

const LOB_CHART_FN = {
  motor: motorChart, travel: travelChart, cyber: cyberChart,
  property: propertyChart, crop: cropChart, marine: marineChart,
  workerscomp: workerscompChart, health: healthChart,
}

/* ============================================================
   OVERVIEW
   ============================================================ */
export default function Overview({ selectedLobs, activeCountry, role }) {
  // 6 stat cards across selected LOBs
  const statCards = useMemo(() => {
    const cards = []
    const perLob = Math.ceil(6 / selectedLobs.length)
    for (const lobId of selectedLobs) {
      const stats = lobStats[lobId] || []
      for (const s of stats.slice(0, perLob)) {
        if (cards.length < 6) cards.push({ ...s, lob: lobId })
      }
    }
    // fill remaining slots from first LOBs if needed
    if (cards.length < 6) {
      for (const lobId of selectedLobs) {
        const stats = lobStats[lobId] || []
        for (const s of stats) {
          if (cards.length >= 6) break
          if (!cards.find(c => c.key === s.key && c.lob === lobId)) {
            cards.push({ ...s, lob: lobId })
          }
        }
        if (cards.length >= 6) break
      }
    }
    return cards.slice(0, 6)
  }, [selectedLobs])

  // Top 2 insights across all selected LOBs
  const topInsights = useMemo(() => {
    const all = []
    selectedLobs.forEach(lobId => {
      ;(lobInsights[lobId] || []).forEach(ins => all.push({ ...ins, lob: lobId }))
    })
    return all.slice(0, 2)
  }, [selectedLobs])

  // Charts: one per LOB, max 3
  const charts = useMemo(() =>
    selectedLobs.slice(0, 3).map(lobId => {
      const fn = LOB_CHART_FN[lobId]
      return fn ? { lobId, ...fn() } : null
    }).filter(Boolean),
  [selectedLobs])

  return (
    <div>
      {/* ---- Market conditions strip ---- */}
      <Eyebrow>Market Conditions</Eyebrow>
      <MarketStrip selectedLobs={selectedLobs} />

      {/* ---- 6 stat cards ---- */}
      <Eyebrow>Key Indicators</Eyebrow>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(190px, 1fr))',
        gap: 12, marginBottom: 28,
      }}>
        {statCards.map((s, i) => (
          <StatCard key={`${s.lob}-${s.key}-${i}`} label={s.label} value={s.value} delta={s.delta} dir={s.dir} />
        ))}
      </div>

      {/* ---- Portfolio intelligence ---- */}
      {topInsights.length > 0 && (
        <>
          <Eyebrow>Portfolio Intelligence</Eyebrow>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 28 }}>
            {topInsights.map((ins, i) => <Insight key={i}>{ins.text}</Insight>)}
          </div>
        </>
      )}

      {/* ---- Two-column: news + rate/LR table ---- */}
      <div style={{ display: 'grid', gridTemplateColumns: '1.8fr 1fr', gap: 20, marginBottom: 28 }}>
        <div>
          <Eyebrow>Top Signals</Eyebrow>
          <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
            <NewsStrip selectedLobs={selectedLobs} />
          </div>
        </div>
        <div>
          <Eyebrow>Rate &amp; Loss Ratio</Eyebrow>
          <RateLRTable selectedLobs={selectedLobs} />
        </div>
      </div>

      {/* ---- Charts: one per selected LOB (max 3) ---- */}
      {charts.length > 0 && (
        <>
          <Eyebrow>Key Trends</Eyebrow>
          <div style={{
            display: 'grid',
            gridTemplateColumns: `repeat(${charts.length}, 1fr)`,
            gap: 16, marginBottom: 28,
          }}>
            {charts.map(({ lobId, title, subtitle, node }) => {
              const lob = LOB_CONFIG[lobId]
              return (
                <div key={lobId} className="card" style={{ padding: '16px 16px 12px' }}>
                  <div style={{ marginBottom: 10 }}>
                    <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 2 }}>
                      {lob?.icon} {title}
                    </div>
                    <div style={{ fontFamily: 'var(--mono)', fontSize: 10.5, color: 'var(--ink-4)' }}>
                      {subtitle}
                    </div>
                  </div>
                  {node}
                </div>
              )
            })}
          </div>
        </>
      )}
    </div>
  )
}
