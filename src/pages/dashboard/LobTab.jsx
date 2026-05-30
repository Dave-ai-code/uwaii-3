import { useMemo } from 'react'
import { MarketBadge, Tag, Eyebrow, Insight } from '../../components/ui'
import {
  UWLineChart, UWDualLineChart, UWAreaChart, UWBarChart,
  UWGroupedBarChart, UWDonutChart, UWStackedBarChart,
} from '../../components/charts'
import { LOB_CONFIG, lobStats, lobInsights } from '../../data/lobData'
import { marketConditions } from '../../data/marketConditions'
import { signals } from '../../data/signals'
import { getCountryData, getStatsForLobAndCountry } from '../../data/locationData'
import {
  motorData, travelData, cyberData, propertyData,
  cropData, marineData, workersCompData, healthData,
} from '../../data/chartData'

const H = 190

/* ============================================================
   SHARED UI PRIMITIVES
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
      {delta && <div style={{ marginTop: 8 }}><Tag dir={tagDir}>{delta}</Tag></div>}
    </div>
  )
}

function ChartCard({ title, subtitle, node }) {
  return (
    <div className="card" style={{ padding: '16px 16px 10px' }}>
      <div style={{ marginBottom: 10 }}>
        <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 2 }}>{title}</div>
        <div style={{ fontFamily: 'var(--mono)', fontSize: 10.5, color: 'var(--ink-4)' }}>{subtitle}</div>
      </div>
      {node}
    </div>
  )
}

function LobNews({ lobId }) {
  const relevant = useMemo(() =>
    signals.filter(s => s.lobs.includes(lobId)).slice(0, 5)
  , [lobId])

  if (!relevant.length) return null
  return (
    <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
      {relevant.map((sig, i) => {
        const priColor = sig.priority === 'HIGH' ? 'var(--up)' : sig.priority === 'MEDIUM' ? 'var(--warn)' : 'var(--ink-3)'
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
   ============================================================ */

function motorCharts() {
  const fv = motorData.fuelVsFrequency
  const uc = motorData.usedCarVsSeverity
  const mt = motorData.milesTraveled
  const cs = motorData.cpiVsSeverity
  return [
    {
      title: 'Fuel Price vs Claim Frequency',
      subtitle: '60-day lag: lower fuel → more miles driven',
      node: (
        <UWDualLineChart
          data={fv.months.map((x, i) => ({ x, fuel: fv.fuelPrice[i], freq: fv.frequencyIndex[i] }))}
          xKey="x"
          leftLine={{ key: 'fuel', name: 'Fuel $/gal', color: 'warn' }}
          rightLine={{ key: 'freq', name: 'Freq Index', color: 'brand' }}
          height={H}
        />
      ),
    },
    {
      title: 'Used Car Price Index vs Severity',
      subtitle: 'Post-COVID spike driving severity — now normalising',
      node: (
        <UWDualLineChart
          data={uc.months.map((x, i) => ({ x, uc: uc.usedCarIndex[i], sev: uc.severityIndex[i] }))}
          xKey="x"
          leftLine={{ key: 'uc', name: 'Used Car Idx', color: 'warn' }}
          rightLine={{ key: 'sev', name: 'Severity Idx', color: 'up' }}
          height={H}
        />
      ),
    },
    {
      title: 'Miles Traveled Seasonal Pattern',
      subtitle: 'Current year vs prior year — summer peaks',
      node: (
        <UWAreaChart
          data={mt.months.map((x, i) => ({ x, curr: mt.currentYear[i], prior: mt.priorYear[i] }))}
          xKey="x"
          areas={[
            { key: 'curr',  name: 'Current Year', color: 'brand' },
            { key: 'prior', name: 'Prior Year',   color: 'ink4' },
          ]}
          height={H}
        />
      ),
    },
    {
      title: 'CPI vs Average Claim Severity',
      subtitle: 'Strong correlation post-2021 — both trending up',
      node: (
        <UWLineChart
          data={cs.months.slice(-24).map((x, i) => ({
            x,
            cpi: cs.cpiTransport.slice(-24)[i],
            sev: cs.avgSeverity.slice(-24)[i],
          }))}
          xKey="x"
          lines={[
            { key: 'cpi', name: 'CPI Transport', color: 'warn' },
            { key: 'sev', name: 'Avg Severity',  color: 'up' },
          ]}
          height={H}
        />
      ),
    },
  ]
}

function travelCharts() {
  const jf = travelData.jetFuelVsAirfare
  const al = travelData.advisoryLevels
  const ot = travelData.flightOnTime
  const pv = travelData.passengerVolume
  return [
    {
      title: 'Jet Fuel vs Average Airfare',
      subtitle: 'Jet fuel leads airfare by ~30 days',
      node: (
        <UWDualLineChart
          data={jf.months.map((x, i) => ({ x, fuel: jf.jetFuelIndex[i], fare: jf.avgAirfareIndex[i] }))}
          xKey="x"
          leftLine={{ key: 'fuel', name: 'Jet Fuel Idx', color: 'warn' }}
          rightLine={{ key: 'fare', name: 'Airfare Idx',  color: 'brand' }}
          height={H}
        />
      ),
    },
    {
      title: 'Travel Advisory Levels by Region',
      subtitle: 'Count of Level 3+ advisories — 24 months',
      node: (
        <UWStackedBarChart
          data={al.months.map((x, i) => ({
            x,
            midEast:  al.middleEast[i],
            africa:   al.africa[i],
            asia:     al.asia[i],
            americas: al.americas[i],
            europe:   al.europe[i],
          }))}
          xKey="x"
          bars={[
            { key: 'midEast',  name: 'Middle East', color: 'up' },
            { key: 'africa',   name: 'Africa',      color: 'warn' },
            { key: 'asia',     name: 'Asia',        color: 'brand' },
            { key: 'americas', name: 'Americas',    color: 'down' },
            { key: 'europe',   name: 'Europe',      color: 'ink4' },
          ]}
          height={H}
        />
      ),
    },
    {
      title: 'Flight On-Time Rate by Airline',
      subtitle: 'Current snapshot — reference line 80%',
      node: (
        <UWBarChart
          data={ot.airlines.map((x, i) => ({ x, rate: ot.onTimeRate[i] }))}
          xKey="x"
          bars={[{ key: 'rate', name: 'On-Time %', color: 'brand' }]}
          layout="vertical"
          referenceLine={80}
          height={H}
        />
      ),
    },
    {
      title: 'International Passenger Volume',
      subtitle: 'Monthly index — seasonality and recovery trend',
      node: (
        <UWBarChart
          data={pv.months.map((x, i) => ({ x, vol: pv.volumeIndex[i] }))}
          xKey="x"
          bars={[{ key: 'vol', name: 'Volume Idx', color: 'brand' }]}
          height={H}
        />
      ),
    },
  ]
}

function cyberCharts() {
  const sf = cyberData.sectorFrequency
  const bc = cyberData.breachCostTrend
  const av = cyberData.attackVectors
  const ransomAnnual = [
    { x: '2019', n: 156 }, { x: '2020', n: 395 }, { x: '2021', n: 862 },
    { x: '2022', n: 1748 }, { x: '2023', n: 2468 }, { x: '2024', n: 2792 }, { x: '2025', n: 2847 },
  ]
  return [
    {
      title: 'Ransomware Incidents 2019–2025',
      subtitle: 'Annual peak — exponential growth, 29× in 6 years',
      node: (
        <UWLineChart
          data={ransomAnnual} xKey="x"
          lines={[{ key: 'n', name: 'Incidents', color: 'up' }]}
          height={H}
        />
      ),
    },
    {
      title: 'Attack Frequency by Industry',
      subtitle: 'Total incidents 2024 — healthcare most targeted',
      node: (
        <UWBarChart
          data={sf.sectors.map((x, i) => ({ x, n: sf.incidents2024[i] }))}
          xKey="x"
          bars={[{ key: 'n', name: 'Incidents', color: 'brand' }]}
          layout="vertical"
          height={H}
        />
      ),
    },
    {
      title: 'Average Breach Cost 2018–2025',
      subtitle: 'USD millions — GDPR enforcement from 2018',
      node: (
        <UWLineChart
          data={bc.years.map((x, i) => ({ x, cost: bc.avgCostM[i] }))}
          xKey="x"
          lines={[{ key: 'cost', name: 'Avg Cost $M', color: 'up' }]}
          height={H}
        />
      ),
    },
    {
      title: 'Attack Vector Breakdown 2024',
      subtitle: 'Phishing remains #1 at 36% — RDP #2 at 24%',
      node: (
        <UWDonutChart
          data={av.vectors.map((name, i) => ({ name, value: av.percentages[i] }))}
          nameKey="name" valueKey="value"
          height={H}
        />
      ),
    },
  ]
}

function propertyCharts() {
  const ca = propertyData.catLossesAnnual
  const cc = propertyData.constructionCost
  const cp = propertyData.catByPeril
  const wf = propertyData.wildfireAcres
  return [
    {
      title: 'Annual Insured CAT Losses ($B)',
      subtitle: 'Red bars = >$100B — avg reference line $68B',
      node: (
        <UWBarChart
          data={ca.years.map((x, i) => ({ x, losses: ca.lossesB[i] }))}
          xKey="x"
          bars={[{ key: 'losses', name: 'Losses $B', color: 'brand' }]}
          highlightThreshold={100}
          referenceLine={68}
          height={H}
        />
      ),
    },
    {
      title: 'Construction Cost Index 2015–2025',
      subtitle: 'Index 100 = 2015 — +43% post-COVID ITV gap',
      node: (
        <UWLineChart
          data={cc.years.map((x, i) => ({ x, idx: cc.index[i] }))}
          xKey="x"
          lines={[{ key: 'idx', name: 'Cost Index', color: 'up' }]}
          height={H}
        />
      ),
    },
    {
      title: 'CAT Losses by Peril 2020–2024',
      subtitle: 'Hail/wind growing — convective risk rising as % of total',
      node: (
        <UWStackedBarChart
          data={cp.years.map((x, i) => ({
            x,
            hurricane:  cp.hurricane[i],
            wildfire:   cp.wildfire[i],
            hailWind:   cp.hailWind[i],
            flood:      cp.flood[i],
            earthquake: cp.earthquake[i],
            other:      cp.other[i],
          }))}
          xKey="x"
          bars={[
            { key: 'hurricane',  name: 'Hurricane',  color: 'up' },
            { key: 'wildfire',   name: 'Wildfire',   color: 'warn' },
            { key: 'hailWind',   name: 'Hail/Wind',  color: 'brand' },
            { key: 'flood',      name: 'Flood',      color: 'down' },
            { key: 'earthquake', name: 'Earthquake', color: '#7C3AED' },
            { key: 'other',      name: 'Other',      color: 'ink4' },
          ]}
          height={H}
        />
      ),
    },
    {
      title: 'Wildfire Acres Burned 2010–2024',
      subtitle: 'Million acres — volatile but trending upward',
      node: (
        <UWAreaChart
          data={wf.years.map((x, i) => ({ x, acres: wf.millionAcres[i] }))}
          xKey="x"
          areas={[{ key: 'acres', name: 'Million Acres', color: 'warn' }]}
          height={H}
        />
      ),
    },
  ]
}

function cropCharts() {
  const dc = cropData.droughtCoverage
  const cp = cropData.commodityPrices
  const ir = cropData.indemnityRatio
  const pv = cropData.precipVsYield
  return [
    {
      title: 'US Drought Coverage 2023–2026',
      subtitle: '% of contiguous US in drought — Q3 pressure building',
      node: (
        <UWAreaChart
          data={dc.months.map((x, i) => ({ x, pct: dc.droughtPct[i] }))}
          xKey="x"
          areas={[{ key: 'pct', name: 'Drought %', color: 'warn' }]}
          height={H}
        />
      ),
    },
    {
      title: 'Commodity Prices 2020–2025',
      subtitle: 'Annual avg $/bu — Ukraine war spike visible 2022',
      node: (
        <UWLineChart
          data={cp.years.map((x, i) => ({ x, corn: cp.corn[i], wheat: cp.wheat[i], soy: cp.soy[i] }))}
          xKey="x"
          lines={[
            { key: 'corn',  name: 'Corn $/bu',  color: 'warn' },
            { key: 'wheat', name: 'Wheat $/bu', color: 'brand' },
            { key: 'soy',   name: 'Soy $/bu',   color: 'down' },
          ]}
          height={H}
        />
      ),
    },
    {
      title: 'Crop Insurance Indemnity Ratio',
      subtitle: 'Annual 2010–2024 — red = loss year (>1.0)',
      node: (
        <UWBarChart
          data={ir.years.map((x, i) => ({ x, ratio: ir.ratio[i] }))}
          xKey="x"
          bars={[{ key: 'ratio', name: 'Indemnity Ratio', color: 'brand' }]}
          highlightThreshold={1.0}
          referenceLine={1.0}
          height={H}
        />
      ),
    },
    {
      title: 'Precipitation vs Yield Deviation',
      subtitle: 'Current season — below avg precip driving yield stress',
      node: (
        <UWDualLineChart
          data={pv.months
            .map((x, i) => ({ x, precip: pv.precipIndex[i], yield: pv.yieldDeviation[i] }))
            .filter(d => d.precip !== null)}
          xKey="x"
          leftLine={{ key: 'precip', name: 'Precip Idx', color: 'brand' }}
          rightLine={{ key: 'yield', name: 'Yield Dev %', color: 'up' }}
          height={H}
        />
      ),
    },
  ]
}

function marineCharts() {
  const rs = marineData.redSeaTraffic
  const cr = marineData.containerRates
  const pc = marineData.portCongestion
  const pr = marineData.piracyByRegion
  return [
    {
      title: 'Red Sea Traffic vs Normal',
      subtitle: 'Houthi disruption — Dec 2023 sharp drop to 34%',
      node: (
        <UWAreaChart
          data={rs.months.map((x, i) => ({ x, vol: rs.volumeNormal[i] }))}
          xKey="x"
          areas={[{ key: 'vol', name: '% of Normal', color: 'up' }]}
          height={H}
        />
      ),
    },
    {
      title: 'Container Shipping Rates 2020–2025',
      subtitle: 'Drewry Index — COVID spike, normalisation, new surge',
      node: (
        <UWLineChart
          data={cr.months.map((x, i) => ({ x, idx: cr.drewryIndex[i] }))}
          xKey="x"
          lines={[{ key: 'idx', name: 'Drewry Index', color: 'up' }]}
          height={H}
        />
      ),
    },
    {
      title: 'Global Port Congestion Index',
      subtitle: 'COVID peak 165 → normalised 2022 → new 2024 pressure',
      node: (
        <UWLineChart
          data={pc.months.map((x, i) => ({ x, idx: pc.index[i] }))}
          xKey="x"
          lines={[{ key: 'idx', name: 'Congestion Idx', color: 'brand' }]}
          height={H}
        />
      ),
    },
    {
      title: 'Piracy Incidents by Region 2024',
      subtitle: 'Gulf of Guinea highest — Indian Ocean elevated',
      node: (
        <UWBarChart
          data={pr.regions.map((x, i) => ({ x, n: pr.incidents2024[i] }))}
          xKey="x"
          bars={[{ key: 'n', name: 'Incidents', color: 'brand' }]}
          layout="vertical"
          height={H}
        />
      ),
    },
  ]
}

function workerscompCharts() {
  const mc  = workersCompData.medCpiVsSeverity
  const es  = workersCompData.employmentBySector
  const fvg = workersCompData.freqVsGdp
  const rtw = workersCompData.rtwByInjury
  return [
    {
      title: 'Medical CPI vs Claim Severity',
      subtitle: 'Medical CPI leads severity by ~90 days',
      node: (
        <UWDualLineChart
          data={mc.months.slice(-24).map((x, i) => ({
            x, cpi: mc.medCpi.slice(-24)[i], sev: mc.severityIndex.slice(-24)[i],
          }))}
          xKey="x"
          leftLine={{ key: 'cpi', name: 'Med CPI %',    color: 'warn' }}
          rightLine={{ key: 'sev', name: 'Severity Idx', color: 'up' }}
          height={H}
        />
      ),
    },
    {
      title: 'Employment by High-Risk Sector',
      subtitle: 'Millions employed — quarterly data, 24 months',
      node: (
        <UWStackedBarChart
          data={es.months.map((x, i) => ({
            x,
            Construction:  es.construction[i],
            Manufacturing: es.manufacturing[i],
            Logistics:     es.logistics[i],
            Healthcare:    es.healthcare[i],
          }))}
          xKey="x"
          bars={[
            { key: 'Construction',  name: 'Construction',  color: 'up' },
            { key: 'Manufacturing', name: 'Manufacturing', color: 'warn' },
            { key: 'Logistics',     name: 'Logistics',     color: 'brand' },
            { key: 'Healthcare',    name: 'Healthcare',    color: 'down' },
          ]}
          height={H}
        />
      ),
    },
    {
      title: 'Claim Frequency vs Economic Activity',
      subtitle: 'Procyclical relationship — GDP growth drives frequency',
      node: (
        <UWDualLineChart
          data={fvg.months.slice(-24).map((x, i) => ({
            x,
            gdp: fvg.gdpGrowth.slice(-24)[i],
            fi:  fvg.freqIndex.slice(-24)[i],
          }))}
          xKey="x"
          leftLine={{ key: 'gdp', name: 'GDP Growth %', color: 'down' }}
          rightLine={{ key: 'fi',  name: 'Freq Index',   color: 'brand' }}
          height={H}
        />
      ),
    },
    {
      title: 'Return-to-Work Duration by Injury',
      subtitle: 'Average days — back/spine longest at 68 days',
      node: (
        <UWBarChart
          data={rtw.injuryTypes.map((x, i) => ({ x, days: rtw.avgDays[i] }))}
          xKey="x"
          bars={[{ key: 'days', name: 'Avg Days', color: 'brand' }]}
          layout="vertical"
          height={H}
        />
      ),
    },
  ]
}

function healthCharts() {
  const g1 = healthData.glp1Prescriptions
  const cd = healthData.chronicDisease
  const di = healthData.drugCostInflation
  const mh = healthData.groupHealthMlr
  return [
    {
      title: 'GLP-1 Prescription Volume 2019–2025',
      subtitle: 'Index 100 = 2019 — first obesity rate decline since 2010',
      node: (
        <UWLineChart
          data={g1.years.map((x, i) => ({ x, vol: g1.indexVol[i] }))}
          xKey="x"
          lines={[{ key: 'vol', name: 'Rx Index', color: 'down' }]}
          height={H}
        />
      ),
    },
    {
      title: 'Chronic Disease Prevalence 2010–2024',
      subtitle: '% of US adults — mental health rising fastest',
      node: (
        <UWLineChart
          data={cd.years.map((x, i) => ({
            x,
            diabetes:     cd.diabetes[i],
            hypertension: cd.hypertension[i],
            obesity:      cd.obesity[i],
            mental:       cd.mentalHealth[i],
          }))}
          xKey="x"
          lines={[
            { key: 'diabetes',     name: 'Diabetes %',     color: 'brand' },
            { key: 'hypertension', name: 'Hypertension %', color: 'warn' },
            { key: 'obesity',      name: 'Obesity %',      color: 'up' },
            { key: 'mental',       name: 'Mental Health %', color: '#7C3AED', dashed: true },
          ]}
          height={H}
        />
      ),
    },
    {
      title: 'Drug Cost Inflation by Category',
      subtitle: 'GLP-1 spike vs other categories 2020–2024',
      node: (
        <UWGroupedBarChart
          data={di.years.map((x, i) => ({
            x, glp1: di.glp1[i], specialty: di.specialty[i], oncology: di.oncology[i],
          }))}
          xKey="x"
          bars={[
            { key: 'glp1',      name: 'GLP-1',     color: 'up' },
            { key: 'specialty', name: 'Specialty',  color: 'warn' },
            { key: 'oncology',  name: 'Oncology',   color: 'brand' },
          ]}
          height={H}
        />
      ),
    },
    {
      title: 'Group Health MLR Trend 2015–2024',
      subtitle: '2020 COVID dip then pent-up demand spike 2021–22',
      node: (
        <UWBarChart
          data={mh.years.map((x, i) => ({ x, mlr: mh.mlr[i] }))}
          xKey="x"
          bars={[{ key: 'mlr', name: 'MLR %', color: 'brand' }]}
          referenceLine={88}
          height={H}
        />
      ),
    },
  ]
}

const LOB_CHART_FNS = {
  motor: motorCharts, travel: travelCharts, cyber: cyberCharts,
  property: propertyCharts, crop: cropCharts, marine: marineCharts,
  workerscomp: workerscompCharts, health: healthCharts,
}

/* ============================================================
   LOBTAB — main export
   ============================================================ */
export default function LobTab({ lob, country, role }) {
  const lobConfig   = LOB_CONFIG[lob]
  const mc          = marketConditions[lob]
  const defaultStats = lobStats[lob] || []
  const stats       = useMemo(
    () => getStatsForLobAndCountry(lob, country, defaultStats),
    [lob, country, defaultStats]
  )
  const insights  = lobInsights[lob]  || []
  const charts    = useMemo(() => LOB_CHART_FNS[lob]?.() || [], [lob])
  const countryData = getCountryData(country)

  if (!lobConfig) return (
    <div style={{ padding: 40, color: 'var(--ink-3)' }}>Unknown LOB: {lob}</div>
  )

  const upColor = mc?.rateDir === 'up' ? 'var(--up)' : mc?.rateDir === 'down' ? 'var(--down)' : 'var(--ink-3)'
  const arrow   = mc?.rateDir === 'up' ? '▲'         : mc?.rateDir === 'down' ? '▼'           : '→'

  return (
    <div>
      {/* ---- LOB header card ---- */}
      <div className="card" style={{ padding: '20px 24px', marginBottom: 28, display: 'flex', alignItems: 'flex-start', gap: 20 }}>
        <span style={{ fontSize: 36, lineHeight: 1, flexShrink: 0 }}>{lobConfig.icon}</span>
        <div style={{ flex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: 22, margin: 0, letterSpacing: '-.02em' }}>
              {lobConfig.label}
            </h2>
            <span style={{
              display: 'flex', alignItems: 'center', gap: 5,
              fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--ink-4)',
              background: 'var(--bg)', border: '1px solid var(--line)',
              borderRadius: 20, padding: '2px 8px',
            }}>
              <span style={{ fontSize: 14 }}>{countryData.flag}</span>
              {countryData.name}
            </span>
          </div>
          {mc && (
            <p style={{ fontSize: 13.5, color: 'var(--ink-2)', lineHeight: 1.5, maxWidth: 640, margin: 0 }}>
              {mc.summary}
            </p>
          )}
        </div>
        {mc && (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 8, flexShrink: 0 }}>
            <MarketBadge condition={mc.condition} />
            <span style={{ fontFamily: 'var(--mono)', fontSize: 14, fontWeight: 700, color: upColor }}>
              {arrow} {mc.rateChange} YoY rate
            </span>
          </div>
        )}
      </div>

      {/* ---- 6 stat cards ---- */}
      <Eyebrow>Key Indicators</Eyebrow>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(190px, 1fr))',
        gap: 12, marginBottom: 28,
      }}>
        {stats.map(s => <StatCard key={s.key} {...s} />)}
      </div>

      {/* ---- 4 charts in 2×2 grid ---- */}
      {charts.length > 0 && (
        <>
          <Eyebrow>Analytics</Eyebrow>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 28 }}>
            {charts.map((c, i) => <ChartCard key={i} {...c} />)}
          </div>
        </>
      )}

      {/* ---- AI insights ---- */}
      {insights.length > 0 && (
        <>
          <Eyebrow>Portfolio Intelligence</Eyebrow>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 28 }}>
            {insights.map((ins, i) => <Insight key={i}>{ins.text}</Insight>)}
          </div>
        </>
      )}

      {/* ---- Relevant signals ---- */}
      <Eyebrow>Relevant Signals</Eyebrow>
      <LobNews lobId={lob} />
    </div>
  )
}
