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
    relation: { es: "Pasantía · Sibundoy, Putumayo", en: "Internship · Sibundoy, Putumayo" },
    feedback: {
      es: "Durante su pasantía, Sebastián nos apoyó en la organización de los documentos de la empresa en nuestra plataforma web. Es una persona responsable y comprometida, con muchas ganas de aprender y seriedad en cada tarea.",
      en: "During his internship, Sebastián helped us organize the company's documents on our web platform. He is a responsible and committed person, eager to learn and serious about every task.",
    },
  },
  {
    name: "Jorge Nicolás Rodríguez",
    initials: "JR",
    photo: "/images/testimonials/jorge.jpg",
    role: { es: "Compañero de equipo · Hackatón", en: "Teammate · Hackathon" },
    relation: { es: "Trabajamos juntos en una hackatón", en: "We worked together at a hackathon" },
    feedback: {
      es: "Estuvimos trabajando juntos en una hackatón. Sebastián organiza bien el trabajo bajo presión, propone soluciones claras y es muy fácil colaborar con él.",
      en: "We worked together at a hackathon. Sebastián organizes work well under pressure, proposes clear solutions and is very easy to collaborate with.",
    },
  },
];
