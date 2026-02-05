import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, subject, message } = body

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // For now, log the submission (in production, integrate with email service)
    console.log('Contact form submission:', { name, email, phone, subject, message })

    // You can integrate with email services like:
    // - Resend (resend.com)
    // - SendGrid
    // - Mailgun
    // - AWS SES
    // Example with Resend:
    // const resend = new Resend(process.env.RESEND_API_KEY)
    // await resend.emails.send({
    //   from: 'US Southeast Business Brokers <noreply@southeastbusinessbrokers.com>',
    //   to: 'info@southeastbusinessbrokers.com',
    //   replyTo: email,
    //   subject: `New Contact: ${subject}`,
    //   text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || 'Not provided'}\n\nMessage:\n${message}`
    // })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to submit form' },
      { status: 500 }
    )
  }
}
