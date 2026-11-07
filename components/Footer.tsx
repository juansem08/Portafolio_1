"use client";

import { ArrowUp, Github, Mail, Terminal } from "lucide-react";
import { WhatsAppIcon } from "./ScrapbookAssets";
import { useApp } from "@/context/AppContext";

export default function Footer() {
  const { t } = useApp();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="w-full border-t-4 border-[#1B1717] dark:border-[#810100] bg-[#FAF9F5] dark:bg-[#121010] py-14 relative z-10 select-none">
      
      {/* Millimeter / Centimeter Cutting Mat Ruler Border */}
      <div className="absolute top-0 left-0 right-0 h-4 bg-[#EDEBDD] dark:bg-[#1B1717] border-b border-[#1B1717]/25 dark:border-[#810100]/40 flex justify-between items-end overflow-hidden px-2 opacity-75">
        {Array.from({ length: 48 }).map((_, i) => (
          <div key={i} className="flex flex-col items-center">
            <div
              className={`w-[1px] ${
                i % 5 === 0 ? "h-3 bg-[#810100]" : "h-1.5 bg-[#1B1717] dark:bg-[#EDEBDD]/40"
              }`}
            />
            {i % 5 === 0 && (
              <span className="text-[7px] font-mono text-[#810100] -mt-0.5 font-bold">
                {i * 2}
              </span>
            )}
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand & Stamped Copyright */}
          <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
            <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#1B1717] dark:text-[#EDEBDD] bg-[#EDEBDD] dark:bg-[#1E1B18] px-3 py-1.5 border-2 border-[#1B1717] dark:border-[#810100] shadow-[3px_3px_0px_#1B1717] dark:shadow-[3px_3px_0px_#810100]">
              <div className="w-4 h-4 bg-[#810100] text-[#EDEBDD] flex items-center justify-center font-mono">
                <Terminal className="w-3 h-3" />
              </div>
              <span className="font-marker text-sm lowercase text-[#810100] dark:text-[#E8927C]">sebastián</span>
              <span>.SYS // 2026</span>
            </div>

            <span className="hidden sm:inline-block text-neutral-400">•</span>

            <p className="text-xs font-mono text-neutral-700 dark:text-neutral-400 font-bold">
              {t("footer.copyright")}
            </p>
          </div>

          {/* Social Icons & Back to top button */}
          <div className="flex items-center gap-3">
            {/* GitHub */}
            <a
              href="https://github.com/juansem08"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub de Sebastián"
              className="w-10 h-10 bg-[#FFFFFF] dark:bg-[#1E1B18] border-2 border-[#1B1717] dark:border-[#810100] flex items-center justify-center text-[#1B1717] dark:text-[#EDEBDD] hover:text-[#810100] dark:hover:text-[#E8927C] hover:bg-[#EDEBDD] dark:hover:bg-[#252020] shadow-[3px_3px_0px_#1B1717] dark:shadow-[3px_3px_0px_#810100] transition-all hover:scale-105 active:scale-95"
            >
              <Github className="w-4 h-4" />
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/?text=Hola%20Sebasti%C3%A1n,%20vi%20tu%20portafolio"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp de Sebastián"
              className="w-10 h-10 bg-[#FFFFFF] dark:bg-[#1E1B18] border-2 border-[#1B1717] dark:border-[#810100] flex items-center justify-center text-[#1B1717] dark:text-[#EDEBDD] hover:text-[#25D366] hover:bg-[#EDEBDD] dark:hover:bg-[#252020] shadow-[3px_3px_0px_#1B1717] dark:shadow-[3px_3px_0px_#810100] transition-all hover:scale-105 active:scale-95"
            >
              <WhatsAppIcon className="w-4 h-4" />
            </a>

            {/* Email */}
            <a
              href="mailto:jsmayorgaj2008@gmail.com"
              aria-label="Correo de Sebastián"
              className="w-10 h-10 bg-[#FFFFFF] dark:bg-[#1E1B18] border-2 border-[#1B1717] dark:border-[#810100] flex items-center justify-center text-[#1B1717] dark:text-[#EDEBDD] hover:text-[#810100] dark:hover:text-[#E8927C] hover:bg-[#EDEBDD] dark:hover:bg-[#252020] shadow-[3px_3px_0px_#1B1717] dark:shadow-[3px_3px_0px_#810100] transition-all hover:scale-105 active:scale-95"
            >
              <Mail className="w-4 h-4" />
            </a>

            {/* Back to top */}
            <button
              onClick={scrollToTop}
              type="button"
              className="inline-flex items-center gap-2 ml-2 px-4 py-2 bg-[#810100] text-[#EDEBDD] border-2 border-[#1B1717] dark:border-[#EDEBDD]/30 text-xs font-mono font-black uppercase tracking-wider shadow-[4px_4px_0px_#1B1717] dark:shadow-[4px_4px_0px_#810100] hover:bg-[#9E0201] hover:scale-105 active:scale-95 transition-all"
              aria-label="Volver arriba"
            >
              <span>{t("footer.backToTop")}</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Technical Sub-line on bottom cardboard */}
        <div className="mt-8 pt-6 border-t border-[#1B1717]/20 dark:border-[#EDEBDD]/20 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-neutral-600 dark:text-neutral-400 gap-2 text-center sm:text-left font-bold">
          <span>
            {t("footer.techSubline")}
          </span>
          <span className="text-[#810100] dark:text-[#E8927C]">
            {t("footer.locationCleanArch")}
          </span>
        </div>
      </div>
    </footer>
  );
}
