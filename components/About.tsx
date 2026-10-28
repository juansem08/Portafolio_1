import { MapPin, Sparkles, Utensils, Music, GraduationCap, Layers } from "lucide-react";
import { Tape, Paperclip, Pushpin } from "./ScrapbookAssets";

export default function About() {
  const quickFacts = {
    location: "Pasto, Colombia",
    interests: ["Gastronomía", "Cine & Terror", "Comedia", "Música Tropical", "Arte", "Vida Social"],
    languages: ["TypeScript", "JavaScript", "Python", "Java", "SQL", "C/C++", "C#", "HTML/CSS", "PHP", "Bash"],
  };

  return (
    <section id="about" className="py-20 relative select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-10">
          <Tape variant="warning">// 01. EXPEDIENTE &amp; FILOSOFÍA</Tape>
        </div>

        {/* Bento Collage Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Manila Dossier Folder (Lg col 7) */}
          <div className="lg:col-span-7 relative group -rotate-1 hover:rotate-0 transition-transform duration-300">
            {/* Top paperclip on folder */}
            <div className="absolute -top-5 left-8 z-30 pointer-events-none">
              <Paperclip variant="cherry" />
            </div>

            {/* Manila Folder Tab */}
            <div className="inline-block px-5 py-1.5 bg-[#FAF9F5] border-t-2 border-x-2 border-[#1B1717] rounded-t-md font-mono text-xs text-[#1B1717] font-black uppercase tracking-widest shadow-sm">
              EXPEDIENTE // SEBAS-SYS-08
            </div>

            {/* Folder Body */}
            <div className="rounded-b-lg rounded-tr-lg border-2 border-[#1B1717] bg-[#FAF9F5] p-7 sm:p-9 shadow-[8px_8px_0px_#1B1717] relative">
              
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b-2 border-dashed border-[#1B1717]/30 pb-4">
                  <h2 className="text-2xl sm:text-4xl font-display font-black text-[#1B1717] tracking-tight uppercase">
                    SOBRE MÍ
                  </h2>
                  <div className="px-2.5 py-1 bg-[#810100] text-[#EDEBDD] font-mono text-xs font-bold border border-[#1B1717]">
                    PASTO // COL
                  </div>
                </div>

                {/* Main Paragraph on textured paper */}
                <p className="text-base sm:text-lg text-[#1B1717] leading-relaxed font-sans">
                  Actualmente curso la carrera de Ingeniería de Software en la Universidad Cooperativa de Colombia. Fuera del ámbito académico, mis principales intereses son la gastronomía, el arte y el cine, con preferencia por los géneros de terror y comedia. Asimismo, disfruto de la música tropical y de las actividades sociales con amigos.
                </p>

                {/* Sub-cards as Lab Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 bg-[#FFFFFF] border-2 border-[#1B1717] rounded shadow-[4px_4px_0px_#1B1717] rotate-1 hover:rotate-0 transition-transform">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-[#810100]/10 border border-[#810100] text-[#810100] rounded">
                        <Utensils className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-sm font-black text-[#1B1717] uppercase font-display">
                          Gastronomía, Arte &amp; Cine
                        </h3>
                        <p className="text-xs text-neutral-600 mt-1">
                          Cine de terror y comedia, pasión culinaria y apreciación artística.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-[#FFFFFF] border-2 border-[#1B1717] rounded shadow-[4px_4px_0px_#1B1717] -rotate-1 hover:rotate-0 transition-transform">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-[#630000]/10 border border-[#630000] text-[#630000] rounded">
                        <Music className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-sm font-black text-[#1B1717] uppercase font-display">
                          Música Tropical &amp; Amigos
                        </h3>
                        <p className="text-xs text-neutral-600 mt-1">
                          Ritmos tropicales, actividades sociales y compartir buenos momentos.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom University Footer on the dossier */}
              <div className="mt-8 pt-5 border-t-2 border-[#1B1717]/20 flex flex-wrap items-center justify-between gap-3 font-mono text-xs text-[#1B1717] font-bold">
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-[#810100]" />
                  <span>UCC • ING. DE SOFTWARE (EN PROCESO) • PASTO</span>
                </div>
                <div className="px-2 py-0.5 bg-[#EDEBDD] border border-[#1B1717] text-[10px] text-[#810100] font-black tracking-wider shadow-sm">
                  SENA • TÉCNICO EN SISTEMAS (CERTIFICADO)
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Sticky Post-It Notes & Quick Facts (Lg col 5) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Post-it Note 1: Location (Pasto, Colombia) with Pushpin */}
            <div className="relative rotate-2 hover:rotate-0 transition-transform duration-200">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-30 pointer-events-none">
                <Pushpin color="#810100" />
              </div>

              {/* Yellow Post-it Paper */}
              <div className="bg-[#FAF5DF] text-[#1B1717] p-6 rounded-sm shadow-[6px_6px_0px_#1B1717] border-2 border-[#1B1717]">
                <div className="flex items-center gap-2 text-xs font-mono font-black text-[#810100] uppercase tracking-widest mb-2">
                  <MapPin className="w-4 h-4 text-[#810100]" />
                  <span>POST-IT // UBICACIÓN OFICIAL</span>
                </div>
                <h3 className="text-2xl font-display font-black text-[#1B1717]">
                  {quickFacts.location}
                </h3>
                <p className="font-hand font-bold text-lg text-[#630000] mt-1">
                  &gt; Operando desde el suroccidente colombiano para el mundo.
                </p>
              </div>
            </div>

            {/* Post-it Note 2: Areas of Interest as Stickers */}
            <div className="relative -rotate-1 hover:rotate-0 transition-transform duration-200">
              <div className="p-6 bg-[#FAF9F5] border-2 border-[#1B1717] rounded shadow-[6px_6px_0px_#1B1717]">
                <div className="flex items-center gap-2 text-xs font-mono text-[#810100] font-black uppercase tracking-wider mb-4">
                  <Sparkles className="w-4 h-4" />
                  <span>STICKER PACK // ÁREAS DE INTERÉS</span>
                </div>

                <div className="grid grid-cols-2 gap-2.5">
                  {quickFacts.interests.map((interest, idx) => (
                    <div
                      key={interest}
                      className={`px-3 py-2 bg-[#FFFFFF] border-2 border-[#1B1717] font-mono text-xs font-black text-[#1B1717] shadow-[3px_3px_0px_#1B1717] text-center ${
                        idx % 2 === 0 ? "rotate-1" : "-rotate-2"
                      } hover:bg-[#810100] hover:text-[#EDEBDD] hover:scale-105 transition-all`}
                    >
                      #{interest}
                    </div>
                  ))}
                </div>

                {/* Core Languages Stamps */}
                <div className="mt-4 pt-3 border-t border-[#1B1717]/20">
                  <div className="flex items-center gap-1.5 text-[10px] font-mono text-[#810100] font-black uppercase mb-2">
                    <Sparkles className="w-3 h-3 text-[#810100]" />
                    <span>LENGUAJES UTILIZADOS // CORE STACK:</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {quickFacts.languages.map((lang) => (
                      <span
                        key={lang}
                        className="px-2 py-0.5 bg-[#FAF9F5] border border-[#1B1717] font-mono text-[10px] font-bold text-[#1B1717] shadow-[2px_2px_0px_#1B1717]"
                      >
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Technical Philosophy Quote */}
                <div className="mt-5 p-3.5 bg-[#EDEBDD] border border-[#1B1717]/30 rounded font-mono text-xs text-[#1B1717] space-y-1">
                  <div className="flex items-center gap-2 text-[#810100] font-bold">
                    <Layers className="w-3.5 h-3.5" />
                    <span>ENFOQUE DE ARQUITECTURA</span>
                  </div>
                  <p className="text-[11px] text-neutral-700">
                    Bajo acoplamiento, alta cohesión y testeabilidad por diseño sistemático.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
