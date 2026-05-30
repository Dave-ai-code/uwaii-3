/* Recharts-based chart components styled to match design reference */
import {
  LineChart, Line, AreaChart, Area, BarChart, Bar,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  ReferenceLine, Cell, PieChart, Pie, Legend,
} from 'recharts'

const COLOR = {
  brand: '#2A4DDB',
  up:    '#C0362F',
  down:  '#1C7A55',
  warn:  '#B7791F',
  ink4:  '#98A0AC',
  line:  '#E4E7EC',
}

/* Custom tooltip styled to match design system */
function UWTooltip({ active, payload, label }) {
  if (!active || !payload?.length) return null
  return (
    <div style={{
      background: 'var(--ink)', color: '#fff', fontFamily: 'var(--mono)',
      fontSize: 11, padding: '4px 10px', borderRadius: 6,
      boxShadow: 'var(--sh-2)', whiteSpace: 'nowrap',
    }}>
      <div style={{ color: 'var(--ink-4)', marginBottom: 2 }}>{label}</div>
      {payload.map((p, i) => (
        <div key={i} style={{ color: '#fff' }}>
          {p.name ? `${p.name}: ` : ''}{typeof p.value === 'number' ? p.value.toLocaleString() : p.value}
        </div>
      ))}
    </div>
  )
}

/* Tiny sparkline — no axes, no tooltips */
export function SparkLine({ data, color = COLOR.brand, height = 34 }) {
  const chartData = (data || []).map((v, i) => ({ i, v }))
  return (
    <ResponsiveContainer width="100%" height={height}>
      <LineChart data={chartData} margin={{ top: 2, right: 2, bottom: 2, left: 2 }}>
        <Line
          type="monotoneX"
          dataKey="v"
          stroke={color}
          strokeWidth={2}
          dot={false}
          activeDot={{ r: 3, fill: color, stroke: '#fff', strokeWidth: 2 }}
        />
      </LineChart>
    </ResponsiveContainer>
  )
}

/* Full line chart with axes and tooltip */
export function UWLineChart({
  data, xKey = 'x', lines = [], height = 150,
  showGrid = true, showXAxis = true, showYAxis = true,
}) {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <LineChart data={data} margin={{ top: 8, right: 8, bottom: 0, left: showYAxis ? 0 : 0 }}>
        {showGrid && <CartesianGrid stroke={COLOR.line} strokeDasharray="2 4" vertical={false} />}
        {showXAxis && (
          <XAxis
            dataKey={xKey}
            tick={{ fontFamily: 'var(--mono)', fontSize: 10, fill: COLOR.ink4 }}
            tickLine={false}
            axisLine={false}
            interval="preserveStartEnd"
          />
        )}
        {showYAxis && (
          <YAxis
            tick={{ fontFamily: 'var(--mono)', fontSize: 10, fill: COLOR.ink4 }}
            tickLine={false}
            axisLine={false}
            width={36}
          />
        )}
        <Tooltip content={<UWTooltip />} />
        {lines.map((l) => (
          <Line
            key={l.key}
            type="monotoneX"
            dataKey={l.key}
            name={l.name}
            stroke={COLOR[l.color] || l.color || COLOR.brand}
            strokeWidth={l.dashed ? 1.6 : 2.4}
            strokeDasharray={l.dashed ? '4 4' : undefined}
            dot={false}
            activeDot={{ r: 4, fill: COLOR[l.color] || l.color || COLOR.brand, stroke: '#fff', strokeWidth: 2 }}
          />
        ))}
      </LineChart>
    </ResponsiveContainer>
  )
}

/* Dual-axis line chart (two Y axes) */
export function UWDualLineChart({
  data, xKey = 'x', leftLine, rightLine, height = 150,
  showGrid = true,
}) {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <LineChart data={data} margin={{ top: 8, right: 36, bottom: 0, left: 0 }}>
        {showGrid && <CartesianGrid stroke={COLOR.line} strokeDasharray="2 4" vertical={false} />}
        <XAxis
          dataKey={xKey}
          tick={{ fontFamily: 'var(--mono)', fontSize: 10, fill: COLOR.ink4 }}
          tickLine={false}
          axisLine={false}
          interval="preserveStartEnd"
        />
        <YAxis
          yAxisId="left"
          tick={{ fontFamily: 'var(--mono)', fontSize: 10, fill: COLOR.ink4 }}
          tickLine={false}
          axisLine={false}
          width={36}
        />
        <YAxis
          yAxisId="right"
          orientation="right"
          tick={{ fontFamily: 'var(--mono)', fontSize: 10, fill: COLOR.ink4 }}
          tickLine={false}
          axisLine={false}
          width={36}
        />
        <Tooltip content={<UWTooltip />} />
        <Line
          yAxisId="left"
          type="monotoneX"
          dataKey={leftLine.key}
          name={leftLine.name}
          stroke={COLOR[leftLine.color] || leftLine.color || COLOR.brand}
          strokeWidth={2.4}
          dot={false}
          activeDot={{ r: 4, stroke: '#fff', strokeWidth: 2 }}
        />
        <Line
          yAxisId="right"
          type="monotoneX"
          dataKey={rightLine.key}
          name={rightLine.name}
          stroke={COLOR[rightLine.color] || rightLine.color || COLOR.up}
          strokeWidth={2.4}
          strokeDasharray="4 3"
          dot={false}
          activeDot={{ r: 4, stroke: '#fff', strokeWidth: 2 }}
        />
      </LineChart>
    </ResponsiveContainer>
  )
}

/* Area chart */
export function UWAreaChart({
  data, xKey = 'x', areas = [], height = 150,
  showGrid = true, showXAxis = true, showYAxis = true,
  stacked = false,
}) {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <AreaChart data={data} margin={{ top: 8, right: 8, bottom: 0, left: 0 }}>
        {showGrid && <CartesianGrid stroke={COLOR.line} strokeDasharray="2 4" vertical={false} />}
        {showXAxis && (
          <XAxis
            dataKey={xKey}
            tick={{ fontFamily: 'var(--mono)', fontSize: 10, fill: COLOR.ink4 }}
            tickLine={false}
            axisLine={false}
            interval="preserveStartEnd"
          />
        )}
        {showYAxis && (
          <YAxis
            tick={{ fontFamily: 'var(--mono)', fontSize: 10, fill: COLOR.ink4 }}
            tickLine={false}
            axisLine={false}
            width={36}
          />
        )}
        <Tooltip content={<UWTooltip />} />
        {areas.map((a) => {
          const col = COLOR[a.color] || a.color || COLOR.brand
          return (
            <Area
              key={a.key}
              type="monotoneX"
              dataKey={a.key}
              name={a.name}
              stackId={stacked ? 'stack' : undefined}
              stroke={col}
              strokeWidth={2}
              fill={col}
              fillOpacity={stacked ? 0.6 : 0.12}
            />
          )
        })}
      </AreaChart>
    </ResponsiveContainer>
  )
}

/* Bar chart */
export function UWBarChart({
  data, xKey = 'x', bars = [], height = 150,
  showGrid = true, showXAxis = true, showYAxis = true,
  referenceLine = null, highlightThreshold = null,
  layout = 'horizontal',
}) {
  const isVertical = layout === 'vertical'

  return (
    <ResponsiveContainer width="100%" height={height}>
      <BarChart
        data={data}
        layout={isVertical ? 'vertical' : 'horizontal'}
        margin={{ top: 8, right: 8, bottom: 0, left: isVertical ? 0 : 0 }}
      >
        {showGrid && <CartesianGrid stroke={COLOR.line} strokeDasharray="2 4" vertical={!isVertical} horizontal={isVertical} />}
        {isVertical ? (
          <>
            <XAxis
              type="number"
              tick={{ fontFamily: 'var(--mono)', fontSize: 10, fill: COLOR.ink4 }}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              type="category"
              dataKey={xKey}
              tick={{ fontFamily: 'var(--mono)', fontSize: 10, fill: COLOR.ink4 }}
              tickLine={false}
              axisLine={false}
              width={100}
            />
          </>
        ) : (
          <>
            <XAxis
              dataKey={xKey}
              tick={{ fontFamily: 'var(--mono)', fontSize: 10, fill: COLOR.ink4 }}
              tickLine={false}
              axisLine={false}
              interval="preserveStartEnd"
            />
            {showYAxis && (
              <YAxis
                tick={{ fontFamily: 'var(--mono)', fontSize: 10, fill: COLOR.ink4 }}
                tickLine={false}
                axisLine={false}
                width={36}
              />
            )}
          </>
        )}
        <Tooltip content={<UWTooltip />} />
        {referenceLine != null && (
          <ReferenceLine
            y={referenceLine}
            stroke={COLOR.ink4}
            strokeDasharray="4 4"
            strokeWidth={1}
          />
        )}
        {bars.map((b) => {
          const col = COLOR[b.color] || b.color || COLOR.brand
          return (
            <Bar key={b.key} dataKey={b.key} name={b.name} radius={[3, 3, 0, 0]} maxBarSize={28}>
              {data.map((entry, idx) => {
                let fill = col
                if (highlightThreshold && entry[b.key] >= highlightThreshold) fill = COLOR.up
                else if (b.highlightMax && entry[b.key] === Math.max(...data.map(d => d[b.key]))) fill = col
                else fill = b.dimColor ? COLOR.ink4 : col
                return <Cell key={idx} fill={fill} opacity={0.85} />
              })}
            </Bar>
          )
        })}
      </BarChart>
    </ResponsiveContainer>
  )
}

/* Grouped bar chart */
export function UWGroupedBarChart({ data, xKey = 'x', bars = [], height = 150 }) {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <BarChart data={data} margin={{ top: 8, right: 8, bottom: 0, left: 0 }}>
        <CartesianGrid stroke={COLOR.line} strokeDasharray="2 4" vertical={false} />
        <XAxis
          dataKey={xKey}
          tick={{ fontFamily: 'var(--mono)', fontSize: 10, fill: COLOR.ink4 }}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          tick={{ fontFamily: 'var(--mono)', fontSize: 10, fill: COLOR.ink4 }}
          tickLine={false}
          axisLine={false}
          width={36}
        />
        <Tooltip content={<UWTooltip />} />
        <Legend
          wrapperStyle={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--ink-3)' }}
        />
        {bars.map((b) => (
          <Bar
            key={b.key}
            dataKey={b.key}
            name={b.name}
            fill={COLOR[b.color] || b.color || COLOR.brand}
            radius={[2, 2, 0, 0]}
            maxBarSize={16}
          />
        ))}
      </BarChart>
    </ResponsiveContainer>
  )
}

/* Donut / Pie chart */
export function UWDonutChart({ data, nameKey = 'name', valueKey = 'value', colors, height = 200 }) {
  const defaultColors = [COLOR.brand, COLOR.up, COLOR.down, COLOR.warn, '#7C3AED', '#0891B2']
  const cols = colors || defaultColors
  return (
    <ResponsiveContainer width="100%" height={height}>
      <PieChart>
        <Pie
          data={data}
          dataKey={valueKey}
          nameKey={nameKey}
          cx="50%"
          cy="50%"
          innerRadius="55%"
          outerRadius="80%"
          paddingAngle={2}
        >
          {data.map((_, idx) => (
            <Cell key={idx} fill={cols[idx % cols.length]} />
          ))}
        </Pie>
        <Tooltip content={<UWTooltip />} />
        <Legend
          wrapperStyle={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--ink-3)' }}
        />
      </PieChart>
    </ResponsiveContainer>
  )
}

/* Stacked bar chart */
export function UWStackedBarChart({ data, xKey = 'x', bars = [], height = 150, showXAxis = true }) {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <BarChart data={data} margin={{ top: 8, right: 8, bottom: 0, left: 0 }}>
        <CartesianGrid stroke={COLOR.line} strokeDasharray="2 4" vertical={false} />
        {showXAxis && (
          <XAxis
            dataKey={xKey}
            tick={{ fontFamily: 'var(--mono)', fontSize: 10, fill: COLOR.ink4 }}
            tickLine={false}
            axisLine={false}
          />
        )}
        <YAxis
          tick={{ fontFamily: 'var(--mono)', fontSize: 10, fill: COLOR.ink4 }}
          tickLine={false}
          axisLine={false}
          width={36}
        />
        <Tooltip content={<UWTooltip />} />
        <Legend wrapperStyle={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--ink-3)' }} />
        {bars.map((b) => (
          <Bar
            key={b.key}
            dataKey={b.key}
            name={b.name}
            stackId="stack"
            fill={COLOR[b.color] || b.color || COLOR.brand}
            maxBarSize={32}
          />
        ))}
      </BarChart>
    </ResponsiveContainer>
  )
}

export { COLOR }
