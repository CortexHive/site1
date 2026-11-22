import { Metadata } from "next";
import Hero from "@/components/creative-studio/hero";
import Services from "@/components/creative-studio/services";
import HowItWorks from "@/components/creative-studio/how-it-works";
import PortfolioShowcase from "@/components/creative-studio/portfolio-showcase";
import BottomCTA from "@/components/creative-studio/bottom-cta";

export const metadata: Metadata = {
  title: "Creative Studio — Viral Content & Motion Design | CortexHive",
  description:
    "We Make Content That Stops the Scroll. Viral reels, cinematic ads, motion animations and social design tools engineered for maximum reach by CortexHive.",
  alternates: {
    canonical: "https://cortexhive.co.uk/creative-studio",
  },
  openGraph: {
    title: "Creative Studio — Viral Content & Motion Design | CortexHive",
    description:
      "Viral reels, cinematic ads, motion animations and social design engineered for maximum reach by CortexHive.",
    url: "https://cortexhive.co.uk/creative-studio",
  },
};

export default function CreativeStudioPage() {
  return (
    <div className="bg-white min-h-screen text-slate-900 font-sans selection:bg-purple-150 selection:text-purple-900">
      {/* Main Page Sections */}
      <main>
        <Hero />
        <Services />
        <HowItWorks />
        <PortfolioShowcase />
        <BottomCTA />
      </main>
    </div>
  );
}
