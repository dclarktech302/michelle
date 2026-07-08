'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import RevealOnScroll from '@/components/features/RevealOnScroll'
import { ArrowRight, ExternalLink } from 'lucide-react'

type EndorsementEntry = {
  id: string
  name: string
  image: string
  imageAlt: string
  imageClass: string
  quote: string | null
  description?: string | null
  attribution: string | null
  link: string
  linkLabel: string
}

const moore: EndorsementEntry = {
  id: 'moore',
  name: 'Governor Wes Moore',
  image: '/images/wes_moore_headshot.jpg',
  imageAlt: 'Governor Wes Moore',
  imageClass: 'object-cover rounded-full',
  quote:
    "We have delivered enormous progress for the people of Maryland since taking office, but there is still more work to do, and Michele Johnson is a leader who will help us finish the job in District 37B. In order to continue record drops in violent crime, keep lowering costs for Maryland families, and make our schools even stronger I need a team that will push back and push forward to build a Maryland that leaves no one behind. Together with Michele, we will work day and night alongside one another to continue the progress we've seen in District 37B and throughout Maryland.",
  description: null,
  attribution: 'Governor Wes Moore',
  link: 'https://wesmoore.com',
  linkLabel: 'wesmoore.com',
}

const otherEndorsements: EndorsementEntry[] = [
  {
    id: 'msea',
    name: 'Maryland State Education Association',
    image: '/images/MCEA-Apple-4cp-educatorRecommended-01.webp',
    imageAlt: 'MSEA Educator Recommended',
    imageClass: 'object-contain',
    quote:
      'Based on the recommendation of the Dorchester Educators and the Talbot County Education Association — the Maryland State Education Association endorses Michele W. Johnson for the House of Delegates in the 2026 elections.',
    description: null,
    attribution: 'Maryland State Education Association · 2026 Election Cycle · Educator Recommended',
    link: 'https://marylandeducators.org',
    linkLabel: 'marylandeducators.org',
  },
  {
    id: 'lierman',
    name: 'Maryland Comptroller Brooke Lierman',
    image: '/images/Brooke Lierman Headshot official.webp',
    imageAlt: 'Maryland Comptroller Brooke Lierman',
    imageClass: 'object-cover rounded-full',
    quote:
      'Michele Johnson is exactly the kind of leader the Eastern Shore needs. She knows her neighbors, she shows up for them, and she is ready to fight for an economy that works for every family in Caroline, Dorchester, Talbot, and Wicomico. I am proud to support her!',
    description: null,
    attribution: 'Maryland Comptroller Brooke Lierman',
    link: 'https://www.brookelierman.com',
    linkLabel: 'brookelierman.com',
  },
  {
    id: 'thirdact',
    name: 'Third Act Maryland',
    image: '/images/wg-thumb-maryland.webp',
    imageAlt: 'Third Act Maryland',
    imageClass: 'object-contain',
    quote: null,
    description:
      'Third Act Maryland endorses Michele W. Johnson for Maryland House of Delegates, District 37B',
    attribution: null,
    link: 'https://thirdact.org/maryland',
    linkLabel: 'thirdact.org/maryland',
  },
  {
    id: 'mdnow',
    name: 'Maryland NOW PAC',
    image: '/images/2025-MDNOWPAC_SqWebLogo.webp',
    imageAlt: 'Maryland NOW PAC',
    imageClass: 'object-contain',
    quote: null,
    description:
      'Maryland NOW PAC endorses Michele W. Johnson for Maryland House of Delegates, District 37B',
    attribution: null,
    link: 'https://marylandnow.org',
    linkLabel: 'marylandnow.org',
  },
]

function EndorsementCard({
  e,
  variant,
  delay,
}: {
  e: EndorsementEntry
  variant: 'up' | 'left' | 'right' | 'scale' | 'zoom'
  delay: number
}) {
  return (
    <RevealOnScroll variant={variant} delay={delay}>
      <Card className="rounded-2xl border shadow-sm overflow-hidden">
        <CardContent className="p-0">
          <div className="grid sm:grid-cols-[220px_1fr]">
            <div className="bg-muted/30 flex items-center justify-center min-h-[200px] p-6">
              <Image
                src={e.image}
                alt={e.imageAlt}
                width={160}
                height={160}
                className={e.imageClass}
              />
            </div>
            <div className="p-8 flex flex-col justify-center">
              <p className="text-xs font-bold tracking-[0.18em] text-primary uppercase mb-3">
                Endorsed By
              </p>
              <h3 className="font-heading text-xl font-semibold mb-1">{e.name}</h3>
              {e.attribution && (
                <p className="text-muted-foreground text-sm mb-1">{e.attribution}</p>
              )}
              <Link
                href={e.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-primary hover:underline mb-4">
                {e.linkLabel} <ExternalLink className="size-3" />
              </Link>
              {e.quote ? (
                <blockquote className="border-l-2 border-primary/30 pl-4 text-muted-foreground italic leading-relaxed text-sm">
                  &ldquo;{e.quote}&rdquo;
                </blockquote>
              ) : e.description ? (
                <p className="text-muted-foreground text-sm leading-relaxed">{e.description}</p>
              ) : null}
            </div>
          </div>
        </CardContent>
      </Card>
    </RevealOnScroll>
  )
}

export default function EndorsementsCta() {
  const [slot2, setSlot2] = useState<EndorsementEntry | null>(null)

  useEffect(() => {
    setSlot2(otherEndorsements[Math.floor(Math.random() * otherEndorsements.length)])
  }, [])

  return (
    <section className="py-16 md:py-24 bg-muted/20 border-y border-border">
      <div className="mx-auto max-w-5xl px-6">

        <RevealOnScroll variant="up">
          <div className="text-center mb-10">
            <p className="text-xs font-bold tracking-[0.18em] text-primary uppercase mb-3">
              Endorsed By
            </p>
            <h2 className="font-heading text-3xl lg:text-4xl font-semibold">
              Leaders Standing with Michele
            </h2>
            <p className="text-muted-foreground text-base max-w-xl mx-auto mt-3 italic">
              &ldquo;Based on the recommendation of the Dorchester Educators and the
              Talbot County Education Association — the Maryland State Education
              Association endorses Michele W. Johnson for the House of Delegates
              in the 2026 elections.&rdquo;
            </p>
          </div>
        </RevealOnScroll>

        <div className="space-y-6 mb-10">
          <EndorsementCard e={moore} variant="left" delay={0} />
          {slot2 ? (
            <EndorsementCard e={slot2} variant="right" delay={100} />
          ) : (
            <div className="h-[200px] rounded-2xl bg-muted/20 animate-pulse" aria-hidden />
          )}
        </div>

        <RevealOnScroll variant="up" delay={200}>
          <div className="text-center">
            <Button asChild variant="default" size="lg" className="rounded-xl">
              <Link href="/endorsements">
                See Who&apos;s Endorsing Michele
                <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
            <p className="text-xs text-muted-foreground text-center mt-3">
              More endorsements are being added as the campaign grows.
            </p>
          </div>
        </RevealOnScroll>

      </div>
    </section>
  )
}
