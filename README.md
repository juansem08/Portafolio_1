# Portafolio Profesional - Sebastián

> **Quality Engineer & Lead Systems Architect**
> *Construyendo software escalable con arquitectura limpia y capas desacopladas.*

Sitio web de portafolio personal moderno y de alta fidelidad estética técnica en **Dark Mode**, desarrollado con **Next.js (App Router)**, **TypeScript** y **Tailwind CSS**.

---

## 🏗️ Arquitectura del Proyecto

```text
Portafolio/
├── app/
│   ├── layout.tsx         # Root layout con Dark Mode, fuentes y metadatos
│   ├── page.tsx           # Ensamblador principal de componentes en orden estricto
│   └── globals.css        # Configuración de Tailwind CSS y utilidades visuales
├── components/
│   ├── Navbar.tsx         # Navegación sticky con menú móvil y scroll suave
│   ├── Hero.tsx           # Sección principal con rol, frase, blueprint y CTAs
│   ├── About.tsx          # Perfil, formación, modelado 3D y hardware vintage
│   ├── Projects.tsx       # Grid responsive de proyectos con tags y enlaces
│   ├── Testimonials.tsx   # Grid de 3 testimonios de colegas y desarrolladores
│   ├── Experience.tsx     # Línea de tiempo vertical (Laboral y Académica)
│   ├── Contact.tsx        # Formulario interactivo y enlaces directos
│   ├── ExtraSection.tsx   # "Mi Entorno de Trabajo" con barras de progreso
│   └── Footer.tsx         # Copyright 2026, redes sociales y volver arriba
├── data/
│   └── projects.ts        # Datos tipados (Project[]) de proyectos destacados
├── public/
│   └── cv.pdf             # Archivo descargable de Curriculum Vitae
├── package.json
├── tsconfig.json
└── tailwind.config.ts
```

---

## 🚀 Despliegue en Vercel

Este proyecto está 100% optimizado para desplegarse con un solo clic en **[Vercel](https://vercel.com/)**:

1. Sube este repositorio a tu cuenta de **GitHub** (`github.com/juansem08/...`).
2. Entra a [Vercel](https://vercel.com/) y haz clic en **"Add New Project"**.
3. Importa tu repositorio.
4. Framework Preset: **Next.js** (autodetectado).
5. Haz clic en **Deploy**. ¡Listo para producción!

---

## 💻 Desarrollo Local

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Compilar para producción
npm run build
```
Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver el resultado.
