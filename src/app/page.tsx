import Hero from "@/components/hero";
import Services from "@/components/services";
import Portfolio from "@/components/portfolio";
import Process from "@/components/process";
import Testimonials from "@/components/testimonials";
import About from "@/components/about";
import LeadForm from "@/components/lead-form";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Services Section */}
      <Services />

      {/* Portfolio Section */}
      <Portfolio />

      {/* Process Section */}
      <Process />

      {/* Testimonials / Social Proof Section */}
      <Testimonials />

      {/* About / Team Section */}
      <About />

      {/* Lead Capture Form Section */}
      <LeadForm />
    </>
  );
}
