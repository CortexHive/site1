"use client";

import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

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

const WhatsappIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.669-.699c.969.531 1.93.814 2.79.815 3.183 0 5.77-2.586 5.77-5.766.002-3.181-2.583-5.766-5.769-5.766zm3.385 8.163c-.144.407-.837.774-1.171.823-.335.05-.776.082-2.222-.516-1.745-.722-2.871-2.493-2.958-2.609-.087-.116-.708-.941-.708-1.793 0-.852.449-1.272.608-1.446.16-.175.348-.218.464-.218.116 0 .232.001.333.006.106.005.249-.04.39.299.144.348.492 1.201.536 1.289.043.087.072.19.014.305-.058.116-.087.189-.174.29-.087.102-.183.228-.261.306-.088.087-.179.182-.077.357.101.174.45 1.743 1.968 2.392.203.087.324.076.445-.062.12-.138.514-.6.652-.804.137-.204.275-.171.464-.101.189.07 1.201.566 1.408.669.207.102.345.153.395.239.05.087.05.503-.094.91zM12 2C6.477 2 2 6.477 2 12c0 1.891.524 3.66 1.434 5.176L2 22l4.981-1.396A9.957 9.957 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.2c-1.638 0-3.167-.487-4.448-1.326l-.319-.21-2.955.775.789-2.883-.231-.367C3.937 14.887 3.4 13.487 3.4 12c0-4.742 3.858-8.6 8.6-8.6s8.6 3.858 8.6 8.6-3.858 8.6-8.6 8.6z"/>
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-20 pb-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-5">
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
                  Digital Solutions Agency
                </span>
              </div>
            </Link>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal max-w-sm">
              Digital Solutions That Move Your Business Forward. We build professional websites, £50 starter sites for trades, 24/7 AI receptionists, and custom software systems.
            </p>
            <div className="flex items-center gap-4 text-slate-500 pt-1">
              <a href={SITE_CONFIG.getWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-500 transition-colors" aria-label="WhatsApp">
                <WhatsappIcon />
              </a>
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

          {/* Solutions & Services */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider font-spaceGrotesk">Solutions</h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-600 font-medium">
              <li>
                <Link href="/website-design" className="hover:text-slate-950 transition-colors">Website Design</Link>
              </li>
              <li>
                <Link href="/small-business-websites" className="hover:text-emerald-700 font-semibold text-emerald-600 transition-colors">£50 Trades Websites</Link>
              </li>
              <li>
                <Link href="/ai-receptionist" className="hover:text-slate-950 transition-colors">AI Receptionist</Link>
              </li>
              <li>
                <Link href="/ai-automation" className="hover:text-slate-950 transition-colors">AI &amp; Automation</Link>
              </li>
              <li>
                <Link href="/software-development" className="hover:text-slate-950 transition-colors">Software &amp; MVPs</Link>
              </li>
              <li>
                <Link href="/creative-studio" className="hover:text-slate-950 transition-colors">Creative Studio</Link>
              </li>
            </ul>
          </div>

          {/* Company & Proof */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider font-spaceGrotesk">Company</h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-600 font-medium">
              <li>
                <Link href="/about" className="hover:text-slate-950 transition-colors">About Agency</Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-slate-950 transition-colors">Portfolio &amp; Case Studies</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-slate-950 transition-colors">Services Directory</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-slate-950 transition-colors">Contact Us</Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-slate-950 transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-slate-950 transition-colors">Terms of Service</Link>
              </li>
            </ul>
          </div>

          {/* Contact & Studio Details */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider font-spaceGrotesk">Direct Contact</h4>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-600 font-medium">
              <li>
                <span className="block text-[10px] text-slate-400 font-bold uppercase tracking-wider">Telephone &amp; AI</span>
                <a href={`tel:${SITE_CONFIG.phone}`} className="block text-slate-800 font-semibold hover:text-cyan-600 transition-colors">
                  {SITE_CONFIG.phoneDisplay}
                </a>
              </li>
              <li>
                <span className="block text-[10px] text-slate-400 font-bold uppercase tracking-wider">WhatsApp</span>
                <a href={SITE_CONFIG.getWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="block text-emerald-600 font-semibold hover:text-emerald-700 transition-colors">
                  {SITE_CONFIG.phoneDisplay} (Chat Now)
                </a>
              </li>
              <li>
                <span className="block text-[10px] text-slate-400 font-bold uppercase tracking-wider">Email</span>
                <a href={`mailto:${SITE_CONFIG.email}`} className="hover:text-slate-900 font-semibold transition-colors">
                  {SITE_CONFIG.email}
                </a>
              </li>
              <li>
                <span className="block text-[10px] text-slate-400 font-bold uppercase tracking-wider">Location</span>
                <span className="block">{SITE_CONFIG.location}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <div>
            <p>© {currentYear} CortexHive. All rights reserved. Registered in England &amp; Wales.</p>
          </div>
          <div className="flex gap-6 font-semibold">
            <Link href="/privacy" className="hover:text-slate-900 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-slate-900 transition-colors">Terms of Service</Link>
            <Link href="/accessibility" className="hover:text-slate-900 transition-colors">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
