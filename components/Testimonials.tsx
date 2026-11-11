"use client";

import { Section, SectionHeader, Feed } from "./night/ui";
import { useApp } from "@/context/AppContext";

interface Testimonial {
  name: string;
  role: string;
  feedback: string;
  initials: string;
}

// La guía pide mínimo 3 testimonios. Agrégalos aquí cuando los tengas.
const testimonials: Testimonial[] = [];

export default function Testimonials() {
  const { t } = useApp();

  return (
    <Section id="testimonials">
      <SectionHeader cam={t("testimonials.level")} room={t("rooms.testimonials")} title={t("testimonials.title")} subtitle={t("testimonials.subtitle")} />

      {testimonials.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item, idx) => (
            <Feed key={item.name} label={`MSG ${String(idx + 1).padStart(2, "0")}`} className="flex flex-col" bodyClassName="flex flex-col flex-1 p-5">
              <blockquote className="flex-1 text-ink leading-relaxed">“{item.feedback}”</blockquote>
              <div className="flex items-center gap-3 mt-5 pt-4 border-t border-dashed border-edge">
                <span className="w-10 h-10 flex items-center justify-center bg-panel2 border border-edge font-retro text-xl text-ink">
                  {item.initials}
                </span>
                <div>
                  <p className="font-retro text-xl uppercase text-ink leading-none">{item.name}</p>
                  <p className="text-sm text-muted">{item.role}</p>
                </div>
              </div>
            </Feed>
          ))}
        </div>
      ) : (
        <div className="screen scanlines vignette cam-frame max-w-2xl mx-auto aspect-[16/7] flex items-center justify-center text-center">
          <div aria-hidden className="cam-corners" />
          <div aria-hidden className="noise absolute inset-0 overflow-hidden [--noise-opacity:0.5]" />
          <div className="relative z-[4] px-6">
            <p className="font-retro text-4xl sm:text-6xl uppercase vhs-text animate-flicker">{t("testimonials.emptyTitle")}</p>
            <p className="mt-3 font-retro text-xl text-[#c9d6cb]">{t("testimonials.emptyDesc")}</p>
          </div>
        </div>
      )}
    </Section>
  );
}
