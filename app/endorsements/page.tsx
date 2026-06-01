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

          {/* MSEA */}
          <RevealOnScroll variant="right" delay={100}>
            <Card className="rounded-2xl border shadow-sm overflow-hidden">
              <CardContent className="p-0">
                <div className="grid sm:grid-cols-[260px_1fr]">
                  <div className="min-h-[260px] bg-muted/30 flex items-center justify-center overflow-hidden group/img">
                    <Image
                      src="/images/MCEA-Apple-4cp-educatorRecommended-01.webp"
                      alt="MSEA Educator Recommended"
                      width={140}
                      height={140}
                      className="object-contain transition-transform duration-300 group-hover/img:scale-110"
                    />
                  </div>
                  <div className="p-8 md:p-10 flex flex-col justify-center">
                    <p className="text-xs font-bold tracking-[0.18em] text-primary uppercase mb-3">
                      Endorsed By
                    </p>
                    <h2 className="font-heading text-2xl font-semibold mb-1">
                      Maryland State Education Association
                    </h2>
                    <p className="text-muted-foreground text-sm mb-1">
                      2026 Election Cycle · Educator Recommended
                    </p>
                    <a
                      href="https://marylandeducators.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-primary hover:underline mb-5">
                      marylandeducators.org <ExternalLink className="size-3" />
                    </a>
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
