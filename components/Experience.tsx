import { Briefcase, GraduationCap, Calendar, CheckCircle2, ChevronRight } from "lucide-react";
import { Tape, Pushpin, Paperclip } from "./ScrapbookAssets";

interface TimelineItem {
  type: "laboral" | "academica";
  title: string;
  organization: string;
  period: string;
  description: string;
  badges: string[];
}

export default function Experience() {
  const experiences: TimelineItem[] = [
    {
      type: "laboral",
      title: "Desarrollador y Arquitecto",
      organization: "VisualPart",
      period: "2026",
      description:
        "Diseño e implementación de la arquitectura modular de software, estructura desacoplada del frontend y backend, y optimización del motor de búsqueda visual para repuestos automotrices.",
      badges: ["Arquitectura de Software", "Next.js", "Lead Tech", "E-commerce"],
    },
    {
      type: "academica",
      title: "Ingeniería de Software",
      organization: "Universidad Cooperativa de Colombia",
      period: "En Proceso (Pregrado)",
      description:
        "Formación avanzada en arquitectura limpia, ingeniería de calidad de software (QA), patrones de diseño, arquitecturas distribuidas, bases de datos y desarrollo de soluciones con IA.",
      badges: ["Clean Architecture", "Arquitectura de Software", "Bases de Datos", "QA"],
    },
    {
      type: "academica",
      title: "Técnico en Sistemas",
      organization: "SENA (Servicio Nacional de Aprendizaje)",
      period: "Titulada // Certificado (Ficha 2492764)",
      description:
        "Formación técnica titulada en mantenimiento preventivo y correctivo de hardware y software, ensamble de equipos, configuración de redes de datos, cableado estructurado e implementación de sistemas operativos.",
      badges: ["Mantenimiento & Hardware", "Redes de Datos", "Soporte Técnico", "Sistemas Operativos"],
    },
  ];

  return (
    <section id="experience" className="py-20 relative select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14">
          <div className="mb-2">
            <Tape variant="warning">// 04. REGISTRO CRONOLÓGICO &amp; TRAYECTORIA</Tape>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-black text-[#1B1717] tracking-tight uppercase">
            EXPERIENCIA &amp; FORMACIÓN
          </h2>
          <p className="mt-2 text-neutral-600 font-mono text-xs max-w-xl font-bold">
            Tarjetas de archivo técnico que documentan mi recorrido en desarrollo de arquitectura limpia, proyectos de ingeniería y formación académica.
          </p>
        </div>

        {/* Index Cards Timeline Stack */}
        <div className="space-y-8 relative">
          {experiences.map((item, index) => {
            const isWork = item.type === "laboral";
            const rotation = index % 2 === 0 ? "-rotate-1" : "rotate-1";

            return (
              <div
                key={index}
                className={`relative group ${rotation} hover:rotate-0 transition-transform duration-300`}
              >
                {/* Decorative clips & pushpins */}
                {index === 0 && (
                  <div className="absolute -top-5 left-10 z-20 pointer-events-none">
                    <Paperclip variant="cherry" />
                  </div>
                )}
                {index === 1 && (
                  <div className="absolute -top-3 right-12 z-20 pointer-events-none">
                    <Pushpin color="#810100" />
                  </div>
                )}
                {index === 2 && (
                  <div className="absolute -top-5 left-14 z-20 pointer-events-none">
                    <Paperclip variant="silver" />
                  </div>
                )}

                {/* Index Card Body in Cotton Card #FAF9F5 */}
                <div className="rounded-lg border-2 border-[#1B1717] bg-[#FAF9F5] p-6 sm:p-8 shadow-[8px_8px_0px_#1B1717]">
                  {/* Card Top Metadata Bar */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 mb-4 border-b-2 border-dashed border-[#1B1717]/30">
                    <div className="flex items-center gap-3">
                      <span
                        className={`text-[11px] font-mono font-black uppercase px-2.5 py-1 border-2 border-[#1B1717] shadow-[2px_2px_0px_#1B1717] ${
                          isWork
                            ? "bg-[#810100] text-[#EDEBDD]"
                            : "bg-[#630000] text-[#EDEBDD]"
                        }`}
                      >
                        {isWork ? "FICHA // LABORAL" : "FICHA // ACADÉMICA"}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-display font-black text-[#1B1717] uppercase">
                        {item.title}
                      </h3>
                    </div>

                    <div className="flex items-center gap-2 font-mono text-xs text-[#1B1717] font-bold bg-[#EDEBDD] px-3 py-1.5 border-2 border-[#1B1717] shadow-[2px_2px_0px_#1B1717] w-fit">
                      <Calendar className="w-3.5 h-3.5 text-[#810100]" />
                      <span>{item.period}</span>
                    </div>
                  </div>

                  {/* Organization with Dymo style accent */}
                  <div className="flex items-center gap-2 text-[#810100] font-mono font-black text-sm sm:text-base mb-4">
                    <ChevronRight className="w-4 h-4" />
                    <span>ORG: {item.organization}</span>
                  </div>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-neutral-800 leading-relaxed font-sans mb-6">
                    {item.description}
                  </p>

                  {/* Badges as Stamped Tags */}
                  <div className="flex flex-wrap gap-2 pt-3 border-t border-[#1B1717]/20">
                    {item.badges.map((badge) => (
                      <span
                        key={badge}
                        className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-mono bg-[#EDEBDD] text-[#1B1717] font-bold border border-[#1B1717] shadow-[2px_2px_0px_#1B1717]"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#810100]" />
                        {badge}
                      </span>
                    ))}
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
