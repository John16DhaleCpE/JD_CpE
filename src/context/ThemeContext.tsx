'use client'

// ──────────────────────────────────────────────
// ThemeContext — app-wide theme provider
// ──────────────────────────────────────────────
// Manages dark/light mode:
//   1. Reads initial theme from localStorage
//   2. Toggles between 'dark' and 'light'
//   3. Persists choice to localStorage
//   4. Applies .light class to <html> element
//
// The inline <script> in layout.tsx reads the
// saved theme BEFORE React hydrates, preventing
// a flash of wrong theme on page load.
//
// Usage:
//   const { theme, toggle } = useTheme()
//   const isDark = theme === 'dark'
// ──────────────────────────────────────────────

import { createContext, useContext, useEffect, useState, ReactNode } from 'react'

type Theme = 'dark' | 'light'

interface ThemeContextValue {
  theme: Theme
  toggle: () => void
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: 'dark',
  toggle: () => {},
})

export function ThemeProvider({ children }: { children: ReactNode }) {
  // Initialize from localStorage, falling back to 'dark'
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === 'undefined') return 'dark'
    try {
      const saved = localStorage.getItem('theme')
      if (saved === 'dark' || saved === 'light') return saved
    } catch {}
    return 'dark'
  })

  // Sync theme to <html> class + localStorage whenever it changes
  useEffect(() => {
    document.documentElement.classList.toggle('light', theme === 'light')
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggle = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
