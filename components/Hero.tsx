"use client";

import { Download, MapPin } from "lucide-react";
import NightShiftGame from "./night/NightShiftGame";
import ProfilePhoto from "./night/ProfilePhoto";
import { CamButton } from "./night/ui";
import { useApp } from "@/context/AppContext";

export default function Hero() {
  const { t } = useApp();

  return (
    <section id="inicio" className="pt-8 pb-16 sm:pt-12 sm:pb-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Credencial del guardia */}
          <div className="lg:col-span-5 space-y-6">
            <p className="flex items-center gap-2 font-retro text-xl text-muted uppercase tracking-wider">
              <span aria-hidden className="block w-2.5 h-2.5 bg-phos" />
              {t("hero.status")}
            </p>

            <div className="flex items-end gap-5">
              <div className="shrink-0">
                <p className="font-retro text-base text-muted uppercase mb-1">{t("hero.badge")}</p>
                <ProfilePhoto alt={t("hero.photoAlt")} noPhotoLabel={t("hero.noPhoto")} className="w-24 h-28 sm:w-28 sm:h-32" />
              </div>
              <h1>
                <span className="block text-muted text-lg">{t("hero.greeting")}</span>
                <span className="block font-retro text-5xl sm:text-7xl leading-none tracking-wide text-ink vhs-text animate-flicker">
                  {t("hero.name")}
                </span>
              </h1>
            </div>

            <p className="font-retro text-2xl leading-tight text-ink uppercase">{t("hero.role")}</p>

            <p className="text-lg text-muted leading-relaxed border-l-2 border-rec pl-4">{t("hero.tagline")}</p>

            <p className="inline-flex items-center gap-2 font-retro text-xl text-ink uppercase">
              <MapPin className="w-4 h-4 text-rec" />
              {t("hero.location")}
            </p>

            <div className="flex flex-wrap gap-3 pt-1">
              <CamButton href="/cv.pdf" download variant="primary" className="px-5 py-3 text-2xl">
                <Download className="w-5 h-5" />
                {t("hero.downloadCv")}
              </CamButton>
              <CamButton href="#projects" className="px-5 py-3 text-2xl">
                {t("hero.viewProjects")} ▼
              </CamButton>
            </div>
          </div>

          {/* Mini juego */}
          <div className="lg:col-span-7">
            <NightShiftGame />
          </div>
        </div>
      </div>
    </section>
  );
}
