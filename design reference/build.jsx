/* ============ UWAII hi-fi — Build / configure (Direction A) ============ */
const {useState:buState}=React;

function Select({label,value,hint}){
  return <label className="col g6">
    <span className="muted" style={{fontSize:13,fontWeight:500}}>{label}</span>
    <span className="row ac jb" style={{border:'1px solid var(--line-strong)',background:'var(--surface)',borderRadius:'var(--r)',padding:'9px 12px',cursor:'pointer'}}>
      <span style={{fontWeight:500,color:value?'var(--ink)':'var(--ink-4)'}}>{value||'Select…'}</span>
      <Icon name="chevdown" size={15} style={{color:'var(--ink-3)'}}/>
    </span>
    {hint&&<span className="muted" style={{fontSize:12}}>{hint}</span>}
  </label>;
}

function Build({go}){
  const [lobs,setLobs]=buState({Travel:true});
  const [sigs,setSigs]=buState(()=>SIGNALS.map(s=>s.on));
  const onCount=sigs.filter(Boolean).length;
  const toggleLob=l=>setLobs(o=>({...o,[l]:!o[l]}));
  const toggleSig=i=>setSigs(o=>o.map((v,j)=>j===i?!v:v));

  return <div style={{background:'var(--bg)',minHeight:'100vh'}}>
    {/* slim top bar */}
    <div className="row ac jb" style={{height:62,borderBottom:'1px solid var(--line)',background:'var(--surface)',padding:'0 26px',position:'sticky',top:0,zIndex:20}}>
      <span className="row ac g12"><Logo/><span className="vrule" style={{height:22}}/><span className="muted2" style={{fontWeight:500}}>New dashboard</span></span>
      <span className="row ac g16"><span className="mono muted" style={{fontSize:12}}>STEP 1 OF 1</span><button className="btn btn-ghost btn-sm" onClick={()=>go('landing')}>Cancel</button></span>
    </div>

    <div className="page" style={{maxWidth:1180}}>
      <div className="col g4" style={{marginBottom:22}}>
        <h1 className="serif" style={{fontSize:32,fontWeight:500}}>Set up your view</h1>
        <p className="muted2" style={{fontSize:16}}>One page, everything visible — pick your book, your geography, and the signals to track. You can refine all of it later.</p>
      </div>

      <div style={{display:'grid',gridTemplateColumns:'1fr 380px',gap:24,alignItems:'start'}}>
        {/* config column */}
        <div className="col g16">
          {/* book */}
          <div className="card" style={{padding:22}}>
            <Eyebrow>Your book</Eyebrow>
            <span className="muted" style={{fontSize:13,fontWeight:500}}>Line(s) of business</span>
            <div className="row wrap g8" style={{margin:'8px 0 18px'}}>
              {['Travel','Motor','Cyber','Property','Crop'].map(l=>
                <span key={l} className={'chip click'+(lobs[l]?' on':'')} onClick={()=>toggleLob(l)}>
                  {lobs[l]&&<Icon name="check" size={13}/>}{l}
                </span>)}
            </div>
            <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:14}}>
              <Select label="Country / region" value="United States"/>
              <Select label="Sub-region" value="All states" hint="Drill into states later"/>
              <Select label="Time horizon" value="Last 24 months"/>
              <Select label="Compare against" value="Prior year"/>
            </div>
          </div>

          {/* signals */}
          <div className="card" style={{padding:22}}>
            <Eyebrow right={<span className="mono muted" style={{fontSize:12}}>{onCount} OF {SIGNALS.length} ON</span>}>External signals</Eyebrow>
            <p className="muted" style={{fontSize:13,marginTop:-4,marginBottom:14}}>Auto-suggested for Travel · US and ranked by how much they move your book. Toggle freely.</p>
            <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:10}}>
              {SIGNALS.map((s,i)=>
                <div key={s.name} className="row ac jb" onClick={()=>toggleSig(i)}
                  style={{border:'1px solid '+(sigs[i]?'var(--brand-100)':'var(--line)'),background:sigs[i]?'var(--brand-50)':'var(--surface-2)',
                    borderRadius:'var(--r)',padding:'10px 12px',cursor:'pointer',transition:'.12s'}}>
                  <span style={{fontSize:13.5,fontWeight:500,color:sigs[i]?'var(--brand-ink)':'var(--ink-2)'}}>{s.name}</span>
                  <span style={{width:30,height:18,borderRadius:99,background:sigs[i]?'var(--brand)':'var(--line-strong)',position:'relative',flexShrink:0,transition:'.12s'}}>
                    <span style={{position:'absolute',top:2,left:sigs[i]?14:2,width:14,height:14,borderRadius:'50%',background:'#fff',transition:'.12s'}}/>
                  </span>
                </div>)}
            </div>
          </div>

          {/* portfolio context */}
          <div className="card q" style={{padding:22,borderStyle:'dashed'}}>
            <div className="row ac jb" style={{marginBottom:14}}>
              <span style={{fontWeight:600}}>Portfolio context <span className="muted" style={{fontWeight:400,fontSize:13}}>· optional, sharpens impact</span></span>
              <Icon name="plus" size={16} style={{color:'var(--ink-3)'}}/>
            </div>
            <div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:14}}>
              <Select label="Gross written premium" value=""/>
              <Select label="# policies in force" value=""/>
              <label className="col g6"><span className="muted" style={{fontSize:13,fontWeight:500}}>Exposure file</span>
                <span className="row ac g8" style={{border:'1px dashed var(--line-strong)',borderRadius:'var(--r)',padding:'9px 12px',color:'var(--ink-3)',fontSize:13.5}}><Icon name="report" size={15}/>Drag a CSV here</span>
              </label>
            </div>
          </div>

          <div className="row ac g12">
            <button className="btn btn-primary btn-lg" onClick={()=>go('app')}>Build dashboard <Icon name="arrow" size={17}/></button>
            <button className="btn btn-lg">Save as template</button>
            <span className="muted" style={{fontSize:13}}>Ready in ~10 seconds</span>
          </div>
        </div>

        {/* live preview */}
        <div className="card" style={{padding:16,position:'sticky',top:84,overflow:'hidden'}}>
          <div className="row ac jb" style={{marginBottom:12}}>
            <span className="eyebrow">Live preview</span>
            <span className="row ac g6 mono" style={{fontSize:11,color:'var(--brand)'}}><span style={{width:6,height:6,borderRadius:'50%',background:'var(--brand)'}} className="rise"/>assembling…</span>
          </div>
          <div className="card flat q" style={{padding:12}}>
            <div className="row wrap g6" style={{marginBottom:10}}>
              {Object.keys(lobs).filter(l=>lobs[l]).map(l=><span key={l} className="chip brand" style={{fontSize:12}}>{l}</span>)}
              <span className="chip" style={{fontSize:12}}>US</span>
              <span className="chip dim" style={{fontSize:12}}>24mo</span>
            </div>
            <div className="row g8" style={{marginBottom:10}}>
              <div className="card flat grow" style={{padding:'10px 12px'}}>
                <div className="muted" style={{fontSize:11}}>Cancellation freq</div>
                <div className="mono" style={{fontSize:18}}>5.0<span style={{fontSize:11}} className="muted">/1k</span></div>
              </div>
              <div className="card flat grow" style={{padding:'10px 12px'}}>
                <div className="muted" style={{fontSize:11}}>Impact</div>
                <div style={{fontSize:15,fontWeight:600,color:'var(--up)'}}>Elevated</div>
              </div>
            </div>
            <div className="card flat" style={{padding:10,marginBottom:10}}>
              <div className="muted" style={{fontSize:11,marginBottom:2}}>Trip-cancellation frequency</div>
              <Chart dataKey="cancelFreq" kind="line" accent="brand" height={84} axis={false}/>
            </div>
            <div className="card flat" style={{padding:10}}>
              <span className="src" style={{fontSize:10.5}}>Reuters · 2h</span>
              <p style={{fontSize:12.5,fontWeight:500,margin:'3px 0 6px',lineHeight:1.25}}>Hormuz disruption widens — jet fuel +8%</p>
              <div className="row g6"><Tag dir="up">trip-cost</Tag><Tag dir="up">freq</Tag></div>
            </div>
          </div>
          <p className="muted" style={{fontSize:12,marginTop:12,textAlign:'center'}}>Your dashboard builds as you choose — instant payoff.</p>
        </div>
      </div>
    </div>
  </div>;
}

Object.assign(window,{Build});
