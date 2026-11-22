import { Metadata } from "next";
import Hero from "@/components/hero";
import PricingPackages from "@/components/pricing-packages";
import HomeAiReceptionistSpotlight from "@/components/home-ai-receptionist-spotlight";
import ServiceDivisions from "@/components/service-divisions";
import Portfolio from "@/components/portfolio";
import About from "@/components/about";
import Process from "@/components/process";
import HomeFaq from "@/components/home-faq";
import FinalCta from "@/components/final-cta";
import LeadForm from "@/components/lead-form";

export const metadata: Metadata = {
  title: "CortexHive — Websites, AI Automation & Custom Software Agency UK",
  description:
    "From professional websites starting at £99 to 24/7 AI receptionists, business automation and custom software development, CortexHive helps UK businesses grow.",
  alternates: {
    canonical: "https://cortexhive.co.uk",
  },
};

export default function Home() {
  return (
    <>
      {/* Sections 1 & 2: Hero + Trust & Core Capabilities */}
      <Hero />

      {/* Section 3: AI Receptionist */}
      <HomeAiReceptionistSpotlight />

      {/* Section 4: Website Design for Small Businesses (£99 / £349 / £699) */}
      <PricingPackages />

      {/* Sections 5 & 6: AI Automation + Custom Software & SaaS Development */}
      <ServiceDivisions />

      {/* Section 7: Our Products & Portfolio (MarkScheme, AuraPDF, Rydigo, Skyview, EV Trade Show) */}
      <Portfolio />

      {/* Section 8: Why Choose CortexHive */}
      <About />

      {/* Section 9: How It Works (Discover, Plan, Build, Launch) */}
      <Process />

      {/* Section 10: FAQ */}
      <HomeFaq />

      {/* Section 11: Final CTA */}
      <FinalCta />

      {/* Consultation & Enquiry Form */}
      <LeadForm />
    </>
  );
}
