# UWAII — Underwriting AI Intelligence
# Master Context File for Claude Code

## What This Is
A daily intelligence dashboard for insurance 
professionals. Users select lines of business 
and geography, and get a personalized dashboard 
showing external data trends and live news with 
AI commentary explaining portfolio implications.

## Design Reference
The hi-fi design is in /design-reference folder.
Match this design exactly for all screens.
The existing design shows US Travel LOB only.
Expand to all LOBs and all geographies using 
the same visual style, layout, and components.

## Tech Stack
- React 18
- Recharts for all charts
- Tailwind CSS
- React Router for navigation
- All data hardcoded as realistic dummy data
- No backend, no API calls for MVP

---

## APPLICATION SCREENS

### Screen 1: Landing Page (/)
Explain what UWAII does and why it matters.
Sections:
- Hero: headline, subhead, CTA button 
  "Build My Dashboard"
- Problem: insurance companies watch internal 
  data but miss external signals that move 
  loss ratios months earlier
- How it works: 4 steps
  (Select LOBs → Select Geography → 
   Generate Dashboard → Daily Intelligence)
- Who it is for: Underwriter, Actuary, 
  Portfolio Manager, CUO, MGA Principal, 
  Risk Manager
- Footer

### Screen 2: Dashboard Builder (/builder)
Three step selector that builds their 
personalized dashboard.

Step 1 — Lines of Business (multi-select 
checkboxes with icons):
🚗 Motor / Auto
✈️ Travel
💻 Cyber
🏠 Property / CAT
🌾 Crop / Agriculture
🚢 Marine / Cargo
👷 Workers Compensation
🏥 Health / Life

Step 2 — Geography (multi-select, 
choose specific countries):

Show countries grouped by region 
in a searchable dropdown or 
scrollable grouped list.

AMERICAS:
🇺🇸 United States
🇨🇦 Canada
🇧🇷 Brazil
🇲🇽 Mexico
🇦🇷 Argentina
🇨🇱 Chile
🇨🇴 Colombia

EUROPE:
🇬🇧 United Kingdom
🇩🇪 Germany
🇫🇷 France
🇳🇱 Netherlands
🇨🇭 Switzerland
🇸🇪 Sweden
🇳🇴 Norway
🇩🇰 Denmark
🇮🇪 Ireland
🇮🇹 Italy
🇪🇸 Spain
🇵🇱 Poland
🇧🇪 Belgium
🇦🇹 Austria
🇵🇹 Portugal
🇫🇮 Finland

ASIA PACIFIC:
🇦🇺 Australia
🇳🇿 New Zealand
🇯🇵 Japan
🇸🇬 Singapore
🇭🇰 Hong Kong
🇰🇷 South Korea
🇨🇳 China
🇮🇳 India
🇹🇭 Thailand
🇲🇾 Malaysia
🇮🇩 Indonesia

MIDDLE EAST & AFRICA:
🇦🇪 UAE
🇸🇦 Saudi Arabia
🇶🇦 Qatar
🇰🇼 Kuwait
🇧🇭 Bahrain
🇿🇦 South Africa
🇳🇬 Nigeria
🇰🇪 Kenya
🇪🇬 Egypt

Also include:
🌐 Global (all countries aggregate)

UI NOTES FOR GEOGRAPHY SELECTOR:
- Group countries under collapsible 
  region headers
- Include a search box at top so user 
  can type a country name
- Show selected countries as removable 
  tags below the selector
- Allow selecting up to 5 countries 
  for MVP (performance)
- "Global" option deselects all 
  individual countries

LOCATION DATA VARIATIONS:
Create locationData entries for at 
minimum these countries with distinct 
stat card values and currency/unit 
formatting:

United States:
  currency: USD ($)
  fuel unit: per gallon
  distance: miles
  fuel price: $3.42/gal
  unemployment: 4.1%
  CPI: +3.2% YoY
  interest rate: 5.25%

United Kingdom:
  currency: GBP (£)
  fuel unit: pence per litre
  distance: miles
  fuel price: 148p/litre
  unemployment: 4.4%
  CPI: +3.8% YoY
  interest rate: 5.00%

Germany:
  currency: EUR (€)
  fuel unit: per litre
  distance: km
  fuel price: €1.72/litre
  unemployment: 5.9%
  CPI: +2.9% YoY
  interest rate: 4.50%

France:
  currency: EUR (€)
  fuel unit: per litre
  distance: km
  fuel price: €1.84/litre
  unemployment: 7.3%
  CPI: +2.7% YoY
  interest rate: 4.50%

Australia:
  currency: AUD (A$)
  fuel unit: cents per litre
  distance: km
  fuel price: A$2.08/litre
  unemployment: 4.2%
  CPI: +3.6% YoY
  interest rate: 4.35%

Canada:
  currency: CAD (C$)
  fuel unit: cents per litre
  distance: km
  fuel price: C$1.68/litre
  unemployment: 6.1%
  CPI: +2.9% YoY
  interest rate: 5.00%

Japan:
  currency: JPY (¥)
  fuel unit: per litre
  distance: km
  fuel price: ¥168/litre
  unemployment: 2.6%
  CPI: +2.8% YoY
  interest rate: 0.10%

Singapore:
  currency: SGD (S$)
  fuel unit: per litre
  distance: km
  fuel price: S$2.84/litre
  unemployment: 2.1%
  CPI: +2.4% YoY
  interest rate: 3.68%

UAE:
  currency: AED
  fuel unit: per litre
  distance: km
  fuel price: AED 2.89/litre
  unemployment: 3.1%
  CPI: +3.1% YoY
  interest rate: 5.40%

Brazil:
  currency: BRL (R$)
  fuel unit: per litre
  distance: km
  fuel price: R$5.89/litre
  unemployment: 7.8%
  CPI: +4.8% YoY
  interest rate: 10.50%

South Africa:
  currency: ZAR (R)
  fuel unit: per litre
  distance: km
  fuel price: R22.80/litre
  unemployment: 32.1%
  CPI: +5.2% YoY
  interest rate: 8.25%

For all other countries not in the 
list above — use regional averages 
as fallback:
  Europe fallback: use EU averages
  Asia Pacific fallback: 
    use regional averages
  Middle East fallback: 
    use UAE as proxy
  Americas fallback: 
    use US as proxy
  Africa fallback: 
    use South Africa as proxy

MULTI-COUNTRY BEHAVIOR:
When user selects multiple countries:
- Show a country switcher tab 
  at the top of the dashboard
- Default view shows the first 
  selected country
- Tabs let them switch between 
  selected countries instantly
- News feed filters to show items 
  relevant to any of their 
  selected countries
- Market conditions strip shows 
  all selected countries side by side
  if 3 or fewer selected
- If more than 3 selected show 
  a dropdown to switch active country

Step 3 — Role (single select):
Underwriter | Actuary | Portfolio Manager |
Chief Underwriting Officer | MGA Principal |
Risk Manager | Reinsurance Analyst

"Generate My Dashboard" button.
Store selections in localStorage.

### Screen 3: Dashboard (/dashboard)
Main application. Two sections per LOB.

LAYOUT:
Fixed left sidebar (220px):
- UWAII logo
- Overview link (home icon)
- Divider: "YOUR LINES"
- One nav item per selected LOB
- Divider: "ACCOUNT"  
- Settings, Reconfigure

Top header bar:
- Page title
- Risk temperature badge 
  (Low/Elevated/High/Critical 
   in green/amber/orange/red)
- Geography selector dropdown
- Last updated timestamp

OVERVIEW TAB (default view):
When user lands on dashboard show 
an overview across all their LOBs.

Row 1: Market conditions strip
One badge per selected LOB showing:
- LOB name and icon
- Market condition (Hard/Soft/Stable/Firming)
- Rate change direction and %
Colors: Hard=red, Soft=green, 
Stable=blue, Firming=amber

Row 2: Key stat cards (6 cards responsive grid)
Show most relevant metrics for their 
selected LOBs. Each card shows:
- Metric name
- Current value (Space Mono font)
- Change indicator (▲▼ with %)
- Colored top border based on direction

Row 3: Two column layout (65/35 split)
Left: Top 5 news signals across all LOBs
Right: Rate trends table + LR benchmarks table

Row 4: 3 charts side by side
Most relevant charts across selected LOBs

INDIVIDUAL LOB TABS:
Each selected LOB gets its own tab/view.
Content defined below per LOB.

---

## LOB DASHBOARD CONTENT

### MOTOR / AUTO

Stat Cards:
- Fuel Price: $3.42/gal ▲8% (US) 
  or £1.52/litre ▲6% (UK)
- Vehicle Miles Traveled Index: 108.4 ▲2.1%
- Used Car Price Index: 142.3 ▼3.2%
- CPI Transport Component: +5.8% YoY
- Unemployment Rate: 4.1% →
- Active NHTSA Recalls: 847 campaigns

Charts:
1. Fuel Price vs Claim Frequency 
   (dual axis line, 24 months)
   - Left axis: fuel price
   - Right axis: frequency index
   - Show inverse correlation 
     when fuel price drops
   - Add annotation: 
     "60 day lag to frequency impact"

2. Used Car Price Index vs Severity
   (dual axis line, 24 months)
   - Show post-COVID spike in used 
     car prices driving severity up
   - Values: index spiked from 100 
     to 165 in 2021, now 142

3. Miles Traveled Seasonal Pattern
   (area chart, 24 months)
   - Show summer peaks, winter dips
   - Overlay prior year as dotted line

4. CPI vs Average Claim Severity
   (line chart, 36 months)
   - Both lines trending up post-2021
   - Strong visual correlation

News signals relevant to Motor:
- Oil price movements and OPEC decisions
- Government fuel duty / gas tax changes
- Economic recession or growth signals
- Major weather events affecting roads
- EV policy and infrastructure changes
- Road infrastructure investment
- Autonomous vehicle regulation

Key insight callouts to show:
"Fuel ▼ → Miles Driven ▲ in 60 days 
 → Frequency risk elevated"
"Parts inflation driving severity 
 +8.4% YoY — above historical avg"

---

### TRAVEL

Stat Cards:
- Jet Fuel Index: 118.4 ▲12%
- Global Flight On-Time Rate: 76.8% ▼3.2%
- Active L3+ Travel Advisories: 38 countries ▲4
- Intl Passenger Volume Index: 104.2 ▲8%
- Avg Airport Disruptions MTD: 847 events
- Travel Medical Claims Index: 112 ▲4pts

Charts:
1. Jet Fuel vs Average Airfare
   (dual axis line, 24 months)
   - Jet fuel leads airfare by ~30 days
   - Both spiking mid-2024

2. Travel Advisory Levels by Region
   (stacked area, 24 months)
   - Regions: Middle East, Africa, 
     Asia, Americas, Europe
   - Show escalation events clearly

3. Flight On-Time by Airline
   (horizontal bar chart)
   - Delta: 84%, Alaska: 82%, 
     United: 79%, Southwest: 74%,
     American: 73%, Spirit: 61%
   - Color: green >80%, amber 70-80%, 
     red <70%

4. International Passenger Volume
   (bar chart, monthly 24 months)
   - Show seasonality (summer peaks)
   - Show any COVID recovery tail

News signals relevant to Travel:
- Geopolitical tensions (Middle East, 
  Eastern Europe, Asia)
- Travel advisory changes (State Dept, 
  FCDO, DFAT)
- Airline strikes and operational issues
- Disease outbreak declarations (WHO)
- Natural disasters at popular destinations
- Oil price movements (airfare impact)
- Currency crises in destination countries

Key insight callouts:
"Middle East tensions → 
 evacuation sublimit review recommended"
"Jet fuel ▲12% → airfare pressure → 
 travel demand softening signal"

---

### CYBER

Stat Cards:
- Ransomware Incidents MTD: 2,847 ▲12%
- Active CISA Critical Alerts: 12
- Avg Breach Cost 2025: $4.9M ▲8%
- Critical CVEs This Month: 847 ▲18%
- Avg Ransom Demand: $847K ▲22%
- BEC Fraud Losses YTD: $2.1B ▲14%

Charts:
1. Ransomware Incidents Monthly 2019-2025
   (line chart)
   - 2019: ~100/month
   - 2025: ~2,800/month
   - Exponential curve
   - Annotate: "Colonial Pipeline May 2021"
   - Annotate: "ChatGPT launch Nov 2022 
     → BEC fraud spike"

2. Attack Frequency by Industry Sector
   (horizontal bar)
   - Healthcare: 340, Finance: 280,
     Manufacturing: 240, Retail: 180,
     Government: 160, Education: 140,
     Energy: 120, Tech: 110

3. Average Breach Cost Trend 2018-2025
   (line chart)
   - 2018: $3.2M → 2025: $4.9M
   - Steady upward trend
   - Annotate GDPR start 2018

4. Attack Vector Breakdown 2024
   (donut/pie chart)
   - Phishing: 36%
   - RDP Compromise: 24%
   - Software Vulnerability: 19%
   - Supply Chain: 12%
   - Insider: 6%
   - Other: 3%

News signals relevant to Cyber:
- CISA critical vulnerability alerts
- Major ransomware attacks on large orgs
- Nation-state attack attributions
- New ransomware group emergence
- Major data breach disclosures
- GDPR/FTC regulatory enforcement
- AI-enabled attack developments

Key insight callouts:
"12 active CISA critical alerts → 
 elevated ransomware risk next 30 days"
"Manufacturing sector: 3rd highest 
 attack frequency — review appetite"

---

### PROPERTY / CAT

Stat Cards:
- Global CAT Losses YTD: $127.4B ▲23%
- Active Wildfire Perimeters: 14 (US)
- Construction Cost Index: 142.3 ▲2.1%
- FEMA Flood Declarations YTD: 34
- Hurricane Season Forecast: Extremely Active
- Homeowners LR Estimate: 82.4% ▲8pts

Charts:
1. Annual Insured CAT Losses 2000-2024
   (bar chart)
   Data: 2000:38, 2001:27, 2002:15, 
   2003:20, 2004:48, 2005:101, 2006:18,
   2007:28, 2008:55, 2009:26, 2010:48,
   2011:110, 2012:72, 2013:44, 2014:31,
   2015:35, 2016:58, 2017:144, 2018:90,
   2019:60, 2020:82, 2021:120, 2022:132,
   2023:108, 2024:127
   - Blue bars, red for years >$100B
   - Reference line at $68B average

2. Construction Cost Index 2015-2025
   (line chart)
   - Index 100 in 2015
   - Flat to 2019, spike to 142 by 2023
   - Label: "Post-COVID materials 
     and labour inflation"

3. CAT Losses by Peril Type 2020-2024
   (stacked bar, annual)
   - Perils: Hurricane, Wildfire, 
     Hail/Wind, Flood, Earthquake, Other
   - Show hail/wind growing as % of total

4. Wildfire Acres Burned 2010-2024
   (area chart)
   - 2010: 3.4M acres
   - Volatile but trending up
   - Peak: 10.1M in 2020

News signals relevant to Property:
- Hurricane formation and track updates
- Active wildfire developments
- Major flood events
- Earthquake events M5.0+
- Construction cost movements
- Climate model updates
- Government flood defense decisions

Key insight callouts:
"Construction costs ▲42% since 2019 → 
 ITV adequacy gap widening"
"2025 hurricane season: extremely active 
 forecast → Gulf Coast review required"

---

### CROP / AGRICULTURE

Stat Cards:
- US Drought Coverage: 42% ▲8%
- Corn Price: $4.82/bu ▼3%
- Wheat Price: $6.14/bu ▲4%
- Crop Condition Good/Excellent: 54% ▼6%
- Fertilizer Price Index: 118 ▼2%
- USDA Disaster Declarations YTD: 28

Charts:
1. US Drought Coverage by Month 2022-2025
   (area chart)
   - Show seasonal patterns
   - Show multi-year drought periods
   - Peak coverage: 65% summer 2022

2. Commodity Prices 2020-2025
   (multi-line: corn, wheat, soy)
   - Show Ukraine war spike 2022
   - Current normalization
   - Corn: $3.80→$7.60→$4.82
   - Wheat: $5.20→$9.20→$6.14

3. Crop Insurance Indemnity Ratio
   (bar chart, annual 2010-2024)
   - Show volatile pattern
   - Major spike 2012 (drought)
   - Values range 0.65-1.45

4. Precipitation vs Yield Deviation
   (dual axis, current season by month)
   - Show current season stress
   - vs 5-year average baseline

News signals relevant to Crop:
- USDA weekly crop condition reports
- Drought monitor updates (weekly)
- Major weather in ag regions
- Commodity price movements
- Ukraine/Black Sea grain corridor
- Fertilizer supply disruptions
- El Nino / La Nina updates (NOAA)

Key insight callouts:
"42% of US in drought → 
 yield deviation risk elevated"
"Ukraine corridor uncertainty → 
 wheat price volatility persists"

---

### MARINE / CARGO

Stat Cards:
- Red Sea Traffic vs Normal: 34% ▼62%
- Global Port Congestion Index: 118 ▲8pts
- Drewry Container Rate Index: 312 ▲24%
- Piracy Incidents MTD: 18
- Avg Vessel Dwell Time: 4.2 days ▲1.1
- War Risk Premium Index: 185 ▲42%

Charts:
1. Red Sea Traffic Volume 2023-2025
   (line chart)
   - 100% normal through Nov 2023
   - Sharp drop Dec 2023 (Houthi attacks)
   - Stabilizes at 30-35% of normal
   - Annotate: "Houthi attacks begin 
     Dec 2023"

2. Container Shipping Rates 2020-2025
   (line chart)
   - 2020: index 100
   - COVID spike 2021: index 480
   - Normalization 2022-2023: index 90
   - New spike 2024: index 312
   - Annotate key events

3. Port Congestion Index 2020-2025
   (line chart)
   - COVID peak 2021: index 165
   - Normalization 2022: index 88
   - New pressure 2024-2025: index 118

4. Piracy Incidents by Region 2024
   (horizontal bar)
   - Gulf of Guinea: 82
   - Indian Ocean: 64
   - Southeast Asia: 48
   - Latin America: 38
   - Mediterranean: 22
   - Other: 18

News signals relevant to Marine:
- Houthi / Red Sea attack incidents
- Strait of Hormuz tensions
- Major port strikes and closures
- Significant vessel casualties
- Trade sanction changes
- Commodity price movements
- Severe weather on shipping lanes

Key insight callouts:
"Red Sea at 34% normal volume → 
 Cape diversion adding 14 days, 
 spoilage claims elevated"
"War risk premiums ▲42% → 
 pricing adequacy review recommended"

---

### WORKERS COMPENSATION

Stat Cards:
- Employment Index: 104.2 ▲0.8%
- Construction Activity Index: 108 ▲3.2%
- Medical CPI: +6.8% YoY ▲1.2pts
- OSHA Recordable Rate: 2.7 ▼0.3
- Avg Claim Duration: 42 days →
- WC Litigation Rate (US avg): 18.4% ▲0.8%

Charts:
1. Medical CPI vs Claim Severity
   (dual axis line, 36 months)
   - Both trending up
   - Medical CPI leads severity by ~90 days
   - Strong visual correlation

2. Employment by High-Risk Sector
   (stacked bar, 24 months)
   - Construction, Manufacturing, 
     Logistics, Healthcare
   - Show sector mix changes

3. Claim Frequency vs Economic Activity
   (dual axis line, 36 months)
   - GDP growth vs frequency index
   - Show procyclical relationship

4. Return to Work Duration by Injury
   (horizontal bar)
   - Back/Spine: 68 days
   - Shoulder: 61 days
   - Knee: 54 days
   - Fracture: 44 days
   - Strain: 22 days
   - Laceration: 12 days

News signals relevant to Workers Comp:
- Employment and jobs reports (BLS)
- Healthcare cost announcements
- OSHA regulatory changes
- Construction sector boom/bust
- Opioid policy and prescription changes
- Workers rights legislation
- Major industrial accidents

Key insight callouts:
"Medical CPI ▲6.8% → 
 severity pressure above plan"
"Construction sector ▲3.2% → 
 exposure growth in highest-risk class"

---

### HEALTH / LIFE

Stat Cards:
- GLP-1 Rx Growth YoY: ▲387%
- Obesity Rate (US): 41.2% ▼0.8%
- CDC Flu Activity: HIGH — 18 states
- Mental Health Claims Index: 128 ▲14%
- Specialty Drug Cost Inflation: ▲12.4%
- Mortality Deviation from Expected: +2.1%

Charts:
1. GLP-1 Prescription Volume 2019-2025
   (line chart, exponential)
   - 2019: index 100
   - 2025: index 587
   - Annotate Ozempic approval 2021
   - Annotate Wegovy approval 2022
   - Label: "First decline in obesity 
     rate since 2010"

2. Chronic Disease Prevalence 2010-2024
   (multi-line)
   - Diabetes: 10.5→11.6%
   - Hypertension: 32→34%
   - Obesity: 36→42% (now dipping)
   - Mental Health: 18→24%

3. Drug Cost Inflation by Category
   (grouped bar, 2020-2024)
   - GLP-1: dramatically higher
   - Specialty: high
   - Oncology: high
   - Cardiovascular: moderate
   - Generic: low/negative

4. Group Health MLR Trend 2015-2024
   (bar with trend line)
   - 2020 COVID dip (delayed care)
   - 2021-2022 spike (pent-up demand)
   - Normalizing but elevated
   - Values 78-92% range

News signals relevant to Health/Life:
- FDA drug approvals
- Drug pricing legislation (IRA impact)
- CDC disease surveillance (weekly)
- Mental health policy changes
- New GLP-1 drug developments
- Pandemic / outbreak alerts (WHO)
- Major health system changes

Key insight callouts:
"GLP-1 adoption accelerating → 
 long-term morbidity improvement 
 but short-term drug cost pressure"
"Flu HIGH in 18 states → 
 STD claims spike expected in 3-4 weeks"

---

## NEWS FEED

Create 20 realistic news items 
covering all LOBs and regions.

Each news item has this data structure:

{
  id: number,
  headline: string,
  source: string,
  time: string (e.g. "2 hours ago"),
  priority: "HIGH" | "MEDIUM" | "LOW" | "INFO",
  lobs: string[] (array of affected LOBs),
  regions: string[] (affected regions),
  summary: string (2 sentences),
  commentary: {
    whatHappened: string,
    whyItMatters: string,
    impacts: [
      {
        lob: string,
        type: "frequency" | "severity" | 
              "demand" | "cost" | "regulatory",
        direction: "up" | "down" | "watch",
        detail: string
      }
    ],
    watchFor: string,
    action: "NONE" | "MONITOR" | 
            "REVIEW" | "ACT"
  }
}

Sample news items to hardcode:

1. HIGH | Motor, Travel, Marine
"Iran Naval Exercises Announced in 
Strait of Hormuz — Oil Supply Risk Elevated"
Commentary: Oil prices likely to spike 
$5-8/barrel. Motor: fuel cost pressure, 
frequency benefit delayed 60 days. 
Travel: Middle East route risk elevated. 
Marine: Gulf war risk premiums moving.
Action: REVIEW

2. HIGH | Cyber
"CISA Critical Alert: Cisco IOS 
Vulnerability CVE-2025-20188 — 
40,000+ Enterprise Devices Exposed"
Commentary: Ransomware exploitation 
likely within 14-21 days. 
Manufacturing and healthcare most exposed.
Action: REVIEW

3. HIGH | Property, Crop
"NOAA Upgrades 2025 Atlantic Hurricane 
Season Forecast to Extremely Active"
Commentary: 17-25 storms forecast. 
Gulf Coast property accumulations need 
urgent review. Crop in coastal regions elevated.
Action: ACT

4. MEDIUM | Motor
"Oil Prices Fall 12% on Weaker China 
Demand — WTI at $68/barrel"
Commentary: Gas prices to follow in 
2-3 weeks. Miles driven expected to 
rise 3-4% within 90 days. 
Frequency uptick Q3 likely.
Action: MONITOR

5. MEDIUM | Travel
"State Department Upgrades Kenya 
to Level 3 Advisory"
Commentary: Security deteriorating 
in Nairobi suburbs. East Africa 
travel policies need review.
Action: REVIEW

6. MEDIUM | Health, Workers Comp
"CDC Reports Flu Activity Now High 
in 18 States — Up from 7 Last Week"
Commentary: Southeast and Midwest 
most affected. STD claims spike 
expected in 3-4 weeks.
Action: MONITOR

7. MEDIUM | Marine
"Red Sea Shipping Disruptions Continue 
Week 18 — No Resolution in Sight"
Commentary: 67% of container traffic 
still diverting via Cape. Voyage 
extensions averaging 14 days. 
Spoilage claims persisting.
Action: MONITOR

8. MEDIUM | Crop
"USDA Drought Monitor Shows 47% of 
US Corn Belt in Severe Drought"
Commentary: Corn yield at risk. 
Current crop conditions deteriorating. 
Q3 indemnity pressure building.
Action: REVIEW

9. LOW | Cyber
"New Ransomware Group 'BlackForest' 
Targeting European Financial Services"
Commentary: Initial targeting pattern 
suggests focus on mid-market banks 
and insurers. Watch for expansion.
Action: MONITOR

10. LOW | Property (UK)
"UK Met Office Issues Extended Dry 
Weather Warning — Subsidence Risk"
Commentary: Prolonged dry conditions 
increase shrink-swell clay movement. 
UK homeowners subsidence claims 
historically spike after extended dry.
Action: MONITOR

11. HIGH | Motor (UK)
"UK Government Announces Fuel Duty 
Freeze Extended for 12 Months"
Commentary: Pump prices stable 
near-term. Miles driven outlook 
unchanged. No immediate frequency impact.
Action: NONE

12. MEDIUM | Health
"FDA Approves New GLP-1 Drug — 
Third in Class Now Available"
Commentary: Further acceleration 
of GLP-1 adoption likely. 
Short-term: drug cost pressure. 
Long-term: morbidity improvement.
Action: MONITOR

13. HIGH | Marine, Crop
"Black Sea Grain Corridor Agreement 
Suspended — Ukraine Exports at Risk"
Commentary: Wheat and corn supply 
disruption risk elevated. 
Commodity price volatility likely. 
Crop insured values rising.
Action: REVIEW

14. MEDIUM | Workers Comp
"US Construction Employment Hits 
20-Year High — Sector Exposure Growing"
Commentary: Highest-risk WC class 
growing fastest. Frequency exposure 
increasing proportionally.
Action: MONITOR

15. LOW | Travel (Europe)
"Eurocontrol Warns of Summer 
ATC Staffing Shortages Across EU"
Commentary: Flight delays expected 
to worsen June-August. Delay claim 
frequency elevated for EU routes.
Action: MONITOR

16. HIGH | Property (Australia)
"Bureau of Meteorology Declares 
La Nina Watch — Elevated Flood Risk"
Commentary: La Nina historically 
associated with above-average 
rainfall in eastern Australia. 
Flood accumulations should be reviewed.
Action: REVIEW

17. MEDIUM | Cyber
"Chainalysis Reports Record $1.2B 
Ransomware Payments in Q1 2025"
Commentary: Frequency and severity 
both at record levels. Rate adequacy 
under pressure across all cyber lines.
Action: REVIEW

18. INFO | Motor (Europe)
"EU Carbon Border Tax Implementation 
to Raise Vehicle Parts Import Costs"
Commentary: Gradual impact on repair 
severity for European motor books 
over 12-24 months.
Action: MONITOR

19. MEDIUM | Property
"Swiss Re Estimates 2025 Global CAT 
Losses Already $127B Through May"
Commentary: Running 23% above 
prior year pace. Full year on track 
to exceed $200B for first time.
Action: REVIEW

20. HIGH | Travel, Marine
"G7 Announces New Sanctions Package 
on Russia — Air and Sea Routes Affected"
Commentary: Russian airspace closure 
extended. Arctic route disruptions 
for carriers. Baltic Sea war risk elevated.
Action: REVIEW

---

## GEOGRAPHIC DATA VARIATIONS

Step 2 — Geography (multi-select, 
choose specific countries):

Show countries grouped by region 
in a searchable dropdown or 
scrollable grouped list.

AMERICAS:
🇺🇸 United States
🇨🇦 Canada
🇧🇷 Brazil
🇲🇽 Mexico
🇦🇷 Argentina
🇨🇱 Chile
🇨🇴 Colombia

EUROPE:
🇬🇧 United Kingdom
🇩🇪 Germany
🇫🇷 France
🇳🇱 Netherlands
🇨🇭 Switzerland
🇸🇪 Sweden
🇳🇴 Norway
🇩🇰 Denmark
🇮🇪 Ireland
🇮🇹 Italy
🇪🇸 Spain
🇵🇱 Poland
🇧🇪 Belgium
🇦🇹 Austria
🇵🇹 Portugal
🇫🇮 Finland

ASIA PACIFIC:
🇦🇺 Australia
🇳🇿 New Zealand
🇯🇵 Japan
🇸🇬 Singapore
🇭🇰 Hong Kong
🇰🇷 South Korea
🇨🇳 China
🇮🇳 India
🇹🇭 Thailand
🇲🇾 Malaysia
🇮🇩 Indonesia

MIDDLE EAST & AFRICA:
🇦🇪 UAE
🇸🇦 Saudi Arabia
🇶🇦 Qatar
🇰🇼 Kuwait
🇧🇭 Bahrain
🇿🇦 South Africa
🇳🇬 Nigeria
🇰🇪 Kenya
🇪🇬 Egypt

Also include:
🌐 Global (all countries aggregate)

UI NOTES FOR GEOGRAPHY SELECTOR:
- Group countries under collapsible 
  region headers
- Include a search box at top so user 
  can type a country name
- Show selected countries as removable 
  tags below the selector
- Allow selecting up to 5 countries 
  for MVP (performance)
- "Global" option deselects all 
  individual countries

LOCATION DATA VARIATIONS:
Create locationData entries for at 
minimum these countries with distinct 
stat card values and currency/unit 
formatting:

United States:
  currency: USD ($)
  fuel unit: per gallon
  distance: miles
  fuel price: $3.42/gal
  unemployment: 4.1%
  CPI: +3.2% YoY
  interest rate: 5.25%

United Kingdom:
  currency: GBP (£)
  fuel unit: pence per litre
  distance: miles
  fuel price: 148p/litre
  unemployment: 4.4%
  CPI: +3.8% YoY
  interest rate: 5.00%

Germany:
  currency: EUR (€)
  fuel unit: per litre
  distance: km
  fuel price: €1.72/litre
  unemployment: 5.9%
  CPI: +2.9% YoY
  interest rate: 4.50%

France:
  currency: EUR (€)
  fuel unit: per litre
  distance: km
  fuel price: €1.84/litre
  unemployment: 7.3%
  CPI: +2.7% YoY
  interest rate: 4.50%

Australia:
  currency: AUD (A$)
  fuel unit: cents per litre
  distance: km
  fuel price: A$2.08/litre
  unemployment: 4.2%
  CPI: +3.6% YoY
  interest rate: 4.35%

Canada:
  currency: CAD (C$)
  fuel unit: cents per litre
  distance: km
  fuel price: C$1.68/litre
  unemployment: 6.1%
  CPI: +2.9% YoY
  interest rate: 5.00%

Japan:
  currency: JPY (¥)
  fuel unit: per litre
  distance: km
  fuel price: ¥168/litre
  unemployment: 2.6%
  CPI: +2.8% YoY
  interest rate: 0.10%

Singapore:
  currency: SGD (S$)
  fuel unit: per litre
  distance: km
  fuel price: S$2.84/litre
  unemployment: 2.1%
  CPI: +2.4% YoY
  interest rate: 3.68%

UAE:
  currency: AED
  fuel unit: per litre
  distance: km
  fuel price: AED 2.89/litre
  unemployment: 3.1%
  CPI: +3.1% YoY
  interest rate: 5.40%

Brazil:
  currency: BRL (R$)
  fuel unit: per litre
  distance: km
  fuel price: R$5.89/litre
  unemployment: 7.8%
  CPI: +4.8% YoY
  interest rate: 10.50%

South Africa:
  currency: ZAR (R)
  fuel unit: per litre
  distance: km
  fuel price: R22.80/litre
  unemployment: 32.1%
  CPI: +5.2% YoY
  interest rate: 8.25%

For all other countries not in the 
list above — use regional averages 
as fallback:
  Europe fallback: use EU averages
  Asia Pacific fallback: 
    use regional averages
  Middle East fallback: 
    use UAE as proxy
  Americas fallback: 
    use US as proxy
  Africa fallback: 
    use South Africa as proxy

MULTI-COUNTRY BEHAVIOR:
When user selects multiple countries:
- Show a country switcher tab 
  at the top of the dashboard
- Default view shows the first 
  selected country
- Tabs let them switch between 
  selected countries instantly
- News feed filters to show items 
  relevant to any of their 
  selected countries
- Market conditions strip shows 
  all selected countries side by side
  if 3 or fewer selected
- If more than 3 selected show 
  a dropdown to switch active country

---

## COMPONENT REQUIREMENTS

Dashboard Builder:
- Multi-select LOB cards with icons
- Multi-select geography cards with flags
- Single-select role buttons
- Progress indicator (Step 1/2/3)
- Selections stored in localStorage

Dashboard:
- All 8 LOB sub-dashboards built out
- Overview dashboard showing summary
- News feed component (filterable 
  by LOB and priority)
- News item card with expandable 
  AI commentary
- Stat card component (reusable)
- Chart components (reusable)
- Market condition badges
- Priority badges (color coded)
- Risk temperature indicator
- LOB filter pills for news feed

News Feed:
- Filter by LOB (pills)
- Filter by priority (All/High/Medium/Low)
- Filter by region
- Expand/collapse AI commentary
- Mark as read
- Action badge (None/Monitor/Review/Act)

---

## DUMMY DATA QUALITY

Make all dummy data:
- Realistic and internally consistent
- Showing interesting relationships 
  (correlations, lag effects)
- Including historical context 
  (COVID visible in 2020 data, 
   Ukraine war visible in 2022)
- Appropriate ranges per LOB
- Directionally accurate 
  (real-world relationships preserved)

Charts should tell a story:
- CAT losses clearly trending up
- Cyber incidents exponentially growing
- GLP-1 prescriptions exploding
- Red Sea traffic sharply declining
- Used car prices spiking post-COVID

---

## START HERE

Build in this order:

1. Set up React app with routing
2. Create all dummy data in /src/data/
   - signals.js (20 news items)
   - chartData.js (all chart datasets)
   - lobData.js (stat cards per LOB)
   - locationData.js (geo variations)
   - marketConditions.js
3. Landing page
4. Dashboard builder
5. Dashboard shell 
   (sidebar + header + routing)
6. Overview tab
7. Individual LOB tabs 
   (Motor first, then all others)
8. News feed component
9. Signal detail expansion
10. Location switching logic