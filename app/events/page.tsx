import { events } from '@/data/events'
import { CalendarDays, MapPin, Clock, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export const metadata = {
  title: 'Events — Michele W. Johnson for Delegate',
  description:
    'Upcoming campaign events for Michele W. Johnson, candidate for Maryland House of Delegates District 37B.',
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

function isPast(dateStr: string) {
  return new Date(dateStr) < new Date()
}

export default function EventsPage() {
  const upcoming = events.filter(e => !isPast(e.date))
  const past = events.filter(e => isPast(e.date))

  return (
    <main className="pt-32 pb-20">
      <div className="mx-auto max-w-4xl px-6">

        <div className="text-center mb-16">
          <h1 className="text-4xl font-semibold lg:text-5xl font-heading">Events</h1>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto text-lg">
            Come out and meet Michele. Every conversation matters.
          </p>
        </div>

        {/* Upcoming */}
        {upcoming.length > 0 ? (
          <div className="space-y-6 mb-16">
            <h2 className="text-xl font-semibold font-heading">Upcoming Events</h2>
            {upcoming.map(event => (
              <div
                key={event.id}
                className="rounded-2xl border p-6 space-y-4 hover:border-primary/50 transition-colors">
                <h3 className="text-lg font-semibold">{event.title}</h3>
                <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <CalendarDays className="size-4 shrink-0" />
                    <span>{formatDate(event.date)}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="size-4 shrink-0" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="size-4 shrink-0" />
                    <span>{event.location} — {event.address}</span>
                  </div>
                </div>
                {event.description && (
                  <p className="text-sm text-muted-foreground">{event.description}</p>
                )}
                {event.rsvpUrl && (
                  <Button asChild size="sm" variant="outline">
                    <Link
                      href={event.rsvpUrl}
                      target="_blank"
                      rel="noopener noreferrer">
                      RSVP <ExternalLink className="ml-2 size-3" />
                    </Link>
                  </Button>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border bg-muted/30 p-10 text-center mb-16 space-y-3">
            <h2 className="text-lg font-semibold font-heading">No upcoming events scheduled</h2>
            <p className="text-sm text-muted-foreground max-w-sm mx-auto">
              Check back soon or follow on Facebook for the latest event announcements.
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
        )}

        {/* Past events */}
        {past.length > 0 && (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-muted-foreground font-heading">Past Events</h2>
            {past.map(event => (
              <div
                key={event.id}
                className="rounded-2xl border border-dashed p-6 opacity-60">
                <h3 className="font-medium">{event.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {formatDate(event.date)} · {event.location}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Stay connected */}
        <div className="mt-16 rounded-2xl border bg-muted/30 p-8 text-center space-y-4">
          <h2 className="text-xl font-semibold font-heading">Want to host an event?</h2>
          <p className="text-sm text-muted-foreground max-w-md mx-auto">
            Hosting a house party is one of the most powerful ways to support the campaign.
            Fill out the volunteer form and select "Host a house party."
          </p>
          <Button asChild size="sm">
            <Link href="/get-involved">Sign Up to Host</Link>
          </Button>
        </div>

      </div>
    </main>
  )
}