'use client'

// ──────────────────────────────────────────────
// useScrollFade — scroll-reveal animation hook
// ──────────────────────────────────────────────
// Returns a ref to attach to any element. When the
// element scrolls into view, the 'visible' class
// is added, triggering a fade-up CSS animation.
//
// The actual opacity/transform transition is in
// globals.css (.scroll-fade and .scroll-fade.visible).
//
// Usage:
//   const ref = useScrollFade()
//   return <section ref={ref} className="scroll-fade">...</section>
// ──────────────────────────────────────────────

import { useEffect, useRef } from 'react'

export function useScrollFade<T extends HTMLElement = HTMLElement>() {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // IntersectionObserver fires when the element enters
    // the viewport (with a 10% threshold).
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return ref
}
