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
  getTravelAirlineData, getCyberSectorData, getWCSectorData,
  getCropCommodityData, getMarineRouteData, getHealthChronicData,
} from '../../data/countryChartData'
import {
  motorData, travelData, cyberData, propertyData,
  cropData, marineData, workersCompData, healthData,
  getMotorFuelData, getPropertyPerilData,
  MONTHS_24,
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

function motorCharts(country = 'us') {
  const fuelData = getMotorFuelData(country)
  const fv = { months: motorData.fuelVsFrequency.months, fuelPrice: fuelData.fuelPrice, frequencyIndex: fuelData.frequencyIndex }
  const uc = motorData.usedCarVsSeverity
  const mt = motorData.milesTraveled
  const cs = motorData.cpiVsSeverity
  return [
    {
      title: 'Fuel Price vs Claim Frequency',
      subtitle: fuelData.annotation,
      node: (
        <UWDualLineChart
          data={fv.months.map((x, i) => ({ x, fuel: fv.fuelPrice[i], freq: fv.frequencyIndex[i] }))}
          xKey="x"
          leftLine={{ key: 'fuel', name: fuelData.label, color: 'warn' }}
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
    {
      title: 'EV Fleet Share vs Repair Cost Index',
      subtitle: motorData.evAdoptionVsRepair.annotation,
      node: (
        <UWDualLineChart
          data={motorData.evAdoptionVsRepair.years.map((x, i) => ({
            x,
            ev: motorData.evAdoptionVsRepair.evSharePct[i],
            rc: motorData.evAdoptionVsRepair.repairCostIdx[i],
          }))}
          xKey="x"
          leftLine={{ key: 'ev', name: 'EV Share %',      color: 'down' }}
          rightLine={{ key: 'rc', name: 'Repair Cost Idx', color: 'up' }}
          height={H}
        />
      ),
    },
    {
      title: 'NHTSA Safety Recalls — Campaigns & Vehicles Affected',
      subtitle: motorData.nhtsaRecalls.annotation,
      node: (
        <UWDualLineChart
          data={motorData.nhtsaRecalls.years.map((x, i) => ({
            x,
            camp: motorData.nhtsaRecalls.campaigns[i],
            veh: motorData.nhtsaRecalls.vehiclesAffectedM[i],
          }))}
          xKey="x"
          leftLine={{ key: 'camp', name: 'Campaigns',       color: 'warn' }}
          rightLine={{ key: 'veh',  name: 'Vehicles Aff (M)', color: 'up' }}
          height={H}
        />
      ),
    },
  ]
}

function travelCharts(country = 'us') {
  const jf      = travelData.jetFuelVsAirfare
  const al      = travelData.advisoryLevels
  const pv      = travelData.passengerVolume
  const airline = getTravelAirlineData(country)
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
      subtitle: airline.subtitle,
      node: (
        <UWBarChart
          data={airline.airlines.map((x, i) => ({ x, rate: airline.onTime[i] }))}
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
    {
      title: 'Medical Evacuation Incidents by Region',
      subtitle: 'Incidents per 10k travellers — cost driver for travel medical',
      node: (
        <UWBarChart
          data={travelData.medEvacByRegion.regions.map((x, i) => ({
            x, rate: travelData.medEvacByRegion.incidentsPer10k[i],
          }))}
          xKey="x"
          bars={[{ key: 'rate', name: '/10k travellers', color: 'warn' }]}
          layout="vertical"
          height={H}
        />
      ),
    },
    {
      title: 'Claims Index by Trip Type',
      subtitle: 'Leisure dominates volume — adventure highest severity per claim',
      node: (
        <UWLineChart
          data={travelData.claimsByTripType.months.map((x, i) => ({
            x,
            leisure:   travelData.claimsByTripType.leisure[i],
            business:  travelData.claimsByTripType.business[i],
            adventure: travelData.claimsByTripType.adventure[i],
          }))}
          xKey="x"
          lines={[
            { key: 'leisure',   name: 'Leisure',   color: 'brand' },
            { key: 'business',  name: 'Business',  color: 'warn' },
            { key: 'adventure', name: 'Adventure', color: 'up' },
          ]}
          height={H}
        />
      ),
    },
  ]
}

function cyberCharts(country = 'us') {
  const sf      = getCyberSectorData(country)
  const bc      = cyberData.breachCostTrend
  const av      = cyberData.attackVectors
  const ransomAnnual = [
    { x: '2019', n: 156 }, { x: '2020', n: 395 }, { x: '2021', n: 862 },
    { x: '2022', n: 1748 }, { x: '2023', n: 2468 }, { x: '2024', n: 2792 }, { x: '2025', n: 2847 },
  ]
  return [
    {
      title: 'Ransomware Incidents 2019–2025',
      subtitle: 'Annual global total — exponential growth, 29× in 6 years',
      node: (
        <UWLineChart
          data={ransomAnnual} xKey="x"
          lines={[{ key: 'n', name: 'Incidents', color: 'up' }]}
          height={H}
        />
      ),
    },
    {
      title: 'Attack Frequency by Industry Sector',
      subtitle: sf.subtitle,
      node: (
        <UWBarChart
          data={sf.sectors.map((x, i) => ({ x, n: sf.incidents[i] }))}
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
      title: 'Average Ransom Demand 2019–2025',
      subtitle: cyberData.ransomDemandTrend.annotation,
      node: (
        <UWLineChart
          data={cyberData.ransomDemandTrend.years.map((x, i) => ({
            x,
            avg:    cyberData.ransomDemandTrend.avgDemandK[i],
            median: cyberData.ransomDemandTrend.medianDemandK[i],
          }))}
          xKey="x"
          lines={[
            { key: 'avg',    name: 'Avg Demand $K',    color: 'up' },
            { key: 'median', name: 'Median Demand $K', color: 'warn' },
          ]}
          height={H}
        />
      ),
    },
    {
      title: 'Mean Time to Detect & Contain (Days)',
      subtitle: cyberData.dwellTime.annotation,
      node: (
        <UWLineChart
          data={cyberData.dwellTime.years.map((x, i) => ({
            x,
            detect:  cyberData.dwellTime.daysToDetect[i],
            contain: cyberData.dwellTime.daysToContain[i],
          }))}
          xKey="x"
          lines={[
            { key: 'detect',  name: 'Days to Detect',  color: 'warn' },
            { key: 'contain', name: 'Days to Contain', color: 'up' },
          ]}
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

function propertyCharts(country = 'us') {
  const ca  = propertyData.catLossesAnnual
  const cc  = propertyData.constructionCost
  const wf  = propertyData.wildfireAcres
  const cpd = getPropertyPerilData(country)
  const perilData = cpd.years.map((x, i) => {
    const row = { x }
    Object.keys(cpd.perils).forEach(k => { row[k] = cpd.perils[k][i] })
    return row
  })
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
      title: `CAT Losses by Peril 2020–2024`,
      subtitle: cpd.label,
      node: (
        <UWStackedBarChart
          data={perilData}
          xKey="x"
          bars={cpd.barKeys}
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
    {
      title: 'Protection Gap — Insured vs Total Economic Losses',
      subtitle: propertyData.protectionGap.annotation,
      node: (
        <UWGroupedBarChart
          data={propertyData.protectionGap.years.map((x, i) => ({
            x,
            total:   propertyData.protectionGap.totalEconB[i],
            insured: propertyData.protectionGap.insuredB[i],
          }))}
          xKey="x"
          bars={[
            { key: 'total',   name: 'Total Economic $B', color: 'ink4' },
            { key: 'insured', name: 'Insured $B',         color: 'brand' },
          ]}
          height={H}
        />
      ),
    },
    {
      title: 'Reinsurance Rate Index 2017–2025',
      subtitle: propertyData.reinsRateIndex.annotation,
      node: (
        <UWLineChart
          data={propertyData.reinsRateIndex.years.map((x, i) => ({
            x, idx: propertyData.reinsRateIndex.index[i],
          }))}
          xKey="x"
          lines={[{ key: 'idx', name: 'Reins Rate Index', color: 'brand' }]}
          referenceLine={100}
          height={H}
        />
      ),
    },
  ]
}

function cropCharts(country = 'us') {
  const dc  = cropData.droughtCoverage
  const ir  = cropData.indemnityRatio
  const pv  = cropData.precipVsYield
  const cmd = getCropCommodityData(country)
  return [
    {
      title: 'Drought / Weather Stress Coverage',
      subtitle: '% area in drought or severe weather stress — 2023–2026',
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
      subtitle: cmd.subtitle,
      node: (
        <UWLineChart
          data={cmd.data}
          xKey="x"
          lines={cmd.lines}
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
    {
      title: 'ENSO Index vs Crop Yield Deviation',
      subtitle: cropData.ensoImpact.annotation,
      node: (
        <UWDualLineChart
          data={cropData.ensoImpact.years.map((x, i) => ({
            x,
            enso:  cropData.ensoImpact.ensoIndex[i],
            yield: cropData.ensoImpact.yieldDeviation[i],
          }))}
          xKey="x"
          leftLine={{ key: 'enso',  name: 'ENSO Index',  color: 'brand' }}
          rightLine={{ key: 'yield', name: 'Yield Dev %', color: 'up' }}
          height={H}
        />
      ),
    },
    {
      title: 'Fertilizer Price Index 2024–2026',
      subtitle: cropData.fertilizerIndex.annotation,
      node: (
        <UWAreaChart
          data={MONTHS_24.map((x, i) => ({ x, idx: cropData.fertilizerIndex.index[i] }))}
          xKey="x"
          areas={[{ key: 'idx', name: 'Fertilizer Idx', color: 'warn' }]}
          referenceLine={100}
          height={H}
        />
      ),
    },
  ]
}

function marineCharts(country = 'us') {
  const rs    = marineData.redSeaTraffic
  const cr    = marineData.containerRates
  const pc    = marineData.portCongestion
  const route = getMarineRouteData(country)
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
      title: 'Piracy & Attack Incidents by Route 2024',
      subtitle: route.subtitle,
      node: (
        <UWBarChart
          data={route.routes.map((x, i) => ({ x, n: route.incidents[i] }))}
          xKey="x"
          bars={[{ key: 'n', name: 'Incidents', color: 'brand' }]}
          layout="vertical"
          height={H}
        />
      ),
    },
    {
      title: 'War Risk Premium Index — Quarterly',
      subtitle: marineData.warRiskPremium.annotation,
      node: (
        <UWAreaChart
          data={marineData.warRiskPremium.quarters.map((x, i) => ({
            x, idx: marineData.warRiskPremium.index[i],
          }))}
          xKey="x"
          areas={[{ key: 'idx', name: 'War Risk Index', color: 'up' }]}
          referenceLine={100}
          height={H}
        />
      ),
    },
    {
      title: 'Vessel Total Loss Incidents & Avg Hull Value',
      subtitle: marineData.vesselTotalLoss.annotation,
      node: (
        <UWDualLineChart
          data={marineData.vesselTotalLoss.years.map((x, i) => ({
            x,
            inc: marineData.vesselTotalLoss.incidents[i],
            val: marineData.vesselTotalLoss.avgHullValueM[i],
          }))}
          xKey="x"
          leftLine={{ key: 'inc', name: 'Losses',         color: 'up' }}
          rightLine={{ key: 'val', name: 'Avg Hull $M', color: 'warn' }}
          height={H}
        />
      ),
    },
  ]
}

function workerscompCharts(country = 'us') {
  const mc     = workersCompData.medCpiVsSeverity
  const fvg    = workersCompData.freqVsGdp
  const rtw    = workersCompData.rtwByInjury
  const sector = getWCSectorData(country)
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
      subtitle: sector.subtitle,
      node: (
        <UWStackedBarChart
          data={sector.data}
          xKey="x"
          bars={sector.bars}
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
    {
      title: 'WC Litigation Rate by State — 2022 vs 2024',
      subtitle: workersCompData.litigationByState.annotation,
      node: (
        <UWGroupedBarChart
          data={workersCompData.litigationByState.states.map((x, i) => ({
            x,
            y22: workersCompData.litigationByState.pct2022[i],
            y24: workersCompData.litigationByState.pct2024[i],
          }))}
          xKey="x"
          bars={[
            { key: 'y22', name: '2022 %', color: 'ink4' },
            { key: 'y24', name: '2024 %', color: 'up' },
          ]}
          height={H}
        />
      ),
    },
    {
      title: 'Opioid Prescription Rate vs Claim Duration',
      subtitle: workersCompData.opioidClaimRate.annotation,
      node: (
        <UWDualLineChart
          data={workersCompData.opioidClaimRate.years.map((x, i) => ({
            x,
            opioid:   workersCompData.opioidClaimRate.claimsWithOpioidsPct[i],
            duration: workersCompData.opioidClaimRate.avgDurationDays[i],
          }))}
          xKey="x"
          leftLine={{ key: 'opioid',   name: 'Claims w/ Opioids %', color: 'warn' }}
          rightLine={{ key: 'duration', name: 'Avg Duration (days)',  color: 'brand' }}
          height={H}
        />
      ),
    },
  ]
}

function healthCharts(country = 'us') {
  const g1      = healthData.glp1Prescriptions
  const di      = healthData.drugCostInflation
  const mh      = healthData.groupHealthMlr
  const chronic = getHealthChronicData(country)
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
      title: 'Chronic Disease Prevalence 2019–2024',
      subtitle: chronic.subtitle,
      node: (
        <UWLineChart
          data={chronic.data}
          xKey="x"
          lines={chronic.lines}
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
    {
      title: 'Mental Health Claims Index by Category',
      subtitle: healthData.mentalHealthClaims.annotation,
      node: (
        <UWLineChart
          data={healthData.mentalHealthClaims.years.map((x, i) => ({
            x,
            anxiety:    healthData.mentalHealthClaims.anxiety[i],
            depression: healthData.mentalHealthClaims.depression[i],
            substance:  healthData.mentalHealthClaims.substance[i],
          }))}
          xKey="x"
          lines={[
            { key: 'anxiety',    name: 'Anxiety',    color: 'warn' },
            { key: 'depression', name: 'Depression', color: 'up' },
            { key: 'substance',  name: 'Substance',  color: 'brand' },
          ]}
          height={H}
        />
      ),
    },
    {
      title: 'Excess Mortality — % Above Expected',
      subtitle: healthData.excessMortality.annotation,
      node: (
        <UWBarChart
          data={healthData.excessMortality.years.map((x, i) => ({
            x, dev: healthData.excessMortality.deviation[i],
          }))}
          xKey="x"
          bars={[{ key: 'dev', name: '% Above Expected', color: 'up' }]}
          referenceLine={0}
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
  const charts = useMemo(
    () => LOB_CHART_FNS[lob]?.(country) || [],
    [lob, country]
  )
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

      {/* ---- charts in 2-col grid ---- */}
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
