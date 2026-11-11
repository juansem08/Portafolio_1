"use client";

import Image from "next/image";
import { projects, type ProjectIcon } from "@/data/projects";
import {
  Github,
  ExternalLink,
  Layers,
  Clock,
  Download,
  Wrench,
  ScanText,
  BarChart3,
  Watch,
  LayoutGrid,
  Gamepad2,
  type LucideIcon,
} from "lucide-react";
import { Tape, Paperclip, Pushpin } from "./ScrapbookAssets";
import { useApp } from "@/context/AppContext";

const ICONS: Record<ProjectIcon, LucideIcon> = {
  wrench: Wrench,
  scan: ScanText,
  chart: BarChart3,
  watch: Watch,
  grid: LayoutGrid,
  gamepad: Gamepad2,
};

export default function Projects() {
  const { t, lang } = useApp();

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
              {projects.length} {t("projects.badgeCount")}
            </div>
          </div>
        </div>

        {/* Projects Grid: 1 columna en móvil, 2 en tablet, 3 en escritorio */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => {
            const rotation = idx % 2 === 0 ? "-rotate-1" : "rotate-1";
            const Icon = ICONS[project.icon];

            return (
              <div
                key={project.title}
                className={`relative group ${rotation} hover:rotate-0 hover:-translate-y-1 transition-all duration-300 flex flex-col`}
              >
                {/* Decorative clips & pushpins */}
                <div className={`absolute -top-4 z-20 pointer-events-none ${idx % 2 === 0 ? "right-8" : "left-8"}`}>
                  {idx % 3 === 1 ? <Pushpin color="#810100" /> : <Paperclip variant={idx % 2 === 0 ? "cherry" : "silver"} />}
                </div>

                {/* Card Container in Cotton Card #FAF9F5 */}
                <div className="rounded-lg border-2 border-[#1B1717] dark:border-[#810100] bg-[#FAF9F5] dark:bg-[#1E1B18] shadow-[8px_8px_0px_#1B1717] dark:shadow-[8px_8px_0px_#810100] flex flex-col h-full overflow-hidden">

                  {/* Imagen del proyecto o portada con ícono */}
                  <div
                    className="relative aspect-[16/10] border-b-2 border-[#1B1717] dark:border-[#810100] overflow-hidden bg-[#EDEBDD] dark:bg-[#121010]"
                    style={project.imageBg ? { background: project.imageBg } : undefined}
                  >
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={`${t("projects.screenshotOf")} ${project.title}`}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        unoptimized={project.image.endsWith(".svg")}
                        className={`${
                          project.imageFit === "contain"
                            ? "object-contain p-8 drop-shadow-[0_10px_18px_rgba(0,0,0,0.25)]"
                            : `object-cover ${project.imagePosition === "center" ? "object-center" : "object-left"}`
                        } group-hover:scale-105 transition-transform duration-500`}
                      />
                    ) : (
                      <div
                        role="img"
                        aria-label={project.title}
                        className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-[radial-gradient(circle_at_30%_20%,rgba(129,1,0,0.18),transparent_60%),repeating-linear-gradient(45deg,rgba(27,23,23,0.05)_0_10px,transparent_10px_20px)]"
                      >
                        <div className="w-16 h-16 rounded-lg bg-[#810100] text-[#EDEBDD] border-2 border-[#1B1717] dark:border-[#EDEBDD]/40 shadow-[4px_4px_0px_#1B1717] flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Icon className="w-8 h-8" />
                        </div>
                      </div>
                    )}
                    <span className="absolute top-2 left-2 px-2 py-0.5 bg-[#1B1717] text-[#EDEBDD] font-mono text-[10px] font-black uppercase tracking-wider border border-[#EDEBDD]/30">
                      {project.category[lang]}
                    </span>
                  </div>

                  <div className="p-6 flex flex-col justify-between flex-1">
                    <div>
                      {/* Top Bar with Number & Status Badge */}
                      <div className="flex items-center justify-between pb-3 mb-3 border-b-2 border-dashed border-[#1B1717]/30 dark:border-[#EDEBDD]/20">
                        <div className="w-8 h-8 rounded bg-[#1B1717] dark:bg-[#810100] text-[#EDEBDD] flex items-center justify-center font-mono font-black text-xs shadow-[2px_2px_0px_#810100] dark:shadow-[2px_2px_0px_#1B1717]">
                          0{idx + 1}
                        </div>
                        <div className="flex items-center gap-1.5 px-2.5 py-0.5 bg-[#EDEBDD] dark:bg-[#121010] border border-[#1B1717] dark:border-[#810100] text-[10px] font-mono font-bold text-[#1B1717] dark:text-[#EDEBDD] shadow-sm">
                          <span
                            className={`w-1.5 h-1.5 rounded-full ${
                              project.demo || project.download ? "bg-emerald-600 animate-pulse" : "bg-amber-500"
                            }`}
                          />
                          <span>
                            {project.demo
                              ? t("projects.statusLive")
                              : project.download
                                ? t("projects.statusDownload")
                                : t("projects.statusCode")}
                          </span>
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl sm:text-2xl font-display font-black text-[#1B1717] dark:text-[#EDEBDD] group-hover:text-[#810100] dark:group-hover:text-[#E8927C] transition-colors uppercase tracking-tight mb-3">
                        {project.title}
                      </h3>

                      {/* Description */}
                      <p className="text-sm text-neutral-800 dark:text-neutral-300 leading-relaxed font-sans mb-5">
                        {project.description[lang]}
                      </p>
                    </div>

                    <div>
                      {/* Tech Stack Tags */}
                      <div className="pt-3 border-t border-[#1B1717]/20 dark:border-[#EDEBDD]/20 mb-5">
                        <div className="text-[10px] font-mono text-neutral-600 dark:text-neutral-400 font-bold uppercase mb-2 flex items-center gap-1">
                          <Layers className="w-3 h-3 text-[#810100]" />
                          <span>{t("projects.techStackTitle")}</span>
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-0.5 text-[11px] font-mono bg-[#EDEBDD] dark:bg-[#121010] text-[#1B1717] dark:text-[#EDEBDD] font-bold border border-[#1B1717] dark:border-[#810100] shadow-[2px_2px_0px_#1B1717] dark:shadow-[2px_2px_0px_#810100]"
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Actions: GitHub Repos & Live Demo (abren en otra pestaña) */}
                      <div className="flex flex-wrap items-center gap-3 pt-4 border-t-2 border-dashed border-[#1B1717]/20 dark:border-[#EDEBDD]/20">
                        {project.repos.map((repo) => (
                          <a
                            key={repo.url}
                            href={repo.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-3.5 py-2.5 bg-[#1B1717] text-[#EDEBDD] hover:bg-[#332D2D] dark:bg-[#252020] dark:hover:bg-[#383030] text-xs font-mono font-bold border border-[#1B1717] dark:border-[#810100] shadow-[3px_3px_0px_#810100] transition-all hover:scale-105 active:scale-95"
                          >
                            <Github className="w-3.5 h-3.5" />
                            <span>
                              {project.repos.length > 1 ? repo.label : t("projects.btnCode")}
                            </span>
                          </a>
                        ))}

                        {project.demo ? (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-3.5 py-2.5 bg-[#810100] text-[#EDEBDD] hover:bg-[#9E0201] text-xs font-display font-black tracking-wide border-2 border-[#1B1717] dark:border-[#EDEBDD]/40 shadow-[3px_3px_0px_#1B1717] dark:shadow-[3px_3px_0px_#810100] transition-all hover:scale-105 active:scale-95"
                          >
                            <span>{t("projects.btnDemo")}</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        ) : project.download ? (
                          <a
                            href={project.download}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-3.5 py-2.5 bg-[#810100] text-[#EDEBDD] hover:bg-[#9E0201] text-xs font-display font-black tracking-wide border-2 border-[#1B1717] dark:border-[#EDEBDD]/40 shadow-[3px_3px_0px_#1B1717] dark:shadow-[3px_3px_0px_#810100] transition-all hover:scale-105 active:scale-95"
                          >
                            <Download className="w-3.5 h-3.5" />
                            <span>{t("projects.btnDownload")}</span>
                          </a>
                        ) : (
                          <span className="inline-flex items-center gap-2 px-3.5 py-2.5 text-xs font-mono font-bold text-neutral-500 dark:text-neutral-400 border-2 border-dashed border-[#1B1717]/40 dark:border-[#EDEBDD]/30">
                            <Clock className="w-3.5 h-3.5" />
                            <span>{t("projects.demoSoon")}</span>
                          </span>
                        )}
                      </div>
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
