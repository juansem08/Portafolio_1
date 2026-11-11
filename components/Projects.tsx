"use client";

import { projects } from "@/data/projects";
import { Github, ExternalLink, Lock, Clock } from "lucide-react";
import { Section, SectionHeader, Panel, PixelButton, Tag, ACCENT_CYCLE, accentBg } from "./arcade/ui";
import { useApp } from "@/context/AppContext";

export default function Projects() {
  const { t } = useApp();
  const translated = (t("projects.items") as Array<{ title: string; description: string }>) || [];

  return (
    <Section id="projects">
      <SectionHeader level={t("projects.level")} title={t("projects.title")} subtitle={t("projects.subtitle")} accent="pink" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, idx) => {
          const accent = ACCENT_CYCLE[idx % ACCENT_CYCLE.length];
          const title = translated[idx]?.title || project.title;
          const description = translated[idx]?.description || project.description;
          const stage = String(idx + 1).padStart(2, "0");

          return (
            <Panel
              key={project.title}
              accent={accent}
              title={`${t("projects.stage")} ${stage}`}
              className="flex flex-col"
              bodyClassName="flex flex-col flex-1"
            >
              {/* "Pantalla" del proyecto */}
              <div className="relative aspect-[16/7] bg-screen scanlines border-b-4 border-edge flex items-center justify-center overflow-hidden">
                <div
                  aria-hidden
                  className="absolute inset-0 opacity-30"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(255,255,255,.12) 2px, transparent 2px), linear-gradient(90deg, rgba(255,255,255,.12) 2px, transparent 2px)",
                    backgroundSize: "24px 24px",
                  }}
                />
                <span className={`relative font-pixel text-2xl sm:text-3xl px-4 py-3 border-4 border-[#050314] ${accentBg[accent]}`}>
                  {title.slice(0, 2).toUpperCase()}
                </span>
                <span className="absolute top-3 right-3 inline-flex items-center gap-2 font-pixel text-[8px] px-2 py-1.5 bg-[#050314] text-white">
                  <span className={`block w-2 h-2 ${project.demo ? "bg-mint animate-blink" : "bg-yellow"}`} aria-hidden />
                  {project.demo ? t("projects.statusLive") : t("projects.statusDev")}
                </span>
              </div>

              <div className="flex flex-col flex-1 p-5 sm:p-6">
                <h3 className="font-pixel text-sm sm:text-base leading-relaxed text-ink">{title}</h3>
                <p className="mt-3 text-muted leading-relaxed">{description}</p>

                <div className="flex flex-wrap gap-2 mt-5">
                  {project.tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3 mt-auto pt-6">
                  {project.github ? (
                    <PixelButton href={project.github} external accent="dark">
                      <Github className="w-4 h-4" />
                      {t("projects.btnCode")}
                    </PixelButton>
                  ) : (
                    <DisabledChip icon={<Lock className="w-3.5 h-3.5" />}>{t("projects.codePrivate")}</DisabledChip>
                  )}
                  {project.demo ? (
                    <PixelButton href={project.demo} external accent={accent}>
                      {t("projects.btnDemo")}
                      <ExternalLink className="w-4 h-4" />
                    </PixelButton>
                  ) : (
                    <DisabledChip icon={<Clock className="w-3.5 h-3.5" />}>{t("projects.demoSoon")}</DisabledChip>
                  )}
                </div>
              </div>
            </Panel>
          );
        })}
      </div>
    </Section>
  );
}

function DisabledChip({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 px-4 py-3 font-pixel text-[9px] text-muted border-4 border-dashed border-edge cursor-not-allowed">
      {icon}
      {children}
    </span>
  );
}
