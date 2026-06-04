'use client'

import { useScrollFade } from '../hooks/useScrollFade'

const contacts = [
  {
    label: 'GitHub',
    value: 'github.com/John16DhaleCpE',
    href: 'https://github.com/John16DhaleCpE',
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="var(--accent)" strokeWidth="1.5">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    value: 'John Dhale Peralta',
    href: 'https://www.linkedin.com/in/john-dhale-peralta-964300368',
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="var(--accent)" strokeWidth="1.5">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: 'Email',
    value: 'john16dhale@gmail.com',
    href: 'mailto:john16dhale@gmail.com',
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="var(--accent)" strokeWidth="1.5">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
  {
    label: 'Resume',
    value: 'Download PDF',
    href: '/resume.pdf',
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="var(--accent)" strokeWidth="1.5">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
  },
]

function ContactCard({
  label,
  value,
  href,
  icon,
}: {
  label: string
  value: string
  href: string
  icon: React.ReactNode
}) {
  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel="noopener noreferrer"
      className="card-hover"
      style={{
        background: 'var(--surface)',
        border: '1px solid var(--border)',
        padding: '1.25rem',
        borderRadius: 4,
        display: 'flex',
        alignItems: 'center',
        gap: '0.875rem',
        overflow: 'hidden',
        textDecoration: 'none',
      }}
    >
      <div
        style={{
          width: 40,
          height: 40,
          borderRadius: 2,
          background: 'var(--accent-dim)',
          border: '1px solid var(--accent-border)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
        }}
      >
        {icon}
      </div>
      <div style={{ minWidth: 0, flex: 1 }}>
        <div
          className="font-mono"
          style={{
            fontSize: 9,
            letterSpacing: 2,
            color: 'var(--muted)',
            textTransform: 'uppercase',
          }}
        >
          {label}
        </div>
        <div
          className="font-mono"
          style={{
            fontSize: '0.8rem',
            fontWeight: 700,
            color: 'var(--text)',
            marginTop: 2,
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          {value}
        </div>
      </div>
    </a>
  )
}

export default function Contact() {
  const ref = useScrollFade()

  return (
    <section
      id="contact"
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
          06 // contact
        </div>
      </div>

      <h2
        style={{
          fontSize: 'clamp(2rem, 4vw, 3rem)',
          fontWeight: 800,
          letterSpacing: -1,
          marginBottom: '1rem',
          lineHeight: 1.1,
        }}
      >
        Let&apos;s build
        <br />
        <span style={{ color: 'var(--accent)' }}>something.</span>
      </h2>

      <p
        className="font-mono"
        style={{
          color: 'var(--text-secondary)',
          marginBottom: '2.5rem',
          fontSize: '0.95rem',
          maxWidth: 500,
          lineHeight: 1.7,
        }}
      >
        I&apos;m currently open to junior developer roles, freelance projects,
        and collaborations. If you&apos;re building something interesting —
        let&apos;s talk.
      </p>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1rem',
        }}
      >
        {contacts.map((c) => (
          <ContactCard key={c.label} {...c} />
        ))}
      </div>
    </section>
  )
}
