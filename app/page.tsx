import type { Metadata } from "next";
import HeroSection from "@/components/hero-section";
import Stats from "@/components/stats";
import Features from "@/components/features-1";
import EndorsementsCta from "@/components/endorsements-cta";
import Testimonials from "@/components/testimonials";
import CallToAction from "@/components/call-to-action";

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
      <CallToAction />
    </>
  );
}
