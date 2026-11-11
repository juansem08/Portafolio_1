export type Lang = "es" | "en";
type Text = Record<Lang, string>;

export type ProjectIcon = "wrench" | "scan" | "chart" | "watch" | "grid" | "gamepad";

export interface ProjectLink {
  label: string;
  url: string;
}

export interface Project {
  title: string;
  category: Text;
  description: Text;
  tags: string[];
  icon: ProjectIcon;
  // Captura del proyecto en public/images/projects. Si no hay, la tarjeta muestra una portada con ícono.
  image?: string;
  // Uno o más repositorios (ej. frontend y backend).
  repos: ProjectLink[];
  // Demo en vivo. Si queda vacío, la tarjeta muestra "Demo próximamente".
  demo?: string;
}

export const projects: Project[] = [
  {
    title: "AutoRepuestos — Calibración y Reparación",
    category: { es: "Web · Taller automotriz", en: "Web · Auto repair shop" },
    description: {
      es: "MVP web para un taller de calibración y reparación: catálogo de repuestos con filtros por categoría, precios y disponibilidad, y agendamiento de citas por WhatsApp. Preparado para conectar Supabase.",
      en: "Web MVP for a calibration and repair shop: auto parts catalog with category filters, prices and availability, and appointment booking via WhatsApp. Ready to connect Supabase.",
    },
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
    icon: "wrench",
    image: "/images/projects/autorepuestos.jpg",
    repos: [{ label: "Código", url: "https://github.com/Sebas082/Calibracion_Reparacion" }],
    demo: "https://calibracion-reparacion.vercel.app",
  },
  {
    title: "Clarify — Escáner de Documentos con IA",
    category: { es: "App móvil · IA", en: "Mobile app · AI" },
    description: {
      es: "App móvil que captura documentos con la cámara y usa Google Gemini para OCR (incluida letra manuscrita), resúmenes, extracción de datos y tablas, preguntas sobre el documento y traducción. Cuentas con Firebase Authentication.",
      en: "Mobile app that captures documents with the camera and uses Google Gemini for OCR (including handwriting), summaries, data and table extraction, Q&A about the document and translation. Accounts with Firebase Authentication.",
    },
    tags: ["React Native", "Expo", "TypeScript", "Gemini", "Firebase"],
    icon: "scan",
    repos: [{ label: "Código", url: "https://github.com/juansem08/Escaner_Sintetizador_Multimodal_Documentos_conia" }],
  },
  {
    title: "Clasificador Automático de Reseñas",
    category: { es: "Escritorio · IA", en: "Desktop · AI" },
    description: {
      es: "Aplicación de escritorio que carga opiniones de clientes desde CSV, Excel o texto y, con Gemini, asigna sentimiento, categoría, tema, prioridad y nivel de confianza, además de sugerir una respuesta al cliente.",
      en: "Desktop app that loads customer reviews from CSV, Excel or text and, with Gemini, assigns sentiment, category, topic, priority and confidence, and suggests a reply to the customer.",
    },
    tags: ["Electron", "React", "TypeScript", "Gemini"],
    icon: "chart",
    repos: [{ label: "Código", url: "https://github.com/juansem08/Clasificador_Automtico__Rese-asas_Comentarios" }],
  },
  {
    title: "Noticias del Día — Garmin Forerunner 165",
    category: { es: "Wearable · IA", en: "Wearable · AI" },
    description: {
      es: "App para reloj Garmin que muestra cada mañana las 3 noticias del día en un carrusel. Un backend en Next.js pide a Gemini (con búsqueda de Google) un resumen de máximo 15 palabras por noticia y lo guarda en caché con un cron diario.",
      en: "Garmin watch app that shows the day's top 3 news stories every morning in a carousel. A Next.js backend asks Gemini (with Google Search) for a 15-word summary of each story and caches it with a daily cron job.",
    },
    tags: ["Monkey C", "Connect IQ", "Next.js", "TypeScript", "Gemini"],
    icon: "watch",
    repos: [{ label: "Código", url: "https://github.com/juansem08/Visor_Rese-as_Noticias_Dia" }],
  },
  {
    title: "Gridmind",
    category: { es: "Full-Stack", en: "Full-Stack" },
    description: {
      es: "Aplicación web Full-Stack con arquitectura desacoplada: frontend en React + TypeScript (Vite) y backend en Java empaquetado con Docker.",
      en: "Full-Stack web application with a decoupled architecture: React + TypeScript (Vite) frontend and a Java backend packaged with Docker.",
    },
    tags: ["React", "TypeScript", "Vite", "Java", "Docker"],
    icon: "grid",
    repos: [
      { label: "Frontend", url: "https://github.com/CV17d/gridmind-frontend" },
      { label: "Backend", url: "https://github.com/CV17d/gridmind-backend" },
    ],
  },
  {
    title: "Demencia No Límite",
    category: { es: "Videojuego · Unity", en: "Video game · Unity" },
    description: {
      es: "Roguelike de terror psicológico en primera persona: una torre de 30 pisos generada proceduralmente, un \"AI Director\" que ajusta la dificultad en tiempo real y jefes que se adaptan al estilo del jugador.",
      en: "First-person psychological horror roguelike: a procedurally generated 30-floor tower, an \"AI Director\" that adjusts difficulty in real time and bosses that adapt to the player's style.",
    },
    tags: ["Unity", "C#", "HLSL", "Generación procedural"],
    icon: "gamepad",
    repos: [{ label: "Código", url: "https://github.com/CV17d/demencia_ae_limite" }],
  },
];
