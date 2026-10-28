import { projects } from "@/data/projects";
import { Github, ExternalLink, Scissors } from "lucide-react";
import { Tape, Barcode, QRCodeGraphic, Pushpin } from "./ScrapbookAssets";

export default function Projects() {
  return (
    <section id="projects" className="py-20 relative select-none">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Caution Tape */}
        <div className="flex flex-col items-center mb-10 text-center">
          <div className="relative inline-block -rotate-1 mb-3">
            <Tape variant="warning">
              // REGISTRO DE TRANSACCIONES &amp; PROYECTOS
            </Tape>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-black text-[#1B1717] tracking-tight uppercase">
            REGISTRO DE INGENIERÍA DE SOFTWARE
          </h2>
          <p className="mt-2 text-neutral-600 font-mono text-xs max-w-md font-bold">
            Recibo detallado de software arquitecturado, componentes desacoplados y soluciones en producción.
          </p>
        </div>

        {/* THE THERMAL RECEIPT CONTAINER */}
        <div className="relative mx-auto max-w-2xl -rotate-1 hover:rotate-0 transition-transform duration-300">
          
          {/* Top Masking Tape fixing the receipt to the cutting mat */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-30 pointer-events-none">
            <Tape variant="maroon" className="rotate-2 text-[10px] font-mono font-bold text-[#EDEBDD]">
              PAID &amp; DEPLOYED // VERCEL CLOUD
            </Tape>
          </div>

          {/* Red pushpin on top right in Cherry Red */}
          <div className="absolute -top-3 right-6 z-30 pointer-events-none">
            <Pushpin color="#810100" />
          </div>

          {/* Thermal Receipt Paper Card */}
          <div className="thermal-receipt pt-10 pb-8 px-6 sm:px-10 receipt-tear-top receipt-tear-bottom text-[#1B1717] font-mono text-xs relative border-x-2 border-[#1B1717]">
            
            {/* Header: Store details */}
            <div className="text-center space-y-1 pb-5 border-b-2 border-dashed border-[#1B1717]/40">
              <div className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-[#1B1717] text-[#EDEBDD] text-[10px] tracking-widest font-bold uppercase mb-1">
                <Scissors className="w-3 h-3 rotate-90" />
                <span>OFFICIAL RECEIPT</span>
              </div>
              
              <h3 className="font-display font-black text-2xl sm:text-3xl tracking-tight uppercase text-[#1B1717]">
                THE ARCHITECTURE SHOP
              </h3>
              <p className="text-[11px] font-bold text-[#810100] tracking-wider">
                DECOUPLED SOFTWARE &amp; CLEAN CODE LABS
              </p>
              <p className="text-[10px] text-neutral-600">
                PASTO, NARIÑO, COLOMBIA • TEL: +57 (SYS)-08
              </p>
              
              <div className="pt-3 flex flex-wrap items-center justify-between text-[11px] font-bold border-t border-dotted border-neutral-400 mt-2">
                <span>DATE: 2026-10-28</span>
                <span>TIME: 08:25 AM</span>
                <span>CASHIER: SEBASTIÁN</span>
              </div>
              <div className="flex justify-between text-[10px] text-neutral-500">
                <span>TERMINAL: POS-05-SYS</span>
                <span>TRANSACTION: #08492-OK</span>
              </div>
            </div>

            {/* Receipt Table Header */}
            <div className="py-2.5 border-b-2 border-[#1B1717] flex justify-between font-black text-[11px] tracking-wider uppercase text-[#1B1717]">
              <span>CANT / DESCRIPCIÓN DEL PROYECTO</span>
              <span>ESTADO</span>
            </div>

            {/* Project Receipt Items */}
            <div className="divide-y divide-dashed divide-neutral-300">
              {projects.map((project, idx) => (
                <div key={project.title} className="py-4 space-y-2 group">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <span className="font-black text-sm text-[#1B1717] uppercase tracking-wide group-hover:text-[#810100] transition-colors">
                        0{idx + 1}. {project.title}
                      </span>
                      <p className="text-[11px] text-neutral-700 font-sans leading-relaxed mt-1">
                        {project.description}
                      </p>
                    </div>
                    <div className="shrink-0 text-right font-black text-[10px] bg-[#EDEBDD] text-[#810100] px-2 py-0.5 border border-[#1B1717]">
                      PRODUCCIÓN
                    </div>
                  </div>

                  {/* SKU / Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-1.5 py-0.5 text-[10px] bg-[#EDEBDD] text-[#1B1717] border border-[#1B1717]/30 font-mono font-bold"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Receipt Action Links: GitHub & Demo */}
                  <div className="pt-2 flex items-center justify-between gap-3">
                    <span className="text-[10px] text-neutral-500 tracking-wider">
                      REF: {project.github.split("/").pop()}
                    </span>
                    <div className="flex items-center gap-2">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-2.5 py-1 bg-[#1B1717] text-[#EDEBDD] hover:bg-[#332D2D] text-[10px] font-bold rounded shadow-[2px_2px_0px_#810100] transition-all active:scale-95"
                      >
                        <Github className="w-3 h-3" />
                        <span>REPO</span>
                      </a>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-2.5 py-1 bg-[#810100] text-[#EDEBDD] hover:bg-[#9E0201] text-[10px] font-black rounded shadow-[2px_2px_0px_#1B1717] transition-all active:scale-95"
                      >
                        <span>DEMO EN VIVO</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Receipt Summary / Subtotal */}
            <div className="pt-4 pb-4 border-t-2 border-[#1B1717] space-y-1.5">
              <div className="flex justify-between text-[11px] font-bold">
                <span>SUBTOTAL (4 MÓDULOS SOFTWARE)</span>
                <span>$400.00</span>
              </div>
              <div className="flex justify-between text-[11px] text-[#810100] font-black">
                <span>DESCUENTO QA COVERAGE (&gt;95%)</span>
                <span>-$100.00</span>
              </div>
              <div className="flex justify-between text-[11px]">
                <span>IMPUESTO ARQUITECTURA LIMPIA</span>
                <span>$0.00</span>
              </div>
              <div className="flex justify-between text-sm sm:text-base font-black border-t-2 border-[#1B1717] pt-2 text-[#1B1717]">
                <span>TOTAL ARQUITECTURADO:</span>
                <span className="text-[#810100]">$300.00 // 100% OK</span>
              </div>
            </div>

            {/* Receipt Footer: Barcode + QR Code Graphic */}
            <div className="pt-6 border-t-2 border-dashed border-[#1B1717]/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
              <div className="space-y-1">
                <Barcode code="*SEBAS-POS-TRANSACTION-2026*" />
                <p className="text-[9px] text-neutral-600 uppercase tracking-widest text-center font-bold">
                  ESCANEA PARA VALIDAR IDENTIDAD
                </p>
              </div>

              <div className="flex items-center gap-3">
                <QRCodeGraphic />
                <div className="text-left font-mono text-[9px] text-neutral-700 leading-tight">
                  <p className="font-black text-[#1B1717]">THE ARCHITECTURE SHOP</p>
                  <p>PASTO, COLOMBIA</p>
                  <p className="text-[#810100] font-black">VERIFICADO // QA</p>
                </div>
              </div>
            </div>

            {/* Thank you note */}
            <div className="mt-6 text-center text-[10px] tracking-widest text-[#630000] uppercase font-black border-t border-dotted border-neutral-400 pt-3">
              *** GRACIAS POR CONFIAR EN NUESTRA ARQUITECTURA ***
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
