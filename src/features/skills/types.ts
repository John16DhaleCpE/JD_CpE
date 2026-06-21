// ──────────────────────────────────────────────
// Skills — TypeScript types
// ──────────────────────────────────────────────

import { ReactNode } from 'react'

export interface Skill {
  name: string
  icon?: ReactNode
  accent?: boolean
  secondary?: boolean
}

export interface SkillGroup {
  label: string
  code: string
  color: string
  skills: Skill[]
}
