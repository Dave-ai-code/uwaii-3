/* ============ UWAII hi-fi — app shell + routing ============ */
const {useState:auState,useEffect:auEffect}=React;

function Sidebar({view,go}){
  const items=[
    ['Overview','dashboard','app'],
    ['News & insights','news','news'],
    ['Drivers','drivers',null],
    ['Alerts','alert',null],
    ['Reports','report',null],
  ];
  return <div className="side">
    <div style={{padding:'2px 8px 10px'}}><Logo/></div>
    <div className="bookpill" style={{margin:'4px 4px 8px',width:'auto'}}>
      <span className="flag">✦</span>
      <span className="col grow" style={{lineHeight:1.1,minWidth:0}}>
        <span className="mono" style={{fontSize:10,color:'var(--ink-3)'}}>LINE · GEO</span>
        <span style={{fontWeight:600,fontSize:13.5}}>Travel · US</span>
      </span>
      <Icon name="chevdown" size={14} style={{color:'var(--ink-3)'}}/>
    </div>
    <div className="sec">Workspace</div>
    {items.map(([label,ic,target])=>
      <div key={label} className={'navitem'+((target==='app'&&view==='app')||(target==='news'&&view==='news')?' on':'')}
        onClick={()=>target&&go(target)} style={!target?{opacity:.55}:null}>
        <Icon name={ic} size={18} cls="ic"/>{label}
      </div>)}
    <div className="grow"/>
    <div className="sec">Account</div>
    <div className="navitem" style={{opacity:.7}}><Icon name="sliders" size={18} cls="ic"/>Settings</div>
    <div className="row ac g10" style={{padding:'10px 11px',marginTop:4,borderTop:'1px solid var(--line)'}}>
      <span style={{width:30,height:30,borderRadius:'50%',background:'var(--brand-50)',color:'var(--brand-ink)',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:600,fontSize:13}}>AM</span>
      <div className="col" style={{lineHeight:1.15}}>
        <span style={{fontWeight:600,fontSize:13.5}}>A. Mercer</span>
        <span className="muted" style={{fontSize:11.5}}>Lead underwriter</span>
      </div>
    </div>
  </div>;
}

function AppShell({view,go,children}){
  return <div className="app">
    <Sidebar view={view} go={go}/>
    <div className="main">
      <div className="topbar">
        <span className="muted2" style={{fontWeight:600,fontSize:15}}>{view==='news'?'News & insights':'Overview'}</span>
        <span className="grow"/>
        <span className="row ac g8" style={{border:'1px solid var(--line-strong)',borderRadius:'var(--r)',padding:'7px 12px',color:'var(--ink-3)',fontSize:13.5,minWidth:200,cursor:'text'}}>
          <Icon name="search" size={15}/> Search signals, events, regions…
        </span>
        <button className="btn btn-ghost btn-sm" style={{position:'relative'}}><Icon name="bell" size={18}/>
          <span style={{position:'absolute',top:4,right:6,width:7,height:7,borderRadius:'50%',background:'var(--up)',border:'1.5px solid #fff'}}/>
        </button>
      </div>
      {children}
    </div>
  </div>;
}

const PROTO=[['landing','Landing'],['build','Build'],['app','Dashboard'],['news','News']];

function App(){
  const [view,setView]=auState(()=>localStorage.getItem('uw_hi_view')||'landing');
  const [newsId,setNewsId]=auState(null);

  const go=(target,arg=null)=>{
    if(target==='dashboard') target='app';
    if(target==='news') setNewsId(arg);
    setView(target);
    window.scrollTo(0,0);
  };
  auEffect(()=>{localStorage.setItem('uw_hi_view',view);},[view]);

  let screen;
  if(view==='landing') screen=<Landing go={go}/>;
  else if(view==='build') screen=<Build go={go}/>;
  else if(view==='news') screen=<AppShell view="news" go={go}><NewsPage go={go} initialId={newsId}/></AppShell>;
  else screen=<AppShell view="app" go={go}><Dashboard go={go}/></AppShell>;

  return <div>
    {screen}
    {/* prototype switcher */}
    <div className="protonav">
      <span className="pl">SCREENS</span>
      {PROTO.map(([v,label])=>
        <button key={v} className={(view===v||(v==='app'&&view==='app'))?'on':''}
          onClick={()=>go(v==='app'?'dashboard':v)}>{label}</button>)}
    </div>
  </div>;
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
