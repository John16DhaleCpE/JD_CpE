export default function Footer() {
  return (
    <footer
      style={{
        borderTop: '1px solid var(--border)',
        padding: '3rem 2rem 2rem',
        color: 'var(--text-secondary)',
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: '0 auto',
        }}
      >
        {/* Top: Logo left-aligned + small tagline right */}
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
            marginBottom: '2rem',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 5, lineHeight: 1 }}>
            <span
              className="font-mono"
              style={{
                fontSize: 58,
                fontWeight: 800,
                letterSpacing: 3,
                color: 'var(--muted)',
                opacity: 0.15,
              }}
            >
              JD
            </span>
            <span
              className="font-mono"
              style={{
                fontSize: 34,
                fontWeight: 500,
                letterSpacing: 2,
                color: 'var(--muted)',
                opacity: 0.12,
              }}
            >
              CpE
            </span>
          </div>
          <div
            className="font-mono"
            style={{
              fontSize: 9,
              letterSpacing: 2,
              color: 'var(--muted)',
              opacity: 0.35,
              textTransform: 'uppercase',
            }}
          >
            {'// systems engineer · web developer'}
          </div>
        </div>

        {/* Gradient divider */}
        <div
          style={{
            height: 1,
            background:
              'linear-gradient(90deg, var(--accent-border) 0%, var(--border) 40%, transparent 100%)',
            marginBottom: '1.5rem',
          }}
        />

        {/* Bottom: copyright left, built-with right */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
          }}
        >
          <div
            className="font-mono"
            style={{
              fontSize: 10,
              letterSpacing: 2,
              color: 'var(--muted)',
              opacity: 0.7,
            }}
          >
            © 2026 ~ John Dhale Peralta
          </div>
          <div
            className="font-mono"
            style={{
              fontSize: 10,
              letterSpacing: 2,
              color: 'var(--muted)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
            }}
          >
            <span style={{ opacity: 0.5 }}>Built with</span>
            <span
              style={{
                color: 'var(--accent)',
                fontWeight: 700,
                opacity: 0.7,
                textShadow: '0 0 8px var(--accent-dim)',
              }}
            >
              discipline
            </span>
            <span style={{ opacity: 0.3, margin: '0 0.15rem' }}>·</span>
            <span style={{ opacity: 0.45 }}>Teresa, Rizal</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
