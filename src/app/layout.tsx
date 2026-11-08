import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ChatbotWidget from "@/components/chatbot-widget";
import ScrollToTop from "@/components/scroll-to-top";
import FloatingWhatsApp from "@/components/floating-whatsapp";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "CortexHive — AI Systems, Custom Software & Web Engineering Studio UK",
  description:
    "CortexHive is a UK technology studio engineering bespoke web platforms, autonomous AI agents, workflow automation, and full-stack SaaS software.",
  metadataBase: new URL("https://cortexhive.co.uk"),
  keywords: [
    "software engineering studio UK",
    "AI automation services UK",
    "custom AI agents UK",
    "AI voice receptionist UK",
    "bespoke web development UK",
    "Next.js development agency UK",
    "SaaS MVP development UK",
    "custom software development London",
    "business process automation",
    "CortexHive",
  ],
  openGraph: {
    title: "CortexHive — AI Systems, Custom Software & Web Engineering Studio",
    description:
      "We architect, design, and engineer bespoke web platforms, autonomous AI systems, and production software for ambitious organisations.",
    url: "https://cortexhive.co.uk",
    siteName: "CortexHive",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "CortexHive — AI, Web Platforms & Software Engineering",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CortexHive — AI Systems, Custom Software & Web Engineering Studio",
    description:
      "We architect, design, and engineer bespoke web platforms, autonomous AI systems, and production software for ambitious organisations.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://cortexhive.co.uk/#organization",
      name: "CortexHive",
      url: "https://cortexhive.co.uk",
      logo: "https://cortexhive.co.uk/logo.png",
      description:
        "UK software and AI engineering studio building bespoke web platforms, autonomous AI agents, workflow automation, and SaaS applications.",
      telephone: "+447950501323",
      email: "info@cortexhive.co.uk",
      address: {
        "@type": "PostalAddress",
        addressCountry: "GB",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://cortexhive.co.uk/#website",
      url: "https://cortexhive.co.uk",
      name: "CortexHive",
      publisher: {
        "@id": "https://cortexhive.co.uk/#organization",
      },
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://cortexhive.co.uk/#service",
      name: "CortexHive Software & AI Engineering",
      url: "https://cortexhive.co.uk",
      telephone: "+447950501323",
      email: "info@cortexhive.co.uk",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "CortexHive Engineering Practice Areas",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Web Platforms & Digital Architecture",
              description:
                "High-performance Next.js websites, institutional platforms, and conversion-engineered digital experiences.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "AI Agents & Workflow Automation",
              description:
                "Autonomous voice receptionists, document intelligence pipelines, and custom LLM integrations.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Custom Software & SaaS Engineering",
              description:
                "Full-stack web applications, multi-role client portals, internal operations dashboards, and SaaS MVPs.",
            },
          },
        ],
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${manrope.variable} font-sans bg-white text-[#334155] antialiased min-h-screen flex flex-col justify-between selection:bg-slate-900 selection:text-white`}
      >
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <ChatbotWidget />
        <FloatingWhatsApp />
        <ScrollToTop />
      </body>
    </html>
  );
}
