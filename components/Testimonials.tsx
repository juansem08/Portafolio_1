"use client";

import { Quote, CheckCircle2, UserCheck } from "lucide-react";
import { Tape, Pushpin, Paperclip } from "./ScrapbookAssets";
import { useApp } from "@/context/AppContext";

interface Testimonial {
  name: string;
  role: string;
  feedback: string;
  initials: string;
}

export default function Testimonials() {
  const { t } = useApp();
  const testimonials: Testimonial[] = [];

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

        {/* Testimonials Grid or Scrapbook Empty State */}
        {testimonials.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((item, idx) => (
              <div
                key={item.name}
                className={`relative flex flex-col justify-between rounded-lg border-2 border-[#1B1717] dark:border-[#810100] bg-[#FAF9F5] dark:bg-[#1E1B18] p-6 sm:p-7 shadow-[6px_6px_0px_#1B1717] dark:shadow-[6px_6px_0px_#810100] ${
                  idx % 2 === 0 ? "-rotate-1" : "rotate-1"
                } hover:rotate-0 transition-transform duration-300`}
              >
                {/* Paperclip top */}
                <div className="absolute -top-4 right-6 pointer-events-none">
                  <Paperclip variant="cherry" />
                </div>

                <div>
                  <div className="mb-4 flex items-center justify-between">
                    <div className="w-10 h-10 bg-[#EDEBDD] dark:bg-[#121010] border-2 border-[#1B1717] dark:border-[#810100] flex items-center justify-center text-[#810100]">
                      <Quote className="w-5 h-5 rotate-180" />
                    </div>
                    <div className="flex items-center gap-1 text-[11px] font-mono text-[#810100] dark:text-[#EDEBDD] bg-[#FAF9F5] dark:bg-[#121010] px-2 py-0.5 border border-[#810100] font-bold">
                      <CheckCircle2 className="w-3 h-3" />
                      <span>{t("extra.verified") || "Verificado"}</span>
                    </div>
                  </div>

                  <p className="text-[#1B1717] dark:text-[#EDEBDD] text-sm leading-relaxed italic font-sans mb-6">
                    &ldquo;{item.feedback}&rdquo;
                  </p>
                </div>

                <div className="pt-4 border-t border-[#1B1717]/20 dark:border-[#EDEBDD]/20 flex items-center gap-3">
                  <div className="w-10 h-10 rounded bg-[#810100] text-[#EDEBDD] font-mono font-black text-xs flex items-center justify-center border-2 border-[#1B1717] dark:border-[#810100]">
                    {item.initials}
                  </div>
                  <div>
                    <h3 className="text-sm font-black text-[#1B1717] dark:text-[#EDEBDD] uppercase font-display">
                      {item.name}
                    </h3>
                    <p className="text-xs font-mono text-neutral-600 dark:text-neutral-400 flex items-center gap-1 font-bold">
                      <UserCheck className="w-3 h-3 text-[#810100]" />
                      {item.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Tactile Corkboard / Manila Envelope Empty State */
          <div className="relative mx-auto max-w-2xl -rotate-1 hover:rotate-0 transition-transform duration-200">
            <div className="absolute -top-3.5 left-10 pointer-events-none">
              <Pushpin color="#810100" />
            </div>
            <div className="absolute -top-3.5 right-10 pointer-events-none">
              <Pushpin color="#630000" />
            </div>

            <div className="rounded-lg border-2 border-dashed border-[#1B1717] dark:border-[#810100] bg-[#FAF9F5] dark:bg-[#1E1B18] p-10 text-center shadow-[6px_6px_0px_#1B1717] dark:shadow-[6px_6px_0px_#810100]">
              <div className="inline-block mb-3">
                <Tape variant="maroon" className="text-xs font-mono font-bold text-[#EDEBDD]">
                  {t("testimonials.reservedTape")}
                </Tape>
              </div>
              <p className="text-sm font-mono text-[#1B1717] dark:text-[#EDEBDD] font-bold">
                {t("testimonials.reservedDesc")}
              </p>
              <p className="text-xs font-hand text-[#810100] dark:text-[#E8927C] font-black text-xl mt-2">
                {t("testimonials.reservedQuote")}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
