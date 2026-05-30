/* ============ UWAII hi-fi — charts ============ */
const {useRef:cuRef,useState:cuState,useEffect:cuEffect,useId:cuId}=React;

function useMeasure(){
  const ref=cuRef(null);
  const [w,setW]=cuState(0);
  cuEffect(()=>{
    const el=ref.current; if(!el) return;
    const ro=new ResizeObserver(es=>setW(es[0].contentRect.width));
    ro.observe(el); setW(el.clientWidth);
    return ()=>ro.disconnect();
  },[]);
  return [ref,w];
}

const COLOR={brand:'#2A4DDB',up:'#C0362F',down:'#1C7A55'};

function smooth(pts){
  if(pts.length<2) return '';
  let d=`M ${pts[0].x.toFixed(1)} ${pts[0].y.toFixed(1)}`;
  for(let i=0;i<pts.length-1;i++){
    const p0=pts[i-1]||pts[i],p1=pts[i],p2=pts[i+1],p3=pts[i+2]||p2;
    const c1x=p1.x+(p2.x-p0.x)/6,c1y=p1.y+(p2.y-p0.y)/6;
    const c2x=p2.x-(p3.x-p1.x)/6,c2y=p2.y-(p3.y-p1.y)/6;
    d+=` C ${c1x.toFixed(1)} ${c1y.toFixed(1)} ${c2x.toFixed(1)} ${c2y.toFixed(1)} ${p2.x.toFixed(1)} ${p2.y.toFixed(1)}`;
  }
  return d;
}

function Chart({dataKey,data,kind='line',accent='brand',cmp=null,height=150,labels=MONTHS,axis=true,valueFmt}){
  const series=data||SERIES[dataKey]||[];
  const cmpSeries=cmp?(SERIES[cmp]||[]):null;
  const [ref,w]=useMeasure();
  const [hi,setHi]=cuState(null);
  const gid=cuId().replace(/:/g,'');
  const col=COLOR[accent]||COLOR.brand;

  const padL=axis?34:6, padR=14, padT=12, padB=axis?22:6;
  const H=height;
  const all=cmpSeries?series.concat(cmpSeries):series;
  let mn=Math.min(...all), mx=Math.max(...all);
  const span=(mx-mn)||1; mn-=span*0.12; mx+=span*0.12;
  const innerW=Math.max(0,w-padL-padR), innerH=H-padT-padB;
  const X=i=>padL+(series.length<=1?0:innerW*i/(series.length-1));
  const Y=v=>padT+innerH*(1-(v-mn)/(mx-mn));
  const pts=series.map((v,i)=>({x:X(i),y:Y(v),v}));
  const fmt=valueFmt||(v=>(Math.round(v*10)/10).toLocaleString());

  return <div className="chart-wrap" ref={ref}
    onMouseMove={e=>{
      if(kind==='bar'){return;}
      const r=ref.current.getBoundingClientRect();
      const x=e.clientX-r.left;
      let idx=Math.round((x-padL)/(innerW/(series.length-1)));
      idx=Math.max(0,Math.min(series.length-1,idx));
      setHi(idx);
    }}
    onMouseLeave={()=>setHi(null)}>
    {w>0&&<svg width={w} height={H} style={{display:'block',overflow:'visible'}}>
      <defs>
        <linearGradient id={'g'+gid} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={col} stopOpacity="0.16"/>
          <stop offset="100%" stopColor={col} stopOpacity="0"/>
        </linearGradient>
      </defs>

      {/* gridlines + y labels */}
      {[0,0.5,1].map((f,i)=>{
        const y=padT+innerH*f, val=mx-(mx-mn)*f;
        return <g key={i}>
          <line x1={padL} y1={y} x2={w-padR} y2={y} stroke="var(--line)" strokeWidth="1" strokeDasharray={i===2?'0':'2 4'}/>
          {axis&&<text className="axis" x={padL-7} y={y+3} textAnchor="end">{fmt(val)}</text>}
        </g>;
      })}

      {/* x labels */}
      {axis&&labels.map((m,i)=> (i%2===0||i===labels.length-1)
        ? <text key={i} className="axis" x={X(i)} y={H-6} textAnchor="middle">{m}</text> : null)}

      {/* comparison series */}
      {cmpSeries&&<path d={smooth(cmpSeries.map((v,i)=>({x:X(i),y:Y(v)})))} fill="none"
        stroke="var(--ink-4)" strokeWidth="1.6" strokeDasharray="4 4" opacity="0.7"/>}

      {kind==='bar'
        ? series.map((v,i)=>{
            const bw=Math.min(20,innerW/series.length*0.62);
            const x=X(i)-bw/2, y=Y(v), h=H-padB-y;
            const peak=v===Math.max(...series);
            return <rect key={i} x={x} y={y} width={bw} height={Math.max(0,h)} rx="3"
              fill={peak?col:'#D7DCE6'} opacity={peak?1:1}/>;
          })
        : <g>
            {kind==='area'&&<path d={smooth(pts)+` L ${X(series.length-1)} ${H-padB} L ${padL} ${H-padB} Z`} fill={`url(#g${gid})`}/>}
            <path d={smooth(pts)} fill="none" stroke={col} strokeWidth="2.4" strokeLinecap="round"/>
            {/* last point marker */}
            <circle className="lastdot" cx={pts[pts.length-1].x} cy={pts[pts.length-1].y} r="4" fill={col} stroke="#fff" strokeWidth="2"/>
          </g>}

      {/* hover guide */}
      {hi!=null&&kind!=='bar'&&<g>
        <line x1={pts[hi].x} y1={padT} x2={pts[hi].x} y2={H-padB} stroke={col} strokeWidth="1" strokeDasharray="3 3" opacity="0.5"/>
        <circle cx={pts[hi].x} cy={pts[hi].y} r="4.5" fill="#fff" stroke={col} strokeWidth="2.4"/>
      </g>}
    </svg>}

    {/* hover tooltip */}
    {hi!=null&&kind!=='bar'&&w>0&&<div className="num" style={{position:'absolute',left:Math.min(Math.max(pts[hi].x,30),w-70),top:Math.max(0,pts[hi].y-34),
      transform:'translateX(-50%)',background:'var(--ink)',color:'#fff',fontFamily:'var(--mono)',fontSize:11,
      padding:'3px 8px',borderRadius:6,pointerEvents:'none',whiteSpace:'nowrap',boxShadow:'var(--sh-2)'}}>
      {labels[hi]} · {fmt(series[hi])}
    </div>}
  </div>;
}

function Spark({dataKey,data,accent='brand',height=34}){
  const series=data||SERIES[dataKey]||[];
  const [ref,w]=useMeasure();
  const col=COLOR[accent]||COLOR.brand;
  const mn=Math.min(...series),mx=Math.max(...series),sp=(mx-mn)||1;
  const X=i=>w*i/(series.length-1), Y=v=>height-2-(height-4)*(v-mn)/sp;
  const pts=series.map((v,i)=>({x:X(i),y:Y(v)}));
  return <div ref={ref} style={{width:'100%',height}}>
    {w>0&&<svg width={w} height={height} style={{display:'block'}}>
      <path d={smooth(pts)} fill="none" stroke={col} strokeWidth="2" strokeLinecap="round"/>
      <circle cx={pts[pts.length-1].x} cy={pts[pts.length-1].y} r="2.6" fill={col}/>
    </svg>}
  </div>;
}

Object.assign(window,{Chart,Spark,useMeasure,COLOR});
