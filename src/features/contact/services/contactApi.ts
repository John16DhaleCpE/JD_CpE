// ──────────────────────────────────────────────
// Contact — API service
// ──────────────────────────────────────────────
// Handles the fetch call to Web3Forms API.
// Extracted from the Contact component to separate
// network logic from UI/state logic.
//
// The only export is submitForm(), which takes
// cleaned form data and returns a promise.
// ──────────────────────────────────────────────

import { FormData } from '../types'

const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY || ''

export async function submitForm(data: FormData): Promise<void> {
  if (!WEB3FORMS_KEY) {
    throw new Error(
      'Web3Forms key not configured. Get one at https://web3forms.com and add it to .env.local'
    )
  }

  // Send data to Web3Forms (a form-to-email service)
  const res = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({
      access_key: WEB3FORMS_KEY,
      name: data.name.trim(),
      email: data.email.trim(),
      message: data.message.trim(),
      subject: 'Portfolio Contact — New Message',
      from_name: 'JD CpE Portfolio',
    }),
  })

  const responseData = await res.json()

  if (!responseData.success) {
    throw new Error(responseData.message || 'Submission failed')
  }
}
