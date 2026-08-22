import React from 'react';

/** Decorative constellation SVG — echoes the hero particle network */
const ConstellationAccent: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    viewBox="0 0 320 240"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="constLine" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.5" />
        <stop offset="100%" stopColor="var(--secondary)" stopOpacity="0.35" />
      </linearGradient>
      <radialGradient id="constGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.35" />
        <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
      </radialGradient>
    </defs>

    <circle cx="160" cy="120" r="90" fill="url(#constGlow)" />

    {/* Edges */}
    <g stroke="url(#constLine)" strokeWidth="1.2">
      <line x1="48" y1="72" x2="120" y2="48" />
      <line x1="120" y1="48" x2="200" y2="64" />
      <line x1="200" y1="64" x2="272" y2="96" />
      <line x1="120" y1="48" x2="96" y2="130" />
      <line x1="96" y1="130" x2="160" y2="160" />
      <line x1="160" y1="160" x2="200" y2="64" />
      <line x1="160" y1="160" x2="240" y2="180" />
      <line x1="96" y1="130" x2="64" y2="200" />
      <line x1="200" y1="64" x2="240" y2="180" />
      <line x1="48" y1="72" x2="96" y2="130" />
    </g>

    {/* Nodes */}
    {[
      [48, 72],
      [120, 48],
      [200, 64],
      [272, 96],
      [96, 130],
      [160, 160],
      [240, 180],
      [64, 200],
    ].map(([cx, cy], i) => (
      <g key={i}>
        <circle cx={cx} cy={cy} r="8" fill="var(--primary)" fillOpacity="0.15" />
        <circle cx={cx} cy={cy} r="3.5" fill="var(--primary)" className="constellation-node" />
      </g>
    ))}
  </svg>
);

export default ConstellationAccent;
