/* ============ UWAII hi-fi — Dashboard (Direction A) ============ */

function ChartTile({title,sub,delta,ddir,dataKey,cmp,kind,accent,note,h=140,cls=''}){
  return <div className={'card '+cls} style={{padding:16}}>
    <div className="row ac jb" style={{marginBottom:4}}>
      <div className="col">
        <span style={{fontWeight:600,fontSize:15}}>{title}</span>
        <span className="muted" style={{fontSize:12.5}}>{sub}</span>
      </div>
      <Tag dir={ddir}>{delta}</Tag>
    </div>
    <Chart dataKey={dataKey} cmp={cmp} kind={kind} accent={accent} height={h}/>
    {note&&<div className="row ac g8" style={{marginTop:10,fontSize:12.5,color:'var(--ink-3)'}}>
      <span style={{width:15,height:15,borderRadius:4,background:'var(--brand-50)',color:'var(--brand)',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0,fontSize:10,fontFamily:'var(--mono)'}}>AI</span>
      {note}{cmp&&<span className="muted"> · dashed = TSA demand</span>}
    </div>}
  </div>;
}

function Dashboard({go}){
  return <div className="page">
    {/* page header */}
    <div className="row ac jb wrap g16 rise" style={{marginBottom:20}}>
      <div className="col g4">
        <h1 className="serif" style={{fontSize:30,fontWeight:500,letterSpacing:'-.01em'}}>Travel · United States</h1>
        <span className="src" style={{fontSize:12.5}}><Icon name="clock" size={13}/> Tuesday 30 May 2026 · updates 4× daily · last 06:00 ET</span>
      </div>
      <div className="row ac g10">
        <span className="chip" style={{fontWeight:600}}><span style={{width:8,height:8,borderRadius:'50%',background:'var(--up)',boxShadow:'0 0 0 3px var(--up-bg)'}}/>Impact: Elevated</span>
        <button className="btn btn-sm">Last 24 months <Icon name="chevdown" size={14}/></button>
        <button className="btn btn-sm"><Icon name="report" size={15}/> Export</button>
      </div>
    </div>

    {/* what changed today */}
    <div className="rise d1" style={{marginBottom:22}}>
      <Eyebrow>What changed today</Eyebrow>
      <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:14}}>
        {CHANGED.map((c,i)=><div key={i} className="card" style={{padding:'14px 16px',display:'flex',flexDirection:'column',gap:10,minHeight:118}}>
          <p style={{fontWeight:500,fontSize:14.5,lineHeight:1.25,flex:1}}>{c.h}</p>
          <Tag dir={c.tag[0]}>{c.tag[1]}</Tag>
          <span className="src" style={{fontSize:11}}>{c.src} <span className="dot"/> {c.why}</span>
        </div>)}
      </div>
    </div>

    {/* stat row */}
    <div className="rise d2" style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:14,marginBottom:24}}>
      {STATS.map((s,i)=><Stat key={i} {...s}/>)}
    </div>

    {/* main split: charts + rail */}
    <div style={{display:'grid',gridTemplateColumns:'minmax(0,1fr) 320px',gap:22,alignItems:'start'}}>
      {/* charts */}
      <div className="rise d3">
        <Eyebrow right={<span className="muted" style={{fontSize:12.5}}>6 signals tracked</span>}>Historic trends</Eyebrow>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:16}}>
          {GRID.map((g,i)=><ChartTile key={i} title={g.title} sub={g.sub} delta={g.delta} ddir={g.ddir}
            dataKey={g.key} cmp={g.cmp} kind={g.kind} accent={g.accent} note={g.note} h={i===0?156:132}
            cls={i===0?'':''}/>)}
        </div>
      </div>

      {/* right rail */}
      <div className="col g16 rise d4" style={{position:'sticky',top:84}}>
        {/* live news */}
        <div className="card" style={{padding:16}}>
          <div className="row ac jb" style={{marginBottom:12}}>
            <span className="eyebrow">Live news</span>
            <span className="chip dim" style={{fontSize:11}}>ranked by impact</span>
          </div>
          <div className="col g10">
            {FEED.slice(0,4).map(n=><div key={n.id} className="card flat feedrow" style={{padding:12,border:'1px solid var(--line)'}} onClick={()=>go('news',n.id)}>
              <div className="row ac jb" style={{marginBottom:5}}>
                <span className="src" style={{fontSize:10.5}}>{n.src} · {n.time}</span>
                <Meter n={n.impact}/>
              </div>
              <p style={{fontSize:13.5,fontWeight:500,lineHeight:1.25,marginBottom:8}}>{n.head}</p>
              <div className="row wrap g6">{n.tags.slice(0,2).map((t,i)=><Tag key={i} dir={t[0]}>{t[1]}</Tag>)}</div>
            </div>)}
          </div>
          <button className="btn btn-ghost btn-sm" style={{width:'100%',marginTop:12,justifyContent:'center'}} onClick={()=>go('news')}>Open news &amp; insights <Icon name="arrow" size={14}/></button>
        </div>

        {/* drivers */}
        <div className="card" style={{padding:16}}>
          <Eyebrow>Drivers behind the move</Eyebrow>
          <div className="col g12">
            {DRIVERS.map(d=><div key={d.name} className="row ac g12">
              <div style={{width:64,flexShrink:0}}><Spark dataKey={d.key} accent={d.state==='up'?'up':'down'} height={30}/></div>
              <div className="col grow" style={{minWidth:0}}>
                <span style={{fontWeight:600,fontSize:14}}>{d.name}</span>
                <span className="muted" style={{fontSize:12.5,lineHeight:1.2}}>{d.note}</span>
              </div>
              <Tag dir={d.state}>{d.state==='up'?'risk':'easing'}</Tag>
            </div>)}
          </div>
        </div>
      </div>
    </div>
  </div>;
}

Object.assign(window,{Dashboard,ChartTile});
