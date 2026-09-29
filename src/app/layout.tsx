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
  title: "CortexHive — AI Product Studio & Custom Software Development",
  description: "From business problem to working product. CortexHive designs and builds custom AI applications, intelligent automations, and production software for UK businesses and founders.",
  metadataBase: new URL("https://cortexhive.co.uk"),
  keywords: [
    "AI Product Studio",
    "Custom AI Applications",
    "AI Automation UK",
    "Software Development UK",
    "MVP Development",
    "Full-Stack Web Applications",
    "CortexHive",
    "AI Solutions Studio"
  ],
  openGraph: {
    title: "CortexHive — AI Product Studio & Custom Software Development",
    description: "From business problem to working product. CortexHive designs and builds custom AI applications, intelligent automations, and production software.",
    url: "https://cortexhive.co.uk",
    siteName: "CortexHive",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "CortexHive — AI Product Studio",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CortexHive — AI Product Studio & Custom Software Development",
    description: "From business problem to working product. CortexHive designs and builds custom AI applications, intelligent automations, and production software.",
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
