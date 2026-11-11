"use client";

import { useEffect, useReducer, useRef, useState } from "react";
import { Volume2, VolumeX, BatteryLow, BatteryMedium, BatteryFull } from "lucide-react";
import Creature, { type CreatureId } from "./Creature";
import { RecDot } from "./ui";
import { useApp } from "@/context/AppContext";

/* ================= Configuración ================= */

type CamId = "about" | "projects" | "experience" | "testimonials" | "workspace" | "contact";
type Side = "left" | "right";
type Phase = "idle" | "playing" | "won" | "lost";

// Cada cámara del laboratorio es una sección del portafolio.
const CAMS: { id: CamId; num: string; href: string }[] = [
  { id: "about", num: "01", href: "#about" },
  { id: "projects", num: "02", href: "#projects" },
  { id: "experience", num: "03", href: "#experience" },
  { id: "testimonials", num: "04", href: "#testimonials" },
  { id: "workspace", num: "05", href: "#workspace" },
  { id: "contact", num: "06", href: "#contact" },
];

// Ruta de cada criatura hasta su puerta.
const CREATURES: { id: CreatureId; name: string; path: CamId[]; side: Side; aggression: number }[] = [
  { id: "null", name: "NULL", path: ["workspace", "projects", "experience"], side: "left", aggression: 0.16 },
  { id: "segfault", name: "SEGFAULT", path: ["testimonials", "contact", "about"], side: "right", aggression: 0.13 },
];

const NIGHT_SECONDS = 90; // 12 AM → 6 AM
const HOUR_SECONDS = 15;
const GRACE_SECONDS = 6; // las criaturas no se mueven al inicio
const DOOR_RETREAT = 4; // segundos con la puerta cerrada para que se vaya
const ATTACK_AFTER = 5; // segundos con la puerta abierta antes de atacar

/* ================= Estado ================= */

type CreatureState = { pos: number; wait: number }; // pos === path.length → está en la puerta
type State = {
  phase: Phase;
  t: number;
  battery: number;
  doors: Record<Side, boolean>;
  lights: Record<Side, boolean>;
  cam: CamId;
  creatures: CreatureState[];
  killer: number | null;
  glitch: number;
};

type Action =
  | { type: "start" }
  | { type: "reset" }
  | { type: "tick" }
  | { type: "cam"; cam: CamId }
  | { type: "door"; side: Side }
  | { type: "light"; side: Side };

const initState = (cam: CamId = "about"): State => ({
  phase: "idle",
  t: 0,
  battery: 100,
  doors: { left: false, right: false },
  lights: { left: false, right: false },
  cam,
  creatures: CREATURES.map(() => ({ pos: 0, wait: 0 })),
  killer: null,
  glitch: 0,
});

const camOf = (i: number, c: CreatureState): CamId | null => {
  const path = CREATURES[i].path;
  return c.pos < path.length ? path[c.pos] : null;
};

function reducer(s: State, a: Action): State {
  switch (a.type) {
    case "start":
      return { ...initState(s.cam), phase: "playing", glitch: s.glitch + 1 };
    case "reset":
      return { ...initState(s.cam), glitch: s.glitch + 1 };
    case "cam":
      return { ...s, cam: a.cam, glitch: s.glitch + 1 };
    case "door":
      if (s.phase !== "playing" || s.battery <= 0) return s;
      return { ...s, doors: { ...s.doors, [a.side]: !s.doors[a.side] } };
    case "light":
      if (s.phase !== "playing" || s.battery <= 0) return s;
      return { ...s, lights: { ...s.lights, [a.side]: !s.lights[a.side] } };
    case "tick": {
      if (s.phase !== "playing") return s;
      const t = s.t + 1;
      if (t >= NIGHT_SECONDS) return { ...s, t, phase: "won" };

      // Batería
      let { doors, lights } = s;
      let battery = s.battery;
      if (battery > 0) {
        const drain =
          0.22 +
          (doors.left ? 0.55 : 0) +
          (doors.right ? 0.55 : 0) +
          (lights.left ? 0.35 : 0) +
          (lights.right ? 0.35 : 0);
        battery = Math.max(0, battery - drain);
        if (battery === 0) {
          doors = { left: false, right: false };
          lights = { left: false, right: false };
        }
      }

      // Criaturas
      const hour = Math.floor(t / HOUR_SECONDS);
      let killer: number | null = null;
      let viewedCamChanged = false;
      const creatures: CreatureState[] = [];
      s.creatures.forEach((c, i) => {
        const def = CREATURES[i];
        const atDoor = c.pos >= def.path.length;
        let next = c;
        if (atDoor) {
          const wait = c.wait + 1;
          if (doors[def.side]) {
            next = wait >= DOOR_RETREAT ? { pos: 0, wait: 0 } : { pos: c.pos, wait };
          } else {
            next = { pos: c.pos, wait };
            if (wait >= ATTACK_AFTER && killer === null) killer = i;
          }
        } else if (t > GRACE_SECONDS && Math.random() < def.aggression + hour * 0.03) {
          next = { pos: c.pos + 1, wait: 0 };
        }
        if (camOf(i, c) !== camOf(i, next) && (camOf(i, c) === s.cam || camOf(i, next) === s.cam)) {
          viewedCamChanged = true;
        }
        creatures.push(next);
      });

      const glitch = viewedCamChanged ? s.glitch + 1 : s.glitch;
      if (killer !== null) return { ...s, t, battery, doors, lights, creatures, killer, phase: "lost", glitch };
      return { ...s, t, battery, doors, lights, creatures, glitch };
    }
  }
}

/* ================= Sonido (opcional, generado sin archivos) ================= */

function playNoise(ctx: AudioContext, seconds: number, volume: number) {
  const buffer = ctx.createBuffer(1, Math.floor(ctx.sampleRate * seconds), ctx.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < data.length; i++) data[i] = Math.random() * 2 - 1;
  const src = ctx.createBufferSource();
  src.buffer = buffer;
  const gain = ctx.createGain();
  gain.gain.setValueAtTime(volume, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + seconds);
  src.connect(gain).connect(ctx.destination);
  src.start();
}

function playScare(ctx: AudioContext) {
  playNoise(ctx, 1, 0.35);
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = "sawtooth";
  osc.frequency.setValueAtTime(90, ctx.currentTime);
  osc.frequency.exponentialRampToValueAtTime(35, ctx.currentTime + 1);
  gain.gain.setValueAtTime(0.25, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 1);
  osc.connect(gain).connect(ctx.destination);
  osc.start();
  osc.stop(ctx.currentTime + 1);
}

/* ================= Componente ================= */

export default function NightShiftGame() {
  const { t } = useApp();
  const [s, dispatch] = useReducer(reducer, undefined, () => initState());
  const [sound, setSound] = useState(false);
  const audioRef = useRef<AudioContext | null>(null);

  const playing = s.phase === "playing";
  const powerOut = playing && s.battery <= 0;

  // Reloj del turno
  useEffect(() => {
    if (!playing) return;
    const id = setInterval(() => dispatch({ type: "tick" }), 1000);
    return () => clearInterval(id);
  }, [playing]);

  // Sonidos
  useEffect(() => {
    if (sound && audioRef.current && s.glitch > 0) playNoise(audioRef.current, 0.18, 0.08);
  }, [s.glitch, sound]);
  useEffect(() => {
    if (sound && audioRef.current && s.phase === "lost") playScare(audioRef.current);
  }, [s.phase, sound]);

  const toggleSound = () => {
    if (!audioRef.current) {
      const Ctx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (Ctx) audioRef.current = new Ctx();
    }
    void audioRef.current?.resume();
    setSound((v) => !v);
  };

  const hourLabel = (() => {
    const h = Math.min(6, Math.floor(s.t / HOUR_SECONDS));
    return `${h === 0 ? 12 : h}:00 AM`;
  })();

  const cam = CAMS.find((c) => c.id === s.cam)!;
  const inView = playing
    ? s.creatures.map((c, i) => ({ i, c })).filter(({ i, c }) => camOf(i, c) === s.cam)
    : [];
  const atDoor = (side: Side) =>
    playing ? s.creatures.findIndex((c, i) => CREATURES[i].side === side && c.pos >= CREATURES[i].path.length) : -1;

  const BatteryIcon = s.battery > 60 ? BatteryFull : s.battery > 25 ? BatteryMedium : BatteryLow;
  const warnings = (["left", "right"] as Side[]).filter((side) => atDoor(side) >= 0);

  return (
    <div className="cam-frame relative overflow-hidden">
      {/* Barra superior */}
      <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 px-3 py-2 border-b border-edge bg-panel2 font-retro text-lg uppercase">
        <span className="flex items-center gap-2">
          <RecDot />
          <span className="text-rec">REC</span>
          <span className="text-muted">{t("game.night")}</span>
        </span>
        <span className="text-ink text-2xl leading-none">{playing || s.phase !== "idle" ? hourLabel : "--:-- AM"}</span>
        <span className={`flex items-center gap-1.5 ${s.battery <= 20 ? "text-rec" : "text-ink"}`}>
          <BatteryIcon className="w-5 h-5" />
          {Math.ceil(s.battery)}%
        </span>
        <button
          type="button"
          onClick={toggleSound}
          aria-pressed={sound}
          className="cam-btn flex items-center gap-1.5 px-2 py-0.5 text-lg text-ink hover:bg-panel"
        >
          {sound ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
          {t("game.sound")} {sound ? "ON" : "OFF"}
        </button>
      </div>

      {/* Monitor principal */}
      <div className="screen scanlines vignette aspect-[16/10] sm:aspect-[16/9]">
        <div aria-hidden className="cam-corners" />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse at 50% 45%, #26302b 0%, #0b100e 55%, #050706 85%)" }}
        />
        <div aria-hidden className="noise absolute inset-0 overflow-hidden [--noise-opacity:0.16]" />
        {/* Estática al cambiar de cámara o cuando algo se mueve */}
        <div key={s.glitch} aria-hidden className="noise absolute inset-0 z-[3] overflow-hidden bg-[#0b0f0d] animate-static [--noise-opacity:0.9]" />

        {/* Criaturas en esta cámara */}
        {inView.map(({ i }) => (
          <div
            key={CREATURES[i].id}
            className={`absolute bottom-0 h-[78%] aspect-[100/160] animate-jitter z-[2] ${i === 0 ? "left-[14%]" : "right-[12%]"}`}
          >
            <Creature id={CREATURES[i].id} className="w-full h-full opacity-90" />
          </div>
        ))}

        {/* Rótulos de la cámara */}
        <div className="absolute inset-0 z-[4] flex flex-col justify-between p-4 sm:p-5 pointer-events-none">
          <div className="flex items-start justify-between gap-3">
            <p className="font-retro leading-none uppercase">
              <span className="block text-2xl sm:text-3xl vhs-text">CAM {cam.num}</span>
              <span className="block text-lg sm:text-xl text-[#c9d6cb] mt-1">{t(`rooms.${cam.id}`)}</span>
            </p>
            {inView.length > 0 && (
              <span className="font-retro text-lg sm:text-xl text-rec uppercase animate-rec">{t("game.motion")}</span>
            )}
          </div>
          <div className="flex items-end justify-between gap-3">
            <p className="max-w-[60%] text-sm sm:text-base text-[#c9d6cb]">{t(`teasers.${cam.id}`)}</p>
            <a href={cam.href} className="pointer-events-auto cam-btn shrink-0 px-3 py-1.5 text-lg sm:text-xl bg-[#e4ece5] text-[#050706] border-[#e4ece5] hover:bg-rec hover:border-rec hover:text-white">
              {t("game.goRoom")} ▶
            </a>
          </div>
        </div>

        {/* Pantallas de fin */}
        {s.phase === "lost" && s.killer !== null && (
          <div className="absolute inset-0 z-[6] flex items-center justify-center bg-black">
            <div aria-hidden className="noise absolute inset-0 overflow-hidden [--noise-opacity:0.35]" />
            <div className="absolute bottom-0 h-full aspect-[100/160] animate-creep">
              <Creature id={CREATURES[s.killer].id} className="w-full h-full animate-jitter" />
            </div>
            <div className="relative z-[2] text-center px-4 animate-fade">
              <p className="font-retro text-4xl sm:text-6xl text-rec vhs-text uppercase">
                {CREATURES[s.killer].name} {t("game.lost")}
              </p>
              <p className="mt-2 font-retro text-xl text-[#c9d6cb]">{t("game.lostDesc")}</p>
              <button
                type="button"
                onClick={() => dispatch({ type: "start" })}
                className="mt-4 cam-btn px-4 py-2 text-xl bg-[#e4ece5] text-[#050706] border-[#e4ece5] hover:bg-rec hover:text-white"
              >
                {t("game.retry")}
              </button>
            </div>
          </div>
        )}
        {s.phase === "won" && (
          <div className="absolute inset-0 z-[6] flex flex-col items-center justify-center bg-black/90 text-center px-4 animate-fade">
            <p className="font-retro text-6xl sm:text-8xl text-glow vhs-text">6:00 AM</p>
            <p className="mt-2 font-retro text-xl text-[#c9d6cb]">{t("game.wonDesc")}</p>
            <button
              type="button"
              onClick={() => dispatch({ type: "reset" })}
              className="mt-4 cam-btn px-4 py-2 text-xl bg-[#e4ece5] text-[#050706] border-[#e4ece5] hover:bg-glow"
            >
              {t("game.again")}
            </button>
          </div>
        )}
      </div>

      {/* Mensajes */}
      <div aria-live="polite" className="min-h-[52px] flex flex-wrap items-center justify-between gap-3 px-3 py-2 border-y border-edge bg-panel2">
        {s.phase === "idle" ? (
          <>
            <span className="text-sm text-muted">{t("game.idleHint")}</span>
            <button
              type="button"
              onClick={() => dispatch({ type: "start" })}
              className="cam-btn px-4 py-1.5 text-xl bg-rec text-white border-rec hover:bg-[#d82828]"
            >
              {t("game.start")}
            </button>
          </>
        ) : powerOut ? (
          <span className="font-retro text-xl text-rec uppercase animate-rec">{t("game.powerOut")}</span>
        ) : warnings.length > 0 ? (
          <span className="font-retro text-xl text-amber uppercase">
            {warnings.map((w) => (w === "left" ? t("game.warnLeft") : t("game.warnRight"))).join(" ")}
          </span>
        ) : (
          <span className="text-sm text-muted">{t("game.playHint")}</span>
        )}
      </div>

      {/* Controles: puerta izq · mapa · puerta der */}
      <div className="grid grid-cols-2 sm:grid-cols-[1fr_1.6fr_1fr] gap-3 p-3 bg-panel">
        <div className="col-span-2 sm:col-span-1 sm:order-2">
          <p className="font-retro text-lg text-muted uppercase mb-1.5">{t("game.map")}</p>
          <div className="grid grid-cols-3 gap-1.5">
            {CAMS.map((c) => (
              <button
                key={c.id}
                type="button"
                onClick={() => dispatch({ type: "cam", cam: c.id })}
                aria-pressed={s.cam === c.id}
                className={`cam-btn px-1 py-2 text-lg leading-tight ${
                  s.cam === c.id ? "bg-ink text-bg border-ink" : "bg-panel2 text-ink hover:border-ink"
                }`}
              >
                CAM {c.num}
                <span className="block text-sm normal-case tracking-normal text-current opacity-70 truncate">
                  {t(`rooms.${c.id}`)}
                </span>
              </button>
            ))}
          </div>
        </div>

        {(["left", "right"] as Side[]).map((side) => {
          const visitor = atDoor(side);
          const lit = s.lights[side];
          const closed = s.doors[side];
          return (
            <div key={side} className={side === "left" ? "sm:order-1" : "sm:order-3"}>
              <p className="font-retro text-lg text-muted uppercase mb-1.5">
                {side === "left" ? t("game.doorLeft") : t("game.doorRight")}
              </p>
              {/* Vista de la puerta */}
              <div className="screen relative h-20 border border-edge mb-1.5">
                <div
                  aria-hidden
                  className="absolute inset-0 transition-opacity"
                  style={{
                    background: lit ? "linear-gradient(180deg,#5a6a5f 0%,#1c2420 100%)" : "#050706",
                  }}
                />
                {lit && visitor >= 0 && (
                  <Creature id={CREATURES[visitor].id} className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[95%] animate-jitter" />
                )}
                {closed && (
                  <div
                    aria-hidden
                    className="absolute inset-0 z-[2]"
                    style={{ background: "repeating-linear-gradient(0deg,#3a423d 0 6px,#2a312d 6px 8px)" }}
                  />
                )}
                <span className="absolute top-1 left-1.5 z-[3] font-retro text-sm text-[#8c9b8f] uppercase">
                  {closed ? t("game.closed") : t("game.open")}
                </span>
              </div>
              <div className="grid grid-cols-2 gap-1.5">
                <button
                  type="button"
                  disabled={!playing || powerOut}
                  onClick={() => dispatch({ type: "door", side })}
                  aria-pressed={closed}
                  className={`cam-btn py-1.5 text-lg ${closed ? "bg-rec text-white border-rec" : "bg-panel2 text-ink hover:border-ink"}`}
                >
                  {t("game.door")}
                </button>
                <button
                  type="button"
                  disabled={!playing || powerOut}
                  onClick={() => dispatch({ type: "light", side })}
                  aria-pressed={lit}
                  className={`cam-btn py-1.5 text-lg ${lit ? "bg-[#e4ece5] text-[#050706] border-[#e4ece5]" : "bg-panel2 text-ink hover:border-ink"}`}
                >
                  {t("game.light")}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
