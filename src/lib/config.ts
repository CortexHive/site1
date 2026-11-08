// Central business configuration for CortexHive
// Supports configurable environment variables with production defaults

export const SITE_CONFIG = {
  name: "CortexHive",
  tagline: "From Business Problem to Working Product.",
  description:
    "CortexHive is a UK software, AI automation, and digital product engineering studio building production web platforms, autonomous AI workflows, and custom software.",
  url: "https://cortexhive.co.uk",
  email: "info@cortexhive.co.uk",

  // UK Business Phone Configuration
  phone: process.env.NEXT_PUBLIC_BUSINESS_PHONE || "+44 7950 501323",
  phoneDisplay: "07950 501323",
  phoneInternational: "+44 7950 501323",

  // WhatsApp Configuration
  whatsappNumber: "447950501323",
  whatsappUrl: "https://wa.me/447950501323",

  // Location
  location: "London, United Kingdom",
  country: "United Kingdom",

  // Core Propositions
  propositions: {
    getOnline: "Bespoke web platforms and high-conversion digital experiences.",
    neverMissACall: "Autonomous AI voice agents and 24/7 intelligent call triage.",
    workSmarter: "Production AI workflows, SaaS platforms, and custom software engineering.",
  },

  // Pre-filled WhatsApp message generators
  getWhatsAppLink: (context?: string) => {
    let text = "Hello CortexHive, I would like to discuss a software or digital project.";
    if (context === "website" || context === "small-business-99" || context === "small-business-50") {
      text = "Hello CortexHive, I would like to discuss a website or web platform project for my business.";
    } else if (context === "ai-receptionist") {
      text = "Hello CortexHive, I would like to enquire about your AI Voice Agent & Receptionist system.";
    } else if (context === "ai-automation") {
      text = "Hello CortexHive, I would like to discuss custom AI automation and workflow integration.";
    } else if (context === "software") {
      text = "Hello CortexHive, I have a custom software or SaaS application project to scope.";
    } else if (context === "quote") {
      text = "Hello CortexHive, I would like to request a technical consultation and project proposal.";
    }
    return `https://wa.me/447950501323?text=${encodeURIComponent(text)}`;
  },
};
