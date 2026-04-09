import { Resend } from 'resend'
import { NextResponse } from 'next/server'
import VolunteerEmail from '@/components/emails/volunteerEmail'
import { VolunteerFormData } from '@/lib/types'

export async function POST(req: Request) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY)

    const body: VolunteerFormData = await req.json()
    const { name, email, phone, address, city, state, zip, interests } = body

    if (!name || !email || !phone || !address || !city || !state || !zip || !interests?.length) {
      return NextResponse.json(
        { error: 'Please fill in all required fields.' },
        { status: 400 }
      )
    }

    const { data, error } = await resend.emails.send({
      from: 'campaign@michelejohnson37b.com',
      to: process.env.VOLUNTEER_EMAIL!,
      replyTo: email,
      subject: `New volunteer signup: ${name}`,
      react: VolunteerEmail(body),
    })

    if (error) {
      return NextResponse.json({ error }, { status: 400 })
    }

    return NextResponse.json({ data })
  } catch (err) {
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    )
  }
}