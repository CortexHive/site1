import Hero from "@/components/hero";
import Services from "@/components/services";
import Portfolio from "@/components/portfolio";
import Process from "@/components/process";
import About from "@/components/about";
import LeadForm from "@/components/lead-form";

export default function Home() {
  return (
    <>
      {/* Hero Section with Real Product Showcase */}
      <Hero />

      {/* 3 Core Services: AI Automation, Custom AI Apps, Software/MVPs */}
      <Services />

      {/* Real Portfolio: 10 Verified Projects & Case Studies */}
      <Portfolio />

      {/* How We Work & Distributed Delivery Model */}
      <Process />

      {/* Company Profile & Core Values */}
      <About />

      {/* Project Enquiry Form */}
      <LeadForm />
    </>
  );
}
