import { Resend } from 'resend'
import { NextResponse } from 'next/server'
import ContactEmail from '@/components/emails/ContactEmail'
import { ContactFormData } from '@/lib/types'

export async function POST(req: Request) {
    try {
        const resend = new Resend(process.env.RESEND_API_KEY)
        const body: ContactFormData = await req.json()
        const { name, email, message } = body

        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'Please fill in all required fields.' },
                { status: 400 }
            )
        }

        const { data, error } = await resend.emails.send({
            from: 'campaign@michelewjohnson.com',
            to: process.env.CONTACT_EMAIL!,
            replyTo: email,
            subject: `Campaign message from ${name}`,
            react: ContactEmail(body),
        })

        if (error) {
            console.error('Resend error:', error)
            return NextResponse.json({ error }, { status: 400 })
        }

        return NextResponse.json({ data })
    } catch (err) {
        console.error('Contact route error:', err)
        return NextResponse.json(
            { error: 'Something went wrong. Please try again.' },
            { status: 500 }
        )
    }
}