"use client";

import { useEffect, useState } from "react";
import { Mail, Github, Linkedin, Send, CheckCircle2, AlertTriangle, Copy, Check } from "lucide-react";
import { Section, SectionHeader, Feed, CamButton, WhatsAppIcon } from "./night/ui";
import Lurker from "./night/Lurker";
import { SectionParty, PARTY } from "./night/Party";
import { useApp } from "@/context/AppContext";
import { contactInfo, whatsappUrl } from "@/data/contact";

// ID del formulario de Formspree (formspree.io). Se configura como variable de entorno
// NEXT_PUBLIC_FORMSPREE_ID en Vercel. Si no existe, el formulario abre el correo del visitante.
const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID;

type FormStatus = "idle" | "sending" | "success" | "mailto" | "error";

// Campos escritos sobre la hoja rayada del libro de visitantes
const inputClass =
  "w-full bg-transparent px-1 py-1.5 font-typewriter text-[#1c1a16] placeholder:text-[#8a8270] border-0 border-b-2 border-[#1c1a16]/50 focus:outline-none focus:border-[#b3261e]";
const labelClass = "block font-typewriter text-sm uppercase tracking-wider text-[#5a5446]";

export default function Contact() {
  const { t } = useApp();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<FormStatus>("idle");
  const [copied, setCopied] = useState(false);
  // Hora de llegada (se calcula en el navegador para evitar diferencias con el servidor)
  const [arrival, setArrival] = useState("");
  useEffect(() => {
    setArrival(new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }));
  }, []);

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
    { show: true, href: contactInfo.github, icon: <Github className="w-5 h-5" />, name: "GitHub", sub: contactInfo.githubUser, action: t("contact.githubAction") },
    { show: !!contactInfo.linkedin, href: contactInfo.linkedin, icon: <Linkedin className="w-5 h-5" />, name: "LinkedIn", sub: contactInfo.linkedinUser, action: t("contact.linkedinAction") },
    { show: !!whatsappUrl, href: whatsappUrl, icon: <WhatsAppIcon className="w-5 h-5" />, name: "WhatsApp", sub: t("contact.whatsappSub"), action: t("contact.whatsappAction") },
  ].filter((c) => c.show);

  return (
    <Section
      id="contact"
      accent={PARTY.orange}
      decor={<SectionParty top="garland" balloons="left" colors={[PARTY.orange, PARTY.red, PARTY.yellow]} />}
      lurker={<Lurker creature="segfault" variant="eyes-right" time="04:18 AM" top="10%" />}>
      <SectionHeader cam={t("contact.level")} room={t("rooms.contact")} title={t("contact.title")} subtitle={t("contact.subtitle")} />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        <Feed label={t("contact.channelsTitle")} className="lg:col-span-5" bodyClassName="p-5 space-y-3">
          <div className="p-4 bg-panel2 border border-edge">
            <p className="flex items-center gap-2 font-retro text-lg text-muted uppercase">
              <Mail className="w-4 h-4 text-rec" />
              {t("contact.emailLabel")}
            </p>
            <div className="flex items-center justify-between gap-2 mt-1">
              <a href={`mailto:${emailAddress}`} className="font-retro text-2xl text-ink break-all hover:text-rec">
                {emailAddress}
              </a>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="cam-btn shrink-0 p-2 text-ink hover:bg-panel hover:border-ink"
                title={t("contact.copyEmail")}
                aria-label={t("contact.copyEmail")}
              >
                {copied ? <Check className="w-4 h-4 text-phos" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {channels.map((c) => (
            <a
              key={c.name}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between gap-3 p-3 border border-edge hover:border-ink hover:bg-panel2"
            >
              <span className="flex items-center gap-3 text-ink">
                {c.icon}
                <span>
                  <span className="block font-retro text-xl uppercase leading-none">{c.name}</span>
                  {c.sub && <span className="block text-sm text-muted">{c.sub}</span>}
                </span>
              </span>
              <span className="font-retro text-lg text-rec uppercase">{c.action}</span>
            </a>
          ))}
        </Feed>

        {/* Libro de registro de visitantes en un portapapeles */}
        <div className="lg:col-span-7 relative pt-6">
          <div className="relative rounded-md bg-[#5a3e26] p-3 sm:p-4 shadow-[0_18px_40px_rgba(0,0,0,.6)] rotate-[0.6deg]">
            <div aria-hidden className="absolute -top-5 left-1/2 -translate-x-1/2 w-40 h-10 rounded-t-lg bg-gradient-to-b from-[#d4d8db] to-[#7d8285] border border-[#55595c] shadow-md z-10" />
            <div className="lined-paper relative px-5 sm:pl-16 sm:pr-8 pt-10 pb-8">
              <h3 className="font-news font-bold text-2xl sm:text-3xl uppercase tracking-wider text-center">{t("contact.logTitle")}</h3>
              <p className="font-typewriter text-xs uppercase text-center text-[#5a5446]">{t("contact.logSub")}</p>
              <p className="mt-3 mb-5 font-typewriter text-xs text-right text-[#5a5446]">
                {t("contact.logArrival")}: {arrival || "--:--"}
              </p>

          {(status === "success" || status === "mailto") && (
            <div role="status" className="mb-5 flex items-center gap-3 p-3 border-2 border-[#1f7a3a] text-[#1c1a16] font-typewriter text-sm animate-fade">
              <CheckCircle2 className="w-5 h-5 shrink-0 text-[#1f7a3a]" />
              <span>{status === "success" ? t("contact.successMsg") : t("contact.mailtoMsg")}</span>
            </div>
          )}
          {status === "error" && (
            <div role="alert" className="mb-5 flex items-center gap-3 p-3 border-2 border-[#b3261e] text-[#1c1a16] font-typewriter text-sm animate-fade">
              <AlertTriangle className="w-5 h-5 shrink-0 text-[#b3261e]" />
              <span>{t("contact.errorMsg")}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className={labelClass}>
                {t("contact.nameLabel")}
              </label>
              <input id="name" name="name" type="text" required autoComplete="name" value={formData.name} onChange={handleChange} placeholder={t("contact.namePlaceholder")} className={inputClass} />
            </div>
            <div>
              <label htmlFor="email" className={labelClass}>
                {t("contact.emailFieldLabel")}
              </label>
              <input id="email" name="email" type="email" required autoComplete="email" value={formData.email} onChange={handleChange} placeholder={t("contact.emailPlaceholder")} className={inputClass} />
            </div>
            <div>
              <label htmlFor="message" className={labelClass}>
                {t("contact.messageLabel")}
              </label>
              <textarea id="message" name="message" required rows={5} value={formData.message} onChange={handleChange} placeholder={t("contact.messagePlaceholder")} className={`${inputClass} resize-none`} />
            </div>
            <CamButton type="submit" disabled={isSubmitting} variant="danger" className="w-full py-3 text-2xl">
              <Send className="w-5 h-5" />
              {isSubmitting ? t("contact.sending") : t("contact.signHere")}
            </CamButton>
          </form>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
