import { 
  Terminal, 
  Bot, 
  Code2, 
  Box, 
  Layers, 
  Cloud,
  Database,
  Binary,
  FileCode,
  Braces,
  Cpu
} from "lucide-react";
import { Tape, Pushpin, Paperclip } from "./ScrapbookAssets";

interface LanguageItem {
  name: string;
  code: string;
  category: string;
  description: string;
  level: string;
  accentColor: string;
  badgeBg: string;
  rotation: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface ToolItem {
  name: string;
  category: string;
  description: string;
  badge: string;
  icon: React.ComponentType<{ className?: string }>;
  accentColor: string;
  rotation: string;
}

export default function ExtraSection() {
  const languages: LanguageItem[] = [
    {
      name: "TypeScript",
      code: "TS",
      category: "Frontend & Backend Escalable",
      description: "Tipado estático estricto, interfaces complejas, genéricos y arquitectura limpia en Next.js, Node.js y React.",
      level: "Producción & Core",
      accentColor: "border-[#810100] text-[#810100] bg-[#810100]/10",
      badgeBg: "bg-[#810100] text-[#EDEBDD]",
      rotation: "-rotate-1",
      icon: Code2,
    },
    {
      name: "JavaScript (ES6+)",
      code: "JS",
      category: "Web Core & APIs Dinámicas",
      description: "Asincronía avanzada (Promises/Async-Await), manipulación del DOM, eventos, consumo de REST APIs y modularidad.",
      level: "Producción & Core",
      accentColor: "border-[#1B1717] text-[#1B1717] bg-[#1B1717]/10",
      badgeBg: "bg-[#1B1717] text-[#EDEBDD]",
      rotation: "rotate-1",
      icon: FileCode,
    },
    {
      name: "Python",
      code: "PY",
      category: "IA, Algoritmia & Scripting",
      description: "Desarrollo de soluciones con inteligencia artificial, automatización de tareas, procesamiento de datos y backend estructurado.",
      level: "Enfoque Ingeniería",
      accentColor: "border-[#630000] text-[#630000] bg-[#630000]/10",
      badgeBg: "bg-[#630000] text-[#EDEBDD]",
      rotation: "-rotate-2",
      icon: Terminal,
    },
    {
      name: "Java",
      code: "JAVA",
      category: "POO & Arquitectura Empresarial",
      description: "Programación Orientada a Objetos, principios SOLID, patrones de diseño GoF, concurrencia y persistencia (Proyecto CineCritik).",
      level: "Académico UCC",
      accentColor: "border-[#810100] text-[#810100] bg-[#810100]/10",
      badgeBg: "bg-[#810100] text-[#EDEBDD]",
      rotation: "rotate-2",
      icon: Braces,
    },
    {
      name: "SQL",
      code: "SQL",
      category: "Bases de Datos Relacionales",
      description: "PostgreSQL, SQLite y MySQL: diseño entidad-relación, normalización de esquemas, consultas avanzadas, joins y transacciones ACID.",
      level: "Gestión de Datos",
      accentColor: "border-[#1B1717] text-[#1B1717] bg-[#1B1717]/10",
      badgeBg: "bg-[#1B1717] text-[#EDEBDD]",
      rotation: "-rotate-1",
      icon: Database,
    },
    {
      name: "C / C++",
      code: "C++",
      category: "Bajo Nivel & Algoritmia",
      description: "Estructuras de datos fundamentales, punteros, gestión manual de memoria y algoritmos optimizados de computación.",
      level: "Bases de Ingeniería",
      accentColor: "border-[#630000] text-[#630000] bg-[#630000]/10",
      badgeBg: "bg-[#630000] text-[#EDEBDD]",
      rotation: "rotate-1",
      icon: Cpu,
    },
    {
      name: "C#",
      code: "C#",
      category: "Desarrollo Orientado a Objetos",
      description: "Tipado estricto, lógica estructurada de componentes y fundamentos de programación orientada a objetos en entornos .NET.",
      level: "Pregrado Ingeniería",
      accentColor: "border-[#810100] text-[#810100] bg-[#810100]/10",
      badgeBg: "bg-[#810100] text-[#EDEBDD]",
      rotation: "-rotate-2",
      icon: Binary,
    },
    {
      name: "HTML5 & CSS3",
      code: "WEB",
      category: "Estructura Semántica & Estilos",
      description: "Semántica web moderna, layouts avanzados con Tailwind CSS, Flexbox, CSS Grid, diseño adaptativo y accesibilidad.",
      level: "Estándares W3C",
      accentColor: "border-[#1B1717] text-[#1B1717] bg-[#1B1717]/10",
      badgeBg: "bg-[#1B1717] text-[#EDEBDD]",
      rotation: "rotate-1",
      icon: Layers,
    },
    {
      name: "PHP",
      code: "PHP",
      category: "Backend & Servidor Web",
      description: "Desarrollo web modular, procesamiento de peticiones HTTP, sesiones y persistencia con bases de datos relacionales.",
      level: "Formación Técnica",
      accentColor: "border-[#630000] text-[#630000] bg-[#630000]/10",
      badgeBg: "bg-[#630000] text-[#EDEBDD]",
      rotation: "-rotate-1",
      icon: FileCode,
    },
    {
      name: "Bash / Shell Script",
      code: "SH",
      category: "Automatización & Terminal Linux",
      description: "Administración de sistemas operativos (SENA), scripts para automatización de tareas y mantenimiento preventivo.",
      level: "Técnico SENA",
      accentColor: "border-[#810100] text-[#810100] bg-[#810100]/10",
      badgeBg: "bg-[#810100] text-[#EDEBDD]",
      rotation: "rotate-2",
      icon: Terminal,
    },
  ];

  const tools: ToolItem[] = [
    {
      name: "Google Antigravity IDE",
      category: "Agentic Engineering & Architecture",
      description: "Entorno de desarrollo de última generación impulsado por agentes autónomos y análisis de contexto profundo.",
      badge: "Primary Agentic IDE",
      icon: Terminal,
      accentColor: "border-[#810100] text-[#810100] bg-[#810100]/10",
      rotation: "-rotate-1",
    },
    {
      name: "Cursor AI",
      category: "AI-Assisted Development",
      description: "Programación asistida por modelos de lenguaje para refactorización veloz y generación de pruebas unitarias.",
      badge: "AI Pair Programming",
      icon: Bot,
      accentColor: "border-[#630000] text-[#630000] bg-[#630000]/10",
      rotation: "rotate-1",
    },
    {
      name: "VS Code",
      category: "Core Code Editor",
      description: "Configuración personalizada con linters estrictos, debugging avanzado y extensiones de TypeScript.",
      badge: "Production Setup",
      icon: Code2,
      accentColor: "border-[#1B1717] text-[#1B1717] bg-[#1B1717]/10",
      rotation: "-rotate-2",
    },
    {
      name: "Blender",
      category: "3D Modeling & Rendering",
      description: "Modelado low-poly, texturizado estilizado y exportación optimizada de mallas para experiencias web interactivas.",
      badge: "Low-Poly & Assets",
      icon: Box,
      accentColor: "border-[#810100] text-[#810100] bg-[#810100]/10",
      rotation: "rotate-2",
    },
    {
      name: "Next.js",
      category: "Full-Stack Framework",
      description: "App Router, Server Components, Server Actions, streaming y optimización extrema de rendimiento.",
      badge: "Core Framework",
      icon: Layers,
      accentColor: "border-[#1B1717] text-[#1B1717] bg-[#1B1717]/10",
      rotation: "-rotate-1",
    },
    {
      name: "AWS",
      category: "Cloud Infrastructure",
      description: "Despliegues en la nube, arquitecturas serverless, S3, Lambda y configuración de dominios con alta disponibilidad.",
      badge: "Cloud Computing",
      icon: Cloud,
      accentColor: "border-[#630000] text-[#630000] bg-[#630000]/10",
      rotation: "rotate-1",
    },
  ];

  return (
    <section id="workspace" className="py-20 relative select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Section Header */}
        <div className="flex flex-col items-start mb-14">
          <div className="mb-2">
            <Tape variant="warning">// 06. ARSENAL TÉCNICO &amp; STACK</Tape>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-black text-[#1B1717] tracking-tight uppercase">
            LENGUAJES &amp; ENTORNO
          </h2>
          <p className="mt-2 text-neutral-600 font-mono text-xs max-w-xl font-bold">
            Catálogo completo de los lenguajes de programación que domino y utilizo en ingeniería de software, junto al banco de herramientas de mi flujo de trabajo.
          </p>
        </div>

        {/* ======================================================== */}
        {/* SUBSECTION 1: LENGUAJES DE PROGRAMACIÓN                  */}
        {/* ======================================================== */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-3 h-3 bg-[#810100] rounded-sm" />
            <h3 className="font-display font-black text-xl sm:text-2xl text-[#1B1717] tracking-tight uppercase">
              LENGUAJES DE PROGRAMACIÓN UTILIZADOS
            </h3>
            <span className="text-[11px] font-mono text-[#810100] font-black bg-[#EDEBDD] px-2.5 py-0.5 border border-[#1B1717] shadow-sm">
              10 LENGUAJES ACTIVOS
            </span>
          </div>

          {/* Languages Quick Tape Pills Bar */}
          <div className="flex flex-wrap gap-2.5 mb-8 pb-4 border-b-2 border-dashed border-[#1B1717]/20">
            {languages.map((lang) => (
              <div
                key={lang.name}
                className={`inline-flex items-center gap-2 px-3 py-1 bg-[#FAF9F5] border-2 border-[#1B1717] font-mono text-xs font-black shadow-[2px_2px_0px_#1B1717] ${lang.accentColor}`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#810100]" />
                <span>{lang.name}</span>
                <span className="text-[10px] text-neutral-500 font-bold">({lang.code})</span>
              </div>
            ))}
          </div>

          {/* Languages Bento Grid (Tactile Index Cards) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {languages.map((lang, idx) => {
              const IconComp = lang.icon;
              return (
                <div
                  key={lang.name}
                  className={`relative flex flex-col justify-between rounded-lg border-2 border-[#1B1717] bg-[#FAF9F5] p-5 shadow-[5px_5px_0px_#1B1717] ${lang.rotation} hover:rotate-0 hover:-translate-y-1 transition-all duration-200 group`}
                >
                  {/* Decorative Pin on first & fifth card */}
                  {idx === 0 && (
                    <div className="absolute -top-3.5 right-4 pointer-events-none z-20">
                      <Pushpin color="#810100" />
                    </div>
                  )}
                  {idx === 4 && (
                    <div className="absolute -top-4 left-4 pointer-events-none z-20">
                      <Paperclip variant="cherry" />
                    </div>
                  )}

                  <div>
                    {/* Header Stamp */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-9 h-9 rounded bg-[#EDEBDD] border-2 border-[#1B1717] flex items-center justify-center font-mono font-black text-xs text-[#810100] shadow-[2px_2px_0px_#1B1717]">
                        {lang.code}
                      </div>
                      <span className={`text-[9px] font-mono font-black px-2 py-0.5 border border-[#1B1717] uppercase tracking-wider ${lang.badgeBg}`}>
                        {lang.level}
                      </span>
                    </div>

                    {/* Language Name */}
                    <h4 className="font-display font-black text-base text-[#1B1717] group-hover:text-[#810100] transition-colors uppercase">
                      {lang.name}
                    </h4>

                    {/* Category Label */}
                    <p className="font-mono text-[11px] text-[#810100] font-black mb-2">
                      {lang.category}
                    </p>

                    {/* Description */}
                    <p className="text-xs text-neutral-700 leading-relaxed font-sans">
                      {lang.description}
                    </p>
                  </div>

                  {/* Card Footer Tag */}
                  <div className="mt-4 pt-2.5 border-t border-[#1B1717]/20 flex justify-between items-center text-[10px] font-mono text-[#1B1717]">
                    <div className="flex items-center gap-1.5 text-neutral-600">
                      <IconComp className="w-3.5 h-3.5 text-[#810100]" />
                      <span className="font-bold">VERIFICADO</span>
                    </div>
                    <span className="text-[#810100] font-black">OK</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ======================================================== */}
        {/* SUBSECTION 2: ENTORNO DE TRABAJO & FRAMEWORKS            */}
        {/* ======================================================== */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-3 h-3 bg-[#630000] rounded-sm" />
            <h3 className="font-display font-black text-xl sm:text-2xl text-[#1B1717] tracking-tight uppercase">
              ENTORNO DE TRABAJO, CLOUD &amp; FRAMEWORKS
            </h3>
            <span className="text-[11px] font-mono text-[#630000] font-black bg-[#EDEBDD] px-2.5 py-0.5 border border-[#1B1717] shadow-sm">
              HERRAMIENTAS CLAVE
            </span>
          </div>

          {/* Tools Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool) => {
              const IconComponent = tool.icon;
              return (
                <div
                  key={tool.name}
                  className={`relative flex flex-col justify-between rounded-lg border-2 border-[#1B1717] bg-[#FAF9F5] p-6 shadow-[6px_6px_0px_#1B1717] ${tool.rotation} hover:rotate-0 hover:-translate-y-1 transition-all duration-200 group`}
                >
                  <div>
                    {/* Top Bar */}
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className={`w-11 h-11 rounded-md flex items-center justify-center border-2 border-[#1B1717] ${tool.accentColor} shadow-[2px_2px_0px_#1B1717]`}
                      >
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-mono font-black px-2.5 py-1 bg-[#1B1717] text-[#EDEBDD] border border-[#1B1717] uppercase tracking-wider">
                        {tool.badge}
                      </span>
                    </div>

                    {/* Title & Category */}
                    <h4 className="text-lg font-display font-black text-[#1B1717] group-hover:text-[#810100] transition-colors uppercase">
                      {tool.name}
                    </h4>
                    <div className="text-xs font-mono text-[#810100] mb-3 font-black">
                      {tool.category}
                    </div>

                    {/* Description */}
                    <p className="text-xs text-neutral-700 leading-relaxed font-sans">
                      {tool.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#1B1717]/20 flex justify-between items-center text-[10px] font-mono text-[#1B1717]">
                    <span className="font-bold">MODULO // ACTIVO</span>
                    <span className="text-[#810100] font-black">READY</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
