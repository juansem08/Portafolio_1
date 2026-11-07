import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { AppProvider } from "@/context/AppContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sebastián | Ingeniero de Software & Lead Software Architect",
  description:
    "Portafolio profesional de Sebastián. Construyendo software escalable con arquitectura limpia y capas desacopladas.",
  keywords: [
    "Sebastián",
    "Software Engineer",
    "Software Architect",
    "Quality Engineer",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Frontend",
    "Full-Stack",
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
    <html lang="es" className={`scroll-smooth ${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen bg-[#EDEBDD] dark:bg-[#121010] text-[#1B1717] dark:text-[#EDEBDD] bg-cutting-mat antialiased selection:bg-[#810100] selection:text-[#EDEBDD] relative">
        <AppProvider>
          {/* Full-page subtle tactile noise overlay */}
          <div className="fixed inset-0 pointer-events-none noise-overlay z-50 opacity-30" />

          {/* Studio Desk Accents & warm editorial glow */}
          <div className="fixed inset-0 pointer-events-none z-0">
            <div className="absolute -top-32 left-1/4 w-[700px] h-[500px] bg-[#810100]/[0.04] dark:bg-[#810100]/[0.08] rounded-full blur-[140px]" />
            <div className="absolute top-[45%] right-0 w-[600px] h-[600px] bg-[#630000]/[0.03] dark:bg-[#630000]/[0.06] rounded-full blur-[160px]" />
          </div>

          <div className="relative z-10 flex min-h-screen flex-col">
            {children}
          </div>
        </AppProvider>
      </body>
    </html>
  );
}
