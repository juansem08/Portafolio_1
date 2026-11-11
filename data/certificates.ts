import type { Lang } from "./projects";

type Text = Record<Lang, string>;

export interface Certificate {
  title: Text;
  issuer: Text;
  date: Text;
  // Intensidad horaria; vacío si no aplica.
  hours?: number;
  // Página pública donde se puede verificar (sin códigos que incluyan el documento de identidad).
  verifyUrl?: string;
}

// "Los demás certificados": cursos complementarios y participaciones fuera de la formación principal.
export const certificates: Certificate[] = [
  {
    title: { es: "Manejo de Productos Químicos", en: "Chemical Products Handling" },
    issuer: { es: "SENA · Regional Putumayo", en: "SENA · Putumayo" },
    date: { es: "Julio 2023", en: "July 2023" },
    hours: 40,
    verifyUrl: "https://certificados.sena.edu.co",
  },
  {
    title: {
      es: "Mantenimiento del Sistema de Inyección de Combustible en Motocicletas",
      en: "Motorcycle Fuel Injection System Maintenance",
    },
    issuer: { es: "SENA · Regional Putumayo", en: "SENA · Putumayo" },
    date: { es: "Agosto 2022", en: "August 2022" },
    hours: 48,
    verifyUrl: "https://certificados.sena.edu.co",
  },
  {
    title: {
      es: "Mantenimiento Preventivo de Motocicletas y Motocarros",
      en: "Preventive Maintenance of Motorcycles and Motor-Tricycles",
    },
    issuer: { es: "SENA · Regional Putumayo", en: "SENA · Putumayo" },
    date: { es: "Julio 2022", en: "July 2022" },
    hours: 48,
    verifyUrl: "https://certificados.sena.edu.co",
  },
  {
    title: { es: "Seminario de Software (4 ediciones)", en: "Software Seminar (4 editions)" },
    issuer: { es: "Universidad Cooperativa de Colombia", en: "Universidad Cooperativa de Colombia" },
    date: { es: "Asistencia", en: "Attendance" },
  },
];
