"use client";

import { Terminal, Bot, Code2, Box, Layers, Cloud } from "lucide-react";
import { Section, SectionHeader } from "./night/ui";
import Lurker from "./night/Lurker";
import { SectionParty, PARTY } from "./night/Party";
import { useApp } from "@/context/AppContext";

type Lang = { name: string; category: string; description: string; level: string };
type Tool = { name: string; category: string; description: string };

const LANG_CODES = ["JAVA", "PY", "TS", "JS", "SQL"];
const TOOL_ICONS = [Terminal, Bot, Code2, Box, Layers, Cloud];

export default function ExtraSection() {
  const { t } = useApp();
  const langs = (t("extra.langItems") as Lang[]) || [];
  const tools = (t("extra.toolsItems") as Tool[]) || [];

  return (
    <Section
      id="workspace"
      accent={PARTY.blue}
      decor={<SectionParty top="lights" balloons="right" colors={[PARTY.blue, PARTY.green, PARTY.purple]} />}
      lurker={<Lurker creature="leak" variant="walk" time="03:41 AM" />}>
      <SectionHeader cam={t("extra.level")} room={t("rooms.workspace")} title={t("extra.title")} subtitle={t("extra.subtitle")} />

      <h3 className="font-retro text-3xl uppercase text-ink mb-5">{t("extra.sub1Title")}</h3>
      {/* Lenguajes como unidades de un rack de servidores */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mb-14">
        {langs.map((item, idx) => (
          <article key={item.name} className="cam-frame p-5 flex flex-col">
            <div className="flex items-center justify-between font-retro text-lg uppercase">
              <span className="flex items-center gap-2 text-ink">
                <span aria-hidden className="block w-2 h-2 bg-phos" />
                U{String(idx + 1).padStart(2, "0")} · {LANG_CODES[idx]}
              </span>
              <span className="text-muted">{item.level}</span>
            </div>
            <h4 className="mt-3 font-retro text-2xl uppercase leading-none text-ink">{item.name}</h4>
            <p className="mt-1 text-sm text-rec">{item.category}</p>
            <p className="mt-2 text-sm text-muted leading-relaxed">{item.description}</p>
          </article>
        ))}
      </div>

      <h3 className="font-retro text-3xl uppercase text-ink mb-5">{t("extra.sub2Title")}</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {tools.map((tool, idx) => {
          const Icon = TOOL_ICONS[idx] ?? Terminal;
          return (
            <article key={tool.name} className="cam-frame p-5 flex gap-4">
              <span className="shrink-0 w-11 h-11 flex items-center justify-center border border-edge bg-panel2 text-ink">
                <Icon className="w-5 h-5" />
              </span>
              <div>
                <h4 className="font-retro text-2xl uppercase leading-none text-ink">{tool.name}</h4>
                <p className="mt-1 text-sm text-rec">{tool.category}</p>
                <p className="mt-1 text-sm text-muted leading-relaxed">{tool.description}</p>
              </div>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
