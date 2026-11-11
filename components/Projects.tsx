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
                {/* Pantalla CRT de 8 bits: fondo, confeti y bombillos de colores */}
                <div
                  aria-hidden
                  className="absolute inset-0"
                  style={{
                    background: `radial-gradient(circle at 20% 70%, #ff3b3b 0 1.5px, transparent 2px) 0 0/34px 26px,
                      radial-gradient(circle at 70% 30%, #ffb000 0 1.5px, transparent 2px) 0 0/41px 31px,
                      radial-gradient(circle at 40% 50%, #5ee7ff 0 1.5px, transparent 2px) 0 0/29px 37px,
                      linear-gradient(180deg, #2b2340 0%, #1a1527 70%, #3a2a22 70%, #2a1e18 100%)`,
                  }}
                />
                <div aria-hidden className="absolute top-3 inset-x-0 z-[2] flex justify-center gap-3 sm:gap-4">
                  {["#ff3b3b", "#ffb000", "#7dff9a", "#5ee7ff", "#b38cff"].map((c, i) => (
                    <span
                      key={c}
                      className="block w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full animate-led"
                      style={{ background: c, boxShadow: `0 0 10px 2px ${c}`, animationDelay: `${(i * 0.3 + idx * 0.2) % 1.4}s` }}
                    />
                  ))}
                </div>
                <div aria-hidden className={`noise absolute inset-0 overflow-hidden ${live ? "[--noise-opacity:0.1]" : "[--noise-opacity:0.4]"}`} />
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
                  <p className="text-4xl sm:text-5xl leading-none text-center text-[#fff6d8] [text-shadow:3px_3px_0_#000,-1px_0_#ff3b3b,1px_0_#5ee7ff]">
                    {title}
                  </p>
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
