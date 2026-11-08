import { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  CheckCircle2,
  Wrench,
  Sparkles,
  Utensils,
  Briefcase,
  Rocket,
  MessageSquare,
} from "lucide-react";
import { SITE_CONFIG } from "@/lib/config";
import LeadForm from "@/components/lead-form";
import FinalCta from "@/components/final-cta";

interface IndustryData {
  title: string;
  metaDesc: string;
  badge: string;
  heading: string;
  subheading: string;
  icon: React.ComponentType<{ className?: string }>;
  painPoints: { title: string; desc: string }[];
  solutions: { name: string; price: string; desc: string; cta: string }[];
  keyInclusions: string[];
}

const INDUSTRIES: Record<string, IndustryData> = {
  tradespeople: {
    title: "Websites & AI Call Answering for Tradespeople | CortexHive",
    metaDesc:
      "Affordable £99 Launch Websites and 24/7 AI call answering for builders, plumbers, electricians, and UK trades. Never miss another job.",
    badge: "Built for UK Trades & Contractors",
    heading: "Get More Local Jobs Without Answering the Phone While on the Tools.",
    subheading:
      "Professional £99 Launch Websites and 24/7 AI Voice Receptionists engineered specifically for builders, plumbers, electricians, handymen, and independent trades.",
    icon: Wrench,
    painPoints: [
      {
        title: "Missing Leads While on Site",
        desc: "You can't answer calls while working on ladders or driving. Unanswered calls mean lost contracts to local competitors.",
      },
      {
        title: "No Professional Online Presence",
        desc: "Customers want to verify you online before letting you into their homes. Social media alone isn't enough to build trust.",
      },
      {
        title: "Absurd Agency Quotes",
        desc: "Big agencies quote £2,000+ for basic websites with expensive monthly lock-ins. You just need a clean, honest site that works.",
      },
    ],
    solutions: [
      {
        name: "Launch Website",
        price: "£99 one-off",
        desc: "Clean 1-page mobile-friendly site with your services, review highlights, WhatsApp button, and enquiry form.",
        cta: "Claim £99 Website",
      },
      {
        name: "24/7 AI Receptionist",
        price: "Tailored Plan",
        desc: "An intelligent voice agent that picks up calls after 2 rings, answers FAQs, and texts you lead details instantly.",
        cta: "Request Voice Demo",
      },
    ],
    keyInclusions: [
      "100% Mobile responsive layout",
      "Direct Click-to-WhatsApp & Call buttons",
      "Customer enquiry & quote request form",
      "Local Google Search SEO setup",
      "Live in 3 to 5 business days",
      "Zero monthly lock-in contracts",
    ],
  },
  "beauty-salons": {
    title: "Websites & Automated Booking for Salons & Aesthetics | CortexHive",
    metaDesc:
      "Elegant, mobile-first websites and 24/7 automated inquiry handling for hair salons, nail bars, and aesthetics clinics in the UK.",
    badge: "Hair, Beauty & Aesthetics",
    heading: "Elevate Your Salon Brand & Capture Appointments Around the Clock.",
    subheading:
      "Showcase your treatment artistry with an elegant, ultra-fast website paired with automated inquiry messaging that captures clients when they book late at night.",
    icon: Sparkles,
    painPoints: [
      {
        title: "Late Night DM Inquiries",
        desc: "Clients browse treatments on Instagram at 10pm and want instant answers on pricing, availability, and prep instructions.",
      },
      {
        title: "Inconsistent Brand Presentation",
        desc: "A generic website that doesn't match the premium interior of your clinic damages client confidence for high-value treatments.",
      },
      {
        title: "No-Shows and Phone Tag",
        desc: "Stylists spending precious treatment hours on the phone answering the same 5 questions repeatedly.",
      },
    ],
    solutions: [
      {
        name: "Business Website",
        price: "£349 one-off",
        desc: "Up to 5 elegant pages with treatment galleries, price lists, booking links, and Google Search setup.",
        cta: "Choose Salon Package",
      },
      {
        name: "Automated Inquiry Triage",
        price: "Contact for Pricing",
        desc: "Intelligent messaging answering treatment FAQs, contraindications, and pre-care instructions automatically.",
        cta: "Discuss Automation",
      },
    ],
    keyInclusions: [
      "High-resolution treatment gallery layouts",
      "Clear categorised treatment & pricing menus",
      "Direct booking system integration (Fresha, Treatwell, etc.)",
      "Instagram & TikTok feed embeds",
      "Google Maps & local search visibility",
      "Mobile-first design for smartphone booking",
    ],
  },
  restaurants: {
    title: "Websites & Digital Menus for Restaurants & Cafes | CortexHive",
    metaDesc:
      "High-speed websites with mobile menus and direct reservation links for UK restaurants, bistros, and food establishments.",
    badge: "Restaurants, Cafes & Hospitality",
    heading: "Attract More Diners & Take Direct Bookings With Zero Commission.",
    subheading:
      "Replace clunky PDF menus with fast, mobile-optimised digital menus, direct reservation integration, and location discovery that drives foot traffic.",
    icon: Utensils,
    painPoints: [
      {
        title: "Unreadable PDF Menus on Phones",
        desc: "Diners hate pinching and zooming into blurry PDF menus. Over 70% bounce when menus don't load instantly on smartphones.",
      },
      {
        title: "Huge Third-Party Commissions",
        desc: "Booking portals and food apps charging up to 30% on every order. Direct customer relationships belong on your own site.",
      },
      {
        title: "Outdated Opening Hours & Specials",
        desc: "Customers arriving only to find outdated hours or seasonal menus that haven't been updated online.",
      },
    ],
    solutions: [
      {
        name: "Business Website",
        price: "£349 one-off",
        desc: "Mobile-first responsive restaurant site with live interactive menu, OpenTable/Resy links, and location maps.",
        cta: "Get Restaurant Site",
      },
      {
        name: "Monthly Care & Updates",
        price: "£29/month",
        desc: "We update your seasonal menus, price changes, and holiday opening hours so you can focus on service.",
        cta: "Add Care Plan",
      },
    ],
    keyInclusions: [
      "Interactive mobile-first digital food & drinks menu",
      "Direct OpenTable, Resy, or WhatsApp table booking",
      "Allergen & dietary filter highlights (Vegan, GF, Halal)",
      "Google Maps, directions & parking information",
      "Local SEO to rank for 'restaurants near me'",
      "Fast page loads on mobile 4G/5G connections",
    ],
  },
  "small-businesses": {
    title: "Websites & AI Automation for UK Small Businesses | CortexHive",
    metaDesc:
      "Professional web development, lead generation funnels, and AI automation for growing small businesses and professional services in the UK.",
    badge: "Small Businesses & Professional Services",
    heading: "Modern Technology Built to Help Your Business Grow & Work Smarter.",
    subheading:
      "From accessible fixed-price website packages to intelligent workflow automation, CortexHive helps UK small businesses win more customers and eliminate repetitive admin.",
    icon: Briefcase,
    painPoints: [
      {
        title: "Tired, Dated Digital Presence",
        desc: "A website built years ago that fails to represent your current capabilities or convey the credibility your business deserves.",
      },
      {
        title: "Repetitive Administrative Overhead",
        desc: "Copying data between emails, spreadsheets, and CRM tools instead of focusing on revenue-generating client work.",
      },
      {
        title: "Unpredictable Agency Billing",
        desc: "Frustrated by agencies that charge hourly retainers with no clear delivery deadlines or measurable results.",
      },
    ],
    solutions: [
      {
        name: "Business Website",
        price: "£349 one-off",
        desc: "Up to 5 pages with custom branding, case studies, conversion lead funnels, and Google indexing.",
        cta: "Choose Business Package",
      },
      {
        name: "Business Growth Website",
        price: "£699 one-off",
        desc: "Comprehensive 8–10 page platform with detailed service silos, blog, and advanced search optimization.",
        cta: "Choose Growth Package",
      },
    ],
    keyInclusions: [
      "Bespoke layout reflecting your brand authority",
      "Lead qualification & CRM data capture",
      "Fast Next.js architecture with sub-second speeds",
      "Complete UK Google Search Console integration",
      "SSL certificate & enterprise security",
      "100% intellectual property ownership",
    ],
  },
  startups: {
    title: "SaaS MVP & AI Product Engineering for Startups | CortexHive",
    metaDesc:
      "Full-stack Next.js, TypeScript, PostgreSQL, and custom AI agent development for tech startups and ambitious founders in the UK.",
    badge: "Startups & Digital Founders",
    heading: "From Product Vision to Production Software in Weeks.",
    subheading:
      "We design, engineer, and deploy production SaaS MVPs, custom AI systems, and scalable digital platforms built for real-world traction and user adoption.",
    icon: Rocket,
    painPoints: [
      {
        title: "Overpriced Agency Estimates",
        desc: "Traditional consultancies quoting £40,000+ and 6-month timelines for MVPs that could be shipped in 4 weeks.",
      },
      {
        title: "Flaky Freelancers & Technical Debt",
        desc: "Patchwork codebases with no schema types, poor database design, and no documentation that break when user volume arrives.",
      },
      {
        title: "AI Hype Without Production Utility",
        desc: "Tired of generic wrapper demos that fail edge cases. Startups need robust, reliable AI workflows that deliver real utility.",
      },
    ],
    solutions: [
      {
        name: "Custom Software & SaaS MVP",
        price: "Contact for Pricing",
        desc: "Full-stack Next.js, TypeScript, PostgreSQL, auth, Stripe billing, and scalable APIs delivered in milestones.",
        cta: "Scope Your MVP",
      },
      {
        name: "Custom AI & Voice Agents",
        price: "Contact for Pricing",
        desc: "Proprietary vector embeddings, document intelligence pipelines, and autonomous agent workflows.",
        cta: "Discuss AI Architecture",
      },
    ],
    keyInclusions: [
      "Type-safe TypeScript & Next.js 14 App Router",
      "Relational PostgreSQL / Supabase architecture",
      "Secure authentication & role-based permissions",
      "Stripe payment & subscription checkout integration",
      "Production deployment with CI/CD pipelines",
      "100% complete source code & IP handover",
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(INDUSTRIES).map((industry) => ({ industry }));
}

export function generateMetadata({ params }: { params: { industry: string } }): Metadata {
  const data = INDUSTRIES[params.industry];
  if (!data) return {};

  return {
    title: data.title,
    description: data.metaDesc,
  };
}

export default function IndustryPage({ params }: { params: { industry: string } }) {
  const data = INDUSTRIES[params.industry];
  if (!data) {
    notFound();
  }

  const Icon = data.icon;

  return (
    <div className="bg-[#FFFFFF] min-h-screen pt-28 pb-16">
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pt-6 pb-16 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F5F8FC] border border-[#E2E8F0] text-xs font-bold text-blue-700 uppercase tracking-widest mb-6">
          <Icon className="w-4 h-4 text-blue-600" />
          <span>{data.badge}</span>
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-[#14243A] tracking-tight leading-tight max-w-4xl mx-auto mb-6">
          {data.heading}
        </h1>

        <p className="text-base sm:text-lg text-[#475569] max-w-2xl mx-auto mb-8 font-normal leading-relaxed">
          {data.subheading}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#contact"
            className="px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md shadow-blue-600/20 inline-flex items-center gap-2 transition-all"
          >
            <span>Start Your Project</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href={SITE_CONFIG.getWhatsAppLink("quote")}
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs shadow-sm inline-flex items-center gap-2 transition-all"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-16 bg-[#F8FAFD] border-y border-[#E2E8F0]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-700 block mb-2">
              Common Challenges
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#14243A] tracking-tight">
              Problems We Solve For Your Industry
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.painPoints.map((item, i) => (
              <div key={i} className="bg-white rounded-2xl border border-[#E2E8F0] p-6 shadow-2xs">
                <div className="w-8 h-8 rounded-lg bg-red-50 text-red-600 font-bold text-xs flex items-center justify-center mb-4">
                  0{i + 1}
                </div>
                <h3 className="text-base font-bold text-[#14243A] mb-2">{item.title}</h3>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions & Inclusions */}
      <section className="py-20 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-700 block mb-2">
              Recommended Packages
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#14243A] tracking-tight">
              Tailored Solutions For Your Needs
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {data.solutions.map((sol, i) => (
              <div
                key={i}
                className="bg-[#F8FAFD] border border-[#E2E8F0] rounded-2xl p-7 flex flex-col justify-between hover:border-blue-300 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-[#14243A]">{sol.name}</h3>
                    <span className="text-sm font-extrabold text-blue-700">{sol.price}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#475569] mb-6 leading-relaxed">
                    {sol.desc}
                  </p>
                </div>

                <a
                  href="#contact"
                  className="w-full py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold text-center transition-colors shadow-xs"
                >
                  {sol.cta}
                </a>
              </div>
            ))}
          </div>

          {/* Key Inclusions Strip */}
          <div className="bg-[#F5F8FC] border border-[#E2E8F0] rounded-2xl p-6 sm:p-8">
            <h4 className="text-sm font-bold text-[#14243A] mb-4 text-center sm:text-left">
              Every Solution Delivered by CortexHive Includes:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {data.keyInclusions.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-[#475569] font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA & Contact */}
      <FinalCta />
      <LeadForm />
    </div>
  );
}
