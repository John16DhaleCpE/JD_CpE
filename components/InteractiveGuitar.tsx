'use client'

export default function InteractiveGuitar() {
  const cx = 50
  const nutY = 40
  const bodyY = 90
  const bridgeY = 178

  const baseX = [42.8, 45.6, 48.4, 51.6, 54.4, 57.2]

  return (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      <svg
        viewBox="0 0 100 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: '100%', maxWidth: 140, height: 'auto' }}
        aria-hidden="true"
      >
        {/* ── HEADSTOCK ── */}
        <path
          d={`M${cx - 11} 12 L${cx - 11} ${nutY - 1} L${cx + 11} ${nutY - 1} L${cx + 11} 12 Q${cx - 11} 4, ${cx - 11} 12 Z`}
          stroke="var(--accent)" strokeWidth="1.5" strokeLinejoin="round"
        />
        {[18, 25, 32].map((y) => (
          <g key={y}>
            <line x1={cx - 11} y1={y} x2={cx - 16} y2={y} stroke="var(--accent)" strokeWidth="1" strokeLinecap="round" />
            <circle cx={cx - 17.5} cy={y} r="2" stroke="var(--accent)" strokeWidth="1" />
            <line x1={cx + 11} y1={y} x2={cx + 16} y2={y} stroke="var(--accent)" strokeWidth="1" strokeLinecap="round" />
            <circle cx={cx + 17.5} cy={y} r="2" stroke="var(--accent)" strokeWidth="1" />
          </g>
        ))}

        {/* ── NUT ── */}
        <line x1={cx - 12} y1={nutY} x2={cx + 12} y2={nutY} stroke="var(--accent)" strokeWidth="1.5" />

        {/* ── NECK ── */}
        <rect x={cx - 9} y={nutY + 1} width={18} height={bodyY - nutY - 1} rx="1" stroke="var(--accent)" strokeWidth="1.2" />
        {[56, 64, 72, 80].map((y) => (
          <line key={y} x1={cx - 9} y1={y} x2={cx + 9} y2={y} stroke="var(--muted)" strokeWidth="0.5" opacity="0.35" />
        ))}
        <circle cx={cx} cy={68} r="1" fill="var(--muted)" opacity="0.3" />
        <circle cx={cx} cy={84} r="1" fill="var(--muted)" opacity="0.3" />

        {/* ── BODY ── */}
        <path
          d={`
            M${cx - 11} ${bodyY}
            C${cx - 11} ${bodyY}, ${cx - 28} ${bodyY + 2}, ${cx - 28} ${bodyY + 18}
            C${cx - 28} ${bodyY + 28}, ${cx - 18} ${bodyY + 34}, ${cx - 14} ${bodyY + 36}
            C${cx - 30} ${bodyY + 40}, ${cx - 35} ${bodyY + 62}, ${cx - 35} ${bodyY + 78}
            C${cx - 35} ${bodyY + 90}, ${cx - 22} ${bodyY + 98}, ${cx} ${bodyY + 98}
            C${cx + 22} ${bodyY + 98}, ${cx + 35} ${bodyY + 90}, ${cx + 35} ${bodyY + 78}
            C${cx + 35} ${bodyY + 62}, ${cx + 30} ${bodyY + 40}, ${cx + 14} ${bodyY + 36}
            C${cx + 18} ${bodyY + 34}, ${cx + 28} ${bodyY + 28}, ${cx + 28} ${bodyY + 18}
            C${cx + 28} ${bodyY + 2}, ${cx + 11} ${bodyY}, ${cx + 11} ${bodyY}
          `}
          stroke="var(--accent)" strokeWidth="1.5" strokeLinejoin="round"
        />
        <circle cx={cx} cy={bodyY + 60} r="11" stroke="var(--accent)" strokeWidth="0.8" opacity="0.4" />
        <circle cx={cx} cy={bodyY + 60} r="8.5" stroke="var(--accent)" strokeWidth="0.4" opacity="0.2" />
        <rect x={cx - 16} y={bridgeY - 3} width={32} height={6} rx="2" stroke="var(--accent)" strokeWidth="1" opacity="0.6" />
        <line x1={cx - 12} y1={bridgeY - 1} x2={cx + 12} y2={bridgeY - 1} stroke="var(--accent)" strokeWidth="1.2" strokeLinecap="round" />

        {/* ── STRINGS ── */}
        {baseX.map((sx, i) => {
          const thickness = 1.3 - i * 0.18
          const baseOpacity = 0.5 - i * 0.05

          return (
            <line
              key={i}
              x1={sx}
              y1={nutY}
              x2={sx}
              y2={bridgeY}
              stroke="var(--accent)"
              strokeWidth={thickness}
              opacity={baseOpacity}
            />
          )
        })}
      </svg>
    </div>
  )
}
