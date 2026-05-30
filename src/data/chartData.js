/* All chart datasets for UWAII — 8 LOBs
   Time series are realistic with COVID visible in 2020,
   Ukraine war spike in 2022, post-COVID normalization, 2024-25 trends.
   Monthly labels are abbreviated where needed. */

/* ============================================================
   SHARED MONTH LABELS
   ============================================================ */
// 24-month window: Jun 2024 – May 2026
export const MONTHS_24 = [
  'Jun 24','Jul 24','Aug 24','Sep 24','Oct 24','Nov 24',
  'Dec 24','Jan 25','Feb 25','Mar 25','Apr 25','May 25',
  'Jun 25','Jul 25','Aug 25','Sep 25','Oct 25','Nov 25',
  'Dec 25','Jan 26','Feb 26','Mar 26','Apr 26','May 26',
]

// 36-month window: Jun 2023 – May 2026
export const MONTHS_36 = [
  'Jun 23','Jul 23','Aug 23','Sep 23','Oct 23','Nov 23',
  'Dec 23','Jan 24','Feb 24','Mar 24','Apr 24','May 24',
  'Jun 24','Jul 24','Aug 24','Sep 24','Oct 24','Nov 24',
  'Dec 24','Jan 25','Feb 25','Mar 25','Apr 25','May 25',
  'Jun 25','Jul 25','Aug 25','Sep 25','Oct 25','Nov 25',
  'Dec 25','Jan 26','Feb 26','Mar 26','Apr 26','May 26',
]


/* ============================================================
   MOTOR / AUTO
   ============================================================ */
export const motorData = {
  // Chart 1: Fuel Price vs Claim Frequency (dual axis, 24mo)
  fuelVsFrequency: {
    months: MONTHS_24,
    fuelPrice: [
      3.52, 3.61, 3.48, 3.38, 3.22, 3.18,
      3.24, 3.31, 3.27, 3.35, 3.40, 3.38,
      3.55, 3.68, 3.71, 3.62, 3.44, 3.39,
      3.48, 3.56, 3.52, 3.47, 3.42, 3.42,
    ],
    frequencyIndex: [
      98.2, 100.4, 102.1, 101.8, 99.6, 97.4,
      96.2, 97.8, 98.6, 99.1, 100.2, 101.4,
      99.8, 101.2, 103.4, 104.1, 103.8, 102.6,
      101.8, 102.4, 103.2, 104.6, 106.1, 108.4,
    ],
    annotation: '60-day lag: lower fuel → more miles → higher frequency',
  },

  // Chart 2: Used Car Price Index vs Severity (dual axis, 24mo)
  usedCarVsSeverity: {
    months: MONTHS_24,
    usedCarIndex: [
      149.2, 147.8, 146.4, 145.1, 143.8, 142.4,
      143.2, 144.1, 143.6, 143.0, 142.8, 142.5,
      142.8, 143.4, 143.8, 143.2, 142.9, 142.6,
      142.4, 142.3, 142.3, 142.4, 142.3, 142.3,
    ],
    severityIndex: [
      132.4, 133.1, 133.8, 134.2, 134.8, 135.2,
      135.8, 136.4, 137.0, 137.6, 138.1, 138.6,
      139.2, 139.8, 140.4, 141.0, 141.6, 142.1,
      142.8, 143.4, 144.0, 144.6, 145.1, 145.6,
    ],
    annotation: 'Post-COVID used car spike drove severity; now normalizing but elevated',
  },

  // Chart 5: EV Adoption vs Repair Cost Index (dual axis, annual)
  evAdoptionVsRepair: {
    years: ['2019','2020','2021','2022','2023','2024','2025'],
    evSharePct: [2.1, 2.8, 4.6, 7.2, 10.4, 14.8, 19.2],
    repairCostIdx: [100, 101, 104, 109, 118, 129, 138],
    annotation: 'EV repairs cost 20–30% more — fleet share growing rapidly',
  },

  // Chart 6: NHTSA Safety Recalls (dual axis, annual)
  nhtsaRecalls: {
    years: ['2019','2020','2021','2022','2023','2024','2025'],
    campaigns: [741, 698, 712, 758, 798, 821, 847],
    vehiclesAffectedM: [28.4, 31.2, 29.8, 33.4, 36.8, 40.2, 42.1],
    annotation: 'More EV software recalls emerging alongside traditional safety recalls',
  },

  // Chart 3: Miles Traveled Seasonal Pattern (area, 24mo)
  milesTraveled: {
    months: MONTHS_24,
    currentYear: [
      104.2, 107.8, 110.4, 107.2, 103.8, 98.6,
      96.4, 98.8, 102.4, 106.2, 108.1, 111.2,
      106.8, 110.4, 112.8, 109.4, 105.2, 100.1,
      98.2, 100.6, 104.2, 108.1, 109.8, 112.6,
    ],
    priorYear: [
      102.1, 105.4, 108.2, 105.0, 101.6, 96.8,
      94.8, 97.2, 100.8, 104.6, 106.4, 109.8,
      104.2, 107.8, 110.4, 107.2, 103.8, 98.6,
      96.4, 98.8, 102.4, 106.2, 108.1, 111.2,
    ],
  },

  // Chart 4: CPI vs Average Claim Severity (line, 36mo)
  cpiVsSeverity: {
    months: MONTHS_36,
    cpiTransport: [
      112.4, 113.2, 114.1, 113.8, 114.6, 115.2,
      116.0, 116.8, 117.4, 118.2, 118.8, 119.4,
      120.2, 121.0, 121.6, 122.4, 123.0, 123.6,
      124.4, 125.2, 125.8, 126.6, 127.2, 127.8,
      128.6, 129.4, 130.0, 130.8, 131.4, 132.0,
      132.8, 133.6, 134.2, 135.0, 135.6, 136.2,
    ],
    avgSeverity: [
      124.6, 125.4, 126.2, 126.8, 127.6, 128.4,
      129.2, 130.0, 130.8, 131.6, 132.4, 133.2,
      134.0, 134.8, 135.6, 136.4, 137.2, 138.0,
      138.8, 139.6, 140.4, 141.2, 142.0, 142.8,
      143.6, 144.4, 145.2, 146.0, 146.8, 147.6,
      148.4, 149.2, 150.0, 150.8, 151.6, 152.4,
    ],
  },
}

/* ============================================================
   TRAVEL
   ============================================================ */
export const travelData = {
  // Chart 1: Jet Fuel vs Average Airfare (dual axis, 24mo)
  jetFuelVsAirfare: {
    months: MONTHS_24,
    jetFuelIndex: [
      88.4, 90.2, 92.6, 95.1, 93.4, 91.2,
      92.8, 94.6, 93.8, 96.4, 99.2, 103.4,
      106.8, 110.2, 112.6, 109.8, 107.4, 104.6,
      108.2, 112.4, 114.8, 116.2, 118.4, 118.4,
    ],
    avgAirfareIndex: [
      91.2, 92.8, 94.6, 96.8, 94.2, 92.4,
      93.6, 96.2, 95.8, 98.4, 101.6, 106.2,
      110.4, 114.8, 117.2, 113.6, 110.8, 107.4,
      111.8, 116.4, 119.2, 120.6, 122.8, 123.4,
    ],
    annotation: 'Jet fuel leads airfare by ~30 days',
  },

  // Chart 2: Travel Advisory Levels by Region (stacked area, 24mo)
  advisoryLevels: {
    months: MONTHS_24,
    // Count of Level 3+ advisories per region
    middleEast: [8,9,10,11,12,10,10,11,12,13,12,11,12,13,14,15,14,13,12,13,14,15,15,16],
    africa:     [6,6,7,7,8,7,7,8,8,9,8,8,9,9,10,10,9,9,9,10,10,11,11,11],
    asia:       [4,4,5,5,5,4,4,5,5,6,5,5,5,6,6,7,6,6,6,7,7,7,7,7],
    americas:   [3,3,4,4,4,3,3,4,4,4,4,4,4,5,5,5,4,4,4,5,5,5,5,5],
    europe:     [2,2,2,3,3,2,2,2,3,3,3,3,3,4,4,4,3,3,3,4,4,4,4,4],
  },

  // Chart 3: Flight On-Time by Airline (bar — static snapshot)
  flightOnTime: {
    airlines: ['Delta', 'Alaska', 'United', 'Southwest', 'American', 'Spirit'],
    onTimeRate: [84, 82, 79, 74, 73, 61],
    benchmarks: { good: 80, warn: 70 },
  },

  // Chart 4: International Passenger Volume (bar, 24mo)
  passengerVolume: {
    months: MONTHS_24,
    volumeIndex: [
      98.4, 104.8, 112.6, 108.2, 102.4, 95.6,
      92.8, 96.4, 100.2, 104.6, 108.8, 114.2,
      101.4, 108.6, 116.8, 112.4, 106.2, 98.4,
      95.6, 99.8, 104.4, 108.8, 112.6, 116.2,
    ],
  },

  // Chart 5: Medical Evacuation Incidents by Region (bar)
  medEvacByRegion: {
    regions: ['Middle East','Africa','SE Asia','Americas','Pacific','Europe'],
    incidentsPer10k: [4.2, 5.1, 3.8, 2.9, 1.8, 1.4],
    avgCostK: [48, 39, 42, 31, 67, 22],
  },

  // Chart 6: Claims by Trip Type — 24mo (multi-line)
  claimsByTripType: {
    months: MONTHS_24,
    leisure:   [72,74,78,71,68,62,65,68,72,75,77,80,81,83,86,82,79,74,77,80,83,86,88,90],
    business:  [48,46,48,51,52,48,46,49,51,52,50,51,52,54,55,53,52,50,51,52,53,54,55,56],
    adventure: [18,19,22,20,16,14,15,16,18,20,21,22,23,24,25,24,22,20,21,22,23,24,25,26],
  },
}

/* ============================================================
   CYBER
   ============================================================ */
// Monthly ransomware incidents 2019–2025 (84 months, Jan 2019 – May 2025)
const cyberMonths84 = []
for (let y = 2019; y <= 2025; y++) {
  const endM = y === 2025 ? 5 : 12
  for (let m = 1; m <= endM; m++) {
    cyberMonths84.push(`${['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'][m-1]} ${y}`)
  }
}

export const cyberData = {
  // Chart 1: Ransomware Incidents Monthly 2019–2025 (exponential growth)
  ransomwareTrend: {
    months: cyberMonths84,
    incidents: [
      // 2019 (12)
      98,102,108,115,122,118,130,128,135,142,148,156,
      // 2020 (12) — COVID acceleration
      165,172,185,204,226,248,271,294,318,342,368,395,
      // 2021 (12) — Colonial Pipeline year
      418,445,472,501,533,568,612,658,706,756,808,862,
      // 2022 (12) — Ukraine war, RaaS proliferation
      918,976,1038,1104,1172,1244,1318,1396,1478,1564,1654,1748,
      // 2023 (12)
      1846,1948,2054,2164,2278,2396,2414,2428,2436,2448,2458,2468,
      // 2024 (12)
      2484,2502,2522,2544,2568,2594,2622,2652,2684,2718,2754,2792,
      // 2025 (5)
      2814,2826,2836,2844,2847,
    ],
    annotations: [
      { month: 'May 2021', label: 'Colonial Pipeline' },
      { month: 'Nov 2022', label: 'ChatGPT launch → BEC surge' },
    ],
  },

  // Chart 2: Attack Frequency by Industry Sector (horizontal bar)
  sectorFrequency: {
    sectors: ['Healthcare','Finance','Manufacturing','Retail','Government','Education','Energy','Tech'],
    incidents2024: [340, 280, 240, 180, 160, 140, 120, 110],
  },

  // Chart 3: Average Breach Cost 2018–2025 (line)
  breachCostTrend: {
    years: ['2018','2019','2020','2021','2022','2023','2024','2025'],
    avgCostM: [3.21, 3.41, 3.62, 3.86, 4.12, 4.42, 4.68, 4.88],
    annotation: 'GDPR enforcement began 2018',
  },

  // Chart 4: Attack Vector Breakdown 2024 (donut)
  attackVectors: {
    vectors: ['Phishing','RDP Compromise','Software Vulnerability','Supply Chain','Insider','Other'],
    percentages: [36, 24, 19, 12, 6, 3],
  },

  // Chart 5: Average Ransom Demand Trend 2019–2025 (line)
  ransomDemandTrend: {
    years: ['2019','2020','2021','2022','2023','2024','2025'],
    avgDemandK: [84, 178, 322, 498, 621, 714, 847],
    medianDemandK: [42, 84, 148, 198, 284, 326, 412],
    annotation: 'Big-game hunting: attackers targeting larger organisations with higher demands',
  },

  // Chart 6: Mean Time to Detect & Contain (days) 2019–2025 (dual line)
  dwellTime: {
    years: ['2019','2020','2021','2022','2023','2024','2025'],
    daysToDetect: [146, 132, 112, 98, 84, 71, 58],
    daysToContain: [312, 287, 241, 198, 172, 148, 131],
    annotation: 'Improving but still 58 days median before discovery — IR cost driver',
  },
}

/* ============================================================
   PROPERTY / CAT
   ============================================================ */
export const propertyData = {
  // Chart 1: Annual Insured CAT Losses 2000–2024 (bar)
  catLossesAnnual: {
    years: Array.from({length: 25}, (_, i) => String(2000 + i)),
    lossesB: [
      38, 27, 15, 20, 48, 101, 18, 28, 55, 26,
      48, 110, 72, 44, 31, 35, 58, 144, 90, 60,
      82, 120, 132, 108, 127,
    ],
    avgLine: 68,
    bigYearThreshold: 100,
  },

  // Chart 2: Construction Cost Index 2015–2025 (annual)
  constructionCost: {
    years: ['2015','2016','2017','2018','2019','2020','2021','2022','2023','2024','2025'],
    index: [100, 102, 104, 107, 110, 112, 124, 136, 141, 142, 143],
    annotation: 'Post-COVID materials & labour inflation',
  },

  // Chart 3: CAT Losses by Peril 2020–2024 (stacked bar, annual)
  catByPeril: {
    years: ['2020','2021','2022','2023','2024'],
    hurricane:  [28, 38, 44, 32, 36],
    wildfire:   [14, 22, 18, 16, 18],
    hailWind:   [18, 28, 36, 38, 42],
    flood:      [10, 18, 20, 14, 18],
    earthquake: [6,  8,  8,  6,  8],
    other:      [6,  6,  6,  2,  5],
  },

  // Chart 4: Wildfire Acres Burned 2010–2024 (area)
  wildfireAcres: {
    years: ['2010','2011','2012','2013','2014','2015','2016','2017','2018','2019','2020','2021','2022','2023','2024'],
    millionAcres: [3.4, 8.7, 9.1, 4.3, 3.6, 10.1, 5.5, 9.8, 8.8, 4.7, 10.1, 7.1, 7.6, 2.6, 8.4],
  },

  // Chart 5: Protection Gap — Insured vs Total Economic Losses $B (grouped bar)
  protectionGap: {
    years: ['2015','2016','2017','2018','2019','2020','2021','2022','2023','2024'],
    totalEconB: [74, 92, 340, 165, 112, 210, 270, 298, 254, 280],
    insuredB:   [38, 54, 144,  90,  60,  82, 120, 132, 108, 127],
    annotation: 'Insured share only 40–50% — protection gap widening with climate risk',
  },

  // Chart 6: Reinsurance Rate Index 2017–2025 (line)
  reinsRateIndex: {
    years: ['2017','2018','2019','2020','2021','2022','2023','2024','2025'],
    index: [100, 104, 108, 112, 128, 148, 172, 164, 158],
    annotation: '2017–2023 hard market cycle driven by consecutive loss years',
  },
}

/* ============================================================
   CROP / AGRICULTURE
   ============================================================ */
export const cropData = {
  // Chart 1: US Drought Coverage 2022–2025 (area, monthly ~36mo)
  droughtCoverage: {
    months: MONTHS_36,
    droughtPct: [
      // Jun–Dec 2023
      38, 44, 48, 42, 36, 28, 24,
      // Jan–Jun 2024
      22, 26, 30, 36, 38,
      // Jul–Dec 2024
      40, 44, 48, 46, 40, 32,
      // Jan–Jun 2025
      28, 32, 36, 40, 44, 46,
      // Jul–Dec 2025 (projected/recent)
      50, 54, 58, 52, 46, 38,
      // Jan–May 2026
      34, 36, 40, 44, 42,
    ],
  },

  // Chart 2: Commodity Prices 2020–2025 (multi-line, annual)
  commodityPrices: {
    years: ['2020','2021','2022','2023','2024','2025'],
    corn:  [3.56, 5.24, 7.60, 5.64, 4.44, 4.82],
    wheat: [4.98, 6.16, 9.20, 6.84, 5.44, 6.14],
    soy:   [9.24, 12.84, 14.60, 12.16, 10.84, 11.24],
    annotation: 'Ukraine war spike 2022',
  },

  // Chart 3: Crop Insurance Indemnity Ratio 2010–2024 (bar)
  indemnityRatio: {
    years: ['2010','2011','2012','2013','2014','2015','2016','2017','2018','2019','2020','2021','2022','2023','2024'],
    ratio: [0.84, 0.92, 1.45, 0.78, 0.88, 0.72, 0.81, 0.94, 1.08, 0.76, 0.88, 0.82, 0.95, 1.02, 0.91],
    annotation: '2012 major drought — highest loss year',
  },

  // Chart 4: Precipitation vs Yield Deviation (dual axis, monthly current season)
  precipVsYield: {
    months: ['Mar','Apr','May','Jun','Jul','Aug','Sep'],
    precipIndex: [94, 82, 74, 68, 62, 58, null],
    yieldDeviation: [0, -2, -4, -6, -9, -12, null],
    fiveYearAvgPrecip: [100, 100, 100, 100, 100, 100, 100],
  },

  // Chart 5: ENSO Index vs Yield Deviation (dual axis, annual)
  ensoImpact: {
    years: ['2010','2011','2012','2013','2014','2015','2016','2017','2018','2019','2020','2021','2022','2023','2024'],
    ensoIndex: [0.8,-1.2,-0.2,0.4,0.2,1.5,-1.6,0.6,0.8,0.3,-1.8,-1.1,0.2,1.8,0.4],
    yieldDeviation: [-2.1,4.2,-8.4,1.8,1.2,-3.4,6.8,-1.8,-2.4,-0.8,4.2,2.8,-6.2,-4.8,-1.2],
    annotation: 'El Niño (positive) → drought risk; La Niña (negative) → flood risk',
  },

  // Chart 6: Fertilizer Price Index 2024–2026 (area, monthly)
  fertilizerIndex: {
    months: MONTHS_24,
    index: [
      128,126,123,121,119,117,116,115,114,115,116,117,
      118,118,117,116,115,115,115,116,117,118,118,118,
    ],
    annotation: 'Post-Ukraine spike normalising — still 18% above 2020 levels',
  },
}

/* ============================================================
   MARINE / CARGO
   ============================================================ */
export const marineData = {
  // Chart 1: Red Sea Traffic Volume 2023–2025 (monthly ~28mo)
  redSeaTraffic: {
    months: [
      'Oct 23','Nov 23','Dec 23','Jan 24','Feb 24','Mar 24','Apr 24','May 24',
      'Jun 24','Jul 24','Aug 24','Sep 24','Oct 24','Nov 24','Dec 24',
      'Jan 25','Feb 25','Mar 25','Apr 25','May 25','Jun 25',
    ],
    volumeNormal: [
      100, 98, 62, 34, 31, 33, 34, 35,
      34, 33, 35, 34, 33, 34, 35,
      34, 33, 34, 34, 34, 34,
    ],
    annotation: 'Houthi attacks begin Dec 2023',
  },

  // Chart 2: Container Shipping Rates 2020–2025 (monthly, 66mo)
  containerRates: {
    months: [
      'Jan 20','Apr 20','Jul 20','Oct 20',
      'Jan 21','Apr 21','Jul 21','Oct 21',
      'Jan 22','Apr 22','Jul 22','Oct 22',
      'Jan 23','Apr 23','Jul 23','Oct 23',
      'Jan 24','Apr 24','Jul 24','Oct 24',
      'Jan 25','Apr 25',
    ],
    drewryIndex: [
      100, 105, 130, 180,
      260, 380, 480, 460,
      420, 380, 280, 180,
      120, 100, 88, 92,
      140, 210, 280, 300,
      312, 318,
    ],
    annotations: [
      { month: 'Jul 21', label: 'COVID supply chain peak' },
      { month: 'Dec 23', label: 'Red Sea crisis begins' },
    ],
  },

  // Chart 3: Port Congestion Index 2020–2025
  portCongestion: {
    months: [
      'Jan 20','Apr 20','Jul 20','Oct 20',
      'Jan 21','Apr 21','Jul 21','Oct 21',
      'Jan 22','Apr 22','Jul 22','Oct 22',
      'Jan 23','Apr 23','Jul 23','Oct 23',
      'Jan 24','Apr 24','Jul 24','Oct 24',
      'Jan 25','Apr 25',
    ],
    index: [
      100, 108, 118, 130,
      148, 158, 165, 162,
      148, 128, 108, 95,
      90, 88, 88, 90,
      94, 100, 108, 114,
      118, 120,
    ],
  },

  // Chart 4: Piracy Incidents by Region 2024 (horizontal bar)
  piracyByRegion: {
    regions: ['Gulf of Guinea','Indian Ocean','Southeast Asia','Latin America','Mediterranean','Other'],
    incidents2024: [82, 64, 48, 38, 22, 18],
  },

  // Chart 5: War Risk Premium Index (line, quarterly)
  warRiskPremium: {
    quarters: ['Q1 23','Q2 23','Q3 23','Q4 23','Q1 24','Q2 24','Q3 24','Q4 24','Q1 25','Q2 25'],
    index: [100, 102, 104, 128, 162, 174, 181, 183, 185, 187],
    annotation: 'Houthi attacks drove 87% jump in war risk premiums from Q4 2023',
  },

  // Chart 6: Vessel Total Loss & Average Hull Value (dual axis, annual)
  vesselTotalLoss: {
    years: ['2019','2020','2021','2022','2023','2024'],
    incidents: [41, 49, 54, 58, 62, 68],
    avgHullValueM: [12.4, 14.8, 16.2, 18.4, 22.1, 26.8],
    annotation: 'Incidents rising + hull values rising = compounding severity pressure',
  },
}

/* ============================================================
   WORKERS COMPENSATION
   ============================================================ */
export const workersCompData = {
  // Chart 1: Medical CPI vs Claim Severity (dual axis, 36mo)
  medCpiVsSeverity: {
    months: MONTHS_36,
    medCpi: [
      // Percentage YoY, rising
      5.2, 5.4, 5.6, 5.8, 5.8, 6.0,
      6.0, 6.2, 6.2, 6.2, 6.4, 6.4,
      6.4, 6.6, 6.6, 6.6, 6.8, 6.8,
      6.8, 6.8, 6.8, 6.8, 6.8, 6.8,
      6.8, 6.8, 6.8, 6.8, 6.8, 6.8,
      6.8, 6.8, 6.8, 6.8, 6.8, 6.8,
    ],
    severityIndex: [
      118, 119, 120, 121, 122, 123,
      124, 125, 126, 127, 128, 129,
      130, 131, 132, 133, 134, 135,
      136, 137, 138, 139, 140, 141,
      142, 143, 144, 145, 146, 147,
      148, 149, 150, 151, 152, 153,
    ],
    annotation: 'Medical CPI leads severity by ~90 days',
  },

  // Chart 2: Employment by High-Risk Sector (stacked bar, 24mo)
  employmentBySector: {
    months: MONTHS_24.filter((_, i) => i % 3 === 0), // quarterly
    construction:   [7.4, 7.5, 7.6, 7.7, 7.8, 7.9, 8.0, 8.1],
    manufacturing:  [12.8, 12.9, 13.0, 13.0, 13.1, 13.1, 13.2, 13.2],
    logistics:      [6.2, 6.3, 6.4, 6.4, 6.5, 6.5, 6.6, 6.6],
    healthcare:     [18.2, 18.4, 18.6, 18.8, 19.0, 19.2, 19.4, 19.6],
  },

  // Chart 3: Claim Frequency vs Economic Activity (dual axis, 36mo)
  freqVsGdp: {
    months: MONTHS_36,
    gdpGrowth: [
      2.4, 2.6, 2.8, 2.6, 2.4, 2.2,
      2.4, 2.6, 2.8, 3.0, 2.8, 2.6,
      2.4, 2.6, 2.8, 3.0, 2.8, 2.6,
      2.8, 3.0, 3.2, 3.0, 2.8, 2.6,
      2.8, 3.0, 3.2, 3.0, 2.8, 2.6,
      2.8, 3.0, 3.2, 3.0, 2.8, 2.6,
    ],
    freqIndex: [
      98, 99, 100, 100, 99, 98,
      99, 100, 101, 102, 102, 101,
      100, 101, 102, 103, 103, 102,
      101, 102, 103, 104, 104, 103,
      102, 103, 104, 105, 105, 104,
      103, 104, 105, 106, 106, 105,
    ],
  },

  // Chart 4: Return-to-Work Duration by Injury Type (horizontal bar)
  rtwByInjury: {
    injuryTypes: ['Back/Spine','Shoulder','Knee','Fracture','Strain','Laceration'],
    avgDays: [68, 61, 54, 44, 22, 12],
  },

  // Chart 5: WC Litigation Rate by State — 2022 vs 2024 (grouped bar)
  litigationByState: {
    states: ['CA','FL','NY','IL','TX','PA','OH','GA','NJ','NC'],
    pct2022: [28.4, 22.1, 24.8, 18.2, 12.4, 16.8, 14.2, 18.6, 20.4, 14.8],
    pct2024: [31.2, 24.8, 26.4, 19.6, 13.8, 17.4, 14.8, 20.2, 22.1, 16.2],
    annotation: 'Social inflation driving litigation up in all high-litigation states',
  },

  // Chart 6: Opioid Prescription Rate vs Avg Claim Duration (dual axis, annual)
  opioidClaimRate: {
    years: ['2015','2016','2017','2018','2019','2020','2021','2022','2023','2024'],
    claimsWithOpioidsPct: [62.4, 61.8, 60.2, 55.4, 48.6, 42.4, 38.2, 34.8, 31.4, 28.6],
    avgDurationDays: [84, 86, 92, 88, 78, 72, 66, 61, 58, 54],
    annotation: 'Opioid stewardship reducing both prescription rate and claim duration',
  },
}

/* ============================================================
   HEALTH / LIFE
   ============================================================ */
const glp1Years = ['2019','2020','2021','2022','2023','2024','2025']

export const healthData = {
  // Chart 1: GLP-1 Prescription Volume 2019–2025 (line, exponential)
  glp1Prescriptions: {
    years: glp1Years,
    indexVol: [100, 112, 168, 284, 412, 524, 587],
    annotations: [
      { year: '2021', label: 'Ozempic T2D approval' },
      { year: '2022', label: 'Wegovy obesity approval' },
    ],
    insight: 'First decline in obesity rate since 2010 now visible in data',
  },

  // Chart 2: Chronic Disease Prevalence 2010–2024 (multi-line %)
  chronicDisease: {
    years: ['2010','2011','2012','2013','2014','2015','2016','2017','2018','2019','2020','2021','2022','2023','2024'],
    diabetes:     [10.5, 10.6, 10.7, 10.8, 10.9, 11.0, 11.1, 11.2, 11.3, 11.4, 11.4, 11.5, 11.5, 11.6, 11.6],
    hypertension: [32.0, 32.2, 32.4, 32.6, 32.8, 33.0, 33.2, 33.4, 33.6, 33.8, 33.8, 34.0, 34.0, 34.0, 34.0],
    obesity:      [36.0, 36.5, 37.2, 37.8, 38.2, 38.8, 39.4, 40.0, 40.6, 41.2, 41.8, 42.0, 42.2, 41.8, 41.2],
    mentalHealth: [18.0, 18.4, 18.8, 19.2, 19.6, 20.0, 20.6, 21.2, 21.8, 22.4, 23.0, 23.8, 24.2, 24.6, 24.8],
  },

  // Chart 3: Drug Cost Inflation by Category 2020–2024 (grouped bar)
  drugCostInflation: {
    years: ['2020','2021','2022','2023','2024'],
    glp1:           [8.2, 14.4, 28.6, 42.4, 38.8],
    specialty:      [7.4,  8.2, 10.4, 12.8, 14.2],
    oncology:       [6.8,  7.6,  9.2, 11.4, 12.8],
    cardiovascular: [3.4,  3.8,  4.6,  5.4,  5.8],
    generic:        [0.8, -0.4, -1.2, -0.8, -0.4],
  },

  // Chart 4: Group Health MLR Trend 2015–2024 (bar with trend line)
  groupHealthMlr: {
    years: ['2015','2016','2017','2018','2019','2020','2021','2022','2023','2024'],
    mlr:   [84.2, 83.8, 85.4, 86.8, 87.6, 78.4, 90.2, 91.8, 89.4, 88.6],
    annotations: [
      { year: '2020', label: 'COVID — delayed care dip' },
      { year: '2021', label: 'Pent-up demand surge' },
    ],
  },

  // Chart 5: Mental Health Claims Index by Category 2019–2024 (multi-line)
  mentalHealthClaims: {
    years: ['2019','2020','2021','2022','2023','2024'],
    anxiety:    [100, 148, 138, 122, 118, 122],
    depression: [100, 152, 141, 122, 115, 121],
    substance:  [100, 114, 135, 146, 141, 148],
    annotation: 'COVID spike for anxiety/depression normalising; substance use accelerating',
  },

  // Chart 6: Excess Mortality vs Expected — % deviation (bar, annual)
  excessMortality: {
    years: ['2019','2020','2021','2022','2023','2024','2025'],
    deviation: [0.2, 8.4, 12.8, 7.2, 3.4, 2.1, 1.8],
    annotation: 'COVID tail persists — still +1.8% above expected mortality in 2025',
  },
}

/* ============================================================
   COUNTRY-SPECIFIC MOTOR CHART DATA
   Fuel price series in local units, 24 months Jun 24 – May 26
   ============================================================ */
export const motorFuelByCountry = {
  // United States — $/gallon
  us: {
    label: 'Fuel Price ($/gal)',
    fuelPrice: [
      3.52, 3.61, 3.48, 3.38, 3.22, 3.18,
      3.24, 3.31, 3.27, 3.35, 3.40, 3.38,
      3.55, 3.68, 3.71, 3.62, 3.44, 3.39,
      3.48, 3.56, 3.52, 3.47, 3.42, 3.42,
    ],
    frequencyIndex: [
      98.2, 100.4, 102.1, 101.8, 99.6, 97.4,
      96.2, 97.8, 98.6, 99.1, 100.2, 101.4,
      99.8, 101.2, 103.4, 104.1, 103.8, 102.6,
      101.8, 102.4, 103.2, 104.6, 106.1, 108.4,
    ],
    annotation: '60-day lag: lower fuel → more miles → higher frequency',
  },
  // United Kingdom — pence per litre
  gb: {
    label: 'Fuel Price (p/litre)',
    fuelPrice: [
      152, 158, 155, 149, 144, 141,
      143, 147, 145, 148, 151, 150,
      156, 162, 165, 160, 152, 148,
      151, 155, 153, 150, 148, 148,
    ],
    frequencyIndex: [
      97.4, 99.2, 101.0, 100.6, 98.8, 96.8,
      95.8, 97.2, 98.0, 98.6, 99.4, 100.8,
      99.2, 100.4, 102.2, 102.8, 102.4, 101.4,
      100.8, 101.4, 102.0, 103.2, 104.4, 103.8,
    ],
    annotation: '60-day lag — UK fuel duty freeze limits price volatility vs US',
  },
  // Germany — €/litre
  de: {
    label: 'Fuel Price (€/litre)',
    fuelPrice: [
      1.76, 1.82, 1.79, 1.74, 1.68, 1.65,
      1.67, 1.70, 1.69, 1.71, 1.73, 1.72,
      1.78, 1.85, 1.88, 1.83, 1.76, 1.72,
      1.74, 1.78, 1.75, 1.73, 1.72, 1.72,
    ],
    frequencyIndex: [
      96.8, 98.4, 100.2, 99.8, 98.0, 96.2,
      95.2, 96.6, 97.4, 98.0, 98.8, 100.0,
      98.6, 99.8, 101.4, 102.0, 101.6, 100.6,
      100.0, 100.6, 101.2, 102.4, 103.4, 101.4,
    ],
    annotation: 'German Autobahn network — high-speed driving raises severity vs frequency',
  },
  // France — €/litre
  fr: {
    label: 'Fuel Price (€/litre)',
    fuelPrice: [
      1.88, 1.94, 1.91, 1.86, 1.80, 1.77,
      1.79, 1.82, 1.81, 1.83, 1.85, 1.84,
      1.90, 1.96, 1.99, 1.94, 1.88, 1.84,
      1.86, 1.90, 1.87, 1.85, 1.84, 1.84,
    ],
    frequencyIndex: [
      97.0, 98.6, 100.4, 100.0, 98.2, 96.4,
      95.4, 96.8, 97.6, 98.2, 99.0, 100.2,
      98.8, 100.0, 101.6, 102.2, 101.8, 100.8,
      100.2, 100.8, 101.4, 102.6, 103.6, 102.4,
    ],
    annotation: 'French gilets jaunes sensitivity to fuel prices — political risk overlays economic',
  },
  // Australia — A¢/litre
  au: {
    label: 'Fuel Price (A¢/litre)',
    fuelPrice: [
      198, 208, 204, 196, 188, 184,
      187, 192, 190, 194, 197, 196,
      204, 214, 218, 210, 200, 195,
      198, 204, 201, 199, 208, 208,
    ],
    frequencyIndex: [
      97.6, 99.8, 101.6, 101.2, 99.4, 97.2,
      96.0, 97.4, 98.2, 98.8, 99.6, 101.0,
      99.4, 100.6, 102.8, 103.4, 103.0, 102.0,
      101.4, 101.8, 102.6, 103.8, 105.2, 104.2,
    ],
    annotation: 'Australian fuel follows Singapore benchmark price — AUD weakness amplifies rises',
  },
  // Canada — C$/litre
  ca: {
    label: 'Fuel Price (C$/litre)',
    fuelPrice: [
      1.72, 1.78, 1.75, 1.69, 1.63, 1.60,
      1.62, 1.65, 1.64, 1.66, 1.68, 1.68,
      1.74, 1.80, 1.83, 1.77, 1.70, 1.66,
      1.69, 1.73, 1.70, 1.68, 1.68, 1.68,
    ],
    frequencyIndex: [
      97.8, 100.0, 101.8, 101.4, 99.6, 97.4,
      96.2, 97.6, 98.4, 99.0, 99.8, 101.0,
      99.6, 100.8, 102.6, 103.2, 102.8, 101.8,
      101.2, 101.6, 102.4, 103.6, 104.8, 104.2,
    ],
    annotation: 'Canadian fuel includes federal carbon tax — adds C$0.15/litre to base price',
  },
  // Japan — ¥/litre
  jp: {
    label: 'Fuel Price (¥/litre)',
    fuelPrice: [
      162, 168, 165, 160, 155, 152,
      154, 157, 156, 159, 162, 161,
      166, 172, 175, 169, 163, 159,
      162, 166, 164, 162, 168, 168,
    ],
    frequencyIndex: [
      96.4, 97.8, 99.2, 98.8, 97.4, 95.8,
      94.8, 96.0, 96.8, 97.4, 98.0, 99.2,
      97.8, 98.8, 100.4, 100.8, 100.4, 99.6,
      99.0, 99.4, 100.0, 100.8, 101.6, 100.8,
    ],
    annotation: 'Japan government fuel subsidy partially offsetting global price rises since 2022',
  },
  // UAE — AED/litre
  ae: {
    label: 'Fuel Price (AED/litre)',
    fuelPrice: [
      2.82, 2.98, 2.94, 2.84, 2.72, 2.68,
      2.70, 2.76, 2.74, 2.78, 2.82, 2.80,
      2.86, 2.95, 2.98, 2.89, 2.80, 2.75,
      2.78, 2.84, 2.81, 2.79, 2.89, 2.89,
    ],
    frequencyIndex: [
      99.2, 101.4, 103.2, 102.8, 101.0, 98.8,
      97.6, 99.0, 99.8, 100.4, 101.2, 102.4,
      100.8, 102.0, 104.2, 104.8, 104.4, 103.4,
      102.8, 103.2, 104.0, 105.2, 106.6, 106.0,
    ],
    annotation: 'UAE fuel prices set monthly by government committee tracking Platts benchmarks',
  },
}

/* Helper — returns country-specific fuel data, falling back to US */
export function getMotorFuelData(countryCode) {
  return motorFuelByCountry[countryCode] || motorFuelByCountry['us']
}

/* ============================================================
   COUNTRY-SPECIFIC PROPERTY CHART DATA
   Peril breakdown reflects each country's dominant CAT risks
   ============================================================ */
export const propertyPerilsByCountry = {
  // United States — hurricane, wildfire, hail/wind dominant
  us: {
    label: 'US Insured CAT Losses by Peril ($B)',
    years: ['2020','2021','2022','2023','2024'],
    perils: {
      hurricane: [18, 48, 52, 22, 38],
      wildfire:  [14, 22, 18, 14, 18],
      hailWind:  [32, 36, 38, 42, 46],
      flood:     [10, 8,  12, 16, 14],
      earthquake: [4, 3,  4,  6,  4],
      other:     [4, 3,  8,  8,  7],
    },
    barKeys: [
      { key: 'hurricane',  name: 'Hurricane',   color: 'up' },
      { key: 'wildfire',   name: 'Wildfire',    color: 'warn' },
      { key: 'hailWind',   name: 'Hail/Wind',   color: 'brand' },
      { key: 'flood',      name: 'Flood',       color: 'down' },
      { key: 'earthquake', name: 'Earthquake',  color: '#7C3AED' },
      { key: 'other',      name: 'Other',       color: 'ink4' },
    ],
  },
  // United Kingdom — flood, subsidence, wind/storm dominant
  gb: {
    label: 'UK Insured CAT Losses by Peril (£B)',
    years: ['2020','2021','2022','2023','2024'],
    perils: {
      flood:      [2.8, 1.4, 1.2, 3.6, 2.2],
      subsidence: [0.6, 0.4, 1.8, 0.8, 1.2],
      windStorm:  [1.2, 0.8, 2.4, 1.4, 1.8],
      escapeWater:[1.4, 1.6, 1.8, 1.8, 2.0],
      fire:       [0.6, 0.6, 0.8, 0.8, 0.8],
      other:      [0.4, 0.4, 0.6, 0.6, 0.6],
    },
    barKeys: [
      { key: 'flood',       name: 'Flood',         color: 'brand' },
      { key: 'subsidence',  name: 'Subsidence',     color: 'warn' },
      { key: 'windStorm',   name: 'Wind/Storm',     color: 'up' },
      { key: 'escapeWater', name: 'Escape of Water', color: 'down' },
      { key: 'fire',        name: 'Fire',           color: '#C0362F' },
      { key: 'other',       name: 'Other',          color: 'ink4' },
    ],
  },
  // Germany — flood, wind/hail dominant; mandatory flood insurance from 2027
  de: {
    label: 'German Insured CAT Losses by Peril (€B)',
    years: ['2020','2021','2022','2023','2024'],
    perils: {
      flood:      [1.8, 8.2, 1.2, 2.4, 4.6],
      windStorm:  [2.4, 1.8, 3.2, 2.8, 2.2],
      hail:       [1.6, 2.8, 4.2, 3.6, 3.2],
      earthquake: [0.2, 0.2, 0.2, 0.2, 0.2],
      fire:       [0.8, 0.8, 1.0, 0.8, 0.8],
      other:      [0.4, 0.4, 0.6, 0.6, 0.6],
    },
    barKeys: [
      { key: 'flood',      name: 'Flood',      color: 'brand' },
      { key: 'windStorm',  name: 'Wind/Storm', color: 'up' },
      { key: 'hail',       name: 'Hail',       color: 'warn' },
      { key: 'earthquake', name: 'Earthquake', color: '#7C3AED' },
      { key: 'fire',       name: 'Fire',       color: '#C0362F' },
      { key: 'other',      name: 'Other',      color: 'ink4' },
    ],
  },
  // Australia — cyclone, bushfire, flood dominant
  au: {
    label: 'Australian Insured CAT Losses by Peril (A$B)',
    years: ['2020','2021','2022','2023','2024'],
    perils: {
      bushfire: [2.8, 0.8, 0.6, 1.2, 1.8],
      flood:    [3.2, 5.8, 6.4, 3.8, 4.2],
      cyclone:  [1.4, 2.2, 1.8, 2.4, 2.8],
      hail:     [2.2, 1.8, 2.4, 2.8, 2.4],
      storm:    [1.0, 1.2, 1.4, 1.6, 1.6],
      other:    [0.4, 0.4, 0.6, 0.6, 0.6],
    },
    barKeys: [
      { key: 'bushfire', name: 'Bushfire', color: 'warn' },
      { key: 'flood',    name: 'Flood',    color: 'brand' },
      { key: 'cyclone',  name: 'Cyclone',  color: 'up' },
      { key: 'hail',     name: 'Hail',     color: 'down' },
      { key: 'storm',    name: 'Storm',    color: '#7C3AED' },
      { key: 'other',    name: 'Other',    color: 'ink4' },
    ],
  },
  // Japan — earthquake, typhoon dominant
  jp: {
    label: 'Japan Insured CAT Losses by Peril (¥T)',
    years: ['2020','2021','2022','2023','2024'],
    perils: {
      earthquake: [0.8, 0.4, 0.6, 1.8, 2.4],
      typhoon:    [1.2, 2.4, 1.8, 2.2, 2.8],
      flood:      [0.8, 1.2, 1.4, 1.0, 1.2],
      windStorm:  [0.4, 0.6, 0.8, 0.8, 0.8],
      fire:       [0.2, 0.2, 0.2, 0.2, 0.2],
      other:      [0.2, 0.2, 0.2, 0.2, 0.4],
    },
    barKeys: [
      { key: 'earthquake', name: 'Earthquake', color: 'up' },
      { key: 'typhoon',    name: 'Typhoon',    color: 'brand' },
      { key: 'flood',      name: 'Flood',      color: 'down' },
      { key: 'windStorm',  name: 'Wind/Storm', color: 'warn' },
      { key: 'fire',       name: 'Fire',       color: '#C0362F' },
      { key: 'other',      name: 'Other',      color: 'ink4' },
    ],
  },
}

/* Helper — returns country-specific property peril data, falling back to US */
export function getPropertyPerilData(countryCode) {
  return propertyPerilsByCountry[countryCode] || propertyPerilsByCountry['us']
}
