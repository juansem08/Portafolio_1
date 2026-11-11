// Criaturas originales del laboratorio: siluetas "glitch" con ojos brillantes.
// NULL (ojos blancos) y SEGFAULT (ojos rojos).
export type CreatureId = "null" | "segfault";

const EYES: Record<CreatureId, string> = {
  null: "#e8fff0",
  segfault: "#ff3b3b",
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
      {id === "null" ? (
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
        {id === "null" ? (
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
