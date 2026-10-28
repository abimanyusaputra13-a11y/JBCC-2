import React from 'react';

/**
 * SegmentedBar component:
 * Displays a series of segments where `filled` segments are colored in --primary or --accent,
 * and unfilled ones are neutral border / background.
 */
export default function SegmentedBar({
  total = 3,
  filled = 2,
  size = 'md', // 'sm' | 'md'
  color = 'var(--primary)',
  emptyColor = 'var(--border)'
}) {
  const isSm = size === 'sm';
  const height = isSm ? 5 : 7;
  const segmentWidth = isSm ? 8 : 14;
  const gap = isSm ? 2.5 : 3;

  const segments = Array.from({ length: total }, (_, i) => i < filled);

  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: `${gap}px`,
        verticalAlign: 'middle',
        flexShrink: 0
      }}
      role="img"
      aria-label={`${filled} dari ${total} terisi`}
    >
      {segments.map((isFilled, idx) => (
        <span
          key={idx}
          style={{
            display: 'inline-block',
            width: `${segmentWidth}px`,
            height: `${height}px`,
            borderRadius: '2px',
            backgroundColor: isFilled ? color : emptyColor,
            transition: 'background-color 0.2s ease',
            flexShrink: 0
          }}
        />
      ))}
    </div>
  );
}
