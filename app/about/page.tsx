import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export const metadata = {
  title: 'About Michele — Michele W. Johnson for Delegate',
  description:
    'Learn about Michele W. Johnson, candidate for Maryland House of Delegates District 37-B — her roots, her record, and her vision for the Eastern Shore.',
}

export default function AboutPage() {
  return (
    <main className="pt-32 pb-20">
      <div className="mx-auto max-w-5xl px-6">

        {/* Page header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-semibold lg:text-5xl">About Michele</h1>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto text-lg">
            Family, community, and public service are the pillars of my life.
          </p>
        </div>

        {/* Bio + photo */}
        <div className="grid gap-12 lg:grid-cols-[1fr_2fr] items-start mb-20">

          {/* Photo */}
          <div className="mx-auto w-full max-w-sm lg:mx-0">
            <div className="overflow-hidden rounded-2xl border shadow-md">
              <Image
                src="/images/candidate.jpg"
                alt="Michele W. Johnson, Candidate for Maryland House of Delegates District 37-B"
                width={600}
                height={750}
                className="w-full object-cover object-top"
                priority
              />
            </div>
            <div className="mt-4 space-y-3">
              <Button asChild size="lg" className="w-full">
                <Link
                  href="https://secure.actblue.com/donate/michele-w--johnson-1"
                  target="_blank"
                  rel="noopener noreferrer">
                  Donate to the Campaign
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="w-full">
                <Link href="/get-involved">Get Involved</Link>
              </Button>
            </div>
          </div>

          {/* Bio */}
          <div className="space-y-6 text-base leading-relaxed text-muted-foreground">
            <p>
              My earliest memories are joining my Dad — a U.S. Army veteran, journalist,
              labor union leader, and nonprofit leader — at labor union picnics and political
              rallies. I was the kid standing on a chair on election night writing vote count
              updates on the blackboard. Public service has always been part of who I am.
            </p>
            <p>
              My civic engagement journey has included service on a county Board of Zoning
              Appeals, campaign manager roles in nonpartisan political campaigns, statewide
              campaign work, and eight years on the Board of Directors of Congressman Elijah
              Cummings Youth Program — two of those years as Board Chair.
            </p>
            <p>
              Born, raised, and educated in Maryland, my Eastern Shore story began when I
              met my husband Paul, who was born and raised here and whose family roots on
              the lower shore date back to the early 1600s. Paul and I have been married
              40 years and have two adult children — a son and a recently married daughter —
              both of whom live and work on the western shore. We make our home in beautiful
              Talbot County, between Easton and Trappe.
            </p>
            <p>
              Paul and I were both first-generation college graduates. I graduated from the
              University of Maryland, then paid my way through a Master's in Planning at the
              University of Virginia — attending evening classes for four years while working
              full time.
            </p>
            <p>
              Professionally, I served twenty years in nonprofit leadership — as Executive
              Director of a community leadership program and as Vice President of a statewide
              nonprofit helping low-income Maryland students pay for college and career
              training. I also served eight years in the Federal Highway Administration and,
              since 2023, in state government.
            </p>
            <p className="text-foreground font-medium">
              Warm regards,<br />Michele
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-20">
          <h2 className="text-2xl font-semibold mb-10 text-center">A Record of Service</h2>
          <div className="relative border-l-2 border-border pl-8 space-y-10 ml-4">

            <div className="relative">
              <div className="absolute -left-[2.65rem] top-1 size-4 rounded-full border-2 border-primary bg-background" />
              <p className="text-xs font-medium text-primary uppercase tracking-wide mb-1">2023 — Present</p>
              <h3 className="font-semibold text-foreground">State Government</h3>
              <p className="text-sm text-muted-foreground mt-1">
                Serving in Maryland state government, building on decades of public service experience.
              </p>
            </div>

            <div className="relative">
              <div className="absolute -left-[2.65rem] top-1 size-4 rounded-full border-2 border-primary bg-background" />
              <p className="text-xs font-medium text-primary uppercase tracking-wide mb-1">~2014 — 2022</p>
              <h3 className="font-semibold text-foreground">Board of Directors — Elijah Cummings Youth Program</h3>
              <p className="text-sm text-muted-foreground mt-1">
                Eight years of service, including two years as Board Chair, supporting youth
                development and civic engagement.
              </p>
            </div>

            <div className="relative">
              <div className="absolute -left-[2.65rem] top-1 size-4 rounded-full border-2 border-primary bg-background" />
              <p className="text-xs font-medium text-primary uppercase tracking-wide mb-1">~2000 — 2020</p>
              <h3 className="font-semibold text-foreground">Nonprofit Leadership — 20 Years</h3>
              <p className="text-sm text-muted-foreground mt-1">
                Executive Director of a community leadership program and Vice President of a
                statewide nonprofit helping low-income Maryland students access higher education.
              </p>
            </div>

            <div className="relative">
              <div className="absolute -left-[2.65rem] top-1 size-4 rounded-full border-2 border-primary bg-background" />
              <p className="text-xs font-medium text-primary uppercase tracking-wide mb-1">~2000 — 2008</p>
              <h3 className="font-semibold text-foreground">Federal Highway Administration — 8 Years</h3>
              <p className="text-sm text-muted-foreground mt-1">
                Eight years in federal government service at the Federal Highway Administration.
              </p>
            </div>

            <div className="relative">
              <div className="absolute -left-[2.65rem] top-1 size-4 rounded-full border-2 border-primary bg-background" />
              <p className="text-xs font-medium text-primary uppercase tracking-wide mb-1">Education</p>
              <h3 className="font-semibold text-foreground">University of Maryland + University of Virginia</h3>
              <p className="text-sm text-muted-foreground mt-1">
                Bachelor's from University of Maryland. Master's in Planning from the University
                of Virginia — completed while working full time as a first-generation college graduate.
              </p>
            </div>

          </div>
        </div>

        {/* District info */}
        <div className="rounded-2xl border bg-muted/30 p-8 text-center space-y-4">
          <h2 className="text-xl font-semibold">Maryland House of Delegates · District 37-B</h2>
          <p className="text-muted-foreground text-sm max-w-lg mx-auto">
            District 37-B covers Talbot, Dorchester, Wicomico, and Somerset Counties —
            communities Michele knows, loves, and is committed to serving.
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            {['Talbot County', 'Dorchester County', 'Wicomico County', 'Somerset County'].map(county => (
              <span
                key={county}
                className="rounded-full border px-4 py-1.5 text-sm font-medium">
                {county}
              </span>
            ))}
          </div>
        </div>

      </div>
    </main>
  )
}