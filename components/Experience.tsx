"use client";

import { Github, ExternalLink, Briefcase, GraduationCap } from "lucide-react";
import { Section, SectionHeader } from "./night/ui";
import Lurker from "./night/Lurker";
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

const paperLink =
  "inline-flex items-center gap-2 px-3 py-1.5 font-typewriter text-sm uppercase border border-[#1c1a16] text-[#1c1a16] hover:bg-[#1c1a16] hover:text-[#e8e2cf]";

export default function Experience() {
  const { t } = useApp();
  const items = (t("experience.items") as TimelineItem[]) || [];

  // La guía pide dos partes: laboral y académica, de lo más reciente a lo más antiguo.
  const groups = [
    { key: "laboral", heading: t("experience.workHeading"), badge: t("experience.workBadge"), icon: Briefcase, items: items.filter((i) => i.type === "laboral") },
    { key: "academica", heading: t("experience.academicHeading"), badge: t("experience.academicBadge"), icon: GraduationCap, items: items.filter((i) => i.type === "academica") },
  ];

  let fileNo = 0;

  return (
    <Section id="experience" lurker={<Lurker creature="null" variant="hang" time="02:30 AM" />}>
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

              <ol className="relative ml-2 border-l border-edge space-y-8">
                {group.items.map((item, i) => {
                  fileNo += 1;
                  return (
                    <li key={item.title} className="relative pl-6 sm:pl-8">
                      <span aria-hidden className="absolute -left-[5px] top-8 w-[9px] h-[9px] bg-rec" />
                      {/* Expediente en papel */}
                      <article className={`paper p-5 sm:p-7 ${i % 2 ? "rotate-[0.4deg]" : "-rotate-[0.4deg]"}`}>
                        <span aria-hidden className="absolute top-3 left-8 w-8 h-1.5 bg-[#8d8d86] shadow-sm" />
                        <span aria-hidden className="stamp absolute top-5 right-5 sm:right-8 -rotate-[8deg] text-base sm:text-lg">
                          {group.badge}
                        </span>

                        <p className="font-typewriter text-xs uppercase tracking-wider text-[#5a5446]">
                          {t("experience.fileLabel")} N.º {String(fileNo).padStart(3, "0")} · {item.period}
                        </p>
                        <h4 className="mt-2 pr-28 font-typewriter text-xl sm:text-2xl uppercase leading-tight">{item.title}</h4>
                        <p className="mt-1 font-news italic text-lg text-[#3a3529]">{item.organization}</p>

                        <p className="mt-4 font-typewriter text-[15px] leading-relaxed text-[#2a2620]">{item.description}</p>

                        <p className="mt-4 font-typewriter text-sm text-[#4a4537]">
                          <span className="uppercase">{t("experience.tagsLabel")}:</span> {item.badges.join(" · ")}
                        </p>

                        {(item.github || item.demo) && (
                          <div className="flex flex-wrap gap-3 mt-5">
                            {item.github && (
                              <a href={item.github} target="_blank" rel="noopener noreferrer" className={paperLink}>
                                <Github className="w-4 h-4" />
                                {t("projects.btnCode")}
                              </a>
                            )}
                            {item.demo && (
                              <a href={item.demo} target="_blank" rel="noopener noreferrer" className={paperLink}>
                                {t("projects.btnDemo")}
                                <ExternalLink className="w-4 h-4" />
                              </a>
                            )}
                          </div>
                        )}
                      </article>
                    </li>
                  );
                })}
              </ol>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
