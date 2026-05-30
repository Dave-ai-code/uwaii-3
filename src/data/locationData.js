/* Country and region data for UWAII geography selector.
   Covers all countries listed in CLAUDE.md with specific data for
   11 countries and regional fallbacks for all others. */

/* ============================================================
   REGION DEFINITIONS
   ============================================================ */
export const REGIONS = {
  americas: {
    label: 'Americas',
    flag: '🌎',
    countries: ['us','ca','br','mx','ar','cl','co'],
  },
  europe: {
    label: 'Europe',
    flag: '🌍',
    countries: ['gb','de','fr','nl','ch','se','no','dk','ie','it','es','pl','be','at','pt','fi'],
  },
  asiaPacific: {
    label: 'Asia Pacific',
    flag: '🌏',
    countries: ['au','nz','jp','sg','hk','kr','cn','in','th','my','id'],
  },
  middleEastAfrica: {
    label: 'Middle East & Africa',
    flag: '🌍',
    countries: ['ae','sa','qa','kw','bh','za','ng','ke','eg'],
  },
}

/* ============================================================
   COUNTRY MASTER LIST
   ============================================================ */
export const COUNTRIES = {
  // Special
  global: {
    code: 'global', name: 'Global', flag: '🌐', region: null,
    currency: 'USD', fuelUnit: 'per barrel (Brent)',
    fuelPrice: '$84.20/bbl', unemployment: '5.2%', cpi: '+3.4% YoY', interestRate: 'Varies',
    distanceUnit: 'km',
    motorStats: { fuelPrice: '$84.20/bbl (Brent)', fuelDelta: '+6%', vmtIndex: '106.2', unemployment: '5.2%' },
  },

  // ---- AMERICAS ----
  us: {
    code: 'us', name: 'United States', flag: '🇺🇸', region: 'americas',
    currency: 'USD', currencySymbol: '$', fuelUnit: 'per gallon', distanceUnit: 'miles',
    fuelPrice: '$3.42/gal', unemployment: '4.1%', cpi: '+3.2% YoY', interestRate: '5.25%',
    motorStats: { fuelPrice: '$3.42/gal', fuelDelta: '+8%', vmtIndex: '108.4', unemployment: '4.1%' },
  },
  ca: {
    code: 'ca', name: 'Canada', flag: '🇨🇦', region: 'americas',
    currency: 'CAD', currencySymbol: 'C$', fuelUnit: 'cents per litre', distanceUnit: 'km',
    fuelPrice: 'C$1.68/litre', unemployment: '6.1%', cpi: '+2.9% YoY', interestRate: '5.00%',
    motorStats: { fuelPrice: 'C$1.68/L', fuelDelta: '+5%', vmtIndex: '104.2', unemployment: '6.1%' },
  },
  br: {
    code: 'br', name: 'Brazil', flag: '🇧🇷', region: 'americas',
    currency: 'BRL', currencySymbol: 'R$', fuelUnit: 'per litre', distanceUnit: 'km',
    fuelPrice: 'R$5.89/litre', unemployment: '7.8%', cpi: '+4.8% YoY', interestRate: '10.50%',
    motorStats: { fuelPrice: 'R$5.89/L', fuelDelta: '+9%', vmtIndex: '102.4', unemployment: '7.8%' },
  },
  mx: {
    code: 'mx', name: 'Mexico', flag: '🇲🇽', region: 'americas',
    currency: 'MXN', currencySymbol: 'MX$', fuelUnit: 'per litre', distanceUnit: 'km',
    fuelPrice: 'MX$22.40/litre', unemployment: '2.9%', cpi: '+4.2% YoY', interestRate: '11.00%',
    motorStats: { fuelPrice: 'MX$22.40/L', fuelDelta: '+6%', vmtIndex: '106.8', unemployment: '2.9%' },
  },
  ar: {
    code: 'ar', name: 'Argentina', flag: '🇦🇷', region: 'americas',
    currency: 'ARS', currencySymbol: 'AR$', fuelUnit: 'per litre', distanceUnit: 'km',
    fuelPrice: 'AR$1,240/litre', unemployment: '6.4%', cpi: '+142% YoY', interestRate: '40.00%',
    motorStats: { fuelPrice: 'AR$1,240/L', fuelDelta: '+140%', vmtIndex: '98.4', unemployment: '6.4%' },
  },
  cl: {
    code: 'cl', name: 'Chile', flag: '🇨🇱', region: 'americas',
    currency: 'CLP', currencySymbol: 'CL$', fuelUnit: 'per litre', distanceUnit: 'km',
    fuelPrice: 'CL$1,140/litre', unemployment: '8.8%', cpi: '+3.8% YoY', interestRate: '5.50%',
    motorStats: { fuelPrice: 'CL$1,140/L', fuelDelta: '+7%', vmtIndex: '101.2', unemployment: '8.8%' },
  },
  co: {
    code: 'co', name: 'Colombia', flag: '🇨🇴', region: 'americas',
    currency: 'COP', currencySymbol: 'COP$', fuelUnit: 'per litre', distanceUnit: 'km',
    fuelPrice: 'COP$12,800/litre', unemployment: '9.8%', cpi: '+6.8% YoY', interestRate: '9.75%',
    motorStats: { fuelPrice: 'COP$12,800/L', fuelDelta: '+8%', vmtIndex: '103.6', unemployment: '9.8%' },
  },

  // ---- EUROPE ----
  gb: {
    code: 'gb', name: 'United Kingdom', flag: '🇬🇧', region: 'europe',
    currency: 'GBP', currencySymbol: '£', fuelUnit: 'pence per litre', distanceUnit: 'miles',
    fuelPrice: '148p/litre', unemployment: '4.4%', cpi: '+3.8% YoY', interestRate: '5.00%',
    motorStats: { fuelPrice: '148p/L', fuelDelta: '+6%', vmtIndex: '103.8', unemployment: '4.4%' },
  },
  de: {
    code: 'de', name: 'Germany', flag: '🇩🇪', region: 'europe',
    currency: 'EUR', currencySymbol: '€', fuelUnit: 'per litre', distanceUnit: 'km',
    fuelPrice: '€1.72/litre', unemployment: '5.9%', cpi: '+2.9% YoY', interestRate: '4.50%',
    motorStats: { fuelPrice: '€1.72/L', fuelDelta: '+4%', vmtIndex: '101.4', unemployment: '5.9%' },
  },
  fr: {
    code: 'fr', name: 'France', flag: '🇫🇷', region: 'europe',
    currency: 'EUR', currencySymbol: '€', fuelUnit: 'per litre', distanceUnit: 'km',
    fuelPrice: '€1.84/litre', unemployment: '7.3%', cpi: '+2.7% YoY', interestRate: '4.50%',
    motorStats: { fuelPrice: '€1.84/L', fuelDelta: '+5%', vmtIndex: '100.8', unemployment: '7.3%' },
  },
  nl: {
    code: 'nl', name: 'Netherlands', flag: '🇳🇱', region: 'europe',
    currency: 'EUR', currencySymbol: '€', fuelUnit: 'per litre', distanceUnit: 'km',
    fuelPrice: '€2.04/litre', unemployment: '3.8%', cpi: '+2.8% YoY', interestRate: '4.50%',
    motorStats: { fuelPrice: '€2.04/L', fuelDelta: '+5%', vmtIndex: '102.2', unemployment: '3.8%' },
  },
  ch: {
    code: 'ch', name: 'Switzerland', flag: '🇨🇭', region: 'europe',
    currency: 'CHF', currencySymbol: 'CHF', fuelUnit: 'per litre', distanceUnit: 'km',
    fuelPrice: 'CHF 1.88/litre', unemployment: '2.4%', cpi: '+1.4% YoY', interestRate: '1.50%',
    motorStats: { fuelPrice: 'CHF 1.88/L', fuelDelta: '+3%', vmtIndex: '103.6', unemployment: '2.4%' },
  },
  se: {
    code: 'se', name: 'Sweden', flag: '🇸🇪', region: 'europe',
    currency: 'SEK', currencySymbol: 'kr', fuelUnit: 'per litre', distanceUnit: 'km',
    fuelPrice: 'SEK 18.20/litre', unemployment: '8.4%', cpi: '+2.2% YoY', interestRate: '3.75%',
    motorStats: { fuelPrice: 'SEK 18.20/L', fuelDelta: '+4%', vmtIndex: '99.8', unemployment: '8.4%' },
  },
  no: {
    code: 'no', name: 'Norway', flag: '🇳🇴', region: 'europe',
    currency: 'NOK', currencySymbol: 'kr', fuelUnit: 'per litre', distanceUnit: 'km',
    fuelPrice: 'NOK 21.40/litre', unemployment: '3.6%', cpi: '+3.6% YoY', interestRate: '4.50%',
    motorStats: { fuelPrice: 'NOK 21.40/L', fuelDelta: '+5%', vmtIndex: '104.2', unemployment: '3.6%' },
  },
  dk: {
    code: 'dk', name: 'Denmark', flag: '🇩🇰', region: 'europe',
    currency: 'DKK', currencySymbol: 'kr', fuelUnit: 'per litre', distanceUnit: 'km',
    fuelPrice: 'DKK 14.80/litre', unemployment: '5.2%', cpi: '+2.4% YoY', interestRate: '3.60%',
    motorStats: { fuelPrice: 'DKK 14.80/L', fuelDelta: '+4%', vmtIndex: '101.8', unemployment: '5.2%' },
  },
  ie: {
    code: 'ie', name: 'Ireland', flag: '🇮🇪', region: 'europe',
    currency: 'EUR', currencySymbol: '€', fuelUnit: 'per litre', distanceUnit: 'km',
    fuelPrice: '€1.78/litre', unemployment: '4.2%', cpi: '+2.6% YoY', interestRate: '4.50%',
    motorStats: { fuelPrice: '€1.78/L', fuelDelta: '+4%', vmtIndex: '106.4', unemployment: '4.2%' },
  },
  it: {
    code: 'it', name: 'Italy', flag: '🇮🇹', region: 'europe',
    currency: 'EUR', currencySymbol: '€', fuelUnit: 'per litre', distanceUnit: 'km',
    fuelPrice: '€1.88/litre', unemployment: '6.6%', cpi: '+1.8% YoY', interestRate: '4.50%',
    motorStats: { fuelPrice: '€1.88/L', fuelDelta: '+5%', vmtIndex: '102.4', unemployment: '6.6%' },
  },
  es: {
    code: 'es', name: 'Spain', flag: '🇪🇸', region: 'europe',
    currency: 'EUR', currencySymbol: '€', fuelUnit: 'per litre', distanceUnit: 'km',
    fuelPrice: '€1.72/litre', unemployment: '11.4%', cpi: '+2.8% YoY', interestRate: '4.50%',
    motorStats: { fuelPrice: '€1.72/L', fuelDelta: '+4%', vmtIndex: '104.8', unemployment: '11.4%' },
  },
  pl: {
    code: 'pl', name: 'Poland', flag: '🇵🇱', region: 'europe',
    currency: 'PLN', currencySymbol: 'zł', fuelUnit: 'per litre', distanceUnit: 'km',
    fuelPrice: 'PLN 7.20/litre', unemployment: '5.0%', cpi: '+4.8% YoY', interestRate: '5.75%',
    motorStats: { fuelPrice: 'PLN 7.20/L', fuelDelta: '+7%', vmtIndex: '108.4', unemployment: '5.0%' },
  },
  be: {
    code: 'be', name: 'Belgium', flag: '🇧🇪', region: 'europe',
    currency: 'EUR', currencySymbol: '€', fuelUnit: 'per litre', distanceUnit: 'km',
    fuelPrice: '€1.82/litre', unemployment: '5.4%', cpi: '+2.6% YoY', interestRate: '4.50%',
    motorStats: { fuelPrice: '€1.82/L', fuelDelta: '+4%', vmtIndex: '101.6', unemployment: '5.4%' },
  },
  at: {
    code: 'at', name: 'Austria', flag: '🇦🇹', region: 'europe',
    currency: 'EUR', currencySymbol: '€', fuelUnit: 'per litre', distanceUnit: 'km',
    fuelPrice: '€1.68/litre', unemployment: '5.0%', cpi: '+3.4% YoY', interestRate: '4.50%',
    motorStats: { fuelPrice: '€1.68/L', fuelDelta: '+4%', vmtIndex: '102.8', unemployment: '5.0%' },
  },
  pt: {
    code: 'pt', name: 'Portugal', flag: '🇵🇹', region: 'europe',
    currency: 'EUR', currencySymbol: '€', fuelUnit: 'per litre', distanceUnit: 'km',
    fuelPrice: '€1.78/litre', unemployment: '6.8%', cpi: '+2.4% YoY', interestRate: '4.50%',
    motorStats: { fuelPrice: '€1.78/L', fuelDelta: '+4%', vmtIndex: '100.4', unemployment: '6.8%' },
  },
  fi: {
    code: 'fi', name: 'Finland', flag: '🇫🇮', region: 'europe',
    currency: 'EUR', currencySymbol: '€', fuelUnit: 'per litre', distanceUnit: 'km',
    fuelPrice: '€1.80/litre', unemployment: '7.4%', cpi: '+2.2% YoY', interestRate: '4.50%',
    motorStats: { fuelPrice: '€1.80/L', fuelDelta: '+4%', vmtIndex: '99.6', unemployment: '7.4%' },
  },

  // ---- ASIA PACIFIC ----
  au: {
    code: 'au', name: 'Australia', flag: '🇦🇺', region: 'asiaPacific',
    currency: 'AUD', currencySymbol: 'A$', fuelUnit: 'cents per litre', distanceUnit: 'km',
    fuelPrice: 'A$2.08/litre', unemployment: '4.2%', cpi: '+3.6% YoY', interestRate: '4.35%',
    motorStats: { fuelPrice: 'A$2.08/L', fuelDelta: '+7%', vmtIndex: '106.8', unemployment: '4.2%' },
  },
  nz: {
    code: 'nz', name: 'New Zealand', flag: '🇳🇿', region: 'asiaPacific',
    currency: 'NZD', currencySymbol: 'NZ$', fuelUnit: 'per litre', distanceUnit: 'km',
    fuelPrice: 'NZ$2.28/litre', unemployment: '4.4%', cpi: '+3.2% YoY', interestRate: '5.50%',
    motorStats: { fuelPrice: 'NZ$2.28/L', fuelDelta: '+6%', vmtIndex: '104.2', unemployment: '4.4%' },
  },
  jp: {
    code: 'jp', name: 'Japan', flag: '🇯🇵', region: 'asiaPacific',
    currency: 'JPY', currencySymbol: '¥', fuelUnit: 'per litre', distanceUnit: 'km',
    fuelPrice: '¥168/litre', unemployment: '2.6%', cpi: '+2.8% YoY', interestRate: '0.10%',
    motorStats: { fuelPrice: '¥168/L', fuelDelta: '+4%', vmtIndex: '98.4', unemployment: '2.6%' },
  },
  sg: {
    code: 'sg', name: 'Singapore', flag: '🇸🇬', region: 'asiaPacific',
    currency: 'SGD', currencySymbol: 'S$', fuelUnit: 'per litre', distanceUnit: 'km',
    fuelPrice: 'S$2.84/litre', unemployment: '2.1%', cpi: '+2.4% YoY', interestRate: '3.68%',
    motorStats: { fuelPrice: 'S$2.84/L', fuelDelta: '+5%', vmtIndex: '100.4', unemployment: '2.1%' },
  },
  hk: {
    code: 'hk', name: 'Hong Kong', flag: '🇭🇰', region: 'asiaPacific',
    currency: 'HKD', currencySymbol: 'HK$', fuelUnit: 'per litre', distanceUnit: 'km',
    fuelPrice: 'HK$21.40/litre', unemployment: '2.8%', cpi: '+1.8% YoY', interestRate: '5.75%',
    motorStats: { fuelPrice: 'HK$21.40/L', fuelDelta: '+5%', vmtIndex: '99.8', unemployment: '2.8%' },
  },
  kr: {
    code: 'kr', name: 'South Korea', flag: '🇰🇷', region: 'asiaPacific',
    currency: 'KRW', currencySymbol: '₩', fuelUnit: 'per litre', distanceUnit: 'km',
    fuelPrice: '₩1,820/litre', unemployment: '2.8%', cpi: '+2.6% YoY', interestRate: '3.50%',
    motorStats: { fuelPrice: '₩1,820/L', fuelDelta: '+5%', vmtIndex: '104.6', unemployment: '2.8%' },
  },
  cn: {
    code: 'cn', name: 'China', flag: '🇨🇳', region: 'asiaPacific',
    currency: 'CNY', currencySymbol: '¥', fuelUnit: 'per litre', distanceUnit: 'km',
    fuelPrice: '¥7.84/litre', unemployment: '5.0%', cpi: '+0.8% YoY', interestRate: '3.45%',
    motorStats: { fuelPrice: '¥7.84/L', fuelDelta: '+3%', vmtIndex: '112.4', unemployment: '5.0%' },
  },
  in: {
    code: 'in', name: 'India', flag: '🇮🇳', region: 'asiaPacific',
    currency: 'INR', currencySymbol: '₹', fuelUnit: 'per litre', distanceUnit: 'km',
    fuelPrice: '₹104.60/litre', unemployment: '7.8%', cpi: '+5.4% YoY', interestRate: '6.50%',
    motorStats: { fuelPrice: '₹104.60/L', fuelDelta: '+6%', vmtIndex: '118.4', unemployment: '7.8%' },
  },
  th: {
    code: 'th', name: 'Thailand', flag: '🇹🇭', region: 'asiaPacific',
    currency: 'THB', currencySymbol: '฿', fuelUnit: 'per litre', distanceUnit: 'km',
    fuelPrice: '฿38.40/litre', unemployment: '1.2%', cpi: '+1.6% YoY', interestRate: '2.50%',
    motorStats: { fuelPrice: '฿38.40/L', fuelDelta: '+5%', vmtIndex: '108.2', unemployment: '1.2%' },
  },
  my: {
    code: 'my', name: 'Malaysia', flag: '🇲🇾', region: 'asiaPacific',
    currency: 'MYR', currencySymbol: 'RM', fuelUnit: 'per litre', distanceUnit: 'km',
    fuelPrice: 'RM 2.05/litre', unemployment: '3.4%', cpi: '+2.4% YoY', interestRate: '3.00%',
    motorStats: { fuelPrice: 'RM 2.05/L', fuelDelta: '+4%', vmtIndex: '110.4', unemployment: '3.4%' },
  },
  id: {
    code: 'id', name: 'Indonesia', flag: '🇮🇩', region: 'asiaPacific',
    currency: 'IDR', currencySymbol: 'Rp', fuelUnit: 'per litre', distanceUnit: 'km',
    fuelPrice: 'Rp 10,000/litre', unemployment: '5.2%', cpi: '+2.8% YoY', interestRate: '6.25%',
    motorStats: { fuelPrice: 'Rp 10,000/L', fuelDelta: '+5%', vmtIndex: '114.8', unemployment: '5.2%' },
  },

  // ---- MIDDLE EAST & AFRICA ----
  ae: {
    code: 'ae', name: 'UAE', flag: '🇦🇪', region: 'middleEastAfrica',
    currency: 'AED', currencySymbol: 'AED', fuelUnit: 'per litre', distanceUnit: 'km',
    fuelPrice: 'AED 2.89/litre', unemployment: '3.1%', cpi: '+3.1% YoY', interestRate: '5.40%',
    motorStats: { fuelPrice: 'AED 2.89/L', fuelDelta: '+8%', vmtIndex: '112.4', unemployment: '3.1%' },
  },
  sa: {
    code: 'sa', name: 'Saudi Arabia', flag: '🇸🇦', region: 'middleEastAfrica',
    currency: 'SAR', currencySymbol: 'SAR', fuelUnit: 'per litre', distanceUnit: 'km',
    fuelPrice: 'SAR 0.90/litre', unemployment: '5.6%', cpi: '+1.8% YoY', interestRate: '6.00%',
    motorStats: { fuelPrice: 'SAR 0.90/L', fuelDelta: '+2%', vmtIndex: '108.4', unemployment: '5.6%' },
  },
  qa: {
    code: 'qa', name: 'Qatar', flag: '🇶🇦', region: 'middleEastAfrica',
    currency: 'QAR', currencySymbol: 'QAR', fuelUnit: 'per litre', distanceUnit: 'km',
    fuelPrice: 'QAR 1.90/litre', unemployment: '0.2%', cpi: '+2.4% YoY', interestRate: '6.00%',
    motorStats: { fuelPrice: 'QAR 1.90/L', fuelDelta: '+5%', vmtIndex: '106.8', unemployment: '0.2%' },
  },
  kw: {
    code: 'kw', name: 'Kuwait', flag: '🇰🇼', region: 'middleEastAfrica',
    currency: 'KWD', currencySymbol: 'KD', fuelUnit: 'per litre', distanceUnit: 'km',
    fuelPrice: 'KD 0.08/litre', unemployment: '1.0%', cpi: '+3.2% YoY', interestRate: '4.25%',
    motorStats: { fuelPrice: 'KD 0.08/L', fuelDelta: '+4%', vmtIndex: '104.4', unemployment: '1.0%' },
  },
  bh: {
    code: 'bh', name: 'Bahrain', flag: '🇧🇭', region: 'middleEastAfrica',
    currency: 'BHD', currencySymbol: 'BD', fuelUnit: 'per litre', distanceUnit: 'km',
    fuelPrice: 'BD 0.19/litre', unemployment: '4.0%', cpi: '+2.8% YoY', interestRate: '6.50%',
    motorStats: { fuelPrice: 'BD 0.19/L', fuelDelta: '+5%', vmtIndex: '103.8', unemployment: '4.0%' },
  },
  za: {
    code: 'za', name: 'South Africa', flag: '🇿🇦', region: 'middleEastAfrica',
    currency: 'ZAR', currencySymbol: 'R', fuelUnit: 'per litre', distanceUnit: 'km',
    fuelPrice: 'R22.80/litre', unemployment: '32.1%', cpi: '+5.2% YoY', interestRate: '8.25%',
    motorStats: { fuelPrice: 'R22.80/L', fuelDelta: '+10%', vmtIndex: '94.8', unemployment: '32.1%' },
  },
  ng: {
    code: 'ng', name: 'Nigeria', flag: '🇳🇬', region: 'middleEastAfrica',
    currency: 'NGN', currencySymbol: '₦', fuelUnit: 'per litre', distanceUnit: 'km',
    fuelPrice: '₦1,400/litre', unemployment: '4.2%', cpi: '+28.4% YoY', interestRate: '27.25%',
    motorStats: { fuelPrice: '₦1,400/L', fuelDelta: '+110%', vmtIndex: '88.4', unemployment: '4.2%' },
  },
  ke: {
    code: 'ke', name: 'Kenya', flag: '🇰🇪', region: 'middleEastAfrica',
    currency: 'KES', currencySymbol: 'KSh', fuelUnit: 'per litre', distanceUnit: 'km',
    fuelPrice: 'KSh 194/litre', unemployment: '5.4%', cpi: '+4.8% YoY', interestRate: '13.00%',
    motorStats: { fuelPrice: 'KSh 194/L', fuelDelta: '+9%', vmtIndex: '96.4', unemployment: '5.4%' },
  },
  eg: {
    code: 'eg', name: 'Egypt', flag: '🇪🇬', region: 'middleEastAfrica',
    currency: 'EGP', currencySymbol: 'E£', fuelUnit: 'per litre', distanceUnit: 'km',
    fuelPrice: 'E£14.50/litre', unemployment: '6.8%', cpi: '+24.2% YoY', interestRate: '28.25%',
    motorStats: { fuelPrice: 'E£14.50/L', fuelDelta: '+85%', vmtIndex: '92.4', unemployment: '6.8%' },
  },
}

/* ---- Helper: get country data with regional fallback ---- */
export function getCountryData(code) {
  if (COUNTRIES[code]) return COUNTRIES[code]
  // Fallback: determine region and use proxy
  return COUNTRIES['us'] // generic fallback
}

/* ---- Ordered list for display (country selector) ---- */
export const COUNTRY_LIST = [
  // Global first
  { ...COUNTRIES.global },
  // Americas
  { ...COUNTRIES.us },
  { ...COUNTRIES.ca },
  { ...COUNTRIES.br },
  { ...COUNTRIES.mx },
  { ...COUNTRIES.ar },
  { ...COUNTRIES.cl },
  { ...COUNTRIES.co },
  // Europe
  { ...COUNTRIES.gb },
  { ...COUNTRIES.de },
  { ...COUNTRIES.fr },
  { ...COUNTRIES.nl },
  { ...COUNTRIES.ch },
  { ...COUNTRIES.se },
  { ...COUNTRIES.no },
  { ...COUNTRIES.dk },
  { ...COUNTRIES.ie },
  { ...COUNTRIES.it },
  { ...COUNTRIES.es },
  { ...COUNTRIES.pl },
  { ...COUNTRIES.be },
  { ...COUNTRIES.at },
  { ...COUNTRIES.pt },
  { ...COUNTRIES.fi },
  // Asia Pacific
  { ...COUNTRIES.au },
  { ...COUNTRIES.nz },
  { ...COUNTRIES.jp },
  { ...COUNTRIES.sg },
  { ...COUNTRIES.hk },
  { ...COUNTRIES.kr },
  { ...COUNTRIES.cn },
  { ...COUNTRIES.in },
  { ...COUNTRIES.th },
  { ...COUNTRIES.my },
  { ...COUNTRIES.id },
  // Middle East & Africa
  { ...COUNTRIES.ae },
  { ...COUNTRIES.sa },
  { ...COUNTRIES.qa },
  { ...COUNTRIES.kw },
  { ...COUNTRIES.bh },
  { ...COUNTRIES.za },
  { ...COUNTRIES.ng },
  { ...COUNTRIES.ke },
  { ...COUNTRIES.eg },
]

/* Motor stat overrides per country (used by dashboard when country changes) */
export function getMotorStatsForCountry(countryCode) {
  const c = COUNTRIES[countryCode] || COUNTRIES['us']
  const distLabel = c.distanceUnit === 'miles' ? 'Miles Traveled Index' : 'Km Traveled Index'
  return [
    { key: 'fuelPrice',    label: 'Fuel Price',               value: c.fuelPrice,                         delta: c.motorStats?.fuelDelta || '+6%', dir: 'up'   },
    { key: 'vmt',          label: distLabel,                  value: c.motorStats?.vmtIndex || '104.2',   delta: '+1.8%',   dir: 'up'   },
    { key: 'usedCarIndex', label: 'Used Vehicle Price Index', value: '142.3',                             delta: '−3.2%',  dir: 'down' },
    { key: 'cpiTransport', label: 'CPI Transport Component',  value: c.cpi,                               delta: '+0.4pt', dir: 'up'   },
    { key: 'unemployment', label: 'Unemployment Rate',        value: c.unemployment,                      delta: '→',      dir: 'flat' },
    { key: 'recalls',      label: 'Active Safety Recalls',    value: '847',                               delta: '+12',    dir: 'up'   },
  ]
}

/* Workers Comp stat overrides per country */
function getWorkersCompStatsForCountry(countryCode) {
  const c = COUNTRIES[countryCode] || COUNTRIES['us']
  return [
    { key: 'employment',   label: 'Employment Index',          value: '104.2',     delta: '+0.8%',   dir: 'up'   },
    { key: 'construction', label: 'Construction Activity Idx', value: '108',       delta: '+3.2%',   dir: 'up'   },
    { key: 'medicalCpi',   label: 'Medical / Health CPI',      value: c.cpi,       delta: '+1.2pts', dir: 'up'   },
    { key: 'osha',         label: 'Recordable Injury Rate',    value: '2.7',       delta: '−0.3',    dir: 'down' },
    { key: 'claimDur',     label: 'Avg Claim Duration',        value: '42 days',   delta: '→',       dir: 'flat' },
    { key: 'unemployment', label: 'Unemployment Rate',         value: c.unemployment, delta: '→',    dir: 'flat' },
  ]
}

/* Travel stat overrides per country — advisories are global; airfare reflects local currency */
function getTravelStatsForCountry(countryCode) {
  const c = COUNTRIES[countryCode] || COUNTRIES['us']
  const sym = c.currencySymbol || '$'
  const airfare = countryCode === 'gb' ? '£420 avg' : countryCode === 'jp' ? '¥68,000 avg'
    : countryCode === 'au' ? 'A$820 avg' : countryCode === 'ca' ? 'C$680 avg'
    : countryCode === 'de' || countryCode === 'fr' ? '€480 avg' : '$620 avg'
  return [
    { key: 'jetFuel',      label: 'Jet Fuel Index',             value: '118.4',   delta: '+12%',   dir: 'up'   },
    { key: 'onTime',       label: 'Global On-Time Rate',        value: '76.8%',   delta: '−3.2%',  dir: 'down' },
    { key: 'advisories',   label: 'Active L3+ Advisories',      value: '38 countries', delta: '+4', dir: 'up'  },
    { key: 'passengerVol', label: 'Intl Passenger Vol Index',   value: '104.2',   delta: '+8%',    dir: 'up'   },
    { key: 'avgAirfare',   label: `Avg Intl Airfare (${c.currency})`, value: airfare, delta: '+9%', dir: 'up'  },
    { key: 'medClaims',    label: 'Travel Medical Claims Idx',  value: '112',     delta: '+4pts',  dir: 'up'   },
  ]
}

/* Generic fallback: inject unemployment + CPI for any LOB */
function injectMacroStats(baseStats, countryCode) {
  const c = COUNTRIES[countryCode] || COUNTRIES['us']
  return baseStats.map(s => {
    if (s.key === 'unemployment' || s.label?.toLowerCase().includes('unemployment')) {
      return { ...s, value: c.unemployment }
    }
    if (s.key === 'cpi' || s.label?.toLowerCase().includes('cpi')) {
      return { ...s, value: c.cpi }
    }
    if (s.key === 'interestRate' || s.label?.toLowerCase().includes('interest rate')) {
      return { ...s, value: c.interestRate }
    }
    return s
  })
}

/* Master dispatcher — returns country-adjusted stat cards for any LOB */
export function getStatsForLobAndCountry(lob, countryCode, defaultStats) {
  if (lob === 'motor')       return getMotorStatsForCountry(countryCode)
  if (lob === 'workerscomp') return getWorkersCompStatsForCountry(countryCode)
  if (lob === 'travel')      return getTravelStatsForCountry(countryCode)
  return injectMacroStats(defaultStats, countryCode)
}
