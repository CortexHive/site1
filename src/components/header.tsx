"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight, ChevronDown, Sparkles, Bot, Layers, PhoneCall, Globe, Code2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { SITE_CONFIG } from "@/lib/config";

interface NavDropdownItem {
  name: string;
  href: string;
  desc: string;
  badge?: string;
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
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close mobile nav on route change
  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  const websiteItems: NavDropdownItem[] = [
    {
      name: "Website Packages & Pricing",
      href: "/pricing",
      desc: "Transparent £99, £349, and £699 business website packages",
      badge: "From £99",
      icon: Sparkles,
    },
    {
      name: "Bespoke Website Design",
      href: "/website-design",
      desc: "Conversion-first websites built for UK companies and brands",
      icon: Globe,
    },
    {
      name: "Launch Websites for Trades",
      href: "/small-business-websites",
      desc: "Fast, mobile-friendly websites for tradespeople and local services",
      badge: "£99",
      icon: Code2,
    },
    {
      name: "Industry Solutions",
      href: "/industries/tradespeople",
      desc: "Tailored digital solutions for trades, salons, restaurants & startups",
      icon: Sparkles,
    },
  ];

  const aiItems: NavDropdownItem[] = [
    {
      name: "AI & Workflow Automation",
      href: "/ai-automation",
      desc: "Intelligent enquiry triage, document extraction, and CRM sync",
      icon: Bot,
    },
    {
      name: "Custom AI Agents & RAG",
      href: "/ai-automation",
      desc: "Task-oriented knowledge and document intelligence agents for business",
      icon: Sparkles,
    },
    {
      name: "24/7 AI Voice Receptionist",
      href: "/ai-receptionist",
      desc: "Natural British voice call answering and instant lead logging",
      badge: "24/7 Voice",
      icon: PhoneCall,
    },
  ];

  const softwareItems: NavDropdownItem[] = [
    {
      name: "Software & SaaS Development",
      href: "/software-development",
      desc: "End-to-end digital product design, architecture, and engineering",
      icon: Layers,
    },
    {
      name: "SaaS Platforms & MVPs",
      href: "/software-development",
      desc: "Subscription platforms, membership systems, and client portals",
      icon: Code2,
    },
    {
      name: "Custom Business Applications",
      href: "/software-development",
      desc: "Internal dashboards, management tools, and database systems",
      icon: Globe,
    },
    {
      name: "Our Live Products & Case Studies",
      href: "/our-products",
      desc: "Explore AuraPDF, MarkScheme, Rydigo, and client systems",
      badge: "Verified",
      icon: Layers,
    },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-b border-[#E2E8F0] py-3 shadow-xs"
          : "bg-white/90 backdrop-blur-sm border-b border-[#E2E8F0]/60 py-4 sm:py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between" ref={dropdownRef}>
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2.5 group flex-shrink-0" aria-label="CortexHive Home">
          <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white shadow-xs group-hover:bg-blue-700 transition-colors">
            <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
              <path d="M12 2L2 7v10l10 5 10-5V7L12 2z" />
              <circle cx="12" cy="12" r="2.5" fill="currentColor" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-extrabold tracking-tight text-[#14243A] flex items-center">
              <span>CORTEX</span>
              <span className="text-blue-600 ml-0.5">HIVE</span>
            </span>
            <span className="text-[9px] uppercase tracking-[0.2em] text-[#64748B] font-bold -mt-1">
              Technology Studio
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-7">
          <Link
            href="/"
            className={`text-xs font-semibold uppercase tracking-wider transition-colors py-2 ${
              pathname === "/" ? "text-blue-600 font-bold" : "text-[#475569] hover:text-[#14243A]"
            }`}
          >
            Home
          </Link>

          {/* Websites Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown("websites")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button
              onClick={() => setActiveDropdown(activeDropdown === "websites" ? null : "websites")}
              className={`inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider transition-colors py-2 ${
                pathname.includes("website") || pathname === "/pricing"
                  ? "text-blue-600 font-bold"
                  : "text-[#475569] hover:text-[#14243A]"
              }`}
            >
              <span>Websites</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === "websites" ? "rotate-180" : ""}`} />
            </button>

            <AnimatePresence>
              {activeDropdown === "websites" && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.15 }}
                  className="absolute top-full left-0 w-80 bg-white rounded-2xl border border-[#E2E8F0] shadow-lg p-2.5 z-50"
                >
                  {websiteItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#F5F8FC] transition-colors group"
                      >
                        <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-bold text-[#14243A] group-hover:text-blue-600 transition-colors">
                              {item.name}
                            </span>
                            {item.badge && (
                              <span className="text-[9px] font-extrabold uppercase px-1.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                                {item.badge}
                              </span>
                            )}
                          </div>
                          <p className="text-[11px] text-[#64748B] leading-snug mt-0.5 line-clamp-2">
                            {item.desc}
                          </p>
                        </div>
                      </Link>
                    );
                  })}
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
              onClick={() => setActiveDropdown(activeDropdown === "ai" ? null : "ai")}
              className={`inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider transition-colors py-2 ${
                pathname.includes("ai")
                  ? "text-blue-600 font-bold"
                  : "text-[#475569] hover:text-[#14243A]"
              }`}
            >
              <span>AI &amp; Automation</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === "ai" ? "rotate-180" : ""}`} />
            </button>

            <AnimatePresence>
              {activeDropdown === "ai" && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.15 }}
                  className="absolute top-full left-0 w-80 bg-white rounded-2xl border border-[#E2E8F0] shadow-lg p-2.5 z-50"
                >
                  {aiItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#F5F8FC] transition-colors group"
                      >
                        <div className="w-8 h-8 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="text-xs font-bold text-[#14243A] group-hover:text-blue-600 transition-colors block">
                            {item.name}
                          </span>
                          <p className="text-[11px] text-[#64748B] leading-snug mt-0.5 line-clamp-2">
                            {item.desc}
                          </p>
                        </div>
                      </Link>
                    );
                  })}
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
              onClick={() => setActiveDropdown(activeDropdown === "software" ? null : "software")}
              className={`inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider transition-colors py-2 ${
                pathname.includes("software") || pathname.includes("saas") || pathname.includes("application")
                  ? "text-blue-600 font-bold"
                  : "text-[#475569] hover:text-[#14243A]"
              }`}
            >
              <span>Software &amp; SaaS</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === "software" ? "rotate-180" : ""}`} />
            </button>

            <AnimatePresence>
              {activeDropdown === "software" && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.15 }}
                  className="absolute top-full left-0 w-84 bg-white rounded-2xl border border-[#E2E8F0] shadow-lg p-2.5 z-50"
                >
                  {softwareItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#F5F8FC] transition-colors group"
                      >
                        <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="text-xs font-bold text-[#14243A] group-hover:text-blue-600 transition-colors block">
                            {item.name}
                          </span>
                          <p className="text-[11px] text-[#64748B] leading-snug mt-0.5 line-clamp-2">
                            {item.desc}
                          </p>
                        </div>
                      </Link>
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link
            href="/our-products"
            className={`text-xs font-semibold uppercase tracking-wider transition-colors py-2 ${
              pathname === "/our-products" || pathname === "/portfolio" ? "text-blue-600 font-bold" : "text-[#475569] hover:text-[#14243A]"
            }`}
          >
            Our Products
          </Link>

          <Link
            href="/about"
            className={`text-xs font-semibold uppercase tracking-wider transition-colors py-2 ${
              pathname === "/about" ? "text-blue-600 font-bold" : "text-[#475569] hover:text-[#14243A]"
            }`}
          >
            About
          </Link>

          <Link
            href="/contact"
            className={`text-xs font-semibold uppercase tracking-wider transition-colors py-2 ${
              pathname === "/contact" ? "text-blue-600 font-bold" : "text-[#475569] hover:text-[#14243A]"
            }`}
          >
            Contact
          </Link>
        </nav>

        {/* Desktop Action Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/pricing"
            className="text-xs font-bold text-[#14243A] hover:text-blue-600 px-3 py-2 transition-colors"
          >
            Pricing
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-600 hover:bg-blue-700 text-white shadow-xs hover:shadow-md transition-all active:scale-98"
          >
            <span>Start a Project</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2.5 rounded-xl text-[#14243A] hover:bg-[#F5F8FC] transition-colors"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="lg:hidden bg-white border-b border-[#E2E8F0] overflow-hidden shadow-xl"
          >
            <div className="px-5 py-6 space-y-3 max-h-[85vh] overflow-y-auto">
              <Link
                href="/"
                className="block py-2 text-sm font-bold text-[#14243A] hover:text-blue-600 border-b border-slate-100"
              >
                Home
              </Link>

              {/* Mobile Websites Accordion */}
              <div className="border-b border-slate-100 pb-2">
                <button
                  type="button"
                  onClick={() => setMobileExpanded(mobileExpanded === "websites" ? null : "websites")}
                  className="w-full flex items-center justify-between py-2 text-sm font-bold text-[#14243A]"
                >
                  <span>Websites &amp; Digital Presence</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileExpanded === "websites" ? "rotate-180 text-blue-600" : ""}`} />
                </button>
                {mobileExpanded === "websites" && (
                  <div className="pl-3 space-y-2 pt-1 pb-2">
                    {websiteItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block py-1.5 text-xs font-semibold text-[#475569] hover:text-blue-600"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile AI Accordion */}
              <div className="border-b border-slate-100 pb-2">
                <button
                  type="button"
                  onClick={() => setMobileExpanded(mobileExpanded === "ai" ? null : "ai")}
                  className="w-full flex items-center justify-between py-2 text-sm font-bold text-[#14243A]"
                >
                  <span>AI, Automation &amp; Agents</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileExpanded === "ai" ? "rotate-180 text-blue-600" : ""}`} />
                </button>
                {mobileExpanded === "ai" && (
                  <div className="pl-3 space-y-2 pt-1 pb-2">
                    {aiItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block py-1.5 text-xs font-semibold text-[#475569] hover:text-blue-600"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Software Accordion */}
              <div className="border-b border-slate-100 pb-2">
                <button
                  type="button"
                  onClick={() => setMobileExpanded(mobileExpanded === "software" ? null : "software")}
                  className="w-full flex items-center justify-between py-2 text-sm font-bold text-[#14243A]"
                >
                  <span>Software, SaaS &amp; Products</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileExpanded === "software" ? "rotate-180 text-blue-600" : ""}`} />
                </button>
                {mobileExpanded === "software" && (
                  <div className="pl-3 space-y-2 pt-1 pb-2">
                    {softwareItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block py-1.5 text-xs font-semibold text-[#475569] hover:text-blue-600"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/pricing"
                className="block py-2 text-sm font-bold text-[#14243A] hover:text-blue-600 border-b border-slate-100"
              >
                Website Pricing (From £99)
              </Link>

              <Link
                href="/our-products"
                className="block py-2 text-sm font-bold text-[#14243A] hover:text-blue-600 border-b border-slate-100"
              >
                Our Products
              </Link>

              <Link
                href="/about"
                className="block py-2 text-sm font-bold text-[#14243A] hover:text-blue-600 border-b border-slate-100"
              >
                About Us
              </Link>

              <Link
                href="/contact"
                className="block py-2 text-sm font-bold text-[#14243A] hover:text-blue-600 border-b border-slate-100"
              >
                Contact
              </Link>

              {/* Action CTAs in Mobile Drawer */}
              <div className="pt-4 space-y-2.5">
                <Link
                  href="/contact"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider shadow-sm transition-all"
                >
                  <span>Start a Project</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <a
                  href={SITE_CONFIG.getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-full bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-emerald-800 font-bold text-xs transition-all"
                >
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
