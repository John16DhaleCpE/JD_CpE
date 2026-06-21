'use client'

// ──────────────────────────────────────────────
// Features / Projects / Components / Projects
// ──────────────────────────────────────────────
// Displays featured thesis project + project cards.
//
// Data flow:
//   - Project data comes from data.ts
//   - Badge is a shared UI component
//   - ProjectCard handles individual project rendering
// ──────────────────────────────────────────────

import { useScrollFade } from '@/hooks/useScrollFade'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import { projects } from '../../data'
import ProjectCard from '../ProjectCard/ProjectCard'
import Badge from '@/components/ui/Badge/Badge'
import SectionLabel from '@/components/ui/SectionLabel/SectionLabel'

export default function Projects() {
  const ref = useScrollFade()
  const isMobile = useMediaQuery('(max-width: 768px)')

  return (
    <section
      id="projects"
      ref={ref}
      className="scroll-fade"
      style={{ padding: isMobile ? '4rem 1.5rem' : '6rem 2rem', maxWidth: 1100, margin: '0 auto', position: 'relative' }}
    >
      {/* ── Scattered code textures ── */}
      <span className="code-texture" style={{ top: 30, left: 30, color: 'var(--accent)', opacity: 0.04, transform: 'rotate(-1.5deg)' }}>
        {'async function deploy(project) { await build(); return ship(); }'}
      </span>
      <span className="code-texture" style={{ bottom: 80, right: 40, color: 'var(--secondary)', opacity: 0.03, transform: 'rotate(2deg)' }}>
        {'class SheepDiagnosis extends AI { predict(data) { return classify(data); } }'}
      </span>

      <SectionLabel sectionId="03 // projects" />

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

      {/* ── Featured thesis card ── */}
      <div
        style={{
          background: 'var(--surface)',
          border: '1px solid var(--accent)',
          padding: isMobile ? '1.5rem' : '2.5rem',
          borderRadius: 4,
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '1fr auto',
          gap: isMobile ? '1rem' : '2rem',
          alignItems: isMobile ? 'center' : 'start',
          marginBottom: '3rem',
        }}
      >
        <div>
          <div className="font-mono" style={{ fontSize: 10, color: 'var(--accent)', opacity: 0.5, marginBottom: '0.75rem', letterSpacing: 2 }}>
            01 // flagship thesis project
          </div>
          <div className="font-mono" style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', lineHeight: 1.3 }}>
            Sheep Disease Diagnostic System
          </div>
          <div className="font-mono" style={{ fontSize: '0.9rem', lineHeight: 1.7, color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
            An academic capstone project applying machine learning techniques to
            assist in diagnosing sheep diseases. Built as a data-driven
            diagnostic tool combining research, problem-solving, and intelligent
            system design — demonstrating how engineering can drive real-world
            impact in agriculture.
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
            {['Deep Learning', 'Disease Diagnosis', 'Data-Driven', 'Research', 'Python'].map((tag) => (
              <span
                key={tag}
                className="font-mono"
                style={{ fontSize: 9, letterSpacing: 1, color: 'var(--accent)', background: 'var(--accent-dim)', padding: '4px 10px', borderRadius: 2 }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: isMobile ? 'row' : 'column', alignItems: isMobile ? 'center' : 'flex-end', gap: '0.75rem', flexWrap: 'wrap' }}>
          <Badge label="CAPSTONE" color="var(--secondary)" bg="var(--secondary-dim)" border="var(--secondary-border)" />
          <Badge label="DL / AI" color="#a78bfa" bg="rgba(124,58,237,0.1)" border="rgba(124,58,237,0.3)" />
        </div>
      </div>

      {/* ── Project cards grid ── */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
        {projects.map((p) => (
          <ProjectCard key={p.num} {...p} />
        ))}
      </div>
    </section>
  )
}
