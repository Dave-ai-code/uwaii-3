/* ============ UWAII hi-fi — dummy data (Travel / US) ============ */

const MONTHS=['Jun','Jul','Aug','Sep','Oct','Nov','Dec','Jan','Feb','Mar','Apr','May'];

/* core series — indexed/realistic-ish, 12 months */
const SERIES={
  cancelFreq:   [4.1,4.6,5.2,4.4,3.9,3.6,4.8,5.1,4.7,4.3,4.5,5.0],   // claims / 1k policies
  tsa:          [101,108,112,99,92,95,118,104,97,100,106,103],        // throughput index
  jetfuel:      [88,90,92,95,93,91,96,98,97,99,103,111],              // index
  delayRate:    [21,24,27,22,18,17,29,23,20,22,24,26],                // % flights delayed
  severity:     [100,101,103,104,106,107,108,110,111,113,114,118],    // travel-medical severity index
  hurricane:    [5,18,46,62,58,30,8,4,3,4,9,22],                      // risk index (seasonal)
  exposure:     [100,103,107,109,106,104,108,112,110,109,107,104],    // written exposure / GWP index
  advisories:   [2,2,3,2,1,1,2,3,2,2,3,4],                            // # level-3 advisory changes
};

/* headline stat tiles */
const STATS=[
  {k:'Portfolio impact today',v:'Elevated',dir:'up',sub:'3 of 7 signals rising',big:true},
  {k:'Trip-cancellation frequency',v:'5.0',unit:'/1k',dir:'up',delta:'+6.4% MoM',ddir:'up'},
  {k:'Avg travel-medical severity',v:'$2,480',dir:'up',delta:'+4.1% MoM',ddir:'up'},
  {k:'Written exposure (GWP idx)',v:'104',dir:'down',delta:'−2.8% MoM',ddir:'down'},
];

/* "what changed today" cards */
const CHANGED=[
  {h:'Jet fuel +8% this week',tag:['up','trip-cost'],src:'Reuters',why:'Mid-East tension'},
  {h:'Gulf storm → Cat 2 watch for Florida',tag:['up','cancel freq'],src:'NOAA',why:'5-day track'},
  {h:'TSA volume −3% vs last year',tag:['down','exposure'],src:'TSA',why:'demand softening'},
  {h:'Major carrier trims Aug capacity 4%',tag:['up','disruption'],src:'BTS',why:'schedule cuts'},
];

/* chart grid on dashboard */
const GRID=[
  {title:'Trip-cancellation frequency',sub:'claims / 1k policies',key:'cancelFreq',cmp:'tsa',kind:'line',accent:'brand',delta:'+6.4%',ddir:'up',note:'Tracks demand with a ~2-week lag.'},
  {title:'Jet fuel & airfare',sub:'indexed',key:'jetfuel',kind:'area',accent:'up',delta:'+8.0%',ddir:'up',note:'Higher airfares → fewer but pricier trips.'},
  {title:'Flight delay rate',sub:'% US departures',key:'delayRate',kind:'bar',accent:'up',delta:'+2.0pt',ddir:'up',note:'Lifts trip-delay claim frequency.'},
  {title:'Travel demand (TSA)',sub:'throughput index',key:'tsa',kind:'line',accent:'down',delta:'−3.1%',ddir:'down',note:'Softening eases written exposure.'},
  {title:'Travel-medical severity',sub:'avg $ / overseas claim',key:'severity',kind:'area',accent:'up',delta:'+4.1%',ddir:'up',note:'Driven by medical inflation + FX.'},
  {title:'Hurricane risk index',sub:'Atlantic, season-to-date',key:'hurricane',kind:'bar',accent:'up',delta:'elevated',ddir:'up',note:'Seasonal cancellation spikes Jul–Oct.'},
];

/* signals tracked */
const SIGNALS=[
  {name:'Jet fuel / oil price',on:true},{name:'TSA throughput',on:true},{name:'Flight delay & cancel rate',on:true},
  {name:'Geopolitical risk & advisories',on:true},{name:'Hurricane / severe weather',on:true},{name:'Medical cost inflation + FX',on:true},
  {name:'Airline capacity & health',on:false},{name:'Consumer travel spend',on:false},{name:'Health / outbreak alerts',on:false},
];

/* news / insight feed */
const FEED=[
  {id:0,src:'Reuters',time:'2h',cat:'Geopolitics',impact:5,conf:'High',
   head:'Strait of Hormuz shipping disruption widens after fresh strikes',
   tags:[['up','trip-cost'],['up','cancel freq'],['down','demand']],
   sowhat:'Fuel-linked airfare rises dampen US outbound trips (exposure ↓) but raise per-trip cancellation costs. Heaviest on Gulf & MENA routes.',
   action:'Flag MENA-route policies; stress trip-cost severity +8–12%.',
   chain:['Hormuz strikes','Jet fuel +8%','Airfare rises','Trips ↓ · cancellations ↑','Book: freq ↑ / exposure ↓'],
   sig:{title:'Jet fuel & airfare index',key:'jetfuel',kind:'area',accent:'up'},
   met:{title:'Trip-cancellation frequency',key:'cancelFreq',kind:'line',accent:'brand'},
   sources:['Reuters','Bloomberg Energy','EIA']},
  {id:1,src:'NOAA',time:'4h',cat:'Weather',impact:5,conf:'High',
   head:'Tropical system strengthens off Gulf — Cat 2 watch for Florida in 5 days',
   tags:[['up','cancel freq'],['up','interruption']],
   sowhat:'Pre-landfall cancellation and interruption claims typically spike 3–5 days out across Florida departures and Caribbean destinations.',
   action:'Expect a Florida cancellation cluster; pre-stage claims capacity.',
   chain:['Gulf storm forms','Cat 2 watch, FL','Flights cancelled','Cancel/interrupt claims','Book: FL freq ▲▲'],
   sig:{title:'Hurricane risk index',key:'hurricane',kind:'bar',accent:'up'},
   met:{title:'Trip-cancellation frequency',key:'cancelFreq',kind:'line',accent:'brand'},
   sources:['NOAA NHC','NWS','FlightAware']},
  {id:2,src:'US State Dept',time:'6h',cat:'Advisories',impact:4,conf:'Med',
   head:'Travel advisory raised to Level 3 for two regions',
   tags:[['up','cancel freq']],
   sowhat:'Level-3 changes are a common covered-cancellation trigger — a direct frequency driver for affected destinations.',
   action:'Check wording exposure for "advisory" triggers across the book.',
   chain:['Security event','Advisory → Level 3','Covered trigger met','Claims filed','Book: freq ↑'],
   sig:{title:'Level-3 advisory changes',key:'advisories',kind:'bar',accent:'up'},
   met:{title:'Trip-cancellation frequency',key:'cancelFreq',kind:'line',accent:'brand'},
   sources:['US Dept. of State','Reuters']},
  {id:3,src:'BTS',time:'1d',cat:'Operations',impact:3,conf:'Med',
   head:'US on-time arrivals fall to 78% as carriers trim summer schedules',
   tags:[['up','delay claims'],['flat','severity']],
   sowhat:'Lower reliability lifts trip-delay claim frequency; severity stays stable as payouts are capped per policy.',
   action:'Monitor delay-claim run-rate against the priced assumption.',
   chain:['Capacity cuts','On-time → 78%','More long delays','Delay claims filed','Book: delay freq ↑'],
   sig:{title:'Flight delay rate',key:'delayRate',kind:'bar',accent:'up'},
   met:{title:'Delay-claim run-rate',key:'delayRate',kind:'line',accent:'brand'},
   sources:['US BTS','FlightAware']},
  {id:4,src:'IATA',time:'1d',cat:'Demand',impact:2,conf:'Med',
   head:'Summer bookings outlook softens 3% on traveller price sensitivity',
   tags:[['down','exposure'],['down','demand']],
   sowhat:'Fewer trips mean lower written exposure this quarter, partly offsetting the fuel-driven severity pressure above.',
   action:'Revisit the Q3 travel GWP growth assumption.',
   chain:['Prices rise','Bookings −3%','Fewer policies sold','Written exposure ↓','Book: GWP ↓'],
   sig:{title:'Travel demand (TSA)',key:'tsa',kind:'line',accent:'down'},
   met:{title:'Written exposure (GWP idx)',key:'exposure',kind:'area',accent:'down'},
   sources:['IATA','TSA']},
];

/* drivers summary */
const DRIVERS=[
  {name:'Geopolitics',state:'up',note:'Mid-East tension lifting fuel & advisories',key:'jetfuel'},
  {name:'Weather',state:'up',note:'Active Atlantic storm season opening',key:'hurricane'},
  {name:'Demand',state:'down',note:'TSA throughput softening on price',key:'tsa'},
];

Object.assign(window,{MONTHS,SERIES,STATS,CHANGED,GRID,SIGNALS,FEED,DRIVERS});
