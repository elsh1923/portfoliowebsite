import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import About from "@/components/About";

const Skills = dynamic(() => import("@/components/Skills"), { ssr: true });
const WorkExperience = dynamic(() => import("@/components/WorkExperience"), { ssr: true });
const Portfolio = dynamic(() => import("@/components/Portfolio"), { ssr: true });
const Contact = dynamic(() => import("@/components/Contact"), { ssr: true });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: true });

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
