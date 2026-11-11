"use client";

import Image from "next/image";
import { MapPin } from "lucide-react";
import { Section, SectionHeader, Panel, Tag, ACCENT_CYCLE } from "./arcade/ui";
import { useApp } from "@/context/AppContext";

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
    <Section id="visits">
      <SectionHeader level={t("visits.level")} title={t("visits.title")} subtitle={t("visits.subtitle")} accent="sky" />

      <div className="space-y-10">
        {visits.map((visit, index) => {
          const accent = ACCENT_CYCLE[index % ACCENT_CYCLE.length];
          const multiple = visit.images.length > 1;

          return (
            <Panel key={visit.id} title={visit.badge} accent={accent}>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-6 space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <h3 className="font-pixel text-sm sm:text-lg text-ink">{visit.name}</h3>
                    <span className="inline-flex items-center gap-1.5 font-retro text-lg px-2 border-2 border-edge bg-panel2 text-ink">
                      <MapPin className="w-4 h-4 text-pink" />
                      {visit.location}
                    </span>
                  </div>
                  <p className="font-retro text-xl text-pink">
                    {t("visits.areaPrefix")}: {visit.role}
                  </p>
                  <p className="text-muted leading-relaxed">{visit.description}</p>
                  <div>
                    <p className="font-pixel text-[9px] text-muted mb-2">{t("visits.takeawaysHeader")}</p>
                    <div className="flex flex-wrap gap-2">
                      {visit.takeaways.map((item) => (
                        <Tag key={item}>★ {item}</Tag>
                      ))}
                    </div>
                  </div>
                </div>

                <div className={`lg:col-span-6 ${multiple ? "grid grid-cols-1 sm:grid-cols-2 gap-4" : ""}`}>
                  {visit.images.map((img, imgIdx) => (
                    <figure key={img.src} className="border-4 border-edge bg-panel2">
                      <div className="relative aspect-[4/3] bg-screen overflow-hidden border-b-4 border-edge">
                        <Image src={img.src} alt={img.caption} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
                        <span className="absolute bottom-2 right-2 font-pixel text-[8px] px-2 py-1 bg-[#050314] text-white">
                          {t("visits.photoLabel")} {imgIdx + 1}
                        </span>
                      </div>
                      <figcaption className="px-3 py-2 font-retro text-lg leading-tight text-ink">{img.caption}</figcaption>
                    </figure>
                  ))}
                </div>
              </div>
            </Panel>
          );
        })}
      </div>
    </Section>
  );
}
