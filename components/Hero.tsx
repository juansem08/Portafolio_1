"use client";

import { Download, MapPin } from "lucide-react";
import PixelAvatar from "./arcade/PixelAvatar";
import ArcadeGame from "./arcade/ArcadeGame";
import { PixelButton } from "./arcade/ui";
import { useApp } from "@/context/AppContext";

export default function Hero() {
  const { t } = useApp();

  return (
    <section id="inicio" className="pt-8 pb-16 sm:pt-14 sm:pb-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Presentación */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <span className="font-pixel text-[10px] px-3 py-2 bg-yellow text-[#241b4b] border-4 border-edge">
                {t("hero.player")}
              </span>
              <span className="inline-flex items-center gap-2 font-retro text-xl text-ink">
                <span className="block w-3 h-3 bg-mint border-2 border-edge animate-blink" aria-hidden />
                {t("hero.status")}
              </span>
            </div>

            <div className="flex items-end gap-5">
              <div className="shrink-0 flex items-end justify-center w-24 h-28 sm:w-28 sm:h-32 bg-sky border-4 border-edge shadow-[6px_6px_0_0_var(--edge)]">
                <PixelAvatar className="w-16 h-[76px] sm:w-20 sm:h-[94px]" title={t("hero.avatarAlt")} />
              </div>
              <h1 className="font-pixel leading-snug text-ink">
                <span className="block text-xs sm:text-sm text-muted mb-3">{t("hero.greeting")}</span>
                <span className="block text-2xl sm:text-4xl text-pink">{t("hero.name")}</span>
              </h1>
            </div>

            <p className="font-pixel text-[11px] sm:text-xs leading-relaxed text-ink">{t("hero.role")}</p>

            <p className="text-lg text-muted leading-relaxed border-l-4 border-violet pl-4">{t("hero.tagline")}</p>

            <p className="inline-flex items-center gap-2 font-retro text-xl text-ink px-3 py-1 bg-panel border-2 border-edge">
              <MapPin className="w-4 h-4 text-pink" />
              {t("hero.location")}
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <PixelButton href="/cv.pdf" download accent="yellow" className="px-5 py-4">
                <Download className="w-4 h-4" />
                {t("hero.downloadCv")}
              </PixelButton>
              <PixelButton href="#projects" className="px-5 py-4">
                {t("hero.viewProjects")} ▼
              </PixelButton>
            </div>
          </div>

          {/* Mini juego */}
          <div className="lg:col-span-7">
            <ArcadeGame />
          </div>
        </div>
      </div>
    </section>
  );
}
