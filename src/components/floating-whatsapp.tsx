"use client";

import { SITE_CONFIG } from "@/lib/config";

export default function FloatingWhatsApp() {
  return (
    <aside aria-label="WhatsApp quick contact" className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-50 group">
      <a
        href={SITE_CONFIG.getWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with CortexHive on WhatsApp"
        className="flex items-center gap-2 sm:gap-2.5 bg-[#25D366] hover:bg-[#20ba5a] text-white px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-full shadow-lg hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 font-medium text-xs sm:text-sm border border-white/20"
      >
        <svg className="w-4 h-4 sm:w-5 sm:h-5 fill-current" viewBox="0 0 24 24">
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.669-.699c.969.531 1.93.814 2.79.815 3.183 0 5.77-2.586 5.77-5.766.002-3.181-2.583-5.766-5.769-5.766zm3.385 8.163c-.144.407-.837.774-1.171.823-.335.05-.776.082-2.222-.516-1.745-.722-2.871-2.493-2.958-2.609-.087-.116-.708-.941-.708-1.793 0-.852.449-1.272.608-1.446.16-.175.348-.218.464-.218.116 0 .232.001.333.006.106.005.249-.04.39.299.144.348.492 1.201.536 1.289.043.087.072.19.014.305-.058.116-.087.189-.174.29-.087.102-.183.228-.261.306-.088.087-.179.182-.077.357.101.174.45 1.743 1.968 2.392.203.087.324.076.445-.062.12-.138.514-.6.652-.804.137-.204.275-.171.464-.101.189.07 1.201.566 1.408.669.207.102.345.153.395.239.05.087.05.503-.094.91zM12 2C6.477 2 2 6.477 2 12c0 1.891.524 3.66 1.434 5.176L2 22l4.981-1.396A9.957 9.957 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.2c-1.638 0-3.167-.487-4.448-1.326l-.319-.21-2.955.775.789-2.883-.231-.367C3.937 14.887 3.4 13.487 3.4 12c0-4.742 3.858-8.6 8.6-8.6s8.6 3.858 8.6 8.6-3.858 8.6-8.6 8.6z"/>
        </svg>
        <span className="font-bold tracking-tight hidden sm:inline">Chat on WhatsApp</span>
        <span className="font-bold tracking-tight sm:hidden">WhatsApp</span>
        <span className="inline-block w-2 h-2 rounded-full bg-white animate-pulse" />
      </a>
    </aside>
  );
}
