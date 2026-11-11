import type { Metadata } from "next";
import { Inter, Press_Start_2P, VT323 } from "next/font/google";
import "./globals.css";
import { AppProvider } from "@/context/AppContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// Títulos, botones y etiquetas
const pixel = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pixel",
  display: "swap",
});

// Texto corto tipo terminal (etiquetas, fechas)
const retro = VT323({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-retro",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sebastián | Portafolio de Ingeniería de Software",
  description:
    "Portafolio de Sebastián, estudiante de Ingeniería de Software. Proyectos, experiencia y contacto en un portafolio estilo arcade.",
  keywords: [
    "Sebastián",
    "Ingeniería de Software",
    "Software Engineer",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Portafolio",
  ],
  authors: [{ name: "Sebastián" }],
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`scroll-smooth ${inter.variable} ${pixel.variable} ${retro.variable}`}>
      <body className="min-h-screen bg-arcade text-ink antialiased">
        <AppProvider>
          <div className="relative flex min-h-screen flex-col">{children}</div>
        </AppProvider>
      </body>
    </html>
  );
}
