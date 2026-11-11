import Creature from "./Creature";

// Pared de la oficina del guardia: bombillo colgante, cables y pósters (todos originales).
export default function OfficeWall({
  t,
}: {
  t: (key: string) => string;
}) {
  return (
    <div aria-hidden className="relative h-44 sm:h-52 select-none">
      {/* Cables */}
      <svg className="absolute inset-x-0 top-0 w-full h-16" viewBox="0 0 1000 60" preserveAspectRatio="none">
        <path d="M0 8 C180 40 320 4 500 6 M500 6 C640 30 820 2 1000 18" fill="none" stroke="#0b0f0d" strokeWidth="3" />
        <path d="M120 0 C160 30 230 34 300 10" fill="none" stroke="#0b0f0d" strokeWidth="2" />
      </svg>

      {/* Bombillo colgante */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 animate-sway">
        <div className="mx-auto w-[2px] h-16 sm:h-20 bg-[#0b0f0d]" />
        <div className="mx-auto w-4 h-3 bg-[#2a312d]" />
        <div className="relative mx-auto w-7 h-9 rounded-b-full rounded-t-[40%] bg-[#f3ffe9] animate-bulb shadow-[0_0_40px_14px_rgba(220,250,200,0.35)]" />
      </div>
      <div className="pointer-events-none absolute left-1/2 top-16 -translate-x-1/2 w-[520px] h-[260px] rounded-full bg-[radial-gradient(ellipse,rgba(220,250,200,0.16),transparent_65%)] animate-bulb" />

      {/* Póster 1: advertencia */}
      <div className="absolute left-[4%] sm:left-[8%] top-10 w-28 sm:w-32 -rotate-3">
        <span className="tape -top-3 left-1/2 -translate-x-1/2 rotate-2 !w-14 !h-5" />
        <div className="p-2 bg-[#e8c547] text-[#1a1408] shadow-[0_8px_18px_rgba(0,0,0,.6)]" style={{ backgroundImage: "repeating-linear-gradient(135deg,#1a1408 0 8px,transparent 8px 16px)", backgroundSize: "100% 12px", backgroundRepeat: "no-repeat" }}>
          <p className="mt-3 font-typewriter text-[11px] sm:text-xs leading-tight text-center uppercase">{t("decor.poster1")}</p>
          <p className="mt-1 text-center text-lg leading-none">⚠</p>
        </div>
      </div>

      {/* Póster 2: se busca (NULL) */}
      <div className="hidden md:block absolute right-[6%] top-8 w-32 rotate-2">
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

      {/* Póster 3: volante */}
      <div className="hidden lg:block absolute left-[26%] top-14 w-28 rotate-[5deg]">
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
