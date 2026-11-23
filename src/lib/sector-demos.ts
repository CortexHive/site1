export type HighlightFeatureId =
  | "website"
  | "ai-receptionist"
  | "whatsapp"
  | "local-seo"
  | "automation";

export interface SectorServiceHighlight {
  id: HighlightFeatureId;
  title: string;
  shortDesc: string;
  includedTag: string;
}

export interface SectorDemoConfig {
  slug: string;
  sectorName: string;
  shortLabel: string;
  accentHex: string;
  accentBgClass: string;
  accentTextClass: string;
  accentBorderClass: string;
  sampleBrand: string;
  sampleDomain: string;
  sampleLocation: string;
  samplePhone: string;
  heroBadge: string;
  heroTitle: string;
  heroSubtitle: string;
  sampleServices: { name: string; desc: string }[];
  trustPoints: string[];
  aiCallPreview: string;
  whatsappGreeting: string;
  seoPreviewTitle: string;
  seoPreviewQuery: string;
  automationPreview: string;
  defaultConsultationService: string;
  servicesProvided: SectorServiceHighlight[];
}

export const SECTOR_DEMOS: SectorDemoConfig[] = [
  {
    slug: "builders-trades",
    sectorName: "Builders & Trades",
    shortLabel: "Builders & Trades",
    accentHex: "#2563EB",
    accentBgClass: "bg-blue-600",
    accentTextClass: "text-blue-600",
    accentBorderClass: "border-blue-600",
    sampleBrand: "Oakridge Builders & Extensions",
    sampleDomain: "oakridgebuilders-demo.co.uk",
    sampleLocation: "Surrey, Berkshire & South East UK",
    samplePhone: "01483 000 124",
    heroBadge: "Example UK Builder Website",
    heroTitle: "House Extensions, Renovations & Structural Building Work.",
    heroSubtitle:
      "Reliable residential building services delivered on schedule with transparent written quotations and clear project milestones.",
    sampleServices: [
      { name: "Rear & Side Extensions", desc: "Single & double-storey home extensions." },
      { name: "Loft Conversions", desc: "Dormer, hip-to-gable & Velux conversions." },
      { name: "Full Renovations", desc: "Kitchen knock-throughs & structural works." },
      { name: "Driveways & Brickwork", desc: "Garden walls, patios & exterior builds." },
    ],
    trustPoints: ["Fully Insured", "Written Fixed Quotes", "Local UK Team"],
    aiCallPreview:
      "24/7 AI Receptionist active: Answers site calls when you're on the tools and texts you caller name, postcode & project scope.",
    whatsappGreeting: "Request a Free Site Visit on WhatsApp",
    seoPreviewTitle: "Trusted House Extension Builders in Guildford & Surrey",
    seoPreviewQuery: "house extension builders near me",
    automationPreview:
      "Auto-sends polite quote acknowledgement + 3-day follow-up reminder to every enquiry.",
    defaultConsultationService: "Website Design",
    servicesProvided: [
      {
        id: "website",
        title: "Mobile-First Trade Website",
        shortDesc: "Fast, credible website showcasing your services, project photos and coverage areas.",
        includedTag: "From £99",
      },
      {
        id: "ai-receptionist",
        title: "24/7 AI Call Answering",
        shortDesc: "Answers incoming calls while you're on site and captures postcode + job details.",
        includedTag: "Never Miss a Lead",
      },
      {
        id: "whatsapp",
        title: "Instant WhatsApp & Quote Capture",
        shortDesc: "One-tap WhatsApp quote requests so homeowners can send project details & photos.",
        includedTag: "Included",
      },
      {
        id: "local-seo",
        title: "Local UK Google SEO Setup",
        shortDesc: "Structured service pages and local area signals to help you appear on Google.",
        includedTag: "Included",
      },
      {
        id: "automation",
        title: "Automated Quote Follow-Ups",
        shortDesc: "Automatic enquiry confirmations and follow-up nudges so leads don't go cold.",
        includedTag: "Optional Add-On",
      },
    ],
  },
  {
    slug: "plumbers-electricians",
    sectorName: "Plumbing & Electrical",
    shortLabel: "Plumbing & Electrical",
    accentHex: "#0284C7",
    accentBgClass: "bg-sky-600",
    accentTextClass: "text-sky-600",
    accentBorderClass: "border-sky-600",
    sampleBrand: "Apex Heating & Electrical",
    sampleDomain: "apexheating-demo.co.uk",
    sampleLocation: "Manchester, Stockport & Cheshire",
    samplePhone: "0161 000 482",
    heroBadge: "Example UK Plumbing & Electrical Site",
    heroTitle: "Emergency Boiler Repairs, Rewires & Certified Inspections.",
    heroSubtitle:
      "Fast-response domestic and commercial heating, plumbing and electrical services with clear upfront callout pricing.",
    sampleServices: [
      { name: "Boiler Repairs & Installs", desc: "Combi breakdowns, servicing & upgrades." },
      { name: "Emergency Callouts", desc: "Leaks, burst pipes & power fault diagnostics." },
      { name: "EICR & Consumer Units", desc: "Landlord safety certificates & fuseboards." },
      { name: "EV Charger Installs", desc: "Home & workplace electric vehicle points." },
    ],
    trustPoints: ["24/7 Call Handling", "Transparent Rates", "Local Engineers"],
    aiCallPreview:
      "24/7 AI Receptionist active: Logs emergency boiler/electrical faults, postcode & urgency in seconds while you're on a job.",
    whatsappGreeting: "Book Engineer or Send Fault Photo",
    seoPreviewTitle: "Emergency Boiler Repair & Electrician in Manchester M20",
    seoPreviewQuery: "emergency plumber electrician manchester",
    automationPreview:
      "Instantly routes urgent callouts to your WhatsApp with postcode, fault type & callback number.",
    defaultConsultationService: "AI Receptionist",
    servicesProvided: [
      {
        id: "website",
        title: "High-Conversion Trade Website",
        shortDesc: "Clear emergency & standard service pages built for fast mobile loading.",
        includedTag: "From £99",
      },
      {
        id: "ai-receptionist",
        title: "24/7 Emergency AI Receptionist",
        shortDesc: "Answers urgent calls when you're driving or under a sink — qualifies urgency immediately.",
        includedTag: "High Demand",
      },
      {
        id: "whatsapp",
        title: "WhatsApp Photo & Quote Button",
        shortDesc: "Let customers send boiler error codes or fuseboard photos directly to your WhatsApp.",
        includedTag: "Included",
      },
      {
        id: "local-seo",
        title: "Local Postcode SEO Structure",
        shortDesc: "Clean headings, schema markup and town/postcode targeting for Google Search.",
        includedTag: "Included",
      },
      {
        id: "automation",
        title: "Annual Service & Job Follow-Ups",
        shortDesc: "Automated boiler service reminders and instant booking confirmations.",
        includedTag: "Optional Add-On",
      },
    ],
  },
  {
    slug: "window-cleaners",
    sectorName: "Window Cleaning",
    shortLabel: "Window Cleaning",
    accentHex: "#0D9488",
    accentBgClass: "bg-teal-600",
    accentTextClass: "text-teal-600",
    accentBorderClass: "border-teal-600",
    sampleBrand: "ClearView Exterior & Office Cleaning",
    sampleDomain: "clearviewclean-demo.co.uk",
    sampleLocation: "Leeds, Harrogate & West Yorkshire",
    samplePhone: "0113 000 719",
    heroBadge: "Example UK Cleaning Business Site",
    heroTitle: "Pure-Water Window Cleaning, Gutters & Commercial Contracts.",
    heroSubtitle:
      "Reliable fortnightly and monthly rounds for homes, offices and retail premises with easy online quote requests.",
    sampleServices: [
      { name: "Regular Window Rounds", desc: "4-weekly & 8-weekly pure-water reach & wash." },
      { name: "Gutter & Fascia Clearing", desc: "Camera-inspected vacuum gutter clearance." },
      { name: "Driveway & Patio Wash", desc: "Commercial pressure washing & sealing." },
      { name: "Office & Commercial", desc: "Scheduled contract cleaning for UK premises." },
    ],
    trustPoints: ["Pure-Water System", "Text-Before-Visit", "Commercial Insured"],
    aiCallPreview:
      "24/7 AI Receptionist active: Captures property size (3-bed/4-bed), postcode & preferred round while you're working.",
    whatsappGreeting: "Get an Instant Quote on WhatsApp",
    seoPreviewTitle: "Window & Gutter Cleaning in Leeds & Harrogate — Free Quotes",
    seoPreviewQuery: "window cleaner near me leeds",
    automationPreview:
      "Auto-collects bedroom count & postcode, logs round enquiries and sends automated SMS reminders.",
    defaultConsultationService: "Website Design",
    servicesProvided: [
      {
        id: "website",
        title: "Clean Local Service Website",
        shortDesc: "Showcase residential rounds, commercial contracts and easy quote request forms.",
        includedTag: "From £99",
      },
      {
        id: "ai-receptionist",
        title: "AI Call Answering On Your Round",
        shortDesc: "Answers new customer enquiries automatically while you're working outdoors.",
        includedTag: "24/7 Voice AI",
      },
      {
        id: "whatsapp",
        title: "Quick WhatsApp Quote Funnel",
        shortDesc: "Customers tap once to send their postcode and house size for a fast price.",
        includedTag: "Included",
      },
      {
        id: "local-seo",
        title: "Local Town & Suburb SEO",
        shortDesc: "Structured pages helping local homeowners and offices find you on Google.",
        includedTag: "Included",
      },
      {
        id: "automation",
        title: "Round & Quote Admin Automation",
        shortDesc: "Cut evening admin with automated quote summaries and customer notifications.",
        includedTag: "Optional Add-On",
      },
    ],
  },
  {
    slug: "local-services",
    sectorName: "Local Services",
    shortLabel: "Local Services",
    accentHex: "#4F46E5",
    accentBgClass: "bg-indigo-600",
    accentTextClass: "text-indigo-600",
    accentBorderClass: "border-indigo-600",
    sampleBrand: "BrightHome Local Services & Maintenance",
    sampleDomain: "brighthomeservices-demo.co.uk",
    sampleLocation: "Birmingham, Solihull & Midlands",
    samplePhone: "0121 000 356",
    heroBadge: "Example UK Local Service Site",
    heroTitle: "Trusted Local Services, Handyman & Appointment Bookings.",
    heroSubtitle:
      "Professional local support for homes and small businesses — book a slot online, message on WhatsApp or call anytime.",
    sampleServices: [
      { name: "Property Maintenance", desc: "Repairs, fittings, carpentry & general upkeep." },
      { name: "Landlord & Lettings", desc: "Fast turnaround maintenance for local agents." },
      { name: "Appointment Bookings", desc: "Clear time-slot requests with instant alerts." },
      { name: "Local Consultations", desc: "Free advice and transparent written estimates." },
    ],
    trustPoints: ["Fast Booking", "Clear Pricing", "Local UK Support"],
    aiCallPreview:
      "24/7 AI Receptionist active: Answers routine questions, collects booking preferences & sends summaries straight to you.",
    whatsappGreeting: "Message Us or Book a Slot",
    seoPreviewTitle: "Reliable Local Property & Maintenance Services in Solihull",
    seoPreviewQuery: "local handyman property maintenance near me",
    automationPreview:
      "Syncs consultation & booking enquiries straight to your calendar, email and WhatsApp.",
    defaultConsultationService: "Website Design",
    servicesProvided: [
      {
        id: "website",
        title: "Professional Local Business Website",
        shortDesc: "Clean, trustworthy website tailored to your services, pricing clarity and booking flow.",
        includedTag: "From £99",
      },
      {
        id: "ai-receptionist",
        title: "24/7 AI Receptionist",
        shortDesc: "Polite British-English call handling when you are with a client or after hours.",
        includedTag: "24/7 Voice AI",
      },
      {
        id: "whatsapp",
        title: "WhatsApp & Calendar Booking",
        shortDesc: "Let customers pick a date & time and draft a ready-to-send WhatsApp booking.",
        includedTag: "Included",
      },
      {
        id: "local-seo",
        title: "Google Search & Local Visibility",
        shortDesc: "Fast page speed, clean metadata and structured schema to attract local searchers.",
        includedTag: "Included",
      },
      {
        id: "automation",
        title: "Enquiry & Follow-Up Workflows",
        shortDesc: "Eliminate manual admin with automated enquiry routing and reminders.",
        includedTag: "Optional Add-On",
      },
    ],
  },
];

export function getSectorDemo(slug: string): SectorDemoConfig | undefined {
  return SECTOR_DEMOS.find((s) => s.slug === slug);
}
