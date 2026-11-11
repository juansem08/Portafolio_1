// Avatar de Sebastián en pixel art (12 x 14 pixeles).
// Cada letra del mapa es un color; "." es transparente.
// Para cambiar pelo, piel o ropa, edita los colores en PALETTE.
const SPRITE = [
  "...hhhhhh...",
  "..hhhhhhhh..",
  "..hssssssh..",
  "..sesssses..",
  "..ssssssss..",
  "...ssmmss...",
  "....ssss....",
  "..rrrrrrrr..",
  ".rrrrwwrrrr.",
  ".srrrrrrrrs.",
  "..rrrrrrrr..",
  "..pppppppp..",
  "..ppp..ppp..",
  "..bbb..bbb..",
];

const PALETTE: Record<string, string> = {
  h: "#2b1d16", // pelo
  s: "#c98b5f", // piel
  e: "#1d1b2f", // ojos
  m: "#8a4b3a", // boca
  r: "#ff4f79", // buzo
  w: "#ffc83d", // logo del buzo
  p: "#3a3f8f", // pantalón
  b: "#1d1b2f", // zapatos
};

const RECTS = SPRITE.flatMap((row, y) =>
  row.split("").flatMap((ch, x) => (PALETTE[ch] ? [{ x, y, fill: PALETTE[ch] }] : []))
);

export default function PixelAvatar({
  className = "w-12 h-14",
  facing = "right",
  title,
}: {
  className?: string;
  facing?: "left" | "right";
  title?: string;
}) {
  return (
    <svg
      viewBox="0 0 12 14"
      className={className}
      shapeRendering="crispEdges"
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      style={facing === "left" ? { transform: "scaleX(-1)" } : undefined}
    >
      {title && <title>{title}</title>}
      {RECTS.map((r) => (
        <rect key={`${r.x}-${r.y}`} x={r.x} y={r.y} width={1} height={1} fill={r.fill} />
      ))}
    </svg>
  );
}
