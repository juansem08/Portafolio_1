"use client";

import Image from "next/image";
import { MapPin } from "lucide-react";
import { Section, SectionHeader } from "./night/ui";
import Lurker from "./night/Lurker";
import { SectionParty, PARTY } from "./night/Party";
import { useApp } from "@/context/AppContext";

// Chinches de colores para las polaroids
const PIN_COLORS = [PARTY.red, PARTY.yellow, PARTY.blue, PARTY.green, PARTY.purple];

export default function CompanyVisits() {
  const { t, lang } = useApp();
  const isEn = lang === "en";

  const visits = [
    {
      id: "ciandt",
      name: "CI&T",
      badge: isEn ? "GLOBAL TECH PARTNER" : "SOCIO TECNOLÓGICO GLOBAL",
      location: "Medellín, Colombia",
      role: isEn ? "Digital Transformation & Agile at Scale" : "Transformación Digital & Agile at Scale",
      description: isEn
        ? "Immersion at CI&T headquarters, exploring their large-scale agile engineering framework (Lean Digital), continuous innovation culture, generative AI adoption across software delivery, and cloud-native architectures for world-class enterprises."
        : "Inmersión en la sede de CI&T, explorando su modelo de ingeniería ágil a gran escala (Lean Digital), cultura de innovación continua, adopción de inteligencia artificial generativa en el ciclo de vida del software y arquitecturas cloud-native para clientes de clase mundial.",
      takeaways: isEn
        ? ["Agile at Scale", "Generative AI in Dev", "Cloud-Native Systems", "Lean Digital Culture"]
        : ["Agile at Scale", "IA Generativa en Dev", "Cloud-Native", "Cultura Lean"],
      images: [
        {
          src: "/images/visits/ciandt.jpg",
          caption: isEn
            ? "UCC engineering cohort at the main amphitheater with the CI&T emblem"
            : "Equipo UCC en el auditorio central frente al logo de CI&T",
        },
      ],
    },
    {
      id: "sofka",
      name: "Sofka Technologies",
      badge: isEn ? "TALENT ACCELERATION & QA" : "ACELERACIÓN DE TALENTO & QA",
      location: "Casa Sofka MED • Medellín",
      role: isEn ? "Quality Engineering & Talent Hub" : "Ingeniería de Calidad & Centro de Talento",
      description: isEn
        ? "Walkthrough of Casa Sofka facilities in Medellín and participation in the technical presentation 'Sofka U: Learning and Talent Development Center'. Deep exploration of QA automation, junior-to-senior acceleration frameworks, and high-impact software engineering in LATAM."
        : "Recorrido por las instalaciones de Casa Sofka en Medellín y participación en la conferencia técnica 'Sofka U: Centro de aprendizaje y desarrollo del talento'. Conocimiento de sus procesos de QA, testing automatizado, aceleración de talento junior-to-senior y desarrollo de software orientado al impacto en LATAM.",
      takeaways: isEn
        ? ["Sofka U Talent Model", "Automated QA & Testing", "Distributed Architectures", "Engineering Craft"]
        : ["Sofka U Talent", "Testing & QA Automation", "Arquitecturas Distribuidas", "Cultura Hacker"],
      images: [
        {
          src: "/images/visits/sofka-casa.jpg",
          caption: isEn
            ? "Official cohort photo at the main gates of 'Casa Sofka MED'"
            : "Foto oficial en el acceso principal de 'Casa Sofka MED'",
        },
        {
          src: "/images/visits/sofka-u.jpg",
          caption: isEn
            ? "Technical conference: Sofka U talent acceleration methodology"
            : "Conferencia técnica: metodología de aceleración de talento Sofka U",
        },
      ],
    },
    {
      id: "perficient",
      name: "Perficient",
      badge: isEn ? "GLOBAL DIGITAL CONSULTING" : "CONSULTORÍA DIGITAL GLOBAL",
      location: "Medellín, Colombia",
      role: isEn ? "Enterprise Solutions & Global Consulting" : "Consultoría Digital & Enterprise Solutions",
      description: isEn
        ? "Visit to Perficient Colombia collaborative delivery centers. Technical exchange on enterprise consulting for North American clients, continuous DevOps workflows, microservices, big data pipelines, and strict architectural standards for heavily regulated industries."
        : "Visita a los espacios de trabajo colaborativo de Perficient Colombia. Intercambio técnico sobre consultoría de ingeniería para el mercado norteamericano, prácticas de DevOps continuo, microservicios, integración de big data y estándares de arquitectura para industrias altamente reguladas.",
      takeaways: isEn
        ? ["Enterprise Consulting", "DevOps Pipelines", "Microservices", "Global Quality Standards"]
        : ["Enterprise Consulting", "DevOps Pipelines", "Microservicios", "Estándares Globales"],
      images: [
        {
          src: "/images/visits/perficient.jpg",
          caption: isEn
            ? "Coworking and technical networking areas at Perficient HQ"
            : "Espacios de coworking y networking en la sede de Perficient",
        },
      ],
    },
    {
      id: "cibas",
      name: "Cibas Software",
      badge: "SOFTWARE CRAFTSMANSHIP",
      location: "Medellín, Colombia",
      role: isEn ? "Custom Software & Clean Code" : "Desarrollo a la Medida & Clean Code",
      description: isEn
        ? "Interactive tech session on custom software engineering, continuous delivery methodologies, and software craftsmanship. Real-world architectural case studies on decoupled services, technical debt reduction, and engineering culture focused on digital excellence."
        : "Sesión técnica sobre desarrollo de software a la medida, metodologías de entrega continua y Software Craftsmanship. Análisis de casos reales de arquitectura desacoplada, gestión de deuda técnica y cultura de equipo enfocada en la excelencia del producto digital.",
      takeaways: isEn
        ? ["Clean Code", "Custom Architecture", "Technical Debt Control", "Continuous Delivery"]
        : ["Clean Code", "Software a Medida", "Gestión de Deuda Técnica", "Entrega Continua"],
      images: [
        {
          src: "/images/visits/cibas.jpg",
          caption: isEn
            ? "Auditorium tech talk and engineering welcome keynote"
            : "Sesión de bienvenida y charla técnica de ingeniería en el auditorio",
        },
      ],
    },
    {
      id: "globant",
      name: "Globant",
      badge: isEn ? "AI & REINVENTION STUDIOS" : "IA & ESTUDIOS DE REINVENCIÓN",
      location: "Medellín, Colombia",
      role: isEn ? "Digital Studios, AI & Tech Reinvention" : "Estudios Digitales, IA & Reinvención Tecnológica",
      description: isEn
        ? "Immersion inside Globant innovation studios in Medellín. Deep dive into their 'AI Reinvention Studios' paradigm, planetary-scale interactive digital experiences, gaming studios, high-concurrency cloud systems, and best practices for global cross-industry projects."
        : "Inmersión en los estudios de innovación de Globant en Medellín. Exploración de su enfoque 'AI Reinvention Studios', experiencias digitales a gran escala, gaming studios, arquitecturas de alta concurrencia y buenas prácticas para proyectos globales multisectoriales.",
      takeaways: isEn
        ? ["Reinvention Studios", "Applied Enterprise AI", "High Concurrency", "Global Innovation"]
        : ["Reinvention Studios", "IA aplicada a escala", "Gaming & UI/UX", "Innovación Global"],
      images: [
        {
          src: "/images/visits/globant.jpg",
          caption: isEn
            ? "Globant engineering & digital studios innovation facilities in Medellín"
            : "Sede de innovación y estudios de ingeniería de Globant en Medellín",
        },
      ],
    },
  ];

  return (
    <Section
      id="visits"
      accent={PARTY.red}
      decor={<SectionParty top="lights" balloons="right" deflated="right" colors={[PARTY.red, PARTY.blue, PARTY.yellow]} />}
      lurker={<Lurker creature="null" variant="peek-left" time="05:02 AM" top="45%" />}>
      <SectionHeader cam={t("visits.level")} room={t("rooms.visits")} title={t("visits.title")} subtitle={t("visits.subtitle")} />

      {/* Tablero de evidencias */}
      <div className="cork relative px-4 py-10 sm:px-10 sm:py-12">
        {/* Hilo rojo que une los casos */}
        <svg aria-hidden className="absolute inset-0 w-full h-full pointer-events-none hidden lg:block" viewBox="0 0 100 100" preserveAspectRatio="none">
          <polyline points="27,7 73,24 27,44 73,62 27,82" fill="none" stroke="#c62828" strokeWidth="2.5" vectorEffect="non-scaling-stroke" />
        </svg>

        <div className="relative mx-auto mb-10 w-fit -rotate-1">
          <span aria-hidden className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#ff4b5c] shadow-[0_2px_4px_rgba(0,0,0,.6)] z-10" />
          <p className="paper px-6 py-2 font-news font-bold text-xl sm:text-2xl uppercase tracking-widest">{t("visits.boardTitle")}</p>
        </div>

        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-14">
          {visits.map((visit, index) => {
            const pin = PIN_COLORS[index % PIN_COLORS.length];
            return (
              <article key={visit.id} className={`relative ${index % 2 ? "lg:mt-20 rotate-1" : "-rotate-1"}`}>
                {/* Polaroids */}
                <div className={`flex gap-3 ${visit.images.length > 1 ? "" : "justify-center"}`}>
                  {visit.images.map((img, imgIdx) => (
                    <figure
                      key={img.src}
                      className={`relative bg-[#f4f1e8] p-2 pb-9 shadow-[0_10px_22px_rgba(0,0,0,.55)] ${visit.images.length > 1 ? "w-1/2" : "w-full max-w-sm"} ${imgIdx % 2 ? "rotate-2" : "-rotate-2"}`}
                    >
                      <span aria-hidden className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full shadow-[0_2px_4px_rgba(0,0,0,.6)] z-10" style={{ background: pin }} />
                      <div className="relative aspect-[4/3] bg-[#222] overflow-hidden">
                        <Image src={img.src} alt={img.caption} fill sizes="(max-width: 768px) 90vw, 40vw" className="object-cover sepia-[0.25] contrast-110" />
                      </div>
                      <figcaption className="absolute bottom-1.5 inset-x-2 font-typewriter text-[11px] leading-tight text-[#2a2620] line-clamp-2">
                        {img.caption}
                      </figcaption>
                    </figure>
                  ))}
                </div>

                {/* Ficha del caso */}
                <div className="paper relative -mt-3 ml-4 sm:ml-8 p-4 sm:p-5 rotate-1">
                  <span aria-hidden className="tape -top-3 right-6 rotate-3 !w-16 !h-5" />
                  <p className="font-typewriter text-xs uppercase tracking-wider text-[#5a5446]">
                    {t("visits.caseLabel")} N.º {String(index + 1).padStart(2, "0")} · {visit.badge}
                  </p>
                  <h3 className="mt-1 font-news font-bold text-2xl uppercase leading-tight">{visit.name}</h3>
                  <p className="mt-1 flex items-center gap-1.5 font-typewriter text-xs uppercase text-[#5a5446]">
                    <MapPin className="w-3.5 h-3.5 text-[#b3261e]" />
                    {visit.location}
                  </p>
                  <p className="mt-2 font-typewriter text-sm text-[#b3261e]">
                    {t("visits.areaPrefix")}: {visit.role}
                  </p>
                  <p className="mt-2 font-typewriter text-[13px] leading-relaxed text-[#2a2620]">{visit.description}</p>
                  <p className="mt-3 font-typewriter text-xs uppercase text-[#5a5446]">{t("visits.takeawaysHeader")}:</p>
                  <ul className="mt-1 grid grid-cols-1 sm:grid-cols-2 gap-x-4 font-typewriter text-[13px] text-[#2a2620]">
                    {visit.takeaways.map((item) => (
                      <li key={item}>✓ {item}</li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
