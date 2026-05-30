import { useState, useMemo } from 'react'
import { signals } from '../../data/signals'
import { LOB_CONFIG } from '../../data/lobData'
import { PriorityBadge, ActionBadge, Icon } from '../../components/ui'

const PRIORITY_ORDER = { HIGH: 0, MEDIUM: 1, LOW: 2, INFO: 3 }
const DIRECTION_ARROW = { up: '▲', down: '▼', watch: '◆' }
const DIRECTION_COLOR = { up: 'var(--up)', down: 'var(--down)', watch: 'var(--warn)' }

const ALL_REGIONS = [...new Set(signals.flatMap(s => s.regions))].sort()

function ImpactRow({ impact }) {
  return (
    <div style={{
      display: 'grid', gridTemplateColumns: '90px 90px 60px 1fr',
      gap: 8, alignItems: 'center', padding: '5px 0',
      borderBottom: '1px solid var(--line)',
    }}>
      <span style={{ fontWeight: 600, fontSize: 12 }}>{impact.lob}</span>
      <span style={{ fontSize: 11, color: 'var(--ink-3)', textTransform: 'capitalize' }}>{impact.type}</span>
      <span style={{
        fontSize: 12, fontWeight: 700,
        color: DIRECTION_COLOR[impact.direction],
      }}>
        {DIRECTION_ARROW[impact.direction]} {impact.direction}
      </span>
      <span style={{ fontSize: 12, color: 'var(--ink-2)' }}>{impact.detail}</span>
    </div>
  )
}

function CommentaryPanel({ commentary }) {
  return (
    <div style={{
      marginTop: 12, padding: 16,
      background: 'var(--bg)', borderRadius: 8,
      border: '1px solid var(--line)',
    }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 12 }}>
        <div>
          <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--ink-4)', marginBottom: 4 }}>
            What Happened
          </div>
          <p style={{ fontSize: 13, color: 'var(--ink-2)', margin: 0, lineHeight: 1.55 }}>
            {commentary.whatHappened}
          </p>
        </div>
        <div>
          <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--ink-4)', marginBottom: 4 }}>
            Why It Matters
          </div>
          <p style={{ fontSize: 13, color: 'var(--ink-2)', margin: 0, lineHeight: 1.55 }}>
            {commentary.whyItMatters}
          </p>
        </div>
      </div>

      {commentary.impacts?.length > 0 && (
        <div style={{ marginBottom: 12 }}>
          <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--ink-4)', marginBottom: 6 }}>
            LOB Impacts
          </div>
          <div>
            <div style={{
              display: 'grid', gridTemplateColumns: '90px 90px 60px 1fr',
              gap: 8, padding: '4px 0', borderBottom: '1px solid var(--line)',
            }}>
              {['LOB', 'Type', 'Direction', 'Detail'].map(h => (
                <span key={h} style={{ fontSize: 10, fontWeight: 600, color: 'var(--ink-4)', textTransform: 'uppercase', letterSpacing: '.06em' }}>{h}</span>
              ))}
            </div>
            {commentary.impacts.map((imp, i) => <ImpactRow key={i} impact={imp} />)}
          </div>
        </div>
      )}

      <div style={{
        padding: '10px 14px', borderRadius: 6,
        background: 'color-mix(in srgb, var(--warn) 10%, transparent)',
        border: '1px solid color-mix(in srgb, var(--warn) 30%, transparent)',
      }}>
        <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--warn)', marginBottom: 3 }}>
          Watch For
        </div>
        <p style={{ fontSize: 13, color: 'var(--ink-1)', margin: 0, lineHeight: 1.5 }}>
          {commentary.watchFor}
        </p>
      </div>
    </div>
  )
}

const PRIORITY_BORDER = { HIGH: '#C0362F', MEDIUM: '#B7791F', LOW: '#2A4DDB', INFO: '#1C7A55' }

function SignalCard({ signal, expanded, onToggleExpand, read, onMarkRead }) {
  const borderColor = PRIORITY_BORDER[signal.priority] || 'var(--line)'
  return (
    <div
      style={{
        background: 'var(--surface)',
        border: '1px solid var(--line)',
        borderLeft: `4px solid ${borderColor}`,
        borderRadius: 8,
        padding: '14px 16px',
        opacity: read ? 0.55 : 1,
        transition: 'opacity .15s',
      }}
    >
      {/* Header row */}
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 8 }}>
        <PriorityBadge level={signal.priority} />
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{
            fontFamily: 'var(--serif)', fontSize: 15, fontWeight: 600,
            lineHeight: 1.35, color: 'var(--ink-1)', marginBottom: 4,
          }}>
            {signal.headline}
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, alignItems: 'center' }}>
            <span style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--ink-4)' }}>
              {signal.source} · {signal.time}
            </span>
            {signal.lobs.map(l => {
              const cfg = LOB_CONFIG[l]
              return cfg ? (
                <span key={l} style={{
                  fontSize: 10, fontWeight: 600, padding: '1px 6px',
                  borderRadius: 4, background: 'var(--bg)',
                  border: '1px solid var(--line)', color: 'var(--ink-3)',
                }}>
                  {cfg.label}
                </span>
              ) : null
            })}
            {signal.regions.map(r => (
              <span key={r} style={{
                fontSize: 10, padding: '1px 6px',
                borderRadius: 4, background: 'var(--bg)',
                border: '1px solid var(--line)', color: 'var(--ink-4)',
              }}>
                {r}
              </span>
            ))}
          </div>
        </div>
        <ActionBadge action={signal.commentary.action} />
      </div>

      {/* Summary */}
      <p style={{ fontSize: 13, color: 'var(--ink-2)', margin: '0 0 10px', lineHeight: 1.55 }}>
        {signal.summary}
      </p>

      {/* Actions row */}
      <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
        <button
          className="btn btn-sm"
          style={{ gap: 5 }}
          onClick={onToggleExpand}
        >
          <Icon name={expanded ? 'alert' : 'report'} size={12} sw={2} />
          {expanded ? 'Hide Commentary' : 'View AI Commentary'}
        </button>
        {!read && (
          <button
            className="btn btn-sm"
            style={{ color: 'var(--ink-4)' }}
            onClick={onMarkRead}
          >
            Mark read
          </button>
        )}
        {read && (
          <span style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--ink-4)' }}>
            ✓ Read
          </span>
        )}
      </div>

      {/* Expanded commentary */}
      {expanded && <CommentaryPanel commentary={signal.commentary} />}
    </div>
  )
}

export default function NewsPage({ selectedLobs }) {
  const [priorityFilter, setPriorityFilter] = useState('ALL')
  const [lobFilter, setLobFilter]           = useState('ALL')
  const [regionFilter, setRegionFilter]     = useState('ALL')
  const [expandedIds, setExpandedIds]       = useState(new Set())
  const [readIds, setReadIds]               = useState(new Set())

  const filtered = useMemo(() => {
    return signals
      .filter(s => priorityFilter === 'ALL' || s.priority === priorityFilter)
      .filter(s => lobFilter === 'ALL' || s.lobs.includes(lobFilter))
      .filter(s => regionFilter === 'ALL' || s.regions.includes(regionFilter))
      .sort((a, b) => PRIORITY_ORDER[a.priority] - PRIORITY_ORDER[b.priority])
  }, [priorityFilter, lobFilter, regionFilter])

  function toggleExpand(id) {
    setExpandedIds(prev => {
      const next = new Set(prev)
      next.has(id) ? next.delete(id) : next.add(id)
      return next
    })
  }

  function markRead(id) {
    setReadIds(prev => new Set([...prev, id]))
  }

  const PRIORITIES = ['ALL', 'HIGH', 'MEDIUM', 'LOW', 'INFO']
  const lobsForFilter = ['ALL', ...selectedLobs]

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>

      {/* Filter bar */}
      <div style={{
        background: 'var(--surface)',
        border: '1px solid var(--line)',
        borderRadius: 10, padding: '14px 16px',
        display: 'flex', flexDirection: 'column', gap: 12,
      }}>
        {/* Priority row */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
          <span style={{ fontSize: 11, fontWeight: 600, color: 'var(--ink-4)', textTransform: 'uppercase', letterSpacing: '.06em', marginRight: 4 }}>
            Priority
          </span>
          {PRIORITIES.map(p => (
            <button
              key={p}
              onClick={() => setPriorityFilter(p)}
              style={{
                padding: '3px 10px', borderRadius: 20, fontSize: 11, fontWeight: 600,
                border: `1px solid ${priorityFilter === p ? 'var(--brand)' : 'var(--line)'}`,
                background: priorityFilter === p ? 'var(--brand)' : 'transparent',
                color: priorityFilter === p ? '#fff' : 'var(--ink-3)',
                cursor: 'pointer', transition: 'all .12s',
              }}
            >
              {p === 'ALL' ? 'All' : p.charAt(0) + p.slice(1).toLowerCase()}
            </button>
          ))}
        </div>

        {/* LOB + Region row */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
            <span style={{ fontSize: 11, fontWeight: 600, color: 'var(--ink-4)', textTransform: 'uppercase', letterSpacing: '.06em', marginRight: 4 }}>
              LOB
            </span>
            {lobsForFilter.map(l => {
              const cfg = LOB_CONFIG[l]
              const label = l === 'ALL' ? 'All Lines' : cfg?.label ?? l
              return (
                <button
                  key={l}
                  onClick={() => setLobFilter(l)}
                  style={{
                    padding: '3px 10px', borderRadius: 20, fontSize: 11, fontWeight: 600,
                    border: `1px solid ${lobFilter === l ? 'var(--brand)' : 'var(--line)'}`,
                    background: lobFilter === l ? 'color-mix(in srgb, var(--brand) 12%, transparent)' : 'transparent',
                    color: lobFilter === l ? 'var(--brand)' : 'var(--ink-3)',
                    cursor: 'pointer', transition: 'all .12s',
                  }}
                >
                  {label}
                </button>
              )
            })}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginLeft: 'auto' }}>
            <span style={{ fontSize: 11, fontWeight: 600, color: 'var(--ink-4)', textTransform: 'uppercase', letterSpacing: '.06em' }}>
              Region
            </span>
            <select
              value={regionFilter}
              onChange={e => setRegionFilter(e.target.value)}
              style={{
                fontFamily: 'var(--sans)', fontSize: 12, padding: '4px 10px',
                borderRadius: 6, border: '1px solid var(--line)',
                background: 'var(--surface)', color: 'var(--ink-2)', cursor: 'pointer',
              }}
            >
              <option value="ALL">All Regions</option>
              {ALL_REGIONS.map(r => <option key={r} value={r}>{r}</option>)}
            </select>
          </div>
        </div>
      </div>

      {/* Signal count */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <span style={{ fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--ink-4)' }}>
          Showing {filtered.length} of {signals.length} signals
        </span>
        {(priorityFilter !== 'ALL' || lobFilter !== 'ALL' || regionFilter !== 'ALL') && (
          <button
            onClick={() => { setPriorityFilter('ALL'); setLobFilter('ALL'); setRegionFilter('ALL') }}
            style={{
              fontSize: 11, color: 'var(--brand)', background: 'none',
              border: 'none', cursor: 'pointer', padding: 0, fontFamily: 'var(--sans)',
            }}
          >
            Clear filters
          </button>
        )}
      </div>

      {/* Signal cards */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {filtered.length === 0 ? (
          <div style={{
            textAlign: 'center', padding: '48px 0',
            color: 'var(--ink-4)', fontSize: 14,
          }}>
            No signals match your filters.
          </div>
        ) : (
          filtered.map(s => (
            <SignalCard
              key={s.id}
              signal={s}
              expanded={expandedIds.has(s.id)}
              onToggleExpand={() => toggleExpand(s.id)}
              read={readIds.has(s.id)}
              onMarkRead={() => markRead(s.id)}
            />
          ))
        )}
      </div>
    </div>
  )
}
