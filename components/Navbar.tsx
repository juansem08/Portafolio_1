"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Terminal, Cpu, Sun, Moon, Languages } from "lucide-react";
import { Paperclip } from "./ScrapbookAssets";
import { useApp } from "@/context/AppContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { lang, toggleLang, theme, toggleTheme, t } = useApp();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: t("nav.about"), href: "#about", rot: "-rotate-1" },
    { label: t("nav.projects"), href: "#projects", rot: "rotate-1" },
    { label: t("nav.testimonials"), href: "#testimonials", rot: "rotate-2" },
    { label: t("nav.experience"), href: "#experience", rot: "-rotate-1" },
    { label: t("nav.contact"), href: "#contact", rot: "rotate-1" },
    { label: t("nav.extra"), href: "#adicional", rot: "-rotate-2" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-[#EDEBDD]/90 dark:bg-[#121010]/90 backdrop-blur-md border-b-2 border-dashed border-[#1B1717]/25 dark:border-[#EDEBDD]/25 shadow-[0_6px_20px_rgba(27,23,23,0.08)] dark:shadow-[0_6px_20px_rgba(0,0,0,0.5)]"
          : "bg-transparent border-b-2 border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo / Archive Tag with Metallic Paperclip */}
          <Link
            href="#inicio"
            className="group relative flex items-center gap-2 select-none -rotate-1 hover:rotate-0 transition-transform"
          >
            <div className="absolute -top-3 -left-2 z-20 pointer-events-none">
              <Paperclip className="w-4 h-9 -rotate-12" variant="cherry" />
            </div>

            <div className="flex items-center gap-2 px-3.5 py-1.5 bg-[#FAF9F5] dark:bg-[#1B1717] border-2 border-[#1B1717] dark:border-[#810100] shadow-[4px_4px_0px_#1B1717] dark:shadow-[4px_4px_0px_#810100] text-[#1B1717] dark:text-[#EDEBDD] font-mono text-xs">
              <div className="w-5 h-5 bg-[#810100] text-[#EDEBDD] flex items-center justify-center font-bold font-mono">
                <Terminal className="w-3.5 h-3.5" />
              </div>
              <span className="font-bold tracking-wider uppercase">
                Sebastián<span className="text-[#810100]">.sys</span>
              </span>
              <span className="px-1.5 py-0.2 bg-[#1B1717] dark:bg-[#630000] text-[#EDEBDD] text-[10px] font-mono font-bold tracking-widest">
                v2.6
              </span>
            </div>
          </Link>

          {/* Desktop Navigation: Embossed Dymo Tape Strips */}
          <nav className="hidden xl:flex items-center gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`dymo-tape text-[11px] font-mono font-bold px-2.5 py-1.5 rounded-[2px] transition-all duration-200 hover:scale-105 hover:-translate-y-0.5 hover:bg-[#810100] hover:text-[#EDEBDD] hover:border-[#630000] ${link.rot}`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons: Theme Toggle + Language Switcher + CTA */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* Language Switcher Badge Button */}
            <button
              onClick={toggleLang}
              type="button"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#FAF9F5] dark:bg-[#1B1717] text-[#1B1717] dark:text-[#EDEBDD] border-2 border-[#1B1717] dark:border-[#EDEBDD]/40 font-mono text-xs font-black shadow-[3px_3px_0px_#1B1717] dark:shadow-[3px_3px_0px_#810100] -rotate-1 hover:rotate-0 hover:scale-105 transition-all"
              title={lang === "es" ? "Switch to English" : "Cambiar a Español"}
            >
              <Languages className="w-3.5 h-3.5 text-[#810100]" />
              <span className="uppercase">{lang === "es" ? "ES" : "EN"}</span>
              <span className="text-[9px] px-1 py-0.2 bg-[#810100] text-[#EDEBDD] font-bold">
                {lang === "es" ? "EN" : "ES"}
              </span>
            </button>

            {/* Dark Mode Toggle Badge Button */}
            <button
              onClick={toggleTheme}
              type="button"
              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 bg-[#FAF9F5] dark:bg-[#1B1717] text-[#1B1717] dark:text-[#EDEBDD] border-2 border-[#1B1717] dark:border-[#EDEBDD]/40 font-mono text-xs font-black shadow-[3px_3px_0px_#1B1717] dark:shadow-[3px_3px_0px_#810100] rotate-1 hover:rotate-0 hover:scale-105 transition-all"
              title={theme === "light" ? "Activar Modo Oscuro" : "Activar Modo Claro"}
            >
              {theme === "light" ? (
                <>
                  <Moon className="w-3.5 h-3.5 text-[#810100]" />
                  <span className="text-[10px] hidden md:inline">DARK</span>
                </>
              ) : (
                <>
                  <Sun className="w-3.5 h-3.5 text-amber-400" />
                  <span className="text-[10px] hidden md:inline">LIGHT</span>
                </>
              )}
            </button>

            {/* CTA Button */}
            <a
              href="#contact"
              className="group relative inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#810100] text-[#EDEBDD] font-mono font-black text-xs uppercase tracking-wider border-2 border-[#1B1717] dark:border-[#EDEBDD]/40 shadow-[4px_4px_0px_#1B1717] dark:shadow-[4px_4px_0px_#630000] rotate-1 hover:rotate-0 hover:bg-[#9E0201] hover:scale-105 active:scale-95 transition-all"
            >
              <span className="w-2 h-2 rounded-full bg-[#EDEBDD] animate-ping" />
              <span>{t("nav.letsTalk")}</span>
            </a>
          </div>

          {/* Mobile menu and controls */}
          <div className="flex items-center gap-2 xl:hidden">
            <button
              onClick={toggleLang}
              type="button"
              className="px-2 py-1 bg-[#FAF9F5] dark:bg-[#1B1717] border-2 border-[#1B1717] dark:border-[#EDEBDD]/40 font-mono text-xs font-bold"
            >
              {lang.toUpperCase()}
            </button>
            <button
              onClick={toggleTheme}
              type="button"
              className="p-1.5 bg-[#FAF9F5] dark:bg-[#1B1717] border-2 border-[#1B1717] dark:border-[#EDEBDD]/40 text-[#810100]"
            >
              {theme === "light" ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4 text-amber-400" />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="p-2 bg-[#FAF9F5] dark:bg-[#1B1717] border-2 border-[#1B1717] dark:border-[#EDEBDD]/40 shadow-[3px_3px_0px_#1B1717] text-[#1B1717] dark:text-[#EDEBDD] hover:text-[#810100] transition-colors"
              aria-label="Menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {isOpen && (
        <div className="xl:hidden border-b-2 border-dashed border-[#1B1717]/40 dark:border-[#EDEBDD]/40 bg-[#FAF9F5] dark:bg-[#1B1717] px-5 pt-4 pb-6 space-y-3 shadow-xl animate-in fade-in duration-200">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="dymo-tape block text-center text-xs font-mono font-bold py-2 hover:bg-[#810100] hover:text-[#EDEBDD]"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2">
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-3 bg-[#810100] text-[#EDEBDD] border-2 border-[#1B1717] font-mono font-black text-xs uppercase tracking-wider shadow-[4px_4px_0px_#1B1717]"
              >
                <Cpu className="w-4 h-4" />
                {t("nav.startProject")}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
