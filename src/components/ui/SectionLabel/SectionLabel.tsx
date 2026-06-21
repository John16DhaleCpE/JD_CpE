'use client'

// ──────────────────────────────────────────────
// SectionLabel — shared UI primitive
// ──────────────────────────────────────────────
// Renders the numbered label at the top of each
// feature section (e.g., "01 // about").
// The .wrap class provides the subtle code-texture
// background via CSS pseudo-elements.
//
// Props:
//   sectionId: the number + label text to display
// ──────────────────────────────────────────────

import styles from './SectionLabel.module.css'

interface SectionLabelProps {
  sectionId: string // e.g., "01 // about"
}

export default function SectionLabel({ sectionId }: SectionLabelProps) {
  return (
    <div className={styles.wrap}>
      <div className={styles.label}>{sectionId}</div>
    </div>
  )
}
