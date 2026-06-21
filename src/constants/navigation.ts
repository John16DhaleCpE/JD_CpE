// ──────────────────────────────────────────────
// Navigation Constants
// ──────────────────────────────────────────────
// Re-export nav links from site config for
// convenient import. If nav-specific logic grows
// (e.g., sub-menus, permissions), add it here.
// ──────────────────────────────────────────────

import { siteConfig, type NavLink } from '@/config/site'

export { siteConfig }

export const navLinks: NavLink[] = siteConfig.navLinks
