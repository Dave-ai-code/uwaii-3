/* Market conditions per LOB — displayed in the Overview strip.
   condition: 'Hard' | 'Soft' | 'Stable' | 'Firming'
   rateChange: signed string e.g. '+8.4%', '-2.1%'
   rateDir: 'up' | 'down' | 'flat'
   riskTemp: 'Low' | 'Elevated' | 'High' | 'Critical' */

export const marketConditions = {
  motor: {
    lob: 'motor',
    condition: 'Firming',
    rateChange: '+6.8%',
    rateDir: 'up',
    riskTemp: 'Elevated',
    riskColor: 'warn',
    summary: 'Parts inflation and rising severity driving rate need. Frequency recovery post-COVID normalising but fuel price decline creating new headwinds.',
    lrBenchmark: {
      current: 78.4,
      prior: 74.2,
      target: 72.0,
      trend: 'up',
    },
    rateTrend: {
      years: ['2019','2020','2021','2022','2023','2024','2025'],
      rateChange: [-2.4, -1.8, 4.2, 8.8, 10.4, 8.6, 6.8],
    },
  },

  travel: {
    lob: 'travel',
    condition: 'Firming',
    rateChange: '+8.2%',
    rateDir: 'up',
    riskTemp: 'Elevated',
    riskColor: 'warn',
    summary: 'Jet fuel spike driving trip-cost severity higher. Geopolitical advisories elevating cancel frequency. Post-COVID demand recovery supporting GWP growth.',
    lrBenchmark: {
      current: 72.8,
      prior: 68.4,
      target: 70.0,
      trend: 'up',
    },
    rateTrend: {
      years: ['2019','2020','2021','2022','2023','2024','2025'],
      rateChange: [2.4, -8.4, 12.6, 14.8, 10.2, 8.8, 8.2],
    },
  },

  cyber: {
    lob: 'cyber',
    condition: 'Hard',
    rateChange: '+18.4%',
    rateDir: 'up',
    riskTemp: 'High',
    riskColor: 'up',
    summary: 'Ransomware frequency and severity at all-time highs. Rate increases necessary but capacity constrained. Reinsurers tightening cyber treaty terms.',
    lrBenchmark: {
      current: 88.2,
      prior: 82.4,
      target: 75.0,
      trend: 'up',
    },
    rateTrend: {
      years: ['2019','2020','2021','2022','2023','2024','2025'],
      rateChange: [6.4, 14.8, 28.4, 36.8, 24.2, 18.8, 18.4],
    },
  },

  property: {
    lob: 'property',
    condition: 'Hard',
    rateChange: '+12.4%',
    rateDir: 'up',
    riskTemp: 'High',
    riskColor: 'up',
    summary: 'CAT losses running 23% above pace. Construction cost inflation widening ITV gap. Reinsurance capacity tightening after record 2024 losses.',
    lrBenchmark: {
      current: 94.8,
      prior: 88.4,
      target: 78.0,
      trend: 'up',
    },
    rateTrend: {
      years: ['2019','2020','2021','2022','2023','2024','2025'],
      rateChange: [4.8, 8.4, 14.8, 18.4, 16.2, 14.8, 12.4],
    },
  },

  crop: {
    lob: 'crop',
    condition: 'Stable',
    rateChange: '+2.4%',
    rateDir: 'up',
    riskTemp: 'Elevated',
    riskColor: 'warn',
    summary: 'Federal MPCI loss ratios near actuarially neutral. Current drought conditions creating Q3 pressure. Commodity price volatility from Ukraine corridor disruption.',
    lrBenchmark: {
      current: 91.2,
      prior: 82.8,
      target: 100.0,
      trend: 'up',
    },
    rateTrend: {
      years: ['2019','2020','2021','2022','2023','2024','2025'],
      rateChange: [1.2, -0.8, 2.4, 4.8, 3.2, 2.8, 2.4],
    },
  },

  marine: {
    lob: 'marine',
    condition: 'Hard',
    rateChange: '+24.6%',
    rateDir: 'up',
    riskTemp: 'High',
    riskColor: 'up',
    summary: 'Red Sea disruption driving war risk premium surge. Container rates up 24%. Cargo accumulation risk elevated on Cape rerouting. Hull market also hardening.',
    lrBenchmark: {
      current: 84.6,
      prior: 76.2,
      target: 72.0,
      trend: 'up',
    },
    rateTrend: {
      years: ['2019','2020','2021','2022','2023','2024','2025'],
      rateChange: [4.2, 8.8, 12.4, 8.6, 14.8, 22.4, 24.6],
    },
  },

  workerscomp: {
    lob: 'workerscomp',
    condition: 'Stable',
    rateChange: '+1.8%',
    rateDir: 'up',
    riskTemp: 'Low',
    riskColor: 'down',
    summary: 'Medical cost inflation challenging severity but frequency remains controlled. Construction employment growth the primary watch item. Market competitive.',
    lrBenchmark: {
      current: 68.4,
      prior: 66.8,
      target: 68.0,
      trend: 'flat',
    },
    rateTrend: {
      years: ['2019','2020','2021','2022','2023','2024','2025'],
      rateChange: [-2.4, -4.8, -1.2, 0.8, 1.4, 1.6, 1.8],
    },
  },

  health: {
    lob: 'health',
    condition: 'Firming',
    rateChange: '+7.4%',
    rateDir: 'up',
    riskTemp: 'Elevated',
    riskColor: 'warn',
    summary: 'GLP-1 drug cost spike driving near-term MLR pressure. Long-term morbidity improvement expected but not yet in loss experience. Mental health claims rising.',
    lrBenchmark: {
      current: 88.6,
      prior: 86.2,
      target: 84.0,
      trend: 'up',
    },
    rateTrend: {
      years: ['2019','2020','2021','2022','2023','2024','2025'],
      rateChange: [4.2, 2.4, 8.8, 7.4, 6.8, 7.2, 7.4],
    },
  },
}

/* Overview risk temperature — highest of all selected LOBs */
export function getOverallRiskTemp(selectedLobs) {
  const tempOrder = { Low: 0, Elevated: 1, High: 2, Critical: 3 }
  let highest = 'Low'
  selectedLobs.forEach(lob => {
    const cond = marketConditions[lob]
    if (cond && tempOrder[cond.riskTemp] > tempOrder[highest]) {
      highest = cond.riskTemp
    }
  })
  return highest
}

/* Rate trend data for overview table */
export function getRateTrendSummary(selectedLobs) {
  return selectedLobs
    .filter(lob => marketConditions[lob])
    .map(lob => {
      const mc = marketConditions[lob]
      return {
        lob,
        condition: mc.condition,
        rateChange: mc.rateChange,
        rateDir: mc.rateDir,
        lrCurrent: mc.lrBenchmark.current,
        lrPrior: mc.lrBenchmark.prior,
        lrTarget: mc.lrBenchmark.target,
        lrTrend: mc.lrBenchmark.trend,
      }
    })
}
