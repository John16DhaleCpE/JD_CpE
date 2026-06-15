'use client'

import { useScrollFade } from '../hooks/useScrollFade'

const projects = [
  {
    num: '02 // embedded systems',
    name: 'Memory Game — Arduino',
    desc: 'A Simon Says-style memory game built on a microcontroller. Uses LEDs and push buttons to generate and test sequences, testing user attention and reaction. Implements real-time input handling and sequential logic from scratch.',
    tags: ['Arduino', 'C/C++', 'LEDs', 'Game Logic', 'Embedded'],
    dashed: false,
  },
  {
    num: '03 // sensor integration',
    name: 'Heartbeat Monitor',
    desc: 'A real-time heart rate monitoring system using a pulse sensor and OLED display (SH110x library). Reads biometric data, processes it, and renders live output on screen — showcasing hardware integration and real-time data handling.',
    tags: ['Arduino', 'Pulse Sensor', 'OLED / SH110x', 'Real-time', 'Biomedical'],
    dashed: false,
  },
  {
    num: '04 // coming soon',
    name: 'Web Projects',
    desc: 'Portfolio site, task manager, IoT dashboard, and more in active development. Combining CpE hardware background with modern web tech for unique full-stack projects.',
    tags: ['Next.js', 'TypeScript', 'React', 'In Progress'],
    dashed: true,
  },
]

function Badge({
  label,
  color,
  bg,
  border,
}: {
  label: string
  color: string
  bg: string
  border: string
}) {
  return (
    <span
      className="font-mono"
      style={{
        fontSize: 9,
        letterSpacing: 2,
        background: bg,
        border: `1px solid ${border}`,
        color,
        padding: '4px 12px',
        borderRadius: 2,
        whiteSpace: 'nowrap',
      }}
    >
      {label}
    </span>
  )
}

function ProjectCard({
  num,
  name,
  desc,
  tags,
  dashed,
}: {
  num: string
  name: string
  desc: string
  tags: string[]
  dashed: boolean
}) {
  return (
    <div
      style={{
        background: 'var(--surface)',
        border: `1px ${dashed ? 'dashed' : 'solid'} var(--border)`,
        padding: '2rem',
        borderRadius: 4,
        position: 'relative',
        overflow: 'hidden',
        opacity: dashed ? 0.6 : 1,
        transition: 'border-color 0.3s, transform 0.3s',
      }}
      onMouseEnter={(e) => {
        if (!dashed) {
          e.currentTarget.style.borderColor = 'var(--accent)'
          e.currentTarget.style.transform = 'translateY(-4px)'
        }
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'var(--border)'
        e.currentTarget.style.transform = 'translateY(0)'
      }}
    >
      <div
        className="font-mono"
        style={{
          fontSize: 10,
          color: 'var(--accent)',
          opacity: 0.5,
          marginBottom: '0.75rem',
          letterSpacing: 2,
        }}
      >
        {num}
      </div>
      <div style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.75rem', lineHeight: 1.3 }}>
        {name}
      </div>
      <div
        className="font-mono"
        style={{
          fontSize: '0.875rem',
          lineHeight: 1.7,
          color: 'var(--text-secondary)',
          marginBottom: '1.5rem',
        }}
      >
        {desc}
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
        {tags.map((tag) => (
          <span
            key={tag}
            className="font-mono"
            style={{
              fontSize: 9,
              letterSpacing: 1,
              color: 'var(--accent)',
              background: 'var(--accent-dim)',
              padding: '4px 10px',
              borderRadius: 2,
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Projects() {
  const ref = useScrollFade()

  return (
    <section
      id="projects"
      ref={ref}
      className="scroll-fade"
      style={{ padding: '6rem 2rem', maxWidth: 1100, margin: '0 auto', position: 'relative' }}
    >
      {/* Scattered code textures */}
      <span className="code-texture" style={{ top: 30, left: 30, color: 'var(--accent)', opacity: 0.04, transform: 'rotate(-1.5deg)' }}>
        {'async function deploy(project) { await build(); return ship(); }'}
      </span>
      <span className="code-texture" style={{ bottom: 80, right: 40, color: 'var(--secondary)', opacity: 0.03, transform: 'rotate(2deg)' }}>
        {'class SheepDiagnosis extends AI { predict(data) { return classify(data); } }'}
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
          03 // projects
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
        Things I&apos;ve
        <br />
        <span style={{ color: 'var(--accent)' }}>built.</span>
      </h2>

      {/* Thesis card */}
      <div
        style={{
          background: 'var(--surface)',
          border: '1px solid var(--accent)',
          padding: '2.5rem',
          borderRadius: 4,
          display: 'grid',
          gridTemplateColumns: '1fr auto',
          gap: '2rem',
          alignItems: 'start',
          marginBottom: '3rem',
        }}
      >
        <div>
          <div
            className="font-mono"
            style={{
              fontSize: 10,
              color: 'var(--accent)',
              opacity: 0.5,
              marginBottom: '0.75rem',
              letterSpacing: 2,
            }}
          >
            01 // flagship thesis project
          </div>
          <div
            className="font-mono"
            style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', lineHeight: 1.3 }}
          >
            Sheep Disease Diagnostic System
          </div>
          <div
            className="font-mono"
            style={{
              fontSize: '0.9rem',
              lineHeight: 1.7,
              color: 'var(--text-secondary)',
              marginBottom: '1.5rem',
            }}
          >
            An academic capstone project applying machine learning techniques to
            assist in diagnosing sheep diseases. Built as a data-driven
            diagnostic tool combining research, problem-solving, and intelligent
            system design — demonstrating how engineering can drive real-world
            impact in agriculture.
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
            {['Deep Learning', 'Disease Diagnosis', 'Data-Driven', 'Research', 'Python'].map(
              (tag) => (
                <span
                  key={tag}
                  className="font-mono"
                  style={{
                    fontSize: 9,
                    letterSpacing: 1,
                    color: 'var(--accent)',
                    background: 'var(--accent-dim)',
                    padding: '4px 10px',
                    borderRadius: 2,
                  }}
                >
                  {tag}
                </span>
              )
            )}
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            gap: '0.75rem',
          }}
        >
          <Badge
            label="CAPSTONE"
            color="var(--secondary)"
            bg="var(--secondary-dim)"
            border="var(--secondary-border)"
          />
          <Badge
            label="DL / AI"
            color="#a78bfa"
            bg="rgba(124,58,237,0.1)"
            border="rgba(124,58,237,0.3)"
          />
        </div>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem',
        }}
      >
        {projects.map((p) => (
          <ProjectCard key={p.num} {...p} />
        ))}
      </div>
    </section>
  )
}
