import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import RevealOnScroll from "@/components/features/RevealOnScroll";
import { ExternalLink } from "lucide-react";

export const metadata = {
  title: "Endorsements | Michele W. Johnson for MD House of Delegates",
  description:
    "Leaders and organizations across District 37B and Maryland standing with Michele W. Johnson.",
};

const endorsements = [
  {
    id: "moore",
    image: "/images/wes_moore_headshot.jpg",
    imageAlt: "Governor Wes Moore",
    imageClass: "object-cover rounded-full",
    name: "Governor Wes Moore",
    attribution: "Governor Wes Moore",
    quote:
      "We have delivered enormous progress for the people of Maryland since taking office, but there is still more work to do, and Michele Johnson is a leader who will help us finish the job in District 37B. In order to continue record drops in violent crime, keep lowering costs for Maryland families, and make our schools even stronger I need a team that will push back and push forward to build a Maryland that leaves no one behind. Together with Michele, we will work day and night alongside one another to continue the progress we've seen in District 37B and throughout Maryland.",
    description: null,
    href: "https://wesmoore.com",
    linkLabel: "wesmoore.com",
  },
  {
    id: "msea",
    image: "/images/MCEA-Apple-4cp-educatorRecommended-01.webp",
    imageAlt: "MSEA Educator Recommended",
    imageClass: "object-contain",
    name: "Maryland State Education Association",
    attribution: "2026 Election Cycle · Educator Recommended",
    quote:
      "Based on the recommendation of the Dorchester Educators and the Talbot County Education Association — the Maryland State Education Association endorses Michele W. Johnson for the House of Delegates in the 2026 elections.",
    description: null,
    href: "https://marylandeducators.org",
    linkLabel: "marylandeducators.org",
  },
  {
    id: "lierman",
    image: "/images/Brooke Lierman Headshot official.webp",
    imageAlt: "Maryland Comptroller Brooke Lierman",
    imageClass: "object-cover rounded-full",
    name: "Maryland Comptroller Brooke Lierman",
    attribution: "Maryland Comptroller Brooke Lierman",
    quote:
      "Michele Johnson is exactly the kind of leader the Eastern Shore needs. She knows her neighbors, she shows up for them, and she is ready to fight for an economy that works for every family in Caroline, Dorchester, Talbot, and Wicomico. I am proud to support her!",
    description: null,
    href: "https://www.brookelierman.com",
    linkLabel: "brookelierman.com",
  },
  {
    id: "thirdact",
    image: "/images/wg-thumb-maryland.webp",
    imageAlt: "Third Act Maryland",
    imageClass: "object-contain",
    name: "Third Act Maryland",
    attribution: null,
    quote: null,
    description:
      "Third Act Maryland endorses Michele W. Johnson for Maryland House of Delegates, District 37B",
    href: "https://thirdact.org/maryland",
    linkLabel: "thirdact.org/maryland",
  },
  {
    id: "mdnow",
    image: "/images/2025-MDNOWPAC_SqWebLogo.webp",
    imageAlt: "Maryland NOW PAC",
    imageClass: "object-contain",
    name: "Maryland NOW PAC",
    attribution: null,
    quote: null,
    description:
      "Maryland NOW PAC endorses Michele W. Johnson for Maryland House of Delegates, District 37B",
    href: "https://marylandnow.org",
    linkLabel: "marylandnow.org",
  },
];

export default function EndorsementsPage() {
  return (
    <div className="min-h-screen">

      {/* Page header */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-16 bg-muted/20 border-b border-border">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <p className="text-xs font-bold tracking-[0.18em] text-primary uppercase mb-4">
            Official Endorsements
          </p>
          <h1 className="font-heading text-4xl font-semibold lg:text-5xl">
            Endorsements
          </h1>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
            Leaders and organizations across District 37B and Maryland standing
            with Michele W. Johnson.
          </p>
        </div>
      </section>

      {/* Endorsement cards */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-6 space-y-8">
          {endorsements.map((e, i) => (
            <RevealOnScroll
              key={e.id}
              variant={i % 2 === 0 ? "left" : "right"}
              delay={0}>
              <Card className="rounded-2xl border shadow-sm overflow-hidden">
                <CardContent className="p-0">
                  <div className="grid sm:grid-cols-[220px_1fr]">

                    {/* Image column */}
                    <div className="bg-muted/30 flex items-center justify-center min-h-[200px] p-6">
                      <Image
                        src={e.image}
                        alt={e.imageAlt}
                        width={160}
                        height={160}
                        className={e.imageClass}
                      />
                    </div>

                    {/* Content column */}
                    <div className="p-8 flex flex-col justify-center">
                      <p className="text-xs font-bold tracking-[0.18em] text-primary uppercase mb-3">
                        Endorsed By
                      </p>
                      <h2 className="font-heading text-2xl font-semibold mb-1">
                        {e.name}
                      </h2>
                      {e.attribution && (
                        <p className="text-muted-foreground text-sm mb-1">
                          {e.attribution}
                        </p>
                      )}
                      <Link
                        href={e.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs text-primary hover:underline mb-5">
                        {e.linkLabel} <ExternalLink className="size-3" />
                      </Link>
                      {e.quote && (
                        <blockquote className="border-l-2 border-primary/30 pl-4 text-muted-foreground italic leading-relaxed text-sm">
                          &ldquo;{e.quote}&rdquo;
                        </blockquote>
                      )}
                      {!e.quote && e.description && (
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {e.description}
                        </p>
                      )}
                    </div>

                  </div>
                </CardContent>
              </Card>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-12 border-t border-border bg-muted/20">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h3 className="font-heading text-xl font-semibold mb-2">
            Want to endorse Michele?
          </h3>
          <p className="text-muted-foreground text-sm mb-6">
            Organizations and community leaders are encouraged to reach out.
          </p>
          <Button asChild variant="outline">
            <Link href="mailto:FriendsOfMicheleWJohnson37B@gmail.com">
              FriendsOfMicheleWJohnson37B@gmail.com
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
