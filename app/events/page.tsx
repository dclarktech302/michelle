import { events } from "@/data/events";
import { CalendarDays, MapPin, Clock, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import JsonLd from "@/components/json-ld";
import type { Event } from "@/lib/types";
import RevealOnScroll from "@/components/features/RevealOnScroll";
import { pageMetadata } from '@/lib/page-metadata'

export const metadata = pageMetadata({
  title: 'Events — Michele W. Johnson for Delegate',
  description:
    'Upcoming campaign events for Michele W. Johnson, candidate for Maryland House of Delegates District 37B.',
  path: '/events',
})

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function isPast(dateStr: string) {
  return new Date(dateStr) < new Date();
}

const SITE_URL = "https://www.michelewjohnson.com";

// UTC offset of America/New_York on the given calendar day ("-04:00" or "-05:00").
function easternOffset(dateStr: string) {
  const noonUtc = new Date(`${dateStr}T12:00:00Z`);
  const part = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/New_York",
    timeZoneName: "longOffset",
  })
    .formatToParts(noonUtc)
    .find((p) => p.type === "timeZoneName")?.value;
  const match = part?.match(/GMT([+-]\d{2}:\d{2})/);
  return match ? match[1] : "-05:00";
}

// "3:00 PM" -> "15:00:00"
function to24h(time: string) {
  const m = time.trim().match(/^(\d{1,2}):(\d{2})\s*(AM|PM)$/i);
  if (!m) return null;
  let hour = Number(m[1]) % 12;
  if (m[3].toUpperCase() === "PM") hour += 12;
  return `${String(hour).padStart(2, "0")}:${m[2]}:00`;
}

function buildEventJsonLd(event: Event) {
  const offset = easternOffset(event.date);
  const [startTime, endTime] = event.time.split(/\s*[–-]\s*/).map(to24h);
  const stamp = (t: string | null | undefined) =>
    t ? `${event.date}T${t}${offset}` : undefined;

  // Street addresses can be withheld (addressNote); only publish city/state then.
  const full = event.address.match(/^(.*), ([^,]+), ([A-Z]{2}) (\d{5})$/);
  const cityState = event.address.match(/^([^,]+), ([A-Z]{2})$/);
  const address = event.addressNote
    ? cityState && {
        "@type": "PostalAddress",
        addressLocality: cityState[1],
        addressRegion: cityState[2],
        addressCountry: "US",
      }
    : full
      ? {
          "@type": "PostalAddress",
          streetAddress: full[1],
          addressLocality: full[2],
          addressRegion: full[3],
          postalCode: full[4],
          addressCountry: "US",
        }
      : event.address;

  return {
    "@context": "https://schema.org",
    "@type": "Event",
    name: event.title,
    startDate: stamp(startTime) ?? event.date,
    ...(stamp(endTime) && { endDate: stamp(endTime) }),
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    location: {
      "@type": "Place",
      name: event.location,
      ...(address && { address }),
    },
    ...(event.description && { description: event.description }),
    organizer: {
      "@type": "Organization",
      name: "Friends of Michele W. Johnson 37B",
      url: SITE_URL,
    },
    ...(event.flyer && { image: `${SITE_URL}${event.flyer}` }),
    url: `${SITE_URL}/events`,
  };
}

export default function EventsPage() {
  const upcoming = events.filter((e) => !isPast(e.date));
  const past = events.filter((e) => isPast(e.date));

  return (
    <div className="pt-32 pb-20">
      {upcoming.map((event) => (
        <JsonLd key={event.id} data={buildEventJsonLd(event)} />
      ))}
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center mb-16">
          <h1 className="font-heading text-4xl font-semibold lg:text-5xl">
            Events
          </h1>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto text-lg">
            Meet Michele. Every conversation matters.
          </p>
        </div>

        {/* Upcoming */}
        {upcoming.length > 0 ? (
          <div className="space-y-6 mb-16">
            <h2 className="text-xl font-semibold font-heading">
              Upcoming Events
            </h2>
            {upcoming.map((event) => (
              <RevealOnScroll key={event.id} variant="up">
              <div
                className="rounded-2xl border p-6 space-y-4 hover:border-primary/50 transition-colors"
              >
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
                    <span>
                      {event.addressNote ? (
                        <>
                          {event.location}
                          <span className="block italic">
                            {event.addressNote}
                          </span>
                        </>
                      ) : event.address === event.location ? (
                        event.location
                      ) : (
                        <>
                          {event.location} — {event.address}
                        </>
                      )}
                    </span>
                  </div>
                </div>
                {event.description && (
                  <p className="text-sm text-muted-foreground">
                    {event.description}
                  </p>
                )}
                {event.flyer && (
                  <div className="mt-4 overflow-hidden rounded-xl border">
                    <Image
                      src={event.flyer}
                      alt={`${event.title} flyer`}
                      width={600}
                      height={800}
                      className="w-full h-auto"
                    />
                  </div>
                )}
                {event.rsvpUrl && (
                  <Button asChild size="sm" variant="outline">
                    <a
                      href={event.rsvpUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      RSVP <ExternalLink className="ml-2 size-3" />
                    </a>
                  </Button>
                )}
              </div>
              </RevealOnScroll>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border bg-muted/30 p-10 text-center mb-16 space-y-3">
            <h2 className="text-lg font-semibold font-heading">
              No upcoming events scheduled
            </h2>
            <p className="text-sm text-muted-foreground max-w-sm mx-auto">
              Election Day is Tuesday, November 3. Polls are open 7 AM to 8 PM.
              Follow on Facebook for the latest announcements.
            </p>
            <Button asChild size="sm">
              <Link href="/vote">How to vote</Link>
            </Button>
            <Button asChild variant="outline" size="sm">
              <a
                href="https://www.facebook.com/share/1AvsFjomFE/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Follow on Facebook
              </a>
            </Button>
          </div>
        )}

        {/* Past events */}
        {past.length > 0 && (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-muted-foreground font-heading">
              Past Events
            </h2>
            {past.map((event) => (
              <div
                key={event.id}
                className="rounded-2xl border border-dashed p-6 opacity-60"
              >
                <h3 className="font-medium">{event.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {formatDate(event.date)} · {event.location}
                </p>
                {event.flyer && (
                  <div className="mt-3 overflow-hidden rounded-xl border opacity-60">
                    <Image
                      src={event.flyer}
                      alt={`${event.title} flyer`}
                      width={400}
                      height={533}
                      className="w-full h-auto max-w-xs"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Stay connected */}
        <div className="mt-16 rounded-2xl border bg-muted/30 p-8 text-center space-y-4">
          <h2 className="text-xl font-semibold font-heading">
            Want to host an event?
          </h2>
          <p className="text-sm text-muted-foreground max-w-md mx-auto">
            Hosting a house party is one of the most powerful ways to support
            the campaign. Fill out the volunteer form and select "Host a house
            party."
          </p>
          <Button asChild size="sm">
            <Link href="/get-involved">Sign Up to Host</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
