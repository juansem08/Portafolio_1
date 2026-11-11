"use client";

import { Award, Clock, ExternalLink } from "lucide-react";
import { Tape, Pushpin } from "./ScrapbookAssets";
import { useApp } from "@/context/AppContext";
import { certificates } from "@/data/certificates";

export default function Certificates() {
  const { t, lang } = useApp();

  return (
    <section id="certificates" className="py-20 relative select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start mb-12">
          <div className="mb-2">
            <Tape variant="warning">{t("certificates.sectionTape")}</Tape>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-black text-[#1B1717] dark:text-[#EDEBDD] tracking-tight uppercase">
            {t("certificates.title")}
          </h2>
          <p className="mt-2 text-neutral-600 dark:text-neutral-400 font-mono text-xs max-w-xl font-bold">
            {t("certificates.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificates.map((cert, idx) => (
            <article
              key={cert.title.es}
              className={`relative flex flex-col justify-between rounded-lg border-2 border-[#1B1717] dark:border-[#810100] bg-[#FAF9F5] dark:bg-[#1E1B18] p-5 shadow-[5px_5px_0px_#1B1717] dark:shadow-[5px_5px_0px_#810100] ${
                idx % 2 === 0 ? "-rotate-1" : "rotate-1"
              } hover:rotate-0 hover:-translate-y-1 transition-all duration-200`}
            >
              {idx === 0 && (
                <div className="absolute -top-3.5 right-4 pointer-events-none z-20">
                  <Pushpin color="#810100" />
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded bg-[#810100] text-[#EDEBDD] border-2 border-[#1B1717] dark:border-[#EDEBDD]/30 flex items-center justify-center shadow-[2px_2px_0px_#1B1717]">
                    <Award className="w-5 h-5" />
                  </div>
                  {cert.hours && (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-[#1B1717] dark:bg-[#810100] text-[#EDEBDD] font-mono text-[10px] font-black">
                      <Clock className="w-3 h-3" />
                      {cert.hours} h
                    </span>
                  )}
                </div>
                <h3 className="font-display font-black text-base text-[#1B1717] dark:text-[#EDEBDD] uppercase leading-snug">
                  {cert.title[lang]}
                </h3>
                <p className="mt-2 font-mono text-[11px] text-[#810100] dark:text-[#E8927C] font-black">
                  {cert.issuer[lang]}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#1B1717]/20 dark:border-[#EDEBDD]/20 flex items-center justify-between gap-2 font-mono text-[11px] text-[#1B1717] dark:text-[#EDEBDD] font-bold">
                <span>{cert.date[lang]}</span>
                {cert.verifyUrl && (
                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[#810100] dark:text-[#E8927C] hover:underline"
                  >
                    {t("certificates.verify")}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
