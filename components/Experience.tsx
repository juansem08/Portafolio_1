"use client";

import { Github, ExternalLink, Briefcase, GraduationCap } from "lucide-react";
import { Section, SectionHeader, CamButton, Tag } from "./night/ui";
import { useApp } from "@/context/AppContext";

interface TimelineItem {
  type: "laboral" | "academica";
  title: string;
  organization: string;
  period: string;
  description: string;
  badges: string[];
  github?: string;
  demo?: string;
}

export default function Experience() {
  const { t } = useApp();
  const items = (t("experience.items") as TimelineItem[]) || [];

  // La guía pide dos partes: laboral y académica, de lo más reciente a lo más antiguo.
  const groups = [
    { key: "laboral", heading: t("experience.workHeading"), badge: t("experience.workBadge"), icon: Briefcase, items: items.filter((i) => i.type === "laboral") },
    { key: "academica", heading: t("experience.academicHeading"), badge: t("experience.academicBadge"), icon: GraduationCap, items: items.filter((i) => i.type === "academica") },
  ];

  return (
    <Section id="experience">
      <SectionHeader cam={t("experience.level")} room={t("rooms.experience")} title={t("experience.title")} subtitle={t("experience.subtitle")} />

      <div className="space-y-14">
        {groups.map((group) => {
          const Icon = group.icon;
          return (
            <div key={group.key}>
              <h3 className="flex items-center gap-3 mb-6 font-retro text-3xl uppercase text-ink">
                <Icon className="w-6 h-6 text-rec" />
                {group.heading}
              </h3>

              {/* Registro tipo bitácora */}
              <ol className="relative ml-2 border-l border-edge space-y-6">
                {group.items.map((item) => (
                  <li key={item.title} className="relative pl-6 sm:pl-8">
                    <span aria-hidden className="absolute -left-[5px] top-6 w-[9px] h-[9px] bg-rec" />
                    <article className="cam-frame p-5 sm:p-6">
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                        <div>
                          <span className="font-retro text-lg text-rec uppercase">{group.badge}</span>
                          <h4 className="font-retro text-3xl uppercase leading-none text-ink">{item.title}</h4>
                          <p className="mt-1 text-ink">{item.organization}</p>
                        </div>
                        <span className="shrink-0 w-fit font-retro text-xl px-2 border border-edge text-muted uppercase">{item.period}</span>
                      </div>

                      <p className="mt-4 text-muted leading-relaxed">{item.description}</p>

                      <div className="flex flex-wrap gap-2 mt-4">
                        {item.badges.map((b) => (
                          <Tag key={b}>{b}</Tag>
                        ))}
                      </div>

                      {(item.github || item.demo) && (
                        <div className="flex flex-wrap gap-3 mt-5">
                          {item.github && (
                            <CamButton href={item.github} external variant="primary">
                              <Github className="w-4 h-4" />
                              {t("projects.btnCode")}
                            </CamButton>
                          )}
                          {item.demo && (
                            <CamButton href={item.demo} external>
                              {t("projects.btnDemo")}
                              <ExternalLink className="w-4 h-4" />
                            </CamButton>
                          )}
                        </div>
                      )}
                    </article>
                  </li>
                ))}
              </ol>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
