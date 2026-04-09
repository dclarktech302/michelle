import HeroSection from "@/components/hero-section";
import Stats from "@/components/stats";
import Testimonials from "@/components/testimonials";
import CallToAction from "@/components/call-to-action";
import Features from "@/components/features-1";

export default function Home() {
  return (
   <>
    <HeroSection />
	<Stats />
  <Features />
	<Testimonials />
	<CallToAction />
   </>
  );
}
