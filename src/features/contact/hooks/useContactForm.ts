'use client'

// ──────────────────────────────────────────────
// Contact — form state management hook
// ──────────────────────────────────────────────
// Manages the full lifecycle of a contact form submission:
//   1. Tracks input values in state (formData)
//   2. Validates on submit using validation.ts
//   3. Calls contactApi.submitForm() on valid data
//   4. Returns status for UI to render loading/success/error
//   5. Auto-resets status after 6 seconds (success/error → idle)
//
// This hook was extracted from the Contact component
// to separate form logic from JSX markup. The hook
// is ONLY used here (not shared elsewhere), so it
// lives inside the feature folder.
//
// Returns: { formData, errors, status, handleSubmit, handleChange }
// ──────────────────────────────────────────────

import { useState, FormEvent, useCallback } from 'react'
import { FormData, FormErrors, FormStatus } from '../types'
import { validate } from '../utils/validation'
import { submitForm } from '../services/contactApi'

const initialFormData: FormData = { name: '', email: '', message: '' }

export function useContactForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [errors, setErrors] = useState<FormErrors>({})
  const [status, setStatus] = useState<FormStatus>('idle')

  // ── Handle form submission ──
  const handleSubmit = useCallback(async (e: FormEvent) => {
    e.preventDefault()

    // Validate first — stop if there are errors
    const validationErrors = validate(formData)
    setErrors(validationErrors)
    if (Object.keys(validationErrors).length > 0) return
    if (status === 'loading') return

    setStatus('loading')

    try {
      await submitForm(formData)
      setStatus('success')
      setFormData(initialFormData)
      setTimeout(() => setStatus('idle'), 6000)
    } catch {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 6000)
    }
  }, [formData, status])

  // ── Handle input change ──
  // Updates the specific field and clears its error if present
  const handleChange = useCallback((field: keyof FormData) => (value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }))
    }
  }, [errors])

  return { formData, errors, status, handleSubmit, handleChange }
}
