"use client";

import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { CamButton, WhatsAppIcon } from "./night/ui";
import { useApp } from "@/context/AppContext";
import { contactInfo, whatsappUrl } from "@/data/contact";

const socialClass = "cam-btn w-11 h-11 flex items-center justify-center text-ink hover:bg-panel2 hover:border-ink";

export default function Footer() {
  const { t } = useApp();
  const year = new Date().getFullYear();

  const quickLinks = [
    { label: t("nav.home"), href: "#inicio" },
    { label: t("nav.about"), href: "#about" },
    { label: t("nav.projects"), href: "#projects" },
    { label: t("nav.experience"), href: "#experience" },
    { label: t("nav.testimonials"), href: "#testimonials" },
    { label: t("nav.workspace"), href: "#workspace" },
    { label: t("nav.contact"), href: "#contact" },
    { label: t("nav.visits"), href: "#visits" },
  ];

  return (
    <footer className="mt-8 border-t border-edge bg-panel">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <p className="font-retro text-4xl sm:text-5xl uppercase leading-none text-ink vhs-text">{t("footer.thanks")}</p>
            <p className="mt-2 text-muted">
              © {year} {t("footer.copyright")}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2">
            <a href={contactInfo.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className={socialClass}>
              <Github className="w-4 h-4" />
            </a>
            {contactInfo.linkedin && (
              <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={socialClass}>
                <Linkedin className="w-4 h-4" />
              </a>
            )}
            {whatsappUrl && (
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className={socialClass}>
                <WhatsAppIcon className="w-4 h-4" />
              </a>
            )}
            <a href={`mailto:${contactInfo.email}`} aria-label={contactInfo.email} className={socialClass}>
              <Mail className="w-4 h-4" />
            </a>
            <CamButton onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} variant="primary" className="ml-1 h-11">
              <ArrowUp className="w-4 h-4" />
              {t("footer.backToTop")}
            </CamButton>
          </div>
        </div>

        <nav aria-label={t("footer.quickLinks")} className="mt-10 pt-8 border-t border-dashed border-edge">
          <p className="font-retro text-lg text-muted uppercase tracking-wider mb-3 text-center md:text-left">{t("footer.quickLinks")}</p>
          <ul className="flex flex-wrap justify-center md:justify-start gap-2">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="inline-block px-3 py-1 font-retro text-xl uppercase text-ink border border-edge hover:border-ink hover:bg-panel2">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-2 font-retro text-lg text-muted uppercase">
          <span>{t("footer.madeWith")}</span>
          <span>{t("footer.location")}</span>
        </div>
      </div>
    </footer>
  );
}
