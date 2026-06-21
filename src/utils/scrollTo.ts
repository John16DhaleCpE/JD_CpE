// ──────────────────────────────────────────────
// ScrollTo — smooth scroll utility
// ──────────────────────────────────────────────
// Scrolls to a section by its ID with smooth behavior.
// Used for programmatic navigation (e.g., from the
// contact form after successful submission).
// ──────────────────────────────────────────────

export function scrollToSection(sectionId: string): void {
  const el = document.querySelector(sectionId)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}
