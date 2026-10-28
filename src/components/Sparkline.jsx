import React from 'react';

/**
 * Small inline SVG Sparkline component. No external chart library.
 * Clean, lightweight, stroke matches --accent or custom.
 */
export default function Sparkline({
  data = [10, 20, 15, 25],
  width = 72,
  height = 24,
  strokeColor = 'var(--accent)',
  strokeWidth = 2,
  fill = false
}) {
  if (!data || data.length === 0) {
    return <div style={{ width, height, backgroundColor: 'var(--border-light)', borderRadius: 2 }} />;
  }

  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min === 0 ? 1 : max - min;
  const padding = 2;
  const drawWidth = width - padding * 2;
  const drawHeight = height - padding * 2;

  const points = data.map((val, idx) => {
    const x = padding + (idx / (data.length - 1)) * drawWidth;
    const y = padding + drawHeight - ((val - min) / range) * drawHeight;
    return `${x.toFixed(1)},${y.toFixed(1)}`;
  });

  const polylineStr = points.join(' ');
  const lastPoint = points[points.length - 1].split(',');

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      style={{ overflow: 'visible', display: 'inline-block', verticalAlign: 'middle' }}
      aria-hidden="true"
    >
      <polyline
        fill="none"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        points={polylineStr}
      />
      {/* End point dot */}
      <circle
        cx={parseFloat(lastPoint[0])}
        cy={parseFloat(lastPoint[1])}
        r={2.5}
        fill={strokeColor}
      />
    </svg>
  );
}
