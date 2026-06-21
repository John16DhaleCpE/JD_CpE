'use client'

// ──────────────────────────────────────────────
// ProjectCard — individual project display
// ──────────────────────────────────────────────
// Renders a single project with: number label,
// title, description, tags, and optional live demo link.
//
// Extracted from the main Projects component so
// the Projects file focuses on layout and the
// Card handles its own presentation.
// ──────────────────────────────────────────────

import { Project } from '../../types'

export default function ProjectCard({ num, name, desc, tags, dashed, href }: Project) {
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
      <div className="font-mono" style={{ fontSize: 10, color: 'var(--accent)', opacity: 0.5, marginBottom: '0.75rem', letterSpacing: 2 }}>
        {num}
      </div>
      <div style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.75rem', lineHeight: 1.3 }}>
        {name}
      </div>
      <div className="font-mono" style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
        {desc}
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
        {tags.map((tag) => (
          <span
            key={tag}
            className="font-mono"
            style={{ fontSize: 9, letterSpacing: 1, color: 'var(--accent)', background: 'var(--accent-dim)', padding: '4px 10px', borderRadius: 2 }}
          >
            {tag}
          </span>
        ))}
      </div>
      {href && (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.4rem', marginTop: '1.25rem',
            fontSize: 10, letterSpacing: 1.5, textTransform: 'uppercase',
            color: 'var(--accent)', opacity: 0.7, textDecoration: 'none', transition: 'opacity 0.2s',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.opacity = '1' }}
          onMouseLeave={(e) => { e.currentTarget.style.opacity = '0.7' }}
        >
          Live Demo
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M7 17L17 7M17 7H7M17 7v10" />
          </svg>
        </a>
      )}
    </div>
  )
}
