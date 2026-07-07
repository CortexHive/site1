"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { ArrowRight, Loader2, Sparkles } from "lucide-react";

const TwitterIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const GithubIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const pathname = usePathname();
  const router = useRouter();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (pathname === "/") {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      router.push("/" + href);
    }
  };

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Subscription failed.");
      }

      setStatus("success");
      setMessage(data.message || "Thank you for subscribing!");
      setEmail("");
    } catch (err) {
      setStatus("error");
      const errMsg = err instanceof Error ? err.message : "Something went wrong. Please try again.";
      setMessage(errMsg);
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-55 bg-slate-50 border-t border-slate-200 pt-20 pb-8 relative overflow-hidden">
      {/* Decorative gradient glowing backdrop */}
      <div className="absolute bottom-0 left-10 w-[300px] h-[300px] bg-hive-purple/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="space-y-6">
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
            <p className="text-slate-655 text-slate-600 text-xs sm:text-sm leading-relaxed font-medium">
              We engineer scalable SaaS platforms, custom AI tools, and immersive digital platforms at the speed of intelligence.
            </p>
            <div className="flex items-center gap-4 text-slate-505 text-slate-500">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-hive-cyan transition-colors" aria-label="Twitter">
                <TwitterIcon />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-hive-cyan transition-colors" aria-label="GitHub">
                <GithubIcon />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-hive-cyan transition-colors" aria-label="LinkedIn">
                <LinkedinIcon />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Agency Links</h4>
            <ul className="space-y-2.5 text-sm text-slate-600 font-semibold">
              <li>
                <a href="#services" onClick={(e) => handleNavClick(e, "#services")} className="hover:text-hive-cyan transition-colors">Services</a>
              </li>
              <li>
                <a href="#portfolio" onClick={(e) => handleNavClick(e, "#portfolio")} className="hover:text-white transition-colors hover:text-hive-cyan">Case Studies</a>
              </li>
              <li>
                <a href="#process" onClick={(e) => handleNavClick(e, "#process")} className="hover:text-white transition-colors hover:text-hive-cyan">Our Process</a>
              </li>
              <li>
                <a href="#about" onClick={(e) => handleNavClick(e, "#about")} className="hover:text-white transition-colors hover:text-hive-cyan">About Team</a>
              </li>
              <li>
                <Link href="/creative-studio" className="hover:text-hive-cyan transition-colors">Creative Studio</Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">HQ Scopes</h4>
            <ul className="space-y-2.5 text-sm text-slate-600 font-semibold">
              <li>
                <span className="block text-xs text-slate-455 text-slate-400 font-bold uppercase">Inquiries</span>
                <a href="mailto:info@cortexhive.co.uk" className="hover:text-slate-900 transition-colors">info@cortexhive.co.uk</a>
              </li>
              <li>
                <span className="block text-xs text-slate-455 text-slate-400 font-bold uppercase">Scoping Hotlines</span>
                <a href="tel:+447950501323" className="block text-slate-700 font-bold hover:text-hive-cyan transition-colors">+44 7950 501323</a>
              </li>
              <li>
                <span className="block text-xs text-slate-455 text-slate-400 font-bold uppercase">Innovation Node</span>
                <span className="block">London, United Kingdom</span>
              </li>
            </ul>
          </div>

          {/* Newsletter Form */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
              <span>Hive Intel</span> <Sparkles className="w-4 h-4 text-hive-cyan fill-hive-cyan animate-pulse" />
            </h4>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium">
              Subscribe to get brief product blueprints, custom AI use cases, and speed-engineering frameworks.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-2.5">
              <div className="relative flex items-center">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@company.com"
                  className="w-full bg-white border border-slate-250 focus:border-hive-cyan/50 focus:ring-1 focus:ring-hive-cyan/50 rounded-xl pl-4 pr-12 py-3 text-xs text-slate-800 focus:outline-none transition-all placeholder-slate-400"
                />
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="absolute right-1.5 top-1.5 p-1.5 rounded-lg bg-slate-50 border border-slate-200 hover:border-hive-cyan/30 text-slate-700 flex items-center justify-center transition-all disabled:opacity-50"
                  aria-label="Subscribe"
                >
                  {status === "loading" ? (
                    <Loader2 className="w-4 h-4 animate-spin text-hive-cyan" />
                  ) : (
                    <ArrowRight className="w-4 h-4" />
                  )}
                </button>
              </div>

              {message && (
                <div
                  className={`text-[11px] p-2.5 rounded-lg font-medium ${
                    status === "success"
                      ? "bg-green-500/10 border border-green-500/20 text-green-600"
                      : "bg-red-500/10 border border-red-500/20 text-red-650 text-red-600"
                  }`}
                >
                  {message}
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Footer Base */}
        <div className="border-t border-slate-200 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-400 font-bold">
          <p>© {currentYear} Cortex Hive — Digital Innovation Partners. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-slate-900 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-slate-900 transition-colors">Terms of Service</Link>
            <Link href="/accessibility" className="hover:text-slate-900 transition-colors">Accessibility Node</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
