/* Stat cards and metadata for each Line of Business.
   Fuel/economic stats are US defaults; locationData.js overrides per country. */

export const LOB_CONFIG = {
  motor: {
    id: 'motor',
    label: 'Motor / Auto',
    icon: '🚗',
    color: '#2A4DDB',
    description: 'Personal and commercial motor, including auto physical damage and liability',
  },
  travel: {
    id: 'travel',
    label: 'Travel',
    icon: '✈️',
    color: '#7C3AED',
    description: 'Single-trip and annual multi-trip travel insurance including cancellation, medical, and delay',
  },
  cyber: {
    id: 'cyber',
    label: 'Cyber',
    icon: '💻',
    color: '#DB2777',
    description: 'Cyber liability, ransomware, data breach response, and business interruption',
  },
  property: {
    id: 'property',
    label: 'Property / CAT',
    icon: '🏠',
    color: '#D97706',
    description: 'Commercial and personal property including catastrophe-exposed risks',
  },
  crop: {
    id: 'crop',
    label: 'Crop / Agriculture',
    icon: '🌾',
    color: '#16A34A',
    description: 'Multi-peril crop insurance, revenue protection, and named peril crop policies',
  },
  marine: {
    id: 'marine',
    label: 'Marine / Cargo',
    icon: '🚢',
    color: '#0891B2',
    description: 'Ocean cargo, hull, war risk, and port liability',
  },
  workerscomp: {
    id: 'workerscomp',
    label: 'Workers Compensation',
    icon: '👷',
    color: '#9333EA',
    description: 'Statutory workers compensation across all industry classes',
  },
  health: {
    id: 'health',
    label: 'Health / Life',
    icon: '🏥',
    color: '#DC2626',
    description: 'Group health, individual health, life insurance, and disability',
  },
}

export const LOB_IDS = Object.keys(LOB_CONFIG)

/* ---- Stat cards (US defaults, country-agnostic where possible) ---- */

export const lobStats = {
  motor: [
    { key: 'fuelPrice',    label: 'Fuel Price',                   value: '$3.42/gal',    delta: '+8.2%',  dir: 'up'   },
    { key: 'vmt',          label: 'VMT Index',                    value: '108.4',         delta: '+2.1%',  dir: 'up'   },
    { key: 'usedCarIndex', label: 'Used Car Price Index',         value: '142.3',         delta: '−3.2%',  dir: 'down' },
    { key: 'cpiTransport', label: 'CPI Transport Component',      value: '+5.8% YoY',     delta: '+0.4pt', dir: 'up'   },
    { key: 'unemployment', label: 'Unemployment Rate',            value: '4.1%',          delta: '→',      dir: 'flat' },
    { key: 'recalls',      label: 'Active NHTSA Recalls',         value: '847',           delta: '+12',    dir: 'up'   },
  ],
  travel: [
    { key: 'jetFuel',      label: 'Jet Fuel Index',               value: '118.4',         delta: '+12%',   dir: 'up'   },
    { key: 'onTime',       label: 'Global Flight On-Time Rate',   value: '76.8%',         delta: '−3.2pt', dir: 'up'   },
    { key: 'advisories',   label: 'Active L3+ Travel Advisories', value: '38 countries',  delta: '+4',     dir: 'up'   },
    { key: 'paxVolume',    label: 'Intl Passenger Volume Index',  value: '104.2',         delta: '+8%',    dir: 'up'   },
    { key: 'disruptions',  label: 'Avg Airport Disruptions MTD',  value: '847 events',    delta: '+6%',    dir: 'up'   },
    { key: 'medSeverity',  label: 'Travel Medical Claims Index',  value: '112',           delta: '+4pts',  dir: 'up'   },
  ],
  cyber: [
    { key: 'ransomware',   label: 'Ransomware Incidents MTD',     value: '2,847',         delta: '+12%',   dir: 'up'   },
    { key: 'cisaAlerts',   label: 'Active CISA Critical Alerts',  value: '12',            delta: '+3',     dir: 'up'   },
    { key: 'breachCost',   label: 'Avg Breach Cost 2025',         value: '$4.9M',         delta: '+8%',    dir: 'up'   },
    { key: 'cves',         label: 'Critical CVEs This Month',     value: '847',           delta: '+18%',   dir: 'up'   },
    { key: 'ransomDemand', label: 'Avg Ransom Demand',            value: '$847K',         delta: '+22%',   dir: 'up'   },
    { key: 'bec',          label: 'BEC Fraud Losses YTD',         value: '$2.1B',         delta: '+14%',   dir: 'up'   },
  ],
  property: [
    { key: 'catLosses',    label: 'Global CAT Losses YTD',        value: '$127.4B',       delta: '+23%',   dir: 'up'   },
    { key: 'wildfires',    label: 'Active Wildfire Perimeters',   value: '14 (US)',        delta: '+2',     dir: 'up'   },
    { key: 'construction', label: 'Construction Cost Index',      value: '142.3',         delta: '+2.1%',  dir: 'up'   },
    { key: 'femaFlood',    label: 'FEMA Flood Declarations YTD',  value: '34',            delta: '+8',     dir: 'up'   },
    { key: 'hurricane',    label: 'Hurricane Season Forecast',    value: 'Extreme Active', delta: '↑ revised', dir: 'up' },
    { key: 'homeLr',       label: 'Homeowners LR Estimate',       value: '82.4%',         delta: '+8pts',  dir: 'up'   },
  ],
  crop: [
    { key: 'drought',      label: 'US Drought Coverage',          value: '42%',           delta: '+8%',    dir: 'up'   },
    { key: 'corn',         label: 'Corn Price',                   value: '$4.82/bu',       delta: '−3%',    dir: 'down' },
    { key: 'wheat',        label: 'Wheat Price',                  value: '$6.14/bu',       delta: '+4%',    dir: 'up'   },
    { key: 'cropCond',     label: 'Crop Condition Good/Excellent', value: '54%',           delta: '−6pt',   dir: 'up'   },
    { key: 'fertilizer',   label: 'Fertilizer Price Index',       value: '118',           delta: '−2%',    dir: 'down' },
    { key: 'usdaDisaster', label: 'USDA Disaster Declarations YTD', value: '28',          delta: '+4',     dir: 'up'   },
  ],
  marine: [
    { key: 'redSea',       label: 'Red Sea Traffic vs Normal',    value: '34%',           delta: '−62%',   dir: 'up'   },
    { key: 'portCong',     label: 'Global Port Congestion Index', value: '118',           delta: '+8pts',  dir: 'up'   },
    { key: 'containerRate',label: 'Drewry Container Rate Index',  value: '312',           delta: '+24%',   dir: 'up'   },
    { key: 'piracy',       label: 'Piracy Incidents MTD',         value: '18',            delta: '+3',     dir: 'up'   },
    { key: 'dwellTime',    label: 'Avg Vessel Dwell Time',        value: '4.2 days',       delta: '+1.1d',  dir: 'up'   },
    { key: 'warRisk',      label: 'War Risk Premium Index',       value: '185',           delta: '+42%',   dir: 'up'   },
  ],
  workerscomp: [
    { key: 'employment',   label: 'Employment Index',             value: '104.2',         delta: '+0.8%',  dir: 'up'   },
    { key: 'construction', label: 'Construction Activity Index',  value: '108',           delta: '+3.2%',  dir: 'up'   },
    { key: 'medCpi',       label: 'Medical CPI',                  value: '+6.8% YoY',     delta: '+1.2pt', dir: 'up'   },
    { key: 'oshaRate',     label: 'OSHA Recordable Rate',         value: '2.7',           delta: '−0.3',   dir: 'down' },
    { key: 'claimDuration',label: 'Avg Claim Duration',           value: '42 days',        delta: '→',      dir: 'flat' },
    { key: 'litigation',   label: 'WC Litigation Rate',           value: '18.4%',         delta: '+0.8pt', dir: 'up'   },
  ],
  health: [
    { key: 'glp1',         label: 'GLP-1 Rx Growth YoY',         value: '+387%',         delta: '↑ accel', dir: 'up'  },
    { key: 'obesity',      label: 'Obesity Rate (US)',            value: '41.2%',         delta: '−0.8pt', dir: 'down' },
    { key: 'flu',          label: 'CDC Flu Activity',             value: 'HIGH — 18 states', delta: '+11 states', dir: 'up' },
    { key: 'mentalHealth', label: 'Mental Health Claims Index',   value: '128',           delta: '+14%',   dir: 'up'   },
    { key: 'specialtyDrug',label: 'Specialty Drug Cost Inflation', value: '+12.4%',       delta: '+1.8pt', dir: 'up'   },
    { key: 'mortality',    label: 'Mortality Deviation',          value: '+2.1%',         delta: '+0.4pt', dir: 'up'   },
  ],
}

/* Key insight callouts per LOB */
export const lobInsights = {
  motor: [
    { text: 'Fuel ▼ → Miles Driven ▲ in 60 days → Frequency risk elevated', type: 'watch' },
    { text: 'Parts inflation driving severity +8.4% YoY — above historical avg', type: 'up' },
  ],
  travel: [
    { text: 'Middle East tensions → evacuation sublimit review recommended', type: 'watch' },
    { text: 'Jet fuel ▲12% → airfare pressure → travel demand softening signal', type: 'up' },
  ],
  cyber: [
    { text: '12 active CISA critical alerts → elevated ransomware risk next 30 days', type: 'up' },
    { text: 'Manufacturing sector: 3rd highest attack frequency — review appetite', type: 'watch' },
  ],
  property: [
    { text: 'Construction costs ▲42% since 2019 → ITV adequacy gap widening', type: 'up' },
    { text: '2025 hurricane season: extremely active forecast → Gulf Coast review required', type: 'watch' },
  ],
  crop: [
    { text: '42% of US in drought → yield deviation risk elevated', type: 'up' },
    { text: 'Ukraine corridor uncertainty → wheat price volatility persists', type: 'watch' },
  ],
  marine: [
    { text: 'Red Sea at 34% normal volume → Cape diversion adding 14 days, spoilage claims elevated', type: 'up' },
    { text: 'War risk premiums ▲42% → pricing adequacy review recommended', type: 'watch' },
  ],
  workerscomp: [
    { text: 'Medical CPI ▲6.8% → severity pressure above plan', type: 'up' },
    { text: 'Construction sector ▲3.2% → exposure growth in highest-risk class', type: 'watch' },
  ],
  health: [
    { text: 'GLP-1 adoption accelerating → long-term morbidity improvement but short-term drug cost pressure', type: 'watch' },
    { text: 'Flu HIGH in 18 states → STD claims spike expected in 3–4 weeks', type: 'up' },
  ],
}

/* Role list for Step 3 of builder */
export const ROLES = [
  { id: 'underwriter',    label: 'Underwriter' },
  { id: 'actuary',        label: 'Actuary' },
  { id: 'portfolio_mgr',  label: 'Portfolio Manager' },
  { id: 'cuo',            label: 'Chief Underwriting Officer' },
  { id: 'mga',            label: 'MGA Principal' },
  { id: 'risk_mgr',       label: 'Risk Manager' },
  { id: 'reinsurance',    label: 'Reinsurance Analyst' },
]
