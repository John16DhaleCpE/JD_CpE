// ──────────────────────────────────────────────
// Divider — shared UI primitive
// ──────────────────────────────────────────────
// A thin gradient line that visually separates
// sections on the page. Pure presentational —
// no props needed.
// ──────────────────────────────────────────────

import styles from './Divider.module.css'

export default function Divider() {
  return <div className={styles.divider} />
}
