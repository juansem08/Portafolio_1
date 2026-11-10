"use client";

import Image from "next/image";
import { Building2, MapPin, Sparkles, Camera } from "lucide-react";
import { Tape, Pushpin, Paperclip } from "./ScrapbookAssets";
import { useApp } from "@/context/AppContext";

export default function CompanyVisits() {
  const { t, lang } = useApp();

  const isEn = lang === "en";

  const visits = [
    {
      id: "ciandt",
      name: "CI&T",
      badge: isEn ? "GLOBAL TECH PARTNER" : "SOCIO TECNOLÓGICO GLOBAL",
      badgeColor: "bg-[#810100] text-[#EDEBDD]",
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
            : "Equipo UCC en el auditorio central frente al emblemático logo CI&T",
          rotation: "-rotate-1",
        },
      ],
      cardRotation: "-rotate-1",
      stampText: isEn ? "CI&T // VERIFIED TOUR" : "CI&T // VERIFICADO",
    },
    {
      id: "sofka",
      name: "Sofka Technologies",
      badge: isEn ? "TALENT ACCELERATION & QA" : "ACELERACIÓN DE TALENTO & QA",
      badgeColor: "bg-[#630000] text-[#EDEBDD]",
      location: "Casa Sofka MED • Medellín",
      role: isEn ? "Quality Engineering & Talent Hub" : "Ingeniería de Calidad & Centro de Talento",
      description: isEn
        ? "Walkthrough of Casa Sofka facilities in Medellín and participation in the technical presentation 'Sofka U: Learning and Talent Development Center'. Deep exploration of QA automation, junior-to-senior acceleration frameworks, and high-impact software engineering in LATAM."
        : "Recorrido por las instalaciones de Casa Sofka en Medellín y participación en la conferencia técnica sobre 'Sofka U: Centro de aprendizaje y desarrollo del talento'. Conocimiento profundo de sus procesos de QA, testing automatizado, aceleración de talento junior-to-senior y desarrollo de software orientado al impacto en LATAM.",
      takeaways: isEn
        ? ["Sofka U Talent Model", "Automated QA & Testing", "Distributed Architectures", "Engineering Craft"]
        : ["Sofka U Talent", "Testing & QA Automation", "Arquitecturas Distribuidas", "Cultura Hacker"],
      images: [
        {
          src: "/images/visits/sofka-casa.jpg",
          caption: isEn
            ? "Official cohort photo at the main gates of 'Casa Sofka MED'"
            : "Foto oficial en el acceso principal de 'Casa Sofka MED'",
          rotation: "rotate-1",
        },
        {
          src: "/images/visits/sofka-u.jpg",
          caption: isEn
            ? "Technical conference: Sofka U talent acceleration methodology"
            : "Conferencia técnica: Metodología de aceleración de talento Sofka U",
          rotation: "-rotate-2",
        },
      ],
      cardRotation: "rotate-1",
      stampText: isEn ? "CASA SOFKA // CERTIFIED" : "CASA SOFKA // CERTIFICADO",
    },
    {
      id: "perficient",
      name: "Perficient",
      badge: isEn ? "GLOBAL DIGITAL CONSULTING" : "CONSULTORÍA DIGITAL GLOBAL",
      badgeColor: "bg-[#1B1717] dark:bg-[#810100] text-[#EDEBDD]",
      location: "Medellín, Colombia",
      role: isEn ? "Enterprise Solutions & Global Consulting" : "Consultoría Digital & Enterprise Solutions",
      description: isEn
        ? "Visit to Perficient Colombia collaborative delivery centers. Technical exchange on enterprise consulting for North American clients, continuous DevOps workflows, microservices, big data pipelines, and strict architectural standards for heavily regulated industries."
        : "Visita a los espacios de trabajo colaborativo de Perficient Colombia. Intercambio técnico sobre consultoría de ingeniería para el mercado norteamericano, prácticas de DevOps continuo, microservicios, integración de big data y estándares de arquitectura de software para industrias altamente reguladas.",
      takeaways: isEn
        ? ["Enterprise Consulting", "DevOps Pipelines", "Microservices", "Global Quality Standards"]
        : ["Enterprise Consulting", "DevOps Pipelines", "Microservicios", "Estándares Globales"],
      images: [
        {
          src: "/images/visits/perficient.jpg",
          caption: isEn
            ? "Coworking and technical networking areas at Perficient HQ"
            : "Espacios de coworking y networking en la sede de Perficient",
          rotation: "-rotate-1",
        },
      ],
      cardRotation: "-rotate-2",
      stampText: isEn ? "PERFICIENT // TECH TOUR" : "PERFICIENT // VISITA TÉCNICA",
    },
    {
      id: "cibas",
      name: "Cibas Software",
      badge: isEn ? "SOFTWARE CRAFTSMANSHIP" : "SOFTWARE CRAFTSMANSHIP",
      badgeColor: "bg-[#810100] text-[#EDEBDD]",
      location: "Medellín, Colombia",
      role: isEn ? "Custom Software & Clean Code" : "Desarrollo a la Medida & Clean Code",
      description: isEn
        ? "Interactive tech session on custom software engineering, continuous delivery methodologies, and software craftsmanship. Real-world architectural case studies on decoupled services, technical debt reduction, and engineering culture focused on digital excellence."
        : "Sesión técnica en auditorio sobre desarrollo de software a la medida, metodologías de entrega continua y artesanía de código (Software Craftsmanship). Análisis de casos reales de arquitectura desacoplada, gestión de deuda técnica y cultura de equipo enfocada en la excelencia del producto digital.",
      takeaways: isEn
        ? ["Clean Code", "Custom Architecture", "Technical Debt Control", "Continuous Delivery"]
        : ["Clean Code", "Software a Medida", "Gestión de Deuda Técnica", "Entrega Continua"],
      images: [
        {
          src: "/images/visits/cibas.jpg",
          caption: isEn
            ? "Auditorium tech talk and engineering welcome keynote"
            : "Sesión de bienvenida y charla técnica de ingeniería en el auditorio",
          rotation: "rotate-1",
        },
      ],
      cardRotation: "rotate-2",
      stampText: isEn ? "CIBAS // IMMERSION OK" : "CIBAS // INMERSIÓN OK",
    },
    {
      id: "globant",
      name: "Globant",
      badge: isEn ? "AI & REINVENTION STUDIOS" : "IA & ESTUDIOS DE REINVENCIÓN",
      badgeColor: "bg-[#630000] text-[#EDEBDD]",
      location: "Medellín, Colombia",
      role: isEn ? "Digital Studios, AI & Tech Reinvention" : "Estudios Digitales, IA & Reinversión Tecnológica",
      description: isEn
        ? "Immersion inside Globant innovation studios in Medellín. Deep dive into their 'AI Reinvention Studios' paradigm, planetary-scale interactive digital experiences, gaming studios, high-concurrency cloud systems, and best practices for global cross-industry projects."
        : "Inmersión en los estudios de innovación de Globant en Medellín. Exploración de su enfoque 'AI Reinvention Studios', desarrollo de experiencias digitales a escala planetaria, gaming studios, arquitecturas de alta concurrencia y buenas prácticas para proyectos globales multisectoriales.",
      takeaways: isEn
        ? ["Reinvention Studios", "Applied Enterprise AI", "High Concurrency", "Global Innovation"]
        : ["Reinvention Studios", "IA aplicada a escala", "Gaming & UI/UX", "Innovación Global"],
      images: [
        {
          src: "/images/visits/globant.jpg",
          caption: isEn
            ? "Globant engineering & digital studios innovation facilities in Medellín"
            : "Sede de innovación y estudios de ingeniería de Globant en Medellín",
          rotation: "-rotate-1",
        },
      ],
      cardRotation: "-rotate-1",
      stampText: isEn ? "GLOBANT // INNOVATION OK" : "GLOBANT // INNOVATION OK",
    },
  ];

  return (
    <section id="visits" className="py-20 relative select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14">
          <div className="mb-2">
            <Tape variant="warning">{t("visits.sectionTape")}</Tape>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between w-full gap-4">
            <div>
              <h2 className="text-3xl sm:text-5xl font-display font-black text-[#1B1717] dark:text-[#EDEBDD] tracking-tight uppercase">
                {t("visits.title")}
              </h2>
              <p className="mt-2 text-neutral-600 dark:text-neutral-400 font-mono text-xs max-w-2xl font-bold">
                {t("visits.subtitle")}
              </p>
            </div>

            {/* Rubber Stamp Tag */}
            <div className="px-3.5 py-1.5 bg-[#FAF9F5] dark:bg-[#1E1B18] border-2 border-dashed border-[#810100] text-[#810100] dark:text-[#E8927C] font-mono text-xs font-black rotate-[-2deg] shadow-[3px_3px_0px_#1B1717] dark:shadow-[3px_3px_0px_#810100] shrink-0">
              {t("visits.stampRoute")}
            </div>
          </div>
        </div>

        {/* Corporate Visits Collage Grid */}
        <div className="space-y-12">
          {visits.map((visit, index) => {
            const hasMultipleImages = visit.images.length > 1;

            return (
              <div
                key={visit.id}
                className={`relative group ${visit.cardRotation} hover:rotate-0 transition-transform duration-300`}
              >
                {/* Decorative clips & pushpins */}
                {index === 0 && (
                  <div className="absolute -top-5 left-12 z-20 pointer-events-none">
                    <Paperclip variant="cherry" />
                  </div>
                )}
                {index === 1 && (
                  <div className="absolute -top-3 right-16 z-20 pointer-events-none">
                    <Pushpin color="#810100" />
                  </div>
                )}
                {index === 2 && (
                  <div className="absolute -top-5 left-16 z-20 pointer-events-none">
                    <Paperclip variant="silver" />
                  </div>
                )}
                {index === 3 && (
                  <div className="absolute -top-3.5 right-12 z-20 pointer-events-none">
                    <Pushpin color="#630000" />
                  </div>
                )}
                {index === 4 && (
                  <div className="absolute -top-5 left-20 z-20 pointer-events-none">
                    <Paperclip variant="cherry" />
                  </div>
                )}

                {/* Main Card Body in Cotton Card #FAF9F5 */}
                <div className="rounded-lg border-2 border-[#1B1717] dark:border-[#810100] bg-[#FAF9F5] dark:bg-[#1E1B18] p-6 sm:p-9 shadow-[8px_8px_0px_#1B1717] dark:shadow-[8px_8px_0px_#810100]">
                  
                  {/* Top Metadata Bar */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 mb-6 border-b-2 border-dashed border-[#1B1717]/30 dark:border-[#EDEBDD]/20">
                    <div className="flex flex-wrap items-center gap-3">
                      <span
                        className={`text-[11px] font-mono font-black uppercase px-2.5 py-1 border-2 border-[#1B1717] dark:border-[#EDEBDD]/30 shadow-[2px_2px_0px_#1B1717] ${visit.badgeColor}`}
                      >
                        {visit.badge}
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-display font-black text-[#1B1717] dark:text-[#EDEBDD] uppercase tracking-tight">
                        {visit.name}
                      </h3>
                    </div>

                    <div className="flex items-center gap-2 font-mono text-xs text-[#1B1717] dark:text-[#EDEBDD] font-bold bg-[#EDEBDD] dark:bg-[#121010] px-3 py-1.5 border-2 border-[#1B1717] dark:border-[#810100] shadow-[2px_2px_0px_#1B1717] dark:shadow-[2px_2px_0px_#810100] w-fit">
                      <MapPin className="w-3.5 h-3.5 text-[#810100] dark:text-[#E8927C]" />
                      <span>{visit.location}</span>
                    </div>
                  </div>

                  {/* Two Column Layout: Content + Polaroid Gallery */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    
                    {/* LEFT COLUMN: Details & Key Takeaways (Lg col 6) */}
                    <div className="lg:col-span-6 space-y-4">
                      
                      <div className="flex items-center gap-2 text-[#810100] dark:text-[#E8927C] font-mono font-black text-sm uppercase">
                        <Building2 className="w-4 h-4 shrink-0" />
                        <span>{t("visits.areaPrefix")} {visit.role}</span>
                      </div>

                      <p className="text-sm sm:text-base text-neutral-800 dark:text-neutral-300 leading-relaxed font-sans">
                        {visit.description}
                      </p>

                      {/* Stamped Key Learnings */}
                      <div className="pt-2">
                        <div className="text-[11px] font-mono text-[#1B1717] dark:text-[#EDEBDD] font-black uppercase mb-2 flex items-center gap-1.5">
                          <Sparkles className="w-3.5 h-3.5 text-[#810100] dark:text-[#E8927C]" />
                          <span>{t("visits.takeawaysHeader")}</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {visit.takeaways.map((takeaway) => (
                            <span
                              key={takeaway}
                              className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono bg-[#EDEBDD] dark:bg-[#121010] text-[#1B1717] dark:text-[#EDEBDD] font-bold border border-[#1B1717] dark:border-[#810100] shadow-[2px_2px_0px_#1B1717] dark:shadow-[2px_2px_0px_#810100]"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-[#810100]" />
                              {takeaway}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Verification stamp */}
                      <div className="pt-3">
                        <div className="inline-block px-3 py-1 border-2 border-dashed border-[#810100] dark:border-[#E8927C] text-[#810100] dark:text-[#E8927C] font-mono text-[10px] uppercase font-black bg-[#FAF9F5] dark:bg-[#121010] rotate-[-1deg]">
                          {visit.stampText}
                        </div>
                      </div>

                    </div>

                    {/* RIGHT COLUMN: Polaroid Photo Frame(s) (Lg col 6) */}
                    <div className="lg:col-span-6">
                      <div
                        className={
                          hasMultipleImages
                            ? "grid grid-cols-1 sm:grid-cols-2 gap-4"
                            : "w-full max-w-lg mx-auto"
                        }
                      >
                        {visit.images.map((img, imgIdx) => (
                          <div
                            key={imgIdx}
                            className={`group/photo relative p-3 bg-[#FFFFFF] dark:bg-[#121010] border-2 border-[#1B1717] dark:border-[#810100] rounded shadow-[6px_6px_0px_#1B1717] dark:shadow-[6px_6px_0px_#810100] ${
                              img.rotation || "rotate-1"
                            } hover:rotate-0 hover:scale-[1.02] transition-all duration-300`}
                          >
                            {/* Realistic Corner Tape */}
                            <div className="absolute -top-2.5 -right-2 z-10 pointer-events-none">
                              <Tape variant="scotch" className="text-[9px] py-0.5 px-2 font-mono">
                                ARCHIVE
                              </Tape>
                            </div>

                            {/* Image Container with Polaroid ratio */}
                            <div className="w-full aspect-[4/3] bg-neutral-900 border border-[#1B1717]/30 dark:border-[#EDEBDD]/20 overflow-hidden relative">
                              <Image
                                src={img.src}
                                alt={img.caption}
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-cover group-hover/photo:scale-105 transition-transform duration-500 filter contrast-[1.02]"
                              />
                              <div className="absolute bottom-1 right-1 bg-[#1B1717]/80 text-[#EDEBDD] px-1.5 py-0.5 text-[9px] font-mono flex items-center gap-1">
                                <Camera className="w-2.5 h-2.5" />
                                <span>{t("visits.photoLabel")} {imgIdx + 1}</span>
                              </div>
                            </div>

                            {/* Polaroid Bottom Caption */}
                            <div className="mt-2.5 px-1">
                              <p className="text-[11px] font-mono text-neutral-700 dark:text-neutral-300 leading-snug font-bold">
                                {img.caption}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
