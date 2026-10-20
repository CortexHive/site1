"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Services", href: "#services" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Process", href: "#process" },
  { name: "About", href: "/about" },
  { name: "Creative Studio", href: "/creative-studio" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setIsOpen(false);
    if (href.startsWith("#")) {
      e.preventDefault();
      if (pathname === "/") {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        router.push("/" + href);
      }
    } else {
      e.preventDefault();
      router.push(href);
    }
  };

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsOpen(false);
    if (pathname === "/") {
      const element = document.querySelector("#contact");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      router.push("/#contact");
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/85 backdrop-blur-md border-b border-slate-200 py-3.5 shadow-xs"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group font-outfit">
          <svg className="w-5 h-5 text-hive-cyan transition-transform duration-300 group-hover:rotate-30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 2L2 7v10l10 5 10-5V7L12 2z" />
            <circle cx="12" cy="12" r="3" fill="currentColor" className="text-hive-purple" />
          </svg>
          <div className="flex flex-col">
            <span className="text-lg tracking-[0.12em] uppercase text-slate-950 transition-colors flex items-center font-medium">
              <span className="font-light text-slate-500">CORTEX</span>
              <span className="font-black text-gradient ml-1">HIVE</span>
            </span>
            <span className="text-[7.5px] uppercase tracking-[0.28em] text-slate-400 font-bold -mt-1 font-spaceGrotesk">
              AI &amp; Software Studio
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-9">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-xs uppercase tracking-[0.18em] font-bold text-slate-600 hover:text-slate-950 transition-all duration-300 relative group py-2"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-hive-cyan to-hive-purple transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Actions: WhatsApp + CTA Button */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://wa.me/447950501323?text=Hi%20CortexHive%2C%20I%20would%20like%20to%20discuss%20a%20project."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-all duration-300"
            title="Chat on WhatsApp"
          >
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.669-.699c.969.531 1.93.814 2.79.815 3.183 0 5.77-2.586 5.77-5.766.002-3.181-2.583-5.766-5.769-5.766zm3.385 8.163c-.144.407-.837.774-1.171.823-.335.05-.776.082-2.222-.516-1.745-.722-2.871-2.493-2.958-2.609-.087-.116-.708-.941-.708-1.793 0-.852.449-1.272.608-1.446.16-.175.348-.218.464-.218.116 0 .232.001.333.006.106.005.249-.04.39.299.144.348.492 1.201.536 1.289.043.087.072.19.014.305-.058.116-.087.189-.174.29-.087.102-.183.228-.261.306-.088.087-.179.182-.077.357.101.174.45 1.743 1.968 2.392.203.087.324.076.445-.062.12-.138.514-.6.652-.804.137-.204.275-.171.464-.101.189.07 1.201.566 1.408.669.207.102.345.153.395.239.05.087.05.503-.094.91zM12 2C6.477 2 2 6.477 2 12c0 1.891.524 3.66 1.434 5.176L2 22l4.981-1.396A9.957 9.957 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.2c-1.638 0-3.167-.487-4.448-1.326l-.319-.21-2.955.775.789-2.883-.231-.367C3.937 14.887 3.4 13.487 3.4 12c0-4.742 3.858-8.6 8.6-8.6s8.6 3.858 8.6 8.6-3.858 8.6-8.6 8.6z"/>
            </svg>
            <span>WhatsApp</span>
          </a>

          <Link
            href="#contact"
            onClick={handleContactClick}
            className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs uppercase tracking-[0.15em] font-bold text-slate-800 bg-slate-900 text-white hover:bg-slate-800 shadow-sm transition-all duration-300"
          >
            <span>Start a Project</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-slate-600 hover:text-slate-900 p-2"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-white/95 border-b border-slate-200 backdrop-blur-lg overflow-hidden"
          >
            <div className="flex flex-col px-6 py-6 gap-5">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="block w-full text-left text-base font-semibold text-slate-700 hover:text-slate-900 transition-colors py-2 px-2 active:bg-slate-50 rounded-lg"
                >
                  {link.name}
                </a>
              ))}
              <hr className="border-slate-200 my-1" />
              <a
                href="https://wa.me/447950501323?text=Hi%20CortexHive%2C%20I%20would%20like%20to%20discuss%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-sm shadow-sm transition-all"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.669-.699c.969.531 1.93.814 2.79.815 3.183 0 5.77-2.586 5.77-5.766.002-3.181-2.583-5.766-5.769-5.766zm3.385 8.163c-.144.407-.837.774-1.171.823-.335.05-.776.082-2.222-.516-1.745-.722-2.871-2.493-2.958-2.609-.087-.116-.708-.941-.708-1.793 0-.852.449-1.272.608-1.446.16-.175.348-.218.464-.218.116 0 .232.001.333.006.106.005.249-.04.39.299.144.348.492 1.201.536 1.289.043.087.072.19.014.305-.058.116-.087.189-.174.29-.087.102-.183.228-.261.306-.088.087-.179.182-.077.357.101.174.45 1.743 1.968 2.392.203.087.324.076.445-.062.12-.138.514-.6.652-.804.137-.204.275-.171.464-.101.189.07 1.201.566 1.408.669.207.102.345.153.395.239.05.087.05.503-.094.91zM12 2C6.477 2 2 6.477 2 12c0 1.891.524 3.66 1.434 5.176L2 22l4.981-1.396A9.957 9.957 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.2c-1.638 0-3.167-.487-4.448-1.326l-.319-.21-2.955.775.789-2.883-.231-.367C3.937 14.887 3.4 13.487 3.4 12c0-4.742 3.858-8.6 8.6-8.6s8.6 3.858 8.6 8.6-3.858 8.6-8.6 8.6z"/>
                </svg>
                <span>Chat on WhatsApp</span>
              </a>
              <Link
                href="#contact"
                onClick={handleContactClick}
                className="w-full text-center px-6 py-3 rounded-full bg-slate-900 text-white font-semibold text-sm shadow-sm hover:bg-slate-800 transition-all"
              >
                Start a Project
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
