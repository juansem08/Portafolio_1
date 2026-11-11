"use client";

import { Utensils, Music } from "lucide-react";
import ProfilePhoto from "./night/ProfilePhoto";
import { Section, SectionHeader, Feed, Tag } from "./night/ui";
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
      <SectionHeader cam={t("about.level")} room={t("rooms.about")} title={t("about.title")} subtitle={t("about.subtitle")} />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <Feed label={t("about.fileLabel")} className="lg:col-span-7">
          <p className="text-base sm:text-lg leading-relaxed text-ink">{t("about.mainBio")}</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            {[
              { icon: Utensils, title: t("about.card1Title"), desc: t("about.card1Desc") },
              { icon: Music, title: t("about.card2Title"), desc: t("about.card2Desc") },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex gap-3 p-4 bg-panel2 border border-edge">
                <Icon className="w-5 h-5 shrink-0 text-rec mt-0.5" />
                <div>
                  <h3 className="font-retro text-xl uppercase leading-tight text-ink">{title}</h3>
                  <p className="mt-1 text-sm text-muted">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          <h3 className="mt-6 mb-3 font-retro text-lg text-muted uppercase tracking-wider">{t("about.interestsTitle")}</h3>
          <div className="flex flex-wrap gap-2">
            {interests.map((item) => (
              <Tag key={item}>{item}</Tag>
            ))}
          </div>
        </Feed>

        <Feed label={t("about.playerCard")} className="lg:col-span-5">
          <div className="flex justify-center">
            <ProfilePhoto alt={t("hero.photoAlt")} noPhotoLabel={t("hero.noPhoto")} className="w-36 h-44" sizes="200px" />
          </div>

          <dl className="mt-6 border-t border-edge">
            {stats.map((s) => (
              <div key={s.label} className="flex items-center justify-between gap-4 py-2.5 border-b border-dashed border-edge">
                <dt className="font-retro text-lg text-muted uppercase">{s.label}</dt>
                <dd className="font-retro text-xl text-ink text-right">{s.value}</dd>
              </div>
            ))}
          </dl>

          <h3 className="mt-6 mb-3 font-retro text-lg text-muted uppercase tracking-wider">{t("about.stackTitle")}</h3>
          <div className="flex flex-wrap gap-2">
            {STACK.map((s) => (
              <Tag key={s}>{s}</Tag>
            ))}
          </div>
        </Feed>
      </div>
    </Section>
  );
}
