/* 20 hardcoded news signals covering all LOBs and regions */

export const signals = [
  {
    id: 1,
    headline: "Iran Naval Exercises Announced in Strait of Hormuz — Oil Supply Risk Elevated",
    source: "Reuters",
    time: "2 hours ago",
    priority: "HIGH",
    lobs: ["motor", "travel", "marine"],
    regions: ["Middle East"],
    summary: "Iran announced naval exercises in the Strait of Hormuz, raising concerns about oil supply disruption. Oil prices responded with a $5–8/barrel premium in early trading.",
    commentary: {
      whatHappened: "Iranian naval exercises in the Strait of Hormuz have raised geopolitical tensions and oil supply risk, pushing crude prices up $5–8/barrel in early trading.",
      whyItMatters: "The Strait of Hormuz handles ~20% of global oil supply. Any sustained disruption drives fuel costs up across motor, aviation, and shipping sectors simultaneously.",
      impacts: [
        { lob: "Motor", type: "cost", direction: "up", detail: "Fuel prices expected to rise 8–12 cents/gallon within 2–3 weeks. Frequency benefit from demand destruction delayed 60 days." },
        { lob: "Travel", type: "cost", direction: "up", detail: "Jet fuel cost pressure increasing. Middle East route war risk premiums moving upward. Demand softening signal." },
        { lob: "Marine", type: "cost", direction: "up", detail: "Gulf war risk premiums rising. Tanker rerouting costs increasing. Cargo insured values affected." }
      ],
      watchFor: "Oil price sustained above $90/barrel would trigger meaningful frequency and severity impacts across all three LOBs within 60–90 days.",
      action: "REVIEW"
    }
  },
  {
    id: 2,
    headline: "CISA Critical Alert: Cisco IOS Vulnerability CVE-2025-20188 — 40,000+ Enterprise Devices Exposed",
    source: "CISA",
    time: "3 hours ago",
    priority: "HIGH",
    lobs: ["cyber"],
    regions: ["Global"],
    summary: "CISA issued a critical alert for a Cisco IOS vulnerability affecting over 40,000 enterprise network devices. Active exploitation expected within 14–21 days.",
    commentary: {
      whatHappened: "A critical remote code execution vulnerability in Cisco IOS affects enterprise routers and switches. Estimated 40,000+ devices globally are exposed, with no patch widely deployed yet.",
      whyItMatters: "Network infrastructure vulnerabilities of this type historically lead to ransomware deployment within 14–21 days as threat actors weaponise the CVE.",
      impacts: [
        { lob: "Cyber", type: "frequency", direction: "up", detail: "Manufacturing and healthcare sectors most exposed — both top-5 for cyber claim frequency. Expect breach notifications in 3–4 weeks." },
        { lob: "Cyber", type: "severity", direction: "up", detail: "Network-level compromise enables lateral movement, raising average breach cost. Ransomware deployment likely." }
      ],
      watchFor: "Watch for ransomware group announcements claiming exploitation of this CVE. Healthcare and manufacturing portfolios need immediate review.",
      action: "REVIEW"
    }
  },
  {
    id: 3,
    headline: "NOAA Upgrades 2025 Atlantic Hurricane Season Forecast to Extremely Active",
    source: "NOAA",
    time: "5 hours ago",
    priority: "HIGH",
    lobs: ["property", "crop"],
    regions: ["Americas", "United States"],
    summary: "NOAA upgraded its 2025 Atlantic hurricane season forecast to 'Extremely Active', projecting 17–25 named storms including 8–13 hurricanes. Record warm sea surface temperatures cited.",
    commentary: {
      whatHappened: "NOAA revised its seasonal forecast upward due to record Atlantic sea surface temperatures and an absent El Niño shear effect. This is the most active forecast on record.",
      whyItMatters: "Extremely active seasons correlate strongly with elevated insured CAT losses. 2025 Gulf Coast property accumulations require urgent review. Coastal crop exposures also elevated.",
      impacts: [
        { lob: "Property", type: "frequency", direction: "up", detail: "Gulf Coast and Southeast US property accumulations need urgent PML review. Homeowners LR likely to exceed current estimates." },
        { lob: "Crop", type: "frequency", direction: "up", detail: "Coastal agriculture in Florida, Louisiana, Texas elevated. Citrus and sugar exposures most at risk." }
      ],
      watchFor: "First major landfalling hurricane watch/warning. Track any early-season activity in Gulf of Mexico — warm SSTs support rapid intensification.",
      action: "ACT"
    }
  },
  {
    id: 4,
    headline: "Oil Prices Fall 12% on Weaker China Demand — WTI at $68/barrel",
    source: "Bloomberg",
    time: "6 hours ago",
    priority: "MEDIUM",
    lobs: ["motor"],
    regions: ["Global", "Asia Pacific"],
    summary: "WTI crude fell 12% to $68/barrel after Chinese economic data showed weaker-than-expected industrial output and fuel demand. Pump prices expected to follow in 2–3 weeks.",
    commentary: {
      whatHappened: "Weak Chinese manufacturing PMI and below-forecast refinery throughput data triggered broad oil price selling. WTI now at lowest level since February.",
      whyItMatters: "Lower fuel prices historically drive miles traveled up 3–4% within 90 days, increasing claim frequency. The effect is non-linear — the biggest miles-driven response comes in the first $0.20/gallon drop.",
      impacts: [
        { lob: "Motor", type: "frequency", direction: "up", detail: "Gas prices expected to fall 10–15 cents/gallon within 3 weeks. VMT increase of 3–4% expected within 90 days, lifting claim frequency." }
      ],
      watchFor: "Gas price drop below $3.20/gallon triggers accelerated VMT response. Watch Q3 frequency run rates from July onwards.",
      action: "MONITOR"
    }
  },
  {
    id: 5,
    headline: "State Department Upgrades Kenya to Level 3 Travel Advisory",
    source: "US State Dept",
    time: "8 hours ago",
    priority: "MEDIUM",
    lobs: ["travel"],
    regions: ["Middle East & Africa", "Kenya"],
    summary: "The US State Department raised Kenya to a Level 3 'Reconsider Travel' advisory citing security deterioration in Nairobi's western suburbs and elevated kidnapping risk.",
    commentary: {
      whatHappened: "Security incidents in Nairobi's Westlands district and reported kidnapping of foreign nationals prompted the advisory upgrade from Level 2.",
      whyItMatters: "Level 3 advisories are a direct covered-cancellation trigger for most travel policies. East Africa travel books will see immediate claim frequency increase.",
      impacts: [
        { lob: "Travel", type: "frequency", direction: "up", detail: "Level 3 is a direct cancel trigger. Expect claims from Kenya-bound policies within 14 days. Review aggregate exposure to East Africa." }
      ],
      watchFor: "Potential upgrade to Level 4 (Do Not Travel) if security deteriorates further. UK FCDO and Australian DFAT advisories for correlation.",
      action: "REVIEW"
    }
  },
  {
    id: 6,
    headline: "CDC Reports Flu Activity Now High in 18 States — Up from 7 Last Week",
    source: "CDC",
    time: "10 hours ago",
    priority: "MEDIUM",
    lobs: ["health", "workerscomp"],
    regions: ["United States"],
    summary: "CDC's weekly flu surveillance shows activity has expanded from 7 to 18 states in a single week, with Southeast and Midwest most affected. Hospitalization rates above seasonal norm.",
    commentary: {
      whatHappened: "Influenza A H3N2 variant is driving a faster-than-usual early-season spread, with 18 states now reporting high or very high activity levels.",
      whyItMatters: "Short-term disability claims spike 3–4 weeks after flu activity peaks. Healthcare utilization also rises. Workers Comp frequency increases in high-contact occupations.",
      impacts: [
        { lob: "Health", type: "frequency", direction: "up", detail: "STD claims expected to spike in 3–4 weeks. Emergency room utilization rising. Watch mental health claim co-morbidity." },
        { lob: "Workers Comp", type: "frequency", direction: "up", detail: "Healthcare, education, and retail WC classes most exposed. Absenteeism-related injuries increase when workers return while still ill." }
      ],
      watchFor: "CDC upgrading to 'Widespread' status across 30+ states would signal a significant STD and WC frequency event.",
      action: "MONITOR"
    }
  },
  {
    id: 7,
    headline: "Red Sea Shipping Disruptions Continue Week 18 — No Resolution in Sight",
    source: "Lloyd's List",
    time: "12 hours ago",
    priority: "MEDIUM",
    lobs: ["marine"],
    regions: ["Middle East"],
    summary: "Red Sea shipping diversions enter week 18 with no diplomatic resolution visible. 67% of container traffic continues Cape of Good Hope diversion, adding 14 days to voyages.",
    commentary: {
      whatHappened: "Houthi attack frequency on commercial shipping has not decreased. Major liner operators continue to avoid the Bab-el-Mandeb strait, with no change in posture.",
      whyItMatters: "Extended diversion routes increase voyage duration by 14 days, raising cargo exposure time, spoilage risk, and war risk premium accumulation.",
      impacts: [
        { lob: "Marine", type: "severity", direction: "up", detail: "Perishable cargo spoilage claims persisting. Extended voyages increase theft and damage frequency. War risk premiums at 14-month highs." },
        { lob: "Marine", type: "cost", direction: "up", detail: "Cape diversion adds ~$1M fuel cost per vessel per voyage, flowing through to insured cargo values and contractual disputes." }
      ],
      watchFor: "US/UK naval escort capacity limitations. Any new Houthi attack capability development. Container rate index — currently 312, rising.",
      action: "MONITOR"
    }
  },
  {
    id: 8,
    headline: "USDA Drought Monitor Shows 47% of US Corn Belt in Severe Drought",
    source: "USDA",
    time: "14 hours ago",
    priority: "MEDIUM",
    lobs: ["crop"],
    regions: ["United States"],
    summary: "USDA's weekly drought monitor shows 47% of the US Corn Belt in D2 (Severe) or worse drought conditions, up 8 percentage points week-over-week. Corn pollination period begins in 3 weeks.",
    commentary: {
      whatHappened: "Persistent high pressure blocking pattern has driven exceptional heat and dryness across Iowa, Illinois, Indiana and Ohio. Soil moisture at 10-year low for this date.",
      whyItMatters: "Corn is most vulnerable to drought stress during pollination (typically late June–July). Current drought coverage at 47% with pollination 3 weeks away creates significant indemnity risk.",
      impacts: [
        { lob: "Crop", type: "frequency", direction: "up", detail: "Q3 corn indemnity ratio likely above 1.0 if drought persists through pollination. Current good/excellent rating at 54% — watch for weekly deterioration." }
      ],
      watchFor: "USDA crop condition report each Monday. If good/excellent drops below 45%, yield deviation risk becomes material. Commodity price response — corn typically rallies on drought news.",
      action: "REVIEW"
    }
  },
  {
    id: 9,
    headline: "New Ransomware Group 'BlackForest' Targeting European Financial Services",
    source: "Mandiant",
    time: "1 day ago",
    priority: "LOW",
    lobs: ["cyber"],
    regions: ["Europe"],
    summary: "Cybersecurity firm Mandiant published a threat intelligence report on a new ransomware group named BlackForest, currently focused on mid-market European banks and insurance companies.",
    commentary: {
      whatHappened: "BlackForest emerged 6 weeks ago with confirmed attacks on 3 European financial services firms. Initial access via compromised VPN credentials. Average demand: €450K.",
      whyItMatters: "New ransomware groups targeting financial services in Europe represent an emerging frequency risk for cyber portfolios with European exposure.",
      impacts: [
        { lob: "Cyber", type: "frequency", direction: "watch", detail: "Watch European financial services exposure. Mid-market firms (€500M–€5B revenue) are primary targets based on current pattern." }
      ],
      watchFor: "Additional confirmed victims. Expansion into North American targets (typical within 6–8 weeks of launch). ENISA advisory.",
      action: "MONITOR"
    }
  },
  {
    id: 10,
    headline: "UK Met Office Issues Extended Dry Weather Warning — Subsidence Risk Rising",
    source: "UK Met Office",
    time: "1 day ago",
    priority: "LOW",
    lobs: ["property"],
    regions: ["Europe", "United Kingdom"],
    summary: "The UK Met Office issued a 30-day extended dry weather warning for England and Wales. Clay-rich soil subsidence risk elevated, particularly in London, Essex, and Sussex.",
    commentary: {
      whatHappened: "Below-average rainfall since March has driven soil moisture deficit to levels not seen since the 2018 dry summer. The Met Office expects the pattern to persist through July.",
      whyItMatters: "Prolonged dry conditions cause shrink-swell clay soils to contract, leading to foundation movement. UK homeowners subsidence claims historically spike 3–6 months after an extended dry period.",
      impacts: [
        { lob: "Property", type: "frequency", direction: "up", detail: "UK homeowners/dwellings books in South/SE England at elevated subsidence risk. Expect claim spike Q4 2025–Q1 2026 if pattern persists." }
      ],
      watchFor: "Soil moisture deficit exceeding 2018 levels. Loss adjusters noting increase in crack-related claims. ABI industry data releases.",
      action: "MONITOR"
    }
  },
  {
    id: 11,
    headline: "UK Government Announces Fuel Duty Freeze Extended for 12 Months",
    source: "HM Treasury",
    time: "1 day ago",
    priority: "HIGH",
    lobs: ["motor"],
    regions: ["Europe", "United Kingdom"],
    summary: "The UK Chancellor confirmed fuel duty will remain frozen at 57.95p/litre for another 12 months, removing a planned 5p/litre increase. Pump prices to remain stable near-term.",
    commentary: {
      whatHappened: "In the Spring Statement, the Chancellor extended the fuel duty freeze that has been in place since 2011, deferring a planned inflationary uplift for another year.",
      whyItMatters: "Stable fuel prices maintain current UK motor frequency levels. No demand destruction or demand stimulus expected. Neutral for Motor frequency outlook.",
      impacts: [
        { lob: "Motor", type: "frequency", direction: "watch", detail: "UK motor frequency unchanged near-term. The freeze removes a potential miles-driven demand stimulus but also prevents any cost-push demand reduction." }
      ],
      watchFor: "Any unexpected oil price move that overrides the duty freeze effect. Budget autumn — when duty freeze may not be extended again.",
      action: "NONE"
    }
  },
  {
    id: 12,
    headline: "FDA Approves New GLP-1 Drug — Third Molecule in Class Now Available",
    source: "FDA",
    time: "2 days ago",
    priority: "MEDIUM",
    lobs: ["health"],
    regions: ["United States"],
    summary: "The FDA approved Eli Lilly's orforglipron, a new oral GLP-1 receptor agonist, making it the third approved molecule in the class and the first once-daily oral option.",
    commentary: {
      whatHappened: "FDA approved orforglipron (LY3502970), an oral GLP-1 agonist showing 15% average weight loss at 36 weeks in Phase 3 trials. No injection required.",
      whyItMatters: "Oral dosing removes a significant adoption barrier. Prescription volume for the GLP-1 class is already growing 387% YoY — oral option could accelerate this further.",
      impacts: [
        { lob: "Health", type: "cost", direction: "up", detail: "Short-term: group health drug cost pressure increases as oral GLP-1s likely have higher uptake than injectable. Long-term: morbidity improvement signal." },
        { lob: "Health", type: "severity", direction: "down", detail: "Long-term obesity reduction driving down cardiovascular, diabetes, and joint claim severity. Effect visible in 3–5 year LR trajectory." }
      ],
      watchFor: "Group health formulary decisions. IRA drug pricing negotiation list. PBM coverage decisions — will determine speed of volume ramp.",
      action: "MONITOR"
    }
  },
  {
    id: 13,
    headline: "Black Sea Grain Corridor Agreement Suspended — Ukraine Exports at Risk",
    source: "Reuters",
    time: "2 days ago",
    priority: "HIGH",
    lobs: ["marine", "crop"],
    regions: ["Europe", "Americas"],
    summary: "Russia suspended participation in the Black Sea Grain Initiative, putting at risk 8 million tonnes/year of Ukrainian wheat and corn exports. Commodity prices jumped 4–6% on the news.",
    commentary: {
      whatHappened: "Russia announced it was suspending its participation in the grain corridor citing NATO vessel activity. Grain shipments from Odesa have been paused. Turkey is mediating.",
      whyItMatters: "Ukraine supplies ~10% of global wheat and 14% of corn exports. Suspension raises price volatility and creates insured value uplift risk for crop and cargo books.",
      impacts: [
        { lob: "Crop", type: "cost", direction: "up", detail: "Wheat and corn prices already +4–6% overnight. Commodity price volatility elevates crop insured values and revenue protection triggers." },
        { lob: "Marine", type: "frequency", direction: "up", detail: "Black Sea cargo insurance demand rising. War risk premiums on Ukraine port calls surging. Rerouting to Romanian and Bulgarian ports creates new accumulation risk." }
      ],
      watchFor: "Turkey mediation outcome within 10 days. UN intervention. Prices at $7.50/bu wheat or $6/bu corn would signal market pricing in sustained disruption.",
      action: "REVIEW"
    }
  },
  {
    id: 14,
    headline: "US Construction Employment Hits 20-Year High — Sector Exposure Growing",
    source: "BLS",
    time: "2 days ago",
    priority: "MEDIUM",
    lobs: ["workerscomp"],
    regions: ["United States"],
    summary: "Bureau of Labor Statistics reports US construction employment reached 8.1 million workers in May 2026, the highest since 2006. Infrastructure and housing starts driving the surge.",
    commentary: {
      whatHappened: "Construction added 34,000 jobs in May, driven by infrastructure spending under the IIJA and housing starts recovering from 2023–24 lows. Employment is up 6% year-over-year.",
      whyItMatters: "Construction is the highest-risk WC class code. Proportional growth in this sector directly increases frequency exposure. WC pricing adequacy review required.",
      impacts: [
        { lob: "Workers Comp", type: "frequency", direction: "up", detail: "Construction WC class growing fastest — highest base frequency rate of any major industry. Written premium may lag actual exposure growth if payroll hasn't been updated." }
      ],
      watchFor: "Monthly BLS employment-by-sector releases. Any indication of construction safety incidents rising proportionally. OSHA enforcement uptick.",
      action: "MONITOR"
    }
  },
  {
    id: 15,
    headline: "Eurocontrol Warns of Summer ATC Staffing Shortages Across EU",
    source: "Eurocontrol",
    time: "3 days ago",
    priority: "LOW",
    lobs: ["travel"],
    regions: ["Europe"],
    summary: "Eurocontrol's summer outlook warns that 12 European air traffic control centres face critical staffing gaps June–August, with France, Greece, and Cyprus most affected.",
    commentary: {
      whatHappened: "ATC controllers are retiring faster than new ones qualify. France plans to limit daily flights in July by 15% due to staffing. Greece and Cyprus summer tourist traffic at risk.",
      whyItMatters: "ATC-driven delays are covered under most trip delay policies. Extended delays in EU holiday season peak period will elevate claim frequency on European routes.",
      impacts: [
        { lob: "Travel", type: "frequency", direction: "up", detail: "Trip delay claim frequency on EU routes elevated June–August. Mediterranean holiday routes (Greece, Cyprus, Spain) most affected." }
      ],
      watchFor: "French DGAC flight caps confirmed for July. Eurocontrol NOTAM system for specific restriction dates. Airline schedule compression announcements.",
      action: "MONITOR"
    }
  },
  {
    id: 16,
    headline: "Bureau of Meteorology Declares La Niña Watch — Elevated Flood Risk for Eastern Australia",
    source: "Bureau of Meteorology",
    time: "3 days ago",
    priority: "HIGH",
    lobs: ["property"],
    regions: ["Asia Pacific", "Australia"],
    summary: "Australia's Bureau of Meteorology declared a La Niña Watch, indicating a 60% probability of La Niña developing by August. Eastern Australia faces elevated flood risk October–March.",
    commentary: {
      whatHappened: "Pacific Ocean sea surface temperatures are cooling toward La Niña threshold values. ENSO models now give 60% probability of La Niña conditions by August 2026.",
      whyItMatters: "La Niña events historically drive above-average rainfall across Queensland, NSW, and Victoria. The 2021–22 La Niña caused AUD $6.4B in insured flood losses across two years.",
      impacts: [
        { lob: "Property", type: "frequency", direction: "up", detail: "Eastern Australia property books — particularly Queensland and NSW — face materially elevated flood frequency risk. Review flood accumulation models using La Niña rainfall scenarios." }
      ],
      watchFor: "BOM upgrading from Watch to Advisory (higher probability). Queensland flood mapping updates. Any Brisbane, Sydney, or Melbourne flood declarations.",
      action: "REVIEW"
    }
  },
  {
    id: 17,
    headline: "Chainalysis Reports Record $1.2B Ransomware Payments in Q1 2025",
    source: "Chainalysis",
    time: "4 days ago",
    priority: "MEDIUM",
    lobs: ["cyber"],
    regions: ["Global"],
    summary: "Blockchain analytics firm Chainalysis reported Q1 2025 ransomware payments totalled $1.2 billion, a 42% increase year-over-year and the highest single quarter on record.",
    commentary: {
      whatHappened: "Ransomware payment volumes hit a new quarterly record, driven by larger average demands ($847K average in Q1) and higher payment rates. Healthcare sector paid most.",
      whyItMatters: "Record payments confirm both frequency and severity are at all-time highs. Rate adequacy review required across all cyber books. Capacity pricing assumptions need updating.",
      impacts: [
        { lob: "Cyber", type: "severity", direction: "up", detail: "Average ransomware demand now $847K — 22% above prior year. Total Q1 cost including business interruption, forensics, and ransom averages $4.9M per incident." },
        { lob: "Cyber", type: "frequency", direction: "up", detail: "Attack frequency also rising. Q1 2025 on pace for 11,000+ incidents annually versus 7,800 in 2023." }
      ],
      watchFor: "Q2 2025 Chainalysis update. FBI IC3 annual report. Any cyber insurer rate filing changes that signal loss ratio deterioration.",
      action: "REVIEW"
    }
  },
  {
    id: 18,
    headline: "EU Carbon Border Tax Implementation to Raise Vehicle Parts Import Costs",
    source: "European Commission",
    time: "5 days ago",
    priority: "INFO",
    lobs: ["motor"],
    regions: ["Europe"],
    summary: "The EU Carbon Border Adjustment Mechanism (CBAM) expands to cover steel and aluminium components in July, raising the cost of imported vehicle parts by an estimated 6–9%.",
    commentary: {
      whatHappened: "CBAM Phase 2 extends the carbon border tax to manufactured goods including steel and aluminium, core inputs for vehicle body panels, chassis, and engine components.",
      whyItMatters: "Imported parts cost increases will flow through to repair severity for European motor books over the next 12–24 months as insurer-approved repair shop pricing updates.",
      impacts: [
        { lob: "Motor", type: "severity", direction: "up", detail: "European motor repair severity expected +3–5% additional pressure from CBAM on top of existing parts inflation. UK books insulated (GB outside EU CBAM)." }
      ],
      watchFor: "EC implementing regulations in July. Thatcham Research updates to repair cost benchmarks. Motor insurer rate filings in DE, FR, NL, IT.",
      action: "MONITOR"
    }
  },
  {
    id: 19,
    headline: "Swiss Re Estimates 2025 Global CAT Losses Already $127B Through May",
    source: "Swiss Re Institute",
    time: "5 days ago",
    priority: "MEDIUM",
    lobs: ["property"],
    regions: ["Global"],
    summary: "Swiss Re's sigma preliminary estimates place global insured CAT losses at $127 billion through end of May 2026, running 23% above prior year pace and on track to exceed $200B for the first time.",
    commentary: {
      whatHappened: "Swiss Re's sigma team released a preliminary H1 estimate. US convective storm losses ($68B), Australian flooding ($12B), and European windstorms ($18B) are primary drivers.",
      whyItMatters: "Full-year pace of $200B+ would be unprecedented. Reinsurance capacity pricing will respond in H2 treaty renewals. Primary market rate adequacy under pressure.",
      impacts: [
        { lob: "Property", type: "severity", direction: "up", detail: "CAT reinsurance cost increasing at 1 January 2026 renewals. Primary market may face ceding commission pressure or capacity reduction." }
      ],
      watchFor: "Munich Re and Swiss Re full H1 estimates in July. Q2 reinsurer earnings calls for capital position. Any large single-event loss that changes the trajectory.",
      action: "REVIEW"
    }
  },
  {
    id: 20,
    headline: "G7 Announces New Sanctions Package on Russia — Air and Sea Routes Affected",
    source: "G7 Secretariat",
    time: "6 days ago",
    priority: "HIGH",
    lobs: ["travel", "marine"],
    regions: ["Europe", "Global"],
    summary: "G7 nations agreed a new sanctions package targeting Russian aviation and shipping, extending Russian airspace closure and adding Baltic Sea war risk designations for Russian-flagged vessels.",
    commentary: {
      whatHappened: "The G7 coordinated package includes: extended Russian airspace closure for G7 carriers, new designations of 200 Russian vessels as subject to war risk premium, and Baltic port restrictions.",
      whyItMatters: "Russian airspace closure forces Arctic route alternatives for trans-Siberian flights, adding 3–4 hours and fuel cost. Baltic war risk premiums affect cargo and marine books.",
      impacts: [
        { lob: "Travel", type: "cost", direction: "up", detail: "Europe–Asia flight times increasing 3–4 hours on affected routes. Airline fuel cost pressure passed through to fares. Cancellation values rising on premium routes." },
        { lob: "Marine", type: "cost", direction: "up", detail: "Baltic Sea war risk premiums rising on Russian vessel designations. Cargo insurers reassessing Baltic accumulation models." }
      ],
      watchFor: "Russian counter-measures affecting shipping lanes. EU shipping sanction alignment. Baltic Dry Index as proxy for disruption level.",
      action: "REVIEW"
    }
  }
]

export const signalById = (id) => signals.find(s => s.id === id)

export const signalsByLob = (lob) => signals.filter(s => s.lobs.includes(lob))

export const signalsByPriority = (priority) => signals.filter(s => s.priority === priority)
