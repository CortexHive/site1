"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ArrowRight,
  ChevronDown,
  Bot,
  Layers,
  PhoneCall,
  Globe,
  Code2,
  Cpu,
  Terminal,
  MessageSquare,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { SITE_CONFIG } from "@/lib/config";
import { openConsultationModal } from "./consultation-modal";

interface NavDropdownItem {
  name: string;
  href: string;
  desc: string;
  tag?: string;
  icon: React.ComponentType<{ className?: string }>;
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  const websiteItems: NavDropdownItem[] = [
    {
      name: "Website Design & Development",
      href: "/website-design",
      desc: "Modern, fast-loading websites designed to showcase your business and generate enquiries",
      tag: "All Businesses",
      icon: Globe,
    },
    {
      name: "Small Business & Trades Websites",
      href: "/small-business-websites",
      desc: "Affordable starter, business and growth website packages starting from £99",
      tag: "From £99",
      icon: Code2,
    },
    {
      name: "Industry Website Solutions",
      href: "/industries/tradespeople",
      desc: "Tailored websites for tradespeople, salons, hospitality, SMEs and startups",
      icon: Layers,
    },
  ];

  const aiItems: NavDropdownItem[] = [
    {
      name: "AI Receptionist",
      href: "/ai-receptionist",
      desc: "24/7 AI call answering, customer information collection and lead qualification",
      tag: "24/7 Voice AI",
      icon: PhoneCall,
    },
    {
      name: "AI Business Automation",
      href: "/ai-automation",
      desc: "Automate enquiry processing, repetitive admin, document workflows and follow-ups",
      tag: "Workflows",
      icon: Bot,
    },
    {
      name: "Custom AI Agents",
      href: "/ai-agents",
      desc: "Tailored AI assistants, customer support agents and intelligent document processing",
      tag: "Custom AI",
      icon: Cpu,
    },
  ];

  const softwareItems: NavDropdownItem[] = [
    {
      name: "Custom Software Development",
      href: "/software-development",
      desc: "Bespoke web applications, customer portals, dashboards and internal business systems",
      tag: "Bespoke",
      icon: Terminal,
    },
    {
      name: "SaaS Development",
      href: "/saas-development",
      desc: "End-to-end SaaS platforms, multi-role portals, subscriptions and cloud architecture",
      tag: "SaaS & MVPs",
      icon: Layers,
    },
    {
      name: "White-Label Software Solutions",
      href: "/white-label-software",
      desc: "Rebrandable digital platforms, browser-based tools and document solutions",
      tag: "White-Label",
      icon: Code2,
    },
    {
      name: "Our Products & Portfolio",
      href: "/our-products",
      desc: "Explore MarkScheme, AuraPDF, Rydigo, Skyview and EV Trade Show",
      tag: "Live Proof",
      icon: Globe,
    },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b border-[#DCE6F2] transition-all duration-200 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md py-3 shadow-[0_6px_24px_-12px_rgba(22,24,26,0.12)]"
          : "bg-[#F4F7FB]/92 backdrop-blur-md py-3.5"
      }`}
    >
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4"
        ref={dropdownRef}
      >
        {/* Left: Brand Mark */}
        <Link
          href="/"
          className="flex items-center gap-3 group flex-shrink-0"
          aria-label="CortexHive Home"
        >
          <div className="w-9 h-9 rounded-md bg-[#08182E] flex items-center justify-center text-white group-hover:bg-[#143A6B] transition-colors">
            <svg className="w-4 h-4 fill-none stroke-current stroke-[2]" viewBox="0 0 24 24">
              <path d="M12 2L2 7v10l10 5 10-5V7L12 2z" />
              <circle cx="12" cy="12" r="2.5" fill="currentColor" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-[15px] font-bold tracking-[0.04em] text-[#0A1628] leading-none">
              CORTEX<span className="text-[#143A6B]">HIVE</span>
            </span>
            <span className="font-mono text-[9px] font-medium uppercase tracking-[0.14em] text-[#61758F] mt-1 leading-none">
              Websites, AI &amp; Software
            </span>
          </div>
        </Link>

        {/* Center: Clean Editorial Studio Navigation */}
        <nav
          aria-label="Main Navigation"
          className="hidden lg:flex items-center gap-1 xl:gap-2"
        >
          {/* Websites Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown("websites")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button
              type="button"
              onClick={() => setActiveDropdown(activeDropdown === "websites" ? null : "websites")}
              className={`inline-flex items-center gap-1 px-3 py-2 rounded text-[13.5px] font-medium transition-colors cursor-pointer ${
                pathname.includes("website") || pathname.includes("industries") || activeDropdown === "websites"
                  ? "text-[#143A6B] font-semibold bg-[#EDF3FA]/70"
                  : "text-[#0A1628] hover:text-[#143A6B] hover:bg-[#EDF3FA]/50"
              }`}
            >
              <span>Websites</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  activeDropdown === "websites" ? "rotate-180 text-[#143A6B]" : "text-[#61758F]"
                }`}
              />
            </button>

            <AnimatePresence>
              {activeDropdown === "websites" && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 6 }}
                  transition={{ duration: 0.14 }}
                  className="absolute top-full left-0 pt-2 w-80 z-50"
                >
                  <div className="bg-white rounded-md border border-[#DCE6F2] shadow-[0_20px_44px_-16px_rgba(22,24,26,0.16)] p-2">
                    {websiteItems.map((item) => {
                      const Icon = item.icon;
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="flex items-start gap-3 p-3 rounded hover:bg-[#F4F7FB] transition-colors group"
                        >
                          <div className="w-8 h-8 rounded bg-[#EDF3FA] text-[#143A6B] flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-[#143A6B] group-hover:text-white transition-colors">
                            <Icon className="w-4 h-4" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between gap-2">
                              <span className="text-xs font-semibold text-[#0A1628]">
                                {item.name}
                              </span>
                              {item.tag && (
                                <span className="font-mono text-[9px] font-semibold uppercase tracking-wider px-1.5 py-0.5 rounded-sm bg-[#EDF3FA] text-[#143A6B] border border-[#143A6B]/20">
                                  {item.tag}
                                </span>
                              )}
                            </div>
                            <p className="text-[11px] text-[#33475F] leading-relaxed mt-0.5">
                              {item.desc}
                            </p>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* AI & Automation Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown("ai")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button
              type="button"
              onClick={() => setActiveDropdown(activeDropdown === "ai" ? null : "ai")}
              className={`inline-flex items-center gap-1 px-3 py-2 rounded text-[13.5px] font-medium transition-colors cursor-pointer ${
                pathname.includes("ai-") || activeDropdown === "ai"
                  ? "text-[#143A6B] font-semibold bg-[#EDF3FA]/70"
                  : "text-[#0A1628] hover:text-[#143A6B] hover:bg-[#EDF3FA]/50"
              }`}
            >
              <span>AI &amp; Automation</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  activeDropdown === "ai" ? "rotate-180 text-[#143A6B]" : "text-[#61758F]"
                }`}
              />
            </button>

            <AnimatePresence>
              {activeDropdown === "ai" && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 6 }}
                  transition={{ duration: 0.14 }}
                  className="absolute top-full left-0 pt-2 w-80 z-50"
                >
                  <div className="bg-white rounded-md border border-[#DCE6F2] shadow-[0_20px_44px_-16px_rgba(22,24,26,0.16)] p-2">
                    {aiItems.map((item) => {
                      const Icon = item.icon;
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="flex items-start gap-3 p-3 rounded hover:bg-[#F4F7FB] transition-colors group"
                        >
                          <div className="w-8 h-8 rounded bg-[#EDF3FA] text-[#143A6B] flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-[#143A6B] group-hover:text-white transition-colors">
                            <Icon className="w-4 h-4" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between gap-2">
                              <span className="text-xs font-semibold text-[#0A1628]">
                                {item.name}
                              </span>
                              {item.tag && (
                                <span className="font-mono text-[9px] font-semibold uppercase tracking-wider px-1.5 py-0.5 rounded-sm bg-[#E8EFF4] text-[#143A6B]">
                                  {item.tag}
                                </span>
                              )}
                            </div>
                            <p className="text-[11px] text-[#33475F] leading-relaxed mt-0.5">
                              {item.desc}
                            </p>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Software & SaaS Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown("software")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button
              type="button"
              onClick={() => setActiveDropdown(activeDropdown === "software" ? null : "software")}
              className={`inline-flex items-center gap-1 px-3 py-2 rounded text-[13.5px] font-medium transition-colors cursor-pointer ${
                pathname.includes("software") || pathname.includes("saas") || activeDropdown === "software"
                  ? "text-[#143A6B] font-semibold bg-[#EDF3FA]/70"
                  : "text-[#0A1628] hover:text-[#143A6B] hover:bg-[#EDF3FA]/50"
              }`}
            >
              <span>Software &amp; SaaS</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  activeDropdown === "software" ? "rotate-180 text-[#143A6B]" : "text-[#61758F]"
                }`}
              />
            </button>

            <AnimatePresence>
              {activeDropdown === "software" && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 6 }}
                  transition={{ duration: 0.14 }}
                  className="absolute top-full left-0 pt-2 w-80 z-50"
                >
                  <div className="bg-white rounded-md border border-[#DCE6F2] shadow-[0_20px_44px_-16px_rgba(22,24,26,0.16)] p-2">
                    {softwareItems.map((item) => {
                      const Icon = item.icon;
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="flex items-start gap-3 p-3 rounded hover:bg-[#F4F7FB] transition-colors group"
                        >
                          <div className="w-8 h-8 rounded bg-[#EDF3FA] text-[#143A6B] flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-[#143A6B] group-hover:text-white transition-colors">
                            <Icon className="w-4 h-4" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between gap-2">
                              <span className="text-xs font-semibold text-[#0A1628]">
                                {item.name}
                              </span>
                              {item.tag && (
                                <span className="font-mono text-[9px] font-semibold uppercase tracking-wider px-1.5 py-0.5 rounded-sm bg-[#EDF3FA] text-[#33475F]">
                                  {item.tag}
                                </span>
                              )}
                            </div>
                            <p className="text-[11px] text-[#33475F] leading-relaxed mt-0.5">
                              {item.desc}
                            </p>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link
            href="/our-products"
            className={`px-3 py-2 rounded text-[13.5px] font-medium transition-colors ${
              pathname === "/our-products" || pathname === "/portfolio"
                ? "text-[#143A6B] font-semibold bg-[#EDF3FA]/70"
                : "text-[#0A1628] hover:text-[#143A6B] hover:bg-[#EDF3FA]/50"
            }`}
          >
            Portfolio
          </Link>

          <Link
            href="/pricing"
            className={`px-3 py-2 rounded text-[13.5px] font-medium transition-colors ${
              pathname === "/pricing"
                ? "text-[#143A6B] font-semibold bg-[#EDF3FA]/70"
                : "text-[#0A1628] hover:text-[#143A6B] hover:bg-[#EDF3FA]/50"
            }`}
          >
            Pricing
          </Link>

          <Link
            href="/about"
            className={`px-3 py-2 rounded text-[13.5px] font-medium transition-colors ${
              pathname === "/about"
                ? "text-[#143A6B] font-semibold bg-[#EDF3FA]/70"
                : "text-[#0A1628] hover:text-[#143A6B] hover:bg-[#EDF3FA]/50"
            }`}
          >
            About
          </Link>

          <Link
            href="/contact"
            className={`px-3 py-2 rounded text-[13.5px] font-medium transition-colors ${
              pathname === "/contact"
                ? "text-[#143A6B] font-semibold bg-[#EDF3FA]/70"
                : "text-[#0A1628] hover:text-[#143A6B] hover:bg-[#EDF3FA]/50"
            }`}
          >
            Contact
          </Link>
        </nav>

        {/* Right: Primary Consultation CTA */}
        <div className="hidden lg:flex items-center gap-2.5 flex-shrink-0">
          <button
            type="button"
            onClick={() => openConsultationModal()}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-[13px] font-semibold bg-[#C69B3A] hover:bg-[#B5892E] text-white shadow-2xs transition-colors cursor-pointer"
          >
            <span>Book Consultation</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden inline-flex items-center gap-1.5 px-3 py-2 rounded bg-white border border-[#DCE6F2] text-[#0A1628] hover:bg-[#EDF3FA] text-xs font-semibold transition-colors cursor-pointer"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <>
              <X className="w-4 h-4" />
              <span>Close</span>
            </>
          ) : (
            <>
              <Menu className="w-4 h-4" />
              <span>Menu</span>
            </>
          )}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b border-[#DCE6F2] overflow-hidden shadow-lg"
          >
            <div className="px-4 pt-3 pb-6 space-y-1.5 max-h-[84vh] overflow-y-auto">
              <Link
                href="/"
                className="block py-2.5 px-2 rounded-lg text-sm font-semibold text-[#14243A] hover:bg-slate-50"
              >
                Home
              </Link>

              {/* Mobile Websites Accordion */}
              <div className="border-t border-slate-100 pt-1.5">
                <button
                  type="button"
                  onClick={() => setMobileExpanded(mobileExpanded === "websites" ? null : "websites")}
                  className="w-full flex items-center justify-between py-2.5 px-2 text-sm font-semibold text-[#14243A]"
                >
                  <span>Websites</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      mobileExpanded === "websites" ? "rotate-180 text-blue-600" : "text-slate-400"
                    }`}
                  />
                </button>
                {mobileExpanded === "websites" && (
                  <div className="pl-3 pr-2 pb-2 space-y-1">
                    {websiteItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block py-2 px-3 rounded-lg bg-slate-50 hover:bg-blue-50 text-xs font-semibold text-[#14243A]"
                      >
                        <div className="flex items-center justify-between">
                          <span>{item.name}</span>
                          {item.tag && (
                            <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800">
                              {item.tag}
                            </span>
                          )}
                        </div>
                        <p className="text-[11px] font-normal text-slate-500 mt-0.5">{item.desc}</p>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile AI & Automation Accordion */}
              <div className="border-t border-slate-100 pt-1.5">
                <button
                  type="button"
                  onClick={() => setMobileExpanded(mobileExpanded === "ai" ? null : "ai")}
                  className="w-full flex items-center justify-between py-2.5 px-2 text-sm font-semibold text-[#14243A]"
                >
                  <span>AI &amp; Automation</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      mobileExpanded === "ai" ? "rotate-180 text-blue-600" : "text-slate-400"
                    }`}
                  />
                </button>
                {mobileExpanded === "ai" && (
                  <div className="pl-3 pr-2 pb-2 space-y-1">
                    {aiItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block py-2 px-3 rounded-lg bg-slate-50 hover:bg-blue-50 text-xs font-semibold text-[#14243A]"
                      >
                        <div className="flex items-center justify-between">
                          <span>{item.name}</span>
                          {item.tag && (
                            <span className="text-[10px] px-1.5 py-0.5 rounded bg-blue-100 text-blue-800">
                              {item.tag}
                            </span>
                          )}
                        </div>
                        <p className="text-[11px] font-normal text-slate-500 mt-0.5">{item.desc}</p>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Software & SaaS Accordion */}
              <div className="border-t border-slate-100 pt-1.5">
                <button
                  type="button"
                  onClick={() => setMobileExpanded(mobileExpanded === "software" ? null : "software")}
                  className="w-full flex items-center justify-between py-2.5 px-2 text-sm font-semibold text-[#14243A]"
                >
                  <span>Software &amp; SaaS</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      mobileExpanded === "software" ? "rotate-180 text-blue-600" : "text-slate-400"
                    }`}
                  />
                </button>
                {mobileExpanded === "software" && (
                  <div className="pl-3 pr-2 pb-2 space-y-1">
                    {softwareItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block py-2 px-3 rounded-lg bg-slate-50 hover:bg-blue-50 text-xs font-semibold text-[#14243A]"
                      >
                        <div className="flex items-center justify-between">
                          <span>{item.name}</span>
                          {item.tag && (
                            <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-200 text-slate-700">
                              {item.tag}
                            </span>
                          )}
                        </div>
                        <p className="text-[11px] font-normal text-slate-500 mt-0.5">{item.desc}</p>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <div className="border-t border-slate-100 pt-1.5 space-y-1">
                <Link
                  href="/our-products"
                  className="block py-2.5 px-2 rounded-lg text-sm font-semibold text-[#14243A] hover:bg-slate-50"
                >
                  Our Products &amp; Portfolio
                </Link>
                <Link
                  href="/pricing"
                  className="block py-2.5 px-2 rounded-lg text-sm font-semibold text-[#14243A] hover:bg-slate-50"
                >
                  Pricing &amp; Packages
                </Link>
                <Link
                  href="/about"
                  className="block py-2.5 px-2 rounded-lg text-sm font-semibold text-[#14243A] hover:bg-slate-50"
                >
                  About CortexHive
                </Link>
                <Link
                  href="/contact"
                  className="block py-2.5 px-2 rounded-lg text-sm font-semibold text-[#14243A] hover:bg-slate-50"
                >
                  Contact Us
                </Link>
              </div>

              {/* Mobile Action Buttons */}
              <div className="pt-4 border-t border-[#DCE6F2] grid grid-cols-1 gap-2.5">
                <button
                  type="button"
                  onClick={() => {
                    setIsOpen(false);
                    openConsultationModal();
                  }}
                  className="w-full py-3.5 px-4 rounded bg-[#08182E] hover:bg-[#143A6B] text-white font-semibold text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <span>Book Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href={SITE_CONFIG.getWhatsAppLink("consultation")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded bg-[#EDF3FA] border border-[#143A6B]/25 text-[#143A6B] font-semibold text-xs flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4 text-[#143A6B]" />
                  <span>Chat on WhatsApp ({SITE_CONFIG.phoneDisplay})</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
