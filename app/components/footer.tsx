export default function Footer() {
  return (
    <footer
      className="font-mono"
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
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '3rem',
          flexWrap: 'wrap',
        }}
      >
        {/* Left: minimal site nav + copyright */}
        <div style={{ flex: 1, minWidth: 200 }}>
          <div
            style={{
              fontSize: 10,
              letterSpacing: 3,
              marginBottom: '0.8rem',
              color: 'var(--muted)',
              opacity: 0.5,
            }}
          >
            SITE
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem 1.5rem' }}>
            {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
              <div
                key={item}
                style={{
                  fontSize: 12,
                  color: 'var(--muted)',
                  cursor: 'pointer',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--secondary)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--muted)'
                }}
              >
                {item}
              </div>
            ))}
          </div>
          <div
            style={{
              marginTop: '1.5rem',
              fontSize: 9,
              letterSpacing: 2,
              color: 'var(--muted)',
              opacity: 0.4,
            }}
          >
            {'// system.status: building...'}
          </div>
        </div>

        {/* Right: big logo */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 4,
            lineHeight: 1,
          }}
        >
          <span
            className="font-mono"
            style={{
              fontSize: 48,
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
              fontSize: 28,
              fontWeight: 500,
              letterSpacing: 2,
              color: 'var(--muted)',
              opacity: 0.12,
            }}
          >
            CpE
          </span>
        </div>
      </div>

      <div
        style={{
          maxWidth: 1100,
          margin: '2rem auto 0',
          borderTop: '1px solid var(--border)',
          paddingTop: '1rem',
          fontSize: 9,
          letterSpacing: 2,
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem',
          color: 'var(--muted)',
          opacity: 0.6,
        }}
      >
        <div>© 2026 All rights reserved</div>
        <div>
          Built with <span style={{ color: 'var(--accent)', opacity: 1 }}>discipline</span> · Teresa, Rizal
        </div>
      </div>
    </footer>
  )
}
