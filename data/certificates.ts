import type { Lang } from "./projects";

type Text = Record<Lang, string>;

export interface Certificate {
  title: Text;
  issuer: Text;
  date: Text;
  // Intensidad horaria; vacío si no aplica.
  hours?: number;
  // PDF publicado en public/certificates SIN datos personales (número de documento, lugar de
  // expedición y código de verificación eliminados). Se abre al dar clic en "Ver certificado".
  pdf: string;
  // Vista previa (primera página) en public/images/certificates.
  preview: string;
}

export const certificates: Certificate[] = [
  {
    title: { es: "Técnico en Sistemas", en: "Systems Technician" },
    issuer: { es: "SENA · Regional Putumayo", en: "SENA · Putumayo" },
    date: { es: "Noviembre 2023", en: "November 2023" },
    pdf: "/certificates/tecnico-en-sistemas-titulo.pdf",
    preview: "/images/certificates/tecnico-en-sistemas-titulo.png",
  },
  {
    title: { es: "Manejo de Productos Químicos", en: "Chemical Products Handling" },
    issuer: { es: "SENA · Regional Putumayo", en: "SENA · Putumayo" },
    date: { es: "Julio 2023", en: "July 2023" },
    hours: 40,
    pdf: "/certificates/manejo-productos-quimicos.pdf",
    preview: "/images/certificates/manejo-productos-quimicos.png",
  },
  {
    title: {
      es: "Mantenimiento del Sistema de Inyección de Combustible en Motocicletas",
      en: "Motorcycle Fuel Injection System Maintenance",
    },
    issuer: { es: "SENA · Regional Putumayo", en: "SENA · Putumayo" },
    date: { es: "Agosto 2022", en: "August 2022" },
    hours: 48,
    pdf: "/certificates/inyeccion-combustible-motocicletas.pdf",
    preview: "/images/certificates/inyeccion-combustible-motocicletas.png",
  },
  {
    title: {
      es: "Mantenimiento Preventivo de Motocicletas y Motocarros",
      en: "Preventive Maintenance of Motorcycles and Motor-Tricycles",
    },
    issuer: { es: "SENA · Regional Putumayo", en: "SENA · Putumayo" },
    date: { es: "Julio 2022", en: "July 2022" },
    hours: 48,
    pdf: "/certificates/mantenimiento-preventivo-motocicletas.pdf",
    preview: "/images/certificates/mantenimiento-preventivo-motocicletas.png",
  },
];
