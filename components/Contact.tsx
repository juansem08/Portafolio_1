"use client";

import { useState } from "react";
import { Mail, Github, Linkedin, Send, CheckCircle2, AlertTriangle, MessageSquare, Terminal, Copy, Check } from "lucide-react";
import { Tape, Paperclip, Pushpin, WhatsAppIcon } from "./ScrapbookAssets";
import { useApp } from "@/context/AppContext";
import { contactInfo, whatsappUrl } from "@/data/contact";

// ID del formulario de Formspree (formspree.io). Se configura como variable de entorno
// NEXT_PUBLIC_FORMSPREE_ID en Vercel. Si no existe, el formulario abre el correo del visitante.
const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID;

type FormStatus = "idle" | "sending" | "success" | "mailto" | "error";

export default function Contact() {
  const { t } = useApp();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<FormStatus>("idle");
  const [copied, setCopied] = useState(false);

  const emailAddress = contactInfo.email;
  const isSubmitting = status === "sending";

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const finish = (result: "success" | "mailto") => {
    setStatus(result);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setStatus("idle"), 6000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    // Sin Formspree configurado: abre el cliente de correo con el mensaje ya escrito.
    if (!FORMSPREE_ID) {
      const subject = encodeURIComponent(`Mensaje desde el portafolio - ${formData.name}`);
      const body = encodeURIComponent(
        `${formData.message}\n\n— ${formData.name} (${formData.email})`
      );
      window.location.href = `mailto:${emailAddress}?subject=${subject}&body=${body}`;
      finish("mailto");
      return;
    }

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error(`Formspree respondió ${res.status}`);
      finish("success");
    } catch {
      setStatus("error");
    }
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
            <Tape variant="warning">{t("contact.sectionTape")}</Tape>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-black text-[#1B1717] dark:text-[#EDEBDD] tracking-tight uppercase">
            {t("contact.title")}
          </h2>
          <p className="mt-2 text-neutral-600 dark:text-neutral-400 font-mono text-xs max-w-xl font-bold">
            {t("contact.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT: Postal Package Card & Direct Channels (Lg col 5) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-lg border-2 border-[#1B1717] dark:border-[#810100] bg-[#FAF9F5] dark:bg-[#1E1B18] p-6 sm:p-8 shadow-[8px_8px_0px_#1B1717] dark:shadow-[8px_8px_0px_#810100] space-y-6 -rotate-1 relative">
              
              {/* Paperclip top */}
              <div className="absolute -top-4 right-8 pointer-events-none">
                <Paperclip variant="cherry" />
              </div>

              <div className="flex items-center justify-between border-b-2 border-dashed border-[#1B1717]/30 dark:border-[#EDEBDD]/20 pb-3">
                <div className="flex items-center gap-2 text-xs font-mono text-[#810100] dark:text-[#E8927C] font-black uppercase tracking-wider">
                  <Terminal className="w-4 h-4" />
                  <span>{t("contact.transmissionTitle")}</span>
                </div>
                <span className="text-[10px] font-mono bg-[#1B1717] dark:bg-[#810100] text-[#EDEBDD] px-2 py-0.5 border border-[#1B1717] dark:border-[#EDEBDD]/20 font-bold">
                  {t("contact.stationBadge")}
                </span>
              </div>

              {/* Email direct channel */}
              <div className="p-4 bg-[#EDEBDD] dark:bg-[#121010] border-2 border-[#1B1717] dark:border-[#810100] rounded space-y-2 shadow-[3px_3px_0px_#1B1717] dark:shadow-[3px_3px_0px_#810100]">
                <span className="text-[11px] font-mono text-[#810100] dark:text-[#E8927C] flex items-center gap-2 font-black uppercase">
                  <Mail className="w-4 h-4" />
                  {t("contact.emailLabel")}
                </span>
                <div className="flex items-center justify-between gap-2">
                  <a
                    href={`mailto:${emailAddress}`}
                    className="text-xs sm:text-sm font-mono text-[#1B1717] dark:text-[#EDEBDD] hover:text-[#810100] dark:hover:text-[#E8927C] transition-colors break-all font-black"
                  >
                    {emailAddress}
                  </a>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="p-1.5 bg-[#1B1717] hover:bg-[#332D2D] dark:bg-[#810100] dark:hover:bg-[#9E0201] text-[#EDEBDD] transition-colors border border-[#1B1717] shrink-0 shadow-[2px_2px_0px_#810100]"
                    title="Copiar correo"
                    aria-label="Copiar correo"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Social Channels Stamped Labels */}
              <div className="space-y-3">
                <span className="text-[11px] font-mono text-[#1B1717] dark:text-[#EDEBDD] uppercase tracking-widest font-black">
                  {t("contact.socialLabel")}
                </span>

                <div className="space-y-3">
                  {/* GitHub */}
                  <a
                    href={contactInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3.5 bg-[#FAF9F5] dark:bg-[#121010] border-2 border-[#1B1717] dark:border-[#810100] hover:bg-[#EDEBDD] dark:hover:bg-[#252020] transition-all duration-200 group shadow-[4px_4px_0px_#1B1717] dark:shadow-[4px_4px_0px_#810100]"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 bg-[#1B1717] dark:bg-[#810100] border border-[#1B1717] dark:border-[#EDEBDD]/20 flex items-center justify-center text-[#EDEBDD] group-hover:bg-[#810100]">
                        <Github className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-sm font-black text-[#1B1717] dark:text-[#EDEBDD] group-hover:text-[#810100] dark:group-hover:text-[#E8927C] font-mono">
                          GitHub
                        </div>
                        <div className="text-xs font-mono text-neutral-600 dark:text-neutral-400">
                          {contactInfo.githubUser}
                        </div>
                      </div>
                    </div>
                    <span className="text-xs font-mono font-black text-[#810100] dark:text-[#E8927C]">
                      {t("contact.githubAction")}
                    </span>
                  </a>

                  {/* LinkedIn */}
                  {contactInfo.linkedin && (
                    <a
                      href={contactInfo.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3.5 bg-[#FAF9F5] dark:bg-[#121010] border-2 border-[#1B1717] dark:border-[#810100] hover:bg-[#EDEBDD] dark:hover:bg-[#252020] transition-all duration-200 group shadow-[4px_4px_0px_#1B1717] dark:shadow-[4px_4px_0px_#810100]"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 bg-[#0A66C2] text-white border border-[#1B1717] flex items-center justify-center shadow-[2px_2px_0px_#1B1717]">
                          <Linkedin className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="text-sm font-black text-[#1B1717] dark:text-[#EDEBDD] group-hover:text-[#810100] dark:group-hover:text-[#E8927C] font-mono">
                            LinkedIn
                          </div>
                          {contactInfo.linkedinUser && (
                            <div className="text-xs font-mono text-neutral-600 dark:text-neutral-400">
                              {contactInfo.linkedinUser}
                            </div>
                          )}
                        </div>
                      </div>
                      <span className="text-xs font-mono font-black text-[#810100] dark:text-[#E8927C]">
                        {t("contact.linkedinAction")}
                      </span>
                    </a>
                  )}

                  {/* WhatsApp */}
                  {whatsappUrl && (
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3.5 bg-[#FAF9F5] dark:bg-[#121010] border-2 border-[#1B1717] dark:border-[#810100] hover:bg-[#EDEBDD] dark:hover:bg-[#252020] transition-all duration-200 group shadow-[4px_4px_0px_#1B1717] dark:shadow-[4px_4px_0px_#810100]"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 bg-[#25D366] text-white border border-[#1B1717] flex items-center justify-center group-hover:bg-[#1EBE5D] transition-colors shadow-[2px_2px_0px_#1B1717]">
                        <WhatsAppIcon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-sm font-black text-[#1B1717] dark:text-[#EDEBDD] group-hover:text-[#810100] dark:group-hover:text-[#E8927C] font-mono">
                          WhatsApp
                        </div>
                        <div className="text-xs font-mono text-neutral-600 dark:text-neutral-400">
                          {t("contact.whatsappSub")}
                        </div>
                      </div>
                    </div>
                    <span className="text-xs font-mono font-black text-[#810100] dark:text-[#E8927C]">
                      {t("contact.whatsappAction")}
                    </span>
                  </a>
                  )}
                </div>
              </div>

              {/* Rubber Postal Stamp mark in Cherry Red */}
              <div className="pt-2 text-center">
                <div className="inline-block px-3 py-1 border-2 border-dashed border-[#810100] dark:border-[#E8927C] text-[#810100] dark:text-[#E8927C] font-mono text-[10px] uppercase font-black rotate-[-3deg] bg-[#EDEBDD] dark:bg-[#121010]">
                  {t("contact.airMailStamp")}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Telegram Postcard Form (Lg col 7) */}
          <div className="lg:col-span-7">
            <div className="rounded-lg border-2 border-[#1B1717] dark:border-[#810100] bg-[#FAF9F5] dark:bg-[#1E1B18] p-6 sm:p-9 shadow-[8px_8px_0px_#1B1717] dark:shadow-[8px_8px_0px_#810100] rotate-1 relative">
              
              {/* Pushpin top right */}
              <div className="absolute -top-3.5 right-8 pointer-events-none">
                <Pushpin color="#810100" />
              </div>

              <div className="flex items-center justify-between border-b-2 border-dashed border-[#1B1717]/30 dark:border-[#EDEBDD]/20 pb-4 mb-6">
                <div className="flex items-center gap-2 text-sm font-mono text-[#810100] dark:text-[#E8927C] font-black uppercase">
                  <MessageSquare className="w-4 h-4" />
                  <span>{t("contact.dispatchTitle")}</span>
                </div>
                <span className="font-mono text-xs text-[#630000] dark:text-[#E8927C] font-black">
                  {t("contact.priorityBadge")}
                </span>
              </div>

              {(status === "success" || status === "mailto") && (
                <div
                  role="status"
                  className="mb-6 p-4 bg-[#EDEBDD] dark:bg-[#121010] border-2 border-[#810100] text-[#810100] dark:text-[#EDEBDD] text-xs font-mono flex items-center gap-3 shadow-[4px_4px_0px_#1B1717] dark:shadow-[4px_4px_0px_#810100] font-bold"
                >
                  <CheckCircle2 className="w-5 h-5 shrink-0 text-[#810100] dark:text-emerald-400" />
                  <span>{status === "success" ? t("contact.successMsg") : t("contact.mailtoMsg")}</span>
                </div>
              )}

              {status === "error" && (
                <div
                  role="alert"
                  className="mb-6 p-4 bg-[#EDEBDD] dark:bg-[#121010] border-2 border-dashed border-[#810100] text-[#810100] dark:text-[#EDEBDD] text-xs font-mono flex items-center gap-3 shadow-[4px_4px_0px_#1B1717] dark:shadow-[4px_4px_0px_#810100] font-bold"
                >
                  <AlertTriangle className="w-5 h-5 shrink-0 text-[#810100] dark:text-amber-400" />
                  <span>{t("contact.errorMsg")}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Nombre */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-mono text-[#1B1717] dark:text-[#EDEBDD] mb-2 uppercase font-black tracking-wider"
                  >
                    {t("contact.senderNameLabel")}
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t("contact.senderNamePlaceholder")}
                    className="w-full px-4 py-3 bg-[#FFFFFF] dark:bg-[#121010] border-2 border-[#1B1717] dark:border-[#810100] text-[#1B1717] dark:text-[#EDEBDD] placeholder-neutral-500 font-mono text-sm focus:outline-none focus:border-[#810100] shadow-[2px_2px_0px_#1B1717] dark:shadow-[2px_2px_0px_#810100]"
                  />
                </div>

                {/* Correo */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-mono text-[#1B1717] dark:text-[#EDEBDD] mb-2 uppercase font-black tracking-wider"
                  >
                    {t("contact.emailReturnLabel")}
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t("contact.emailReturnPlaceholder")}
                    className="w-full px-4 py-3 bg-[#FFFFFF] dark:bg-[#121010] border-2 border-[#1B1717] dark:border-[#810100] text-[#1B1717] dark:text-[#EDEBDD] placeholder-neutral-500 font-mono text-sm focus:outline-none focus:border-[#810100] shadow-[2px_2px_0px_#1B1717] dark:shadow-[2px_2px_0px_#810100]"
                  />
                </div>

                {/* Mensaje */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-mono text-[#1B1717] dark:text-[#EDEBDD] mb-2 uppercase font-black tracking-wider"
                  >
                    {t("contact.messageLabel")}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={t("contact.messagePlaceholder")}
                    className="w-full px-4 py-3 bg-[#FFFFFF] dark:bg-[#121010] border-2 border-[#1B1717] dark:border-[#810100] text-[#1B1717] dark:text-[#EDEBDD] placeholder-neutral-500 font-mono text-sm focus:outline-none focus:border-[#810100] shadow-[2px_2px_0px_#1B1717] dark:shadow-[2px_2px_0px_#810100] resize-none"
                  />
                </div>

                {/* Submit button: Cherry Red Die-cut Urgent Dispatch */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-3 px-6 py-4 bg-[#810100] text-[#EDEBDD] font-display font-black text-sm uppercase tracking-wider border-2 border-[#1B1717] dark:border-[#EDEBDD]/30 shadow-[6px_6px_0px_#1B1717] dark:shadow-[6px_6px_0px_#810100] hover:bg-[#9E0201] hover:scale-[1.01] active:scale-[0.99] transition-all disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-[#EDEBDD] border-t-transparent rounded-full animate-spin" />
                      <span>{t("contact.sendingMsg")}</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>{t("contact.sendMsg")}</span>
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
