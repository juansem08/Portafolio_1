"use client";

import { useState } from "react";
import { Mail, Github, Send, CheckCircle2, MessageSquare, Terminal, Copy, Check } from "lucide-react";
import { Tape, Paperclip, Pushpin, WhatsAppIcon } from "./ScrapbookAssets";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [copied, setCopied] = useState(false);

  const emailAddress = "jsmayorgaj2008@gmail.com";

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setIsSuccess(false), 5000);
    }, 900);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-20 relative select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="mb-2">
            <Tape variant="warning">// 05. CANAL DE DESPACHO &amp; TELEGRAMA</Tape>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-black text-[#1B1717] tracking-tight uppercase">
            CONTACTO DIRECTO
          </h2>
          <p className="mt-2 text-neutral-600 font-mono text-xs max-w-xl font-bold">
            ¿Tienes un proyecto, propuesta arquitectónica o desafío técnico? Envía un telegrama o conéctate en mis canales oficiales.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT: Postal Package Card & Direct Channels (Lg col 5) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-lg border-2 border-[#1B1717] bg-[#FAF9F5] p-6 sm:p-8 shadow-[8px_8px_0px_#1B1717] space-y-6 -rotate-1 relative">
              
              {/* Paperclip top */}
              <div className="absolute -top-4 right-8 pointer-events-none">
                <Paperclip variant="cherry" />
              </div>

              <div className="flex items-center justify-between border-b-2 border-dashed border-[#1B1717]/30 pb-3">
                <div className="flex items-center gap-2 text-xs font-mono text-[#810100] font-black uppercase tracking-wider">
                  <Terminal className="w-4 h-4" />
                  <span>TRANSMISIÓN // PASTELERO</span>
                </div>
                <span className="text-[10px] font-mono bg-[#1B1717] text-[#EDEBDD] px-2 py-0.5 border border-[#1B1717] font-bold">
                  ESTAFETA: COL
                </span>
              </div>

              {/* Email direct channel */}
              <div className="p-4 bg-[#EDEBDD] border-2 border-[#1B1717] rounded space-y-2 shadow-[3px_3px_0px_#1B1717]">
                <span className="text-[11px] font-mono text-[#810100] flex items-center gap-2 font-black uppercase">
                  <Mail className="w-4 h-4" />
                  CORREO ELECTRÓNICO OFICIAL
                </span>
                <div className="flex items-center justify-between gap-2">
                  <a
                    href={`mailto:${emailAddress}`}
                    className="text-xs sm:text-sm font-mono text-[#1B1717] hover:text-[#810100] transition-colors break-all font-black"
                  >
                    {emailAddress}
                  </a>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="p-1.5 bg-[#1B1717] hover:bg-[#332D2D] text-[#EDEBDD] transition-colors border border-[#1B1717] shrink-0 shadow-[2px_2px_0px_#810100]"
                    title="Copiar correo"
                    aria-label="Copiar correo"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Social Channels Stamped Labels */}
              <div className="space-y-3">
                <span className="text-[11px] font-mono text-[#1B1717] uppercase tracking-widest font-black">
                  REDES &amp; REPOSITORIOS OFICIALES
                </span>

                <div className="space-y-3">
                  {/* GitHub */}
                  <a
                    href="https://github.com/juansem08"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3.5 bg-[#FAF9F5] border-2 border-[#1B1717] hover:bg-[#EDEBDD] transition-all duration-200 group shadow-[4px_4px_0px_#1B1717]"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 bg-[#1B1717] border border-[#1B1717] flex items-center justify-center text-[#EDEBDD] group-hover:bg-[#810100]">
                        <Github className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-sm font-black text-[#1B1717] group-hover:text-[#810100] font-mono">
                          GitHub
                        </div>
                        <div className="text-xs font-mono text-neutral-600">
                          @juansem08
                        </div>
                      </div>
                    </div>
                    <span className="text-xs font-mono font-black text-[#810100]">
                      IR &rarr;
                    </span>
                  </a>

                  {/* WhatsApp */}
                  <a
                    href="https://wa.me/?text=Hola%20Sebasti%C3%A1n,%20vi%20tu%20portafolio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3.5 bg-[#FAF9F5] border-2 border-[#1B1717] hover:bg-[#EDEBDD] transition-all duration-200 group shadow-[4px_4px_0px_#1B1717]"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 bg-[#25D366] text-white border border-[#1B1717] flex items-center justify-center group-hover:bg-[#1EBE5D] transition-colors shadow-[2px_2px_0px_#1B1717]">
                        <WhatsAppIcon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-sm font-black text-[#1B1717] group-hover:text-[#810100] font-mono">
                          WhatsApp
                        </div>
                        <div className="text-xs font-mono text-neutral-600">
                          Mensaje directo
                        </div>
                      </div>
                    </div>
                    <span className="text-xs font-mono font-black text-[#810100]">
                      CHATEAR &rarr;
                    </span>
                  </a>
                </div>
              </div>

              {/* Rubber Postal Stamp mark in Cherry Red */}
              <div className="pt-2 text-center">
                <div className="inline-block px-3 py-1 border-2 border-dashed border-[#810100] text-[#810100] font-mono text-[10px] uppercase font-black rotate-[-3deg] bg-[#EDEBDD]">
                  AIR-MAIL // PASTO NAR POSTAL SERVICE
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Telegram Postcard Form (Lg col 7) */}
          <div className="lg:col-span-7">
            <div className="rounded-lg border-2 border-[#1B1717] bg-[#FAF9F5] p-6 sm:p-9 shadow-[8px_8px_0px_#1B1717] rotate-1 relative">
              
              {/* Pushpin top right */}
              <div className="absolute -top-3.5 right-8 pointer-events-none">
                <Pushpin color="#810100" />
              </div>

              <div className="flex items-center justify-between border-b-2 border-dashed border-[#1B1717]/30 pb-4 mb-6">
                <div className="flex items-center gap-2 text-sm font-mono text-[#810100] font-black uppercase">
                  <MessageSquare className="w-4 h-4" />
                  <span>FORMATO DE DESPACHO // TELEGRAMA</span>
                </div>
                <span className="font-mono text-xs text-[#630000] font-black">
                  PRIORIDAD ALTA
                </span>
              </div>

              {isSuccess && (
                <div className="mb-6 p-4 bg-[#EDEBDD] border-2 border-[#810100] text-[#810100] text-xs font-mono flex items-center gap-3 shadow-[4px_4px_0px_#1B1717] font-bold">
                  <CheckCircle2 className="w-5 h-5 shrink-0 text-[#810100]" />
                  <span>¡Telegrama transmitido con éxito! Responderé a la brevedad posible.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Nombre */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-mono text-[#1B1717] mb-2 uppercase font-black tracking-wider"
                  >
                    Nombre del Remitente:
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Ej. Ada Lovelace"
                    className="w-full px-4 py-3 bg-[#FFFFFF] border-2 border-[#1B1717] text-[#1B1717] placeholder-neutral-500 font-mono text-sm focus:outline-none focus:border-[#810100] shadow-[2px_2px_0px_#1B1717]"
                  />
                </div>

                {/* Correo */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-mono text-[#1B1717] mb-2 uppercase font-black tracking-wider"
                  >
                    Dirección de Retorno (Email):
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="tucorreo@dominio.com"
                    className="w-full px-4 py-3 bg-[#FFFFFF] border-2 border-[#1B1717] text-[#1B1717] placeholder-neutral-500 font-mono text-sm focus:outline-none focus:border-[#810100] shadow-[2px_2px_0px_#1B1717]"
                  />
                </div>

                {/* Mensaje */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-mono text-[#1B1717] mb-2 uppercase font-black tracking-wider"
                  >
                    Texto del Telegrama / Mensaje:
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe tu propuesta técnica, consulta de arquitectura o mensaje..."
                    className="w-full px-4 py-3 bg-[#FFFFFF] border-2 border-[#1B1717] text-[#1B1717] placeholder-neutral-500 font-mono text-sm focus:outline-none focus:border-[#810100] shadow-[2px_2px_0px_#1B1717] resize-none"
                  />
                </div>

                {/* Submit button: Cherry Red Die-cut Urgent Dispatch */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-3 px-6 py-4 bg-[#810100] text-[#EDEBDD] font-display font-black text-sm uppercase tracking-wider border-2 border-[#1B1717] shadow-[6px_6px_0px_#1B1717] hover:bg-[#9E0201] hover:scale-[1.01] active:scale-[0.99] transition-all disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-[#EDEBDD] border-t-transparent rounded-full animate-spin" />
                      <span>TRANSMITIENDO TELEGRAMA...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>ENVIAR TELEGRAMA // DESPACHAR AHORA</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
