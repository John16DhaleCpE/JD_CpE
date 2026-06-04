'use client'

import { useScrollFade } from '../hooks/useScrollFade'

const skillGroups = [
  {
    label: '// web & software development',
    skills: [
      { name: 'HTML', accent: true },
      { name: 'CSS', accent: true },
      { name: 'JavaScript', accent: true },
      { name: 'TypeScript', accent: true },
      { name: 'React', accent: true },
      { name: 'Next.js', accent: true },
      { name: 'Node.js', accent: true },
      { name: 'Git', accent: false },
      { name: 'GitHub', accent: false },
      { name: 'VS Code', accent: false },
      { name: 'WSL / Linux', accent: false },
      { name: 'AI-Assisted Dev', accent: false },
    ],
  },
  {
    label: '// computer engineering',
    skills: [
      { name: 'Arduino', accent: true },
      { name: 'Embedded Systems', accent: true },
      { name: 'Microcontrollers', accent: true },
      { name: 'Sensors', accent: false },
      { name: 'OLED / SH110x', accent: false },
      { name: 'Circuit Design', accent: false },
      { name: 'HW Debugging', accent: false },
      { name: 'Digital Comms', accent: false },
      { name: 'OS Fundamentals', accent: false },
    ],
  },
  {
    label: '// soft skills',
    skills: [
      { name: 'Problem Solving', accent: false },
      { name: 'Fast Learner', accent: false },
      { name: 'Adaptability', accent: false },
      { name: 'Critical Thinking', accent: false },
      { name: 'Team Collaboration', accent: false },
      { name: 'Project Ownership', accent: false },
      { name: 'Creativity', accent: false },
      { name: 'Discipline', accent: false },
    ],
  },
  {
    label: '// workflow & tools',
    skills: [
      { name: 'Version Control', accent: false },
      { name: 'Linux Terminal', accent: false },
      { name: 'AI Coding Tools', accent: false },
      { name: 'Debugging', accent: false },
      { name: 'Documentation', accent: false },
      { name: 'Agile Mindset', accent: false },
    ],
  },
]

function SkillTag({ name, accent }: { name: string; accent: boolean }) {
  return (
    <span
      className="font-mono"
      style={{
        fontSize: 10,
        letterSpacing: 1,
        padding: '6px 14px',
        borderRadius: 2,
        cursor: 'default',
        transition: 'all 0.2s',
        border: accent
          ? '1px solid var(--accent-border)'
          : '1px solid var(--border)',
        color: accent ? 'var(--accent)' : 'var(--muted)',
        background: 'transparent',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'var(--accent)'
        e.currentTarget.style.color = 'var(--accent)'
        e.currentTarget.style.background = 'var(--accent-dim)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = accent
          ? 'var(--accent-border)'
          : 'var(--border)'
        e.currentTarget.style.color = accent ? 'var(--accent)' : 'var(--muted)'
        e.currentTarget.style.background = 'transparent'
      }}
    >
      {name}
    </span>
  )
}

export default function Skills() {
  const ref = useScrollFade()

  return (
    <section
      id="skills"
      ref={ref}
      className="scroll-fade"
      style={{ padding: '6rem 2rem', maxWidth: 1100, margin: '0 auto', position: 'relative' }}
    >
      {/* Scattered code textures */}
      <span className="code-texture" style={{ top: 40, right: 20, color: 'var(--accent)', opacity: 0.04, transform: 'rotate(-2deg)' }}>
        {'const skills = ["React", "Next.js", "TypeScript"]'}
      </span>
      <span className="code-texture" style={{ bottom: 60, left: 40, color: 'var(--secondary)', opacity: 0.03, transform: 'rotate(1deg)' }}>
        {'function useSkill(level) { return level > 9000; }'}
      </span>
      <span className="code-texture" style={{ top: 180, right: 60, color: 'var(--muted)', opacity: 0.03, transform: 'rotate(-1deg)' }}>
        {'export type Skill = { name: string; level: number }'}
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
          02 // skills
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
        Tools I work
        <br />
        <span style={{ color: 'var(--accent)' }}>with.</span>
      </h2>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '3rem',
        }}
      >
        {skillGroups.map((group) => (
          <div key={group.label}>
            <div
              className="font-mono"
              style={{
                fontSize: 10,
                letterSpacing: 3,
                color: 'var(--muted)',
                marginBottom: '1.5rem',
                paddingBottom: '0.75rem',
                borderBottom: '1px solid var(--border)',
              }}
            >
              {group.label}
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {group.skills.map((skill) => (
                <SkillTag
                  key={skill.name}
                  name={skill.name}
                  accent={skill.accent}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
