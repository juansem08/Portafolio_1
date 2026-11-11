"use client";

import { Calendar, ChevronRight, Github, ExternalLink } from "lucide-react";
import { Tape, Pushpin, Paperclip } from "./ScrapbookAssets";
import { useApp } from "@/context/AppContext";

interface TimelineItem {
  type: "laboral" | "academica";
  title: string;
  organization: string;
  period: string;
  description: string;
  badges: string[];
  details?: string[];
  github?: string;
  demo?: string;
}

export default function Experience() {
  const { t } = useApp();

  const items = (t("experience.items") as TimelineItem[]) || [];
  // La guía pide dos partes: laboral y académica, de lo más reciente a lo más antiguo.
  const groups = [
    { key: "laboral", heading: t("experience.workHeading"), items: items.filter((i) => i.type === "laboral") },
    { key: "academica", heading: t("experience.academicHeading"), items: items.filter((i) => i.type === "academica") },
  ];

  return (
    <section id="experience" className="py-20 relative select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col items-start mb-14">
          <div className="mb-2">
            <Tape variant="warning">{t("experience.sectionTape")}</Tape>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-black text-[#1B1717] dark:text-[#EDEBDD] tracking-tight uppercase">
            {t("experience.title")}
          </h2>
          <p className="mt-2 text-neutral-600 dark:text-neutral-400 font-mono text-xs max-w-xl font-bold">
            {t("experience.subtitle")}
          </p>
        </div>

        <div className="space-y-16">
          {groups.map((group) => (
            <div key={group.key}>
              {/* Group heading: Laboral / Académica */}
              <div className="flex items-center gap-3 mb-8">
                <div className={`w-3 h-3 rounded-sm ${group.key === "laboral" ? "bg-[#810100]" : "bg-[#630000]"}`} />
                <h3 className="font-display font-black text-xl sm:text-2xl text-[#1B1717] dark:text-[#EDEBDD] tracking-tight uppercase">
                  {group.heading}
                </h3>
              </div>

              {/* Index Cards Timeline Stack */}
              <div className="space-y-8 relative">
                {group.items.map((item, index) => {
                  const isWork = item.type === "laboral";
                  const rotation = index % 2 === 0 ? "-rotate-1" : "rotate-1";

                  return (
                    <div
                      key={item.title}
                      className={`relative group ${rotation} hover:rotate-0 transition-transform duration-300`}
                    >
                      {/* Decorative clips & pushpins */}
                      {index === 0 && (
                        <div className="absolute -top-5 left-10 z-20 pointer-events-none">
                          <Paperclip variant={isWork ? "cherry" : "silver"} />
                        </div>
                      )}
                      {index === 1 && (
                        <div className="absolute -top-3 right-12 z-20 pointer-events-none">
                          <Pushpin color="#810100" />
                        </div>
                      )}

                      {/* Index Card Body in Cotton Card #FAF9F5 */}
                      <div className="rounded-lg border-2 border-[#1B1717] dark:border-[#810100] bg-[#FAF9F5] dark:bg-[#1E1B18] p-6 sm:p-8 shadow-[8px_8px_0px_#1B1717] dark:shadow-[8px_8px_0px_#810100]">
                        {/* Card Top Metadata Bar */}
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 mb-4 border-b-2 border-dashed border-[#1B1717]/30 dark:border-[#EDEBDD]/20">
                          <div className="flex flex-wrap items-center gap-3">
                            <span
                              className={`text-[11px] font-mono font-black uppercase px-2.5 py-1 border-2 border-[#1B1717] dark:border-[#EDEBDD]/40 shadow-[2px_2px_0px_#1B1717] ${
                                isWork ? "bg-[#810100] text-[#EDEBDD]" : "bg-[#630000] text-[#EDEBDD]"
                              }`}
                            >
                              {isWork ? t("experience.workBadge") : t("experience.academicBadge")}
                            </span>
                            <h4 className="text-xl sm:text-2xl font-display font-black text-[#1B1717] dark:text-[#EDEBDD] uppercase">
                              {item.title}
                            </h4>
                          </div>

                          <div className="flex items-center gap-2 font-mono text-xs text-[#1B1717] dark:text-[#EDEBDD] font-bold bg-[#EDEBDD] dark:bg-[#121010] px-3 py-1.5 border-2 border-[#1B1717] dark:border-[#810100] shadow-[2px_2px_0px_#1B1717] dark:shadow-[2px_2px_0px_#810100] w-fit shrink-0">
                            <Calendar className="w-3.5 h-3.5 text-[#810100] dark:text-[#E8927C]" />
                            <span>{item.period}</span>
                          </div>
                        </div>

                        {/* Organization with Dymo style accent */}
                        <div className="flex items-center gap-2 text-[#810100] dark:text-[#E8927C] font-mono font-black text-sm sm:text-base mb-4">
                          <ChevronRight className="w-4 h-4 shrink-0" />
                          <span>{t("experience.orgPrefix")} {item.organization}</span>
                        </div>

                        {/* Description */}
                        <p className="text-sm sm:text-base text-neutral-800 dark:text-neutral-300 leading-relaxed font-sans mb-6">
                          {item.description}
                        </p>

                        {item.details && item.details.length > 0 && (
                          <ul className="-mt-3 mb-6 space-y-2">
                            {item.details.map((detail) => (
                              <li
                                key={detail}
                                className="flex items-start gap-2 text-sm text-neutral-800 dark:text-neutral-300 font-sans"
                              >
                                <span className="mt-1.5 w-2 h-2 shrink-0 bg-[#810100] rotate-45" />
                                <span>{detail}</span>
                              </li>
                            ))}
                          </ul>
                        )}

                        {/* Badges as Stamped Tags */}
                        <div className="flex flex-wrap gap-2 pt-3 border-t border-[#1B1717]/20 dark:border-[#EDEBDD]/20">
                          {item.badges.map((badge) => (
                            <span
                              key={badge}
                              className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-mono bg-[#EDEBDD] dark:bg-[#121010] text-[#1B1717] dark:text-[#EDEBDD] font-bold border border-[#1B1717] dark:border-[#810100] shadow-[2px_2px_0px_#1B1717] dark:shadow-[2px_2px_0px_#810100]"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-[#810100]" />
                              {badge}
                            </span>
                          ))}
                        </div>

                        {/* Optional links: repo & live demo */}
                        {(item.github || item.demo) && (
                          <div className="flex flex-wrap items-center gap-3 mt-5">
                            {item.github && (
                              <a
                                href={item.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#1B1717] text-[#EDEBDD] hover:bg-[#332D2D] dark:bg-[#252020] dark:hover:bg-[#383030] text-xs font-mono font-bold border border-[#1B1717] dark:border-[#810100] shadow-[3px_3px_0px_#810100] transition-all hover:scale-105 active:scale-95"
                              >
                                <Github className="w-3.5 h-3.5" />
                                <span>{t("projects.btnCode")}</span>
                              </a>
                            )}
                            {item.demo && (
                              <a
                                href={item.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#810100] text-[#EDEBDD] hover:bg-[#9E0201] text-xs font-display font-black tracking-wide border-2 border-[#1B1717] dark:border-[#EDEBDD]/40 shadow-[3px_3px_0px_#1B1717] dark:shadow-[3px_3px_0px_#810100] transition-all hover:scale-105 active:scale-95"
                              >
                                <span>{t("projects.btnDemo")}</span>
                                <ExternalLink className="w-3.5 h-3.5" />
                              </a>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
