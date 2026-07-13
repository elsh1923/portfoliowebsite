"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { User, Code, Layout, Download, FileText } from "lucide-react";
import { useRef } from "react";
import Image from "next/image";

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  const stats = [
    { label: "Tech Stack", value: "Next.js", icon: Code },
    { label: "Location", value: "Addis Ababa", icon: Layout },
  ];

  return (
    <section id="about" ref={containerRef} className="py-32 relative overflow-hidden bg-background text-foreground">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Image Side with Parallax */}
          <motion.div
            style={{ y: y1 }}
            className="lg:w-1/2 w-full max-w-md mx-auto relative perspective-[1000px]"
          >
            <motion.div
              initial={{ opacity: 0, rotateY: 15, scale: 0.9 }}
              whileInView={{ opacity: 1, rotateY: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative group preserve-3d"
            >
              <div className="relative bg-card border border-white/10 p-4 rounded-[2rem] overflow-hidden">
                <div className="aspect-[4/5] relative overflow-hidden rounded-2xl bg-background">
                  <Image 
                    src={`/profile.jpg?v=${Date.now()}`}
                    alt="Elshaday Dagne Demessie - Full-Stack Developer" 
                    width={500}
                    height={625}
                    priority
                    unoptimized
                    className="w-full h-full object-cover grayscale-[10%] transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Text Side with Parallax */}
          <motion.div
            style={{ y: y2 }}
            className="lg:w-1/2"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="h-[1px] w-12 bg-accent-gold" />
                <span className="text-accent-gold font-bold tracking-[0.2em] uppercase text-sm">
                  About Me
                </span>
              </div>

              <h2 className="text-5xl md:text-6xl lg:text-8xl font-heading font-extrabold mb-8 leading-[1.05] tracking-tight">
                About <span className="text-accent-gold italic font-light">Me</span>
              </h2>
              
              <p className="text-xl text-muted mb-12 font-body leading-relaxed max-w-xl font-light">
                Hello! I'm Elshaday Dagne Demessie, a passionate Full-Stack Developer with a strong foundation in building modern, responsive, and scalable web applications.
              </p>

              <div className="grid grid-cols-2 gap-x-8 gap-y-12 mb-14">
                {stats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + 0.3, duration: 0.8, ease: "easeOut" }}
                    className="flex flex-col relative group"
                  >
                    <div className="absolute -left-4 top-0 w-1 h-full bg-white/5 group-hover:bg-white/20 transition-colors duration-500 rounded-full origin-bottom scale-y-0 group-hover:scale-y-100" />
                    
                    <span className="text-4xl md:text-5xl font-heading font-extrabold text-foreground mb-2 tracking-tight transition-colors duration-500">
                      {stat.value}
                    </span>
                    <span className="text-muted font-medium uppercase tracking-[0.15em] text-xs">
                      {stat.label}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Download CV */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
              >
                <a
                  href="/Elshaday-Dagne-Demessie-websiteCvFeb2026.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  download="Elshaday-Dagne-Demessie-CV.pdf"
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-accent-gold text-background font-bold rounded-full transition-all duration-300 hover:bg-accent-gold/90 text-sm uppercase tracking-widest"
                >
                  <Download size={18} className="group-hover:-translate-y-0.5 transition-transform duration-300" />
                  Download CV
                </a>
                <a
                  href="/Elshaday-Dagne-Demessie-websiteCvFeb2026.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 px-8 py-4 border border-white/10 text-foreground font-bold rounded-full transition-all duration-300 hover:border-white/30 hover:bg-white/5 text-sm uppercase tracking-widest"
                >
                  <FileText size={18} className="text-muted group-hover:text-foreground transition-colors" />
                  View PDF
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
