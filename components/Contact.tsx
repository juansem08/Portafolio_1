"use client";

import { useState } from "react";
import { Mail, Github, Linkedin, Send, CheckCircle2, AlertTriangle, Copy, Check } from "lucide-react";
import { Section, SectionHeader, Panel, PixelButton, WhatsAppIcon } from "./arcade/ui";
import { useApp } from "@/context/AppContext";
import { contactInfo, whatsappUrl } from "@/data/contact";

// ID del formulario de Formspree (formspree.io). Se configura como variable de entorno
// NEXT_PUBLIC_FORMSPREE_ID en Vercel. Si no existe, el formulario abre el correo del visitante.
const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID;

type FormStatus = "idle" | "sending" | "success" | "mailto" | "error";

const inputClass =
  "w-full px-4 py-3 bg-panel2 text-ink placeholder:text-muted border-4 border-edge focus:outline-none focus:border-pink";

export default function Contact() {
  const { t } = useApp();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<FormStatus>("idle");
  const [copied, setCopied] = useState(false);

  const emailAddress = contactInfo.email;
  const isSubmitting = status === "sending";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
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
      const body = encodeURIComponent(`${formData.message}\n\n— ${formData.name} (${formData.email})`);
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

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(emailAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* el navegador no permitió copiar */
    }
  };

  const channels = [
    { show: true, href: contactInfo.github, icon: <Github className="w-5 h-5" />, bg: "bg-[#241b4b] text-white", name: "GitHub", sub: contactInfo.githubUser, action: t("contact.githubAction") },
    { show: !!contactInfo.linkedin, href: contactInfo.linkedin, icon: <Linkedin className="w-5 h-5" />, bg: "bg-[#0A66C2] text-white", name: "LinkedIn", sub: contactInfo.linkedinUser, action: t("contact.linkedinAction") },
    { show: !!whatsappUrl, href: whatsappUrl, icon: <WhatsAppIcon className="w-5 h-5" />, bg: "bg-[#25D366] text-white", name: "WhatsApp", sub: t("contact.whatsappSub"), action: t("contact.whatsappAction") },
  ].filter((c) => c.show);

  return (
    <Section id="contact">
      <SectionHeader level={t("contact.level")} title={t("contact.title")} subtitle={t("contact.subtitle")} accent="violet" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Canales directos */}
        <Panel title={t("contact.channelsTitle")} accent="mint" className="lg:col-span-5" bodyClassName="p-5 space-y-4">
          <div className="p-4 bg-panel2 border-4 border-edge">
            <p className="flex items-center gap-2 font-pixel text-[9px] text-muted">
              <Mail className="w-4 h-4 text-pink" />
              {t("contact.emailLabel")}
            </p>
            <div className="flex items-center justify-between gap-2 mt-2">
              <a href={`mailto:${emailAddress}`} className="font-retro text-xl text-ink break-all hover:text-pink">
                {emailAddress}
              </a>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="pixel-btn shrink-0 p-2 bg-violet text-white"
                title={t("contact.copyEmail")}
                aria-label={t("contact.copyEmail")}
              >
                {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {channels.map((c) => (
            <a
              key={c.name}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between gap-3 p-3 bg-panel border-4 border-edge hover:bg-yellow hover:text-[#241b4b] group"
            >
              <span className="flex items-center gap-3">
                <span className={`w-10 h-10 flex items-center justify-center border-2 border-edge ${c.bg}`}>{c.icon}</span>
                <span>
                  <span className="block font-pixel text-[10px] text-ink group-hover:text-[#241b4b]">{c.name}</span>
                  {c.sub && <span className="block font-retro text-lg text-muted group-hover:text-[#241b4b]">{c.sub}</span>}
                </span>
              </span>
              <span className="font-pixel text-[9px] text-pink group-hover:text-[#241b4b]">{c.action}</span>
            </a>
          ))}
        </Panel>

        {/* Formulario */}
        <Panel title={t("contact.formTitle")} accent="pink" className="lg:col-span-7" bodyClassName="p-5 sm:p-6">
          {(status === "success" || status === "mailto") && (
            <div role="status" className="mb-5 flex items-center gap-3 p-4 bg-mint text-[#241b4b] border-4 border-edge animate-pop">
              <CheckCircle2 className="w-5 h-5 shrink-0" />
              <span>{status === "success" ? t("contact.successMsg") : t("contact.mailtoMsg")}</span>
            </div>
          )}
          {status === "error" && (
            <div role="alert" className="mb-5 flex items-center gap-3 p-4 bg-yellow text-[#241b4b] border-4 border-edge animate-pop">
              <AlertTriangle className="w-5 h-5 shrink-0" />
              <span>{t("contact.errorMsg")}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="block font-pixel text-[9px] text-ink mb-2">
                {t("contact.nameLabel")}
              </label>
              <input id="name" name="name" type="text" required autoComplete="name" value={formData.name} onChange={handleChange} placeholder={t("contact.namePlaceholder")} className={inputClass} />
            </div>
            <div>
              <label htmlFor="email" className="block font-pixel text-[9px] text-ink mb-2">
                {t("contact.emailFieldLabel")}
              </label>
              <input id="email" name="email" type="email" required autoComplete="email" value={formData.email} onChange={handleChange} placeholder={t("contact.emailPlaceholder")} className={inputClass} />
            </div>
            <div>
              <label htmlFor="message" className="block font-pixel text-[9px] text-ink mb-2">
                {t("contact.messageLabel")}
              </label>
              <textarea id="message" name="message" required rows={5} value={formData.message} onChange={handleChange} placeholder={t("contact.messagePlaceholder")} className={`${inputClass} resize-none`} />
            </div>
            <PixelButton type="submit" disabled={isSubmitting} accent="pink" className="w-full py-4 text-[11px]">
              <Send className="w-4 h-4" />
              {isSubmitting ? t("contact.sending") : t("contact.send")}
            </PixelButton>
          </form>
        </Panel>
      </div>
    </Section>
  );
}
