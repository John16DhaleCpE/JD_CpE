// ──────────────────────────────────────────────
// Contact — form validation
// ──────────────────────────────────────────────
// Pure validation functions extracted from the
// Contact component. These have NO React dependencies
// and can be tested independently.
//
// validate() returns an errors object. If empty,
// the form is valid.
// ──────────────────────────────────────────────

import { FormData, FormErrors } from '../types'

export function validate(data: FormData): FormErrors {
  const errors: FormErrors = {}

  if (!data.name.trim()) {
    errors.name = 'Name is required'
  }

  if (!data.email.trim()) {
    errors.email = 'Email is required'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = 'Enter a valid email address'
  }

  if (!data.message.trim()) {
    errors.message = 'Message is required'
  } else if (data.message.trim().length < 5) {
    errors.message = 'At least 5 characters required'
  }

  return errors
}
