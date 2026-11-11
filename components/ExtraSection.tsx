"use client";

import { Terminal, Bot, Code2, Box, Layers, Cloud } from "lucide-react";
import { Section, SectionHeader, ACCENT_CYCLE, accentBg } from "./arcade/ui";
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
    <Section id="workspace">
      <SectionHeader level={t("extra.level")} title={t("extra.title")} subtitle={t("extra.subtitle")} accent="orange" />

      <h3 className="font-pixel text-xs sm:text-sm text-ink mb-6">{t("extra.sub1Title")}</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 mb-14">
        {langs.map((item, idx) => {
          const code = LANG_CODES[idx];
          const accent = ACCENT_CYCLE[idx % ACCENT_CYCLE.length];
          return (
            <article key={item.name} className="pixel-panel p-5 flex flex-col">
              <div className="flex items-center justify-between">
                <span className={`w-11 h-11 flex items-center justify-center font-pixel text-[9px] border-4 border-edge ${accentBg[accent]}`}>
                  {code}
                </span>
                <span className="font-retro text-lg px-2 border-2 border-edge bg-panel2 text-ink">{item.level}</span>
              </div>
              <h4 className="mt-4 font-pixel text-[10px] leading-relaxed text-ink">{item.name}</h4>
              <p className="mt-1 font-retro text-lg text-pink leading-tight">{item.category}</p>
              <p className="mt-2 text-sm text-muted leading-relaxed">{item.description}</p>
            </article>
          );
        })}
      </div>

      <h3 className="font-pixel text-xs sm:text-sm text-ink mb-6">{t("extra.sub2Title")}</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {tools.map((tool, idx) => {
          const Icon = TOOL_ICONS[idx] ?? Terminal;
          const accent = ACCENT_CYCLE[(idx + 2) % ACCENT_CYCLE.length];
          return (
            <article key={tool.name} className="pixel-panel p-5 flex gap-4">
              <span className={`shrink-0 w-12 h-12 flex items-center justify-center border-4 border-edge ${accentBg[accent]}`}>
                <Icon className="w-5 h-5" />
              </span>
              <div>
                <h4 className="font-pixel text-[10px] leading-relaxed text-ink">{tool.name}</h4>
                <p className="font-retro text-lg text-pink leading-tight">{tool.category}</p>
                <p className="mt-1 text-sm text-muted leading-relaxed">{tool.description}</p>
              </div>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
