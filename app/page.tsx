import type { Metadata } from "next";
import HeroSection from "@/components/hero-section";
import Stats from "@/components/stats";
import Features from "@/components/features-1";
import EndorsementsCta from "@/components/endorsements-cta";
import Testimonials from "@/components/testimonials";
import CallToAction from "@/components/call-to-action";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Michele W. Johnson for Maryland House of Delegates, District 37B",
  description:
    "Vote Michele W. Johnson on November 3 for Maryland House of Delegates, District 37B — Talbot, Caroline, Dorchester, and Wicomico Counties.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <Stats />
      <Features />
      <EndorsementsCta />
      <Testimonials />
      <section className="py-16 md:py-24 bg-muted/20 border-y border-border">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="text-xs font-bold tracking-[0.18em] text-primary uppercase mb-3">
            Election Day
          </p>
          <h2 className="font-heading text-3xl lg:text-4xl font-semibold">
            How to vote
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Election Day is Tuesday, November 3, 2026. Polls open 7 AM to 8 PM.
          </p>
          <Button asChild size="lg" className="mt-8 rounded-xl">
            <a
              href="https://voterservices.elections.maryland.gov/PollingPlaceSearch"
              target="_blank"
              rel="noopener noreferrer"
            >
              Find your polling place <ExternalLink className="ml-2 size-4" />
            </a>
          </Button>
        </div>
      </section>
      <CallToAction />
    </>
  );
}
