// ──────────────────────────────────────────────
// cn — className merge utility
// ──────────────────────────────────────────────
// Merges multiple classNames into a single string,
// filtering out falsy values. Similar to the popular
// `clsx` library but tiny and dependency-free.
//
// Usage:
//   cn('base-class', condition && 'active-class', styles.custom)
// ──────────────────────────────────────────────

export function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(' ')
}
