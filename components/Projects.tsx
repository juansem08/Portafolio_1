"use client";

import { projects } from "@/data/projects";
import { Github, ExternalLink, Layers } from "lucide-react";
import { Tape, Paperclip, Pushpin } from "./ScrapbookAssets";
import { useApp } from "@/context/AppContext";

export default function Projects() {
  const { t } = useApp();
  const translatedItems = (t("projects.items") as Array<{ title: string; description: string }>) || [];

  return (
    <section id="projects" className="py-20 relative select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14">
          <div className="mb-2">
            <Tape variant="warning">{t("projects.sectionTape")}</Tape>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between w-full gap-4">
            <div>
              <h2 className="text-3xl sm:text-5xl font-display font-black text-[#1B1717] dark:text-[#EDEBDD] tracking-tight uppercase">
                {t("projects.title")}
              </h2>
              <p className="mt-2 text-neutral-600 dark:text-neutral-400 font-mono text-xs max-w-xl font-bold">
                {t("projects.subtitle")}
              </p>
            </div>

            <div className="px-3.5 py-1.5 bg-[#FAF9F5] dark:bg-[#1E1B18] border-2 border-[#1B1717] dark:border-[#810100] font-mono text-xs font-black text-[#810100] dark:text-[#EDEBDD] shadow-[3px_3px_0px_#1B1717] dark:shadow-[3px_3px_0px_#810100] rotate-1 shrink-0">
              {t("projects.badgeCount")}
            </div>
          </div>
        </div>

        {/* Projects Grid: Tactile Engineering Dossier Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => {
            const rotation = idx % 2 === 0 ? "-rotate-1" : "rotate-1";
            const currentItem = translatedItems[idx] || project;
            const projectTitle = currentItem.title || project.title;
            const projectDescription = currentItem.description || project.description;
            
            return (
              <div
                key={project.title}
                className={`relative group ${rotation} hover:rotate-0 hover:-translate-y-1 transition-all duration-300 flex flex-col`}
              >
                {/* Decorative clips & pushpins */}
                {idx === 0 && (
                  <div className="absolute -top-4 right-10 z-20 pointer-events-none">
                    <Paperclip variant="cherry" />
                  </div>
                )}
                {idx === 1 && (
                  <div className="absolute -top-3.5 left-10 z-20 pointer-events-none">
                    <Pushpin color="#810100" />
                  </div>
                )}
                {idx === 2 && (
                  <div className="absolute -top-3.5 right-12 z-20 pointer-events-none">
                    <Pushpin color="#630000" />
                  </div>
                )}
                {idx === 3 && (
                  <div className="absolute -top-4 left-12 z-20 pointer-events-none">
                    <Paperclip variant="silver" />
                  </div>
                )}

                {/* Card Container in Cotton Card #FAF9F5 */}
                <div className="rounded-lg border-2 border-[#1B1717] dark:border-[#810100] bg-[#FAF9F5] dark:bg-[#1E1B18] p-6 sm:p-8 shadow-[8px_8px_0px_#1B1717] dark:shadow-[8px_8px_0px_#810100] flex flex-col justify-between h-full">
                  
                  <div>
                    {/* Top Bar with Number & Status Badge */}
                    <div className="flex items-center justify-between pb-4 mb-4 border-b-2 border-dashed border-[#1B1717]/30 dark:border-[#EDEBDD]/20">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded bg-[#1B1717] dark:bg-[#810100] text-[#EDEBDD] flex items-center justify-center font-mono font-black text-xs shadow-[2px_2px_0px_#810100] dark:shadow-[2px_2px_0px_#1B1717]">
                          0{idx + 1}
                        </div>
                        <span className="font-mono text-xs font-black text-[#810100] dark:text-[#E8927C] tracking-wider uppercase">
                          {t("projects.softwareModule")}
                        </span>
                      </div>

                      <div className="flex items-center gap-1.5 px-2.5 py-0.5 bg-[#EDEBDD] dark:bg-[#121010] border border-[#1B1717] dark:border-[#810100] text-[10px] font-mono font-bold text-[#1B1717] dark:text-[#EDEBDD] shadow-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                        <span>{t("projects.statusLive")}</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl sm:text-3xl font-display font-black text-[#1B1717] dark:text-[#EDEBDD] group-hover:text-[#810100] dark:group-hover:text-[#E8927C] transition-colors uppercase tracking-tight mb-3">
                      {projectTitle}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-neutral-800 dark:text-neutral-300 leading-relaxed font-sans mb-6">
                      {projectDescription}
                    </p>
                  </div>

                  <div>
                    {/* Tech Stack Tags */}
                    <div className="pt-4 border-t border-[#1B1717]/20 dark:border-[#EDEBDD]/20 mb-6">
                      <div className="text-[10px] font-mono text-neutral-600 dark:text-neutral-400 font-bold uppercase mb-2 flex items-center gap-1">
                        <Layers className="w-3 h-3 text-[#810100]" />
                        <span>{t("projects.techStackTitle")}</span>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-1 text-xs font-mono bg-[#EDEBDD] dark:bg-[#121010] text-[#1B1717] dark:text-[#EDEBDD] font-bold border border-[#1B1717] dark:border-[#810100] shadow-[2px_2px_0px_#1B1717] dark:shadow-[2px_2px_0px_#810100]"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Actions: GitHub Repos & Live Demo */}
                    <div className="flex items-center justify-between gap-3 pt-4 border-t-2 border-dashed border-[#1B1717]/20 dark:border-[#EDEBDD]/20">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#1B1717] text-[#EDEBDD] hover:bg-[#332D2D] dark:bg-[#252020] dark:hover:bg-[#383030] text-xs font-mono font-bold border border-[#1B1717] dark:border-[#810100] shadow-[3px_3px_0px_#810100] transition-all hover:scale-105 active:scale-95"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>{t("projects.btnCode")}</span>
                      </a>

                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#810100] text-[#EDEBDD] hover:bg-[#9E0201] text-xs font-display font-black tracking-wide border-2 border-[#1B1717] dark:border-[#EDEBDD]/40 shadow-[3px_3px_0px_#1B1717] dark:shadow-[3px_3px_0px_#810100] transition-all hover:scale-105 active:scale-95"
                      >
                        <span>{t("projects.btnDemo")}</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
