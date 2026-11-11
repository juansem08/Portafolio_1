# Portafolio — Juan Sebastián Mayorga Jiménez

Estudiante de Ingeniería de Software (Universidad Cooperativa de Colombia, Pasto) y Técnico en Sistemas (SENA).
Portafolio personal desarrollado con **Next.js (App Router)**, **TypeScript** y **Tailwind CSS**, desplegado en **Vercel**.

**Sitio en vivo:** https://portafolio-1-beryl-pi.vercel.app

---

## URLs de código (GitHub)

| Proyecto | Repositorio |
|---|---|
| Portafolio | https://github.com/juansem08/Portafolio_1 |
| Clarify — Escáner de Documentos con IA | https://github.com/juansem08/Escaner_Sintetizador_Multimodal_Documentos_conia |
| Clasificador Automático de Reseñas | https://github.com/juansem08/Clasificador_Automtico__Rese-asas_Comentarios |
| Noticias del Día — Garmin Forerunner 165 | https://github.com/juansem08/Visor_Rese-as_Noticias_Dia |
| GridMind (frontend) | https://github.com/CV17d/gridmind-frontend |
| GridMind (backend) | https://github.com/CV17d/gridmind-backend |
| Demencia No Límite | https://github.com/CV17d/demencia_ae_limite |
| Taller de Calibración y Reparación | https://github.com/Sebas082/Calibracion_Reparacion |

## URLs productivas desplegadas en la nube

| Proyecto | URL | Plataforma |
|---|---|---|
| Portafolio | https://portafolio-1-beryl-pi.vercel.app | Vercel |
| Taller de Calibración y Reparación | https://calibracion-reparacion.vercel.app | Vercel |
| GridMind | https://gridmind-on.vercel.app | Vercel |
| Clarify (backend / API) | https://clarify-server.onrender.com | Render |

## Descargas (aplicaciones que no son web)

| Proyecto | URL |
|---|---|
| Clarify (APK Android) | https://expo.dev/artifacts/eas/faLiHmuFmPuHr_bk5TnyZcYCEvTA_CAvowQMkp8nWUo.apk |
| Clasificador de Reseñas (Windows, macOS, Linux) | https://github.com/juansem08/Clasificador_Automtico__Rese-asas_Comentarios/releases |
| Noticias Garmin (tienda Connect IQ) | https://apps-developer.garmin.com/es-ES/apps/968a242d-a460-43cf-b477-fc4688d2e5ff |
| Demencia No Límite (Windows) | https://github.com/CV17d/demencia_ae_limite/releases/tag/v1.0.0 |

---

## Estructura del proyecto

```text
Portafolio/
├── app/
│   ├── layout.tsx          # Layout raíz: fuentes, metadatos, idioma y modo oscuro
│   ├── page.tsx            # Une las secciones en el orden de la guía
│   ├── icon.svg            # Ícono de la pestaña
│   └── globals.css         # Tailwind CSS y estilos globales
├── components/
│   ├── Navbar.tsx          # Menú fijo, hamburguesa en celular, ES/EN y modo oscuro
│   ├── Hero.tsx            # Nombre, rol, foto, frase, Descargar CV y Contáctame
│   ├── About.tsx           # Presentación, foto, datos rápidos y habilidades
│   ├── Projects.tsx        # Tarjetas de proyectos (imagen, tecnologías, código, demo/descarga)
│   ├── Testimonials.tsx    # 3 testimonios con foto
│   ├── Experience.tsx      # Experiencia laboral y académica
│   ├── Contact.tsx         # Correo, LinkedIn, GitHub y formulario con validación
│   ├── Additional.tsx      # Sección adicional: certificados y visitas empresariales
│   ├── Certificates.tsx    # Certificados del SENA (PDF sin datos personales)
│   ├── CompanyVisits.tsx   # Visitas empresariales en Medellín
│   └── Footer.tsx          # ©, redes, enlaces rápidos y volver arriba
├── context/
│   └── AppContext.tsx      # Textos en español/inglés y tema claro/oscuro
├── data/
│   ├── projects.ts         # Proyectos tipados
│   ├── testimonials.ts     # Testimonios
│   ├── skills.ts           # Habilidades y tecnologías
│   ├── certificates.ts     # Certificados
│   └── contact.ts          # Correo, GitHub, LinkedIn y WhatsApp
└── public/
    ├── cv.pdf              # Hoja de vida
    ├── certificates/       # Certificados en PDF (sin número de documento)
    └── images/             # Fotos, proyectos, testimonios, certificados y visitas
```

## Desarrollo local

```bash
npm install      # instalar dependencias
npm run dev      # servidor de desarrollo en http://localhost:3000
npm run lint     # revisar el código con ESLint
npm run build    # compilar para producción
```

Cada `git push` a la rama `main` publica automáticamente una nueva versión en Vercel.
