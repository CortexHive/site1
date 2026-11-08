import Hero from "@/components/hero";
import ServiceDivisions from "@/components/service-divisions";
import PricingPackages from "@/components/pricing-packages";
import Portfolio from "@/components/portfolio";
import HomeAiReceptionistSpotlight from "@/components/home-ai-receptionist-spotlight";
import Process from "@/components/process";
import About from "@/components/about";
import HomeFaq from "@/components/home-faq";
import FinalCta from "@/components/final-cta";
import LeadForm from "@/components/lead-form";

export default function Home() {
  return (
    <>
      {/* 1. Hero Section (Section 5.1 & 5.2): Clean light modern studio aesthetic, interactive showcase & capabilities */}
      <Hero />

      {/* 2. Service Divisions: The 3 Core Practice Areas (Web Platforms, AI & Automation, Software & SaaS) */}
      <ServiceDivisions />

      {/* 3. Engagement Models: Fixed-Scope Delivery, Applied AI Implementation, Full-Stack Product Engineering */}
      <PricingPackages />

      {/* 4. Proof of Delivery / Our Products (Section 10): AuraPDF, MarkScheme, Rydigo, Skyview, EVTradeShow */}
      <Portfolio />

      {/* 5. AI Receptionist Voice Spotlight (Light theme) */}
      <HomeAiReceptionistSpotlight />

      {/* 6. 4-Stage Process (Section 15): Discover, Plan, Build, Launch */}
      <Process />

      {/* 7. Why CortexHive (Section 16): Technology Should Solve Problems. Not Create More. */}
      <About />

      {/* 8. Frequently Asked Questions */}
      <HomeFaq />

      {/* 9. Final Call to Action (Section 17): Have an Idea? Let's Make It Work. */}
      <FinalCta />

      {/* 10. Contact & Project Scoping Form (Section 12): Fast enquiry + Custom Project */}
      <LeadForm />
    </>
  );
}
