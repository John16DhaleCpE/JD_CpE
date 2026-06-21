// ──────────────────────────────────────────────
// Badge — shared UI primitive
// ──────────────────────────────────────────────
// A small colored tag/label. Used in the skills
// section for skill names and in projects for
// technology tags.
//
// Props:
//   label: display text
//   color: text color (CSS var or hex)
//   bg: background color
//   border: border color
// ──────────────────────────────────────────────

import styles from './Badge.module.css'

interface BadgeProps {
  label: string
  color: string
  bg: string
  border: string
}

export default function Badge({ label, color, bg, border }: BadgeProps) {
  return (
    <span
      className={styles.badge}
      style={{ color, background: bg, border: `1px solid ${border}` }}
    >
      {label}
    </span>
  )
}
