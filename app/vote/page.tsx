import type { Metadata } from 'next'
import Link from 'next/link'
import VoteInfo from '@/components/vote-info'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'How to Vote — Michele W. Johnson for Maryland House of Delegates',
  description:
    'Election Day is Tuesday, November 3, 2026. Find your polling place, mail-in ballot deadlines, and same-day registration info for District 37B.',
  alternates: { canonical: '/vote' },
}

export default function VotePage() {
  return (
    <div className="pt-32 pb-20">
      <VoteInfo headingLevel="h1" />
      <div className="mx-auto mt-16 max-w-xl px-6 text-center">
        <p className="text-muted-foreground">
          Want to help get out the vote in the final days?
        </p>
        <Button asChild variant="outline" size="lg" className="mt-4 rounded-xl">
          <Link href="/get-involved">Volunteer with the campaign</Link>
        </Button>
      </div>
    </div>
  )
}
