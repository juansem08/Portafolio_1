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
      cta: "CONTACTO",
      day: "DÍA",
      night: "NOCHE",
      toDay: "Cambiar a turno de día (modo claro)",
      toNight: "Cambiar a turno nocturno (modo oscuro)",
      toLang: "Switch to English",
      menu: "Abrir menú",
      shift: "TURNO NOCTURNO",
    },
    rooms: {
      about: "Expediente",
      projects: "Laboratorio",
      experience: "Archivo",
      testimonials: "Buzón",
      workspace: "Servidores",
      contact: "Recepción",
      visits: "Exterior",
    },
    teasers: {
      about: "Quién soy, qué estudio y qué me gusta.",
      projects: "Los proyectos que he construido, con código y demo.",
      experience: "Mi experiencia laboral y académica.",
      testimonials: "Lo que dicen de mí profesores y compañeros.",
      workspace: "Lenguajes, frameworks y herramientas que uso.",
      contact: "Escríbeme: correo, GitHub y formulario.",
    },
    lurk: {
      motion: "Movimiento detectado",
    },
    postcredits: {
      label: "Escena post créditos",
      time: "6:01 AM",
      line1: "¿Todavía sigues aquí?",
      line2: "El turno terminó… pero el laboratorio nunca queda vacío.",
    },
    decor: {
      neon: "Lab abierto 24/7",
      banner: "¡Feliz lanzamiento v1.0!",
      poster1: "¡No hagas deploy los viernes!",
      wanted: "SE BUSCA",
      wantedSeen: "Visto por última vez en CAM 05",
      flyerTitle: "Tu código te observa",
      flyerSub: "Escribe tests. Siempre.",
    },
    hero: {
      badge: "ID // GUARDIA NOCTURNO",
      status: "DISPONIBLE PARA PROYECTOS",
      greeting: "Hola, soy",
      name: "SEBASTIÁN",
      role: "Software Engineer & Software Architect",
      tagline: "“Dos de agua por una de arroz, así es como yo hago el código y así de bueno me queda el arroz.”",
      location: "PASTO, COLOMBIA",
      downloadCv: "DESCARGAR CV",
      viewProjects: "VER PROYECTOS",
      photoAlt: "Foto de Sebastián",
      noPhoto: "SIN FOTO",
    },
    game: {
      night: "NOCHE 1",
      sound: "SONIDO",
      start: "INICIAR TURNO",
      retry: "REINTENTAR",
      again: "OTRO TURNO",
      idleHint: "Cambia de cámara para recorrer el portafolio, o inicia el turno y sobrevive hasta las 6 AM.",
      playHint: "Revisa las cámaras. Usa LUZ para ver quién está en la puerta y ciérrala a tiempo. Puertas y luces gastan batería.",
      warnLeft: "Se oye algo en la puerta izquierda…",
      warnRight: "Se oye algo en la puerta derecha…",
      powerOut: "SIN BATERÍA",
      goRoom: "IR A LA SALA",
      motion: "MOVIMIENTO",
      lost: "TE ENCONTRÓ",
      lostDesc: "No llegaste a las 6 AM.",
      wonDesc: "Turno completado. Ahora recorre las salas con calma.",
      map: "CÁMARAS",
      doorLeft: "PUERTA IZQ",
      doorRight: "PUERTA DER",
      door: "PUERTA",
      light: "LUZ",
      open: "ABIERTA",
      closed: "CERRADA",
    },
    about: {
      level: "CAM 01",
      title: "SOBRE MÍ",
      subtitle: "Expediente del empleado: quién soy, qué estudio y qué me gusta.",
      mainBio: "Actualmente curso la carrera de Ingeniería de Software en la Universidad Cooperativa de Colombia. Fuera del ámbito académico, mis principales intereses son la gastronomía, el arte y el cine, con preferencia por los géneros de terror y comedia. Asimismo, disfruto de la música tropical y de las actividades sociales con amigos.",
      card1Title: "Gastronomía, arte y cine",
      card1Desc: "Cine de terror y comedia, pasión culinaria y apreciación artística.",
      card2Title: "Música tropical y amigos",
      card2Desc: "Ritmos tropicales, actividades sociales y compartir buenos momentos.",
      fileLabel: "EXPEDIENTE",
      playerCard: "FICHA DEL EMPLEADO",
      classLabel: "CARRERA",
      classValue: "Ing. de Software",
      semesterLabel: "SEMESTRE",
      semesterValue: "5°",
      baseLabel: "BASE",
      baseValue: "Pasto, Colombia",
      educationLabel: "FORMACIÓN",
      educationValue: "UCC (en proceso) · SENA (titulado)",
      interestsTitle: "INTERESES",
      stackTitle: "HABILIDADES",
      interestsList: ["Gastronomía", "Cine de terror", "Comedia", "Música tropical", "Arte", "Vida social"],
      news: {
        masthead: "El Vigía de Pasto",
        edition: "Edición nocturna · Pasto, Colombia",
        headline: "Estudiante de Ingeniería de Software toma el turno nocturno del laboratorio",
        subhead: "Sebastián combina el código con la gastronomía, el arte y el cine de terror.",
        caption: "Sebastián, guardia nocturno del laboratorio de software.",
        adTitle: "Se ofrece",
        adBody: "Ingeniero de software en formación. Disponible para proyectos web y prácticas. Turno de día o de noche.",
        adCta: "Contactar ▶",
      },
    },
    projects: {
      level: "CAM 02",
      title: "MIS PROYECTOS",
      subtitle: "Grabaciones del laboratorio: soluciones de software con código y demo en vivo cuando hay señal.",
      stage: "CAM 02",
      statusLive: "EN VIVO",
      statusDev: "SIN SEÑAL",
      btnCode: "CÓDIGO",
      btnDemo: "DEMO",
      codePrivate: "PRIVADO",
      demoSoon: "SIN SEÑAL",
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
      level: "CAM 03",
      title: "EXPERIENCIA",
      subtitle: "Registro de turnos: mi trayectoria laboral y académica, de lo más reciente a lo más antiguo.",
      workHeading: "EXPERIENCIA LABORAL",
      academicHeading: "EXPERIENCIA ACADÉMICA",
      workBadge: "LABORAL",
      academicBadge: "ACADÉMICA",
      fileLabel: "EXPEDIENTE",
      tagsLabel: "Etiquetas",
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
      level: "CAM 04",
      title: "TESTIMONIOS",
      subtitle: "Lo que dicen de mí profesores y compañeros que han trabajado conmigo.",
      emptyTitle: "SEÑAL PERDIDA",
      emptyDesc: "Esta cámara se está reconectando: pronto habrá testimonios de profesores y compañeros.",
    },
    extra: {
      level: "CAM 05",
      title: "STACK Y HERRAMIENTAS",
      subtitle: "Cuarto de servidores: los lenguajes y frameworks que uso, y las herramientas de mi flujo de trabajo.",
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
      level: "CAM 06",
      title: "CONTACTO",
      subtitle: "¿Tienes un proyecto o una propuesta? Escríbeme por el formulario o por mis canales directos.",
      channelsTitle: "CANALES DIRECTOS",
      emailLabel: "CORREO",
      copyEmail: "Copiar correo",
      githubAction: "IR ▶",
      linkedinAction: "CONECTAR ▶",
      whatsappSub: "Mensaje directo",
      whatsappAction: "CHATEAR ▶",
      formTitle: "TRANSMITIR MENSAJE",
      logTitle: "Registro de visitantes",
      logSub: "Laboratorio de Software · Turno nocturno",
      logArrival: "Hora de llegada",
      signHere: "Firmar y enviar",
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
      level: "CAM 07",
      title: "VISITAS EMPRESARIALES",
      subtitle: "Recorridos técnicos y conferencias en empresas de tecnología de Medellín (ruta académica UCC, Ingeniería de Software).",
      areaPrefix: "ÁREA",
      takeawaysHeader: "LO QUE APRENDÍ",
      boardTitle: "Tablero de evidencias",
      caseLabel: "Caso",
      photoLabel: "FOTO",
    },
    footer: {
      thanks: "FIN DEL TURNO · 6:00 AM",
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
      cta: "CONTACT",
      day: "DAY",
      night: "NIGHT",
      toDay: "Switch to day shift (light mode)",
      toNight: "Switch to night shift (dark mode)",
      toLang: "Cambiar a español",
      menu: "Open menu",
      shift: "NIGHT SHIFT",
    },
    rooms: {
      about: "Personnel file",
      projects: "Lab",
      experience: "Records",
      testimonials: "Mailbox",
      workspace: "Server room",
      contact: "Front desk",
      visits: "Outside",
    },
    teasers: {
      about: "Who I am, what I study and what I enjoy.",
      projects: "The projects I've built, with code and demo.",
      experience: "My work and academic experience.",
      testimonials: "What professors and classmates say about me.",
      workspace: "Languages, frameworks and tools I use.",
      contact: "Reach me: email, GitHub and contact form.",
    },
    lurk: {
      motion: "Motion detected",
    },
    postcredits: {
      label: "Post-credits scene",
      time: "6:01 AM",
      line1: "Are you still here?",
      line2: "The shift is over… but the lab is never really empty.",
    },
    decor: {
      neon: "Lab open 24/7",
      banner: "Happy launch v1.0!",
      poster1: "Never deploy on Fridays!",
      wanted: "WANTED",
      wantedSeen: "Last seen on CAM 05",
      flyerTitle: "Your code is watching you",
      flyerSub: "Write tests. Always.",
    },
    hero: {
      badge: "ID // NIGHT GUARD",
      status: "OPEN TO PROJECTS",
      greeting: "Hi, I'm",
      name: "SEBASTIÁN",
      role: "Software Engineer & Software Architect",
      tagline: "“Two parts water to one part rice; that's how I code, and that's why my rice turns out delicious.”",
      location: "PASTO, COLOMBIA",
      downloadCv: "DOWNLOAD CV",
      viewProjects: "VIEW PROJECTS",
      photoAlt: "Photo of Sebastián",
      noPhoto: "NO PHOTO",
    },
    game: {
      night: "NIGHT 1",
      sound: "SOUND",
      start: "START SHIFT",
      retry: "TRY AGAIN",
      again: "ANOTHER SHIFT",
      idleHint: "Switch cameras to explore the portfolio, or start the shift and survive until 6 AM.",
      playHint: "Check the cameras. Use LIGHT to see who is at the door and close it in time. Doors and lights drain the battery.",
      warnLeft: "Something is at the left door…",
      warnRight: "Something is at the right door…",
      powerOut: "POWER OUT",
      goRoom: "GO TO ROOM",
      motion: "MOTION",
      lost: "FOUND YOU",
      lostDesc: "You didn't make it to 6 AM.",
      wonDesc: "Shift complete. Now explore the rooms calmly.",
      map: "CAMERAS",
      doorLeft: "LEFT DOOR",
      doorRight: "RIGHT DOOR",
      door: "DOOR",
      light: "LIGHT",
      open: "OPEN",
      closed: "CLOSED",
    },
    about: {
      level: "CAM 01",
      title: "ABOUT ME",
      subtitle: "Personnel file: who I am, what I study and what I enjoy.",
      mainBio: "I am currently pursuing a degree in Software Engineering at Universidad Cooperativa de Colombia. Beyond academics, my core passions include culinary arts, visual arts, and cinema, with a special love for horror and comedy genres. I also enjoy tropical music and social activities with friends.",
      card1Title: "Food, art & cinema",
      card1Desc: "Horror and comedy films, culinary passion and artistic appreciation.",
      card2Title: "Tropical music & friends",
      card2Desc: "Tropical rhythms, social hangouts and sharing good moments.",
      fileLabel: "PERSONNEL FILE",
      playerCard: "EMPLOYEE CARD",
      classLabel: "DEGREE",
      classValue: "Software Eng.",
      semesterLabel: "SEMESTER",
      semesterValue: "5th",
      baseLabel: "BASE",
      baseValue: "Pasto, Colombia",
      educationLabel: "EDUCATION",
      educationValue: "UCC (in progress) · SENA (certified)",
      interestsTitle: "INTERESTS",
      stackTitle: "SKILLS",
      interestsList: ["Gastronomy", "Horror films", "Comedy", "Tropical music", "Art", "Social life"],
      news: {
        masthead: "The Pasto Watch",
        edition: "Night edition · Pasto, Colombia",
        headline: "Software Engineering student takes the lab's night shift",
        subhead: "Sebastián blends code with food, art and horror films.",
        caption: "Sebastián, night guard of the software lab.",
        adTitle: "Available",
        adBody: "Software engineer in training. Open to web projects and internships. Day or night shift.",
        adCta: "Get in touch ▶",
      },
    },
    projects: {
      level: "CAM 02",
      title: "MY PROJECTS",
      subtitle: "Lab recordings: software solutions with code and a live demo when there is signal.",
      stage: "CAM 02",
      statusLive: "LIVE",
      statusDev: "NO SIGNAL",
      btnCode: "CODE",
      btnDemo: "DEMO",
      codePrivate: "PRIVATE",
      demoSoon: "NO SIGNAL",
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
      level: "CAM 03",
      title: "EXPERIENCE",
      subtitle: "Shift log: my work and academic journey, from most recent to oldest.",
      workHeading: "WORK EXPERIENCE",
      academicHeading: "ACADEMIC BACKGROUND",
      workBadge: "WORK",
      academicBadge: "ACADEMIC",
      fileLabel: "RECORD",
      tagsLabel: "Tags",
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
      level: "CAM 04",
      title: "TESTIMONIALS",
      subtitle: "What professors and classmates who have worked with me say.",
      emptyTitle: "SIGNAL LOST",
      emptyDesc: "This camera is reconnecting: testimonials from professors and classmates are coming soon.",
    },
    extra: {
      level: "CAM 05",
      title: "STACK & TOOLS",
      subtitle: "Server room: the languages and frameworks I use, and the tools in my workflow.",
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
      level: "CAM 06",
      title: "CONTACT",
      subtitle: "Have a project or a proposal? Write me through the form or my direct channels.",
      channelsTitle: "DIRECT CHANNELS",
      emailLabel: "EMAIL",
      copyEmail: "Copy email",
      githubAction: "GO ▶",
      linkedinAction: "CONNECT ▶",
      whatsappSub: "Direct message",
      whatsappAction: "CHAT ▶",
      formTitle: "TRANSMIT MESSAGE",
      logTitle: "Visitor log",
      logSub: "Software Lab · Night shift",
      logArrival: "Arrival time",
      signHere: "Sign and send",
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
      level: "CAM 07",
      title: "COMPANY VISITS",
      subtitle: "Technical tours and talks at tech companies in Medellín (UCC Software Engineering academic route).",
      areaPrefix: "AREA",
      takeawaysHeader: "WHAT I LEARNED",
      boardTitle: "Evidence board",
      caseLabel: "Case",
      photoLabel: "PHOTO",
    },
    footer: {
      thanks: "END OF SHIFT · 6:00 AM",
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
  // El portafolio arranca en turno nocturno (modo oscuro)
  const [theme, setThemeState] = useState<Theme>("dark");

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
