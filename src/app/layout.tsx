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
  title: "CortexHive — Websites, AI Automation & Custom Software Agency UK",
  description:
    "Technology That Moves Your Business Forward. From professional small business websites starting at £99 to 24/7 AI receptionists, workflow automation and custom software development across the UK.",
  metadataBase: new URL("https://cortexhive.co.uk"),
  alternates: {
    canonical: "https://cortexhive.co.uk",
  },
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
    title: "CortexHive — Websites, AI Automation & Custom Software Agency UK",
    description:
      "From professional websites to intelligent AI automation and custom software, CortexHive helps UK businesses simplify operations, attract customers and turn ideas into working digital products.",
    url: "https://cortexhive.co.uk",
    siteName: "CortexHive",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "CortexHive — Websites, AI Automation & Custom Software UK",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CortexHive — Websites, AI Automation & Custom Software Agency UK",
    description:
      "Professional websites from £99, 24/7 AI receptionists, business automation and custom software development in the UK.",
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
                "Up to 10 custom-designed pages including dedicated service pages, case studies layout and enhanced SEO.",
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
        className={`${inter.variable} ${manrope.variable} font-sans bg-white text-[#475569] antialiased min-h-screen flex flex-col justify-between selection:bg-blue-600 selection:text-white overflow-x-hidden`}
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
