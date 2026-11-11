"use client";

import { Github, ExternalLink, Briefcase, GraduationCap } from "lucide-react";
import { Section, SectionHeader, PixelButton, Tag, accentBg } from "./arcade/ui";
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
    {
      key: "laboral",
      heading: t("experience.workHeading"),
      badge: t("experience.workBadge"),
      icon: Briefcase,
      accent: "mint" as const,
      items: items.filter((i) => i.type === "laboral"),
    },
    {
      key: "academica",
      heading: t("experience.academicHeading"),
      badge: t("experience.academicBadge"),
      icon: GraduationCap,
      accent: "violet" as const,
      items: items.filter((i) => i.type === "academica"),
    },
  ];

  return (
    <Section id="experience">
      <SectionHeader level={t("experience.level")} title={t("experience.title")} subtitle={t("experience.subtitle")} accent="mint" />

      <div className="space-y-14">
        {groups.map((group) => {
          const Icon = group.icon;
          return (
            <div key={group.key}>
              <h3 className="flex items-center gap-3 mb-8">
                <span className={`w-10 h-10 flex items-center justify-center border-4 border-edge ${accentBg[group.accent]}`}>
                  <Icon className="w-5 h-5" />
                </span>
                <span className="font-pixel text-sm sm:text-base text-ink">{group.heading}</span>
              </h3>

              {/* Línea de tiempo */}
              <ol className="relative ml-5 border-l-4 border-edge space-y-8">
                {group.items.map((item) => (
                  <li key={item.title} className="relative pl-8 sm:pl-10">
                    <span
                      aria-hidden
                      className={`absolute -left-[14px] top-5 w-6 h-6 border-4 border-edge ${accentBg[group.accent]}`}
                    />
                    <article className="pixel-panel p-5 sm:p-6">
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                        <div>
                          <span className={`inline-block font-pixel text-[8px] px-2 py-1.5 border-2 border-edge ${accentBg[group.accent]}`}>
                            {group.badge}
                          </span>
                          <h4 className="mt-3 font-pixel text-xs sm:text-sm leading-relaxed text-ink">{item.title}</h4>
                          <p className="mt-1 font-retro text-xl text-pink">{item.organization}</p>
                        </div>
                        <span className="shrink-0 w-fit font-retro text-xl px-3 py-1 bg-panel2 border-2 border-edge text-ink">
                          {item.period}
                        </span>
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
                            <PixelButton href={item.github} external accent="dark">
                              <Github className="w-4 h-4" />
                              {t("projects.btnCode")}
                            </PixelButton>
                          )}
                          {item.demo && (
                            <PixelButton href={item.demo} external accent={group.accent}>
                              {t("projects.btnDemo")}
                              <ExternalLink className="w-4 h-4" />
                            </PixelButton>
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
