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
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { SITE_CONFIG } from "@/lib/config";

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
      name: "Bespoke Web Platforms",
      href: "/website-design",
      desc: "High-speed Next.js web architecture engineered for authority and conversion",
      tag: "Architecture",
      icon: Globe,
    },
    {
      name: "Commercial & Trade Systems",
      href: "/small-business-websites",
      desc: "Turnkey digital presence and lead capture systems for UK businesses",
      icon: Code2,
    },
    {
      name: "Industry Solutions",
      href: "/industries/tradespeople",
      desc: "Sector-specific platforms for trades, clinics, hospitality, and startups",
      icon: Layers,
    },
  ];

  const aiItems: NavDropdownItem[] = [
    {
      name: "AI & Workflow Automation",
      href: "/ai-automation",
      desc: "Automated document pipelines, CRM synchronisation, and intelligent triage",
      tag: "Pipelines",
      icon: Bot,
    },
    {
      name: "Autonomous Voice Receptionist",
      href: "/ai-receptionist",
      desc: "24/7 conversational British voice AI for inbound call handling and qualification",
      tag: "Voice AI",
      icon: PhoneCall,
    },
    {
      name: "Custom LLM & RAG Systems",
      href: "/ai-automation",
      desc: "Private knowledge bases, vector search, and domain-specific AI agents",
      icon: Cpu,
    },
  ];

  const softwareItems: NavDropdownItem[] = [
    {
      name: "Custom Software & SaaS",
      href: "/software-development",
      desc: "Full-stack TypeScript, React, and PostgreSQL application engineering",
      tag: "Full-Stack",
      icon: Terminal,
    },
    {
      name: "Proprietary Products & Case Studies",
      href: "/our-products",
      desc: "Explore AuraPDF, MarkScheme, Rydigo, Skyview, and live production deployments",
      tag: "Live Proof",
      icon: Layers,
    },
    {
      name: "Engagement & Delivery Models",
      href: "/pricing",
      desc: "How we scope, structure, and deliver fixed-milestone software engagements",
      icon: Code2,
    },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-b border-slate-200/90 py-3 shadow-[0_1px_3px_rgba(15,23,42,0.03)]"
          : "bg-white/90 backdrop-blur-sm border-b border-slate-200/70 py-4"
      }`}
    >
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-6"
        ref={dropdownRef}
      >
        {/* Left: Architectural Brand Mark */}
        <Link
          href="/"
          className="flex items-center gap-3 group flex-shrink-0"
          aria-label="CortexHive Home"
        >
          <div className="w-9 h-9 rounded-lg bg-[#0F172A] flex items-center justify-center text-white border border-slate-800 group-hover:bg-blue-600 group-hover:border-blue-600 transition-colors">
            <svg className="w-4 h-4 fill-none stroke-current stroke-[2]" viewBox="0 0 24 24">
              <path d="M12 2L2 7v10l10 5 10-5V7L12 2z" />
              <circle cx="12" cy="12" r="2.5" fill="currentColor" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-base font-extrabold tracking-[-0.02em] text-[#0F172A] leading-none">
              CORTEX<span className="text-blue-600">HIVE</span>
            </span>
            <span className="text-[9px] font-mono uppercase tracking-[0.18em] text-slate-500 mt-1 leading-none">
              Software &amp; AI Studio
            </span>
          </div>
        </Link>

        {/* Center: Clean, Well-Spaced Navigation */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {/* Web Platforms Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown("websites")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button
              type="button"
              onClick={() => setActiveDropdown(activeDropdown === "websites" ? null : "websites")}
              className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-[13px] font-medium transition-colors ${
                pathname.includes("website")
                  ? "text-[#0F172A] bg-slate-100 font-semibold"
                  : "text-slate-600 hover:text-[#0F172A] hover:bg-slate-50"
              }`}
            >
              <span>Web Platforms</span>
              <ChevronDown
                className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${
                  activeDropdown === "websites" ? "rotate-180 text-[#0F172A]" : ""
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
                          <div className="w-8 h-8 rounded-md bg-slate-100 text-slate-700 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-[#0F172A] group-hover:text-white transition-colors">
                            <Icon className="w-4 h-4" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between gap-2">
                              <span className="text-xs font-semibold text-[#0F172A]">
                                {item.name}
                              </span>
                              {item.tag && (
                                <span className="text-[9px] font-mono uppercase tracking-wider px-1.5 py-0.5 rounded bg-slate-100 text-slate-600">
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
              className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-[13px] font-medium transition-colors ${
                pathname.includes("ai")
                  ? "text-[#0F172A] bg-slate-100 font-semibold"
                  : "text-slate-600 hover:text-[#0F172A] hover:bg-slate-50"
              }`}
            >
              <span>AI &amp; Automation</span>
              <ChevronDown
                className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${
                  activeDropdown === "ai" ? "rotate-180 text-[#0F172A]" : ""
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
                    {aiItems.map((item, idx) => {
                      const Icon = item.icon;
                      return (
                        <Link
                          key={idx}
                          href={item.href}
                          className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors group"
                        >
                          <div className="w-8 h-8 rounded-md bg-slate-100 text-slate-700 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-[#0F172A] group-hover:text-white transition-colors">
                            <Icon className="w-4 h-4" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between gap-2">
                              <span className="text-xs font-semibold text-[#0F172A]">
                                {item.name}
                              </span>
                              {item.tag && (
                                <span className="text-[9px] font-mono uppercase tracking-wider px-1.5 py-0.5 rounded bg-blue-50 text-blue-700">
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
              className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-[13px] font-medium transition-colors ${
                pathname.includes("software")
                  ? "text-[#0F172A] bg-slate-100 font-semibold"
                  : "text-slate-600 hover:text-[#0F172A] hover:bg-slate-50"
              }`}
            >
              <span>Software &amp; SaaS</span>
              <ChevronDown
                className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${
                  activeDropdown === "software" ? "rotate-180 text-[#0F172A]" : ""
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
                    {softwareItems.map((item, idx) => {
                      const Icon = item.icon;
                      return (
                        <Link
                          key={idx}
                          href={item.href}
                          className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors group"
                        >
                          <div className="w-8 h-8 rounded-md bg-slate-100 text-slate-700 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-[#0F172A] group-hover:text-white transition-colors">
                            <Icon className="w-4 h-4" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between gap-2">
                              <span className="text-xs font-semibold text-[#0F172A]">
                                {item.name}
                              </span>
                              {item.tag && (
                                <span className="text-[9px] font-mono uppercase tracking-wider px-1.5 py-0.5 rounded bg-slate-100 text-slate-700">
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
            className={`px-3.5 py-2 rounded-lg text-[13px] font-medium transition-colors ${
              pathname === "/our-products" || pathname === "/portfolio"
                ? "text-[#0F172A] bg-slate-100 font-semibold"
                : "text-slate-600 hover:text-[#0F172A] hover:bg-slate-50"
            }`}
          >
            Products &amp; Work
          </Link>

          <Link
            href="/about"
            className={`px-3.5 py-2 rounded-lg text-[13px] font-medium transition-colors ${
              pathname === "/about"
                ? "text-[#0F172A] bg-slate-100 font-semibold"
                : "text-slate-600 hover:text-[#0F172A] hover:bg-slate-50"
            }`}
          >
            Studio
          </Link>
        </nav>

        {/* Right: Executive Actions */}
        <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
          <Link
            href="/contact"
            className="text-[13px] font-medium text-slate-600 hover:text-[#0F172A] px-3 py-2 transition-colors"
          >
            Contact
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold bg-[#0F172A] hover:bg-blue-600 text-white transition-colors shadow-2xs"
          >
            <span>Start a Project</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 rounded-lg text-[#0F172A] hover:bg-slate-100 transition-colors"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b border-slate-200 overflow-hidden"
          >
            <div className="px-4 pt-3 pb-6 space-y-2 max-h-[82vh] overflow-y-auto">
              <Link
                href="/"
                className="block py-2.5 text-sm font-semibold text-[#0F172A] border-b border-slate-100"
              >
                Home
              </Link>

              {/* Mobile Web Platforms */}
              <div className="border-b border-slate-100 pb-2">
                <button
                  type="button"
                  onClick={() => setMobileExpanded(mobileExpanded === "websites" ? null : "websites")}
                  className="w-full flex items-center justify-between py-2 text-sm font-semibold text-[#0F172A]"
                >
                  <span>Web Platforms</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      mobileExpanded === "websites" ? "rotate-180 text-blue-600" : ""
                    }`}
                  />
                </button>
                {mobileExpanded === "websites" && (
                  <div className="pl-3 space-y-2 pt-1 pb-2">
                    {websiteItems.map((item, idx) => (
                      <Link
                        key={idx}
                        href={item.href}
                        className="block py-1.5 text-xs font-medium text-slate-600 hover:text-[#0F172A]"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile AI */}
              <div className="border-b border-slate-100 pb-2">
                <button
                  type="button"
                  onClick={() => setMobileExpanded(mobileExpanded === "ai" ? null : "ai")}
                  className="w-full flex items-center justify-between py-2 text-sm font-semibold text-[#0F172A]"
                >
                  <span>AI &amp; Automation</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      mobileExpanded === "ai" ? "rotate-180 text-blue-600" : ""
                    }`}
                  />
                </button>
                {mobileExpanded === "ai" && (
                  <div className="pl-3 space-y-2 pt-1 pb-2">
                    {aiItems.map((item, idx) => (
                      <Link
                        key={idx}
                        href={item.href}
                        className="block py-1.5 text-xs font-medium text-slate-600 hover:text-[#0F172A]"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Software */}
              <div className="border-b border-slate-100 pb-2">
                <button
                  type="button"
                  onClick={() => setMobileExpanded(mobileExpanded === "software" ? null : "software")}
                  className="w-full flex items-center justify-between py-2 text-sm font-semibold text-[#0F172A]"
                >
                  <span>Software &amp; SaaS</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      mobileExpanded === "software" ? "rotate-180 text-blue-600" : ""
                    }`}
                  />
                </button>
                {mobileExpanded === "software" && (
                  <div className="pl-3 space-y-2 pt-1 pb-2">
                    {softwareItems.map((item, idx) => (
                      <Link
                        key={idx}
                        href={item.href}
                        className="block py-1.5 text-xs font-medium text-slate-600 hover:text-[#0F172A]"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/our-products"
                className="block py-2.5 text-sm font-semibold text-[#0F172A] border-b border-slate-100"
              >
                Products &amp; Work
              </Link>

              <Link
                href="/about"
                className="block py-2.5 text-sm font-semibold text-[#0F172A] border-b border-slate-100"
              >
                Studio
              </Link>

              <Link
                href="/contact"
                className="block py-2.5 text-sm font-semibold text-[#0F172A] border-b border-slate-100"
              >
                Contact
              </Link>

              <div className="pt-3 flex flex-col gap-2.5">
                <Link
                  href="/contact"
                  className="w-full py-3 rounded-lg bg-[#0F172A] text-white text-center text-xs font-semibold"
                >
                  Start a Project
                </Link>
                <a
                  href={SITE_CONFIG.getWhatsAppLink("quote")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-lg border border-slate-200 text-[#0F172A] text-center text-xs font-semibold"
                >
                  Direct WhatsApp Inquiry
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
