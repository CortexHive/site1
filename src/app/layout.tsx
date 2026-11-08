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
  title: "CortexHive | Website Design, AI Automation & Software Development UK",
  description:
    "Professional websites from £99, custom AI agents, business automation and bespoke software development. Discover digital solutions from CortexHive.",
  metadataBase: new URL("https://cortexhive.co.uk"),
  keywords: [
    "affordable website design UK",
    "£99 website design",
    "small business website design",
    "website design for sole traders",
    "website design for startups",
    "professional business websites",
    "website design for tradespeople",
    "AI automation services UK",
    "business process automation",
    "custom AI agents",
    "AI voice agents UK",
    "AI receptionist for small businesses",
    "custom software development UK",
    "SaaS development UK",
    "web application development",
    "CortexHive",
  ],
  openGraph: {
    title: "CortexHive | Website Design, AI Automation & Software Development UK",
    description:
      "We design professional websites, build intelligent AI solutions and develop custom digital products that help businesses automate operations, work smarter and grow.",
    url: "https://cortexhive.co.uk",
    siteName: "CortexHive",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "CortexHive — AI, Websites & Software Development",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CortexHive | Website Design, AI Automation & Software Development UK",
    description:
      "We design professional websites, build intelligent AI solutions and develop custom digital products that help businesses automate operations, work smarter and grow.",
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
        "UK technology studio providing professional website design, practical AI automation, custom AI agents, and software/SaaS development.",
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
      name: "CortexHive Digital Solutions",
      url: "https://cortexhive.co.uk",
      telephone: "+447950501323",
      email: "info@cortexhive.co.uk",
      priceRange: "££",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "CortexHive Service Divisions",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Launch Website Package",
              description: "Professional 1-page business website for sole traders and small businesses starting from £99.",
            },
            price: "99.00",
            priceCurrency: "GBP",
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Business Website Package",
              description: "Comprehensive 5-page business website designed to establish an authentic online presence and generate enquiries.",
            },
            price: "349.00",
            priceCurrency: "GBP",
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Business Growth Website",
              description: "Up to 8 pages with advanced forms, analytics, and SEO foundations.",
            },
            price: "699.00",
            priceCurrency: "GBP",
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "AI & Business Automation",
              description: "Intelligent workflows, customer enquiry triage, document extraction, and custom AI agents.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Custom Software & SaaS Development",
              description: "Full-stack web applications, portals, dashboards, and subscription platforms.",
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
        className={`${inter.variable} ${manrope.variable} font-sans bg-white text-[#475569] antialiased min-h-screen flex flex-col justify-between selection:bg-blue-100 selection:text-[#14243A]`}
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
