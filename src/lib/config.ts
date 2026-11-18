// Central business configuration for CortexHive
// Supports configurable environment variables with production defaults

export const SITE_CONFIG = {
  name: "CortexHive",
  tagline: "Technology That Moves Your Business Forward.",
  description:
    "From professional websites to intelligent AI automation and custom software, CortexHive helps UK businesses simplify operations, attract customers and turn ideas into working digital products.",
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
  location: "United Kingdom",
  country: "United Kingdom",

  // Core Propositions
  propositions: {
    getOnline: "Websites built for business growth.",
    neverMissACall: "AI that works around the clock.",
    workSmarter: "Software designed around your needs.",
  },

  // Pre-filled WhatsApp message generators
  getWhatsAppLink: (context?: string) => {
    let text = "Hello CortexHive, I would like to discuss a project for my business.";
    if (context === "starter-99" || context === "small-business-99") {
      text = "Hello CortexHive, I am interested in the £99 Starter Website package for my business.";
    } else if (context === "business-349") {
      text = "Hello CortexHive, I am interested in the £349 Business Website package.";
    } else if (context === "growth-699") {
      text = "Hello CortexHive, I am interested in the £699 Growth Website package.";
    } else if (context === "website") {
      text = "Hello CortexHive, I would like to discuss a website project for my business.";
    } else if (context === "ai-receptionist") {
      text = "Hello CortexHive, I would like to enquire about your AI Receptionist service.";
    } else if (context === "ai-automation" || context === "ai-agents") {
      text = "Hello CortexHive, I would like to discuss AI automation for my business.";
    } else if (context === "software" || context === "saas") {
      text = "Hello CortexHive, I have a custom software or SaaS project to discuss.";
    } else if (context === "quote" || context === "consultation") {
      text = "Hello CortexHive, I would like to request a free consultation.";
    }
    return `https://wa.me/447950501323?text=${encodeURIComponent(text)}`;
  },
};
