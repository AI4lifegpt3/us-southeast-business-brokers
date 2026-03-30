import { NextRequest, NextResponse } from 'next/server'

const GOOGLE_SHEET_WEBHOOK = process.env.GOOGLE_SHEET_WEBHOOK || ''
const NOTIFICATION_PHONE = process.env.NOTIFICATION_PHONE || ''
const NOTIFICATION_EMAIL = process.env.NOTIFICATION_EMAIL || 'brad@alabamabusinessbrokers.com'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, subject, message } = body
    const phoneDigits = String(phone || '').replace(/\D/g, '')

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    if (phoneDigits.length > 0 && phoneDigits.length !== 10) {
      return NextResponse.json(
        { error: 'Please provide a valid 10-digit phone number' },
        { status: 400 }
      )
    }

    const timestamp = new Date().toISOString()
    const normalizedPhone = phoneDigits
      ? `(${phoneDigits.slice(0, 3)}) ${phoneDigits.slice(3, 6)}-${phoneDigits.slice(6)}`
      : ''
    const formData = { name, email, phone: normalizedPhone, subject, message, timestamp }

    // 1. Log to Google Sheets via Apps Script webhook
    if (GOOGLE_SHEET_WEBHOOK) {
      try {
        await fetch(GOOGLE_SHEET_WEBHOOK, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        })
      } catch (e) {
        console.error('Google Sheets webhook error:', e)
      }
    }

    // 2. Send email notification via Cloudflare Email Workers (or fallback to console)
    console.log('New lead:', JSON.stringify(formData))

    // 3. Google Ads conversion tracking (client-side via gtag, but log server-side too)
    console.log(`Conversion: form_submit from ${email}`)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to submit form' },
      { status: 500 }
    )
  }
}
