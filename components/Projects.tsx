"use client";

import { projects } from "@/data/projects";
import { Github, ExternalLink, Lock, WifiOff } from "lucide-react";
import { Section, SectionHeader, CamButton, Tag, RecDot } from "./night/ui";
import { useApp } from "@/context/AppContext";

export default function Projects() {
  const { t } = useApp();
  const translated = (t("projects.items") as Array<{ title: string; description: string }>) || [];

  return (
    <Section id="projects">
      <SectionHeader cam={t("projects.level")} room={t("rooms.projects")} title={t("projects.title")} subtitle={t("projects.subtitle")} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, idx) => {
          const title = translated[idx]?.title || project.title;
          const description = translated[idx]?.description || project.description;
          const feedId = `${t("projects.stage")}-${String.fromCharCode(65 + idx)}`;
          const live = !!project.demo;

          return (
            <article key={project.title} className="cam-frame flex flex-col">
              {/* Toma de cámara del proyecto */}
              <div className="screen scanlines vignette aspect-[16/8] border-b border-edge">
                <div aria-hidden className="cam-corners" />
                <div
                  aria-hidden
                  className="absolute inset-0"
                  style={{ background: "radial-gradient(ellipse at 50% 55%, #222b26 0%, #090d0b 60%, #050706 90%)" }}
                />
                <div aria-hidden className={`noise absolute inset-0 overflow-hidden ${live ? "[--noise-opacity:0.14]" : "[--noise-opacity:0.45]"}`} />
                <div className="absolute inset-0 z-[4] flex flex-col justify-between p-4 font-retro uppercase">
                  <div className="flex items-center justify-between text-lg">
                    <span>{feedId}</span>
                    {live ? (
                      <span className="flex items-center gap-1.5 text-glow">
                        <RecDot /> {t("projects.statusLive")}
                      </span>
                    ) : (
                      <span className="flex items-center gap-1.5 text-[#ffb000]">
                        <WifiOff className="w-4 h-4" /> {t("projects.statusDev")}
                      </span>
                    )}
                  </div>
                  <p className="text-4xl sm:text-5xl leading-none text-center vhs-text">{title}</p>
                  <span className="text-lg text-[#8c9b8f] text-right">{String(idx + 1).padStart(2, "0")}/{String(projects.length).padStart(2, "0")}</span>
                </div>
              </div>

              <div className="flex flex-col flex-1 p-5 sm:p-6">
                <h3 className="font-retro text-3xl uppercase leading-none text-ink">{title}</h3>
                <p className="mt-3 text-muted leading-relaxed">{description}</p>

                <div className="flex flex-wrap gap-2 mt-5">
                  {project.tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3 mt-auto pt-6">
                  {project.github ? (
                    <CamButton href={project.github} external variant="primary">
                      <Github className="w-4 h-4" />
                      {t("projects.btnCode")}
                    </CamButton>
                  ) : (
                    <DisabledChip icon={<Lock className="w-4 h-4" />}>{t("projects.codePrivate")}</DisabledChip>
                  )}
                  {project.demo ? (
                    <CamButton href={project.demo} external>
                      {t("projects.btnDemo")}
                      <ExternalLink className="w-4 h-4" />
                    </CamButton>
                  ) : (
                    <DisabledChip icon={<WifiOff className="w-4 h-4" />}>{t("projects.demoSoon")}</DisabledChip>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </Section>
  );
}

function DisabledChip({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 px-4 py-2 font-retro text-xl uppercase text-muted border border-dashed border-edge cursor-not-allowed">
      {icon}
      {children}
    </span>
  );
}
