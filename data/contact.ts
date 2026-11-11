// Datos de contacto usados en Contacto y en el Pie de página.
// Si un campo queda vacío (""), ese enlace no se muestra en la página.
export const contactInfo = {
  email: "jsmayorgaj2008@gmail.com",
  github: "https://github.com/juansem08",
  githubUser: "@juansem08",
  // URL de tu perfil, ej. "https://www.linkedin.com/in/tu-usuario"
  linkedin: "https://www.linkedin.com/in/juan-sebastian-mayorga-jim%C3%A9nez-876772408",
  linkedinUser: "Juan Sebastián Mayorga Jiménez",
  // Número con indicativo de país, solo dígitos, ej. "573001234567"
  whatsapp: "",
};

export const whatsappUrl = contactInfo.whatsapp
  ? `https://wa.me/${contactInfo.whatsapp}?text=${encodeURIComponent("Hola Sebastián, vi tu portafolio")}`
  : "";
