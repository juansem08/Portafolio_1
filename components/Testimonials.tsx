"use client";

import Image from "next/image";
import { Quote, Star, UserCheck } from "lucide-react";
import { Tape, Paperclip, Pushpin } from "./ScrapbookAssets";
import { useApp } from "@/context/AppContext";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  const { t, lang } = useApp();

  return (
    <section id="testimonials" className="py-20 relative select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="mb-2">
            <Tape variant="warning">{t("testimonials.sectionTape")}</Tape>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-black text-[#1B1717] dark:text-[#EDEBDD] tracking-tight uppercase">
            {t("testimonials.title")}
          </h2>
          <p className="mt-2 text-neutral-600 dark:text-neutral-400 font-mono text-xs max-w-xl font-bold">
            {t("testimonials.subtitle")}
          </p>
        </div>

        {/* Grid: 1 columna en móvil, 3 en escritorio */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <figure
              key={item.name}
              className={`relative flex flex-col justify-between rounded-lg border-2 border-[#1B1717] dark:border-[#810100] bg-[#FAF9F5] dark:bg-[#1E1B18] p-6 sm:p-7 shadow-[6px_6px_0px_#1B1717] dark:shadow-[6px_6px_0px_#810100] ${
                idx % 2 === 0 ? "-rotate-1" : "rotate-1"
              } hover:rotate-0 transition-transform duration-300`}
            >
              <div className="absolute -top-4 right-6 pointer-events-none">
                {idx === 1 ? <Pushpin color="#810100" /> : <Paperclip variant={idx === 0 ? "cherry" : "silver"} />}
              </div>

              <div>
                <div className="mb-4 flex items-center justify-between">
                  <div className="w-10 h-10 bg-[#EDEBDD] dark:bg-[#121010] border-2 border-[#1B1717] dark:border-[#810100] flex items-center justify-center text-[#810100]">
                    <Quote className="w-5 h-5 rotate-180" />
                  </div>
                  <div className="flex gap-0.5 text-[#810100] dark:text-amber-400" aria-label="5/5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>

                <blockquote className="text-[#1B1717] dark:text-[#EDEBDD] text-sm leading-relaxed italic font-sans mb-6">
                  &ldquo;{item.feedback[lang]}&rdquo;
                </blockquote>
              </div>

              <figcaption className="pt-4 border-t border-[#1B1717]/20 dark:border-[#EDEBDD]/20 flex items-center gap-3">
                {item.photo ? (
                  <div className="relative w-14 h-14 shrink-0 rounded-full overflow-hidden border-2 border-[#1B1717] dark:border-[#EDEBDD]/40 shadow-[2px_2px_0px_#1B1717]">
                    <Image
                      src={item.photo}
                      alt={`${t("testimonials.photoOf")} ${item.name}`}
                      fill
                      sizes="56px"
                      className="object-cover object-top"
                    />
                  </div>
                ) : (
                  <div
                    aria-hidden
                    className="w-14 h-14 shrink-0 rounded-full bg-[#810100] text-[#EDEBDD] font-mono font-black text-sm flex items-center justify-center border-2 border-[#1B1717] dark:border-[#EDEBDD]/40 shadow-[2px_2px_0px_#1B1717]"
                  >
                    {item.initials}
                  </div>
                )}
                <div>
                  <p className="text-sm font-black text-[#1B1717] dark:text-[#EDEBDD] uppercase font-display">
                    {item.name}
                  </p>
                  <p className="text-xs font-mono text-[#810100] dark:text-[#E8927C] font-bold">
                    {item.role[lang]}
                  </p>
                  <p className="text-[11px] font-mono text-neutral-600 dark:text-neutral-400 flex items-center gap-1 font-bold">
                    <UserCheck className="w-3 h-3 text-[#810100]" />
                    {item.relation[lang]}
                  </p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
