"use client";

import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";
import { MessageSquare, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#051122] border-t border-[#C69B3A]/20 pt-16 sm:pt-20 pb-20 sm:pb-14 relative overflow-hidden text-xs sm:text-sm text-blue-100/75">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">
          {/* Column 1: Brand & Contact */}
          <div className="lg:col-span-1 space-y-4">
            <Link href="/" className="inline-flex items-center gap-2.5 group" aria-label="CortexHive Home">
              <div className="w-9 h-9 rounded-lg bg-[#143A6B] flex items-center justify-center text-white border border-[#C69B3A]/40 group-hover:bg-[#C69B3A] transition-colors flex-shrink-0">
                <svg className="w-4 h-4 fill-none stroke-current stroke-[2]" viewBox="0 0 24 24">
                  <path d="M12 2L2 7v10l10 5 10-5V7L12 2z" />
                  <circle cx="12" cy="12" r="2.5" fill="currentColor" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-base font-extrabold tracking-[-0.02em] text-white leading-none">
                  CORTEX<span className="text-[#D4AF37]">HIVE</span>
                </span>
                <span className="font-mono text-[9px] font-medium uppercase tracking-[0.14em] text-blue-200/60 mt-1 leading-none">
                  Websites, AI &amp; Software
                </span>
              </div>
            </Link>
            <p className="font-medium text-xs text-[#FCFBF8]">
              Technology That Moves Your Business Forward.
            </p>
            <p className="text-xs text-[#FCFBF8]/65 leading-relaxed">
              We design professional websites, build intelligent AI automation and develop custom software for businesses across the United Kingdom.
            </p>
            <div className="pt-2 space-y-2 text-xs">
              <a
                href={SITE_CONFIG.getWhatsAppLink("consultation")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#BFDBFE] hover:text-[#FCFBF8] font-medium transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-[#BFDBFE] flex-shrink-0" />
                <span>WhatsApp: {SITE_CONFIG.phoneDisplay}</span>
              </a>
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="flex items-center gap-2 text-[#FCFBF8]/75 hover:text-[#FCFBF8] font-medium transition-colors"
              >
                <Mail className="w-4 h-4 text-[#FCFBF8]/55 flex-shrink-0" />
                <span>{SITE_CONFIG.email}</span>
              </a>
              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className="flex items-center gap-2 text-[#FCFBF8]/75 hover:text-[#FCFBF8] font-medium transition-colors"
              >
                <Phone className="w-4 h-4 text-[#FCFBF8]/55 flex-shrink-0" />
                <span>{SITE_CONFIG.phoneDisplay}</span>
              </a>
              <div className="flex items-center gap-2 text-[#FCFBF8]/60 pt-1">
                <MapPin className="w-4 h-4 text-[#FCFBF8]/55 flex-shrink-0" />
                <span>{SITE_CONFIG.location}</span>
              </div>
            </div>
          </div>

          {/* Column 2: Websites */}
          <div className="space-y-3">
            <h3 className="font-mono text-[11px] font-medium text-[#FCFBF8] uppercase tracking-[0.14em]">Websites</h3>
            <ul className="space-y-2 text-xs text-[#FCFBF8]/70">
              <li>
                <Link href="/website-design" className="hover:text-[#FCFBF8] transition-colors">
                  Website Design &amp; Development
                </Link>
              </li>
              <li>
                <Link href="/small-business-websites" className="hover:text-[#FCFBF8] transition-colors">
                  Small Business Websites (From £99)
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-[#FCFBF8] transition-colors">
                  Website Packages (£99 / £349 / £699)
                </Link>
              </li>
              <li>
                <Link href="/industries/tradespeople" className="hover:text-[#FCFBF8] transition-colors">
                  Websites for Tradespeople
                </Link>
              </li>
              <li>
                <Link href="/industries/small-businesses" className="hover:text-[#FCFBF8] transition-colors">
                  Websites for Small Businesses
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: AI & Automation */}
          <div className="space-y-3">
            <h3 className="font-mono text-[11px] font-medium text-[#FCFBF8] uppercase tracking-[0.14em]">AI &amp; Automation</h3>
            <ul className="space-y-2 text-xs text-[#FCFBF8]/70">
              <li>
                <Link href="/ai-receptionist" className="hover:text-[#FCFBF8] transition-colors">
                  24/7 AI Receptionist
                </Link>
              </li>
              <li>
                <Link href="/ai-automation" className="hover:text-[#FCFBF8] transition-colors">
                  AI Business Automation
                </Link>
              </li>
              <li>
                <Link href="/ai-agents" className="hover:text-[#FCFBF8] transition-colors">
                  Custom AI Agents
                </Link>
              </li>
              <li>
                <Link href="/ai-automation#document-processing" className="hover:text-[#FCFBF8] transition-colors">
                  Intelligent Document Processing
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#FCFBF8] transition-colors">
                  All Digital Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Software & SaaS */}
          <div className="space-y-3">
            <h3 className="font-mono text-[11px] font-medium text-[#FCFBF8] uppercase tracking-[0.14em]">Software &amp; SaaS</h3>
            <ul className="space-y-2 text-xs text-[#FCFBF8]/70">
              <li>
                <Link href="/software-development" className="hover:text-[#FCFBF8] transition-colors">
                  Custom Software Development
                </Link>
              </li>
              <li>
                <Link href="/saas-development" className="hover:text-[#FCFBF8] transition-colors">
                  SaaS Development
                </Link>
              </li>
              <li>
                <Link href="/white-label-software" className="hover:text-[#FCFBF8] transition-colors">
                  White-Label Software Solutions
                </Link>
              </li>
              <li>
                <Link href="/our-products" className="hover:text-[#FCFBF8] transition-colors">
                  Our Products &amp; Portfolio
                </Link>
              </li>
              <li>
                <Link href="/industries/startups" className="hover:text-[#FCFBF8] transition-colors">
                  Startup MVP Development
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-[#FCFBF8] transition-colors">
                  Client Case Studies
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Company */}
          <div className="space-y-3">
            <h3 className="font-mono text-[11px] font-medium text-[#FCFBF8] uppercase tracking-[0.14em]">Company</h3>
            <ul className="space-y-2 text-xs text-[#FCFBF8]/70">
              <li>
                <Link href="/about" className="hover:text-[#FCFBF8] transition-colors">
                  About CortexHive
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-[#FCFBF8] transition-colors">
                  Pricing &amp; Packages
                </Link>
              </li>
              <li>
                <Link href="/guides" className="hover:text-[#FCFBF8] transition-colors">
                  UK Business Guides
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#FCFBF8] transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-[#FCFBF8] transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-[#FCFBF8] transition-colors">
                  Terms &amp; Conditions
                </Link>
              </li>
              <li>
                <Link href="/accessibility" className="hover:text-[#FCFBF8] transition-colors">
                  Accessibility Statement
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="border-t border-[#FCFBF8]/12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#FCFBF8]/55">
          <div>
            <p>&copy; {currentYear} CortexHive. All rights reserved. Operating across the United Kingdom.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-6 font-medium">
            <Link href="/privacy" className="hover:text-[#FCFBF8] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-[#FCFBF8] transition-colors">
              Terms &amp; Conditions
            </Link>
            <Link href="/accessibility" className="hover:text-[#FCFBF8] transition-colors">
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
