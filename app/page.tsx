import type { Metadata } from "next";
import HeroSection from "@/components/hero-section";
import Stats from "@/components/stats";
import Features from "@/components/features-1";
import EndorsementsCta from "@/components/endorsements-cta";
import Testimonials from "@/components/testimonials";
import CallToAction from "@/components/call-to-action";
import VoteInfo from "@/components/vote-info";
import { ELECTION_PHASE } from "@/lib/election-phase";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = pageMetadata({
  title: "Michele W. Johnson for Maryland House of Delegates, District 37B",
  description:
    ELECTION_PHASE === "after"
      ? "Michele W. Johnson, candidate for Maryland House of Delegates, District 37B — Talbot, Caroline, Dorchester, and Wicomico Counties. Thank you, District 37B."
      : "Vote Michele W. Johnson on November 3 for Maryland House of Delegates, District 37B — Talbot, Caroline, Dorchester, and Wicomico Counties.",
  path: "/",
});

export default function Home() {
  return (
    <>
      <HeroSection />
      <Stats />
      <Features />
      <EndorsementsCta />
      <Testimonials />
      <section className="py-16 md:py-24 bg-muted/20 border-y border-border">
        <VoteInfo />
      </section>
      <CallToAction />
    </>
  );
}
