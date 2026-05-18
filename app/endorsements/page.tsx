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
        <div className="mx-auto max-w-5xl px-6 space-y-10">

          {/* Governor Moore */}
          <RevealOnScroll variant="left" delay={0}>
            <Card className="rounded-2xl border shadow-sm overflow-hidden">
              <CardContent className="p-0">
                <div className="grid lg:grid-cols-[1fr_2fr]">
                  <div className="relative min-h-[280px]">
                    <Image
                      src="/images/johnson-moore.webp"
                      alt="Michele W. Johnson with Governor Wes Moore"
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                  <div className="p-8 md:p-10 flex flex-col justify-center">
                    <p className="text-xs font-bold tracking-[0.18em] text-primary uppercase mb-3">
                      Endorsed By
                    </p>
                    <h2 className="font-heading text-2xl font-semibold mb-1">
                      Governor Wes Moore
                    </h2>
                    <p className="text-muted-foreground text-sm mb-5">
                      Governor of Maryland
                    </p>
                    <blockquote className="border-l-2 border-primary/30 pl-4 text-muted-foreground italic leading-relaxed text-sm">
                      "Governor Moore has endorsed Michele W. Johnson for
                      Maryland House of Delegates District 37B in the 2026
                      election cycle."
                    </blockquote>
                  </div>
                </div>
              </CardContent>
            </Card>
          </RevealOnScroll>

          {/* MSEA */}
          <RevealOnScroll variant="right" delay={100}>
            <Card className="rounded-2xl border shadow-sm">
              <CardContent className="p-8 md:p-10">
                <div className="flex flex-col sm:flex-row gap-6 sm:items-start">
                  <div className="shrink-0 flex items-start justify-center sm:justify-start">
                    <Image
                      src="/images/MCEA-Apple-4cp-educatorRecommended-01.webp"
                      alt="MSEA Educator Recommended"
                      width={100}
                      height={100}
                      className="object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-bold tracking-[0.18em] text-primary uppercase mb-3">
                      Endorsed By
                    </p>
                    <h2 className="font-heading text-2xl font-semibold mb-1">
                      Maryland State Education Association
                    </h2>
                    <p className="text-muted-foreground text-sm mb-1">
                      2026 Election Cycle · Educator Recommended
                    </p>
                    <Link
                      href="https://marylandeducators.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-primary hover:underline mb-5">
                      marylandeducators.org <ExternalLink className="size-3" />
                    </Link>
                    <blockquote className="border-l-2 border-primary/30 pl-4 text-muted-foreground italic leading-relaxed text-sm">
                      "Based on the recommendation of the Dorchester Educators
                      and the Talbot County Education Association, the Maryland
                      State Education Association endorses Michele W. Johnson
                      for the House of Delegates in the 2026 elections."
                    </blockquote>
                  </div>
                </div>
              </CardContent>
            </Card>
          </RevealOnScroll>

          {/* Placeholder */}
          <RevealOnScroll variant="up" delay={150}>
            <div className="rounded-2xl border border-dashed border-border p-10 text-center text-muted-foreground text-sm">
              More endorsements coming as the campaign progresses.
            </div>
          </RevealOnScroll>

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
