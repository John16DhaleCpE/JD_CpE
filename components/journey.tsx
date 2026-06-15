'use client'

import { useScrollFade } from '../hooks/useScrollFade'
import { useMediaQuery } from '../hooks/useMediaQuery'

const timelineItems = [
  {
    date: 'FOUNDATION',
    title: 'Computer Engineering Degree',
    desc: 'Built a strong foundation in hardware, digital systems, embedded programming, and engineering fundamentals. Developed a systems-thinking mindset that shapes how I approach every technical problem.',
    active: false,
  },
  {
    date: 'EXPLORATION',
    title: 'Discovering Web Development',
    desc: 'Started self-studying HTML, CSS, and JavaScript. Realized the same problem-solving skills from CpE apply beautifully to building for the web. Began understanding the full stack from the ground up.',
    active: false,
  },
  {
    date: 'ACCELERATION',
    title: 'Modern Stack & Tooling',
    desc: 'Diving deep into TypeScript, React, and Next.js. Learning real developer workflows — Git, GitHub, WSL, Linux terminal. Integrating AI-assisted development tools to sharpen productivity and learning speed.',
    active: false,
  },
  {
    date: 'NOW →',
    title: 'Building & Shipping',
    desc: 'Turning skills into real products. Building a portfolio of meaningful projects that combine my hardware engineering background with modern web development — aiming for roles where both worlds intersect.',
    active: true,
  },
]

export default function Journey() {
  const ref = useScrollFade()
  const isMobile = useMediaQuery('(max-width: 768px)')

  return (
    <section
      id="journey"
      ref={ref}
      className="scroll-fade"
      style={{ padding: isMobile ? '4rem 1.5rem' : '6rem 2rem', maxWidth: 1100, margin: '0 auto', position: 'relative' }}
    >
      {/* Scattered code textures */}
      <span className="code-texture" style={{ top: 50, right: 30, color: 'var(--accent)', opacity: 0.04, transform: 'rotate(-1deg)' }}>
        {'const journey = steps.map(s => ({ ...s, learned: true }))'}
      </span>
      <span className="code-texture" style={{ bottom: 40, left: 20, color: 'var(--secondary)', opacity: 0.03, transform: 'rotate(1.5deg)' }}>
        {'while (!shipped) { keepBuilding(); keepLearning(); }'}
      </span>

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
          04 // learning journey
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
        How I got
        <br />
        <span style={{ color: 'var(--accent)' }}>here.</span>
      </h2>

      <div style={{ position: 'relative', paddingLeft: '2rem' }}>
        <div
          style={{
            position: 'absolute',
            left: 0,
            top: 8,
            bottom: 8,
            width: 1,
            background: 'var(--border)',
          }}
        />

        {timelineItems.map((item) => (
          <div
            key={item.title}
            style={{ position: 'relative', marginBottom: '3rem' }}
          >
            <div
              style={{
                position: 'absolute',
                left: '-2.4rem',
                top: 4,
                width: 12,
                height: 12,
                borderRadius: '50%',
                background: item.active ? 'var(--secondary)' : 'var(--bg)',
                border: `2px solid ${item.active ? 'var(--secondary)' : 'var(--muted)'}`,
                boxShadow: item.active ? '0 0 12px var(--secondary-dim)' : 'none',
                transition: 'all 0.3s',
              }}
            />

            <div
              className="font-mono"
              style={{
                fontSize: 10,
                letterSpacing: 2,
                color: 'var(--accent)',
                marginBottom: '0.8rem',
              }}
            >
              {item.date}
            </div>
            <div
              className="font-mono"
              style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem' }}
            >
              {item.title}
            </div>
            <div
              className="font-mono"
              style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--text-secondary)' }}
            >
              {item.desc}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
