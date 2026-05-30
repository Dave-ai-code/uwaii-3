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
  },

  // ── NEW ARTICLES (21–40) ──────────────────────────────────────────────────

  {
    id: 21,
    headline: "UK EV Mandate Accelerates Fleet Transition — Insurers Face Repair Cost Uncertainty",
    source: "Financial Times",
    time: "4 hours ago",
    priority: "MEDIUM",
    lobs: ["motor"],
    regions: ["Europe", "United Kingdom"],
    summary: "The UK's Zero Emission Vehicle mandate requires 80% of new car sales to be electric by 2030. Insurers report EV repair costs averaging 25–30% above equivalent ICE vehicles due to battery assessment complexity.",
    commentary: {
      whatHappened: "UK government confirmed ZEV mandate targets will not be relaxed despite industry lobbying. EV share of new car sales hit 23% in Q1 2026, accelerating fleet transition.",
      whyItMatters: "EVs have structurally higher repair costs — battery inspection after any impact is mandatory, and replacement batteries can cost £15,000–£30,000. As EV fleet share grows, average severity rises.",
      impacts: [
        { lob: "Motor", type: "severity", direction: "up", detail: "UK motor severity elevated +25–30% on EV claims vs ICE. As fleet composition shifts, portfolio average severity will rise. Rate adequacy requires EV-mix adjustment." },
        { lob: "Motor", type: "demand", direction: "watch", detail: "Some drivers reporting EV insurance premium sticker shock — potential adverse selection risk if high-risk drivers avoid EVs and stay in ICE fleet." }
      ],
      watchFor: "Thatcham Research EV repair time data. ABI EV claims cost benchmarking. Any government battery repair subsidy announcement.",
      action: "REVIEW"
    }
  },
  {
    id: 22,
    headline: "Severe Flooding Hits Bavaria and Baden-Württemberg — Insured Losses Estimated €3.8B",
    source: "Munich Re",
    time: "6 hours ago",
    priority: "HIGH",
    lobs: ["property", "motor"],
    regions: ["Europe", "Germany"],
    summary: "Three days of extreme rainfall caused catastrophic flooding across southern Germany. Munich Re's preliminary loss estimate stands at €3.8B insured, with total economic losses potentially exceeding €8B.",
    commentary: {
      whatHappened: "A slow-moving low pressure system brought 3x normal monthly rainfall in 72 hours to Bavaria and Baden-Württemberg. The Danube, Isar, and Inn rivers all exceeded 100-year flood levels.",
      whyItMatters: "This is the second major German flood event in 4 years (after Ahr Valley 2021). German property flood coverage penetration has risen but remains below 50% in affected areas, creating a protection gap debate.",
      impacts: [
        { lob: "Property", type: "frequency", direction: "up", detail: "German property books — particularly in Bavaria — facing material flood losses. Commercial property in Munich's business district most exposed. Reinstatement cost inflation adds 15% to reconstruction costs." },
        { lob: "Motor", type: "frequency", direction: "up", detail: "Vehicle flood write-offs significant. German motor books in affected postcodes will see frequency spike. Total loss ratio on affected vehicles expected above 85%." }
      ],
      watchFor: "GDV (German Insurance Association) official loss estimate. EU Solidarity Fund application. German government flood defense spending announcement.",
      action: "ACT"
    }
  },
  {
    id: 23,
    headline: "North Korea's Lazarus Group Targets South Korean and Japanese Financial Institutions",
    source: "Mandiant / Google TAG",
    time: "8 hours ago",
    priority: "HIGH",
    lobs: ["cyber"],
    regions: ["Asia Pacific"],
    summary: "Google's Threat Analysis Group and Mandiant jointly attributed a wave of attacks on South Korean banks and Japanese securities firms to North Korea's Lazarus Group. Three confirmed breaches, $340M in crypto stolen.",
    commentary: {
      whatHappened: "Lazarus Group used a sophisticated supply chain attack via a compromised Korean financial software vendor to gain access to 3 major financial institutions. $340M in cryptocurrency assets were stolen.",
      whyItMatters: "Nation-state attacks on financial services are growing in APAC. These attacks combine data exfiltration with financial theft, creating dual cyber and crime exposures. Korean and Japanese cyber books most exposed.",
      impacts: [
        { lob: "Cyber", type: "severity", direction: "up", detail: "Financial theft component adds a new loss dimension beyond traditional ransomware. APAC financial services cyber accounts need nation-state peril review." },
        { lob: "Cyber", type: "frequency", direction: "up", detail: "Supply chain attack vector means breach notifications expected at downstream customers of compromised software vendor." }
      ],
      watchFor: "APAC financial regulator (MAS, FSA) guidance on incident reporting. Additional vendor notifications. Insurance coverage disputes over nation-state attribution clauses.",
      action: "REVIEW"
    }
  },
  {
    id: 24,
    headline: "Bureau of Meteorology Upgrades La Niña Watch to Advisory — Queensland Flood Risk Immediate",
    source: "Bureau of Meteorology",
    time: "10 hours ago",
    priority: "HIGH",
    lobs: ["property", "crop"],
    regions: ["Asia Pacific", "Australia"],
    summary: "BoM upgraded its ENSO status from Watch to Advisory, signalling a 70% probability of La Niña conditions. Queensland catchments already near capacity after above-average autumn rainfall.",
    commentary: {
      whatHappened: "Pacific SSTs have crossed the La Niña threshold. Upstream catchments in Queensland are at 85–95% capacity. The Bureau expects active monsoon conditions from November onwards.",
      whyItMatters: "The 2021–22 La Niña caused AUD $6.4B in insured losses across two seasons. With catchments already near capacity, even moderate rainfall events could cause significant flooding.",
      impacts: [
        { lob: "Property", type: "frequency", direction: "up", detail: "Queensland residential and commercial flood exposure elevated. Brisbane, Rockhampton, and Townsville are key accumulation postcodes. ICA flood model scenarios need La Niña adjustment." },
        { lob: "Crop", type: "frequency", direction: "up", detail: "Queensland sugar cane, cotton, and grain crops exposed. Excess rainfall during harvest causes quality deterioration triggering revenue protection policies." }
      ],
      watchFor: "BoM upgrading to full La Niña Declaration. Fitzroy River basin soil moisture weekly reports. Burdekin dam spillway operations.",
      action: "ACT"
    }
  },
  {
    id: 25,
    headline: "Houthi Drone Swarm Strikes Three Tankers in Gulf of Aden — Largest Single Attack Yet",
    source: "Lloyd's List",
    time: "1 hour ago",
    priority: "HIGH",
    lobs: ["marine", "motor", "travel"],
    regions: ["Middle East"],
    summary: "A coordinated Houthi drone attack struck three VLCC tankers simultaneously in the Gulf of Aden, the largest single maritime attack since the conflict began. One vessel took on water; crew evacuated.",
    commentary: {
      whatHappened: "Three Very Large Crude Carriers were struck by drone swarms in a coordinated attack approximately 60 nautical miles south of Aden. One vessel suffered hull breach; crew of 28 evacuated by Royal Navy vessel.",
      whyItMatters: "This marks a significant escalation in Houthi attack capability — simultaneous multi-vessel attack. War risk premiums will spike. VLCC availability and oil supply chain disruption expected.",
      impacts: [
        { lob: "Marine", type: "severity", direction: "up", detail: "War risk premiums on Gulf of Aden transits expected to increase 40–60bps immediately. VLCC hull values under review. Cargo schedule B war exclusion triggers being assessed." },
        { lob: "Motor", type: "cost", direction: "up", detail: "VLCC strikes will tighten crude supply, adding $4–7/barrel to oil within 48–72 hours. Motor fuel price increase to follow in 2–3 weeks." },
        { lob: "Travel", type: "cost", direction: "up", detail: "Jet fuel premium widening as crude rises. Middle East route flight diversions increasing fuel burn and ticket costs." }
      ],
      watchFor: "US/UK naval response. Iranian government statement. Oil price move above $90/barrel. Lloyd's JWC area extension review.",
      action: "ACT"
    }
  },
  {
    id: 26,
    headline: "USDA WASDE Cuts Corn Yield Estimate 9% — Largest Downward Revision Since 2012 Drought",
    source: "USDA",
    time: "2 hours ago",
    priority: "HIGH",
    lobs: ["crop"],
    regions: ["United States", "Americas"],
    summary: "USDA's monthly World Agricultural Supply and Demand Estimates report cut US corn yield projections from 181 to 165 bushels/acre, the largest single-month downward revision in 13 years. Corn prices jumped 8% on the release.",
    commentary: {
      whatHappened: "Persistent drought through June and July damaged corn during the critical pollination window. USDA's field surveys found pollination failure rates of 18–24% across Iowa and Illinois — the two largest corn-producing states.",
      whyItMatters: "A 9% yield reduction on the full US corn crop represents approximately 1.4 billion bushels of production loss. At current prices, insured crop revenue losses are estimated at $12–16B industry-wide.",
      impacts: [
        { lob: "Crop", type: "severity", direction: "up", detail: "Multi-peril crop insurance (MPCI) indemnity ratio likely to exceed 1.4 in affected counties — worst since 2012. Q3 loss activity will be significant. Reserve adequacy needs review." },
        { lob: "Crop", type: "cost", direction: "up", detail: "Corn at $6.20/bu (up 8% today) raises insured values for revenue protection policies. Commodity price inflation amplifies indemnity amounts." }
      ],
      watchFor: "August WASDE for confirmation or further revision. Weekly crop condition ratings. Weather forecasts for remaining growing season — late-planted soy is next at risk.",
      action: "ACT"
    }
  },
  {
    id: 27,
    headline: "NHS England Waiting List Reaches Record 8.1 Million — Private Medical Demand Surges",
    source: "NHS England / The Guardian",
    time: "1 day ago",
    priority: "MEDIUM",
    lobs: ["health"],
    regions: ["Europe", "United Kingdom"],
    summary: "NHS England's elective waiting list reached 8.1 million patients in April 2026, driving a 34% year-on-year increase in private medical insurance (PMI) claims as patients seek faster treatment.",
    commentary: {
      whatHappened: "NHS performance targets on elective waiting times are being missed by the widest margin since records began. The average wait for elective surgery is now 27 weeks. PMI providers report record new business enquiries.",
      whyItMatters: "NHS pressure directly drives UK PMI utilisation. When NHS waits are long, insured patients use their PMI faster and more frequently. UK health/life books face elevated claims frequency.",
      impacts: [
        { lob: "Health", type: "frequency", direction: "up", detail: "UK PMI claim frequency 34% above prior year. Orthopaedic, ophthalmology, and cardiology procedures most in demand. Mental health waiting lists also driving increased PMI utilisation." }
      ],
      watchFor: "NHS quarterly performance data. BUPA, AXA Health, Vitality claims data leakage. UK health insurer rate filing changes.",
      action: "REVIEW"
    }
  },
  {
    id: 28,
    headline: "EU NIS2 Directive Now Enforceable — 160,000 Companies Face Mandatory Cyber Incident Reporting",
    source: "ENISA",
    time: "1 day ago",
    priority: "MEDIUM",
    lobs: ["cyber"],
    regions: ["Europe"],
    summary: "The EU's NIS2 Directive became enforceable across all member states. It expands mandatory cybersecurity requirements and incident reporting to 160,000 entities across 18 critical sectors, with fines up to €10M or 2% of global revenue.",
    commentary: {
      whatHappened: "EU member states completed national transposition of NIS2. Entities in sectors including energy, transport, healthcare, and digital infrastructure must now meet baseline security controls and report significant incidents within 24 hours.",
      whyItMatters: "NIS2 dramatically widens the pool of entities with mandatory cyber requirements in Europe. This is both a frequency driver (more incidents must be reported) and a demand driver (more companies need cyber coverage).",
      impacts: [
        { lob: "Cyber", type: "frequency", direction: "up", detail: "Mandatory reporting requirements will surface previously unreported incidents in European portfolios. Expect notification frequency to increase 40–60% in affected sectors." },
        { lob: "Cyber", type: "demand", direction: "up", detail: "160,000 newly in-scope entities represent significant new demand for cyber insurance in Europe. Mid-market segment particularly underinsured." }
      ],
      watchFor: "National regulator (BSI in Germany, ANSSI in France, ICO in UK) enforcement actions. First major NIS2 fine as deterrent signal. Broker submissions from newly in-scope entities.",
      action: "MONITOR"
    }
  },
  {
    id: 29,
    headline: "Japan Noto Peninsula Struck by M6.8 Aftershock — Second Major Event This Year",
    source: "Japan Meteorological Agency",
    time: "2 days ago",
    priority: "MEDIUM",
    lobs: ["property"],
    regions: ["Asia Pacific", "Japan"],
    summary: "A M6.8 earthquake struck the Noto Peninsula in Japan, the same region hit by a M7.6 event in January 2024. Structural engineers warn cumulative damage makes buildings highly vulnerable to further aftershocks.",
    commentary: {
      whatHappened: "The earthquake struck at 14km depth — shallow enough to cause significant surface damage. The Noto Peninsula region has not fully recovered from the January 2024 M7.6 event. Buildings already damaged are at heightened collapse risk.",
      whyItMatters: "Cumulative earthquake damage significantly elevates loss severity versus a single event — already-weakened structures fail at lower ground motion intensities. Japanese property books and earthquake CAT models need re-evaluation for this region.",
      impacts: [
        { lob: "Property", type: "severity", direction: "up", detail: "Cumulative damage elevation means total losses on Noto Peninsula may significantly exceed single-event AIR/RMS model outputs. Re-run PML for Chubu region." }
      ],
      watchFor: "JMA aftershock probability maps. NHK damage reports. Japanese government reconstruction status. Any change in seismic zone classification for insurance rating.",
      action: "REVIEW"
    }
  },
  {
    id: 30,
    headline: "Singapore MAS Tightens Cyber Insurance Underwriting Guidelines for Financial Institutions",
    source: "Monetary Authority of Singapore",
    time: "2 days ago",
    priority: "MEDIUM",
    lobs: ["cyber"],
    regions: ["Asia Pacific", "Singapore"],
    summary: "The MAS issued revised guidelines requiring Singapore-regulated financial institutions to demonstrate minimum cybersecurity controls before cyber insurance will be recognised as a valid risk mitigation tool under capital rules.",
    commentary: {
      whatHappened: "MAS Notice MAS Notice 644 amendment requires banks and insurers to pass a cybersecurity control framework assessment before cyber insurance can be counted as capital mitigation. Effective from Q4 2026.",
      whyItMatters: "This creates both a quality filter on cyber insureds (only those with strong controls can qualify) and a significant demand driver — institutions need cyber coverage to meet capital requirements.",
      impacts: [
        { lob: "Cyber", type: "demand", direction: "up", detail: "Singapore financial institution cyber demand will grow as capital rule creates compliance necessity. Premium quality of insured base also improves." },
        { lob: "Cyber", type: "frequency", direction: "down", detail: "Mandatory control improvements as a condition of coverage should reduce frequency for Singapore financial sector portfolio over 12–18 months." }
      ],
      watchFor: "MAS enforcement timeline. APRA (Australia) and HKMA (Hong Kong) analogous guidance — Singapore often leads regional regulatory direction.",
      action: "MONITOR"
    }
  },
  {
    id: 31,
    headline: "Saudi Arabia Fuel Subsidy Reform — Petrol Prices Rise 40% as Government Cuts Support",
    source: "Arab News / Reuters",
    time: "3 days ago",
    priority: "MEDIUM",
    lobs: ["motor"],
    regions: ["Middle East"],
    summary: "Saudi Arabia's government implemented the second phase of its fuel subsidy reform, raising petrol prices from SAR 0.90 to SAR 1.26/litre. This is the largest single increase since the 2016 reform.",
    commentary: {
      whatHappened: "Saudi Arabia raised domestic fuel prices as part of fiscal consolidation under Vision 2030. The 40% increase brings Saudi prices closer to market rates, though still well below European levels.",
      whyItMatters: "Even at SAR 1.26/litre, Saudi fuel is very cheap by global standards. However, the step-change in price may cause short-term demand elasticity effects — fewer discretionary vehicle journeys — with a temporary frequency benefit.",
      impacts: [
        { lob: "Motor", type: "frequency", direction: "down", detail: "Short-term: GCC motor frequency may see 2–4% reduction in discretionary miles driven as price shock registers. Effect likely temporary (3–6 months) as consumers adjust." }
      ],
      watchFor: "Monthly KSA vehicle accident data from Ministry of Interior. Any political pressure to reverse the price increase. UAE and Kuwait following with their own subsidy reforms.",
      action: "MONITOR"
    }
  },
  {
    id: 32,
    headline: "Dubai Flash Flooding — First Major Urban Flood in UAE in a Decade",
    source: "Gulf News / Reuters",
    time: "3 days ago",
    priority: "HIGH",
    lobs: ["property", "motor"],
    regions: ["Middle East"],
    summary: "Unprecedented rainfall of 254mm in 24 hours — equivalent to 2 years of average rainfall — caused catastrophic flooding across Dubai and Sharjah. Insurance losses estimated at AED 2–4B, though UAE property flood coverage penetration is below 30%.",
    commentary: {
      whatHappened: "A slow-moving Mediterranean storm system produced exceptional rainfall over the UAE. Dubai International Airport was shut for 48 hours. Thousands of vehicles were written off. Basement apartment and commercial unit flooding was widespread.",
      whyItMatters: "UAE property flood coverage is low — most policies exclude flooding. This event will drive demand for flood endorsements across GCC property portfolios and may trigger regulatory review of mandatory flood coverage.",
      impacts: [
        { lob: "Property", type: "frequency", direction: "up", detail: "UAE commercial and residential property losses are significant but coverage penetration limits insured losses. Demand for flood endorsements will increase substantially post-event." },
        { lob: "Motor", type: "frequency", direction: "up", detail: "Vehicle flood write-offs across Dubai, Sharjah, and Al Ain are substantial. Comprehensive motor policies will see elevated total loss claims. Parts availability already stressed." }
      ],
      watchFor: "Dubai government infrastructure investment in drainage. Insurance regulatory response on mandatory flood coverage. Reinsurance treaty aggregation impact for Gulf CAT writers.",
      action: "REVIEW"
    }
  },
  {
    id: 33,
    headline: "UnitedHealth Change Healthcare Cyberattack — 40 Million Patient Records Exposed, Claims Processing Halted",
    source: "Wall Street Journal",
    time: "4 days ago",
    priority: "HIGH",
    lobs: ["cyber", "health"],
    regions: ["United States"],
    summary: "The Change Healthcare cyberattack (Blackcat/ALPHV ransomware) halted pharmacy and medical claims processing for 10+ days, affecting 40 million patients and costing UnitedHealth Group an estimated $872M in Q1 alone.",
    commentary: {
      whatHappened: "BlackCat ransomware encrypted Change Healthcare's claims processing systems — a subsidiary that handles ~40% of US healthcare transactions. The outage lasted 10+ days and the company ultimately paid a $22M ransom.",
      whyItMatters: "This is the largest healthcare cyberattack in US history by financial impact. It demonstrates that healthcare IT infrastructure represents systemic cyber risk — a single attack can disrupt the entire US healthcare payment ecosystem.",
      impacts: [
        { lob: "Cyber", type: "severity", direction: "up", detail: "Business interruption component of this claim dwarfs ransomware payment — systemic infrastructure claims are the new severity risk. Review aggregation models for healthcare IT dependencies." },
        { lob: "Health", type: "cost", direction: "up", detail: "Claims processing delays caused cash flow disruption for 70,000+ healthcare providers. Some smaller practices faced insolvency. Health insurers incurred manual processing costs." }
      ],
      watchFor: "HHS regulatory response. Congressional hearings on healthcare cybersecurity. Industry-wide healthcare IT dependency mapping. Second-order claims from providers who suffered losses.",
      action: "ACT"
    }
  },
  {
    id: 34,
    headline: "OSHA Launches Investigation Into Amazon Warehouse Injury Rate — 2x Industry Average",
    source: "ProPublica / OSHA",
    time: "4 days ago",
    priority: "MEDIUM",
    lobs: ["workerscomp"],
    regions: ["United States"],
    summary: "OSHA opened formal investigations into 14 Amazon fulfillment centres after a ProPublica analysis found Amazon's recordable injury rate is double the warehousing industry average, with musculoskeletal injuries comprising 68% of claims.",
    commentary: {
      whatHappened: "Amazon's 2025 injury data showed a recordable rate of 5.4 per 100 workers versus industry average of 2.7. OSHA investigations triggered at 14 highest-rate facilities across 8 states.",
      whyItMatters: "Amazon is the largest single employer in US warehousing. OSHA findings could result in large citations, operational changes (slowing productivity quotas), and are a leading indicator of broader warehousing WC frequency trends.",
      impacts: [
        { lob: "Workers Comp", type: "frequency", direction: "up", detail: "Warehousing/logistics WC class showing elevated frequency. Amazon books (if written) require loss pick review. Broader e-commerce fulfilment class warrants re-rating analysis." }
      ],
      watchFor: "OSHA citation amounts. Amazon operational changes to rate/quota systems. Any OSHA rulemaking on ergonomics in warehouse settings (last attempted 2000).",
      action: "REVIEW"
    }
  },
  {
    id: 35,
    headline: "Australia EV Fleet Growing 60% YoY — Repair Shops Report Battery Assessment Bottleneck",
    source: "Insurance Council of Australia",
    time: "5 days ago",
    priority: "LOW",
    lobs: ["motor"],
    regions: ["Asia Pacific", "Australia"],
    summary: "EV sales in Australia hit 18% of new car sales in Q1 2026, with the fleet growing 60% year-on-year. The Insurance Council of Australia warns only 340 of 3,800 smash repairers are EV-certified.",
    commentary: {
      whatHappened: "Australia's EV adoption is accelerating following government incentives and Tesla Model 3/Y dominance. However, EV repair infrastructure has not kept pace — only 9% of repairers are certified for EV high-voltage systems.",
      whyItMatters: "Repair bottlenecks lead to extended hire car periods, longer claim cycles, and higher total costs. Battery replacement decisions are being made by non-EV-certified repairers, creating additional liability exposure.",
      impacts: [
        { lob: "Motor", type: "severity", direction: "up", detail: "Australian EV motor claims showing 22% longer average repair cycle. Hire car component of claims is growing. As EV fleet share rises, portfolio severity will increase structurally." }
      ],
      watchFor: "ICA EV claims benchmarking data. Government investment in EV repair training. Tesla direct repair program expansion. Any regulatory action on EV battery disposal standards.",
      action: "MONITOR"
    }
  },
  {
    id: 36,
    headline: "WHO Issues Global Alert for Novel H5N1 Variant — Limited Human Transmission Detected",
    source: "World Health Organisation",
    time: "5 days ago",
    priority: "HIGH",
    lobs: ["travel", "health"],
    regions: ["Global", "Asia Pacific"],
    summary: "WHO issued a global alert after confirming limited human-to-human transmission of a novel H5N1 influenza variant in Vietnam and Indonesia. Three clusters of 4–6 cases have been identified.",
    commentary: {
      whatHappened: "A novel H5N1 variant with modified receptor binding has been detected in 3 separate clusters in Vietnam and Indonesia. WHO's emergency committee assessed the situation and recommended enhanced surveillance and border screening.",
      whyItMatters: "H5N1 has historically had a 60% case fatality rate when it infects humans. Any sustained human transmission would trigger pandemic-level travel disruptions. This is a tail risk event but the watch period is critical.",
      impacts: [
        { lob: "Travel", type: "frequency", direction: "watch", detail: "If WHO raises alert to Phase 3 or higher, trip cancellation claims in APAC will spike significantly. Review pandemic exclusion language in travel products." },
        { lob: "Health", type: "frequency", direction: "watch", detail: "Mortality and severe illness risk if pandemic develops. Life and health books with APAC concentration most exposed. Review pandemic reinsurance treaty coverage." }
      ],
      watchFor: "WHO Emergency Committee Phase declarations. Cluster sizes growing beyond 6 cases. Any evidence of sustained community transmission outside known clusters.",
      action: "REVIEW"
    }
  },
  {
    id: 37,
    headline: "East Coast Port Strike Averted — ILA and USMX Sign 3-Year Agreement",
    source: "Journal of Commerce",
    time: "6 days ago",
    priority: "MEDIUM",
    lobs: ["marine"],
    regions: ["United States", "Americas"],
    summary: "The International Longshoremen's Association and US Maritime Exchange signed a 3-year master contract, averting a strike that would have shut 36 US East and Gulf Coast ports. The deal includes 28% wage increases over 3 years.",
    commentary: {
      whatHappened: "Following 11th-hour negotiations, ILA and USMX reached agreement on wages and automation restrictions. The tentative agreement averts a strike that would have halted ~57% of US containerised imports.",
      whyItMatters: "Port disruption risk is removed for 3 years. Container rates on US East Coast routes are expected to decline 8–12% over the next 60 days as shippers unwind pre-strike inventory builds.",
      impacts: [
        { lob: "Marine", type: "frequency", direction: "down", detail: "US East Coast port risk removed. Container rate normalisation expected. Cargo accumulation at ports during pre-strike build will clear over 4–6 weeks." }
      ],
      watchFor: "Ratification vote. West Coast ILWU contract (2027 expiry — next major port labour risk). Panama Canal water levels (separate disruption risk for Q3–Q4).",
      action: "NONE"
    }
  },
  {
    id: 38,
    headline: "India Monsoon Arrives 3 Weeks Late — Kharif Crop Planting 40% Below Normal Pace",
    source: "India Meteorological Department",
    time: "6 days ago",
    priority: "HIGH",
    lobs: ["crop"],
    regions: ["Asia Pacific", "India"],
    summary: "India's southwest monsoon arrived in Kerala 3 weeks behind schedule and has not progressed normally. Kharif crop planting (rice, soy, cotton) is 40% below normal seasonal pace across Maharashtra, Karnataka, and Madhya Pradesh.",
    commentary: {
      whatHappened: "A blocking high pressure system has stalled monsoon progression northward. As of late June, the monsoon has barely crossed southern India. Farmers in central and northern states have been unable to plant kharif crops.",
      whyItMatters: "India is the world's second largest rice producer and the top producer of cotton. A failed kharif season would have global commodity price implications. Crop insurance policies written on Indian agriculture are directly exposed.",
      impacts: [
        { lob: "Crop", type: "frequency", direction: "up", detail: "Indian kharif crop books — rice, cotton, soy — facing material indemnity risk if monsoon deficit exceeds 15% for the season. Early-planted crops can be replanted; late arrivals affect yield by 25–40%." }
      ],
      watchFor: "IMD weekly monsoon progress updates. July cumulative rainfall vs normal. Government crop insurance scheme (PMFBY) portfolio exposure. Global rice and cotton price response.",
      action: "REVIEW"
    }
  },
  {
    id: 39,
    headline: "Germany Introduces Mandatory Flood Insurance — European First",
    source: "Handelsblatt / Reuters",
    time: "7 days ago",
    priority: "HIGH",
    lobs: ["property"],
    regions: ["Europe", "Germany"],
    summary: "The German Bundestag passed legislation making flood insurance mandatory for all homeowners by 2027. Germany becomes the first major European economy to mandate natural hazard coverage after years of post-flood political pressure.",
    commentary: {
      whatHappened: "Following the Ahr Valley floods (2021) and Bavaria floods (2025), the German government passed legislation requiring all homeowners to include Elementarschadenversicherung (natural hazard cover) in property policies by January 2027.",
      whyItMatters: "Germany's mandatory flood insurance is a significant market change. Penetration rises from ~45% to near 100%, dramatically increasing premium volume but also risk accumulation on reinsurance books.",
      impacts: [
        { lob: "Property", type: "demand", direction: "up", detail: "German property premium volume expected to increase 18–22% as mandatory coverage closes the penetration gap. Reinsurance treaties for German property will need renegotiation." },
        { lob: "Property", type: "severity", direction: "watch", detail: "Higher penetration means more claims per flood event, increasing aggregate industry losses. CAT model expected loss estimates for Germany need updating." }
      ],
      watchFor: "Implementation regulations and transition period details. GDV industry premium projections. Treaty reinsurance pricing response at Jan 2027 renewals.",
      action: "REVIEW"
    }
  },
  {
    id: 40,
    headline: "Panama Canal Extends Draft Restrictions — Water Levels at 40-Year Low for June",
    source: "Panama Canal Authority",
    time: "7 days ago",
    priority: "MEDIUM",
    lobs: ["marine"],
    regions: ["Americas"],
    summary: "The Panama Canal Authority extended vessel draft restrictions through Q3, limiting Neopanamax vessels to 44 feet versus the normal 50 feet. Gatun Lake water levels are at their lowest June level since 1983.",
    commentary: {
      whatHappened: "El Niño-related drought has driven Gatun Lake water levels to 40-year lows. The Canal Authority has reduced daily vessel transits from 36 to 24 and imposed draft restrictions that reduce cargo capacity per vessel by 20–25%.",
      whyItMatters: "The Panama Canal handles ~5% of global trade and ~40% of US container imports. Draft restrictions mean shippers must either carry less cargo or divert via Suez — adding 10–14 days and significant fuel cost.",
      impacts: [
        { lob: "Marine", type: "cost", direction: "up", detail: "Cargo insured values per vessel declining due to light loading requirements. Container rates on US West Coast–East Coast routes rising as capacity tightens. Spoilage exposure on perishable cargo elevated on rerouted vessels." },
        { lob: "Marine", type: "frequency", direction: "up", detail: "Vessel congestion at Panama anchorage — waiting time up to 12 days — increases anchor drag, collision, and grounding exposure at approaches." }
      ],
      watchFor: "Gatun Lake water level weekly data. ACP announcement extending restrictions beyond Q3. Any change in El Niño forecast affecting rainfall in Panama watershed.",
      action: "MONITOR"
    }
  }
]

export const signalById = (id) => signals.find(s => s.id === id)

export const signalsByLob = (lob) => signals.filter(s => s.lobs.includes(lob))

export const signalsByPriority = (priority) => signals.filter(s => s.priority === priority)
