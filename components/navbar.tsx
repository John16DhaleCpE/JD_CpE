'use client'

import { useState, useEffect, useCallback } from 'react'
import { useTheme } from '../context/ThemeContext'
import { useMediaQuery } from '../hooks/useMediaQuery'

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
  const [menuOpen, setMenuOpen] = useState(false)
  const isMobile = useMediaQuery('(max-width: 768px)')

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

  const closeMenu = useCallback(() => setMenuOpen(false), [])

  const isDark = theme === 'dark'

  return (
    <nav
      className={isMobile ? 'mobile-nav' : ''}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
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
          padding: isMobile ? '0 1rem' : '0 2rem',
          height: 56,
        }}
      >
        <a
          href="#hero"
          style={{ display: 'flex', alignItems: 'baseline', gap: 2, lineHeight: 1 }}
          onClick={closeMenu}
        >
          <span
            className="font-mono"
            style={{
              fontSize: isMobile ? 18 : 22,
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
              fontSize: isMobile ? 12 : 15,
              fontWeight: 600,
              letterSpacing: 1.5,
              color: 'var(--accent)',
              opacity: 0.75,
            }}
          >
            CpE
          </span>
        </a>

        {/* Desktop nav */}
        {!isMobile && (
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

            {/* Theme toggle — desktop */}
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
              {isDark && (
                <>
                  <div style={{ position: 'absolute', top: 6, right: 10, width: 2, height: 2, borderRadius: '50%', background: 'var(--text)', opacity: 0.2 }} />
                  <div style={{ position: 'absolute', top: 14, right: 6, width: 1.5, height: 1.5, borderRadius: '50%', background: 'var(--text)', opacity: 0.15 }} />
                  <div style={{ position: 'absolute', bottom: 6, right: 14, width: 1, height: 1, borderRadius: '50%', background: 'var(--text)', opacity: 0.1 }} />
                </>
              )}
            </button>
          </div>
        )}

        {/* Mobile: hamburger + theme toggle */}
        {isMobile && (
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <button
              onClick={toggle}
              aria-label="Toggle theme"
              style={{
                width: 40,
                height: 22,
                borderRadius: 11,
                background: isDark ? 'var(--bg3)' : '#e8e8e0',
                border: `1px solid var(--border)`,
                cursor: 'pointer',
                position: 'relative',
                transition: 'all 0.3s',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                padding: 0,
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: 2,
                  left: isDark ? 2 : 20,
                  width: 16,
                  height: 16,
                  borderRadius: '50%',
                  background: isDark ? 'var(--accent)' : 'var(--secondary)',
                  transition: 'all 0.35s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {isDark ? (
                  <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2.5">
                    <circle cx="12" cy="12" r="5" />
                    <line x1="12" y1="1" x2="12" y2="3" />
                    <line x1="12" y1="21" x2="12" y2="23" />
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                  </svg>
                ) : (
                  <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2.5">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                  </svg>
                )}
              </div>
            </button>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: 4,
                display: 'flex',
                flexDirection: 'column',
                gap: 4,
              }}
            >
              <span
                style={{
                  display: 'block',
                  width: 20,
                  height: 2,
                  background: 'var(--text)',
                  borderRadius: 1,
                  transition: 'all 0.3s',
                  transform: menuOpen ? 'rotate(45deg) translate(3px, 3px)' : 'none',
                }}
              />
              <span
                style={{
                  display: 'block',
                  width: 20,
                  height: 2,
                  background: 'var(--text)',
                  borderRadius: 1,
                  transition: 'all 0.3s',
                  opacity: menuOpen ? 0 : 1,
                }}
              />
              <span
                style={{
                  display: 'block',
                  width: 20,
                  height: 2,
                  background: 'var(--text)',
                  borderRadius: 1,
                  transition: 'all 0.3s',
                  transform: menuOpen ? 'rotate(-45deg) translate(3px, -3px)' : 'none',
                }}
              />
            </button>
          </div>
        )}
      </div>

      {/* Mobile dropdown menu */}
      {isMobile && menuOpen && (
        <div
          style={{
            position: 'absolute',
            top: 56,
            left: 0,
            right: 0,
            background: 'var(--bg)',
            borderBottom: '1px solid var(--border)',
            backdropFilter: 'blur(12px)',
            padding: '0.5rem 0',
            zIndex: 49,
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono"
              onClick={closeMenu}
              style={{
                display: 'block',
                fontSize: 13,
                letterSpacing: 1.5,
                textTransform: 'uppercase',
                padding: '12px 1.5rem',
                color:
                  active === link.href
                    ? 'var(--accent)'
                    : 'var(--text-secondary)',
                background:
                  active === link.href ? 'var(--accent-dim)' : 'transparent',
                transition: 'all 0.2s',
                borderLeft: active === link.href ? '2px solid var(--accent)' : '2px solid transparent',
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
