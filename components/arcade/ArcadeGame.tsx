"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import PixelAvatar from "./PixelAvatar";
import { accentBg, type Accent } from "./ui";
import { useApp } from "@/context/AppContext";

// Laberinto: "#" bloque, "." piso, "P" inicio, números = gemas (una por sección).
const MAP = [
  "#############",
  "#P....#....1#",
  "#.##..#..##.#",
  "#.#2......#.#",
  "#...##.##...#",
  "#.#......3#.#",
  "#.##..#..##.#",
  "#4...6#....5#",
  "#############",
];
const ROWS = MAP.length;
const COLS = MAP[0].length;

type Goal = { labelKey: string; href: string; accent: Accent };
const GOALS: Record<string, Goal> = {
  "2": { labelKey: "nav.about", href: "#about", accent: "sky" },
  "1": { labelKey: "nav.projects", href: "#projects", accent: "pink" },
  "3": { labelKey: "nav.experience", href: "#experience", accent: "mint" },
  "4": { labelKey: "nav.testimonials", href: "#testimonials", accent: "yellow" },
  "6": { labelKey: "nav.workspace", href: "#workspace", accent: "orange" },
  "5": { labelKey: "nav.contact", href: "#contact", accent: "violet" },
};
const GOAL_KEYS = Object.keys(GOALS);

const START = (() => {
  const y = MAP.findIndex((row) => row.includes("P"));
  return { x: MAP[y].indexOf("P"), y };
})();

const isWall = (x: number, y: number) => {
  const ch = MAP[y]?.[x];
  return ch === undefined || ch === "#";
};

type Dir = "up" | "down" | "left" | "right";
const DIRS: Record<Dir, [number, number]> = {
  up: [0, -1],
  down: [0, 1],
  left: [-1, 0],
  right: [1, 0],
};
const KEYS: Record<string, Dir> = {
  ArrowUp: "up",
  w: "up",
  W: "up",
  ArrowDown: "down",
  s: "down",
  S: "down",
  ArrowLeft: "left",
  a: "left",
  A: "left",
  ArrowRight: "right",
  d: "right",
  D: "right",
};

export default function ArcadeGame() {
  const { t } = useApp();
  const boardRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(START);
  const [facing, setFacing] = useState<"left" | "right">("right");
  const [collected, setCollected] = useState<string[]>([]);
  const [lastGoal, setLastGoal] = useState<string | null>(null);
  const [started, setStarted] = useState(false);

  const complete = collected.length === GOAL_KEYS.length;
  const score = collected.length * 100;

  const move = useCallback((dir: Dir) => {
    const [dx, dy] = DIRS[dir];
    if (dx !== 0) setFacing(dx < 0 ? "left" : "right");
    setStarted(true);
    setPos((p) => (isWall(p.x + dx, p.y + dy) ? p : { x: p.x + dx, y: p.y + dy }));
  }, []);

  // Recoger la gema al pisarla
  useEffect(() => {
    const ch = MAP[pos.y][pos.x];
    if (GOALS[ch] && !collected.includes(ch)) {
      setCollected((c) => [...c, ch]);
      setLastGoal(ch);
    }
  }, [pos, collected]);

  const restart = () => {
    setPos(START);
    setCollected([]);
    setLastGoal(null);
    setFacing("right");
    boardRef.current?.focus();
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    const dir = KEYS[e.key];
    if (!dir || complete) return;
    e.preventDefault();
    move(dir);
  };

  const last = lastGoal ? GOALS[lastGoal] : null;

  return (
    <div className="pixel-panel overflow-hidden">
      {/* HUD */}
      <div className="flex items-center justify-between gap-2 px-3 py-2.5 bg-screen text-white border-b-4 border-edge font-pixel text-[8px] sm:text-[10px]">
        <span className="text-yellow animate-blink">1UP</span>
        <span>
          {t("game.score")} <span className="text-mint">{String(score).padStart(5, "0")}</span>
        </span>
        <span>
          {t("game.gems")} <span className="text-pink">{collected.length}/{GOAL_KEYS.length}</span>
        </span>
      </div>

      {/* Tablero */}
      <div
        ref={boardRef}
        tabIndex={0}
        role="application"
        aria-label={t("game.ariaBoard")}
        onKeyDown={onKeyDown}
        onFocus={() => setStarted(true)}
        onClick={() => boardRef.current?.focus()}
        className="relative bg-screen scanlines cursor-pointer select-none focus-visible:outline-offset-[-6px]"
        style={{ aspectRatio: `${COLS} / ${ROWS}` }}
      >
        <div
          className="absolute inset-0 grid"
          style={{ gridTemplateColumns: `repeat(${COLS}, 1fr)`, gridTemplateRows: `repeat(${ROWS}, 1fr)` }}
        >
          {MAP.flatMap((row, y) =>
            row.split("").map((ch, x) => {
              if (ch === "#") return <div key={`${x}-${y}`} className="pixel-block" />;
              const goal = GOALS[ch];
              return (
                <div key={`${x}-${y}`} className="flex items-center justify-center">
                  {goal && !collected.includes(ch) && (
                    <span className={`block w-[40%] h-[40%] border-2 border-[#050314] animate-gem ${accentBg[goal.accent]}`} />
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Jugador */}
        <div
          className="absolute flex items-end justify-center transition-[left,top] duration-100 ease-linear"
          style={{
            width: `${100 / COLS}%`,
            height: `${100 / ROWS}%`,
            left: `${(pos.x * 100) / COLS}%`,
            top: `${(pos.y * 100) / ROWS}%`,
          }}
        >
          <PixelAvatar className="w-[78%] h-[92%]" facing={facing} />
        </div>

        {!started && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/45">
            <span className="font-pixel text-[9px] sm:text-xs text-white px-3 py-2 bg-pink border-4 border-[#050314] animate-blink">
              {t("game.clickToPlay")}
            </span>
          </div>
        )}

        {complete && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-black/70 px-4 text-center animate-pop">
            <p className="font-pixel text-sm sm:text-lg text-yellow">{t("game.complete")}</p>
            <p className="font-retro text-xl text-white">{t("game.completeDesc")}</p>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                restart();
              }}
              className="pixel-btn bg-mint text-[#241b4b] px-4 py-3 text-[10px]"
            >
              {t("game.restart")}
            </button>
          </div>
        )}
      </div>

      {/* Mensaje del juego */}
      <div
        aria-live="polite"
        className="min-h-[56px] flex flex-wrap items-center justify-between gap-2 px-3 py-2 border-t-4 border-edge bg-panel2"
      >
        {last && !complete ? (
          <>
            <span className="font-retro text-xl text-ink">
              {t("game.unlocked")} <strong className="font-pixel text-[10px]">{t(last.labelKey)}</strong>
            </span>
            <a href={last.href} className={`pixel-btn px-3 py-2 text-[9px] ${accentBg[last.accent]}`}>
              {t("game.go")} ▶
            </a>
          </>
        ) : (
          <span className="font-retro text-lg sm:text-xl text-muted leading-tight">{t("game.hint")}</span>
        )}
      </div>

      {/* Controles táctiles + objetivos */}
      <div className="flex flex-col sm:flex-row gap-4 p-3 sm:p-4 border-t-4 border-edge bg-panel">
        <div className="grid grid-cols-3 gap-1.5 w-[132px] shrink-0 self-center" aria-label={t("game.controls")}>
          <span />
          <DpadButton label={t("game.up")} onPress={() => move("up")}>▲</DpadButton>
          <span />
          <DpadButton label={t("game.left")} onPress={() => move("left")}>◀</DpadButton>
          <span className="block w-10 h-10 bg-panel2 border-2 border-edge" aria-hidden />
          <DpadButton label={t("game.right")} onPress={() => move("right")}>▶</DpadButton>
          <span />
          <DpadButton label={t("game.down")} onPress={() => move("down")}>▼</DpadButton>
          <span />
        </div>

        <div className="flex-1">
          <p className="font-pixel text-[9px] text-muted mb-2">{t("game.goals")}</p>
          <ul className="grid grid-cols-2 gap-1.5">
            {GOAL_KEYS.map((k) => {
              const g = GOALS[k];
              const done = collected.includes(k);
              return (
                <li key={k}>
                  <a
                    href={g.href}
                    className="flex items-center gap-2 px-2 py-1 border-2 border-edge bg-panel2 hover:bg-yellow hover:text-[#241b4b] font-retro text-lg leading-none text-ink"
                  >
                    <span className={`block w-3 h-3 rotate-45 border-2 border-edge shrink-0 ${done ? "bg-transparent" : accentBg[g.accent]}`} />
                    <span className={`truncate ${done ? "line-through opacity-60" : ""}`}>{t(g.labelKey)}</span>
                    {done && <span className="ml-auto text-mint">✓</span>}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

function DpadButton({ children, label, onPress }: { children: string; label: string; onPress: () => void }) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onPress}
      className="pixel-btn w-10 h-10 flex items-center justify-center bg-violet text-white text-xs"
      style={{ boxShadow: "3px 3px 0 0 var(--edge)" }}
    >
      {children}
    </button>
  );
}
