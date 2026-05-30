/* ============ UWAII hi-fi — Landing (Direction B) ============ */

function LiveInsightCard(){
  return <div className="lp-hero-card rise d2" style={{padding:20,width:'100%'}}>
    <div className="row ac jb" style={{marginBottom:12}}>
      <span className="row ac g8">
        <span style={{width:7,height:7,borderRadius:'50%',background:'var(--up)',boxShadow:'0 0 0 3px var(--up-bg)'}}/>
        <span className="eyebrow" style={{color:'var(--ink-2)'}}>Live insight</span>
      </span>
      <span className="src">Travel · US <span className="dot"/> 2h ago</span>
    </div>
    <h3 className="serif" style={{fontSize:23,lineHeight:1.18,fontWeight:500,marginBottom:12}}>
      Middle-East tension pushes jet&nbsp;fuel <span style={{color:'var(--up)'}}>+8%</span> this week
    </h3>
    <div className="row wrap g6" style={{marginBottom:14}}>
      <Tag dir="up">trip-cost</Tag><Tag dir="up">cancel freq</Tag><Tag dir="down">travel demand</Tag>
    </div>
    <div className="card flat q" style={{padding:'8px 12px',marginBottom:14}}>
      <Spark dataKey="jetfuel" accent="up" height={40}/>
    </div>
    <Insight>Higher airfares dampen US outbound trips, lowering exposure, but raise per-trip cancellation costs. Watch advisory levels on affected routes.</Insight>
    <div className="row ac jb" style={{marginTop:14}}>
      <Confidence level="High"/>
      <Source items={['Reuters','EIA','State Dept']}/>
    </div>
  </div>;
}

function MiniDashboard(){
  return <div className="card" style={{overflow:'hidden',boxShadow:'var(--sh-3)'}}>
    <div className="row ac jb" style={{padding:'13px 18px',borderBottom:'1px solid var(--line)',background:'var(--surface-2)'}}>
      <span className="row ac g10"><Logo size={15}/><span className="muted" style={{fontSize:13}}>/ Travel · US</span></span>
      <span className="chip" style={{fontSize:12}}><span style={{width:6,height:6,borderRadius:'50%',background:'var(--up)'}}/>Impact: Elevated</span>
    </div>
    <div className="row" style={{gap:0}}>
      <div className="col grow" style={{padding:18,gap:14,minWidth:0}}>
        <div className="row g12" style={{flexWrap:'wrap'}}>
          {STATS.slice(1,4).map(s=><div key={s.k} className="grow" style={{minWidth:120}}><Stat {...s}/></div>)}
        </div>
        <div className="card flat" style={{padding:16}}>
          <div className="row ac jb" style={{marginBottom:6}}>
            <span style={{fontWeight:600}}>Trip-cancellation frequency</span>
            <Tag dir="up">+6.4%</Tag>
          </div>
          <Chart dataKey="cancelFreq" cmp="tsa" kind="line" accent="brand" height={150}/>
        </div>
      </div>
      <div className="col" style={{width:248,borderLeft:'1px solid var(--line)',padding:16,gap:10,background:'var(--surface-2)'}}>
        <span className="eyebrow">Live news</span>
        {FEED.slice(0,2).map(n=><div key={n.id} className="card flat" style={{padding:12}}>
          <span className="src" style={{fontSize:11}}>{n.src} · {n.time}</span>
          <p style={{fontSize:13.5,fontWeight:500,margin:'4px 0 8px',lineHeight:1.25}}>{n.head}</p>
          <div className="row g6">{n.tags.slice(0,2).map((t,i)=><Tag key={i} dir={t[0]}>{t[1]}</Tag>)}</div>
        </div>)}
      </div>
    </div>
  </div>;
}

function Landing({go}){
  return <div style={{background:'var(--bg)'}}>
    {/* nav */}
    <div className="lp-nav">
      <Logo/>
      <span className="grow"/>
      <div className="row ac g24" style={{marginRight:8}}>
        <span className="muted2" style={{fontWeight:500,fontSize:14,cursor:'pointer'}}>Product</span>
        <span className="muted2" style={{fontWeight:500,fontSize:14,cursor:'pointer'}}>Signals</span>
        <span className="muted2" style={{fontWeight:500,fontSize:14,cursor:'pointer'}}>About</span>
      </div>
      <button className="btn btn-ghost" onClick={()=>go('app')}>Sign in</button>
      <button className="btn btn-primary" onClick={()=>go('build')}>Get started</button>
    </div>

    {/* hero */}
    <div className="dotgrid" style={{borderTop:'1px solid var(--line)',borderBottom:'1px solid var(--line)'}}>
      <div className="lp-section" style={{display:'grid',gridTemplateColumns:'1.05fr .95fr',gap:54,alignItems:'center',padding:'62px 32px'}}>
        <div className="rise d1">
          <span className="kicker"><span style={{fontFamily:'var(--mono)'}}>UW</span> · Underwriting AI Intelligence</span>
          <h1 className="serif" style={{fontSize:58,lineHeight:1.03,fontWeight:500,letterSpacing:'-.02em',margin:'20px 0 18px'}}>
            Most insurers look <span style={{fontStyle:'italic',color:'var(--ink-3)'}}>inward.</span><br/>
            The real risk is <span style={{color:'var(--brand)'}}>outside.</span>
          </h1>
          <p style={{fontSize:18,lineHeight:1.55,color:'var(--ink-2)',maxWidth:460,marginBottom:26}}>
            UWAII connects your portfolio to live public data and world news, then tells you — in plain English — how today's events move frequency, severity and exposure on your book.
          </p>
          <div className="row ac g14" style={{gap:14}}>
            <button className="btn btn-primary btn-lg" onClick={()=>go('build')}>Build a dashboard <Icon name="arrow" size={17}/></button>
            <span className="muted" style={{fontSize:14}}>No internal data needed to start</span>
          </div>
        </div>
        <LiveInsightCard/>
      </div>
    </div>

    {/* how it works */}
    <div className="lp-section" style={{padding:'56px 32px 20px'}}>
      <div className="col ac" style={{textAlign:'center',gap:8,marginBottom:36}}>
        <span className="eyebrow">How it works</span>
        <h2 className="serif" style={{fontSize:34,fontWeight:500}}>From the outside world to your book — daily</h2>
      </div>
      <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:20}}>
        {[['01','Pick your book','Choose a line of business and geography. Start with Travel · US in under a minute.','sliders'],
          ['02','We wire up the world','Public data feeds and live news, scraped and ranked by AI for your exposure — not generic headlines.','globe'],
          ['03','Read it every morning','Trends, a "what changed today" summary, and a plain-English "so what for your book" on every event.','news']].map(s=>
          <div key={s[0]} className="value-card">
            <div className="row ac jb" style={{marginBottom:16}}>
              <span className="mono" style={{fontSize:13,color:'var(--brand)',letterSpacing:'.1em'}}>{s[0]}</span>
              <span style={{width:38,height:38,borderRadius:10,background:'var(--brand-50)',color:'var(--brand)',display:'flex',alignItems:'center',justifyContent:'center'}}><Icon name={s[3]} size={19}/></span>
            </div>
            <h3 style={{fontSize:19,marginBottom:8}}>{s[1]}</h3>
            <p className="muted2" style={{fontSize:15,lineHeight:1.5}}>{s[2]}</p>
          </div>)}
      </div>
    </div>

    {/* product preview */}
    <div className="lp-section" style={{padding:'40px 32px 56px'}}>
      <div className="row ac jb wrap g12" style={{marginBottom:18}}>
        <div className="col g4">
          <span className="eyebrow">The product</span>
          <h2 className="serif" style={{fontSize:28,fontWeight:500}}>One screen. Your whole external picture.</h2>
        </div>
        <button className="btn" onClick={()=>go('app')}>Open live demo <Icon name="ext" size={15}/></button>
      </div>
      <MiniDashboard/>
    </div>

    {/* belief strip */}
    <div style={{background:'var(--ink)',color:'#fff'}}>
      <div className="lp-section" style={{padding:'60px 32px',textAlign:'center'}}>
        <h2 className="serif" style={{fontSize:40,fontWeight:400,lineHeight:1.18,maxWidth:840,margin:'0 auto',letterSpacing:'-.01em'}}>
          “Internal data tells you what <span style={{color:'#9aa6c9'}}>already happened.</span><br/>UWAII tells you <span style={{fontStyle:'italic'}}>what's coming.</span>”
        </h2>
      </div>
    </div>

    {/* roles + LOB */}
    <div className="lp-section" style={{padding:'48px 32px',display:'grid',gridTemplateColumns:'1fr 1fr',gap:40}}>
      <div>
        <span className="eyebrow">Built for the whole desk</span>
        <div className="row wrap g8" style={{marginTop:14}}>
          {['Underwriters','Actuaries','Portfolio managers','General managers'].map(r=><span key={r} className="chip">{r}</span>)}
        </div>
      </div>
      <div>
        <span className="eyebrow">Across every line</span>
        <div className="row wrap g8" style={{marginTop:14}}>
          {['Travel','Motor','Cyber','Property','Crop'].map((l,i)=><span key={l} className={'chip'+(i===0?' brand':' dim')}>{l}{i===0?' · live':''}</span>)}
        </div>
      </div>
    </div>

    {/* final CTA */}
    <div style={{borderTop:'1px solid var(--line)'}}>
      <div className="lp-section" style={{padding:'56px 32px',textAlign:'center'}}>
        <h2 className="serif" style={{fontSize:36,fontWeight:500,marginBottom:10}}>Start with one book. See it in two minutes.</h2>
        <p className="muted2" style={{fontSize:16,marginBottom:24}}>No integration, no internal data. Just pick a line and a country.</p>
        <button className="btn btn-primary btn-lg" onClick={()=>go('build')}>Build a dashboard <Icon name="arrow" size={17}/></button>
      </div>
    </div>

    {/* footer */}
    <div style={{borderTop:'1px solid var(--line)',background:'var(--surface)'}}>
      <div className="lp-section row ac jb wrap g16" style={{padding:'22px 32px'}}>
        <Logo size={15}/>
        <span className="muted" style={{fontSize:13}}>© 2026 UWAII · Underwriting AI Intelligence · Demo with illustrative data</span>
      </div>
    </div>
  </div>;
}

Object.assign(window,{Landing,MiniDashboard,LiveInsightCard});
