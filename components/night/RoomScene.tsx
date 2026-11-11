import { useId } from "react";

// Ilustraciones de las salas del laboratorio que se ven por las cámaras.
// Todo es SVG propio: pared de baldosas, piso a cuadros en perspectiva y muebles por sala.
export type RoomId = "about" | "projects" | "experience" | "testimonials" | "workspace" | "contact";

const W = 320;
const H = 180;
const VP = { x: 160, y: 30 }; // punto de fuga
const WALL_BOTTOM = 118;

// Piso a cuadros en perspectiva (se calcula una sola vez)
const FLOOR = (() => {
  const rows = [WALL_BOTTOM, 123, 130, 139, 151, 166, 182];
  const cols: number[] = [];
  for (let x = -192; x <= 512; x += 32) cols.push(x);
  const xAt = (x0: number, y: number) => VP.x + ((x0 - VP.x) * (y - VP.y)) / (WALL_BOTTOM - VP.y);
  const cells: { points: string; dark: boolean }[] = [];
  for (let r = 0; r < rows.length - 1; r++) {
    for (let c = 0; c < cols.length - 1; c++) {
      const [y0, y1] = [rows[r], rows[r + 1]];
      const [a, b] = [cols[c], cols[c + 1]];
      cells.push({
        points: `${xAt(a, y0)},${y0} ${xAt(b, y0)},${y0} ${xAt(b, y1)},${y1} ${xAt(a, y1)},${y1}`,
        dark: (r + c) % 2 === 0,
      });
    }
  }
  return cells;
})();

// Colores de la fiesta, un poco apagados por la cámara
const PARTY_C = ["#d9475a", "#d8ab3a", "#3f8fd6", "#8657c4", "#2fbf8c", "#d9783a"];

function SvgBalloon({ x, y, color, len = 30 }: { x: number; y: number; color: string; len?: number }) {
  return (
    <g>
      <path d={`M${x} ${y + 11} q3 ${len / 2} -1 ${len}`} stroke="#0b0f0d" strokeWidth="0.8" fill="none" />
      <ellipse cx={x} cy={y} rx="8" ry="10" fill={color} opacity="0.85" />
      <ellipse cx={x - 3} cy={y - 4} rx="2" ry="3" fill="#fff" opacity="0.3" />
    </g>
  );
}

function SvgHat({ x, y, color }: { x: number; y: number; color: string }) {
  return (
    <g>
      <polygon points={`${x},${y - 14} ${x + 6},${y} ${x - 6},${y}`} fill={color} opacity="0.9" />
      <circle cx={x} cy={y - 14} r="2" fill="#d8ab3a" />
    </g>
  );
}

const C = {
  ink: "#0e1310",
  body: "#3d4a41",
  bodyLight: "#566657",
  paper: "#b9c7b3",
  glow: "#7dff9a",
  red: "#ff3b3b",
  amber: "#ffb000",
};

export default function RoomScene({ id, sign = "" }: { id: RoomId; sign?: string }) {
  const uid = useId().replace(/:/g, "");
  const tiles = `tiles-${uid}`;
  const light = `light-${uid}`;
  const vig = `vig-${uid}`;

  return (
    <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="xMidYMid slice" className="absolute inset-0 w-full h-full" aria-hidden>
      <defs>
        <pattern id={tiles} width="16" height="12" patternUnits="userSpaceOnUse">
          <rect width="16" height="12" fill="#2b3830" />
          <path d="M0 0H16M0 0V12" stroke="#1d2722" strokeWidth="1" />
          <rect x="1" y="1" width="6" height="3" fill="#33433a" opacity="0.5" />
        </pattern>
        <radialGradient id={light} cx="50%" cy="0%" r="85%">
          <stop offset="0" stopColor="#dff7d2" stopOpacity="0.32" />
          <stop offset="0.6" stopColor="#dff7d2" stopOpacity="0.05" />
          <stop offset="1" stopColor="#000" stopOpacity="0" />
        </radialGradient>
        <radialGradient id={vig} cx="50%" cy="50%" r="75%">
          <stop offset="0.55" stopColor="#000" stopOpacity="0" />
          <stop offset="1" stopColor="#000" stopOpacity="0.85" />
        </radialGradient>
      </defs>

      {/* Pared y piso */}
      <rect width={W} height={WALL_BOTTOM} fill={`url(#${tiles})`} />
      {FLOOR.map((cell, i) => (
        <polygon key={i} points={cell.points} fill={cell.dark ? "#141b17" : "#46564b"} />
      ))}
      <rect y={WALL_BOTTOM - 4} width={W} height="4" fill={C.ink} />
      {/* Manchas de humedad */}
      <ellipse cx="60" cy="20" rx="30" ry="14" fill="#000" opacity="0.18" />
      <ellipse cx="275" cy="90" rx="22" ry="30" fill="#000" opacity="0.15" />

      {/* Lámpara del techo */}
      <rect x="135" y="0" width="50" height="4" fill="#cfe8c4" opacity="0.85" className="animate-bulb" />

      {/* Banderines de la fiesta en todas las salas */}
      <path d="M0 8 Q160 34 320 8" fill="none" stroke={C.ink} strokeWidth="1" />
      {Array.from({ length: 13 }).map((_, k) => {
        const tt = (k + 1) / 14;
        const x = tt * 320;
        const y = 8 + 4 * 13 * tt * (1 - tt);
        return <polygon key={k} points={`${x - 5},${y} ${x + 5},${y} ${x},${y + 10}`} fill={PARTY_C[k % PARTY_C.length]} opacity="0.7" />;
      })}

      {id === "about" && <About />}
      {id === "projects" && <Lab />}
      {id === "experience" && <Records />}
      {id === "testimonials" && <Mailbox />}
      {id === "workspace" && <Servers />}
      {id === "contact" && <FrontDesk sign={sign} />}

      <rect width={W} height={H} fill={`url(#${light})`} className="animate-bulb" />
      <rect width={W} height={H} fill={`url(#${vig})`} />
    </svg>
  );
}

/* ---------- Salas ---------- */

function About() {
  return (
    <g stroke={C.ink} strokeWidth="1">
      {/* Archivador */}
      <rect x="22" y="56" width="48" height="76" fill={C.body} />
      {[80, 104].map((y) => (
        <line key={y} x1="22" x2="70" y1={y} y2={y} />
      ))}
      {[66, 90, 114].map((y) => (
        <rect key={y} x="40" y={y} width="12" height="3" fill={C.bodyLight} />
      ))}
      {/* Tablero de corcho con papeles */}
      <rect x="232" y="22" width="64" height="44" fill="#4a4636" />
      <rect x="238" y="28" width="16" height="20" fill={C.paper} transform="rotate(-4 246 38)" />
      <rect x="260" y="30" width="20" height="14" fill={C.paper} transform="rotate(3 270 37)" />
      <rect x="266" y="48" width="22" height="12" fill={C.paper} />
      {[[246, 29], [270, 31], [277, 49]].map(([cx, cy]) => (
        <circle key={`${cx}`} cx={cx} cy={cy} r="1.6" fill={C.red} stroke="none" />
      ))}
      {/* Escritorio */}
      <rect x="108" y="96" width="124" height="8" fill={C.bodyLight} />
      <rect x="112" y="104" width="6" height="34" fill={C.body} />
      <rect x="190" y="104" width="38" height="26" fill={C.body} />
      <line x1="190" x2="228" y1="117" y2="117" />
      {/* Lámpara de escritorio con luz */}
      <polygon points="128,96 160,96 150,70 138,70" fill="#dff7d2" opacity="0.12" stroke="none" />
      <line x1="132" y1="96" x2="138" y2="72" strokeWidth="2" />
      <polygon points="132,72 152,72 146,64 138,64" fill={C.bodyLight} />
      {/* Papeles y foto */}
      <rect x="160" y="91" width="18" height="6" fill={C.paper} transform="rotate(-6 169 94)" />
      <rect x="182" y="88" width="10" height="9" fill="#22302a" />
      {/* Globo desinflado en el piso */}
      <path d="M232 156c3-9 14-14 24-12 7 1 11 6 9 10-2 5-9 6-16 5-6-1-12 0-17-3Z" fill={PARTY_C[0]} opacity="0.75" />
    </g>
  );
}

function Lab() {
  const monitor = (x: number, delay: string) => (
    <g key={x}>
      <rect x={x} y="66" width="40" height="31" rx="2" fill={C.body} />
      <rect x={x + 5} y="70" width="30" height="21" fill={C.glow} opacity="0.4" className="animate-bulb" style={{ animationDelay: delay }} />
      {[74, 78, 82].map((y) => (
        <rect key={y} x={x + 8} y={y} width={y === 82 ? 12 : 20} height="1.5" fill={C.glow} opacity="0.9" stroke="none" />
      ))}
      <ellipse cx={x + 20} cy="80" rx="34" ry="24" fill={C.glow} opacity="0.06" stroke="none" />
      <rect x={x + 6} y="99" width="28" height="3" fill={C.bodyLight} />
    </g>
  );
  return (
    <g stroke={C.ink} strokeWidth="1">
      {/* Póster en la pared */}
      <rect x="142" y="14" width="36" height="44" fill={C.paper} opacity="0.75" transform="rotate(-3 160 36)" />
      <text x="160" y="40" textAnchor="middle" fontFamily="monospace" fontSize="11" fill={C.ink} stroke="none" transform="rotate(-3 160 36)">
        {"</>"}
      </text>
      {/* Escritorios */}
      <rect x="24" y="98" width="118" height="7" fill={C.bodyLight} />
      <rect x="28" y="105" width="5" height="32" fill={C.body} />
      <rect x="133" y="105" width="5" height="32" fill={C.body} />
      <rect x="178" y="98" width="118" height="7" fill={C.bodyLight} />
      <rect x="182" y="105" width="5" height="32" fill={C.body} />
      <rect x="287" y="105" width="5" height="32" fill={C.body} />
      {monitor(40, "0s")}
      {monitor(88, "1.3s")}
      {monitor(194, "0.6s")}
      {monitor(242, "2.1s")}
      {/* Sillas */}
      <rect x="70" y="112" width="26" height="22" rx="3" fill="#1a221d" />
      <rect x="224" y="112" width="26" height="22" rx="3" fill="#1a221d" />
      {/* Globos amarrados a las sillas */}
      <SvgBalloon x={80} y={72} color={PARTY_C[0]} len={38} />
      <SvgBalloon x={238} y={68} color={PARTY_C[1]} len={42} />
    </g>
  );
}

function Records() {
  const shelf = (x: number, seed: number) => (
    <g key={x}>
      <rect x={x} y="18" width="84" height="108" fill="#232d27" />
      {[44, 70, 96, 122].map((y, row) => (
        <g key={y}>
          <rect x={x} y={y} width="84" height="3" fill={C.bodyLight} />
          {[0, 1, 2, 3].map((i) => {
            const w = 14 + ((seed + row * 3 + i * 5) % 4) * 3;
            const h = 14 + ((seed + i + row) % 3) * 4;
            const bx = x + 3 + i * 20;
            return (
              <g key={i}>
                <rect x={bx} y={y - h} width={w} height={h} fill={(i + row + seed) % 2 ? "#4b5a4e" : "#5e664f"} />
                <rect x={bx + 3} y={y - h + 4} width={w - 6} height="3" fill={C.paper} opacity="0.7" stroke="none" />
              </g>
            );
          })}
        </g>
      ))}
    </g>
  );
  return (
    <g stroke={C.ink} strokeWidth="1">
      {shelf(14, 1)}
      {shelf(118, 4)}
      {shelf(222, 7)}
      {/* Caja en el piso */}
      <rect x="142" y="132" width="36" height="22" fill="#5e664f" />
      <line x1="142" x2="178" y1="138" y2="138" />
      {/* Confeti en el piso */}
      {Array.from({ length: 22 }).map((_, i) => (
        <rect key={i} x={20 + ((i * 53) % 280)} y={140 + ((i * 17) % 36)} width="3" height="2" fill={PARTY_C[i % PARTY_C.length]} stroke="none" transform={`rotate(${(i * 37) % 90} ${20 + ((i * 53) % 280)} ${140 + ((i * 17) % 36)})`} />
      ))}
    </g>
  );
}

function Mailbox() {
  return (
    <g stroke={C.ink} strokeWidth="1">
      {/* Casilleros */}
      <rect x="104" y="24" width="112" height="84" fill="#232d27" />
      {Array.from({ length: 5 }).flatMap((_, c) =>
        Array.from({ length: 4 }).map((__, r) => (
          <rect key={`${c}-${r}`} x={108 + c * 21.5} y={28 + r * 20} width="18" height="16" fill={C.body} />
        ))
      )}
      {/* Casillero abierto con un sobre */}
      <polygon points="151,48 160,46 160,66 151,64" fill={C.bodyLight} />
      <rect x="138" y="52" width="12" height="8" fill={C.paper} />
      {/* Tablero de notas */}
      <rect x="18" y="30" width="70" height="52" fill="#4a4636" />
      {[[24, 36], [46, 38], [64, 34], [30, 58], [56, 60]].map(([x, y], i) => (
        <rect key={i} x={x} y={y} width="16" height="14" fill={i % 2 ? "#c9c08a" : C.paper} transform={`rotate(${i % 2 ? 4 : -5} ${x + 8} ${y + 7})`} />
      ))}
      {/* Sobres en el piso */}
      <rect x="236" y="146" width="22" height="14" fill={C.paper} transform="rotate(-12 247 153)" />
      <rect x="258" y="152" width="20" height="13" fill={C.paper} opacity="0.8" transform="rotate(8 268 158)" />
      <SvgBalloon x={250} y={56} color={PARTY_C[1]} len={60} />
    </g>
  );
}

function Servers() {
  const leds = [C.glow, C.glow, C.amber, C.glow, C.red, C.glow];
  return (
    <g stroke={C.ink} strokeWidth="1">
      {/* Cables colgando */}
      <path d="M40 0 C60 30 90 10 110 4 M150 0 C170 26 200 20 226 2 M250 0 C258 18 280 22 300 6" fill="none" stroke="#0b0f0d" strokeWidth="2" />
      {[24, 96, 168, 240].map((x, r) => (
        <g key={x}>
          <rect x={x} y="14" width="56" height="120" fill="#171e1a" />
          {Array.from({ length: 10 }).map((_, u) => (
            <g key={u}>
              <rect x={x + 4} y={20 + u * 11} width="48" height="9" fill="#2a352f" />
              <circle
                cx={x + 10}
                cy={24.5 + u * 11}
                r="1.6"
                fill={leds[(u + r) % leds.length]}
                stroke="none"
                className="animate-led"
                style={{ animationDelay: `${((u * 7 + r * 3) % 10) / 10}s` }}
              />
              <circle cx={x + 16} cy={24.5 + u * 11} r="1.2" fill={C.glow} opacity="0.6" stroke="none" />
              <rect x={x + 24} y={23.5 + u * 11} width="24" height="2" fill="#1a221d" stroke="none" />
            </g>
          ))}
        </g>
      ))}
      {/* Gorros de fiesta sobre los racks */}
      <SvgHat x={52} y={14} color={PARTY_C[3]} />
      <SvgHat x={196} y={14} color={PARTY_C[4]} />
    </g>
  );
}

function FrontDesk({ sign }: { sign: string }) {
  return (
    <g stroke={C.ink} strokeWidth="1">
      {/* Puerta del fondo */}
      <rect x="20" y="36" width="42" height="82" fill="#0b0f0d" />
      <rect x="28" y="44" width="26" height="18" fill="#1c2621" />
      {/* Letrero */}
      <rect x="104" y="16" width="112" height="22" fill="#0b0f0d" />
      <text x="160" y="31" textAnchor="middle" fontFamily="monospace" fontSize="10" letterSpacing="2" fill={C.glow} stroke="none" opacity="0.85" className="animate-bulb">
        {sign.toUpperCase()}
      </text>
      {/* Mostrador */}
      <rect x="66" y="88" width="188" height="8" fill={C.bodyLight} />
      <rect x="72" y="96" width="176" height="44" fill={C.body} />
      {[110, 124].map((y) => (
        <line key={y} x1="72" x2="248" y1={y} y2={y} opacity="0.6" />
      ))}
      {/* Timbre y teléfono */}
      <path d="M150 88 a8 7 0 0 1 16 0 Z" fill="#8a9a8c" />
      <rect x="196" y="80" width="22" height="8" rx="2" fill="#1a221d" />
      <rect x="198" y="76" width="18" height="5" rx="2" fill="#1a221d" />
      {/* Planta */}
      <rect x="272" y="112" width="20" height="22" fill="#4a4636" />
      <path d="M282 112 C270 96 274 84 282 92 C286 80 296 88 290 100 C300 96 298 108 282 112Z" fill="#2f4a36" />
      {/* Globos amarrados al timbre */}
      <SvgBalloon x={150} y={50} color={PARTY_C[2]} len={30} />
      <SvgBalloon x={166} y={46} color={PARTY_C[5]} len={34} />
    </g>
  );
}
