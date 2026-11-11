"use client";

import { ArrowUp, Github, Linkedin, Mail, Terminal } from "lucide-react";
import { WhatsAppIcon } from "./ScrapbookAssets";
import { useApp } from "@/context/AppContext";
import { contactInfo, whatsappUrl } from "@/data/contact";

const socialClass =
  "w-10 h-10 bg-[#FFFFFF] dark:bg-[#1E1B18] border-2 border-[#1B1717] dark:border-[#810100] flex items-center justify-center text-[#1B1717] dark:text-[#EDEBDD] hover:bg-[#EDEBDD] dark:hover:bg-[#252020] shadow-[3px_3px_0px_#1B1717] dark:shadow-[3px_3px_0px_#810100] transition-all hover:scale-105 active:scale-95";

export default function Footer() {
  const { t } = useApp();
  const year = new Date().getFullYear();

  const quickLinks = [
    { label: t("nav.home"), href: "#inicio" },
    { label: t("nav.about"), href: "#about" },
    { label: t("nav.projects"), href: "#projects" },
    { label: t("nav.testimonials"), href: "#testimonials" },
    { label: t("nav.experience"), href: "#experience" },
    { label: t("nav.contact"), href: "#contact" },
    { label: t("nav.extra"), href: "#adicional" },
  ];

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
              <span>.SYS // {year}</span>
            </div>

            <span className="hidden sm:inline-block text-neutral-400">•</span>

            <p className="text-xs font-mono text-neutral-700 dark:text-neutral-400 font-bold">
              © {year} {t("footer.copyright")}
            </p>
          </div>

          {/* Social Icons & Back to top button */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={contactInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub de Sebastián"
              className={`${socialClass} hover:text-[#810100] dark:hover:text-[#E8927C]`}
            >
              <Github className="w-4 h-4" />
            </a>

            {contactInfo.linkedin && (
              <a
                href={contactInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn de Sebastián"
                className={`${socialClass} hover:text-[#0A66C2]`}
              >
                <Linkedin className="w-4 h-4" />
              </a>
            )}

            {whatsappUrl && (
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp de Sebastián"
                className={`${socialClass} hover:text-[#25D366]`}
              >
                <WhatsAppIcon className="w-4 h-4" />
              </a>
            )}

            <a
              href={`mailto:${contactInfo.email}`}
              aria-label="Correo de Sebastián"
              className={`${socialClass} hover:text-[#810100] dark:hover:text-[#E8927C]`}
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

        {/* Quick links to every section */}
        <nav aria-label={t("footer.quickLinks")} className="mt-8 pt-6 border-t border-[#1B1717]/20 dark:border-[#EDEBDD]/20">
          <p className="text-[11px] font-mono font-black text-[#810100] dark:text-[#E8927C] uppercase tracking-widest mb-3 text-center md:text-left">
            {t("footer.quickLinks")}
          </p>
          <ul className="flex flex-wrap justify-center md:justify-start gap-2">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="inline-block px-2.5 py-1 text-[11px] font-mono font-bold text-[#1B1717] dark:text-[#EDEBDD] bg-[#EDEBDD] dark:bg-[#1E1B18] border border-[#1B1717] dark:border-[#810100] hover:bg-[#810100] hover:text-[#EDEBDD] transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Technical Sub-line on bottom cardboard */}
        <div className="mt-6 pt-6 border-t border-[#1B1717]/20 dark:border-[#EDEBDD]/20 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-neutral-600 dark:text-neutral-400 gap-2 text-center sm:text-left font-bold">
          <span>
            {t("footer.madeWith")} • {t("footer.techSubline")}
          </span>
          <span className="text-[#810100] dark:text-[#E8927C]">
            {t("footer.locationCleanArch")}
          </span>
        </div>
      </div>
    </footer>
  );
}
