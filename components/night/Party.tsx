import type { CSSProperties } from "react";

// Decoración de "la fiesta de lanzamiento que nunca terminó". Todo es original (SVG/CSS).
export const PARTY = {
  red: "#ff4b5c",
  yellow: "#ffc93c",
  blue: "#3fa7ff",
  purple: "#9b5de5",
  green: "#2ee6a6",
  orange: "#ff8a3d",
  pink: "#ff6fb5",
};
const ALL = Object.values(PARTY);

/* ---------- Globos ---------- */

export function Balloon({
  color,
  deflated = false,
  className = "",
  style,
}: {
  color: string;
  deflated?: boolean;
  className?: string;
  style?: CSSProperties;
}) {
  if (deflated) {
    // Globo desinflado tirado en el piso
    return (
      <svg viewBox="0 0 80 40" className={className} style={style} aria-hidden>
        <path d="M6 34c4-14 18-22 32-20 10 1 16 8 14 14-2 7-12 9-22 8-9-1-17 1-24-2Z" fill={color} opacity="0.75" />
        <path d="M14 28c8-6 18-8 28-6" stroke="#fff" strokeOpacity="0.25" strokeWidth="2" fill="none" />
        <path d="M52 28c8 2 14 4 26 3" stroke="#111" strokeOpacity="0.6" strokeWidth="1.2" fill="none" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 60 130" className={className} style={style} aria-hidden>
      <path d="M30 64c4 14-6 22 0 36s-4 20 0 30" stroke="#0b0f0d" strokeOpacity="0.75" strokeWidth="1.2" fill="none" />
      <ellipse cx="30" cy="31" rx="23" ry="28" fill={color} />
      <ellipse cx="30" cy="31" rx="23" ry="28" fill="url(#balloon-shade)" />
      <ellipse cx="21" cy="19" rx="5" ry="9" fill="#fff" opacity="0.35" transform="rotate(-20 21 19)" />
      <polygon points="26,58 34,58 30,64" fill={color} />
      <defs>
        <radialGradient id="balloon-shade" cx="35%" cy="30%" r="75%">
          <stop offset="0.55" stopColor="#000" stopOpacity="0" />
          <stop offset="1" stopColor="#000" stopOpacity="0.45" />
        </radialGradient>
      </defs>
    </svg>
  );
}

/** Racimo de 3 globos flotando */
export function BalloonCluster({
  colors = [PARTY.red, PARTY.yellow, PARTY.blue],
  className = "",
}: {
  colors?: string[];
  className?: string;
}) {
  const layout = [
    { left: "0%", top: "10%", rot: -10, delay: "0s" },
    { left: "30%", top: "0%", rot: 4, delay: "1.2s" },
    { left: "58%", top: "14%", rot: 12, delay: "2.1s" },
  ];
  return (
    // Quien lo usa define la posición (absolute); los globos se ubican dentro
    <div aria-hidden className={`w-32 h-56 ${className}`}>
      {colors.slice(0, 3).map((c, i) => (
        <div
          key={i}
          className="absolute w-14 animate-float"
          style={{ left: layout[i].left, top: layout[i].top, transform: `rotate(${layout[i].rot}deg)`, animationDelay: layout[i].delay }}
        >
          <Balloon color={c} className="w-full h-auto" />
        </div>
      ))}
    </div>
  );
}

/* ---------- Guirnaldas (luces y banderines) ---------- */

// Punto sobre la cuerda (curva cuadrática que cuelga): t ∈ [0,1]
const sagY = (t: number, sag: number) => 2 + 4 * sag * t * (1 - t);

function Rope({ sag }: { sag: number }) {
  return (
    <svg className="absolute inset-0 w-full h-full" viewBox={`0 0 100 ${sag + 10}`} preserveAspectRatio="none" aria-hidden>
      <path d={`M0 2 Q50 ${2 * sag + 2} 100 2`} fill="none" stroke="#0b0f0d" strokeWidth="2" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}

/** Guirnalda de bombillos de colores (algunos fundidos) */
export function StringLights({ bulbs = 18, sag = 26, className = "" }: { bulbs?: number; sag?: number; className?: string }) {
  return (
    <div aria-hidden className={`relative w-full ${className}`} style={{ height: sag + 18 }}>
      <Rope sag={sag} />
      {Array.from({ length: bulbs - 1 }).map((_, k) => {
        const i = k + 1;
        const t = i / bulbs;
        const color = ALL[i % ALL.length];
        const dead = i % 7 === 3; // bombillo fundido
        return (
          <span
            key={i}
            className={`absolute w-2.5 h-3.5 rounded-b-full -translate-x-1/2 ${dead ? "" : "animate-led"}`}
            style={{
              left: `${t * 100}%`,
              top: sagY(t, sag),
              background: dead ? "#2a2a2a" : color,
              boxShadow: dead ? "none" : `0 0 10px 3px ${color}`,
              animationDelay: `${(i * 0.37) % 1.4}s`,
              animationDuration: `${1.2 + (i % 4) * 0.4}s`,
            }}
          />
        );
      })}
    </div>
  );
}

/** Banderines de colores (uno roto, colgando) */
export function Garland({ flags = 16, sag = 30, className = "" }: { flags?: number; sag?: number; className?: string }) {
  return (
    <div aria-hidden className={`relative w-full ${className}`} style={{ height: sag + 34 }}>
      <Rope sag={sag} />
      {Array.from({ length: flags - 1 }).map((_, k) => {
        const i = k + 1;
        const t = i / flags;
        const torn = i === Math.floor(flags * 0.7);
        return (
          <span
            key={i}
            className="absolute w-5 h-7 -translate-x-1/2 origin-top"
            style={{
              left: `${t * 100}%`,
              top: sagY(t, sag) - 1,
              background: ALL[i % ALL.length],
              clipPath: "polygon(0 0,100% 0,50% 100%)",
              transform: `translateX(-50%) rotate(${torn ? 38 : i % 2 ? 4 : -4}deg)`,
              opacity: 0.9,
              filter: "saturate(0.85) brightness(0.9)",
            }}
          />
        );
      })}
    </div>
  );
}

/* ---------- Otros ---------- */

export function PartyHat({ color = PARTY.purple, className = "" }: { color?: string; className?: string }) {
  return (
    <svg viewBox="0 0 40 50" className={className} aria-hidden>
      <polygon points="20,4 36,46 4,46" fill={color} />
      <path d="M13 22l14 6M9 33l22 8" stroke="#fff" strokeOpacity="0.5" strokeWidth="3" />
      <circle cx="20" cy="5" r="4" fill={PARTY.yellow} />
      <rect x="3" y="44" width="34" height="4" rx="2" fill="#0b0f0d" opacity="0.6" />
    </svg>
  );
}

export function NeonSign({ children, color = PARTY.pink, className = "" }: { children: React.ReactNode; color?: string; className?: string }) {
  return (
    <div aria-hidden className={`neon-tube px-4 py-2 animate-flicker ${className}`} style={{ "--neon": color } as CSSProperties}>
      <span className="neon font-retro text-2xl sm:text-3xl uppercase tracking-widest whitespace-nowrap" style={{ "--neon": color } as CSSProperties}>
        {children}
      </span>
    </div>
  );
}

/** Puñado de confeti esparcido */
export function Confetti({ count = 26, className = "" }: { count?: number; className?: string }) {
  return (
    <div aria-hidden className={`pointer-events-none ${className}`}>
      {Array.from({ length: count }).map((_, i) => (
        <span
          key={i}
          className="absolute block w-1.5 h-2.5"
          style={{
            left: `${(i * 37) % 100}%`,
            top: `${(i * 53) % 100}%`,
            background: ALL[i % ALL.length],
            transform: `rotate(${(i * 47) % 180}deg)`,
            opacity: 0.85,
          }}
        />
      ))}
    </div>
  );
}

/** Decoración de fondo para cada sección (va detrás del contenido) */
export function SectionParty({
  top = "lights",
  balloons,
  deflated,
  colors,
}: {
  top?: "lights" | "garland" | "none";
  balloons?: "left" | "right";
  deflated?: "left" | "right";
  colors?: string[];
}) {
  return (
    <div aria-hidden className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {top === "lights" && <StringLights className="absolute top-0 left-0 opacity-90" />}
      {top === "garland" && <Garland className="absolute top-0 left-0 opacity-90" />}
      {balloons && (
        <BalloonCluster
          colors={colors}
          className={`absolute top-28 scale-75 sm:scale-100 ${balloons === "left" ? "-left-6 sm:left-2 origin-top-left" : "-right-6 sm:right-2 origin-top-right"}`}
        />
      )}
      {deflated && (
        <Balloon
          deflated
          color={colors?.[0] ?? PARTY.red}
          className={`absolute bottom-3 w-24 ${deflated === "left" ? "left-4" : "right-4"}`}
        />
      )}
    </div>
  );
}
