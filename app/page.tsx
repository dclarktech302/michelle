import HeroSection from "@/components/hero-section";
import Stats from "@/components/stats";
import Features from "@/components/features-1";
import EndorsementsCta from "@/components/endorsements-cta";
import Testimonials from "@/components/testimonials";
import CallToAction from "@/components/call-to-action";

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
