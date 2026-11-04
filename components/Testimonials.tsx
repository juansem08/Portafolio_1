import { Quote, CheckCircle2, UserCheck } from "lucide-react";
import { Tape, Pushpin, Paperclip } from "./ScrapbookAssets";

interface Testimonial {
  name: string;
  role: string;
  feedback: string;
  initials: string;
}

export default function Testimonials() {
  // Lista de testimonios (vacía para que puedas añadir tus nuevos testimonios más adelante)
  const testimonials: Testimonial[] = [
    // Ejemplo de formato para agregar:
    // {
    //   name: "Nombre",
    //   role: "Rol / Cargo",
    //   feedback: "Comentario o testimonio...",
    //   initials: "AB",
    // },
  ];

  return (
    <section id="testimonials" className="py-20 relative select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="mb-2">
            <Tape variant="warning">// 03. REFERENCIAS &amp; TESTIMONIOS</Tape>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-black text-[#1B1717] tracking-tight uppercase">
            TESTIMONIOS
          </h2>
          <p className="mt-2 text-neutral-600 font-mono text-xs max-w-xl font-bold">
            Opiniones de colegas de ingeniería y desarrolladores que han compartido equipo y arquitectura conmigo.
          </p>
        </div>

        {/* Testimonials Grid or Scrapbook Empty State */}
        {testimonials.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((t, idx) => (
              <div
                key={t.name}
                className={`relative flex flex-col justify-between rounded-lg border-2 border-[#1B1717] bg-[#FAF9F5] p-6 sm:p-7 shadow-[6px_6px_0px_#1B1717] ${
                  idx % 2 === 0 ? "-rotate-1" : "rotate-1"
                } hover:rotate-0 transition-transform duration-300`}
              >
                {/* Paperclip top */}
                <div className="absolute -top-4 right-6 pointer-events-none">
                  <Paperclip variant="cherry" />
                </div>

                <div>
                  <div className="mb-4 flex items-center justify-between">
                    <div className="w-10 h-10 bg-[#EDEBDD] border-2 border-[#1B1717] flex items-center justify-center text-[#810100]">
                      <Quote className="w-5 h-5 rotate-180" />
                    </div>
                    <div className="flex items-center gap-1 text-[11px] font-mono text-[#810100] bg-[#FAF9F5] px-2 py-0.5 border border-[#810100] font-bold">
                      <CheckCircle2 className="w-3 h-3" />
                      <span>Verificado</span>
                    </div>
                  </div>

                  <p className="text-[#1B1717] text-sm leading-relaxed italic font-sans mb-6">
                    &ldquo;{t.feedback}&rdquo;
                  </p>
                </div>

                <div className="pt-4 border-t border-[#1B1717]/20 flex items-center gap-3">
                  <div className="w-10 h-10 rounded bg-[#810100] text-[#EDEBDD] font-mono font-black text-xs flex items-center justify-center border-2 border-[#1B1717]">
                    {t.initials}
                  </div>
                  <div>
                    <h3 className="text-sm font-black text-[#1B1717] uppercase font-display">
                      {t.name}
                    </h3>
                    <p className="text-xs font-mono text-neutral-600 flex items-center gap-1 font-bold">
                      <UserCheck className="w-3 h-3 text-[#810100]" />
                      {t.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Tactile Corkboard / Manila Envelope Empty State */
          <div className="relative mx-auto max-w-2xl -rotate-1 hover:rotate-0 transition-transform duration-200">
            <div className="absolute -top-3.5 left-10 pointer-events-none">
              <Pushpin color="#810100" />
            </div>
            <div className="absolute -top-3.5 right-10 pointer-events-none">
              <Pushpin color="#630000" />
            </div>

            <div className="rounded-lg border-2 border-dashed border-[#1B1717] bg-[#FAF9F5] p-10 text-center shadow-[6px_6px_0px_#1B1717]">
              <div className="inline-block mb-3">
                <Tape variant="maroon" className="text-xs font-mono font-bold text-[#EDEBDD]">
                  CASILLERO DISPONIBLE // REFERENCIAS
                </Tape>
              </div>
              <p className="text-sm font-mono text-[#1B1717] font-bold">
                // Espacio reservado para testimonios y referencias de colegas de ingeniería.
              </p>
              <p className="text-xs font-hand text-[#810100] font-black text-xl mt-2">
                &gt; Próximamente nuevas reseñas añadidas.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
