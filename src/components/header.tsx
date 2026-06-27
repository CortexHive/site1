"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Services", href: "#services" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Process", href: "#process" },
  { name: "About", href: "#about" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md border-b border-slate-200 py-4 shadow-sm"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="#" className="flex items-center gap-2.5 group font-outfit">
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
              Digital Innovation Partners
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

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="relative inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs uppercase tracking-[0.15em] font-bold text-slate-700 overflow-hidden group border border-slate-300 hover:border-slate-800 hover:text-slate-900 transition-all duration-300"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-hive-cyan/5 via-hive-blue/5 to-hive-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span>Get Started</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
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
                  className="text-lg font-semibold text-slate-700 hover:text-slate-900 transition-colors py-1"
                >
                  {link.name}
                </a>
              ))}
              <hr className="border-slate-200 my-2" />
              <Link
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  setIsOpen(false);
                  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="w-full text-center px-6 py-3 rounded-full bg-gradient-hive-solid text-white font-semibold text-sm shadow-md hover:shadow-hive-blue/25 transition-all"
              >
                Book a Strategy Call
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
