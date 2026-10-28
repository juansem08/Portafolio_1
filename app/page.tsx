import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import ExtraSection from "@/components/ExtraSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-transparent text-[#1B1717] selection:bg-[#810100] selection:text-[#EDEBDD]">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Testimonials />
      <Experience />
      <Contact />
      <ExtraSection />
      <Footer />
    </main>
  );
}
