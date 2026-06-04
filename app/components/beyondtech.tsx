'use client'

import { useScrollFade } from '../hooks/useScrollFade'

const musicTags = [
  'Guitar',
  'Music Ministry',
  'Gym',
  'Retro Gaming',
  'Faith-driven',
  'Lifelong Learning',
]

export default function BeyondTech() {
  const ref = useScrollFade()

  return (
    <section
      id="beyond"
      ref={ref}
      className="scroll-fade"
      style={{ padding: '6rem 2rem', maxWidth: 1100, margin: '0 auto' }}
    >
      <div className="section-label-wrap">
        <div
          className="font-mono"
          style={{
            fontSize: 10,
            letterSpacing: 3,
            color: 'var(--accent)',
            textTransform: 'uppercase',
            marginBottom: '1rem',
          }}
        >
          05 // beyond tech
        </div>
      </div>

      <div
        style={{
          background: 'var(--surface)',
          border: '1px solid var(--border)',
          padding: '3rem',
          borderRadius: 4,
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '4rem',
          alignItems: 'center',
        }}
      >
        <div>
          <h2
            style={{
              fontSize: '1.8rem',
              fontWeight: 800,
              letterSpacing: -0.5,
              marginBottom: '1rem',
              lineHeight: 1.2,
            }}
          >
            Engineer by day,
            <br />
            musician by heart.
          </h2>
          <p
            className="font-mono"
            style={{ fontSize: '0.9rem', lineHeight: 1.8, color: 'var(--text-secondary)', marginBottom: '1rem' }}
          >
            Music has always been part of who I am. Playing guitar isn&apos;t
            just a hobby — it&apos;s how I stay creative, stay patient, and
            stay human. The same discipline that goes into learning a new chord
            progression goes into learning a new framework.
          </p>
          <p
            className="font-mono"
            style={{ fontSize: '0.9rem', lineHeight: 1.8, color: 'var(--text-secondary)', marginBottom: '1.5rem' }}
          >
            Whether it&apos;s worship music or just playing for myself, the
            guitar reminds me that mastery takes time, and the process itself
            is worth it.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {musicTags.map((label) => (
              <span
                key={label}
                className="font-mono"
                style={{
                  fontSize: 10,
                  color: '#a78bfa',
                  background: 'rgba(124,58,237,0.1)',
                  border: '1px solid rgba(124,58,237,0.2)',
                  padding: '5px 12px',
                  borderRadius: 2,
                }}
              >
                {label}
              </span>
            ))}
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1.5rem',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: 4, height: 48 }}>
            {Array.from({ length: 7 }).map((_, i) => (
              <div key={i} className="music-bar" />
            ))}
          </div>

          <svg
            width="80"
            height="140"
            viewBox="0 0 80 140"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ opacity: 0.7 }}
            aria-hidden="true"
          >
            <line x1="40" y1="0" x2="40" y2="45" stroke="var(--accent)" strokeWidth="2" />
            <rect x="34" y="5" width="12" height="8" rx="2" fill="none" stroke="var(--accent)" strokeWidth="1.5" />
            <line x1="36" y1="9" x2="36" y2="15" stroke="var(--muted)" strokeWidth="0.8" />
            <line x1="40" y1="9" x2="40" y2="15" stroke="var(--muted)" strokeWidth="0.8" />
            <line x1="44" y1="9" x2="44" y2="15" stroke="var(--muted)" strokeWidth="0.8" />
            <line x1="30" y1="45" x2="50" y2="45" stroke="var(--accent)" strokeWidth="1.5" />
            <ellipse cx="40" cy="95" rx="22" ry="30" fill="none" stroke="var(--accent)" strokeWidth="1.5" />
            <ellipse cx="40" cy="95" rx="14" ry="20" fill="none" stroke="var(--border)" strokeWidth="1" />
            <circle cx="40" cy="95" r="5" fill="none" stroke="var(--muted)" strokeWidth="1" />
            <line x1="36" y1="55" x2="36" y2="125" stroke="var(--muted)" strokeWidth="0.6" opacity="0.6" />
            <line x1="38.5" y1="53" x2="38.5" y2="127" stroke="var(--muted)" strokeWidth="0.6" opacity="0.6" />
            <line x1="41.5" y1="53" x2="41.5" y2="127" stroke="var(--muted)" strokeWidth="0.6" opacity="0.6" />
            <line x1="44" y1="55" x2="44" y2="125" stroke="var(--muted)" strokeWidth="0.6" opacity="0.6" />
          </svg>

          <div
            className="font-mono"
            style={{
              fontSize: 10,
              color: 'var(--muted)',
              letterSpacing: 2,
              textAlign: 'center',
              lineHeight: 1.8,
            }}
          >
            PLAYING SINCE
            <br />
            <span style={{ color: 'var(--accent)' }}>COLLEGE</span>
          </div>
        </div>
      </div>
    </section>
  )
}
