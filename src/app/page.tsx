import Hero from "@/components/hero";
import Services from "@/components/services";
import HomeTradesSpotlight from "@/components/home-trades-spotlight";
import HomeAiReceptionistSpotlight from "@/components/home-ai-receptionist-spotlight";
import Portfolio from "@/components/portfolio";
import Process from "@/components/process";
import About from "@/components/about";
import HomeFaq from "@/components/home-faq";
import LeadForm from "@/components/lead-form";

export default function Home() {
  return (
    <>
      {/* 1. Hero Section with Real Product Showcase */}
      <Hero />

      {/* 2. Services Overview */}
      <Services />

      {/* 3. Small Business Digital Solutions (£50 Starter Offer & Trades Focus) */}
      <HomeTradesSpotlight />

      {/* 4. AI Receptionist Introduction (Never Miss a Call 24/7) */}
      <HomeAiReceptionistSpotlight />

      {/* 5. Why Choose CortexHive (Values & Disciplines) */}
      <About />

      {/* 6. How We Work (Discovery to Deployment) */}
      <Process />

      {/* 7. Selected Portfolio & Real Case Studies */}
      <Portfolio />

      {/* 8. Frequently Asked Questions */}
      <HomeFaq />

      {/* 9. Contact & Enquiry Section (Multi-Channel + Netlify + WhatsApp) */}
      <LeadForm />
    </>
  );
}
