'use client'

// ──────────────────────────────────────────────
// MusicBars — animated audio visualizer bars
// ──────────────────────────────────────────────
// Renders 7 animated bars that pulse up and down
// like a music equalizer. The CSS animation is
// defined in globals.css (@keyframes bar).
//
// Extracted from BeyondTech so the component can
// be reused and the animation logic is separated
// from the section content.
// ──────────────────────────────────────────────

export default function MusicBars() {
  return (
    <div style={{ display: 'flex', alignItems: 'flex-end', gap: 4, height: 48 }}>
      {Array.from({ length: 7 }).map((_, i) => (
        <div key={i} className="music-bar" />
      ))}
    </div>
  )
}
