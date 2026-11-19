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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-b border-slate-200/90 py-3 shadow-[0_1px_3px_rgba(15,23,42,0.04)]"
          : "bg-white/95 backdrop-blur-xs border-b border-slate-200/70 py-3.5"
      }`}
    >
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4"
        ref={dropdownRef}
      >
        {/* Left: Brand Mark */}
        <Link
          href="/"
          className="flex items-center gap-2.5 group flex-shrink-0"
          aria-label="CortexHive Home"
        >
          <div className="w-9 h-9 rounded-lg bg-[#14243A] flex items-center justify-center text-white border border-slate-800 group-hover:bg-blue-600 group-hover:border-blue-600 transition-colors">
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

        {/* Center: Clean Navigation */}
        <nav aria-label="Main Navigation" className="hidden lg:flex items-center gap-0.5 xl:gap-1.5">
          {/* Websites Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown("websites")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button
              type="button"
              onClick={() => setActiveDropdown(activeDropdown === "websites" ? null : "websites")}
              className={`inline-flex items-center gap-1 px-3 py-2 rounded-lg text-[13px] font-medium transition-colors ${
                pathname.includes("website") || pathname.includes("industries")
                  ? "text-blue-600 bg-blue-50/60 font-semibold"
                  : "text-slate-700 hover:text-[#14243A] hover:bg-slate-50"
              }`}
            >
              <span>Websites</span>
              <ChevronDown
                className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${
                  activeDropdown === "websites" ? "rotate-180 text-blue-600" : ""
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
                  <div className="bg-white rounded-xl border border-slate-200 shadow-[0_12px_32px_-8px_rgba(15,23,42,0.12)] p-2">
                    {websiteItems.map((item) => {
                      const Icon = item.icon;
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors group"
                        >
                          <div className="w-8 h-8 rounded-md bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                            <Icon className="w-4 h-4" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between gap-2">
                              <span className="text-xs font-semibold text-[#14243A]">
                                {item.name}
                              </span>
                              {item.tag && (
                                <span className="text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200/60">
                                  {item.tag}
                                </span>
                              )}
                            </div>
                            <p className="text-[11px] text-slate-500 leading-relaxed mt-0.5">
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
              className={`inline-flex items-center gap-1 px-3 py-2 rounded-lg text-[13px] font-medium transition-colors ${
                pathname.includes("ai-")
                  ? "text-blue-600 bg-blue-50/60 font-semibold"
                  : "text-slate-700 hover:text-[#14243A] hover:bg-slate-50"
              }`}
            >
              <span>AI &amp; Automation</span>
              <ChevronDown
                className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${
                  activeDropdown === "ai" ? "rotate-180 text-blue-600" : ""
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
                  <div className="bg-white rounded-xl border border-slate-200 shadow-[0_12px_32px_-8px_rgba(15,23,42,0.12)] p-2">
                    {aiItems.map((item) => {
                      const Icon = item.icon;
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors group"
                        >
                          <div className="w-8 h-8 rounded-md bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                            <Icon className="w-4 h-4" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between gap-2">
                              <span className="text-xs font-semibold text-[#14243A]">
                                {item.name}
                              </span>
                              {item.tag && (
                                <span className="text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-blue-50 text-blue-700">
                                  {item.tag}
                                </span>
                              )}
                            </div>
                            <p className="text-[11px] text-slate-500 leading-relaxed mt-0.5">
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
              className={`inline-flex items-center gap-1 px-3 py-2 rounded-lg text-[13px] font-medium transition-colors ${
                pathname.includes("software") || pathname.includes("saas")
                  ? "text-blue-600 bg-blue-50/60 font-semibold"
                  : "text-slate-700 hover:text-[#14243A] hover:bg-slate-50"
              }`}
            >
              <span>Software &amp; SaaS</span>
              <ChevronDown
                className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${
                  activeDropdown === "software" ? "rotate-180 text-blue-600" : ""
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
                  <div className="bg-white rounded-xl border border-slate-200 shadow-[0_12px_32px_-8px_rgba(15,23,42,0.12)] p-2">
                    {softwareItems.map((item) => {
                      const Icon = item.icon;
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors group"
                        >
                          <div className="w-8 h-8 rounded-md bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                            <Icon className="w-4 h-4" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between gap-2">
                              <span className="text-xs font-semibold text-[#14243A]">
                                {item.name}
                              </span>
                              {item.tag && (
                                <span className="text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-slate-100 text-slate-700">
                                  {item.tag}
                                </span>
                              )}
                            </div>
                            <p className="text-[11px] text-slate-500 leading-relaxed mt-0.5">
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
            className={`px-3 py-2 rounded-lg text-[13px] font-medium transition-colors ${
              pathname === "/our-products" || pathname === "/portfolio"
                ? "text-blue-600 bg-blue-50/60 font-semibold"
                : "text-slate-700 hover:text-[#14243A] hover:bg-slate-50"
            }`}
          >
            Portfolio
          </Link>

          <Link
            href="/pricing"
            className={`px-3 py-2 rounded-lg text-[13px] font-medium transition-colors ${
              pathname === "/pricing"
                ? "text-blue-600 bg-blue-50/60 font-semibold"
                : "text-slate-700 hover:text-[#14243A] hover:bg-slate-50"
            }`}
          >
            Pricing
          </Link>

          <Link
            href="/about"
            className={`px-3 py-2 rounded-lg text-[13px] font-medium transition-colors ${
              pathname === "/about"
                ? "text-blue-600 bg-blue-50/60 font-semibold"
                : "text-slate-700 hover:text-[#14243A] hover:bg-slate-50"
            }`}
          >
            About
          </Link>

          <Link
            href="/contact"
            className={`px-3 py-2 rounded-lg text-[13px] font-medium transition-colors ${
              pathname === "/contact"
                ? "text-blue-600 bg-blue-50/60 font-semibold"
                : "text-slate-700 hover:text-[#14243A] hover:bg-slate-50"
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
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold bg-blue-600 hover:bg-[#14243A] text-white transition-colors shadow-2xs cursor-pointer"
          >
            <span>Get a Free Consultation</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2.5 rounded-lg text-[#14243A] hover:bg-slate-100 transition-colors"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b border-slate-200 overflow-hidden shadow-lg"
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
              <div className="pt-4 border-t border-slate-200 grid grid-cols-1 gap-2.5">
                <button
                  type="button"
                  onClick={() => {
                    setIsOpen(false);
                    openConsultationModal();
                  }}
                  className="w-full py-3.5 px-4 rounded-xl bg-blue-600 text-white font-semibold text-xs flex items-center justify-center gap-2 shadow-xs cursor-pointer"
                >
                  <span>Get a Free Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href={SITE_CONFIG.getWhatsAppLink("consultation")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 font-semibold text-xs flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-600" />
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
