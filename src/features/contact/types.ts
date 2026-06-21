// ──────────────────────────────────────────────
// Contact — TypeScript types
// ──────────────────────────────────────────────

export type FormStatus = 'idle' | 'loading' | 'success' | 'error'

export interface FormData {
  name: string
  email: string
  message: string
}

export interface FormErrors {
  name?: string
  email?: string
  message?: string
}
