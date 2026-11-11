"use client";

import { useEffect, useRef, useState } from "react";
import Creature from "./night/Creature";
import { useApp } from "@/context/AppContext";

// Escena post créditos: aparece después del pie de página.
export default function PostCredits() {
  const { t } = useApp();
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), { threshold: 0.5 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section id="fin" ref={ref} aria-label={t("postcredits.label")} className="dark relative h-72 sm:h-80 overflow-hidden bg-black text-ink">
      <div aria-hidden className="noise absolute inset-0 overflow-hidden [--noise-opacity:0.08]" />

      <div className={`relative z-[2] h-full flex flex-col items-center justify-center text-center px-4 transition-opacity duration-[1500ms] ${visible ? "opacity-100" : "opacity-0"}`}>
        <p className="font-retro text-lg text-muted uppercase tracking-[0.3em]">{t("postcredits.time")}</p>
        <p className="mt-3 font-typewriter text-xl sm:text-2xl">{t("postcredits.line1")}</p>
        <p className={`mt-2 font-typewriter text-base text-muted transition-opacity duration-1000 ${visible ? "opacity-100 delay-[2000ms]" : "opacity-0"}`}>
          {t("postcredits.line2")}
        </p>
      </div>

      {/* 404 cruza la escena en silencio */}
      <div aria-hidden className={`absolute bottom-0 left-0 h-52 sm:h-60 aspect-[100/160] z-[1] ${visible ? "animate-walk" : "opacity-0"}`}>
        <Creature id="notfound" className="w-full h-full animate-jitter" />
      </div>
      {/* Ojos de NULL en la oscuridad */}
      <div aria-hidden className={`absolute top-8 right-[8%] w-24 h-36 transition-opacity duration-[2500ms] ${visible ? "opacity-100 delay-[3000ms]" : "opacity-0"}`}>
        <Creature id="null" className="w-full h-full" />
      </div>
    </section>
  );
}
