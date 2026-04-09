'use client'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { VolunteerFormData } from '@/lib/types'

const interestOptions = [
  'Host a house party',
  'Request a yard sign',
  'Volunteer',
]

const initialForm: VolunteerFormData = {
  name: '',
  email: '',
  phone: '',
  address: '',
  city: '',
  state: '',
  zip: '',
  interests: [],
  message: '',
}

export default function VolunteerForm() {
  const [form, setForm] = useState<VolunteerFormData>(initialForm)
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleInterest(interest: string) {
    setForm(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest],
    }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('sending')
    setErrorMsg('')

    try {
      const res = await fetch('/api/volunteer', {
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
      <div className="rounded-2xl border bg-muted/40 px-8 py-12 text-center">
        <h3 className="text-2xl font-semibold">Thank you, {form.name || 'friend'}!</h3>
        <p className="mt-3 text-muted-foreground">
          We've received your information and will be in touch soon.
          Together we'll make District 37-B proud.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">

      {/* How to get involved */}
      <div className="space-y-3">
        <p className="text-sm font-medium">How would you like to help? <span className="text-destructive">*</span></p>
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          {interestOptions.map(option => (
            <label
              key={option}
              className={`flex cursor-pointer items-center gap-3 rounded-xl border px-4 py-3 text-sm transition-colors duration-150 ${
                form.interests.includes(option)
                  ? 'border-primary bg-primary/5 text-primary font-medium'
                  : 'border-border hover:border-primary/50'
              }`}>
              <input
                type="checkbox"
                className="hidden"
                checked={form.interests.includes(option)}
                onChange={() => handleInterest(option)}
              />
              {option}
            </label>
          ))}
        </div>
      </div>

      {/* Name */}
      <div className="space-y-2">
        <label htmlFor="name" className="text-sm font-medium">
          Full name <span className="text-destructive">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          value={form.name}
          onChange={handleChange}
          placeholder="Jane Smith"
          className="w-full rounded-xl border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
        />
      </div>

      {/* Email + Phone */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium">
            Email address <span className="text-destructive">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="jane@example.com"
            className="w-full rounded-xl border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="phone" className="text-sm font-medium">
            Phone number <span className="text-destructive">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            value={form.phone}
            onChange={handleChange}
            placeholder="(410) 555-0100"
            className="w-full rounded-xl border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
          />
        </div>
      </div>

      {/* Address */}
      <div className="space-y-2">
        <label htmlFor="address" className="text-sm font-medium">
          Street address <span className="text-destructive">*</span>
        </label>
        <input
          id="address"
          name="address"
          type="text"
          required
          value={form.address}
          onChange={handleChange}
          placeholder="123 Main Street"
          className="w-full rounded-xl border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
        />
      </div>

      {/* City / State / Zip */}
      <div className="grid gap-4 sm:grid-cols-3">
        <div className="space-y-2">
          <label htmlFor="city" className="text-sm font-medium">
            City <span className="text-destructive">*</span>
          </label>
          <input
            id="city"
            name="city"
            type="text"
            required
            value={form.city}
            onChange={handleChange}
            placeholder="Easton"
            className="w-full rounded-xl border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="state" className="text-sm font-medium">
            State <span className="text-destructive">*</span>
          </label>
          <input
            id="state"
            name="state"
            type="text"
            required
            value={form.state}
            onChange={handleChange}
            placeholder="MD"
            maxLength={2}
            className="w-full rounded-xl border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="zip" className="text-sm font-medium">
            ZIP code <span className="text-destructive">*</span>
          </label>
          <input
            id="zip"
            name="zip"
            type="text"
            required
            value={form.zip}
            onChange={handleChange}
            placeholder="21601"
            maxLength={10}
            className="w-full rounded-xl border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
          />
        </div>
      </div>

      {/* Optional message */}
      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium">
          Anything else you'd like us to know?{' '}
          <span className="text-muted-foreground font-normal">(optional)</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={4}
          placeholder="Tell us about your availability, skills, or neighborhood..."
          className="w-full rounded-xl border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary resize-none"
        />
      </div>

      {/* Error */}
      {status === 'error' && (
        <p className="text-sm text-destructive">{errorMsg}</p>
      )}

      {/* Submit */}
      <Button
        type="submit"
        size="lg"
        disabled={status === 'sending' || form.interests.length === 0}
        className="w-full">
        {status === 'sending' ? 'Submitting...' : 'Join the Campaign'}
      </Button>

      <p className="text-center text-xs text-muted-foreground">
        Paid for by Friends of Michele W. Johnson
      </p>

    </form>
  )
}