'use client'

// ──────────────────────────────────────────────
// Features / Journey / Components / Journey
// ──────────────────────────────────────────────
// A timeline showing the learning/career journey
// from foundation to present.
//
// Data flow:
//   - timelineItems from data.ts (extracted)
//   - TimelineItem renders each phase
// - useScrollFade for scroll-reveal animation
// ──────────────────────────────────────────────

import { useScrollFade } from '@/hooks/useScrollFade'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import { timelineItems } from '../../data'
import TimelineItem from '../TimelineItem/TimelineItem'
import SectionLabel from '@/components/ui/SectionLabel/SectionLabel'

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
      {/* ── Scattered code textures ── */}
      <span className="code-texture" style={{ top: 50, right: 30, color: 'var(--accent)', opacity: 0.04, transform: 'rotate(-1deg)' }}>
        {'const journey = steps.map(s => ({ ...s, learned: true }))'}
      </span>
      <span className="code-texture" style={{ bottom: 40, left: 20, color: 'var(--secondary)', opacity: 0.03, transform: 'rotate(1.5deg)' }}>
        {'while (!shipped) { keepBuilding(); keepLearning(); }'}
      </span>

      <SectionLabel sectionId="04 // learning journey" />

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

      {/* ── Timeline container ── */}
      <div style={{ position: 'relative', paddingLeft: '2rem' }}>
        {/* Vertical line */}
        <div style={{ position: 'absolute', left: 0, top: 8, bottom: 8, width: 1, background: 'var(--border)' }} />

        {timelineItems.map((item) => (
          <TimelineItem key={item.title} {...item} />
        ))}
      </div>
    </section>
  )
}
