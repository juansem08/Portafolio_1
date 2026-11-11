"use client";

import { Section, SectionHeader, Panel, ACCENT_CYCLE } from "./arcade/ui";
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
      <SectionHeader
        level={t("testimonials.level")}
        title={t("testimonials.title")}
        subtitle={t("testimonials.subtitle")}
        accent="yellow"
      />

      {testimonials.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item, idx) => {
            const accent = ACCENT_CYCLE[idx % ACCENT_CYCLE.length];
            return (
              <Panel key={item.name} accent={accent} title="★★★★★" className="flex flex-col" bodyClassName="flex flex-col flex-1 p-5">
                <blockquote className="flex-1 text-ink leading-relaxed">“{item.feedback}”</blockquote>
                <div className="flex items-center gap-3 mt-5 pt-4 border-t-2 border-dashed border-edge">
                  <span className="w-10 h-10 flex items-center justify-center bg-violet text-white font-pixel text-[10px] border-2 border-edge">
                    {item.initials}
                  </span>
                  <div>
                    <p className="font-pixel text-[10px] text-ink">{item.name}</p>
                    <p className="font-retro text-lg text-muted">{item.role}</p>
                  </div>
                </div>
              </Panel>
            );
          })}
        </div>
      ) : (
        <div className="pixel-panel bg-screen scanlines max-w-2xl mx-auto px-6 py-12 text-center">
          <p className="font-pixel text-lg sm:text-2xl text-yellow animate-blink">{t("testimonials.emptyTitle")}</p>
          <p className="mt-5 font-retro text-xl text-white/80">{t("testimonials.emptyDesc")}</p>
        </div>
      )}
    </Section>
  );
}
