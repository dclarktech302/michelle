import VolunteerForm from '@/components/features/volunteerForm'
import { Button } from '@/components/ui/button'
import { pageMetadata } from '@/lib/page-metadata'
import { ELECTION_PHASE } from '@/lib/election-phase'

const after = ELECTION_PHASE === 'after'

export const metadata = pageMetadata(
  after
    ? {
        title: 'Stay Connected — Michele W. Johnson',
        description:
          'Thank you, District 37B. Follow Michele W. Johnson on Facebook to stay connected.',
        path: '/get-involved',
      }
    : {
        title: 'Get Involved — Michele W. Johnson for Delegate',
        description:
          'Volunteer, host a house party, or request a yard sign with the Michele W. Johnson campaign for Maryland House of Delegates District 37B.',
        path: '/get-involved',
      },
)

function StayConnected() {
  return (
    <div className="pt-32 pb-20">
      <div className="mx-auto max-w-xl px-6 text-center">
        <h1 className="text-4xl font-semibold lg:text-5xl font-heading">
          Thank you, District 37B
        </h1>
        <p className="mt-4 text-muted-foreground text-lg">
          To everyone who volunteered, hosted, knocked on doors, and voted:
          thank you. The campaign is no longer taking volunteer sign-ups.
          To stay connected, follow along on Facebook.
        </p>
        <Button asChild size="lg" className="mt-8 rounded-xl">
          <a
            href="https://www.facebook.com/share/1AvsFjomFE/"
            target="_blank"
            rel="noopener noreferrer">
            Follow on Facebook
          </a>
        </Button>
      </div>
    </div>
  )
}

export default function GetInvolvedPage() {
  if (after) return <StayConnected />

  return (
    <div className="pt-32 pb-20">
      <div className="mx-auto max-w-5xl px-6">

        <div className="text-center mb-16">
          <h1 className="text-4xl font-semibold lg:text-5xl font-heading">
            Get Involved
          </h1>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto text-lg">
            Real change starts with neighbors showing up for neighbors.
            Here's how you can help elect Michele W. Johnson to the
            Maryland House of Delegates.
          </p>
        </div>

        <div className="grid gap-16 lg:grid-cols-[1fr_2fr]">

          <div className="space-y-10">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold font-heading">Ways to Help</h2>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-primary font-bold mt-0.5">→</span>
                  <span>
                    <strong className="text-foreground">Host a house party</strong>{' '}
                    — Bring friends and neighbors together to meet Michele,
                    learn about her platform, and ask questions.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold mt-0.5">→</span>
                  <span>
                    <strong className="text-foreground">Request a yard sign</strong>{' '}
                    — Show your support in Talbot, Caroline, Dorchester,
                    or Wicomico County.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold mt-0.5">→</span>
                  <span>
                    <strong className="text-foreground">Volunteer</strong>{' '}
                    — Phone banking, canvassing, event help, and more.
                    Every hour counts.
                  </span>
                </li>
              </ul>
            </div>

            <div className="space-y-2">
              <h2 className="text-xl font-semibold font-heading">Follow Along</h2>
              <p className="text-sm text-muted-foreground">
                Stay up to date on events, endorsements, and campaign news.
              </p>
              <Button asChild variant="outline" size="sm">
                <a
                  href="https://www.facebook.com/share/1AvsFjomFE/"
                  target="_blank"
                  rel="noopener noreferrer">
                  Follow on Facebook
                </a>
              </Button>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold font-heading mb-6">
              Sign Up to Volunteer
            </h2>
            <VolunteerForm />
          </div>

        </div>
      </div>
    </div>
  )
}
