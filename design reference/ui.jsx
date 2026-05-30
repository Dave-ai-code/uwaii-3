/* ============ UWAII hi-fi — shared UI ============ */

/* simple utilitarian stroke icons */
const ICONS={
  dashboard:'M3 3h7v7H3zM14 3h7v4h-7zM14 10h7v11h-7zM3 13h7v8H3z',
  news:'M4 5h13v14H4zM7 8h7M7 11h7M7 14h4M18 9h2v8a2 2 0 0 1-2 2',
  drivers:'M3 17h4l3-9 4 14 3-7h4',
  alert:'M12 4l8 14H4zM12 10v4M12 16.5v.5',
  report:'M6 3h9l4 4v14H6zM14 3v5h5M9 13h6M9 16h6',
  search:'M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14zM20 20l-4-4',
  chevron:'M9 6l6 6-6 6',
  chevdown:'M6 9l6 6 6-6',
  arrow:'M5 12h14M13 6l6 6-6 6',
  ext:'M14 5h5v5M19 5l-8 8M18 14v5H5V6h5',
  bell:'M6 9a6 6 0 0 1 12 0c0 5 2 6 2 6H4s2-1 2-6zM10 20a2 2 0 0 0 4 0',
  check:'M5 12l4 4 10-10',
  plus:'M12 5v14M5 12h14',
  close:'M6 6l12 12M18 6L6 18',
  sliders:'M4 8h10M18 8h2M4 16h2M10 16h10M14 6v4M8 14v4',
  globe:'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18',
  bolt:'M13 3L5 13h6l-1 8 8-10h-6z',
  share:'M16 6l-4-3-4 3M12 3v12M5 14v5h14v-5',
  clock:'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM12 7v5l3 2',
};
function Icon({name,size=18,sw=1.8,style={},cls=''}){
  return <svg className={cls} width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" style={style}>
    <path d={ICONS[name]||''}/>
  </svg>;
}

function Logo({lite=false,size=18}){
  return <span className="logo" style={{fontSize:size}}>
    <span className={'mark'+(lite?' lite':'')}/>
    <span>UWAII</span>
  </span>;
}

function Tag({dir='flat',children}){
  const ar=dir==='up'?'▲':dir==='down'?'▼':'■';
  return <span className={'tag '+dir}><span className="ar">{ar}</span>{children}</span>;
}

function Meter({n=3,max=5}){
  return <span className={'meter'+(n<4?' lo':'')}>
    {Array.from({length:max}).map((_,i)=><i key={i} className={i<n?'on':''}/>)}
  </span>;
}

/* signature "so what for your book" block */
function Insight({children,big=false,style={}}){
  return <div className="insight" style={style}>
    <span className="lbl"><span className="ai"/><span>So what for your book</span></span>
    <p style={big?{fontSize:18}:null}>{children}</p>
  </div>;
}

function Source({items}){
  return <span className="src">
    <Icon name="globe" size={12} sw={1.6}/>
    {items.map((s,i)=><React.Fragment key={s}>{i>0&&<span className="dot"/>}<span>{s}</span></React.Fragment>)}
  </span>;
}

function Confidence({level}){
  const map={High:3,Med:2,Low:1};
  return <span className="row ac g6" style={{fontFamily:'var(--mono)',fontSize:11.5,color:'var(--ink-3)'}}>
    <span className="row g4">{[1,2,3].map(i=><span key={i} style={{width:5,height:11,borderRadius:2,
      background:i<=(map[level]||0)?'var(--ink-2)':'var(--line-strong)'}}/>)}</span>
    {level} confidence
  </span>;
}

/* chain of impact */
function Chain({steps}){
  return <div className="chain scrollx">
    {steps.map((s,i)=><React.Fragment key={i}>
      <div className={'node'+(i===steps.length-1?' end':'')}>{s}</div>
      {i<steps.length-1&&<span className="arr"><Icon name="chevron" size={16} sw={2}/></span>}
    </React.Fragment>)}
  </div>;
}

/* stat tile */
function Stat({k,v,unit,delta,ddir,big}){
  return <div className="card stat col">
    <span className="k">{k}</span>
    <div className="row ac g8" style={{flexWrap:'wrap'}}>
      <span className="v" style={big?{fontFamily:'var(--serif)',fontWeight:500,fontSize:30,letterSpacing:'-.01em'}:null}>{v}</span>
      {unit&&<span className="mono muted" style={{fontSize:14}}>{unit}</span>}
    </div>
    {delta&&<div className="sub"><Tag dir={ddir}>{delta}</Tag></div>}
    {big&&<div className="sub muted" style={{fontSize:12.5}}>vs. yesterday · updated 06:00 ET</div>}
  </div>;
}

/* book selector pill */
function BookPill({onClick}){
  return <span className="bookpill" onClick={onClick}>
    <span className="flag">✦</span>
    <span className="col" style={{lineHeight:1.1}}>
      <span style={{fontSize:11,color:'var(--ink-3)'}} className="mono">LINE · GEOGRAPHY</span>
      <span style={{fontWeight:600,fontSize:14}}>Travel · United States</span>
    </span>
    <Icon name="chevdown" size={15} style={{color:'var(--ink-3)',marginLeft:2}}/>
  </span>;
}

/* eyebrow + rule heading */
function Eyebrow({children,right}){
  return <div className="row ac jb" style={{marginBottom:14}}>
    <div className="eyebrow-rule" style={{flex:right?'none':1}}><span className="eyebrow nowrap">{children}</span>{!right&&null}</div>
    {right}
  </div>;
}

Object.assign(window,{Icon,ICONS,Logo,Tag,Meter,Insight,Source,Confidence,Chain,Stat,BookPill,Eyebrow});
