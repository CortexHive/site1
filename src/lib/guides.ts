export interface BusinessGuide {
  slug: string;
  title: string;
  metaDescription: string;
  category: "Websites" | "AI & Voice" | "Automation" | "Growth";
  readTime: string;
  publishedDate: string;
  excerpt: string;
  relatedService: {
    label: string;
    href: string;
    defaultFormService: string;
  };
  takeaways: string[];
  sections: {
    heading: string;
    paragraphs: string[];
    bullets?: string[];
  }[];
}

export const BUSINESS_GUIDES: BusinessGuide[] = [
  {
    slug: "small-business-website-cost-uk",
    title: "How Much Does a Small Business Website Cost in the UK? (2026 Breakdown)",
    metaDescription:
      "A clear, honest UK pricing breakdown for small business websites in 2026 — comparing starter 1-page sites from £99, 5-page business websites, and custom builds.",
    category: "Websites",
    readTime: "5 min read",
    publishedDate: "2026-11-22",
    excerpt:
      "Confused by quotes ranging from £99 to £5,000+? Here is what UK small businesses actually pay for a professional website, what is included, and how to avoid overpaying.",
    relatedService: {
      label: "Compare CortexHive Website Packages (£99 / £349 / £699)",
      href: "/pricing",
      defaultFormService: "Website Design",
    },
    takeaways: [
      "A clean 1-page starter website for a UK tradesperson or local service business starts from £99.",
      "A multi-page business website (up to 5 pages with local SEO structure) typically costs £349–£700 with a lean UK studio.",
      "Always verify who owns the domain name, what ongoing hosting costs are, and whether mobile optimisation is included.",
    ],
    sections: [
      {
        heading: "Why Website Quotes Vary So Much in the UK",
        paragraphs: [
          "If you have asked three UK agencies for a website quote, you have probably received three wildly different numbers. Traditional agencies often price in account managers, long discovery workshops, and monthly retainers that small local businesses simply do not need.",
          "At the other end, DIY drag-and-drop builders look inexpensive upfront but cost you evenings of frustration and often load slowly on mobile — hurting your Google visibility and enquiry rate.",
        ],
      },
      {
        heading: "Realistic UK Small Business Website Price Tiers",
        paragraphs: [
          "For most UK small businesses, tradespeople, salons, and startups, website costs fall into three clear bands:",
        ],
        bullets: [
          "Starter Website (from £99): A fast, mobile-first single-page site covering your services, coverage area, enquiry form, and direct WhatsApp button. Ideal for getting online credibly.",
          "Business Website (from £349): Up to 5 structured pages (Home, Services, About, Gallery/Portfolio, Contact) with on-page SEO so you can rank for specific local searches.",
          "Growth Website (from £699): Up to 8 pages with custom layout design, an agreed advanced integration (such as booking or lead routing), and stronger search structure.",
          "Custom Web Applications & SaaS (individually scoped): Portals, customer logins, dashboards, or subscription software built to a written milestone specification.",
        ],
      },
      {
        heading: "Hidden Costs to Ask About Before You Commit",
        paragraphs: [
          "Before paying a deposit to any web designer, ask three straightforward questions: Will the domain name be registered in my name? Are there mandatory monthly lock-in fees? And is basic on-page SEO (page titles, meta descriptions, mobile speed, and sitemap) included as standard?",
          "At CortexHive, every website package comes with transparent starting prices, full client ownership, and optional support plans rather than forced contracts.",
        ],
      },
    ],
  },
  {
    slug: "stop-losing-jobs-to-missed-calls-uk-trades",
    title: "How UK Tradespeople Stop Losing Jobs to Missed Calls with an AI Receptionist",
    metaDescription:
      "Learn how UK builders, plumbers, electricians and cleaning businesses use a 24/7 AI receptionist to answer missed calls, capture postcodes and win more work.",
    category: "AI & Voice",
    readTime: "4 min read",
    publishedDate: "2026-11-22",
    excerpt:
      "When you are up a ladder, under a sink, or driving between jobs, most callers will not leave a voicemail — they simply ring the next tradesperson on Google.",
    relatedService: {
      label: "Explore CortexHive 24/7 AI Receptionist",
      href: "/ai-receptionist",
      defaultFormService: "AI Receptionist",
    },
    takeaways: [
      "Most local customers call 2–3 tradespeople and book the first one who answers professionally.",
      "An AI receptionist answers your existing UK number only when you are busy, on site, or out of hours.",
      "Every call ends with a structured summary (name, postcode, job description, urgency) sent straight to your WhatsApp or email.",
    ],
    sections: [
      {
        heading: "The Real Cost of Voicemail for Local Service Businesses",
        paragraphs: [
          "Whether it is a boiler breakdown, an electrical fault, or a quote request for an extension, customers contacting a local business want reassurance that someone has heard them. Standard voicemail feels like a dead end, so most callers hang up and dial the next result on Google Maps.",
          "Even missing two or three enquiries a week quickly adds up to thousands of pounds in lost work over a year.",
        ],
      },
      {
        heading: "How a Modern AI Receptionist Works in Practice",
        paragraphs: [
          "Unlike clunky press-1-for-sales phone menus, a modern AI voice receptionist speaks naturally in clear British English and is trained on your exact services and coverage area:",
        ],
        bullets: [
          "Answers politely using your exact business name whenever you cannot pick up.",
          "Answers common questions (areas covered, callout availability, services offered).",
          "Collects the caller's full name, UK postcode, callback number, and job details.",
          "Texts or WhatsApps you a concise call summary within seconds so you can call back between jobs.",
        ],
      },
      {
        heading: "Keeping Your Existing UK Mobile or Landline",
        paragraphs: [
          "You do not need to change your phone number or reprint your van graphics. Conditional call forwarding routes calls to the AI receptionist only when your line is busy, unanswered after a few rings, or switched off after hours.",
        ],
      },
    ],
  },
  {
    slug: "website-vs-social-media-small-business-uk",
    title: "Why a Facebook Page Isn't Enough: Website vs Social Media for UK Local Businesses",
    metaDescription:
      "Comparing a dedicated business website against relying only on Facebook or Instagram for UK small businesses — Google Search, trust, and lead conversion.",
    category: "Growth",
    readTime: "4 min read",
    publishedDate: "2026-11-22",
    excerpt:
      "Social media is brilliant for staying visible, but when UK customers are ready to hire and pay, they search Google first. Here is why you need both working together.",
    relatedService: {
      label: "See Small Business Website Solutions (From £99)",
      href: "/small-business-websites",
      defaultFormService: "Website Design",
    },
    takeaways: [
      "Google Search captures high-intent buyers actively looking for a service right now — not people passively scrolling.",
      "You own your website and domain; social algorithms can reduce your reach overnight.",
      "Pairing a clean website with WhatsApp & social links converts significantly more enquiries than a social profile alone.",
    ],
    sections: [
      {
        heading: "Social Media Builds Awareness; Google Captures Buyers",
        paragraphs: [
          "When someone needs an electrician, a cleaner, a salon appointment, or a software partner, their first action is typing a query into Google. A Facebook page rarely ranks well for competitive local service searches and often prompts visitors to log in before viewing full details.",
          "A fast, properly structured website gives Google clear signals about what you do, where you operate, and how customers can contact you.",
        ],
      },
      {
        heading: "Instant Credibility Before the Customer Calls",
        paragraphs: [
          "Customers routinely check a company's website before requesting a quote. A clean, mobile-friendly site with clear services, genuine work examples, and an effortless consultation or WhatsApp button immediately separates established businesses from casual operators.",
        ],
        bullets: [
          "Clear service breakdown and transparent next steps.",
          "Direct click-to-call and pre-filled WhatsApp enquiry buttons on mobile.",
          "Professional domain email (such as info@yourbusiness.co.uk) that builds trust on quotes and invoices.",
        ],
      },
      {
        heading: "Getting Online Without Overcomplicating It",
        paragraphs: [
          "You do not need a massive 20-page website to start winning Google enquiries. Starting with a focused £99 starter website or £349 5-page business site gets your foundation live quickly, and you can expand pages or add AI automation as enquiries grow.",
        ],
      },
    ],
  },
  {
    slug: "ai-business-automation-ideas-small-business",
    title: "7 Practical AI Automation Workflows That Save UK Small Businesses Hours Every Week",
    metaDescription:
      "Discover 7 realistic, high-ROI AI automation workflows for UK SMEs — from enquiry routing and quote follow-ups to document processing and customer onboarding.",
    category: "Automation",
    readTime: "5 min read",
    publishedDate: "2026-11-22",
    excerpt:
      "AI automation does not mean replacing your team — it means eliminating repetitive copy-pasting, missed follow-ups, and evening admin.",
    relatedService: {
      label: "Explore CortexHive AI Business Automation",
      href: "/ai-automation",
      defaultFormService: "Business Automation",
    },
    takeaways: [
      "The highest-ROI automations target repetitive admin you already do every day: enquiries, follow-ups, and document handling.",
      "Start with one bottleneck workflow rather than trying to automate your entire business at once.",
      "Well-built automations connect directly to tools you already use (email, WhatsApp, calendars, spreadsheets, CRMs).",
    ],
    sections: [
      {
        heading: "Where Small Businesses Lose the Most Time",
        paragraphs: [
          "Most business owners spend 5 to 10 hours every week on repetitive administrative work: copying web form enquiries into spreadsheets, chasing unanswered quotes, sending appointment reminders, and formatting routine PDFs or summaries.",
          "Every one of those tasks can be streamlined reliably using targeted workflow automation.",
        ],
      },
      {
        heading: "7 Practical Workflows Worth Automating First",
        paragraphs: [
          "Here are seven practical automations UK small businesses and growing teams adopt first:",
        ],
        bullets: [
          "1. Instant Enquiry Triage & WhatsApp Alerts: Route website leads directly to your phone with a structured summary and automatic polite acknowledgement to the customer.",
          "2. Missed-Call AI Receptionist: Capture caller name, postcode, and job requirements 24/7 whenever you cannot answer.",
          "3. Automated Quote Follow-Ups: Send friendly, timed check-in emails or messages 3 and 7 days after issuing a quote.",
          "4. Appointment Booking & Reminders: Let qualified leads book consultation slots automatically with calendar invites and reminders.",
          "5. Document & PDF Processing: Extract key fields from supplier invoices, forms, or intake documents automatically.",
          "6. Client Onboarding Checklists: Trigger welcome emails, asset upload forms, and project folders the moment a proposal is accepted.",
          "7. Weekly Operations Digest: Receive a clean Monday morning summary of new enquiries, booked consultations, and pending follow-ups.",
        ],
      },
      {
        heading: "How to Start Safely Without Disruption",
        paragraphs: [
          "We recommend starting with a free 15-minute consultation to identify the single workflow costing you the most time or missed revenue. Once scoped with a clear fixed quote, we build, test, and hand it over with clear documentation.",
        ],
      },
    ],
  },
];

export function getGuideBySlug(slug: string): BusinessGuide | undefined {
  return BUSINESS_GUIDES.find((g) => g.slug === slug);
}
