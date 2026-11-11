import Creature from "./Creature";
import { BalloonCluster, Garland, NeonSign, PARTY, StringLights } from "./Party";

// Pared de la oficina del guardia: la fiesta de lanzamiento que nunca terminó.
// Bombillo colgante, cables, luces de colores, banderines, neón, pancarta y pósters (todo original).
export default function OfficeWall({ t }: { t: (key: string) => string }) {
  return (
    <div aria-hidden className="relative h-56 sm:h-64 select-none">
      {/* Cables */}
      <svg className="absolute inset-x-0 top-0 w-full h-16" viewBox="0 0 1000 60" preserveAspectRatio="none">
        <path d="M0 8 C180 40 320 4 500 6 M500 6 C640 30 820 2 1000 18" fill="none" stroke="#0b0f0d" strokeWidth="3" />
        <path d="M120 0 C160 30 230 34 300 10" fill="none" stroke="#0b0f0d" strokeWidth="2" />
      </svg>

      {/* Luces de colores y banderines */}
      <StringLights bulbs={24} sag={22} className="absolute top-1 left-0" />
      <Garland flags={22} sag={40} className="absolute top-6 left-0 opacity-80" />

      {/* Bombillo colgante */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 animate-sway z-[2]">
        <div className="mx-auto w-[2px] h-16 sm:h-20 bg-[#0b0f0d]" />
        <div className="mx-auto w-4 h-3 bg-[#2a312d]" />
        <div className="relative mx-auto w-7 h-9 rounded-b-full rounded-t-[40%] bg-[#f3ffe9] animate-bulb shadow-[0_0_40px_14px_rgba(220,250,200,0.35)]" />
      </div>
      <div className="pointer-events-none absolute left-1/2 top-16 -translate-x-1/2 w-[520px] h-[260px] rounded-full bg-[radial-gradient(ellipse,rgba(220,250,200,0.16),transparent_65%)] animate-bulb" />

      {/* Letrero de neón */}
      <NeonSign color={PARTY.pink} className="hidden lg:block absolute left-[34%] top-28 -rotate-2">
        {t("decor.neon")}
      </NeonSign>

      {/* Pancarta rota, colgando de una sola esquina */}
      <div className="hidden md:block absolute right-[17%] top-[78px] origin-top-left rotate-[14deg]">
        <div
          className="px-4 py-1.5 font-news font-bold text-lg uppercase tracking-wider text-[#2a1408] shadow-[0_8px_16px_rgba(0,0,0,.5)]"
          style={{ background: "linear-gradient(90deg,#ff6fb5,#ffc93c 50%,#3fa7ff)", clipPath: "polygon(0 0,100% 6%,97% 50%,100% 94%,0 100%)" }}
        >
          {t("decor.banner")}
        </div>
      </div>

      {/* Globos */}
      <BalloonCluster
        colors={[PARTY.red, PARTY.yellow, PARTY.blue]}
        className="absolute -left-4 sm:left-[2%] top-24 scale-[0.65] sm:scale-90 origin-top-left"
      />
      <BalloonCluster
        colors={[PARTY.purple, PARTY.pink, PARTY.green]}
        className="hidden md:block absolute right-0 top-28 scale-75 origin-top-right"
      />

      {/* Póster 1: advertencia */}
      <div className="absolute left-[24%] sm:left-[14%] top-[118px] w-28 sm:w-32 -rotate-3">
        <span className="tape -top-3 left-1/2 -translate-x-1/2 rotate-2 !w-14 !h-5" />
        <div
          className="p-2 bg-[#e8c547] text-[#1a1408] shadow-[0_8px_18px_rgba(0,0,0,.6)]"
          style={{ backgroundImage: "repeating-linear-gradient(135deg,#1a1408 0 8px,transparent 8px 16px)", backgroundSize: "100% 12px", backgroundRepeat: "no-repeat" }}
        >
          <p className="mt-3 font-typewriter text-[11px] sm:text-xs leading-tight text-center uppercase">{t("decor.poster1")}</p>
          <p className="mt-1 text-center text-lg leading-none">⚠</p>
        </div>
      </div>

      {/* Póster 2: se busca (NULL) */}
      <div className="hidden md:block absolute right-[8%] top-[112px] w-32 rotate-2">
        <span className="tape -top-3 left-3 -rotate-6 !w-12 !h-5" />
        <div className="paper p-2 text-center">
          <p className="font-news font-bold text-lg leading-none tracking-wider">{t("decor.wanted")}</p>
          <div className="relative mx-auto mt-1 h-16 w-20 bg-[#2a2a24] overflow-hidden">
            <Creature id="null" className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[95%]" />
          </div>
          <p className="mt-1 font-typewriter text-sm leading-none">NULL</p>
          <p className="font-typewriter text-[10px] leading-tight opacity-80">{t("decor.wantedSeen")}</p>
        </div>
      </div>

      {/* Póster 3: volante (debajo del neón) */}
      <div className="hidden xl:block absolute left-[38%] top-[172px] w-28 rotate-[5deg]">
        <span className="tape -top-3 right-2 rotate-6 !w-12 !h-5" />
        <div className="paper p-2">
          <p className="font-news font-bold text-sm leading-tight uppercase">{t("decor.flyerTitle")}</p>
          <p className="mt-1 font-typewriter text-[10px] leading-tight">{t("decor.flyerSub")}</p>
          <p className="mt-1 font-retro text-lg leading-none text-[#b3261e]">{"{ }"}</p>
        </div>
      </div>
    </div>
  );
}
