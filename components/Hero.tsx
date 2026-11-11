"use client";

import { Download, MapPin } from "lucide-react";
import NightShiftGame from "./night/NightShiftGame";
import OfficeWall from "./night/OfficeWall";
import ProfilePhoto from "./night/ProfilePhoto";
import { CamButton } from "./night/ui";
import { useApp } from "@/context/AppContext";

export default function Hero() {
  const { t } = useApp();

  return (
    // La oficina siempre está de noche ("dark" fija los colores oscuros en esta sección)
    <section id="inicio" className="dark wall-tiles relative overflow-hidden text-ink pb-16 sm:pb-20">
      <OfficeWall t={t} />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Credencial del guardia */}
          <div className="lg:col-span-5 space-y-6">
            <p className="flex items-center gap-2 font-retro text-xl text-muted uppercase tracking-wider">
              <span aria-hidden className="block w-2.5 h-2.5 bg-phos" />
              {t("hero.status")}
            </p>

            {/* Carnet colgado */}
            <div className="relative w-fit">
              <div aria-hidden className="absolute -top-6 left-1/2 -translate-x-1/2 w-3 h-6 bg-[#7a1f1a]" />
              <div className="flex items-end gap-5 p-4 pr-6 bg-[#dcd6c3] text-[#1c1a16] shadow-[0_12px_30px_rgba(0,0,0,.6)] -rotate-1">
                <ProfilePhoto alt={t("hero.photoAlt")} noPhotoLabel={t("hero.noPhoto")} className="w-24 h-28 sm:w-28 sm:h-32" />
                <div>
                  <p className="font-typewriter text-xs uppercase tracking-wider text-[#5a5446]">{t("hero.badge")}</p>
                  <h1>
                    <span className="block font-typewriter text-sm text-[#5a5446]">{t("hero.greeting")}</span>
                    <span className="block font-retro text-5xl sm:text-6xl leading-none tracking-wide">{t("hero.name")}</span>
                  </h1>
                  <p className="mt-1 font-typewriter text-[11px] uppercase text-[#5a5446]">#0617 · {t("nav.shift")}</p>
                </div>
              </div>
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

          {/* Monitor sobre el escritorio */}
          <div className="lg:col-span-7">
            <NightShiftGame />
            <div aria-hidden className="h-4 bg-gradient-to-b from-[#3a3326] to-[#1f1b14] shadow-[0_14px_24px_rgba(0,0,0,.6)]" />
            <div aria-hidden className="hidden sm:flex justify-between px-6">
              <span className="block w-3 h-10 bg-[#1f1b14]" />
              <span className="block w-3 h-10 bg-[#1f1b14]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
