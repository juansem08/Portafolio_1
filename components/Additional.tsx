"use client";

import { Code2, Award, Building2, ArrowDown } from "lucide-react";
import { Tape } from "./ScrapbookAssets";
import { useApp } from "@/context/AppContext";
import ExtraSection from "./ExtraSection";
import Certificates from "./Certificates";
import CompanyVisits from "./CompanyVisits";

// Sección adicional de la guía: agrupa habilidades técnicas, certificados y visitas empresariales.
export default function Additional() {
  const { t } = useApp();

  const parts = [
    { href: "#workspace", icon: Code2, label: t("additional.skills"), desc: t("additional.skillsDesc") },
    { href: "#certificates", icon: Award, label: t("additional.certificates"), desc: t("additional.certificatesDesc") },
    { href: "#visits", icon: Building2, label: t("additional.visits"), desc: t("additional.visitsDesc") },
  ];

  return (
    <div id="adicional" className="relative">
      <div className="pt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start mb-10">
          <div className="mb-2">
            <Tape variant="warning">{t("additional.sectionTape")}</Tape>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-black text-[#1B1717] dark:text-[#EDEBDD] tracking-tight uppercase">
            {t("additional.title")}
          </h2>
          <p className="mt-2 text-neutral-600 dark:text-neutral-400 font-mono text-xs max-w-xl font-bold">
            {t("additional.subtitle")}
          </p>
        </div>

        {/* Índice de la sección adicional */}
        <nav aria-label={t("additional.title")} className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {parts.map(({ href, icon: Icon, label, desc }) => (
            <a
              key={href}
              href={href}
              className="group flex items-center gap-3 p-4 bg-[#FAF9F5] dark:bg-[#1E1B18] border-2 border-[#1B1717] dark:border-[#810100] shadow-[4px_4px_0px_#1B1717] dark:shadow-[4px_4px_0px_#810100] hover:-translate-y-1 transition-transform"
            >
              <span className="w-10 h-10 shrink-0 rounded bg-[#810100] text-[#EDEBDD] border-2 border-[#1B1717] flex items-center justify-center">
                <Icon className="w-5 h-5" />
              </span>
              <span className="flex-1">
                <span className="block font-display font-black text-sm uppercase text-[#1B1717] dark:text-[#EDEBDD] group-hover:text-[#810100] dark:group-hover:text-[#E8927C]">
                  {label}
                </span>
                <span className="block font-mono text-[11px] text-neutral-600 dark:text-neutral-400 font-bold">
                  {desc}
                </span>
              </span>
              <ArrowDown className="w-4 h-4 text-[#810100] dark:text-[#E8927C]" />
            </a>
          ))}
        </nav>
      </div>

      <ExtraSection />
      <Certificates />
      <CompanyVisits />
    </div>
  );
}
