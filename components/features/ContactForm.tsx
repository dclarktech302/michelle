'use client'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { ContactFormData } from '@/lib/types'

const initialForm: ContactFormData = {
    name: '',
    email: '',
    message: '',
}

export default function ContactForm() {
    const [form, setForm] = useState<ContactFormData>(initialForm)
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
    const [errorMsg, setErrorMsg] = useState('')

    function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault()
        setStatus('sending')
        setErrorMsg('')

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            })

            const data = await res.json()

            if (!res.ok) {
                setErrorMsg(data.error || 'Something went wrong.')
                setStatus('error')
                return
            }

            setStatus('success')
            setForm(initialForm)
        } catch {
            setErrorMsg('Network error. Please try again.')
            setStatus('error')
        }
    }

    if (status === 'success') {
        return (
            <div className="rounded-2xl border bg-muted/40 px-8 py-10 text-center">
                <h3 className="font-heading text-xl font-semibold">Message sent!</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                    Thank you for reaching out. The campaign will be in touch soon.
                </p>
            </div>
        )
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                    <label htmlFor="contact-name" className="text-sm font-medium">
                        Your name <span className="text-destructive">*</span>
                    </label>
                    <input
                        id="contact-name"
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Jane Smith"
                        className="w-full rounded-xl border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                    />
                </div>
                <div className="space-y-2">
                    <label htmlFor="contact-email" className="text-sm font-medium">
                        Email address <span className="text-destructive">*</span>
                    </label>
                    <input
                        id="contact-email"
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="jane@example.com"
                        className="w-full rounded-xl border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                    />
                </div>
            </div>

            <div className="space-y-2">
                <label htmlFor="contact-message" className="text-sm font-medium">
                    Your message <span className="text-destructive">*</span>
                </label>
                <textarea
                    id="contact-message"
                    name="message"
                    required
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Share your idea, question, or concern..."
                    className="w-full rounded-xl border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary resize-none"
                />
            </div>

            {status === 'error' && (
                <p className="text-sm text-destructive">{errorMsg}</p>
            )}

            <Button
                type="submit"
                size="lg"
                disabled={status === 'sending'}
                className="w-full">
                {status === 'sending' ? 'Sending...' : 'Send Message'}
            </Button>
        </form>
    )
}