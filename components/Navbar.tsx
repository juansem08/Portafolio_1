"use client";

import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import PixelAvatar from "./arcade/PixelAvatar";
import { useApp } from "@/context/AppContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { lang, toggleLang, theme, toggleTheme, t } = useApp();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: t("nav.about"), href: "#about" },
    { label: t("nav.projects"), href: "#projects" },
    { label: t("nav.experience"), href: "#experience" },
    { label: t("nav.testimonials"), href: "#testimonials" },
    { label: t("nav.workspace"), href: "#workspace" },
    { label: t("nav.contact"), href: "#contact" },
    { label: t("nav.visits"), href: "#visits" },
  ];

  const toggleBtn =
    "pixel-btn inline-flex items-center gap-1.5 px-2.5 py-2 text-[9px] bg-panel text-ink";

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-colors ${
        isScrolled ? "bg-bg border-b-4 border-edge" : "bg-transparent border-b-4 border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px] gap-3">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-2 shrink-0" aria-label={t("nav.home")}>
            <span className="flex items-end justify-center w-10 h-10 bg-yellow border-4 border-edge">
              <PixelAvatar className="w-6 h-7" />
            </span>
            <span className="font-pixel text-[10px] sm:text-xs text-ink">
              SEBAS<span className="text-pink">.EXE</span>
            </span>
          </a>

          {/* Enlaces escritorio */}
          <nav className="hidden xl:flex items-center gap-1" aria-label="Principal">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="whitespace-nowrap font-pixel text-[9px] px-2 py-2 text-ink border-2 border-transparent hover:border-edge hover:bg-yellow hover:text-[#241b4b]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Controles */}
          <div className="flex items-center gap-2">
            <button type="button" onClick={toggleLang} className={toggleBtn} title={t("nav.toLang")} aria-label={t("nav.toLang")}>
              {lang === "es" ? "ES" : "EN"}
            </button>
            <button
              type="button"
              onClick={toggleTheme}
              className={toggleBtn}
              title={theme === "light" ? t("nav.toNight") : t("nav.toDay")}
              aria-label={theme === "light" ? t("nav.toNight") : t("nav.toDay")}
            >
              {theme === "light" ? <Moon className="w-3.5 h-3.5" /> : <Sun className="w-3.5 h-3.5 text-yellow" />}
              <span className="hidden md:inline">{theme === "light" ? t("nav.night") : t("nav.day")}</span>
            </button>
            <a href="#contact" className="hidden sm:inline-flex pixel-btn px-3 py-2 text-[9px] bg-pink text-white">
              {t("nav.cta")}
            </a>
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="xl:hidden pixel-btn p-2 bg-violet text-white"
              aria-label={t("nav.menu")}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* Menú móvil */}
      {isOpen && (
        <nav id="mobile-menu" className="xl:hidden border-t-4 border-edge bg-panel px-4 py-4" aria-label="Móvil">
          <ul className="grid grid-cols-2 gap-2">
            {navLinks.map((link, i) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-2 px-3 py-3 border-4 border-edge bg-panel2 font-pixel text-[9px] text-ink hover:bg-yellow hover:text-[#241b4b]"
                >
                  <span className="text-pink">{String(i + 1).padStart(2, "0")}</span>
                  {link.label}
                </a>
              </li>
            ))}
            <li className="col-span-2">
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="pixel-btn flex justify-center px-3 py-3 text-[10px] bg-pink text-white"
              >
                {t("nav.cta")}
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
