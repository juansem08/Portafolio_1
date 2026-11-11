"use client";

import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import PixelAvatar from "./arcade/PixelAvatar";
import { PixelButton, WhatsAppIcon } from "./arcade/ui";
import { useApp } from "@/context/AppContext";
import { contactInfo, whatsappUrl } from "@/data/contact";

const socialClass =
  "pixel-btn w-11 h-11 flex items-center justify-center bg-panel text-ink";

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
    <footer className="mt-8 border-t-4 border-edge bg-panel">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-4">
            <span className="flex items-end justify-center w-14 h-16 bg-sky border-4 border-edge">
              <PixelAvatar className="w-9 h-11" />
            </span>
            <div>
              <p className="font-pixel text-xs sm:text-sm text-pink">{t("footer.thanks")}</p>
              <p className="mt-2 font-retro text-xl text-ink">
                © {year} {t("footer.copyright")}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
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
            <PixelButton
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              accent="yellow"
              ariaLabel={t("footer.backToTop")}
              className="ml-1"
            >
              <ArrowUp className="w-4 h-4" />
              {t("footer.backToTop")}
            </PixelButton>
          </div>
        </div>

        <nav aria-label={t("footer.quickLinks")} className="mt-10 pt-8 border-t-4 border-dashed border-edge">
          <p className="font-pixel text-[9px] text-muted mb-4 text-center md:text-left">{t("footer.quickLinks")}</p>
          <ul className="flex flex-wrap justify-center md:justify-start gap-2">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="inline-block px-3 py-1 font-retro text-lg text-ink bg-panel2 border-2 border-edge hover:bg-yellow hover:text-[#241b4b]"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-2 font-retro text-lg text-muted">
          <span>{t("footer.madeWith")}</span>
          <span>{t("footer.location")}</span>
        </div>
      </div>
    </footer>
  );
}
