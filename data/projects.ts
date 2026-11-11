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
  // Imagen del proyecto en public/images/projects. Si no hay, la tarjeta muestra una portada con ícono.
  image?: string;
  // "cover" llena la tarjeta (capturas); "contain" centra la imagen (íconos de app) sobre imageBg.
  imageFit?: "cover" | "contain";
  // Encuadre cuando la imagen se recorta (por defecto se alinea a la izquierda).
  imagePosition?: "left" | "center";
  imageBg?: string;
  // Uno o más repositorios (ej. frontend y backend).
  repos: ProjectLink[];
  // Demo en vivo. Si queda vacío, la tarjeta muestra "Demo próximamente".
  demo?: string;
  // Descarga del programa (página de releases de GitHub) para proyectos que no son web.
  download?: string;
}

export const projects: Project[] = [
  {
    title: "Clarify — Escáner de Documentos con IA",
    category: { es: "App móvil · IA", en: "Mobile app · AI" },
    description: {
      es: "App móvil que escanea documentos con la cámara y usa Google Gemini para transcribirlos (incluida letra manuscrita), resumirlos y extraer datos y tablas. Backend propio en Node.js y Express que protege la clave de la API y solo atiende usuarios verificados con Firebase. Traduce a seis idiomas y exporta a PDF y Excel.",
      en: "Mobile app that scans documents with the camera and uses Google Gemini to transcribe them (including handwriting), summarize them and extract data and tables. Its own Node.js and Express backend protects the API key and only serves users verified with Firebase. Translates into six languages and exports to PDF and Excel.",
    },
    tags: ["React Native", "Expo", "TypeScript", "Node.js", "Gemini", "Firebase"],
    icon: "scan",
    image: "/images/projects/clarify.png",
    imageFit: "contain",
    imageBg: "linear-gradient(135deg,#FDE3D3,#F7B79A)",
    repos: [{ label: "Código", url: "https://github.com/juansem08/Escaner_Sintetizador_Multimodal_Documentos_conia" }],
    // APK de Android generado con Expo EAS (enlace del README del repo)
    download: "https://expo.dev/artifacts/eas/faLiHmuFmPuHr_bk5TnyZcYCEvTA_CAvowQMkp8nWUo.apk",
  },
  {
    title: "Clasificador Automático de Reseñas",
    category: { es: "Escritorio · IA", en: "Desktop · AI" },
    description: {
      es: "Aplicación de escritorio que clasifica opiniones de clientes por sentimiento, categoría, tema y prioridad con Gemini, a partir de CSV, Excel o texto. Incluye panel de indicadores con gráficos, informe ejecutivo generado por IA, exportación a Excel, CSV y PDF, interfaz en tres idiomas e instaladores para Windows, macOS y Linux.",
      en: "Desktop app that classifies customer reviews by sentiment, category, topic and priority with Gemini, from CSV, Excel or text. Includes a dashboard with charts, an AI-generated executive report, export to Excel, CSV and PDF, a three-language interface and installers for Windows, macOS and Linux.",
    },
    tags: ["Electron", "React", "TypeScript", "Gemini"],
    icon: "chart",
    image: "/images/projects/clasificador.png",
    imageFit: "contain",
    imageBg: "linear-gradient(135deg,#FBF1E4,#EBC79B)",
    repos: [{ label: "Código", url: "https://github.com/juansem08/Clasificador_Automtico__Rese-asas_Comentarios" }],
    // Instaladores para Windows, macOS y Linux
    download: "https://github.com/juansem08/Clasificador_Automtico__Rese-asas_Comentarios/releases",
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
    image: "/images/projects/noticias-garmin.png",
    repos: [{ label: "Código", url: "https://github.com/juansem08/Visor_Rese-as_Noticias_Dia" }],
  },
  {
    title: "Gridmind",
    category: { es: "Web · IoT · Energía", en: "Web · IoT · Energy" },
    description: {
      es: "Proyecto en equipo: ecosistema de gestión energética que monitorea en tiempo real el consumo en kWh de dispositivos conectados con ESP32 (vinculados por código QR). Incluye dashboard con gráficas diarias y semanales, alertas por umbral, análisis de facturas con IA, predicción de costos a 30 días y reportes en PDF.",
      en: "Team project: energy management ecosystem that monitors, in real time, the kWh consumption of devices connected through ESP32 boards (paired via QR code). Includes a dashboard with daily and weekly charts, threshold alerts, AI bill analysis, 30-day cost prediction and PDF reports.",
    },
    tags: ["React", "TypeScript", "Java 17", "Spring Boot", "PostgreSQL", "ESP32"],
    icon: "grid",
    image: "/images/projects/gridmind.jpg",
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
    image: "/images/projects/demencia.jpg",
    imagePosition: "center",
    repos: [{ label: "Código", url: "https://github.com/CV17d/demencia_ae_limite" }],
    download: "https://github.com/CV17d/demencia_ae_limite/releases/tag/v1.0.0",
  },
];
