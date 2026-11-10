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
    // Navbar
    nav: {
      home: "Inicio",
      about: "Sobre Mí",
      projects: "Proyectos",
      experience: "Experiencia",
      testimonials: "Testimonios",
      workspace: "Stack & Lenguajes",
      contact: "Contacto",
      visits: "Visitas",
      letsTalk: "HABLEMOS // CONECTAR",
      startProject: "HABLEMOS // INICIAR PROYECTO",
    },
    // Hero
    hero: {
      badgeOpenToWork: "INGENIERÍA DE SOFTWARE // OPEN TO WORK",
      labTag: "LAB: SEBASTIAN-SYS // 2026",
      facultyTitle: "FACULTAD DE INGENIERÍA // CREDENCIAL TÉCNICA",
      greeting: "HOLA, SOY",
      name: "Sebastián",
      verified: "VERIFICADO",
      role: ">_ Software Engineer & Lead Software Architect",
      location: "PASTO, COLOMBIA",
      academicSummary: "UCC (ING. SOFTWARE) • SENA (TÉCNICO)",
      academicStatus: "PREGRADO EN PROCESO // TITULADO CERTIFICADO",
      manifestoHeader: "MANIFIESTO_ARQUITECTURA // NOTA DE TALLER",
      manifestoQuote: "“Dos de agua por una de arroz, así es como yo hago el código y así de bueno me queda el arroz.”",
      manifestoAuthor: "— Sebastián // Lead Software Architect",
      downloadCv: "DESCARGAR CV // PDF",
      viewProjects: "VER PROYECTOS",
      pillarsLabel: "// PILARES Y CERTIFICACIÓN",
      pillar1Title: "Capas Desacopladas",
      pillar1Desc: "Dominio, aplicación e infraestructura aisladas.",
      pillar2Title: "Calidad & Testing",
      pillar2Desc: "TDD estricto y cobertura de código >95%.",
      pillar3Title: "Arquitectura Limpia",
      pillar3Desc: "Alta cohesión, bajo acoplamiento y testeabilidad.",
      specsTitle: "SPEC: HARDWARE_SPECS",
      specsDesc: "Software construido con patrones modulares, arquitecturas orientadas a eventos y Next.js App Router de alto desempeño.",
    },
    // About
    about: {
      sectionTape: "// 01. EXPEDIENTE & FILOSOFÍA",
      folderTab: "EXPEDIENTE // SEBAS-SYS-08",
      title: "SOBRE MÍ",
      badgePasto: "PASTO // COL",
      mainBio: "Actualmente curso la carrera de Ingeniería de Software en la Universidad Cooperativa de Colombia. Fuera del ámbito académico, mis principales intereses son la gastronomía, el arte y el cine, con preferencia por los géneros de terror y comedia. Asimismo, disfruto de la música tropical y de las actividades sociales con amigos.",
      card1Title: "Gastronomía, Arte & Cine",
      card1Desc: "Cine de terror y comedia, pasión culinaria y apreciación artística.",
      card2Title: "Música Tropical & Amigos",
      card2Desc: "Ritmos tropicales, actividades sociales y compartir buenos momentos.",
      uccFooter: "UCC • ING. DE SOFTWARE (EN PROCESO) • PASTO",
      senaFooter: "SENA • TÉCNICO EN SISTEMAS (CERTIFICADO)",
      postitLocationTitle: "POST-IT // UBICACIÓN OFICIAL",
      postitLocationCity: "Pasto, Colombia",
      postitLocationQuote: "> Operando desde el suroccidente colombiano para el mundo.",
      postitInterestsTitle: "STICKER PACK // ÁREAS DE INTERÉS",
      coreStackTitle: "LENGUAJES & FRAMEWORKS // CORE STACK:",
      archFocusTitle: "ENFOQUE DE ARQUITECTURA",
      archFocusDesc: "Bajo acoplamiento, alta cohesión y testeabilidad por diseño sistemático.",
      interestsList: ["Gastronomía", "Cine & Terror", "Comedia", "Música Tropical", "Arte", "Vida Social"],
    },
    // Projects
    projects: {
      sectionTape: "// 02. PORTAFOLIO DE DESARROLLO & CÓDIGO",
      title: "PROYECTOS DESTACADOS",
      subtitle: "Soluciones de software completas, arquitecturas desacopladas y plataformas web en producción con código abierto.",
      badgeCount: "4 PROYECTOS // PORTAFOLIO",
      softwareModule: "SOFTWARE MODULE",
      statusLive: "LIVE / DEPLOYED",
      statusDev: "EN DESARROLLO",
      techStackTitle: "TECNOLOGÍAS / STACK:",
      btnCode: "VER CÓDIGO",
      btnDemo: "DEMO EN VIVO",
      codePrivate: "CÓDIGO PRIVADO",
      demoSoon: "DEMO PRÓXIMAMENTE",
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
    // Experience
    experience: {
      sectionTape: "// 03. REGISTRO CRONOLÓGICO & TRAYECTORIA",
      title: "EXPERIENCIA & FORMACIÓN",
      subtitle: "Tarjetas de archivo técnico que documentan mi recorrido en desarrollo de arquitectura limpia, proyectos de ingeniería y formación académica.",
      workBadge: "FICHA // LABORAL",
      academicBadge: "FICHA // ACADÉMICA",
      workHeading: "💼 EXPERIENCIA LABORAL",
      academicHeading: "🎓 EXPERIENCIA ACADÉMICA",
      orgPrefix: "ORG:",
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
          period: "En Proceso (Pregrado)",
          description: "Formación avanzada en arquitectura limpia, ingeniería de calidad de software (QA), patrones de diseño, arquitecturas distribuidas, bases de datos y desarrollo de soluciones con IA.",
          badges: ["Clean Architecture", "Arquitectura de Software", "Bases de Datos", "QA"],
        },
        {
          type: "academica",
          title: "Técnico en Sistemas",
          organization: "SENA (Servicio Nacional de Aprendizaje)",
          period: "Titulada // Certificado (Ficha 2492764)",
          description: "Formación técnica titulada en mantenimiento preventivo y correctivo de hardware y software, ensamble de equipos, configuración de redes de datos, cableado estructurado e implementación de sistemas operativos.",
          badges: ["Mantenimiento & Hardware", "Redes de Datos", "Soporte Técnico", "Sistemas Operativos"],
        },
      ],
    },
    // Testimonials
    testimonials: {
      sectionTape: "// 04. REFERENCIAS & TESTIMONIOS",
      title: "TESTIMONIOS",
      subtitle: "Opiniones de colegas de ingeniería y desarrolladores que han compartido equipo y arquitectura conmigo.",
      reservedTape: "// REGISTRO EN ESPERA // ACTUALIZACIÓN",
      reservedTitle: "Buzón de Referencias en Proceso",
      reservedDesc: "Espacio reservado para testimonios y referencias de colegas de ingeniería y líderes técnicos.",
      reservedQuote: "“Próximamente nuevas reseñas y recomendaciones profesionales añadidas a este expediente.”",
    },
    // Stack & Languages
    extra: {
      sectionTape: "// 05. ARSENAL TÉCNICO & STACK",
      title: "LENGUAJES, FRAMEWORKS & ENTORNO",
      subtitle: "Catálogo completo de los lenguajes y frameworks que domino y utilizo en ingeniería de software, junto al banco de herramientas de mi flujo de trabajo.",
      sub1Title: "LENGUAJES & FRAMEWORKS PRINCIPALES",
      sub1Badge: "5 STACKS ACTIVOS",
      verified: "VERIFICADO",
      statusOk: "OK",
      sub2Title: "ENTORNO DE TRABAJO, CLOUD & FRAMEWORKS",
      sub2Badge: "HERRAMIENTAS CLAVE",
      moduleActive: "MODULO // ACTIVO",
      readyStatus: "READY",
      langItems: [
        {
          name: "Java (Spring Boot)",
          code: "JAVA",
          category: "Backend & Arquitectura Empresarial",
          description: "Desarrollo backend robusto con Spring Boot, APIs RESTful, inyección de dependencias, Hibernate/JPA, principios SOLID y Clean Architecture.",
          level: "Producción & Core",
        },
        {
          name: "Python (FastAPI / IA)",
          code: "PY",
          category: "APIs, Microservicios & IA",
          description: "Construcción de APIs de alto rendimiento con FastAPI, automatización de procesos, análisis de datos e integración de soluciones con IA.",
          level: "Enfoque Ingeniería",
        },
        {
          name: "TypeScript (Next.js / React)",
          code: "TS",
          category: "Frontend & Full-Stack Escalable",
          description: "Tipado estático estricto, React Server Components, Server Actions, App Router y arquitectura modular desacoplada en Next.js.",
          level: "Producción & Core",
        },
        {
          name: "JavaScript (Node.js / Express)",
          code: "JS",
          category: "Runtime & Servicios Asíncronos",
          description: "Servicios backend en Node.js con Express, arquitectura basada en eventos, asincronía avanzada y APIs REST dinámicas.",
          level: "Producción & Core",
        },
        {
          name: "SQL (PostgreSQL / MySQL)",
          code: "SQL",
          category: "Bases de Datos Relacionales",
          description: "PostgreSQL, SQLite y MySQL: diseño entidad-relación, normalización de esquemas, consultas avanzadas, joins y transacciones ACID.",
          level: "Gestión de Datos",
        },
      ],
      toolsItems: [
        {
          name: "Google Antigravity IDE",
          category: "Agentic Engineering & Architecture",
          description: "Entorno de desarrollo de última generación impulsado por agentes autónomos y análisis de contexto profundo.",
          badge: "Primary Agentic IDE",
        },
        {
          name: "Cursor AI",
          category: "AI-Assisted Development",
          description: "Programación asistida por modelos de lenguaje para refactorización veloz y generación de pruebas unitarias.",
          badge: "AI Pair Programming",
        },
        {
          name: "VS Code",
          category: "Core Code Editor",
          description: "Configuración personalizada con linters estrictos, debugging avanzado y extensiones de TypeScript.",
          badge: "Production Setup",
        },
        {
          name: "Blender",
          category: "3D Modeling & Rendering",
          description: "Modelado low-poly, texturizado estilizado y exportación optimizada de mallas para experiencias web interactivas.",
          badge: "Low-Poly & Assets",
        },
        {
          name: "Next.js",
          category: "Full-Stack Framework",
          description: "App Router, Server Components, Server Actions, streaming y optimización extrema de rendimiento.",
          badge: "Core Framework",
        },
        {
          name: "AWS",
          category: "Cloud Infrastructure",
          description: "Despliegues en la nube, arquitecturas serverless, S3, Lambda y configuración de dominios con alta disponibilidad.",
          badge: "Cloud Computing",
        },
      ],
    },
    // Contact
    contact: {
      sectionTape: "// 06. CANAL DE DESPACHO & TELEGRAMA",
      title: "CONTACTO DIRECTO",
      subtitle: "¿Tienes un proyecto, propuesta arquitectónica o desafío técnico? Envía un telegrama o conéctate en mis canales oficiales.",
      transmissionTitle: "TRANSMISIÓN // PASTELERO",
      stationBadge: "ESTAFETA: COL",
      emailLabel: "CORREO ELECTRÓNICO OFICIAL",
      socialLabel: "REDES & REPOSITORIOS OFICIALES",
      whatsappSub: "Mensaje directo",
      whatsappAction: "CHATEAR →",
      githubAction: "IR →",
      linkedinAction: "CONECTAR →",
      airMailStamp: "AIR-MAIL // PASTO NAR POSTAL SERVICE",
      dispatchTitle: "FORMATO DE DESPACHO // TELEGRAMA",
      priorityBadge: "PRIORIDAD ALTA",
      successMsg: "¡Telegrama transmitido con éxito! Responderé a la brevedad posible.",
      mailtoMsg: "Se abrió tu aplicación de correo con el mensaje listo. Solo dale enviar.",
      errorMsg: "No se pudo enviar el mensaje. Inténtalo de nuevo o escríbeme directo al correo.",
      senderNameLabel: "Nombre del Remitente:",
      senderNamePlaceholder: "Ej. Ada Lovelace",
      emailReturnLabel: "Dirección de Retorno (Email):",
      emailReturnPlaceholder: "tucorreo@dominio.com",
      messageLabel: "Texto del Telegrama / Mensaje:",
      messagePlaceholder: "Describe tu propuesta técnica, consulta de arquitectura o mensaje...",
      sendingMsg: "TRANSMITIENDO TELEGRAMA...",
      sendMsg: "ENVIAR TELEGRAMA // DESPACHAR AHORA",
    },
    // Company Visits
    visits: {
      sectionTape: "// 07. ANEXO EXTRA // INMERSIÓN INDUSTRIAL & VISITAS EMPRESARIALES",
      title: "VISITAS EMPRESARIALES",
      subtitle: "Recorridos técnicos, inmersión en cultura de ingeniería y conferencias en las empresas tecnológicas más influyentes de Medellín (Ruta Académica UCC - Ingeniería de Software).",
      stampRoute: "5 EMPRESAS // RUTA MEDELLÍN TECH",
      areaPrefix: "ÁREA:",
      takeawaysHeader: "PUNTOS CLAVE DE APRENDIZAJE:",
      photoLabel: "FOTO",
    },
    // Footer
    footer: {
      copyright: "Sebastián. Todos los derechos reservados.",
      quickLinks: "ENLACES RÁPIDOS",
      madeWith: "Hecho con Next.js + Tailwind CSS",
      backToTop: "SUBIR",
      techSubline: "COTTON & NOIR PALETTE // TACTILE SCRAPBOOK • NEXT.JS 14 • TAILWIND CSS",
      locationCleanArch: "PASTO, COLOMBIA • ARQUITECTURA LIMPIA",
    },
  },
  en: {
    // Navbar
    nav: {
      home: "Home",
      about: "About Me",
      projects: "Projects",
      experience: "Experience",
      testimonials: "Testimonials",
      workspace: "Stack & Tech",
      contact: "Contact",
      visits: "Visits",
      letsTalk: "LET'S TALK // CONNECT",
      startProject: "LET'S TALK // START PROJECT",
    },
    // Hero
    hero: {
      badgeOpenToWork: "SOFTWARE ENGINEERING // OPEN TO WORK",
      labTag: "LAB: SEBASTIAN-SYS // 2026",
      facultyTitle: "FACULTY OF ENGINEERING // TECHNICAL ID",
      greeting: "HELLO, I'M",
      name: "Sebastián",
      verified: "VERIFIED",
      role: ">_ Software Engineer & Lead Software Architect",
      location: "PASTO, COLOMBIA",
      academicSummary: "UCC (SW ENG) • SENA (TECH CERT)",
      academicStatus: "UNDERGRAD IN PROGRESS // CERTIFIED GRADUATE",
      manifestoHeader: "ARCHITECTURE_MANIFESTO // WORKSHOP NOTE",
      manifestoQuote: "“Two parts water to one part rice; that's how I code, and that's why my rice turns out delicious.”",
      manifestoAuthor: "— Sebastián // Lead Software Architect",
      downloadCv: "DOWNLOAD CV // PDF",
      viewProjects: "VIEW PROJECTS",
      pillarsLabel: "// CORE PILLARS & CERTIFICATION",
      pillar1Title: "Decoupled Layers",
      pillar1Desc: "Domain, application, and infrastructure completely isolated.",
      pillar2Title: "Quality & Testing",
      pillar2Desc: "Strict TDD and code coverage >95%.",
      pillar3Title: "Clean Architecture",
      pillar3Desc: "High cohesion, low coupling, and testability by design.",
      specsTitle: "SPEC: HARDWARE_SPECS",
      specsDesc: "Software built with modular patterns, event-driven architectures, and high-performance Next.js App Router.",
    },
    // About
    about: {
      sectionTape: "// 01. DOSSIER & PHILOSOPHY",
      folderTab: "DOSSIER // SEBAS-SYS-08",
      title: "ABOUT ME",
      badgePasto: "PASTO // COL",
      mainBio: "I am currently pursuing a degree in Software Engineering at Universidad Cooperativa de Colombia. Beyond academics, my core passions include culinary arts, visual arts, and cinema, with a special love for horror and comedy genres. I also enjoy tropical music and social activities with friends.",
      card1Title: "Gastronomy, Art & Cinema",
      card1Desc: "Horror and comedy cinema, culinary passion, and artistic appreciation.",
      card2Title: "Tropical Music & Friends",
      card2Desc: "Tropical rhythms, social hangouts, and sharing good moments.",
      uccFooter: "UCC • SOFTWARE ENG (IN PROGRESS) • PASTO",
      senaFooter: "SENA • SYSTEMS TECHNICIAN (CERTIFIED)",
      postitLocationTitle: "POST-IT // OFFICIAL LOCATION",
      postitLocationCity: "Pasto, Colombia",
      postitLocationQuote: "> Operating from southwestern Colombia to the world.",
      postitInterestsTitle: "STICKER PACK // PASSIONS & INTERESTS",
      coreStackTitle: "LANGUAGES & FRAMEWORKS // CORE STACK:",
      archFocusTitle: "ARCHITECTURE FOCUS",
      archFocusDesc: "Low coupling, high cohesion, and testability through systematic design.",
      interestsList: ["Gastronomy", "Cinema & Horror", "Comedy", "Tropical Music", "Art", "Social Life"],
    },
    // Projects
    projects: {
      sectionTape: "// 02. CODE PORTFOLIO & DEVELOPMENT",
      title: "FEATURED PROJECTS",
      subtitle: "Complete software solutions, decoupled architectures, and production-ready web platforms with open source code.",
      badgeCount: "4 PROJECTS // PORTFOLIO",
      softwareModule: "SOFTWARE MODULE",
      statusLive: "LIVE / DEPLOYED",
      statusDev: "IN DEVELOPMENT",
      techStackTitle: "TECH STACK / MODULES:",
      btnCode: "VIEW CODE",
      btnDemo: "LIVE DEMO",
      codePrivate: "PRIVATE CODE",
      demoSoon: "DEMO COMING SOON",
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
    // Experience
    experience: {
      sectionTape: "// 03. CHRONOLOGICAL LOG & TIMELINE",
      title: "EXPERIENCE & EDUCATION",
      subtitle: "Technical index cards documenting my journey through clean architecture development, engineering projects, and academic background.",
      workBadge: "RECORD // PROFESSIONAL",
      academicBadge: "RECORD // ACADEMIC",
      workHeading: "💼 WORK EXPERIENCE",
      academicHeading: "🎓 ACADEMIC BACKGROUND",
      orgPrefix: "ORG:",
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
          period: "In Progress (Undergrad)",
          description: "Advanced training in clean architecture, software quality engineering (QA), design patterns, distributed architectures, databases, and AI solutions.",
          badges: ["Clean Architecture", "Software Architecture", "Databases", "QA"],
        },
        {
          type: "academica",
          title: "Systems Technician",
          organization: "SENA (National Training Service)",
          period: "Certified Graduate (Ficha 2492764)",
          description: "Certified technical education in hardware and software maintenance, workstation assembly, network routing, structured cabling, and OS deployment.",
          badges: ["Hardware & Maintenance", "Data Networks", "Technical Support", "Operating Systems"],
        },
      ],
    },
    // Testimonials
    testimonials: {
      sectionTape: "// 04. ENDORSEMENTS & TESTIMONIALS",
      title: "TESTIMONIALS",
      subtitle: "Perspectives from engineering peers and software developers who have collaborated with me.",
      reservedTape: "// STANDBY LOG // QUEUED",
      reservedTitle: "Reference Inbox In Progress",
      reservedDesc: "Dedicated space for endorsements and reviews from engineering colleagues and tech leads.",
      reservedQuote: "“New professional reviews and recommendations will be added to this dossier shortly.”",
    },
    // Stack & Languages
    extra: {
      sectionTape: "// 05. TECHNICAL ARSENAL & STACK",
      title: "LANGUAGES, FRAMEWORKS & WORKSPACE",
      subtitle: "Comprehensive directory of programming languages and frameworks I master, alongside the toolchain powering my daily workflow.",
      sub1Title: "CORE LANGUAGES & FRAMEWORKS",
      sub1Badge: "5 ACTIVE STACKS",
      verified: "VERIFIED",
      statusOk: "OK",
      sub2Title: "WORKSPACE, CLOUD & FRAMEWORKS",
      sub2Badge: "KEY TOOLCHAIN",
      moduleActive: "MODULE // ACTIVE",
      readyStatus: "READY",
      langItems: [
        {
          name: "Java (Spring Boot)",
          code: "JAVA",
          category: "Enterprise Backend & Architecture",
          description: "Robust backend development with Spring Boot, RESTful APIs, dependency injection, Hibernate/JPA, SOLID principles, and Clean Architecture.",
          level: "Production & Core",
        },
        {
          name: "Python (FastAPI / AI)",
          code: "PY",
          category: "APIs, Microservices & AI",
          description: "High-performance API development with FastAPI, workflow automation, data analysis, and AI solution integration.",
          level: "Engineering Focus",
        },
        {
          name: "TypeScript (Next.js / React)",
          code: "TS",
          category: "Scalable Frontend & Full-Stack",
          description: "Strict static typing, React Server Components, Server Actions, App Router, and decoupled architecture in Next.js.",
          level: "Production & Core",
        },
        {
          name: "JavaScript (Node.js / Express)",
          code: "JS",
          category: "Runtime & Async Services",
          description: "Backend services in Node.js with Express, event-driven architecture, advanced concurrency, and dynamic REST APIs.",
          level: "Production & Core",
        },
        {
          name: "SQL (PostgreSQL / MySQL)",
          code: "SQL",
          category: "Relational Databases",
          description: "PostgreSQL, SQLite, and MySQL: entity-relationship design, schema normalization, optimized queries, joins, and ACID transactions.",
          level: "Data Management",
        },
      ],
      toolsItems: [
        {
          name: "Google Antigravity IDE",
          category: "Agentic Engineering & Architecture",
          description: "Next-generation software development environment powered by autonomous agents and deep contextual analysis.",
          badge: "Primary Agentic IDE",
        },
        {
          name: "Cursor AI",
          category: "AI-Assisted Development",
          description: "LLM-assisted programming for rapid refactoring, test generation, and intelligent scaffolding.",
          badge: "AI Pair Programming",
        },
        {
          name: "VS Code",
          category: "Core Code Editor",
          description: "Custom configuration with strict linters, advanced debugging, and rich TypeScript tooling.",
          badge: "Production Setup",
        },
        {
          name: "Blender",
          category: "3D Modeling & Rendering",
          description: "Low-poly modeling, stylized texturing, and optimized mesh export for interactive web 3D experiences.",
          badge: "Low-Poly & Assets",
        },
        {
          name: "Next.js",
          category: "Full-Stack Framework",
          description: "App Router, Server Components, Server Actions, streaming, and extreme performance optimization.",
          badge: "Core Framework",
        },
        {
          name: "AWS",
          category: "Cloud Infrastructure",
          description: "Cloud deployments, serverless architectures, S3, Lambda, and high-availability domain setup.",
          badge: "Cloud Computing",
        },
      ],
    },
    // Contact
    contact: {
      sectionTape: "// 06. DISPATCH CHANNEL & TELEGRAM",
      title: "DIRECT CONTACT",
      subtitle: "Have a project, architectural proposal, or technical challenge? Send a telegram or connect via official channels.",
      transmissionTitle: "TRANSMISSION // STATION",
      stationBadge: "POST: COL",
      emailLabel: "OFFICIAL DIRECT EMAIL",
      socialLabel: "OFFICIAL CHANNELS & REPOSITORIES",
      whatsappSub: "Direct message",
      whatsappAction: "CHAT NOW →",
      githubAction: "VISIT →",
      linkedinAction: "CONNECT →",
      airMailStamp: "AIR-MAIL // PASTO NAR POSTAL SERVICE",
      dispatchTitle: "DISPATCH FORM // TELEGRAM",
      priorityBadge: "HIGH PRIORITY",
      successMsg: "Telegram transmitted successfully! I will reply as soon as possible.",
      mailtoMsg: "Your email app opened with the message ready. Just hit send.",
      errorMsg: "The message could not be sent. Please try again or email me directly.",
      senderNameLabel: "Sender's Name:",
      senderNamePlaceholder: "e.g. Ada Lovelace",
      emailReturnLabel: "Return Address (Email):",
      emailReturnPlaceholder: "youremail@domain.com",
      messageLabel: "Telegram Text / Message:",
      messagePlaceholder: "Describe your technical inquiry, project proposal, or message...",
      sendingMsg: "TRANSMITTING TELEGRAM...",
      sendMsg: "SEND TELEGRAM // DISPATCH NOW",
    },
    // Company Visits
    visits: {
      sectionTape: "// 07. EXTRA ANNEX // INDUSTRIAL IMMERSION & CORPORATE VISITS",
      title: "CORPORATE VISITS",
      subtitle: "Technical tours, engineering culture immersion, and conferences across the most influential tech companies in Medellín (UCC Software Engineering Academic Tour).",
      stampRoute: "5 COMPANIES // MEDELLÍN TECH HUB",
      areaPrefix: "AREA:",
      takeawaysHeader: "KEY LEARNING TAKEAWAYS:",
      photoLabel: "PHOTO",
    },
    // Footer
    footer: {
      copyright: "Sebastián. All rights reserved.",
      quickLinks: "QUICK LINKS",
      madeWith: "Made with Next.js + Tailwind CSS",
      backToTop: "BACK TO TOP",
      techSubline: "COTTON & NOIR PALETTE // TACTILE SCRAPBOOK • NEXT.JS 14 • TAILWIND CSS",
      locationCleanArch: "PASTO, COLOMBIA • CLEAN ARCHITECTURE",
    },
  },
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>("es");
  const [theme, setThemeState] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Read saved preferences from localStorage
    const savedLang = localStorage.getItem("sebas_lang") as Language;
    if (savedLang === "es" || savedLang === "en") {
      setLangState(savedLang);
    }
    const savedTheme = localStorage.getItem("sebas_theme") as Theme;
    if (savedTheme === "dark" || savedTheme === "light") {
      setThemeState(savedTheme);
      if (savedTheme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    } else {
      // Default light (cotton)
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem("sebas_lang", newLang);
  };

  const toggleLang = () => {
    const nextLang = lang === "es" ? "en" : "es";
    setLang(nextLang);
  };

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    localStorage.setItem("sebas_theme", newTheme);
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
  };

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
    <AppContext.Provider
      value={{
        lang,
        setLang,
        toggleLang,
        theme,
        setTheme,
        toggleTheme,
        t,
      }}
    >
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

