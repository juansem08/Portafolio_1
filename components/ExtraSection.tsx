"use client";

import { 
  Terminal, 
  Bot, 
  Code2, 
  Box, 
  Layers, 
  Cloud,
  Database,
  FileCode,
  Braces
} from "lucide-react";
import { Tape, Pushpin, Paperclip } from "./ScrapbookAssets";
import { useApp } from "@/context/AppContext";

export default function ExtraSection() {
  const { t } = useApp();

  const translatedLanguages = (t("extra.langItems") as Array<{
    name: string;
    category: string;
    description: string;
    level: string;
  }>) || [];

  const rawLanguages = [
    {
      code: "JAVA",
      accentColor: "border-[#810100] text-[#810100] dark:text-[#EDEBDD] bg-[#810100]/10",
      badgeBg: "bg-[#810100] text-[#EDEBDD]",
      rotation: "-rotate-1",
      icon: Braces,
    },
    {
      code: "PY",
      accentColor: "border-[#630000] text-[#630000] dark:text-[#EDEBDD] bg-[#630000]/10",
      badgeBg: "bg-[#630000] text-[#EDEBDD]",
      rotation: "rotate-1",
      icon: Terminal,
    },
    {
      code: "TS",
      accentColor: "border-[#1B1717] dark:border-[#810100] text-[#1B1717] dark:text-[#EDEBDD] bg-[#1B1717]/10",
      badgeBg: "bg-[#1B1717] dark:bg-[#810100] text-[#EDEBDD]",
      rotation: "-rotate-2",
      icon: Code2,
    },
    {
      code: "JS",
      accentColor: "border-[#810100] text-[#810100] dark:text-[#EDEBDD] bg-[#810100]/10",
      badgeBg: "bg-[#810100] text-[#EDEBDD]",
      rotation: "rotate-2",
      icon: FileCode,
    },
    {
      code: "SQL",
      accentColor: "border-[#630000] text-[#630000] dark:text-[#EDEBDD] bg-[#630000]/10",
      badgeBg: "bg-[#630000] text-[#EDEBDD]",
      rotation: "-rotate-1",
      icon: Database,
    },
  ];

  const translatedTools = (t("extra.toolsItems") as Array<{
    name: string;
    category: string;
    description: string;
    badge: string;
  }>) || [];

  const rawTools = [
    {
      icon: Terminal,
      accentColor: "border-[#810100] text-[#810100] dark:text-[#EDEBDD] bg-[#810100]/10",
      rotation: "-rotate-1",
    },
    {
      icon: Bot,
      accentColor: "border-[#630000] text-[#630000] dark:text-[#EDEBDD] bg-[#630000]/10",
      rotation: "rotate-1",
    },
    {
      icon: Code2,
      accentColor: "border-[#1B1717] dark:border-[#810100] text-[#1B1717] dark:text-[#EDEBDD] bg-[#1B1717]/10",
      rotation: "-rotate-2",
    },
    {
      icon: Box,
      accentColor: "border-[#810100] text-[#810100] dark:text-[#EDEBDD] bg-[#810100]/10",
      rotation: "rotate-2",
    },
    {
      icon: Layers,
      accentColor: "border-[#1B1717] dark:border-[#810100] text-[#1B1717] dark:text-[#EDEBDD] bg-[#1B1717]/10",
      rotation: "-rotate-1",
    },
    {
      icon: Cloud,
      accentColor: "border-[#630000] text-[#630000] dark:text-[#EDEBDD] bg-[#630000]/10",
      rotation: "rotate-1",
    },
  ];

  return (
    <section id="workspace" className="py-20 relative select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Section Header */}
        <div className="flex flex-col items-start mb-14">
          <div className="mb-2">
            <Tape variant="warning">{t("extra.sectionTape")}</Tape>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-black text-[#1B1717] dark:text-[#EDEBDD] tracking-tight uppercase">
            {t("extra.title")}
          </h2>
          <p className="mt-2 text-neutral-600 dark:text-neutral-400 font-mono text-xs max-w-xl font-bold">
            {t("extra.subtitle")}
          </p>
        </div>

        {/* SUBSECTION 1: LENGUAJES & FRAMEWORKS */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-3 h-3 bg-[#810100] rounded-sm" />
            <h3 className="font-display font-black text-xl sm:text-2xl text-[#1B1717] dark:text-[#EDEBDD] tracking-tight uppercase">
              {t("extra.sub1Title")}
            </h3>
            <span className="text-[11px] font-mono text-[#810100] dark:text-[#EDEBDD] font-black bg-[#EDEBDD] dark:bg-[#1E1B18] px-2.5 py-0.5 border border-[#1B1717] dark:border-[#810100] shadow-sm">
              {t("extra.sub1Badge")}
            </span>
          </div>

          {/* Languages Quick Tape Pills Bar */}
          <div className="flex flex-wrap gap-2.5 mb-8 pb-4 border-b-2 border-dashed border-[#1B1717]/20 dark:border-[#EDEBDD]/20">
            {rawLanguages.map((meta, idx) => {
              const item = translatedLanguages[idx] || { name: meta.code };
              return (
                <div
                  key={meta.code}
                  className={`inline-flex items-center gap-2 px-3 py-1 bg-[#FAF9F5] dark:bg-[#1E1B18] border-2 border-[#1B1717] dark:border-[#810100] font-mono text-xs font-black shadow-[2px_2px_0px_#1B1717] dark:shadow-[2px_2px_0px_#810100] ${meta.accentColor}`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#810100]" />
                  <span>{item.name}</span>
                  <span className="text-[10px] text-neutral-500 dark:text-neutral-400 font-bold">({meta.code})</span>
                </div>
              );
            })}
          </div>

          {/* Languages Bento Grid (Tactile Index Cards) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {rawLanguages.map((meta, idx) => {
              const item = translatedLanguages[idx] || {
                name: meta.code,
                category: "Backend",
                description: "",
                level: "Core",
              };
              const IconComp = meta.icon;

              return (
                <div
                  key={meta.code}
                  className={`relative flex flex-col justify-between rounded-lg border-2 border-[#1B1717] dark:border-[#810100] bg-[#FAF9F5] dark:bg-[#1E1B18] p-5 shadow-[5px_5px_0px_#1B1717] dark:shadow-[5px_5px_0px_#810100] ${meta.rotation} hover:rotate-0 hover:-translate-y-1 transition-all duration-200 group`}
                >
                  {/* Decorative Pin on first & fifth card */}
                  {idx === 0 && (
                    <div className="absolute -top-3.5 right-4 pointer-events-none z-20">
                      <Pushpin color="#810100" />
                    </div>
                  )}
                  {idx === 4 && (
                    <div className="absolute -top-4 left-4 pointer-events-none z-20">
                      <Paperclip variant="cherry" />
                    </div>
                  )}

                  <div>
                    {/* Header Stamp */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-9 h-9 rounded bg-[#EDEBDD] dark:bg-[#121010] border-2 border-[#1B1717] dark:border-[#810100] flex items-center justify-center font-mono font-black text-xs text-[#810100] dark:text-[#EDEBDD] shadow-[2px_2px_0px_#1B1717] dark:shadow-[2px_2px_0px_#810100]">
                        {meta.code}
                      </div>
                      <span className={`text-[9px] font-mono font-black px-2 py-0.5 border border-[#1B1717] dark:border-[#EDEBDD]/40 uppercase tracking-wider ${meta.badgeBg}`}>
                        {item.level}
                      </span>
                    </div>

                    {/* Language Name */}
                    <h4 className="font-display font-black text-base text-[#1B1717] dark:text-[#EDEBDD] group-hover:text-[#810100] dark:group-hover:text-[#E8927C] transition-colors uppercase">
                      {item.name}
                    </h4>

                    {/* Category Label */}
                    <p className="font-mono text-[11px] text-[#810100] dark:text-[#E8927C] font-black mb-2">
                      {item.category}
                    </p>

                    {/* Description */}
                    <p className="text-xs text-neutral-700 dark:text-neutral-300 leading-relaxed font-sans">
                      {item.description}
                    </p>
                  </div>

                  {/* Card Footer Tag */}
                  <div className="mt-4 pt-2.5 border-t border-[#1B1717]/20 dark:border-[#EDEBDD]/20 flex justify-between items-center text-[10px] font-mono text-[#1B1717] dark:text-[#EDEBDD]">
                    <div className="flex items-center gap-1.5 text-neutral-600 dark:text-neutral-400">
                      <IconComp className="w-3.5 h-3.5 text-[#810100] dark:text-[#EDEBDD]" />
                      <span className="font-bold">{t("extra.verified")}</span>
                    </div>
                    <span className="text-[#810100] dark:text-[#E8927C] font-black">{t("extra.statusOk")}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* SUBSECTION 2: ENTORNO DE TRABAJO & FRAMEWORKS */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-3 h-3 bg-[#630000] rounded-sm" />
            <h3 className="font-display font-black text-xl sm:text-2xl text-[#1B1717] dark:text-[#EDEBDD] tracking-tight uppercase">
              {t("extra.sub2Title")}
            </h3>
            <span className="text-[11px] font-mono text-[#630000] dark:text-[#EDEBDD] font-black bg-[#EDEBDD] dark:bg-[#1E1B18] px-2.5 py-0.5 border border-[#1B1717] dark:border-[#810100] shadow-sm">
              {t("extra.sub2Badge")}
            </span>
          </div>

          {/* Tools Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rawTools.map((meta, idx) => {
              const tool = translatedTools[idx] || {
                name: "Tool",
                category: "Tech",
                description: "",
                badge: "Active",
              };
              const IconComponent = meta.icon;

              return (
                <div
                  key={tool.name}
                  className={`relative flex flex-col justify-between rounded-lg border-2 border-[#1B1717] dark:border-[#810100] bg-[#FAF9F5] dark:bg-[#1E1B18] p-6 shadow-[6px_6px_0px_#1B1717] dark:shadow-[6px_6px_0px_#810100] ${meta.rotation} hover:rotate-0 hover:-translate-y-1 transition-all duration-200 group`}
                >
                  <div>
                    {/* Top Bar */}
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className={`w-11 h-11 rounded-md flex items-center justify-center border-2 border-[#1B1717] dark:border-[#810100] ${meta.accentColor} shadow-[2px_2px_0px_#1B1717] dark:shadow-[2px_2px_0px_#810100]`}
                      >
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-mono font-black px-2.5 py-1 bg-[#1B1717] dark:bg-[#810100] text-[#EDEBDD] border border-[#1B1717] dark:border-[#EDEBDD]/30 uppercase tracking-wider">
                        {tool.badge}
                      </span>
                    </div>

                    {/* Title & Category */}
                    <h4 className="text-lg font-display font-black text-[#1B1717] dark:text-[#EDEBDD] group-hover:text-[#810100] dark:group-hover:text-[#E8927C] transition-colors uppercase">
                      {tool.name}
                    </h4>
                    <div className="text-xs font-mono text-[#810100] dark:text-[#E8927C] mb-3 font-black">
                      {tool.category}
                    </div>

                    {/* Description */}
                    <p className="text-xs text-neutral-700 dark:text-neutral-300 leading-relaxed font-sans">
                      {tool.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#1B1717]/20 dark:border-[#EDEBDD]/20 flex justify-between items-center text-[10px] font-mono text-[#1B1717] dark:text-[#EDEBDD]">
                    <span className="font-bold">{t("extra.moduleActive")}</span>
                    <span className="text-[#810100] dark:text-[#E8927C] font-black">{t("extra.readyStatus")}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
