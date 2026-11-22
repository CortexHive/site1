"use client";

import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";
import { MessageSquare, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#F8FAFD] border-t border-[#E2E8F0] pt-16 sm:pt-20 pb-12 relative overflow-hidden text-xs sm:text-sm text-[#475569]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">
          {/* Column 1: Brand & Contact */}
          <div className="lg:col-span-1 space-y-4">
            <Link href="/" className="inline-flex items-center gap-2.5 group" aria-label="CortexHive Home">
              <div className="w-9 h-9 rounded-lg bg-[#14243A] flex items-center justify-center text-white border border-slate-800 group-hover:bg-blue-600 group-hover:border-blue-600 transition-colors flex-shrink-0">
                <svg className="w-4 h-4 fill-none stroke-current stroke-[2]" viewBox="0 0 24 24">
                  <path d="M12 2L2 7v10l10 5 10-5V7L12 2z" />
                  <circle cx="12" cy="12" r="2.5" fill="currentColor" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-base font-extrabold tracking-[-0.02em] text-[#14243A] leading-none">
                  CORTEX<span className="text-blue-600">HIVE</span>
                </span>
                <span className="text-[9px] font-semibold uppercase tracking-[0.14em] text-slate-500 mt-1 leading-none">
                  Websites, AI &amp; Software
                </span>
              </div>
            </Link>
            <p className="font-semibold text-xs text-[#14243A]">
              Technology That Moves Your Business Forward.
            </p>
            <p className="text-xs text-[#64748B] leading-relaxed">
              We design professional websites, build intelligent AI automation and develop custom software for businesses across the United Kingdom.
            </p>
            <div className="pt-2 space-y-2 text-xs">
              <a
                href={SITE_CONFIG.getWhatsAppLink("consultation")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-emerald-700 hover:text-emerald-800 font-semibold"
              >
                <MessageSquare className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>WhatsApp: {SITE_CONFIG.phoneDisplay}</span>
              </a>
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="flex items-center gap-2 text-[#475569] hover:text-[#14243A] font-medium"
              >
                <Mail className="w-4 h-4 text-[#64748B] flex-shrink-0" />
                <span>{SITE_CONFIG.email}</span>
              </a>
              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className="flex items-center gap-2 text-[#475569] hover:text-[#14243A] font-medium"
              >
                <Phone className="w-4 h-4 text-[#64748B] flex-shrink-0" />
                <span>{SITE_CONFIG.phoneDisplay}</span>
              </a>
              <div className="flex items-center gap-2 text-[#64748B] pt-1">
                <MapPin className="w-4 h-4 text-[#64748B] flex-shrink-0" />
                <span>{SITE_CONFIG.location}</span>
              </div>
            </div>
          </div>

          {/* Column 2: Websites */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold text-[#14243A] uppercase tracking-wider">Websites</h3>
            <ul className="space-y-2 text-xs text-[#475569]">
              <li>
                <Link href="/website-design" className="hover:text-blue-600 transition-colors">
                  Website Design &amp; Development
                </Link>
              </li>
              <li>
                <Link href="/small-business-websites" className="hover:text-blue-600 transition-colors">
                  Small Business Websites (From £99)
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-blue-600 transition-colors">
                  Website Packages (£99 / £349 / £699)
                </Link>
              </li>
              <li>
                <Link href="/industries/tradespeople" className="hover:text-blue-600 transition-colors">
                  Websites for Tradespeople
                </Link>
              </li>
              <li>
                <Link href="/industries/small-businesses" className="hover:text-blue-600 transition-colors">
                  Websites for Small Businesses
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: AI & Automation */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold text-[#14243A] uppercase tracking-wider">AI &amp; Automation</h3>
            <ul className="space-y-2 text-xs text-[#475569]">
              <li>
                <Link href="/ai-receptionist" className="hover:text-blue-600 transition-colors">
                  24/7 AI Receptionist
                </Link>
              </li>
              <li>
                <Link href="/ai-automation" className="hover:text-blue-600 transition-colors">
                  AI Business Automation
                </Link>
              </li>
              <li>
                <Link href="/ai-agents" className="hover:text-blue-600 transition-colors">
                  Custom AI Agents
                </Link>
              </li>
              <li>
                <Link href="/ai-automation#document-processing" className="hover:text-blue-600 transition-colors">
                  Intelligent Document Processing
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-blue-600 transition-colors">
                  All Digital Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Software & SaaS */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold text-[#14243A] uppercase tracking-wider">Software &amp; SaaS</h3>
            <ul className="space-y-2 text-xs text-[#475569]">
              <li>
                <Link href="/software-development" className="hover:text-blue-600 transition-colors">
                  Custom Software Development
                </Link>
              </li>
              <li>
                <Link href="/saas-development" className="hover:text-blue-600 transition-colors">
                  SaaS Development
                </Link>
              </li>
              <li>
                <Link href="/white-label-software" className="hover:text-blue-600 transition-colors">
                  White-Label Software Solutions
                </Link>
              </li>
              <li>
                <Link href="/our-products" className="hover:text-blue-600 transition-colors">
                  Our Products &amp; Portfolio
                </Link>
              </li>
              <li>
                <Link href="/industries/startups" className="hover:text-blue-600 transition-colors">
                  Startup MVP Development
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-blue-600 transition-colors">
                  Client Case Studies
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Company */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold text-[#14243A] uppercase tracking-wider">Company</h3>
            <ul className="space-y-2 text-xs text-[#475569]">
              <li>
                <Link href="/about" className="hover:text-blue-600 transition-colors">
                  About CortexHive
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-blue-600 transition-colors">
                  Pricing &amp; Packages
                </Link>
              </li>
              <li>
                <Link href="/guides" className="hover:text-blue-600 transition-colors">
                  UK Business Guides
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-600 transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-blue-600 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-blue-600 transition-colors">
                  Terms &amp; Conditions
                </Link>
              </li>
              <li>
                <Link href="/accessibility" className="hover:text-blue-600 transition-colors">
                  Accessibility Statement
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="border-t border-[#E2E8F0] pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#64748B]">
          <div>
            <p>&copy; {currentYear} CortexHive. All rights reserved. Operating across the United Kingdom.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-6 font-medium">
            <Link href="/privacy" className="hover:text-[#14243A] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-[#14243A] transition-colors">
              Terms &amp; Conditions
            </Link>
            <Link href="/accessibility" className="hover:text-[#14243A] transition-colors">
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
