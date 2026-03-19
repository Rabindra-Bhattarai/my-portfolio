import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(req: NextRequest) {
  try {
    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      return NextResponse.json(
        { error: 'Server configuration error.' },
        { status: 500 }
      )
    }

    const resend = new Resend(apiKey)

    const { name, email, message } = await req.json()

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required.' },
        { status: 400 }
      )
    }

    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: 'onlystudyforrabindra@gmail.com',
      replyTo: email,
      subject: `New message from ${name} — Portfolio`,
      html: `
        <div style="
          font-family: 'IBM Plex Mono', monospace;
          background: #060c1a;
          color: #edf2ff;
          padding: 40px;
          max-width: 600px;
          border: 1px solid #1e3a5f;
        ">
          <div style="
            color: #0de8cc;
            font-size: 11px;
            letter-spacing: 0.2em;
            text-transform: uppercase;
            margin-bottom: 24px;
            border-bottom: 1px solid #1e3a5f;
            padding-bottom: 16px;
          ">
            RB.sys // New Contact Message
          </div>

          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="
                font-size: 10px; color: #7a93b8;
                letter-spacing: 0.15em; text-transform: uppercase;
                padding: 10px 0; border-bottom: 1px solid #1e3a5f;
                width: 100px;
              ">FROM</td>
              <td style="
                font-size: 13px; color: #edf2ff;
                padding: 10px 0; border-bottom: 1px solid #1e3a5f;
              ">${name}</td>
            </tr>
            <tr>
              <td style="
                font-size: 10px; color: #7a93b8;
                letter-spacing: 0.15em; text-transform: uppercase;
                padding: 10px 0; border-bottom: 1px solid #1e3a5f;
              ">EMAIL</td>
              <td style="
                font-size: 13px; color: #0de8cc;
                padding: 10px 0; border-bottom: 1px solid #1e3a5f;
              ">
                <a href="mailto:${email}" style="color: #0de8cc;">${email}</a>
              </td>
            </tr>
            <tr>
              <td style="
                font-size: 10px; color: #7a93b8;
                letter-spacing: 0.15em; text-transform: uppercase;
                padding: 10px 0; vertical-align: top;
              ">MESSAGE</td>
              <td style="
                font-size: 14px; color: #edf2ff;
                padding: 10px 0; line-height: 1.7;
              ">${message.replace(/\n/g, '<br/>')}</td>
            </tr>
          </table>

          <div style="
            margin-top: 32px;
            font-size: 10px; color: #7a93b8;
            letter-spacing: 0.1em;
          ">
            Sent from portfolio contact form
          </div>
        </div>
      `,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json(
        { error: 'Failed to send message. Please try again.' },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true, id: data?.id }, { status: 200 })

  } catch (err) {
    console.error('Unexpected error:', err)
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    )
  }
}