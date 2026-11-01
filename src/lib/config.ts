// Central business configuration for CortexHive
// Supports configurable environment variables with production defaults

export const SITE_CONFIG = {
  name: "CortexHive",
  tagline: "Digital Solutions That Move Your Business Forward",
  description:
    "From professional websites to intelligent AI solutions, we help UK businesses build their digital presence, streamline operations and grow with confidence.",
  url: "https://cortexhive.co.uk",
  email: "info@cortexhive.co.uk",
  
  // UK Business Phone Configuration
  // Configured via NEXT_PUBLIC_BUSINESS_PHONE or central default
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
    getOnline: "Affordable professional websites for small businesses and tradespeople.",
    neverMissACall: "AI-powered receptionist and virtual call answering 24/7.",
    workSmarter: "Intelligent AI automation and custom software development.",
  },
  
  // Pre-filled WhatsApp message generators
  getWhatsAppLink: (context?: string) => {
    let text = "Hi CortexHive, I would like to discuss a project.";
    if (context === "small-business-50") {
      text = "Hi CortexHive, I am interested in the £50 Professional Starter Website for my business.";
    } else if (context === "ai-receptionist") {
      text = "Hi CortexHive, I would like to enquire about your AI Receptionist and call answering service.";
    } else if (context === "ai-automation") {
      text = "Hi CortexHive, I want to learn more about your AI automation services.";
    } else if (context === "software") {
      text = "Hi CortexHive, I have a custom software / web application project to discuss.";
    } else if (context === "quote") {
      text = "Hi CortexHive, I would like to request a free quote for my business.";
    }
    return `https://wa.me/447950501323?text=${encodeURIComponent(text)}`;
  },
};
