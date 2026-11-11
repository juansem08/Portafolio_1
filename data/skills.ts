import type { Lang } from "./projects";

export interface SkillGroup {
  title: Record<Lang, string>;
  items: string[];
}

// Habilidades y tecnologías (guía: van dentro de "Acerca de mí"). Tomadas del CV.
export const skillGroups: SkillGroup[] = [
  {
    title: { es: "Lenguajes", en: "Languages" },
    items: ["Java", "Python", "TypeScript", "JavaScript", "SQL", "HTML", "CSS"],
  },
  {
    title: { es: "Frameworks y librerías", en: "Frameworks & libraries" },
    items: ["Spring Boot", "FastAPI", "Next.js", "React", "React Native (Expo)", "Node.js", "Express", "Electron", "Tailwind CSS"],
  },
  {
    title: { es: "Bases de datos", en: "Databases" },
    items: ["PostgreSQL", "MySQL", "SQLite", "MongoDB", "Supabase"],
  },
  {
    title: { es: "Herramientas", en: "Tools" },
    items: ["Git y GitHub", "Firebase", "Claude", "Google Antigravity", "API de Google Gemini"],
  },
];
