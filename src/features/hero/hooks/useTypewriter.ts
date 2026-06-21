'use client'

// ──────────────────────────────────────────────
// useTypewriter — typewriter animation hook
// ──────────────────────────────────────────────
// Cycles through an array of phrases, typing them
// character by character, then deleting and moving
// to the next phrase.
//
// This hook extracts the typewriter logic from the
// Hero component so the Hero file only handles UI.
//
// Returns:
//   displayed: the current partial string to render
//
// The hook manages its own internal state (phraseIndex,
// charIndex, deleting) so Hero just renders {displayed}.
// ──────────────────────────────────────────────

import { useEffect, useState } from 'react'

const phrases = [
  'Aspiring Web Developer',
  'Computer Engineer',
  'Frontend & Full-Stack',
  'Hardware → Software',
  'Musician',
]

export function useTypewriter() {
  const [displayed, setDisplayed] = useState('')
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = phrases[phraseIndex]
    let timeout: ReturnType<typeof setTimeout>

    if (!deleting) {
      // ── Typing forward ──
      if (charIndex < current.length) {
        timeout = setTimeout(() => {
          setDisplayed(current.slice(0, charIndex + 1))
          setCharIndex((c) => c + 1)
        }, 80)
      } else {
        // Pause at the end of the phrase before deleting
        timeout = setTimeout(() => setDeleting(true), 1800)
      }
    } else {
      // ── Deleting backward ──
      if (charIndex > 0) {
        timeout = setTimeout(() => {
          setDisplayed(current.slice(0, charIndex - 1))
          setCharIndex((c) => c - 1)
        }, 45)
      } else {
        // Move to the next phrase (wraps around)
        timeout = setTimeout(() => {
          setDeleting(false)
          setPhraseIndex((p) => (p + 1) % phrases.length)
          setCharIndex(0)
        }, 300)
      }
    }

    return () => clearTimeout(timeout)
  }, [charIndex, deleting, phraseIndex])

  return displayed
}
