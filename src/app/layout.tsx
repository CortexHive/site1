import type { Metadata } from "next";
import { Plus_Jakarta_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ChatbotWidget from "@/components/chatbot-widget";
import ScrollToTop from "@/components/scroll-to-top";
import FloatingWhatsApp from "@/components/floating-whatsapp";
import ConsultationModal from "@/components/consultation-modal";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "CortexHive — Websites, AI & Software UK",
  description:
    "UK websites from £99, 24/7 AI receptionists & custom software. Book a free consultation.",
  metadataBase: new URL("https://cortexhive.co.uk"),
  keywords: [
    "Website design UK",
    "Affordable website design for small businesses",
    "Website designers for builders",
    "Website design for electricians",
    "Website design for plumbers",
    "Business website development",
    "AI receptionist UK",
    "AI phone answering for small businesses",
    "AI automation agency UK",
    "Business process automation",
    "AI agents for businesses",
    "Custom software development UK",
    "SaaS development company",
    "Custom web application development",
    "AI software development",
    "CortexHive",
  ],
  openGraph: {
    title: "CortexHive — Websites, AI & Software UK",
    description:
      "UK websites from £99, 24/7 AI receptionists & custom software. Book a free consultation.",
    url: "https://cortexhive.co.uk",
    siteName: "CortexHive",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "CortexHive — Websites, AI & Software UK",
    description:
      "UK websites from £99, 24/7 AI receptionists & custom software. Book a free consultation.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? {
        verification: {
          google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
        },
      }
    : {}),
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://cortexhive.co.uk/#organization",
      name: "CortexHive",
      url: "https://cortexhive.co.uk",
      logo: {
        "@type": "ImageObject",
        url: "https://cortexhive.co.uk/cortexhive-logo-share.png",
        width: 600,
        height: 600,
      },
      image: "https://cortexhive.co.uk/cortexhive-logo-share.png",
      description:
        "UK digital technology, software development and AI automation agency delivering business websites, 24/7 AI receptionists, workflow automation and custom software.",
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
      name: "CortexHive Digital Technology, AI & Software Agency",
      url: "https://cortexhive.co.uk",
      image: "https://cortexhive.co.uk/cortexhive-logo-share.png",
      priceRange: "£99 - £5000+",
      telephone: "+447950501323",
      email: "info@cortexhive.co.uk",
      areaServed: {
        "@type": "Country",
        name: "United Kingdom",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "CortexHive Website Packages, AI & Software Services",
        itemListElement: [
          {
            "@type": "Offer",
            priceCurrency: "GBP",
            price: "99",
            itemOffered: {
              "@type": "Service",
              name: "Starter Website Package",
              description:
                "1-page mobile-friendly website for small businesses and tradespeople including enquiry form, WhatsApp integration and basic on-page SEO.",
            },
          },
          {
            "@type": "Offer",
            priceCurrency: "GBP",
            price: "349",
            itemOffered: {
              "@type": "Service",
              name: "Business Website Package",
              description:
                "Up to 5 custom-designed responsive pages with enquiry forms, WhatsApp integration and on-page SEO setup.",
            },
          },
          {
            "@type": "Offer",
            priceCurrency: "GBP",
            price: "699",
            itemOffered: {
              "@type": "Service",
              name: "Growth Website Package",
              description:
                "Up to 8 pages with advanced custom design, responsive layout, one agreed advanced feature or integration, basic on-page SEO and deployment assistance.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "AI Receptionist & 24/7 Call Answering",
              description:
                "AI-powered phone answering that collects customer details, qualifies enquiries and sends call summaries.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "AI Business Process Automation & Custom AI Agents",
              description:
                "Workflow automation, automated enquiry handling, document generation and custom AI assistants.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Custom Software & SaaS Development",
              description:
                "Bespoke web applications, SaaS platforms, customer portals, management dashboards and API integrations.",
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
        className={`${plusJakartaSans.variable} ${ibmPlexMono.variable} font-sans bg-white text-[#33475F] antialiased min-h-screen flex flex-col justify-between selection:bg-[#143A6B] selection:text-white overflow-x-hidden`}
      >
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <ConsultationModal />
        <ChatbotWidget />
        <FloatingWhatsApp />
        <ScrollToTop />
      </body>
    </html>
  );
}
