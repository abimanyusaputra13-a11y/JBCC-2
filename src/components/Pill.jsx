import React from 'react';

/**
 * Outlined small-caps status pill component.
 * Uses quiet colors with a subtle status dot or border.
 * Variants:
 * - neutral (default)
 * - success (e.g. Tersedia, Terbuka)
 * - warning (e.g. Menipis, Mulai ramai)
 * - danger (e.g. Habis, Jenuh)
 * - primary (e.g. Cocok untuk Anda)
 */
export default function Pill({
  label,
  variant = 'neutral',
  dot = false,
  size = 'md',
  className = ''
}) {
  const getColors = () => {
    switch (variant) {
      case 'success':
        return {
          textColor: 'var(--success)',
          borderColor: 'color-mix(in srgb, var(--success) 35%, white)',
          bgColor: 'color-mix(in srgb, var(--success) 6%, white)',
          dotColor: 'var(--success)'
        };
      case 'warning':
        return {
          textColor: 'var(--warning)',
          borderColor: 'color-mix(in srgb, var(--warning) 35%, white)',
          bgColor: 'color-mix(in srgb, var(--warning) 6%, white)',
          dotColor: 'var(--warning)'
        };
      case 'danger':
        return {
          textColor: 'var(--danger)',
          borderColor: 'color-mix(in srgb, var(--danger) 35%, white)',
          bgColor: 'color-mix(in srgb, var(--danger) 6%, white)',
          dotColor: 'var(--danger)'
        };
      case 'primary':
        return {
          textColor: 'var(--primary)',
          borderColor: 'color-mix(in srgb, var(--primary) 30%, white)',
          bgColor: 'color-mix(in srgb, var(--primary) 6%, white)',
          dotColor: 'var(--primary)'
        };
      case 'neutral':
      default:
        return {
          textColor: 'var(--text-secondary)',
          borderColor: 'var(--border)',
          bgColor: 'var(--surface)',
          dotColor: 'var(--text-muted)'
        };
    }
  };

  const colors = getColors();
  const isSm = size === 'sm';

  return (
    <span
      className={`pill-badge ${className}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '5px',
        padding: isSm ? '1px 6px' : '2px 8px',
        fontSize: '11px',
        fontWeight: 600,
        textTransform: 'uppercase',
        letterSpacing: '0.04em',
        borderRadius: 'var(--radius-pill)',
        color: colors.textColor,
        border: `1px solid ${colors.borderColor}`,
        backgroundColor: colors.bgColor,
        lineHeight: 1.4,
        whiteSpace: 'nowrap'
      }}
    >
      {dot && (
        <span
          style={{
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            backgroundColor: colors.dotColor,
            flexShrink: 0
          }}
        />
      )}
      {label}
    </span>
  );
}
