"use client";

import { useEffect, useRef, useState } from "react";
import Creature, { type CreatureId } from "./Creature";
import { useApp } from "@/context/AppContext";

export type LurkVariant = "peek-left" | "peek-right" | "hang" | "eyes-left" | "eyes-right" | "walk";

/**
 * Personaje que aparece cuando la sección entra en pantalla (como escena post créditos).
 * Va detrás del contenido (z-0), así que nunca tapa texto ni botones.
 */
export default function Lurker({
  creature,
  variant,
  time,
  top = "35%",
}: {
  creature: CreatureId;
  variant: LurkVariant;
  time: string;
  top?: string;
}) {
  const { t } = useApp();
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), {
      threshold: 0.2,
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const base = "absolute transition-all ease-out";
  const size = "h-[min(46vh,360px)] aspect-[100/160]";

  let figure: React.ReactNode = null;
  switch (variant) {
    case "peek-left":
      figure = (
        <div
          className={`${base} ${size} left-0 duration-[1400ms] origin-bottom-left`}
          style={{ top, transform: visible ? "translateX(-38%) rotate(9deg)" : "translateX(-115%) rotate(0deg)" }}
        >
          <Creature id={creature} className="w-full h-full" />
        </div>
      );
      break;
    case "peek-right":
      figure = (
        <div
          className={`${base} ${size} right-0 duration-[1400ms] origin-bottom-right`}
          style={{ top, transform: visible ? "translateX(38%) rotate(-9deg)" : "translateX(115%) rotate(0deg)" }}
        >
          <Creature id={creature} className="w-full h-full" />
        </div>
      );
      break;
    case "hang":
      figure = (
        <div
          className={`${base} ${size} right-[6%] top-0 duration-[1600ms]`}
          style={{ transform: visible ? "translateY(-28%) rotate(180deg)" : "translateY(-105%) rotate(180deg)" }}
        >
          <Creature id={creature} className="w-full h-full animate-sway" />
        </div>
      );
      break;
    case "eyes-left":
    case "eyes-right": {
      const side = variant === "eyes-left" ? "left-[2%]" : "right-[2%]";
      figure = (
        <div className={`absolute ${side} w-24 sm:w-28 h-44 sm:h-52`} style={{ top }}>
          {/* Puerta oscura en la pared */}
          <div className="absolute inset-0 border-[6px] border-[#1d2521] bg-[linear-gradient(180deg,#000_0%,#070a08_100%)] shadow-[inset_0_0_30px_#000]" />
          <div
            className={`absolute inset-0 flex items-start justify-center pt-10 transition-opacity duration-[1800ms] ${visible ? "opacity-100" : "opacity-0"}`}
          >
            <Creature id={creature} className="w-full h-full opacity-95" />
          </div>
        </div>
      );
      break;
    }
    case "walk":
      figure = (
        <div className={`absolute bottom-0 left-0 ${size} ${visible ? "animate-walk" : "opacity-0"}`}>
          <Creature id={creature} className="w-full h-full animate-jitter" />
        </div>
      );
      break;
  }

  const labelSide = variant === "peek-left" || variant === "eyes-left" || variant === "walk" ? "left-4" : "right-4";

  return (
    <div ref={ref} aria-hidden className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {figure}
      <p
        className={`absolute ${labelSide} bottom-6 flex items-center gap-2 font-retro text-lg uppercase text-rec transition-opacity duration-700 ${
          visible ? "opacity-90 delay-700" : "opacity-0"
        }`}
      >
        <span className="block w-2 h-2 rounded-full bg-rec animate-rec" />
        {t("lurk.motion")} · {time}
      </p>
    </div>
  );
}
