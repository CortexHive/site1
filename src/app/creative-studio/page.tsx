import { Metadata } from "next";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Hero from "@/components/creative-studio/hero";
import Services from "@/components/creative-studio/services";
import HowItWorks from "@/components/creative-studio/how-it-works";
import PortfolioShowcase from "@/components/creative-studio/portfolio-showcase";
import BottomCTA from "@/components/creative-studio/bottom-cta";

export const metadata: Metadata = {
  title: "Creative Studio — Viral Content & Motion Design",
  description:
    "We Make Content That Stops the Scroll. Viral reels, cinematic ads, motion animations and social design tools engineered for maximum reach by Cortex Hive.",
};

export default function CreativeStudioPage() {
  return (
    <div className="bg-white min-h-screen text-slate-900 font-sans selection:bg-purple-150 selection:text-purple-900">
      {/* Header Navigation */}
      <Header />

      {/* Main Page Sections */}
      <main>
        <Hero />
        <Services />
        <HowItWorks />
        <PortfolioShowcase />
        <BottomCTA />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
