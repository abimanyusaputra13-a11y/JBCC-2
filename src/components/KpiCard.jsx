import React from 'react';
import Sparkline from './Sparkline';
import { ArrowUpRight, ArrowDownRight, Minus } from 'lucide-react';

/**
 * KPI Card Component
 * Structure:
 * - Upper label
 * - Large number
 * - Small delta with badge
 * - Minimal sparkline on the right
 */
export default function KpiCard({
  label,
  value,
  delta,
  deltaType = 'positive', // 'positive' | 'negative' | 'neutral'
  periodLabel = 'vs 4 minggu lalu',
  sparklineData = [10, 20, 15, 25]
}) {
  const isPositive = deltaType === 'positive';
  const isNegative = deltaType === 'negative';

  const deltaColor = isPositive ? 'var(--success)' : isNegative ? 'var(--danger)' : 'var(--text-muted)';
  const deltaBg = isPositive ? 'var(--success-bg)' : isNegative ? 'var(--danger-bg)' : 'var(--tint-hover)';

  return (
    <div
      style={{
        flex: 1,
        backgroundColor: 'var(--surface)',
        border: '1px solid var(--border)',
        borderRadius: 'var(--radius-md)',
        padding: '16px 20px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        minWidth: '220px',
        transition: 'border-color 0.15s ease'
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <span className="label-upper">{label}</span>
        <Sparkline data={sparklineData} width={64} height={22} strokeColor="var(--accent)" />
      </div>

      <div style={{ marginTop: '12px', display: 'flex', alignItems: 'baseline', gap: '10px' }}>
        <span
          style={{
            fontSize: '26px',
            fontWeight: 700,
            color: 'var(--navy)',
            lineHeight: 1.1,
            letterSpacing: '-0.02em'
          }}
        >
          {value}
        </span>
      </div>

      <div style={{ marginTop: '8px', display: 'flex', alignItems: 'center', gap: '6px' }}>
        <span
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '2px',
            fontSize: '11px',
            fontWeight: 600,
            color: deltaColor,
            backgroundColor: deltaBg,
            padding: '2px 6px',
            borderRadius: 'var(--radius-pill)'
          }}
        >
          {isPositive && <ArrowUpRight size={12} />}
          {isNegative && <ArrowDownRight size={12} />}
          {!isPositive && !isNegative && <Minus size={12} />}
          {delta}
        </span>
        <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>
          {periodLabel}
        </span>
      </div>
    </div>
  );
}
