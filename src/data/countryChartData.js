/* Country-specific chart data for all 8 LOBs
   Covers US, UK, DE, FR, AU, JP, SG, AE, CA with regional fallbacks */

const YEARS_6 = ['2020','2021','2022','2023','2024','2025']

/* ── TRAVEL: Airline on-time % by country's main carriers ── */
const travelAirlineByCountry = {
  us: {
    subtitle: 'US airlines on-time % — green >80%, amber 70–80%, red <70%',
    airlines: ['Delta','Alaska','United','Southwest','American','Spirit'],
    onTime:   [84, 82, 79, 74, 73, 61],
  },
  gb: {
    subtitle: 'UK airlines on-time % — Jet2 leads, Wizz Air lowest',
    airlines: ['Jet2','British Airways','TUI','easyJet','Ryanair','Wizz Air'],
    onTime:   [84, 81, 77, 76, 75, 71],
  },
  de: {
    subtitle: 'German airlines on-time % — ATC delays drag Eurowings',
    airlines: ['TUI fly','Condor','Lufthansa','easyJet','Eurowings','Ryanair'],
    onTime:   [81, 77, 79, 75, 74, 72],
  },
  fr: {
    subtitle: 'French airlines — ATC staffing shortages drag industry rate',
    airlines: ['Air France','Transavia','easyJet France','Vueling','Corsair','Ryanair'],
    onTime:   [78, 80, 74, 76, 72, 73],
  },
  au: {
    subtitle: 'Australian airlines on-time % — regionals outperform majors',
    airlines: ['Qantas','Virgin Australia','Rex','Jetstar','Bonza','FlyPelican'],
    onTime:   [82, 80, 78, 74, 69, 85],
  },
  jp: {
    subtitle: 'Japanese airlines on-time % — highest globally by margin',
    airlines: ['ANA','JAL','Starflyer','Skymark','Peach','Jetstar Japan'],
    onTime:   [91, 89, 88, 85, 82, 78],
  },
  sg: {
    subtitle: 'Singapore-based carriers — SIA maintains premium performance',
    airlines: ['Singapore Airlines','Scoot','Jetstar Asia','AirAsia','Batik Air','Tiger'],
    onTime:   [88, 81, 77, 74, 71, 70],
  },
  ae: {
    subtitle: 'UAE-based carriers — Emirates leads Gulf region',
    airlines: ['Emirates','Etihad','Air Arabia','flydubai','Wizz Air AUH','Air Arabia AD'],
    onTime:   [86, 84, 82, 79, 74, 78],
  },
  ca: {
    subtitle: 'Canadian airlines on-time % — Porter leads, Flair weakest',
    airlines: ['Porter','WestJet','Air Canada','Sunwing','Flair','Calm Air'],
    onTime:   [82, 80, 77, 72, 68, 86],
  },
  nl: {
    subtitle: 'Netherlands — KLM strong; Amsterdam ATC congestion limits others',
    airlines: ['KLM','Transavia','easyJet NL','TUI fly NL','Corendon','Ryanair'],
    onTime:   [83, 79, 75, 77, 74, 72],
  },
}
const _travelAirlineFallback = {
  subtitle: 'Global airlines on-time % — regional average',
  airlines: ['Carrier A','Carrier B','Carrier C','Carrier D','Carrier E','Carrier F'],
  onTime:   [82, 79, 77, 74, 71, 68],
}
export function getTravelAirlineData(country) {
  return travelAirlineByCountry[country] || travelAirlineFallback(country)
}
function travelAirlineFallback(c) {
  if (['nl','ch','se','no','dk','ie','it','es','pl','be','at','pt','fi'].includes(c))
    return travelAirlineByCountry['de'] || _travelAirlineFallback
  if (['nz','hk','kr','cn','in','th','my','id'].includes(c))
    return travelAirlineByCountry['sg'] || _travelAirlineFallback
  if (['sa','qa','kw','bh'].includes(c))
    return travelAirlineByCountry['ae'] || _travelAirlineFallback
  if (['za','ng','ke','eg'].includes(c))
    return _travelAirlineFallback
  if (['br','mx','ar','cl','co'].includes(c))
    return _travelAirlineFallback
  return _travelAirlineFallback
}

/* ── CYBER: Attack frequency by sector, per country ── */
const cyberSectorByCountry = {
  us: {
    subtitle: 'Annual incidents by sector — healthcare most targeted',
    sectors:   ['Healthcare','Finance','Manufacturing','Retail','Government','Education'],
    incidents: [340, 280, 240, 180, 160, 140],
  },
  gb: {
    subtitle: 'UK annual incidents per NCSC — finance primary target',
    sectors:   ['Finance','Government','Healthcare','Retail','Manufacturing','Education'],
    incidents: [380, 240, 220, 200, 160, 120],
  },
  de: {
    subtitle: 'Germany per BSI — Industrie 4.0 makes manufacturing top target',
    sectors:   ['Manufacturing','Finance','Energy','Healthcare','Government','Retail'],
    incidents: [420, 240, 200, 160, 160, 120],
  },
  fr: {
    subtitle: 'France per ANSSI — government and finance lead',
    sectors:   ['Government','Finance','Healthcare','Manufacturing','Energy','Retail'],
    incidents: [320, 260, 200, 180, 160, 140],
  },
  au: {
    subtitle: 'Australia per ASD Cyber Threat Report',
    sectors:   ['Finance','Healthcare','Government','Retail','Mining','Manufacturing'],
    incidents: [280, 240, 200, 180, 140, 120],
  },
  jp: {
    subtitle: 'Japan per NISC — manufacturing and tech prime targets',
    sectors:   ['Manufacturing','Finance','Tech','Healthcare','Retail','Government'],
    incidents: [360, 240, 180, 160, 160, 140],
  },
  sg: {
    subtitle: 'Singapore per CSA — financial hub drives finance concentration',
    sectors:   ['Finance','Tech','Government','Healthcare','Retail','Manufacturing'],
    incidents: [480, 320, 160, 140, 120, 100],
  },
  ae: {
    subtitle: 'UAE per CIRT — energy and finance primary targets',
    sectors:   ['Finance','Energy','Government','Tech','Healthcare','Retail'],
    incidents: [320, 280, 220, 180, 140, 120],
  },
  ca: {
    subtitle: 'Canada per CCCS — finance and healthcare lead',
    sectors:   ['Finance','Healthcare','Government','Manufacturing','Retail','Education'],
    incidents: [320, 280, 180, 160, 140, 120],
  },
  nl: {
    subtitle: 'Netherlands per NCSC-NL — financial centre and logistics hub',
    sectors:   ['Finance','Logistics','Government','Tech','Healthcare','Manufacturing'],
    incidents: [360, 200, 180, 240, 140, 120],
  },
  br: {
    subtitle: 'Brazil per ANPD — finance and retail largest targets in LATAM',
    sectors:   ['Finance','Retail','Government','Healthcare','Manufacturing','Energy'],
    incidents: [380, 260, 220, 160, 140, 120],
  },
  za: {
    subtitle: 'South Africa per SABRIC — banking sector heavily targeted',
    sectors:   ['Finance','Government','Retail','Healthcare','Energy','Manufacturing'],
    incidents: [360, 240, 200, 140, 120, 100],
  },
}
export function getCyberSectorData(country) {
  if (cyberSectorByCountry[country]) return cyberSectorByCountry[country]
  if (['ch','se','no','dk','ie','it','es','pl','be','at','pt','fi'].includes(country))
    return cyberSectorByCountry['de']
  if (['nz','hk','kr','cn','in','th','my','id'].includes(country))
    return cyberSectorByCountry['sg']
  if (['sa','qa','kw','bh'].includes(country))
    return cyberSectorByCountry['ae']
  if (['mx','ar','cl','co'].includes(country))
    return cyberSectorByCountry['br']
  if (['ng','ke','eg'].includes(country))
    return cyberSectorByCountry['za']
  return cyberSectorByCountry['us']
}

/* ── WORKERS COMP: Employment sector mix by country (quarterly, 8 quarters) ── */
const QUARTERS_8 = ["Q2'23","Q3'23","Q4'23","Q1'24","Q2'24","Q3'24","Q4'24","Q1'25"]
const wcSectorByCountry = {
  us: {
    subtitle: 'US high-risk sector employment (millions) — construction hitting 20-year high',
    quarters: QUARTERS_8,
    bars: [
      { key: 'Construction',  name: 'Construction',  color: 'up' },
      { key: 'Manufacturing', name: 'Manufacturing', color: 'warn' },
      { key: 'Logistics',     name: 'Logistics',     color: 'brand' },
      { key: 'Healthcare',    name: 'Healthcare',    color: 'down' },
    ],
    data: [
      { x:"Q2'23", Construction:7.6, Manufacturing:12.4, Logistics:8.8, Healthcare:19.8 },
      { x:"Q3'23", Construction:7.8, Manufacturing:12.5, Logistics:9.0, Healthcare:20.0 },
      { x:"Q4'23", Construction:7.9, Manufacturing:12.6, Logistics:9.2, Healthcare:20.2 },
      { x:"Q1'24", Construction:8.0, Manufacturing:12.7, Logistics:9.4, Healthcare:20.4 },
      { x:"Q2'24", Construction:7.7, Manufacturing:12.5, Logistics:9.1, Healthcare:20.2 },
      { x:"Q3'24", Construction:7.8, Manufacturing:12.6, Logistics:9.2, Healthcare:20.4 },
      { x:"Q4'24", Construction:7.9, Manufacturing:12.7, Logistics:9.3, Healthcare:20.5 },
      { x:"Q1'25", Construction:8.1, Manufacturing:12.8, Logistics:9.4, Healthcare:20.6 },
    ],
  },
  gb: {
    subtitle: 'UK high-risk sector employment (millions) — healthcare largest risk class',
    quarters: QUARTERS_8,
    bars: [
      { key: 'Healthcare',    name: 'Healthcare',    color: 'down' },
      { key: 'Retail',        name: 'Retail',        color: 'warn' },
      { key: 'Construction',  name: 'Construction',  color: 'up' },
      { key: 'Manufacturing', name: 'Manufacturing', color: 'brand' },
    ],
    data: [
      { x:"Q2'23", Healthcare:1.72, Retail:3.08, Construction:2.08, Manufacturing:2.52 },
      { x:"Q3'23", Healthcare:1.74, Retail:3.10, Construction:2.10, Manufacturing:2.54 },
      { x:"Q4'23", Healthcare:1.76, Retail:3.12, Construction:2.12, Manufacturing:2.55 },
      { x:"Q1'24", Healthcare:1.78, Retail:3.14, Construction:2.14, Manufacturing:2.56 },
      { x:"Q2'24", Healthcare:1.76, Retail:3.11, Construction:2.11, Manufacturing:2.54 },
      { x:"Q3'24", Healthcare:1.78, Retail:3.13, Construction:2.13, Manufacturing:2.55 },
      { x:"Q4'24", Healthcare:1.79, Retail:3.14, Construction:2.15, Manufacturing:2.57 },
      { x:"Q1'25", Healthcare:1.80, Retail:3.20, Construction:2.20, Manufacturing:2.60 },
    ],
  },
  de: {
    subtitle: 'German sector employment (millions) — manufacturing heaviest WC exposure',
    quarters: QUARTERS_8,
    bars: [
      { key: 'Manufacturing', name: 'Manufacturing', color: 'up' },
      { key: 'Healthcare',    name: 'Healthcare',    color: 'down' },
      { key: 'Logistics',     name: 'Logistics',     color: 'brand' },
      { key: 'Construction',  name: 'Construction',  color: 'warn' },
    ],
    data: [
      { x:"Q2'23", Manufacturing:8.12, Healthcare:5.38, Logistics:3.08, Construction:2.64 },
      { x:"Q3'23", Manufacturing:8.18, Healthcare:5.42, Logistics:3.12, Construction:2.68 },
      { x:"Q4'23", Manufacturing:8.22, Healthcare:5.48, Logistics:3.16, Construction:2.72 },
      { x:"Q1'24", Manufacturing:8.24, Healthcare:5.52, Logistics:3.20, Construction:2.76 },
      { x:"Q2'24", Manufacturing:8.18, Healthcare:5.48, Logistics:3.14, Construction:2.70 },
      { x:"Q3'24", Manufacturing:8.20, Healthcare:5.52, Logistics:3.18, Construction:2.74 },
      { x:"Q4'24", Manufacturing:8.28, Healthcare:5.54, Logistics:3.20, Construction:2.76 },
      { x:"Q1'25", Manufacturing:8.40, Healthcare:5.60, Logistics:3.20, Construction:2.80 },
    ],
  },
  au: {
    subtitle: 'Australian sector employment (millions) — mining highest per-capita injury rate',
    quarters: QUARTERS_8,
    bars: [
      { key: 'Healthcare',   name: 'Healthcare',   color: 'down' },
      { key: 'Retail',       name: 'Retail',       color: 'warn' },
      { key: 'Construction', name: 'Construction', color: 'up' },
      { key: 'Mining',       name: 'Mining',       color: 'brand' },
    ],
    data: [
      { x:"Q2'23", Healthcare:1.68, Retail:1.32, Construction:1.12, Mining:0.36 },
      { x:"Q3'23", Healthcare:1.70, Retail:1.34, Construction:1.14, Mining:0.37 },
      { x:"Q4'23", Healthcare:1.72, Retail:1.36, Construction:1.16, Mining:0.38 },
      { x:"Q1'24", Healthcare:1.74, Retail:1.38, Construction:1.18, Mining:0.38 },
      { x:"Q2'24", Healthcare:1.72, Retail:1.34, Construction:1.14, Mining:0.38 },
      { x:"Q3'24", Healthcare:1.74, Retail:1.36, Construction:1.16, Mining:0.39 },
      { x:"Q4'24", Healthcare:1.76, Retail:1.37, Construction:1.18, Mining:0.40 },
      { x:"Q1'25", Healthcare:1.80, Retail:1.40, Construction:1.20, Mining:0.40 },
    ],
  },
  jp: {
    subtitle: 'Japan sector employment (millions) — manufacturing dominant, ageing workforce',
    quarters: QUARTERS_8,
    bars: [
      { key: 'Manufacturing', name: 'Manufacturing', color: 'up' },
      { key: 'Healthcare',    name: 'Healthcare',    color: 'down' },
      { key: 'Retail',        name: 'Retail',        color: 'warn' },
      { key: 'Construction',  name: 'Construction',  color: 'brand' },
    ],
    data: [
      { x:"Q2'23", Manufacturing:10.1, Healthcare:8.0, Retail:7.6, Construction:4.6 },
      { x:"Q3'23", Manufacturing:10.2, Healthcare:8.1, Retail:7.7, Construction:4.7 },
      { x:"Q4'23", Manufacturing:10.3, Healthcare:8.2, Retail:7.8, Construction:4.8 },
      { x:"Q1'24", Manufacturing:10.4, Healthcare:8.2, Retail:7.8, Construction:4.8 },
      { x:"Q2'24", Manufacturing:10.2, Healthcare:8.1, Retail:7.7, Construction:4.7 },
      { x:"Q3'24", Manufacturing:10.3, Healthcare:8.2, Retail:7.8, Construction:4.8 },
      { x:"Q4'24", Manufacturing:10.3, Healthcare:8.2, Retail:7.8, Construction:4.8 },
      { x:"Q1'25", Manufacturing:10.4, Healthcare:8.2, Retail:7.8, Construction:4.8 },
    ],
  },
  ca: {
    subtitle: 'Canada sector employment (millions) — construction boom mirrors US',
    quarters: QUARTERS_8,
    bars: [
      { key: 'Healthcare',    name: 'Healthcare',    color: 'down' },
      { key: 'Retail',        name: 'Retail',        color: 'warn' },
      { key: 'Construction',  name: 'Construction',  color: 'up' },
      { key: 'Manufacturing', name: 'Manufacturing', color: 'brand' },
    ],
    data: [
      { x:"Q2'23", Healthcare:1.14, Retail:2.08, Construction:1.32, Manufacturing:1.52 },
      { x:"Q3'23", Healthcare:1.16, Retail:2.10, Construction:1.34, Manufacturing:1.54 },
      { x:"Q4'23", Healthcare:1.18, Retail:2.12, Construction:1.36, Manufacturing:1.55 },
      { x:"Q1'24", Healthcare:1.20, Retail:2.14, Construction:1.38, Manufacturing:1.56 },
      { x:"Q2'24", Healthcare:1.18, Retail:2.12, Construction:1.34, Manufacturing:1.54 },
      { x:"Q3'24", Healthcare:1.20, Retail:2.14, Construction:1.36, Manufacturing:1.55 },
      { x:"Q4'24", Healthcare:1.21, Retail:2.15, Construction:1.37, Manufacturing:1.57 },
      { x:"Q1'25", Healthcare:1.22, Retail:2.20, Construction:1.40, Manufacturing:1.60 },
    ],
  },
}
export function getWCSectorData(country) {
  if (wcSectorByCountry[country]) return wcSectorByCountry[country]
  if (['nl','ch','se','no','dk','ie','it','es','pl','be','at','pt','fi'].includes(country))
    return wcSectorByCountry['de']
  if (['nz','hk','kr','cn','in','th','my','id','sg'].includes(country))
    return wcSectorByCountry['jp']
  return wcSectorByCountry['us']
}

/* ── CROP: Commodity prices by country (annual 2020–2025) ── */
const cropCommodityByCountry = {
  us: {
    subtitle: 'US prices $/bu — Ukraine war spike 2022, normalising 2023–25',
    years: YEARS_6,
    lines: [
      { key: 'corn',  name: 'Corn $/bu',  color: 'warn' },
      { key: 'wheat', name: 'Wheat $/bu', color: 'brand' },
      { key: 'soy',   name: 'Soy $/bu',   color: 'down' },
    ],
    data: YEARS_6.map((x, i) => ({
      x,
      corn:  [3.80, 5.60, 7.60, 4.80, 4.30, 4.82][i],
      wheat: [5.20, 7.20, 9.20, 6.80, 5.90, 6.14][i],
      soy:   [8.80,12.40,14.80,12.40,10.80,11.20][i],
    })),
  },
  gb: {
    subtitle: 'UK prices £/tonne — oilseed rape most volatile; AHDB data',
    years: YEARS_6,
    lines: [
      { key: 'wheat', name: 'Winter Wheat £/t', color: 'brand' },
      { key: 'rape',  name: 'Oilseed Rape £/t', color: 'warn' },
      { key: 'barley',name: 'Barley £/t',        color: 'down' },
    ],
    data: YEARS_6.map((x, i) => ({
      x,
      wheat:  [172, 208, 320, 218, 192, 204][i],
      rape:   [340, 440, 820, 440, 380, 410][i],
      barley: [148, 188, 268, 184, 162, 172][i],
    })),
  },
  de: {
    subtitle: 'Germany prices €/tonne — rapeseed driven by biodiesel policy',
    years: YEARS_6,
    lines: [
      { key: 'wheat', name: 'Wheat €/t',    color: 'brand' },
      { key: 'rape',  name: 'Rapeseed €/t', color: 'warn' },
      { key: 'rye',   name: 'Rye €/t',      color: 'down' },
    ],
    data: YEARS_6.map((x, i) => ({
      x,
      wheat: [184, 218, 348, 228, 198, 212][i],
      rape:  [368, 472, 864, 468, 402, 436][i],
      rye:   [148, 178, 268, 188, 162, 172][i],
    })),
  },
  fr: {
    subtitle: 'France prices €/tonne — major EU wheat exporter',
    years: YEARS_6,
    lines: [
      { key: 'wheat', name: 'Wheat €/t',   color: 'brand' },
      { key: 'rape',  name: 'Rapeseed €/t',color: 'warn' },
      { key: 'corn',  name: 'Corn €/t',    color: 'down' },
    ],
    data: YEARS_6.map((x, i) => ({
      x,
      wheat: [178, 214, 338, 222, 194, 208][i],
      rape:  [356, 458, 848, 452, 392, 424][i],
      corn:  [148, 198, 288, 188, 168, 178][i],
    })),
  },
  au: {
    subtitle: 'Australia prices A$/tonne — La Niña cycles drive wheat volatility',
    years: YEARS_6,
    lines: [
      { key: 'wheat',  name: 'Wheat A$/t',  color: 'brand' },
      { key: 'canola', name: 'Canola A$/t', color: 'warn' },
      { key: 'barley', name: 'Barley A$/t', color: 'down' },
    ],
    data: YEARS_6.map((x, i) => ({
      x,
      wheat:  [248, 304, 468, 332, 284, 302][i],
      canola: [480, 620,1080, 640, 540, 580][i],
      barley: [188, 248, 368, 252, 212, 228][i],
    })),
  },
  ca: {
    subtitle: 'Canada prices C$/tonne — canola is top insured crop',
    years: YEARS_6,
    lines: [
      { key: 'canola', name: 'Canola C$/t',   color: 'warn' },
      { key: 'wheat',  name: 'Wheat HRS C$/t',color: 'brand' },
      { key: 'barley', name: 'Barley C$/t',   color: 'down' },
    ],
    data: YEARS_6.map((x, i) => ({
      x,
      canola: [484, 728, 984, 688, 552, 612][i],
      wheat:  [228, 308, 468, 312, 264, 288][i],
      barley: [188, 252, 348, 236, 196, 216][i],
    })),
  },
  in: {
    subtitle: 'India prices ₹/quintal — rice and cotton dominate kharif season',
    years: YEARS_6,
    lines: [
      { key: 'rice',   name: 'Rice (Paddy) ₹/q', color: 'brand' },
      { key: 'cotton', name: 'Cotton ₹/q',        color: 'warn' },
      { key: 'wheat',  name: 'Wheat ₹/q',         color: 'down' },
    ],
    data: YEARS_6.map((x, i) => ({
      x,
      rice:   [1868, 1940, 2015, 2183, 2300, 2360][i],
      cotton: [5400, 7800,12800, 6800, 5800, 6200][i],
      wheat:  [1975, 2015, 2015, 2125, 2275, 2425][i],
    })),
  },
  br: {
    subtitle: 'Brazil prices R$/sack (60kg) — soy dominant export crop',
    years: YEARS_6,
    lines: [
      { key: 'soy',  name: 'Soy R$/sack',   color: 'brand' },
      { key: 'corn', name: 'Corn R$/sack',   color: 'warn' },
      { key: 'sugar',name: 'Sugar R$/sack',  color: 'down' },
    ],
    data: YEARS_6.map((x, i) => ({
      x,
      soy:   [128, 174, 198, 148, 136, 142][i],
      corn:  [ 62,  88, 108,  68,  58,  64][i],
      sugar: [ 82, 102, 124,  98,  88,  94][i],
    })),
  },
}
export function getCropCommodityData(country) {
  if (cropCommodityByCountry[country]) return cropCommodityByCountry[country]
  if (['nl','ch','se','no','dk','ie','it','es','pl','be','at','pt','fi'].includes(country))
    return cropCommodityByCountry['de']
  if (['nz','hk','kr','cn','th','my','id'].includes(country))
    return cropCommodityByCountry['au']
  if (['mx','ar','cl','co'].includes(country))
    return cropCommodityByCountry['br']
  if (['za','ng','ke','eg'].includes(country))
    return cropCommodityByCountry['us'] // dollar-quoted global
  return cropCommodityByCountry['us']
}

/* ── MARINE: Piracy/attack incidents by most relevant routes per country ── */
const marineRouteByCountry = {
  us: {
    subtitle: 'Incidents on US trade routes 2024 — Gulf of Guinea remains top risk',
    routes:   ['Gulf of Guinea','Caribbean','South America','Gulf of Mexico','Mediterranean','East Pacific'],
    incidents:[82, 28, 22, 8, 22, 12],
  },
  gb: {
    subtitle: 'Incidents on UK trade routes 2024 — Indian Ocean and Red Sea primary risks',
    routes:   ['Gulf of Guinea','Indian Ocean','Red Sea/Gulf','Mediterranean','North Sea','English Channel'],
    incidents:[82, 64, 48, 22, 4, 2],
  },
  de: {
    subtitle: 'Incidents on German trade routes 2024 — Red Sea diversion impacting Baltic trade',
    routes:   ['Gulf of Guinea','Red Sea/Gulf','Mediterranean','Indian Ocean','Baltic Sea','North Sea'],
    incidents:[82, 48, 22, 64, 2, 4],
  },
  fr: {
    subtitle: 'Incidents on French trade routes 2024',
    routes:   ['Gulf of Guinea','Indian Ocean','Mediterranean','Red Sea/Gulf','Caribbean','Atlantic'],
    incidents:[82, 64, 22, 48, 18, 8],
  },
  au: {
    subtitle: 'Incidents on Australian trade routes 2024 — SE Asia corridor key',
    routes:   ['SE Asia','Indian Ocean','Gulf of Guinea','South Pacific','Torres Strait','Red Sea/Gulf'],
    incidents:[48, 64, 82, 4, 6, 48],
  },
  jp: {
    subtitle: 'Incidents on Japan trade routes 2024 — ME crude supply chain critical',
    routes:   ['SE Asia','Indian Ocean','Red Sea/Gulf','Gulf of Guinea','East China Sea','Pacific'],
    incidents:[48, 64, 48, 82, 8, 6],
  },
  sg: {
    subtitle: 'Incidents on SE Asia trade routes 2024 — Malacca Strait chokepoint',
    routes:   ['SE Asia','Indian Ocean','South China Sea','Malacca Strait','Gulf of Guinea','Red Sea/Gulf'],
    incidents:[48, 64, 32, 18, 82, 48],
  },
  ae: {
    subtitle: 'Incidents on Gulf trade routes 2024 — Houthi risk dominates',
    routes:   ['Red Sea/Gulf','Indian Ocean','Gulf of Guinea','SE Asia','Mediterranean','Strait of Hormuz'],
    incidents:[48, 64, 82, 48, 22, 12],
  },
  ca: {
    subtitle: 'Incidents on Canadian trade routes 2024',
    routes:   ['Gulf of Guinea','Caribbean','South America','Pacific','Arctic','Mediterranean'],
    incidents:[82, 28, 22, 10, 2, 22],
  },
}
export function getMarineRouteData(country) {
  if (marineRouteByCountry[country]) return marineRouteByCountry[country]
  if (['nl','ch','se','no','dk','ie','it','es','pl','be','at','pt','fi'].includes(country))
    return marineRouteByCountry['de']
  if (['nz','hk','kr','cn','in','th','my','id'].includes(country))
    return marineRouteByCountry['sg']
  if (['sa','qa','kw','bh'].includes(country))
    return marineRouteByCountry['ae']
  if (['br','mx','ar','cl','co'].includes(country))
    return marineRouteByCountry['us']
  return marineRouteByCountry['us']
}

/* ── HEALTH: Chronic disease prevalence % by country (2019–2024) ── */
const HEALTH_YEARS = ['2019','2020','2021','2022','2023','2024']
const healthChronicByCountry = {
  us: {
    subtitle: 'US adult prevalence % — obesity and mental health rising fastest',
    lines: [
      { key: 'diabetes',     name: 'Diabetes %',      color: 'brand' },
      { key: 'hypertension', name: 'Hypertension %',  color: 'warn' },
      { key: 'obesity',      name: 'Obesity %',       color: 'up' },
      { key: 'mental',       name: 'Mental Health %', color: '#7C3AED', dashed: true },
    ],
    data: HEALTH_YEARS.map((x, i) => ({
      x,
      diabetes:     [10.5, 10.7, 10.9, 11.1, 11.3, 11.6][i],
      hypertension: [32.0, 32.5, 33.0, 33.5, 34.0, 34.0][i],
      obesity:      [36.0, 37.0, 38.0, 39.5, 40.8, 41.2][i],
      mental:       [18.0, 19.0, 20.0, 21.0, 22.5, 24.0][i],
    })),
  },
  gb: {
    subtitle: 'UK adult prevalence % — mental health rising sharply post-COVID',
    lines: [
      { key: 'diabetes',     name: 'Diabetes %',      color: 'brand' },
      { key: 'hypertension', name: 'Hypertension %',  color: 'warn' },
      { key: 'obesity',      name: 'Obesity %',       color: 'up' },
      { key: 'mental',       name: 'Mental Health %', color: '#7C3AED', dashed: true },
    ],
    data: HEALTH_YEARS.map((x, i) => ({
      x,
      diabetes:     [7.6, 7.8, 8.0, 8.1, 8.2, 8.4][i],
      hypertension: [26.0,26.5,27.0,27.5,28.0,28.0][i],
      obesity:      [26.2,27.0,27.8,28.2,28.5,28.8][i],
      mental:       [18.0,18.5,19.5,20.5,21.5,22.0][i],
    })),
  },
  de: {
    subtitle: 'Germany adult prevalence % — hypertension highest in Western Europe',
    lines: [
      { key: 'diabetes',     name: 'Diabetes %',      color: 'brand' },
      { key: 'hypertension', name: 'Hypertension %',  color: 'warn' },
      { key: 'obesity',      name: 'Obesity %',       color: 'up' },
      { key: 'mental',       name: 'Mental Health %', color: '#7C3AED', dashed: true },
    ],
    data: HEALTH_YEARS.map((x, i) => ({
      x,
      diabetes:     [9.4, 9.6, 9.8,10.0,10.1,10.2][i],
      hypertension: [28.0,28.5,29.0,29.5,30.0,30.0][i],
      obesity:      [21.8,22.2,22.6,23.0,23.2,23.4][i],
      mental:       [14.0,14.5,15.5,16.5,17.5,18.0][i],
    })),
  },
  au: {
    subtitle: 'Australia adult prevalence % — obesity and mental health both elevated',
    lines: [
      { key: 'diabetes',     name: 'Diabetes %',      color: 'brand' },
      { key: 'hypertension', name: 'Hypertension %',  color: 'warn' },
      { key: 'obesity',      name: 'Obesity %',       color: 'up' },
      { key: 'mental',       name: 'Mental Health %', color: '#7C3AED', dashed: true },
    ],
    data: HEALTH_YEARS.map((x, i) => ({
      x,
      diabetes:     [6.8, 7.0, 7.2, 7.4, 7.6, 7.8][i],
      hypertension: [23.0,23.5,24.0,25.0,25.5,26.0][i],
      obesity:      [27.4,27.8,28.2,28.6,29.0,29.2][i],
      mental:       [16.0,16.5,17.5,18.5,19.5,20.0][i],
    })),
  },
  jp: {
    subtitle: 'Japan adult prevalence % — low obesity but high diabetes and hypertension',
    lines: [
      { key: 'diabetes',     name: 'Diabetes %',      color: 'brand' },
      { key: 'hypertension', name: 'Hypertension %',  color: 'warn' },
      { key: 'obesity',      name: 'Obesity %',       color: 'up' },
      { key: 'mental',       name: 'Mental Health %', color: '#7C3AED', dashed: true },
    ],
    data: HEALTH_YEARS.map((x, i) => ({
      x,
      diabetes:     [11.2,11.4,11.6,11.8,12.0,12.0][i],
      hypertension: [36.0,36.5,37.0,37.5,38.0,38.0][i],
      obesity:      [3.8, 4.0, 4.2, 4.4, 4.6, 4.8][i],
      mental:       [5.5, 6.0, 7.0, 7.5, 7.8, 8.0][i],
    })),
  },
  sg: {
    subtitle: 'Singapore adult prevalence % — diabetes prevalence among highest in Asia',
    lines: [
      { key: 'diabetes',     name: 'Diabetes %',      color: 'brand' },
      { key: 'hypertension', name: 'Hypertension %',  color: 'warn' },
      { key: 'obesity',      name: 'Obesity %',       color: 'up' },
      { key: 'mental',       name: 'Mental Health %', color: '#7C3AED', dashed: true },
    ],
    data: HEALTH_YEARS.map((x, i) => ({
      x,
      diabetes:     [12.2,12.4,12.6,12.8,13.0,13.2][i],
      hypertension: [33.0,33.5,34.0,34.5,35.5,36.0][i],
      obesity:      [10.8,11.0,11.4,11.8,12.1,12.4][i],
      mental:       [8.5, 9.0,10.0,10.5,11.5,12.0][i],
    })),
  },
  fr: {
    subtitle: 'France adult prevalence % — lower obesity than UK/US peers',
    lines: [
      { key: 'diabetes',     name: 'Diabetes %',      color: 'brand' },
      { key: 'hypertension', name: 'Hypertension %',  color: 'warn' },
      { key: 'obesity',      name: 'Obesity %',       color: 'up' },
      { key: 'mental',       name: 'Mental Health %', color: '#7C3AED', dashed: true },
    ],
    data: HEALTH_YEARS.map((x, i) => ({
      x,
      diabetes:     [8.2, 8.4, 8.6, 8.7, 8.8, 8.8][i],
      hypertension: [29.0,29.5,30.0,30.5,31.5,32.0][i],
      obesity:      [21.2,21.6,22.0,22.2,22.4,22.6][i],
      mental:       [16.0,17.0,18.0,19.0,19.5,20.0][i],
    })),
  },
}
export function getHealthChronicData(country) {
  if (healthChronicByCountry[country]) return healthChronicByCountry[country]
  if (['nl','ch','se','no','dk','ie','it','es','pl','be','at','pt','fi'].includes(country))
    return healthChronicByCountry['de']
  if (['nz','hk','kr','cn','in','th','my','id'].includes(country))
    return healthChronicByCountry['jp']
  if (['sa','qa','kw','bh','ae'].includes(country))
    return healthChronicByCountry['sg']
  return healthChronicByCountry['us']
}
