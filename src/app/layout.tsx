import type { Metadata } from "next";
import localFont from "next/font/local";
import { Outfit, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ChatbotWidget from "@/components/chatbot-widget";
import ScrollToTop from "@/components/scroll-to-top";
import FloatingWhatsApp from "@/components/floating-whatsapp";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "CortexHive — Digital Solutions Agency | Websites, AI Receptionist & Custom Software",
  description:
    "From professional websites and £50 trades starter sites to 24/7 AI receptionists and custom software development, we help UK businesses build their digital presence, streamline operations and grow with confidence.",
  metadataBase: new URL("https://cortexhive.co.uk"),
  keywords: [
    "Website design UK",
    "Affordable website design UK",
    "Small business website design",
    "Website design for builders",
    "Website design for tradespeople",
    "Website design for plumbers",
    "Website design for electricians",
    "AI receptionist UK",
    "AI virtual receptionist",
    "AI business automation",
    "Custom software development UK",
    "CortexHive",
  ],
  openGraph: {
    title: "CortexHive — Digital Solutions Agency | Websites, AI Receptionist & Custom Software",
    description:
      "Digital solutions that move your business forward. Professional websites, £50 starter packages for trades, 24/7 AI receptionist, and custom software systems.",
    url: "https://cortexhive.co.uk",
    siteName: "CortexHive",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "CortexHive — Digital Solutions Agency",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CortexHive — Digital Solutions Agency | Websites, AI Receptionist & Custom Software",
    description:
      "From professional websites to intelligent AI solutions, we help UK businesses build their digital presence, streamline operations and grow.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "CortexHive",
  description:
    "Digital solutions agency helping UK businesses establish their digital presence, improve operations, and adopt modern web & AI technology.",
  url: "https://cortexhive.co.uk",
  telephone: "+447950501323",
  email: "info@cortexhive.co.uk",
  address: {
    "@type": "PostalAddress",
    addressLocality: "London",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 51.5074,
    longitude: -0.1278,
  },
  priceRange: "££",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:30",
      closes: "18:00",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Digital Solutions Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Small Business & Trades Starter Website",
          description: "Professional 1-page website with mobile design and WhatsApp lead capture for £50.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "AI Receptionist & 24/7 Virtual Answering",
          description: "Conversational voice assistant that answers incoming calls, qualifies leads, and texts instant summaries.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Professional Website Design & Development",
          description: "High-performance bespoke responsive business websites built on Next.js.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Custom Software & SaaS MVP Development",
          description: "Full-stack web applications, customer portals, admin dashboards, and database systems.",
        },
      },
    ],
  },
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
        className={`${geistSans.variable} ${geistMono.variable} ${outfit.variable} ${spaceGrotesk.variable} font-sans bg-background text-foreground antialiased min-h-screen flex flex-col justify-between`}
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
