export interface Project {
  title: string;
  description: string;
  tags: string[];
  // Si un enlace queda vacío, la tarjeta muestra "privado" / "próximamente" en vez de un link roto.
  github?: string;
  demo?: string;
}

export const projects: Project[] = [
  {
    title: "Gridmind",
    description:
      "Aplicación web Full-Stack con arquitectura desacoplada y dividida en Frontend y Backend. Enfocada en alta escalabilidad, modularidad y procesamiento eficiente de datos.",
    tags: ["React", "Next.js", "Node.js", "TypeScript", "REST API"],
    github: "https://github.com/CV17d/gridmind-frontend",
    // gridmind-frontend.vercel.app es de otra persona y el demo oficial ya no existe.
    demo: "",
  },
  {
    title: "VisualPart",
    description:
      "Plataforma e-commerce y de servicios de mantenimiento automotriz que integra un sistema de búsqueda visual inteligente para repuestos y piezas de alta rotación.",
    tags: ["Next.js", "Tailwind CSS", "TypeScript", "E-commerce", "Visual Search"],
    github: "",
    demo: "",
  },
  {
    title: "CineCritik",
    description:
      "Foro de reseñas y análisis de cine estructurado bajo principios de Programación Orientada a Objetos (POO), con persistencia eficiente y diseño centrado en el usuario.",
    tags: ["Java", "SQLite", "HTML/CSS/JS", "OOP", "Architecture"],
    github: "https://github.com/juansem08/CINECRITICK",
    demo: "https://cinecritick.vercel.app",
  },
  {
    title: "Proyecto LUMEN",
    description:
      "Plataforma de tecnología cívica diseñada para la georreferenciación y reporte en tiempo real de infraestructura urbana y servicios públicos en Pasto.",
    tags: ["Next.js", "Tailwind CSS", "Civic Tech", "GIS / Maps", "Full-Stack"],
    github: "",
    // proyecto-lumen.vercel.app es de otra persona (red de apoyo estudiantil).
    demo: "",
  },
];
