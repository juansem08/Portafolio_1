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

// Franja de piso a cuadros que separa algunas salas
const Band = () => <div aria-hidden className="checker-band" />;

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <Band />
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
      <Footer />
    </main>
  );
}
