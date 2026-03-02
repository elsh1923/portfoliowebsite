import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Skills from "@/components/Skills";
import WorkExperience from "@/components/WorkExperience";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-primary">
      <Navbar />
      <About />
      <Skills />
      <WorkExperience />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  );
}
