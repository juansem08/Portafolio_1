import type { Lang } from "./projects";

type Text = Record<Lang, string>;

export interface Testimonial {
  name: string;
  initials: string;
  // Foto en public/images/testimonials. Si falta, se muestran las iniciales.
  photo?: string;
  role: Text;
  relation: Text;
  feedback: Text;
}

// La guía pide mínimo 3 testimonios: nombre, cargo o relación, avatar y texto.
export const testimonials: Testimonial[] = [
  {
    name: "Lilian Maritza Chamorro",
    initials: "LC",
    photo: "/images/testimonials/lilian.jpg",
    role: { es: "Instructora de Sistemas · SENA", en: "Systems Instructor · SENA" },
    relation: { es: "Trabajamos juntos", en: "We worked together" },
    feedback: {
      es: "He trabajado con Sebastián Mayorga y puedo dar fe de su gran compromiso como colaborador, su capacidad de aprendizaje rápido y su pasión por la tecnología. Cuenta con las bases lógicas y la actitud necesarias para destacar en el ámbito profesional.",
      en: "I have worked with Sebastián Mayorga and can vouch for his strong commitment as a collaborator, his ability to learn quickly and his passion for technology. He has the logical foundations and the attitude needed to stand out professionally.",
    },
  },
  {
    name: "Miguel Silva",
    initials: "MS",
    photo: "/images/testimonials/miguel.jpg",
    role: { es: "Gerente · Cootransvalle", en: "Manager · Cootransvalle" },
    relation: { es: "Sibundoy, Putumayo", en: "Sibundoy, Putumayo" },
    feedback: {
      es: "Sebastián es una persona responsable y comprometida. Destaco su disposición para resolver los problemas tecnológicos de la empresa y la seriedad con la que asume cada tarea.",
      en: "Sebastián is a responsible and committed person. I value his willingness to solve the company's technology problems and the seriousness with which he takes on every task.",
    },
  },
  {
    name: "Jorge Nicolás Rodríguez",
    initials: "JR",
    photo: "/images/testimonials/jorge.jpg",
    role: { es: "Colaborador · Calibración y Reparación", en: "Collaborator · Calibración y Reparación" },
    relation: { es: "Página web del taller", en: "Repair shop website" },
    feedback: {
      es: "Trabajamos juntos en la página web del taller de Calibración y Reparación. Sebastián organiza bien el trabajo, propone soluciones claras y es muy fácil colaborar con él.",
      en: "We worked together on the Calibración y Reparación repair shop website. Sebastián organizes work well, proposes clear solutions and is very easy to collaborate with.",
    },
  },
];
