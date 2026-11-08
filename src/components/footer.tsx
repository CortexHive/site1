"use client";

import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";
import { MessageSquare, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#F8FAFD] border-t border-[#E2E8F0] pt-16 sm:pt-20 pb-12 relative overflow-hidden text-xs sm:text-sm text-[#475569]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">
          {/* Column 1: Brand & Positioning */}
          <div className="lg:col-span-1 space-y-4">
            <Link href="/" className="inline-flex items-center gap-2">
              <span className="text-xl font-black tracking-tight text-[#14243A]">
                CORTEX<span className="text-blue-600">HIVE</span>
              </span>
            </Link>
            <p className="font-semibold text-xs text-[#14243A]">
              From Business Problem to Working Product.
            </p>
            <p className="text-xs text-[#64748B] leading-relaxed">
              We design professional websites, build intelligent AI solutions, and develop custom digital products that help businesses automate operations and grow.
            </p>
            <div className="pt-2 space-y-2 text-xs">
              <a
                href={SITE_CONFIG.getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-emerald-700 hover:text-emerald-800 font-semibold"
              >
                <MessageSquare className="w-4 h-4 text-emerald-600" />
                <span>WhatsApp: {SITE_CONFIG.phoneDisplay}</span>
              </a>
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="flex items-center gap-2 text-[#475569] hover:text-[#14243A] font-medium"
              >
                <Mail className="w-4 h-4 text-[#64748B]" />
                <span>{SITE_CONFIG.email}</span>
              </a>
              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className="flex items-center gap-2 text-[#475569] hover:text-[#14243A] font-medium"
              >
                <Phone className="w-4 h-4 text-[#64748B]" />
                <span>{SITE_CONFIG.phoneDisplay}</span>
              </a>
              <div className="flex items-center gap-2 text-[#64748B] pt-1">
                <MapPin className="w-4 h-4 text-[#64748B]" />
                <span>{SITE_CONFIG.location}</span>
              </div>
            </div>
          </div>

          {/* Column 2: Websites */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-[#14243A] uppercase tracking-wider">Websites</h4>
            <ul className="space-y-2 text-xs text-[#475569]">
              <li>
                <Link href="/small-business-websites" className="hover:text-blue-600 font-semibold text-emerald-700 transition-colors">
                  Launch Website (£99)
                </Link>
              </li>
              <li>
                <Link href="/website-design" className="hover:text-blue-600 transition-colors">
                  Business Website (£349)
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-blue-600 transition-colors">
                  Business Growth (£699)
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-blue-600 transition-colors">
                  Monthly Care Plans (from £15)
                </Link>
              </li>
              <li>
                <Link href="/industries/tradespeople" className="hover:text-blue-600 transition-colors">
                  Websites for Tradespeople
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: AI & Automation */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-[#14243A] uppercase tracking-wider">AI &amp; Automation</h4>
            <ul className="space-y-2 text-xs text-[#475569]">
              <li>
                <Link href="/ai-automation" className="hover:text-blue-600 transition-colors">
                  Custom AI Agents
                </Link>
              </li>
              <li>
                <Link href="/ai-receptionist" className="hover:text-blue-600 transition-colors">
                  AI Voice &amp; Receptionist
                </Link>
              </li>
              <li>
                <Link href="/ai-automation" className="hover:text-blue-600 transition-colors">
                  Business Workflow Automation
                </Link>
              </li>
              <li>
                <Link href="/ai-automation" className="hover:text-blue-600 transition-colors">
                  Document Intelligence
                </Link>
              </li>
              <li>
                <Link href="/ai-automation" className="hover:text-blue-600 transition-colors">
                  Internal AI Knowledge Bases
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Software & SaaS */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-[#14243A] uppercase tracking-wider">Software &amp; SaaS</h4>
            <ul className="space-y-2 text-xs text-[#475569]">
              <li>
                <Link href="/software-development" className="hover:text-blue-600 transition-colors">
                  SaaS MVP Development
                </Link>
              </li>
              <li>
                <Link href="/software-development" className="hover:text-blue-600 transition-colors">
                  Custom Web Applications
                </Link>
              </li>
              <li>
                <Link href="/software-development" className="hover:text-blue-600 transition-colors">
                  Internal Business Dashboards
                </Link>
              </li>
              <li>
                <Link href="/software-development" className="hover:text-blue-600 transition-colors">
                  Client Portals &amp; Logins
                </Link>
              </li>
              <li>
                <Link href="/software-development" className="hover:text-blue-600 transition-colors">
                  API &amp; Database Architecture
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Company */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-[#14243A] uppercase tracking-wider">Company</h4>
            <ul className="space-y-2 text-xs text-[#475569]">
              <li>
                <Link href="/about" className="hover:text-blue-600 transition-colors">
                  About CortexHive
                </Link>
              </li>
              <li>
                <Link href="/our-products" className="hover:text-blue-600 transition-colors">
                  Our Products &amp; Portfolio
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-blue-600 transition-colors">
                  Pricing &amp; Packages
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
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Bar: Accurate Legal Status */}
        <div className="border-t border-[#E2E8F0] pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#64748B]">
          <div>
            <p>
              &copy; {currentYear} CortexHive. All rights reserved. CortexHive is a trading name operated as a self-employed business in the United Kingdom. Registered in England &amp; Wales.
            </p>
          </div>
          <div className="flex gap-6 font-medium">
            <Link href="/privacy" className="hover:text-[#14243A] transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-[#14243A] transition-colors">Terms of Service</Link>
            <Link href="/accessibility" className="hover:text-[#14243A] transition-colors">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
