'use client'

import { useScrollFade } from '../hooks/useScrollFade'

const highlights = [
  { label: '// status', value: 'CpE Graduate · Open to Opportunities' },
  { label: '// focus', value: 'Web Development · AI-Assisted Workflows' },
  { label: '// approach', value: 'Project-based learner · Self-taught' },
  { label: '// values', value: 'Perseverance · Responsibility · Faith' },
  { label: '// hobbies', value: 'Guitar · Gym · Old-school gaming' },
]

export default function About() {
  const ref = useScrollFade()

  return (
    <section
      id="about"
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
          01 // about
        </div>
      </div>

      <h2
        style={{
          fontSize: 'clamp(2rem, 4vw, 3rem)',
          fontWeight: 800,
          letterSpacing: -1,
          marginBottom: '3rem',
          lineHeight: 1.1,
        }}
      >
        A builder with an
        <br />
        <span style={{ color: 'var(--accent)' }}>engineer&apos;s mind.</span>
      </h2>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '4rem',
          alignItems: 'start',
        }}
      >
        <div
          className="font-mono"
          style={{ fontSize: '1rem', lineHeight: 1.9, color: 'var(--text-secondary)' }}
        >
          <p style={{ marginBottom: '1.2rem' }}>
            I&apos;m a Computer Engineering graduate who grew up tinkering with
            circuits before discovering a love for writing{' '}
            <span style={{ color: 'var(--accent)', fontWeight: 600 }}>clean code</span>. Today,
            I&apos;m channeling that same{' '}
            <span style={{ color: 'var(--secondary)', fontWeight: 600 }}>engineering mindset</span> into web
            development — learning systematically, building real things, and
            pushing through the hard parts.
          </p>
          <p style={{ marginBottom: '1.2rem' }}>
            My background gives me an edge: I understand{' '}
            <span style={{ color: 'var(--accent)', fontWeight: 600 }}>systems from the ground
            up</span>, from microcontrollers to modern JavaScript frameworks. I&apos;m
            currently deepening my skills in{' '}
            <span style={{ color: 'var(--secondary)', fontWeight: 600 }}>Next.js, TypeScript</span>, and full-stack
            development.
          </p>
          <p>
            Outside the screen, you&apos;ll find me with a{' '}
            <span style={{ color: 'var(--accent)', fontWeight: 600 }}>guitar</span> in hand,
            hitting the gym, or replaying classic games. I believe{' '}
            <span style={{ color: 'var(--secondary)', fontWeight: 600 }}>creativity
            fuels</span> better code.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {highlights.map(({ label, value }, i) => (
            <div
              key={label}
              className="card-hover"
              style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderLeft: `3px solid ${i % 2 === 0 ? 'var(--accent)' : 'var(--secondary)'}`,
                padding: '1rem 1.25rem',
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 12,
                lineHeight: 1.8,
                borderRadius: '0 4px 4px 0',
              }}
            >
              <span
                style={{
                  color: i % 2 === 0 ? 'var(--accent)' : 'var(--secondary)',
                  display: 'block',
                  marginBottom: 4,
                  fontSize: 10,
                  letterSpacing: 2,
                }}
              >
                {label}
              </span>
              <span style={{ color: 'var(--text)' }}>{value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
