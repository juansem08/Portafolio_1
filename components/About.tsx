"use client";

import ProfilePhoto from "./night/ProfilePhoto";
import { Section, SectionHeader } from "./night/ui";
import Lurker from "./night/Lurker";
import { useApp } from "@/context/AppContext";

const STACK = ["Java", "TypeScript", "Python", "JavaScript", "SQL", "Next.js", "Spring Boot", "Tailwind CSS"];

export default function About() {
  const { t } = useApp();
  const interests = t("about.interestsList") as string[];
  const year = new Date().getFullYear();

  const stats = [
    { label: t("about.classLabel"), value: t("about.classValue") },
    { label: t("about.semesterLabel"), value: t("about.semesterValue") },
    { label: t("about.baseLabel"), value: t("about.baseValue") },
    { label: t("about.educationLabel"), value: t("about.educationValue") },
  ];

  return (
    <Section id="about" lurker={<Lurker creature="segfault" variant="peek-right" time="01:12 AM" top="18%" />}>
      <SectionHeader cam={t("about.level")} room={t("rooms.about")} title={t("about.title")} subtitle={t("about.subtitle")} />

      {/* Recorte de periódico */}
      <article className="paper max-w-5xl mx-auto px-5 sm:px-10 py-8 sm:py-10 -rotate-[0.4deg]">
        <span aria-hidden className="tape -top-3 left-10 -rotate-6" />
        <span aria-hidden className="tape -top-3 right-10 rotate-3" />

        {/* Cabezote */}
        <header className="border-y-4 border-double border-[#1c1a16] py-3 text-center">
          <p className="font-news font-bold text-4xl sm:text-6xl tracking-wide uppercase">{t("about.news.masthead")}</p>
          <p className="mt-2 flex flex-wrap justify-center gap-x-6 font-typewriter text-xs uppercase tracking-wider text-[#4a4537]">
            <span>{t("about.news.edition")}</span>
            <span>{year}</span>
          </p>
        </header>

        <h3 className="mt-6 font-news font-bold text-2xl sm:text-4xl uppercase leading-tight text-center">{t("about.news.headline")}</h3>
        <p className="mt-2 font-news italic text-lg text-center text-[#3a3529]">{t("about.news.subhead")}</p>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Foto + ficha */}
          <div className="lg:col-span-5 space-y-5">
            <figure>
              <ProfilePhoto alt={t("hero.photoAlt")} noPhotoLabel={t("hero.noPhoto")} className="w-full h-64" sizes="400px" />
              <figcaption className="mt-2 font-news italic text-sm text-[#3a3529] border-b border-[#1c1a16]/40 pb-2">
                {t("about.news.caption")}
              </figcaption>
            </figure>

            <div className="border-2 border-[#1c1a16] p-4">
              <p className="font-news font-bold uppercase tracking-wider text-center border-b border-[#1c1a16] pb-2">
                {t("about.playerCard")}
              </p>
              <dl className="mt-2">
                {stats.map((s) => (
                  <div key={s.label} className="flex justify-between gap-4 py-1.5 border-b border-dotted border-[#1c1a16]/50 last:border-0">
                    <dt className="font-typewriter text-xs uppercase text-[#4a4537]">{s.label}</dt>
                    <dd className="font-news text-right">{s.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          {/* Artículo */}
          <div className="lg:col-span-7">
            <div className="font-news text-[17px] leading-relaxed sm:columns-2 gap-8 [column-rule:1px_solid_rgba(28,26,22,.3)]">
              <p className="first-letter:float-left first-letter:font-bold first-letter:text-6xl first-letter:leading-[0.8] first-letter:mr-2 first-letter:mt-1">
                {t("about.mainBio")}
              </p>
              <p className="mt-4">
                <strong>{t("about.card1Title")}.</strong> {t("about.card1Desc")}
              </p>
              <p className="mt-4">
                <strong>{t("about.card2Title")}.</strong> {t("about.card2Desc")}
              </p>
              <p className="mt-4">
                <strong className="font-typewriter text-sm uppercase">{t("about.interestsTitle")}:</strong> {interests.join(" · ")}.
              </p>
              <p className="mt-4">
                <strong className="font-typewriter text-sm uppercase">{t("about.stackTitle")}:</strong> {STACK.join(" · ")}.
              </p>
            </div>

            {/* Aviso clasificado marcado en rojo */}
            <div className="relative mt-10 mx-auto max-w-sm">
              <svg aria-hidden className="absolute -inset-x-6 -inset-y-5 w-[calc(100%+3rem)] h-[calc(100%+2.5rem)] pointer-events-none" viewBox="0 0 200 100" preserveAspectRatio="none">
                <path d="M100 4 C160 2 196 22 194 50 C192 82 150 97 96 96 C40 95 5 80 6 50 C7 22 44 6 108 7" fill="none" stroke="#b3261e" strokeWidth="2.4" strokeLinecap="round" />
              </svg>
              <div className="border border-[#1c1a16] p-4 text-center">
                <p className="font-news font-bold text-2xl uppercase tracking-widest">{t("about.news.adTitle")}</p>
                <p className="mt-2 font-typewriter text-sm leading-snug">{t("about.news.adBody")}</p>
                <a href="#contact" className="inline-block mt-3 px-3 py-1 font-typewriter text-sm uppercase border border-[#1c1a16] hover:bg-[#1c1a16] hover:text-[#e8e2cf]">
                  {t("about.news.adCta")}
                </a>
              </div>
            </div>
          </div>
        </div>
      </article>
    </Section>
  );
}
