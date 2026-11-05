import { Building2, MapPin, Calendar, CheckCircle2, Sparkles, ExternalLink, Camera } from "lucide-react";
import { Tape, Pushpin, Paperclip } from "./ScrapbookAssets";

interface VisitItem {
  id: string;
  name: string;
  badge: string;
  badgeColor: string;
  location: string;
  role: string;
  description: string;
  takeaways: string[];
  images: {
    src: string;
    caption: string;
    rotation?: string;
  }[];
  cardRotation: string;
  stampText: string;
}

export default function CompanyVisits() {
  const visits: VisitItem[] = [
    {
      id: "ciandt",
      name: "CI&T",
      badge: "GLOBAL TECH PARTNER",
      badgeColor: "bg-[#810100] text-[#EDEBDD]",
      location: "Medellín, Colombia",
      role: "Transformación Digital & Agile at Scale",
      description:
        "Inmersión en la sede de CI&T, explorando su modelo de ingeniería ágil a gran escala (Lean Digital), cultura de innovación continua, adopción de inteligencia artificial generativa en el ciclo de vida del software y arquitecturas cloud-native para clientes de clase mundial.",
      takeaways: ["Agile at Scale", "IA Generativa en Dev", "Cloud-Native", "Cultura Lean"],
      images: [
        {
          src: "/images/visits/ciandt.jpg",
          caption: "Equipo UCC en el auditorio central frente al emblemático logo CI&T",
          rotation: "-rotate-1",
        },
      ],
      cardRotation: "-rotate-1",
      stampText: "CI&T // VERIFICADO",
    },
    {
      id: "sofka",
      name: "Sofka Technologies",
      badge: "TALENT ACCELERATION & QA",
      badgeColor: "bg-[#630000] text-[#EDEBDD]",
      location: "Casa Sofka MED • Medellín",
      role: "Ingeniería de Calidad & Centro de Talento",
      description:
        "Recorrido por las instalaciones de Casa Sofka en Medellín y participación en la conferencia técnica sobre 'Sofka U: Centro de aprendizaje y desarrollo del talento'. Conocimiento profundo de sus procesos de QA, testing automatizado, aceleración de talento junior-to-senior y desarrollo de software orientado al impacto en LATAM.",
      takeaways: ["Sofka U Talent", "Testing & QA Automation", "Arquitecturas Distribuidas", "Cultura Hacker"],
      images: [
        {
          src: "/images/visits/sofka-casa.jpg",
          caption: "Foto oficial en el acceso principal de 'Casa Sofka MED'",
          rotation: "rotate-1",
        },
        {
          src: "/images/visits/sofka-u.jpg",
          caption: "Conferencia técnica: Metodología de aceleración de talento Sofka U",
          rotation: "-rotate-2",
        },
      ],
      cardRotation: "rotate-1",
      stampText: "CASA SOFKA // CERTIFICADO",
    },
    {
      id: "perficient",
      name: "Perficient",
      badge: "GLOBAL DIGITAL CONSULTING",
      badgeColor: "bg-[#1B1717] text-[#EDEBDD]",
      location: "Medellín, Colombia",
      role: "Consultoría Digital & Enterprise Solutions",
      description:
        "Visita a los espacios de trabajo colaborativo de Perficient Colombia. Intercambio técnico sobre consultoría de ingeniería para el mercado norteamericano, prácticas de DevOps continuo, microservicios, integración de big data y estándares de arquitectura de software para industrias altamente reguladas.",
      takeaways: ["Enterprise Consulting", "DevOps Pipelines", "Microservicios", "Estándares Globales"],
      images: [
        {
          src: "/images/visits/perficient.jpg",
          caption: "Espacios de coworking y networking en la sede de Perficient",
          rotation: "-rotate-1",
        },
      ],
      cardRotation: "-rotate-2",
      stampText: "PERFICIENT // VISITA TÉCNICA",
    },
    {
      id: "cibas",
      name: "Cibas Software",
      badge: "SOFTWARE CRAFTSMANSHIP",
      badgeColor: "bg-[#810100] text-[#EDEBDD]",
      location: "Medellín, Colombia",
      role: "Desarrollo a la Medida & Clean Code",
      description:
        "Sesión técnica en auditorio sobre desarrollo de software a la medida, metodologías de entrega continua y artesanía de código (Software Craftsmanship). Análisis de casos reales de arquitectura desacoplada, gestión de deuda técnica y cultura de equipo enfocada en la excelencia del producto digital.",
      takeaways: ["Clean Code", "Software a Medida", "Gestión de Deuda Técnica", "Entrega Continua"],
      images: [
        {
          src: "/images/visits/cibas.jpg",
          caption: "Sesión de bienvenida y charla técnica de ingeniería en el auditorio",
          rotation: "rotate-1",
        },
      ],
      cardRotation: "rotate-2",
      stampText: "CIBAS // INMERSIÓN OK",
    },
    {
      id: "globant",
      name: "Globant",
      badge: "AI & REINVENTION STUDIOS",
      badgeColor: "bg-[#630000] text-[#EDEBDD]",
      location: "Medellín, Colombia",
      role: "Estudios Digitales, IA & Reinversión Tecnológica",
      description:
        "Inmersión en los estudios de innovación de Globant en Medellín. Exploración de su enfoque 'AI Reinvention Studios', desarrollo de experiencias digitales a escala planetaria, gaming studios, arquitecturas de alta concurrencia y buenas prácticas para proyectos globales multisectoriales.",
      takeaways: ["Reinvention Studios", "IA aplicada a escala", "Gaming & UI/UX", "Innovación Global"],
      images: [
        {
          src: "/images/visits/globant.jpg",
          caption: "Sede de innovación y estudios de ingeniería de Globant en Medellín",
          rotation: "-rotate-1",
        },
      ],
      cardRotation: "-rotate-1",
      stampText: "GLOBANT // INNOVATION OK",
    },
  ];

  return (
    <section id="visits" className="py-20 relative select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14">
          <div className="mb-2">
            <Tape variant="warning">// 05. INMERSIÓN INDUSTRIAL &amp; EMPRESAS</Tape>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between w-full gap-4">
            <div>
              <h2 className="text-3xl sm:text-5xl font-display font-black text-[#1B1717] tracking-tight uppercase">
                VISITAS EMPRESARIALES
              </h2>
              <p className="mt-2 text-neutral-600 font-mono text-xs max-w-2xl font-bold">
                Recorridos técnicos, inmersión en cultura de ingeniería y conferencias en las empresas tecnológicas más influyentes de Medellín (Ruta Académica UCC - Ingeniería de Software).
              </p>
            </div>

            {/* Rubber Stamp Tag */}
            <div className="px-3.5 py-1.5 bg-[#FAF9F5] border-2 border-dashed border-[#810100] text-[#810100] font-mono text-xs font-black rotate-[-2deg] shadow-[3px_3px_0px_#1B1717] shrink-0">
              5 EMPRESAS // RUTA MEDELLÍN TECH
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
                <div className="rounded-lg border-2 border-[#1B1717] bg-[#FAF9F5] p-6 sm:p-9 shadow-[8px_8px_0px_#1B1717]">
                  
                  {/* Top Metadata Bar */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 mb-6 border-b-2 border-dashed border-[#1B1717]/30">
                    <div className="flex flex-wrap items-center gap-3">
                      <span
                        className={`text-[11px] font-mono font-black uppercase px-2.5 py-1 border-2 border-[#1B1717] shadow-[2px_2px_0px_#1B1717] ${visit.badgeColor}`}
                      >
                        {visit.badge}
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-display font-black text-[#1B1717] uppercase tracking-tight">
                        {visit.name}
                      </h3>
                    </div>

                    <div className="flex items-center gap-2 font-mono text-xs text-[#1B1717] font-bold bg-[#EDEBDD] px-3 py-1.5 border-2 border-[#1B1717] shadow-[2px_2px_0px_#1B1717] w-fit">
                      <MapPin className="w-3.5 h-3.5 text-[#810100]" />
                      <span>{visit.location}</span>
                    </div>
                  </div>

                  {/* Two Column Layout: Content + Polaroid Gallery */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    
                    {/* LEFT COLUMN: Details & Key Takeaways (Lg col 6) */}
                    <div className="lg:col-span-6 space-y-4">
                      
                      <div className="flex items-center gap-2 text-[#810100] font-mono font-black text-sm uppercase">
                        <Building2 className="w-4 h-4 shrink-0" />
                        <span>ÁREA: {visit.role}</span>
                      </div>

                      <p className="text-sm sm:text-base text-neutral-800 leading-relaxed font-sans">
                        {visit.description}
                      </p>

                      {/* Stamped Key Learnings */}
                      <div className="pt-2">
                        <div className="text-[11px] font-mono text-[#1B1717] font-black uppercase mb-2 flex items-center gap-1.5">
                          <Sparkles className="w-3.5 h-3.5 text-[#810100]" />
                          <span>PUNTOS CLAVE DE APRENDIZAJE:</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {visit.takeaways.map((takeaway) => (
                            <span
                              key={takeaway}
                              className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono bg-[#EDEBDD] text-[#1B1717] font-bold border border-[#1B1717] shadow-[2px_2px_0px_#1B1717]"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-[#810100]" />
                              {takeaway}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Verification stamp */}
                      <div className="pt-3">
                        <div className="inline-block px-3 py-1 border-2 border-dashed border-[#810100] text-[#810100] font-mono text-[10px] uppercase font-black bg-[#FAF9F5] rotate-[-1deg]">
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
                            className={`group/photo relative p-3 bg-[#FFFFFF] border-2 border-[#1B1717] rounded shadow-[6px_6px_0px_#1B1717] ${
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
                            <div className="w-full aspect-[4/3] bg-neutral-900 border border-[#1B1717]/30 overflow-hidden relative">
                              <img
                                src={img.src}
                                alt={img.caption}
                                loading="lazy"
                                className="w-full h-full object-cover group-hover/photo:scale-105 transition-transform duration-500 filter contrast-[1.02]"
                              />
                              <div className="absolute bottom-1 right-1 bg-[#1B1717]/80 text-[#EDEBDD] px-1.5 py-0.5 text-[9px] font-mono flex items-center gap-1">
                                <Camera className="w-2.5 h-2.5" />
                                <span>FOTO {imgIdx + 1}</span>
                              </div>
                            </div>

                            {/* Polaroid Bottom Handwritten / Monospace Caption */}
                            <div className="mt-2.5 px-1">
                              <p className="text-[11px] font-mono text-neutral-700 leading-snug font-bold">
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

/* tactile_build_step_15_pwciwj */
