export interface WorkflowStage {
  step: string;
  title: string;
  subtitle: string;
  detail: string;
  outputBadge: string;
}

export interface Pathway2Solution {
  slug: string;
  title: string;
  shortLabel: string;
  eyebrow: string;
  headline: string;
  summary: string;
  imagePath: string;
  imageAlt: string;
  defaultConsultationService: string;
  liveProof: {
    name: string;
    desc: string;
    href: string;
  };
  deliverables: string[];
  techStack: string[];
  workflowStages: WorkflowStage[];
}

export const PATHWAY2_SOLUTIONS: Pathway2Solution[] = [
  {
    slug: "custom-saas",
    title: "Custom SaaS Platforms",
    shortLabel: "Custom SaaS",
    eyebrow: "End-to-End SaaS Product Engineering",
    headline: "From Validated Idea to Multi-Tenant Subscription Software.",
    summary:
      "We architect, design and engineer full-stack SaaS applications with secure authentication, role-based portals, subscription billing and scalable cloud databases.",
    imagePath: "/solutions/custom-saas.webp",
    imageAlt: "3D isometric architecture diagram of a CortexHive custom SaaS platform",
    defaultConsultationService: "Custom Software / SaaS",
    liveProof: {
      name: "MarkScheme (Live Owned SaaS)",
      desc: "250+ online 11+ exam papers with student, parent and moderator portals.",
      href: "/our-products",
    },
    deliverables: [
      "Multi-role authentication (Admin, Team, Customer portals)",
      "Stripe subscription billing, upgrades & automated invoicing",
      "PostgreSQL cloud database with clean API architecture",
      "Written milestone specification & 100% client code ownership",
    ],
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Stripe"],
    workflowStages: [
      {
        step: "01",
        title: "User Auth & Roles",
        subtitle: "Onboarding & Access Control",
        detail:
          "Customers sign up securely and are routed to tailored workspaces based on their account tier and role permissions.",
        outputBadge: "RBAC Secured",
      },
      {
        step: "02",
        title: "Core Product Engine",
        subtitle: "Bespoke Application Logic",
        detail:
          "Your proprietary workflows, data models and interactive features run cleanly across desktop and mobile browsers.",
        outputBadge: "Full-Stack App",
      },
      {
        step: "03",
        title: "Billing & Webhooks",
        subtitle: "Recurring Revenue Automation",
        detail:
          "Stripe subscriptions, free trials, plan limits and instant receipts stay synced automatically via verified webhooks.",
        outputBadge: "Stripe Synced",
      },
      {
        step: "04",
        title: "Analytics & Cloud Scale",
        subtitle: "Owner Visibility & Growth",
        detail:
          "Real-time usage metrics, admin controls and resilient cloud hosting ready to scale as your user base grows.",
        outputBadge: "Production Ready",
      },
    ],
  },
  {
    slug: "ai-agents",
    title: "AI Agents & Automation",
    shortLabel: "AI & Automation",
    eyebrow: "Practical AI & Workflow Engineering",
    headline: "Intelligent Agents & Automations That Remove Repetitive Admin.",
    summary:
      "Connect your phone lines, inbox, forms, CRM and WhatsApp to tailored AI agents that qualify leads, route enquiries, process documents and follow up around the clock.",
    imagePath: "/solutions/ai-agents.webp",
    imageAlt: "3D isometric workflow diagram of CortexHive AI agents and automation pipelines",
    defaultConsultationService: "Business Automation",
    liveProof: {
      name: "CortexHive AI Receptionist & Workflows",
      desc: "24/7 UK call handling, lead qualification and instant WhatsApp routing.",
      href: "/ai-receptionist",
    },
    deliverables: [
      "Business-specific AI agents trained on your services & rules",
      "Automated lead capture, triage and instant WhatsApp/Email alerts",
      "CRM, calendar and spreadsheet integrations with zero manual re-entry",
      "Clear fallback safeguards & full audit logs of every automated action",
    ],
    techStack: ["OpenAI / Gemini APIs", "Voice AI", "Webhooks", "Node.js", "WhatsApp"],
    workflowStages: [
      {
        step: "01",
        title: "Incoming Trigger",
        subtitle: "Call, Email, Form or Message",
        detail:
          "A customer calls your UK number, submits an enquiry form, or sends a WhatsApp message at any hour.",
        outputBadge: "24/7 Capture",
      },
      {
        step: "02",
        title: "AI Reasoning & Rules",
        subtitle: "Qualification & Context",
        detail:
          "Your custom AI agent checks your services, pricing rules and coverage area to gather the exact details needed.",
        outputBadge: "Business Trained",
      },
      {
        step: "03",
        title: "Automated Tool Actions",
        subtitle: "CRM, Calendar & Quotes",
        detail:
          "Structured data is pushed straight into your CRM, booking calendar, or quotation pipeline automatically.",
        outputBadge: "Zero Copy-Paste",
      },
      {
        step: "04",
        title: "Owner Summary & Log",
        subtitle: "Instant Clarity",
        detail:
          "You receive a concise WhatsApp or email brief within seconds, with full visibility over every completed action.",
        outputBadge: "Instant Dispatch",
      },
    ],
  },
  {
    slug: "dashboards-portals",
    title: "Dashboards & Portals",
    shortLabel: "Dashboards & Portals",
    eyebrow: "Operational Control & Client Portals",
    headline: "Real-Time Management Dashboards & Self-Service Client Portals.",
    summary:
      "Replace scattered spreadsheets and endless status emails with a clean central portal where your team manages jobs and your clients track progress in real time.",
    imagePath: "/solutions/dashboards-portals.webp",
    imageAlt: "3D isometric render of CortexHive operational dashboards and client portals",
    defaultConsultationService: "Custom Software / SaaS",
    liveProof: {
      name: "Rydigo (Transport & Dispatch Platform)",
      desc: "Live booking queues, fleet coordination and customer journey tracking.",
      href: "/our-products",
    },
    deliverables: [
      "Executive KPI dashboards with live filters and exportable reports",
      "Branded customer self-service portals for bookings, files & status",
      "Staff & operator dispatch consoles tailored to your daily workflow",
      "Mobile-responsive layouts so managers can check operations anywhere",
    ],
    techStack: ["React", "Next.js", "TypeScript", "REST / GraphQL", "Tailwind CSS"],
    workflowStages: [
      {
        step: "01",
        title: "Unified Data Sync",
        subtitle: "Connect Existing Tools",
        detail:
          "Orders, bookings, enquiries and operational records flow from your website and tools into one clean database.",
        outputBadge: "Single Source",
      },
      {
        step: "02",
        title: "Role-Based Views",
        subtitle: "Admin, Staff & Clients",
        detail:
          "Managers see full KPIs, staff see assigned tasks, and customers only see their own bookings and documents.",
        outputBadge: "Tailored Access",
      },
      {
        step: "03",
        title: "Live Actions & Dispatch",
        subtitle: "Fast Daily Execution",
        detail:
          "Approve quotes, assign jobs, update statuses and trigger customer notifications with a single click.",
        outputBadge: "Real-Time UI",
      },
      {
        step: "04",
        title: "Automated Reporting",
        subtitle: "Clear Business Decisions",
        detail:
          "Instant CSV/PDF summaries and weekly performance digests without manually building spreadsheets.",
        outputBadge: "Export Ready",
      },
    ],
  },
  {
    slug: "api-document-systems",
    title: "API & Document Systems",
    shortLabel: "API & Documents",
    eyebrow: "Integrations & Privacy-First Document Tools",
    headline: "Reliable API Integrations & Browser-Based Document Workflows.",
    summary:
      "We connect disjointed business software via custom APIs and build privacy-first PDF, signing, redaction and document automation tools tailored to your organisation.",
    imagePath: "/solutions/api-document-systems.webp",
    imageAlt: "3D isometric diagram of CortexHive API integrations and secure document processing",
    defaultConsultationService: "Custom Software / SaaS",
    liveProof: {
      name: "AuraPDF (Browser-Based Document Product)",
      desc: "Client-side PDF viewing, digital signatures and permanent redaction.",
      href: "/our-products",
    },
    deliverables: [
      "Custom REST/Webhook API middleware connecting third-party platforms",
      "Browser-based PDF generation, digital signing & redaction workflows",
      "White-label document portals ready to embed under your brand",
      "Strict data security, validation and error-resilient retry queues",
    ],
    techStack: ["TypeScript", "Node.js", "PDF.js / WebAssembly", "Webhooks", "REST APIs"],
    workflowStages: [
      {
        step: "01",
        title: "Document / API Input",
        subtitle: "Structured Intake",
        detail:
          "Contracts, invoices, forms or third-party API payloads enter the pipeline with automatic schema validation.",
        outputBadge: "Validated Input",
      },
      {
        step: "02",
        title: "Secure Processing",
        subtitle: "Local or Encrypted Engine",
        detail:
          "Process confidential PDFs locally in-browser (zero server upload) or transform data securely via encrypted APIs.",
        outputBadge: "Privacy First",
      },
      {
        step: "03",
        title: "Sign, Redact & Format",
        subtitle: "Automated Output",
        detail:
          "Embed digital signatures, mask sensitive fields, generate branded PDFs or map payloads between platforms.",
        outputBadge: "Zero Manual Edits",
      },
      {
        step: "04",
        title: "Sync & Webhook Delivery",
        subtitle: "Downstream Systems",
        detail:
          "Completed files and verified data sync seamlessly to your CRM, cloud storage, accounting software or client portal.",
        outputBadge: "End-to-End Sync",
      },
    ],
  },
];

export function getPathway2Solution(slug: string): Pathway2Solution | undefined {
  return PATHWAY2_SOLUTIONS.find((s) => s.slug === slug);
}
