import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import RevealOnScroll from "@/components/features/RevealOnScroll";
import { ArrowRight, ExternalLink } from "lucide-react";

export default function EndorsementsCta() {
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

        <div className="grid gap-6 sm:grid-cols-2 mb-10">

          {/* MSEA */}
          <RevealOnScroll variant="left" delay={0}>
            <Card className="rounded-2xl border shadow-sm h-full">
              <CardContent className="flex flex-col sm:flex-row items-center gap-6 p-8 h-full">
                <div className="shrink-0 flex items-center justify-center">
                  <Image
                    src="/images/MCEA-Apple-4cp-educatorRecommended-01.webp"
                    alt="MSEA Educator Recommended"
                    width={100}
                    height={100}
                    className="object-contain"
                  />
                </div>
                <div>
                  <p className="font-heading font-semibold text-lg leading-snug">
                    Maryland State Education Association
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    2026 Election Cycle · Educator Recommended
                  </p>
                  <Link
                    href="https://marylandeducators.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-primary hover:underline mt-2">
                    marylandeducators.org <ExternalLink className="size-3" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          </RevealOnScroll>

          {/* Brooke Lierman */}
          <RevealOnScroll variant="right" delay={100}>
            <Card className="rounded-2xl border shadow-sm h-full">
              <CardContent className="flex flex-col sm:flex-row items-center gap-6 p-8 h-full">
                <div className="shrink-0 flex items-center justify-center">
                  <Image
                    src="/images/Brooke Lierman Headshot official.webp"
                    alt="Maryland Comptroller Brooke Lierman"
                    width={100}
                    height={100}
                    className="object-contain rounded-full"
                  />
                </div>
                <div>
                  <p className="font-heading font-semibold text-lg leading-snug">
                    Maryland Comptroller Brooke Lierman
                  </p>
                  <p className="text-sm text-muted-foreground mt-1 italic">
                    &ldquo;Michele Johnson is exactly the kind of leader the Eastern Shore needs.&rdquo;
                  </p>
                  <Link
                    href="https://www.brookelierman.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-primary hover:underline mt-2">
                    brookelierman.com <ExternalLink className="size-3" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          </RevealOnScroll>

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
  );
}
