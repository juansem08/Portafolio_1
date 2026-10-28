import { Download, Terminal, ShieldCheck, Layers, Sparkles, Cpu } from "lucide-react";
import { Tape, BadgeClip, Pushpin, DoodleArrow, MarkerScratch, Barcode } from "./ScrapbookAssets";

export default function Hero() {
  return (
    <section className="relative pt-8 pb-20 md:pt-14 md:pb-28 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Bento / Scrapbook Collage Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT COLUMN: Main ID Card & Identity Presentation (Lg col 8) */}
          <div className="lg:col-span-8 space-y-7">
            
            {/* Top Tape & Caution Sticker with Pushpin */}
            <div className="flex flex-wrap items-center gap-4">
              {/* Caution industrial tape with Cherry Pushpin */}
              <div className="relative inline-flex items-center -rotate-2 hover:rotate-0 transition-transform">
                <div className="absolute -top-3.5 left-3 z-30 pointer-events-none">
                  <Pushpin color="#810100" />
                </div>
                <div className="bg-[#810100] p-[2px] shadow-[4px_4px_0px_#1B1717] border border-[#1B1717]">
                  <div className="bg-[#1B1717] px-4 py-1.5 flex items-center gap-2 text-xs font-mono font-black tracking-wider text-[#EDEBDD] uppercase">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#810100] animate-ping" />
                    <span>INGENIERÍA DE SOFTWARE // OPEN TO WORK</span>
                  </div>
                </div>
              </div>

              {/* Masking tape tag */}
              <Tape variant="masking" className="rotate-2 text-xs font-mono font-bold text-[#1B1717]">
                LAB: SEBASTIAN-SYS // 2026
              </Tape>
            </div>

            {/* LAMINATED ID CARD BADGE on COTTON/WHITE with NOIR BORDERS */}
            <div className="relative group -rotate-1 hover:rotate-0 transition-all duration-300">
              {/* Metallic Crocodile Clip at top center */}
              <div className="absolute -top-7 left-1/2 -translate-x-1/2 z-30 pointer-events-none">
                <BadgeClip />
              </div>

              {/* Laminated Plastic Card Container */}
              <div className="relative rounded-lg bg-[#FAF9F5] border-4 border-[#1B1717] p-6 sm:p-8 shadow-[10px_10px_0px_#1B1717] overflow-hidden">
                {/* Glossy Plastic Sheen overlay reflection */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.2] to-white/[0.4] pointer-events-none" />
                {/* Lanyard punch hole simulation */}
                <div className="w-10 h-2.5 mx-auto bg-[#1B1717] rounded-full mb-6 shadow-inner" />

                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-6 border-b-2 border-dashed border-[#1B1717]/30">
                  <div className="space-y-2">
                    <span className="font-mono text-xs text-[#630000] tracking-widest uppercase flex items-center gap-2 font-bold">
                      <span className="w-2 h-2 bg-[#810100] rounded-full inline-block" />
                      FACULTAD DE INGENIERÍA // CREDENCIAL TÉCNICA
                    </span>
                    
                    {/* Big Display Urban / Graffiti Title with Cherry Red Accent */}
                    <div className="space-y-1">
                      <h1 className="text-3xl sm:text-5xl md:text-6xl font-display font-black tracking-tight text-[#1B1717] uppercase">
                        HOLA, SOY{" "}
                        <span className="inline-block relative text-[#810100] font-marker lowercase text-4xl sm:text-6xl md:text-7xl -rotate-2 ml-1">
                          Sebastián
                          <MarkerScratch className="absolute -bottom-2 left-0 text-[#810100]" />
                        </span>
                      </h1>
                    </div>
                  </div>

                  {/* ID Card Photo Frame / Wireframe Silhouette */}
                  <div className="relative shrink-0 rotate-2 group-hover:rotate-0 transition-transform">
                    <div className="w-24 h-28 sm:w-28 sm:h-32 bg-[#FAF9F5] border-2 border-[#1B1717] p-1.5 shadow-[4px_4px_0px_#1B1717] flex flex-col items-center justify-between">
                      <div className="w-full h-20 bg-[#EDEBDD] border border-[#1B1717]/30 flex items-center justify-center relative overflow-hidden">
                        <Terminal className="w-10 h-10 text-[#810100]" />
                        <div className="absolute top-1 right-1 text-[8px] font-mono text-[#EDEBDD] font-bold bg-[#810100] px-1">
                          QA OK
                        </div>
                      </div>
                      <span className="font-mono text-[9px] text-[#1B1717] font-bold tracking-wider">
                        ARCH-SYS // 08
                      </span>
                    </div>
                    {/* Cherry Red verified rubber stamp */}
                    <div className="absolute -bottom-3 -right-3 px-2 py-0.5 border-2 border-[#810100] text-[#810100] font-mono font-black text-[9px] uppercase rotate-12 bg-[#FAF9F5] tracking-widest shadow-md">
                      VERIFICADO
                    </div>
                  </div>
                </div>

                {/* Subtitle printed on Cotton / Kraft Tape with torn edges */}
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <div className="relative inline-block rotate-1">
                    <div className="bg-[#FAF9F5] text-[#1B1717] px-4 py-2 font-typewriter font-bold text-xs sm:text-sm md:text-base border-2 border-[#1B1717] shadow-[3px_3px_0px_#1B1717]">
                      &gt;_ Software Engineer &amp; Lead Software Architect
                    </div>
                  </div>
                  <div className="font-mono text-xs text-[#810100] font-bold bg-[#EDEBDD] px-3 py-1.5 border-2 border-[#1B1717] shadow-[2px_2px_0px_#1B1717]">
                    PASTO, COLOMBIA
                  </div>
                </div>

                {/* Bottom Barcode on the ID Card */}
                <div className="mt-6 pt-4 border-t border-[#1B1717]/20 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <Barcode code="*SEBAS-ARCH-5TH-SEM*" />
                  <div className="text-right font-mono text-[11px] text-[#1B1717]">
                    <p className="font-black text-[#810100]">UCC (ING. SOFTWARE) • SENA (TÉCNICO)</p>
                    <p className="text-neutral-600 text-[10px] font-bold">PREGRADO EN PROCESO // TITULADO CERTIFICADO</p>
                  </div>
                </div>
              </div>
            </div>

            {/* BIO NOTE: Torn Notepad Sheet with Duct Tape */}
            <div className="relative rotate-1 hover:rotate-0 transition-transform">
              <div className="absolute -top-3.5 -left-4 z-20 pointer-events-none rotate-[-25deg]">
                <Tape variant="duct" className="text-[10px] uppercase font-mono font-bold tracking-wider">
                  DUCT-TAPE
                </Tape>
              </div>
              <div className="absolute -top-3.5 -right-4 z-20 pointer-events-none rotate-[25deg]">
                <Tape variant="duct" className="text-[10px] uppercase font-mono font-bold tracking-wider">
                  HOLD_FAST
                </Tape>
              </div>

              {/* Notepad card */}
              <div className="relative p-6 sm:p-7 bg-[#FAF9F5] border-2 border-[#1B1717] rounded shadow-[6px_6px_0px_#1B1717]">
                <div className="flex items-center gap-2 mb-3 text-xs font-mono text-[#810100] font-black">
                  <span className="w-2 h-2 bg-[#810100] rounded-sm" />
                  <span>MANIFIESTO_ARQUITECTURA // NOTA DE TALLER</span>
                </div>
                <p className="text-lg sm:text-xl font-hand font-bold text-[#1B1717] leading-relaxed tracking-wide">
                  &ldquo;Dos de agua por una de arroz, así es como yo hago el código y así de bueno me queda el arroz.&rdquo;
                </p>
                <div className="mt-3 text-right font-mono text-[11px] text-[#630000] font-bold">
                  — Sebastián // Lead Software Architect
                </div>
              </div>
            </div>

            {/* CTA BUTTONS: Cherry Red Die-Cut Sticker + Hand-drawn Arrow */}
            <div className="pt-2 flex flex-wrap items-center gap-6">
              {/* "Descargar CV": Die-cut physical sticker in Cherry Red with Noir Black shadow */}
              <a
                href="/cv.pdf"
                download
                className="group relative inline-flex items-center gap-3 px-7 py-4 bg-[#810100] text-[#EDEBDD] font-display font-black text-sm uppercase tracking-wider border-3 border-[#1B1717] rounded-lg shadow-[6px_6px_0px_#1B1717] -rotate-2 hover:rotate-0 hover:bg-[#9E0201] hover:scale-105 active:scale-95 transition-all duration-200"
              >
                <div className="w-5 h-5 bg-[#1B1717] text-[#EDEBDD] rounded flex items-center justify-center font-bold">
                  <Download className="w-3.5 h-3.5" />
                </div>
                <span>DESCARGAR CV // PDF</span>
                {/* Realistic peel corner */}
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-white/80 rotate-45 pointer-events-none" />
              </a>

              {/* "Ver proyectos ->" with Hand-drawn SVG doodle arrow in Cherry Red */}
              <div className="flex items-center gap-3 relative">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 px-5 py-3.5 bg-[#FAF9F5] hover:bg-[#EDEBDD] text-[#1B1717] font-mono font-bold text-xs uppercase tracking-wider border-2 border-[#1B1717] shadow-[4px_4px_0px_#1B1717] rotate-1 hover:rotate-0 transition-all active:scale-95"
                >
                  <span>VER PROYECTOS RECIBO</span>
                  <span className="text-[#810100] font-bold">&darr;</span>
                </a>
                
                {/* Doodle arrow pointing down */}
                <div className="hidden sm:block -mb-6 pointer-events-none">
                  <DoodleArrow color="#810100" className="rotate-12" />
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Physical Badges & Enamel Pins (Lg col 4) */}
          <div className="lg:col-span-4 space-y-6 lg:pt-8">
            
            {/* Header label */}
            <div className="inline-block rotate-1">
              <Tape variant="warning">
                // PILARES Y CERTIFICACIÓN
              </Tape>
            </div>

            {/* Pillar 1: Enamel Metallic Pin "Capas Desacopladas" in Maroon/Noir */}
            <div className="relative group p-5 bg-[#FAF9F5] border-2 border-[#1B1717] shadow-[5px_5px_0px_#1B1717] -rotate-1 hover:rotate-0 hover:-translate-y-1 transition-all duration-200">
              <div className="absolute -top-2.5 right-4 pointer-events-none">
                <Pushpin color="#810100" />
              </div>
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-lg bg-[#810100] border-2 border-[#1B1717] flex items-center justify-center text-[#EDEBDD] shadow-[2px_2px_0px_#1B1717]">
                  <Layers className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[10px] font-mono text-[#EDEBDD] font-bold bg-[#1B1717] px-1.5 py-0.5 border border-[#1B1717]">
                      ENAMEL PIN
                    </span>
                  </div>
                  <h3 className="font-display font-black text-[#1B1717] text-base mt-1 uppercase">
                    Capas Desacopladas
                  </h3>
                  <p className="text-xs font-mono text-neutral-600 mt-0.5">
                    Dominio, aplicación e infraestructura aisladas.
                  </p>
                </div>
              </div>
            </div>

            {/* Pillar 2: Embroidered Tactical Patch "Calidad & Testing" in Cherry Red */}
            <div className="relative group p-5 bg-[#FAF9F5] border-2 border-dashed border-[#810100] shadow-[5px_5px_0px_#1B1717] rotate-2 hover:rotate-0 hover:-translate-y-1 transition-all duration-200">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-lg bg-[#630000] border-2 border-[#1B1717] flex items-center justify-center text-[#EDEBDD] shadow-[2px_2px_0px_#1B1717]">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[10px] font-mono text-[#EDEBDD] font-bold bg-[#810100] px-1.5 py-0.5 border border-[#630000]">
                      TACTICAL PATCH
                    </span>
                  </div>
                  <h3 className="font-display font-black text-[#1B1717] text-base mt-1 uppercase">
                    Calidad &amp; Testing
                  </h3>
                  <p className="text-xs font-mono text-neutral-600 mt-0.5">
                    TDD estricto y cobertura de código &gt;95%.
                  </p>
                </div>
              </div>
            </div>

            {/* Pillar 3: Holographic Foil Chip "Arquitectura Limpia" */}
            <div className="relative group p-5 bg-[#FAF9F5] border-2 border-[#1B1717] shadow-[5px_5px_0px_#1B1717] -rotate-2 hover:rotate-0 hover:-translate-y-1 transition-all duration-200">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-lg bg-[#1B1717] border-2 border-[#810100] flex items-center justify-center text-[#EDEBDD] shadow-[2px_2px_0px_#1B1717]">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[10px] font-mono text-[#EDEBDD] font-bold bg-[#630000] px-1.5 py-0.5 border border-[#1B1717]">
                      CLEAN CHIP
                    </span>
                  </div>
                  <h3 className="font-display font-black text-[#1B1717] text-base mt-1 uppercase">
                    Arquitectura Limpia
                  </h3>
                  <p className="text-xs font-mono text-neutral-600 mt-0.5">
                    Alta cohesión, bajo acoplamiento y testeabilidad.
                  </p>
                </div>
              </div>
            </div>

            {/* Hardware Module Info Box */}
            <div className="p-4 bg-[#FAF9F5] border-2 border-[#1B1717] rounded shadow-[4px_4px_0px_#1B1717] font-mono text-xs text-[#1B1717] rotate-1">
              <div className="flex items-center justify-between border-b border-[#1B1717]/20 pb-2 mb-2 text-[#810100] font-bold">
                <span className="flex items-center gap-1.5">
                  <Cpu className="w-4 h-4" />
                  SPEC: HARDWARE_SPECS
                </span>
                <span>ROM: 512KB</span>
              </div>
              <p className="text-[11px] leading-relaxed text-neutral-700">
                Software construido con patrones modulares, arquitecturas orientadas a eventos y Next.js App Router de alto desempeño.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
