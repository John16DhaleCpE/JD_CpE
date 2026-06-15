'use client'

import { useScrollFade } from '../hooks/useScrollFade'
import InteractiveGuitar from './InteractiveGuitar'

const musicTags = [
  'Guitar',
  'Music Ministry',
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
            justifySelf: 'center',
            width: '100%',
            maxWidth: 200,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: 4, height: 48 }}>
            {Array.from({ length: 7 }).map((_, i) => (
              <div key={i} className="music-bar" />
            ))}
          </div>

          <InteractiveGuitar />

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
