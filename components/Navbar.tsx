"use client";

import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { RecDot } from "./night/ui";
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
    { cam: "01", label: t("nav.about"), href: "#about" },
    { cam: "02", label: t("nav.projects"), href: "#projects" },
    { cam: "03", label: t("nav.experience"), href: "#experience" },
    { cam: "04", label: t("nav.testimonials"), href: "#testimonials" },
    { cam: "05", label: t("nav.workspace"), href: "#workspace" },
    { cam: "06", label: t("nav.contact"), href: "#contact" },
    { cam: "07", label: t("nav.visits"), href: "#visits" },
  ];

  const ctrl = "cam-btn inline-flex items-center gap-1.5 px-2.5 py-1 text-lg text-ink hover:bg-panel2 hover:border-ink";

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-colors ${
        isScrolled ? "bg-bg border-edge" : "bg-transparent border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-3">
          <a href="#inicio" className="flex items-center gap-2 shrink-0 font-retro text-xl uppercase tracking-wider" aria-label={t("nav.home")}>
            <RecDot />
            <span className="text-rec">REC</span>
            <span className="text-ink">SEBASTIÁN</span>
            <span className="hidden sm:inline xl:hidden 2xl:inline text-muted">{`// ${t("nav.shift")}`}</span>
          </a>

          <nav className="hidden xl:flex items-center" aria-label="Principal">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="whitespace-nowrap font-retro text-lg uppercase px-2.5 py-1 text-muted hover:text-ink hover:bg-panel2"
              >
                <span className="text-rec/80 mr-1">{link.cam}</span>
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button type="button" onClick={toggleLang} className={ctrl} title={t("nav.toLang")} aria-label={t("nav.toLang")}>
              {lang === "es" ? "ES" : "EN"}
            </button>
            <button
              type="button"
              onClick={toggleTheme}
              className={ctrl}
              title={theme === "dark" ? t("nav.toDay") : t("nav.toNight")}
              aria-label={theme === "dark" ? t("nav.toDay") : t("nav.toNight")}
            >
              {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              <span className="hidden md:inline">{theme === "dark" ? t("nav.day") : t("nav.night")}</span>
            </button>
            <a href="#contact" className="hidden sm:inline-flex cam-btn px-3 py-1 text-lg bg-rec text-white border-rec hover:bg-[#d82828]">
              {t("nav.cta")}
            </a>
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="xl:hidden cam-btn p-1.5 text-ink hover:bg-panel2"
              aria-label={t("nav.menu")}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <nav id="mobile-menu" className="xl:hidden border-t border-edge bg-panel px-4 py-4" aria-label="Móvil">
          <ul className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 border border-edge bg-panel2 font-retro text-xl uppercase text-ink hover:border-ink"
                >
                  <span className="block text-base text-rec">CAM {link.cam}</span>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
