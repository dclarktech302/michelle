import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import RevealOnScroll from "@/components/features/RevealOnScroll";
import { ArrowRight } from "lucide-react";

export default function EndorsementsCta() {
  return (
    <section className="py-16 md:py-32 bg-muted/20 border-y border-border">
      <div className="mx-auto max-w-5xl px-6">
        <RevealOnScroll variant="up">
          <div className="text-center mb-12">
            <p className="text-xs font-bold tracking-[0.18em] text-primary uppercase mb-3">
              Endorsed By
            </p>
            <h2 className="font-heading text-balance text-4xl font-semibold lg:text-5xl">
              Leaders Standing with Michele
            </h2>
          </div>
        </RevealOnScroll>

        <div className="grid gap-6 sm:grid-cols-2 mb-10">
          {/* Governor Moore — photo card with gradient overlay */}
          <RevealOnScroll variant="left" delay={0}>
            <Card className="rounded-2xl border shadow-sm overflow-hidden relative h-64">
              <Image
                src="/images/johnson-moore.webp"
                alt="Michele W. Johnson with Governor Wes Moore"
                fill
                className="object-cover object-top"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent"
              />
              <CardContent className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <p className="text-xs font-bold tracking-[0.18em] uppercase opacity-70 mb-1">
                  Governor of Maryland
                </p>
                <p className="font-heading text-xl font-semibold leading-tight">
                  Governor Wes Moore
                </p>
              </CardContent>
            </Card>
          </RevealOnScroll>

          {/* MSEA — clean card */}
          <RevealOnScroll variant="right" delay={100}>
            <Card className="rounded-2xl border shadow-sm h-64 flex flex-col items-center justify-center gap-4 p-6">
              <Image
                src="/images/MCEA-Apple-4cp-educatorRecommended-01.webp"
                alt="MSEA Educator Recommended"
                width={80}
                height={80}
                className="object-contain"
              />
              <CardContent className="p-0 text-center">
                <p className="font-semibold text-base leading-snug">
                  Maryland State Education Association
                </p>
                <p className="text-muted-foreground text-sm mt-1">
                  2026 Election Cycle · Educator Recommended
                </p>
              </CardContent>
            </Card>
          </RevealOnScroll>
        </div>

        <RevealOnScroll variant="up" delay={200}>
          <div className="text-center">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-primary/20">
              <Link href="/endorsements">
                View All Endorsements
                <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
