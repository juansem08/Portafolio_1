// Criaturas originales del laboratorio: siluetas "glitch" con ojos brillantes.
// NULL (ojos blancos) y SEGFAULT (ojos rojos).
export type CreatureId = "null" | "segfault" | "leak" | "notfound";

const EYES: Record<CreatureId, string> = {
  null: "#e8fff0",
  segfault: "#ff3b3b",
  leak: "#ffb000",
  notfound: "#5ee7ff",
};

const RIM = "rgba(200,220,205,0.22)";

// Siluetas de LEAK (masa que gotea, tres ojos) y 404 (figura pequeña de un solo ojo)
const EXTRA: Partial<Record<CreatureId, { body: string; eyes: { cx: number; cy: number; rx: number; ry: number }[] }>> = {
  leak: {
    body: "M8 150C6 112 20 72 50 70c30-2 44 36 42 80-2 4-6 6-8 2l-2-10-3 22c-1 4-5 4-6 0l-2-18-4 8c-2 3-5 2-5-1l-1-12-5 26c-1 4-5 4-6 0l-3-24-4 10c-1 3-5 3-6 0l-2-12-3 16c-1 4-5 4-6 0Z",
    eyes: [
      { cx: 38, cy: 96, rx: 3.4, ry: 3.4 },
      { cx: 56, cy: 92, rx: 4.2, ry: 4.2 },
      { cx: 70, cy: 104, rx: 2.6, ry: 2.6 },
    ],
  },
  notfound: {
    body: "M50 58c11 0 19 9 19 20 0 9-5 15-11 18l6 4c4 3 6 9 7 16l4 40h-6l-4-34-3-2-1 40h-8l-3-28h-0l-3 28h-8l-1-40-3 2-4 34h-6l4-40c1-7 3-13 7-16l6-4c-6-3-11-9-11-18 0-11 8-20 19-20Z",
    eyes: [{ cx: 50, cy: 76, rx: 5, ry: 5.5 }],
  },
};

export default function Creature({
  id,
  className = "",
  title,
}: {
  id: CreatureId;
  className?: string;
  title?: string;
}) {
  const eye = EYES[id];
  const glowId = `glow-${id}`;
  return (
    <svg
      viewBox="0 0 100 160"
      className={className}
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      style={{ filter: "drop-shadow(2px 0 rgba(255,59,59,.35)) drop-shadow(-2px 0 rgba(94,231,255,.3))" }}
    >
      {title && <title>{title}</title>}
      <defs>
        <filter id={glowId} x="-200%" y="-200%" width="500%" height="500%">
          <feGaussianBlur stdDeviation="2.2" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      {EXTRA[id] ? (
        <path fill="#000" stroke={RIM} strokeWidth="1.2" d={EXTRA[id]!.body} />
      ) : id === "null" ? (
        // Alto, encorvado, brazos largos
        <path
          fill="#000"
          stroke="rgba(200,220,205,0.22)"
          strokeWidth="1.2"
          d="M50 8C63 8 71 21 70 35c-1 12-7 20-12 24l15 6c8 4 12 14 13 29l3 56h-8l-4-46-5-4-2 55H58l-6-37h-4l-6 37H30l-2-55-5 4-4 46h-8l3-56c1-15 5-25 13-29l15-6c-5-4-11-12-12-24C30 21 37 8 50 8Z"
        />
      ) : (
        // Más ancho, cabeza inclinada, con "cables" colgando
        <path
          fill="#000"
          d="M44 14c14-6 30 2 31 18 1 11-4 19-10 23l14 9c7 5 10 13 10 25l-2 61h-9l-3-44-4-3v49H63l-5-34h-6l-5 34H36V96l-4 3-3 44h-9l-2-61c0-12 3-20 10-25l12-8c-7-4-11-12-11-22 0-6 4-11 11-13Zm-6 120 2 18M66 128l-2 22"
          stroke="rgba(200,220,205,0.22)"
          strokeWidth="1.2"
        />
      )}
      <g filter={`url(#${glowId})`} fill={eye}>
        {EXTRA[id] ? (
          EXTRA[id]!.eyes.map((e) => <ellipse key={`${e.cx}-${e.cy}`} {...e} />)
        ) : id === "null" ? (
          <>
            <ellipse cx="43" cy="33" rx="3.6" ry="2.4" />
            <ellipse cx="57" cy="33" rx="3.6" ry="2.4" />
          </>
        ) : (
          <>
            <ellipse cx="50" cy="31" rx="3.2" ry="3.2" />
            <ellipse cx="62" cy="29" rx="2.4" ry="2.4" />
          </>
        )}
      </g>
    </svg>
  );
}
