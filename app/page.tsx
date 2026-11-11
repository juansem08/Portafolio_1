import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import Experience from "@/components/Experience";
import CompanyVisits from "@/components/CompanyVisits";
import ExtraSection from "@/components/ExtraSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-transparent text-[#1B1717] selection:bg-[#810100] selection:text-[#EDEBDD]">
      <Navbar />
      <Hero />
      <About />
      {/* Orden de la guía: Proyectos → Testimonios → Experiencia → Contacto → Sección adicional → Pie */}
      <Projects />
      <Testimonials />
      <Experience />
      <Contact />
      <ExtraSection />
      <CompanyVisits />
      <Footer />
    </main>
  );
}
