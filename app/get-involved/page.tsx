import VolunteerForm from '@/components/features/volunteerForm'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export const metadata = {
  title: 'Get Involved — Michele W. Johnson for Delegate',
  description:
    'Volunteer, host a house party, request a yard sign, or donate to the Michele W. Johnson campaign for Maryland House of Delegates District 37-B.',
}

export default function GetInvolvedPage() {
  return (
    <main className="pt-32 pb-20">
      <div className="mx-auto max-w-5xl px-6">

        {/* Page header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-semibold lg:text-5xl font-heading">Get Involved</h1>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto text-lg">
            Real change starts with neighbors showing up for neighbors.
            Here's how you can help elect Michele W. Johnson to the
            Maryland House of Delegates.
          </p>
        </div>

        <div className="grid gap-16 lg:grid-cols-[1fr_2fr]">

          {/* Left — ways to help + donate */}
          <div className="space-y-10">

            <div className="space-y-4">
              <h2 className="text-xl font-semibold font-heading">Ways to Help</h2>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-primary font-bold mt-0.5">→</span>
                  <span><strong className="text-foreground">Host a house party</strong> — Bring friends and neighbors together to learn about Michele's platform.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold mt-0.5">→</span>
                  <span><strong className="text-foreground">Request a yard sign</strong> — Show your support in Talbot, Dorchester, Wicomico, or Somerset County.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold mt-0.5">→</span>
                  <span><strong className="text-foreground">Volunteer</strong> — Phone banking, canvassing, event help, and more. Every hour counts.</span>
                </li>
              </ul>
            </div>

            {/* Donate section */}
            <div className="rounded-2xl border bg-muted/30 p-6 space-y-4">
              <h2 className="text-xl font-semibold font-heading">Donate</h2>
              <p className="text-sm text-muted-foreground">
                Your contribution directly funds canvassing, yard signs,
                and outreach across District 37-B.
              </p>
              <Button asChild size="lg" className="w-full">
                <Link
                  href="https://secure.actblue.com/donate/michele-w--johnson-1"
                  target="_blank"
                  rel="noopener noreferrer">
                  Donate Online via ActBlue
                </Link>
              </Button>
              <div className="text-xs text-muted-foreground space-y-1 pt-2 border-t">
                <p className="font-medium text-foreground text-sm">Donate by check:</p>
                <p>Payable to: Friends of Michele W. Johnson 37-B</p>
                <p>PO Box 183, Trappe MD 21673</p>
              </div>
            </div>

            {/* Facebook */}
            <div className="space-y-2">
              <h2 className="text-xl font-semibold font-heading">Follow Along</h2>
              <p className="text-sm text-muted-foreground">
                Stay up to date on events, endorsements, and campaign news.
              </p>
              <Button asChild variant="outline" size="sm">
                <Link
                  href="https://www.facebook.com/share/1AvsFjomFE/"
                  target="_blank"
                  rel="noopener noreferrer">
                  Follow on Facebook
                </Link>
              </Button>
            </div>

          </div>

          {/* Right — volunteer form */}
          <div>
            <h2 className="text-xl font-semibold font-heading mb-6">Sign Up to Volunteer</h2>
            <VolunteerForm />
          </div>

        </div>
      </div>
    </main>
  )
}