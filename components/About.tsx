"use client";

import { Utensils, Music } from "lucide-react";
import PixelAvatar from "./arcade/PixelAvatar";
import { Section, SectionHeader, Panel, Tag, ACCENT_CYCLE } from "./arcade/ui";
import { useApp } from "@/context/AppContext";

const STACK = ["Java", "TypeScript", "Python", "JavaScript", "SQL", "Next.js", "Spring Boot", "Tailwind CSS"];

export default function About() {
  const { t } = useApp();
  const interests = t("about.interestsList") as string[];

  const stats = [
    { label: t("about.classLabel"), value: t("about.classValue") },
    { label: t("about.semesterLabel"), value: t("about.semesterValue") },
    { label: t("about.baseLabel"), value: t("about.baseValue") },
    { label: t("about.educationLabel"), value: t("about.educationValue") },
  ];

  return (
    <Section id="about">
      <SectionHeader level={t("about.level")} title={t("about.title")} subtitle={t("about.subtitle")} accent="sky" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Bio */}
        <Panel title={t("about.title")} accent="sky" className="lg:col-span-7">
          <p className="text-base sm:text-lg leading-relaxed text-ink">{t("about.mainBio")}</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            {[
              { icon: Utensils, title: t("about.card1Title"), desc: t("about.card1Desc"), bg: "bg-pink text-white" },
              { icon: Music, title: t("about.card2Title"), desc: t("about.card2Desc"), bg: "bg-mint text-[#241b4b]" },
            ].map(({ icon: Icon, title, desc, bg }) => (
              <div key={title} className="flex gap-3 p-4 bg-panel2 border-4 border-edge">
                <span className={`shrink-0 w-10 h-10 flex items-center justify-center border-2 border-edge ${bg}`}>
                  <Icon className="w-5 h-5" />
                </span>
                <div>
                  <h3 className="font-pixel text-[10px] leading-relaxed text-ink">{title}</h3>
                  <p className="mt-1 text-sm text-muted">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6">
            <h3 className="font-pixel text-[10px] text-muted mb-3">{t("about.interestsTitle")}</h3>
            <div className="flex flex-wrap gap-2">
              {interests.map((item, i) => (
                <Tag key={item} accent={ACCENT_CYCLE[i % ACCENT_CYCLE.length]}>
                  {item}
                </Tag>
              ))}
            </div>
          </div>
        </Panel>

        {/* Player card */}
        <Panel title={t("about.playerCard")} accent="yellow" className="lg:col-span-5">
          <div className="flex justify-center">
            <div className="flex items-end justify-center w-32 h-36 bg-sky border-4 border-edge scanlines">
              <PixelAvatar className="w-24 h-28" title={t("hero.avatarAlt")} />
            </div>
          </div>

          <dl className="mt-6 divide-y-2 divide-dashed divide-[color:var(--edge)] border-y-2 border-dashed border-edge">
            {stats.map((s) => (
              <div key={s.label} className="flex items-center justify-between gap-4 py-2.5">
                <dt className="font-pixel text-[9px] text-muted">{s.label}</dt>
                <dd className="font-retro text-xl text-ink text-right">{s.value}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-6">
            <h3 className="font-pixel text-[10px] text-muted mb-3">{t("about.stackTitle")}</h3>
            <div className="flex flex-wrap gap-2">
              {STACK.map((s) => (
                <Tag key={s}>{s}</Tag>
              ))}
            </div>
          </div>
        </Panel>
      </div>
    </Section>
  );
}
