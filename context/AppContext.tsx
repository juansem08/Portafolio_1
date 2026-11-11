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
      extra: "Adicional",
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
      pillarsLabel: "// LO QUE HAGO",
      pillar1Badge: "WEB",
      pillar1Title: "Desarrollo web",
      pillar1Desc: "Sitios y aplicaciones con Next.js, React, TypeScript y Tailwind CSS.",
      pillar2Badge: "IA",
      pillar2Title: "Aplicaciones con IA",
      pillar2Desc: "Integro Google Gemini en apps móviles, de escritorio y para relojes inteligentes.",
      pillar3Badge: "BACKEND",
      pillar3Title: "Backend y datos",
      pillar3Desc: "APIs con Node.js, Express, Spring Boot y FastAPI sobre PostgreSQL, Supabase y MongoDB.",
      specsTitle: "IDIOMAS",
      lang1: "Español",
      lang1Level: "Nativo",
      lang2: "Inglés",
      lang2Level: "B1",
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
      uccFooter: "UCC • ING. DE SOFTWARE (5.º SEMESTRE) • PASTO",
      senaFooter: "SENA • TÉCNICO EN SISTEMAS (TITULADO 2023)",
      semesterLabel: "5.º semestre · Ingeniería de Software",
      photoCaption: "Sebastián Mayorga",
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
      badgeCount: "PROYECTOS // PORTAFOLIO",
      statusLive: "LIVE / DEPLOYED",
      statusCode: "CÓDIGO EN GITHUB",
      techStackTitle: "TECNOLOGÍAS / STACK:",
      btnCode: "VER CÓDIGO",
      btnDemo: "DEMO EN VIVO",
      demoSoon: "DEMO PRÓXIMAMENTE",
      screenshotOf: "Captura de",
    },
    // Experience
    experience: {
      sectionTape: "// 04. REGISTRO CRONOLÓGICO & TRAYECTORIA",
      title: "EXPERIENCIA & FORMACIÓN",
      subtitle: "Tarjetas de archivo técnico que documentan mi recorrido en desarrollo de arquitectura limpia, proyectos de ingeniería y formación académica.",
      workBadge: "FICHA // LABORAL",
      academicBadge: "FICHA // ACADÉMICA",
      workHeading: "EXPERIENCIA LABORAL",
      academicHeading: "EXPERIENCIA ACADÉMICA",
      orgPrefix: "ORG:",
      items: [
        {
          type: "laboral",
          title: "Desarrollador web",
          organization: "Taller de calibración y reparación automotriz — Pasto, Nariño",
          period: "2026",
          description: "Desarrollador web independiente. Desarrollé el sitio web del taller, con el apoyo del colaborador Jorge Nicolás Rodríguez:",
          details: [
            "Catálogo de repuestos con página de detalle por producto.",
            "Formulario de agendamiento de citas con su propia ruta de API.",
            "Botón de contacto directo por WhatsApp para los clientes.",
            "Esquema de base de datos en Supabase (PostgreSQL) para productos, inventario, clientes y citas.",
          ],
          badges: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "Supabase"],
          github: "https://github.com/Sebas082/Calibracion_Reparacion",
          demo: "https://calibracion-reparacion.vercel.app",
        },
        {
          type: "academica",
          title: "Ingeniería de Software",
          organization: "Universidad Cooperativa de Colombia — Pasto, Nariño",
          period: "En curso · 5.º semestre",
          description: "Pregrado en Ingeniería de Software con formación en diseño de software, programación orientada a objetos, bases de datos y desarrollo de soluciones con IA.",
          details: ["Asistencia a cuatro ediciones del Seminario de Software, organizado por la universidad."],
          badges: ["Diseño de Software", "POO", "Bases de Datos", "Java"],
        },
        {
          type: "academica",
          title: "Técnico en Sistemas",
          organization: "SENA — Centro Agroforestal y Acuícola Arapaima (Regional Putumayo)",
          period: "Feb 2022 – Dic 2023",
          description: "Programa técnico presencial, titulado el 7 de noviembre de 2023 en Sibundoy. Competencias en implementación de redes físicas de datos y cableado estructurado (240 h), mantenimiento físico y lógico de equipos de cómputo (240 h), atención de requerimientos de clientes (192 h), herramientas TIC e inglés (192 h), con una etapa práctica de 864 h.",
          badges: ["Redes de Datos", "Cableado Estructurado", "Mantenimiento de Equipos", "Soporte Técnico"],
        },
      ],
    },
    // Testimonials
    testimonials: {
      sectionTape: "// 03. REFERENCIAS & TESTIMONIOS",
      title: "TESTIMONIOS",
      subtitle: "Opiniones de personas con las que he trabajado: instructores, clientes y colaboradores.",
      photoOf: "Foto de",
      reservedTape: "// REGISTRO EN ESPERA // ACTUALIZACIÓN",
      reservedTitle: "Buzón de Referencias en Proceso",
      reservedDesc: "Espacio reservado para testimonios y referencias de colegas de ingeniería y líderes técnicos.",
      reservedQuote: "“Próximamente nuevas reseñas y recomendaciones profesionales añadidas a este expediente.”",
    },
    // Stack & Languages
    extra: {
      sectionTape: "// 06.1 HABILIDADES TÉCNICAS",
      title: "LENGUAJES, FRAMEWORKS & HERRAMIENTAS",
      subtitle: "Los lenguajes y frameworks que uso en mis proyectos, junto a las herramientas de mi flujo de trabajo.",
      sub1Title: "LENGUAJES & FRAMEWORKS PRINCIPALES",
      sub1Badge: "5 STACKS ACTIVOS",
      verified: "VERIFICADO",
      statusOk: "OK",
      sub2Title: "HERRAMIENTAS",
      sub2Badge: "FLUJO DE TRABAJO",
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
          name: "Git & GitHub",
          category: "Control de versiones",
          description: "Repositorios, ramas y commits para todos mis proyectos; despliegues automáticos a Vercel desde GitHub.",
          badge: "Diario",
        },
        {
          name: "Google Gemini API",
          category: "Inteligencia artificial",
          description: "OCR, resúmenes, clasificación de texto y generación de respuestas en Clarify, el Clasificador de Reseñas y la app de noticias.",
          badge: "IA",
        },
        {
          name: "Firebase",
          category: "Autenticación",
          description: "Registro, verificación por correo e inicio de sesión de usuarios en aplicaciones móviles.",
          badge: "Auth",
        },
        {
          name: "Supabase",
          category: "Base de datos",
          description: "PostgreSQL gestionado para productos, inventario, clientes y citas en el sitio del taller.",
          badge: "PostgreSQL",
        },
        {
          name: "Claude",
          category: "Asistente de IA",
          description: "Apoyo para diseñar, revisar y documentar código durante el desarrollo.",
          badge: "Asistente",
        },
        {
          name: "Google Antigravity",
          category: "Entorno de desarrollo",
          description: "IDE con agentes de IA para escribir y refactorizar código.",
          badge: "IDE",
        },
      ],
    },
    // Sección adicional
    additional: {
      sectionTape: "// 06. SECCIÓN ADICIONAL",
      title: "ADICIONAL",
      subtitle: "Habilidades técnicas, certificados y visitas empresariales que complementan mi formación.",
      skills: "Habilidades técnicas",
      skillsDesc: "Lenguajes, frameworks y herramientas",
      certificates: "Certificados",
      certificatesDesc: "Cursos complementarios",
      visits: "Visitas empresariales",
      visitsDesc: "Ruta tecnológica en Medellín",
    },
    certificates: {
      sectionTape: "// 06.2 CERTIFICADOS",
      title: "CERTIFICADOS",
      subtitle: "Cursos complementarios y participaciones, además de mi formación principal.",
      verify: "Verificar",
    },
    // Contact
    contact: {
      sectionTape: "// 05. CANAL DE DESPACHO & TELEGRAMA",
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
      sectionTape: "// 06.3 VISITAS EMPRESARIALES",
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
      extra: "Additional",
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
      pillarsLabel: "// WHAT I DO",
      pillar1Badge: "WEB",
      pillar1Title: "Web development",
      pillar1Desc: "Websites and apps with Next.js, React, TypeScript and Tailwind CSS.",
      pillar2Badge: "AI",
      pillar2Title: "AI-powered apps",
      pillar2Desc: "I integrate Google Gemini into mobile, desktop and smartwatch apps.",
      pillar3Badge: "BACKEND",
      pillar3Title: "Backend & data",
      pillar3Desc: "APIs with Node.js, Express, Spring Boot and FastAPI on PostgreSQL, Supabase and MongoDB.",
      specsTitle: "LANGUAGES",
      lang1: "Spanish",
      lang1Level: "Native",
      lang2: "English",
      lang2Level: "B1",
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
      uccFooter: "UCC • SOFTWARE ENG (5TH SEMESTER) • PASTO",
      senaFooter: "SENA • SYSTEMS TECHNICIAN (GRADUATED 2023)",
      semesterLabel: "5th semester · Software Engineering",
      photoCaption: "Sebastián Mayorga",
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
      badgeCount: "PROJECTS // PORTFOLIO",
      statusLive: "LIVE / DEPLOYED",
      statusCode: "CODE ON GITHUB",
      techStackTitle: "TECH STACK / MODULES:",
      btnCode: "VIEW CODE",
      btnDemo: "LIVE DEMO",
      demoSoon: "DEMO COMING SOON",
      screenshotOf: "Screenshot of",
    },
    // Experience
    experience: {
      sectionTape: "// 04. CHRONOLOGICAL LOG & TIMELINE",
      title: "EXPERIENCE & EDUCATION",
      subtitle: "Technical index cards documenting my journey through clean architecture development, engineering projects, and academic background.",
      workBadge: "RECORD // PROFESSIONAL",
      academicBadge: "RECORD // ACADEMIC",
      workHeading: "WORK EXPERIENCE",
      academicHeading: "ACADEMIC BACKGROUND",
      orgPrefix: "ORG:",
      items: [
        {
          type: "laboral",
          title: "Web Developer",
          organization: "Automotive calibration and repair shop — Pasto, Nariño",
          period: "2026",
          description: "Freelance web developer. I built the shop's website, with support from collaborator Jorge Nicolás Rodríguez:",
          details: [
            "Auto parts catalog with a detail page for each product.",
            "Appointment booking form with its own API route.",
            "Direct WhatsApp contact button for customers.",
            "Supabase (PostgreSQL) database schema for products, inventory, customers and appointments.",
          ],
          badges: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "Supabase"],
          github: "https://github.com/Sebas082/Calibracion_Reparacion",
          demo: "https://calibracion-reparacion.vercel.app",
        },
        {
          type: "academica",
          title: "Software Engineering",
          organization: "Universidad Cooperativa de Colombia — Pasto, Nariño",
          period: "In progress · 5th semester",
          description: "Software Engineering undergraduate degree covering software design, object-oriented programming, databases and AI solutions.",
          details: ["Attended four editions of the Software Seminar organized by the university."],
          badges: ["Software Design", "OOP", "Databases", "Java"],
        },
        {
          type: "academica",
          title: "Systems Technician",
          organization: "SENA — Centro Agroforestal y Acuícola Arapaima (Putumayo)",
          period: "Feb 2022 – Dec 2023",
          description: "In-person technical program, degree awarded on November 7, 2023 in Sibundoy. Skills in physical data network implementation and structured cabling (240 h), hardware and software computer maintenance (240 h), customer request handling (192 h), ICT tools and English (192 h), plus an 864-hour practical stage.",
          badges: ["Data Networks", "Structured Cabling", "Computer Maintenance", "Technical Support"],
        },
      ],
    },
    // Testimonials
    testimonials: {
      sectionTape: "// 03. ENDORSEMENTS & TESTIMONIALS",
      title: "TESTIMONIALS",
      subtitle: "What people I have worked with say: instructors, clients and collaborators.",
      photoOf: "Photo of",
      reservedTape: "// STANDBY LOG // QUEUED",
      reservedTitle: "Reference Inbox In Progress",
      reservedDesc: "Dedicated space for endorsements and reviews from engineering colleagues and tech leads.",
      reservedQuote: "“New professional reviews and recommendations will be added to this dossier shortly.”",
    },
    // Stack & Languages
    extra: {
      sectionTape: "// 06.1 TECHNICAL SKILLS",
      title: "LANGUAGES, FRAMEWORKS & TOOLS",
      subtitle: "The languages and frameworks I use in my projects, along with the tools in my workflow.",
      sub1Title: "CORE LANGUAGES & FRAMEWORKS",
      sub1Badge: "5 ACTIVE STACKS",
      verified: "VERIFIED",
      statusOk: "OK",
      sub2Title: "TOOLS",
      sub2Badge: "WORKFLOW",
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
          name: "Git & GitHub",
          category: "Version control",
          description: "Repositories, branches and commits for all my projects; automatic deployments to Vercel from GitHub.",
          badge: "Daily",
        },
        {
          name: "Google Gemini API",
          category: "Artificial intelligence",
          description: "OCR, summaries, text classification and answer generation in Clarify, the Review Classifier and the news app.",
          badge: "AI",
        },
        {
          name: "Firebase",
          category: "Authentication",
          description: "User sign-up, email verification and sign-in for mobile apps.",
          badge: "Auth",
        },
        {
          name: "Supabase",
          category: "Database",
          description: "Managed PostgreSQL for products, inventory, customers and appointments on the repair shop website.",
          badge: "PostgreSQL",
        },
        {
          name: "Claude",
          category: "AI assistant",
          description: "Help designing, reviewing and documenting code during development.",
          badge: "Assistant",
        },
        {
          name: "Google Antigravity",
          category: "Development environment",
          description: "IDE with AI agents for writing and refactoring code.",
          badge: "IDE",
        },
      ],
    },
    // Additional section
    additional: {
      sectionTape: "// 06. ADDITIONAL SECTION",
      title: "ADDITIONAL",
      subtitle: "Technical skills, certificates and company visits that complement my education.",
      skills: "Technical skills",
      skillsDesc: "Languages, frameworks and tools",
      certificates: "Certificates",
      certificatesDesc: "Complementary courses",
      visits: "Company visits",
      visitsDesc: "Tech tour in Medellín",
    },
    certificates: {
      sectionTape: "// 06.2 CERTIFICATES",
      title: "CERTIFICATES",
      subtitle: "Complementary courses and participations beyond my main education.",
      verify: "Verify",
    },
    // Contact
    contact: {
      sectionTape: "// 05. DISPATCH CHANNEL & TELEGRAM",
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
      sectionTape: "// 06.3 COMPANY VISITS",
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

