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
import PostCredits from "@/components/PostCredits";

// Franja de piso a cuadros que separa algunas salas
const Band = () => <div aria-hidden className="relative z-10 checker-band" />;

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <Band />

      {/* Pasillo del laboratorio: de "Sobre mí" hacia abajo */}
      <div className="corridor">
        <div aria-hidden className="pipe left-1.5 hidden md:block" />
        <div aria-hidden className="pipe right-1.5 hidden md:block" />
        <About />
        <Projects />
        <Band />
        <Experience />
        <Testimonials />
        <Band />
        <ExtraSection />
        <Contact />
        <Band />
        <CompanyVisits />
      </div>

      <Footer />
      <PostCredits />
    </main>
  );
}
