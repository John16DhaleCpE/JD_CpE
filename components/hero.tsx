'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { useMediaQuery } from '../hooks/useMediaQuery'

const phrases = [
  'Aspiring Web Developer',
  'Computer Engineer',
  'Frontend & Full-Stack',
  'Hardware → Software',
  'Musician',
]

export default function Hero() {
  const [displayed, setDisplayed] = useState('')
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)
  const [dotHover, setDotHover] = useState(false)
  const isMobile = useMediaQuery('(max-width: 768px)')

  useEffect(() => {
    const current = phrases[phraseIndex]
    let timeout: ReturnType<typeof setTimeout>

    if (!deleting) {
      if (charIndex < current.length) {
        timeout = setTimeout(() => {
          setDisplayed(current.slice(0, charIndex + 1))
          setCharIndex((c) => c + 1)
        }, 80)
      } else {
        timeout = setTimeout(() => setDeleting(true), 1800)
      }
    } else {
      if (charIndex > 0) {
        timeout = setTimeout(() => {
          setDisplayed(current.slice(0, charIndex - 1))
          setCharIndex((c) => c - 1)
        }, 45)
      } else {
        timeout = setTimeout(() => {
          setDeleting(false)
          setPhraseIndex((p) => (p + 1) % phrases.length)
          setCharIndex(0)
        }, 300)
      }
    }

    return () => clearTimeout(timeout)
  }, [charIndex, deleting, phraseIndex])

  const photoSize = isMobile ? 240 : 370
  const ringOuter = isMobile ? 280 : 450
  const ringMid = isMobile ? 265 : 430
  const ringSpin1 = isMobile ? 270 : 440
  const ringSpin2 = isMobile ? 255 : 420
  const ringGlow = isMobile ? 225 : 370

  return (
    <section
      id="hero"
      style={{
        minHeight: isMobile ? 'auto' : '95vh',
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        alignItems: isMobile ? 'center' : 'center',
        position: 'relative',
        padding: isMobile ? '2rem 1rem' : '4rem 2rem',
        maxWidth: 1200,
        margin: '0 auto',
      }}
    >
      {/* Left: text content */}
      <div style={{ flex: 1, minWidth: 0 }}>
        {/* Dev label */}
        <div className="section-label-wrap animate-fadeUp-1">
          <div
            className="font-mono"
            style={{ fontSize: 11, letterSpacing: 2, color: 'var(--text-secondary)' }}
          >
            {'// role: computer_engineer | developer'}
          </div>
        </div>

        {/* Name */}
        <h1
          className="animate-fadeUp-2"
          style={{
            fontSize: isMobile ? 'clamp(2.25rem, 10vw, 3.5rem)' : 'clamp(3.5rem, 8vw, 6.5rem)',
            fontWeight: 800,
            letterSpacing: isMobile ? -1 : -2,
            lineHeight: 1.0,
            color: 'var(--accent)',
            marginBottom: '0.5rem',
          }}
        >
          John Dhale
          <br />
          <span style={{ color: 'var(--text-secondary)' }}>Peralta</span>
          <span
            onMouseEnter={() => setDotHover(true)}
            onMouseLeave={() => setDotHover(false)}
            style={{
              color: 'var(--secondary)',
              display: 'inline-block',
              transition: 'all 0.3s',
              transform: dotHover ? 'scale(1.8) translateY(-4px)' : 'scale(1)',
              cursor: 'default',
              filter: dotHover ? 'drop-shadow(0 0 12px var(--secondary))' : 'none',
            }}
          >
            .
          </span>
        </h1>

        {/* Typing line */}
        <div
          className="animate-fadeUp-3 font-mono"
          style={{
            fontSize: 'clamp(0.75rem, 2vw, 1.1rem)',
            color: 'var(--text-secondary)',
            marginBottom: isMobile ? '1rem' : '1.5rem',
            minHeight: '1.4em',
          }}
        >
          <span style={{ color: 'var(--accent)' }}>{'>'}</span>{' '}
          <span style={{ color: 'var(--text-secondary)' }}>dev.status:</span>{' '}
          {displayed}
          <span className="animate-blink" style={{ color: 'var(--accent)' }}>
            _
          </span>
        </div>

        {/* Bio */}
        <p
          className="animate-fadeUp-4 font-mono"
          style={{
            maxWidth: 560,
            fontSize: isMobile ? '0.82rem' : '0.9rem',
            lineHeight: 1.8,
            color: 'var(--text-secondary)',
            marginBottom: isMobile ? '1.5rem' : '2.5rem',
            whiteSpace: 'pre-line',
          }}
        >
          {`Computer Engineering graduate from Teresa, Rizal,
bridging hardware systems and modern web development.
I build from circuits to full-stack web applications
with a strong systems-level mindset.

Currently focused on building with Next.js, TypeScript,
React, Javascript, and exploring the intersection of
web development. AI-assisted development workflows.`}
        </p>

        {/* CTA */}
        <div
          className="animate-fadeUp-5"
          style={{ display: 'flex', justifyContent: isMobile ? 'center' : 'flex-start', gap: isMobile ? '0.6rem' : '1rem', flexWrap: 'wrap' }}
        >
          <a
            href="#projects"
            className="font-mono"
            style={{
              fontSize: 11,
              letterSpacing: 2,
              textTransform: 'uppercase',
              padding: isMobile ? '10px 20px' : '12px 28px',
              borderRadius: 2,
              background: 'var(--accent)',
              color: '#000',
              fontWeight: 700,
              transition: 'all 0.3s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 0 20px var(--accent-dim)'
              e.currentTarget.style.transform = 'translateY(-1px)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = 'none'
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="font-mono"
            style={{
              fontSize: 11,
              letterSpacing: 2,
              textTransform: 'uppercase',
              padding: isMobile ? '10px 20px' : '12px 28px',
              borderRadius: 2,
              border: '1px solid var(--border)',
              color: 'var(--text-secondary)',
              transition: 'all 0.3s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--secondary)'
              e.currentTarget.style.color = 'var(--secondary)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--border)'
              e.currentTarget.style.color = 'var(--text-secondary)'
            }}
          >
            Get In Touch
          </a>
        </div>
      </div>

      {/* Right: photo with creative frame */}
      <div
        className="animate-fadeUp-3"
        style={{
          flexShrink: 0,
          marginLeft: isMobile ? 0 : 'clamp(1.5rem, 4vw, 5rem)',
          marginTop: isMobile ? '2.5rem' : 0,
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Outer ring 1 */}
        <div
          style={{
            position: 'absolute',
            width: ringOuter,
            height: ringOuter,
            borderRadius: '50%',
            border: '1px solid var(--accent-border)',
            opacity: 0.2,
          }}
        />
        {/* Outer ring 2 */}
        <div
          style={{
            position: 'absolute',
            width: ringMid,
            height: ringMid,
            borderRadius: '50%',
            border: '1px solid var(--secondary-border)',
            opacity: 0.15,
          }}
        />
        {/* Rotating accent arc */}
        <div
          style={{
            position: 'absolute',
            width: ringSpin1,
            height: ringSpin1,
            borderRadius: '50%',
            border: '2px solid transparent',
            borderTopColor: 'var(--accent)',
            borderRightColor: 'var(--accent)',
            opacity: 0.2,
            animation: 'spin 12s linear infinite',
          }}
        />
        {/* Counter-rotating secondary arc */}
        <div
          style={{
            position: 'absolute',
            width: ringSpin2,
            height: ringSpin2,
            borderRadius: '50%',
            border: '2px solid transparent',
            borderBottomColor: 'var(--secondary)',
            borderLeftColor: 'var(--secondary)',
            opacity: 0.12,
            animation: 'spin 18s linear infinite reverse',
          }}
        />
        {/* Inner glow */}
        <div
          style={{
            position: 'absolute',
            width: ringGlow,
            height: ringGlow,
            borderRadius: '50%',
            background: 'radial-gradient(circle, var(--accent-dim) 0%, transparent 70%)',
            filter: 'blur(30px)',
          }}
        />
        {/* Photo container */}
        <div
          style={{
            width: photoSize,
            height: photoSize,
            borderRadius: '50%',
            overflow: 'hidden',
            border: '2px solid var(--accent-border)',
            position: 'relative',
            zIndex: 1,
            animation: 'pulse-glow 4s ease-in-out infinite',
          }}
        >
          <Image
            src="/Togalolol.jpg"
            alt="John Dhale Peralta — Computer Engineer"
            fill
            sizes={isMobile ? '240px' : '370px'}
            style={{
              objectFit: 'cover',
              objectPosition: 'top center',
              filter: 'grayscale(20%) contrast(1.05)',
              transition: 'filter 0.4s, transform 0.4s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.filter = 'grayscale(0%) contrast(1.1)'
              e.currentTarget.style.transform = 'scale(1.03)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.filter = 'grayscale(20%) contrast(1.05)'
              e.currentTarget.style.transform = 'scale(1)'
            }}
            onError={(e) => {
              const target = e.currentTarget as HTMLImageElement
              target.style.display = 'none'
            }}
          />
        </div>
        {/* Corner brackets */}
        {!isMobile && (
          <>
            <div style={{ position: 'absolute', top: 10, left: 10, width: 24, height: 24, borderTop: '2px solid var(--accent)', borderLeft: '2px solid var(--accent)', opacity: 0.4 }} />
            <div style={{ position: 'absolute', top: 10, right: 10, width: 24, height: 24, borderTop: '2px solid var(--secondary)', borderRight: '2px solid var(--secondary)', opacity: 0.3 }} />
            <div style={{ position: 'absolute', bottom: 10, left: 10, width: 24, height: 24, borderBottom: '2px solid var(--secondary)', borderLeft: '2px solid var(--secondary)', opacity: 0.3 }} />
            <div style={{ position: 'absolute', bottom: 10, right: 10, width: 24, height: 24, borderBottom: '2px solid var(--accent)', borderRight: '2px solid var(--accent)', opacity: 0.4 }} />
          </>
        )}
        {/* Floating label */}
        <div
          className="font-mono hide-mobile"
          style={{
            position: 'absolute',
            bottom: -32,
            fontSize: 9,
            letterSpacing: 3,
            color: 'var(--muted)',
            textTransform: 'uppercase',
            animation: 'float 3s ease-in-out infinite',
          }}
        >
          {'// dev.png'}
        </div>
      </div>
    </section>
  )
}
