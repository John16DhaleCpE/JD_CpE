'use client'

// ──────────────────────────────────────────────
// Features / Skills / Components / Skills
// ──────────────────────────────────────────────
// Displays skill categories with colored headers
// and SVG icons for each skill.
//
// Data flow:
//   - skillGroups come from data.ts (extracted for cleanliness)
//   - Icons come from SkillIcon.tsx (extracted for maintainability)
//   - useScrollFade for scroll-reveal animation
// ──────────────────────────────────────────────

import { useScrollFade } from '@/hooks/useScrollFade'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import { skillGroups } from '../../data'
import { getSkillIcon } from '../SkillIcon/SkillIcon'
import { Skill } from '../../types'
import SectionLabel from '@/components/ui/SectionLabel/SectionLabel'

function SkillCard({ skill, color }: { skill: Skill; color: string }) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.6rem',
        padding: '0.55rem 0.85rem',
        borderRadius: 3,
        border: `1px solid ${skill.accent ? `${color}30` : skill.secondary ? 'var(--border)' : 'var(--border)'}`,
        background: skill.accent ? `${color}08` : 'transparent',
        transition: 'all 0.25s ease',
        cursor: 'default',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = `${color}60`
        e.currentTarget.style.background = `${color}12`
        e.currentTarget.style.transform = 'translateY(-1px)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = skill.accent ? `${color}30` : 'var(--border)'
        e.currentTarget.style.background = skill.accent ? `${color}08` : 'transparent'
        e.currentTarget.style.transform = 'translateY(0)'
      }}
    >
      <span style={{ color: skill.accent ? color : 'var(--muted)', flexShrink: 0, display: 'flex' }}>
        {getSkillIcon(skill.name)}
      </span>
      <span
        className="font-mono"
        style={{
          fontSize: 11,
          letterSpacing: 0.5,
          color: skill.accent ? color : skill.secondary ? 'var(--text-secondary)' : 'var(--muted)',
          fontWeight: skill.accent ? 600 : 400,
          whiteSpace: 'nowrap',
        }}
      >
        {skill.name}
      </span>
    </div>
  )
}

export default function Skills() {
  const ref = useScrollFade()
  const isMobile = useMediaQuery('(max-width: 768px)')

  return (
    <section
      id="skills"
      ref={ref}
      className="scroll-fade"
      style={{ padding: isMobile ? '4rem 1.5rem' : '6rem 2rem', maxWidth: 1100, margin: '0 auto', position: 'relative' }}
    >
      {/* ── Scattered code textures ── */}
      <span className="code-texture" style={{ top: 40, right: 20, color: 'var(--accent)', opacity: 0.04, transform: 'rotate(-2deg)' }}>
        {'const skills = ["React", "Next.js", "TypeScript"]'}
      </span>
      <span className="code-texture" style={{ bottom: 60, left: 40, color: 'var(--secondary)', opacity: 0.03, transform: 'rotate(1deg)' }}>
        {'function useSkill(level) { return level > 9000; }'}
      </span>

      <SectionLabel sectionId="02 // skills" />

      <h2
        style={{
          fontSize: 'clamp(2rem, 4vw, 3rem)',
          fontWeight: 800,
          letterSpacing: -1,
          marginBottom: '3rem',
          lineHeight: 1.1,
        }}
      >
        Tools I work
        <br />
        <span style={{ color: 'var(--accent)' }}>with.</span>
      </h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        {skillGroups.map((group) => (
          <div key={group.label}>
            {/* ── Category header ── */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                marginBottom: '1rem',
                paddingBottom: '0.75rem',
                borderBottom: '1px solid var(--border)',
              }}
            >
              <div style={{ width: 3, height: 16, borderRadius: 2, background: group.color, opacity: 0.7 }} />
              <div className="font-mono" style={{ fontSize: 11, fontWeight: 600, letterSpacing: 1.5, color: group.color, textTransform: 'uppercase' }}>
                {group.label}
              </div>
              <div className="font-mono" style={{ fontSize: 9, letterSpacing: 1, color: 'var(--muted)', opacity: 0.4, marginLeft: '0.25rem' }}>
                {group.code.replace('// ', '')}
              </div>
            </div>

            {/* ── Skills grid ── */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: '0.5rem' }}>
              {group.skills.map((skill) => (
                <SkillCard key={skill.name} skill={skill} color={group.color} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
