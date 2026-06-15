'use client'

import { useState, useEffect } from 'react'
import { useTheme } from '../context/ThemeContext'

const navLinks = [
  { href: '#hero', label: 'JDP' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#journey', label: 'Journey' },
  { href: '#beyond', label: 'Beyond' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('hero')
  const { theme, toggle } = useTheme()
  const [toggleHover, setToggleHover] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = navLinks
      .map((l) => document.querySelector(l.href))
      .filter(Boolean)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`)
          }
        })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    sections.forEach((s) => s && observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const isDark = theme === 'dark'

  return (
    <nav
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        background: scrolled ? 'var(--bg)' : 'transparent',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid var(--border)',
        transition: 'background 0.3s',
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 2rem',
          height: 56,
        }}
      >
        <a
          href="#hero"
          style={{ display: 'flex', alignItems: 'baseline', gap: 2, lineHeight: 1 }}
        >
          <span
            className="font-mono"
            style={{
              fontSize: 22,
              fontWeight: 800,
              letterSpacing: 2,
              color: 'var(--accent)',
            }}
          >
            JD
          </span>
          <span
            className="font-mono"
            style={{
              fontSize: 15,
              fontWeight: 600,
              letterSpacing: 1.5,
              color: 'var(--accent)',
              opacity: 0.75,
            }}
          >
            CpE
          </span>
        </a>

        <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono"
              style={{
                fontSize: 11,
                letterSpacing: 1.5,
                textTransform: 'uppercase',
                padding: '8px 12px',
                borderRadius: 2,
                color:
                  active === link.href
                    ? 'var(--accent)'
                    : 'var(--muted)',
                background:
                  active === link.href ? 'var(--accent-dim)' : 'transparent',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                if (active !== link.href) {
                  e.currentTarget.style.color = 'var(--secondary)'
                  e.currentTarget.style.background = 'var(--secondary-dim)'
                }
              }}
              onMouseLeave={(e) => {
                if (active !== link.href) {
                  e.currentTarget.style.color = 'var(--muted)'
                  e.currentTarget.style.background = 'transparent'
                }
              }}
            >
              {link.label}
            </a>
          ))}

          {/* Creative theme toggle — animated pill */}
          <button
            onClick={toggle}
            onMouseEnter={() => setToggleHover(true)}
            onMouseLeave={() => setToggleHover(false)}
            aria-label="Toggle theme"
            style={{
              marginLeft: 12,
              width: 52,
              height: 28,
              borderRadius: 14,
              background: isDark ? 'var(--bg3)' : '#e8e8e0',
              border: `1px solid ${toggleHover ? 'var(--accent)' : 'var(--border)'}`,
              cursor: 'pointer',
              position: 'relative',
              transition: 'all 0.3s',
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center',
              padding: 0,
            }}
          >
            {/* Knob */}
            <div
              style={{
                position: 'absolute',
                top: 3,
                left: isDark ? 3 : 27,
                width: 20,
                height: 20,
                borderRadius: '50%',
                background: isDark ? 'var(--accent)' : 'var(--secondary)',
                transition: 'all 0.35s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: isDark
                  ? '0 0 8px rgba(16,185,129,0.4)'
                  : '0 0 8px rgba(245,158,11,0.4)',
              }}
            >
              {isDark ? (
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2.5">
                  <circle cx="12" cy="12" r="5" />
                  <line x1="12" y1="1" x2="12" y2="3" />
                  <line x1="12" y1="21" x2="12" y2="23" />
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                </svg>
              ) : (
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2.5">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              )}
            </div>
            {/* Subtle bg stars in dark mode */}
            {isDark && (
              <>
                <div style={{ position: 'absolute', top: 6, right: 10, width: 2, height: 2, borderRadius: '50%', background: 'var(--text)', opacity: 0.2 }} />
                <div style={{ position: 'absolute', top: 14, right: 6, width: 1.5, height: 1.5, borderRadius: '50%', background: 'var(--text)', opacity: 0.15 }} />
                <div style={{ position: 'absolute', bottom: 6, right: 14, width: 1, height: 1, borderRadius: '50%', background: 'var(--text)', opacity: 0.1 }} />
              </>
            )}
          </button>
        </div>
      </div>
    </nav>
  )
}
