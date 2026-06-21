'use client'

// ──────────────────────────────────────────────
// useMediaQuery — reactive media query hook
// ──────────────────────────────────────────────
// Returns a boolean indicating whether the given
// CSS media query matches the current viewport.
//
// Uses useSyncExternalStore to avoid re-renders
// when the query state hasn't changed (tearing).
//
// Usage:
//   const isMobile = useMediaQuery('(max-width: 768px)')
// ──────────────────────────────────────────────

import { useSyncExternalStore } from 'react'

export function useMediaQuery(query: string): boolean {
  return useSyncExternalStore(
    // Subscribe: register a callback that React calls
    // when the media query result changes.
    (callback) => {
      const mq = window.matchMedia(query)
      mq.addEventListener('change', callback)
      return () => mq.removeEventListener('change', callback)
    },
    // Get snapshot: current match state
    () => window.matchMedia(query).matches,
    // Server snapshot: always false during SSR (no window)
    () => false
  )
}
