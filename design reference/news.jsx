/* ============ UWAII hi-fi — News & insights (Direction A + deep-dive) ============ */
const {useState:nuState,useEffect:nuEffect}=React;

function FeedFull({onOpen}){
  return <div className="col g14">
    {FEED.map(n=><div key={n.id} className="card feedrow" style={{padding:18}} onClick={()=>onOpen(n.id)}>
      <div className="row g16">
        {/* impact */}
        <div className="col ac g6" style={{width:52,flexShrink:0,paddingTop:2}}>
          <div style={{width:44,height:44,borderRadius:12,display:'flex',alignItems:'center',justifyContent:'center',
            background:n.impact>=4?'var(--up-bg)':'var(--surface-3)',border:'1px solid '+(n.impact>=4?'var(--up-line)':'var(--line)')}}>
            <span className="mono" style={{fontSize:19,fontWeight:600,color:n.impact>=4?'var(--up)':'var(--ink-3)'}}>{n.impact}</span>
          </div>
          <span className="mono" style={{fontSize:9.5,color:'var(--ink-4)',letterSpacing:'.08em'}}>IMPACT</span>
        </div>
        {/* body */}
        <div className="col grow g8" style={{minWidth:0}}>
          <div className="row ac wrap g10">
            <span className="chip dim" style={{fontSize:11.5,padding:'3px 9px'}}>{n.cat}</span>
            <span className="src" style={{fontSize:11.5}}>{n.src} <span className="dot"/> {n.time} ago</span>
          </div>
          <h3 className="serif" style={{fontSize:21,fontWeight:500,lineHeight:1.18}}>{n.head}</h3>
          <div className="row wrap g6">{n.tags.map((t,i)=><Tag key={i} dir={t[0]}>{t[1]}</Tag>)}</div>
          <Insight>{n.sowhat}</Insight>
          <div className="row ac jb wrap g12" style={{marginTop:2}}>
            <span style={{fontSize:13.5}}><span className="mono" style={{fontSize:11,color:'var(--ink-4)',letterSpacing:'.08em'}}>ACTION&nbsp;</span><span className="muted2">{n.action}</span></span>
            <span className="row ac g14">
              <Confidence level={n.conf}/>
              <span className="btn btn-ghost btn-sm">Deep-dive <Icon name="arrow" size={14}/></span>
            </span>
          </div>
        </div>
      </div>
    </div>)}
  </div>;
}

function DeepDive({n,onPick,sel,onClose}){
  return <div className="row g20" style={{alignItems:'flex-start'}}>
    {/* rail */}
    <div className="col g10" style={{width:286,flexShrink:0}}>
      <div className="row ac jb" style={{padding:'2px 2px 0'}}>
        <span className="muted" style={{fontSize:13}}>{FEED.length} stories</span>
        <button className="btn btn-ghost btn-sm" onClick={onClose}><Icon name="close" size={14}/> Close</button>
      </div>
      {FEED.map(it=><div key={it.id} className={'card feedrow'+(it.id===sel?' sel':'')} style={{padding:'11px 13px'}} onClick={()=>onPick(it.id)}>
        <div className="row ac jb" style={{marginBottom:5}}>
          <span className="row ac g8">
            <span style={{width:20,height:20,borderRadius:6,display:'flex',alignItems:'center',justifyContent:'center',fontSize:11,fontFamily:'var(--mono)',fontWeight:600,
              background:it.impact>=4?'var(--up)':'var(--ink-4)',color:'#fff'}}>{it.impact}</span>
            <span className="src" style={{fontSize:10.5}}>{it.src} · {it.time}</span>
          </span>
        </div>
        <p style={{fontSize:13.5,fontWeight:500,lineHeight:1.22,marginBottom:7}}>{it.head}</p>
        <div className="row wrap g5">{it.tags.slice(0,2).map((t,i)=><Tag key={i} dir={t[0]}>{t[1]}</Tag>)}</div>
      </div>)}
    </div>

    {/* detail */}
    <div className="col grow g16" style={{minWidth:0}}>
      <div className="card" style={{padding:24}}>
        <div className="row ac wrap g10" style={{marginBottom:12}}>
          <span className="chip dim" style={{fontSize:11.5}}>{n.cat}</span>
          <span className="src" style={{fontSize:12}}>{n.src} <span className="dot"/> {n.time} ago</span>
          <span className="grow"/>
          <span className="row ac g8"><span className="mono muted" style={{fontSize:11}}>IMPACT</span><Meter n={n.impact}/></span>
        </div>
        <h1 className="serif" style={{fontSize:30,fontWeight:500,lineHeight:1.14,letterSpacing:'-.01em',marginBottom:14}}>{n.head}</h1>
        <div className="row wrap g6">{n.tags.map((t,i)=><Tag key={i} dir={t[0]}>{t[1]}</Tag>)}</div>
      </div>

      {/* so what — expanded */}
      <div className="card" style={{padding:0,overflow:'hidden'}}>
        <div style={{padding:'18px 24px',background:'var(--brand-50)',borderBottom:'1px solid var(--brand-100)'}}>
          <span className="lbl" style={{display:'inline-flex',alignItems:'center',gap:8,marginBottom:8}}>
            <span style={{width:18,height:18,borderRadius:5,background:'var(--brand)',display:'inline-flex',alignItems:'center',justifyContent:'center'}}><span style={{width:6,height:6,borderRadius:'50%',background:'#fff'}}/></span>
            <span className="mono" style={{fontSize:11,letterSpacing:'.14em',color:'var(--brand-ink)'}}>SO WHAT FOR YOUR BOOK</span>
          </span>
          <p className="serif" style={{fontSize:19,lineHeight:1.42}}>{n.sowhat}</p>
        </div>
      </div>

      {/* chain of impact */}
      <div className="card" style={{padding:'18px 24px'}}>
        <Eyebrow>Chain of impact</Eyebrow>
        <Chain steps={n.chain}/>
      </div>

      {/* two charts */}
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:16}}>
        <div className="card" style={{padding:16}}>
          <div className="row ac jb" style={{marginBottom:6}}><span style={{fontWeight:600,fontSize:14.5}}>{n.sig.title}</span><span className="mono muted" style={{fontSize:11}}>THE DRIVER</span></div>
          <span className="muted" style={{fontSize:12.5}}>external signal · 24 months</span>
          <div style={{marginTop:8}}><Chart dataKey={n.sig.key} kind={n.sig.kind} accent={n.sig.accent} height={150}/></div>
        </div>
        <div className="card" style={{padding:16}}>
          <div className="row ac jb" style={{marginBottom:6}}><span style={{fontWeight:600,fontSize:14.5}}>{n.met.title}</span><span className="mono muted" style={{fontSize:11}}>THE EFFECT</span></div>
          <span className="muted" style={{fontSize:12.5}}>your book · projected</span>
          <div style={{marginTop:8}}><Chart dataKey={n.met.key} kind={n.met.kind} accent={n.met.accent} height={150}/></div>
        </div>
      </div>

      {/* actions + related */}
      <div style={{display:'grid',gridTemplateColumns:'1.25fr 1fr',gap:16}}>
        <div className="card" style={{padding:'18px 22px'}}>
          <Eyebrow>What you can do</Eyebrow>
          <div className="col g10">
            {[n.action,'Set an alert if this signal moves more than 5% further','Share to the underwriting channel'].map((a,i)=>
              <div key={i} className="row ac g10">
                <span style={{width:20,height:20,borderRadius:6,border:'1px solid var(--line-strong)',flexShrink:0,display:'flex',alignItems:'center',justifyContent:'center',color:i===0?'var(--brand)':'var(--ink-4)'}}>
                  {i===0&&<Icon name="check" size={13}/>}
                </span>
                <span style={{fontSize:14.5,fontWeight:i===0?600:400,color:i===0?'var(--ink)':'var(--ink-2)'}}>{a}</span>
              </div>)}
          </div>
          <div className="row g10" style={{marginTop:16}}>
            <button className="btn btn-primary btn-sm"><Icon name="bell" size={14}/> Create alert</button>
            <button className="btn btn-sm"><Icon name="share" size={14}/> Share</button>
          </div>
        </div>
        <div className="card" style={{padding:'18px 22px'}}>
          <Eyebrow>Related coverage</Eyebrow>
          <div className="col g11" style={{gap:11}}>
            {FEED.filter(f=>f.id!==n.id).slice(0,3).map(r=><div key={r.id} className="row ac g10 feedrow" style={{cursor:'pointer'}} onClick={()=>onPick(r.id)}>
              <span style={{width:6,height:6,borderRadius:'50%',background:'var(--brand)',flexShrink:0}}/>
              <span style={{fontSize:13.5,lineHeight:1.25}}>{r.head}</span>
            </div>)}
          </div>
          <div className="divider" style={{margin:'14px 0 12px'}}/>
          <div className="col g8">
            <Confidence level={n.conf}/>
            <Source items={n.sources}/>
            <span className="muted" style={{fontSize:11.5}}>AI summary · verify before acting</span>
          </div>
        </div>
      </div>
    </div>
  </div>;
}

function NewsPage({go,initialId=null}){
  const [sel,setSel]=nuState(initialId);
  nuEffect(()=>{setSel(initialId);},[initialId]);
  const open=sel!=null;
  const n=open?FEED.find(f=>f.id===sel):null;

  return <div className="page">
    <div className="row ac jb wrap g16" style={{marginBottom:18}}>
      <div className="col g4">
        <h1 className="serif" style={{fontSize:30,fontWeight:500,letterSpacing:'-.01em'}}>News &amp; insights</h1>
        <span className="src" style={{fontSize:12.5}}>Travel · US <span className="dot"/> ranked by portfolio impact <span className="dot"/> scraped 4× daily</span>
      </div>
      <span className="chip" style={{fontSize:12}}><span style={{width:7,height:7,borderRadius:'50%',background:'var(--down)'}} className="rise"/>Live</span>
    </div>

    {!open&&<div className="row ac wrap g8" style={{marginBottom:18}}>
      <span className="mono" style={{fontSize:11,color:'var(--ink-4)',letterSpacing:'.1em'}}>DRIVER</span>
      {['All','Geopolitics','Weather','Advisories','Operations','Demand'].map((f,i)=><span key={f} className={'chip click'+(i===0?' on':' dim')} style={{fontSize:12.5}}>{f}</span>)}
      <span className="vrule" style={{height:20,margin:'0 4px'}}/>
      <span className="mono" style={{fontSize:11,color:'var(--ink-4)',letterSpacing:'.1em'}}>IMPACT</span>
      {['Any','High only'].map((f,i)=><span key={f} className={'chip click'+(i===1?' on':' dim')} style={{fontSize:12.5}}>{f}</span>)}
    </div>}

    {open
      ? <DeepDive n={n} sel={sel} onPick={setSel} onClose={()=>setSel(null)}/>
      : <FeedFull onOpen={setSel}/>}
  </div>;
}

Object.assign(window,{NewsPage,FeedFull,DeepDive});
