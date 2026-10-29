import type { Metadata } from 'next'
import Link from 'next/link'
import VoteInfo from '@/components/vote-info'
import { Button } from '@/components/ui/button'
import { ELECTION_PHASE } from '@/lib/election-phase'
import { pageMetadata } from '@/lib/page-metadata'

const after = ELECTION_PHASE === 'after'

export const metadata: Metadata = after
  ? pageMetadata({
      title: 'Thank You, District 37B — Michele W. Johnson for Maryland House of Delegates',
      description:
        'Thank you to every voter, volunteer, and supporter in District 37B. Polls have closed; official results are posted by the Maryland State Board of Elections.',
      path: '/vote',
    })
  : pageMetadata({
      title: 'How to Vote — Michele W. Johnson for Maryland House of Delegates',
      description:
        'Election Day is Tuesday, November 3, 2026. Find your polling place, mail-in ballot deadlines, and same-day registration info for District 37B.',
      path: '/vote',
    })

export default function VotePage() {
  return (
    <div className="pt-32 pb-20">
      <VoteInfo headingLevel="h1" />
      {!after && (
        <div className="mx-auto mt-16 max-w-xl px-6 text-center">
          <p className="text-muted-foreground">
            Want to help get out the vote in the final days?
          </p>
          <Button asChild variant="outline" size="lg" className="mt-4 rounded-xl">
            <Link href="/get-involved">Volunteer with the campaign</Link>
          </Button>
        </div>
      )}
    </div>
  )
}
