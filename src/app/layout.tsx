import type { Metadata } from "next";
import localFont from "next/font/local";
import { Outfit, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ChatbotWidget from "@/components/chatbot-widget";
import ScrollToTop from "@/components/scroll-to-top";

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
  title: "Cortex Hive — Digital Innovation Partners | AI-Powered Agency",
  description: "Cortex Hive is a next-generation AI-powered digital agency. We design and build scalable SaaS products, custom AI tools, web applications, and marketing campaigns.",
  metadataBase: new URL("https://cortexhive.co.uk"),
  keywords: [
    "AI Digital Agency",
    "SaaS Development",
    "Custom AI Tools",
    "AI Agents",
    "Web Application Development",
    "Next.js Development",
    "Cortex Hive",
    "Digital Innovation Studio"
  ],
  openGraph: {
    title: "Cortex Hive — Digital Innovation Partners | AI-Powered Agency",
    description: "Engineering the AI-driven digital future. We build SaaS platforms, custom AI integrations, web apps, and performance campaigns at speed.",
    url: "https://cortexhive.co.uk",
    siteName: "Cortex Hive",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "Cortex Hive — Digital Innovation Partners",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cortex Hive — Digital Innovation Partners | AI-Powered Agency",
    description: "Engineering the AI-driven digital future. We build SaaS platforms, custom AI integrations, web apps, and performance campaigns at speed.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
  }>) {
  return (
    <html lang="en" className="light scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${outfit.variable} ${spaceGrotesk.variable} font-sans bg-background text-foreground antialiased min-h-screen flex flex-col justify-between`}
      >
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <ChatbotWidget />
        <ScrollToTop />
      </body>
    </html>
  );
}
