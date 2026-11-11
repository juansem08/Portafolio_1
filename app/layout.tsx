import type { Metadata } from "next";
import { Inter, VT323, Special_Elite, Old_Standard_TT } from "next/font/google";
import "./globals.css";
import { AppProvider } from "@/context/AppContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// Texto de monitor / cámara de seguridad
const retro = VT323({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-retro",
  display: "swap",
});

// Máquina de escribir (expedientes, notas)
const typewriter = Special_Elite({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-typewriter",
  display: "swap",
});

// Periódico (recorte de "Sobre mí")
const news = Old_Standard_TT({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-news",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sebastián | Turno Nocturno — Portafolio",
  description:
    "Portafolio de Sebastián, estudiante de Ingeniería de Software. Recorre las cámaras del laboratorio para ver sus proyectos, experiencia y contacto.",
  keywords: ["Sebastián", "Ingeniería de Software", "Software Engineer", "Next.js", "TypeScript", "Tailwind CSS", "Portafolio"],
  authors: [{ name: "Sebastián" }],
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#060807",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`dark scroll-smooth ${inter.variable} ${retro.variable} ${typewriter.variable} ${news.variable}`}>
      <body className="min-h-screen bg-bg text-ink antialiased">
        <AppProvider>
          {/* Grano de video muy sutil en toda la página */}
          <div aria-hidden className="noise fixed inset-0 pointer-events-none z-[60] overflow-hidden [--noise-opacity:0.045]" />
          <div className="relative flex min-h-screen flex-col">{children}</div>
        </AppProvider>
      </body>
    </html>
  );
}
