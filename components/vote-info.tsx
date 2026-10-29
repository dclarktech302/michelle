import { Button } from '@/components/ui/button'
import { ExternalLink } from 'lucide-react'
import { ELECTION_PHASE, POLLING_URL, OFFICIAL_RESULTS_URL } from '@/lib/election-phase'

const steps = [
    {
        title: 'In person on Election Day',
        body: 'Tuesday, November 3, 2026. Polls are open 7 AM to 8 PM. If you are in line by 8 PM, you can still vote.',
    },
    {
        title: 'Mail-in ballot',
        body: 'Postmark it on or before November 3, or hand-deliver it to an approved drop box or your local board of elections by 8 PM on Election Day.',
    },
    {
        title: 'Not registered yet?',
        body: 'Same-day registration is available in Maryland, so you can still register and vote.',
    },
]

export default function VoteInfo({ headingLevel = 'h2' }: { headingLevel?: 'h1' | 'h2' }) {
    const Heading = headingLevel

    if (ELECTION_PHASE === 'after') {
        return (
            <div className="mx-auto max-w-3xl px-6 text-center">
                <p className="text-xs font-bold tracking-[0.18em] text-primary uppercase mb-3">
                    Election Day, November 3, 2026
                </p>
                <Heading className="font-heading text-3xl lg:text-4xl font-semibold">
                    Thank you, District 37B
                </Heading>
                <p className="mt-4 text-muted-foreground text-lg">
                    Thank you to every voter, volunteer, and supporter across Talbot,
                    Caroline, Dorchester, and Wicomico Counties. Polls have closed.
                    Official results are posted by the Maryland State Board of Elections.
                </p>
                <Button asChild size="lg" className="mt-8 rounded-xl">
                    <a href={OFFICIAL_RESULTS_URL} target="_blank" rel="noopener noreferrer">
                        Official election results <ExternalLink className="ml-2 size-4" />
                    </a>
                </Button>
            </div>
        )
    }

    const today = ELECTION_PHASE === 'election-day'
    return (
        <div className="mx-auto max-w-4xl px-6 text-center">
            <p className="text-xs font-bold tracking-[0.18em] text-primary uppercase mb-3">
                {today ? 'Election Day is today' : 'Election Day is Tuesday, November 3'}
            </p>
            <Heading className="font-heading text-3xl lg:text-4xl font-semibold">
                {today ? 'Polls are open until 8 PM' : 'How to vote'}
            </Heading>
            <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
                Michele W. Johnson is on the ballot for Maryland House of Delegates,
                District 37B. Here is how to make your vote count.
            </p>

            <div className="mt-10 grid gap-4 text-left md:grid-cols-3">
                {steps.map((s) => (
                    <div key={s.title} className="rounded-2xl border bg-background p-6">
                        <h3 className="font-heading text-lg font-semibold">{s.title}</h3>
                        <p className="mt-2 text-sm text-muted-foreground">{s.body}</p>
                    </div>
                ))}
            </div>

            <Button asChild size="lg" className="mt-10 rounded-xl">
                <a href={POLLING_URL} target="_blank" rel="noopener noreferrer">
                    Find your polling place <ExternalLink className="ml-2 size-4" />
                </a>
            </Button>
            <p className="mt-4 text-xs text-muted-foreground">
                Official information: elections.maryland.gov
            </p>
        </div>
    )
}
