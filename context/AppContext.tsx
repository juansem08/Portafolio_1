"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "es" | "en";
type Theme = "light" | "dark";

interface AppContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
  t: (key: string) => any;
}

export const translations = {
  es: {
    nav: {
      home: "Inicio",
      about: "Sobre mí",
      projects: "Proyectos",
      experience: "Experiencia",
      testimonials: "Testimonios",
      workspace: "Stack",
      contact: "Contacto",
      visits: "Visitas",
      cta: "¡HABLEMOS!",
      day: "DÍA",
      night: "NOCHE",
      toDay: "Cambiar a modo día",
      toNight: "Cambiar a modo noche",
      toLang: "Switch to English",
      menu: "Abrir menú",
    },
    hero: {
      player: "PLAYER 1",
      status: "DISPONIBLE PARA PROYECTOS",
      greeting: "HOLA, SOY",
      name: "SEBASTIÁN",
      role: "Software Engineer & Software Architect",
      tagline: "“Dos de agua por una de arroz, así es como yo hago el código y así de bueno me queda el arroz.”",
      location: "PASTO, COLOMBIA",
      downloadCv: "DESCARGAR CV",
      viewProjects: "VER PROYECTOS",
      avatarAlt: "Avatar de Sebastián en pixel art",
    },
    game: {
      score: "PUNTOS",
      gems: "GEMAS",
      clickToPlay: "CLIC PARA JUGAR",
      hint: "Muévete con las flechas o WASD (en celular, con los botones). Recoge las gemas para desbloquear cada sección.",
      unlocked: "¡DESBLOQUEASTE!",
      go: "IR",
      complete: "¡NIVEL COMPLETO!",
      completeDesc: "Recogiste todas las gemas. Ahora explora el portafolio completo.",
      restart: "JUGAR DE NUEVO",
      goals: "OBJETIVOS",
      controls: "Controles del juego",
      up: "Mover arriba",
      down: "Mover abajo",
      left: "Mover a la izquierda",
      right: "Mover a la derecha",
      ariaBoard: "Mini juego: usa las flechas o WASD para mover a tu personaje y recoger gemas",
    },
    about: {
      level: "NIVEL 1",
      title: "SOBRE MÍ",
      subtitle: "Ficha del jugador: quién soy, qué estudio y qué me gusta.",
      mainBio: "Actualmente curso la carrera de Ingeniería de Software en la Universidad Cooperativa de Colombia. Fuera del ámbito académico, mis principales intereses son la gastronomía, el arte y el cine, con preferencia por los géneros de terror y comedia. Asimismo, disfruto de la música tropical y de las actividades sociales con amigos.",
      card1Title: "Gastronomía, arte y cine",
      card1Desc: "Cine de terror y comedia, pasión culinaria y apreciación artística.",
      card2Title: "Música tropical y amigos",
      card2Desc: "Ritmos tropicales, actividades sociales y compartir buenos momentos.",
      playerCard: "PLAYER CARD",
      classLabel: "CLASE",
      classValue: "Ing. de Software",
      semesterLabel: "SEMESTRE",
      semesterValue: "5°",
      baseLabel: "BASE",
      baseValue: "Pasto, Colombia",
      educationLabel: "FORMACIÓN",
      educationValue: "UCC (en proceso) · SENA (titulado)",
      interestsTitle: "INVENTARIO // INTERESES",
      stackTitle: "HABILIDADES // STACK",
      interestsList: ["Gastronomía", "Cine de terror", "Comedia", "Música tropical", "Arte", "Vida social"],
    },
    projects: {
      level: "NIVEL 2",
      title: "MIS PROYECTOS",
      subtitle: "Cada proyecto es un stage superado: soluciones de software con código y demo cuando están disponibles.",
      stage: "STAGE",
      statusLive: "EN VIVO",
      statusDev: "EN DESARROLLO",
      btnCode: "CÓDIGO",
      btnDemo: "DEMO",
      codePrivate: "PRIVADO",
      demoSoon: "PRONTO",
      items: [
        {
          title: "Gridmind",
          description: "Aplicación web Full-Stack con arquitectura desacoplada y dividida en Frontend y Backend. Enfocada en alta escalabilidad, modularidad y procesamiento eficiente de datos.",
        },
        {
          title: "VisualPart",
          description: "Plataforma e-commerce y de servicios de mantenimiento automotriz que integra un sistema de búsqueda visual inteligente para repuestos y piezas de alta rotación.",
        },
        {
          title: "CineCritik",
          description: "Foro de reseñas y análisis de cine estructurado bajo principios de Programación Orientada a Objetos (POO), con persistencia eficiente y diseño centrado en el usuario.",
        },
        {
          title: "Proyecto LUMEN",
          description: "Plataforma de tecnología cívica diseñada para la georreferenciación y reporte en tiempo real de infraestructura urbana y servicios públicos en Pasto.",
        },
      ],
    },
    experience: {
      level: "NIVEL 3",
      title: "EXPERIENCIA",
      subtitle: "Registro de misiones: mi trayectoria laboral y académica, de lo más reciente a lo más antiguo.",
      workHeading: "EXPERIENCIA LABORAL",
      academicHeading: "EXPERIENCIA ACADÉMICA",
      workBadge: "LABORAL",
      academicBadge: "ACADÉMICA",
      items: [
        {
          type: "laboral",
          title: "Desarrollador Web Full-Stack",
          organization: "Calibración y Reparación — AutoRepuestos",
          period: "Jul 2026",
          description: "Desarrollo del MVP web para un taller de calibración y reparación automotriz: catálogo de repuestos con filtros por categoría, consulta de precios y disponibilidad, y agendamiento de citas por WhatsApp. Base preparada para conectar Supabase (productos, stock, clientes y citas).",
          badges: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
          github: "https://github.com/Sebas082/Calibracion_Reparacion",
          demo: "https://calibracion-reparacion.vercel.app",
        },
        {
          type: "laboral",
          title: "Desarrollador y Arquitecto",
          organization: "VisualPart",
          period: "2026",
          description: "Diseño e implementación de la arquitectura modular de software, estructura desacoplada del frontend y backend, y optimización del motor de búsqueda visual para repuestos automotrices.",
          badges: ["Arquitectura de Software", "Next.js", "Lead Tech", "E-commerce"],
        },
        {
          type: "academica",
          title: "Ingeniería de Software",
          organization: "Universidad Cooperativa de Colombia",
          period: "En curso (pregrado)",
          description: "Formación en arquitectura limpia, ingeniería de calidad de software (QA), patrones de diseño, arquitecturas distribuidas, bases de datos y desarrollo de soluciones con IA.",
          badges: ["Clean Architecture", "Arquitectura de Software", "Bases de Datos", "QA"],
        },
        {
          type: "academica",
          title: "Técnico en Sistemas",
          organization: "SENA (Servicio Nacional de Aprendizaje)",
          period: "Titulado (Ficha 2492764)",
          description: "Formación técnica titulada en mantenimiento preventivo y correctivo de hardware y software, ensamble de equipos, configuración de redes de datos, cableado estructurado e implementación de sistemas operativos.",
          badges: ["Hardware", "Redes de Datos", "Soporte Técnico", "Sistemas Operativos"],
        },
      ],
    },
    testimonials: {
      level: "NIVEL 4",
      title: "TESTIMONIOS",
      subtitle: "Lo que dicen otros jugadores que han compartido equipo conmigo.",
      emptyTitle: "INSERT COIN",
      emptyDesc: "Este nivel se está cargando: pronto habrá testimonios de profesores y compañeros.",
    },
    extra: {
      level: "BONUS 1",
      title: "STACK Y HERRAMIENTAS",
      subtitle: "Mi inventario: los lenguajes y frameworks que uso, y las herramientas de mi flujo de trabajo.",
      sub1Title: "LENGUAJES Y FRAMEWORKS",
      sub2Title: "HERRAMIENTAS",
      langItems: [
        {
          name: "Java (Spring Boot)",
          category: "Backend y arquitectura empresarial",
          description: "Desarrollo backend con Spring Boot, APIs RESTful, inyección de dependencias, Hibernate/JPA, principios SOLID y Clean Architecture.",
          level: "Core",
        },
        {
          name: "Python (FastAPI / IA)",
          category: "APIs, microservicios e IA",
          description: "APIs de alto rendimiento con FastAPI, automatización de procesos, análisis de datos e integración de soluciones con IA.",
          level: "Ingeniería",
        },
        {
          name: "TypeScript (Next.js / React)",
          category: "Frontend y Full-Stack",
          description: "Tipado estricto, React Server Components, Server Actions, App Router y arquitectura modular en Next.js.",
          level: "Core",
        },
        {
          name: "JavaScript (Node.js / Express)",
          category: "Runtime y servicios asíncronos",
          description: "Servicios backend en Node.js con Express, arquitectura basada en eventos, asincronía y APIs REST.",
          level: "Core",
        },
        {
          name: "SQL (PostgreSQL / MySQL)",
          category: "Bases de datos relacionales",
          description: "PostgreSQL, SQLite y MySQL: modelo entidad-relación, normalización, consultas avanzadas, joins y transacciones ACID.",
          level: "Datos",
        },
      ],
      toolsItems: [
        {
          name: "Google Antigravity IDE",
          category: "Desarrollo con agentes",
          description: "Entorno de desarrollo impulsado por agentes autónomos y análisis de contexto profundo.",
        },
        {
          name: "Cursor AI",
          category: "Desarrollo asistido por IA",
          description: "Programación asistida por modelos de lenguaje para refactorizar rápido y generar pruebas unitarias.",
        },
        {
          name: "VS Code",
          category: "Editor de código",
          description: "Configuración personalizada con linters estrictos, debugging avanzado y extensiones de TypeScript.",
        },
        {
          name: "Blender",
          category: "Modelado 3D",
          description: "Modelado low-poly, texturizado estilizado y exportación optimizada de modelos para experiencias web.",
        },
        {
          name: "Next.js",
          category: "Framework Full-Stack",
          description: "App Router, Server Components, Server Actions, streaming y optimización de rendimiento.",
        },
        {
          name: "AWS",
          category: "Infraestructura cloud",
          description: "Despliegues en la nube, arquitecturas serverless, S3, Lambda y configuración de dominios.",
        },
      ],
    },
    contact: {
      level: "NIVEL 5",
      title: "CONTACTO",
      subtitle: "¿Tienes un proyecto o una propuesta? Escríbeme por el formulario o por mis canales directos.",
      channelsTitle: "CANALES DIRECTOS",
      emailLabel: "CORREO",
      copyEmail: "Copiar correo",
      githubAction: "IR ▶",
      linkedinAction: "CONECTAR ▶",
      whatsappSub: "Mensaje directo",
      whatsappAction: "CHATEAR ▶",
      formTitle: "ENVIAR MENSAJE",
      nameLabel: "Nombre",
      namePlaceholder: "Ej. Ada Lovelace",
      emailFieldLabel: "Correo",
      emailPlaceholder: "tucorreo@dominio.com",
      messageLabel: "Mensaje",
      messagePlaceholder: "Cuéntame sobre tu proyecto o propuesta...",
      send: "ENVIAR",
      sending: "ENVIANDO...",
      successMsg: "¡Mensaje enviado! Te responderé lo antes posible.",
      mailtoMsg: "Se abrió tu aplicación de correo con el mensaje listo. Solo dale enviar.",
      errorMsg: "No se pudo enviar el mensaje. Inténtalo de nuevo o escríbeme directo al correo.",
    },
    visits: {
      level: "BONUS 2",
      title: "VISITAS EMPRESARIALES",
      subtitle: "Recorridos técnicos y conferencias en empresas de tecnología de Medellín (ruta académica UCC, Ingeniería de Software).",
      areaPrefix: "ÁREA",
      takeawaysHeader: "LOGROS DESBLOQUEADOS",
      photoLabel: "FOTO",
    },
    footer: {
      thanks: "¡GRACIAS POR JUGAR!",
      copyright: "Sebastián. Todos los derechos reservados.",
      backToTop: "SUBIR",
      quickLinks: "ENLACES RÁPIDOS",
      madeWith: "Hecho con Next.js + Tailwind CSS",
      location: "Pasto, Colombia",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About me",
      projects: "Projects",
      experience: "Experience",
      testimonials: "Testimonials",
      workspace: "Stack",
      contact: "Contact",
      visits: "Visits",
      cta: "LET'S TALK!",
      day: "DAY",
      night: "NIGHT",
      toDay: "Switch to day mode",
      toNight: "Switch to night mode",
      toLang: "Cambiar a español",
      menu: "Open menu",
    },
    hero: {
      player: "PLAYER 1",
      status: "OPEN TO PROJECTS",
      greeting: "HI, I'M",
      name: "SEBASTIÁN",
      role: "Software Engineer & Software Architect",
      tagline: "“Two parts water to one part rice; that's how I code, and that's why my rice turns out delicious.”",
      location: "PASTO, COLOMBIA",
      downloadCv: "DOWNLOAD CV",
      viewProjects: "VIEW PROJECTS",
      avatarAlt: "Pixel art avatar of Sebastián",
    },
    game: {
      score: "SCORE",
      gems: "GEMS",
      clickToPlay: "CLICK TO PLAY",
      hint: "Move with the arrow keys or WASD (on mobile, use the buttons). Collect the gems to unlock each section.",
      unlocked: "UNLOCKED!",
      go: "GO",
      complete: "LEVEL CLEAR!",
      completeDesc: "You collected every gem. Now explore the whole portfolio.",
      restart: "PLAY AGAIN",
      goals: "GOALS",
      controls: "Game controls",
      up: "Move up",
      down: "Move down",
      left: "Move left",
      right: "Move right",
      ariaBoard: "Mini game: use the arrow keys or WASD to move your character and collect gems",
    },
    about: {
      level: "LEVEL 1",
      title: "ABOUT ME",
      subtitle: "Player profile: who I am, what I study and what I enjoy.",
      mainBio: "I am currently pursuing a degree in Software Engineering at Universidad Cooperativa de Colombia. Beyond academics, my core passions include culinary arts, visual arts, and cinema, with a special love for horror and comedy genres. I also enjoy tropical music and social activities with friends.",
      card1Title: "Food, art & cinema",
      card1Desc: "Horror and comedy films, culinary passion and artistic appreciation.",
      card2Title: "Tropical music & friends",
      card2Desc: "Tropical rhythms, social hangouts and sharing good moments.",
      playerCard: "PLAYER CARD",
      classLabel: "CLASS",
      classValue: "Software Eng.",
      semesterLabel: "SEMESTER",
      semesterValue: "5th",
      baseLabel: "BASE",
      baseValue: "Pasto, Colombia",
      educationLabel: "EDUCATION",
      educationValue: "UCC (in progress) · SENA (certified)",
      interestsTitle: "INVENTORY // INTERESTS",
      stackTitle: "SKILLS // STACK",
      interestsList: ["Gastronomy", "Horror films", "Comedy", "Tropical music", "Art", "Social life"],
    },
    projects: {
      level: "LEVEL 2",
      title: "MY PROJECTS",
      subtitle: "Every project is a cleared stage: software solutions with code and a live demo when available.",
      stage: "STAGE",
      statusLive: "LIVE",
      statusDev: "IN DEVELOPMENT",
      btnCode: "CODE",
      btnDemo: "DEMO",
      codePrivate: "PRIVATE",
      demoSoon: "SOON",
      items: [
        {
          title: "Gridmind",
          description: "Full-Stack web application with decoupled Frontend and Backend architecture. Designed for high scalability, modularity, and efficient data processing.",
        },
        {
          title: "VisualPart",
          description: "E-commerce and automotive maintenance platform featuring an intelligent visual search system for auto parts and high-turnover components.",
        },
        {
          title: "CineCritik",
          description: "Cinema review and discussion board structured under Object-Oriented Programming (OOP) principles, efficient persistence, and user-centered design.",
        },
        {
          title: "Proyecto LUMEN",
          description: "Civic technology platform designed for real-time georeferencing and citizen reporting of public infrastructure and urban utilities in Pasto.",
        },
      ],
    },
    experience: {
      level: "LEVEL 3",
      title: "EXPERIENCE",
      subtitle: "Quest log: my work and academic journey, from most recent to oldest.",
      workHeading: "WORK EXPERIENCE",
      academicHeading: "ACADEMIC BACKGROUND",
      workBadge: "WORK",
      academicBadge: "ACADEMIC",
      items: [
        {
          type: "laboral",
          title: "Full-Stack Web Developer",
          organization: "Calibración y Reparación — AutoRepuestos",
          period: "Jul 2026",
          description: "Built the web MVP for an automotive calibration and repair shop: auto parts catalog with category filters, price and availability lookup, and appointment booking via WhatsApp. Ready to connect Supabase (products, stock, customers and appointments).",
          badges: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
          github: "https://github.com/Sebas082/Calibracion_Reparacion",
          demo: "https://calibracion-reparacion.vercel.app",
        },
        {
          type: "laboral",
          title: "Developer & Architect",
          organization: "VisualPart",
          period: "2026",
          description: "Design and implementation of modular software architecture, decoupled frontend and backend structure, and visual search engine optimization for auto parts.",
          badges: ["Software Architecture", "Next.js", "Lead Tech", "E-commerce"],
        },
        {
          type: "academica",
          title: "Software Engineering",
          organization: "Universidad Cooperativa de Colombia",
          period: "In progress (undergrad)",
          description: "Training in clean architecture, software quality engineering (QA), design patterns, distributed architectures, databases, and AI solutions.",
          badges: ["Clean Architecture", "Software Architecture", "Databases", "QA"],
        },
        {
          type: "academica",
          title: "Systems Technician",
          organization: "SENA (National Training Service)",
          period: "Certified (Ficha 2492764)",
          description: "Certified technical education in hardware and software maintenance, workstation assembly, network setup, structured cabling, and OS deployment.",
          badges: ["Hardware", "Data Networks", "Technical Support", "Operating Systems"],
        },
      ],
    },
    testimonials: {
      level: "LEVEL 4",
      title: "TESTIMONIALS",
      subtitle: "What other players who have teamed up with me say.",
      emptyTitle: "INSERT COIN",
      emptyDesc: "This level is loading: testimonials from professors and classmates are coming soon.",
    },
    extra: {
      level: "BONUS 1",
      title: "STACK & TOOLS",
      subtitle: "My inventory: the languages and frameworks I use, and the tools in my workflow.",
      sub1Title: "LANGUAGES & FRAMEWORKS",
      sub2Title: "TOOLS",
      langItems: [
        {
          name: "Java (Spring Boot)",
          category: "Enterprise backend & architecture",
          description: "Backend development with Spring Boot, RESTful APIs, dependency injection, Hibernate/JPA, SOLID principles, and Clean Architecture.",
          level: "Core",
        },
        {
          name: "Python (FastAPI / AI)",
          category: "APIs, microservices & AI",
          description: "High-performance APIs with FastAPI, workflow automation, data analysis, and AI integration.",
          level: "Engineering",
        },
        {
          name: "TypeScript (Next.js / React)",
          category: "Frontend & Full-Stack",
          description: "Strict typing, React Server Components, Server Actions, App Router, and modular architecture in Next.js.",
          level: "Core",
        },
        {
          name: "JavaScript (Node.js / Express)",
          category: "Runtime & async services",
          description: "Node.js backend services with Express, event-driven architecture, async patterns, and REST APIs.",
          level: "Core",
        },
        {
          name: "SQL (PostgreSQL / MySQL)",
          category: "Relational databases",
          description: "PostgreSQL, SQLite, and MySQL: entity-relationship design, normalization, advanced queries, joins, and ACID transactions.",
          level: "Data",
        },
      ],
      toolsItems: [
        {
          name: "Google Antigravity IDE",
          category: "Agentic development",
          description: "Development environment powered by autonomous agents and deep context analysis.",
        },
        {
          name: "Cursor AI",
          category: "AI-assisted development",
          description: "LLM-assisted programming for fast refactoring and unit test generation.",
        },
        {
          name: "VS Code",
          category: "Code editor",
          description: "Custom setup with strict linters, advanced debugging, and TypeScript tooling.",
        },
        {
          name: "Blender",
          category: "3D modeling",
          description: "Low-poly modeling, stylized texturing, and optimized model export for web experiences.",
        },
        {
          name: "Next.js",
          category: "Full-Stack framework",
          description: "App Router, Server Components, Server Actions, streaming, and performance optimization.",
        },
        {
          name: "AWS",
          category: "Cloud infrastructure",
          description: "Cloud deployments, serverless architectures, S3, Lambda, and domain setup.",
        },
      ],
    },
    contact: {
      level: "LEVEL 5",
      title: "CONTACT",
      subtitle: "Have a project or a proposal? Write me through the form or my direct channels.",
      channelsTitle: "DIRECT CHANNELS",
      emailLabel: "EMAIL",
      copyEmail: "Copy email",
      githubAction: "GO ▶",
      linkedinAction: "CONNECT ▶",
      whatsappSub: "Direct message",
      whatsappAction: "CHAT ▶",
      formTitle: "SEND A MESSAGE",
      nameLabel: "Name",
      namePlaceholder: "e.g. Ada Lovelace",
      emailFieldLabel: "Email",
      emailPlaceholder: "youremail@domain.com",
      messageLabel: "Message",
      messagePlaceholder: "Tell me about your project or proposal...",
      send: "SEND",
      sending: "SENDING...",
      successMsg: "Message sent! I will reply as soon as possible.",
      mailtoMsg: "Your email app opened with the message ready. Just hit send.",
      errorMsg: "The message could not be sent. Please try again or email me directly.",
    },
    visits: {
      level: "BONUS 2",
      title: "COMPANY VISITS",
      subtitle: "Technical tours and talks at tech companies in Medellín (UCC Software Engineering academic route).",
      areaPrefix: "AREA",
      takeawaysHeader: "ACHIEVEMENTS UNLOCKED",
      photoLabel: "PHOTO",
    },
    footer: {
      thanks: "THANKS FOR PLAYING!",
      copyright: "Sebastián. All rights reserved.",
      backToTop: "TOP",
      quickLinks: "QUICK LINKS",
      madeWith: "Made with Next.js + Tailwind CSS",
      location: "Pasto, Colombia",
    },
  },
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>("es");
  const [theme, setThemeState] = useState<Theme>("light");

  useEffect(() => {
    // Leer preferencias guardadas
    try {
      const savedLang = localStorage.getItem("sebas_lang");
      if (savedLang === "es" || savedLang === "en") {
        setLangState(savedLang);
        document.documentElement.lang = savedLang;
      }
      const savedTheme = localStorage.getItem("sebas_theme");
      if (savedTheme === "dark" || savedTheme === "light") {
        setThemeState(savedTheme);
        document.documentElement.classList.toggle("dark", savedTheme === "dark");
      }
    } catch {
      /* sin almacenamiento disponible */
    }
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    document.documentElement.lang = newLang;
    try {
      localStorage.setItem("sebas_lang", newLang);
    } catch {
      /* sin almacenamiento disponible */
    }
  };

  const toggleLang = () => setLang(lang === "es" ? "en" : "es");

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    try {
      localStorage.setItem("sebas_theme", newTheme);
    } catch {
      /* sin almacenamiento disponible */
    }
  };

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  const t = (path: string) => {
    const keys = path.split(".");
    let current: any = translations[lang];
    for (const key of keys) {
      if (current && typeof current === "object" && key in current) {
        current = current[key];
      } else {
        return path;
      }
    }
    return current;
  };

  return (
    <AppContext.Provider value={{ lang, setLang, toggleLang, theme, setTheme, toggleTheme, t }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
}
