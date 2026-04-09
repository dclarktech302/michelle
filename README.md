# Denkore Group — Client Site Template

**Stack:** Next.js 16 · TypeScript · Tailwind CSS v4 · shadcn/ui (radix-vega) · Tailark Blocks · Motion · Resend  
**Author:** David Clark — dclarkdev.com  
**Last verified:** April 2026

---

## Overview

Single source of truth for every client website built under Denkore Group. Covers setup, all known errors and fixes, directory structure, component conventions, and deployment. Follow in order for every new site.

---

## Tech Stack — Exact Versions

| Package | Version | Purpose |
|---|---|---|
| next | 16.2.3 | Framework — App Router |
| react | 19.x | UI library |
| typescript | 5.x | Type safety |
| tailwindcss | 4.x | Styling — CSS-first, no config file |
| shadcn/ui | latest | Component primitives (Radix-based) |
| motion | 12.x | Animations — formerly framer-motion |
| lucide-react | latest | Icons |
| resend | latest | Email for form submissions |
| @react-email/components | latest | Email template components |
| yet-another-react-lightbox | latest | Gallery lightbox |
| react-masonry-css | latest | Gallery masonry grid |

> **Never install `framer-motion`.** It was renamed to `motion` in 2025. All imports use `motion/react`.

---

## Step-by-Step Setup

### Step 1 — Create the Next.js App

```bash
npx create-next-app@latest [client-site-name] \
  --typescript --tailwind --eslint \
  --app --src-dir=false --import-alias="@/*"

cd [client-site-name]
pnpm run dev
```

Confirm `localhost:3000` loads before proceeding.

> **Tailwind v4 note:** No `tailwind.config.ts` is created. This is expected and correct. Tailwind v4 is CSS-first — all configuration lives in `app/globals.css`.

---

### Step 2 — Initialize shadcn/ui

```bash
pnpm dlx shadcn@latest init
```

Prompts:
- **Component library** → `Radix`
- **Preset** → `Vega - Lucide / Inter`

Creates: `components/ui/`, `lib/utils.ts`, `components.json`

---

### Step 3 — Register Tailark in components.json

Add the `registries` block to `components.json`:

```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "radix-vega",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "",
    "css": "app/globals.css",
    "baseColor": "neutral",
    "cssVariables": true,
    "prefix": ""
  },
  "iconLibrary": "lucide",
  "rtl": false,
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  },
  "menuColor": "default",
  "menuAccent": "subtle",
  "registries": {
    "@tailark": "https://tailark.com/r/{name}.json"
  }
}
```

Registry rules — both must be correct or blocks will not install:
- Key must start with `@` → `"@tailark"` not `"tailark"`
- Value must be a string with `{name}` placeholder — object format does not work

---

### Step 4 — Install Tailark Blocks

```bash
pnpm dlx shadcn add @tailark/hero-section-1
pnpm dlx shadcn add @tailark/features-1
pnpm dlx shadcn add @tailark/stats-1
pnpm dlx shadcn add @tailark/testimonials-1
pnpm dlx shadcn add @tailark/call-to-action-1
pnpm dlx shadcn add @tailark/footer-1
```

Rules:
- Command is `pnpm dlx shadcn add` — NOT `shadcn@latest add`
- No leading zero in block number: `hero-section-1` not `hero-section-01`
- `call-to-action` not `cta`
- Always copy exact commands from `tailark.com/dusk/[category]`

`hero-section-1` installs `header.tsx` and `logo.tsx` as bundled dependencies. Use `header.tsx` directly in `layout.tsx` as the site navbar.

Files land in `components/` directly. Always check what filenames were actually created before writing imports.

**Free variants (Dusk kit):**

| Block | Variants |
|---|---|
| hero-section | 1–9 |
| features | 1–12 |
| stats | 1–4 |
| testimonials | 1–6 |
| call-to-action | 1–3 |
| footer | 1–5 |

---

### Step 5 — Configure next.config.ts

```ts
import type { NextConfig } from "next"

const config: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "ik.imagekit.io" },
      // Add client image CDN when ready
    ],
  },
}

export default config
```

---

### Step 6 — Wire Root Layout

```tsx
// app/layout.tsx
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Client Name",
  description: "Client description.",
  openGraph: {
    title: "Client Name",
    description: "Client description.",
    images: ["/images/og-image.jpg"],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
```

---

### Step 7 — Assemble Homepage

```tsx
// app/page.tsx
import HeroSection from "@/components/hero-section"
import Stats from "@/components/stats"
import Features from "@/components/features-1"
import Testimonials from "@/components/testimonials"
import CallToAction from "@/components/call-to-action"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <Stats />
      <Features />
      <Testimonials />
      <CallToAction />
    </>
  )
}
```

---

### Step 8 — Scaffold Remaining Pages

Windows:
```bash
mkdir app\about app\issues app\events app\get-involved app\gallery
```

Mac/Linux:
```bash
mkdir -p app/about app/issues app/events app/get-involved app/gallery
```

Minimum page pattern:
```tsx
export default function AboutPage() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-medium">About</h1>
      <p className="mt-4 text-muted-foreground">Content coming soon.</p>
    </section>
  )
}
```

---

### Step 9 — Install Remaining Packages

```bash
pnpm add yet-another-react-lightbox react-masonry-css
pnpm add resend @react-email/components
pnpm add lucide-react
```

---

### Step 10 — Create .env.local

```
RESEND_API_KEY=re_xxxxxxxxxxxx
CONTACT_EMAIL=client@email.com
VOLUNTEER_EMAIL=client@email.com
NEXT_PUBLIC_ACTBLUE_URL=https://...  # campaign sites only
```

---

### Step 11 — Verify Build

```bash
pnpm run build
```

---

## Form Handling — Component-Based Pattern

Every form has three parts that match the component architecture: a shared type, a React Email template component, and a Route Handler. The email markup lives in a component exactly like UI markup.

```
lib/types.ts             → defines form data shape (ContactFormData)
components/emails/       → React Email templates (one per form type)
app/api/[form]/route.ts  → receives POST, validates, sends via Resend
components/features/     → form UI component — posts to the route handler
```

### Shared Types

```ts
// lib/types.ts
export interface ContactFormData {
  name: string
  email: string
  message: string
}

export interface VolunteerFormData {
  name: string
  email: string
  phone?: string
  interests: string[]
  message?: string
}
```

### Email Template Component

```tsx
// components/emails/ContactEmail.tsx
import { ContactFormData } from "@/lib/types"

export default function ContactEmail({ name, email, message }: ContactFormData) {
  return (
    <div>
      <h2>New message from {name}</h2>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Message:</strong></p>
      <p>{message}</p>
    </div>
  )
}
```

### Route Handler

```ts
// app/api/contact/route.ts
import { Resend } from "resend"
import { NextResponse } from "next/server"
import ContactEmail from "@/components/emails/ContactEmail"
import { ContactFormData } from "@/lib/types"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  const body: ContactFormData = await req.json()
  const { name, email, message } = body

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
  }

  const { data, error } = await resend.emails.send({
    from: "site@clientdomain.com",
    to: process.env.CONTACT_EMAIL!,
    subject: `New message from ${name}`,
    react: ContactEmail({ name, email, message }),
  })

  if (error) return NextResponse.json({ error }, { status: 400 })
  return NextResponse.json({ data })
}
```

### Form UI Component

```tsx
// components/features/ContactForm.tsx
"use client"
import { useState } from "react"
import { ContactFormData } from "@/lib/types"

export default function ContactForm() {
  const [form, setForm] = useState<ContactFormData>({ name: "", email: "", message: "" })
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle")

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus("sending")
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    })
    setStatus(res.ok ? "success" : "error")
  }

  if (status === "success") return <p>Message sent. We will be in touch.</p>

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input type="text" placeholder="Your name" required
        value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
        className="border rounded-lg px-4 py-2" />
      <input type="email" placeholder="Your email" required
        value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
        className="border rounded-lg px-4 py-2" />
      <textarea placeholder="Your message" required
        value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
        className="border rounded-lg px-4 py-2 min-h-32" />
      <button type="submit" disabled={status === "sending"}
        className="bg-primary text-primary-foreground rounded-lg px-6 py-2">
        {status === "sending" ? "Sending..." : "Send message"}
      </button>
      {status === "error" && <p className="text-destructive">Something went wrong. Try again.</p>}
    </form>
  )
}
```

---

## Known Errors and Fixes

### Error 1 — Registry property not allowed
**Symptom:** `Property tailark is not allowed.`  
**Fix:** Change `"tailark"` → `"@tailark"` in `components.json`.

---

### Error 2 — Block not found in registry
**Symptom:** `The item at https://tailark.com/r/header-01 was not found.`  
**Fix:** Use `pnpm dlx shadcn add` not `@latest`. No leading zero in block number. Registry value must include `{name}` placeholder.

---

### Error 3 — Missing SVG imports
**Symptom:** `Module not found: Can't resolve '@/components/ui/svgs/beacon'`  
**Cause:** Hero variants with a SaaS logo cloud reference SVG files the CLI does not install.  
**Fix:** Delete the SVG import lines and logo cloud JSX block from `hero-section.tsx`.

---

### Error 4 — next/image unconfigured hostname
**Symptom:** `Invalid src prop, hostname "ik.imagekit.io" is not configured`  
**Fix:** Add `{ protocol: "https", hostname: "ik.imagekit.io" }` to `remotePatterns` in `next.config.ts`.

---

### Error 5 — motion.create() TypeScript errors
**Symptom:** `Type 'string | number | symbol' is not assignable to 'string | ComponentType'` or `Property 'className' does not exist`  
**Fix:** Replace `AnimatedGroup` function body in `components/ui/animated-group.tsx`:

```tsx
function AnimatedGroup({
  children, className, variants, preset,
  as: Tag = 'div', asChild: ChildTag = 'div',
}: AnimatedGroupProps) {
  const selectedVariants = {
    item: addDefaultVariants(preset ? presetVariants[preset] : {}),
    container: addDefaultVariants(defaultContainerVariants),
  };
  const containerVariants = variants?.container || selectedVariants.container;
  const itemVariants = variants?.item || selectedVariants.item;

  const MotionComponent = motion[Tag as keyof typeof motion] as typeof motion.div;
  const MotionChild = motion[ChildTag as keyof typeof motion] as typeof motion.div;

  return (
    <MotionComponent initial="hidden" animate="visible"
      variants={containerVariants} className={className}>
      {React.Children.map(children, (child, index) => (
        <MotionChild key={index} variants={itemVariants}>{child}</MotionChild>
      ))}
    </MotionComponent>
  );
}
```

---

### Error 6 — Cannot remove framer-motion
**Symptom:** `ERR_PNPM_CANNOT_REMOVE_MISSING_DEPS Cannot remove 'framer-motion'`  
**Fix:** Nothing to do. `motion` is already installed. Verify imports use `motion/react`.

---

## Directory Structure

```
[client-site]/
├── app/
│   ├── globals.css              # Brand colors — edit :root CSS vars here
│   ├── layout.tsx               # Header (from Tailark) + Footer
│   ├── page.tsx                 # Homepage block stack
│   ├── about/page.tsx
│   ├── events/page.tsx
│   ├── get-involved/page.tsx    # Campaign sites
│   ├── gallery/page.tsx
│   └── api/
│       ├── contact/route.ts
│       └── volunteer/route.ts   # Campaign sites
│
├── components/
│   ├── ui/                      # shadcn primitives — CLI managed
│   │   ├── animated-group.tsx   # Error 5 fix applied here
│   │   └── ...
│   ├── emails/                  # React Email templates
│   │   ├── ContactEmail.tsx
│   │   └── VolunteerEmail.tsx
│   ├── features/                # Custom components
│   │   ├── ContactForm.tsx
│   │   ├── VolunteerForm.tsx
│   │   ├── EventCard.tsx
│   │   └── GalleryGrid.tsx
│   ├── hero-section.tsx         # Tailark blocks
│   ├── header.tsx               # Bundled with hero-section-1
│   ├── logo.tsx                 # Bundled with hero-section-1
│   ├── features-1.tsx
│   ├── stats.tsx
│   ├── testimonials.tsx
│   ├── call-to-action.tsx
│   └── footer.tsx
│
├── data/
│   ├── events.ts
│   ├── issues.ts
│   └── gallery.ts
│
├── lib/
│   ├── types.ts                 # All shared TypeScript interfaces
│   └── utils.ts                 # cn() helper
│
├── public/images/
│   ├── headshot.jpg
│   └── og-image.jpg             # 1200x630 for social sharing
│
├── .env.local                   # Never commit
├── components.json
├── next.config.ts
└── tsconfig.json
```

---

## Brand Colors

```css
/* app/globals.css */
@layer base {
  :root {
    --primary: oklch(0.45 0.2 264);
    --primary-foreground: oklch(1 0 0);
    --accent: oklch(0.72 0.18 85);
    --accent-foreground: oklch(0.145 0 0);
    --background: oklch(1 0 0);
    --foreground: oklch(0.145 0 0);
    --border: oklch(0.9 0 0);
    --radius: 0.5rem;
  }
  .dark {
    --primary: oklch(0.6 0.2 264);
    --background: oklch(0.145 0 0);
    --foreground: oklch(0.985 0 0);
  }
}
```

Convert hex → OKLCH at `oklch.evilmartians.io`. One change updates the entire site.

---

## Deployment — Planned (Not Yet Implemented)

Target architecture once first client site is live:
- **Hosting:** AWS Lightsail per client
- **CI/CD:** GitHub Actions on push to `main`
- **Process manager:** PM2
- **Uptime monitoring:** UptimeRobot (free, 50 monitors)
- **SSL:** AWS ACM via Route 53

This section will be completed with exact commands after first deployment.

---

## Site-Type Checklist

### Campaign
- [ ] Hero — candidate name + headshot
- [ ] Stats — district, endorsement count
- [ ] Features/Issues — platform
- [ ] Testimonials — supporter quotes
- [ ] Events page + EventCard
- [ ] Get Involved — VolunteerForm + ActBlue donate link
- [ ] Gallery + GalleryGrid
- [ ] Contact form
- [ ] `NEXT_PUBLIC_ACTBLUE_URL` in env
- [ ] OG image 1200x630

### Business
- [ ] Hero — name + tagline
- [ ] Features — services
- [ ] Stats — social proof numbers
- [ ] Testimonials
- [ ] Contact form
- [ ] Footer with business info

### Restaurant / Bar
- [ ] Hero — location + photo
- [ ] Menu section
- [ ] Hours
- [ ] Gallery
- [ ] Contact + map
- [ ] Test on mobile first

---

## Retainer Pitch at Every Handoff

> "Everything is live. I also offer a monthly plan at $75–150/mo — hosting, uptime monitoring, content updates, and security. Want to include that going forward?"

---

## Quick Reference

| Task | Command |
|---|---|
| Dev server | `pnpm run dev` |
| Build check | `pnpm run build` |
| Add shadcn component | `pnpm dlx shadcn@latest add [name]` |
| Add Tailark block | `pnpm dlx shadcn add @tailark/[block]-[n]` |
| Find old imports | `grep -r "framer-motion" components/` |
| Hex → OKLCH | `oklch.evilmartians.io` |
| Browse Tailark blocks | `tailark.com/dusk/[category]` |